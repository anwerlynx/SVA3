import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowRight, ArrowLeft, Share2 } from "lucide-react";
import { Link, useParams } from "wouter";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";

export default function NewsDetail() {
  const { language, direction } = useLanguage();
  const params = useParams<{ id: string }>();

  const allNews: Record<string, { title: string; date: string; content: string; image: string; category: string }> = language === 'ar' ? {
    "1": {
      title: "مشاركة معاهدنا كراع للمؤتمر الدولى التاسع للمنتدى الاستراتيجى",
      date: "25 فبراير 2026",
      content: "تم تنظيم حفل تكريم للطلاب المتفوقين تحت رعاية الأستاذ الدكتور عميد المعهد، تقديرا لتميزهم الأكاديمي وجهودهم المستمرة في تحقيق النجاح. شهد الحفل حضور كبير من أعضاء هيئة التدريس وأولياء الأمور والطلاب. تم توزيع شهادات التقدير والجوائز على الطلاب المتفوقين في مختلف الأقسام الأكاديمية. كما ألقى عميد المعهد كلمة حث فيها الطلاب على مواصلة التفوق والاجتهاد.",
      image: "/figmaAssets/rectangle-10.png",
      category: "مؤتمرات",
    },
    "2": {
      title: "صور تكريم الطلبة من العميد",
      date: "16 فبراير 2026",
      content: "مشاركة المعهد العالي للهندسة في مؤتمر المرأه العالمي في العلوم. شهدت الفعالية مشاركة واسعة من الطالبات والباحثات في مختلف المجالات العلمية والهندسية.",
      image: "/figmaAssets/rectangle-12.png",
      category: "تكريمات",
    },
    "3": {
      title: "مؤتمر المرأه في العلوم",
      date: "16 فبراير 2026",
      content: "مشاركة المعهد العالي للهندسة في مؤتمر المرأه العالمي في العلوم. تضمن المؤتمر عدة جلسات علمية وورش عمل متخصصة في مختلف المجالات.",
      image: "/figmaAssets/rectangle-12-1.png",
      category: "مؤتمرات",
    },
    "4": {
      title: "ندوة التطوير المهني للخريجين",
      date: "10 فبراير 2026",
      content: "ندوة حول التطوير المهني وفرص العمل للخريجين بالتعاون مع الشركات الكبرى. تم استعراض فرص العمل المتاحة وتقديم نصائح للباحثين عن عمل.",
      image: "/figmaAssets/rectangle-12-2.png",
      category: "ندوات",
    },
    "5": {
      title: "افتتاح المعمل الجديد للهندسة الكهربائية",
      date: "5 فبراير 2026",
      content: "تم افتتاح معمل جديد مجهز بأحدث الأجهزة والمعدات لخدمة طلاب قسم الهندسة الكهربائية. يهدف المعمل إلى تقديم تجربة تعليمية عملية متميزة.",
      image: "/figmaAssets/rectangle-17.png",
      category: "أخبار",
    },
    "6": {
      title: "توقيع بروتوكول تعاون مع شركة اوراسكوم",
      date: "1 فبراير 2026",
      content: "تم توقيع بروتوكول تعاون مشترك مع شركة اوراسكوم لتوفير فرص تدريب عملي للطلاب. يتضمن البروتوكول تدريب الطلاب في مواقع العمل الفعلية.",
      image: "/figmaAssets/rectangle-16.png",
      category: "شراكات",
    },
  } : {
    "1": {
      title: "Our Institutes Sponsor the 9th International Strategic Forum Conference",
      date: "February 25, 2026",
      content: "An honors ceremony was organized for outstanding students under the patronage of the Dean, in appreciation of their academic excellence and continuous efforts in achieving success. The ceremony was attended by faculty members, parents, and students. Certificates of appreciation and awards were distributed to outstanding students across various academic departments. The Dean also delivered a speech encouraging students to continue excelling.",
      image: "/figmaAssets/rectangle-10.png",
      category: "Conferences",
    },
    "2": {
      title: "Dean Honors Outstanding Students",
      date: "February 16, 2026",
      content: "Participation of the Higher Institute of Engineering in the International Women in Science Conference. The event witnessed wide participation from female students and researchers in various scientific and engineering fields.",
      image: "/figmaAssets/rectangle-12.png",
      category: "Honors",
    },
    "3": {
      title: "Women in Science Conference",
      date: "February 16, 2026",
      content: "Participation of the Higher Institute of Engineering in the International Women in Science Conference. The conference included several scientific sessions and specialized workshops in various fields.",
      image: "/figmaAssets/rectangle-12-1.png",
      category: "Conferences",
    },
    "4": {
      title: "Professional Development Seminar for Graduates",
      date: "February 10, 2026",
      content: "A seminar on professional development and job opportunities for graduates in cooperation with major companies. Available job opportunities were reviewed and advice was provided to job seekers.",
      image: "/figmaAssets/rectangle-12-2.png",
      category: "Seminars",
    },
    "5": {
      title: "Opening of New Electrical Engineering Lab",
      date: "February 5, 2026",
      content: "A new lab equipped with the latest devices and equipment was opened to serve Electrical Engineering students. The lab aims to provide a distinguished practical educational experience.",
      image: "/figmaAssets/rectangle-17.png",
      category: "News",
    },
    "6": {
      title: "Cooperation Protocol Signed with Orascom",
      date: "February 1, 2026",
      content: "A joint cooperation protocol was signed with Orascom to provide practical training opportunities for students. The protocol includes training students at actual work sites.",
      image: "/figmaAssets/rectangle-16.png",
      category: "Partnerships",
    },
  };

  const news = allNews[params.id || "1"];

  const relatedNews = Object.entries(allNews)
    .filter(([key]) => key !== params.id)
    .slice(0, 3)
    .map(([key, item]) => ({ id: key, ...item }));

  const ArrowIcon = direction === 'rtl' ? ArrowRight : ArrowLeft;

  if (!news) {
    return (
      <div className="bg-white min-h-screen">
        <Navbar />
        <div className="pt-32 pb-20 text-center" dir={direction}>
          <h1 className="text-3xl font-bold text-neutral-900 [font-family:'Almarai',Helvetica]">
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

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={language === 'ar' ? 'تفاصيل الخبر' : 'News Details'} description={language === 'ar' ? 'تفاصيل الخبر من معاهد الوادي العليا' : 'News details from Valley Higher Institutes'} />
      <Navbar />

      <section className="relative w-full h-[50vh] min-h-[350px] flex items-end">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" alt={news.title} src={news.image} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>
        <div className="relative z-10 max-w-[900px] mx-auto px-4 md:px-8 pb-12 w-full" dir={direction}>
          <AnimatedSection>
            <span className="bg-green-700 text-white px-4 py-1.5 rounded-full text-sm font-bold [font-family:'Almarai',Helvetica] inline-block mb-4">
              {news.category}
            </span>
            <h1 className="text-2xl md:text-4xl font-bold text-white [font-family:'Almarai',Helvetica] leading-tight mb-4">
              {news.title}
            </h1>
            <div className="flex items-center gap-2 text-white/70 text-sm [font-family:'Almarai',Helvetica]">
              <Calendar className="w-4 h-4" />
              {news.date}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[800px] mx-auto px-4 md:px-8">
          <AnimatedSection delay={0.2}>
            <div dir={direction}>
              <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-[2] [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {news.content}
              </p>
            </div>

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
                <Link href={`/news/${item.id}`}>
                  <Card className="rounded-3xl border-0 shadow-sm hover:shadow-xl transition-shadow cursor-pointer h-full overflow-hidden bg-white dark:bg-neutral-800 group">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <img
                          className="w-full h-[220px] object-cover"
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
                      </div>
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
