import { randomUUID } from "crypto";
import bcrypt from "bcryptjs";
import type {
  User, InsertUser, AdminUser, Department, Faculty, News, Event,
  Page, Media, LibraryResource, Research, Announcement, Setting,
  Activity, Course, AuditLog, ContactMessage, NewsletterSubscriber, FAQ
} from "@shared/schema";
import { DatabaseStorage } from "./dbStorage";

// ─── Interfaces ───────────────────────────────────────────────────────────────
export interface IStorage {
  // Auth
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getAdminByEmail(email: string): Promise<AdminUser | undefined>;
  updateAdminLastLogin(id: string): Promise<void>;

  // Dashboard
  getDashboardStats(): Promise<Record<string, number>>;

  // Admin Users
  getAdminUsers(): Promise<AdminUser[]>;
  createAdminUser(data: Partial<AdminUser>): Promise<AdminUser>;
  updateAdminUser(id: string, data: Partial<AdminUser>): Promise<AdminUser>;
  deleteAdminUser(id: string): Promise<void>;

  // Faculty
  getFaculty(opts: { search?: string; department?: string; institute?: string; page?: number; limit?: number }): Promise<{ data: Faculty[]; total: number }>;
  getFacultyById(id: string): Promise<Faculty | undefined>;
  createFaculty(data: Partial<Faculty>): Promise<Faculty>;
  updateFaculty(id: string, data: Partial<Faculty>): Promise<Faculty>;
  deleteFaculty(id: string): Promise<void>;

  // Departments
  getDepartments(): Promise<Department[]>;
  getDepartmentById(id: string): Promise<Department | undefined>;
  createDepartment(data: Partial<Department>): Promise<Department>;
  updateDepartment(id: string, data: Partial<Department>): Promise<Department>;
  deleteDepartment(id: string): Promise<void>;

  // News
  getNews(opts: { search?: string; category?: string; status?: string; institute?: string; page?: number; limit?: number }): Promise<{ data: News[]; total: number }>;
  getNewsById(id: string): Promise<News | undefined>;
  getNewsBySlug(slug: string): Promise<News | undefined>;
  createNews(data: Partial<News>): Promise<News>;
  updateNews(id: string, data: Partial<News>): Promise<News>;
  deleteNews(id: string): Promise<void>;

  // Events
  getEvents(opts: { status?: string }): Promise<Event[]>;
  createEvent(data: Partial<Event>): Promise<Event>;
  updateEvent(id: string, data: Partial<Event>): Promise<Event>;
  deleteEvent(id: string): Promise<void>;

  // Pages
  getPages(): Promise<Page[]>;
  getPageById(id: string): Promise<Page | undefined>;
  getPageBySlug(slug: string): Promise<Page | undefined>;
  createPage(data: Partial<Page>): Promise<Page>;
  updatePage(id: string, data: Partial<Page>): Promise<Page>;
  deletePage(id: string): Promise<void>;

  // Media
  getMedia(opts: { folder?: string; search?: string }): Promise<Media[]>;
  createMedia(data: Partial<Media>): Promise<Media>;
  deleteMedia(id: string): Promise<void>;

  // Library
  getLibraryResources(opts: { type?: string; institute?: string; isAvailable?: boolean }): Promise<LibraryResource[]>;
  createLibraryResource(data: Partial<LibraryResource>): Promise<LibraryResource>;
  updateLibraryResource(id: string, data: Partial<LibraryResource>): Promise<LibraryResource>;
  deleteLibraryResource(id: string): Promise<void>;

  // Research
  getResearch(opts: { status?: string; institute?: string }): Promise<Research[]>;
  createResearch(data: Partial<Research>): Promise<Research>;
  updateResearch(id: string, data: Partial<Research>): Promise<Research>;
  deleteResearch(id: string): Promise<void>;

  // Announcements
  getAnnouncements(opts: { isActive?: boolean; institute?: string }): Promise<Announcement[]>;
  createAnnouncement(data: Partial<Announcement>): Promise<Announcement>;
  updateAnnouncement(id: string, data: Partial<Announcement>): Promise<Announcement>;
  deleteAnnouncement(id: string): Promise<void>;

  // Settings
  getAllSettings(): Promise<Setting[]>;
  upsertSetting(key: string, value: any, group?: string): Promise<Setting>;

  // Activities
  getActivities(opts: { isActive?: boolean; institute?: string }): Promise<Activity[]>;
  createActivity(data: Partial<Activity>): Promise<Activity>;
  updateActivity(id: string, data: Partial<Activity>): Promise<Activity>;
  deleteActivity(id: string): Promise<void>;

  // Courses
  getCourses(opts: { departmentId?: string }): Promise<Course[]>;
  createCourse(data: Partial<Course>): Promise<Course>;
  updateCourse(id: string, data: Partial<Course>): Promise<Course>;
  deleteCourse(id: string): Promise<void>;

  // Audit Logs
  getAuditLogs(): Promise<AuditLog[]>;
  createAuditLog(data: Partial<AuditLog>): Promise<AuditLog>;

  // Contact Messages
  getContactMessages(opts: { institute?: string; isRead?: boolean }): Promise<ContactMessage[]>;
  createContactMessage(data: Partial<ContactMessage>): Promise<ContactMessage>;
  markContactMessageRead(id: string): Promise<ContactMessage>;
  deleteContactMessage(id: string): Promise<void>;

  // Newsletter
  createNewsletterSubscriber(email: string): Promise<NewsletterSubscriber>;
  getNewsletterSubscribers(): Promise<NewsletterSubscriber[]>;

  // FAQs
  getFaqs(opts: { category?: string }): Promise<FAQ[]>;
  createFaq(data: Partial<FAQ>): Promise<FAQ>;
  updateFaq(id: string, data: Partial<FAQ>): Promise<FAQ>;
  deleteFaq(id: string): Promise<void>;
}

// ─── In-Memory Storage (dev mode — replace with DB in production) ─────────────
export class MemStorage implements IStorage {
  private users = new Map<string, User>();
  private adminUsers = new Map<string, AdminUser>();
  private facultyMap = new Map<string, Faculty>();
  private departmentsMap = new Map<string, Department>();
  private newsMap = new Map<string, News>();
  private eventsMap = new Map<string, Event>();
  private pagesMap = new Map<string, Page>();
  private mediaMap = new Map<string, Media>();
  private libraryMap = new Map<string, LibraryResource>();
  private researchMap = new Map<string, Research>();
  private announcementsMap = new Map<string, Announcement>();
  private settingsMap = new Map<string, Setting>();
  private activitiesMap = new Map<string, Activity>();
  private coursesMap = new Map<string, Course>();
  private auditLogsArr: AuditLog[] = [];
  private contactMessagesMap = new Map<string, ContactMessage>();
  private newsletterMap = new Map<string, NewsletterSubscriber>();

  constructor() {
    this._seed();
  }

  private _seed() {
    const now = new Date();

    // Seed admin
    const adminId = randomUUID();
    this.adminUsers.set(adminId, {
      id: adminId, name: "Super Admin", email: "admin@sva.edu.eg",
      passwordHash: bcrypt.hashSync("admin123", 10), role: "super_admin", isActive: true,
      lastLoginAt: null, avatarUrl: null, createdAt: now, updatedAt: now, deletedAt: null
    });

    // Seed departments
    const depts = [
      { nameAr: "هندسة مدنية", nameEn: "Civil Engineering", institute: "engineering", slug: "civil-engineering" },
      { nameAr: "هندسة كهربائية", nameEn: "Electrical Engineering", institute: "engineering", slug: "electrical-engineering" },
      { nameAr: "هندسة معمارية", nameEn: "Architecture", institute: "engineering", slug: "architecture" },
      { nameAr: "محاسبة", nameEn: "Accounting", institute: "management", slug: "accounting" },
      { nameAr: "إدارة أعمال", nameEn: "Business Administration", institute: "management", slug: "business-administration" },
      { nameAr: "نظم المعلومات", nameEn: "Management Information Systems", institute: "management", slug: "mis" },
    ];
    depts.forEach(d => {
      const id = randomUUID();
      this.departmentsMap.set(id, { id, ...d, descriptionAr: null, descriptionEn: null, headFacultyId: null, iconName: null, coverImage: null, isActive: true, sortOrder: 0, createdAt: now, updatedAt: now, deletedAt: null } as any);
    });

    // Seed news
    const newsItems = [
      { titleAr: "مشاركة معاهدنا كراع للمؤتمر الدولى التاسع", titleEn: "Our Institutes Sponsor the 9th International Conference", slug: "9th-international-conference", category: "Conferences", status: "published", isFeatured: true },
      { titleAr: "صور تكريم الطلبة من العميد", titleEn: "Dean Honors Outstanding Students", slug: "dean-honors-students", category: "Honors", status: "published", isFeatured: false },
      { titleAr: "مؤتمر المرأه في العلوم", titleEn: "Women in Science Conference", slug: "women-in-science", category: "Conferences", status: "published", isFeatured: false },
    ];
    newsItems.forEach(n => {
      const id = randomUUID();
      this.newsMap.set(id, { id, ...n, contentAr: null, contentEn: null, excerptAr: null, excerptEn: null, coverImage: "/figmaAssets/rectangle-10.png", tags: [], institute: null, publishedAt: now, scheduledAt: null, viewCount: Math.floor(Math.random() * 1000), authorId: adminId, metaTitle: null, metaDescription: null, createdAt: now, updatedAt: now, deletedAt: null } as any);
    });

    // Seed announcements
    const ann = [
      { titleAr: "بدء التسجيل للفصل الدراسي الجديد", titleEn: "New Semester Registration Open", type: "academic", isActive: true },
      { titleAr: "موعد امتحانات نهاية الفصل", titleEn: "Final Exam Schedule Released", type: "urgent", isActive: true },
    ];
    ann.forEach(a => {
      const id = randomUUID();
      this.announcementsMap.set(id, { id, ...a, contentAr: null, contentEn: null, institute: null, expiresAt: null, createdAt: now, updatedAt: now, deletedAt: null } as any);
    });

    // Seed settings
    const defaultSettings = [
      { key: "site_title_ar", value: "معاهد الوادي العليا", group: "general" },
      { key: "site_title_en", value: "Valley Higher Institutes", group: "general" },
      { key: "contact_email", value: "info@sva.edu.eg", group: "contact" },
      { key: "contact_phone", value: "+20 123 456 7890", group: "contact" },
      { key: "google_analytics_id", value: "", group: "seo" },
      { key: "maintenance_mode", value: false, group: "system" },
    ];
    defaultSettings.forEach(s => {
      const id = randomUUID();
      this.settingsMap.set(s.key, { id, ...s, createdAt: now, updatedAt: now } as any);
    });
  }

  // ── Auth ────────────────────────────────────────────────────────────────────
  async getUser(id: string) { return this.users.get(id); }
  async getUserByUsername(username: string) { return Array.from(this.users.values()).find(u => u.username === username); }
  async createUser(data: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(data).returning();
    return user;
  }
  async getAdminByEmail(email: string) {
    const [admin] = await db.select().from(adminUsers).where(eq(adminUsers.email, email));
    return admin;
  }
  async updateAdminLastLogin(id: string) {
    await db.update(adminUsers).set({ lastLoginAt: new Date() }).where(eq(adminUsers.id, id));
  }

  // ── Dashboard ───────────────────────────────────────────────────────────────
  async getDashboardStats() {
    const [facultyCount] = await db.select({ count: sql<number>`count(*)` }).from(faculty);
    const [deptCount] = await db.select({ count: sql<number>`count(*)` }).from(departments);
    const [newsCount] = await db.select({ count: sql<number>`count(*)` }).from(news);
    const [eventCount] = await db.select({ count: sql<number>`count(*)` }).from(events);
    const [contactCount] = await db.select({ count: sql<number>`count(*)` }).from(contactMessages);
    const [announcementCount] = await db.select({ count: sql<number>`count(*)` }).from(announcements);

    return {
      totalFaculty: this.facultyMap.size,
      totalDepartments: this.departmentsMap.size,
      totalNews: this.newsMap.size,
      publishedNews: Array.from(this.newsMap.values()).filter(n => n.status === "published").length,
      totalEvents: this.eventsMap.size,
      totalContacts: this.contactMessagesMap.size,
      totalMedia: this.mediaMap.size,
      totalLibrary: this.libraryMap.size,
      totalUsers: this.adminUsers.size,
      totalAnnouncements: this.announcementsMap.size,
    };
  }

  // ── Admin Users ─────────────────────────────────────────────────────────────
  async getAdminUsers() { return Array.from(this.adminUsers.values()).filter(u => !u.deletedAt); }
  async createAdminUser(data: Partial<AdminUser>): Promise<AdminUser> {
    const id = randomUUID();
    const now = new Date();
    const user = { id, ...data, createdAt: now, updatedAt: now, deletedAt: null } as AdminUser;
    this.adminUsers.set(id, user);
    return user;
  }
  async updateAdminUser(id: string, data: Partial<AdminUser>): Promise<AdminUser> {
    const existing = this.adminUsers.get(id);
    if (!existing) throw new Error("Not found");
    const updated = { ...existing, ...data, updatedAt: new Date() };
    this.adminUsers.set(id, updated);
    return updated;
  }
  async deleteAdminUser(id: string) {
    const existing = this.adminUsers.get(id);
    if (existing) this.adminUsers.set(id, { ...existing, deletedAt: new Date() });
  }

  // ── Faculty ─────────────────────────────────────────────────────────────────
  async getFaculty({ search, department, institute, page = 1, limit = 20 }: any) {
    let data = Array.from(this.facultyMap.values()).filter(f => !f.deletedAt);
    if (search) data = data.filter(f => f.nameEn?.toLowerCase().includes(search.toLowerCase()) || f.nameAr?.includes(search));
    if (department) data = data.filter(f => f.departmentId === department);
    if (institute) data = data.filter(f => f.institute === institute);
    const total = data.length;
    data = data.slice((page - 1) * limit, page * limit);
    return { data, total };
  }
  async getFacultyById(id: string) { return this.facultyMap.get(id); }
  async createFaculty(data: Partial<Faculty>): Promise<Faculty> {
    const id = randomUUID();
    const now = new Date();
    const member = { id, ...data, createdAt: now, updatedAt: now, deletedAt: null } as Faculty;
    this.facultyMap.set(id, member);
    return member;
  }
  async updateFaculty(id: string, data: Partial<Faculty>): Promise<Faculty> {
    const existing = this.facultyMap.get(id);
    if (!existing) throw new Error("Not found");
    const updated = { ...existing, ...data, updatedAt: new Date() };
    this.facultyMap.set(id, updated);
    return updated;
  }
  async deleteFaculty(id: string) {
    const existing = this.facultyMap.get(id);
    if (existing) this.facultyMap.set(id, { ...existing, deletedAt: new Date() });
  }

  // ── Departments ─────────────────────────────────────────────────────────────
  async getDepartments() { return Array.from(this.departmentsMap.values()).filter(d => !d.deletedAt); }
  async getDepartmentById(id: string) { return this.departmentsMap.get(id); }
  async createDepartment(data: Partial<Department>): Promise<Department> {
    const id = randomUUID();
    const now = new Date();
    const dept = { id, ...data, createdAt: now, updatedAt: now, deletedAt: null } as Department;
    this.departmentsMap.set(id, dept);
    return dept;
  }
  async updateDepartment(id: string, data: Partial<Department>): Promise<Department> {
    const existing = this.departmentsMap.get(id);
    if (!existing) throw new Error("Not found");
    const updated = { ...existing, ...data, updatedAt: new Date() };
    this.departmentsMap.set(id, updated);
    return updated;
  }
  async deleteDepartment(id: string) {
    const existing = this.departmentsMap.get(id);
    if (existing) this.departmentsMap.set(id, { ...existing, deletedAt: new Date() });
  }

  // ── News ────────────────────────────────────────────────────────────────────
  async getNews({ search, category, status, institute, page = 1, limit = 20 }: any) {
    let data = Array.from(this.newsMap.values()).filter(n => !n.deletedAt);
    if (search) data = data.filter(n => n.titleEn?.toLowerCase().includes(search.toLowerCase()) || n.titleAr?.includes(search));
    if (category) data = data.filter(n => n.category === category);
    if (status) data = data.filter(n => n.status === status);
    if (institute) data = data.filter(n => n.institute === institute);
    const total = data.length;
    data = data.slice((page - 1) * limit, page * limit);
    return { data, total };
  }
  async getNewsById(id: string) { return this.newsMap.get(id); }
  async getNewsBySlug(slug: string) { return Array.from(this.newsMap.values()).find(n => n.slug === slug); }
  async createNews(data: Partial<News>): Promise<News> {
    const id = randomUUID();
    const now = new Date();
    const article = { id, ...data, createdAt: now, updatedAt: now, deletedAt: null } as News;
    this.newsMap.set(id, article);
    return article;
  }
  async updateNews(id: string, data: Partial<News>): Promise<News> {
    const existing = this.newsMap.get(id);
    if (!existing) throw new Error("Not found");
    const updated = { ...existing, ...data, updatedAt: new Date() };
    this.newsMap.set(id, updated);
    return updated;
  }
  async deleteNews(id: string) {
    const existing = this.newsMap.get(id);
    if (existing) this.newsMap.set(id, { ...existing, deletedAt: new Date() });
  }

  // ── Events ──────────────────────────────────────────────────────────────────
  async getEvents({ status }: any) {
    let data = Array.from(this.eventsMap.values()).filter(e => !e.deletedAt);
    if (status) data = data.filter(e => e.status === status);
    return data;
  }
  async createEvent(data: Partial<Event>): Promise<Event> {
    const id = randomUUID();
    const now = new Date();
    const event = { id, ...data, createdAt: now, updatedAt: now, deletedAt: null } as Event;
    this.eventsMap.set(id, event);
    return event;
  }
  async updateEvent(id: string, data: Partial<Event>): Promise<Event> {
    const existing = this.eventsMap.get(id);
    if (!existing) throw new Error("Not found");
    const updated = { ...existing, ...data, updatedAt: new Date() };
    this.eventsMap.set(id, updated);
    return updated;
  }
  async deleteEvent(id: string) {
    const existing = this.eventsMap.get(id);
    if (existing) this.eventsMap.set(id, { ...existing, deletedAt: new Date() });
  }

  // ── Pages ───────────────────────────────────────────────────────────────────
  async getPages() { return Array.from(this.pagesMap.values()).filter(p => !p.deletedAt); }
  async getPageById(id: string) { return this.pagesMap.get(id); }
  async getPageBySlug(slug: string) { return Array.from(this.pagesMap.values()).find(p => p.slug === slug); }
  async createPage(data: Partial<Page>): Promise<Page> {
    const id = randomUUID();
    const now = new Date();
    const page = { id, ...data, createdAt: now, updatedAt: now, deletedAt: null } as Page;
    this.pagesMap.set(id, page);
    return page;
  }
  async updatePage(id: string, data: Partial<Page>): Promise<Page> {
    const existing = this.pagesMap.get(id);
    if (!existing) throw new Error("Not found");
    const updated = { ...existing, ...data, updatedAt: new Date() };
    this.pagesMap.set(id, updated);
    return updated;
  }
  async deletePage(id: string) {
    const existing = this.pagesMap.get(id);
    if (existing) this.pagesMap.set(id, { ...existing, deletedAt: new Date() });
  }

  // ── Media ───────────────────────────────────────────────────────────────────
  async getMedia({ folder, search }: any) {
    let data = Array.from(this.mediaMap.values()).filter(m => !m.deletedAt);
    if (folder) data = data.filter(m => m.folder === folder);
    if (search) data = data.filter(m => m.originalName.toLowerCase().includes(search.toLowerCase()));
    return data;
  }
  async createMedia(data: Partial<Media>): Promise<Media> {
    const id = randomUUID();
    const now = new Date();
    const file = { id, ...data, createdAt: now, updatedAt: now, deletedAt: null } as Media;
    this.mediaMap.set(id, file);
    return file;
  }
  async deleteMedia(id: string) {
    const existing = this.mediaMap.get(id);
    if (existing) this.mediaMap.set(id, { ...existing, deletedAt: new Date() });
  }

  // ── Library ─────────────────────────────────────────────────────────────────
  async getLibraryResources({ type, institute, isAvailable }: any) {
    let data = Array.from(this.libraryMap.values()).filter(r => !r.deletedAt);
    if (type) data = data.filter(r => r.type === type);
    if (institute) data = data.filter(r => r.institute === institute);
    if (isAvailable !== undefined) data = data.filter(r => r.isAvailable === isAvailable);
    return data;
  }
  async createLibraryResource(data: Partial<LibraryResource>): Promise<LibraryResource> {
    const id = randomUUID();
    const now = new Date();
    const resource = { id, ...data, createdAt: now, updatedAt: now, deletedAt: null } as LibraryResource;
    this.libraryMap.set(id, resource);
    return resource;
  }
  async updateLibraryResource(id: string, data: Partial<LibraryResource>): Promise<LibraryResource> {
    const existing = this.libraryMap.get(id);
    if (!existing) throw new Error("Not found");
    const updated = { ...existing, ...data, updatedAt: new Date() };
    this.libraryMap.set(id, updated);
    return updated;
  }
  async deleteLibraryResource(id: string) {
    const existing = this.libraryMap.get(id);
    if (existing) this.libraryMap.set(id, { ...existing, deletedAt: new Date() });
  }

  // ── Research ────────────────────────────────────────────────────────────────
  async getResearch({ status, institute }: any) {
    let data = Array.from(this.researchMap.values()).filter(r => !r.deletedAt);
    if (status) data = data.filter(r => r.status === status);
    if (institute) data = data.filter(r => r.institute === institute);
    return data;
  }
  async createResearch(data: Partial<Research>): Promise<Research> {
    const id = randomUUID();
    const now = new Date();
    const item = { id, ...data, createdAt: now, updatedAt: now, deletedAt: null } as Research;
    this.researchMap.set(id, item);
    return item;
  }
  async updateResearch(id: string, data: Partial<Research>): Promise<Research> {
    const existing = this.researchMap.get(id);
    if (!existing) throw new Error("Not found");
    const updated = { ...existing, ...data, updatedAt: new Date() };
    this.researchMap.set(id, updated);
    return updated;
  }
  async deleteResearch(id: string) {
    const existing = this.researchMap.get(id);
    if (existing) this.researchMap.set(id, { ...existing, deletedAt: new Date() });
  }

  // ── Announcements ───────────────────────────────────────────────────────────
  async getAnnouncements({ isActive, institute }: any) {
    let data = Array.from(this.announcementsMap.values()).filter(a => !a.deletedAt);
    if (isActive !== undefined) data = data.filter(a => a.isActive === isActive);
    if (institute) data = data.filter(a => a.institute === institute);
    return data;
  }
  async createAnnouncement(data: Partial<Announcement>): Promise<Announcement> {
    const id = randomUUID();
    const now = new Date();
    const item = { id, ...data, createdAt: now, updatedAt: now, deletedAt: null } as Announcement;
    this.announcementsMap.set(id, item);
    return item;
  }
  async updateAnnouncement(id: string, data: Partial<Announcement>): Promise<Announcement> {
    const existing = this.announcementsMap.get(id);
    if (!existing) throw new Error("Not found");
    const updated = { ...existing, ...data, updatedAt: new Date() };
    this.announcementsMap.set(id, updated);
    return updated;
  }
  async deleteAnnouncement(id: string) {
    const existing = this.announcementsMap.get(id);
    if (existing) this.announcementsMap.set(id, { ...existing, deletedAt: new Date() });
  }

  // ── Settings ────────────────────────────────────────────────────────────────
  async getAllSettings() { return Array.from(this.settingsMap.values()); }
  async upsertSetting(key: string, value: any, group = "general"): Promise<Setting> {
    const existing = this.settingsMap.get(key);
    const now = new Date();
    if (existing) {
      const updated = { ...existing, value, updatedAt: now };
      this.settingsMap.set(key, updated);
      return updated;
    }
    const id = randomUUID();
    const setting = { id, key, value, group, createdAt: now, updatedAt: now } as Setting;
    this.settingsMap.set(key, setting);
    return setting;
  }

  // ── Activities ──────────────────────────────────────────────────────────────
  async getActivities({ isActive, institute }: any) {
    let data = Array.from(this.activitiesMap.values()).filter(a => !a.deletedAt);
    if (isActive !== undefined) data = data.filter(a => a.isActive === isActive);
    if (institute) data = data.filter(a => a.institute === institute);
    return data;
  }
  async createActivity(data: Partial<Activity>): Promise<Activity> {
    const id = randomUUID();
    const now = new Date();
    const item = { id, ...data, createdAt: now, updatedAt: now, deletedAt: null } as Activity;
    this.activitiesMap.set(id, item);
    return item;
  }
  async updateActivity(id: string, data: Partial<Activity>): Promise<Activity> {
    const existing = this.activitiesMap.get(id);
    if (!existing) throw new Error("Not found");
    const updated = { ...existing, ...data, updatedAt: new Date() };
    this.activitiesMap.set(id, updated);
    return updated;
  }
  async deleteActivity(id: string) {
    const existing = this.activitiesMap.get(id);
    if (existing) this.activitiesMap.set(id, { ...existing, deletedAt: new Date() });
  }

  // ── Courses ─────────────────────────────────────────────────────────────────
  async getCourses({ departmentId }: any) {
    let data = Array.from(this.coursesMap.values()).filter(c => !c.deletedAt);
    if (departmentId) data = data.filter(c => c.departmentId === departmentId);
    return data;
  }
  async createCourse(data: Partial<Course>): Promise<Course> {
    const id = randomUUID();
    const now = new Date();
    const course = { id, ...data, createdAt: now, updatedAt: now, deletedAt: null } as Course;
    this.coursesMap.set(id, course);
    return course;
  }
  async updateCourse(id: string, data: Partial<Course>): Promise<Course> {
    const existing = this.coursesMap.get(id);
    if (!existing) throw new Error("Not found");
    const updated = { ...existing, ...data, updatedAt: new Date() };
    this.coursesMap.set(id, updated);
    return updated;
  }
  async deleteCourse(id: string) {
    const existing = this.coursesMap.get(id);
    if (existing) this.coursesMap.set(id, { ...existing, deletedAt: new Date() });
  }

  // ── Audit Logs ──────────────────────────────────────────────────────────────
  async getAuditLogs() { return this.auditLogsArr.slice(-100).reverse(); }
  async createAuditLog(data: Partial<AuditLog>): Promise<AuditLog> {
    const id = randomUUID();
    const now = new Date();
    const log = { id, ...data, createdAt: now, updatedAt: now } as AuditLog;
    this.auditLogsArr.push(log);
    return log;
  }
  // ── Contact Messages ────────────────────────────────────────────────────────
  async getContactMessages(opts: { institute?: string; isRead?: boolean }): Promise<ContactMessage[]> {
    let arr = Array.from(this.contactMessagesMap.values()).filter(m => !m.deletedAt);
    if (opts.institute) arr = arr.filter(m => m.institute === opts.institute);
    if (opts.isRead !== undefined) arr = arr.filter(m => m.isRead === opts.isRead);
    return arr.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }
  async createContactMessage(data: Partial<ContactMessage>): Promise<ContactMessage> {
    const id = randomUUID();
    const now = new Date();
    const msg = { id, name: "", email: "", subject: null, message: "", institute: null, isRead: false, ...data, createdAt: now, updatedAt: now, deletedAt: null } as ContactMessage;
    this.contactMessagesMap.set(id, msg);
    return msg;
  }
  async markContactMessageRead(id: string): Promise<ContactMessage> {
    const existing = this.contactMessagesMap.get(id);
    if (!existing) throw new Error("Not found");
    const updated = { ...existing, isRead: true, updatedAt: new Date() };
    this.contactMessagesMap.set(id, updated);
    return updated;
  }

  async deleteContactMessage(id: string): Promise<void> {
    this.contactMessagesMap.delete(id);
  }

  async createNewsletterSubscriber(email: string): Promise<NewsletterSubscriber> {
    if (this.newsletterMap.has(email)) throw new Error("Already subscribed");
    const id = randomUUID();
    const now = new Date();
    const subscriber = { id, email, isActive: true, createdAt: now, updatedAt: now, deletedAt: null } as NewsletterSubscriber;
    this.newsletterMap.set(email, subscriber);
    return subscriber;
  }
  async getNewsletterSubscribers(): Promise<NewsletterSubscriber[]> {
    return Array.from(this.newsletterMap.values());
  }

  async getFaqs({ category }: { category?: string }): Promise<FAQ[]> {
    return [];
  }
  async createFaq(data: Partial<FAQ>): Promise<FAQ> {
    const id = randomUUID();
    const now = new Date();
    const faq = { id, ...data, createdAt: now, updatedAt: now } as FAQ;
    return faq;
  }
  async updateFaq(id: string, data: Partial<FAQ>): Promise<FAQ> {
    throw new Error("Not found");
  }
  async deleteFaq(id: string): Promise<void> { }
}

import { DatabaseStorage } from "./dbStorage";

export const storage: IStorage = new DatabaseStorage();
