import { InstituteNavbar } from "@/components/institute/InstituteNavbar";
import { InstituteFooter } from "@/components/institute/InstituteFooter";
import { InstituteHero } from "@/components/institute/InstituteHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, FileText } from "lucide-react";
import { managementNavbar, managementFooter } from "@/lib/instituteConfig";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";

export default function ManagementAdmission() {
  const { language, direction } = useLanguage();

  const requirements = language === "ar" ? [
    "الحصول على شهادة الثانوية العامة (شعبة أدبي أو علمي) أو ما يعادلها",
    "استيفاء الحد الأدنى للقبول المحدد من المجلس الأعلى للجامعات",
    "اجتياز الكشف الطبي",
    "أصل شهادة الثانوية العامة",
    "6 صور شخصية حديثة",
    "صورة بطاقة الرقم القومي",
    "شهادة الميلاد كمبيوتر",
    "نموذج 2 جند للذكور",
    "موقف التجنيد للذكور فوق 19 سنة",
  ] : [
    "High school diploma (any track) or equivalent",
    "Meeting the minimum admission score set by the Supreme Council of Universities",
    "Passing the medical examination",
    "Original high school diploma",
    "6 recent personal photos",
    "Copy of national ID card",
    "Computerized birth certificate",
    "Military form 2 for males",
    "Military status for males over 19 years old",
  ];

  const documents = language === "ar" ? [
    "استمارة التقديم الخاصة بالمعهد",
    "أصل شهادة الثانوية العامة أو ما يعادلها",
    "شهادة الميلاد الأصلية (كمبيوتر)",
    "صورة بطاقة الرقم القومي للطالب",
    "6 صور شخصية حديثة 4x6",
    "نموذج 2 جند (للطلاب الذكور)",
  ] : [
    "Institute application form",
    "Original high school diploma or equivalent",
    "Original birth certificate (computerized)",
    "Copy of student's national ID card",
    "6 recent personal photos 4x6",
    "Military form 2 (for male students)",
  ];

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={language === "ar" ? "القبول - المعهد العالي للإدارة" : "Admission - Higher Institute of Management"} description={language === "ar" ? "شروط ومتطلبات القبول في المعهد العالي للإدارة والمالية ونظم المعلومات" : "Admission requirements for the Higher Institute of Management, Finance, and Information Systems"} />
      <InstituteNavbar {...managementNavbar} />
      <InstituteHero title={language === "ar" ? "شروط الالتحاق" : "Admission Requirements"} subtitle={language === "ar" ? "متطلبات القبول والأوراق المطلوبة للالتحاق بالمعهد" : "Admission requirements and documents needed to join the institute"} image="/figmaAssets/rectangle-16.png" overlayColor="from-green-900/60 to-green-900/80" />

      <section className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[900px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <Card className="rounded-3xl border-0 shadow-lg mb-12 bg-white dark:bg-neutral-900 dark:border-neutral-800"><CardContent className="p-8" dir={direction}>
              <div className="flex items-center gap-3 mb-6"><CheckCircle2 className="w-6 h-6 text-green-700 dark:text-green-500" /><h2 className="text-2xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "شروط القبول" : "Admission Requirements"}</h2></div>
              <div className="flex flex-col gap-3">
                {requirements.map((req, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors duration-300">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700 dark:text-neutral-300 [font-family:'Almarai',Helvetica] transition-colors duration-300">{req}</span>
                  </div>
                ))}
              </div>
            </CardContent></Card>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Card className="rounded-3xl border-0 shadow-lg bg-white dark:bg-neutral-900 dark:border-neutral-800"><CardContent className="p-8" dir={direction}>
              <div className="flex items-center gap-3 mb-6"><FileText className="w-6 h-6 text-green-700 dark:text-green-500" /><h2 className="text-2xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "الأوراق المطلوبة" : "Required Documents"}</h2></div>
              <div className="flex flex-col gap-3">
                {documents.map((doc, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors duration-300">
                    <FileText className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700 dark:text-neutral-300 [font-family:'Almarai',Helvetica] transition-colors duration-300">{doc}</span>
                  </div>
                ))}
              </div>
            </CardContent></Card>
          </AnimatedSection>
        </div>
      </section>

      <InstituteFooter {...managementFooter} />
    </div>
  );
}
