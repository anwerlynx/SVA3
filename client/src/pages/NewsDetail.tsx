import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowRight, ArrowLeft, Share2, Loader2, Eye } from "lucide-react";
import { Link, useParams } from "wouter";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";

interface NewsArticle {
  id: string;
  titleAr: string;
  titleEn: string | null;
  slug: string;
  contentAr: string | null;
  contentEn: string | null;
  excerptAr: string | null;
  excerptEn: string | null;
  coverImage: string | null;
  category: string | null;
  tags: string[] | null;
  institute: string | null;
  publishedAt: string | null;
  viewCount: number | null;
}

export default function NewsDetail() {
  const { language, direction } = useLanguage();
  const params = useParams<{ slug: string }>();
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [relatedNews, setRelatedNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const slug = params.slug;
    if (!slug) return;

    setLoading(true);
    fetch(`/api/news/${slug}`)
      .then(res => {
        if (!res.ok) throw new Error('Not found');
        return res.json();
      })
      .then(data => {
        setArticle(data);
        setLoading(false);

        fetch("/api/news?status=published&limit=4")
          .then(res => res.json())
          .then(newsData => {
            const items = Array.isArray(newsData) ? newsData : newsData.data || [];
            setRelatedNews(items.filter((n: NewsArticle) => n.slug !== slug).slice(0, 3));
          });
      })
      .catch(() => {
        setNotFound(true);
        setLoading(false);
      });
  }, [params.slug]);

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString(language === 'ar' ? 'ar-EG' : 'en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  };

  const ArrowIcon = direction === 'rtl' ? ArrowRight : ArrowLeft;

  if (loading) {
    return (
      <div className="bg-white dark:bg-neutral-950 min-h-screen transition-colors duration-300">
        <Navbar />
        <div className="flex items-center justify-center py-40">
          <Loader2 className="w-8 h-8 animate-spin text-green-700" />
        </div>
        <Footer />
      </div>
    );
  }

  if (notFound || !article) {
    return (
      <div className="bg-white dark:bg-neutral-950 min-h-screen transition-colors duration-300">
        <Navbar />
        <div className="pt-32 pb-20 text-center" dir={direction}>
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica]">
            {language === 'ar' ? 'الخبر غير موجود' : 'News Not Found'}
          </h1>
          <Link href="/news">
            <Button className="mt-8 rounded-full bg-green-700 hover:bg-green-800 text-white [font-family:'Almarai',Helvetica]">
              {language === 'ar' ? 'العودة للأخبار' : 'Back to News'}
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const title = language === 'ar' ? article.titleAr : (article.titleEn || article.titleAr);
  const content = language === 'ar' ? (article.contentAr || '') : (article.contentEn || article.contentAr || '');

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={title} description={language === 'ar' ? (article.excerptAr || '') : (article.excerptEn || article.excerptAr || '')} />
      <Navbar />

      <section className="relative w-full h-[50vh] min-h-[350px] flex items-end">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" alt={title} src={article.coverImage || "/figmaAssets/rectangle-10.png"} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>
        <div className="relative z-10 max-w-[900px] mx-auto px-4 md:px-8 pb-12 w-full" dir={direction}>
          <AnimatedSection>
            {article.category && (
              <span className="bg-green-700 text-white px-4 py-1.5 rounded-full text-sm font-bold [font-family:'Almarai',Helvetica] inline-block mb-4">
                {article.category}
              </span>
            )}
            <h1 className="text-2xl md:text-4xl font-bold text-white [font-family:'Almarai',Helvetica] leading-tight mb-4">
              {title}
            </h1>
            <div className="flex items-center gap-4 text-white/70 text-sm [font-family:'Almarai',Helvetica]">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(article.publishedAt)}
              </div>
              {article.viewCount !== null && article.viewCount > 0 && (
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  {article.viewCount.toLocaleString()}
                </div>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-[900px] mx-auto px-4 md:px-8 pt-6">
        <Breadcrumb
          items={[
            { label: language === 'ar' ? 'الرئيسية' : 'Home', href: '/' },
            { label: language === 'ar' ? 'الأخبار' : 'News', href: '/news' },
            { label: title },
          ]}
        />
      </div>

      <section className="py-16 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[800px] mx-auto px-4 md:px-8">
          <AnimatedSection delay={0.2}>
            <div dir={direction}>
              {content.split('\n').map((paragraph, i) => (
                <p key={i} className="text-neutral-600 dark:text-neutral-300 text-lg leading-[2] [font-family:'Almarai',Helvetica] transition-colors duration-300 mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {article.tags && article.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-8" dir={direction}>
                {article.tags.map((tag, i) => (
                  <span key={i} className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-500 px-3 py-1 rounded-full text-xs font-bold [font-family:'Almarai',Helvetica]">
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            <div className="flex items-center justify-between mt-12 pt-8 border-t dark:border-neutral-800 transition-colors duration-300" dir={direction}>
              <Link href="/news">
                <Button variant="outline" className="rounded-full [font-family:'Almarai',Helvetica] flex items-center gap-2 dark:bg-transparent dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-800">
                  <ArrowIcon className="w-4 h-4" />
                  {language === 'ar' ? 'العودة للأخبار' : 'Back to News'}
                </Button>
              </Link>
              <Button variant="outline" className="rounded-full [font-family:'Almarai',Helvetica] flex items-center gap-2 dark:bg-transparent dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-800">
                <Share2 className="w-4 h-4" />
                {language === 'ar' ? 'مشاركة' : 'Share'}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {relatedNews.length > 0 && (
        <section className="py-16 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8">
            <AnimatedSection>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] mb-10 text-center" dir={direction}>
                {language === 'ar' ? 'أخبار ذات صلة' : 'Related News'}
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" dir={direction}>
              {relatedNews.map((item, index) => (
                <AnimatedSection key={item.id} delay={index * 0.1} direction="up">
                  <Link href={`/news/${item.slug}`}>
                    <Card className="rounded-3xl border-0 shadow-sm hover:shadow-xl transition-shadow cursor-pointer h-full overflow-hidden bg-white dark:bg-neutral-800 group">
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden">
                          <img
                            className="w-full h-[220px] object-cover"
                            alt={language === 'ar' ? item.titleAr : (item.titleEn || item.titleAr)}
                            src={item.coverImage || "/figmaAssets/rectangle-10.png"}
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
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
