import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle2, FileText, UserCheck, Stethoscope, CreditCard, GraduationCap, ArrowRight, ClipboardList, Calendar } from "lucide-react";

export default function EnrollmentConditions() {
  const { language, direction } = useLanguage();

  const pageTitle = language === 'ar' ? 'شروط الالتحاق' : 'Enrollment Conditions';
  const pageSubtitle = language === 'ar'
    ? 'تعرف على شروط ومتطلبات الالتحاق بمعاهد الوادي العليا'
    : 'Learn about the enrollment requirements for Valley Higher Institutes';

  const generalRequirements = [
    language === 'ar' ? 'الحصول على شهادة الثانوية العامة أو ما يعادلها' : 'High school diploma or equivalent certificate',
    language === 'ar' ? 'أن يكون الطالب مصري الجنسية أو يحمل إقامة سارية' : 'Student must be Egyptian or hold a valid residency',
    language === 'ar' ? 'استيفاء الحد الأدنى للمجموع المطلوب' : 'Meeting the minimum required total score',
    language === 'ar' ? 'ألا يكون قد مضى على الحصول على المؤهل أكثر من عامين' : 'No more than two years since obtaining the qualification',
    language === 'ar' ? 'ألا يكون الطالب مقيداً بكلية أو معهد آخر' : 'Student must not be enrolled in another college or institute',
    language === 'ar' ? 'التفرغ الكامل للدراسة' : 'Full-time commitment to studies',
  ];

  const ageRequirements = [
    {
      title: language === 'ar' ? 'معهد الهندسة والتكنولوجيا' : 'Engineering & Technology Institute',
      desc: language === 'ar'
        ? 'ألا يزيد عمر الطالب عن 22 عاماً في أول أكتوبر من العام الدراسي. يُقبل الطلاب من شعبة الرياضيات بالثانوية العامة أو ما يعادلها.'
        : 'Student must not exceed 22 years of age as of October 1st of the academic year. Students from the Mathematics division of high school or equivalent are accepted.',
    },
    {
      title: language === 'ar' ? 'معهد الإدارة والمالية' : 'Management & Finance Institute',
      desc: language === 'ar'
        ? 'ألا يزيد عمر الطالب عن 22 عاماً في أول أكتوبر من العام الدراسي. يُقبل الطلاب من جميع شعب الثانوية العامة أو ما يعادلها.'
        : 'Student must not exceed 22 years of age as of October 1st of the academic year. Students from all high school divisions or equivalent are accepted.',
    },
  ];

  const educationalRequirements = [
    {
      institute: language === 'ar' ? 'معهد الهندسة والتكنولوجيا' : 'Engineering Institute',
      items: [
        language === 'ar' ? 'شهادة الثانوية العامة - شعبة الرياضيات' : 'High School Certificate - Mathematics Division',
        language === 'ar' ? 'دبلوم المدارس الثانوية الصناعية (نظام 5 سنوات)' : 'Industrial Secondary School Diploma (5-year system)',
        language === 'ar' ? 'الشهادات المعادلة المعتمدة من المجلس الأعلى للجامعات' : 'Equivalent certificates approved by the Supreme Council of Universities',
      ],
    },
    {
      institute: language === 'ar' ? 'معهد الإدارة والمالية' : 'Management Institute',
      items: [
        language === 'ar' ? 'شهادة الثانوية العامة - جميع الشعب' : 'High School Certificate - All Divisions',
        language === 'ar' ? 'دبلوم المدارس الثانوية التجارية (نظام 5 سنوات)' : 'Commercial Secondary School Diploma (5-year system)',
        language === 'ar' ? 'شهادة الثانوية الأزهرية' : 'Al-Azhar Secondary Certificate',
        language === 'ar' ? 'الشهادات المعادلة المعتمدة' : 'Approved equivalent certificates',
      ],
    },
  ];

  const requiredDocuments = [
    language === 'ar' ? 'أصل شهادة الثانوية العامة أو ما يعادلها' : 'Original high school diploma or equivalent',
    language === 'ar' ? 'أصل شهادة الميلاد (كمبيوتر)' : 'Original birth certificate (computer-issued)',
    language === 'ar' ? '6 صور شخصية حديثة (4×6)' : '6 recent passport-size photos (4×6)',
    language === 'ar' ? 'صورة بطاقة الرقم القومي' : 'Copy of national ID card',
    language === 'ar' ? 'نموذج 2 جند أو 6 جند (للذكور)' : 'Military service form 2 or 6 (for males)',
    language === 'ar' ? 'إيصال سداد المصروفات الدراسية' : 'Tuition fee payment receipt',
    language === 'ar' ? 'استمارة التقديم الإلكتروني مطبوعة' : 'Printed online application form',
    language === 'ar' ? 'شهادة طبية من المستشفى الجامعي' : 'Medical certificate from the university hospital',
  ];

  const medicalRequirements = [
    language === 'ar' ? 'إجراء كشف طبي شامل في المستشفى الجامعي المعتمد' : 'Complete medical examination at the approved university hospital',
    language === 'ar' ? 'فحص النظر والسمع' : 'Vision and hearing tests',
    language === 'ar' ? 'تحاليل طبية أساسية (صورة دم كاملة)' : 'Basic medical tests (complete blood count)',
    language === 'ar' ? 'فحص القلب والضغط' : 'Heart and blood pressure examination',
    language === 'ar' ? 'الخلو من الأمراض المعدية' : 'Free from infectious diseases',
    language === 'ar' ? 'اللياقة البدنية للتخصصات العملية (الهندسة)' : 'Physical fitness for practical specializations (Engineering)',
  ];

  const feesInfo = [
    {
      title: language === 'ar' ? 'رسوم التقديم' : 'Application Fees',
      desc: language === 'ar' ? 'رسوم غير مستردة تُسدد عند التقديم الإلكتروني' : 'Non-refundable fees paid during online application',
    },
    {
      title: language === 'ar' ? 'المصروفات الدراسية' : 'Tuition Fees',
      desc: language === 'ar' ? 'تُحدد سنوياً وفقاً لقرارات المجلس الأعلى للجامعات' : 'Determined annually according to Supreme Council of Universities decisions',
    },
    {
      title: language === 'ar' ? 'نظام التقسيط' : 'Installment Plan',
      desc: language === 'ar' ? 'إمكانية تقسيط المصروفات على 3 أقساط خلال العام الدراسي' : 'Fees can be paid in 3 installments during the academic year',
    },
    {
      title: language === 'ar' ? 'طرق الدفع' : 'Payment Methods',
      desc: language === 'ar' ? 'الدفع عبر البنك المعتمد أو بوابة الدفع الإلكتروني' : 'Payment via approved bank or electronic payment gateway',
    },
  ];

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={pageTitle} description={pageSubtitle} />
      <Navbar />

      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" alt="Enrollment" src="/figmaAssets/rectangle-16.png" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        </div>
        <div className="relative z-10 text-center px-4">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold text-white [font-family:'Almarai',Helvetica] mb-4" dir={direction}>
              {pageTitle}
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-[600px] mx-auto [font-family:'Almarai',Helvetica]" dir={direction}>
              {pageSubtitle}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <Breadcrumb items={[
        { label: language === 'ar' ? 'الرئيسية' : 'Home', href: '/' },
        { label: language === 'ar' ? 'القبول والخدمات' : 'Admission & Services', href: '/admission' },
        { label: language === 'ar' ? 'شروط الالتحاق' : 'Enrollment Conditions' },
      ]} />

      <section className="py-20 md:py-24 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <ClipboardList className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'الشروط العامة للالتحاق' : 'General Enrollment Requirements'}
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Card className="rounded-3xl border-0 shadow-lg bg-white dark:bg-neutral-900">
              <CardContent className="p-8" dir={direction}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {generalRequirements.map((req, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-xl hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-green-700 dark:text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-700 dark:text-neutral-300 [font-family:'Almarai',Helvetica] text-sm">{req}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <Calendar className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'شروط السن' : 'Age Requirements'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" dir={direction}>
            {ageRequirements.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.15} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full bg-white dark:bg-neutral-800">
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div className="w-14 h-14 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center">
                      <UserCheck className="w-7 h-7 text-green-700 dark:text-green-500" />
                    </div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{item.title}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{item.desc}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <GraduationCap className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'المؤهلات المطلوبة' : 'Educational Requirements'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="flex flex-col gap-6" dir={direction}>
            {educationalRequirements.map((section, index) => (
              <AnimatedSection key={index} delay={index * 0.15} direction={direction === 'rtl' ? "right" : "left"}>
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-neutral-900">
                  <CardContent className="p-6 flex flex-col gap-4">
                    <h3 className="font-bold text-lg text-green-700 dark:text-green-500 [font-family:'Almarai',Helvetica]">{section.institute}</h3>
                    <div className="flex flex-col gap-2">
                      {section.items.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 p-2 rounded-lg">
                          <CheckCircle2 className="w-4 h-4 text-green-700 dark:text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-neutral-700 dark:text-neutral-300 [font-family:'Almarai',Helvetica] text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <FileText className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'المستندات المطلوبة' : 'Required Documents'}
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Card className="rounded-3xl border-0 shadow-lg bg-white dark:bg-neutral-800">
              <CardContent className="p-8" dir={direction}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {requiredDocuments.map((doc, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-xl hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
                      <FileText className="w-5 h-5 text-green-700 dark:text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-700 dark:text-neutral-300 [font-family:'Almarai',Helvetica] text-sm">{doc}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <Stethoscope className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'المتطلبات الطبية' : 'Medical Requirements'}
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Card className="rounded-3xl border-0 shadow-lg bg-white dark:bg-neutral-900">
              <CardContent className="p-8" dir={direction}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {medicalRequirements.map((req, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-xl hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
                      <Stethoscope className="w-5 h-5 text-green-700 dark:text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-700 dark:text-neutral-300 [font-family:'Almarai',Helvetica] text-sm">{req}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <CreditCard className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'الرسوم والمصروفات' : 'Fees & Payment'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" dir={direction}>
            {feesInfo.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full text-center bg-white dark:bg-neutral-800">
                  <CardContent className="p-6 flex flex-col items-center gap-3">
                    <div className="w-14 h-14 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center">
                      <CreditCard className="w-7 h-7 text-green-700 dark:text-green-500" />
                    </div>
                    <h3 className="font-bold text-sm text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{item.title}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{item.desc}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-800 dark:bg-green-900 transition-colors duration-300">
        <div className="max-w-[800px] mx-auto px-4 md:px-8 text-center">
          <AnimatedSection>
            <div className="flex flex-col items-center gap-6">
              <GraduationCap className="w-16 h-16 text-white/80" />
              <h2 className="text-3xl md:text-4xl font-bold text-white [font-family:'Almarai',Helvetica]">
                {language === 'ar' ? 'ابدأ رحلتك الأكاديمية الآن' : 'Start Your Academic Journey Now'}
              </h2>
              <p className="text-white/80 text-lg max-w-[500px] [font-family:'Almarai',Helvetica]">
                {language === 'ar'
                  ? 'انضم إلى آلاف الطلاب الذين اختاروا معاهد الوادي العليا لبناء مستقبلهم المهني.'
                  : 'Join thousands of students who chose Valley Higher Institutes to build their professional future.'}
              </p>
              <button className="flex items-center gap-2 px-8 py-4 bg-white text-green-800 rounded-2xl font-bold text-lg [font-family:'Almarai',Helvetica] hover:bg-gray-100 transition-colors shadow-lg">
                <span>{language === 'ar' ? 'تقدم الآن' : 'Apply Now'}</span>
                <ArrowRight className={`w-5 h-5 ${direction === 'rtl' ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}