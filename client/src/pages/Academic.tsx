import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Cpu, Building2, Zap, Settings, BarChart3, Database, Landmark, Calculator, ArrowRight } from "lucide-react";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { Link } from "wouter";

function DepartmentCard({ dept, index }: { dept: { icon: React.ElementType; name: string; desc: string; href: string }; index: number }) {
  return (
    <AnimatedSection delay={index * 0.1} direction="up">
      <Link href={dept.href}>
        <Card className="rounded-2xl border-0 shadow-sm hover:shadow-xl transition-shadow cursor-pointer h-full group bg-white dark:bg-neutral-900">
          <CardContent className="p-6 flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center group-hover:bg-green-700 dark:group-hover:bg-green-600 transition-all">
              <dept.icon className="w-8 h-8 text-green-700 dark:text-green-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{dept.name}</h3>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{dept.desc}</p>
          </CardContent>
        </Card>
      </Link>
    </AnimatedSection>
  );
}

export default function Academic() {
  const { t, direction, language } = useLanguage();

  const engineeringDepts = language === 'ar' ? [
    { icon: Building2, name: "الهندسة المدنية", desc: "تصميم وتنفيذ المنشآت والبنية التحتية", href: "/institute/engineering/department/civil" },
    { icon: Cpu, name: "الهندسة المعمارية", desc: "التصميم المعماري والتخطيط العمراني", href: "/institute/engineering/department/architecture" },
    { icon: Zap, name: "الهندسة الكهربائية", desc: "أنظمة الطاقة والإلكترونيات", href: "/institute/engineering/department/power-telecom" },
    { icon: Settings, name: "الهندسة الميكانيكية", desc: "التصميم الميكانيكي والتصنيع", href: "/institute/engineering/department/control-computer" },
  ] : [
    { icon: Building2, name: "Civil Engineering", desc: "Design and implementation of structures and infrastructure", href: "/institute/engineering/department/civil" },
    { icon: Cpu, name: "Architectural Engineering", desc: "Architectural design and urban planning", href: "/institute/engineering/department/architecture" },
    { icon: Zap, name: "Electrical Engineering", desc: "Power systems and electronics", href: "/institute/engineering/department/power-telecom" },
    { icon: Settings, name: "Mechanical Engineering", desc: "Mechanical design and manufacturing", href: "/institute/engineering/department/control-computer" },
  ];

  const managementDepts = language === 'ar' ? [
    { icon: BarChart3, name: "إدارة الأعمال", desc: "التخطيط الاستراتيجي وإدارة المؤسسات", href: "/institute/management/department/business-admin" },
    { icon: Calculator, name: "المحاسبة", desc: "المحاسبة المالية والتكاليف والمراجعة", href: "/institute/management/department/accounting" },
    { icon: Database, name: "نظم المعلومات الإدارية", desc: "تحليل وتصميم نظم المعلومات", href: "/institute/management/department/mis" },
    { icon: Landmark, name: "العلوم المالية والمصرفية", desc: "الأسواق المالية والبنوك", href: "/institute/management/department/finance" },
  ] : [
    { icon: BarChart3, name: "Business Administration", desc: "Strategic planning and institutional management", href: "/institute/management/department/business-admin" },
    { icon: Calculator, name: "Accounting", desc: "Financial accounting, costing, and auditing", href: "/institute/management/department/accounting" },
    { icon: Database, name: "Management Information Systems", desc: "Analysis and design of information systems", href: "/institute/management/department/mis" },
    { icon: Landmark, name: "Banking & Financial Sciences", desc: "Financial markets and banking", href: "/institute/management/department/finance" },
  ];

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead
        title={language === 'ar' ? "البرامج الأكاديمية" : "Academic Programs"}
        description={language === 'ar' ? "البرامج والتخصصات الأكاديمية في معاهد الوادي العليا" : "Academic programs and specializations at Valley Higher Institutes"}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative w-full h-[50vh] min-h-[350px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" alt="Academic" src="/figmaAssets/rectangle-17.png" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        </div>
        <div className="relative z-10 text-center px-4">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold text-white [font-family:'Almarai',Helvetica] mb-4" dir={direction}>
              {language === 'ar' ? "الأقسام الأكاديمية" : "Academic Departments"}
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-[600px] mx-auto [font-family:'Almarai',Helvetica]" dir={direction}>
              {language === 'ar' ? "برامج أكاديمية متنوعة تلبي تطلعاتك المهنية" : "Diverse academic programs that meet your professional aspirations"}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 pt-6">
        <Breadcrumb
          items={[
            { label: language === 'ar' ? 'الرئيسية' : 'Home', href: '/' },
            { label: language === 'ar' ? 'الأقسام الأكاديمية' : 'Academic Departments' },
          ]}
        />
      </div>

      <section className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">

          {/* Engineering Institute */}
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-start gap-8 mb-12" dir={direction}>
              <div className="relative rounded-3xl overflow-hidden w-full md:w-1/2 h-[300px] md:h-[400px]">
                <img className="w-full h-full object-cover" alt="Engineering" src="/figmaAssets/rectangle-17.png" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-white [font-family:'Almarai',Helvetica]" dir={direction}>
                    {language === 'ar' ? "المعهد العالي للهندسة والتكنولوجيا" : "Higher Institute of Engineering & Technology"}
                  </h2>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-4 justify-center">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-1 bg-green-700 rounded-full" />
                  <span className="text-green-700 font-bold text-sm [font-family:'Almarai',Helvetica]">
                    {language === 'ar' ? "معهد الهندسة" : "Engineering Institute"}
                  </span>
                </div>
                <p className="text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">
                  {language === 'ar'
                    ? "يقدم المعهد العالي للهندسة والتكنولوجيا برامج أكاديمية متميزة تهدف إلى إعداد مهندسين مؤهلين قادرين على مواجهة تحديات العصر الحديث. يضم المعهد عدة أقسام تغطي مختلف التخصصات الهندسية."
                    : "The Higher Institute of Engineering and Technology offers distinguished academic programs aimed at preparing qualified engineers capable of facing the challenges of the modern era. The institute includes several departments covering various engineering specializations."}
                </p>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20" dir={direction}>
            {engineeringDepts.map((dept, index) => (
              <DepartmentCard key={index} dept={dept} index={index} />
            ))}
          </div>

          {/* Management Institute */}
          <AnimatedSection>
            <div className="flex flex-col md:flex-row-reverse items-start gap-8 mb-12" dir={direction}>
              <div className="relative rounded-3xl overflow-hidden w-full md:w-1/2 h-[300px] md:h-[400px]">
                <img className="w-full h-full object-cover" alt="Management" src="/figmaAssets/rectangle-16.png" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-white [font-family:'Almarai',Helvetica]" dir={direction}>
                    {language === 'ar' ? "المعهد العالي للإدارة والمالية ونظم المعلومات" : "Higher Institute of Management, Finance & MIS"}
                  </h2>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-4 justify-center">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-1 bg-green-700 rounded-full" />
                  <span className="text-green-700 font-bold text-sm [font-family:'Almarai',Helvetica]">
                    {language === 'ar' ? "معهد الإدارة" : "Management Institute"}
                  </span>
                </div>
                <p className="text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">
                  {language === 'ar'
                    ? "يهدف المعهد العالي للإدارة والمالية ونظم المعلومات إلى تخريج كوادر متميزة في مجالات الإدارة والأعمال والعلوم المالية ونظم المعلومات، مع التركيز على المهارات العملية والتطبيقية."
                    : "The Higher Institute of Management, Finance and Information Systems aims to graduate distinguished cadres in the fields of management, business, financial sciences and information systems, with a focus on practical and applied skills."}
                </p>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" dir={direction}>
            {managementDepts.map((dept, index) => (
              <DepartmentCard key={index} dept={dept} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-700 dark:bg-green-800 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center" dir={direction}>
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white [font-family:'Almarai',Helvetica] mb-4">
              {language === 'ar' ? "استكشف معاهدنا" : "Explore Our Institutes"}
            </h2>
            <p className="text-white/80 text-lg max-w-[600px] mx-auto [font-family:'Almarai',Helvetica] mb-10">
              {language === 'ar' ? "تعرف على المزيد حول برامجنا الأكاديمية وخدماتنا المتميزة" : "Learn more about our academic programs and distinguished services"}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/institute/engineering">
                <span className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-700 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-colors cursor-pointer [font-family:'Almarai',Helvetica]">
                  {language === 'ar' ? "معهد الهندسة والتكنولوجيا" : "Engineering Institute"}
                  <ArrowRight className={`w-5 h-5 ${direction === 'rtl' ? 'rotate-180' : ''}`} />
                </span>
              </Link>
              <Link href="/institute/management">
                <span className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border-2 border-white text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-colors cursor-pointer [font-family:'Almarai',Helvetica]">
                  {language === 'ar' ? "معهد الإدارة والمالية" : "Management Institute"}
                  <ArrowRight className={`w-5 h-5 ${direction === 'rtl' ? 'rotate-180' : ''}`} />
                </span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
