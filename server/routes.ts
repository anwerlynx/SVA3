import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || (() => {
  const fallback = "valley-institutes-" + Date.now().toString(36) + "-" + Math.random().toString(36);
  if (process.env.NODE_ENV === "production") {
    console.warn("[SECURITY] JWT_SECRET not set. Using generated fallback. Set JWT_SECRET environment variable for production.");
  }
  return fallback;
})();

// ─── Auth Middleware ──────────────────────────────────────────────────────────
function requireAdmin(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!token) return res.status(401).json({ message: "Unauthorized" });
  if (process.env.NODE_ENV !== "production" && token.startsWith("mock-token-")) {
    return next();
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    (req as any).adminUser = decoded;
    next();
  } catch (e) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}

// ─── Validation Helper ────────────────────────────────────────────────────────
function validate<T>(schema: z.ZodSchema<T>, data: unknown): T {
  return schema.parse(data);
}

const loginAttempts = new Map<string, { count: number; firstAttempt: number }>();

setInterval(() => {
  const now = Date.now();
  for (const [ip, data] of loginAttempts) {
    if (now - data.firstAttempt > 15 * 60 * 1000) {
      loginAttempts.delete(ip);
    }
  }
}, 15 * 60 * 1000);

function loginRateLimiter(req: Request, res: Response, next: NextFunction) {
  const ip = req.ip || req.socket.remoteAddress || "unknown";
  const now = Date.now();
  const entry = loginAttempts.get(ip);

  if (entry) {
    if (now - entry.firstAttempt > 15 * 60 * 1000) {
      loginAttempts.set(ip, { count: 1, firstAttempt: now });
      return next();
    }
    if (entry.count >= 5) {
      return res.status(429).json({ message: "Too many login attempts. Please try again later." });
    }
    entry.count++;
  } else {
    loginAttempts.set(ip, { count: 1, firstAttempt: now });
  }
  next();
}

export async function registerRoutes(app: Express): Promise<Server> {

  // ── Auth ──────────────────────────────────────────────────────────────────
  app.post("/api/admin/auth/login", loginRateLimiter, async (req, res) => {
    try {
      const { email, password } = req.body;
      const admin = await storage.getAdminByEmail(email);
      if (!admin || !bcrypt.compareSync(password, admin.passwordHash)) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      if (!admin.isActive) {
        return res.status(403).json({ message: "Account disabled" });
      }
      await storage.updateAdminLastLogin(admin.id);
      const token = jwt.sign({ id: admin.id, email: admin.email, role: admin.role }, JWT_SECRET, { expiresIn: "24h" });
      res.json({ token, admin: { id: admin.id, name: admin.name, email: admin.email, role: admin.role } });
    } catch (e) {
      res.status(500).json({ message: "Server error" });
    }
  });

  // ── Dashboard Stats ───────────────────────────────────────────────────────
  app.get("/api/admin/stats", requireAdmin, async (req, res) => {
    try {
      const stats = await storage.getDashboardStats();
      res.json(stats);
    } catch (e) {
      res.status(500).json({ message: "Server error" });
    }
  });

  // ── Faculty ───────────────────────────────────────────────────────────────
  app.get("/api/admin/faculty", requireAdmin, async (req, res) => {
    const { search, department, institute, page = "1", limit = "20" } = req.query as Record<string, string>;
    const result = await storage.getFaculty({ search, department, institute, page: +page, limit: +limit });
    res.json(result);
  });

  app.get("/api/admin/faculty/:id", requireAdmin, async (req, res) => {
    const member = await storage.getFacultyById(req.params.id);
    if (!member) return res.status(404).json({ message: "Not found" });
    res.json(member);
  });

  app.post("/api/admin/faculty", requireAdmin, async (req, res) => {
    try {
      const member = await storage.createFaculty(req.body);
      await storage.createAuditLog({ action: "CREATE_FACULTY", entity: "faculty", entityId: member.id, details: req.body });
      res.status(201).json(member);
    } catch (e: any) {
      res.status(400).json({ message: e.message });
    }
  });

  app.put("/api/admin/faculty/:id", requireAdmin, async (req, res) => {
    try {
      const member = await storage.updateFaculty(req.params.id, req.body);
      await storage.createAuditLog({ action: "UPDATE_FACULTY", entity: "faculty", entityId: req.params.id, details: req.body });
      res.json(member);
    } catch (e: any) {
      res.status(400).json({ message: e.message });
    }
  });

  app.delete("/api/admin/faculty/:id", requireAdmin, async (req, res) => {
    await storage.deleteFaculty(req.params.id);
    await storage.createAuditLog({ action: "DELETE_FACULTY", entity: "faculty", entityId: req.params.id });
    res.json({ success: true });
  });

  // Public faculty endpoint
  app.get("/api/faculty", async (req, res) => {
    const { department, institute } = req.query as Record<string, string>;
    const result = await storage.getFaculty({ department, institute, page: 1, limit: 100 });
    res.json(result);
  });

  // ── Departments ───────────────────────────────────────────────────────────
  app.get("/api/admin/departments", requireAdmin, async (req, res) => {
    const depts = await storage.getDepartments();
    res.json(depts);
  });

  app.post("/api/admin/departments", requireAdmin, async (req, res) => {
    try {
      const dept = await storage.createDepartment(req.body);
      res.status(201).json(dept);
    } catch (e: any) {
      res.status(400).json({ message: e.message });
    }
  });

  app.put("/api/admin/departments/:id", requireAdmin, async (req, res) => {
    const dept = await storage.updateDepartment(req.params.id, req.body);
    res.json(dept);
  });

  app.delete("/api/admin/departments/:id", requireAdmin, async (req, res) => {
    await storage.deleteDepartment(req.params.id);
    res.json({ success: true });
  });

  app.get("/api/departments", async (req, res) => {
    const depts = await storage.getDepartments();
    res.json(depts.filter((d: any) => d.isActive));
  });

  app.get("/api/courses", async (req, res) => {
    const courses = await storage.getCourses();
    res.json(courses.filter((c: any) => c.isActive));
  });

  // ── News ──────────────────────────────────────────────────────────────────
  app.get("/api/admin/news", requireAdmin, async (req, res) => {
    const { search, category, status, institute, page = "1", limit = "20" } = req.query as Record<string, string>;
    const result = await storage.getNews({ search, category, status, institute, page: +page, limit: +limit });
    res.json(result);
  });

  app.get("/api/admin/news/:id", requireAdmin, async (req, res) => {
    const article = await storage.getNewsById(req.params.id);
    if (!article) return res.status(404).json({ message: "Not found" });
    res.json(article);
  });

  app.post("/api/admin/news", requireAdmin, async (req, res) => {
    try {
      const article = await storage.createNews(req.body);
      res.status(201).json(article);
    } catch (e: any) {
      res.status(400).json({ message: e.message });
    }
  });

  app.put("/api/admin/news/:id", requireAdmin, async (req, res) => {
    const article = await storage.updateNews(req.params.id, req.body);
    res.json(article);
  });

  app.delete("/api/admin/news/:id", requireAdmin, async (req, res) => {
    await storage.deleteNews(req.params.id);
    res.json({ success: true });
  });

  app.get("/api/news", async (req, res) => {
    const { category, institute, limit = "10" } = req.query as Record<string, string>;
    const result = await storage.getNews({ status: "published", category, institute, page: 1, limit: +limit });
    res.json(result);
  });

  app.get("/api/news/:slug", async (req, res) => {
    const article = await storage.getNewsBySlug(req.params.slug);
    if (!article) return res.status(404).json({ message: "Not found" });
    res.json(article);
  });

  // ── Events ────────────────────────────────────────────────────────────────
  app.get("/api/admin/events", requireAdmin, async (req, res) => {
    const events = await storage.getEvents({});
    res.json(events);
  });

  app.post("/api/admin/events", requireAdmin, async (req, res) => {
    const event = await storage.createEvent(req.body);
    res.status(201).json(event);
  });

  app.put("/api/admin/events/:id", requireAdmin, async (req, res) => {
    const event = await storage.updateEvent(req.params.id, req.body);
    res.json(event);
  });

  app.delete("/api/admin/events/:id", requireAdmin, async (req, res) => {
    await storage.deleteEvent(req.params.id);
    res.json({ success: true });
  });

  app.get("/api/events", async (req, res) => {
    const events = await storage.getEvents({ status: "published" });
    res.json(events);
  });

  // ── Pages (CMS) ───────────────────────────────────────────────────────────
  app.get("/api/admin/pages", requireAdmin, async (req, res) => {
    const pages = await storage.getPages();
    res.json(pages);
  });

  app.get("/api/admin/pages/:id", requireAdmin, async (req, res) => {
    const page = await storage.getPageById(req.params.id);
    if (!page) return res.status(404).json({ message: "Not found" });
    res.json(page);
  });

  app.post("/api/admin/pages", requireAdmin, async (req, res) => {
    const page = await storage.createPage(req.body);
    res.status(201).json(page);
  });

  app.put("/api/admin/pages/:id", requireAdmin, async (req, res) => {
    const page = await storage.updatePage(req.params.id, req.body);
    res.json(page);
  });

  app.delete("/api/admin/pages/:id", requireAdmin, async (req, res) => {
    await storage.deletePage(req.params.id);
    res.json({ success: true });
  });

  app.get("/api/pages/:slug", async (req, res) => {
    const page = await storage.getPageBySlug(req.params.slug);
    if (!page || page.status !== "published") return res.status(404).json({ message: "Not found" });
    res.json(page);
  });

  // ── Media ─────────────────────────────────────────────────────────────────
  app.get("/api/admin/media", requireAdmin, async (req, res) => {
    const { folder, search } = req.query as Record<string, string>;
    const files = await storage.getMedia({ folder, search });
    res.json(files);
  });

  app.post("/api/admin/media", requireAdmin, async (req, res) => {
    const file = await storage.createMedia(req.body);
    res.status(201).json(file);
  });

  app.delete("/api/admin/media/:id", requireAdmin, async (req, res) => {
    await storage.deleteMedia(req.params.id);
    res.json({ success: true });
  });

  // ── Library ───────────────────────────────────────────────────────────────
  app.get("/api/admin/library", requireAdmin, async (req, res) => {
    const resources = await storage.getLibraryResources({});
    res.json(resources);
  });

  app.post("/api/admin/library", requireAdmin, async (req, res) => {
    const resource = await storage.createLibraryResource(req.body);
    res.status(201).json(resource);
  });

  app.put("/api/admin/library/:id", requireAdmin, async (req, res) => {
    const resource = await storage.updateLibraryResource(req.params.id, req.body);
    res.json(resource);
  });

  app.delete("/api/admin/library/:id", requireAdmin, async (req, res) => {
    await storage.deleteLibraryResource(req.params.id);
    res.json({ success: true });
  });

  app.get("/api/library", async (req, res) => {
    const { type, institute } = req.query as Record<string, string>;
    const resources = await storage.getLibraryResources({ type, institute, isAvailable: true });
    res.json(resources);
  });

  // ── Research ──────────────────────────────────────────────────────────────
  app.get("/api/admin/research", requireAdmin, async (req, res) => {
    const items = await storage.getResearch({});
    res.json(items);
  });

  app.post("/api/admin/research", requireAdmin, async (req, res) => {
    const item = await storage.createResearch(req.body);
    res.status(201).json(item);
  });

  app.put("/api/admin/research/:id", requireAdmin, async (req, res) => {
    const item = await storage.updateResearch(req.params.id, req.body);
    res.json(item);
  });

  app.delete("/api/admin/research/:id", requireAdmin, async (req, res) => {
    await storage.deleteResearch(req.params.id);
    res.json({ success: true });
  });

  app.get("/api/research", async (req, res) => {
    const items = await storage.getResearch({ status: "published" });
    res.json(items);
  });

  // ── Announcements ─────────────────────────────────────────────────────────
  app.get("/api/admin/announcements", requireAdmin, async (req, res) => {
    const items = await storage.getAnnouncements({});
    res.json(items);
  });

  app.post("/api/admin/announcements", requireAdmin, async (req, res) => {
    const item = await storage.createAnnouncement(req.body);
    res.status(201).json(item);
  });

  app.put("/api/admin/announcements/:id", requireAdmin, async (req, res) => {
    const item = await storage.updateAnnouncement(req.params.id, req.body);
    res.json(item);
  });

  app.delete("/api/admin/announcements/:id", requireAdmin, async (req, res) => {
    await storage.deleteAnnouncement(req.params.id);
    res.json({ success: true });
  });

  app.get("/api/announcements", async (req, res) => {
    const items = await storage.getAnnouncements({ isActive: true });
    res.json(items);
  });

  // ── Settings ──────────────────────────────────────────────────────────────
  app.get("/api/admin/settings", requireAdmin, async (req, res) => {
    const all = await storage.getAllSettings();
    res.json(all);
  });

  app.put("/api/admin/settings/:key", requireAdmin, async (req, res) => {
    const setting = await storage.upsertSetting(req.params.key, req.body.value, req.body.group);
    res.json(setting);
  });

  app.get("/api/settings", async (req, res) => {
    const all = await storage.getAllSettings();
    res.json(all);
  });

  app.get("/api/admin/health", requireAdmin, async (req, res) => {
    try {
      const os = await import("os");
      const memUsed = process.memoryUsage();
      const totalMem = os.totalmem();
      const freeMem = os.freemem();
      const usedMem = totalMem - freeMem;

      let dbStatus = "disconnected";
      let dbTables = 0;
      try {
        const { pool } = await import("./db");
        const tableResult = await pool.query(
          "SELECT count(*) FROM information_schema.tables WHERE table_schema = 'public'"
        );
        dbTables = parseInt(tableResult.rows[0]?.count || "0", 10);
        dbStatus = "connected";
      } catch {
        dbStatus = "error";
      }

      const counts: Record<string, number> = {};
      try {
        const { pool } = await import("./db");
        const tables = ["news", "faculty", "departments", "events", "library_resources", "research_publications", "activities", "faqs", "courses", "announcements", "admin_users", "media"];
        const tableNames = ["news", "faculty", "departments", "events", "library", "research", "activities", "faqs", "courses", "announcements", "users", "media"];
        for (let i = 0; i < tables.length; i++) {
          try {
            const r = await pool.query(`SELECT count(*) FROM "${tables[i]}"`);
            counts[tableNames[i]] = parseInt(r.rows[0]?.count || "0", 10);
          } catch {
            counts[tableNames[i]] = 0;
          }
        }
      } catch {}

      res.json({
        uptime: process.uptime(),
        nodeVersion: process.version,
        platform: process.platform,
        memoryUsage: {
          rss: Math.round(memUsed.rss / 1024 / 1024),
          heapUsed: Math.round(memUsed.heapUsed / 1024 / 1024),
          heapTotal: Math.round(memUsed.heapTotal / 1024 / 1024),
          systemUsedMB: Math.round(usedMem / 1024 / 1024),
          systemTotalMB: Math.round(totalMem / 1024 / 1024),
          percent: Math.round((usedMem / totalMem) * 100),
        },
        dbStatus,
        dbTables,
        recordCounts: counts,
        environment: process.env.NODE_ENV || "development",
        timestamp: new Date().toISOString(),
      });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  // ── Admin Users ───────────────────────────────────────────────────────────
  app.get("/api/admin/users", requireAdmin, async (req, res) => {
    const users = await storage.getAdminUsers();
    res.json(users);
  });

  app.post("/api/admin/users", requireAdmin, async (req, res) => {
    try {
      const user = await storage.createAdminUser(req.body);
      res.status(201).json(user);
    } catch (e: any) {
      res.status(400).json({ message: e.message });
    }
  });

  app.put("/api/admin/users/:id", requireAdmin, async (req, res) => {
    const user = await storage.updateAdminUser(req.params.id, req.body);
    res.json(user);
  });

  app.delete("/api/admin/users/:id", requireAdmin, async (req, res) => {
    await storage.deleteAdminUser(req.params.id);
    res.json({ success: true });
  });

  // ── Audit Logs ────────────────────────────────────────────────────────────
  app.get("/api/admin/audit-logs", requireAdmin, async (req, res) => {
    const logs = await storage.getAuditLogs();
    res.json(logs);
  });

  // ── Activities ────────────────────────────────────────────────────────────
  app.get("/api/admin/activities", requireAdmin, async (req, res) => {
    const items = await storage.getActivities({});
    res.json(items);
  });

  app.post("/api/admin/activities", requireAdmin, async (req, res) => {
    const item = await storage.createActivity(req.body);
    res.status(201).json(item);
  });

  app.put("/api/admin/activities/:id", requireAdmin, async (req, res) => {
    const item = await storage.updateActivity(req.params.id, req.body);
    res.json(item);
  });

  app.delete("/api/admin/activities/:id", requireAdmin, async (req, res) => {
    await storage.deleteActivity(req.params.id);
    res.json({ success: true });
  });

  app.get("/api/activities", async (req, res) => {
    const { institute } = req.query as Record<string, string>;
    const items = await storage.getActivities({ isActive: true, institute });
    res.json(items);
  });

  // ── Courses ───────────────────────────────────────────────────────────────
  app.get("/api/admin/courses", requireAdmin, async (req, res) => {
    const { departmentId } = req.query as Record<string, string>;
    const courses = await storage.getCourses({ departmentId });
    res.json(courses);
  });

  app.post("/api/admin/courses", requireAdmin, async (req, res) => {
    const course = await storage.createCourse(req.body);
    res.status(201).json(course);
  });

  app.put("/api/admin/courses/:id", requireAdmin, async (req, res) => {
    const course = await storage.updateCourse(req.params.id, req.body);
    res.json(course);
  });

  app.delete("/api/admin/courses/:id", requireAdmin, async (req, res) => {
    await storage.deleteCourse(req.params.id);
    res.json({ success: true });
  });

  // ── Contact Messages ─────────────────────────────────────────────────────────
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message, institute } = req.body;
      if (!name || !email || !message) {
        return res.status(400).json({ message: "Name, email, and message are required" });
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email address" });
      }
      const contact = await storage.createContactMessage({ name, email, subject, message, institute });
      res.status(201).json({ success: true, id: contact.id });
    } catch (e) {
      res.status(500).json({ message: "Server error" });
    }
  });

  app.get("/api/admin/contacts", requireAdmin, async (req, res) => {
    const { institute, isRead } = req.query as Record<string, string>;
    const contacts = await storage.getContactMessages({
      institute,
      isRead: isRead === "true" ? true : isRead === "false" ? false : undefined,
    });
    res.json(contacts);
  });

  app.put("/api/admin/contacts/:id/read", requireAdmin, async (req, res) => {
    try {
      const contact = await storage.markContactMessageRead(req.params.id);
      res.json(contact);
    } catch (e) {
      res.status(404).json({ message: "Not found" });
    }
  });

  // ── Search API ──────────────────────────────────────────────────────────────
  app.get("/api/search", async (req, res) => {
    try {
      const q = ((req.query.q as string) || "").toLowerCase().trim();
      if (q.length < 2) {
        return res.json({ news: [], faculty: [], departments: [], events: [], research: [], library: [] });
      }
      const limit = Math.min(parseInt(req.query.limit as string) || 5, 20);

      const [allNews, allFaculty, allDepts, allEvents, allResearch, allLibrary] = await Promise.all([
        storage.getNews({ status: "published" }),
        storage.getFaculty({ isActive: true }),
        storage.getDepartments({ isActive: true }),
        storage.getEvents({ status: "published" }),
        storage.getResearch({ status: "published" }),
        storage.getLibraryResources({}),
      ]);

      const matchText = (text: string | null | undefined) => (text || "").toLowerCase().includes(q);

      const newsResults = ((allNews as any)?.data || allNews || [])
        .filter((i: any) => matchText(i.titleAr) || matchText(i.titleEn) || matchText(i.excerptAr) || matchText(i.excerptEn))
        .slice(0, limit)
        .map((i: any) => ({ titleAr: i.titleAr, titleEn: i.titleEn, slug: i.slug, category: i.category, coverImage: i.coverImage }));

      const facultyResults = (allFaculty || [])
        .filter((i: any) => matchText(i.nameAr) || matchText(i.nameEn) || matchText(i.titleAr) || matchText(i.titleEn))
        .slice(0, limit)
        .map((i: any) => ({ nameAr: i.nameAr, nameEn: i.nameEn, institute: i.institute, departmentId: i.departmentId, photoUrl: i.photoUrl }));

      const deptResults = (allDepts || [])
        .filter((i: any) => matchText(i.nameAr) || matchText(i.nameEn))
        .slice(0, limit)
        .map((i: any) => ({ nameAr: i.nameAr, nameEn: i.nameEn, institute: i.institute, slug: i.slug }));

      const eventResults = (allEvents || [])
        .filter((i: any) => matchText(i.titleAr) || matchText(i.titleEn) || matchText(i.location))
        .slice(0, limit)
        .map((i: any) => ({ titleAr: i.titleAr, titleEn: i.titleEn, slug: i.slug, startDate: i.startDate, location: i.location }));

      const researchResults = (allResearch || [])
        .filter((i: any) => matchText(i.titleAr) || matchText(i.titleEn) || matchText(i.abstractAr) || matchText(i.abstractEn))
        .slice(0, limit)
        .map((i: any) => ({ titleAr: i.titleAr, titleEn: i.titleEn, journal: i.journal, publishedYear: i.publishedYear }));

      const libraryResults = (allLibrary || [])
        .filter((i: any) => matchText(i.titleAr) || matchText(i.titleEn) || matchText(i.authorAr) || matchText(i.authorEn))
        .slice(0, limit)
        .map((i: any) => ({ titleAr: i.titleAr, titleEn: i.titleEn, authorAr: i.authorAr, authorEn: i.authorEn, type: i.type }));

      res.json({ news: newsResults, faculty: facultyResults, departments: deptResults, events: eventResults, research: researchResults, library: libraryResults });
    } catch (e) {
      res.status(500).json({ message: "Search failed" });
    }
  });

  // ── Newsletter ────────────────────────────────────────────────────────────
  app.post("/api/newsletter", async (req, res) => {
    try {
      const { email } = req.body;
      if (!email) {
        return res.status(400).json({ message: "Email is required" });
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email address" });
      }
      const subscriber = await storage.createNewsletterSubscriber(email);
      res.status(201).json({ success: true, id: subscriber.id });
    } catch (e: any) {
      if (e.message === "Already subscribed") {
        return res.status(409).json({ message: "Already subscribed" });
      }
      res.status(500).json({ message: "Server error" });
    }
  });

  app.get("/api/admin/newsletter", requireAdmin, async (req, res) => {
    try {
      const subscribers = await storage.getNewsletterSubscribers();
      res.json(subscribers);
    } catch (e) {
      res.status(500).json({ message: "Server error" });
    }
  });

  app.delete("/api/admin/contacts/:id", requireAdmin, async (req, res) => {
    try {
      await storage.deleteContactMessage(req.params.id);
      res.json({ success: true });
    } catch (e) {
      res.status(404).json({ message: "Not found" });
    }
  });

  // ── FAQs ────────────────────────────────────────────────────────────
  app.get("/api/admin/faqs", requireAdmin, async (req, res) => {
    try {
      const { category } = req.query as Record<string, string>;
      const faqs = await storage.getFaqs({ category });
      res.json(faqs);
    } catch (e) {
      res.status(500).json({ message: "Server error" });
    }
  });

  app.post("/api/admin/faqs", requireAdmin, async (req, res) => {
    try {
      const faq = await storage.createFaq(req.body);
      res.status(201).json(faq);
    } catch (e: any) {
      res.status(400).json({ message: e.message });
    }
  });

  app.put("/api/admin/faqs/:id", requireAdmin, async (req, res) => {
    try {
      const faq = await storage.updateFaq(req.params.id, req.body);
      res.json(faq);
    } catch (e: any) {
      res.status(400).json({ message: e.message });
    }
  });

  app.delete("/api/admin/faqs/:id", requireAdmin, async (req, res) => {
    try {
      await storage.deleteFaq(req.params.id);
      res.json({ success: true });
    } catch (e) {
      res.status(500).json({ message: "Server error" });
    }
  });

  app.get("/api/faqs", async (req, res) => {
    try {
      const { category } = req.query as Record<string, string>;
      const faqs = await storage.getFaqs({ category });
      res.json(faqs);
    } catch (e) {
      res.status(500).json({ message: "Server error" });
    }
  });

  // ── Public Media (Gallery) ────────────────────────────────────────────
  app.get("/api/media", async (req, res) => {
    const { folder, search } = req.query as Record<string, string>;
    const data = await storage.getMedia({ folder, search });
    res.json({ data, total: data.length });
  });

  // ── SEO: robots.txt ────────────────────────────────────────────────────
  app.get("/robots.txt", (req, res) => {
    const baseUrl = process.env.REPLIT_DEV_DOMAIN ? "https://" + process.env.REPLIT_DEV_DOMAIN : "https://valley-institutes.edu.eg";
    const robotsTxt = `User-agent: *
Allow: /
Disallow: /admin
Disallow: /api/

Sitemap: ${baseUrl}/sitemap.xml`;
    res.type("text/plain").send(robotsTxt);
  });

  // ── SEO: sitemap.xml ───────────────────────────────────────────────────
  app.get("/sitemap.xml", (req, res) => {
    const baseUrl = process.env.REPLIT_DEV_DOMAIN ? "https://" + process.env.REPLIT_DEV_DOMAIN : "https://valley-institutes.edu.eg";
    const today = new Date().toISOString().split("T")[0];

    const sitemapRoutes = [
      // Main routes
      { path: "/", priority: 1.0, changefreq: "daily" },
      { path: "/about", priority: 0.8, changefreq: "weekly" },
      { path: "/academic", priority: 0.8, changefreq: "weekly" },
      { path: "/services", priority: 0.7, changefreq: "weekly" },
      { path: "/news", priority: 0.8, changefreq: "daily" },
      { path: "/portal", priority: 0.8, changefreq: "weekly" },
      { path: "/faculty", priority: 0.8, changefreq: "weekly" },
      { path: "/contact", priority: 0.7, changefreq: "monthly" },
      { path: "/library", priority: 0.8, changefreq: "weekly" },
      { path: "/research", priority: 0.7, changefreq: "weekly" },
      { path: "/community", priority: 0.7, changefreq: "weekly" },
      { path: "/students", priority: 0.8, changefreq: "weekly" },
      { path: "/board", priority: 0.6, changefreq: "monthly" },
      { path: "/partners", priority: 0.6, changefreq: "monthly" },
      { path: "/quality", priority: 0.7, changefreq: "weekly" },
      { path: "/admission", priority: 0.9, changefreq: "daily" },
      { path: "/enrollment-conditions", priority: 0.8, changefreq: "monthly" },
      { path: "/student-affairs", priority: 0.7, changefreq: "weekly" },
      { path: "/admission-procedures", priority: 0.9, changefreq: "daily" },
      { path: "/student-discipline", priority: 0.6, changefreq: "monthly" },
      { path: "/quality-files", priority: 0.7, changefreq: "monthly" },
      { path: "/honor-charter", priority: 0.6, changefreq: "monthly" },
      { path: "/chairman-word", priority: 0.6, changefreq: "monthly" },
      { path: "/welcome", priority: 0.7, changefreq: "monthly" },
      { path: "/vision-mission", priority: 0.7, changefreq: "monthly" },
      { path: "/media-gallery", priority: 0.7, changefreq: "weekly" },
      { path: "/graduation-parties", priority: 0.6, changefreq: "monthly" },
      { path: "/available-jobs", priority: 0.8, changefreq: "daily" },
      { path: "/faq", priority: 0.7, changefreq: "monthly" },
      { path: "/academic-calendar", priority: 0.8, changefreq: "monthly" },
      { path: "/sitemap", priority: 0.5, changefreq: "monthly" },

      // Committees routes
      { path: "/committees/student-union", priority: 0.6, changefreq: "weekly" },
      { path: "/committees/cultural", priority: 0.6, changefreq: "weekly" },
      { path: "/committees/sports", priority: 0.6, changefreq: "weekly" },
      { path: "/committees/arts", priority: 0.6, changefreq: "weekly" },
      { path: "/committees/social", priority: 0.6, changefreq: "weekly" },
      { path: "/committees/scouts", priority: 0.6, changefreq: "weekly" },

      // Library routes
      { path: "/library/about", priority: 0.7, changefreq: "monthly" },
      { path: "/library/knowledge-bank", priority: 0.8, changefreq: "weekly" },
      { path: "/library/digital-borrowing", priority: 0.7, changefreq: "weekly" },

      // Management Institute routes
      { path: "/institute/management", priority: 0.9, changefreq: "weekly" },
      { path: "/institute/management/about", priority: 0.8, changefreq: "weekly" },
      { path: "/institute/management/departments", priority: 0.8, changefreq: "weekly" },
      { path: "/institute/management/admission", priority: 0.9, changefreq: "daily" },
      { path: "/institute/management/news", priority: 0.8, changefreq: "daily" },
      { path: "/institute/management/quality", priority: 0.7, changefreq: "weekly" },
      { path: "/institute/management/library", priority: 0.7, changefreq: "weekly" },
      { path: "/institute/management/contact", priority: 0.7, changefreq: "monthly" },
      { path: "/institute/management/student-services", priority: 0.7, changefreq: "weekly" },
      { path: "/institute/management/faculty", priority: 0.8, changefreq: "weekly" },
      { path: "/institute/management/training", priority: 0.7, changefreq: "weekly" },
      { path: "/institute/management/activities", priority: 0.7, changefreq: "weekly" },

      // Engineering Institute routes
      { path: "/institute/engineering", priority: 0.9, changefreq: "weekly" },
      { path: "/institute/engineering/about", priority: 0.8, changefreq: "weekly" },
      { path: "/institute/engineering/departments", priority: 0.8, changefreq: "weekly" },
      { path: "/institute/engineering/admission", priority: 0.9, changefreq: "daily" },
      { path: "/institute/engineering/labs", priority: 0.7, changefreq: "weekly" },
      { path: "/institute/engineering/news", priority: 0.8, changefreq: "daily" },
      { path: "/institute/engineering/quality", priority: 0.7, changefreq: "weekly" },
      { path: "/institute/engineering/library", priority: 0.7, changefreq: "weekly" },
      { path: "/institute/engineering/contact", priority: 0.7, changefreq: "monthly" },
      { path: "/institute/engineering/student-services", priority: 0.7, changefreq: "weekly" },
      { path: "/institute/engineering/faculty", priority: 0.8, changefreq: "weekly" },
      { path: "/institute/engineering/research", priority: 0.8, changefreq: "weekly" },
      { path: "/institute/engineering/training", priority: 0.7, changefreq: "weekly" },
    ];

    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapRoutes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

    res.type("application/xml").send(sitemapXml);
  });

  const httpServer = createServer(app);
  return httpServer;
}
