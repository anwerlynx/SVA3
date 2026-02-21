import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Card, CardContent } from "@/components/ui/card";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import {
  FlaskConical, BookOpen, Globe, Award, FileText, Microscope,
  Lightbulb, TrendingUp, ExternalLink, Calendar, MapPin, Users, Loader2
} from "lucide-react";

interface Publication {
  id: string;
  titleAr: string;
  titleEn: string;
  abstractAr: string;
  abstractEn: string;
  authorIds: string[];
  publishedYear: number;
  journal: string;
  doi: string;
  fileUrl: string;
  externalUrl: string;
  category: string;
  institute: string;
  status: string;
  createdAt: string;
}

export default function Research() {
  const { language, direction } = useLanguage();
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);

  const pageTitle = language === 'ar' ? 'البحث العلمي والابتكار' : 'Research & Innovation';
  const pageSubtitle = language === 'ar'
    ? 'تطوير المعرفة من خلال البحث العلمي المتميز'
    : 'Advancing knowledge through distinguished scientific research';

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const response = await fetch('/api/research');
        if (response.ok) {
          const data = await response.json();
          setPublications(data);
        }
      } catch (error) {
        console.error('Failed to fetch publications:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPublications();
  }, []);

  const getInstituteLabel = (institute: string): string => {
    const instituteMap: { [key: string]: { ar: string; en: string } } = {
      engineering: { ar: 'الهندسة', en: 'Engineering' },
      management: { ar: 'الإدارة', en: 'Management' },
    };
    return language === 'ar'
      ? instituteMap[institute]?.ar || institute
      : instituteMap[institute]?.en || institute;
  };

  const getCategoryColor = (category: string): string => {
    const colorMap: { [key: string]: string } = {
      'civil-engineering': 'bg-indigo-100 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400',
      'electrical-engineering': 'bg-indigo-100 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400',
      'finance': 'bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400',
      'information-systems': 'bg-indigo-100 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400',
      'architecture': 'bg-teal-100 dark:bg-teal-900/20 text-teal-700 dark:text-teal-400',
      'accounting': 'bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400',
      'article': 'bg-indigo-100 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400',
      'conference': 'bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400',
      'other': 'bg-gray-100 dark:bg-gray-900/20 text-gray-700 dark:text-gray-400',
    };
    return colorMap[category?.toLowerCase()] || colorMap['other'];
  };

  const getCategoryLabel = (category: string): string => {
    const categoryMap: { [key: string]: { ar: string; en: string } } = {
      'civil-engineering': { ar: 'الهندسة المدنية', en: 'Civil Engineering' },
      'electrical-engineering': { ar: 'الهندسة الكهربائية', en: 'Electrical Engineering' },
      'finance': { ar: 'المالية', en: 'Finance' },
      'information-systems': { ar: 'نظم المعلومات', en: 'Information Systems' },
      'architecture': { ar: 'العمارة', en: 'Architecture' },
      'accounting': { ar: 'المحاسبة', en: 'Accounting' },
      'article': { ar: 'مقال محكم', en: 'Journal Article' },
      'conference': { ar: 'ورقة مؤتمر', en: 'Conference Paper' },
      'other': { ar: 'بحث', en: 'Research' },
    };
    return language === 'ar'
      ? categoryMap[category?.toLowerCase()]?.ar || category
      : categoryMap[category?.toLowerCase()]?.en || category;
  };

  const stats = [
    { icon: FileText, value: 85, suffix: "+", label: language === 'ar' ? "بحث منشور" : "Publications" },
    { icon: FlaskConical, value: 24, suffix: "", label: language === 'ar' ? "مشروع بحثي" : "Research Projects" },
    { icon: Calendar, value: 12, suffix: "+", label: language === 'ar' ? "مؤتمر" : "Conferences" },
    { icon: Users, value: 8, suffix: "", label: language === 'ar' ? "شريك بحثي" : "Research Partners" },
  ];

  const researchAreas = [
    {
      icon: Microscope,
      title: language === 'ar' ? "بحوث الهندسة التطبيقية" : "Applied Engineering Research",
      desc: language === 'ar' ? "التحليل الإنشائي والبناء المستدام وأنظمة البنية التحتية الذكية." : "Structural analysis, sustainable construction, and smart infrastructure systems.",
      count: 24,
      color: "bg-blue-50 dark:bg-blue-900/20",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: Lightbulb,
      title: language === 'ar' ? "الابتكار والتكنولوجيا" : "Innovation & Technology",
      desc: language === 'ar' ? "التقنيات الناشئة وتطبيقات إنترنت الأشياء وأبحاث التحول الرقمي." : "Emerging technologies, IoT applications, and digital transformation research.",
      count: 18,
      color: "bg-amber-50 dark:bg-amber-900/20",
      iconColor: "text-amber-600 dark:text-amber-400",
    },
    {
      icon: TrendingUp,
      title: language === 'ar' ? "الأعمال والاقتصاد" : "Business & Economics",
      desc: language === 'ar' ? "تحليل السوق والنمذجة المالية ودراسات السلوك التنظيمي." : "Market analysis, financial modeling, and organizational behavior studies.",
      count: 31,
      color: "bg-emerald-50 dark:bg-emerald-900/20",
      iconColor: "text-emerald-600 dark:text-emerald-400",
    },
    {
      icon: Globe,
      title: language === 'ar' ? "الدراسات البيئية" : "Environmental Studies",
      desc: language === 'ar' ? "التنمية المستدامة وتقييم الأثر البيئي والطاقة النظيفة." : "Sustainable development, environmental impact assessment, and green energy.",
      count: 12,
      color: "bg-teal-50 dark:bg-teal-900/20",
      iconColor: "text-teal-600 dark:text-teal-400",
    },
  ];


  const conferences = [
    {
      title: language === 'ar' ? "المؤتمر الدولي التاسع للمنتدى الاستراتيجي" : "9th International Strategic Forum Conference",
      date: language === 'ar' ? "٢٥ فبراير ٢٠٢٦" : "Feb 25, 2026",
      location: language === 'ar' ? "القاهرة، مصر" : "Cairo, Egypt",
      role: language === 'ar' ? "راعٍ ومشارك" : "Sponsor & Participant",
      roleColor: "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400",
    },
    {
      title: language === 'ar' ? "مؤتمر المرأة في العلوم والتكنولوجيا" : "Women in Science & Technology Conference",
      date: language === 'ar' ? "١٦ فبراير ٢٠٢٦" : "Feb 16, 2026",
      location: language === 'ar' ? "الإسكندرية، مصر" : "Alexandria, Egypt",
      role: language === 'ar' ? "منظم" : "Organizer",
      roleColor: "bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400",
    },
    {
      title: language === 'ar' ? "المؤتمر الدولي للهندسة المستدامة" : "International Conference on Sustainable Engineering",
      date: language === 'ar' ? "نوفمبر ٢٠٢٥" : "Nov 2025",
      location: language === 'ar' ? "دبي، الإمارات" : "Dubai, UAE",
      role: language === 'ar' ? "مشارك" : "Participant",
      roleColor: "bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400",
    },
  ];

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={pageTitle} description={pageSubtitle} />
      <Navbar />

      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" alt="Research" src="/figmaAssets/rectangle-2.png" />
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
                <FlaskConical className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? "مجالات البحث" : "Research Areas"}
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-lg mt-4 max-w-[600px] mx-auto [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? "مجالات البحث الأساسية التي تشمل كلا المعهدين" : "Core research domains spanning both institutes"}
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" dir={direction}>
            {researchAreas.map((area, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full group bg-white dark:bg-neutral-900">
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div className={`w-14 h-14 rounded-2xl ${area.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <area.icon className={`w-7 h-7 ${area.iconColor}`} />
                    </div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{area.title}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{area.desc}</p>
                    <span className="text-green-600 dark:text-green-400 text-sm font-medium [font-family:'Almarai',Helvetica]">
                      {area.count} {language === 'ar' ? "بحث منشور" : "publications"}
                    </span>
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
                <BookOpen className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? "أحدث الأبحاث المنشورة" : "Recent Publications"}
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-lg mt-4 max-w-[600px] mx-auto [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? "أبحاث محكمة من أعضاء هيئة التدريس" : "Peer-reviewed research from our faculty"}
              </p>
            </div>
          </AnimatedSection>
          <div className="flex flex-col gap-4" dir={direction}>
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="w-8 h-8 text-green-700 animate-spin" />
              </div>
            ) : publications.length > 0 ? (
              publications.map((pub, index) => (
                <AnimatedSection key={pub.id} delay={index * 0.06} direction="left">
                  <Card className="rounded-2xl border-0 shadow-sm hover:shadow-md transition-all bg-white dark:bg-neutral-800">
                    <CardContent className="p-5 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center flex-shrink-0">
                        <FileText className="w-6 h-6 text-green-700 dark:text-green-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium [font-family:'Almarai',Helvetica] ${getCategoryColor(pub.category)}`}>
                            {getCategoryLabel(pub.category)}
                          </span>
                          <span className="text-xs text-neutral-400 dark:text-neutral-500">{pub.publishedYear}</span>
                          <span className="text-xs text-neutral-300 dark:text-neutral-600">·</span>
                          <span className="text-xs text-neutral-400 dark:text-neutral-500">{getInstituteLabel(pub.institute)}</span>
                        </div>
                        <h3 className="font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] mb-1 transition-colors duration-300">
                          {language === 'ar' ? pub.titleAr : (pub.titleEn || pub.titleAr)}
                        </h3>
                        <p className="text-xs text-neutral-400 dark:text-neutral-500 italic [font-family:'Almarai',Helvetica]">{pub.journal}</p>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-neutral-500 dark:text-neutral-400 [font-family:'Almarai',Helvetica]">
                  {language === 'ar' ? "لا توجد أبحاث منشورة حالياً" : "No publications available"}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-16" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <Award className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? "المؤتمرات والفعاليات" : "Conferences & Events"}
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-lg mt-4 max-w-[600px] mx-auto [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? "مشاركتنا في الفعاليات الأكاديمية المحلية والدولية" : "Our participation in national and international academic events"}
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" dir={direction}>
            {conferences.map((conf, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full bg-white dark:bg-neutral-900">
                  <CardContent className="p-6 flex flex-col gap-4">
                    <span className={`self-start text-xs px-3 py-1 rounded-full font-medium [font-family:'Almarai',Helvetica] ${conf.roleColor}`}>
                      {conf.role}
                    </span>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{conf.title}</h3>
                    <div className="flex flex-col gap-2 text-sm text-neutral-500 dark:text-neutral-400 [font-family:'Almarai',Helvetica]">
                      <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{conf.date}</span>
                      <span className="flex items-center gap-2"><MapPin className="w-4 h-4" />{conf.location}</span>
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
              <Lightbulb className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-white [font-family:'Almarai',Helvetica] mb-4">
                {language === 'ar' ? "مركز الابتكار" : "Innovation Center"}
              </h2>
              <p className="text-white/80 text-lg max-w-[600px] mx-auto mb-8 [font-family:'Almarai',Helvetica]">
                {language === 'ar'
                  ? "يوفر مركز الابتكار لدينا مرافق حديثة للبحث والنمذجة والتعاون بين الطلاب وأعضاء هيئة التدريس والشركاء في الصناعة."
                  : "Our Innovation Center provides state-of-the-art facilities for research, prototyping, and collaboration between students, faculty, and industry partners."}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="px-8 py-3 bg-white text-green-800 font-bold rounded-xl hover:bg-gray-100 transition-colors [font-family:'Almarai',Helvetica]">
                  {language === 'ar' ? "اعرف المزيد" : "Learn More"}
                </button>
                <button className="px-8 py-3 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors border border-white/20 [font-family:'Almarai',Helvetica]">
                  {language === 'ar' ? "تواصل مع مكتب البحث" : "Contact Research Office"}
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
