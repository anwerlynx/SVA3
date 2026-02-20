import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { Users, ClipboardList, BookOpen, IdCard, MessageSquare, HeadphonesIcon, Phone, Mail, MapPin, FileText, Award, Shield } from "lucide-react";

export default function StudentAffairs() {
  const { language, direction } = useLanguage();

  const pageTitle = language === 'ar' ? 'شئون التعليم والطلاب' : 'Student Affairs';
  const pageSubtitle = language === 'ar'
    ? 'خدمات شاملة لدعم الطلاب طوال مسيرتهم الأكاديمية'
    : 'Comprehensive services to support students throughout their academic journey';

  const departmentOverview = language === 'ar'
    ? 'يُعد قسم شئون التعليم والطلاب الركيزة الأساسية لخدمة الطلاب في معاهد الوادي العليا. يقدم القسم مجموعة متكاملة من الخدمات الأكاديمية والإدارية التي تهدف إلى تسهيل حياة الطالب الأكاديمية وتوفير بيئة تعليمية داعمة ومحفزة تساعد على التفوق والنجاح.'
    : 'The Student Affairs department is the cornerstone of student services at Valley Higher Institutes. It provides a comprehensive range of academic and administrative services aimed at facilitating students\' academic life and providing a supportive and motivating educational environment that helps achieve excellence and success.';

  const services = [
    {
      icon: ClipboardList,
      title: language === 'ar' ? 'التسجيل والقيد' : 'Registration & Enrollment',
      desc: language === 'ar'
        ? 'إدارة عمليات التسجيل والقيد للطلاب الجدد والمستمرين، وتنظيم جداول المحاضرات والامتحانات.'
        : 'Managing registration and enrollment processes for new and continuing students, and organizing lecture and exam schedules.',
    },
    {
      icon: FileText,
      title: language === 'ar' ? 'الشهادات والنتائج' : 'Transcripts & Results',
      desc: language === 'ar'
        ? 'إصدار كشوف الدرجات والشهادات الأكاديمية وبيانات النجاح والرسوب وإفادات القيد.'
        : 'Issuing grade transcripts, academic certificates, pass/fail statements, and enrollment confirmations.',
    },
    {
      icon: Award,
      title: language === 'ar' ? 'شهادات التخرج' : 'Graduation Certificates',
      desc: language === 'ar'
        ? 'إعداد وإصدار شهادات التخرج والملاحق الأكاديمية للخريجين وتصديقها من الجهات المعنية.'
        : 'Preparing and issuing graduation certificates and academic supplements for graduates, authenticated by relevant authorities.',
    },
    {
      icon: IdCard,
      title: language === 'ar' ? 'بطاقات الطلاب' : 'Student ID Cards',
      desc: language === 'ar'
        ? 'إصدار وتجديد بطاقات الهوية الطلابية وبطاقات المكتبة والمعامل.'
        : 'Issuing and renewing student identity cards, library cards, and laboratory access cards.',
    },
  ];

  const advisingServices = [
    {
      title: language === 'ar' ? 'الإرشاد الأكاديمي' : 'Academic Guidance',
      desc: language === 'ar'
        ? 'توجيه الطلاب في اختيار التخصصات والمقررات الدراسية المناسبة وفقاً لقدراتهم وميولهم.'
        : 'Guiding students in choosing suitable specializations and courses according to their abilities and interests.',
    },
    {
      title: language === 'ar' ? 'التوجيه المهني' : 'Career Counseling',
      desc: language === 'ar'
        ? 'مساعدة الطلاب في التخطيط لمسارهم المهني وتوفير فرص التدريب والتوظيف.'
        : 'Helping students plan their career path and providing training and employment opportunities.',
    },
    {
      title: language === 'ar' ? 'الدعم النفسي' : 'Psychological Support',
      desc: language === 'ar'
        ? 'تقديم خدمات الإرشاد النفسي والاجتماعي للطلاب الذين يواجهون صعوبات أكاديمية أو شخصية.'
        : 'Providing psychological and social counseling services for students facing academic or personal difficulties.',
    },
  ];

  const supportServices = [
    {
      icon: BookOpen,
      title: language === 'ar' ? 'الدعم الأكاديمي' : 'Academic Support',
      desc: language === 'ar' ? 'برامج دعم أكاديمي للطلاب المتعثرين ومجموعات دراسية مساعدة' : 'Academic support programs for struggling students and study groups',
    },
    {
      icon: Shield,
      title: language === 'ar' ? 'التأمين الصحي' : 'Health Insurance',
      desc: language === 'ar' ? 'توفير تغطية تأمينية صحية شاملة لجميع الطلاب المسجلين' : 'Comprehensive health insurance coverage for all enrolled students',
    },
    {
      icon: Users,
      title: language === 'ar' ? 'الأنشطة الطلابية' : 'Student Activities',
      desc: language === 'ar' ? 'تنظيم الأنشطة والفعاليات الثقافية والرياضية والاجتماعية' : 'Organizing cultural, sports, and social activities and events',
    },
    {
      icon: HeadphonesIcon,
      title: language === 'ar' ? 'خدمة الطلاب' : 'Student Help Desk',
      desc: language === 'ar' ? 'مكتب مساعدة متاح للرد على استفسارات الطلاب وحل مشكلاتهم' : 'Help desk available to answer student inquiries and resolve their issues',
    },
  ];

  const grievanceSteps = [
    {
      step: '1',
      title: language === 'ar' ? 'تقديم الشكوى' : 'Submit Complaint',
      desc: language === 'ar' ? 'يقوم الطالب بتقديم شكوى مكتوبة أو إلكترونية توضح المشكلة بالتفصيل.' : 'Student submits a written or electronic complaint detailing the issue.',
    },
    {
      step: '2',
      title: language === 'ar' ? 'المراجعة والتحقيق' : 'Review & Investigation',
      desc: language === 'ar' ? 'يتم مراجعة الشكوى من قبل لجنة مختصة وإجراء التحقيقات اللازمة.' : 'The complaint is reviewed by a specialized committee and necessary investigations are conducted.',
    },
    {
      step: '3',
      title: language === 'ar' ? 'اتخاذ القرار' : 'Decision Making',
      desc: language === 'ar' ? 'تصدر اللجنة قرارها خلال 7 أيام عمل ويتم إبلاغ الطالب بالنتيجة.' : 'The committee issues its decision within 7 working days and the student is notified of the result.',
    },
    {
      step: '4',
      title: language === 'ar' ? 'التظلم' : 'Appeal',
      desc: language === 'ar' ? 'يحق للطالب التظلم من القرار خلال 15 يوماً أمام لجنة التظلمات العليا.' : 'The student has the right to appeal the decision within 15 days before the Higher Grievance Committee.',
    },
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: language === 'ar' ? 'الهاتف' : 'Phone',
      value: '+20 123 456 7891',
    },
    {
      icon: Mail,
      label: language === 'ar' ? 'البريد الإلكتروني' : 'Email',
      value: 'student.affairs@valley-institutes.edu.eg',
    },
    {
      icon: MapPin,
      label: language === 'ar' ? 'الموقع' : 'Location',
      value: language === 'ar' ? 'المبنى الإداري - الطابق الأول' : 'Administrative Building - First Floor',
    },
  ];

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={pageTitle} description={pageSubtitle} />
      <Navbar />

      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" alt="Student Affairs" src="/figmaAssets/rectangle-2.png" />
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
        { label: language === 'ar' ? 'شئون التعليم والطلاب' : 'Student Affairs' },
      ]} />

      <section className="py-20 md:py-24 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <Users className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'نبذة عن القسم' : 'Department Overview'}
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Card className="rounded-3xl border-0 shadow-lg bg-white dark:bg-neutral-900">
              <CardContent className="p-8" dir={direction}>
                <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">
                  {departmentOverview}
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-16" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <ClipboardList className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'الخدمات المقدمة' : 'Services Provided'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" dir={direction}>
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full text-center group bg-white dark:bg-neutral-800">
                  <CardContent className="p-6 flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center group-hover:bg-green-100 dark:group-hover:bg-green-900/40 transition-colors">
                      <service.icon className="w-8 h-8 text-green-700 dark:text-green-500" />
                    </div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{service.title}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{service.desc}</p>
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
                <BookOpen className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'الإرشاد الأكاديمي والمهني' : 'Academic & Career Advising'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="flex flex-col gap-6" dir={direction}>
            {advisingServices.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction={direction === 'rtl' ? "right" : "left"}>
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-neutral-900">
                  <CardContent className="p-6 flex flex-col gap-2">
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{item.title}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{item.desc}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-16" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <HeadphonesIcon className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'خدمات دعم الطلاب' : 'Student Support Services'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" dir={direction}>
            {supportServices.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full text-center group bg-white dark:bg-neutral-800">
                  <CardContent className="p-6 flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center group-hover:bg-green-100 dark:group-hover:bg-green-900/40 transition-colors">
                      <service.icon className="w-8 h-8 text-green-700 dark:text-green-500" />
                    </div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{service.title}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{service.desc}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[900px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <MessageSquare className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'إجراءات التظلم' : 'Grievance Procedures'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="flex flex-col gap-6" dir={direction}>
            {grievanceSteps.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction={direction === 'rtl' ? "right" : "left"}>
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-neutral-900">
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

      <section className="py-20 bg-green-800 dark:bg-green-900 transition-colors duration-300">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white [font-family:'Almarai',Helvetica]">
                {language === 'ar' ? 'تواصل مع شئون الطلاب' : 'Contact Student Affairs'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" dir={direction}>
            {contactInfo.map((info, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 bg-white/10 backdrop-blur-sm h-full text-center">
                  <CardContent className="p-6 flex flex-col items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                      <info.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-lg text-white [font-family:'Almarai',Helvetica]">{info.label}</h3>
                    <p className="text-white/80 text-sm [font-family:'Almarai',Helvetica]" dir={info.icon === Phone ? 'ltr' : direction}>{info.value}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}