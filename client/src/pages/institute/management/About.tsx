import { InstituteNavbar } from "@/components/institute/InstituteNavbar";
import { InstituteFooter } from "@/components/institute/InstituteFooter";
import { InstituteHero } from "@/components/institute/InstituteHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Target, Users, Star, Heart, Shield } from "lucide-react";
import { managementNavbar, managementFooter } from "@/lib/instituteConfig";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { Breadcrumb } from "@/components/Breadcrumb";

export default function ManagementAbout() {
  const { language, direction } = useLanguage();
  const pageTitle = language === "ar" ? "من نحن" : "About Us";

  const values = [
    { icon: Star, title: language === "ar" ? "التميز" : "Excellence", desc: language === "ar" ? "نسعى لأعلى مستويات الجودة الأكاديمية" : "We strive for the highest levels of academic quality" },
    { icon: Heart, title: language === "ar" ? "الانتماء" : "Belonging", desc: language === "ar" ? "نعزز روح الانتماء لمجتمعنا الأكاديمي" : "We foster a sense of belonging to our academic community" },
    { icon: Users, title: language === "ar" ? "العمل الجماعي" : "Teamwork", desc: language === "ar" ? "نؤمن بقوة التعاون والعمل المشترك" : "We believe in the power of collaboration and teamwork" },
    { icon: Shield, title: language === "ar" ? "النزاهة" : "Integrity", desc: language === "ar" ? "نلتزم بأعلى معايير الأمانة والشفافية" : "We uphold the highest standards of honesty and transparency" },
  ];

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={language === "ar" ? "من نحن - المعهد العالي للإدارة" : "About Us - Higher Institute of Management"} description={language === "ar" ? "تعرف على المعهد العالي للإدارة، رؤيته ورسالته وكلمة العميد" : "Learn about the Higher Institute of Management, its vision, mission, and dean's message"} />
      <InstituteNavbar {...managementNavbar} />
      <InstituteHero title={language === "ar" ? "من نحن" : "About Us"} subtitle={language === "ar" ? "تعرف على المعهد العالي للإدارة والمالية ونظم المعلومات" : "Learn about the Higher Institute of Management, Finance, and Information Systems"} image="/figmaAssets/rectangle-16.png" overlayColor="from-green-900/60 to-green-900/80" />

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
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" dir={direction}>
            <AnimatedSection direction="right">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3"><div className="w-12 h-1 bg-green-700 dark:bg-green-500 rounded-full transition-colors duration-300" /><span className="text-green-700 dark:text-green-400 font-bold text-sm [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "تعرف علينا" : "About Us"}</span></div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "المعهد العالي للإدارة والمالية ونظم المعلومات" : "Higher Institute of Management, Finance, and Information Systems"}</h2>
                <p className="text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "تأسس المعهد ليكون صرحاً تعليمياً متميزاً في مجالات الإدارة والأعمال والعلوم المالية. يضم المعهد نخبة من أعضاء هيئة التدريس المتميزين ويوفر بيئة تعليمية حديثة." : "The institute was established to be a distinguished educational edifice in the fields of management, business, and financial sciences. It houses an elite group of distinguished faculty members and provides a modern learning environment."}</p>
                <p className="text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "نهدف إلى إعداد كوادر بشرية مؤهلة قادرة على المنافسة في سوق العمل المحلي والدولي من خلال برامج أكاديمية تجمع بين المعرفة النظرية والتطبيق العملي." : "We aim to prepare qualified human resources capable of competing in local and international job markets through academic programs that combine theoretical knowledge with practical application."}</p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left" delay={0.2}>
              <img className="w-full h-[350px] object-cover rounded-3xl shadow-2xl" alt="Campus" src="/figmaAssets/rectangle-10.png" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-800 dark:bg-green-900 transition-colors duration-300">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" dir={direction}>
            <AnimatedSection direction="right">
              <Card className="rounded-3xl border-0 bg-white/10 backdrop-blur-sm h-full"><CardContent className="p-8 flex flex-col gap-4">
                <Eye className="w-8 h-8 text-white" />
                <h3 className="text-2xl font-bold text-white [font-family:'Almarai',Helvetica]">{language === "ar" ? "الرؤية" : "Vision"}</h3>
                <p className="text-white/80 text-lg leading-relaxed [font-family:'Almarai',Helvetica]">{language === "ar" ? "أن يكون المعهد مؤسسة تعليمية رائدة في مجالات الإدارة والمالية ونظم المعلومات محلياً وإقليمياً." : "To be a leading educational institution in the fields of management, finance, and information systems locally and regionally."}</p>
              </CardContent></Card>
            </AnimatedSection>
            <AnimatedSection direction="left" delay={0.2}>
              <Card className="rounded-3xl border-0 bg-white/10 backdrop-blur-sm h-full"><CardContent className="p-8 flex flex-col gap-4">
                <Target className="w-8 h-8 text-white" />
                <h3 className="text-2xl font-bold text-white [font-family:'Almarai',Helvetica]">{language === "ar" ? "الرسالة" : "Mission"}</h3>
                <p className="text-white/80 text-lg leading-relaxed [font-family:'Almarai',Helvetica]">{language === "ar" ? "تقديم تعليم عالي الجودة في علوم الإدارة والأعمال من خلال بيئة أكاديمية محفزة وبرامج تواكب متطلبات سوق العمل." : "Providing high-quality education in management and business sciences through a stimulating academic environment and programs that meet job market requirements."}</p>
              </CardContent></Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[900px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}><h2 className="text-3xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "كلمة العميد" : "Dean's Message"}</h2></div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Card className="rounded-3xl border-0 shadow-lg bg-white dark:bg-neutral-800 dark:border-neutral-700 transition-colors duration-300"><CardContent className="p-8 md:p-12" dir={direction}>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center flex-shrink-0 mx-auto md:mx-0 transition-colors duration-300"><Users className="w-10 h-10 text-green-700 dark:text-green-400 transition-colors duration-300" /></div>
                <div className="flex flex-col gap-4">
                  <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "\"نسعى في المعهد العالي للإدارة والمالية ونظم المعلومات لتقديم تعليم متميز يجمع بين الأصالة والمعاصرة، ونعمل على تخريج كوادر قادرة على قيادة المؤسسات والمساهمة في التنمية الاقتصادية.\"" : "\"At the Higher Institute of Management, Finance, and Information Systems, we strive to provide distinguished education that combines tradition and modernity, and we work to graduate professionals capable of leading institutions and contributing to economic development.\""}</p>
                  <div><h4 className="font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "أ.د. عميد المعهد" : "Prof. Dean of the Institute"}</h4><span className="text-green-700 dark:text-green-400 text-sm [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "المعهد العالي للإدارة والمالية" : "Higher Institute of Management and Finance"}</span></div>
                </div>
              </div>
            </CardContent></Card>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <AnimatedSection><div className="text-center mb-12" dir={direction}><h2 className="text-3xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "قيمنا" : "Our Values"}</h2></div></AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6" dir={direction}>
            {values.map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm text-center group hover:shadow-lg transition-all bg-white dark:bg-neutral-900 dark:border-neutral-800"><CardContent className="p-6 flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center group-hover:bg-green-100 dark:group-hover:bg-green-900/40 transition-colors duration-300"><v.icon className="w-7 h-7 text-green-700 dark:text-green-500 transition-colors duration-300" /></div>
                  <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{v.title}</h3>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm [font-family:'Almarai',Helvetica] transition-colors duration-300">{v.desc}</p>
                </CardContent></Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <InstituteFooter {...managementFooter} />
    </div>
  );
}
