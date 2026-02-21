import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { Link } from "wouter";
import { Map, Building2, GraduationCap, School, Users, BookOpen, MoreHorizontal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface SitemapLink {
  path: string;
  labelAr: string;
  labelEn: string;
}

interface SitemapCategory {
  titleAr: string;
  titleEn: string;
  icon: React.ElementType;
  links: SitemapLink[];
}

const categories: SitemapCategory[] = [
  {
    titleAr: 'عن المؤسسة',
    titleEn: 'About the Institution',
    icon: Building2,
    links: [
      { path: '/', labelAr: 'الرئيسية', labelEn: 'Home' },
      { path: '/about', labelAr: 'عن المعاهد', labelEn: 'About' },
      { path: '/chairman-word', labelAr: 'كلمة رئيس مجلس الإدارة', labelEn: "Chairman's Word" },
      { path: '/welcome', labelAr: 'رسالة ترحيب', labelEn: 'Welcome Message' },
      { path: '/vision-mission', labelAr: 'الرؤية والرسالة', labelEn: 'Vision & Mission' },
      { path: '/board', labelAr: 'مجلس الإدارة', labelEn: 'Board of Directors' },
      { path: '/honor-charter', labelAr: 'ميثاق الشرف', labelEn: 'Honor Charter' },
      { path: '/partners', labelAr: 'الشركاء', labelEn: 'Partners' },
    ],
  },
  {
    titleAr: 'القبول والخدمات',
    titleEn: 'Admission & Services',
    icon: GraduationCap,
    links: [
      { path: '/admission', labelAr: 'القبول المركزي', labelEn: 'Central Admission' },
      { path: '/enrollment-conditions', labelAr: 'شروط القيد', labelEn: 'Enrollment Conditions' },
      { path: '/admission-procedures', labelAr: 'إجراءات القبول', labelEn: 'Admission Procedures' },
      { path: '/student-affairs', labelAr: 'شئون الطلاب', labelEn: 'Student Affairs' },
      { path: '/student-discipline', labelAr: 'الانضباط الطلابي', labelEn: 'Student Discipline' },
      { path: '/quality', labelAr: 'الجودة المركزية', labelEn: 'Central Quality' },
      { path: '/quality-files', labelAr: 'ملفات الجودة', labelEn: 'Quality Files' },
      { path: '/services', labelAr: 'الخدمات', labelEn: 'Services' },
      { path: '/faq', labelAr: 'الأسئلة الشائعة', labelEn: 'FAQ' },
      { path: '/academic-calendar', labelAr: 'التقويم الأكاديمي', labelEn: 'Academic Calendar' },
      { path: '/graduation-parties', labelAr: 'حفلات التخرج', labelEn: 'Graduation Parties' },
      { path: '/available-jobs', labelAr: 'الوظائف المتاحة', labelEn: 'Available Jobs' },
    ],
  },
  {
    titleAr: 'المعاهد',
    titleEn: 'Institutes',
    icon: School,
    links: [
      { path: '/institute/management', labelAr: 'معهد الإدارة', labelEn: 'Management Institute' },
      { path: '/institute/management/about', labelAr: 'عن المعهد - إدارة', labelEn: 'About - Management' },
      { path: '/institute/management/departments', labelAr: 'الأقسام - إدارة', labelEn: 'Departments - Management' },
      { path: '/institute/management/admission', labelAr: 'القبول - إدارة', labelEn: 'Admission - Management' },
      { path: '/institute/management/student-services', labelAr: 'خدمات الطلاب - إدارة', labelEn: 'Student Services - Management' },
      { path: '/institute/management/faculty', labelAr: 'هيئة التدريس - إدارة', labelEn: 'Faculty - Management' },
      { path: '/institute/management/training', labelAr: 'التدريب - إدارة', labelEn: 'Training - Management' },
      { path: '/institute/management/activities', labelAr: 'الأنشطة - إدارة', labelEn: 'Activities - Management' },
      { path: '/institute/management/news', labelAr: 'الأخبار - إدارة', labelEn: 'News - Management' },
      { path: '/institute/management/quality', labelAr: 'الجودة - إدارة', labelEn: 'Quality - Management' },
      { path: '/institute/management/library', labelAr: 'المكتبة - إدارة', labelEn: 'Library - Management' },
      { path: '/institute/management/contact', labelAr: 'اتصل بنا - إدارة', labelEn: 'Contact - Management' },
      { path: '/institute/engineering', labelAr: 'معهد الهندسة', labelEn: 'Engineering Institute' },
      { path: '/institute/engineering/about', labelAr: 'عن المعهد - هندسة', labelEn: 'About - Engineering' },
      { path: '/institute/engineering/departments', labelAr: 'الأقسام - هندسة', labelEn: 'Departments - Engineering' },
      { path: '/institute/engineering/admission', labelAr: 'القبول - هندسة', labelEn: 'Admission - Engineering' },
      { path: '/institute/engineering/student-services', labelAr: 'خدمات الطلاب - هندسة', labelEn: 'Student Services - Engineering' },
      { path: '/institute/engineering/faculty', labelAr: 'هيئة التدريس - هندسة', labelEn: 'Faculty - Engineering' },
      { path: '/institute/engineering/research', labelAr: 'البحث العلمي - هندسة', labelEn: 'Research - Engineering' },
      { path: '/institute/engineering/training', labelAr: 'التدريب - هندسة', labelEn: 'Training - Engineering' },
      { path: '/institute/engineering/labs', labelAr: 'المعامل - هندسة', labelEn: 'Labs - Engineering' },
      { path: '/institute/engineering/news', labelAr: 'الأخبار - هندسة', labelEn: 'News - Engineering' },
      { path: '/institute/engineering/quality', labelAr: 'الجودة - هندسة', labelEn: 'Quality - Engineering' },
      { path: '/institute/engineering/library', labelAr: 'المكتبة - هندسة', labelEn: 'Library - Engineering' },
      { path: '/institute/engineering/contact', labelAr: 'اتصل بنا - هندسة', labelEn: 'Contact - Engineering' },
    ],
  },
  {
    titleAr: 'رعاية الشباب',
    titleEn: 'Youth Welfare',
    icon: Users,
    links: [
      { path: '/committees/student-union', labelAr: 'اتحاد الطلاب', labelEn: 'Student Union' },
      { path: '/committees/cultural', labelAr: 'اللجنة الثقافية', labelEn: 'Cultural Committee' },
      { path: '/committees/sports', labelAr: 'اللجنة الرياضية', labelEn: 'Sports Committee' },
      { path: '/committees/arts', labelAr: 'اللجنة الفنية', labelEn: 'Arts Committee' },
      { path: '/committees/social', labelAr: 'اللجنة الاجتماعية', labelEn: 'Social Committee' },
      { path: '/committees/scouts', labelAr: 'الكشافة والخدمة العامة', labelEn: 'Scouts & Public Services' },
    ],
  },
  {
    titleAr: 'المكتبة',
    titleEn: 'Library',
    icon: BookOpen,
    links: [
      { path: '/library/about', labelAr: 'عن المكتبة', labelEn: 'About Library' },
      { path: '/library/knowledge-bank', labelAr: 'بنك المعرفة', labelEn: 'Knowledge Bank' },
      { path: '/library/digital-borrowing', labelAr: 'الاستعارة الرقمية', labelEn: 'Digital Borrowing' },
    ],
  },
  {
    titleAr: 'أخرى',
    titleEn: 'Other',
    icon: MoreHorizontal,
    links: [
      { path: '/news', labelAr: 'الأخبار', labelEn: 'News' },
      { path: '/contact', labelAr: 'اتصل بنا', labelEn: 'Contact' },
      { path: '/media-gallery', labelAr: 'معرض الوسائط', labelEn: 'Media Gallery' },
      { path: '/academic', labelAr: 'الشؤون الأكاديمية', labelEn: 'Academic' },
      { path: '/faculty', labelAr: 'أعضاء هيئة التدريس', labelEn: 'Faculty' },
      { path: '/research', labelAr: 'البحث العلمي', labelEn: 'Research' },
      { path: '/community', labelAr: 'المجتمع', labelEn: 'Community' },
      { path: '/students', labelAr: 'شئون الطلاب', labelEn: 'Students' },
      { path: '/portal', labelAr: 'البوابة الإلكترونية', labelEn: 'Portal' },
      { path: '/sitemap', labelAr: 'خريطة الموقع', labelEn: 'Sitemap' },
    ],
  },
];

export default function Sitemap() {
  const { language, direction } = useLanguage();

  const pageTitle = language === 'ar' ? 'خريطة الموقع' : 'Sitemap';
  const pageSubtitle = language === 'ar'
    ? 'تصفح جميع صفحات البوابة الجامعية بسهولة'
    : 'Browse all university portal pages with ease';

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={pageTitle} description={pageSubtitle} />
      <Navbar />

      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" alt="Sitemap" src="/figmaAssets/rectangle-2.png" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        </div>
        <div className="relative z-10 text-center px-4">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold text-white [font-family:'Almarai',Helvetica] mb-4" dir={direction}>
              {pageTitle}
            </h1>
            <p className="text-lg md:text-xl text-white/80 [font-family:'Almarai',Helvetica]" dir={direction}>
              {pageSubtitle}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-16" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <Map className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'جميع الصفحات' : 'All Pages'}
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-lg mt-4 [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar'
                  ? 'اكتشف جميع أقسام وصفحات الموقع المنظمة حسب الفئة'
                  : 'Discover all sections and pages organized by category'}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" dir={direction}>
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <AnimatedSection key={index} delay={index * 0.1} direction="up">
                  <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full bg-white dark:bg-neutral-900 dark:border-neutral-800">
                    <CardContent className="p-6 flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-green-700 dark:text-green-500" />
                          </div>
                          <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                            {language === 'ar' ? category.titleAr : category.titleEn}
                          </h3>
                        </div>
                        <span className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-500 px-2.5 py-1 rounded-full text-xs font-bold [font-family:'Almarai',Helvetica]">
                          {category.links.length}
                        </span>
                      </div>
                      <div className="border-t border-neutral-100 dark:border-neutral-800 pt-4">
                        <ul className="flex flex-col gap-2">
                          {category.links.map((link, linkIndex) => (
                            <li key={linkIndex}>
                              <Link
                                href={link.path}
                                className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-green-700 dark:hover:text-green-500 transition-colors [font-family:'Almarai',Helvetica] py-1 px-2 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/10"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-green-700/40 dark:bg-green-500/40 flex-shrink-0" />
                                {language === 'ar' ? link.labelAr : link.labelEn}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}