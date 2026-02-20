import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const newsItems = [
  {
    id: 1,
    title: {
      ar: "مشاركة معاهدنا كراع للمؤتمر الدولى التاسع للمنتدى الاستراتيجى",
      en: "Our institutes' participation as sponsors of the 9th International Strategic Forum Conference",
    },
    date: { ar: "25 فبراير 2026", en: "February 25, 2026" },
    description: {
      ar: "تم تنظيم حفل تكريم للطلاب المتفوقين تحت رعاية الأستاذ الدكتور عميد المعهد",
      en: "An honoring ceremony was organized for outstanding students under the patronage of the institute dean",
    },
    image: "/figmaAssets/rectangle-10.png",
    featured: true,
  },
  {
    id: 2,
    title: {
      ar: "صور تكريم الطلبة من العميد",
      en: "Photos of student honoring by the Dean",
    },
    date: { ar: "16 فبراير 2026", en: "February 16, 2026" },
    description: {
      ar: "مشاركة المعهد العالي للهندسة في مؤتمر المرأه العالمي في العلوم",
      en: "The Higher Institute of Engineering's participation in the International Women in Science Conference",
    },
    image: "/figmaAssets/rectangle-12.png",
    featured: false,
  },
  {
    id: 3,
    title: {
      ar: "مؤتمر المرأه في العلوم",
      en: "Women in Science Conference",
    },
    date: { ar: "16 فبراير 2026", en: "February 16, 2026" },
    description: {
      ar: "مشاركة المعهد العالي للهندسة في مؤتمر المرأه العالمي في العلوم",
      en: "The Higher Institute of Engineering's participation in the International Women in Science Conference",
    },
    image: "/figmaAssets/rectangle-12-1.png",
    featured: false,
  },
  {
    id: 4,
    title: {
      ar: "ندوة التطوير المهني",
      en: "Professional Development Seminar",
    },
    date: { ar: "10 فبراير 2026", en: "February 10, 2026" },
    description: {
      ar: "ندوة حول التطوير المهني وفرص العمل للخريجين بالتعاون مع الشركات الكبرى",
      en: "A seminar on professional development and job opportunities for graduates in collaboration with major companies",
    },
    image: "/figmaAssets/rectangle-12-2.png",
    featured: false,
  },
];

export function NewsSection() {
  const { language, direction } = useLanguage();
  const featured = newsItems.find((n) => n.featured);
  const rest = newsItems.filter((n) => !n.featured);
  const Arrow = direction === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-neutral-950">
      <div className="max-w-[1300px] mx-auto px-4 md:px-8">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6" dir={direction}>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <span className="text-green-700 font-bold text-sm [font-family:'Almarai',Helvetica]">
                  {language === "ar" ? "آخر الأخبار" : "Latest News"}
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica]">
                {language === "ar" ? "اخر الاخبار" : "Latest News"}
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-base max-w-[400px] [font-family:'Almarai',Helvetica]">
                {language === "ar"
                  ? "اطلع على مستجدات المعاهد وأبرز الفعاليات والنجاحات"
                  : "Stay updated on the latest institutes' developments, events, and achievements"}
              </p>
            </div>
            <Link href="/news">
              <Button className="px-8 py-3 h-auto rounded-full bg-green-700 hover:bg-green-800 text-white [font-family:'Almarai',Helvetica] flex items-center gap-2">
                {language === "ar" ? "تصفح جميع الاخبار" : "Browse All News"}
                <Arrow className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" dir={direction}>
          {featured && (
            <AnimatedSection direction="right">
              <Link href={`/news/${featured.id}`}>
                <div>
                  <Card className="rounded-3xl overflow-hidden border-0 shadow-lg cursor-pointer group h-full dark:bg-neutral-900">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <img
                          className="w-full h-[300px] md:h-[350px] object-cover transition-transform duration-500"
                          alt={featured.title[language]}
                          src={featured.image}
                        />
                        <div className="absolute top-4 right-4 bg-green-700 text-white px-4 py-1.5 rounded-full text-xs font-bold [font-family:'Almarai',Helvetica]">
                          {language === "ar" ? "مميز" : "Featured"}
                        </div>
                      </div>
                      <div className="p-6 flex flex-col gap-3">
                        <div className="flex items-center gap-2 text-neutral-400 dark:text-neutral-400 text-sm [font-family:'Almarai',Helvetica]">
                          <Calendar className="w-4 h-4" />
                          {featured.date[language]}
                        </div>
                        <h3 className="font-bold text-xl text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] leading-relaxed">
                          {featured.title[language]}
                        </h3>
                        <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica]">
                          {featured.description[language]}
                        </p>
                        <span className="text-green-700 text-sm font-bold [font-family:'Almarai',Helvetica] flex items-center gap-2 group-hover:gap-3 transition-all">
                          {language === "ar" ? "اقرأ المزيد" : "Read More"} <Arrow className="w-4 h-4" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </Link>
            </AnimatedSection>
          )}

          <div className="flex flex-col gap-4">
            {rest.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 0.15} direction="left">
                <Link href={`/news/${item.id}`}>
                  <div>
                    <Card className="rounded-2xl border-0 shadow-sm hover:shadow-md transition-all cursor-pointer dark:bg-neutral-900">
                      <CardContent className="p-4 flex items-center gap-4">
                        <img
                          className="w-24 h-20 md:w-32 md:h-24 rounded-xl object-cover flex-shrink-0"
                          alt={item.title[language]}
                          src={item.image}
                        />
                        <div className="flex flex-col gap-2 flex-1">
                          <span className="text-neutral-400 dark:text-neutral-400 text-xs [font-family:'Almarai',Helvetica]">
                            {item.date[language]}
                          </span>
                          <h3 className="font-bold text-sm md:text-base text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] leading-relaxed line-clamp-2">
                            {item.title[language]}
                          </h3>
                          <span className="text-green-700 text-xs font-bold [font-family:'Almarai',Helvetica]">
                            {language === "ar" ? "اقرأ المزيد" : "Read More"}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
