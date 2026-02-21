import { db } from "./db";
import { sql, eq, desc, and, ilike, or } from "drizzle-orm";
import {
  users, adminUsers, faculty, departments, news, events,
  pages, media, libraryResources, research, announcements,
  settings, activities, courses, auditLogs, contactMessages,
  newsletterSubscribers, faqs
} from "@shared/schema";
import type {
  User, InsertUser, AdminUser, Department, Faculty, News, Event,
  Page, Media, LibraryResource, Research, Announcement, Setting,
  Activity, Course, AuditLog, ContactMessage, NewsletterSubscriber, FAQ
} from "@shared/schema";

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

// ─── Database Storage ────────────────────────────────────────────────────────
export class DatabaseStorage implements IStorage {
  // Auth
  async getUser(id: string) {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }
  async getUserByUsername(username: string) {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }
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

  // Dashboard
  async getDashboardStats() {
    const [facultyCount] = await db.select({ count: sql<number>`count(*)` }).from(faculty);
    const [deptCount] = await db.select({ count: sql<number>`count(*)` }).from(departments);
    const [newsCount] = await db.select({ count: sql<number>`count(*)` }).from(news);
    const [eventCount] = await db.select({ count: sql<number>`count(*)` }).from(events);
    const [contactCount] = await db.select({ count: sql<number>`count(*)` }).from(contactMessages);
    const [announcementCount] = await db.select({ count: sql<number>`count(*)` }).from(announcements);

    return {
      totalFaculty: Number(facultyCount.count),
      totalDepartments: Number(deptCount.count),
      totalNews: Number(newsCount.count),
      totalEvents: Number(eventCount.count),
      totalContacts: Number(contactCount.count),
      totalAnnouncements: Number(announcementCount.count),
    };
  }

  // Admin Users
  async getAdminUsers() {
    return db.select().from(adminUsers);
  }
  async createAdminUser(data: any): Promise<AdminUser> {
    const [user] = await db.insert(adminUsers).values(data).returning();
    return user;
  }
  async updateAdminUser(id: string, data: any): Promise<AdminUser> {
    const [user] = await db.update(adminUsers).set(data).where(eq(adminUsers.id, id)).returning();
    return user;
  }
  async deleteAdminUser(id: string) {
    await db.delete(adminUsers).where(eq(adminUsers.id, id));
  }

  // Faculty
  async getFaculty({ search, department, institute, page = 1, limit = 20 }: any) {
    const filters = [];
    if (search) filters.push(or(ilike(faculty.nameEn, `%${search}%`), ilike(faculty.nameAr, `%${search}%`)));
    if (department) filters.push(eq(faculty.departmentId, department));
    if (institute) filters.push(eq(faculty.institute, institute));
    
    const whereClause = filters.length > 0 ? and(...filters) : undefined;
    const data = await db.select().from(faculty).where(whereClause).limit(limit).offset((page - 1) * limit);
    const [countResult] = await db.select({ count: sql<number>`count(*)` }).from(faculty).where(whereClause);
    return { data, total: Number(countResult.count) };
  }
  async getFacultyById(id: string) {
    const [member] = await db.select().from(faculty).where(eq(faculty.id, id));
    return member;
  }
  async createFaculty(data: any): Promise<Faculty> {
    const [member] = await db.insert(faculty).values(data).returning();
    return member;
  }
  async updateFaculty(id: string, data: any): Promise<Faculty> {
    const [member] = await db.update(faculty).set(data).where(eq(faculty.id, id)).returning();
    return member;
  }
  async deleteFaculty(id: string) {
    await db.delete(faculty).where(eq(faculty.id, id));
  }

  // Departments
  async getDepartments() {
    return db.select().from(departments);
  }
  async getDepartmentById(id: string) {
    const [dept] = await db.select().from(departments).where(eq(departments.id, id));
    return dept;
  }
  async createDepartment(data: any): Promise<Department> {
    const [dept] = await db.insert(departments).values(data).returning();
    return dept;
  }
  async updateDepartment(id: string, data: any): Promise<Department> {
    const [dept] = await db.update(departments).set(data).where(eq(departments.id, id)).returning();
    return dept;
  }
  async deleteDepartment(id: string) {
    await db.delete(departments).where(eq(departments.id, id));
  }

  // News
  async getNews({ search, category, status, institute, page = 1, limit = 20 }: any) {
    const filters = [];
    if (search) filters.push(or(ilike(news.titleEn, `%${search}%`), ilike(news.titleAr, `%${search}%`)));
    if (category) filters.push(eq(news.category, category));
    if (status) filters.push(eq(news.status, status));
    if (institute) filters.push(eq(news.institute, institute));
    
    const whereClause = filters.length > 0 ? and(...filters) : undefined;
    const data = await db.select().from(news).where(whereClause).limit(limit).offset((page - 1) * limit).orderBy(desc(news.publishedAt));
    const [countResult] = await db.select({ count: sql<number>`count(*)` }).from(news).where(whereClause);
    return { data, total: Number(countResult.count) };
  }
  async getNewsById(id: string) {
    const [article] = await db.select().from(news).where(eq(news.id, id));
    return article;
  }
  async getNewsBySlug(slug: string) {
    const [article] = await db.select().from(news).where(eq(news.slug, slug));
    return article;
  }
  async createNews(data: any): Promise<News> {
    const [article] = await db.insert(news).values(data).returning();
    return article;
  }
  async updateNews(id: string, data: any): Promise<News> {
    const [article] = await db.update(news).set(data).where(eq(news.id, id)).returning();
    return article;
  }
  async deleteNews(id: string) {
    await db.delete(news).where(eq(news.id, id));
  }

  // Events
  async getEvents({ status }: any) {
    const filters = [];
    if (status) filters.push(eq(events.status, status));
    const whereClause = filters.length > 0 ? and(...filters) : undefined;
    return db.select().from(events).where(whereClause).orderBy(desc(events.startDate));
  }
  async createEvent(data: any): Promise<Event> {
    const [event] = await db.insert(events).values(data).returning();
    return event;
  }
  async updateEvent(id: string, data: any): Promise<Event> {
    const [event] = await db.update(events).set(data).where(eq(events.id, id)).returning();
    return event;
  }
  async deleteEvent(id: string) {
    await db.delete(events).where(eq(events.id, id));
  }

  // Pages
  async getPages() {
    return db.select().from(pages);
  }
  async getPageById(id: string) {
    const [page] = await db.select().from(pages).where(eq(pages.id, id));
    return page;
  }
  async getPageBySlug(slug: string) {
    const [page] = await db.select().from(pages).where(eq(pages.slug, slug));
    return page;
  }
  async createPage(data: any): Promise<Page> {
    const [page] = await db.insert(pages).values(data).returning();
    return page;
  }
  async updatePage(id: string, data: any): Promise<Page> {
    const [page] = await db.update(pages).set(data).where(eq(pages.id, id)).returning();
    return page;
  }
  async deletePage(id: string) {
    await db.delete(pages).where(eq(pages.id, id));
  }

  // Media
  async getMedia({ folder, search }: any) {
    const filters = [];
    if (folder) filters.push(eq(media.folder, folder));
    if (search) filters.push(ilike(media.originalName, `%${search}%`));
    const whereClause = filters.length > 0 ? and(...filters) : undefined;
    return db.select().from(media).where(whereClause).orderBy(desc(media.createdAt));
  }
  async createMedia(data: any): Promise<Media> {
    const [file] = await db.insert(media).values(data).returning();
    return file;
  }
  async deleteMedia(id: string) {
    await db.delete(media).where(eq(media.id, id));
  }

  // Library
  async getLibraryResources({ type, institute, isAvailable }: any) {
    const filters = [];
    if (type) filters.push(eq(libraryResources.type, type));
    if (institute) filters.push(eq(libraryResources.institute, institute));
    if (isAvailable !== undefined) filters.push(eq(libraryResources.isAvailable, isAvailable));
    const whereClause = filters.length > 0 ? and(...filters) : undefined;
    return db.select().from(libraryResources).where(whereClause);
  }
  async createLibraryResource(data: any): Promise<LibraryResource> {
    const [res] = await db.insert(libraryResources).values(data).returning();
    return res;
  }
  async updateLibraryResource(id: string, data: any): Promise<LibraryResource> {
    const [res] = await db.update(libraryResources).set(data).where(eq(libraryResources.id, id)).returning();
    return res;
  }
  async deleteLibraryResource(id: string) {
    await db.delete(libraryResources).where(eq(libraryResources.id, id));
  }

  // Research
  async getResearch({ status, institute }: any) {
    const filters = [];
    if (status) filters.push(eq(research.status, status));
    if (institute) filters.push(eq(research.institute, institute));
    const whereClause = filters.length > 0 ? and(...filters) : undefined;
    return db.select().from(research).where(whereClause);
  }
  async createResearch(data: any): Promise<Research> {
    const [res] = await db.insert(research).values(data).returning();
    return res;
  }
  async updateResearch(id: string, data: any): Promise<Research> {
    const [res] = await db.update(research).set(data).where(eq(research.id, id)).returning();
    return res;
  }
  async deleteResearch(id: string) {
    await db.delete(research).where(eq(research.id, id));
  }

  // Announcements
  async getAnnouncements({ isActive, institute }: any) {
    const filters = [];
    if (isActive !== undefined) filters.push(eq(announcements.isActive, isActive));
    if (institute) filters.push(eq(announcements.institute, institute));
    const whereClause = filters.length > 0 ? and(...filters) : undefined;
    return db.select().from(announcements).where(whereClause).orderBy(desc(announcements.createdAt));
  }
  async createAnnouncement(data: any): Promise<Announcement> {
    const [ann] = await db.insert(announcements).values(data).returning();
    return ann;
  }
  async updateAnnouncement(id: string, data: any): Promise<Announcement> {
    const [ann] = await db.update(announcements).set(data).where(eq(announcements.id, id)).returning();
    return ann;
  }
  async deleteAnnouncement(id: string) {
    await db.delete(announcements).where(eq(announcements.id, id));
  }

  // Settings
  async getAllSettings() {
    return db.select().from(settings);
  }
  async upsertSetting(key: string, value: any, group = "general") {
    const [existing] = await db.select().from(settings).where(eq(settings.key, key));
    if (existing) {
      const [updated] = await db.update(settings).set({ value, group, updatedAt: new Date() }).where(eq(settings.key, key)).returning();
      return updated;
    } else {
      const [created] = await db.insert(settings).values({ key, value, group }).returning();
      return created;
    }
  }

  // Activities
  async getActivities({ isActive, institute }: any) {
    const filters = [];
    if (isActive !== undefined) filters.push(eq(activities.isActive, isActive));
    if (institute) filters.push(eq(activities.institute, institute));
    const whereClause = filters.length > 0 ? and(...filters) : undefined;
    return db.select().from(activities).where(whereClause);
  }
  async createActivity(data: any): Promise<Activity> {
    const [act] = await db.insert(activities).values(data).returning();
    return act;
  }
  async updateActivity(id: string, data: any): Promise<Activity> {
    const [act] = await db.update(activities).set(data).where(eq(activities.id, id)).returning();
    return act;
  }
  async deleteActivity(id: string) {
    await db.delete(activities).where(eq(activities.id, id));
  }

  // Courses
  async getCourses({ departmentId }: any = {}) {
    const filters = [];
    if (departmentId) filters.push(eq(courses.departmentId, departmentId));
    const whereClause = filters.length > 0 ? and(...filters) : undefined;
    return db.select().from(courses).where(whereClause);
  }
  async createCourse(data: any): Promise<Course> {
    const [course] = await db.insert(courses).values(data).returning();
    return course;
  }
  async updateCourse(id: string, data: any): Promise<Course> {
    const [course] = await db.update(courses).set(data).where(eq(courses.id, id)).returning();
    return course;
  }
  async deleteCourse(id: string) {
    await db.delete(courses).where(eq(courses.id, id));
  }

  // Audit Logs
  async getAuditLogs() {
    return db.select().from(auditLogs).orderBy(desc(auditLogs.createdAt)).limit(100);
  }
  async createAuditLog(data: any): Promise<AuditLog> {
    const [log] = await db.insert(auditLogs).values(data).returning();
    return log;
  }

  // Contact Messages
  async getContactMessages({ institute, isRead }: any) {
    const filters = [];
    if (institute) filters.push(eq(contactMessages.institute, institute));
    if (isRead !== undefined) filters.push(eq(contactMessages.isRead, isRead));
    const whereClause = filters.length > 0 ? and(...filters) : undefined;
    return db.select().from(contactMessages).where(whereClause).orderBy(desc(contactMessages.createdAt));
  }
  async createContactMessage(data: any): Promise<ContactMessage> {
    const [msg] = await db.insert(contactMessages).values(data).returning();
    return msg;
  }
  async markContactMessageRead(id: string) {
    const [msg] = await db.update(contactMessages).set({ isRead: true }).where(eq(contactMessages.id, id)).returning();
    return msg;
  }
  async deleteContactMessage(id: string) {
    await db.delete(contactMessages).where(eq(contactMessages.id, id));
  }

  // Newsletter
  async createNewsletterSubscriber(email: string): Promise<NewsletterSubscriber> {
    const [sub] = await db.insert(newsletterSubscribers).values({ email }).returning();
    return sub;
  }
  async getNewsletterSubscribers() {
    return db.select().from(newsletterSubscribers).where(eq(newsletterSubscribers.isActive, true));
  }

  // FAQs
  async getFaqs({ category }: any) {
    const filters = [];
    if (category) filters.push(eq(faqs.category, category));
    const whereClause = filters.length > 0 ? and(...filters) : undefined;
    return db.select().from(faqs).where(whereClause).orderBy(faqs.sortOrder);
  }
  async createFaq(data: any): Promise<FAQ> {
    const [faq] = await db.insert(faqs).values(data).returning();
    return faq;
  }
  async updateFaq(id: string, data: any): Promise<FAQ> {
    const [faq] = await db.update(faqs).set(data).where(eq(faqs.id, id)).returning();
    return faq;
  }
  async deleteFaq(id: string) {
    await db.delete(faqs).where(eq(faqs.id, id));
  }
}

export const storage = new DatabaseStorage();
