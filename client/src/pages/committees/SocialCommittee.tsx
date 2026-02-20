import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { Heart, Users, HandHeart, Calendar, ArrowRight, Target, Gift, Handshake } from "lucide-react";

export default function SocialCommittee() {
  const { language, direction } = useLanguage();

  const pageTitle = language === 'ar' ? 'لجنة النشاط الاجتماعي' : 'Social Committee';
  const pageSubtitle = language === 'ar'
    ? 'خدمة المجتمع وتعزيز المسؤولية الاجتماعية لدى الطلاب'
    : 'Serving the community and promoting social responsibility among students';

  const objectives = [
    language === 'ar' ? 'تنمية الوعي الاجتماعي والمسؤولية المجتمعية لدى الطلاب' : 'Develop social awareness and community responsibility among students',
    language === 'ar' ? 'تنظيم برامج خدمة المجتمع والعمل التطوعي' : 'Organize community service programs and volunteer work',
    language === 'ar' ? 'دعم الطلاب المحتاجين مادياً واجتماعياً' : 'Support students in need financially and socially',
    language === 'ar' ? 'تعزيز قيم التكافل والتضامن الاجتماعي' : 'Promote values of solidarity and social cohesion',
    language === 'ar' ? 'بناء شراكات مع المؤسسات الخيرية والمجتمعية' : 'Build partnerships with charitable and community organizations',
    language === 'ar' ? 'تنظيم الفعاليات الاجتماعية التي تقوي الروابط بين الطلاب' : 'Organize social events that strengthen bonds among students',
  ];

  const communityPrograms = [
    {
      title: language === 'ar' ? 'محو الأمية' : 'Literacy Campaign',
      desc: language === 'ar' ? 'برامج تعليمية لمحو الأمية في القرى والمناطق المحيطة بالمعهد' : 'Educational programs for literacy in villages and areas surrounding the institute',
      icon: Heart,
    },
    {
      title: language === 'ar' ? 'زيارات المستشفيات' : 'Hospital Visits',
      desc: language === 'ar' ? 'زيارات دورية للمستشفيات لتقديم الدعم المعنوي للمرضى' : 'Regular hospital visits to provide moral support to patients',
      icon: HandHeart,
    },
    {
      title: language === 'ar' ? 'تنظيف البيئة' : 'Environmental Cleanup',
      desc: language === 'ar' ? 'حملات تنظيف وتجميل للحرم الجامعي والمناطق المحيطة' : 'Cleanup and beautification campaigns for the campus and surrounding areas',
      icon: Target,
    },
    {
      title: language === 'ar' ? 'التوعية الصحية' : 'Health Awareness',
      desc: language === 'ar' ? 'قوافل طبية وحملات توعية صحية بالتعاون مع المؤسسات الصحية' : 'Medical convoys and health awareness campaigns in cooperation with health institutions',
      icon: Heart,
    },
  ];

  const socialEvents = [
    {
      title: language === 'ar' ? 'حفل اليوم اليتيم' : 'Orphan Day Celebration',
      date: language === 'ar' ? 'أبريل 2026' : 'April 2026',
      desc: language === 'ar' ? 'احتفالية خاصة بأطفال دور الأيتام تتضمن أنشطة ترفيهية وهدايا' : 'Special celebration for orphanage children including entertainment activities and gifts',
    },
    {
      title: language === 'ar' ? 'إفطار رمضان الجماعي' : 'Ramadan Group Iftar',
      date: language === 'ar' ? 'مارس 2026' : 'March 2026',
      desc: language === 'ar' ? 'إفطار جماعي للطلاب والعاملين يعزز روح الأخوة والتكافل' : 'Group iftar for students and staff promoting brotherhood and solidarity',
    },
    {
      title: language === 'ar' ? 'معرض الملابس الخيري' : 'Charity Clothing Fair',
      date: language === 'ar' ? 'يناير 2026' : 'January 2026',
      desc: language === 'ar' ? 'معرض لتوزيع الملابس على الأسر المحتاجة بالتعاون مع الجمعيات الخيرية' : 'Fair to distribute clothing to families in need in cooperation with charities',
    },
  ];

  const charityInitiatives = [
    {
      title: language === 'ar' ? 'صندوق دعم الطلاب' : 'Student Support Fund',
      desc: language === 'ar' ? 'صندوق لدعم الطلاب المتعثرين مادياً وتوفير المنح والإعفاءات' : 'Fund to support financially struggling students and provide grants and waivers',
      icon: Gift,
    },
    {
      title: language === 'ar' ? 'كفالة الأسر' : 'Family Sponsorship',
      desc: language === 'ar' ? 'برنامج كفالة أسر محتاجة في المنطقة المحيطة بالمعهد' : 'Program to sponsor families in need in the area surrounding the institute',
      icon: Handshake,
    },
    {
      title: language === 'ar' ? 'حملات التبرع بالدم' : 'Blood Donation Drives',
      desc: language === 'ar' ? 'حملات دورية للتبرع بالدم بالتعاون مع بنك الدم المركزي' : 'Regular blood donation drives in cooperation with the central blood bank',
      icon: Heart,
    },
  ];

  const volunteerOpportunities = [
    {
      title: language === 'ar' ? 'فريق التطوع العام' : 'General Volunteer Team',
      desc: language === 'ar' ? 'انضم لفريق التطوع وشارك في الحملات والفعاليات المجتمعية المتنوعة' : 'Join the volunteer team and participate in various community campaigns and events',
    },
    {
      title: language === 'ar' ? 'سفراء الخير' : 'Goodwill Ambassadors',
      desc: language === 'ar' ? 'كن سفيراً للخير وقُد مبادرات اجتماعية في مجتمعك المحلي' : 'Be a goodwill ambassador and lead social initiatives in your local community',
    },
    {
      title: language === 'ar' ? 'فريق الدعم النفسي' : 'Psychological Support Team',
      desc: language === 'ar' ? 'ساعد زملاءك من خلال الدعم النفسي والاجتماعي تحت إشراف متخصصين' : 'Help your peers through psychological and social support under specialist supervision',
    },
    {
      title: language === 'ar' ? 'فريق التوعية المجتمعية' : 'Community Awareness Team',
      desc: language === 'ar' ? 'شارك في إعداد وتنفيذ حملات التوعية في مختلف المجالات' : 'Participate in preparing and executing awareness campaigns in various fields',
    },
  ];

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={pageTitle} description={pageSubtitle} />
      <Navbar />

      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" alt="Social Committee" src="/figmaAssets/rectangle-2.png" />
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
                      <Heart className="w-5 h-5 text-green-700 dark:text-green-500 mt-0.5 flex-shrink-0" />
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
                <HandHeart className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'برامج خدمة المجتمع' : 'Community Service Programs'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" dir={direction}>
            {communityPrograms.map((program, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-xl transition-all duration-300 h-full text-center group bg-white dark:bg-neutral-800 hover:-translate-y-1">
                  <CardContent className="p-6 flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center group-hover:bg-green-100 dark:group-hover:bg-green-900/40 transition-colors">
                      <program.icon className="w-8 h-8 text-green-700 dark:text-green-500" />
                    </div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{program.title}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm [font-family:'Almarai',Helvetica] transition-colors duration-300">{program.desc}</p>
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
                {language === 'ar' ? 'الفعاليات الاجتماعية' : 'Social Events'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="flex flex-col gap-6" dir={direction}>
            {socialEvents.map((event, index) => (
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
                <Gift className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'المبادرات الخيرية' : 'Charity Initiatives'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" dir={direction}>
            {charityInitiatives.map((initiative, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-xl transition-all duration-300 h-full group bg-white dark:bg-neutral-800 hover:-translate-y-1">
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div className="w-14 h-14 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center group-hover:bg-green-100 dark:group-hover:bg-green-900/40 transition-colors">
                      <initiative.icon className="w-7 h-7 text-green-700 dark:text-green-500" />
                    </div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{initiative.title}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{initiative.desc}</p>
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
                <Users className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'فرص التطوع' : 'Volunteer Opportunities'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" dir={direction}>
            {volunteerOpportunities.map((opportunity, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full bg-white dark:bg-neutral-900">
                  <CardContent className="p-6 flex flex-col gap-3">
                    <div className="w-12 h-12 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center">
                      <Users className="w-6 h-6 text-green-700 dark:text-green-500" />
                    </div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{opportunity.title}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{opportunity.desc}</p>
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
              <Heart className="w-16 h-16 text-white/80" />
              <h2 className="text-3xl md:text-4xl font-bold text-white [font-family:'Almarai',Helvetica]">
                {language === 'ar' ? 'كن جزءاً من التغيير' : 'Be Part of the Change'}
              </h2>
              <p className="text-white/80 text-lg max-w-[500px] [font-family:'Almarai',Helvetica]">
                {language === 'ar'
                  ? 'تطوع معنا واصنع فرقاً حقيقياً في حياة الآخرين. معاً نبني مجتمعاً أفضل.'
                  : 'Volunteer with us and make a real difference in others\' lives. Together we build a better community.'}
              </p>
              <button className="flex items-center gap-2 px-8 py-4 bg-white text-green-800 rounded-2xl font-bold text-lg [font-family:'Almarai',Helvetica] hover:bg-gray-100 transition-colors shadow-lg">
                <span>{language === 'ar' ? 'تطوع الآن' : 'Volunteer Now'}</span>
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