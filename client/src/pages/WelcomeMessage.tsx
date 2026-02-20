import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { Heart, Star, GraduationCap } from "lucide-react";

export default function WelcomeMessage() {
  const { language, direction } = useLanguage();

  const pageTitle = language === 'ar' ? 'رسالة الترحيب' : 'Welcome Message';
  const pageSubtitle = language === 'ar'
    ? 'مرحباً بكم في معاهد الوادي العليا'
    : 'Welcome to Valley Higher Institutes';

  const coreValues = [
    {
      icon: Star,
      title: language === 'ar' ? 'التميز الأكاديمي' : 'Academic Excellence',
      desc: language === 'ar' ? 'نسعى لتقديم أعلى مستويات التعليم الأكاديمي وفقاً للمعايير الدولية.' : 'We strive to provide the highest levels of academic education according to international standards.',
    },
    {
      icon: Heart,
      title: language === 'ar' ? 'الاهتمام بالطالب' : 'Student Care',
      desc: language === 'ar' ? 'نضع الطالب في محور اهتمامنا ونوفر له كل سبل الدعم والرعاية.' : 'We place the student at the center of our attention and provide all means of support and care.',
    },
    {
      icon: GraduationCap,
      title: language === 'ar' ? 'التطوير المستمر' : 'Continuous Development',
      desc: language === 'ar' ? 'نطور مناهجنا وبرامجنا باستمرار لمواكبة التطورات العلمية والتكنولوجية.' : 'We continuously develop our curricula and programs to keep pace with scientific and technological developments.',
    },
    {
      icon: Star,
      title: language === 'ar' ? 'النزاهة والشفافية' : 'Integrity & Transparency',
      desc: language === 'ar' ? 'نلتزم بأعلى معايير النزاهة والشفافية في جميع تعاملاتنا.' : 'We adhere to the highest standards of integrity and transparency in all our dealings.',
    },
    {
      icon: Heart,
      title: language === 'ar' ? 'خدمة المجتمع' : 'Community Service',
      desc: language === 'ar' ? 'نساهم بفعالية في خدمة المجتمع المحلي من خلال البرامج والأنشطة المتنوعة.' : 'We actively contribute to serving the local community through diverse programs and activities.',
    },
    {
      icon: GraduationCap,
      title: language === 'ar' ? 'الابتكار والإبداع' : 'Innovation & Creativity',
      desc: language === 'ar' ? 'نشجع الابتكار والإبداع ونوفر البيئة المناسبة لتحقيقهما.' : 'We encourage innovation and creativity and provide the appropriate environment to achieve them.',
    },
  ];

  const whyChooseUs = [
    {
      title: language === 'ar' ? 'هيئة تدريس متميزة' : 'Distinguished Faculty',
      desc: language === 'ar' ? 'نخبة من أفضل الأساتذة والخبراء الأكاديميين في مختلف التخصصات.' : 'An elite group of the best professors and academic experts in various specializations.',
    },
    {
      title: language === 'ar' ? 'مرافق حديثة' : 'Modern Facilities',
      desc: language === 'ar' ? 'معامل ومختبرات مجهزة بأحدث التقنيات والأجهزة العلمية.' : 'Laboratories and workshops equipped with the latest technologies and scientific equipment.',
    },
    {
      title: language === 'ar' ? 'برامج معتمدة' : 'Accredited Programs',
      desc: language === 'ar' ? 'جميع البرامج معتمدة من الهيئة القومية لضمان جودة التعليم والاعتماد.' : 'All programs are accredited by the National Authority for Quality Assurance and Accreditation.',
    },
    {
      title: language === 'ar' ? 'تدريب عملي' : 'Practical Training',
      desc: language === 'ar' ? 'برامج تدريب عملي متكاملة بالتعاون مع كبرى الشركات والمؤسسات.' : 'Comprehensive practical training programs in cooperation with major companies and institutions.',
    },
    {
      title: language === 'ar' ? 'فرص وظيفية' : 'Career Opportunities',
      desc: language === 'ar' ? 'دعم الخريجين في الحصول على فرص عمل مميزة من خلال شراكاتنا المتعددة.' : 'Supporting graduates in obtaining outstanding job opportunities through our multiple partnerships.',
    },
    {
      title: language === 'ar' ? 'بيئة داعمة' : 'Supportive Environment',
      desc: language === 'ar' ? 'بيئة تعليمية محفزة تجمع بين الأكاديمية والأنشطة الطلابية المتنوعة.' : 'A stimulating educational environment that combines academics with diverse student activities.',
    },
  ];

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={pageTitle} description={pageSubtitle} />
      <Navbar />

      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" alt="Welcome" src="/figmaAssets/rectangle-2.png" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        </div>
        <div className="relative z-10 text-center px-4">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold text-white [font-family:'Almarai',Helvetica] mb-4" dir={direction}>
              {pageTitle}
            </h1>
            <p className="text-lg md:text-xl text-white/80 [font-family:'Almarai',Helvetica]" dir={direction}>
              {pageSubtitle}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 pt-6">
        <Breadcrumb
          items={[
            { label: language === 'ar' ? 'الرئيسية' : 'Home', href: '/' },
            { label: language === 'ar' ? 'كلمة ترحيب' : 'Welcome' },
          ]}
        />
      </div>

      <section className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[900px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <Heart className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'أهلاً وسهلاً بكم' : 'Welcome to Our Community'}
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Card className="rounded-3xl border-0 shadow-lg bg-white dark:bg-neutral-900">
              <CardContent className="p-8 md:p-12" dir={direction}>
                <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300 mb-6">
                  {language === 'ar'
                    ? 'يسعدنا أن نرحب بكم في معاهد الوادي العليا، إحدى أبرز المؤسسات التعليمية في صعيد مصر. نحن نؤمن بأن التعليم هو المفتاح لبناء مستقبل أفضل، ونسعى جاهدين لتوفير بيئة تعليمية متميزة تمكن طلابنا من تحقيق أحلامهم وطموحاتهم.'
                    : 'We are delighted to welcome you to Valley Higher Institutes, one of the most prominent educational institutions in Upper Egypt. We believe that education is the key to building a better future, and we strive to provide an outstanding educational environment that enables our students to achieve their dreams and aspirations.'}
                </p>
                <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">
                  {language === 'ar'
                    ? 'تضم معاهدنا نخبة من أفضل الأساتذة والخبراء الأكاديميين، ومرافق تعليمية حديثة، وبرامج أكاديمية معتمدة ومتطورة. نحن ملتزمون بتقديم تجربة تعليمية فريدة تجمع بين العلم والعمل، وبين النظرية والتطبيق.'
                    : 'Our institutes include an elite group of the best professors and academic experts, modern educational facilities, and accredited and advanced academic programs. We are committed to providing a unique educational experience that combines knowledge and practice, theory and application.'}
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-green-800 dark:bg-green-900 transition-colors duration-300">
        <div className="max-w-[900px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white [font-family:'Almarai',Helvetica]">
                {language === 'ar' ? 'نبذة عن المعاهد' : 'About the Institutes'}
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Card className="rounded-3xl border-0 bg-white/10 backdrop-blur-sm dark:bg-black/20">
              <CardContent className="p-8 md:p-12" dir={direction}>
                <p className="text-white/90 text-lg leading-relaxed [font-family:'Almarai',Helvetica] mb-6">
                  {language === 'ar'
                    ? 'تأسست معاهد الوادي العليا لتكون منارة للتعليم العالي في صعيد مصر، وتضم معهدين متميزين: معهد الهندسة ومعهد الإدارة والتكنولوجيا. تقدم المعاهد برامج أكاديمية متنوعة في تخصصات الهندسة والإدارة والمحاسبة ونظم المعلومات.'
                    : 'Valley Higher Institutes was established to be a beacon of higher education in Upper Egypt, comprising two distinguished institutes: the Institute of Engineering and the Institute of Management and Technology. The institutes offer diverse academic programs in engineering, management, accounting, and information systems specializations.'}
                </p>
                <p className="text-white/90 text-lg leading-relaxed [font-family:'Almarai',Helvetica]">
                  {language === 'ar'
                    ? 'تسعى المعاهد لتحقيق التميز في التعليم والبحث العلمي وخدمة المجتمع، من خلال توفير بيئة أكاديمية محفزة ومرافق حديثة وكوادر أكاديمية متميزة.'
                    : 'The institutes strive to achieve excellence in education, scientific research, and community service by providing a stimulating academic environment, modern facilities, and distinguished academic staff.'}
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-16" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <Star className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'قيمنا الأساسية' : 'Our Core Values'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" dir={direction}>
            {coreValues.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full text-center group bg-white dark:bg-neutral-900">
                  <CardContent className="p-6 flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center group-hover:bg-green-100 dark:group-hover:bg-green-900/40 transition-colors">
                      <value.icon className="w-8 h-8 text-green-700 dark:text-green-500" />
                    </div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{value.title}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{value.desc}</p>
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
                <GraduationCap className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'لماذا تختار معاهد الوادي العليا؟' : 'Why Choose Valley Higher Institutes?'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" dir={direction}>
            {whyChooseUs.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full group bg-white dark:bg-neutral-800">
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center group-hover:bg-green-100 dark:group-hover:bg-green-900/40 transition-colors">
                      <GraduationCap className="w-6 h-6 text-green-700 dark:text-green-500" />
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

      <Footer />
    </div>
  );
}