import { InstituteNavbar } from "@/components/institute/InstituteNavbar";
import { InstituteFooter } from "@/components/institute/InstituteFooter";
import { managementNavbar, managementFooter } from "@/lib/instituteConfig";
import { InstituteHero } from "@/components/institute/InstituteHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { Breadcrumb } from "@/components/Breadcrumb";
import { useState, useEffect } from "react";
import {
  Briefcase, ClipboardCheck, Building, CheckCircle2, Quote, FileText, Star, Loader2
} from "lucide-react";

const requirements = [
  { titleAr: "إتمام المقررات الأساسية", titleEn: "Completion of Core Courses", descAr: "يجب أن يكون الطالب قد أتم المقررات الأساسية المطلوبة للتدريب", descEn: "Student must have completed the required core courses for training" },
  { titleAr: "الحد الأدنى من الساعات", titleEn: "Minimum Credit Hours", descAr: "اجتياز 80% على الأقل من الساعات المعتمدة", descEn: "Passing at least 80% of the approved credit hours" },
  { titleAr: "التقدير الأكاديمي", titleEn: "Academic Standing", descAr: "الحصول على تقدير مقبول على الأقل في المعدل التراكمي", descEn: "Achieving at least a passing cumulative GPA" },
  { titleAr: "موافقة القسم", titleEn: "Department Approval", descAr: "الحصول على موافقة رئيس القسم والمشرف الأكاديمي", descEn: "Obtaining approval from the department head and academic advisor" },
];

const partners = [
  { nameAr: "البنك الأهلي المصري", nameEn: "National Bank of Egypt", fieldAr: "الخدمات المصرفية", fieldEn: "Banking Services" },
  { nameAr: "بنك مصر", nameEn: "Banque Misr", fieldAr: "الخدمات المصرفية والاستثمار", fieldEn: "Banking & Investment" },
  { nameAr: "شركة برايس ووترهاوس كوبرز", nameEn: "PricewaterhouseCoopers (PwC)", fieldAr: "المراجعة والاستشارات", fieldEn: "Auditing & Consulting" },
  { nameAr: "شركة ديلويت مصر", nameEn: "Deloitte Egypt", fieldAr: "المحاسبة والاستشارات المالية", fieldEn: "Accounting & Financial Consulting" },
  { nameAr: "مجموعة طلعت مصطفى", nameEn: "Talaat Moustafa Group", fieldAr: "التطوير العقاري والإدارة", fieldEn: "Real Estate Development & Management" },
  { nameAr: "شركة فودافون مصر", nameEn: "Vodafone Egypt", fieldAr: "الاتصالات والتسويق", fieldEn: "Telecommunications & Marketing" },
];

const steps = [
  { numAr: "١", numEn: "1", titleAr: "التقديم والتسجيل", titleEn: "Application & Registration", descAr: "تقديم طلب التدريب واختيار جهة التدريب المفضلة", descEn: "Submit training application and choose preferred training entity" },
  { numAr: "٢", numEn: "2", titleAr: "الموافقة والتنسيق", titleEn: "Approval & Coordination", descAr: "مراجعة الطلب والتنسيق مع جهة التدريب", descEn: "Review application and coordinate with training entity" },
  { numAr: "٣", numEn: "3", titleAr: "بدء التدريب", titleEn: "Start Training", descAr: "الالتحاق بجهة التدريب والبدء في البرنامج التدريبي", descEn: "Join the training entity and begin the training program" },
  { numAr: "٤", numEn: "4", titleAr: "المتابعة والتقييم", titleEn: "Follow-up & Evaluation", descAr: "متابعة أكاديمية مستمرة وتقييم دوري من المشرف", descEn: "Continuous academic follow-up and periodic evaluation from supervisor" },
  { numAr: "٥", numEn: "5", titleAr: "التقرير النهائي", titleEn: "Final Report", descAr: "تقديم تقرير التدريب النهائي والعرض أمام لجنة التقييم", descEn: "Submit final training report and present before evaluation committee" },
];

const testimonials = [
  { nameAr: "فاطمة أحمد", nameEn: "Fatma Ahmed", departmentAr: "المحاسبة", departmentEn: "Accounting", companyAr: "ديلويت مصر", companyEn: "Deloitte Egypt", quoteAr: "كان التدريب في ديلويت تجربة مميزة حيث تعلمت تطبيق المعايير المحاسبية الدولية عملياً. اكتسبت مهارات في المراجعة وإعداد التقارير المالية بشكل احترافي.", quoteEn: "Training at Deloitte was a remarkable experience where I learned to apply international accounting standards practically. I gained skills in auditing and professional financial report preparation." },
  { nameAr: "محمد خليل", nameEn: "Mohamed Khalil", departmentAr: "العلوم المالية والمصرفية", departmentEn: "Financial & Banking Sciences", companyAr: "البنك الأهلي المصري", companyEn: "National Bank of Egypt", quoteAr: "التدريب في البنك الأهلي أتاح لي فهم العمليات المصرفية اليومية وإدارة المخاطر الائتمانية. تجربة عملية قيمة ساعدتني في تحديد مساري المهني.", quoteEn: "Training at the National Bank of Egypt allowed me to understand daily banking operations and credit risk management. A valuable practical experience that helped me define my career path." },
  { nameAr: "نور الهدى سعيد", nameEn: "Nour El-Huda Said", departmentAr: "إدارة الأعمال", departmentEn: "Business Administration", companyAr: "فودافون مصر", companyEn: "Vodafone Egypt", quoteAr: "تعلمت خلال فترة التدريب كيفية إدارة الحملات التسويقية الرقمية وتحليل سلوك المستهلك. بيئة العمل في فودافون كانت محفزة ومثرية.", quoteEn: "During the training period, I learned how to manage digital marketing campaigns and analyze consumer behavior. The work environment at Vodafone was motivating and enriching." },
];

interface Activity {
  id: string;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn: string;
  category: string;
  institute: string;
  isActive: boolean;
  coverImage?: string;
}

export default function ManagementTraining() {
  const { language, direction } = useLanguage();
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const pageTitle = language === "ar" ? "التدريب الميداني" : "Field Training";

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch("/api/activities?institute=management");
        if (response.ok) {
          const data = await response.json();
          setActivities(data);
        }
      } catch (error) {
        console.error("Failed to fetch activities:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={language === "ar" ? "التدريب الميداني - المعهد العالي للإدارة" : "Field Training - Higher Institute of Management"} description={language === "ar" ? "برنامج التدريب الميداني في المعهد العالي للإدارة" : "Field training program at the Higher Institute of Management"} />
      <InstituteNavbar {...managementNavbar} />
      <InstituteHero title={language === "ar" ? "التدريب الميداني" : "Field Training"} subtitle={language === "ar" ? "ربط المعرفة النظرية بالتطبيق العملي" : "Linking theoretical knowledge with practical application"} image="/figmaAssets/rectangle-2.png" overlayColor="from-green-900/60 to-green-900/80" />

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
          <AnimatedSection>
            <div className="text-center mb-16" dir={direction}>
              <ClipboardCheck className="w-10 h-10 text-green-700 dark:text-green-500 mx-auto mb-4 transition-colors duration-300" />
              <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "متطلبات التدريب" : "Training Requirements"}</h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-lg mt-4 max-w-[600px] mx-auto [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "الشروط الواجب توافرها للالتحاق ببرنامج التدريب الميداني" : "Conditions required to join the field training program"}</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" dir={direction}>
            {requirements.map((req, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full bg-white dark:bg-neutral-900 dark:border-neutral-800">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                      <CheckCircle2 className="w-5 h-5 text-green-700 dark:text-green-400 transition-colors duration-300" />
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

      <section className="py-20 bg-green-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[1100px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <Building className="w-10 h-10 text-green-700 dark:text-green-500 mx-auto mb-4 transition-colors duration-300" />
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "شركاء التدريب" : "Training Partners"}</h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-lg mt-4 max-w-[600px] mx-auto [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "نتعاون مع كبرى البنوك والشركات والمؤسسات المالية" : "We collaborate with major banks, companies, and financial institutions"}</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" dir={direction}>
            {partners.map((partner, index) => (
              <AnimatedSection key={index} delay={index * 0.08} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full bg-white dark:bg-neutral-800 dark:border-neutral-700">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                    <div className="w-14 h-14 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center transition-colors duration-300">
                      <Building className="w-7 h-7 text-green-700 dark:text-green-500 transition-colors duration-300" />
                    </div>
                    <h3 className="font-bold text-base text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? partner.nameAr : partner.nameEn}</h3>
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-xs [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? partner.fieldAr : partner.fieldEn}</span>
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
              <FileText className="w-10 h-10 text-green-700 dark:text-green-500 mx-auto mb-4 transition-colors duration-300" />
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "خطوات التدريب" : "Training Process"}</h2>
            </div>
          </AnimatedSection>
          <div className="flex flex-col gap-4" dir={direction}>
            {steps.map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="right">
                <Card className="rounded-2xl border-0 shadow-sm bg-white dark:bg-neutral-900 dark:border-neutral-800 transition-colors duration-300">
                  <CardContent className="p-6 flex items-center gap-6">
                    <div className="w-14 h-14 rounded-full bg-green-700 dark:bg-green-600 flex items-center justify-center flex-shrink-0">
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

      <section className="py-20 bg-green-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[1100px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <Star className="w-10 h-10 text-green-700 dark:text-green-500 mx-auto mb-4 transition-colors duration-300" />
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "تجارب الطلاب" : "Student Testimonials"}</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" dir={direction}>
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full bg-white dark:bg-neutral-800 dark:border-neutral-700">
                  <CardContent className="p-6 flex flex-col gap-4">
                    <Quote className="w-8 h-8 text-green-200 dark:text-green-800 transition-colors duration-300" />
                    <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? testimonial.quoteAr : testimonial.quoteEn}</p>
                    <div className="mt-auto pt-4 border-t border-gray-100 dark:border-neutral-700 transition-colors duration-300">
                      <h4 className="font-bold text-sm text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? testimonial.nameAr : testimonial.nameEn}</h4>
                      <p className="text-neutral-400 dark:text-neutral-500 text-xs [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? testimonial.departmentAr : testimonial.departmentEn}</p>
                      <p className="text-green-700 dark:text-green-400 text-xs [font-family:'Almarai',Helvetica] mt-1 transition-colors duration-300">{language === "ar" ? testimonial.companyAr : testimonial.companyEn}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1100px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-16" dir={direction}>
              <Briefcase className="w-10 h-10 text-green-700 dark:text-green-500 mx-auto mb-4 transition-colors duration-300" />
              <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "أنشطة التدريب ذات الصلة" : "Related Training Activities"}</h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-lg mt-4 max-w-[600px] mx-auto [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "الأنشطة والمشاريع المرتبطة بالتدريب الميداني" : "Activities and projects related to field training"}</p>
            </div>
          </AnimatedSection>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 text-green-700 dark:text-green-500 animate-spin transition-colors duration-300" />
            </div>
          ) : activities && activities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" dir={direction}>
              {activities.map((activity, index) => (
                <AnimatedSection key={activity.id} delay={index * 0.1} direction="up">
                  <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full bg-white dark:bg-neutral-900 dark:border-neutral-800">
                    {activity.coverImage && (
                      <div className="w-full h-48 bg-gradient-to-br from-green-100 to-green-50 dark:from-green-900/20 dark:to-green-900/10 overflow-hidden rounded-t-2xl">
                        <img src={activity.coverImage} alt={language === "ar" ? activity.nameAr : activity.nameEn} className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" onError={(e) => { (e.target as HTMLImageElement).src = "/figmaAssets/rectangle-16.png"; }} />
                      </div>
                    )}
                    <CardContent className="p-6 flex flex-col gap-3">
                      <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-xs w-fit [font-family:'Almarai',Helvetica] transition-colors duration-300">{activity.category}</span>
                      <h3 className="font-bold text-base text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? activity.nameAr : activity.nameEn}</h3>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? activity.descriptionAr : activity.descriptionEn}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-neutral-500 dark:text-neutral-400 [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "لا توجد أنشطة متاحة حالياً" : "No activities available at the moment"}</p>
            </div>
          )}
        </div>
      </section>

      <InstituteFooter {...managementFooter} />
    </div>
  );
}