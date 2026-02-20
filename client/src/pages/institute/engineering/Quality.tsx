import { InstituteNavbar } from "@/components/institute/InstituteNavbar";
import { InstituteFooter } from "@/components/institute/InstituteFooter";
import { InstituteHero } from "@/components/institute/InstituteHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Target, BarChart3, Users, Award, FileCheck, GraduationCap, CheckCircle2 } from "lucide-react";
import { engineeringNavbar, engineeringFooter } from "@/lib/instituteConfig";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";

export default function EngineeringQuality() {
  const { language, direction } = useLanguage();

  const qualityAreas = [
    { icon: Target, title: language === "ar" ? "التخطيط الاستراتيجي" : "Strategic Planning", desc: language === "ar" ? "وضع خطط استراتيجية شاملة لتطوير البرامج الهندسية والمعامل والمرافق" : "Developing comprehensive strategic plans for engineering programs, labs, and facilities" },
    { icon: BarChart3, title: language === "ar" ? "مؤشرات الأداء" : "Performance Indicators", desc: language === "ar" ? "قياس وتقييم جودة المخرجات التعليمية وفقاً لمعايير ABET الدولية" : "Measuring and evaluating the quality of educational outcomes according to international ABET standards" },
    { icon: Users, title: language === "ar" ? "تطوير أعضاء هيئة التدريس" : "Faculty Development", desc: language === "ar" ? "برامج تدريب وتأهيل مستمرة للكوادر الأكاديمية والفنية والمعملية" : "Continuous training and qualification programs for academic, technical, and laboratory staff" },
    { icon: Award, title: language === "ar" ? "الاعتماد الهندسي" : "Engineering Accreditation", desc: language === "ar" ? "السعي للحصول على الاعتماد من الهيئة القومية لضمان جودة التعليم (NAQAAE)" : "Seeking accreditation from the National Authority for Quality Assurance and Accreditation (NAQAAE)" },
    { icon: FileCheck, title: language === "ar" ? "التقييم الذاتي" : "Self-Assessment", desc: language === "ar" ? "إعداد تقارير تقييم ذاتي دورية وفقاً للمعايير الأكاديمية القومية والدولية" : "Preparing periodic self-assessment reports according to national and international academic standards" },
    { icon: GraduationCap, title: language === "ar" ? "تطوير المناهج الهندسية" : "Curriculum Development", desc: language === "ar" ? "تحديث المقررات الهندسية لمواكبة التطور التكنولوجي ومتطلبات الصناعة" : "Updating engineering courses to keep pace with technological development and industry requirements" },
  ];

  const objectives = language === "ar" ? [
    "نشر ثقافة الجودة الهندسية بين جميع أعضاء المجتمع الأكاديمي",
    "تطوير نظام داخلي فعال لضمان جودة البرامج الهندسية",
    "الارتقاء بمستوى المعامل والمرافق الهندسية لتلبية المعايير الدولية",
    "تحسين مهارات الخريجين لتلبية احتياجات سوق العمل الهندسي",
    "قياس رضا الطلاب وأصحاب العمل عن مستوى الخريجين",
    "تعزيز الشراكات مع النقابات والشركات الهندسية الكبرى",
  ] : [
    "Spreading the culture of engineering quality among all members of the academic community",
    "Developing an effective internal system for ensuring engineering program quality",
    "Upgrading labs and engineering facilities to meet international standards",
    "Improving graduate skills to meet engineering job market needs",
    "Measuring student and employer satisfaction with graduate quality",
    "Strengthening partnerships with major engineering syndicates and companies",
  ];

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={language === "ar" ? "ضمان الجودة - المعهد العالي للهندسة" : "Quality Assurance - Higher Institute of Engineering"} description={language === "ar" ? "وحدة ضمان الجودة في المعهد العالي للهندسة والتكنولوجيا" : "Quality Assurance Unit at the Higher Institute of Engineering and Technology"} />
      <InstituteNavbar {...engineeringNavbar} />
      <InstituteHero title={language === "ar" ? "وحدة ضمان الجودة" : "Quality Assurance Unit"} subtitle={language === "ar" ? "ضمان جودة التعليم الهندسي والتميز الأكاديمي" : "Ensuring engineering education quality and academic excellence"} image="/figmaAssets/rectangle-17.png" overlayColor="from-blue-900/60 to-blue-900/80" />

      <section className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-16" dir={direction}>
              <ShieldCheck className="w-12 h-12 text-blue-700 dark:text-blue-500 mx-auto mb-4 transition-colors duration-300" />
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] mb-4 transition-colors duration-300" data-testid="text-quality-vision">{language === "ar" ? "رؤية وحدة ضمان الجودة" : "Quality Assurance Unit Vision"}</h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-lg max-w-[700px] mx-auto [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "تسعى وحدة ضمان الجودة في المعهد العالي للهندسة إلى تحقيق التميز في التعليم الهندسي والبحث العلمي وخدمة المجتمع وفقاً لأعلى المعايير المحلية والدولية." : "The Quality Assurance Unit at the Higher Institute of Engineering strives to achieve excellence in engineering education, scientific research, and community service according to the highest local and international standards."}</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20" dir={direction}>
            {qualityAreas.map((area, i) => (
              <AnimatedSection key={i} delay={i * 0.08} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full bg-white dark:bg-neutral-900 dark:border-neutral-800" data-testid={`card-quality-${i}`}>
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center transition-colors duration-300"><area.icon className="w-7 h-7 text-blue-700 dark:text-blue-500 transition-colors duration-300" /></div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{area.title}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{area.desc}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-800 dark:bg-blue-900 transition-colors duration-300">
        <div className="max-w-[900px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center" dir={direction}>
              <h2 className="text-3xl font-bold text-white [font-family:'Almarai',Helvetica] mb-4">{language === "ar" ? "سياسة الجودة" : "Quality Policy"}</h2>
              <p className="text-white/80 text-lg leading-relaxed [font-family:'Almarai',Helvetica] max-w-[700px] mx-auto">
                {language === "ar" ? "يلتزم المعهد العالي للهندسة والتكنولوجيا بتقديم تعليم هندسي عالي الجودة يواكب التطورات التكنولوجية العالمية، من خلال تطبيق نظام فعال لضمان الجودة والتحسين المستمر في جميع البرامج الهندسية والمعامل والمرافق." : "The Higher Institute of Engineering and Technology is committed to providing high-quality engineering education that keeps pace with global technological developments, through implementing an effective system for quality assurance and continuous improvement in all engineering programs, labs, and facilities."}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[800px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <Card className="rounded-3xl border-0 shadow-lg bg-white dark:bg-neutral-950 dark:border-neutral-800 transition-colors duration-300">
              <CardContent className="p-8 md:p-10" dir={direction}>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] mb-6 transition-colors duration-300">{language === "ar" ? "أهداف وحدة ضمان الجودة" : "Quality Assurance Unit Objectives"}</h3>
                <div className="flex flex-col gap-4">
                  {objectives.map((obj, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-700 dark:text-blue-500 mt-0.5 flex-shrink-0 transition-colors duration-300" />
                      <span className="text-neutral-600 dark:text-neutral-300 [font-family:'Almarai',Helvetica] transition-colors duration-300">{obj}</span>
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
