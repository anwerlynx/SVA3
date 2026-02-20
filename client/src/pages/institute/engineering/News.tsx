import { InstituteNavbar } from "@/components/institute/InstituteNavbar";
import { InstituteFooter } from "@/components/institute/InstituteFooter";
import { engineeringNavbar, engineeringFooter } from "@/lib/instituteConfig";
import { InstituteHero } from "@/components/institute/InstituteHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";

export default function EngineeringNews() {
  const { language, direction } = useLanguage();

  const news = [
    { id: 1, title: language === "ar" ? "افتتاح المعمل الجديد للهندسة الكهربائية" : "Opening of New Electrical Engineering Lab", date: language === "ar" ? "20 فبراير 2026" : "February 20, 2026", desc: language === "ar" ? "افتتح عميد المعهد المعمل الجديد للهندسة الكهربائية المجهز بأحدث الأجهزة" : "The dean inaugurated the new electrical engineering lab equipped with the latest devices", image: "/figmaAssets/rectangle-17.png", category: language === "ar" ? "أخبار المعهد" : "Institute News" },
    { id: 2, title: language === "ar" ? "مؤتمر المرأة في العلوم الهندسية" : "Women in Engineering Sciences Conference", date: language === "ar" ? "15 فبراير 2026" : "February 15, 2026", desc: language === "ar" ? "نظم المعهد مؤتمراً حول دور المرأة في التطور الهندسي والتكنولوجي" : "The institute organized a conference on the role of women in engineering and technological development", image: "/figmaAssets/rectangle-12-1.png", category: language === "ar" ? "مؤتمرات" : "Conferences" },
    { id: 3, title: language === "ar" ? "مشاركة طلابنا في مسابقة IEEE" : "Students Participate in IEEE Competition", date: language === "ar" ? "10 فبراير 2026" : "February 10, 2026", desc: language === "ar" ? "شارك طلاب قسم الكهرباء في مسابقة IEEE الإقليمية وحققوا مراكز متقدمة" : "Electrical department students participated in the regional IEEE competition and achieved top positions", image: "/figmaAssets/rectangle-10.png", category: language === "ar" ? "مسابقات" : "Competitions" },
    { id: 4, title: language === "ar" ? "ورشة عمل عن الطاقة المتجددة" : "Renewable Energy Workshop", date: language === "ar" ? "5 فبراير 2026" : "February 5, 2026", desc: language === "ar" ? "ورشة عمل حول أحدث تقنيات الطاقة الشمسية وطاقة الرياح" : "A workshop on the latest solar and wind energy technologies", image: "/figmaAssets/rectangle-12.png", category: language === "ar" ? "ورش عمل" : "Workshops" },
    { id: 5, title: language === "ar" ? "زيارة ميدانية لمحطة كهرباء السادات" : "Field Visit to Sadat Power Station", date: language === "ar" ? "1 فبراير 2026" : "February 1, 2026", desc: language === "ar" ? "زار طلاب قسم القوى الكهربائية محطة توليد كهرباء مدينة السادات" : "Power engineering students visited the Sadat City power generation station", image: "/figmaAssets/rectangle-16.png", category: language === "ar" ? "زيارات" : "Visits" },
    { id: 6, title: language === "ar" ? "مشروعات تخرج مبتكرة لطلاب الحاسبات" : "Innovative Graduation Projects by Computer Students", date: language === "ar" ? "28 يناير 2026" : "January 28, 2026", desc: language === "ar" ? "عرض طلاب قسم التحكم والحاسبات مشروعات تخرج في الذكاء الاصطناعي" : "Control and computer students presented AI graduation projects", image: "/figmaAssets/rectangle-12-1.png", category: language === "ar" ? "مشروعات" : "Projects" },
  ];

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={language === "ar" ? "الأخبار - المعهد العالي للهندسة" : "News - Higher Institute of Engineering"} description={language === "ar" ? "آخر أخبار ومستجدات المعهد العالي للهندسة" : "Latest news and updates from the Higher Institute of Engineering"} />
      <InstituteNavbar {...engineeringNavbar} />
      <InstituteHero title={language === "ar" ? "الأخبار" : "News"} subtitle={language === "ar" ? "آخر الأخبار والمستجدات من المعهد العالي للهندسة" : "Latest news and updates from the Higher Institute of Engineering"} image="/figmaAssets/rectangle-17.png" overlayColor="from-blue-900/60 to-blue-900/80" />

      <section className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" dir={direction}>
            {news.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 0.1} direction="up">
                <Card className="rounded-3xl border-0 shadow-sm hover:shadow-xl transition-all cursor-pointer group h-full overflow-hidden bg-white dark:bg-neutral-900 dark:border-neutral-800" data-testid={`card-eng-news-detail-${item.id}`}>
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img className="w-full h-[220px] object-cover transition-transform duration-500" alt={item.title} src={item.image} />
                      <div className="absolute top-4 right-4 bg-blue-700 text-white px-3 py-1 rounded-full text-xs font-bold [font-family:'Almarai',Helvetica]">{item.category}</div>
                    </div>
                    <div className="p-6 flex flex-col gap-3">
                      <span className="text-neutral-400 dark:text-neutral-500 text-sm [font-family:'Almarai',Helvetica] flex items-center gap-1 transition-colors duration-300"><Calendar className="w-4 h-4" />{item.date}</span>
                      <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] leading-relaxed line-clamp-2 transition-colors duration-300">{item.title}</h3>
                      <p className="text-neutral-500 dark:text-neutral-400 text-sm [font-family:'Almarai',Helvetica] line-clamp-2 transition-colors duration-300">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <InstituteFooter {...engineeringFooter} />
    </div>
  );
}
