import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Eye, Target, Heart, Star, Users, Shield, GraduationCap, BookOpen, Award, Building2 } from "lucide-react";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";

const values = [
  { icon: Star, titleKey: "val_excellence", descKey: "val_excellence_d" },
  { icon: Heart, titleKey: "val_belonging", descKey: "val_belonging_d" },
  { icon: Users, titleKey: "val_teamwork", descKey: "val_teamwork_d" },
  { icon: Shield, titleKey: "val_integrity", descKey: "val_integrity_d" },
];

export default function About() {
  const { t, direction, language } = useLanguage();

  const stats = [
    { icon: GraduationCap, value: 15000, label: language === 'ar' ? 'خريج' : 'Graduates', suffix: '+' },
    { icon: BookOpen, value: 8, label: language === 'ar' ? 'أقسام أكاديمية' : 'Departments', suffix: '' },
    { icon: Award, value: 25, label: language === 'ar' ? 'عاماً من التميز' : 'Years of Excellence', suffix: '+' },
    { icon: Building2, value: 2, label: language === 'ar' ? 'معهد متخصص' : 'Specialized Institutes', suffix: '' },
  ];

  const timeline = [
    { year: '2000', titleAr: 'تأسيس المعاهد', titleEn: 'Institutes Founded', descAr: 'تأسست معاهد الوادي العليا كصرح تعليمي متميز في مدينة العبور', descEn: 'Valley Higher Institutes was established as a distinguished educational institution in Obour City' },
    { year: '2005', titleAr: 'افتتاح معهد الهندسة', titleEn: 'Engineering Institute Opens', descAr: 'تم افتتاح المعهد العالي للهندسة والتكنولوجيا بأربعة أقسام متخصصة', descEn: 'The Higher Institute of Engineering and Technology opened with four specialized departments' },
    { year: '2010', titleAr: 'الاعتماد الأكاديمي', titleEn: 'Academic Accreditation', descAr: 'حصلت المعاهد على الاعتماد من الهيئة القومية لضمان جودة التعليم', descEn: 'The institutes received accreditation from NAQAAE' },
    { year: '2015', titleAr: 'توسعة المرافق', titleEn: 'Facilities Expansion', descAr: 'توسعة شاملة للمعامل والمكتبات والمرافق الرياضية', descEn: 'Comprehensive expansion of laboratories, libraries, and sports facilities' },
    { year: '2020', titleAr: 'التحول الرقمي', titleEn: 'Digital Transformation', descAr: 'إطلاق منصات التعلم الإلكتروني والمكتبة الرقمية', descEn: 'Launch of e-learning platforms and digital library' },
    { year: '2025', titleAr: 'رؤية المستقبل', titleEn: 'Future Vision', descAr: 'مواصلة التطوير والتحديث لمواكبة أحدث المعايير العالمية', descEn: 'Continuing development to meet the latest global standards' },
  ];

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={t("about_title")} description={t("about_subtitle")} />
      <Navbar />

      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" alt="About" src="/figmaAssets/rectangle-2.png" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        </div>
        <div className="relative z-10 text-center px-4">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold text-white [font-family:'Almarai',Helvetica] mb-4" dir={direction}>
              {t("about_title")}
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-[600px] mx-auto [font-family:'Almarai',Helvetica]" dir={direction}>
              {t("about_subtitle")}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 pt-6">
        <Breadcrumb
          items={[
            { label: language === 'ar' ? 'الرئيسية' : 'Home', href: '/' },
            { label: t("about_title") },
          ]}
        />
      </div>

      <section className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" dir={direction}>
            <AnimatedSection direction={direction === 'rtl' ? "right" : "left"}>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-1 bg-green-700 rounded-full" />
                  <span className="text-green-700 font-bold text-sm [font-family:'Almarai',Helvetica]">{t("about_title")}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                  {t("about_intro_title")}
                </h2>
                <p className="text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">
                  {t("about_intro_desc1")}
                </p>
                <p className="text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">
                  {t("about_intro_desc2")}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction={direction === 'rtl' ? "left" : "right"} delay={0.2}>
              <img className="w-full h-[400px] object-cover rounded-3xl shadow-2xl" alt="Campus" src="/figmaAssets/rectangle-10.png" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-800 dark:bg-green-900 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12" dir={direction}>
            <AnimatedSection direction={direction === 'rtl' ? "right" : "left"}>
              <Card className="rounded-3xl border-0 bg-white/10 backdrop-blur-sm h-full dark:bg-black/20">
                <CardContent className="p-8 flex flex-col gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                    <Eye className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white [font-family:'Almarai',Helvetica]">{t("vision_title")}</h3>
                  <p className="text-white/80 text-lg leading-relaxed [font-family:'Almarai',Helvetica]">
                    {t("vision_desc")}
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
                  <h3 className="text-2xl font-bold text-white [font-family:'Almarai',Helvetica]">{t("mission_title")}</h3>
                  <p className="text-white/80 text-lg leading-relaxed [font-family:'Almarai',Helvetica]">
                    {t("mission_desc")}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className={`text-center mb-16`} dir={direction}>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {t("chairman_word")}
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Card className="rounded-3xl border-0 shadow-lg max-w-[900px] mx-auto bg-white dark:bg-neutral-800 dark:border-neutral-700">
              <CardContent className="p-8 md:p-12" dir={direction}>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-24 h-24 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
                    <Users className="w-12 h-12 text-green-700 dark:text-green-500" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">
                      "{t("chairman_message")}"
                    </p>
                    <div>
                      <h4 className="font-bold text-neutral-900 dark:text-white text-lg [font-family:'Almarai',Helvetica] transition-colors duration-300">{t("chairman_name")}</h4>
                      <span className="text-green-700 dark:text-green-500 text-sm [font-family:'Almarai',Helvetica]">{t("chairman_role")}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6" dir={direction}>
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <div className="text-center p-6">
                  <div className="w-14 h-14 rounded-2xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-7 h-7 text-green-700 dark:text-green-500" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                    <AnimatedCounter end={stat.value} />{stat.suffix}
                  </div>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm mt-2 [font-family:'Almarai',Helvetica]">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[900px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-16" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <Award className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'مسيرتنا عبر السنين' : 'Our Journey Through the Years'}
              </h2>
            </div>
          </AnimatedSection>

          <div className="relative" dir={direction}>
            <div className={`absolute top-0 bottom-0 ${direction === 'rtl' ? 'right-6' : 'left-6'} w-0.5 bg-green-200 dark:bg-green-900/40`} />

            {timeline.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.08} direction={direction === 'rtl' ? 'right' : 'left'}>
                <div className="relative flex items-start gap-5 mb-8">
                  <div className="relative z-10 w-12 h-12 rounded-full bg-green-700 flex items-center justify-center shrink-0 border-4 border-gray-50 dark:border-neutral-900">
                    <span className="text-white text-xs font-bold [font-family:'Almarai',Helvetica]">{item.year}</span>
                  </div>
                  <Card className="flex-1 rounded-2xl border-0 shadow-sm hover:shadow-md transition-all bg-white dark:bg-neutral-800">
                    <CardContent className="p-5">
                      <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] mb-2">
                        {language === 'ar' ? item.titleAr : item.titleEn}
                      </h3>
                      <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica]">
                        {language === 'ar' ? item.descAr : item.descEn}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-16" dir={direction}>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{t("values_title")}</h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-lg mt-4 [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {t("values_subtitle")}
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" dir={direction}>
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full text-center group bg-white dark:bg-neutral-900 dark:border-neutral-800">
                  <CardContent className="p-6 flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center group-hover:bg-green-100 dark:group-hover:bg-green-900/40 transition-colors">
                      <value.icon className="w-8 h-8 text-green-700 dark:text-green-500" />
                    </div>
                    <h3 className="font-bold text-xl text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{t(value.titleKey as any)}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{t(value.descKey as any)}</p>
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
