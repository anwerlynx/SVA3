import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Cpu, Building2, Zap, Radio, BarChart3, Database, Briefcase, Calculator, ArrowRight, Loader2, BookOpen, Calendar } from "lucide-react";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { Link } from "wouter";
import { useState, useEffect } from "react";

const iconMap: Record<string, React.ElementType> = {
  building: Building2,
  zap: Zap,
  home: Cpu,
  radio: Radio,
  calculator: Calculator,
  briefcase: Briefcase,
  database: Database,
  barChart: BarChart3,
};

interface Department {
  id: string;
  nameAr: string;
  nameEn: string;
  institute: string;
  slug: string;
  descriptionAr: string | null;
  descriptionEn: string | null;
  iconName: string | null;
  sortOrder: number | null;
}

function DepartmentCard({ dept, index, institute }: { dept: { icon: React.ElementType; name: string; desc: string; href: string }; index: number; institute: string }) {
  const accentClass = institute === 'engineering'
    ? 'bg-blue-50 dark:bg-blue-900/20 group-hover:bg-blue-700 dark:group-hover:bg-blue-600'
    : 'bg-green-50 dark:bg-green-900/20 group-hover:bg-green-700 dark:group-hover:bg-green-600';
  const iconClass = institute === 'engineering'
    ? 'text-blue-700 dark:text-blue-500 group-hover:text-white'
    : 'text-green-700 dark:text-green-500 group-hover:text-white';

  return (
    <AnimatedSection delay={index * 0.1} direction="up">
      <Link href={dept.href}>
        <Card className="rounded-2xl border-0 shadow-sm hover:shadow-xl transition-shadow cursor-pointer h-full group bg-white dark:bg-neutral-900">
          <CardContent className="p-6 flex flex-col items-center text-center gap-4">
            <div className={`w-16 h-16 rounded-2xl ${accentClass} flex items-center justify-center transition-all`}>
              <dept.icon className={`w-8 h-8 ${iconClass} transition-colors`} />
            </div>
            <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{dept.name}</h3>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{dept.desc}</p>
          </CardContent>
        </Card>
      </Link>
    </AnimatedSection>
  );
}

function EventCard({ event, index, language, direction }: { event: Event; index: number; language: string; direction: string }) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (language === 'ar') {
      return date.toLocaleDateString('ar-SA', { year: 'numeric', month: 'long', day: 'numeric' });
    }
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const title = language === 'ar' ? event.titleAr : (event.titleEn || event.titleAr);
  const fallbackGradient = 'linear-gradient(135deg, rgb(34, 197, 94) 0%, rgb(22, 163, 74) 100%)';

  return (
    <AnimatedSection delay={index * 0.1} direction="up">
      <Card className="rounded-2xl border-0 shadow-sm hover:shadow-xl transition-shadow cursor-pointer overflow-hidden h-full bg-white dark:bg-neutral-900 group">
        <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-neutral-800">
          {event.coverImage ? (
            <img 
              src={event.coverImage} 
              alt={title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div 
              className="w-full h-full group-hover:scale-105 transition-transform duration-300"
              style={{ background: fallbackGradient }}
            />
          )}
          <div className="absolute top-3 right-3 left-3 flex justify-between items-start">
            <span className="bg-green-700 text-white text-xs font-bold px-3 py-1 rounded-full [font-family:'Almarai',Helvetica]">
              {event.category}
            </span>
          </div>
        </div>
        <CardContent className="p-5 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-green-700 dark:text-green-500 text-sm">
            <Calendar className="w-4 h-4 flex-shrink-0" />
            <span className="[font-family:'Almarai',Helvetica]">{formatDate(event.startDate)}</span>
          </div>
          <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] line-clamp-2 transition-colors duration-300">
            {title}
          </h3>
          <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 text-sm">
            <span className="w-1 h-1 bg-green-700 dark:bg-green-500 rounded-full flex-shrink-0" />
            <span className="[font-family:'Almarai',Helvetica] line-clamp-1">{event.location}</span>
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
}

interface Event {
  id: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  startDate: string;
  endDate: string;
  location: string;
  institute: string;
  category: string;
  coverImage: string | null;
  status: string;
  isFeatured: boolean;
  createdAt: string;
}

export default function Academic() {
  const { t, direction, language } = useLanguage();
  const [departments, setDepartments] = useState<Department[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("/api/departments").then(res => res.json()),
      fetch("/api/events").then(res => res.json())
    ])
      .then(([deptData, eventData]) => {
        setDepartments(Array.isArray(deptData) ? deptData : []);
        setEvents(Array.isArray(eventData) ? eventData : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const engineeringDepts = departments
    .filter(d => d.institute === 'engineering')
    .sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0))
    .map(d => ({
      icon: iconMap[d.iconName || ''] || BookOpen,
      name: language === 'ar' ? d.nameAr : d.nameEn,
      desc: language === 'ar' ? (d.descriptionAr || '') : (d.descriptionEn || ''),
      href: `/institute/engineering/department/${d.slug}`,
    }));

  const managementDepts = departments
    .filter(d => d.institute === 'management')
    .sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0))
    .map(d => ({
      icon: iconMap[d.iconName || ''] || BookOpen,
      name: language === 'ar' ? d.nameAr : d.nameEn,
      desc: language === 'ar' ? (d.descriptionAr || '') : (d.descriptionEn || ''),
      href: `/institute/management/department/${d.slug}`,
    }));

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead
        title={language === 'ar' ? "البرامج الأكاديمية" : "Academic Programs"}
        description={language === 'ar' ? "البرامج والتخصصات الأكاديمية في معاهد الوادي العليا" : "Academic programs and specializations at Valley Higher Institutes"}
      />
      <Navbar />

      <section className="relative w-full h-[50vh] min-h-[350px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" alt="Academic" src="/figmaAssets/rectangle-17.png" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        </div>
        <div className="relative z-10 text-center px-4">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold text-white [font-family:'Almarai',Helvetica] mb-4" dir={direction}>
              {language === 'ar' ? "الأقسام الأكاديمية" : "Academic Departments"}
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-[600px] mx-auto [font-family:'Almarai',Helvetica]" dir={direction}>
              {language === 'ar' ? "برامج أكاديمية متنوعة تلبي تطلعاتك المهنية" : "Diverse academic programs that meet your professional aspirations"}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 pt-6">
        <Breadcrumb
          items={[
            { label: language === 'ar' ? 'الرئيسية' : 'Home', href: '/' },
            { label: language === 'ar' ? 'الأقسام الأكاديمية' : 'Academic Departments' },
          ]}
        />
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-32">
          <Loader2 className="w-8 h-8 animate-spin text-green-700" />
        </div>
      ) : (
        <section className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8">

            <AnimatedSection>
              <div className="flex flex-col md:flex-row items-start gap-8 mb-12" dir={direction}>
                <div className="relative rounded-3xl overflow-hidden w-full md:w-1/2 h-[300px] md:h-[400px]">
                  <img className="w-full h-full object-cover" alt="Engineering" src="/figmaAssets/rectangle-17.png" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white [font-family:'Almarai',Helvetica]" dir={direction}>
                      {language === 'ar' ? "المعهد العالي للهندسة والتكنولوجيا" : "Higher Institute of Engineering & Technology"}
                    </h2>
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-4 justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-1 bg-blue-700 rounded-full" />
                    <span className="text-blue-700 font-bold text-sm [font-family:'Almarai',Helvetica]">
                      {language === 'ar' ? "معهد الهندسة" : "Engineering Institute"}
                    </span>
                  </div>
                  <p className="text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">
                    {language === 'ar'
                      ? "يقدم المعهد العالي للهندسة والتكنولوجيا برامج أكاديمية متميزة تهدف إلى إعداد مهندسين مؤهلين قادرين على مواجهة تحديات العصر الحديث. يضم المعهد عدة أقسام تغطي مختلف التخصصات الهندسية."
                      : "The Higher Institute of Engineering and Technology offers distinguished academic programs aimed at preparing qualified engineers capable of facing the challenges of the modern era. The institute includes several departments covering various engineering specializations."}
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20" dir={direction}>
              {engineeringDepts.map((dept, index) => (
                <DepartmentCard key={index} dept={dept} index={index} institute="engineering" />
              ))}
            </div>

            <AnimatedSection>
              <div className="flex flex-col md:flex-row-reverse items-start gap-8 mb-12" dir={direction}>
                <div className="relative rounded-3xl overflow-hidden w-full md:w-1/2 h-[300px] md:h-[400px]">
                  <img className="w-full h-full object-cover" alt="Management" src="/figmaAssets/rectangle-16.png" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white [font-family:'Almarai',Helvetica]" dir={direction}>
                      {language === 'ar' ? "المعهد العالي للإدارة والمالية ونظم المعلومات" : "Higher Institute of Management, Finance & MIS"}
                    </h2>
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-4 justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-1 bg-green-700 rounded-full" />
                    <span className="text-green-700 font-bold text-sm [font-family:'Almarai',Helvetica]">
                      {language === 'ar' ? "معهد الإدارة" : "Management Institute"}
                    </span>
                  </div>
                  <p className="text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">
                    {language === 'ar'
                      ? "يهدف المعهد العالي للإدارة والمالية ونظم المعلومات إلى تخريج كوادر متميزة في مجالات الإدارة والأعمال والعلوم المالية ونظم المعلومات، مع التركيز على المهارات العملية والتطبيقية."
                      : "The Higher Institute of Management, Finance and Information Systems aims to graduate distinguished cadres in the fields of management, business, financial sciences and information systems, with a focus on practical and applied skills."}
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" dir={direction}>
              {managementDepts.map((dept, index) => (
                <DepartmentCard key={index} dept={dept} index={index} institute="management" />
              ))}
            </div>

            <div className="mt-32 pt-20 border-t border-neutral-200 dark:border-neutral-800">
              <AnimatedSection>
                <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4" dir={direction}>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] mb-2">
                      {language === 'ar' ? "الفعاليات القادمة" : "Upcoming Events"}
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400 [font-family:'Almarai',Helvetica]">
                      {language === 'ar' ? "تابع أحدث الفعاليات والأنشطة الأكاديمية" : "Stay updated with our latest academic events and activities"}
                    </p>
                  </div>
                  <Link href="/academic-calendar">
                    <span className="inline-flex items-center gap-2 px-6 py-3 border-2 border-green-700 text-green-700 rounded-2xl font-bold hover:bg-green-700 hover:text-white transition-all cursor-pointer [font-family:'Almarai',Helvetica] whitespace-nowrap">
                      {language === 'ar' ? "عرض الكل" : "View All"}
                      <ArrowRight className={`w-5 h-5 ${direction === 'rtl' ? 'rotate-180' : ''}`} />
                    </span>
                  </Link>
                </div>
              </AnimatedSection>

              {events.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6" dir={direction}>
                  {events.slice(0, 6).map((event, index) => (
                    <EventCard key={event.id} event={event} index={index} language={language} direction={direction} />
                  ))}
                </div>
              ) : (
                <AnimatedSection>
                  <div className="text-center py-12">
                    <p className="text-neutral-500 dark:text-neutral-400 text-lg [font-family:'Almarai',Helvetica]">
                      {language === 'ar' ? "لا توجد فعاليات قادمة حالياً" : "No upcoming events at the moment"}
                    </p>
                  </div>
                </AnimatedSection>
              )}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-green-700 dark:bg-green-800 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center" dir={direction}>
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white [font-family:'Almarai',Helvetica] mb-4">
              {language === 'ar' ? "استكشف معاهدنا" : "Explore Our Institutes"}
            </h2>
            <p className="text-white/80 text-lg max-w-[600px] mx-auto [font-family:'Almarai',Helvetica] mb-10">
              {language === 'ar' ? "تعرف على المزيد حول برامجنا الأكاديمية وخدماتنا المتميزة" : "Learn more about our academic programs and distinguished services"}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/institute/engineering">
                <span className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-700 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-colors cursor-pointer [font-family:'Almarai',Helvetica]">
                  {language === 'ar' ? "معهد الهندسة والتكنولوجيا" : "Engineering Institute"}
                  <ArrowRight className={`w-5 h-5 ${direction === 'rtl' ? 'rotate-180' : ''}`} />
                </span>
              </Link>
              <Link href="/institute/management">
                <span className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border-2 border-white text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-colors cursor-pointer [font-family:'Almarai',Helvetica]">
                  {language === 'ar' ? "معهد الإدارة والمالية" : "Management Institute"}
                  <ArrowRight className={`w-5 h-5 ${direction === 'rtl' ? 'rotate-180' : ''}`} />
                </span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
