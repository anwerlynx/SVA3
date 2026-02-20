import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Card, CardContent } from "@/components/ui/card";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { Link } from "wouter";
import {
  Users, Music, Trophy, Heart, Palette, Leaf,
  Calendar, MapPin, ArrowLeft, ArrowRight, Star, Handshake
} from "lucide-react";

export default function Community() {
  const { language, direction } = useLanguage();

  const pageTitle = language === 'ar' ? 'المجتمع والأنشطة' : 'Community & Activities';
  const pageSubtitle = language === 'ar'
    ? 'حياة طلابية نابضة بالنشاط والإبداع'
    : 'A vibrant student life full of activities and creativity';

  const stats = [
    { icon: Users, value: 24, suffix: "+", label: language === 'ar' ? "نادي ومجموعة طلابية" : "Student Clubs & Groups" },
    { icon: Trophy, value: 15, suffix: "+", label: language === 'ar' ? "بطولة رياضية سنوياً" : "Annual Tournaments" },
    { icon: Calendar, value: 40, suffix: "+", label: language === 'ar' ? "فعالية سنوية" : "Events Per Year" },
    { icon: Heart, value: 500, suffix: "+", label: language === 'ar' ? "طالب متطوع" : "Student Volunteers" },
  ];

  const categories = [
    { icon: Users, title: language === 'ar' ? "اتحاد الطلاب" : "Student Union", desc: language === 'ar' ? "الهيئة الرسمية الممثلة لجميع الطلاب، تنظم الفعاليات وتعالج قضايا الطلاب." : "The official representative body organizing events and addressing student concerns.", count: 1, color: "bg-indigo-50 dark:bg-indigo-900/20", iconColor: "text-indigo-600 dark:text-indigo-400" },
    { icon: Music, title: language === 'ar' ? "الأندية الثقافية" : "Cultural Clubs", desc: language === 'ar' ? "أندية متنوعة للأنشطة الثقافية والفنية والأدبية." : "Diverse clubs for cultural, artistic, and literary activities.", count: 8, color: "bg-violet-50 dark:bg-violet-900/20", iconColor: "text-violet-600 dark:text-violet-400" },
    { icon: Trophy, title: language === 'ar' ? "الفرق الرياضية" : "Sports Teams", desc: language === 'ar' ? "فرق رياضية تنافسية في مختلف الألعاب والبطولات." : "Competitive sports teams across various games and tournaments.", count: 6, color: "bg-amber-50 dark:bg-amber-900/20", iconColor: "text-amber-600 dark:text-amber-400" },
    { icon: Heart, title: language === 'ar' ? "التطوع وخدمة المجتمع" : "Volunteering", desc: language === 'ar' ? "مبادرات تطوعية لخدمة المجتمع المحلي والبيئة." : "Volunteer initiatives serving the local community and environment.", count: 4, color: "bg-rose-50 dark:bg-rose-900/20", iconColor: "text-rose-600 dark:text-rose-400" },
    { icon: Palette, title: language === 'ar' ? "الفنون والإعلام" : "Arts & Media", desc: language === 'ar' ? "أنشطة إبداعية في التصوير والتصميم والإنتاج الإعلامي." : "Creative activities in photography, design, and media production.", count: 3, color: "bg-emerald-50 dark:bg-emerald-900/20", iconColor: "text-emerald-600 dark:text-emerald-400" },
    { icon: Leaf, title: language === 'ar' ? "البيئة والاستدامة" : "Environment", desc: language === 'ar' ? "أنشطة وحملات للتوعية البيئية والتنمية المستدامة." : "Campaigns for environmental awareness and sustainable development.", count: 2, color: "bg-teal-50 dark:bg-teal-900/20", iconColor: "text-teal-600 dark:text-teal-400" },
  ];

  const activities = [
    {
      title: language === 'ar' ? "اتحاد الطلاب" : "Student Union",
      desc: language === 'ar' ? "الهيئة الرسمية الممثلة لجميع الطلاب، تنظم الفعاليات وتعالج شؤون الطلاب وتعزز روح المجتمع الجامعي." : "The official representative body of all students, organizing events, addressing student concerns, and fostering campus community.",
      members: 120,
      image: "/figmaAssets/rectangle-10.png",
    },
    {
      title: language === 'ar' ? "نادي الهندسة" : "Engineering Club",
      desc: language === 'ar' ? "مركز لطلاب الهندسة للتعاون في المشاريع وحضور ورش العمل والتواصل مع المتخصصين في الصناعة." : "A hub for engineering students to collaborate on projects, attend workshops, and connect with industry professionals.",
      members: 85,
      image: "/figmaAssets/rectangle-12.png",
    },
    {
      title: language === 'ar' ? "نادي الأعمال والريادة" : "Business & Entrepreneurship Club",
      desc: language === 'ar' ? "تمكين قادة الأعمال المستقبليين من خلال المسابقات والإرشاد ومحاكاة الأعمال الواقعية." : "Empowering future business leaders through competitions, mentorship, and real-world business simulations.",
      members: 72,
      image: "/figmaAssets/rectangle-16.png",
    },
    {
      title: language === 'ar' ? "فريق كرة القدم" : "Football Team",
      desc: language === 'ar' ? "المنافسة في بطولات ما بين الجامعات وتعزيز الروح الرياضية في الحرم الجامعي." : "Competing in inter-university tournaments and promoting sportsmanship across campus.",
      members: 25,
      image: "/figmaAssets/rectangle-17.png",
    },
    {
      title: language === 'ar' ? "مبادرة خدمة المجتمع" : "Community Service Initiative",
      desc: language === 'ar' ? "الطلاب يقدمون العطاء للمجتمع المحلي من خلال التوعية التعليمية والحملات البيئية والأعمال الخيرية." : "Students giving back through educational outreach, environmental campaigns, and charity drives.",
      members: 60,
      image: "/figmaAssets/rectangle-2.png",
    },
    {
      title: language === 'ar' ? "نادي التصوير والإعلام" : "Photography & Media Club",
      desc: language === 'ar' ? "توثيق الحياة الجامعية وإنتاج المحتوى الإعلامي وتطوير مهارات السرد المرئي." : "Documenting campus life, producing student media content, and developing visual storytelling skills.",
      members: 40,
      image: "/figmaAssets/rectangle-3.png",
    },
  ];

  const upcomingEvents = [
    {
      title: language === 'ar' ? "يوم الرياضة السنوي" : "Annual Sports Day",
      date: language === 'ar' ? "١٥ مارس ٢٠٢٦" : "March 15, 2026",
      location: language === 'ar' ? "الحرم الرئيسي" : "Main Campus",
      category: language === 'ar' ? "رياضة" : "Sports",
      categoryColor: "bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400",
    },
    {
      title: language === 'ar' ? "المهرجان الثقافي" : "Cultural Festival",
      date: language === 'ar' ? "٥ أبريل ٢٠٢٦" : "April 5, 2026",
      location: language === 'ar' ? "قاعة المؤتمرات" : "Auditorium",
      category: language === 'ar' ? "ثقافي" : "Cultural",
      categoryColor: "bg-violet-100 dark:bg-violet-900/20 text-violet-700 dark:text-violet-400",
    },
    {
      title: language === 'ar' ? "مسابقة ريادة الأعمال" : "Entrepreneurship Competition",
      date: language === 'ar' ? "٢٠ أبريل ٢٠٢٦" : "April 20, 2026",
      location: language === 'ar' ? "قاعة المحاضرات الكبرى" : "Conference Hall",
      category: language === 'ar' ? "أكاديمي" : "Academic",
      categoryColor: "bg-indigo-100 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400",
    },
    {
      title: language === 'ar' ? "حملة تنظيف المجتمع" : "Community Cleanup Drive",
      date: language === 'ar' ? "١ مايو ٢٠٢٦" : "May 1, 2026",
      location: language === 'ar' ? "المجتمع المحلي" : "Local Community",
      category: language === 'ar' ? "تطوع" : "Volunteering",
      categoryColor: "bg-rose-100 dark:bg-rose-900/20 text-rose-700 dark:text-rose-400",
    },
  ];

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={pageTitle} description={pageSubtitle} />
      <Navbar />

      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" alt="Community" src="/figmaAssets/rectangle-2.png" />
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

      <section className="py-16 bg-green-800 dark:bg-green-900 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6" dir={direction}>
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <div className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white [font-family:'Almarai',Helvetica] mb-1">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-white/70 text-sm [font-family:'Almarai',Helvetica]">{stat.label}</p>
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
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <span className="text-green-700 font-bold text-sm [font-family:'Almarai',Helvetica]">
                  {language === 'ar' ? "الأندية والمجموعات" : "Clubs & Groups"}
                </span>
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? "أنشطة الحياة الطلابية" : "Student Life Activities"}
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-lg mt-4 max-w-[600px] mx-auto [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? "مجموعة متنوعة من الأندية والأنشطة التي تثري تجربتك الجامعية" : "A diverse range of clubs and activities that enrich your university experience"}
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" dir={direction}>
            {categories.map((cat, index) => (
              <AnimatedSection key={index} delay={index * 0.08} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full group bg-white dark:bg-neutral-900">
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-2xl ${cat.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <cat.icon className={`w-7 h-7 ${cat.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{cat.title}</h3>
                        <span className="text-xs text-green-600 dark:text-green-400 font-medium [font-family:'Almarai',Helvetica]">
                          {cat.count} {language === 'ar' ? (cat.count === 1 ? 'مجموعة' : 'مجموعات') : (cat.count === 1 ? 'group' : 'groups')}
                        </span>
                      </div>
                    </div>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{cat.desc}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-16" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <span className="text-green-700 font-bold text-sm [font-family:'Almarai',Helvetica]">
                  {language === 'ar' ? "المنظمات الطلابية" : "Student Organizations"}
                </span>
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? "انضم إلى مجتمعنا" : "Join Our Community"}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" dir={direction}>
            {activities.map((activity, index) => (
              <AnimatedSection key={index} delay={index * 0.08} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full overflow-hidden group bg-white dark:bg-neutral-800">
                  <div className="relative h-[200px] overflow-hidden">
                    <img src={activity.image} alt={activity.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2">
                      <span className="text-xs px-2.5 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full [font-family:'Almarai',Helvetica]">
                        <Users className="w-3 h-3 inline mr-1" />
                        {activity.members} {language === 'ar' ? 'عضو' : 'members'}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] mb-2 transition-colors duration-300">{activity.title}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{activity.desc}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-16" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <Calendar className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? "الفعاليات القادمة" : "Upcoming Events"}
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-lg mt-4 max-w-[600px] mx-auto [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? "لا تفوت الأنشطة والفعاليات القادمة" : "Don't miss upcoming activities and events"}
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5" dir={direction}>
            {upcomingEvents.map((event, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction={index % 2 === 0 ? "left" : "right"}>
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all bg-white dark:bg-neutral-900 overflow-hidden">
                  <CardContent className="p-6 flex items-center gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-green-50 dark:bg-green-900/20 flex flex-col items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-green-700 dark:text-green-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium [font-family:'Almarai',Helvetica] ${event.categoryColor}`}>
                          {event.category}
                        </span>
                      </div>
                      <h3 className="font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] mb-1 transition-colors duration-300">{event.title}</h3>
                      <div className="flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400 [font-family:'Almarai',Helvetica]">
                        <span>{event.date}</span>
                        <span>·</span>
                        <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{event.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-800 dark:bg-green-900 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center" dir={direction}>
              <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-white [font-family:'Almarai',Helvetica] mb-4">
                {language === 'ar' ? "شارك وانضم إلينا اليوم" : "Get Involved Today"}
              </h2>
              <p className="text-white/80 text-lg max-w-[600px] mx-auto mb-8 [font-family:'Almarai',Helvetica]">
                {language === 'ar'
                  ? "الحياة الطلابية في معاهد الوادي العليا أكثر من مجرد دراسة. انضم إلى نادٍ، أو قُد فريقاً، أو ابدأ مبادرتك الخاصة."
                  : "Student life at Valley Higher Institutes is more than academics. Join a club, lead a team, or start your own initiative."}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/student-affairs">
                  <button className="px-8 py-3 bg-white text-green-800 font-bold rounded-xl hover:bg-gray-100 transition-colors [font-family:'Almarai',Helvetica]">
                    {language === 'ar' ? "شؤون الطلاب" : "Student Affairs"}
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="px-8 py-3 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors border border-white/20 [font-family:'Almarai',Helvetica]">
                    {language === 'ar' ? "اتصل بنا" : "Contact Us"}
                  </button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
