import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Card, CardContent } from "@/components/ui/card";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { Link } from "wouter";
import {
  GraduationCap, CheckCircle2, FileText, DollarSign, Award,
  HelpCircle, ChevronDown, ChevronUp, ArrowRight, Users, BookOpen, ClipboardList
} from "lucide-react";
import { useState } from "react";

export default function Students() {
  const { language, direction } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const pageTitle = language === 'ar' ? 'شؤون الطلاب' : 'Student Affairs';
  const pageSubtitle = language === 'ar'
    ? 'كل ما تحتاجه من معلومات حول القبول والتسجيل والمنح الدراسية'
    : 'Everything you need to know about admissions, registration, and scholarships';

  const stats = [
    { icon: GraduationCap, value: 3000, suffix: "+", label: language === 'ar' ? "طالب مسجل" : "Enrolled Students" },
    { icon: Award, value: 50, suffix: "+", label: language === 'ar' ? "منحة دراسية سنوياً" : "Annual Scholarships" },
    { icon: BookOpen, value: 8, suffix: "", label: language === 'ar' ? "برنامج أكاديمي" : "Academic Programs" },
    { icon: Users, value: 95, suffix: "%", label: language === 'ar' ? "نسبة التوظيف" : "Employment Rate" },
  ];

  const requirements = [
    { ar: "شهادة الثانوية العامة المصرية (ثانوية عامة) أو ما يعادلها", en: "Egyptian General Secondary Certificate (Thanaweya Amma) or equivalent" },
    { ar: "الحد الأدنى 50% في المسار العلمي/الأدبي المعني", en: "Minimum grade of 50% in the relevant scientific/literary track" },
    { ar: "بطاقة رقم قومي أو جواز سفر ساري", en: "Valid national ID or passport" },
    { ar: "4 صور شخصية حديثة بحجم جواز السفر", en: "4 recent passport-size photographs" },
    { ar: "شهادة الموقف من التجنيد (للذكور)", en: "Military status certificate (for males)" },
    { ar: "شهادة اللياقة الطبية من مستشفى معتمد", en: "Medical fitness certificate from an approved hospital" },
  ];

  const steps = [
    { step: "01", title: language === 'ar' ? "التقديم الإلكتروني" : "Online Application", desc: language === 'ar' ? "إكمال نموذج التقديم الإلكتروني بالبيانات الشخصية والأكاديمية." : "Complete the online application form with your personal and academic details." },
    { step: "02", title: language === 'ar' ? "تقديم المستندات" : "Document Submission", desc: language === 'ar' ? "تقديم جميع المستندات المطلوبة لمكتب القبول خلال 7 أيام." : "Submit all required documents to the admissions office within 7 days." },
    { step: "03", title: language === 'ar' ? "مراجعة الأهلية" : "Eligibility Review", desc: language === 'ar' ? "تراجع لجنة القبول طلبك خلال 3 أيام عمل." : "Our admissions committee reviews your application within 3 business days." },
    { step: "04", title: language === 'ar' ? "القبول والتسجيل" : "Acceptance & Enrollment", desc: language === 'ar' ? "استلام خطاب القبول وإتمام التسجيل بسداد القسط الأول." : "Receive your acceptance letter and complete enrollment by paying the first installment." },
  ];

  const fees = [
    { program: language === 'ar' ? "برامج الهندسة" : "Engineering Programs", annual: "EGP 18,000", installments: language === 'ar' ? "3 أقساط متاحة" : "3 installments available" },
    { program: language === 'ar' ? "برامج الإدارة" : "Management Programs", annual: "EGP 14,000", installments: language === 'ar' ? "3 أقساط متاحة" : "3 installments available" },
    { program: language === 'ar' ? "برنامج نظم المعلومات" : "MIS Program", annual: "EGP 15,000", installments: language === 'ar' ? "3 أقساط متاحة" : "3 installments available" },
  ];

  const scholarships = [
    { name: language === 'ar' ? "منحة التفوق الأكاديمي" : "Academic Excellence Award", value: language === 'ar' ? "تخفيض 50% من الرسوم" : "50% tuition reduction", criteria: language === 'ar' ? "أفضل 5% من دفعة التخرج بمعدل 90%+" : "Top 5% of graduating class with 90%+ grade" },
    { name: language === 'ar' ? "منحة الاحتياج المالي" : "Financial Need Grant", value: language === 'ar' ? "تخفيض 25-75%" : "25-75% reduction", criteria: language === 'ar' ? "بناءً على تقييم دخل الأسرة" : "Based on family income assessment" },
    { name: language === 'ar' ? "منحة التفوق الرياضي" : "Sports Excellence Grant", value: language === 'ar' ? "تخفيض 30% من الرسوم" : "30% tuition reduction", criteria: language === 'ar' ? "إنجاز رياضي وطني أو دولي" : "National or international sports achievement" },
    { name: language === 'ar' ? "خصم الأشقاء" : "Sibling Discount", value: language === 'ar' ? "10% لكل شقيق إضافي" : "10% per additional sibling", criteria: language === 'ar' ? "للعائلات التي لديها طالبان أو أكثر مسجلين" : "For families with 2+ enrolled students" },
  ];

  const faqs = [
    { q: language === 'ar' ? "ما هو الموعد النهائي للتقديم؟" : "What is the application deadline?", a: language === 'ar' ? "يتم قبول الطلبات من 1 يوليو إلى 30 سبتمبر من كل عام دراسي. قد يتم النظر في الطلبات المتأخرة بناءً على المقاعد المتاحة." : "Applications are accepted from July 1 to September 30 each academic year. Late applications may be considered based on available seats." },
    { q: language === 'ar' ? "هل يمكنني التحويل من جامعة أخرى؟" : "Can I transfer from another university?", a: language === 'ar' ? "نعم، يتم قبول الطلاب المحولين وفقاً لتقييم الساعات المعتمدة وتوافر المقاعد. تواصل مع مكتب القبول للتفاصيل." : "Yes, transfer students are accepted subject to credit hour evaluation and seat availability. Contact the admissions office for details." },
    { q: language === 'ar' ? "هل توجد برامج مسائية/جزئية؟" : "Are there evening/part-time programs?", a: language === 'ar' ? "نعم، نقدم برامج مسائية للمهنيين العاملين في أقسام مختارة. تواصل معنا لمعرفة الجدول الحالي." : "Yes, we offer evening programs for working professionals in select departments. Contact us for the current schedule." },
    { q: language === 'ar' ? "ما المستندات المطلوبة للطلاب الدوليين؟" : "What documents are needed for international students?", a: language === 'ar' ? "يحتاج الطلاب الدوليون إلى شهادة معادلة من وزارة التربية والتعليم المصرية وجواز سفر ساري ووثائق التأشيرة." : "International students need an equivalency certificate from the Egyptian Ministry of Education, valid passport, and visa documentation." },
    { q: language === 'ar' ? "هل يوجد سكن طلابي؟" : "Is there a student housing facility?", a: language === 'ar' ? "لا نقدم حالياً سكناً في الحرم الجامعي، لكننا نحتفظ بقائمة بالإقامات القريبة الموصى بها." : "We do not currently offer on-campus housing, but we maintain a list of recommended nearby accommodations." },
    { q: language === 'ar' ? "كيف أتقدم بطلب للحصول على منحة دراسية؟" : "How do I apply for a scholarship?", a: language === 'ar' ? "يتم تقديم طلبات المنح الدراسية مع الطلب الرئيسي. يتم النظر في الطلاب المؤهلين تلقائياً بناءً على سجلاتهم الأكاديمية." : "Scholarship applications are submitted alongside the main application. Eligible students are automatically considered based on their academic records." },
  ];

  const quickLinks = [
    { label: language === 'ar' ? "متطلبات القبول" : "Admission Requirements", href: "#admission-requirements" },
    { label: language === 'ar' ? "خطوات التقديم" : "Application Process", href: "#application-process" },
    { label: language === 'ar' ? "الرسوم الدراسية" : "Tuition Fees", href: "#tuition-fees" },
    { label: language === 'ar' ? "المنح الدراسية" : "Scholarships", href: "#scholarships" },
    { label: language === 'ar' ? "الأسئلة الشائعة" : "FAQ", href: "#faq" },
  ];

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300" dir={direction}>
      <PageHead
        title={language === 'ar' ? 'شؤون الطلاب - معاهد الوادي العليا' : 'Student Affairs - Valley Higher Institutes'}
        description={language === 'ar' ? 'معلومات القبول والتسجيل والمنح الدراسية في معاهد الوادي العليا' : 'Admission requirements, application process, tuition fees, scholarships at Valley Higher Institutes'}
      />
      <Navbar />

      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" alt={pageTitle} src="/figmaAssets/rectangle-2.png" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        </div>
        <div className="relative z-10 text-center px-4">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold text-white [font-family:'Almarai',Helvetica] mb-4">
              {pageTitle}
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-[600px] mx-auto [font-family:'Almarai',Helvetica]">
              {pageSubtitle}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 pt-6">
        <Breadcrumb
          items={[
            { label: language === 'ar' ? 'الرئيسية' : 'Home', href: '/' },
            { label: language === 'ar' ? 'الخدمات' : 'Services', href: '/services' },
            { label: pageTitle },
          ]}
        />
      </div>

      <section className="py-12 md:py-16 bg-green-800 dark:bg-green-900">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white [font-family:'Almarai',Helvetica]">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-white/80 text-sm mt-1 [font-family:'Almarai',Helvetica]">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-6 bg-gray-50 dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-800 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {quickLinks.map((link, i) => (
              <a key={i} href={link.href}
                className="px-5 py-2 bg-white dark:bg-neutral-800 hover:bg-green-50 dark:hover:bg-green-900/20 text-neutral-600 dark:text-neutral-300 hover:text-green-700 dark:hover:text-green-400 text-sm rounded-xl transition-all border border-gray-200 dark:border-neutral-700 [font-family:'Almarai',Helvetica]">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <AnimatedSection id="admission-requirements" className="py-16 md:py-20 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[800px] mx-auto px-4 md:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center">
              <FileText className="w-6 h-6 text-green-700 dark:text-green-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'متطلبات القبول' : 'Admission Requirements'}
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm [font-family:'Almarai',Helvetica]">
                {language === 'ar' ? 'المستندات والشروط اللازمة للالتحاق' : 'Documents and conditions required for enrollment'}
              </p>
            </div>
          </div>
          <Card className="rounded-2xl border-0 shadow-sm bg-gray-50 dark:bg-neutral-900">
            <CardContent className="p-6">
              <ul className="flex flex-col gap-3">
                {requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300 [font-family:'Almarai',Helvetica] transition-colors duration-300">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    {language === 'ar' ? req.ar : req.en}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </AnimatedSection>

      <AnimatedSection id="application-process" className="py-16 md:py-20 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] mb-2 transition-colors duration-300">
              {language === 'ar' ? 'خطوات التقديم' : 'Application Process'}
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 [font-family:'Almarai',Helvetica] transition-colors duration-300">
              {language === 'ar' ? 'أربع خطوات بسيطة للانضمام إلينا' : 'Four simple steps to join us'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full bg-white dark:bg-neutral-800">
                  <CardContent className="p-6">
                    <span className="text-4xl font-black text-green-100 dark:text-green-900/40 mb-3 block [font-family:'Almarai',Helvetica]">{step.step}</span>
                    <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-2 [font-family:'Almarai',Helvetica] transition-colors duration-300">{step.title}</h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{step.desc}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/admission"
              className="inline-flex items-center gap-2 px-8 py-3 bg-green-700 hover:bg-green-600 text-white font-bold rounded-xl transition-colors [font-family:'Almarai',Helvetica]">
              {language === 'ar' ? 'تقدم الآن' : 'Apply Now'}
              {direction === 'rtl' ? <ArrowRight className="w-4 h-4 rotate-180" /> : <ArrowRight className="w-4 h-4" />}
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="tuition-fees" className="py-16 md:py-20 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[800px] mx-auto px-4 md:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'الرسوم الدراسية' : 'Tuition Fees'}
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm [font-family:'Almarai',Helvetica]">
                {language === 'ar' ? 'تكاليف الدراسة لكل برنامج' : 'Study costs per program'}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {fees.map((fee, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-md transition-all bg-gray-50 dark:bg-neutral-900">
                  <CardContent className="p-5 flex items-center justify-between flex-wrap gap-3">
                    <div>
                      <p className="font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{fee.program}</p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 [font-family:'Almarai',Helvetica]">{fee.installments}</p>
                    </div>
                    <div className={direction === 'rtl' ? 'text-left' : 'text-right'}>
                      <p className="text-lg font-bold text-amber-600 dark:text-amber-400 [font-family:'Almarai',Helvetica]">{fee.annual}</p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 [font-family:'Almarai',Helvetica]">{language === 'ar' ? 'سنوياً' : 'per year'}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
          <p className="text-xs text-neutral-400 mt-4 text-center [font-family:'Almarai',Helvetica]">
            {language === 'ar' ? '* الرسوم قابلة للمراجعة السنوية. تواصل مع مكتب القبول للحصول على أحدث المعلومات.' : '* Fees are subject to annual review. Contact the admissions office for the latest information.'}
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection id="scholarships" className="py-16 md:py-20 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center mx-auto mb-4">
              <Award className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] mb-2 transition-colors duration-300">
              {language === 'ar' ? 'المنح الدراسية والدعم المالي' : 'Scholarships & Financial Aid'}
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 [font-family:'Almarai',Helvetica] transition-colors duration-300">
              {language === 'ar' ? 'فرص مالية لدعم مسيرتك التعليمية' : 'Financial opportunities to support your educational journey'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {scholarships.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full bg-white dark:bg-neutral-800 hover:border-indigo-200 dark:hover:border-indigo-800">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3 gap-3">
                      <h3 className="font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{s.name}</h3>
                      <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400 flex-shrink-0 [font-family:'Almarai',Helvetica]">{s.value}</span>
                    </div>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 [font-family:'Almarai',Helvetica] transition-colors duration-300">{s.criteria}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="faq" className="py-16 md:py-20 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[800px] mx-auto px-4 md:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-violet-50 dark:bg-violet-900/20 flex items-center justify-center">
              <HelpCircle className="w-6 h-6 text-violet-600 dark:text-violet-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm [font-family:'Almarai',Helvetica]">
                {language === 'ar' ? 'إجابات على أهم الأسئلة المتكررة' : 'Answers to the most common questions'}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <Card key={i} className="rounded-2xl border-0 shadow-sm overflow-hidden bg-gray-50 dark:bg-neutral-900">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-start hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors">
                  <span className="font-medium text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300 pe-4">{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="w-5 h-5 text-neutral-400 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-neutral-400 flex-shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{faq.a}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <section className="py-16 bg-green-700 dark:bg-green-900 transition-colors duration-300">
        <div className="max-w-[700px] mx-auto px-4 md:px-8 text-center">
          <AnimatedSection>
            <ClipboardList className="w-12 h-12 text-white/80 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white [font-family:'Almarai',Helvetica] mb-4">
              {language === 'ar' ? 'ابدأ رحلتك التعليمية اليوم' : 'Start Your Educational Journey Today'}
            </h3>
            <p className="text-white/80 [font-family:'Almarai',Helvetica] mb-6">
              {language === 'ar' ? 'انضم إلى آلاف الطلاب الذين اختاروا معاهد الوادي العليا لبناء مستقبلهم' : 'Join thousands of students who chose Valley Higher Institutes to build their future'}
            </p>
            <Link href="/admission"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-green-700 rounded-full font-bold [font-family:'Almarai',Helvetica] hover:bg-green-50 transition-colors">
              {language === 'ar' ? 'تقدم بطلب الآن' : 'Apply Now'}
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}