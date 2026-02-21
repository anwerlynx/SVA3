import { useState, useEffect } from "react";
import { InstituteNavbar } from "@/components/institute/InstituteNavbar";
import { InstituteFooter } from "@/components/institute/InstituteFooter";
import { InstituteHero } from "@/components/institute/InstituteHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Database, Calculator, Landmark, BarChart3, Loader2, BookOpen, ArrowLeft } from "lucide-react";
import { managementNavbar, managementFooter } from "@/lib/instituteConfig";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Link } from "wouter";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  database: Database,
  calculator: Calculator,
  landmark: Landmark,
  "bar-chart": BarChart3,
};

const coursesBySlug: Record<string, { coursesAr: string[]; coursesEn: string[] }> = {
  mis: {
    coursesAr: ["تحليل وتصميم النظم", "قواعد البيانات", "البرمجة", "التجارة الإلكترونية", "شبكات الحاسب"],
    coursesEn: ["Systems Analysis & Design", "Databases", "Programming", "E-Commerce", "Computer Networks"],
  },
  accounting: {
    coursesAr: ["محاسبة مالية", "محاسبة تكاليف", "مراجعة", "ضرائب", "محاسبة إدارية"],
    coursesEn: ["Financial Accounting", "Cost Accounting", "Auditing", "Taxation", "Managerial Accounting"],
  },
  finance: {
    coursesAr: ["اقتصاد مالي", "إدارة البنوك", "أسواق مالية", "تمويل واستثمار", "تأمين"],
    coursesEn: ["Financial Economics", "Bank Management", "Financial Markets", "Finance & Investment", "Insurance"],
  },
  "business-admin": {
    coursesAr: ["إدارة استراتيجية", "تسويق رقمي", "إدارة موارد بشرية", "ريادة أعمال", "سلوك تنظيمي"],
    coursesEn: ["Strategic Management", "Digital Marketing", "HR Management", "Entrepreneurship", "Organizational Behavior"],
  },
};

const themeBySlug: Record<string, { bgClass: string; textClass: string }> = {
  mis: { bgClass: "bg-green-50 dark:bg-green-900/20", textClass: "text-green-700 dark:text-green-400" },
  accounting: { bgClass: "bg-emerald-50 dark:bg-emerald-900/20", textClass: "text-emerald-700 dark:text-emerald-400" },
  finance: { bgClass: "bg-teal-50 dark:bg-teal-900/20", textClass: "text-teal-700 dark:text-teal-400" },
  "business-admin": { bgClass: "bg-cyan-50 dark:bg-cyan-900/20", textClass: "text-cyan-700 dark:text-cyan-400" },
};

interface Department {
  id: string;
  nameAr: string;
  nameEn: string;
  institute: string;
  slug: string;
  descriptionAr: string;
  descriptionEn: string;
  iconName: string;
  sortOrder: number;
  headOfDepartmentId?: string | null;
  isActive: boolean;
}

export default function ManagementDepartments() {
  const { language, direction } = useLanguage();
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await fetch("/api/departments");
        const allDepartments: Department[] = await response.json();
        const filtered = allDepartments.filter((dept) => dept.institute === "management");
        setDepartments(filtered);
      } catch (error) {
        console.error("Error fetching departments:", error);
        setDepartments([]);
      } finally {
        setLoading(false);
      }
    };

    fetchDepartments();
  }, []);
  const pageTitle = language === "ar" ? "الأقسام الأكاديمية" : "Academic Departments";
  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={language === "ar" ? "الأقسام - المعهد العالي للإدارة" : "Departments - Higher Institute of Management"} description={language === "ar" ? "أقسام المعهد العالي للإدارة" : "Management Institute Departments"} />
      <InstituteNavbar {...managementNavbar} />
      <InstituteHero title={language === "ar" ? "الأقسام الأكاديمية" : "Academic Departments"} subtitle={language === "ar" ? "أربعة أقسام متميزة تغطي مختلف مجالات الإدارة والأعمال" : "Four distinguished departments covering management and business fields"} image="/figmaAssets/rectangle-16.png" overlayColor="from-green-900/60 to-green-900/80" />

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 pt-6">
        <Breadcrumb
          items={[
            { label: language === 'ar' ? 'الرئيسية' : 'Home', href: '/' },
            { label: language === 'ar' ? 'معهد الإدارة' : 'Management Institute', href: '/institute/management' },
            { label: pageTitle },
          ]}
        />
      </div>

      <section className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1100px] mx-auto px-4 md:px-8">
          <div className="flex flex-col gap-16">
            {loading ? (
              <div className="flex justify-center items-center py-16">
                <Loader2 className="w-12 h-12 animate-spin text-green-700 dark:text-green-400" />
              </div>
            ) : (
              departments.map((dept, index) => {
                const courses = coursesBySlug[dept.slug] || { coursesAr: [], coursesEn: [] };
                const theme = themeBySlug[dept.slug] || { bgClass: "bg-gray-50 dark:bg-gray-900/20", textClass: "text-gray-700 dark:text-gray-400" };
                const IconComponent = iconMap[dept.iconName] || Database;

                return (
                  <AnimatedSection key={dept.id} delay={0.1} direction={index % 2 === 0 ? "right" : "left"}>
                    <Card className="rounded-3xl border-0 shadow-lg overflow-hidden bg-white dark:bg-neutral-900 dark:border-neutral-800">
                      <CardContent className="p-0">
                        <div className="flex flex-col lg:flex-row" dir={direction}>
                          <div className={`lg:w-1/3 p-8 flex flex-col items-center justify-center text-center gap-4 ${theme.bgClass}`}>
                            <div className="w-20 h-20 rounded-full bg-white/80 dark:bg-white/10 flex items-center justify-center">
                              <IconComponent className={`w-10 h-10 ${theme.textClass}`} />
                            </div>
                            <h3 className="font-bold text-xl text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                              {language === "ar" ? dept.nameAr : dept.nameEn}
                            </h3>
                          </div>
                          <div className="lg:w-2/3 p-8 flex flex-col gap-4">
                            <p className="text-neutral-600 dark:text-neutral-300 text-base leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">
                              {language === "ar" ? dept.descriptionAr : dept.descriptionEn}
                            </p>
                            <div>
                              <h4 className="font-bold text-sm text-neutral-800 dark:text-neutral-200 [font-family:'Almarai',Helvetica] mb-3 flex items-center gap-2 transition-colors duration-300">
                                <BookOpen className="w-4 h-4" /> {language === "ar" ? "أبرز المقررات:" : "Key Courses:"}
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {(language === "ar" ? courses.coursesAr : courses.coursesEn).map((course, ci) => (
                                  <span key={ci} className="bg-gray-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 px-3 py-1 rounded-full text-xs [font-family:'Almarai',Helvetica] transition-colors duration-300">
                                    {course}
                                  </span>
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
                );
              })
            )}
          </div>
        </div>
      </section>

      <InstituteFooter {...managementFooter} />
    </div>
  );
}
