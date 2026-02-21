import { useState, useEffect } from "react";
import { InstituteNavbar } from "@/components/institute/InstituteNavbar";
import { InstituteFooter } from "@/components/institute/InstituteFooter";
import { engineeringNavbar, engineeringFooter } from "@/lib/instituteConfig";
import { InstituteHero } from "@/components/institute/InstituteHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Building2, Cpu, Radio, Loader2, BookOpen, ArrowLeft } from "lucide-react";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Link } from "wouter";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  zap: Zap,
  building: Building2,
  home: Cpu,
  radio: Radio,
};

const coursesBySlug: Record<string, { coursesAr: string[]; coursesEn: string[] }> = {
  "power-telecom": {
    coursesAr: ["دوائر كهربائية", "آلات كهربائية", "إلكترونيات القوى", "أنظمة اتصالات", "هندسة التحكم", "شبكات نقل القدرة"],
    coursesEn: ["Electrical Circuits", "Electrical Machines", "Power Electronics", "Communication Systems", "Control Engineering", "Power Networks"],
  },
  civil: {
    coursesAr: ["خرسانة مسلحة", "ميكانيكا التربة", "هندسة الطرق", "هندسة المياه", "تحليل إنشائي", "إدارة مشروعات"],
    coursesEn: ["Reinforced Concrete", "Soil Mechanics", "Highway Engineering", "Water Engineering", "Structural Analysis", "Project Management"],
  },
  architecture: {
    coursesAr: ["تصميم معماري", "تاريخ العمارة", "تخطيط عمراني", "إنشاءات معمارية", "تصميم داخلي", "رسم معماري بالحاسب"],
    coursesEn: ["Architectural Design", "History of Architecture", "Urban Planning", "Architectural Construction", "Interior Design", "CAD Drawing"],
  },
  "control-computer": {
    coursesAr: ["نظم تحكم آلي", "برمجة متقدمة", "ذكاء اصطناعي", "معالجة إشارات", "شبكات حاسب", "نظم مدمجة"],
    coursesEn: ["Automatic Control", "Advanced Programming", "Artificial Intelligence", "Signal Processing", "Computer Networks", "Embedded Systems"],
  },
};

const themeBySlug: Record<string, { bgClass: string; textClass: string }> = {
  "power-telecom": { bgClass: "bg-blue-50 dark:bg-blue-900/20", textClass: "text-blue-700 dark:text-blue-400" },
  civil: { bgClass: "bg-indigo-50 dark:bg-indigo-900/20", textClass: "text-indigo-700 dark:text-indigo-400" },
  architecture: { bgClass: "bg-violet-50 dark:bg-violet-900/20", textClass: "text-violet-700 dark:text-violet-400" },
  "control-computer": { bgClass: "bg-sky-50 dark:bg-sky-900/20", textClass: "text-sky-700 dark:text-sky-400" },
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

export default function EngineeringDepartments() {
  const { language, direction } = useLanguage();
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await fetch("/api/departments");
        const allDepartments: Department[] = await response.json();
        const filtered = allDepartments.filter((dept) => dept.institute === "engineering");
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
  const pageTitle = language === "ar" ? "الأقسام الهندسية" : "Engineering Departments";
  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={language === "ar" ? "الأقسام - المعهد العالي للهندسة" : "Departments - Higher Institute of Engineering"} description={language === "ar" ? "أقسام المعهد العالي للهندسة" : "Engineering Institute Departments"} />
      <InstituteNavbar {...engineeringNavbar} />
      <InstituteHero title={language === "ar" ? "الأقسام الهندسية" : "Engineering Departments"} subtitle={language === "ar" ? "أربعة أقسام هندسية متخصصة تغطي مختلف مجالات الهندسة" : "Four specialized departments covering various engineering fields"} image="/figmaAssets/rectangle-17.png" overlayColor="from-blue-900/60 to-blue-900/80" />

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 pt-6">
        <Breadcrumb
          items={[
            { label: language === 'ar' ? 'الرئيسية' : 'Home', href: '/' },
            { label: language === 'ar' ? 'معهد الهندسة' : 'Engineering Institute', href: '/institute/engineering' },
            { label: pageTitle },
          ]}
        />
      </div>

      <section className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1100px] mx-auto px-4 md:px-8">
          <div className="flex flex-col gap-16">
            {loading ? (
              <div className="flex justify-center items-center py-16">
                <Loader2 className="w-12 h-12 animate-spin text-blue-700 dark:text-blue-400" />
              </div>
            ) : (
              departments.map((dept, index) => {
                const courses = coursesBySlug[dept.slug] || { coursesAr: [], coursesEn: [] };
                const theme = themeBySlug[dept.slug] || { bgClass: "bg-gray-50 dark:bg-gray-900/20", textClass: "text-gray-700 dark:text-gray-400" };
                const IconComponent = iconMap[dept.iconName] || Building2;

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
                            <Link href={`/institute/engineering/department/${dept.slug}`}>
                              <span className="inline-flex items-center gap-2 mt-2 px-6 py-2.5 rounded-full bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium [font-family:'Almarai',Helvetica] transition-all cursor-pointer">
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

      <InstituteFooter {...engineeringFooter} />
    </div>
  );
}
