import { InstituteNavbar } from "@/components/institute/InstituteNavbar";
import { InstituteFooter } from "@/components/institute/InstituteFooter";
import { InstituteHero } from "@/components/institute/InstituteHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Database, Calculator, Landmark, BarChart3, BookOpen, ArrowLeft } from "lucide-react";
import { managementNavbar, managementFooter } from "@/lib/instituteConfig";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { Link } from "wouter";

const departments = [
  { slug: "mis", icon: Database, nameAr: "نظم المعلومات الإدارية", nameEn: "Management Information Systems", descAr: "يهتم القسم بتحليل وتصميم وتطوير نظم المعلومات الإدارية، ويجمع بين علوم الحاسب والإدارة لتخريج متخصصين قادرين على بناء حلول تقنية للمؤسسات.", descEn: "Focuses on analyzing, designing and developing MIS, combining computer science and management.", coursesAr: ["تحليل وتصميم النظم", "قواعد البيانات", "البرمجة", "التجارة الإلكترونية", "شبكات الحاسب"], coursesEn: ["Systems Analysis & Design", "Databases", "Programming", "E-Commerce", "Computer Networks"], bgClass: "bg-green-50 dark:bg-green-900/20", textClass: "text-green-700 dark:text-green-400" },
  { slug: "accounting", icon: Calculator, nameAr: "المحاسبة", nameEn: "Accounting", descAr: "يعد القسم خريجين متميزين في المحاسبة المالية ومحاسبة التكاليف والمراجعة، مع التركيز على المعايير المحاسبية الدولية والتطبيقات العملية.", descEn: "Prepares distinguished graduates in financial and cost accounting with focus on international standards.", coursesAr: ["محاسبة مالية", "محاسبة تكاليف", "مراجعة", "ضرائب", "محاسبة إدارية"], coursesEn: ["Financial Accounting", "Cost Accounting", "Auditing", "Taxation", "Managerial Accounting"], bgClass: "bg-emerald-50 dark:bg-emerald-900/20", textClass: "text-emerald-700 dark:text-emerald-400" },
  { slug: "finance", icon: Landmark, nameAr: "العلوم المالية والمصرفية", nameEn: "Financial & Banking Sciences", descAr: "يركز القسم على إعداد متخصصين في الأسواق المالية والبنوك والاستثمار، مع فهم عميق للاقتصاد المالي والسياسات النقدية.", descEn: "Focuses on preparing specialists in financial markets, banking, and investment.", coursesAr: ["اقتصاد مالي", "إدارة البنوك", "أسواق مالية", "تمويل واستثمار", "تأمين"], coursesEn: ["Financial Economics", "Bank Management", "Financial Markets", "Finance & Investment", "Insurance"], bgClass: "bg-teal-50 dark:bg-teal-900/20", textClass: "text-teal-700 dark:text-teal-400" },
  { slug: "business-admin", icon: BarChart3, nameAr: "التسويق وإدارة الأعمال", nameEn: "Marketing & Business Administration", descAr: "يهدف القسم إلى تخريج قادة أعمال ومتخصصين في التسويق والإدارة الاستراتيجية، مع التركيز على المهارات القيادية والابتكار.", descEn: "Aims to graduate business leaders and marketing specialists with leadership skills.", coursesAr: ["إدارة استراتيجية", "تسويق رقمي", "إدارة موارد بشرية", "ريادة أعمال", "سلوك تنظيمي"], coursesEn: ["Strategic Management", "Digital Marketing", "HR Management", "Entrepreneurship", "Organizational Behavior"], bgClass: "bg-cyan-50 dark:bg-cyan-900/20", textClass: "text-cyan-700 dark:text-cyan-400" },
];

export default function ManagementDepartments() {
  const { language, direction } = useLanguage();
  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={language === "ar" ? "الأقسام - المعهد العالي للإدارة" : "Departments - Higher Institute of Management"} description={language === "ar" ? "أقسام المعهد العالي للإدارة" : "Management Institute Departments"} />
      <InstituteNavbar {...managementNavbar} />
      <InstituteHero title={language === "ar" ? "الأقسام الأكاديمية" : "Academic Departments"} subtitle={language === "ar" ? "أربعة أقسام متميزة تغطي مختلف مجالات الإدارة والأعمال" : "Four distinguished departments covering management and business fields"} image="/figmaAssets/rectangle-16.png" overlayColor="from-green-900/60 to-green-900/80" />

      <section className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1100px] mx-auto px-4 md:px-8">
          <div className="flex flex-col gap-16">
            {departments.map((dept, index) => (
              <AnimatedSection key={index} delay={0.1} direction={index % 2 === 0 ? "right" : "left"}>
                <Card className="rounded-3xl border-0 shadow-lg overflow-hidden bg-white dark:bg-neutral-900 dark:border-neutral-800">
                  <CardContent className="p-0">
                    <div className="flex flex-col lg:flex-row" dir={direction}>
                      <div className={`lg:w-1/3 p-8 flex flex-col items-center justify-center text-center gap-4 ${dept.bgClass}`}>
                        <div className="w-20 h-20 rounded-full bg-white/80 dark:bg-white/10 flex items-center justify-center">
                          <dept.icon className={`w-10 h-10 ${dept.textClass}`} />
                        </div>
                        <h3 className="font-bold text-xl text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? dept.nameAr : dept.nameEn}</h3>
                      </div>
                      <div className="lg:w-2/3 p-8 flex flex-col gap-4">
                        <p className="text-neutral-600 dark:text-neutral-300 text-base leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? dept.descAr : dept.descEn}</p>
                        <div>
                          <h4 className="font-bold text-sm text-neutral-800 dark:text-neutral-200 [font-family:'Almarai',Helvetica] mb-3 flex items-center gap-2 transition-colors duration-300"><BookOpen className="w-4 h-4" /> {language === "ar" ? "أبرز المقررات:" : "Key Courses:"}</h4>
                          <div className="flex flex-wrap gap-2">
                            {(language === "ar" ? dept.coursesAr : dept.coursesEn).map((course, ci) => (
                              <span key={ci} className="bg-gray-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 px-3 py-1 rounded-full text-xs [font-family:'Almarai',Helvetica] transition-colors duration-300">{course}</span>
                            ))}
                          </div>
                        </div>
                        <Link href={`/institute/management/department/${dept.slug}`}>
                          <span className="inline-flex items-center gap-2 mt-2 px-6 py-2.5 rounded-full bg-green-700 hover:bg-green-800 text-white text-sm font-medium [font-family:'Almarai',Helvetica] transition-all cursor-pointer">
                            {language === "ar" ? "تفاصيل القسم" : "Department Details"}
                            <ArrowLeft className={`w-4 h-4 ${direction === "ltr" ? "rotate-180" : ""}`} />
                          </span>
                        </Link>
                      </div>
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
