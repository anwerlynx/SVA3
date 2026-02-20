import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { Briefcase, Building2, Clock, FileText, Send, Users, Award, ArrowRight } from "lucide-react";

export default function AvailableJobs() {
  const { language, direction } = useLanguage();

  const pageTitle = language === 'ar' ? 'الوظائف المتاحة' : 'Available Jobs';
  const pageSubtitle = language === 'ar'
    ? 'انضم إلى فريقنا المتميز وساهم في بناء مستقبل التعليم'
    : 'Join our distinguished team and contribute to building the future of education';

  const jobOpenings = [
    {
      title: language === 'ar' ? 'أستاذ مساعد - هندسة الحاسب' : 'Assistant Professor - Computer Engineering',
      department: language === 'ar' ? 'قسم الهندسة' : 'Engineering Department',
      type: language === 'ar' ? 'دوام كامل' : 'Full-time',
      category: 'teaching',
      desc: language === 'ar'
        ? 'مطلوب أستاذ مساعد متخصص في هندسة الحاسب لتدريس المقررات الأكاديمية والإشراف على مشاريع التخرج والبحث العلمي.'
        : 'Seeking an assistant professor specializing in computer engineering to teach academic courses and supervise graduation projects and scientific research.',
    },
    {
      title: language === 'ar' ? 'مدير الموارد البشرية' : 'Human Resources Manager',
      department: language === 'ar' ? 'الإدارة العامة' : 'General Administration',
      type: language === 'ar' ? 'دوام كامل' : 'Full-time',
      category: 'administrative',
      desc: language === 'ar'
        ? 'مطلوب مدير موارد بشرية ذو خبرة لإدارة شؤون الموظفين والتوظيف وتطوير السياسات الإدارية.'
        : 'Seeking an experienced HR manager to manage employee affairs, recruitment, and development of administrative policies.',
    },
    {
      title: language === 'ar' ? 'فني مختبرات' : 'Laboratory Technician',
      department: language === 'ar' ? 'المعامل والمختبرات' : 'Labs & Laboratories',
      type: language === 'ar' ? 'دوام كامل' : 'Full-time',
      category: 'technical',
      desc: language === 'ar'
        ? 'مطلوب فني مختبرات لتجهيز وصيانة الأجهزة المعملية ومساعدة الطلاب في التجارب العملية.'
        : 'Seeking a laboratory technician to prepare and maintain lab equipment and assist students in practical experiments.',
    },
    {
      title: language === 'ar' ? 'باحث علمي - الذكاء الاصطناعي' : 'Research Scientist - Artificial Intelligence',
      department: language === 'ar' ? 'مركز البحث العلمي' : 'Scientific Research Center',
      type: language === 'ar' ? 'دوام جزئي' : 'Part-time',
      category: 'research',
      desc: language === 'ar'
        ? 'مطلوب باحث علمي متخصص في الذكاء الاصطناعي للمشاركة في المشاريع البحثية ونشر الأوراق العلمية.'
        : 'Seeking a research scientist specializing in AI to participate in research projects and publish scientific papers.',
    },
    {
      title: language === 'ar' ? 'محاضر - إدارة الأعمال' : 'Lecturer - Business Administration',
      department: language === 'ar' ? 'قسم إدارة الأعمال' : 'Business Administration Department',
      type: language === 'ar' ? 'دوام جزئي' : 'Part-time',
      category: 'teaching',
      desc: language === 'ar'
        ? 'مطلوب محاضر في إدارة الأعمال لتدريس مقررات التسويق والإدارة الاستراتيجية للطلاب.'
        : 'Seeking a lecturer in business administration to teach marketing and strategic management courses to students.',
    },
    {
      title: language === 'ar' ? 'مسؤول تقنية المعلومات' : 'IT Support Specialist',
      department: language === 'ar' ? 'إدارة تقنية المعلومات' : 'IT Department',
      type: language === 'ar' ? 'دوام كامل' : 'Full-time',
      category: 'technical',
      desc: language === 'ar'
        ? 'مطلوب مسؤول تقنية معلومات لإدارة الشبكات والأنظمة وتقديم الدعم التقني للموظفين والطلاب.'
        : 'Seeking an IT support specialist to manage networks and systems and provide technical support to staff and students.',
    },
  ];

  const jobCategories = [
    { id: 'teaching', label: language === 'ar' ? 'التدريس' : 'Teaching', icon: Users, count: jobOpenings.filter(j => j.category === 'teaching').length },
    { id: 'administrative', label: language === 'ar' ? 'إداري' : 'Administrative', icon: Building2, count: jobOpenings.filter(j => j.category === 'administrative').length },
    { id: 'technical', label: language === 'ar' ? 'تقني' : 'Technical', icon: Briefcase, count: jobOpenings.filter(j => j.category === 'technical').length },
    { id: 'research', label: language === 'ar' ? 'بحثي' : 'Research', icon: FileText, count: jobOpenings.filter(j => j.category === 'research').length },
  ];

  const applicationSteps = [
    {
      step: '1',
      title: language === 'ar' ? 'تصفح الوظائف المتاحة' : 'Browse Available Positions',
      desc: language === 'ar' ? 'اطلع على قائمة الوظائف المتاحة واختر الوظيفة المناسبة لمؤهلاتك وخبراتك.' : 'Review the list of available positions and select the one that matches your qualifications and experience.',
    },
    {
      step: '2',
      title: language === 'ar' ? 'تجهيز المستندات' : 'Prepare Documents',
      desc: language === 'ar' ? 'جهز سيرتك الذاتية المحدثة وشهاداتك الأكاديمية وخطابات التوصية ذات الصلة.' : 'Prepare your updated CV, academic certificates, and relevant recommendation letters.',
    },
    {
      step: '3',
      title: language === 'ar' ? 'تقديم الطلب' : 'Submit Application',
      desc: language === 'ar' ? 'أرسل طلبك عبر البريد الإلكتروني أو قم بتسليمه شخصياً لإدارة الموارد البشرية.' : 'Send your application via email or deliver it in person to the Human Resources department.',
    },
    {
      step: '4',
      title: language === 'ar' ? 'المقابلة والتقييم' : 'Interview & Evaluation',
      desc: language === 'ar' ? 'سيتم التواصل معك لتحديد موعد المقابلة الشخصية والاختبارات اللازمة للوظيفة.' : 'You will be contacted to schedule a personal interview and any necessary assessments for the position.',
    },
  ];

  const benefits = [
    {
      icon: Award,
      title: language === 'ar' ? 'رواتب تنافسية' : 'Competitive Salaries',
      desc: language === 'ar' ? 'نقدم حزم رواتب تنافسية تتناسب مع الخبرة والمؤهلات' : 'We offer competitive salary packages matching experience and qualifications',
    },
    {
      icon: Users,
      title: language === 'ar' ? 'بيئة عمل محفزة' : 'Stimulating Work Environment',
      desc: language === 'ar' ? 'بيئة أكاديمية محفزة تشجع على الإبداع والتطور المهني' : 'A stimulating academic environment that encourages creativity and professional growth',
    },
    {
      icon: FileText,
      title: language === 'ar' ? 'تأمين صحي شامل' : 'Comprehensive Health Insurance',
      desc: language === 'ar' ? 'تأمين صحي شامل للموظف وعائلته في أفضل المستشفيات' : 'Comprehensive health insurance for the employee and family at top hospitals',
    },
    {
      icon: Briefcase,
      title: language === 'ar' ? 'فرص التطوير المهني' : 'Professional Development',
      desc: language === 'ar' ? 'برامج تدريبية ومؤتمرات علمية لتطوير المهارات والخبرات' : 'Training programs and scientific conferences for skill and experience development',
    },
    {
      icon: Clock,
      title: language === 'ar' ? 'إجازات مدفوعة' : 'Paid Vacations',
      desc: language === 'ar' ? 'إجازات سنوية مدفوعة وإجازات رسمية وفقاً لقانون العمل' : 'Paid annual and official holidays according to labor law',
    },
    {
      icon: Building2,
      title: language === 'ar' ? 'استقرار وظيفي' : 'Job Stability',
      desc: language === 'ar' ? 'عقود عمل مستقرة وفرص للترقي والتقدم الوظيفي' : 'Stable employment contracts with opportunities for promotion and career advancement',
    },
  ];

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={pageTitle} description={pageSubtitle} />
      <Navbar />

      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" alt="Available Jobs" src="/figmaAssets/rectangle-2.png" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        </div>
        <div className="relative z-10 text-center px-4">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold text-white [font-family:'Almarai',Helvetica] mb-4" dir={direction}>
              {pageTitle}
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-[600px] mx-auto [font-family:'Almarai',Helvetica]" dir={direction}>
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
                <Briefcase className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'فرص العمل لدينا' : 'Career Opportunities'}
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Card className="rounded-3xl border-0 shadow-lg bg-white dark:bg-neutral-900">
              <CardContent className="p-8" dir={direction}>
                <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">
                  {language === 'ar'
                    ? 'تسعى معاهد الوادي العليا دائماً لاستقطاب أفضل الكفاءات والخبرات للانضمام إلى فريقها المتميز. نوفر بيئة عمل أكاديمية محفزة تتيح للموظفين فرصاً حقيقية للتطور المهني والمساهمة في بناء مستقبل التعليم العالي في مصر. نؤمن بأن الاستثمار في الكوادر البشرية هو أساس نجاح مؤسستنا.'
                    : 'Valley Higher Institutes is always seeking to attract the best talents and expertise to join its distinguished team. We provide a stimulating academic work environment that offers employees genuine opportunities for professional development and contribution to building the future of higher education in Egypt. We believe that investing in human resources is the foundation of our institution\'s success.'}
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4" dir={direction}>
            {jobCategories.map((cat, index) => (
              <AnimatedSection key={cat.id} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all text-center bg-white dark:bg-neutral-800">
                  <CardContent className="p-5 flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center">
                      <cat.icon className="w-6 h-6 text-green-700 dark:text-green-500" />
                    </div>
                    <h3 className="font-bold text-sm text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{cat.label}</h3>
                    <span className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-500 px-3 py-1 rounded-full text-xs font-bold [font-family:'Almarai',Helvetica]">
                      {cat.count} {language === 'ar' ? 'وظيفة' : 'positions'}
                    </span>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-16" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <Building2 className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'الوظائف المتاحة حالياً' : 'Current Job Openings'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" dir={direction}>
            {jobOpenings.map((job, index) => (
              <AnimatedSection key={index} delay={index * 0.05} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-xl transition-all duration-300 h-full group bg-white dark:bg-neutral-900 hover:-translate-y-1">
                  <CardContent className="p-6 flex flex-col gap-4 h-full" dir={direction}>
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center group-hover:bg-green-100 dark:group-hover:bg-green-900/40 transition-colors">
                        <Briefcase className="w-6 h-6 text-green-700 dark:text-green-500" />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold [font-family:'Almarai',Helvetica] ${
                        job.type === (language === 'ar' ? 'دوام كامل' : 'Full-time')
                          ? 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-500'
                          : 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-500'
                      }`}>
                        {job.type}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1.5 flex-grow">
                      <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{job.title}</h3>
                      <p className="text-green-700 dark:text-green-500 text-sm font-medium [font-family:'Almarai',Helvetica]">{job.department}</p>
                      <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300 mt-1">{job.desc}</p>
                    </div>
                    <button className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-green-700 hover:bg-green-800 text-white rounded-xl font-bold text-sm [font-family:'Almarai',Helvetica] transition-colors">
                      <Send className="w-4 h-4" />
                      <span>{language === 'ar' ? 'تقدم للوظيفة' : 'Apply'}</span>
                    </button>
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
                <FileText className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'كيفية التقديم' : 'How to Apply'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="flex flex-col gap-6" dir={direction}>
            {applicationSteps.map((item, index) => (
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

      <section className="py-20 md:py-24 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-16" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <Award className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'مميزات العمل لدينا' : 'Benefits of Working With Us'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" dir={direction}>
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full text-center group bg-white dark:bg-neutral-900 hover:-translate-y-1">
                  <CardContent className="p-6 flex flex-col items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center group-hover:bg-green-100 dark:group-hover:bg-green-900/40 transition-colors">
                      <benefit.icon className="w-7 h-7 text-green-700 dark:text-green-500" />
                    </div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{benefit.title}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{benefit.desc}</p>
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
              <Send className="w-16 h-16 text-white/80" />
              <h2 className="text-3xl md:text-4xl font-bold text-white [font-family:'Almarai',Helvetica]">
                {language === 'ar' ? 'تواصل مع إدارة الموارد البشرية' : 'Contact Human Resources'}
              </h2>
              <p className="text-white/80 text-lg max-w-[500px] [font-family:'Almarai',Helvetica]">
                {language === 'ar'
                  ? 'لمزيد من المعلومات حول فرص العمل المتاحة أو للاستفسار عن طلبك، تواصل مع إدارة الموارد البشرية.'
                  : 'For more information about available opportunities or to inquire about your application, contact the Human Resources department.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center gap-2 px-8 py-4 bg-white text-green-800 rounded-2xl font-bold text-lg [font-family:'Almarai',Helvetica] hover:bg-gray-100 transition-colors shadow-lg">
                  <span>{language === 'ar' ? 'أرسل سيرتك الذاتية' : 'Send Your CV'}</span>
                  <ArrowRight className={`w-5 h-5 ${direction === 'rtl' ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}