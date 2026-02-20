import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { Trophy, Dumbbell, Clock, ArrowRight, Medal, Target, Users, Volleyball } from "lucide-react";

export default function SportsCommittee() {
  const { language, direction } = useLanguage();

  const pageTitle = language === 'ar' ? 'لجنة النشاط الرياضي' : 'Sports Committee';
  const pageSubtitle = language === 'ar'
    ? 'بناء الأجسام والعقول من خلال الرياضة والمنافسة الشريفة'
    : 'Building bodies and minds through sports and fair competition';

  const objectives = [
    language === 'ar' ? 'تشجيع الطلاب على ممارسة الرياضة والنشاط البدني' : 'Encourage students to practice sports and physical activity',
    language === 'ar' ? 'تنظيم البطولات والمسابقات الرياضية الداخلية والخارجية' : 'Organize internal and external sports tournaments and competitions',
    language === 'ar' ? 'اكتشاف المواهب الرياضية ورعايتها' : 'Discover and nurture sports talents',
    language === 'ar' ? 'تعزيز روح الفريق والتعاون بين الطلاب' : 'Promote team spirit and cooperation among students',
    language === 'ar' ? 'المشاركة في المسابقات على مستوى الجامعات والمعاهد' : 'Participate in university and institute-level competitions',
    language === 'ar' ? 'توفير التجهيزات والمرافق الرياضية المناسبة' : 'Provide appropriate sports equipment and facilities',
  ];

  const sports = [
    {
      title: language === 'ar' ? 'كرة القدم' : 'Football',
      desc: language === 'ar' ? 'فريق كرة القدم الذي يمثل المعهد في البطولات المحلية والإقليمية' : 'Football team representing the institute in local and regional tournaments',
      icon: Volleyball,
    },
    {
      title: language === 'ar' ? 'كرة السلة' : 'Basketball',
      desc: language === 'ar' ? 'فريق كرة السلة المتميز بتدريب احترافي ومشاركات فعالة' : 'Outstanding basketball team with professional training and active participation',
      icon: Dumbbell,
    },
    {
      title: language === 'ar' ? 'السباحة' : 'Swimming',
      desc: language === 'ar' ? 'برامج تدريب السباحة للمبتدئين والمتقدمين في المسبح الأولمبي' : 'Swimming training programs for beginners and advanced in the Olympic pool',
      icon: Medal,
    },
    {
      title: language === 'ar' ? 'ألعاب القوى' : 'Athletics',
      desc: language === 'ar' ? 'مسابقات الجري والقفز والرمي مع تدريب متخصص' : 'Running, jumping, and throwing competitions with specialized training',
      icon: Trophy,
    },
    {
      title: language === 'ar' ? 'كرة الطائرة' : 'Volleyball',
      desc: language === 'ar' ? 'فريق الكرة الطائرة بتدريبات منتظمة ومشاركات متميزة' : 'Volleyball team with regular training and outstanding participation',
      icon: Volleyball,
    },
    {
      title: language === 'ar' ? 'تنس الطاولة' : 'Table Tennis',
      desc: language === 'ar' ? 'بطولات تنس الطاولة الفردية والزوجية على مدار العام' : 'Individual and doubles table tennis tournaments throughout the year',
      icon: Target,
    },
  ];

  const achievements = [
    {
      title: language === 'ar' ? 'المركز الأول - بطولة المعاهد لكرة القدم' : '1st Place - Institutes Football Championship',
      year: '2025',
    },
    {
      title: language === 'ar' ? 'المركز الثاني - بطولة السباحة الإقليمية' : '2nd Place - Regional Swimming Championship',
      year: '2025',
    },
    {
      title: language === 'ar' ? 'المركز الأول - بطولة كرة السلة للمعاهد' : '1st Place - Institutes Basketball Championship',
      year: '2024',
    },
    {
      title: language === 'ar' ? 'المركز الثالث - بطولة ألعاب القوى الوطنية' : '3rd Place - National Athletics Championship',
      year: '2024',
    },
    {
      title: language === 'ar' ? 'جائزة أفضل روح رياضية' : 'Best Sportsmanship Award',
      year: '2024',
    },
  ];

  const trainingSchedule = [
    {
      sport: language === 'ar' ? 'كرة القدم' : 'Football',
      days: language === 'ar' ? 'السبت والثلاثاء' : 'Saturday & Tuesday',
      time: language === 'ar' ? '4:00 - 6:00 مساءً' : '4:00 - 6:00 PM',
    },
    {
      sport: language === 'ar' ? 'كرة السلة' : 'Basketball',
      days: language === 'ar' ? 'الأحد والأربعاء' : 'Sunday & Wednesday',
      time: language === 'ar' ? '3:00 - 5:00 مساءً' : '3:00 - 5:00 PM',
    },
    {
      sport: language === 'ar' ? 'السباحة' : 'Swimming',
      days: language === 'ar' ? 'الاثنين والخميس' : 'Monday & Thursday',
      time: language === 'ar' ? '2:00 - 4:00 مساءً' : '2:00 - 4:00 PM',
    },
    {
      sport: language === 'ar' ? 'ألعاب القوى' : 'Athletics',
      days: language === 'ar' ? 'السبت والاثنين والأربعاء' : 'Saturday, Monday & Wednesday',
      time: language === 'ar' ? '5:00 - 7:00 مساءً' : '5:00 - 7:00 PM',
    },
  ];

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={pageTitle} description={pageSubtitle} />
      <Navbar />

      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" alt="Sports Committee" src="/figmaAssets/rectangle-2.png" />
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

      <section className="py-20 md:py-24 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <Target className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'أهداف اللجنة' : 'Committee Objectives'}
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Card className="rounded-3xl border-0 shadow-lg bg-white dark:bg-neutral-900">
              <CardContent className="p-8" dir={direction}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {objectives.map((obj, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-xl hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
                      <Target className="w-5 h-5 text-green-700 dark:text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-700 dark:text-neutral-300 [font-family:'Almarai',Helvetica] text-sm">{obj}</span>
                    </div>
                  ))}
                </div>
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
                <Dumbbell className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'الرياضات المتاحة' : 'Available Sports'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" dir={direction}>
            {sports.map((sport, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-xl transition-all duration-300 h-full group bg-white dark:bg-neutral-800 hover:-translate-y-1">
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div className="w-14 h-14 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center group-hover:bg-green-100 dark:group-hover:bg-green-900/40 transition-colors">
                      <sport.icon className="w-7 h-7 text-green-700 dark:text-green-500" />
                    </div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{sport.title}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{sport.desc}</p>
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
                <Trophy className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'الإنجازات والبطولات' : 'Achievements & Trophies'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="flex flex-col gap-4" dir={direction}>
            {achievements.map((achievement, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction={direction === 'rtl' ? "right" : "left"}>
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-neutral-900">
                  <CardContent className="p-5 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-yellow-50 dark:bg-yellow-900/20 flex items-center justify-center flex-shrink-0">
                      <Trophy className="w-6 h-6 text-yellow-600 dark:text-yellow-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{achievement.title}</h3>
                    </div>
                    <span className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-500 px-3 py-1 rounded-full text-sm font-bold [font-family:'Almarai',Helvetica]">{achievement.year}</span>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <Clock className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'مواعيد التدريب' : 'Training Schedules'}
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Card className="rounded-3xl border-0 shadow-lg bg-white dark:bg-neutral-800">
              <CardContent className="p-8" dir={direction}>
                <div className="grid grid-cols-1 gap-4">
                  {trainingSchedule.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-neutral-700/50">
                      <div className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center flex-shrink-0">
                        <Dumbbell className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{item.sport}</h4>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-green-700 dark:text-green-500 [font-family:'Almarai',Helvetica]">{item.days}</p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 [font-family:'Almarai',Helvetica]">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-green-800 dark:bg-green-900 transition-colors duration-300">
        <div className="max-w-[800px] mx-auto px-4 md:px-8 text-center">
          <AnimatedSection>
            <div className="flex flex-col items-center gap-6">
              <Users className="w-16 h-16 text-white/80" />
              <h2 className="text-3xl md:text-4xl font-bold text-white [font-family:'Almarai',Helvetica]">
                {language === 'ar' ? 'انضم إلى فرقنا الرياضية' : 'Join Our Sports Teams'}
              </h2>
              <p className="text-white/80 text-lg max-w-[500px] [font-family:'Almarai',Helvetica]">
                {language === 'ar'
                  ? 'اكتشف موهبتك الرياضية وكن جزءاً من فريق يسعى للتميز والبطولات.'
                  : 'Discover your sports talent and be part of a team striving for excellence and championships.'}
              </p>
              <button className="flex items-center gap-2 px-8 py-4 bg-white text-green-800 rounded-2xl font-bold text-lg [font-family:'Almarai',Helvetica] hover:bg-gray-100 transition-colors shadow-lg">
                <span>{language === 'ar' ? 'سجل في الفريق' : 'Register for a Team'}</span>
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