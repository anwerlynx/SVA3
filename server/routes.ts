import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

// ─── Auth Middleware ──────────────────────────────────────────────────────────
function requireAdmin(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!token) return res.status(401).json({ message: "Unauthorized" });
  // In production: verify JWT. For now, accept any non-empty token.
  next();
}

// ─── Validation Helper ────────────────────────────────────────────────────────
function validate<T>(schema: z.ZodSchema<T>, data: unknown): T {
  return schema.parse(data);
}

export async function registerRoutes(app: Express): Promise<Server> {

  // ── Auth ──────────────────────────────────────────────────────────────────
  app.post("/api/admin/auth/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      const admin = await storage.getAdminByEmail(email);
      if (!admin || admin.passwordHash !== password) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      if (!admin.isActive) {
        return res.status(403).json({ message: "Account disabled" });
      }
      await storage.updateAdminLastLogin(admin.id);
      // In production: return signed JWT
      res.json({ token: `mock-token-${admin.id}`, admin: { id: admin.id, name: admin.name, email: admin.email, role: admin.role } });
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
    const items = await storage.getActivities({ isActive: true });
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

  const httpServer = createServer(app);
  return httpServer;
}
