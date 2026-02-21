import { InstituteNavbar } from "@/components/institute/InstituteNavbar";
import { InstituteFooter } from "@/components/institute/InstituteFooter";
import { InstituteHero } from "@/components/institute/InstituteHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Clock, Users, Wifi, BookMarked, Database, FileText, CheckCircle2 } from "lucide-react";
import { managementNavbar, managementFooter } from "@/lib/instituteConfig";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { Breadcrumb } from "@/components/Breadcrumb";

export default function ManagementLibrary() {
  const { language, direction } = useLanguage();
  const pageTitle = language === "ar" ? "المكتبة" : "Library";

  const features = [
    { icon: BookOpen, title: language === "ar" ? "مراجع متنوعة" : "Diverse References", desc: language === "ar" ? "أكثر من 5000 كتاب ومرجع أكاديمي في مجالات الإدارة والأعمال والمحاسبة والعلوم المالية ونظم المعلومات" : "Over 5,000 books and academic references in management, business, accounting, financial sciences, and information systems" },
    { icon: Wifi, title: language === "ar" ? "مكتبة إلكترونية" : "Digital Library", desc: language === "ar" ? "وصول مجاني لقواعد بيانات أكاديمية عالمية مثل EBSCO وEmerald ودوريات علمية محكّمة" : "Free access to global academic databases such as EBSCO and Emerald and peer-reviewed scientific journals" },
    { icon: Clock, title: language === "ar" ? "ساعات عمل مرنة" : "Flexible Hours", desc: language === "ar" ? "المكتبة متاحة من السبت إلى الخميس من 8 صباحاً حتى 8 مساءً لتناسب جداول الطلاب" : "The library is open Saturday to Thursday from 8 AM to 8 PM to suit student schedules" },
    { icon: Users, title: language === "ar" ? "غرف دراسة جماعية" : "Group Study Rooms", desc: language === "ar" ? "غرف مجهزة بشاشات عرض وسبورات لتيسير العمل الجماعي على المشاريع والأبحاث" : "Rooms equipped with display screens and whiteboards to facilitate group work on projects and research" },
    { icon: Database, title: language === "ar" ? "أرشيف رسائل التخرج" : "Graduation Thesis Archive", desc: language === "ar" ? "أرشيف رقمي شامل لجميع رسائل ومشاريع التخرج لطلاب المعهد على مدار السنوات" : "A comprehensive digital archive of all graduation theses and projects by institute students over the years" },
    { icon: FileText, title: language === "ar" ? "خدمات الطباعة والنسخ" : "Printing & Copying Services", desc: language === "ar" ? "خدمات طباعة ونسخ وتصوير متاحة للطلاب وأعضاء هيئة التدريس بأسعار رمزية" : "Printing, copying, and photocopying services available for students and faculty at nominal prices" },
  ];

  const stats = [
    { value: 5000, suffix: "+", label: language === "ar" ? "كتاب ومرجع" : "Books & References" },
    { value: 120, suffix: "+", label: language === "ar" ? "دورية علمية" : "Scientific Journals" },
    { value: 50, suffix: "", label: language === "ar" ? "مقعد دراسي" : "Study Seats" },
    { value: 3, suffix: "", label: language === "ar" ? "غرف دراسة" : "Study Rooms" },
  ];

  const rules = language === "ar" ? [
    "يجب الحفاظ على الهدوء داخل المكتبة",
    "يُسمح باستعارة 3 كتب كحد أقصى لمدة أسبوعين",
    "يُحظر إدخال الأطعمة والمشروبات",
    "يجب إعادة الكتب في موعدها لتجنب الغرامات",
    "يُرجى التعامل بحرص مع الكتب والمراجع",
  ] : [
    "Silence must be maintained inside the library",
    "A maximum of 3 books may be borrowed for two weeks",
    "Food and beverages are not allowed",
    "Books must be returned on time to avoid fines",
    "Please handle books and references with care",
  ];

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={language === "ar" ? "المكتبة - المعهد العالي للإدارة" : "Library - Higher Institute of Management"} description={language === "ar" ? "مكتبة المعهد العالي للإدارة - مصادر ومراجع أكاديمية متنوعة" : "Higher Institute of Management Library - Diverse academic sources and references"} />
      <InstituteNavbar {...managementNavbar} />
      <InstituteHero title={language === "ar" ? "المكتبة" : "Library"} subtitle={language === "ar" ? "مصادر ومراجع أكاديمية متنوعة لدعم رحلتك التعليمية" : "Diverse academic sources and references to support your educational journey"} image="/figmaAssets/rectangle-16.png" overlayColor="from-green-900/60 to-green-900/80" />

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 pt-6">
        <Breadcrumb
          items={[
            { label: language === 'ar' ? 'الرئيسية' : 'Home', href: '/' },
            { label: language === 'ar' ? 'معهد الإدارة' : 'Management Institute', href: '/institute/management' },
            { label: pageTitle },
          ]}
        />
      </div>

      <section className="py-16 bg-green-700 dark:bg-green-900 transition-colors duration-300">
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
              <BookMarked className="w-10 h-10 text-green-700 dark:text-green-500 mx-auto mb-4 transition-colors duration-300" />
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300" data-testid="text-library-services">{language === "ar" ? "خدمات المكتبة" : "Library Services"}</h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-lg mt-4 max-w-[600px] mx-auto [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "نوفر بيئة مثالية للبحث والدراسة مع مجموعة شاملة من الخدمات" : "We provide an ideal environment for research and study with a comprehensive range of services"}</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" dir={direction}>
            {features.map((f, i) => (
              <AnimatedSection key={i} delay={i * 0.08} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full bg-white dark:bg-neutral-900 dark:border-neutral-800" data-testid={`card-library-feature-${i}`}>
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center transition-colors duration-300"><f.icon className="w-7 h-7 text-green-700 dark:text-green-500 transition-colors duration-300" /></div>
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
                      <CheckCircle2 className="w-5 h-5 text-green-700 dark:text-green-500 mt-0.5 flex-shrink-0 transition-colors duration-300" />
                      <span className="text-neutral-600 dark:text-neutral-300 [font-family:'Almarai',Helvetica] transition-colors duration-300">{rule}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <InstituteFooter {...managementFooter} />
    </div>
  );
}