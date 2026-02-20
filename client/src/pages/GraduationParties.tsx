import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { GraduationCap, Calendar, Camera, Star, Award, MapPin, ArrowRight } from "lucide-react";

export default function GraduationParties() {
  const { language, direction } = useLanguage();

  const pageTitle = language === 'ar' ? 'حفلات التخرج' : 'Graduation Parties';
  const pageSubtitle = language === 'ar'
    ? 'نحتفل بإنجازات طلابنا ونكرم تفوقهم الأكاديمي'
    : 'Celebrating our students\' achievements and honoring their academic excellence';

  const upcomingCeremony = {
    date: language === 'ar' ? '15 يوليو 2026' : 'July 15, 2026',
    time: language === 'ar' ? '5:00 مساءً' : '5:00 PM',
    venue: language === 'ar' ? 'القاعة الكبرى - معاهد الوادي العليا' : 'Grand Hall - Valley Higher Institutes',
    dressCode: language === 'ar' ? 'الروب الأكاديمي الرسمي والقبعة الأكاديمية' : 'Official academic gown and graduation cap',
  };

  const pastCeremonies = [
    { id: 1, title: language === 'ar' ? 'حفل تخرج دفعة 2025' : 'Class of 2025 Graduation' },
    { id: 2, title: language === 'ar' ? 'حفل تخرج دفعة 2024' : 'Class of 2024 Graduation' },
    { id: 3, title: language === 'ar' ? 'حفل تخرج دفعة 2023' : 'Class of 2023 Graduation' },
    { id: 4, title: language === 'ar' ? 'حفل تكريم المتفوقين 2025' : 'Honors Ceremony 2025' },
    { id: 5, title: language === 'ar' ? 'حفل تكريم المتفوقين 2024' : 'Honors Ceremony 2024' },
    { id: 6, title: language === 'ar' ? 'الاحتفال السنوي بالخريجين' : 'Annual Alumni Celebration' },
  ];

  const ceremonyProgram = [
    {
      time: language === 'ar' ? '4:30 مساءً' : '4:30 PM',
      title: language === 'ar' ? 'استقبال الخريجين وذويهم' : 'Reception of Graduates and Families',
      desc: language === 'ar' ? 'استقبال الخريجين وعائلاتهم في بهو القاعة الكبرى وتوزيع بطاقات الجلوس.' : 'Welcoming graduates and their families at the Grand Hall lobby and distributing seating cards.',
    },
    {
      time: language === 'ar' ? '5:00 مساءً' : '5:00 PM',
      title: language === 'ar' ? 'بدء الحفل والنشيد الوطني' : 'Ceremony Opening & National Anthem',
      desc: language === 'ar' ? 'افتتاح الحفل رسمياً بالنشيد الوطني وتلاوة القرآن الكريم.' : 'Official opening of the ceremony with the national anthem and Quran recitation.',
    },
    {
      time: language === 'ar' ? '5:30 مساءً' : '5:30 PM',
      title: language === 'ar' ? 'كلمة رئيس مجلس الإدارة' : 'Chairman\'s Address',
      desc: language === 'ar' ? 'كلمة رئيس مجلس الإدارة وعميد المعهد للخريجين وتهنئتهم بالنجاح.' : 'Chairman and Dean address to graduates with congratulatory remarks.',
    },
    {
      time: language === 'ar' ? '6:00 مساءً' : '6:00 PM',
      title: language === 'ar' ? 'تسليم الشهادات والتكريم' : 'Certificate Distribution & Honors',
      desc: language === 'ar' ? 'تسليم شهادات التخرج وتكريم الطلاب المتفوقين والأوائل على كل قسم.' : 'Distribution of graduation certificates and honoring top students from each department.',
    },
    {
      time: language === 'ar' ? '7:00 مساءً' : '7:00 PM',
      title: language === 'ar' ? 'حفل العشاء والتصوير' : 'Dinner Reception & Photography',
      desc: language === 'ar' ? 'حفل عشاء للخريجين وذويهم مع جلسات تصوير تذكارية.' : 'Dinner reception for graduates and families with commemorative photo sessions.',
    },
  ];

  const distinguishedGraduates = [
    {
      name: language === 'ar' ? 'أحمد محمد عبد الله' : 'Ahmed Mohamed Abdullah',
      department: language === 'ar' ? 'قسم الهندسة المعمارية' : 'Architecture Department',
      achievement: language === 'ar' ? 'الأول على القسم - تقدير امتياز مع مرتبة الشرف' : 'Top of Department - Distinction with Honors',
    },
    {
      name: language === 'ar' ? 'سارة خالد حسن' : 'Sara Khaled Hassan',
      department: language === 'ar' ? 'قسم إدارة الأعمال' : 'Business Administration Department',
      achievement: language === 'ar' ? 'الأولى على القسم - تقدير امتياز' : 'Top of Department - Distinction',
    },
    {
      name: language === 'ar' ? 'يوسف أحمد السيد' : 'Youssef Ahmed El-Sayed',
      department: language === 'ar' ? 'قسم هندسة الحاسب' : 'Computer Engineering Department',
      achievement: language === 'ar' ? 'أفضل مشروع تخرج - جائزة التميز' : 'Best Graduation Project - Excellence Award',
    },
    {
      name: language === 'ar' ? 'نور محمد إبراهيم' : 'Nour Mohamed Ibrahim',
      department: language === 'ar' ? 'قسم المحاسبة' : 'Accounting Department',
      achievement: language === 'ar' ? 'الأولى على الدفعة - تقدير امتياز مع مرتبة الشرف' : 'Top of Class - Distinction with Honors',
    },
  ];

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={pageTitle} description={pageSubtitle} />
      <Navbar />

      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" alt="Graduation Parties" src="/figmaAssets/rectangle-2.png" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        </div>
        <div className="relative z-10 text-center px-4">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold text-white [font-family:'Almarai',Helvetica] mb-4" dir={direction}>
              {pageTitle}
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-[600px] mx-auto [font-family:'Almarai',Helvetica]" dir={direction}>
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

      <section className="py-20 md:py-24 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <GraduationCap className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'عن حفلات التخرج' : 'About Graduation Ceremonies'}
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Card className="rounded-3xl border-0 shadow-lg bg-white dark:bg-neutral-900">
              <CardContent className="p-8" dir={direction}>
                <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">
                  {language === 'ar'
                    ? 'تعتبر حفلات التخرج في معاهد الوادي العليا من أبرز المناسبات السنوية التي نحتفي فيها بإنجازات طلابنا المتميزين. نحرص على تنظيم حفلات تليق بمستوى خريجينا وتعكس قيم التميز والابتكار التي تتبناها مؤسستنا. تتضمن الاحتفالات تسليم الشهادات وتكريم المتفوقين وأوائل الأقسام في أجواء أكاديمية رسمية تجمع بين الفخر والبهجة.'
                    : 'Graduation ceremonies at Valley Higher Institutes are among the most prominent annual occasions where we celebrate the achievements of our distinguished students. We ensure that our ceremonies reflect the values of excellence and innovation that our institution embraces. The celebrations include certificate distribution, honoring top students and department leaders in a formal academic atmosphere that combines pride and joy.'}
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <Calendar className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'الحفل القادم' : 'Upcoming Ceremony'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" dir={direction}>
            {[
              { icon: Calendar, label: language === 'ar' ? 'التاريخ' : 'Date', value: upcomingCeremony.date },
              { icon: Calendar, label: language === 'ar' ? 'الوقت' : 'Time', value: upcomingCeremony.time },
              { icon: MapPin, label: language === 'ar' ? 'المكان' : 'Venue', value: upcomingCeremony.venue },
              { icon: GraduationCap, label: language === 'ar' ? 'الزي الرسمي' : 'Dress Code', value: upcomingCeremony.dressCode },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full text-center bg-white dark:bg-neutral-800">
                  <CardContent className="p-6 flex flex-col items-center gap-3">
                    <div className="w-14 h-14 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center">
                      <item.icon className="w-7 h-7 text-green-700 dark:text-green-500" />
                    </div>
                    <h3 className="font-bold text-sm text-neutral-500 dark:text-neutral-400 [font-family:'Almarai',Helvetica] transition-colors duration-300">{item.label}</h3>
                    <p className="text-neutral-900 dark:text-white font-bold text-sm [font-family:'Almarai',Helvetica] transition-colors duration-300">{item.value}</p>
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
                <Camera className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'حفلات سابقة' : 'Past Ceremonies'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" dir={direction}>
            {pastCeremonies.map((ceremony, index) => (
              <AnimatedSection key={ceremony.id} delay={index * 0.05} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full group bg-white dark:bg-neutral-900 overflow-hidden">
                  <div className="aspect-[4/3] bg-green-50 dark:bg-green-900/20 flex items-center justify-center group-hover:bg-green-100 dark:group-hover:bg-green-900/40 transition-colors">
                    <Camera className="w-12 h-12 text-green-300 dark:text-green-700" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-sm text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300 text-center" dir={direction}>
                      {ceremony.title}
                    </h3>
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
                <Star className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'برنامج الحفل' : 'Ceremony Program'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="flex flex-col gap-6" dir={direction}>
            {ceremonyProgram.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction={direction === 'rtl' ? "right" : "left"}>
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-neutral-800">
                  <CardContent className="p-6 flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-green-700 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xs [font-family:'Almarai',Helvetica]">{item.time}</span>
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

      <section className="py-20 md:py-24 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-16" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <Award className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'الخريجون المتميزون' : 'Distinguished Graduates'}
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-lg mt-4 [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'نفخر بتكريم أوائل الخريجين والمتفوقين في كل دفعة' : 'We are proud to honor top graduates and outstanding students in every class'}
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" dir={direction}>
            {distinguishedGraduates.map((graduate, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-xl transition-all duration-300 h-full text-center group bg-white dark:bg-neutral-900 hover:-translate-y-1">
                  <CardContent className="p-6 flex flex-col items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center group-hover:bg-green-100 dark:group-hover:bg-green-900/40 transition-colors">
                      <GraduationCap className="w-10 h-10 text-green-700 dark:text-green-500" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{graduate.name}</h3>
                      <p className="text-green-700 dark:text-green-500 text-sm font-medium [font-family:'Almarai',Helvetica]">{graduate.department}</p>
                      <p className="text-neutral-500 dark:text-neutral-400 text-xs [font-family:'Almarai',Helvetica] transition-colors duration-300">{graduate.achievement}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
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
              <GraduationCap className="w-16 h-16 text-white/80" />
              <h2 className="text-3xl md:text-4xl font-bold text-white [font-family:'Almarai',Helvetica]">
                {language === 'ar' ? 'سجل حضورك الآن' : 'Register Your Attendance Now'}
              </h2>
              <p className="text-white/80 text-lg max-w-[500px] [font-family:'Almarai',Helvetica]">
                {language === 'ar'
                  ? 'سجل حضورك لحفل التخرج القادم واحتفل مع زملائك بهذه اللحظة المميزة.'
                  : 'Register your attendance for the upcoming graduation ceremony and celebrate this special moment with your colleagues.'}
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