import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { Palette, Music, Camera, Theater, Users, ArrowRight, Image, Target } from "lucide-react";

export default function ArtsCommittee() {
  const { language, direction } = useLanguage();

  const pageTitle = language === 'ar' ? 'لجنة النشاط الفني' : 'Arts Committee';
  const pageSubtitle = language === 'ar'
    ? 'إطلاق الإبداع الفني وتنمية المواهب الطلابية'
    : 'Unleashing artistic creativity and developing student talents';

  const objectives = [
    language === 'ar' ? 'اكتشاف المواهب الفنية لدى الطلاب وصقلها' : 'Discover and refine artistic talents among students',
    language === 'ar' ? 'تنظيم المعارض والحفلات الفنية' : 'Organize art exhibitions and artistic performances',
    language === 'ar' ? 'تعزيز التذوق الفني والجمالي' : 'Enhance artistic and aesthetic appreciation',
    language === 'ar' ? 'تنمية مهارات التعبير الفني بأشكاله المختلفة' : 'Develop artistic expression skills in various forms',
    language === 'ar' ? 'المشاركة في المهرجانات الفنية المحلية والدولية' : 'Participate in local and international art festivals',
    language === 'ar' ? 'توفير ورش عمل وتدريب فني متخصص' : 'Provide specialized art workshops and training',
  ];

  const artForms = [
    {
      title: language === 'ar' ? 'المسرح' : 'Theater',
      desc: language === 'ar' ? 'فرقة مسرحية تقدم عروضاً درامية وكوميدية تعالج قضايا المجتمع والشباب' : 'Theater troupe presenting dramatic and comedic shows addressing community and youth issues',
      icon: Theater,
    },
    {
      title: language === 'ar' ? 'الموسيقى والغناء' : 'Music & Singing',
      desc: language === 'ar' ? 'فرقة موسيقية وكورال طلابي يقدمان الألحان الشرقية والغربية' : 'Musical band and student choir performing Eastern and Western melodies',
      icon: Music,
    },
    {
      title: language === 'ar' ? 'الفنون البصرية' : 'Visual Arts',
      desc: language === 'ar' ? 'الرسم والنحت والتصميم الجرافيكي والفنون التشكيلية المعاصرة' : 'Painting, sculpture, graphic design, and contemporary fine arts',
      icon: Palette,
    },
    {
      title: language === 'ar' ? 'التصوير الفوتوغرافي' : 'Photography',
      desc: language === 'ar' ? 'تعلم أساسيات التصوير والتحرير والمشاركة في معارض الصور' : 'Learn photography basics, editing, and participate in photo exhibitions',
      icon: Camera,
    },
  ];

  const galleryItems = [
    {
      title: language === 'ar' ? 'معرض الفنون التشكيلية السنوي' : 'Annual Fine Arts Exhibition',
      date: language === 'ar' ? 'ديسمبر 2025' : 'December 2025',
      desc: language === 'ar' ? 'عرض أعمال فنية متنوعة لطلاب المعهد تشمل اللوحات والمنحوتات' : 'Display of diverse artworks by institute students including paintings and sculptures',
    },
    {
      title: language === 'ar' ? 'حفل الموسيقى الربيعي' : 'Spring Music Concert',
      date: language === 'ar' ? 'مارس 2026' : 'March 2026',
      desc: language === 'ar' ? 'حفل موسيقي سنوي يجمع الفرقة الموسيقية والكورال في عرض استثنائي' : 'Annual music concert bringing together the band and choir in an exceptional performance',
    },
    {
      title: language === 'ar' ? 'مهرجان المسرح الجامعي' : 'University Theater Festival',
      date: language === 'ar' ? 'نوفمبر 2025' : 'November 2025',
      desc: language === 'ar' ? 'مهرجان مسرحي بمشاركة فرق من معاهد وجامعات مختلفة' : 'Theater festival with participation from different institutes and universities',
    },
    {
      title: language === 'ar' ? 'معرض التصوير الفوتوغرافي' : 'Photography Exhibition',
      date: language === 'ar' ? 'أكتوبر 2025' : 'October 2025',
      desc: language === 'ar' ? 'معرض صور فوتوغرافية بعنوان "مصر من عيون الشباب"' : 'Photo exhibition titled "Egypt Through the Eyes of Youth"',
    },
  ];

  const members = [
    {
      name: language === 'ar' ? 'أ. خالد محمود' : 'Mr. Khaled Mahmoud',
      role: language === 'ar' ? 'مشرف اللجنة' : 'Committee Supervisor',
    },
    {
      name: language === 'ar' ? 'أ. نادية فؤاد' : 'Ms. Nadia Fouad',
      role: language === 'ar' ? 'مدرب المسرح' : 'Theater Coach',
    },
    {
      name: language === 'ar' ? 'أحمد يوسف' : 'Ahmed Youssef',
      role: language === 'ar' ? 'رئيس اللجنة (طالب)' : 'Committee Chair (Student)',
    },
    {
      name: language === 'ar' ? 'مريم عبد الله' : 'Mariam Abdullah',
      role: language === 'ar' ? 'منسق الفنون البصرية' : 'Visual Arts Coordinator',
    },
  ];

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={pageTitle} description={pageSubtitle} />
      <Navbar />

      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" alt="Arts Committee" src="/figmaAssets/rectangle-2.png" />
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
                      <Palette className="w-5 h-5 text-green-700 dark:text-green-500 mt-0.5 flex-shrink-0" />
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
                <Palette className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'المجالات الفنية' : 'Art Forms'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" dir={direction}>
            {artForms.map((art, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-xl transition-all duration-300 h-full text-center group bg-white dark:bg-neutral-800 hover:-translate-y-1">
                  <CardContent className="p-6 flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center group-hover:bg-green-100 dark:group-hover:bg-green-900/40 transition-colors">
                      <art.icon className="w-8 h-8 text-green-700 dark:text-green-500" />
                    </div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{art.title}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm [font-family:'Almarai',Helvetica] transition-colors duration-300">{art.desc}</p>
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
                <Image className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'المعارض والعروض' : 'Gallery & Exhibitions'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="flex flex-col gap-6" dir={direction}>
            {galleryItems.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction={direction === 'rtl' ? "right" : "left"}>
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-neutral-900">
                  <CardContent className="p-6 flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center flex-shrink-0">
                      <Image className="w-6 h-6 text-green-700 dark:text-green-500" />
                    </div>
                    <div className="flex flex-col gap-1.5 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{item.title}</h3>
                        <span className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-500 px-3 py-1 rounded-full text-xs font-bold [font-family:'Almarai',Helvetica]">{item.date}</span>
                      </div>
                      <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{item.desc}</p>
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
              <Palette className="w-16 h-16 text-white/80" />
              <h2 className="text-3xl md:text-4xl font-bold text-white [font-family:'Almarai',Helvetica]">
                {language === 'ar' ? 'أطلق إبداعك الفني' : 'Unleash Your Artistic Creativity'}
              </h2>
              <p className="text-white/80 text-lg max-w-[500px] [font-family:'Almarai',Helvetica]">
                {language === 'ar'
                  ? 'انضم إلى لجنة النشاط الفني واكتشف موهبتك في المسرح والموسيقى والفنون البصرية والتصوير.'
                  : 'Join the Arts Committee and discover your talent in theater, music, visual arts, and photography.'}
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