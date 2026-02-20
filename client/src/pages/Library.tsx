import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Card, CardContent } from "@/components/ui/card";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { Link } from "wouter";
import {
  BookOpen, Database, Globe, Download, Search, ExternalLink,
  Clock, BookMarked, Wifi, BookCopy, ArrowRight
} from "lucide-react";
import { useState } from "react";

export default function Library() {
  const { language, direction } = useLanguage();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const pageTitle = language === 'ar' ? 'المكتبة' : 'Library';
  const pageSubtitle = language === 'ar'
    ? 'الوصول إلى آلاف الكتب والمجلات وقواعد البيانات والموارد الرقمية'
    : 'Access thousands of books, journals, databases, and digital resources';

  const stats = [
    { icon: BookOpen, value: 12000, suffix: "+", label: language === 'ar' ? "كتاب مطبوع" : "Physical Books" },
    { icon: Wifi, value: 5000, suffix: "+", label: language === 'ar' ? "مصدر رقمي" : "Digital Resources" },
    { icon: BookMarked, value: 200, suffix: "+", label: language === 'ar' ? "مجلة أكاديمية" : "Academic Journals" },
    { icon: Database, value: 15, suffix: "+", label: language === 'ar' ? "قاعدة بيانات بحثية" : "Research Databases" },
  ];

  const categories = [
    { id: "All", label: language === 'ar' ? "الكل" : "All" },
    { id: "Books", label: language === 'ar' ? "كتب" : "Books" },
    { id: "Digital", label: language === 'ar' ? "رقمية" : "Digital" },
    { id: "Journals", label: language === 'ar' ? "مجلات" : "Journals" },
    { id: "Databases", label: language === 'ar' ? "قواعد بيانات" : "Databases" },
    { id: "E-Books", label: language === 'ar' ? "كتب إلكترونية" : "E-Books" },
  ];

  const resources = [
    { id: 1, title: language === 'ar' ? "أساسيات الهندسة" : "Engineering Fundamentals", author: "Smith & Johnson", type: "Books", institute: language === 'ar' ? "الهندسة" : "Engineering", year: 2024, available: true, downloads: 342 },
    { id: 2, title: language === 'ar' ? "مبادئ إدارة الأعمال" : "Business Management Principles", author: "Peter Drucker", type: "Books", institute: language === 'ar' ? "الإدارة" : "Management", year: 2023, available: true, downloads: 218 },
    { id: 3, title: language === 'ar' ? "مكتبة IEEE الرقمية" : "IEEE Xplore Digital Library", author: "IEEE", type: "Databases", institute: language === 'ar' ? "الهندسة" : "Engineering", year: 2025, available: true, downloads: 0 },
    { id: 4, title: language === 'ar' ? "مجلات JSTOR الأكاديمية" : "JSTOR Academic Journals", author: "JSTOR", type: "Databases", institute: language === 'ar' ? "الإدارة" : "Management", year: 2025, available: true, downloads: 0 },
    { id: 5, title: language === 'ar' ? "تحليل وتصميم الإنشاءات" : "Structural Analysis & Design", author: "R.C. Hibbeler", type: "E-Books", institute: language === 'ar' ? "الهندسة" : "Engineering", year: 2022, available: true, downloads: 567 },
    { id: 6, title: language === 'ar' ? "معايير المحاسبة المالية" : "Financial Accounting Standards", author: "IASB", type: "Digital", institute: language === 'ar' ? "الإدارة" : "Management", year: 2024, available: false, downloads: 134 },
    { id: 7, title: language === 'ar' ? "أوتوكاد للمهندسين" : "AutoCAD for Engineers", author: "Autodesk Press", type: "E-Books", institute: language === 'ar' ? "الهندسة" : "Engineering", year: 2023, available: true, downloads: 445 },
    { id: 8, title: language === 'ar' ? "المجلة الدولية للهندسة" : "International Journal of Engineering", author: "Various", type: "Journals", institute: language === 'ar' ? "الهندسة" : "Engineering", year: 2025, available: true, downloads: 89 },
  ];

  const typeIcon: Record<string, React.ElementType> = {
    Books: BookOpen,
    Digital: Wifi,
    Journals: BookMarked,
    Databases: Database,
    "E-Books": Globe,
  };

  const typeColor: Record<string, { bg: string; icon: string; badge: string }> = {
    Books: { bg: "bg-indigo-50 dark:bg-indigo-900/20", icon: "text-indigo-600 dark:text-indigo-400", badge: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400" },
    Digital: { bg: "bg-emerald-50 dark:bg-emerald-900/20", icon: "text-emerald-600 dark:text-emerald-400", badge: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400" },
    Journals: { bg: "bg-amber-50 dark:bg-amber-900/20", icon: "text-amber-600 dark:text-amber-400", badge: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400" },
    Databases: { bg: "bg-violet-50 dark:bg-violet-900/20", icon: "text-violet-600 dark:text-violet-400", badge: "bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400" },
    "E-Books": { bg: "bg-cyan-50 dark:bg-cyan-900/20", icon: "text-cyan-600 dark:text-cyan-400", badge: "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400" },
  };

  const filtered = resources.filter(r => {
    const matchCat = activeCategory === "All" || r.type === activeCategory;
    const matchSearch = !search || r.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const libraryInfo = [
    {
      title: language === 'ar' ? "مواعيد العمل" : "Opening Hours",
      icon: Clock,
      details: language === 'ar'
        ? ["الأحد – الخميس: 8:00 صباحاً – 8:00 مساءً", "السبت: 9:00 صباحاً – 4:00 مساءً", "الجمعة: مغلقة"]
        : ["Sun – Thu: 8:00 AM – 8:00 PM", "Saturday: 9:00 AM – 4:00 PM", "Friday: Closed"]
    },
    {
      title: language === 'ar' ? "قواعد الاستعارة" : "Borrowing Rules",
      icon: BookCopy,
      details: language === 'ar'
        ? ["الطلاب: حتى 3 كتب / أسبوعان", "أعضاء هيئة التدريس: حتى 10 كتب / شهر", "بطاقة الهوية مطلوبة لجميع الاستعارات"]
        : ["Students: Up to 3 books / 2 weeks", "Faculty: Up to 10 books / 1 month", "ID card required for all borrowing"]
    },
    {
      title: language === 'ar' ? "الوصول الرقمي" : "Digital Access",
      icon: Wifi,
      details: language === 'ar'
        ? ["متاح على مدار الساعة عبر الإنترنت", "تسجيل الدخول ببطاقة الطالب/عضو هيئة التدريس", "الوصول من أي مكان في الحرم الجامعي"]
        : ["Available 24/7 online", "Login with student/faculty ID", "Access from anywhere on campus"]
    },
  ];

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300" dir={direction}>
      <PageHead
        title={language === 'ar' ? 'المكتبة - معاهد الوادي العليا' : 'Library - Valley Higher Institutes'}
        description={language === 'ar' ? 'الوصول إلى موارد المكتبة الشاملة من كتب وقواعد بيانات ومجلات' : 'Access our comprehensive library resources including books, databases, and journals'}
      />
      <Navbar />

      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" alt={pageTitle} src="/figmaAssets/rectangle-2.png" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        </div>
        <div className="relative z-10 text-center px-4">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold text-white [font-family:'Almarai',Helvetica] mb-4">
              {pageTitle}
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-[600px] mx-auto [font-family:'Almarai',Helvetica] mb-8">
              {pageSubtitle}
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search className={`absolute ${direction === 'rtl' ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 w-5 h-5 text-white/50`} />
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder={language === 'ar' ? "ابحث عن كتب، مجلات، قواعد بيانات..." : "Search books, journals, databases..."}
                className={`w-full ${direction === 'rtl' ? 'pr-12 pl-4' : 'pl-12 pr-4'} py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all text-sm [font-family:'Almarai',Helvetica]`}
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 pt-6">
        <Breadcrumb
          items={[
            { label: language === 'ar' ? 'الرئيسية' : 'Home', href: '/' },
            { label: pageTitle },
          ]}
        />
      </div>

      <section className="py-12 md:py-16 bg-green-800 dark:bg-green-900">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white [font-family:'Almarai',Helvetica]">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-white/80 text-sm mt-1 [font-family:'Almarai',Helvetica]">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {categories.map(cat => (
              <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold [font-family:'Almarai',Helvetica] transition-all ${
                  activeCategory === cat.id
                    ? "bg-green-700 text-white shadow-lg"
                    : "bg-gray-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-green-50 dark:hover:bg-neutral-700"
                }`}>
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((resource, i) => {
              const Icon = typeIcon[resource.type] || BookOpen;
              const colors = typeColor[resource.type] || typeColor.Books;
              return (
                <AnimatedSection key={resource.id} delay={i * 0.05}>
                  <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full bg-white dark:bg-neutral-900 group">
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${colors.bg}`}>
                          <Icon className={`w-5 h-5 ${colors.icon}`} />
                        </div>
                        <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                          resource.available
                            ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                            : "bg-gray-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400"
                        } [font-family:'Almarai',Helvetica]`}>
                          {resource.available
                            ? (language === 'ar' ? 'متاح' : 'Available')
                            : (language === 'ar' ? 'غير متاح' : 'Unavailable')}
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-neutral-900 dark:text-white mb-1 line-clamp-2 group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors [font-family:'Almarai',Helvetica]">
                        {resource.title}
                      </h3>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3 [font-family:'Almarai',Helvetica]">
                        {resource.author} · {resource.year} · {resource.institute}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className={`text-xs px-2 py-0.5 rounded-md font-medium ${colors.badge} [font-family:'Almarai',Helvetica]`}>
                          {resource.type}
                        </span>
                        {resource.downloads > 0 && (
                          <span className="text-xs text-neutral-400 flex items-center gap-1">
                            <Download className="w-3 h-3" />{resource.downloads}
                          </span>
                        )}
                      </div>
                      <button className="mt-4 w-full py-2.5 bg-gray-50 dark:bg-neutral-800 hover:bg-green-50 dark:hover:bg-green-900/20 text-neutral-600 dark:text-neutral-300 hover:text-green-700 dark:hover:text-green-400 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 [font-family:'Almarai',Helvetica]">
                        {resource.type === "Databases"
                          ? <><ExternalLink className="w-3.5 h-3.5" /> {language === 'ar' ? 'الوصول للقاعدة' : 'Access Database'}</>
                          : <><Download className="w-3.5 h-3.5" /> {language === 'ar' ? 'تحميل' : 'Download'}</>}
                      </button>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-neutral-400">
              <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p className="[font-family:'Almarai',Helvetica]">
                {language === 'ar' ? 'لا توجد نتائج مطابقة لبحثك.' : 'No resources found matching your search.'}
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] mb-2 transition-colors duration-300">
                {language === 'ar' ? 'معلومات المكتبة' : 'Library Information'}
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400 [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'كل ما تحتاج معرفته عن خدمات المكتبة' : 'Everything you need to know about library services'}
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {libraryInfo.map((info, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full bg-white dark:bg-neutral-800">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-green-700 dark:text-green-400" />
                      </div>
                      <h3 className="font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{info.title}</h3>
                    </div>
                    <ul className="flex flex-col gap-2">
                      {info.details.map((d, j) => (
                        <li key={j} className="text-sm text-neutral-600 dark:text-neutral-400 flex items-start gap-2 [font-family:'Almarai',Helvetica] transition-colors duration-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-600 dark:bg-green-500 mt-1.5 flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] mb-2 transition-colors duration-300">
                {language === 'ar' ? 'خدمات المكتبة' : 'Library Services'}
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400 [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'اكتشف خدماتنا المتنوعة' : 'Discover our diverse services'}
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: language === 'ar' ? "عن المكتبة" : "About Library", desc: language === 'ar' ? "تعرف على رؤية ورسالة وتاريخ المكتبة" : "Learn about the library's vision, mission, and history", href: "/library/about", icon: BookOpen, color: "bg-indigo-50 dark:bg-indigo-900/20", iconColor: "text-indigo-600 dark:text-indigo-400" },
              { title: language === 'ar' ? "بنك المعرفة" : "Knowledge Bank", desc: language === 'ar' ? "الوصول إلى بنك المعرفة المصري للمراجع والبحوث" : "Access the Egyptian Knowledge Bank for references and research", href: "/library/knowledge-bank", icon: Database, color: "bg-violet-50 dark:bg-violet-900/20", iconColor: "text-violet-600 dark:text-violet-400" },
              { title: language === 'ar' ? "الاستعارة الرقمية" : "Digital Borrowing", desc: language === 'ar' ? "خدمة استعارة الكتب والمراجع إلكترونياً" : "Borrow books and references digitally", href: "/library/digital-borrowing", icon: Globe, color: "bg-cyan-50 dark:bg-cyan-900/20", iconColor: "text-cyan-600 dark:text-cyan-400" },
            ].map((service, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <Link href={service.href}>
                  <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full bg-gray-50 dark:bg-neutral-900 cursor-pointer group">
                    <CardContent className="p-6 text-center">
                      <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mx-auto mb-4`}>
                        <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                      </div>
                      <h3 className="font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] mb-2 group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 [font-family:'Almarai',Helvetica] transition-colors duration-300">
                        {service.desc}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}