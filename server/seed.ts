import { db } from "./db";
import * as schema from "@shared/schema";
import { sql } from "drizzle-orm";
import bcrypt from "bcryptjs";

async function seed() {
  console.log("Seeding database...");

  const existingAdmin = await db.select().from(schema.adminUsers).limit(1);
  if (existingAdmin.length > 0) {
    console.log("Database already seeded, skipping.");
    return;
  }

  const hashedPassword = bcrypt.hashSync("admin123", 10);
  const [admin] = await db.insert(schema.adminUsers).values({
    name: "Super Admin",
    email: "admin@sva.edu.eg",
    passwordHash: hashedPassword,
    role: "super_admin",
    isActive: true,
  }).returning();

  await db.insert(schema.departments).values([
    { nameAr: "هندسة مدنية", nameEn: "Civil Engineering", institute: "engineering", slug: "civil-engineering", descriptionAr: "قسم الهندسة المدنية يقدم برامج متقدمة في مجالات التصميم الإنشائي والبنية التحتية والموارد المائية.", descriptionEn: "The Civil Engineering department offers advanced programs in structural design, infrastructure, and water resources.", iconName: "building", sortOrder: 1 },
    { nameAr: "هندسة كهربائية", nameEn: "Electrical Engineering", institute: "engineering", slug: "electrical-engineering", descriptionAr: "قسم الهندسة الكهربائية يشمل دراسة القوى الكهربائية والإلكترونيات والاتصالات.", descriptionEn: "The Electrical Engineering department covers power systems, electronics, and telecommunications.", iconName: "zap", sortOrder: 2 },
    { nameAr: "هندسة معمارية", nameEn: "Architecture", institute: "engineering", slug: "architecture", descriptionAr: "قسم الهندسة المعمارية يركز على التصميم المعماري والتخطيط العمراني والاستدامة.", descriptionEn: "The Architecture department focuses on architectural design, urban planning, and sustainability.", iconName: "home", sortOrder: 3 },
    { nameAr: "هندسة الاتصالات", nameEn: "Communications Engineering", institute: "engineering", slug: "communications-engineering", descriptionAr: "قسم هندسة الاتصالات يتناول شبكات الاتصالات والأنظمة اللاسلكية والألياف الضوئية.", descriptionEn: "The Communications Engineering department covers telecom networks, wireless systems, and fiber optics.", iconName: "radio", sortOrder: 4 },
    { nameAr: "محاسبة", nameEn: "Accounting", institute: "management", slug: "accounting", descriptionAr: "قسم المحاسبة يؤهل الطلاب لمهنة المحاسبة والمراجعة والتمويل.", descriptionEn: "The Accounting department prepares students for careers in accounting, auditing, and finance.", iconName: "calculator", sortOrder: 5 },
    { nameAr: "إدارة أعمال", nameEn: "Business Administration", institute: "management", slug: "business-administration", descriptionAr: "قسم إدارة الأعمال يقدم برامج شاملة في الإدارة والتسويق وريادة الأعمال.", descriptionEn: "The Business Administration department offers comprehensive programs in management, marketing, and entrepreneurship.", iconName: "briefcase", sortOrder: 6 },
    { nameAr: "نظم المعلومات الإدارية", nameEn: "Management Information Systems", institute: "management", slug: "mis", descriptionAr: "قسم نظم المعلومات الإدارية يجمع بين تقنية المعلومات وإدارة الأعمال.", descriptionEn: "The MIS department combines information technology with business management.", iconName: "database", sortOrder: 7 },
  ]);

  await db.insert(schema.news).values([
    {
      titleAr: "مشاركة معاهدنا كراع للمؤتمر الدولى التاسع",
      titleEn: "Our Institutes Sponsor the 9th International Conference",
      slug: "9th-international-conference",
      contentAr: "شاركت معاهد الوادي العليا كراع رئيسي للمؤتمر الدولي التاسع للعلوم الهندسية والتكنولوجيا، والذي عُقد بحضور نخبة من العلماء والباحثين من مختلف الجامعات المصرية والعربية. تضمن المؤتمر جلسات علمية متنوعة وورش عمل تطبيقية.",
      contentEn: "Valley Higher Institutes participated as the main sponsor of the 9th International Conference on Engineering Sciences and Technology, attended by elite scientists and researchers from various Egyptian and Arab universities. The conference included diverse scientific sessions and practical workshops.",
      excerptAr: "معاهد الوادي العليا ترعى المؤتمر الدولي التاسع للعلوم الهندسية",
      excerptEn: "Valley Higher Institutes sponsors the 9th International Engineering Sciences Conference",
      coverImage: "/figmaAssets/rectangle-10.png",
      category: "مؤتمرات",
      tags: ["conference", "engineering", "international"],
      institute: "both",
      status: "published",
      isFeatured: true,
      publishedAt: new Date("2026-01-15"),
      viewCount: 342,
      authorId: admin.id,
    },
    {
      titleAr: "صور تكريم الطلبة المتفوقين من العميد",
      titleEn: "Dean Honors Outstanding Students",
      slug: "dean-honors-students",
      contentAr: "في احتفالية مميزة أقامها المعهد، قام العميد بتكريم الطلاب المتفوقين الحاصلين على أعلى المعدلات في جميع الأقسام. شملت الاحتفالية توزيع شهادات تقدير ومكافآت مالية للطلاب المتميزين.",
      contentEn: "In a special ceremony organized by the institute, the Dean honored outstanding students who achieved the highest GPAs across all departments. The ceremony included the distribution of appreciation certificates and financial rewards.",
      excerptAr: "تكريم الطلاب المتفوقين في حفل خاص أقامه المعهد",
      excerptEn: "Honoring outstanding students in a special ceremony held by the institute",
      coverImage: "/figmaAssets/rectangle-12.png",
      category: "تكريمات",
      tags: ["honors", "students", "achievement"],
      institute: "both",
      status: "published",
      isFeatured: true,
      publishedAt: new Date("2026-01-20"),
      viewCount: 518,
      authorId: admin.id,
    },
    {
      titleAr: "مؤتمر المرأة في العلوم",
      titleEn: "Women in Science Conference",
      slug: "women-in-science",
      contentAr: "استضافت معاهد الوادي العليا مؤتمر المرأة في العلوم بمشاركة عدد كبير من الباحثات والعالمات من مختلف الجامعات. ناقش المؤتمر دور المرأة في البحث العلمي والتطوير التكنولوجي.",
      contentEn: "Valley Higher Institutes hosted the Women in Science Conference with participation from numerous female researchers and scientists from various universities. The conference discussed the role of women in scientific research and technological development.",
      excerptAr: "مؤتمر المرأة في العلوم يناقش دور المرأة في البحث العلمي",
      excerptEn: "Women in Science Conference discusses women's role in scientific research",
      coverImage: "/figmaAssets/rectangle-14.png",
      category: "مؤتمرات",
      tags: ["conference", "women", "science"],
      institute: "both",
      status: "published",
      isFeatured: false,
      publishedAt: new Date("2026-02-01"),
      viewCount: 276,
      authorId: admin.id,
    },
    {
      titleAr: "افتتاح المعمل الجديد لتكنولوجيا المعلومات",
      titleEn: "Opening of New IT Laboratory",
      slug: "new-it-lab-opening",
      contentAr: "افتتح رئيس مجلس إدارة المعاهد المعمل الجديد لتكنولوجيا المعلومات المجهز بأحدث الأجهزة والبرمجيات. يضم المعمل 60 جهاز حاسب آلي حديث وشبكة إنترنت فائقة السرعة.",
      contentEn: "The Chairman of the Board of Directors inaugurated the new IT laboratory equipped with the latest hardware and software. The lab houses 60 modern computers and ultra-high-speed internet connectivity.",
      excerptAr: "افتتاح معمل تكنولوجيا المعلومات الجديد بأحدث الأجهزة",
      excerptEn: "New IT lab opens with state-of-the-art equipment",
      coverImage: "/figmaAssets/rectangle-16.png",
      category: "أخبار عامة",
      tags: ["lab", "technology", "facilities"],
      institute: "engineering",
      status: "published",
      isFeatured: false,
      publishedAt: new Date("2026-02-10"),
      viewCount: 189,
      authorId: admin.id,
    },
    {
      titleAr: "ورشة عمل ريادة الأعمال للطلاب",
      titleEn: "Entrepreneurship Workshop for Students",
      slug: "entrepreneurship-workshop",
      contentAr: "نظم قسم إدارة الأعمال ورشة عمل متخصصة في ريادة الأعمال استهدفت طلاب المعهد. تضمنت الورشة محاضرات من رواد أعمال ناجحين وتدريبات عملية على إعداد خطط الأعمال.",
      contentEn: "The Business Administration department organized a specialized entrepreneurship workshop for institute students. The workshop included lectures from successful entrepreneurs and practical training on preparing business plans.",
      excerptAr: "ورشة عمل ريادة الأعمال تستهدف طلاب معهد الإدارة",
      excerptEn: "Entrepreneurship workshop targets Management Institute students",
      coverImage: "/figmaAssets/rectangle-10.png",
      category: "ورش عمل",
      tags: ["workshop", "entrepreneurship", "management"],
      institute: "management",
      status: "published",
      isFeatured: false,
      publishedAt: new Date("2026-02-15"),
      viewCount: 145,
      authorId: admin.id,
    },
    {
      titleAr: "بدء التسجيل للعام الدراسي الجديد 2026-2027",
      titleEn: "Registration Opens for Academic Year 2026-2027",
      slug: "registration-2026-2027",
      contentAr: "تعلن معاهد الوادي العليا عن فتح باب التسجيل للعام الدراسي الجديد 2026-2027 في جميع التخصصات الهندسية والإدارية. يمكن للطلاب التقديم إلكترونياً عبر الموقع الرسمي.",
      contentEn: "Valley Higher Institutes announces the opening of registration for the new academic year 2026-2027 in all engineering and management specializations. Students can apply online through the official website.",
      excerptAr: "فتح باب التسجيل للعام الدراسي 2026-2027",
      excerptEn: "Registration opens for 2026-2027 academic year",
      coverImage: "/figmaAssets/rectangle-12.png",
      category: "إعلانات",
      tags: ["registration", "admission", "academic"],
      institute: "both",
      status: "published",
      isFeatured: true,
      publishedAt: new Date("2026-02-18"),
      viewCount: 892,
      authorId: admin.id,
    },
  ]);

  await db.insert(schema.announcements).values([
    { titleAr: "بدء التسجيل للفصل الدراسي الجديد", titleEn: "New Semester Registration Open", contentAr: "يسر معاهد الوادي العليا الإعلان عن فتح باب التسجيل للفصل الدراسي الجديد.", contentEn: "Valley Higher Institutes is pleased to announce the opening of registration for the new semester.", type: "academic", isActive: true, institute: "both" },
    { titleAr: "موعد امتحانات نهاية الفصل", titleEn: "Final Exam Schedule Released", contentAr: "تم الإعلان عن جدول امتحانات نهاية الفصل الدراسي.", contentEn: "The final semester exam schedule has been announced.", type: "urgent", isActive: true, institute: "both" },
  ]);

  await db.insert(schema.settings).values([
    { key: "site_title_ar", value: JSON.stringify("معاهد الوادي العليا"), group: "general" },
    { key: "site_title_en", value: JSON.stringify("Valley Higher Institutes"), group: "general" },
    { key: "contact_email", value: JSON.stringify("info@sva.edu.eg"), group: "contact" },
    { key: "contact_phone", value: JSON.stringify("+20 123 456 7890"), group: "contact" },
    { key: "google_analytics_id", value: JSON.stringify(""), group: "seo" },
    { key: "maintenance_mode", value: JSON.stringify(false), group: "system" },
  ]);

  console.log("Database seeded successfully!");
}

seed().then(() => process.exit(0)).catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
