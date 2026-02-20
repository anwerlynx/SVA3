import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { ClipboardList, Monitor, FileUp, UserCheck, Calendar, HelpCircle, GraduationCap, ArrowRight, CreditCard, Stethoscope } from "lucide-react";

export default function AdmissionProcedures() {
  const { language, direction } = useLanguage();

  const pageTitle = language === 'ar' ? 'إجراءات القبول' : 'Admission Procedures';
  const pageSubtitle = language === 'ar'
    ? 'دليلك الشامل لخطوات التقديم والقبول في معاهد الوادي العليا'
    : 'Your comprehensive guide to application and admission steps at Valley Higher Institutes';

  const admissionSteps = [
    {
      step: '1',
      icon: Monitor,
      title: language === 'ar' ? 'التسجيل الإلكتروني' : 'Online Registration',
      desc: language === 'ar'
        ? 'قم بزيارة الموقع الرسمي لمعاهد الوادي العليا وأنشئ حساباً جديداً. املأ جميع البيانات الشخصية والأكاديمية المطلوبة بدقة، واختر المعهد والتخصص المرغوب.'
        : 'Visit the official Valley Higher Institutes website and create a new account. Fill in all required personal and academic data accurately, and select your preferred institute and specialization.',
    },
    {
      step: '2',
      icon: FileUp,
      title: language === 'ar' ? 'رفع المستندات' : 'Upload Documents',
      desc: language === 'ar'
        ? 'قم برفع نسخ إلكترونية واضحة من جميع المستندات المطلوبة: شهادة الثانوية العامة، شهادة الميلاد، بطاقة الرقم القومي، والصور الشخصية.'
        : 'Upload clear electronic copies of all required documents: high school certificate, birth certificate, national ID card, and personal photos.',
    },
    {
      step: '3',
      icon: CreditCard,
      title: language === 'ar' ? 'سداد رسوم التقديم' : 'Pay Application Fees',
      desc: language === 'ar'
        ? 'قم بسداد رسوم التقديم من خلال بوابة الدفع الإلكتروني أو في أحد فروع البنك المعتمد. احتفظ بإيصال الدفع.'
        : 'Pay the application fees through the electronic payment gateway or at any branch of the approved bank. Keep the payment receipt.',
    },
    {
      step: '4',
      icon: ClipboardList,
      title: language === 'ar' ? 'تقديم المستندات الأصلية' : 'Submit Original Documents',
      desc: language === 'ar'
        ? 'توجه إلى مكتب القبول والتسجيل لتقديم جميع المستندات الأصلية للمراجعة والتحقق. تأكد من إحضار جميع الأوراق المطلوبة.'
        : 'Visit the Admissions Office to submit all original documents for review and verification. Make sure to bring all required paperwork.',
    },
    {
      step: '5',
      icon: Stethoscope,
      title: language === 'ar' ? 'الكشف الطبي' : 'Medical Examination',
      desc: language === 'ar'
        ? 'إجراء الكشف الطبي الشامل في المستشفى الجامعي المعتمد. يشمل فحص النظر والسمع والتحاليل الأساسية وفحص اللياقة البدنية.'
        : 'Undergo a comprehensive medical examination at the approved university hospital. Includes vision, hearing tests, basic lab work, and physical fitness assessment.',
    },
    {
      step: '6',
      icon: UserCheck,
      title: language === 'ar' ? 'المقابلة الشخصية' : 'Personal Interview',
      desc: language === 'ar'
        ? 'حضور المقابلة الشخصية مع لجنة القبول لتقييم مهارات الطالب ومدى ملاءمته للتخصص المختار. تشمل أسئلة عامة ومتخصصة.'
        : 'Attend the personal interview with the Admissions Committee to evaluate the student\'s skills and suitability for the chosen specialization. Includes general and specialized questions.',
    },
    {
      step: '7',
      icon: GraduationCap,
      title: language === 'ar' ? 'تأكيد القبول والتسجيل' : 'Confirm Admission & Register',
      desc: language === 'ar'
        ? 'بعد إعلان نتائج القبول، قم بتأكيد قبولك وسداد المصروفات الدراسية واستلام جدول المحاضرات والبدء في الدراسة.'
        : 'After admission results are announced, confirm your acceptance, pay tuition fees, receive your class schedule, and begin your studies.',
    },
  ];

  const onlineInstructions = [
    language === 'ar' ? 'تأكد من استخدام متصفح حديث (Chrome أو Firefox)' : 'Make sure to use a modern browser (Chrome or Firefox)',
    language === 'ar' ? 'جهّز جميع المستندات المطلوبة بصيغة PDF أو JPG' : 'Prepare all required documents in PDF or JPG format',
    language === 'ar' ? 'حجم الملف الواحد لا يتجاوز 2 ميجابايت' : 'Single file size should not exceed 2MB',
    language === 'ar' ? 'تأكد من وضوح الصور والمستندات المرفوعة' : 'Ensure clarity of uploaded photos and documents',
    language === 'ar' ? 'احتفظ برقم الطلب وكلمة المرور لمتابعة حالة التقديم' : 'Keep your application number and password to track application status',
    language === 'ar' ? 'يمكنك تعديل بياناتك قبل الإرسال النهائي' : 'You can edit your data before final submission',
  ];

  const importantDates = [
    {
      event: language === 'ar' ? 'بدء التقديم الإلكتروني' : 'Online Application Opens',
      date: language === 'ar' ? '1 يوليو 2026' : 'July 1, 2026',
      status: language === 'ar' ? 'قريباً' : 'Coming Soon',
    },
    {
      event: language === 'ar' ? 'آخر موعد لرفع المستندات' : 'Document Upload Deadline',
      date: language === 'ar' ? '31 أغسطس 2026' : 'August 31, 2026',
      status: language === 'ar' ? 'قريباً' : 'Coming Soon',
    },
    {
      event: language === 'ar' ? 'المقابلات الشخصية' : 'Personal Interviews',
      date: language === 'ar' ? '5-15 سبتمبر 2026' : 'September 5-15, 2026',
      status: language === 'ar' ? 'قريباً' : 'Coming Soon',
    },
    {
      event: language === 'ar' ? 'إعلان النتائج' : 'Results Announcement',
      date: language === 'ar' ? '1 أكتوبر 2026' : 'October 1, 2026',
      status: language === 'ar' ? 'قريباً' : 'Coming Soon',
    },
  ];

  const faqs = [
    {
      question: language === 'ar' ? 'ما هي المستندات المطلوبة للتقديم؟' : 'What documents are required for application?',
      answer: language === 'ar'
        ? 'المستندات المطلوبة تشمل: أصل شهادة الثانوية العامة، أصل شهادة الميلاد، صورة بطاقة الرقم القومي، 6 صور شخصية، نموذج الجند (للذكور)، واستمارة التقديم الإلكتروني مطبوعة.'
        : 'Required documents include: original high school certificate, original birth certificate, copy of national ID, 6 passport photos, military service form (for males), and printed online application form.',
    },
    {
      question: language === 'ar' ? 'هل يمكن التقديم لأكثر من تخصص؟' : 'Can I apply for more than one specialization?',
      answer: language === 'ar'
        ? 'نعم، يمكنك اختيار تخصص أول ورغبة ثانية أثناء التقديم. يتم التوزيع وفقاً للمجموع والأماكن المتاحة في كل تخصص.'
        : 'Yes, you can choose a first choice and a second preference during application. Distribution is based on scores and available places in each specialization.',
    },
    {
      question: language === 'ar' ? 'ماذا يحدث في المقابلة الشخصية؟' : 'What happens during the personal interview?',
      answer: language === 'ar'
        ? 'المقابلة الشخصية تهدف إلى تقييم شخصية الطالب ومهاراته التواصلية ومدى معرفته بالتخصص المختار. تستغرق حوالي 15-20 دقيقة وتشمل أسئلة عامة ومتخصصة.'
        : 'The personal interview aims to evaluate the student\'s personality, communication skills, and knowledge of the chosen specialization. It takes about 15-20 minutes and includes general and specialized questions.',
    },
    {
      question: language === 'ar' ? 'هل هناك اختبار قبول؟' : 'Is there an admission test?',
      answer: language === 'ar'
        ? 'بعض التخصصات قد تتطلب اختبار قبول تحريري بالإضافة إلى المقابلة الشخصية. يتم إبلاغ المتقدمين بمواعيد وتفاصيل الاختبارات عبر البريد الإلكتروني والموقع.'
        : 'Some specializations may require a written admission test in addition to the personal interview. Applicants are notified of test dates and details via email and the website.',
    },
    {
      question: language === 'ar' ? 'متى يتم إعلان نتائج القبول؟' : 'When are admission results announced?',
      answer: language === 'ar'
        ? 'يتم إعلان نتائج القبول في الأسبوع الأول من أكتوبر على الموقع الرسمي. كما يتم إرسال رسالة نصية وبريد إلكتروني للمقبولين.'
        : 'Admission results are announced in the first week of October on the official website. Accepted students also receive an SMS and email notification.',
    },
    {
      question: language === 'ar' ? 'هل يمكن سحب الملف بعد التقديم؟' : 'Can I withdraw my file after applying?',
      answer: language === 'ar'
        ? 'نعم، يمكن سحب الملف خلال فترة التقديم. بعد إعلان النتائج، يمكن السحب مع مراعاة أن رسوم التقديم غير مستردة.'
        : 'Yes, you can withdraw your file during the application period. After results are announced, withdrawal is possible but application fees are non-refundable.',
    },
  ];

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={pageTitle} description={pageSubtitle} />
      <Navbar />

      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" alt="Admission Procedures" src="/figmaAssets/rectangle-16.png" />
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

      <section className="py-20 md:py-24 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[900px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <ClipboardList className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'خطوات التقديم والقبول' : 'Admission Process Steps'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="flex flex-col gap-6" dir={direction}>
            {admissionSteps.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction={direction === 'rtl' ? "right" : "left"}>
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-neutral-900">
                  <CardContent className="p-6 flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-green-700 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg [font-family:'Almarai',Helvetica]">{item.step}</span>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2">
                        <item.icon className="w-5 h-5 text-green-700 dark:text-green-500" />
                        <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{item.title}</h3>
                      </div>
                      <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{item.desc}</p>
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
                <Monitor className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'تعليمات التقديم الإلكتروني' : 'Online Application Instructions'}
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Card className="rounded-3xl border-0 shadow-lg bg-white dark:bg-neutral-800">
              <CardContent className="p-8" dir={direction}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {onlineInstructions.map((inst, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-xl hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
                      <Monitor className="w-5 h-5 text-green-700 dark:text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-700 dark:text-neutral-300 [font-family:'Almarai',Helvetica] text-sm">{inst}</span>
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
                <Calendar className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'المواعيد المهمة' : 'Important Dates'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" dir={direction}>
            {importantDates.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full text-center bg-white dark:bg-neutral-900">
                  <CardContent className="p-6 flex flex-col items-center gap-3">
                    <div className="w-14 h-14 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center">
                      <Calendar className="w-7 h-7 text-green-700 dark:text-green-500" />
                    </div>
                    <h3 className="font-bold text-sm text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{item.event}</h3>
                    <p className="text-green-700 dark:text-green-500 font-bold text-lg [font-family:'Almarai',Helvetica]">{item.date}</p>
                    <span className="bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-500 px-3 py-1 rounded-full text-xs font-bold [font-family:'Almarai',Helvetica]">{item.status}</span>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[800px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <HelpCircle className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Accordion type="single" collapsible className="flex flex-col gap-3" dir={direction}>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="bg-white dark:bg-neutral-800 rounded-2xl border-0 shadow-sm px-6">
                  <AccordionTrigger className={`${direction === 'rtl' ? 'text-right' : 'text-left'} font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] hover:no-underline py-5 transition-colors duration-300`}>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-500 dark:text-neutral-300 [font-family:'Almarai',Helvetica] pb-5 leading-relaxed transition-colors duration-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-green-800 dark:bg-green-900 transition-colors duration-300">
        <div className="max-w-[800px] mx-auto px-4 md:px-8 text-center">
          <AnimatedSection>
            <div className="flex flex-col items-center gap-6">
              <GraduationCap className="w-16 h-16 text-white/80" />
              <h2 className="text-3xl md:text-4xl font-bold text-white [font-family:'Almarai',Helvetica]">
                {language === 'ar' ? 'جاهز للتقديم؟' : 'Ready to Apply?'}
              </h2>
              <p className="text-white/80 text-lg max-w-[500px] [font-family:'Almarai',Helvetica]">
                {language === 'ar'
                  ? 'ابدأ رحلتك الأكاديمية الآن وانضم إلى مجتمع معاهد الوادي العليا.'
                  : 'Start your academic journey now and join the Valley Higher Institutes community.'}
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