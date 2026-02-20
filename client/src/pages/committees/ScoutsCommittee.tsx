import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { Compass, Mountain, Users, Wrench, ArrowRight, Target, Map, TreePine } from "lucide-react";

export default function ScoutsCommittee() {
  const { language, direction } = useLanguage();

  const pageTitle = language === 'ar' ? 'لجنة الجوالة والخدمات العامة' : 'Scouts & Public Services Committee';
  const pageSubtitle = language === 'ar'
    ? 'بناء الشخصية القيادية من خلال الكشافة وخدمة المجتمع'
    : 'Building leadership character through scouting and community service';

  const objectives = [
    language === 'ar' ? 'بناء شخصية الطالب القيادية وتعزيز الانتماء الوطني' : 'Build student leadership character and strengthen national belonging',
    language === 'ar' ? 'تنمية مهارات العمل الجماعي والاعتماد على النفس' : 'Develop teamwork and self-reliance skills',
    language === 'ar' ? 'تنظيم المعسكرات والرحلات الكشفية' : 'Organize scout camps and trips',
    language === 'ar' ? 'تقديم خدمات عامة للمعهد والمجتمع المحيط' : 'Provide public services to the institute and surrounding community',
    language === 'ar' ? 'تدريب الطلاب على الإسعافات الأولية والطوارئ' : 'Train students in first aid and emergency response',
    language === 'ar' ? 'المشاركة في المناسبات الوطنية والقومية' : 'Participate in national events and celebrations',
  ];

  const scoutingActivities = [
    {
      title: language === 'ar' ? 'التدريب الكشفي' : 'Scout Training',
      desc: language === 'ar' ? 'تدريبات أسبوعية على المهارات الكشفية والعقد والإشارات والتخييم' : 'Weekly training on scouting skills, knots, signals, and camping',
      icon: Compass,
    },
    {
      title: language === 'ar' ? 'الرحلات الاستكشافية' : 'Exploration Trips',
      desc: language === 'ar' ? 'رحلات استكشافية للمناطق الطبيعية والمحميات والآثار التاريخية' : 'Exploration trips to natural areas, reserves, and historical sites',
      icon: Mountain,
    },
    {
      title: language === 'ar' ? 'برامج القيادة' : 'Leadership Programs',
      desc: language === 'ar' ? 'برامج تدريبية لإعداد قادة المستقبل وتطوير المهارات القيادية' : 'Training programs to prepare future leaders and develop leadership skills',
      icon: Users,
    },
    {
      title: language === 'ar' ? 'الإسعافات الأولية' : 'First Aid',
      desc: language === 'ar' ? 'دورات تدريبية في الإسعافات الأولية وإدارة الأزمات والطوارئ' : 'Training courses in first aid and crisis and emergency management',
      icon: Target,
    },
  ];

  const publicServiceProjects = [
    {
      title: language === 'ar' ? 'تنظيم حركة المرور' : 'Traffic Management',
      desc: language === 'ar' ? 'المساعدة في تنظيم حركة المرور داخل الحرم الجامعي خلال الفعاليات الكبرى' : 'Assisting in traffic management within the campus during major events',
    },
    {
      title: language === 'ar' ? 'صيانة المرافق' : 'Facility Maintenance',
      desc: language === 'ar' ? 'المشاركة في صيانة وتجميل المرافق والحدائق داخل المعهد' : 'Participating in maintenance and beautification of facilities and gardens within the institute',
    },
    {
      title: language === 'ar' ? 'خدمة الاحتفالات' : 'Event Services',
      desc: language === 'ar' ? 'تقديم الخدمات اللوجستية والتنظيمية خلال الاحتفالات والمناسبات الرسمية' : 'Providing logistical and organizational services during celebrations and official events',
    },
    {
      title: language === 'ar' ? 'الإغاثة والطوارئ' : 'Relief & Emergency',
      desc: language === 'ar' ? 'الاستعداد للمشاركة في عمليات الإغاثة والاستجابة للطوارئ عند الحاجة' : 'Being prepared to participate in relief operations and emergency response when needed',
    },
  ];

  const campsAndTrips = [
    {
      title: language === 'ar' ? 'المعسكر الصيفي السنوي' : 'Annual Summer Camp',
      location: language === 'ar' ? 'الغردقة - البحر الأحمر' : 'Hurghada - Red Sea',
      duration: language === 'ar' ? '5 أيام' : '5 Days',
      desc: language === 'ar' ? 'معسكر صيفي يتضمن أنشطة بحرية وكشفية وتدريبات قيادية' : 'Summer camp including marine activities, scouting, and leadership training',
    },
    {
      title: language === 'ar' ? 'رحلة الواحات' : 'Oasis Trip',
      location: language === 'ar' ? 'الفيوم' : 'Fayoum',
      duration: language === 'ar' ? '3 أيام' : '3 Days',
      desc: language === 'ar' ? 'رحلة استكشافية للواحات والبحيرات الطبيعية مع أنشطة تخييم' : 'Exploration trip to oases and natural lakes with camping activities',
    },
    {
      title: language === 'ar' ? 'معسكر الشتاء' : 'Winter Camp',
      location: language === 'ar' ? 'سانت كاترين - جنوب سيناء' : 'Saint Catherine - South Sinai',
      duration: language === 'ar' ? '4 أيام' : '4 Days',
      desc: language === 'ar' ? 'معسكر شتوي في الجبال يتضمن تسلق وتدريبات بقاء' : 'Winter camp in the mountains including climbing and survival training',
    },
  ];

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={pageTitle} description={pageSubtitle} />
      <Navbar />

      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" alt="Scouts Committee" src="/figmaAssets/rectangle-2.png" />
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
                      <Compass className="w-5 h-5 text-green-700 dark:text-green-500 mt-0.5 flex-shrink-0" />
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
                <Compass className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'الأنشطة الكشفية' : 'Scouting Activities'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" dir={direction}>
            {scoutingActivities.map((activity, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-xl transition-all duration-300 h-full text-center group bg-white dark:bg-neutral-800 hover:-translate-y-1">
                  <CardContent className="p-6 flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center group-hover:bg-green-100 dark:group-hover:bg-green-900/40 transition-colors">
                      <activity.icon className="w-8 h-8 text-green-700 dark:text-green-500" />
                    </div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{activity.title}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm [font-family:'Almarai',Helvetica] transition-colors duration-300">{activity.desc}</p>
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
                <Wrench className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'مشاريع الخدمة العامة' : 'Public Service Projects'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" dir={direction}>
            {publicServiceProjects.map((project, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full bg-white dark:bg-neutral-900">
                  <CardContent className="p-6 flex flex-col gap-3">
                    <div className="w-12 h-12 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center">
                      <Wrench className="w-6 h-6 text-green-700 dark:text-green-500" />
                    </div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{project.title}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{project.desc}</p>
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
                <TreePine className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'المعسكرات والرحلات' : 'Camps & Trips'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="flex flex-col gap-6" dir={direction}>
            {campsAndTrips.map((camp, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction={direction === 'rtl' ? "right" : "left"}>
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-neutral-800">
                  <CardContent className="p-6 flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-green-700 flex items-center justify-center flex-shrink-0">
                      <Map className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex flex-col gap-1.5 flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{camp.title}</h3>
                        <div className="flex gap-2">
                          <span className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-500 px-3 py-1 rounded-full text-xs font-bold [font-family:'Almarai',Helvetica]">{camp.location}</span>
                          <span className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full text-xs font-bold [font-family:'Almarai',Helvetica]">{camp.duration}</span>
                        </div>
                      </div>
                      <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{camp.desc}</p>
                    </div>
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
              <Compass className="w-16 h-16 text-white/80" />
              <h2 className="text-3xl md:text-4xl font-bold text-white [font-family:'Almarai',Helvetica]">
                {language === 'ar' ? 'انضم إلى فريق الجوالة' : 'Join the Scout Team'}
              </h2>
              <p className="text-white/80 text-lg max-w-[500px] [font-family:'Almarai',Helvetica]">
                {language === 'ar'
                  ? 'اكتشف قدراتك القيادية وعش تجارب فريدة من خلال الكشافة والمعسكرات والخدمة العامة.'
                  : 'Discover your leadership abilities and live unique experiences through scouting, camps, and public service.'}
              </p>
              <button className="flex items-center gap-2 px-8 py-4 bg-white text-green-800 rounded-2xl font-bold text-lg [font-family:'Almarai',Helvetica] hover:bg-gray-100 transition-colors shadow-lg">
                <span>{language === 'ar' ? 'سجل الآن' : 'Register Now'}</span>
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