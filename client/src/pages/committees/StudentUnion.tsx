import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { Users, Target, Calendar, UserPlus, ArrowRight, Star, Shield, Megaphone } from "lucide-react";

export default function StudentUnion() {
  const { language, direction } = useLanguage();

  const pageTitle = language === 'ar' ? 'اتحاد الطلاب' : 'Student Union';
  const pageSubtitle = language === 'ar'
    ? 'صوت الطلاب وممثلهم في الحياة الجامعية'
    : 'The voice and representative of students in university life';

  const objectives = [
    language === 'ar' ? 'تمثيل الطلاب أمام إدارة المعهد والجهات المعنية' : 'Represent students before the institute administration and relevant authorities',
    language === 'ar' ? 'تنظيم الأنشطة الطلابية والفعاليات المختلفة' : 'Organize student activities and various events',
    language === 'ar' ? 'تعزيز روح التعاون والعمل الجماعي بين الطلاب' : 'Foster cooperation and teamwork among students',
    language === 'ar' ? 'المساهمة في تطوير العملية التعليمية' : 'Contribute to the development of the educational process',
    language === 'ar' ? 'حماية حقوق الطلاب وضمان مصالحهم' : 'Protect student rights and ensure their interests',
    language === 'ar' ? 'بناء جسور التواصل بين الطلاب وأعضاء هيئة التدريس' : 'Build communication bridges between students and faculty members',
  ];

  const leadershipStructure = [
    {
      title: language === 'ar' ? 'رئيس الاتحاد' : 'Union President',
      desc: language === 'ar' ? 'يقود الاتحاد ويمثل الطلاب في المجالس الرسمية ويشرف على جميع الأنشطة' : 'Leads the union and represents students in official councils and oversees all activities',
      icon: Shield,
    },
    {
      title: language === 'ar' ? 'نائب الرئيس' : 'Vice President',
      desc: language === 'ar' ? 'يساعد الرئيس في مهامه وينوب عنه في حالة غيابه' : 'Assists the president and acts on their behalf in their absence',
      icon: Users,
    },
    {
      title: language === 'ar' ? 'أمين الصندوق' : 'Treasurer',
      desc: language === 'ar' ? 'يدير الموارد المالية للاتحاد ويضع الميزانيات اللازمة للأنشطة' : 'Manages the union\'s financial resources and prepares budgets for activities',
      icon: Star,
    },
    {
      title: language === 'ar' ? 'أمين اللجان' : 'Committees Secretary',
      desc: language === 'ar' ? 'ينسق بين اللجان المختلفة ويتابع تنفيذ الخطط والبرامج' : 'Coordinates between different committees and follows up on plans and programs',
      icon: Megaphone,
    },
  ];

  const activities = [
    {
      title: language === 'ar' ? 'أسبوع الاستقبال' : 'Welcome Week',
      desc: language === 'ar' ? 'فعاليات استقبال الطلاب الجدد وتعريفهم بالحياة الجامعية' : 'Events to welcome new students and introduce them to university life',
    },
    {
      title: language === 'ar' ? 'المسابقات الأكاديمية' : 'Academic Competitions',
      desc: language === 'ar' ? 'مسابقات علمية وثقافية بين الأقسام المختلفة' : 'Scientific and cultural competitions between different departments',
    },
    {
      title: language === 'ar' ? 'الرحلات الطلابية' : 'Student Trips',
      desc: language === 'ar' ? 'رحلات ترفيهية وعلمية لتعزيز الروابط بين الطلاب' : 'Recreational and scientific trips to strengthen bonds among students',
    },
    {
      title: language === 'ar' ? 'ملتقى الخريجين' : 'Alumni Forum',
      desc: language === 'ar' ? 'لقاءات دورية مع الخريجين لنقل الخبرات والتجارب' : 'Regular meetings with alumni to share experiences and expertise',
    },
    {
      title: language === 'ar' ? 'حملات التوعية' : 'Awareness Campaigns',
      desc: language === 'ar' ? 'حملات توعوية في مجالات الصحة والبيئة والمجتمع' : 'Awareness campaigns in health, environment, and community fields',
    },
    {
      title: language === 'ar' ? 'يوم الطالب' : 'Student Day',
      desc: language === 'ar' ? 'احتفالية سنوية تكرم الطلاب المتميزين في مختلف المجالات' : 'Annual celebration honoring outstanding students in various fields',
    },
  ];

  const participationSteps = [
    {
      step: '1',
      title: language === 'ar' ? 'التسجيل' : 'Register',
      desc: language === 'ar' ? 'قم بتسجيل اسمك لدى مكتب شؤون الطلاب كمرشح أو عضو فاعل' : 'Register your name at the Student Affairs office as a candidate or active member',
    },
    {
      step: '2',
      title: language === 'ar' ? 'الانتخابات' : 'Elections',
      desc: language === 'ar' ? 'شارك في الانتخابات الطلابية السنوية للتصويت أو الترشح' : 'Participate in annual student elections to vote or run for office',
    },
    {
      step: '3',
      title: language === 'ar' ? 'الانضمام للجان' : 'Join Committees',
      desc: language === 'ar' ? 'اختر اللجنة المناسبة لاهتماماتك وانضم إلى فريق العمل' : 'Choose the committee that matches your interests and join the team',
    },
    {
      step: '4',
      title: language === 'ar' ? 'المشاركة الفعالة' : 'Active Participation',
      desc: language === 'ar' ? 'ساهم في تنظيم الفعاليات وتقديم المبادرات لخدمة زملائك' : 'Contribute to organizing events and presenting initiatives to serve your peers',
    },
  ];

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={pageTitle} description={pageSubtitle} />
      <Navbar />

      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" alt="Student Union" src="/figmaAssets/rectangle-2.png" />
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

      <Breadcrumb items={[
        { label: language === 'ar' ? 'الرئيسية' : 'Home', href: '/' },
        { label: language === 'ar' ? 'رعاية الشباب' : 'Youth Welfare' },
        { label: language === 'ar' ? 'اتحاد الطلاب' : 'Student Union' },
      ]} />

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
                {language === 'ar' ? 'أهداف الاتحاد' : 'Union Objectives'}
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
                <Users className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'هيكل الاتحاد' : 'Union Structure'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" dir={direction}>
            {leadershipStructure.map((member, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-xl transition-all duration-300 h-full text-center group bg-white dark:bg-neutral-800 hover:-translate-y-1">
                  <CardContent className="p-6 flex flex-col items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center group-hover:bg-green-100 dark:group-hover:bg-green-900/40 transition-colors">
                      <member.icon className="w-10 h-10 text-green-700 dark:text-green-500" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{member.title}</h3>
                      <p className="text-neutral-500 dark:text-neutral-400 text-sm [font-family:'Almarai',Helvetica] transition-colors duration-300">{member.desc}</p>
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
                <Calendar className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'الأنشطة والفعاليات' : 'Activities & Events'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" dir={direction}>
            {activities.map((activity, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full bg-white dark:bg-neutral-900">
                  <CardContent className="p-6 flex flex-col gap-3">
                    <div className="w-12 h-12 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-green-700 dark:text-green-500" />
                    </div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{activity.title}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{activity.desc}</p>
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
                <UserPlus className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'كيف تشارك؟' : 'How to Participate'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="flex flex-col gap-6" dir={direction}>
            {participationSteps.map((item, index) => (
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

      <section className="py-20 bg-green-800 dark:bg-green-900 transition-colors duration-300">
        <div className="max-w-[800px] mx-auto px-4 md:px-8 text-center">
          <AnimatedSection>
            <div className="flex flex-col items-center gap-6">
              <Users className="w-16 h-16 text-white/80" />
              <h2 className="text-3xl md:text-4xl font-bold text-white [font-family:'Almarai',Helvetica]">
                {language === 'ar' ? 'انضم إلى اتحاد الطلاب' : 'Join the Student Union'}
              </h2>
              <p className="text-white/80 text-lg max-w-[500px] [font-family:'Almarai',Helvetica]">
                {language === 'ar'
                  ? 'كن جزءاً من فريق يعمل لخدمة الطلاب وتطوير الحياة الجامعية. صوتك يصنع الفرق!'
                  : 'Be part of a team working to serve students and develop university life. Your voice makes a difference!'}
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