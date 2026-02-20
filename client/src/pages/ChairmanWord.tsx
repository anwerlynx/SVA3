import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Card, CardContent } from "@/components/ui/card";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { Quote, Award, Target, TrendingUp, GraduationCap, Users, BookOpen, Star } from "lucide-react";

export default function ChairmanWord() {
  const { language, direction } = useLanguage();

  const pageTitle = language === 'ar' ? 'كلمة رئيس مجلس الإدارة' : "Chairman's Word";
  const pageSubtitle = language === 'ar'
    ? 'رسالة من قيادة معاهد الوادي العليا'
    : 'A message from the leadership of Valley Higher Institutes';

  const chairmanName = language === 'ar' ? 'أ.د. محمد أحمد العزيز' : 'Prof. Mohamed Ahmed Al-Aziz';
  const chairmanRole = language === 'ar' ? 'رئيس مجلس الإدارة' : 'Chairman of the Board';

  const chairmanMessage = language === 'ar'
    ? 'بسم الله الرحمن الرحيم، يسعدني أن أرحب بكم في معاهد الوادي العليا، المؤسسة التعليمية التي تسعى دائماً لتقديم أفضل مستويات التعليم العالي في مصر. منذ تأسيس المعاهد ونحن نعمل بلا كلل لتحقيق رؤيتنا في بناء جيل من الخريجين المؤهلين والقادرين على المنافسة في سوق العمل المحلي والدولي.\n\nإن رسالتنا واضحة: نريد أن نكون منارة للتعليم العالي في صعيد مصر، وأن نقدم لأبنائنا الطلاب بيئة تعليمية متكاملة تجمع بين المعرفة النظرية والتطبيق العملي، وبين التقاليد الأكاديمية الراسخة والابتكار المعاصر.\n\nنحن نؤمن بأن الاستثمار في التعليم هو أعظم استثمار يمكن أن نقدمه لمجتمعنا، ولذلك نحرص على توفير أحدث المعامل والمختبرات، واستقطاب أفضل الكوادر الأكاديمية، وتطوير مناهجنا بشكل مستمر لمواكبة التطورات العالمية.\n\nأدعو جميع طلابنا للاجتهاد والتميز، وأؤكد لهم أننا سنكون دائماً إلى جانبهم لدعمهم في رحلتهم الأكاديمية والمهنية.'
    : 'It gives me great pleasure to welcome you to Valley Higher Institutes, an educational institution that constantly strives to provide the best levels of higher education in Egypt. Since the establishment of the institutes, we have been working tirelessly to achieve our vision of building a generation of qualified graduates who are capable of competing in the local and international job markets.\n\nOur mission is clear: we want to be a beacon of higher education in Upper Egypt, and to provide our students with an integrated educational environment that combines theoretical knowledge with practical application, and established academic traditions with contemporary innovation.\n\nWe believe that investing in education is the greatest investment we can offer to our community, which is why we are keen to provide the latest laboratories and facilities, attract the best academic talent, and continuously develop our curricula to keep pace with global developments.\n\nI invite all our students to strive for excellence, and I assure them that we will always be by their side to support them in their academic and professional journey.';

  const leadershipStats = language === 'ar' ? [
    { icon: GraduationCap, value: 15000, suffix: "+", label: "خريج" },
    { icon: Users, value: 200, suffix: "+", label: "عضو هيئة تدريس" },
    { icon: BookOpen, value: 8, suffix: "", label: "أقسام أكاديمية" },
    { icon: Star, value: 25, suffix: "+", label: "سنة تميز" },
  ] : [
    { icon: GraduationCap, value: 15000, suffix: "+", label: "Graduates" },
    { icon: Users, value: 200, suffix: "+", label: "Faculty Members" },
    { icon: BookOpen, value: 8, suffix: "", label: "Departments" },
    { icon: Star, value: 25, suffix: "+", label: "Years of Excellence" },
  ];

  const coreValues = language === 'ar' ? [
    { icon: Award, title: "التميز", desc: "السعي الدائم لتحقيق أعلى معايير الجودة في التعليم والبحث العلمي وخدمة المجتمع." },
    { icon: Target, title: "النزاهة", desc: "الالتزام بأعلى معايير الشفافية والمساءلة والأمانة في جميع التعاملات." },
    { icon: TrendingUp, title: "الابتكار", desc: "تبني الأساليب والتقنيات الحديثة في التعليم وتشجيع التفكير الإبداعي والريادي." },
  ] : [
    { icon: Award, title: "Excellence", desc: "Constant pursuit of the highest standards of quality in education, research, and community service." },
    { icon: Target, title: "Integrity", desc: "Commitment to the highest standards of transparency, accountability, and honesty in all dealings." },
    { icon: TrendingUp, title: "Innovation", desc: "Adopting modern methods and technologies in education and encouraging creative and entrepreneurial thinking." },
  ];

  const achievements = [
    {
      title: language === 'ar' ? 'الاعتماد الأكاديمي' : 'Academic Accreditation',
      desc: language === 'ar' ? 'حصول جميع البرامج على اعتماد الهيئة القومية لضمان جودة التعليم والاعتماد.' : 'All programs have obtained accreditation from the National Authority for Quality Assurance and Accreditation.',
    },
    {
      title: language === 'ar' ? 'التوسع والنمو' : 'Expansion & Growth',
      desc: language === 'ar' ? 'افتتاح أقسام وتخصصات جديدة تلبي احتياجات سوق العمل المتغيرة.' : 'Opening new departments and specializations that meet the changing needs of the job market.',
    },
    {
      title: language === 'ar' ? 'الشراكات الدولية' : 'International Partnerships',
      desc: language === 'ar' ? 'إقامة شراكات مع جامعات ومؤسسات دولية لتبادل الخبرات والمعرفة.' : 'Establishing partnerships with international universities and institutions for knowledge and expertise exchange.',
    },
    {
      title: language === 'ar' ? 'تطوير البنية التحتية' : 'Infrastructure Development',
      desc: language === 'ar' ? 'تحديث المعامل والمختبرات وقاعات المحاضرات بأحدث التقنيات.' : 'Upgrading laboratories, workshops, and lecture halls with the latest technologies.',
    },
  ];

  const visionPoints = [
    language === 'ar' ? 'تحقيق الريادة في التعليم العالي على المستوى الإقليمي.' : 'Achieving leadership in higher education at the regional level.',
    language === 'ar' ? 'تخريج كوادر مؤهلة تساهم في التنمية المستدامة.' : 'Graduating qualified cadres that contribute to sustainable development.',
    language === 'ar' ? 'تعزيز البحث العلمي والابتكار في جميع المجالات.' : 'Enhancing scientific research and innovation in all fields.',
    language === 'ar' ? 'بناء شراكات استراتيجية مع القطاع الخاص والمؤسسات الدولية.' : 'Building strategic partnerships with the private sector and international institutions.',
    language === 'ar' ? 'تطوير منظومة تعليمية رقمية متكاملة.' : 'Developing an integrated digital educational system.',
  ];

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={pageTitle} description={pageSubtitle} />
      <Navbar />

      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" alt="Chairman" src="/figmaAssets/rectangle-2.png" />
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
        <Breadcrumb items={[
          { label: language === 'ar' ? 'الرئيسية' : 'Home', href: '/' },
          { label: language === 'ar' ? 'عن المعهد' : 'About', href: '/about' },
          { label: language === 'ar' ? 'كلمة رئيس مجلس الإدارة' : "Chairman's Word" },
        ]} />
      </div>

      <section className="py-20 md:py-28 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <Card className="rounded-3xl border-0 shadow-xl bg-white dark:bg-neutral-800 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-green-700 to-green-600 px-8 md:px-12 py-8">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="w-28 h-28 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-4 border-white/30 flex-shrink-0">
                      <span className="text-white text-5xl font-bold [font-family:'Almarai',Helvetica]">
                        {language === 'ar' ? 'م' : 'M'}
                      </span>
                    </div>
                    <div className="text-center md:text-start" dir={direction}>
                      <h3 className="font-bold text-2xl text-white [font-family:'Almarai',Helvetica]">{chairmanName}</h3>
                      <span className="text-white/80 text-lg [font-family:'Almarai',Helvetica]">{chairmanRole}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[900px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <Quote className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'كلمة الرئيس' : "Chairman's Message"}
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Card className="rounded-3xl border-0 shadow-lg bg-white dark:bg-neutral-900">
              <CardContent className="p-8 md:p-12" dir={direction}>
                <div className="relative">
                  <Quote className="w-12 h-12 text-green-100 dark:text-green-900/50 absolute -top-2 -left-2" />
                  {chairmanMessage.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-neutral-600 dark:text-neutral-300 text-lg leading-[2] [font-family:'Almarai',Helvetica] transition-colors duration-300 mb-6 last:mb-0 relative z-10">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-neutral-100 dark:border-neutral-800 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-700 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg [font-family:'Almarai',Helvetica]">
                      {language === 'ar' ? 'م' : 'M'}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-neutral-900 dark:text-white text-lg [font-family:'Almarai',Helvetica] transition-colors duration-300">{chairmanName}</p>
                    <span className="text-green-700 dark:text-green-500 text-sm [font-family:'Almarai',Helvetica]">{chairmanRole}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-green-800 dark:bg-green-900 relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8" dir={direction}>
            {leadershipStats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.15} direction="up">
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white [font-family:'Almarai',Helvetica]">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <span className="text-white/80 text-sm [font-family:'Almarai',Helvetica]">{stat.label}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-16" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <Star className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'القيم الجوهرية' : 'Core Values'}
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-lg mt-4 [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'القيم التي توجه مسيرتنا نحو التميز' : 'The values that guide our journey towards excellence'}
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" dir={direction}>
            {coreValues.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.15} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-xl transition-all duration-300 h-full text-center group bg-white dark:bg-neutral-900 hover:-translate-y-1">
                  <CardContent className="p-8 flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center group-hover:bg-green-100 dark:group-hover:bg-green-900/40 transition-colors group-hover:scale-110">
                      <value.icon className="w-8 h-8 text-green-700 dark:text-green-500" />
                    </div>
                    <h3 className="font-bold text-xl text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{value.title}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{value.desc}</p>
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
                <Target className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'رؤية المستقبل' : 'Vision for the Future'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="flex flex-col gap-4" dir={direction}>
            {visionPoints.map((point, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction={direction === 'rtl' ? "right" : "left"}>
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-neutral-800">
                  <CardContent className="p-5 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm [font-family:'Almarai',Helvetica]">{index + 1}</span>
                    </div>
                    <p className="text-neutral-700 dark:text-neutral-300 [font-family:'Almarai',Helvetica] transition-colors duration-300">{point}</p>
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
                {language === 'ar' ? 'أبرز الإنجازات' : 'Key Achievements'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" dir={direction}>
            {achievements.map((achievement, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full text-center group bg-white dark:bg-neutral-900 hover:-translate-y-1">
                  <CardContent className="p-6 flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center group-hover:bg-green-100 dark:group-hover:bg-green-900/40 transition-colors">
                      <Award className="w-8 h-8 text-green-700 dark:text-green-500" />
                    </div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{achievement.title}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{achievement.desc}</p>
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