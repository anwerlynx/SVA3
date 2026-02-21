import { useState, useEffect } from "react";
import { InstituteNavbar } from "@/components/institute/InstituteNavbar";
import { InstituteFooter } from "@/components/institute/InstituteFooter";
import { engineeringNavbar, engineeringFooter } from "@/lib/instituteConfig";
import { InstituteHero } from "@/components/institute/InstituteHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Loader2 } from "lucide-react";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Link } from "wouter";

interface NewsItem {
  id: string;
  titleAr: string;
  titleEn: string;
  slug: string;
  contentAr: string;
  contentEn: string;
  excerpt: string;
  coverImage: string;
  category: string;
  institute: string;
  tags: string[];
  viewCount: number;
  isFeatured: boolean;
  status: string;
  createdAt: string;
}

export default function EngineeringNews() {
  const { language, direction } = useLanguage();
  const pageTitle = language === "ar" ? "الأخبار" : "News";
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/news?institute=engineering");
        const result = await response.json();
        setNews(result.data || []);
      } catch (error) {
        console.error("Error fetching news:", error);
        setNews([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={language === "ar" ? "الأخبار - المعهد العالي للهندسة" : "News - Higher Institute of Engineering"} description={language === "ar" ? "آخر أخبار ومستجدات المعهد العالي للهندسة" : "Latest news and updates from the Higher Institute of Engineering"} />
      <InstituteNavbar {...engineeringNavbar} />
      <InstituteHero title={language === "ar" ? "الأخبار" : "News"} subtitle={language === "ar" ? "آخر الأخبار والمستجدات من المعهد العالي للهندسة" : "Latest news and updates from the Higher Institute of Engineering"} image="/figmaAssets/rectangle-17.png" overlayColor="from-blue-900/60 to-blue-900/80" />

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 pt-6">
        <Breadcrumb
          items={[
            { label: language === 'ar' ? 'الرئيسية' : 'Home', href: '/' },
            { label: language === 'ar' ? 'معهد الهندسة' : 'Engineering Institute', href: '/institute/engineering' },
            { label: pageTitle },
          ]}
        />
      </div>

      <section className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          {loading ? (
            <div className="flex justify-center items-center h-96">
              <Loader2 className="w-12 h-12 animate-spin text-blue-700" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" dir={direction}>
              {news.map((item, index) => (
                <AnimatedSection key={item.id} delay={index * 0.1} direction="up">
                  <Link href={`/news/${item.slug}`}>
                    <Card className="rounded-3xl border-0 shadow-sm hover:shadow-xl transition-all cursor-pointer group h-full overflow-hidden bg-white dark:bg-neutral-900 dark:border-neutral-800" data-testid={`card-eng-news-detail-${item.id}`}>
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden">
                          <img className="w-full h-[220px] object-cover transition-transform duration-500" alt={language === "ar" ? item.titleAr : (item.titleEn || item.titleAr)} src={item.coverImage || "/figmaAssets/rectangle-17.png"} onError={(e) => { (e.target as HTMLImageElement).src = "/figmaAssets/rectangle-17.png"; }} />
                          <div className="absolute top-4 right-4 bg-blue-700 text-white px-3 py-1 rounded-full text-xs font-bold [font-family:'Almarai',Helvetica]">{item.category}</div>
                        </div>
                        <div className="p-6 flex flex-col gap-3">
                          <span className="text-neutral-400 dark:text-neutral-500 text-sm [font-family:'Almarai',Helvetica] flex items-center gap-1 transition-colors duration-300"><Calendar className="w-4 h-4" />{new Date(item.createdAt).toLocaleDateString(language === 'ar' ? 'ar-EG' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                          <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] leading-relaxed line-clamp-2 transition-colors duration-300">{language === 'ar' ? item.titleAr : (item.titleEn || item.titleAr)}</h3>
                          <p className="text-neutral-500 dark:text-neutral-400 text-sm [font-family:'Almarai',Helvetica] line-clamp-2 transition-colors duration-300">{item.excerpt || (language === 'ar' ? item.contentAr : item.contentEn)}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      <InstituteFooter {...engineeringFooter} />
    </div>
  );
}
