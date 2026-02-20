import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { Eye, Target, Compass, Award } from "lucide-react";

export default function VisionMission() {
  const { language, direction } = useLanguage();

  const pageTitle = language === 'ar' ? 'الرؤية والرسالة' : 'Vision & Mission';
  const pageSubtitle = language === 'ar'
    ? 'نحو مستقبل أكاديمي متميز ومستدام'
    : 'Towards a distinguished and sustainable academic future';

  const strategicGoals = [
    {
      icon: Award,
      title: language === 'ar' ? 'التميز الأكاديمي' : 'Academic Excellence',
      desc: language === 'ar' ? 'تحقيق أعلى معايير الجودة في التعليم والبحث العلمي من خلال تطوير المناهج والبرامج الأكاديمية.' : 'Achieving the highest quality standards in education and scientific research through developing curricula and academic programs.',
    },
    {
      icon: Target,
      title: language === 'ar' ? 'تأهيل الخريجين' : 'Graduate Qualification',
      desc: language === 'ar' ? 'إعداد خريجين مؤهلين ومنافسين في سوق العمل المحلي والدولي من خلال برامج تدريبية متكاملة.' : 'Preparing qualified and competitive graduates in the local and international job market through comprehensive training programs.',
    },
    {
      icon: Compass,
      title: language === 'ar' ? 'البحث العلمي والابتكار' : 'Research & Innovation',
      desc: language === 'ar' ? 'تعزيز البحث العلمي والابتكار وتشجيع الإبداع لدى الطلاب وأعضاء هيئة التدريس.' : 'Enhancing scientific research and innovation and encouraging creativity among students and faculty members.',
    },
    {
      icon: Eye,
      title: language === 'ar' ? 'خدمة المجتمع' : 'Community Service',
      desc: language === 'ar' ? 'المساهمة الفعالة في خدمة المجتمع المحلي من خلال البرامج التنموية والأنشطة المجتمعية.' : 'Effective contribution to serving the local community through development programs and community activities.',
    },
    {
      icon: Target,
      title: language === 'ar' ? 'التحول الرقمي' : 'Digital Transformation',
      desc: language === 'ar' ? 'تبني التقنيات الرقمية الحديثة في العملية التعليمية والإدارية لتحقيق الكفاءة والفعالية.' : 'Adopting modern digital technologies in the educational and administrative process to achieve efficiency and effectiveness.',
    },
    {
      icon: Award,
      title: language === 'ar' ? 'الشراكات والتعاون' : 'Partnerships & Cooperation',
      desc: language === 'ar' ? 'بناء شراكات استراتيجية مع مؤسسات محلية ودولية لتبادل الخبرات وتعزيز القدرات.' : 'Building strategic partnerships with local and international institutions for knowledge exchange and capacity building.',
    },
  ];

  const coreValues = [
    {
      icon: Award,
      title: language === 'ar' ? 'الجودة' : 'Quality',
      desc: language === 'ar' ? 'الالتزام بأعلى معايير الجودة في جميع الأنشطة الأكاديمية والإدارية.' : 'Commitment to the highest quality standards in all academic and administrative activities.',
    },
    {
      icon: Eye,
      title: language === 'ar' ? 'الشفافية' : 'Transparency',
      desc: language === 'ar' ? 'اعتماد مبدأ الشفافية والوضوح في جميع القرارات والإجراءات.' : 'Adopting the principle of transparency and clarity in all decisions and procedures.',
    },
    {
      icon: Compass,
      title: language === 'ar' ? 'الابتكار' : 'Innovation',
      desc: language === 'ar' ? 'تشجيع الابتكار والتفكير الإبداعي في التعليم والبحث العلمي.' : 'Encouraging innovation and creative thinking in education and scientific research.',
    },
    {
      icon: Target,
      title: language === 'ar' ? 'المسؤولية' : 'Responsibility',
      desc: language === 'ar' ? 'تحمل المسؤولية تجاه المجتمع والبيئة والأجيال القادمة.' : 'Taking responsibility towards society, the environment, and future generations.',
    },
  ];

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={pageTitle} description={pageSubtitle} />
      <Navbar />

      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" alt="Vision Mission" src="/figmaAssets/rectangle-2.png" />
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
            { label: pageTitle },
          ]}
        />
      </div>

      <section className="py-20 bg-green-800 dark:bg-green-900 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12" dir={direction}>
            <AnimatedSection direction={direction === 'rtl' ? "right" : "left"}>
              <Card className="rounded-3xl border-0 bg-white/10 backdrop-blur-sm h-full dark:bg-black/20">
                <CardContent className="p-8 flex flex-col gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                    <Eye className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white [font-family:'Almarai',Helvetica]">
                    {language === 'ar' ? 'الرؤية' : 'Vision'}
                  </h3>
                  <p className="text-white/80 text-lg leading-relaxed [font-family:'Almarai',Helvetica]">
                    {language === 'ar'
                      ? 'أن تكون معاهد الوادي العليا مؤسسة تعليمية رائدة ومعترفاً بها محلياً وإقليمياً في مجالات التعليم والبحث العلمي وخدمة المجتمع، وأن تسهم في بناء مجتمع المعرفة من خلال تخريج كوادر بشرية مؤهلة ومنافسة عالمياً.'
                      : 'For Valley Higher Institutes to be a leading educational institution recognized locally and regionally in the fields of education, scientific research, and community service, and to contribute to building a knowledge society by graduating qualified and globally competitive human resources.'}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection direction={direction === 'rtl' ? "left" : "right"} delay={0.2}>
              <Card className="rounded-3xl border-0 bg-white/10 backdrop-blur-sm h-full dark:bg-black/20">
                <CardContent className="p-8 flex flex-col gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white [font-family:'Almarai',Helvetica]">
                    {language === 'ar' ? 'الرسالة' : 'Mission'}
                  </h3>
                  <p className="text-white/80 text-lg leading-relaxed [font-family:'Almarai',Helvetica]">
                    {language === 'ar'
                      ? 'تقديم تعليم عالي الجودة يجمع بين المعرفة النظرية والتطبيق العملي، وتعزيز البحث العلمي والابتكار، والمساهمة في خدمة المجتمع، من خلال بيئة أكاديمية محفزة وشراكات محلية ودولية فعالة، لإعداد خريجين مؤهلين يلبون احتياجات سوق العمل المتغيرة.'
                      : 'Providing high-quality education that combines theoretical knowledge with practical application, enhancing scientific research and innovation, and contributing to community service, through a stimulating academic environment and effective local and international partnerships, to prepare qualified graduates who meet the changing needs of the job market.'}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-16" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <Compass className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'الأهداف الاستراتيجية' : 'Strategic Goals'}
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-lg mt-4 max-w-[600px] mx-auto [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar'
                  ? 'ستة أهداف استراتيجية تقود مسيرة التطوير والتميز'
                  : 'Six strategic goals leading the journey of development and excellence'}
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" dir={direction}>
            {strategicGoals.map((goal, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full text-center group bg-white dark:bg-neutral-900">
                  <CardContent className="p-6 flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center group-hover:bg-green-100 dark:group-hover:bg-green-900/40 transition-colors">
                      <goal.icon className="w-8 h-8 text-green-700 dark:text-green-500" />
                    </div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{goal.title}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{goal.desc}</p>
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
                <Award className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'القيم الأساسية' : 'Core Values'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" dir={direction}>
            {coreValues.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full text-center group bg-white dark:bg-neutral-800">
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

      <Footer />
    </div>
  );
}