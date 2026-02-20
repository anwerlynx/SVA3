import { InstituteNavbar } from "@/components/institute/InstituteNavbar";
import { InstituteFooter } from "@/components/institute/InstituteFooter";
import { engineeringNavbar, engineeringFooter } from "@/lib/instituteConfig";
import { InstituteHero } from "@/components/institute/InstituteHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Building2, Cpu, Settings, BookOpen, ArrowLeft } from "lucide-react";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { Link } from "wouter";

const departments = [
  { slug: "power-telecom", icon: Zap, nameAr: "هندسة القوى والاتصالات الكهربائية", nameEn: "Electrical Power & Telecom", descAr: "يهتم القسم بدراسة أنظمة الطاقة الكهربائية وهندسة الاتصالات والإلكترونيات. يؤهل القسم خريجين متخصصين في تصميم وتشغيل وصيانة محطات توليد الكهرباء وشبكات النقل والتوزيع وأنظمة الاتصالات الحديثة.", descEn: "The department specializes in electrical energy systems and telecommunications engineering.", coursesAr: ["دوائر كهربائية", "آلات كهربائية", "إلكترونيات القوى", "أنظمة اتصالات", "هندسة التحكم", "شبكات نقل القدرة"], coursesEn: ["Electrical Circuits", "Electrical Machines", "Power Electronics", "Communication Systems", "Control Engineering", "Power Networks"], bgClass: "bg-blue-50 dark:bg-blue-900/20", textClass: "text-blue-700 dark:text-blue-400" },
  { slug: "civil", icon: Building2, nameAr: "الهندسة المدنية والبيئية", nameEn: "Civil & Environmental Engineering", descAr: "يعد القسم مهندسين مدنيين متخصصين في تصميم وتنفيذ المنشآت المختلفة والبنية التحتية. يشمل البرنامج دراسة الهندسة الإنشائية وهندسة الأساسات والطرق والمياه والبيئة.", descEn: "Prepares civil engineers specialized in designing and implementing various structures and infrastructure.", coursesAr: ["خرسانة مسلحة", "ميكانيكا التربة", "هندسة الطرق", "هندسة المياه", "تحليل إنشائي", "إدارة مشروعات"], coursesEn: ["Reinforced Concrete", "Soil Mechanics", "Highway Engineering", "Water Engineering", "Structural Analysis", "Project Management"], bgClass: "bg-indigo-50 dark:bg-indigo-900/20", textClass: "text-indigo-700 dark:text-indigo-400" },
  { slug: "architecture", icon: Cpu, nameAr: "الهندسة المعمارية والتصميم", nameEn: "Architecture & Design", descAr: "يركز القسم على إعداد مهندسين معماريين قادرين على الإبداع في التصميم المعماري والتخطيط العمراني مع مراعاة الجوانب البيئية والاستدامة والهوية المعمارية.", descEn: "Focuses on preparing creative architectural engineers in design and urban planning.", coursesAr: ["تصميم معماري", "تاريخ العمارة", "تخطيط عمراني", "إنشاءات معمارية", "تصميم داخلي", "رسم معماري بالحاسب"], coursesEn: ["Architectural Design", "History of Architecture", "Urban Planning", "Architectural Construction", "Interior Design", "CAD Drawing"], bgClass: "bg-violet-50 dark:bg-violet-900/20", textClass: "text-violet-700 dark:text-violet-400" },
  { slug: "control-computer", icon: Settings, nameAr: "هندسة التحكم والحاسبات", nameEn: "Control & Computer Engineering", descAr: "يجمع القسم بين هندسة التحكم الآلي وعلوم الحاسب لتخريج مهندسين متخصصين في أنظمة التحكم الذكية والبرمجيات والذكاء الاصطناعي وإنترنت الأشياء.", descEn: "Combines automatic control and computer science for intelligent systems and AI.", coursesAr: ["نظم تحكم آلي", "برمجة متقدمة", "ذكاء اصطناعي", "معالجة إشارات", "شبكات حاسب", "نظم مدمجة"], coursesEn: ["Automatic Control", "Advanced Programming", "Artificial Intelligence", "Signal Processing", "Computer Networks", "Embedded Systems"], bgClass: "bg-sky-50 dark:bg-sky-900/20", textClass: "text-sky-700 dark:text-sky-400" },
];

export default function EngineeringDepartments() {
  const { language, direction } = useLanguage();
  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={language === "ar" ? "الأقسام - المعهد العالي للهندسة" : "Departments - Higher Institute of Engineering"} description={language === "ar" ? "أقسام المعهد العالي للهندسة" : "Engineering Institute Departments"} />
      <InstituteNavbar {...engineeringNavbar} />
      <InstituteHero title={language === "ar" ? "الأقسام الهندسية" : "Engineering Departments"} subtitle={language === "ar" ? "أربعة أقسام هندسية متخصصة تغطي مختلف مجالات الهندسة" : "Four specialized departments covering various engineering fields"} image="/figmaAssets/rectangle-17.png" overlayColor="from-blue-900/60 to-blue-900/80" />

      <section className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1100px] mx-auto px-4 md:px-8">
          <div className="flex flex-col gap-16">
            {departments.map((dept, index) => (
              <AnimatedSection key={index} delay={0.1} direction={index % 2 === 0 ? "right" : "left"}>
                <Card className="rounded-3xl border-0 shadow-lg overflow-hidden bg-white dark:bg-neutral-900 dark:border-neutral-800">
                  <CardContent className="p-0">
                    <div className="flex flex-col lg:flex-row" dir={direction}>
                      <div className={`lg:w-1/3 p-8 flex flex-col items-center justify-center text-center gap-4 ${dept.bgClass}`}>
                        <div className="w-20 h-20 rounded-full bg-white/80 dark:bg-white/10 flex items-center justify-center"><dept.icon className={`w-10 h-10 ${dept.textClass}`} /></div>
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
            ))}
          </div>
        </div>
      </section>

      <InstituteFooter {...engineeringFooter} />
    </div>
  );
}
