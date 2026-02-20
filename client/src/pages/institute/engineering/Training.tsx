import { InstituteNavbar } from "@/components/institute/InstituteNavbar";
import { InstituteFooter } from "@/components/institute/InstituteFooter";
import { engineeringNavbar, engineeringFooter } from "@/lib/instituteConfig";
import { InstituteHero } from "@/components/institute/InstituteHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import {
  Briefcase, ClipboardCheck, Building, ArrowDown,
  CheckCircle2, Quote, FileText, Clock, Users, Star
} from "lucide-react";

const requirements = [
  { titleAr: "إتمام المقررات الأساسية", titleEn: "Completion of Core Courses", descAr: "يجب أن يكون الطالب قد أتم المقررات الأساسية المطلوبة للتدريب", descEn: "Student must have completed the required core courses for training" },
  { titleAr: "الحد الأدنى من الساعات", titleEn: "Minimum Credit Hours", descAr: "اجتياز 80% على الأقل من الساعات المعتمدة", descEn: "Passing at least 80% of the approved credit hours" },
  { titleAr: "التقدير الأكاديمي", titleEn: "Academic Standing", descAr: "الحصول على تقدير مقبول على الأقل في المعدل التراكمي", descEn: "Achieving at least a passing cumulative GPA" },
  { titleAr: "موافقة القسم", titleEn: "Department Approval", descAr: "الحصول على موافقة رئيس القسم والمشرف الأكاديمي", descEn: "Obtaining approval from the department head and academic advisor" },
];

const partners = [
  { nameAr: "شركة المقاولون العرب", nameEn: "Arab Contractors Company", fieldAr: "المقاولات والإنشاءات", fieldEn: "Construction & Contracting" },
  { nameAr: "شركة أوراسكوم للإنشاءات", nameEn: "Orascom Construction", fieldAr: "الإنشاءات والبنية التحتية", fieldEn: "Construction & Infrastructure" },
  { nameAr: "شركة السويدي إلكتريك", nameEn: "El Sewedy Electric", fieldAr: "الصناعات الكهربائية", fieldEn: "Electrical Industries" },
  { nameAr: "الشركة القابضة لكهرباء مصر", nameEn: "Egyptian Electricity Holding Company", fieldAr: "توليد ونقل الكهرباء", fieldEn: "Electricity Generation & Transmission" },
  { nameAr: "شركة هيلتي مصر", nameEn: "Hilti Egypt", fieldAr: "أدوات ومعدات البناء", fieldEn: "Construction Tools & Equipment" },
  { nameAr: "المجموعة المصرية للتكنولوجيا", nameEn: "Egyptian Technology Group", fieldAr: "تكنولوجيا المعلومات والبرمجيات", fieldEn: "IT & Software" },
];

const steps = [
  { numAr: "١", numEn: "1", titleAr: "التقديم والتسجيل", titleEn: "Application & Registration", descAr: "تقديم طلب التدريب واختيار جهة التدريب المفضلة", descEn: "Submit training application and choose preferred training entity" },
  { numAr: "٢", numEn: "2", titleAr: "الموافقة والتنسيق", titleEn: "Approval & Coordination", descAr: "مراجعة الطلب والتنسيق مع جهة التدريب", descEn: "Review application and coordinate with training entity" },
  { numAr: "٣", numEn: "3", titleAr: "بدء التدريب", titleEn: "Start Training", descAr: "الالتحاق بجهة التدريب والبدء في البرنامج التدريبي", descEn: "Join the training entity and begin the training program" },
  { numAr: "٤", numEn: "4", titleAr: "المتابعة والتقييم", titleEn: "Follow-up & Evaluation", descAr: "متابعة أكاديمية مستمرة وتقييم دوري من المشرف", descEn: "Continuous academic follow-up and periodic evaluation from supervisor" },
  { numAr: "٥", numEn: "5", titleAr: "التقرير النهائي", titleEn: "Final Report", descAr: "تقديم تقرير التدريب النهائي والعرض أمام لجنة التقييم", descEn: "Submit final training report and present before evaluation committee" },
];

const testimonials = [
  { nameAr: "أحمد محمد", nameEn: "Ahmed Mohamed", departmentAr: "هندسة القوى والاتصالات", departmentEn: "Power & Telecom Engineering", companyAr: "السويدي إلكتريك", companyEn: "El Sewedy Electric", quoteAr: "كان التدريب تجربة رائعة أتاحت لي تطبيق ما تعلمته في المعهد على أرض الواقع. اكتسبت خبرة عملية قيمة في مجال تصنيع الكابلات الكهربائية.", quoteEn: "The training was an amazing experience that allowed me to apply what I learned at the institute in real life. I gained valuable practical experience in electrical cable manufacturing." },
  { nameAr: "سارة حسن", nameEn: "Sara Hassan", departmentAr: "الهندسة المعمارية", departmentEn: "Architecture Engineering", companyAr: "مكتب هندسي معماري", companyEn: "Architectural Engineering Office", quoteAr: "التدريب الميداني ساعدني على فهم متطلبات سوق العمل الحقيقية وكيفية تطبيق مبادئ التصميم المعماري في المشاريع الفعلية.", quoteEn: "Field training helped me understand real job market requirements and how to apply architectural design principles in actual projects." },
  { nameAr: "محمد خالد", nameEn: "Mohamed Khaled", departmentAr: "هندسة التحكم والحاسبات", departmentEn: "Control & Computer Engineering", companyAr: "المجموعة المصرية للتكنولوجيا", companyEn: "Egyptian Technology Group", quoteAr: "تعلمت خلال فترة التدريب كيفية العمل ضمن فريق برمجي محترف واكتسبت مهارات في تطوير البرمجيات وإدارة المشاريع.", quoteEn: "During the training period, I learned how to work within a professional software team and gained skills in software development and project management." },
];

export default function EngineeringTraining() {
  const { language } = useLanguage();

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={language === "ar" ? "التدريب الصناعي - المعهد العالي للهندسة" : "Industrial Training - Higher Institute of Engineering"} description={language === "ar" ? "برنامج التدريب الصناعي في المعهد العالي للهندسة" : "Industrial training program at the Higher Institute of Engineering"} />
      <InstituteNavbar {...engineeringNavbar} />
      <InstituteHero title={language === "ar" ? "التدريب الصناعي" : "Industrial Training"} subtitle={language === "ar" ? "ربط المعرفة النظرية بالتطبيق العملي" : "Linking theoretical knowledge with practical application"} image="/figmaAssets/rectangle-17.png" overlayColor="from-blue-900/60 to-blue-900/80" />

      <section className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1100px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-16" dir={direction}>
              <ClipboardCheck className="w-10 h-10 text-blue-700 dark:text-blue-500 mx-auto mb-4 transition-colors duration-300" />
              <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "متطلبات التدريب" : "Training Requirements"}</h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-lg mt-4 max-w-[600px] mx-auto [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "الشروط الواجب توافرها للالتحاق ببرنامج التدريب الصناعي" : "Conditions required to join the industrial training program"}</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" dir={direction}>
            {requirements.map((req, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full bg-white dark:bg-neutral-900 dark:border-neutral-800">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                      <CheckCircle2 className="w-5 h-5 text-blue-700 dark:text-blue-400 transition-colors duration-300" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="font-bold text-base text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? req.titleAr : req.titleEn}</h3>
                      <p className="text-neutral-500 dark:text-neutral-400 text-sm [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? req.descAr : req.descEn}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[1100px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <Building className="w-10 h-10 text-blue-700 dark:text-blue-500 mx-auto mb-4 transition-colors duration-300" />
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "شركاء التدريب" : "Training Partners"}</h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-lg mt-4 max-w-[600px] mx-auto [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "نتعاون مع كبرى الشركات والمؤسسات الهندسية" : "We collaborate with major engineering companies and institutions"}</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" dir={direction}>
            {partners.map((partner, index) => (
              <AnimatedSection key={index} delay={index * 0.08} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full bg-white dark:bg-neutral-800 dark:border-neutral-700">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                    <div className="w-14 h-14 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center transition-colors duration-300">
                      <Building className="w-7 h-7 text-blue-700 dark:text-blue-500 transition-colors duration-300" />
                    </div>
                    <h3 className="font-bold text-base text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? partner.nameAr : partner.nameEn}</h3>
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full text-xs [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? partner.fieldAr : partner.fieldEn}</span>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[900px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-16" dir={direction}>
              <FileText className="w-10 h-10 text-blue-700 dark:text-blue-500 mx-auto mb-4 transition-colors duration-300" />
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "خطوات التدريب" : "Training Process"}</h2>
            </div>
          </AnimatedSection>
          <div className="flex flex-col gap-4" dir={direction}>
            {steps.map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="right">
                <Card className="rounded-2xl border-0 shadow-sm bg-white dark:bg-neutral-900 dark:border-neutral-800 transition-colors duration-300">
                  <CardContent className="p-6 flex items-center gap-6">
                    <div className="w-14 h-14 rounded-full bg-blue-700 dark:bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl font-bold [font-family:'Almarai',Helvetica]">{language === "ar" ? step.numAr : step.numEn}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-bold text-base text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? step.titleAr : step.titleEn}</h3>
                      <p className="text-neutral-500 dark:text-neutral-400 text-sm [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? step.descAr : step.descEn}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[1100px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <Star className="w-10 h-10 text-blue-700 dark:text-blue-500 mx-auto mb-4 transition-colors duration-300" />
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "تجارب الطلاب" : "Student Testimonials"}</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" dir={direction}>
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full bg-white dark:bg-neutral-800 dark:border-neutral-700">
                  <CardContent className="p-6 flex flex-col gap-4">
                    <Quote className="w-8 h-8 text-blue-200 dark:text-blue-800 transition-colors duration-300" />
                    <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? testimonial.quoteAr : testimonial.quoteEn}</p>
                    <div className="mt-auto pt-4 border-t border-gray-100 dark:border-neutral-700 transition-colors duration-300">
                      <h4 className="font-bold text-sm text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? testimonial.nameAr : testimonial.nameEn}</h4>
                      <p className="text-neutral-400 dark:text-neutral-500 text-xs [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? testimonial.departmentAr : testimonial.departmentEn}</p>
                      <p className="text-blue-700 dark:text-blue-400 text-xs [font-family:'Almarai',Helvetica] mt-1 transition-colors duration-300">{language === "ar" ? testimonial.companyAr : testimonial.companyEn}</p>
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