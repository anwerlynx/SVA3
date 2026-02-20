import { InstituteNavbar } from "@/components/institute/InstituteNavbar";
import { InstituteFooter } from "@/components/institute/InstituteFooter";
import { InstituteHero } from "@/components/institute/InstituteHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Clock, Users, Wifi, BookMarked, Database, FileText, CheckCircle2 } from "lucide-react";
import { engineeringNavbar, engineeringFooter } from "@/lib/instituteConfig";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";

export default function EngineeringLibrary() {
  const { language, direction } = useLanguage();

  const features = [
    { icon: BookOpen, title: language === "ar" ? "مراجع هندسية" : "Engineering References", desc: language === "ar" ? "أكثر من 8000 كتاب ومرجع هندسي في مختلف التخصصات مع دوريات عالمية متخصصة" : "Over 8000+ books and engineering references across various specializations with specialized international journals" },
    { icon: Wifi, title: language === "ar" ? "مكتبة إلكترونية" : "Digital Library", desc: language === "ar" ? "وصول لقواعد بيانات IEEE وSpringer وElsevier وScienceDirect للأبحاث والمراجع العلمية" : "Access to IEEE, Springer, Elsevier, and ScienceDirect databases for research and scientific references" },
    { icon: Clock, title: language === "ar" ? "ساعات عمل مرنة" : "Flexible Hours", desc: language === "ar" ? "المكتبة متاحة من السبت إلى الخميس من 8 صباحاً حتى 9 مساءً لتناسب جداول الطلاب" : "Library is open Saturday to Thursday from 8 AM to 9 PM to suit student schedules" },
    { icon: Users, title: language === "ar" ? "غرف مشاريع" : "Project Rooms", desc: language === "ar" ? "غرف مجهزة بحواسيب وشاشات عرض للعمل على مشاريع التخرج والأبحاث الهندسية الجماعية" : "Rooms equipped with computers and display screens for graduation projects and group engineering research" },
    { icon: Database, title: language === "ar" ? "أرشيف مشاريع التخرج" : "Graduation Projects Archive", desc: language === "ar" ? "أرشيف رقمي شامل لمشاريع التخرج الهندسية مع الرسومات والمخططات الفنية" : "Comprehensive digital archive of engineering graduation projects with drawings and technical plans" },
    { icon: FileText, title: language === "ar" ? "خدمات الطباعة والنسخ" : "Printing Services", desc: language === "ar" ? "خدمات طباعة هندسية بأحجام كبيرة A1 وA0 للمخططات والرسومات الهندسية" : "Large format A1 and A0 engineering printing services for plans and engineering drawings" },
  ];

  const stats = [
    { value: 8000, suffix: "+", label: language === "ar" ? "كتاب ومرجع" : "Books & References" },
    { value: 200, suffix: "+", label: language === "ar" ? "دورية علمية" : "Scientific Journals" },
    { value: 80, suffix: "", label: language === "ar" ? "مقعد دراسي" : "Study Seats" },
    { value: 5, suffix: "", label: language === "ar" ? "غرف مشاريع" : "Project Rooms" },
  ];

  const rules = language === "ar" ? [
    "يجب الحفاظ على الهدوء داخل المكتبة",
    "يُسمح باستعارة 3 كتب كحد أقصى لمدة أسبوعين",
    "يُحظر إدخال الأطعمة والمشروبات",
    "يجب إعادة الكتب في موعدها لتجنب الغرامات",
    "يُرجى التعامل بحرص مع المراجع الهندسية والدوريات",
    "استخدام أجهزة الحاسب في أغراض الدراسة والبحث فقط",
  ] : [
    "Maintain silence inside the library",
    "Maximum 3 books can be borrowed for 2 weeks",
    "Food and beverages are not allowed",
    "Books must be returned on time to avoid fines",
    "Please handle engineering references and journals with care",
    "Computers are for study and research purposes only",
  ];

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={language === "ar" ? "المكتبة - المعهد العالي للهندسة" : "Library - Higher Institute of Engineering"} description={language === "ar" ? "مكتبة المعهد العالي للهندسة - مراجع ومصادر هندسية" : "Higher Institute of Engineering Library - Engineering references and resources"} />
      <InstituteNavbar {...engineeringNavbar} />
      <InstituteHero title={language === "ar" ? "المكتبة" : "Library"} subtitle={language === "ar" ? "مراجع ومصادر هندسية متنوعة لدعم البحث والتعلم" : "Diverse engineering references and resources to support research and learning"} image="/figmaAssets/rectangle-17.png" overlayColor="from-blue-900/60 to-blue-900/80" />

      <section className="py-16 bg-blue-700 dark:bg-blue-900 transition-colors duration-300">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8" dir={direction}>
            {stats.map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.15} direction="up">
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white [font-family:'Almarai',Helvetica]">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <span className="text-white/70 text-sm [font-family:'Almarai',Helvetica]">{stat.label}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1100px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-16" dir={direction}>
              <BookMarked className="w-10 h-10 text-blue-700 dark:text-blue-500 mx-auto mb-4 transition-colors duration-300" />
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300" data-testid="text-library-services">{language === "ar" ? "خدمات المكتبة" : "Library Services"}</h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-lg mt-4 max-w-[600px] mx-auto [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "نوفر بيئة مثالية للبحث والدراسة مع مجموعة شاملة من الخدمات الهندسية" : "We provide an ideal environment for research and study with a comprehensive range of engineering services"}</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" dir={direction}>
            {features.map((f, i) => (
              <AnimatedSection key={i} delay={i * 0.08} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full bg-white dark:bg-neutral-900 dark:border-neutral-800" data-testid={`card-library-feature-${i}`}>
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center transition-colors duration-300"><f.icon className="w-7 h-7 text-blue-700 dark:text-blue-500 transition-colors duration-300" /></div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{f.title}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{f.desc}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[800px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <Card className="rounded-3xl border-0 shadow-lg bg-white dark:bg-neutral-950 dark:border-neutral-800 transition-colors duration-300">
              <CardContent className="p-8 md:p-10" dir={direction}>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] mb-6 transition-colors duration-300">{language === "ar" ? "قواعد وإرشادات المكتبة" : "Library Rules & Guidelines"}</h3>
                <div className="flex flex-col gap-4">
                  {rules.map((rule, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-700 dark:text-blue-500 mt-0.5 flex-shrink-0 transition-colors duration-300" />
                      <span className="text-neutral-600 dark:text-neutral-300 [font-family:'Almarai',Helvetica] transition-colors duration-300">{rule}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <InstituteFooter {...engineeringFooter} />
    </div>
  );
}
