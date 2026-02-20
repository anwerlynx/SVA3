import { InstituteNavbar } from "@/components/institute/InstituteNavbar";
import { InstituteFooter } from "@/components/institute/InstituteFooter";
import { InstituteHero } from "@/components/institute/InstituteHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { managementNavbar, managementFooter } from "@/lib/instituteConfig";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";

export default function ManagementNews() {
  const { language, direction } = useLanguage();

  const news = [
    { id: 1, title: language === "ar" ? "تكريم الطلاب المتفوقين في قسم المحاسبة" : "Honoring Outstanding Students in the Accounting Department", date: language === "ar" ? "20 فبراير 2026" : "February 20, 2026", desc: language === "ar" ? "أقيم حفل تكريم لطلاب قسم المحاسبة المتفوقين تحت رعاية عميد المعهد" : "A ceremony was held to honor outstanding accounting students under the patronage of the institute dean", image: "/figmaAssets/rectangle-12.png", category: language === "ar" ? "تكريمات" : "Honors" },
    { id: 2, title: language === "ar" ? "ندوة حول ريادة الأعمال والابتكار" : "Seminar on Entrepreneurship and Innovation", date: language === "ar" ? "15 فبراير 2026" : "February 15, 2026", desc: language === "ar" ? "نظم المعهد ندوة حول ريادة الأعمال بمشاركة رجال أعمال ناجحين" : "The institute organized a seminar on entrepreneurship with the participation of successful businessmen", image: "/figmaAssets/rectangle-10.png", category: language === "ar" ? "ندوات" : "Seminars" },
    { id: 3, title: language === "ar" ? "بروتوكول تعاون مع البنك الأهلي" : "Cooperation Protocol with Al-Ahli Bank", date: language === "ar" ? "10 فبراير 2026" : "February 10, 2026", desc: language === "ar" ? "وقع المعهد بروتوكول تعاون مع البنك الأهلي لتدريب الطلاب" : "The institute signed a cooperation protocol with Al-Ahli Bank for student training", image: "/figmaAssets/rectangle-12-1.png", category: language === "ar" ? "شراكات" : "Partnerships" },
    { id: 4, title: language === "ar" ? "مسابقة خطة العمل لطلاب إدارة الأعمال" : "Business Plan Competition for Business Administration Students", date: language === "ar" ? "5 فبراير 2026" : "February 5, 2026", desc: language === "ar" ? "أقيمت مسابقة لأفضل خطة عمل بين طلاب قسم إدارة الأعمال" : "A competition for the best business plan was held among business administration students", image: "/figmaAssets/rectangle-12-2.png", category: language === "ar" ? "مسابقات" : "Competitions" },
    { id: 5, title: language === "ar" ? "ورشة عمل عن المحاسبة الدولية" : "Workshop on International Accounting", date: language === "ar" ? "1 فبراير 2026" : "February 1, 2026", desc: language === "ar" ? "ورشة عمل متخصصة حول معايير المحاسبة الدولية IFRS" : "A specialized workshop on International Financial Reporting Standards (IFRS)", image: "/figmaAssets/rectangle-16.png", category: language === "ar" ? "ورش عمل" : "Workshops" },
    { id: 6, title: language === "ar" ? "زيارة طلابية لبورصة الأوراق المالية" : "Student Visit to the Stock Exchange", date: language === "ar" ? "28 يناير 2026" : "January 28, 2026", desc: language === "ar" ? "زار طلاب قسم العلوم المالية بورصة الأوراق المالية المصرية" : "Finance department students visited the Egyptian Stock Exchange", image: "/figmaAssets/rectangle-12.png", category: language === "ar" ? "زيارات" : "Visits" },
  ];

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={language === "ar" ? "الأخبار - المعهد العالي للإدارة" : "News - Higher Institute of Management"} description={language === "ar" ? "آخر أخبار ومستجدات المعهد العالي للإدارة" : "Latest news and updates from the Higher Institute of Management"} />
      <InstituteNavbar {...managementNavbar} />
      <InstituteHero title={language === "ar" ? "الأخبار" : "News"} subtitle={language === "ar" ? "آخر الأخبار والمستجدات من المعهد العالي للإدارة" : "Latest news and updates from the Higher Institute of Management"} image="/figmaAssets/rectangle-16.png" overlayColor="from-green-900/60 to-green-900/80" />

      <section className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" dir={direction}>
            {news.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 0.1} direction="up">
                <Card className="rounded-3xl border-0 shadow-sm hover:shadow-xl transition-all cursor-pointer group h-full overflow-hidden bg-white dark:bg-neutral-900 dark:border-neutral-800" data-testid={`card-mgmt-news-detail-${item.id}`}>
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img className="w-full h-[220px] object-cover transition-transform duration-500" alt={item.title} src={item.image} />
                      <div className="absolute top-4 right-4 bg-green-700 text-white px-3 py-1 rounded-full text-xs font-bold [font-family:'Almarai',Helvetica]">{item.category}</div>
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

      <InstituteFooter {...managementFooter} />
    </div>
  );
}
