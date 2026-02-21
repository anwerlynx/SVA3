import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { PageHead } from "@/components/PageHead";
import { Breadcrumb } from "@/components/Breadcrumb";
import { useLanguage } from "@/context/LanguageContext";
import { Calendar, BookOpen, GraduationCap, Clock, AlertCircle, FileText, Users } from "lucide-react";

export default function AcademicCalendar() {
  const { language, direction } = useLanguage();
  const [activeSemester, setActiveSemester] = useState('first');
  const [apiEvents, setApiEvents] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/events')
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data)) {
          setApiEvents(data.filter((e: any) => e.status === 'published' && e.category === 'academic'));
        }
      })
      .catch(() => {});
  }, []);

  const pageTitle = language === 'ar' ? 'التقويم الأكاديمي' : 'Academic Calendar';
  const pageSubtitle = language === 'ar'
    ? 'المواعيد والأحداث الأكاديمية المهمة للعام الدراسي 2025/2026'
    : 'Important academic dates and events for the 2025/2026 academic year';

  const semesters = [
    { id: 'first', label: language === 'ar' ? 'الفصل الدراسي الأول' : 'First Semester' },
    { id: 'second', label: language === 'ar' ? 'الفصل الدراسي الثاني' : 'Second Semester' },
    { id: 'summer', label: language === 'ar' ? 'الفصل الصيفي' : 'Summer Semester' },
  ];

  const calendarEvents: Record<string, Array<{
    date: string;
    dateEn: string;
    titleAr: string;
    titleEn: string;
    type: 'registration' | 'academic' | 'exam' | 'holiday' | 'event';
    icon: typeof Calendar;
  }>> = {
    first: [
      { date: '١ سبتمبر ٢٠٢٥', dateEn: 'Sep 1, 2025', titleAr: 'بداية التسجيل للفصل الأول', titleEn: 'First Semester Registration Opens', type: 'registration', icon: FileText },
      { date: '١٥ سبتمبر ٢٠٢٥', dateEn: 'Sep 15, 2025', titleAr: 'بداية الدراسة - الفصل الأول', titleEn: 'First Semester Classes Begin', type: 'academic', icon: BookOpen },
      { date: '٢٩ سبتمبر ٢٠٢٥', dateEn: 'Sep 29, 2025', titleAr: 'آخر موعد للحذف والإضافة', titleEn: 'Last Day for Add/Drop', type: 'registration', icon: AlertCircle },
      { date: '٦ أكتوبر ٢٠٢٥', dateEn: 'Oct 6, 2025', titleAr: 'إجازة ٦ أكتوبر', titleEn: 'October 6th Holiday', type: 'holiday', icon: Calendar },
      { date: '١ نوفمبر ٢٠٢٥', dateEn: 'Nov 1, 2025', titleAr: 'امتحانات منتصف الفصل', titleEn: 'Midterm Examinations Begin', type: 'exam', icon: FileText },
      { date: '١٥ نوفمبر ٢٠٢٥', dateEn: 'Nov 15, 2025', titleAr: 'آخر موعد للانسحاب', titleEn: 'Last Day for Withdrawal', type: 'registration', icon: AlertCircle },
      { date: '٢٠ ديسمبر ٢٠٢٥', dateEn: 'Dec 20, 2025', titleAr: 'نهاية الدراسة - الفصل الأول', titleEn: 'Last Day of Classes', type: 'academic', icon: BookOpen },
      { date: '٢٥ ديسمبر ٢٠٢٥', dateEn: 'Dec 25, 2025', titleAr: 'بداية امتحانات نهاية الفصل', titleEn: 'Final Examinations Begin', type: 'exam', icon: FileText },
      { date: '١٠ يناير ٢٠٢٦', dateEn: 'Jan 10, 2026', titleAr: 'نهاية امتحانات الفصل الأول', titleEn: 'Final Examinations End', type: 'exam', icon: GraduationCap },
      { date: '١٥ يناير ٢٠٢٦', dateEn: 'Jan 15, 2026', titleAr: 'إعلان النتائج', titleEn: 'Results Announcement', type: 'event', icon: Users },
    ],
    second: [
      { date: '٢٠ يناير ٢٠٢٦', dateEn: 'Jan 20, 2026', titleAr: 'بداية التسجيل للفصل الثاني', titleEn: 'Second Semester Registration Opens', type: 'registration', icon: FileText },
      { date: '١ فبراير ٢٠٢٦', dateEn: 'Feb 1, 2026', titleAr: 'بداية الدراسة - الفصل الثاني', titleEn: 'Second Semester Classes Begin', type: 'academic', icon: BookOpen },
      { date: '١٥ فبراير ٢٠٢٦', dateEn: 'Feb 15, 2026', titleAr: 'آخر موعد للحذف والإضافة', titleEn: 'Last Day for Add/Drop', type: 'registration', icon: AlertCircle },
      { date: '٢٠ مارس ٢٠٢٦', dateEn: 'Mar 20, 2026', titleAr: 'امتحانات منتصف الفصل', titleEn: 'Midterm Examinations Begin', type: 'exam', icon: FileText },
      { date: '٢٥ أبريل ٢٠٢٦', dateEn: 'Apr 25, 2026', titleAr: 'عيد تحرير سيناء', titleEn: 'Sinai Liberation Day', type: 'holiday', icon: Calendar },
      { date: '١ مايو ٢٠٢٦', dateEn: 'May 1, 2026', titleAr: 'عيد العمال', titleEn: 'Labor Day Holiday', type: 'holiday', icon: Calendar },
      { date: '١٥ مايو ٢٠٢٦', dateEn: 'May 15, 2026', titleAr: 'نهاية الدراسة - الفصل الثاني', titleEn: 'Last Day of Classes', type: 'academic', icon: BookOpen },
      { date: '٢٠ مايو ٢٠٢٦', dateEn: 'May 20, 2026', titleAr: 'بداية امتحانات نهاية الفصل', titleEn: 'Final Examinations Begin', type: 'exam', icon: FileText },
      { date: '٥ يونيو ٢٠٢٦', dateEn: 'Jun 5, 2026', titleAr: 'نهاية امتحانات الفصل الثاني', titleEn: 'Final Examinations End', type: 'exam', icon: GraduationCap },
      { date: '١٥ يونيو ٢٠٢٦', dateEn: 'Jun 15, 2026', titleAr: 'إعلان النتائج وحفل التخرج', titleEn: 'Results & Graduation Ceremony', type: 'event', icon: Users },
    ],
    summer: [
      { date: '١ يوليو ٢٠٢٦', dateEn: 'Jul 1, 2026', titleAr: 'بداية التسجيل للفصل الصيفي', titleEn: 'Summer Registration Opens', type: 'registration', icon: FileText },
      { date: '١٠ يوليو ٢٠٢٦', dateEn: 'Jul 10, 2026', titleAr: 'بداية الدراسة الصيفية', titleEn: 'Summer Classes Begin', type: 'academic', icon: BookOpen },
      { date: '٢٣ يوليو ٢٠٢٦', dateEn: 'Jul 23, 2026', titleAr: 'عيد الثورة', titleEn: 'Revolution Day Holiday', type: 'holiday', icon: Calendar },
      { date: '١٥ أغسطس ٢٠٢٦', dateEn: 'Aug 15, 2026', titleAr: 'نهاية الدراسة الصيفية', titleEn: 'Last Day of Summer Classes', type: 'academic', icon: BookOpen },
      { date: '٢٠ أغسطس ٢٠٢٦', dateEn: 'Aug 20, 2026', titleAr: 'امتحانات الفصل الصيفي', titleEn: 'Summer Examinations', type: 'exam', icon: FileText },
      { date: '٣٠ أغسطس ٢٠٢٦', dateEn: 'Aug 30, 2026', titleAr: 'إعلان نتائج الفصل الصيفي', titleEn: 'Summer Results Announcement', type: 'event', icon: Users },
    ],
  };

  const typeColors: Record<string, { bg: string; dot: string; text: string }> = {
    registration: { bg: 'bg-blue-50 dark:bg-blue-900/20', dot: 'bg-blue-500', text: 'text-blue-700 dark:text-blue-400' },
    academic: { bg: 'bg-green-50 dark:bg-green-900/20', dot: 'bg-green-500', text: 'text-green-700 dark:text-green-400' },
    exam: { bg: 'bg-red-50 dark:bg-red-900/20', dot: 'bg-red-500', text: 'text-red-700 dark:text-red-400' },
    holiday: { bg: 'bg-amber-50 dark:bg-amber-900/20', dot: 'bg-amber-500', text: 'text-amber-700 dark:text-amber-400' },
    event: { bg: 'bg-purple-50 dark:bg-purple-900/20', dot: 'bg-purple-500', text: 'text-purple-700 dark:text-purple-400' },
  };

  const typeLabels: Record<string, { ar: string; en: string }> = {
    registration: { ar: 'تسجيل', en: 'Registration' },
    academic: { ar: 'أكاديمي', en: 'Academic' },
    exam: { ar: 'امتحانات', en: 'Exams' },
    holiday: { ar: 'إجازة', en: 'Holiday' },
    event: { ar: 'فعالية', en: 'Event' },
  };

  const currentEvents = calendarEvents[activeSemester] || [];

  const importantNotes = [
    { ar: 'قد تتغير المواعيد المذكورة وفقاً لقرارات المجلس الأعلى للجامعات', en: 'Dates may change according to Supreme Council of Universities decisions' },
    { ar: 'يجب على الطلاب متابعة لوحة الإعلانات بشكل دوري', en: 'Students must regularly check the notice board' },
    { ar: 'الالتزام بمواعيد التسجيل والحذف والإضافة إلزامي', en: 'Adherence to registration and add/drop deadlines is mandatory' },
    { ar: 'يمكن الاطلاع على جداول الامتحانات التفصيلية من شؤون الطلاب', en: 'Detailed exam schedules are available from Student Affairs' },
  ];

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={pageTitle} description={pageSubtitle} />
      <Navbar />

      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" alt="Academic Calendar" src="/figmaAssets/rectangle-2.png" />
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
            { label: language === 'ar' ? 'الأكاديمية' : 'Academic', href: '/academic' },
            { label: pageTitle },
          ]}
        />
      </div>

      <section className="py-10 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="flex flex-wrap items-center justify-center gap-3" dir={direction}>
              {semesters.map((sem) => (
                <button
                  key={sem.id}
                  onClick={() => setActiveSemester(sem.id)}
                  className={`px-6 py-3 rounded-xl text-sm font-bold [font-family:'Almarai',Helvetica] transition-all ${
                    activeSemester === sem.id
                      ? 'bg-green-700 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-green-50 dark:hover:bg-green-900/20'
                  }`}
                >
                  {sem.label}
                </button>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-6" dir={direction}>
              {Object.entries(typeLabels).map(([key, val]) => (
                <div key={key} className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${typeColors[key].dot}`} />
                  <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 [font-family:'Almarai',Helvetica]">
                    {language === 'ar' ? val.ar : val.en}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[900px] mx-auto px-4 md:px-8">
          <div className="relative" dir={direction}>
            <div className={`absolute top-0 bottom-0 ${direction === 'rtl' ? 'right-6' : 'left-6'} w-0.5 bg-green-200 dark:bg-green-900/40`} />

            {currentEvents.map((event, index) => {
              const colors = typeColors[event.type];
              const Icon = event.icon;
              return (
                <AnimatedSection key={index} delay={index * 0.05} direction={direction === 'rtl' ? 'right' : 'left'}>
                  <div className={`relative flex items-start gap-5 mb-6 ${direction === 'rtl' ? 'pr-0' : 'pl-0'}`}>
                    <div className={`relative z-10 w-12 h-12 rounded-full ${colors.bg} flex items-center justify-center shrink-0 border-4 border-white dark:border-neutral-900`}>
                      <Icon className={`w-5 h-5 ${colors.text}`} />
                    </div>
                    <Card className="flex-1 rounded-2xl border-0 shadow-sm hover:shadow-md transition-all bg-white dark:bg-neutral-800">
                      <CardContent className="p-5">
                        <div className="flex items-start justify-between gap-3 flex-wrap">
                          <div>
                            <h3 className="font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] text-base mb-1">
                              {language === 'ar' ? event.titleAr : event.titleEn}
                            </h3>
                            <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full ${colors.bg} ${colors.text} [font-family:'Almarai',Helvetica]`}>
                              {language === 'ar' ? typeLabels[event.type].ar : typeLabels[event.type].en}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <Clock className="w-4 h-4 text-neutral-400" />
                            <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400 [font-family:'Almarai',Helvetica]">
                              {language === 'ar' ? event.date : event.dateEn}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {apiEvents.length > 0 && (
        <section className="py-12 md:py-16 bg-white dark:bg-neutral-950 transition-colors duration-300">
          <div className="max-w-[900px] mx-auto px-4 md:px-8">
            <AnimatedSection>
              <div className="text-center mb-10" dir={direction}>
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                  {language === 'ar' ? 'فعاليات أكاديمية إضافية' : 'Additional Academic Events'}
                </h3>
              </div>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4" dir={direction}>
              {apiEvents.map((event, index) => (
                <AnimatedSection key={event.id || index} delay={index * 0.05} direction="up">
                  <Card className="rounded-2xl border-0 shadow-sm hover:shadow-md transition-all bg-white dark:bg-neutral-800">
                    <CardContent className="p-5 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center shrink-0">
                        <Calendar className="w-5 h-5 text-green-700 dark:text-green-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] text-sm mb-1">
                          {language === 'ar' ? (event.titleAr || event.title) : (event.titleEn || event.titleAr || event.title)}
                        </h4>
                        {event.date && (
                          <span className="text-xs text-neutral-500 dark:text-neutral-400 [font-family:'Almarai',Helvetica]">
                            {new Date(event.date).toLocaleDateString(language === 'ar' ? 'ar-EG' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 md:py-20 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[900px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <Card className="rounded-3xl border-0 shadow-md bg-amber-50 dark:bg-amber-900/10 overflow-hidden">
              <CardContent className="p-8 md:p-10" dir={direction}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold text-amber-800 dark:text-amber-300 [font-family:'Almarai',Helvetica]">
                    {language === 'ar' ? 'ملاحظات هامة' : 'Important Notes'}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {importantNotes.map((note, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
                      <span className="text-amber-800 dark:text-amber-200 [font-family:'Almarai',Helvetica] text-sm leading-relaxed">
                        {language === 'ar' ? note.ar : note.en}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
