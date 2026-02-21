import { randomUUID } from "crypto";
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

// ─── In-Memory Storage (Fallback for development/testing if needed) ─────────────
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
  private faqsMap = new Map<string, FAQ>();

  constructor() {
    this._seed();
  }

  private _seed() {
    const now = new Date();
    // Simplified seed for MemStorage
    const adminId = randomUUID();
    this.adminUsers.set(adminId, {
      id: adminId, name: "Super Admin", email: "admin@sva.edu.eg",
      passwordHash: "admin123", role: "super_admin", isActive: true,
      lastLoginAt: null, avatarUrl: null, createdAt: now, updatedAt: now, deletedAt: null
    });
  }

  async getUser(id: string) { return this.users.get(id); }
  async getUserByUsername(username: string) { return Array.from(this.users.values()).find(u => u.username === username); }
  async createUser(data: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...data, id } as any;
    this.users.set(id, user);
    return user;
  }
  async getAdminByEmail(email: string) { return Array.from(this.adminUsers.values()).find(a => a.email === email); }
  async updateAdminLastLogin(id: string) {
    const admin = this.adminUsers.get(id);
    if (admin) this.adminUsers.set(id, { ...admin, lastLoginAt: new Date() });
  }

  async getDashboardStats() {
    return {
      totalFaculty: this.facultyMap.size,
      totalDepartments: this.departmentsMap.size,
      totalNews: this.newsMap.size,
      publishedNews: Array.from(this.newsMap.values()).filter(n => n.status === "published").length,
      totalMedia: this.mediaMap.size,
      totalLibrary: this.libraryMap.size,
      totalUsers: this.adminUsers.size,
      totalAnnouncements: this.announcementsMap.size,
      totalEvents: this.eventsMap.size,
      totalContacts: this.contactMessagesMap.size,
    };
  }

  async getAdminUsers() { return Array.from(this.adminUsers.values()); }
  async createAdminUser(data: Partial<AdminUser>) {
    const id = randomUUID();
    const user = { id, ...data, createdAt: new Date(), updatedAt: new Date() } as AdminUser;
    this.adminUsers.set(id, user);
    return user;
  }
  async updateAdminUser(id: string, data: Partial<AdminUser>) {
    const existing = this.adminUsers.get(id);
    if (!existing) throw new Error("Not found");
    const updated = { ...existing, ...data, updatedAt: new Date() };
    this.adminUsers.set(id, updated);
    return updated;
  }
  async deleteAdminUser(id: string) { this.adminUsers.delete(id); }

  async getFaculty({ search, department, institute, page = 1, limit = 20 }: any) {
    let data = Array.from(this.facultyMap.values());
    if (search) data = data.filter(f => f.nameAr.includes(search) || f.nameEn.includes(search));
    if (department) data = data.filter(f => f.departmentId === department);
    if (institute) data = data.filter(f => f.institute === institute);
    const total = data.length;
    data = data.slice((page - 1) * limit, page * limit);
    return { data, total };
  }
  async getFacultyById(id: string) { return this.facultyMap.get(id); }
  async createFaculty(data: any) { const id = randomUUID(); const f = { id, ...data }; this.facultyMap.set(id, f); return f; }
  async updateFaculty(id: string, data: any) { const existing = this.facultyMap.get(id); if (!existing) throw new Error("Not found"); const f = { ...existing, ...data }; this.facultyMap.set(id, f); return f; }
  async deleteFaculty(id: string) { this.facultyMap.delete(id); }

  async getDepartments() { return Array.from(this.departmentsMap.values()); }
  async getDepartmentById(id: string) { return this.departmentsMap.get(id); }
  async createDepartment(data: any) { const id = randomUUID(); const d = { id, ...data }; this.departmentsMap.set(id, d); return d; }
  async updateDepartment(id: string, data: any) { const existing = this.departmentsMap.get(id); if (!existing) throw new Error("Not found"); const d = { ...existing, ...data }; this.departmentsMap.set(id, d); return d; }
  async deleteDepartment(id: string) { this.departmentsMap.delete(id); }

  async getNews({ search, category, status, institute, page = 1, limit = 20 }: any) {
    let data = Array.from(this.newsMap.values());
    if (search) data = data.filter(n => n.titleAr.includes(search) || n.titleEn.includes(search));
    if (category) data = data.filter(n => n.category === category);
    if (status) data = data.filter(n => n.status === status);
    if (institute) data = data.filter(n => n.institute === institute);
    const total = data.length;
    data = data.slice((page - 1) * limit, page * limit);
    return { data, total };
  }
  async getNewsById(id: string) { return this.newsMap.get(id); }
  async getNewsBySlug(slug: string) { return Array.from(this.newsMap.values()).find(n => n.slug === slug); }
  async createNews(data: any) { const id = randomUUID(); const n = { id, ...data }; this.newsMap.set(id, n); return n; }
  async updateNews(id: string, data: any) { const existing = this.newsMap.get(id); if (!existing) throw new Error("Not found"); const n = { ...existing, ...data }; this.newsMap.set(id, n); return n; }
  async deleteNews(id: string) { this.newsMap.delete(id); }

  async getEvents({ status }: any) {
    let data = Array.from(this.eventsMap.values());
    if (status) data = data.filter(e => e.status === status);
    return data;
  }
  async createEvent(data: any) { const id = randomUUID(); const e = { id, ...data }; this.eventsMap.set(id, e); return e; }
  async updateEvent(id: string, data: any) { const exp = this.eventsMap.get(id); if (!exp) throw new Error("Not found"); const e = { ...exp, ...data }; this.eventsMap.set(id, e); return e; }
  async deleteEvent(id: string) { this.eventsMap.delete(id); }

  async getPages() { return Array.from(this.pagesMap.values()); }
  async getPageById(id: string) { return this.pagesMap.get(id); }
  async getPageBySlug(slug: string) { return Array.from(this.pagesMap.values()).find(p => p.slug === slug); }
  async createPage(data: any) { const id = randomUUID(); const p = { id, ...data }; this.pagesMap.set(id, p); return p; }
  async updatePage(id: string, data: any) { const exp = this.pagesMap.get(id); if (!exp) throw new Error("Not found"); const p = { ...exp, ...data }; this.pagesMap.set(id, p); return p; }
  async deletePage(id: string) { this.pagesMap.delete(id); }

  async getMedia({ folder, search }: any) {
    let data = Array.from(this.mediaMap.values());
    if (folder) data = data.filter(m => m.folder === folder);
    if (search) data = data.filter(m => m.originalName.includes(search));
    return data;
  }
  async createMedia(data: any) { const id = randomUUID(); const m = { id, ...data }; this.mediaMap.set(id, m); return m; }
  async deleteMedia(id: string) { this.mediaMap.delete(id); }

  async getLibraryResources({ type, institute, isAvailable }: any) {
    let data = Array.from(this.libraryMap.values());
    if (type) data = data.filter(l => l.type === type);
    if (institute) data = data.filter(l => l.institute === institute);
    if (isAvailable !== undefined) data = data.filter(l => l.isAvailable === isAvailable);
    return data;
  }
  async createLibraryResource(data: any) { const id = randomUUID(); const l = { id, ...data }; this.libraryMap.set(id, l); return l; }
  async updateLibraryResource(id: string, data: any) { const exp = this.libraryMap.get(id); if (!exp) throw new Error("Not found"); const l = { ...exp, ...data }; this.libraryMap.set(id, l); return l; }
  async deleteLibraryResource(id: string) { this.libraryMap.delete(id); }

  async getResearch({ status, institute }: any) {
    let data = Array.from(this.researchMap.values());
    if (status) data = data.filter(r => r.status === status);
    if (institute) data = data.filter(r => r.institute === institute);
    return data;
  }
  async createResearch(data: any) { const id = randomUUID(); const r = { id, ...data }; this.researchMap.set(id, r); return r; }
  async updateResearch(id: string, data: any) { const exp = this.researchMap.get(id); if (!exp) throw new Error("Not found"); const r = { ...exp, ...data }; this.researchMap.set(id, r); return r; }
  async deleteResearch(id: string) { this.researchMap.delete(id); }

  async getAnnouncements({ isActive, institute }: any) {
    let data = Array.from(this.announcementsMap.values());
    if (isActive !== undefined) data = data.filter(a => a.isActive === isActive);
    if (institute) data = data.filter(a => a.institute === institute);
    return data;
  }
  async createAnnouncement(data: any) { const id = randomUUID(); const a = { id, ...data }; this.announcementsMap.set(id, a); return a; }
  async updateAnnouncement(id: string, data: any) { const exp = this.announcementsMap.get(id); if (!exp) throw new Error("Not found"); const a = { ...exp, ...data }; this.announcementsMap.set(id, a); return a; }
  async deleteAnnouncement(id: string) { this.announcementsMap.delete(id); }

  async getAllSettings() { return Array.from(this.settingsMap.values()); }
  async upsertSetting(key: string, value: any, group = "general") {
    const id = randomUUID();
    const s = { id, key, value, group, createdAt: new Date(), updatedAt: new Date() } as Setting;
    this.settingsMap.set(key, s);
    return s;
  }

  async getActivities({ isActive }: any) {
    let data = Array.from(this.activitiesMap.values()).filter(a => !a.deletedAt);
    if (isActive !== undefined) data = data.filter(a => a.isActive === isActive);
    return data;
  }
  async createActivity(data: any) { const id = randomUUID(); const act = { id, ...data }; this.activitiesMap.set(id, act); return act; }
  async updateActivity(id: string, data: any) { const exp = this.activitiesMap.get(id); if (!exp) throw new Error("Not found"); const act = { ...exp, ...data }; this.activitiesMap.set(id, act); return act; }
  async deleteActivity(id: string) { this.activitiesMap.delete(id); }

  async getCourses({ departmentId }: any) {
    let data = Array.from(this.coursesMap.values());
    if (departmentId) data = data.filter(c => c.departmentId === departmentId);
    return data;
  }
  async createCourse(data: any) { const id = randomUUID(); const c = { id, ...data }; this.coursesMap.set(id, c); return c; }
  async updateCourse(id: string, data: any) { const exp = this.coursesMap.get(id); if (!exp) throw new Error("Not found"); const c = { ...exp, ...data }; this.coursesMap.set(id, c); return c; }
  async deleteCourse(id: string) { this.coursesMap.delete(id); }

  async getAuditLogs() { return this.auditLogsArr; }
  async createAuditLog(data: any) { const id = randomUUID(); const l = { id, ...data, createdAt: new Date() } as AuditLog; this.auditLogsArr.push(l); return l; }

  async getContactMessages(opts: { institute?: string; isRead?: boolean }) {
    let data = Array.from(this.contactMessagesMap.values());
    if (opts.institute) data = data.filter(m => m.institute === opts.institute);
    if (opts.isRead !== undefined) data = data.filter(m => m.isRead === opts.isRead);
    return data;
  }
  async createContactMessage(data: any) { const id = randomUUID(); const m = { id, ...data, isRead: false, createdAt: new Date() } as ContactMessage; this.contactMessagesMap.set(id, m); return m; }
  async markContactMessageRead(id: string) { const m = this.contactMessagesMap.get(id); if (!m) throw new Error("Not found"); const updated = { ...m, isRead: true }; this.contactMessagesMap.set(id, updated); return updated; }
  async deleteContactMessage(id: string) { this.contactMessagesMap.delete(id); }

  async createNewsletterSubscriber(email: string) { const id = randomUUID(); const s = { id, email, isActive: true, createdAt: new Date() } as NewsletterSubscriber; this.newsletterMap.set(id, s); return s; }
  async getNewsletterSubscribers() { return Array.from(this.newsletterMap.values()); }

  async getFaqs({ category }: any) {
    let data = Array.from(this.faqsMap.values());
    if (category) data = data.filter(f => f.category === category);
    return data;
  }
  async createFaq(data: any) { const id = randomUUID(); const f = { id, ...data, createdAt: new Date(), updatedAt: new Date() } as FAQ; this.faqsMap.set(id, f); return f; }
  async updateFaq(id: string, data: any) { const exp = this.faqsMap.get(id); if (!exp) throw new Error("Not found"); const f = { ...exp, ...data, updatedAt: new Date() }; this.faqsMap.set(id, f); return f; }
  async deleteFaq(id: string) { this.faqsMap.delete(id); }
}

export const storage = new DatabaseStorage();
