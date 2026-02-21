import { InstituteNavbar } from "@/components/institute/InstituteNavbar";
import { InstituteFooter } from "@/components/institute/InstituteFooter";
import { engineeringNavbar, engineeringFooter } from "@/lib/instituteConfig";
import { InstituteHero } from "@/components/institute/InstituteHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Target, Users, Star, Heart, Shield, Lightbulb } from "lucide-react";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { Breadcrumb } from "@/components/Breadcrumb";

export default function EngineeringAbout() {
  const { language, direction } = useLanguage();
  const pageTitle = language === "ar" ? "من نحن" : "About Us";

  const values = [
    { icon: Star, title: language === "ar" ? "التميز الهندسي" : "Engineering Excellence", desc: language === "ar" ? "نسعى لأعلى مستويات الجودة في التعليم الهندسي" : "We strive for the highest quality standards in engineering education" },
    { icon: Lightbulb, title: language === "ar" ? "الابتكار" : "Innovation", desc: language === "ar" ? "نشجع الإبداع والابتكار في الحلول الهندسية" : "We encourage creativity and innovation in engineering solutions" },
    { icon: Heart, title: language === "ar" ? "المسؤولية" : "Responsibility", desc: language === "ar" ? "نؤمن بالمسؤولية المهنية والأخلاقية" : "We believe in professional and ethical responsibility" },
    { icon: Shield, title: language === "ar" ? "الأمان" : "Safety", desc: language === "ar" ? "نلتزم بمعايير السلامة والأمان الهندسي" : "We adhere to engineering safety and security standards" },
  ];

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={language === "ar" ? "من نحن - المعهد العالي للهندسة" : "About Us - Higher Institute of Engineering"} description={language === "ar" ? "تعرف على المعهد العالي للهندسة، رؤيته ورسالته وكلمة العميد" : "Learn about the Higher Institute of Engineering, its vision, mission, and dean's message"} />
      <InstituteNavbar {...engineeringNavbar} />
      <InstituteHero title={language === "ar" ? "من نحن" : "About Us"} subtitle={language === "ar" ? "تعرف على المعهد العالي للهندسة والتكنولوجيا" : "Learn about the Higher Institute of Engineering and Technology"} image="/figmaAssets/rectangle-17.png" overlayColor="from-blue-900/60 to-blue-900/80" />

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 pt-6">
        <Breadcrumb
          items={[
            { label: language === 'ar' ? 'الرئيسية' : 'Home', href: '/' },
            { label: language === 'ar' ? 'معهد الهندسة' : 'Engineering Institute', href: '/institute/engineering' },
            { label: pageTitle },
          ]}
        />
      </div>

      <section className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" dir={direction}>
            <AnimatedSection direction="right">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3"><div className="w-12 h-1 bg-blue-700 dark:bg-blue-500 rounded-full transition-colors duration-300" /><span className="text-blue-700 dark:text-blue-400 font-bold text-sm [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "تعرف علينا" : "About Us"}</span></div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "المعهد العالي للهندسة والتكنولوجيا" : "Higher Institute of Engineering and Technology"}</h2>
                <p className="text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "تأسس المعهد ليكون صرحاً هندسياً رائداً يقدم برامج أكاديمية متميزة في مختلف التخصصات الهندسية. يضم المعهد معامل حديثة ومجهزة بأحدث التقنيات." : "The institute was established to be a leading engineering edifice offering distinguished academic programs in various engineering specializations. The institute houses modern labs equipped with the latest technologies."}</p>
                <p className="text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "نهدف إلى تخريج مهندسين مؤهلين قادرين على المنافسة محلياً ودولياً من خلال برامج تجمع بين الأساس النظري والتطبيق العملي والبحث العلمي." : "We aim to graduate qualified engineers capable of competing locally and internationally through programs that combine theoretical foundations, practical application, and scientific research."}</p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left" delay={0.2}>
              <img className="w-full h-[350px] object-cover rounded-3xl shadow-2xl" alt="Engineering Campus" src="/figmaAssets/rectangle-17.png" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-800 dark:bg-blue-900 transition-colors duration-300">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" dir={direction}>
            <AnimatedSection direction="right">
              <Card className="rounded-3xl border-0 bg-white/10 backdrop-blur-sm h-full"><CardContent className="p-8 flex flex-col gap-4">
                <Eye className="w-8 h-8 text-white" />
                <h3 className="text-2xl font-bold text-white [font-family:'Almarai',Helvetica]">{language === "ar" ? "الرؤية" : "Vision"}</h3>
                <p className="text-white/80 text-lg leading-relaxed [font-family:'Almarai',Helvetica]">{language === "ar" ? "أن يكون المعهد مؤسسة هندسية رائدة في التعليم والبحث العلمي وخدمة المجتمع على المستوى المحلي والإقليمي." : "To be a leading engineering institution in education, research, and community service at the local and regional levels."}</p>
              </CardContent></Card>
            </AnimatedSection>
            <AnimatedSection direction="left" delay={0.2}>
              <Card className="rounded-3xl border-0 bg-white/10 backdrop-blur-sm h-full"><CardContent className="p-8 flex flex-col gap-4">
                <Target className="w-8 h-8 text-white" />
                <h3 className="text-2xl font-bold text-white [font-family:'Almarai',Helvetica]">{language === "ar" ? "الرسالة" : "Mission"}</h3>
                <p className="text-white/80 text-lg leading-relaxed [font-family:'Almarai',Helvetica]">{language === "ar" ? "إعداد مهندسين أكفاء قادرين على المنافسة من خلال بيئة تعليمية متميزة ومعامل حديثة وبرامج تواكب التطور التكنولوجي." : "Preparing competent engineers capable of competing through a distinguished educational environment, modern labs, and programs that keep pace with technological development."}</p>
              </CardContent></Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[900px] mx-auto px-4 md:px-8">
          <AnimatedSection><div className="text-center mb-12" dir={direction}><h2 className="text-3xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "كلمة العميد" : "Dean's Message"}</h2></div></AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Card className="rounded-3xl border-0 shadow-lg bg-white dark:bg-neutral-800 dark:border-neutral-700 transition-colors duration-300"><CardContent className="p-8 md:p-12" dir={direction}>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center flex-shrink-0 mx-auto md:mx-0 transition-colors duration-300"><Users className="w-10 h-10 text-blue-700 dark:text-blue-400 transition-colors duration-300" /></div>
                <div className="flex flex-col gap-4">
                  <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "\"نسعى في المعهد العالي للهندسة والتكنولوجيا لتقديم تعليم هندسي متميز يجمع بين المعرفة النظرية والتطبيق العملي، ونعمل على تخريج مهندسين قادرين على الابتكار وقيادة المشاريع الهندسية الكبرى.\"" : "\"At the Higher Institute of Engineering and Technology, we strive to provide distinguished engineering education that combines theoretical knowledge with practical application, and we work to graduate engineers capable of innovation and leading major engineering projects.\""}</p>
                  <div><h4 className="font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "أ.د. عميد المعهد" : "Prof. Dean of the Institute"}</h4><span className="text-blue-700 dark:text-blue-400 text-sm [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "المعهد العالي للهندسة والتكنولوجيا" : "Higher Institute of Engineering and Technology"}</span></div>
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
                  <div className="w-14 h-14 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 transition-colors duration-300"><v.icon className="w-7 h-7 text-blue-700 dark:text-blue-500 transition-colors duration-300" /></div>
                  <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{v.title}</h3>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm [font-family:'Almarai',Helvetica] transition-colors duration-300">{v.desc}</p>
                </CardContent></Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <InstituteFooter {...engineeringFooter} />
    </div>
  );
}
