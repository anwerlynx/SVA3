import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Filter, Loader2 } from "lucide-react";
import { Link } from "wouter";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect, useMemo } from "react";

const ITEMS_PER_PAGE = 6;

interface NewsItem {
  id: string;
  titleAr: string;
  titleEn: string | null;
  slug: string;
  excerptAr: string | null;
  excerptEn: string | null;
  coverImage: string | null;
  category: string | null;
  publishedAt: string | null;
  viewCount: number | null;
  institute: string | null;
  status: string | null;
}

export default function News() {
  const { t, direction, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [newsData, setNewsData] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/news?status=published&limit=50")
      .then(res => res.json())
      .then(data => {
        setNewsData(Array.isArray(data) ? data : data.data || []);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(newsData.map(n => n.category).filter(Boolean))) as string[];
    return [language === 'ar' ? 'الكل' : 'All', ...cats];
  }, [newsData, language]);

  const filteredNews = useMemo(() => {
    if (activeCategory === 'all' || activeCategory === (language === 'ar' ? 'الكل' : 'All')) {
      return newsData;
    }
    return newsData.filter(n => n.category === activeCategory);
  }, [newsData, activeCategory, language]);

  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
  const paginatedNews = filteredNews.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat === (language === 'ar' ? 'الكل' : 'All') ? 'all' : cat);
    setCurrentPage(1);
  };

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString(language === 'ar' ? 'ar-EG' : 'en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
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
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-green-700" />
            </div>
          ) : error ? (
            <div className="text-center py-16">
              <p className="text-neutral-500 dark:text-neutral-400 text-lg [font-family:'Almarai',Helvetica]">
                {language === 'ar' ? 'حدث خطأ أثناء تحميل الأخبار. يرجى المحاولة مرة أخرى.' : 'An error occurred while loading news. Please try again.'}
              </p>
            </div>
          ) : (
            <>
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
                    <Link href={`/news/${item.slug}`}>
                      <Card className="rounded-3xl border-0 shadow-sm hover:shadow-xl transition-shadow cursor-pointer h-full overflow-hidden bg-white dark:bg-neutral-900 group">
                        <CardContent className="p-0">
                          <div className="relative overflow-hidden">
                            <img
                              className="w-full h-[220px] object-cover group-hover:scale-105 transition-transform duration-500"
                              alt={language === 'ar' ? item.titleAr : (item.titleEn || item.titleAr)}
                              src={item.coverImage || "/figmaAssets/rectangle-10.png"}
                              onError={(e) => { (e.target as HTMLImageElement).src = "/figmaAssets/rectangle-10.png"; }}
                            />
                            {item.category && (
                              <div className="absolute top-4 right-4 bg-green-700 text-white px-3 py-1 rounded-full text-xs font-bold [font-family:'Almarai',Helvetica]">
                                {item.category}
                              </div>
                            )}
                          </div>
                          <div className="p-6 flex flex-col gap-3">
                            <div className="flex items-center gap-2 text-neutral-400 dark:text-neutral-500 text-sm [font-family:'Almarai',Helvetica]">
                              <Calendar className="w-4 h-4" />
                              {formatDate(item.publishedAt)}
                            </div>
                            <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] leading-relaxed line-clamp-2 transition-colors duration-300">
                              {language === 'ar' ? item.titleAr : (item.titleEn || item.titleAr)}
                            </h3>
                            <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] line-clamp-2 transition-colors duration-300">
                              {language === 'ar' ? (item.excerptAr || '') : (item.excerptEn || item.excerptAr || '')}
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

              {paginatedNews.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-neutral-500 dark:text-neutral-400 text-lg [font-family:'Almarai',Helvetica]">
                    {language === 'ar' ? 'لا توجد أخبار في هذه الفئة' : 'No news articles in this category'}
                  </p>
                </div>
              )}

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
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
