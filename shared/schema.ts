import { sql } from "drizzle-orm";
import {
  pgTable, text, varchar, boolean, integer, timestamp, jsonb, pgEnum
} from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

// ─── Enums ────────────────────────────────────────────────────────────────────
export const roleEnum = pgEnum("role", [
  "super_admin", "admin", "editor", "faculty_manager", "student_affairs", "library_manager", "analytics_viewer"
]);
export const statusEnum = pgEnum("status", ["draft", "published", "archived", "scheduled"]);
export const instituteEnum = pgEnum("institute", ["engineering", "management", "both"]);

// ─── Helpers ──────────────────────────────────────────────────────────────────
const timestamps = {
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  deletedAt: timestamp("deleted_at"),
};

const uuid = () => varchar("id").primaryKey().default(sql`gen_random_uuid()`);
const bilingualText = (name: string) => ({
  [`${name}Ar`]: text(`${name}_ar`),
  [`${name}En`]: text(`${name}_en`),
});

// ─── Admin Users ──────────────────────────────────────────────────────────────
export const adminUsers = pgTable("admin_users", {
  id: uuid(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  role: roleEnum("role").notNull().default("editor"),
  isActive: boolean("is_active").notNull().default(true),
  lastLoginAt: timestamp("last_login_at"),
  avatarUrl: text("avatar_url"),
  ...timestamps,
});

// ─── Public Users (Portal) ────────────────────────────────────────────────────
export const users = pgTable("users", {
  id: uuid(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  ...timestamps,
});

// ─── Audit Logs ───────────────────────────────────────────────────────────────
export const auditLogs = pgTable("audit_logs", {
  id: uuid(),
  adminId: varchar("admin_id"),
  action: text("action").notNull(),
  entity: text("entity"),
  entityId: varchar("entity_id"),
  details: jsonb("details"),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  ...timestamps,
});

// ─── Departments ──────────────────────────────────────────────────────────────
export const departments = pgTable("departments", {
  id: uuid(),
  nameAr: text("name_ar").notNull(),
  nameEn: text("name_en").notNull(),
  descriptionAr: text("description_ar"),
  descriptionEn: text("description_en"),
  institute: instituteEnum("institute").notNull(),
  headFacultyId: varchar("head_faculty_id"),
  slug: text("slug").notNull().unique(),
  iconName: text("icon_name"),
  coverImage: text("cover_image"),
  isActive: boolean("is_active").notNull().default(true),
  sortOrder: integer("sort_order").default(0),
  ...timestamps,
});

// ─── Faculty ──────────────────────────────────────────────────────────────────
export const faculty = pgTable("faculty", {
  id: uuid(),
  nameAr: text("name_ar").notNull(),
  nameEn: text("name_en").notNull(),
  titleAr: text("title_ar"),
  titleEn: text("title_en"),
  departmentId: varchar("department_id"),
  institute: instituteEnum("institute"),
  email: text("email"),
  phone: text("phone"),
  officeLocation: text("office_location"),
  photoUrl: text("photo_url"),
  cvUrl: text("cv_url"),
  bioAr: text("bio_ar"),
  bioEn: text("bio_en"),
  researchInterestsAr: text("research_interests_ar"),
  researchInterestsEn: text("research_interests_en"),
  googleScholarUrl: text("google_scholar_url"),
  researchGateUrl: text("research_gate_url"),
  linkedinUrl: text("linkedin_url"),
  isFeatured: boolean("is_featured").default(false),
  isActive: boolean("is_active").default(true),
  sortOrder: integer("sort_order").default(0),
  ...timestamps,
});

// ─── News & Events ────────────────────────────────────────────────────────────
export const news = pgTable("news", {
  id: uuid(),
  titleAr: text("title_ar").notNull(),
  titleEn: text("title_en"),
  slug: text("slug").notNull().unique(),
  contentAr: text("content_ar"),
  contentEn: text("content_en"),
  excerptAr: text("excerpt_ar"),
  excerptEn: text("excerpt_en"),
  coverImage: text("cover_image"),
  category: text("category"),
  tags: text("tags").array(),
  institute: instituteEnum("institute"),
  status: statusEnum("status").default("draft"),
  isFeatured: boolean("is_featured").default(false),
  publishedAt: timestamp("published_at"),
  scheduledAt: timestamp("scheduled_at"),
  viewCount: integer("view_count").default(0),
  authorId: varchar("author_id"),
  metaTitle: text("meta_title"),
  metaDescription: text("meta_description"),
  ...timestamps,
});

// ─── Events ───────────────────────────────────────────────────────────────────
export const events = pgTable("events", {
  id: uuid(),
  titleAr: text("title_ar").notNull(),
  titleEn: text("title_en"),
  slug: text("slug").notNull().unique(),
  descriptionAr: text("description_ar"),
  descriptionEn: text("description_en"),
  coverImage: text("cover_image"),
  location: text("location"),
  startDate: timestamp("start_date"),
  endDate: timestamp("end_date"),
  institute: instituteEnum("institute"),
  category: text("category"),
  status: statusEnum("status").default("draft"),
  isFeatured: boolean("is_featured").default(false),
  registrationUrl: text("registration_url"),
  ...timestamps,
});

// ─── Pages (CMS) ──────────────────────────────────────────────────────────────
export const pages = pgTable("pages", {
  id: uuid(),
  titleAr: text("title_ar").notNull(),
  titleEn: text("title_en"),
  slug: text("slug").notNull().unique(),
  sections: jsonb("sections").default([]),
  status: statusEnum("status").default("draft"),
  metaTitle: text("meta_title"),
  metaDescription: text("meta_description"),
  metaKeywords: text("meta_keywords"),
  ogImage: text("og_image"),
  parentId: varchar("parent_id"),
  sortOrder: integer("sort_order").default(0),
  ...timestamps,
});

// ─── Media ────────────────────────────────────────────────────────────────────
export const media = pgTable("media", {
  id: uuid(),
  filename: text("filename").notNull(),
  originalName: text("original_name").notNull(),
  mimeType: text("mime_type").notNull(),
  size: integer("size").notNull(),
  url: text("url").notNull(),
  altTextAr: text("alt_text_ar"),
  altTextEn: text("alt_text_en"),
  folder: text("folder").default("general"),
  uploadedBy: varchar("uploaded_by"),
  ...timestamps,
});

// ─── Library Resources ────────────────────────────────────────────────────────
export const libraryResources = pgTable("library_resources", {
  id: uuid(),
  titleAr: text("title_ar").notNull(),
  titleEn: text("title_en"),
  authorAr: text("author_ar"),
  authorEn: text("author_en"),
  descriptionAr: text("description_ar"),
  descriptionEn: text("description_en"),
  category: text("category"),
  type: text("type").notNull().default("book"), // book, digital, database, journal
  isbn: text("isbn"),
  publishYear: integer("publish_year"),
  coverImage: text("cover_image"),
  fileUrl: text("file_url"),
  externalUrl: text("external_url"),
  institute: instituteEnum("institute"),
  isAvailable: boolean("is_available").default(true),
  downloadCount: integer("download_count").default(0),
  ...timestamps,
});

// ─── Research ─────────────────────────────────────────────────────────────────
export const research = pgTable("research", {
  id: uuid(),
  titleAr: text("title_ar").notNull(),
  titleEn: text("title_en"),
  abstractAr: text("abstract_ar"),
  abstractEn: text("abstract_en"),
  authorIds: text("author_ids").array(),
  publishedYear: integer("published_year"),
  journal: text("journal"),
  doi: text("doi"),
  fileUrl: text("file_url"),
  externalUrl: text("external_url"),
  category: text("category"),
  institute: instituteEnum("institute"),
  status: statusEnum("status").default("published"),
  ...timestamps,
});

// ─── Announcements ────────────────────────────────────────────────────────────
export const announcements = pgTable("announcements", {
  id: uuid(),
  titleAr: text("title_ar").notNull(),
  titleEn: text("title_en"),
  contentAr: text("content_ar"),
  contentEn: text("content_en"),
  type: text("type").default("general"), // general, urgent, academic, event
  institute: instituteEnum("institute"),
  isActive: boolean("is_active").default(true),
  expiresAt: timestamp("expires_at"),
  ...timestamps,
});

// ─── Settings ─────────────────────────────────────────────────────────────────
export const settings = pgTable("settings", {
  id: uuid(),
  key: text("key").notNull().unique(),
  value: jsonb("value"),
  group: text("group").default("general"),
  ...timestamps,
});

// ─── Student Activities ───────────────────────────────────────────────────────
export const activities = pgTable("activities", {
  id: uuid(),
  nameAr: text("name_ar").notNull(),
  nameEn: text("name_en"),
  descriptionAr: text("description_ar"),
  descriptionEn: text("description_en"),
  category: text("category"), // club, sport, cultural, volunteer
  coverImage: text("cover_image"),
  institute: instituteEnum("institute"),
  isActive: boolean("is_active").default(true),
  ...timestamps,
});

// ─── FAQs ────────────────────────────────────────────────────────────────────
export const faqs = pgTable("faqs", {
  id: uuid(),
  questionAr: text("question_ar").notNull(),
  questionEn: text("question_en"),
  answerAr: text("answer_ar").notNull(),
  answerEn: text("answer_en"),
  category: text("category").notNull().default("general"),
  sortOrder: integer("sort_order").default(0),
  isActive: boolean("is_active").default(true),
  ...timestamps,
});

// ─── Courses ──────────────────────────────────────────────────────────────────
export const courses = pgTable("courses", {
  id: uuid(),
  code: text("code").notNull(),
  nameAr: text("name_ar").notNull(),
  nameEn: text("name_en"),
  descriptionAr: text("description_ar"),
  descriptionEn: text("description_en"),
  departmentId: varchar("department_id"),
  creditHours: integer("credit_hours").default(3),
  semester: text("semester"),
  level: integer("level").default(1),
  isActive: boolean("is_active").default(true),
  ...timestamps,
});

// ─── Contact Messages ────────────────────────────────────────────────────────
export const contactMessages = pgTable("contact_messages", {
  id: uuid(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject"),
  message: text("message").notNull(),
  institute: instituteEnum("institute"),
  isRead: boolean("is_read").notNull().default(false),
  ...timestamps,
});

// ─── Newsletter Subscribers ──────────────────────────────────────────────────
export const newsletterSubscribers = pgTable("newsletter_subscribers", {
  id: uuid(),
  email: text("email").notNull().unique(),
  isActive: boolean("is_active").notNull().default(true),
  ...timestamps,
});

// ─── Zod Schemas ──────────────────────────────────────────────────────────────
export const insertUserSchema = createInsertSchema(users).pick({ username: true, password: true });
export const insertAdminSchema = createInsertSchema(adminUsers).omit({ id: true, createdAt: true, updatedAt: true, deletedAt: true });
export const insertNewsSchema = createInsertSchema(news).omit({ id: true, createdAt: true, updatedAt: true, deletedAt: true });
export const insertFacultySchema = createInsertSchema(faculty).omit({ id: true, createdAt: true, updatedAt: true, deletedAt: true });
export const insertDepartmentSchema = createInsertSchema(departments).omit({ id: true, createdAt: true, updatedAt: true, deletedAt: true });
export const insertMediaSchema = createInsertSchema(media).omit({ id: true, createdAt: true, updatedAt: true, deletedAt: true });
export const insertAnnouncementSchema = createInsertSchema(announcements).omit({ id: true, createdAt: true, updatedAt: true, deletedAt: true });
export const insertLibrarySchema = createInsertSchema(libraryResources).omit({ id: true, createdAt: true, updatedAt: true, deletedAt: true });
export const insertSettingSchema = createInsertSchema(settings).omit({ id: true, createdAt: true, updatedAt: true });
export const insertEventSchema = createInsertSchema(events).omit({ id: true, createdAt: true, updatedAt: true, deletedAt: true });
export const insertResearchSchema = createInsertSchema(research).omit({ id: true, createdAt: true, updatedAt: true, deletedAt: true });
export const insertPageSchema = createInsertSchema(pages).omit({ id: true, createdAt: true, updatedAt: true, deletedAt: true });
export const insertCourseSchema = createInsertSchema(courses).omit({ id: true, createdAt: true, updatedAt: true, deletedAt: true });
export const insertActivitySchema = createInsertSchema(activities).omit({ id: true, createdAt: true, updatedAt: true, deletedAt: true });
export const insertFaqSchema = createInsertSchema(faqs).omit({ id: true, createdAt: true, updatedAt: true });
export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({ id: true, createdAt: true, updatedAt: true, deletedAt: true, isRead: true });
export const insertNewsletterSchema = createInsertSchema(newsletterSubscribers).omit({ id: true, createdAt: true, updatedAt: true, deletedAt: true, isActive: true });

// ─── Types ────────────────────────────────────────────────────────────────────
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type AdminUser = typeof adminUsers.$inferSelect;
export type Department = typeof departments.$inferSelect;
export type Faculty = typeof faculty.$inferSelect;
export type News = typeof news.$inferSelect;
export type Event = typeof events.$inferSelect;
export type Page = typeof pages.$inferSelect;
export type Media = typeof media.$inferSelect;
export type LibraryResource = typeof libraryResources.$inferSelect;
export type Research = typeof research.$inferSelect;
export type Announcement = typeof announcements.$inferSelect;
export type Setting = typeof settings.$inferSelect;
export type Activity = typeof activities.$inferSelect;
export type Course = typeof courses.$inferSelect;
export type AuditLog = typeof auditLogs.$inferSelect;
export type ContactMessage = typeof contactMessages.$inferSelect;
export type FAQ = typeof faqs.$inferSelect;
export type NewsletterSubscriber = typeof newsletterSubscribers.$inferSelect;
