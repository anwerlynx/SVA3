import { InstituteNavbar } from "@/components/institute/InstituteNavbar";
import { InstituteFooter } from "@/components/institute/InstituteFooter";
import { managementNavbar, managementFooter } from "@/lib/instituteConfig";
import { InstituteHero } from "@/components/institute/InstituteHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { Breadcrumb } from "@/components/Breadcrumb";
import {
  ClipboardList, Briefcase, UserCog, CalendarDays,
  Trophy, MessageSquareWarning, CheckCircle2, Phone
} from "lucide-react";

const services = [
  {
    id: "results",
    icon: ClipboardList,
    titleAr: "النتائج",
    titleEn: "Results",
    descAr: "الاطلاع على نتائج الامتحانات والتقديرات الأكاديمية",
    descEn: "View exam results and academic grades",
    detailAr: "يمكن للطلاب الاطلاع على نتائجهم الأكاديمية فور اعتمادها من مجلس المعهد. تشمل الخدمة نتائج امتحانات نهاية الفصل الدراسي ونتائج أعمال السنة والتقديرات التراكمية. يتم تحديث النتائج بشكل دوري ويمكن للطالب طباعة بيان درجات معتمد.",
    detailEn: "Students can view their academic results as soon as they are approved by the institute council. The service includes end-of-semester exam results, coursework results, and cumulative grades. Results are updated periodically and students can print certified grade statements.",
  },
  {
    id: "training",
    icon: Briefcase,
    titleAr: "التدريب",
    titleEn: "Training",
    descAr: "التدريب الميداني والعملي للطلاب",
    descEn: "Field and practical training for students",
    detailAr: "يوفر المعهد برامج تدريب ميداني بالتعاون مع كبرى البنوك والشركات والمؤسسات المالية والإدارية. يهدف التدريب لربط الجانب النظري بالتطبيق العملي وإكساب الطلاب الخبرة المهنية اللازمة. يتم التدريب خلال الفترة الصيفية ويشمل تقارير ومتابعة أكاديمية.",
    detailEn: "The institute provides field training programs in cooperation with major banks, companies, and financial and administrative institutions. Training aims to link theory with practice and provide students with necessary professional experience. Training takes place during the summer period and includes reports and academic follow-up.",
  },
  {
    id: "student-affairs",
    icon: UserCog,
    titleAr: "شؤون الطلاب",
    titleEn: "Student Affairs",
    descAr: "خدمات شؤون الطلاب والتسجيل",
    descEn: "Student affairs and registration services",
    detailAr: "تقدم إدارة شؤون الطلاب مجموعة شاملة من الخدمات تشمل: التسجيل وإعادة القيد، استخراج بطاقات الطالب، إصدار الشهادات والإفادات، التحويل بين الأقسام، معالجة حالات الرسوب والإعادة، وتقديم الدعم الإداري اللازم للطلاب طوال فترة دراستهم.",
    detailEn: "The Student Affairs Department provides a comprehensive range of services including: registration and re-enrollment, issuing student IDs, certificates and statements, department transfers, handling failure and repeat cases, and providing necessary administrative support to students throughout their studies.",
  },
  {
    id: "academic-calendar",
    icon: CalendarDays,
    titleAr: "التقويم الأكاديمي",
    titleEn: "Academic Calendar",
    descAr: "مواعيد الدراسة والامتحانات والإجازات",
    descEn: "Study, exam, and holiday schedules",
    detailAr: "يحدد التقويم الأكاديمي مواعيد بدء وانتهاء الفصول الدراسية، وفترات الامتحانات، والإجازات الرسمية، ومواعيد التسجيل والسحب والإضافة. يتم تحديث التقويم سنوياً ويعتمد من مجلس المعهد. يشمل أيضاً مواعيد الأنشطة والفعاليات الأكاديمية المختلفة.",
    detailEn: "The academic calendar specifies semester start and end dates, exam periods, official holidays, and registration, withdrawal, and addition dates. The calendar is updated annually and approved by the institute council. It also includes dates for various academic activities and events.",
  },
  {
    id: "activities",
    icon: Trophy,
    titleAr: "الأنشطة الطلابية",
    titleEn: "Student Activities",
    descAr: "الأنشطة الرياضية والثقافية والاجتماعية",
    descEn: "Sports, cultural, and social activities",
    detailAr: "يوفر المعهد بيئة غنية بالأنشطة الطلابية المتنوعة التي تشمل: الأنشطة الرياضية (كرة قدم، سباحة، كرة سلة)، الأنشطة الثقافية (مسابقات علمية، ندوات، مؤتمرات طلابية)، والأنشطة الاجتماعية (رحلات، حفلات تكريم، أعمال تطوعية). تهدف هذه الأنشطة لتنمية شخصية الطالب بشكل متكامل.",
    detailEn: "The institute provides a rich environment with diverse student activities including: sports activities (football, swimming, basketball), cultural activities (scientific competitions, seminars, student conferences), and social activities (trips, honor ceremonies, volunteer work). These activities aim to develop the student's personality comprehensively.",
  },
  {
    id: "complaints",
    icon: MessageSquareWarning,
    titleAr: "شكاوى الطلاب",
    titleEn: "Student Complaints",
    descAr: "تقديم ومتابعة الشكاوى والمقترحات",
    descEn: "Submit and track complaints and suggestions",
    detailAr: "يتيح المعهد نظاماً إلكترونياً لتقديم الشكاوى والمقترحات، حيث يمكن للطالب تقديم شكواه بسرية تامة ومتابعة حالتها. تعمل لجنة مختصة على دراسة الشكاوى والرد عليها خلال فترة زمنية محددة. كما يرحب المعهد بالمقترحات البناءة لتطوير العملية التعليمية.",
    detailEn: "The institute provides an electronic system for submitting complaints and suggestions, where students can submit their complaints confidentially and track their status. A specialized committee studies complaints and responds within a specified period. The institute also welcomes constructive suggestions for developing the educational process.",
  },
];

export default function StudentServices() {
  const { language } = useLanguage();
  const pageTitle = language === "ar" ? "خدمات الطلاب" : "Student Services";

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={language === "ar" ? "خدمات الطلاب - المعهد العالي للإدارة" : "Student Services - Higher Institute of Management"} description={language === "ar" ? "خدمات الطلاب في المعهد العالي للإدارة والمالية ونظم المعلومات" : "Student services at the Higher Institute of Management, Finance & Information Systems"} />
      <InstituteNavbar {...managementNavbar} />
      <InstituteHero title={language === "ar" ? "خدمات الطلاب" : "Student Services"} subtitle={language === "ar" ? "بوابة الخدمات الطلابية بالمعهد العالي للإدارة" : "Student services portal at the Higher Institute of Management"} image="/figmaAssets/rectangle-2.png" overlayColor="from-green-900/60 to-green-900/80" />

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
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <span className="text-green-700 font-bold text-sm [font-family:'Almarai',Helvetica]">{language === "ar" ? "خدماتنا" : "Our Services"}</span>
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "الخدمات الطلابية" : "Student Services"}</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" dir={direction}>
            {services.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 0.1} direction="up">
                <a href={`#${service.id}`}>
                  <Card className="rounded-2xl border-0 shadow-sm hover:shadow-xl transition-all cursor-pointer h-full group bg-white dark:bg-neutral-900 dark:border-neutral-800">
                    <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center group-hover:bg-green-700 dark:group-hover:bg-green-600 transition-all">
                        <service.icon className="w-8 h-8 text-green-700 dark:text-green-500 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? service.titleAr : service.titleEn}</h3>
                      <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? service.descAr : service.descEn}</p>
                    </CardContent>
                  </Card>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {services.map((service, index) => (
        <section key={service.id} id={service.id} className={`py-20 ${index % 2 === 0 ? "bg-green-50 dark:bg-neutral-900" : "bg-white dark:bg-neutral-950"} transition-colors duration-300`}>
          <div className="max-w-[900px] mx-auto px-4 md:px-8">
            <AnimatedSection>
              <Card className="rounded-3xl border-0 shadow-lg bg-white dark:bg-neutral-800 dark:border-neutral-700 transition-colors duration-300">
                <CardContent className="p-8 md:p-12" dir={direction}>
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                        <service.icon className="w-7 h-7 text-green-700 dark:text-green-500 transition-colors duration-300" />
                      </div>
                      <h2 className="text-2xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? service.titleAr : service.titleEn}</h2>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-300 text-base leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? service.detailAr : service.detailEn}</p>
                    <div className="flex items-center gap-2 text-green-700 dark:text-green-400 text-sm [font-family:'Almarai',Helvetica]">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{language === "ar" ? "الخدمة متاحة لجميع طلاب المعهد" : "Service available to all institute students"}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </section>
      ))}

      <section className="py-20 bg-green-700 dark:bg-green-900 transition-colors duration-300">
        <div className="max-w-[800px] mx-auto px-4 md:px-8 text-center" dir={direction}>
          <AnimatedSection>
            <Phone className="w-12 h-12 text-white/80 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white [font-family:'Almarai',Helvetica] mb-4">{language === "ar" ? "تحتاج مساعدة؟" : "Need Help?"}</h2>
            <p className="text-white/70 text-lg [font-family:'Almarai',Helvetica] mb-2">{language === "ar" ? "تواصل مع إدارة شؤون الطلاب" : "Contact the Student Affairs Department"}</p>
            <p className="text-white/90 text-lg [font-family:'Almarai',Helvetica]">01234567890</p>
          </AnimatedSection>
        </div>
      </section>

      <InstituteFooter {...managementFooter} />
    </div>
  );
}