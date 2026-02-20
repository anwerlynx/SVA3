import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { BookOpen, Users, Calendar, ArrowRight, MessageSquare, Lightbulb, Mic, Award } from "lucide-react";

export default function CulturalCommittee() {
  const { language, direction } = useLanguage();

  const pageTitle = language === 'ar' ? 'لجنة النشاط الثقافي' : 'Cultural Committee';
  const pageSubtitle = language === 'ar'
    ? 'تنمية الفكر والثقافة لبناء شخصية الطالب المتكاملة'
    : 'Developing thought and culture to build a well-rounded student personality';

  const objectives = [
    language === 'ar' ? 'تنمية الوعي الثقافي والفكري لدى الطلاب' : 'Develop cultural and intellectual awareness among students',
    language === 'ar' ? 'تشجيع القراءة والبحث والاطلاع' : 'Encourage reading, research, and exploration',
    language === 'ar' ? 'تنظيم المسابقات الثقافية والأدبية' : 'Organize cultural and literary competitions',
    language === 'ar' ? 'عقد الندوات والمحاضرات التثقيفية' : 'Hold educational seminars and lectures',
    language === 'ar' ? 'إصدار المجلات والنشرات الثقافية' : 'Publish cultural magazines and newsletters',
    language === 'ar' ? 'تعزيز الحوار البناء وقبول الآخر' : 'Promote constructive dialogue and acceptance of others',
  ];

  const culturalActivities = [
    {
      title: language === 'ar' ? 'المناظرات الطلابية' : 'Student Debates',
      desc: language === 'ar' ? 'مناظرات فكرية حول قضايا معاصرة تنمي مهارات التفكير النقدي والحوار' : 'Intellectual debates on contemporary issues that develop critical thinking and dialogue skills',
      icon: MessageSquare,
    },
    {
      title: language === 'ar' ? 'ورش العمل الإبداعية' : 'Creative Workshops',
      desc: language === 'ar' ? 'ورش عمل في الكتابة الإبداعية والشعر والقصة القصيرة' : 'Workshops in creative writing, poetry, and short stories',
      icon: Lightbulb,
    },
    {
      title: language === 'ar' ? 'الندوات والمحاضرات' : 'Seminars & Lectures',
      desc: language === 'ar' ? 'استضافة مفكرين وأدباء لإثراء المعرفة الثقافية للطلاب' : 'Hosting thinkers and writers to enrich students\' cultural knowledge',
      icon: Mic,
    },
    {
      title: language === 'ar' ? 'مسابقات المعرفة' : 'Knowledge Competitions',
      desc: language === 'ar' ? 'مسابقات ثقافية متنوعة تشمل المعلومات العامة والأدب والعلوم' : 'Diverse cultural competitions covering general knowledge, literature, and sciences',
      icon: Award,
    },
  ];

  const pastEvents = [
    {
      title: language === 'ar' ? 'مهرجان الشعر العربي' : 'Arabic Poetry Festival',
      date: language === 'ar' ? 'نوفمبر 2025' : 'November 2025',
      desc: language === 'ar' ? 'مهرجان شعري شارك فيه أكثر من 50 طالباً من مختلف الأقسام' : 'Poetry festival with over 50 students participating from various departments',
    },
    {
      title: language === 'ar' ? 'ندوة التنمية المستدامة' : 'Sustainable Development Seminar',
      date: language === 'ar' ? 'أكتوبر 2025' : 'October 2025',
      desc: language === 'ar' ? 'ندوة حول دور الشباب في تحقيق أهداف التنمية المستدامة' : 'Seminar on the role of youth in achieving sustainable development goals',
    },
    {
      title: language === 'ar' ? 'معرض الكتاب السنوي' : 'Annual Book Fair',
      date: language === 'ar' ? 'سبتمبر 2025' : 'September 2025',
      desc: language === 'ar' ? 'معرض كتب متنوع بالتعاون مع دور النشر المحلية والعربية' : 'Diverse book fair in cooperation with local and Arab publishing houses',
    },
    {
      title: language === 'ar' ? 'مسابقة أفضل مقال' : 'Best Essay Competition',
      date: language === 'ar' ? 'أغسطس 2025' : 'August 2025',
      desc: language === 'ar' ? 'مسابقة كتابة المقالات حول قضايا الشباب والمجتمع' : 'Essay writing competition on youth and community issues',
    },
  ];

  const members = [
    {
      name: language === 'ar' ? 'د. أحمد سليمان' : 'Dr. Ahmed Soliman',
      role: language === 'ar' ? 'مشرف اللجنة' : 'Committee Supervisor',
    },
    {
      name: language === 'ar' ? 'أ. منى عبد الحميد' : 'Ms. Mona Abdel Hamid',
      role: language === 'ar' ? 'منسق الأنشطة' : 'Activities Coordinator',
    },
    {
      name: language === 'ar' ? 'محمد عادل' : 'Mohamed Adel',
      role: language === 'ar' ? 'رئيس اللجنة (طالب)' : 'Committee Chair (Student)',
    },
    {
      name: language === 'ar' ? 'سارة حسن' : 'Sara Hassan',
      role: language === 'ar' ? 'نائب الرئيس (طالبة)' : 'Vice Chair (Student)',
    },
  ];

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={pageTitle} description={pageSubtitle} />
      <Navbar />

      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" alt="Cultural Committee" src="/figmaAssets/rectangle-2.png" />
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
                <BookOpen className="w-6 h-6 text-green-700" />
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
                      <BookOpen className="w-5 h-5 text-green-700 dark:text-green-500 mt-0.5 flex-shrink-0" />
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
                <Lightbulb className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'الأنشطة الثقافية' : 'Cultural Activities'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" dir={direction}>
            {culturalActivities.map((activity, index) => (
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
                <Calendar className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'أرشيف الفعاليات' : 'Events Archive'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="flex flex-col gap-6" dir={direction}>
            {pastEvents.map((event, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction={direction === 'rtl' ? "right" : "left"}>
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-neutral-900">
                  <CardContent className="p-6 flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-green-700 dark:text-green-500" />
                    </div>
                    <div className="flex flex-col gap-1.5 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{event.title}</h3>
                        <span className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-500 px-3 py-1 rounded-full text-xs font-bold [font-family:'Almarai',Helvetica]">{event.date}</span>
                      </div>
                      <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{event.desc}</p>
                    </div>
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
                <Users className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'أعضاء اللجنة' : 'Committee Members'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" dir={direction}>
            {members.map((member, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-xl transition-all duration-300 h-full text-center group bg-white dark:bg-neutral-800 hover:-translate-y-1">
                  <CardContent className="p-6 flex flex-col items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center group-hover:bg-green-100 dark:group-hover:bg-green-900/40 transition-colors">
                      <Users className="w-10 h-10 text-green-700 dark:text-green-500" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{member.name}</h3>
                      <p className="text-green-700 dark:text-green-500 text-sm font-medium [font-family:'Almarai',Helvetica]">{member.role}</p>
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
              <BookOpen className="w-16 h-16 text-white/80" />
              <h2 className="text-3xl md:text-4xl font-bold text-white [font-family:'Almarai',Helvetica]">
                {language === 'ar' ? 'شارك في الأنشطة الثقافية' : 'Participate in Cultural Activities'}
              </h2>
              <p className="text-white/80 text-lg max-w-[500px] [font-family:'Almarai',Helvetica]">
                {language === 'ar'
                  ? 'وسّع آفاقك الثقافية وطوّر مهاراتك الفكرية من خلال المشاركة في أنشطتنا المتنوعة.'
                  : 'Expand your cultural horizons and develop your intellectual skills through participating in our diverse activities.'}
              </p>
              <button className="flex items-center gap-2 px-8 py-4 bg-white text-green-800 rounded-2xl font-bold text-lg [font-family:'Almarai',Helvetica] hover:bg-gray-100 transition-colors shadow-lg">
                <span>{language === 'ar' ? 'انضم إلينا' : 'Join Us'}</span>
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