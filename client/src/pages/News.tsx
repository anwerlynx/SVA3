import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { Link } from "wouter";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useMemo } from "react";

const ITEMS_PER_PAGE = 6;

export default function News() {
  const { t, direction, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const allNews = language === 'ar' ? [
    { id: 1, title: "مشاركة معاهدنا كراع للمؤتمر الدولى التاسع للمنتدى الاستراتيجى", date: "25 فبراير 2026", description: "تم تنظيم حفل تكريم للطلاب المتفوقين تحت رعاية الأستاذ الدكتور عميد المعهد، تقديرا لتميزهم الأكاديمي وجهودهم المستمرة في تحقيق النجاح.", image: "/figmaAssets/rectangle-10.png", category: "مؤتمرات" },
    { id: 2, title: "صور تكريم الطلبة من العميد", date: "16 فبراير 2026", description: "مشاركة المعهد العالي للهندسة في مؤتمر المرأه العالمي في العلوم", image: "/figmaAssets/rectangle-12.png", category: "تكريمات" },
    { id: 3, title: "مؤتمر المرأه في العلوم", date: "16 فبراير 2026", description: "مشاركة المعهد العالي للهندسة في مؤتمر المرأه العالمي في العلوم", image: "/figmaAssets/rectangle-12-1.png", category: "مؤتمرات" },
    { id: 4, title: "ندوة التطوير المهني للخريجين", date: "10 فبراير 2026", description: "ندوة حول التطوير المهني وفرص العمل للخريجين بالتعاون مع الشركات الكبرى", image: "/figmaAssets/rectangle-12-2.png", category: "ندوات" },
    { id: 5, title: "افتتاح المعمل الجديد للهندسة الكهربائية", date: "5 فبراير 2026", description: "تم افتتاح معمل جديد مجهز بأحدث الأجهزة والمعدات لخدمة طلاب قسم الهندسة الكهربائية", image: "/figmaAssets/rectangle-17.png", category: "أخبار" },
    { id: 6, title: "توقيع بروتوكول تعاون مع شركة اوراسكوم", date: "1 فبراير 2026", description: "تم توقيع بروتوكول تعاون مشترك مع شركة اوراسكوم لتوفير فرص تدريب عملي للطلاب", image: "/figmaAssets/rectangle-16.png", category: "شراكات" },
    { id: 7, title: "مسابقة البرمجة السنوية لطلاب الهندسة", date: "28 يناير 2026", description: "أقيمت المسابقة السنوية للبرمجة بمشاركة أكثر من 50 طالباً من أقسام الهندسة المختلفة", image: "/figmaAssets/rectangle-12.png", category: "مسابقات" },
    { id: 8, title: "ورشة عمل عن الذكاء الاصطناعي في الأعمال", date: "25 يناير 2026", description: "ورشة عمل متخصصة حول تطبيقات الذكاء الاصطناعي في مجال الأعمال والإدارة", image: "/figmaAssets/rectangle-10.png", category: "ورش عمل" },
    { id: 9, title: "زيارة طلابية لمصنع الحديد والصلب", date: "20 يناير 2026", description: "قام طلاب قسم الهندسة المدنية بزيارة ميدانية لمصنع الحديد والصلب للتعرف على عمليات التصنيع", image: "/figmaAssets/rectangle-17.png", category: "زيارات" },
    { id: 10, title: "تكريم أوائل دفعة 2025", date: "15 يناير 2026", description: "حفل تكريم أوائل الخريجين من دفعة 2025 بحضور رئيس مجلس أمناء المعاهد", image: "/figmaAssets/rectangle-12-1.png", category: "تكريمات" },
    { id: 11, title: "ندوة حول ريادة الأعمال للشباب", date: "10 يناير 2026", description: "ندوة توعوية حول ريادة الأعمال وكيفية بدء المشاريع الصغيرة بالتعاون مع جهاز تنمية المشروعات", image: "/figmaAssets/rectangle-12-2.png", category: "ندوات" },
    { id: 12, title: "الاحتفال باليوم العالمي للجودة", date: "5 يناير 2026", description: "نظمت وحدة ضمان الجودة فعاليات بمناسبة اليوم العالمي للجودة تضمنت محاضرات وورش عمل", image: "/figmaAssets/rectangle-16.png", category: "أخبار" },
  ] : [
    { id: 1, title: "Our Institutes Sponsor the 9th International Strategic Forum Conference", date: "February 25, 2026", description: "An honors ceremony was organized for outstanding students under the patronage of the Dean.", image: "/figmaAssets/rectangle-10.png", category: "Conferences" },
    { id: 2, title: "Dean Honors Outstanding Students", date: "February 16, 2026", description: "Participation of the Higher Institute of Engineering in the International Women in Science Conference", image: "/figmaAssets/rectangle-12.png", category: "Honors" },
    { id: 3, title: "Women in Science Conference", date: "February 16, 2026", description: "Participation of the Higher Institute of Engineering in the International Women in Science Conference", image: "/figmaAssets/rectangle-12-1.png", category: "Conferences" },
    { id: 4, title: "Professional Development Seminar for Graduates", date: "February 10, 2026", description: "A seminar on professional development and job opportunities for graduates in cooperation with major companies", image: "/figmaAssets/rectangle-12-2.png", category: "Seminars" },
    { id: 5, title: "Opening of New Electrical Engineering Lab", date: "February 5, 2026", description: "A new lab equipped with the latest devices and equipment was opened to serve Electrical Engineering students", image: "/figmaAssets/rectangle-17.png", category: "News" },
    { id: 6, title: "Cooperation Protocol Signed with Orascom", date: "February 1, 2026", description: "A joint cooperation protocol was signed with Orascom to provide practical training opportunities for students", image: "/figmaAssets/rectangle-16.png", category: "Partnerships" },
    { id: 7, title: "Annual Programming Competition for Engineering Students", date: "January 28, 2026", description: "The annual programming competition was held with over 50 students from various engineering departments", image: "/figmaAssets/rectangle-12.png", category: "Competitions" },
    { id: 8, title: "AI in Business Workshop", date: "January 25, 2026", description: "A specialized workshop on artificial intelligence applications in business and management", image: "/figmaAssets/rectangle-10.png", category: "Workshops" },
    { id: 9, title: "Student Visit to Iron and Steel Factory", date: "January 20, 2026", description: "Civil Engineering students visited the Iron and Steel Factory to learn about manufacturing processes", image: "/figmaAssets/rectangle-17.png", category: "Visits" },
    { id: 10, title: "Honoring Top Graduates of Class 2025", date: "January 15, 2026", description: "An honoring ceremony for the top graduates of Class 2025 in the presence of the Board Chairman", image: "/figmaAssets/rectangle-12-1.png", category: "Honors" },
    { id: 11, title: "Youth Entrepreneurship Seminar", date: "January 10, 2026", description: "An awareness seminar on entrepreneurship and how to start small businesses in cooperation with the Enterprise Development Agency", image: "/figmaAssets/rectangle-12-2.png", category: "Seminars" },
    { id: 12, title: "World Quality Day Celebration", date: "January 5, 2026", description: "The Quality Assurance Unit organized events for World Quality Day including lectures and workshops", image: "/figmaAssets/rectangle-16.png", category: "News" },
  ];

  const categories = useMemo(() => {
    const cats = Array.from(new Set(allNews.map(n => n.category)));
    return [language === 'ar' ? 'الكل' : 'All', ...cats];
  }, [allNews, language]);

  const filteredNews = useMemo(() => {
    if (activeCategory === 'all' || activeCategory === (language === 'ar' ? 'الكل' : 'All')) {
      return allNews;
    }
    return allNews.filter(n => n.category === activeCategory);
  }, [allNews, activeCategory, language]);

  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
  const paginatedNews = filteredNews.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat === (language === 'ar' ? 'الكل' : 'All') ? 'all' : cat);
    setCurrentPage(1);
  };

  const ArrowIcon = direction === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={t("news")} description={language === 'ar' ? "آخر الأخبار والمستجدات من معاهد الوادي العليا" : "Latest news and updates from Valley Higher Institutes"} />
      <Navbar />

      <section className="relative w-full h-[50vh] min-h-[350px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" alt="News" src="/figmaAssets/rectangle-2.png" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        </div>
        <div className="relative z-10 text-center px-4">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold text-white [font-family:'Almarai',Helvetica] mb-4" dir={direction}>
              {t("news")}
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-[600px] mx-auto [font-family:'Almarai',Helvetica]" dir={direction}>
              {language === 'ar' ? "آخر الأخبار والمستجدات من معاهد الوادي العليا" : "Latest news and updates from Valley Higher Institutes"}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 pt-6">
        <Breadcrumb
          items={[
            { label: language === 'ar' ? 'الرئيسية' : 'Home', href: '/' },
            { label: language === 'ar' ? 'الأخبار' : 'News' },
          ]}
        />
      </div>

      <section className="py-20 md:py-24 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-10 flex-wrap justify-center" dir={direction}>
              <Filter className="w-5 h-5 text-neutral-400 dark:text-neutral-500" />
              {categories.map((cat) => {
                const isActive = cat === (language === 'ar' ? 'الكل' : 'All') ? activeCategory === 'all' : activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold [font-family:'Almarai',Helvetica] transition-all ${
                      isActive
                        ? 'bg-green-700 text-white shadow-md'
                        : 'bg-gray-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-green-50 dark:hover:bg-neutral-700'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </AnimatedSection>

          <div className="text-sm text-neutral-400 dark:text-neutral-500 [font-family:'Almarai',Helvetica] mb-6 text-center" dir={direction}>
            {language === 'ar'
              ? `عرض ${paginatedNews.length} من ${filteredNews.length} خبر`
              : `Showing ${paginatedNews.length} of ${filteredNews.length} articles`}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" dir={direction}>
            {paginatedNews.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 0.08} direction="up">
                <Link href={`/news/${item.id}`}>
                  <Card className="rounded-3xl border-0 shadow-sm hover:shadow-xl transition-shadow cursor-pointer h-full overflow-hidden bg-white dark:bg-neutral-900 group">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <img
                          className="w-full h-[220px] object-cover group-hover:scale-105 transition-transform duration-500"
                          alt={item.title}
                          src={item.image}
                        />
                        <div className="absolute top-4 right-4 bg-green-700 text-white px-3 py-1 rounded-full text-xs font-bold [font-family:'Almarai',Helvetica]">
                          {item.category}
                        </div>
                      </div>
                      <div className="p-6 flex flex-col gap-3">
                        <div className="flex items-center gap-2 text-neutral-400 dark:text-neutral-500 text-sm [font-family:'Almarai',Helvetica]">
                          <Calendar className="w-4 h-4" />
                          {item.date}
                        </div>
                        <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] leading-relaxed line-clamp-2 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] line-clamp-2 transition-colors duration-300">
                          {item.description}
                        </p>
                        <span className="text-green-700 dark:text-green-500 text-sm font-bold [font-family:'Almarai',Helvetica] flex items-center gap-2 group-hover:gap-3 transition-all mt-2">
                          {t("read_more")} <ArrowIcon className="w-4 h-4" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-14" dir={direction}>
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-green-50 dark:hover:bg-neutral-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                {direction === 'rtl' ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold [font-family:'Almarai',Helvetica] transition-all ${
                    currentPage === page
                      ? 'bg-green-700 text-white shadow-md'
                      : 'bg-gray-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-green-50 dark:hover:bg-neutral-700'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-green-50 dark:hover:bg-neutral-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                {direction === 'rtl' ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
