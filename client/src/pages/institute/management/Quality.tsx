import { InstituteNavbar } from "@/components/institute/InstituteNavbar";
import { InstituteFooter } from "@/components/institute/InstituteFooter";
import { InstituteHero } from "@/components/institute/InstituteHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Target, BarChart3, Users, Award, FileCheck, GraduationCap, CheckCircle2 } from "lucide-react";
import { managementNavbar, managementFooter } from "@/lib/instituteConfig";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";

export default function ManagementQuality() {
  const { language, direction } = useLanguage();

  const qualityAreas = [
    { icon: Target, title: language === "ar" ? "التخطيط الاستراتيجي" : "Strategic Planning", desc: language === "ar" ? "وضع خطط استراتيجية شاملة لتطوير الأداء الأكاديمي والإداري وفقاً لأحدث المعايير" : "Developing comprehensive strategic plans for academic and administrative performance according to the latest standards" },
    { icon: BarChart3, title: language === "ar" ? "قياس الأداء" : "Performance Measurement", desc: language === "ar" ? "استخدام مؤشرات أداء رئيسية (KPIs) لقياس وتقييم جودة العملية التعليمية بشكل مستمر" : "Using key performance indicators (KPIs) to continuously measure and evaluate the quality of the educational process" },
    { icon: Users, title: language === "ar" ? "تطوير الكوادر" : "Staff Development", desc: language === "ar" ? "برامج تدريب مستمرة لأعضاء هيئة التدريس والجهاز الإداري لرفع كفاءتهم" : "Continuous training programs for faculty members and administrative staff to enhance their competencies" },
    { icon: Award, title: language === "ar" ? "الاعتماد الأكاديمي" : "Academic Accreditation", desc: language === "ar" ? "السعي للحصول على الاعتماد من الهيئة القومية لضمان جودة التعليم والاعتماد (NAQAAE)" : "Seeking accreditation from the National Authority for Quality Assurance and Accreditation (NAQAAE)" },
    { icon: FileCheck, title: language === "ar" ? "التقييم الذاتي" : "Self-Assessment", desc: language === "ar" ? "إعداد تقارير تقييم ذاتي دورية لتحديد نقاط القوة وفرص التحسين" : "Preparing periodic self-assessment reports to identify strengths and improvement opportunities" },
    { icon: GraduationCap, title: language === "ar" ? "تطوير المناهج" : "Curriculum Development", desc: language === "ar" ? "مراجعة وتحديث المناهج الدراسية بشكل دوري لمواكبة تطورات سوق العمل" : "Regularly reviewing and updating curricula to keep pace with labor market developments" },
  ];

  const objectives = language === "ar" ? [
    "نشر ثقافة الجودة بين أعضاء هيئة التدريس والطلاب والعاملين",
    "تطوير نظام داخلي فعال لضمان الجودة والتحسين المستمر",
    "إعداد المعهد للحصول على الاعتماد الأكاديمي المؤسسي والبرامجي",
    "تحسين مخرجات العملية التعليمية لتلبية احتياجات سوق العمل",
    "قياس رضا الأطراف المعنية (الطلاب، أعضاء هيئة التدريس، أصحاب العمل)",
    "تعزيز الشراكات مع المؤسسات الأكاديمية والمهنية المحلية والدولية",
  ] : [
    "Spreading quality culture among faculty members, students, and staff",
    "Developing an effective internal system for quality assurance and continuous improvement",
    "Preparing the institute for institutional and program academic accreditation",
    "Improving educational outcomes to meet labor market needs",
    "Measuring stakeholder satisfaction (students, faculty, employers)",
    "Strengthening partnerships with local and international academic and professional institutions",
  ];

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={language === "ar" ? "ضمان الجودة - المعهد العالي للإدارة" : "Quality Assurance - Higher Institute of Management"} description={language === "ar" ? "وحدة ضمان الجودة في المعهد العالي للإدارة والمالية ونظم المعلومات" : "Quality Assurance Unit at the Higher Institute of Management, Finance and Information Systems"} />
      <InstituteNavbar {...managementNavbar} />
      <InstituteHero title={language === "ar" ? "وحدة ضمان الجودة" : "Quality Assurance Unit"} subtitle={language === "ar" ? "ضمان جودة التعليم والتميز الأكاديمي" : "Ensuring education quality and academic excellence"} image="/figmaAssets/rectangle-16.png" overlayColor="from-green-900/60 to-green-900/80" />

      <section className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-16" dir={direction}>
              <ShieldCheck className="w-12 h-12 text-green-700 dark:text-green-500 mx-auto mb-4 transition-colors duration-300" />
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] mb-4 transition-colors duration-300" data-testid="text-quality-vision">{language === "ar" ? "رؤية وحدة ضمان الجودة" : "Quality Assurance Unit Vision"}</h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-lg max-w-[700px] mx-auto [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "تسعى وحدة ضمان الجودة إلى تحقيق التميز في جميع جوانب العملية التعليمية والبحثية والخدمية، والسعي نحو الاعتماد الأكاديمي المحلي والدولي." : "The Quality Assurance Unit strives to achieve excellence in all aspects of the educational, research, and service processes, and to pursue local and international academic accreditation."}</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20" dir={direction}>
            {qualityAreas.map((area, i) => (
              <AnimatedSection key={i} delay={i * 0.08} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full bg-white dark:bg-neutral-900 dark:border-neutral-800" data-testid={`card-quality-${i}`}>
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center transition-colors duration-300"><area.icon className="w-7 h-7 text-green-700 dark:text-green-500 transition-colors duration-300" /></div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{area.title}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{area.desc}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-800 dark:bg-green-900 transition-colors duration-300">
        <div className="max-w-[900px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center" dir={direction}>
              <h2 className="text-3xl font-bold text-white [font-family:'Almarai',Helvetica] mb-4">{language === "ar" ? "سياسة الجودة" : "Quality Policy"}</h2>
              <p className="text-white/80 text-lg leading-relaxed [font-family:'Almarai',Helvetica] max-w-[700px] mx-auto">
                {language === "ar" ? "يلتزم المعهد العالي للإدارة والمالية ونظم المعلومات بتقديم تعليم عالي الجودة يلبي احتياجات الطلاب وسوق العمل، من خلال تطبيق نظام فعال لضمان الجودة والتحسين المستمر في جميع العمليات الأكاديمية والإدارية." : "The Higher Institute of Management, Finance and Information Systems is committed to providing high-quality education that meets the needs of students and the labor market, through implementing an effective system for quality assurance and continuous improvement in all academic and administrative processes."}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[800px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <Card className="rounded-3xl border-0 shadow-lg bg-white dark:bg-neutral-900 dark:border-neutral-800">
              <CardContent className="p-8 md:p-10" dir={direction}>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] mb-6 transition-colors duration-300">{language === "ar" ? "أهداف وحدة ضمان الجودة" : "Quality Assurance Unit Objectives"}</h3>
                <div className="flex flex-col gap-4">
                  {objectives.map((obj, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-700 dark:text-green-500 mt-0.5 flex-shrink-0 transition-colors duration-300" />
                      <span className="text-neutral-600 dark:text-neutral-300 [font-family:'Almarai',Helvetica] transition-colors duration-300">{obj}</span>
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