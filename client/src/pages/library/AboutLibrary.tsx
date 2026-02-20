import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { BookOpen, Clock, MapPin, Users, BookMarked, Monitor, Coffee } from "lucide-react";

export default function AboutLibrary() {
  const { language, direction } = useLanguage();

  const pageTitle = language === 'ar' ? 'عن المكتبة' : 'About the Library';
  const pageSubtitle = language === 'ar'
    ? 'مركز المعرفة والتعلم في معاهد الوادي العليا'
    : 'The Knowledge and Learning Center at Valley Higher Institutes';

  const librarySections = [
    {
      icon: BookOpen,
      title: language === 'ar' ? 'المكتبة الفعلية' : 'Physical Library',
      desc: language === 'ar'
        ? 'تضم المكتبة أكثر من 50,000 كتاب ومرجع في مختلف التخصصات الهندسية والإدارية، مع تحديث مستمر للمجموعات.'
        : 'The library houses over 50,000 books and references across various engineering and management disciplines, with continuous collection updates.',
    },
    {
      icon: Monitor,
      title: language === 'ar' ? 'الموارد الرقمية' : 'Digital Resources',
      desc: language === 'ar'
        ? 'وصول مباشر إلى قواعد البيانات العلمية العالمية والمجلات الإلكترونية والكتب الرقمية على مدار الساعة.'
        : 'Direct access to global scientific databases, e-journals, and digital books available 24/7.',
    },
    {
      icon: Coffee,
      title: language === 'ar' ? 'قاعات القراءة' : 'Reading Rooms',
      desc: language === 'ar'
        ? 'قاعات مكيفة ومجهزة بأحدث وسائل الراحة تستوعب أكثر من 200 طالب في وقت واحد مع مناطق للدراسة الفردية والجماعية.'
        : 'Air-conditioned halls equipped with modern amenities accommodating over 200 students at once, with individual and group study areas.',
    },
  ];

  const libraryHours = [
    { day: language === 'ar' ? 'السبت - الأربعاء' : 'Saturday - Wednesday', hours: language === 'ar' ? '8:00 صباحاً - 8:00 مساءً' : '8:00 AM - 8:00 PM' },
    { day: language === 'ar' ? 'الخميس' : 'Thursday', hours: language === 'ar' ? '8:00 صباحاً - 4:00 مساءً' : '8:00 AM - 4:00 PM' },
    { day: language === 'ar' ? 'الجمعة' : 'Friday', hours: language === 'ar' ? 'مغلق' : 'Closed' },
    { day: language === 'ar' ? 'فترة الامتحانات' : 'Exam Period', hours: language === 'ar' ? '8:00 صباحاً - 10:00 مساءً' : '8:00 AM - 10:00 PM' },
  ];

  const staff = [
    {
      name: language === 'ar' ? 'أ. سمير عبد الحكيم' : 'Mr. Samir Abdel Hakim',
      role: language === 'ar' ? 'مدير المكتبة' : 'Library Director',
    },
    {
      name: language === 'ar' ? 'أ. هدى محمد علي' : 'Ms. Huda Mohamed Ali',
      role: language === 'ar' ? 'أمينة المكتبة الرقمية' : 'Digital Library Librarian',
    },
    {
      name: language === 'ar' ? 'أ. كريم حسن إبراهيم' : 'Mr. Karim Hassan Ibrahim',
      role: language === 'ar' ? 'أخصائي المراجع والدوريات' : 'References & Periodicals Specialist',
    },
    {
      name: language === 'ar' ? 'أ. نورهان أحمد سعيد' : 'Ms. Nourhan Ahmed Saeed',
      role: language === 'ar' ? 'مسؤولة خدمات الطلاب' : 'Student Services Officer',
    },
  ];

  const rules = [
    language === 'ar' ? 'الحفاظ على الهدوء داخل المكتبة وقاعات القراءة' : 'Maintain silence inside the library and reading rooms',
    language === 'ar' ? 'إبراز بطاقة الهوية الجامعية عند الدخول' : 'Present university ID card upon entry',
    language === 'ar' ? 'عدم إدخال الأطعمة والمشروبات إلى قاعات القراءة' : 'No food or beverages allowed in reading rooms',
    language === 'ar' ? 'إعادة الكتب المستعارة في الموعد المحدد' : 'Return borrowed books by the due date',
    language === 'ar' ? 'المحافظة على نظافة المكتبة والأثاث' : 'Keep the library and furniture clean',
    language === 'ar' ? 'عدم تصوير أو نسخ الكتب إلا بإذن مسبق' : 'No photographing or copying books without prior permission',
    language === 'ar' ? 'استخدام أجهزة الحاسب للأغراض الأكاديمية فقط' : 'Use computers for academic purposes only',
    language === 'ar' ? 'الالتزام بمواعيد العمل الرسمية للمكتبة' : 'Adhere to official library working hours',
  ];

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={pageTitle} description={pageSubtitle} />
      <Navbar />

      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" alt="Library" src="/figmaAssets/rectangle-2.png" />
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

      <Breadcrumb items={[
        { label: language === 'ar' ? 'الرئيسية' : 'Home', href: '/' },
        { label: language === 'ar' ? 'المكتبة' : 'Library', href: '/library' },
        { label: language === 'ar' ? 'عن المكتبة' : 'About Library' },
      ]} />

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
                {language === 'ar' ? 'نبذة عن المكتبة' : 'Library Overview'}
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Card className="rounded-3xl border-0 shadow-lg bg-white dark:bg-neutral-900">
              <CardContent className="p-8" dir={direction}>
                <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">
                  {language === 'ar'
                    ? 'تعد مكتبة معاهد الوادي العليا مركزاً حيوياً للمعرفة والبحث العلمي، حيث توفر بيئة تعليمية متكاملة تدعم الطلاب وأعضاء هيئة التدريس في رحلتهم الأكاديمية. تأسست المكتبة مع بداية إنشاء المعاهد وتطورت لتصبح واحدة من أفضل المكتبات الأكاديمية في المنطقة، مجهزة بأحدث التقنيات وأوسع المجموعات العلمية.'
                    : 'The Valley Higher Institutes Library is a vital center for knowledge and scientific research, providing an integrated educational environment that supports students and faculty in their academic journey. Established alongside the institutes, it has evolved to become one of the best academic libraries in the region, equipped with the latest technologies and the widest scientific collections.'}
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-16" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <BookMarked className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'أقسام المكتبة' : 'Library Sections'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" dir={direction}>
            {librarySections.map((section, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full text-center group bg-white dark:bg-neutral-800">
                  <CardContent className="p-6 flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center group-hover:bg-green-100 dark:group-hover:bg-green-900/40 transition-colors">
                      <section.icon className="w-8 h-8 text-green-700 dark:text-green-500" />
                    </div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{section.title}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{section.desc}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12" dir={direction}>
            <AnimatedSection direction={direction === 'rtl' ? "right" : "left"}>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-6 h-6 text-green-700" />
                  <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                    {language === 'ar' ? 'مواعيد العمل' : 'Working Hours'}
                  </h2>
                </div>
                <Card className="rounded-2xl border-0 shadow-sm bg-white dark:bg-neutral-900">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-3">
                      {libraryHours.map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-3 rounded-xl hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
                          <span className="text-neutral-700 dark:text-neutral-300 font-medium [font-family:'Almarai',Helvetica]">{item.day}</span>
                          <span className="text-green-700 dark:text-green-500 font-bold [font-family:'Almarai',Helvetica]">{item.hours}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
            <AnimatedSection direction={direction === 'rtl' ? "left" : "right"} delay={0.2}>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-6 h-6 text-green-700" />
                  <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                    {language === 'ar' ? 'الموقع' : 'Location'}
                  </h2>
                </div>
                <Card className="rounded-2xl border-0 shadow-sm bg-white dark:bg-neutral-900">
                  <CardContent className="p-6 flex flex-col gap-4">
                    <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">
                      {language === 'ar'
                        ? 'تقع المكتبة في المبنى الرئيسي لمعاهد الوادي العليا، الطابق الأرضي والأول، بجوار قاعة المؤتمرات الكبرى.'
                        : 'The library is located in the main building of Valley Higher Institutes, ground and first floors, adjacent to the Grand Conference Hall.'}
                    </p>
                    <div className="flex items-center gap-2 text-green-700 dark:text-green-500">
                      <MapPin className="w-5 h-5" />
                      <span className="text-sm font-medium [font-family:'Almarai',Helvetica]">
                        {language === 'ar' ? 'أوبور - القاهرة، مصر' : 'Obour - Cairo, Egypt'}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
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
                {language === 'ar' ? 'فريق المكتبة' : 'Library Staff'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" dir={direction}>
            {staff.map((member, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full text-center group bg-white dark:bg-neutral-800">
                  <CardContent className="p-6 flex flex-col items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center group-hover:bg-green-100 dark:group-hover:bg-green-900/40 transition-colors">
                      <Users className="w-10 h-10 text-green-700 dark:text-green-500" />
                    </div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{member.name}</h3>
                    <p className="text-green-700 dark:text-green-500 text-sm font-medium [font-family:'Almarai',Helvetica]">{member.role}</p>
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
                <BookOpen className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'قواعد وإرشادات المكتبة' : 'Library Rules & Guidelines'}
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Card className="rounded-3xl border-0 shadow-lg bg-white dark:bg-neutral-900">
              <CardContent className="p-8" dir={direction}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {rules.map((rule, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-xl hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
                      <BookOpen className="w-5 h-5 text-green-700 dark:text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-700 dark:text-neutral-300 [font-family:'Almarai',Helvetica] text-sm">{rule}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}