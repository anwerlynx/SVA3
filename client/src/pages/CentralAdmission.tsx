import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle2, FileText, Calendar, ClipboardList, HelpCircle, ArrowRight, GraduationCap } from "lucide-react";
import { useState, useEffect } from "react";

export default function CentralAdmission() {
  const { language, direction } = useLanguage();

  const pageTitle = language === 'ar' ? 'القبول المركزي' : 'Central Admission';
  const pageSubtitle = language === 'ar'
    ? 'ابدأ رحلتك الأكاديمية معنا - تقديم سهل وسريع'
    : 'Start your academic journey with us - easy and fast application';

  const requirements = [
    language === 'ar' ? 'الحصول على شهادة الثانوية العامة أو ما يعادلها' : 'High school diploma or equivalent',
    language === 'ar' ? 'استيفاء الحد الأدنى للمجموع المطلوب للقسم المختار' : 'Meeting the minimum score required for the chosen department',
    language === 'ar' ? 'اجتياز الكشف الطبي' : 'Passing the medical examination',
    language === 'ar' ? 'التقدم خلال فترة التنسيق المحددة' : 'Applying during the specified coordination period',
    language === 'ar' ? 'سداد رسوم التقديم والتسجيل' : 'Payment of application and registration fees',
    language === 'ar' ? 'ألا يكون قد مضى على الحصول على الثانوية أكثر من عامين' : 'No more than two years since obtaining the high school diploma',
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

  const importantDates = [
    {
      event: language === 'ar' ? 'بدء التقديم الإلكتروني' : 'Online Application Opens',
      date: language === 'ar' ? '1 يوليو 2026' : 'July 1, 2026',
      status: language === 'ar' ? 'قريباً' : 'Coming Soon',
    },
    {
      event: language === 'ar' ? 'آخر موعد للتقديم' : 'Application Deadline',
      date: language === 'ar' ? '15 سبتمبر 2026' : 'September 15, 2026',
      status: language === 'ar' ? 'قريباً' : 'Coming Soon',
    },
    {
      event: language === 'ar' ? 'إعلان نتائج القبول' : 'Admission Results Announcement',
      date: language === 'ar' ? '1 أكتوبر 2026' : 'October 1, 2026',
      status: language === 'ar' ? 'قريباً' : 'Coming Soon',
    },
    {
      event: language === 'ar' ? 'بدء الدراسة' : 'Classes Begin',
      date: language === 'ar' ? '15 أكتوبر 2026' : 'October 15, 2026',
      status: language === 'ar' ? 'قريباً' : 'Coming Soon',
    },
  ];

  const admissionSteps = [
    {
      step: '1',
      title: language === 'ar' ? 'التسجيل الإلكتروني' : 'Online Registration',
      desc: language === 'ar' ? 'قم بملء استمارة التقديم الإلكتروني عبر الموقع الرسمي مع إدخال جميع البيانات المطلوبة.' : 'Fill out the online application form on the official website with all required information.',
    },
    {
      step: '2',
      title: language === 'ar' ? 'تقديم المستندات' : 'Submit Documents',
      desc: language === 'ar' ? 'قم بتقديم جميع المستندات المطلوبة في مكتب القبول والتسجيل خلال الفترة المحددة.' : 'Submit all required documents to the admissions office during the specified period.',
    },
    {
      step: '3',
      title: language === 'ar' ? 'الكشف الطبي' : 'Medical Examination',
      desc: language === 'ar' ? 'إجراء الكشف الطبي في المستشفى الجامعي المعتمد والحصول على الشهادة الطبية.' : 'Undergo the medical examination at the approved university hospital and obtain the medical certificate.',
    },
    {
      step: '4',
      title: language === 'ar' ? 'سداد المصروفات' : 'Fee Payment',
      desc: language === 'ar' ? 'سداد المصروفات الدراسية في البنك المعتمد أو من خلال بوابة الدفع الإلكتروني.' : 'Pay the tuition fees at the approved bank or through the electronic payment gateway.',
    },
    {
      step: '5',
      title: language === 'ar' ? 'تأكيد القبول' : 'Confirm Admission',
      desc: language === 'ar' ? 'استلام خطاب القبول والتسجيل رسمياً في القسم المختار وبدء الدراسة.' : 'Receive the acceptance letter and officially register in the chosen department to begin studies.',
    },
  ];

  const staticFaqs = [
    {
      question: language === 'ar' ? 'ما هو الحد الأدنى للقبول؟' : 'What is the minimum score for admission?',
      answer: language === 'ar'
        ? 'يختلف الحد الأدنى للقبول حسب القسم والتخصص. يتم تحديده سنوياً وفقاً لقرارات المجلس الأعلى للجامعات ومجلس إدارة المعاهد.'
        : 'The minimum admission score varies by department and specialization. It is determined annually according to the decisions of the Supreme Council of Universities and the institute\'s board of directors.',
    },
    {
      question: language === 'ar' ? 'هل يوجد نظام تقسيط للمصروفات؟' : 'Is there an installment plan for fees?',
      answer: language === 'ar'
        ? 'نعم، يتوفر نظام تقسيط مرن للمصروفات الدراسية على عدة أقساط خلال العام الدراسي لتسهيل عملية الدفع على الطلاب وأولياء الأمور.'
        : 'Yes, a flexible installment plan is available for tuition fees over several installments during the academic year to make payment easier for students and parents.',
    },
    {
      question: language === 'ar' ? 'هل يمكن التحويل من معهد آخر؟' : 'Can I transfer from another institute?',
      answer: language === 'ar'
        ? 'نعم، يمكن التحويل من معاهد أو كليات أخرى وفقاً لشروط التحويل المعتمدة والتي تتضمن توافق المواد الدراسية والحد الأدنى للتقديرات.'
        : 'Yes, transfers from other institutes or colleges are possible according to approved transfer conditions, which include course compatibility and minimum grade requirements.',
    },
    {
      question: language === 'ar' ? 'ما هي مدة الدراسة؟' : 'What is the duration of study?',
      answer: language === 'ar'
        ? 'مدة الدراسة أربع سنوات دراسية للحصول على درجة البكالوريوس في التخصص المختار، بالإضافة إلى فترة التدريب العملي.'
        : 'The duration of study is four academic years to obtain a bachelor\'s degree in the chosen specialization, plus a practical training period.',
    },
    {
      question: language === 'ar' ? 'هل الشهادة معتمدة؟' : 'Is the degree accredited?',
      answer: language === 'ar'
        ? 'نعم، جميع الشهادات الممنوحة من معاهد الوادي العليا معتمدة من وزارة التعليم العالي والمجلس الأعلى للجامعات ومعترف بها محلياً ودولياً.'
        : 'Yes, all degrees granted by Valley Higher Institutes are accredited by the Ministry of Higher Education and the Supreme Council of Universities, and are recognized locally and internationally.',
    },
    {
      question: language === 'ar' ? 'هل يوجد منح دراسية؟' : 'Are there scholarships available?',
      answer: language === 'ar'
        ? 'نعم، تقدم المعاهد منحاً دراسية للطلاب المتفوقين والمتميزين، بالإضافة إلى إعفاءات جزئية من المصروفات للحالات المستحقة.'
        : 'Yes, the institutes offer scholarships for outstanding students, as well as partial fee waivers for deserving cases.',
    },
  ];

  const [faqs, setFaqs] = useState(staticFaqs);

  useEffect(() => {
    fetch('/api/faqs')
      .then(r => r.json())
      .then((data: any[]) => {
        if (Array.isArray(data) && data.length > 0) {
          const activeFaqs = data.filter((f: any) => f.isActive !== false);
          if (activeFaqs.length > 0) {
            setFaqs(activeFaqs.map((f: any) => ({
              question: language === 'ar' ? f.questionAr : (f.questionEn || f.questionAr),
              answer: language === 'ar' ? f.answerAr : (f.answerEn || f.answerAr),
            })));
          }
        }
      })
      .catch(() => {});
  }, [language]);

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={pageTitle} description={pageSubtitle} />
      <Navbar />

      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" alt="Admission" src="/figmaAssets/rectangle-16.png" />
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

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 pt-6">
        <Breadcrumb
          items={[
            { label: language === 'ar' ? 'الرئيسية' : 'Home', href: '/' },
            { label: pageTitle },
          ]}
        />
      </div>

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
                {language === 'ar' ? 'شروط القبول' : 'Admission Requirements'}
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Card className="rounded-3xl border-0 shadow-lg bg-white dark:bg-neutral-900">
              <CardContent className="p-8" dir={direction}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {requirements.map((req, index) => (
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

      <section className="py-20 md:py-24 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[900px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <GraduationCap className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'خطوات التقديم' : 'Application Steps'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="flex flex-col gap-6" dir={direction}>
            {admissionSteps.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction={direction === 'rtl' ? "right" : "left"}>
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-neutral-800">
                  <CardContent className="p-6 flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-green-700 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg [font-family:'Almarai',Helvetica]">{item.step}</span>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{item.title}</h3>
                      <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-neutral-950 transition-colors duration-300">
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
                <AccordionItem key={index} value={`faq-${index}`} className="bg-gray-50 dark:bg-neutral-800 rounded-2xl border-0 shadow-sm px-6">
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