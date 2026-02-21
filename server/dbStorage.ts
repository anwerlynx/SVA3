import { eq, and, isNull, ilike, or, desc, sql, count } from "drizzle-orm";
import { db } from "./db";
import * as schema from "@shared/schema";
import type {
  User, InsertUser, AdminUser, Department, Faculty, News, Event,
  Page, Media, LibraryResource, Research, Announcement, Setting,
  Activity, Course, AuditLog, ContactMessage, NewsletterSubscriber, FAQ
} from "@shared/schema";
import type { IStorage } from "./storage";

export class DatabaseStorage implements IStorage {

  async getUser(id: string) {
    const [user] = await db.select().from(schema.users).where(eq(schema.users.id, id));
    return user;
  }

  async getUserByUsername(username: string) {
    const [user] = await db.select().from(schema.users).where(eq(schema.users.username, username));
    return user;
  }

  async createUser(data: InsertUser): Promise<User> {
    const [user] = await db.insert(schema.users).values(data).returning();
    return user;
  }

  async getAdminByEmail(email: string) {
    const [admin] = await db.select().from(schema.adminUsers).where(eq(schema.adminUsers.email, email));
    return admin;
  }

  async updateAdminLastLogin(id: string) {
    await db.update(schema.adminUsers).set({ lastLoginAt: new Date() }).where(eq(schema.adminUsers.id, id));
  }

  async getDashboardStats() {
    const [facultyCount] = await db.select({ count: count() }).from(schema.faculty).where(isNull(schema.faculty.deletedAt));
    const [deptCount] = await db.select({ count: count() }).from(schema.departments).where(isNull(schema.departments.deletedAt));
    const [newsCount] = await db.select({ count: count() }).from(schema.news).where(isNull(schema.news.deletedAt));
    const [publishedCount] = await db.select({ count: count() }).from(schema.news).where(and(isNull(schema.news.deletedAt), eq(schema.news.status, "published")));
    const [eventsCount] = await db.select({ count: count() }).from(schema.events).where(isNull(schema.events.deletedAt));
    const [contactsCount] = await db.select({ count: count() }).from(schema.contactMessages).where(isNull(schema.contactMessages.deletedAt));
    const [mediaCount] = await db.select({ count: count() }).from(schema.media).where(isNull(schema.media.deletedAt));
    const [libCount] = await db.select({ count: count() }).from(schema.libraryResources).where(isNull(schema.libraryResources.deletedAt));
    const [userCount] = await db.select({ count: count() }).from(schema.adminUsers).where(isNull(schema.adminUsers.deletedAt));
    const [annCount] = await db.select({ count: count() }).from(schema.announcements).where(isNull(schema.announcements.deletedAt));
    return {
      totalFaculty: facultyCount.count,
      totalDepartments: deptCount.count,
      totalNews: newsCount.count,
      publishedNews: publishedCount.count,
      totalEvents: eventsCount.count,
      totalContacts: contactsCount.count,
      totalMedia: mediaCount.count,
      totalLibrary: libCount.count,
      totalUsers: userCount.count,
      totalAnnouncements: annCount.count,
    };
  }

  async getAdminUsers() {
    return db.select().from(schema.adminUsers).where(isNull(schema.adminUsers.deletedAt));
  }

  async createAdminUser(data: Partial<AdminUser>): Promise<AdminUser> {
    const [user] = await db.insert(schema.adminUsers).values(data as any).returning();
    return user;
  }

  async updateAdminUser(id: string, data: Partial<AdminUser>): Promise<AdminUser> {
    const [updated] = await db.update(schema.adminUsers).set({ ...data, updatedAt: new Date() }).where(eq(schema.adminUsers.id, id)).returning();
    if (!updated) throw new Error("Not found");
    return updated;
  }

  async deleteAdminUser(id: string) {
    await db.update(schema.adminUsers).set({ deletedAt: new Date() }).where(eq(schema.adminUsers.id, id));
  }

  async getFaculty({ search, department, institute, page = 1, limit = 20 }: any) {
    const conditions = [isNull(schema.faculty.deletedAt)];
    if (search) conditions.push(or(ilike(schema.faculty.nameEn, `%${search}%`), ilike(schema.faculty.nameAr, `%${search}%`))!);
    if (department) conditions.push(eq(schema.faculty.departmentId, department));
    if (institute) conditions.push(eq(schema.faculty.institute, institute));

    const where = and(...conditions);
    const [totalResult] = await db.select({ count: count() }).from(schema.faculty).where(where);
    const data = await db.select().from(schema.faculty).where(where).orderBy(schema.faculty.sortOrder).limit(limit).offset((page - 1) * limit);
    return { data, total: totalResult.count };
  }

  async getFacultyById(id: string) {
    const [member] = await db.select().from(schema.faculty).where(eq(schema.faculty.id, id));
    return member;
  }

  async createFaculty(data: Partial<Faculty>): Promise<Faculty> {
    const [member] = await db.insert(schema.faculty).values(data as any).returning();
    return member;
  }

  async updateFaculty(id: string, data: Partial<Faculty>): Promise<Faculty> {
    const [updated] = await db.update(schema.faculty).set({ ...data, updatedAt: new Date() }).where(eq(schema.faculty.id, id)).returning();
    if (!updated) throw new Error("Not found");
    return updated;
  }

  async deleteFaculty(id: string) {
    await db.update(schema.faculty).set({ deletedAt: new Date() }).where(eq(schema.faculty.id, id));
  }

  async getDepartments() {
    return db.select().from(schema.departments).where(isNull(schema.departments.deletedAt)).orderBy(schema.departments.sortOrder);
  }

  async getDepartmentById(id: string) {
    const [dept] = await db.select().from(schema.departments).where(eq(schema.departments.id, id));
    return dept;
  }

  async createDepartment(data: Partial<Department>): Promise<Department> {
    const [dept] = await db.insert(schema.departments).values(data as any).returning();
    return dept;
  }

  async updateDepartment(id: string, data: Partial<Department>): Promise<Department> {
    const [updated] = await db.update(schema.departments).set({ ...data, updatedAt: new Date() }).where(eq(schema.departments.id, id)).returning();
    if (!updated) throw new Error("Not found");
    return updated;
  }

  async deleteDepartment(id: string) {
    await db.update(schema.departments).set({ deletedAt: new Date() }).where(eq(schema.departments.id, id));
  }

  async getNews({ search, category, status, institute, page = 1, limit = 20 }: any) {
    const conditions = [isNull(schema.news.deletedAt)];
    if (search) conditions.push(or(ilike(schema.news.titleEn, `%${search}%`), ilike(schema.news.titleAr, `%${search}%`))!);
    if (category) conditions.push(eq(schema.news.category, category));
    if (status) conditions.push(eq(schema.news.status, status));
    if (institute) conditions.push(eq(schema.news.institute, institute));

    const where = and(...conditions);
    const [totalResult] = await db.select({ count: count() }).from(schema.news).where(where);
    const data = await db.select().from(schema.news).where(where).orderBy(desc(schema.news.publishedAt)).limit(limit).offset((page - 1) * limit);
    return { data, total: totalResult.count };
  }

  async getNewsById(id: string) {
    const [article] = await db.select().from(schema.news).where(eq(schema.news.id, id));
    return article;
  }

  async getNewsBySlug(slug: string) {
    const [article] = await db.select().from(schema.news).where(eq(schema.news.slug, slug));
    return article;
  }

  async createNews(data: Partial<News>): Promise<News> {
    const [article] = await db.insert(schema.news).values(data as any).returning();
    return article;
  }

  async updateNews(id: string, data: Partial<News>): Promise<News> {
    const [updated] = await db.update(schema.news).set({ ...data, updatedAt: new Date() }).where(eq(schema.news.id, id)).returning();
    if (!updated) throw new Error("Not found");
    return updated;
  }

  async deleteNews(id: string) {
    await db.update(schema.news).set({ deletedAt: new Date() }).where(eq(schema.news.id, id));
  }

  async getEvents({ status }: any) {
    const conditions = [isNull(schema.events.deletedAt)];
    if (status) conditions.push(eq(schema.events.status, status));
    return db.select().from(schema.events).where(and(...conditions));
  }

  async createEvent(data: Partial<Event>): Promise<Event> {
    const [event] = await db.insert(schema.events).values(data as any).returning();
    return event;
  }

  async updateEvent(id: string, data: Partial<Event>): Promise<Event> {
    const [updated] = await db.update(schema.events).set({ ...data, updatedAt: new Date() }).where(eq(schema.events.id, id)).returning();
    if (!updated) throw new Error("Not found");
    return updated;
  }

  async deleteEvent(id: string) {
    await db.update(schema.events).set({ deletedAt: new Date() }).where(eq(schema.events.id, id));
  }

  async getPages() {
    return db.select().from(schema.pages).where(isNull(schema.pages.deletedAt)).orderBy(schema.pages.sortOrder);
  }

  async getPageById(id: string) {
    const [page] = await db.select().from(schema.pages).where(eq(schema.pages.id, id));
    return page;
  }

  async getPageBySlug(slug: string) {
    const [page] = await db.select().from(schema.pages).where(eq(schema.pages.slug, slug));
    return page;
  }

  async createPage(data: Partial<Page>): Promise<Page> {
    const [page] = await db.insert(schema.pages).values(data as any).returning();
    return page;
  }

  async updatePage(id: string, data: Partial<Page>): Promise<Page> {
    const [updated] = await db.update(schema.pages).set({ ...data, updatedAt: new Date() }).where(eq(schema.pages.id, id)).returning();
    if (!updated) throw new Error("Not found");
    return updated;
  }

  async deletePage(id: string) {
    await db.update(schema.pages).set({ deletedAt: new Date() }).where(eq(schema.pages.id, id));
  }

  async getMedia({ folder, search }: any) {
    const conditions = [isNull(schema.media.deletedAt)];
    if (folder) conditions.push(eq(schema.media.folder, folder));
    if (search) conditions.push(ilike(schema.media.originalName, `%${search}%`));
    return db.select().from(schema.media).where(and(...conditions));
  }

  async createMedia(data: Partial<Media>): Promise<Media> {
    const [file] = await db.insert(schema.media).values(data as any).returning();
    return file;
  }

  async deleteMedia(id: string) {
    await db.update(schema.media).set({ deletedAt: new Date() }).where(eq(schema.media.id, id));
  }

  async getLibraryResources({ type, institute, isAvailable }: any) {
    const conditions = [isNull(schema.libraryResources.deletedAt)];
    if (type) conditions.push(eq(schema.libraryResources.type, type));
    if (institute) conditions.push(eq(schema.libraryResources.institute, institute));
    if (isAvailable !== undefined) conditions.push(eq(schema.libraryResources.isAvailable, isAvailable));
    return db.select().from(schema.libraryResources).where(and(...conditions));
  }

  async createLibraryResource(data: Partial<LibraryResource>): Promise<LibraryResource> {
    const [resource] = await db.insert(schema.libraryResources).values(data as any).returning();
    return resource;
  }

  async updateLibraryResource(id: string, data: Partial<LibraryResource>): Promise<LibraryResource> {
    const [updated] = await db.update(schema.libraryResources).set({ ...data, updatedAt: new Date() }).where(eq(schema.libraryResources.id, id)).returning();
    if (!updated) throw new Error("Not found");
    return updated;
  }

  async deleteLibraryResource(id: string) {
    await db.update(schema.libraryResources).set({ deletedAt: new Date() }).where(eq(schema.libraryResources.id, id));
  }

  async getResearch({ status, institute }: any) {
    const conditions = [isNull(schema.research.deletedAt)];
    if (status) conditions.push(eq(schema.research.status, status));
    if (institute) conditions.push(eq(schema.research.institute, institute));
    return db.select().from(schema.research).where(and(...conditions));
  }

  async createResearch(data: Partial<Research>): Promise<Research> {
    const [item] = await db.insert(schema.research).values(data as any).returning();
    return item;
  }

  async updateResearch(id: string, data: Partial<Research>): Promise<Research> {
    const [updated] = await db.update(schema.research).set({ ...data, updatedAt: new Date() }).where(eq(schema.research.id, id)).returning();
    if (!updated) throw new Error("Not found");
    return updated;
  }

  async deleteResearch(id: string) {
    await db.update(schema.research).set({ deletedAt: new Date() }).where(eq(schema.research.id, id));
  }

  async getAnnouncements({ isActive, institute }: any) {
    const conditions = [isNull(schema.announcements.deletedAt)];
    if (isActive !== undefined) conditions.push(eq(schema.announcements.isActive, isActive));
    if (institute) conditions.push(eq(schema.announcements.institute, institute));
    return db.select().from(schema.announcements).where(and(...conditions));
  }

  async createAnnouncement(data: Partial<Announcement>): Promise<Announcement> {
    const [item] = await db.insert(schema.announcements).values(data as any).returning();
    return item;
  }

  async updateAnnouncement(id: string, data: Partial<Announcement>): Promise<Announcement> {
    const [updated] = await db.update(schema.announcements).set({ ...data, updatedAt: new Date() }).where(eq(schema.announcements.id, id)).returning();
    if (!updated) throw new Error("Not found");
    return updated;
  }

  async deleteAnnouncement(id: string) {
    await db.update(schema.announcements).set({ deletedAt: new Date() }).where(eq(schema.announcements.id, id));
  }

  async getAllSettings() {
    return db.select().from(schema.settings);
  }

  async upsertSetting(key: string, value: any, group = "general"): Promise<Setting> {
    const [existing] = await db.select().from(schema.settings).where(eq(schema.settings.key, key));
    if (existing) {
      const [updated] = await db.update(schema.settings).set({ value, updatedAt: new Date() }).where(eq(schema.settings.key, key)).returning();
      return updated;
    }
    const [created] = await db.insert(schema.settings).values({ key, value, group }).returning();
    return created;
  }

  async getActivities({ isActive }: any) {
    const conditions = [isNull(schema.activities.deletedAt)];
    if (isActive !== undefined) conditions.push(eq(schema.activities.isActive, isActive));
    return db.select().from(schema.activities).where(and(...conditions));
  }

  async createActivity(data: Partial<Activity>): Promise<Activity> {
    const [item] = await db.insert(schema.activities).values(data as any).returning();
    return item;
  }

  async updateActivity(id: string, data: Partial<Activity>): Promise<Activity> {
    const [updated] = await db.update(schema.activities).set({ ...data, updatedAt: new Date() }).where(eq(schema.activities.id, id)).returning();
    if (!updated) throw new Error("Not found");
    return updated;
  }

  async deleteActivity(id: string) {
    await db.update(schema.activities).set({ deletedAt: new Date() }).where(eq(schema.activities.id, id));
  }

  async getCourses({ departmentId }: any) {
    const conditions = [isNull(schema.courses.deletedAt)];
    if (departmentId) conditions.push(eq(schema.courses.departmentId, departmentId));
    return db.select().from(schema.courses).where(and(...conditions));
  }

  async createCourse(data: Partial<Course>): Promise<Course> {
    const [course] = await db.insert(schema.courses).values(data as any).returning();
    return course;
  }

  async updateCourse(id: string, data: Partial<Course>): Promise<Course> {
    const [updated] = await db.update(schema.courses).set({ ...data, updatedAt: new Date() }).where(eq(schema.courses.id, id)).returning();
    if (!updated) throw new Error("Not found");
    return updated;
  }

  async deleteCourse(id: string) {
    await db.update(schema.courses).set({ deletedAt: new Date() }).where(eq(schema.courses.id, id));
  }

  async getAuditLogs() {
    return db.select().from(schema.auditLogs).orderBy(desc(schema.auditLogs.createdAt)).limit(100);
  }

  async createAuditLog(data: Partial<AuditLog>): Promise<AuditLog> {
    const [log] = await db.insert(schema.auditLogs).values(data as any).returning();
    return log;
  }

  async getContactMessages(opts: { institute?: string; isRead?: boolean }) {
    const conditions = [isNull(schema.contactMessages.deletedAt)];
    if (opts.institute) conditions.push(eq(schema.contactMessages.institute, opts.institute));
    if (opts.isRead !== undefined) conditions.push(eq(schema.contactMessages.isRead, opts.isRead));
    return db.select().from(schema.contactMessages).where(and(...conditions)).orderBy(desc(schema.contactMessages.createdAt));
  }

  async createContactMessage(data: Partial<ContactMessage>): Promise<ContactMessage> {
    const [msg] = await db.insert(schema.contactMessages).values(data as any).returning();
    return msg;
  }

  async markContactMessageRead(id: string): Promise<ContactMessage> {
    const [updated] = await db.update(schema.contactMessages).set({ isRead: true, updatedAt: new Date() }).where(eq(schema.contactMessages.id, id)).returning();
    if (!updated) throw new Error("Not found");
    return updated;
  }

  async deleteContactMessage(id: string): Promise<void> {
    await db.delete(schema.contactMessages).where(eq(schema.contactMessages.id, id));
  }

  async createNewsletterSubscriber(email: string): Promise<NewsletterSubscriber> {
    const existing = await db.select().from(schema.newsletterSubscribers).where(eq(schema.newsletterSubscribers.email, email));
    if (existing.length > 0) throw new Error("Already subscribed");
    const [subscriber] = await db.insert(schema.newsletterSubscribers).values({ email }).returning();
    return subscriber;
  }

  async getNewsletterSubscribers() {
    return db.select().from(schema.newsletterSubscribers);
  }

  async getFaqs({ category }: { category?: string }): Promise<FAQ[]> {
    const conditions: any[] = [];
    if (category) conditions.push(eq(schema.faqs.category, category));
    const query = conditions.length > 0
      ? db.select().from(schema.faqs).where(and(...conditions))
      : db.select().from(schema.faqs);
    return query.orderBy(schema.faqs.category, schema.faqs.sortOrder);
  }

  async createFaq(data: Partial<FAQ>): Promise<FAQ> {
    const [faq] = await db.insert(schema.faqs).values(data as any).returning();
    return faq;
  }

  async updateFaq(id: string, data: Partial<FAQ>): Promise<FAQ> {
    const [faq] = await db.update(schema.faqs).set({ ...data, updatedAt: new Date() } as any).where(eq(schema.faqs.id, id)).returning();
    return faq;
  }

  async deleteFaq(id: string): Promise<void> {
    await db.delete(schema.faqs).where(eq(schema.faqs.id, id));
  }
}
