import { Navbar } from "@/components/Navbar";
import { AnnouncementsBanner } from "@/components/AnnouncementsBanner";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Search, ChevronDown, GraduationCap, Users, BookOpen, Award, Cpu, BarChart3, Shield, Target, Briefcase, Lightbulb, Building2, HeartHandshake, Quote, Loader2, FileText, Calendar, Image, HelpCircle, Phone, MapPin } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { PageHead } from "@/components/PageHead";
import { SearchModal } from "@/components/SearchModal";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t, language, direction } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [newsletterLoading, setNewsletterLoading] = useState(false);
  const [newsletterError, setNewsletterError] = useState("");

  const defaultHeroSlides = language === 'ar' ? [
    { title: "مستوى مؤسسي قوي", subtitle: "صرح تعليمي رائد يرسخ معايير التميز الأكاديمي ويصنع قادة المستقبل" },
    { title: "تعليم يصنع الفرق", subtitle: "نقدم برامج أكاديمية متميزة تواكب متطلبات سوق العمل المتطور" },
    { title: "معايير عالمية", subtitle: "نلتزم بأعلى معايير الجودة الأكاديمية لتخريج كوادر مؤهلة ومنافسة" },
  ] : [
    { title: "Strong Institutional Level", subtitle: "A leading educational beacon setting standards of academic excellence and shaping future leaders" },
    { title: "Education That Makes a Difference", subtitle: "We offer distinguished academic programs that keep pace with the evolving labor market" },
    { title: "Global Standards", subtitle: "We are committed to the highest standards of academic quality to graduate qualified and competitive cadres" },
  ];

  const defaultStats = language === 'ar' ? [
    { icon: GraduationCap, value: 5000, suffix: "+", label: "خريج" },
    { icon: Users, value: 200, suffix: "+", label: "عضو هيئة تدريس" },
    { icon: BookOpen, value: 15, suffix: "", label: "قسم أكاديمي" },
    { icon: Award, value: 98, suffix: "%", label: "نسبة التوظيف" },
  ] : [
    { icon: GraduationCap, value: 5000, suffix: "+", label: "Graduates" },
    { icon: Users, value: 200, suffix: "+", label: "Faculty Members" },
    { icon: BookOpen, value: 15, suffix: "", label: "Academic Departments" },
    { icon: Award, value: 98, suffix: "%", label: "Employment Rate" },
  ];

  const iconMap: Record<string, any> = { GraduationCap, Users, BookOpen, Award, Cpu, BarChart3, Shield, Target, Briefcase };

  const [heroSlides, setHeroSlides] = useState(defaultHeroSlides);
  const [stats, setStats] = useState(defaultStats);
  const [newsItems, setNewsItems] = useState<Array<{id: string; slug: string; title: string; date: string; image: string; category: string}>>([]);
  const [eventItems, setEventItems] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/settings")
      .then(r => r.json())
      .then((data) => {
        if (!Array.isArray(data)) return;
        const find = (key: string) => data.find((s: any) => s.key === key)?.value;
        const heroData = find("homepage_hero");
        if (heroData && heroData.slides && Array.isArray(heroData.slides) && heroData.slides.length > 0) {
          setHeroSlides(heroData.slides.map((s: any) => ({
            title: language === 'ar' ? (s.titleAr || s.title) : (s.titleEn || s.title),
            subtitle: language === 'ar' ? (s.subtitleAr || s.subtitle) : (s.subtitleEn || s.subtitle),
          })));
        }
        const statsData = find("homepage_stats");
        if (statsData && Array.isArray(statsData) && statsData.length > 0) {
          setStats(statsData.map((s: any) => ({
            icon: iconMap[s.icon] || GraduationCap,
            value: s.value || 0,
            suffix: s.suffix || "",
            label: language === 'ar' ? (s.labelAr || s.label) : (s.labelEn || s.label),
          })));
        }
      })
      .catch(() => {});
  }, [language]);

  useEffect(() => {
    fetch("/api/news?status=published&limit=3")
      .then(res => res.json())
      .then(data => {
        const items = Array.isArray(data) ? data : data.data || [];
        setNewsItems(items.map((n: any) => ({
          id: n.id,
          slug: n.slug,
          title: language === 'ar' ? n.titleAr : (n.titleEn || n.titleAr),
          date: n.publishedAt ? new Date(n.publishedAt).toLocaleDateString(language === 'ar' ? 'ar-EG' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : '',
          image: n.coverImage || "/figmaAssets/rectangle-10.png",
          category: n.category || '',
        })));
      })
      .catch(() => {});
  }, [language]);

  useEffect(() => {
    fetch("/api/events")
      .then(res => res.json())
      .then(data => {
        const items = Array.isArray(data) ? data : [];
        setEventItems(items.filter((e: any) => new Date(e.startDate) >= new Date()).slice(0, 4));
      })
      .catch(() => {});
  }, []);

  const supervisorsData = language === 'ar' ? [
    { name: "محمد ابراهيم محمد ماضي", title: "مهندس مشروع بقسم الطرق", image: "/figmaAssets/photo.png" },
    { name: "مهندس عبدالرحمن محمد حسين", title: "مهندس مكتب فني بشركه اوراسكوم", image: "/figmaAssets/photo-1.png" },
    { name: "أحمد محمود السيد", title: "نقيب مهندس بوزارة الداخليه", image: "/figmaAssets/photo-4.png" },
    { name: "خالد عبدالله محمد", title: "مدير مشروعات بشركة حسن علام", image: "/figmaAssets/photo.png" },
    { name: "عمر حسن الشريف", title: "مهندس معماري بشركة المقاولون العرب", image: "/figmaAssets/photo-1.png" },
  ] : [
    { name: "Mohamed Ibrahim Mohamed Mady", title: "Project Engineer - Roads Department", image: "/figmaAssets/photo.png" },
    { name: "Eng. Abdulrahman Mohamed Hussein", title: "Technical Office Engineer at Orascom", image: "/figmaAssets/photo-1.png" },
    { name: "Ahmed Mahmoud El-Sayed", title: "Engineers Syndicate - Ministry of Interior", image: "/figmaAssets/photo-4.png" },
    { name: "Khaled Abdullah Mohamed", title: "Projects Manager at Hassan Allam", image: "/figmaAssets/photo.png" },
    { name: "Omar Hassan El-Sharif", title: "Architectural Engineer at Arab Contractors", image: "/figmaAssets/photo-1.png" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setNewsletterLoading(true);
    setNewsletterError("");
    try {
      const res = await fetch("/api/newsletter", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) });
      if (res.status === 409) { setNewsletterError(language === 'ar' ? "أنت مشترك بالفعل" : "You're already subscribed"); return; }
      if (!res.ok) throw new Error();
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    } catch { setNewsletterError(language === 'ar' ? "حدث خطأ، حاول مرة أخرى" : "An error occurred, please try again"); }
    finally { setNewsletterLoading(false); }
  };

  const ArrowIcon = direction === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead
        title={language === 'ar' ? "الرئيسية" : "Home"}
        description={language === 'ar'
          ? "معاهد الوادي العليا - بوابة التعليم العالي المتميز"
          : "Valley Higher Institutes - Gateway to Distinguished Higher Education"}
      />
      <div className="sticky top-0 z-50">
        <AnnouncementsBanner />
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-[100vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover" alt="Hero" src="/figmaAssets/rectangle-2.png" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center gap-10 px-4 max-w-[900px] mx-auto text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center gap-6"
            >
              <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-bold leading-tight [font-family:'Almarai',Helvetica]" dir={direction}>
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-white/90 text-lg md:text-2xl leading-relaxed [font-family:'Almarai',Helvetica] max-w-[700px]" dir={direction}>
                {heroSlides[currentSlide].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="w-full max-w-[600px]">
            <div className="relative rounded-full overflow-hidden transition-all duration-300" dir={direction}>
              <input
                type="text"
                readOnly
                onClick={() => setIsSearchModalOpen(true)}
                placeholder={language === 'ar' ? "ابحث عن البرامج، الأقسام، الأخبار..." : "Search programs, departments, news..."}
                className={`w-full px-6 py-4 ${direction === 'rtl' ? 'pr-14' : 'pl-14'} bg-white/15 backdrop-blur-md text-white placeholder-white/60 border border-white/20 rounded-full focus:outline-none text-base [font-family:'Almarai',Helvetica] cursor-pointer`}
              />
              <Search className={`absolute ${direction === 'rtl' ? 'right-5' : 'left-5'} top-1/2 -translate-y-1/2 w-5 h-5 text-white/60`} />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/institute/management">
              <Button className="px-8 py-3 h-auto rounded-full bg-green-700 hover:bg-green-800 text-white text-base [font-family:'Almarai',Helvetica] transition-all">
                {language === 'ar' ? "معهد الإدارة والمالية" : "Management Institute"}
              </Button>
            </Link>
            <Link href="/institute/engineering">
              <Button className="px-8 py-3 h-auto rounded-full bg-blue-700 hover:bg-blue-800 text-white text-base [font-family:'Almarai',Helvetica] transition-all">
                {language === 'ar' ? "معهد الهندسة والتكنولوجيا" : "Engineering Institute"}
              </Button>
            </Link>
          </motion.div>

          <div className="flex items-center gap-3 mt-4">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`rounded-full transition-all duration-300 ${index === currentSlide ? "w-8 h-3 bg-green-500" : "w-3 h-3 bg-white/40 hover:bg-white/60"}`}
              />
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <ChevronDown className="w-8 h-8 text-white/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* Institutes Section */}
      <section className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-16" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <span className="text-green-700 font-bold text-sm [font-family:'Almarai',Helvetica]">
                  {language === 'ar' ? "معاهدنا" : "Our Institutes"}
                </span>
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? "اختر معهدك" : "Choose Your Institute"}
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-lg mt-4 max-w-[600px] mx-auto [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar'
                  ? "معاهد الوادي العليا تضم معهدين متميزين يقدمان برامج أكاديمية على أعلى مستوى"
                  : "Valley Higher Institutes includes two distinguished institutes offering academic programs at the highest level"}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection direction={direction === 'rtl' ? "right" : "left"}>
              <Link href="/institute/management">
                <Card className="rounded-3xl border-0 overflow-hidden shadow-lg cursor-pointer group h-[500px] relative">
                  <CardContent className="p-0 h-full">
                    <img className="w-full h-full object-cover transition-transform duration-700" alt="Management Institute" src="/figmaAssets/rectangle-16.png" />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-green-900/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10" dir={direction}>
                      <div className="flex items-center gap-2 mb-3">
                        <BarChart3 className="w-6 h-6 text-green-400" />
                        <span className="text-green-400 text-sm font-bold [font-family:'Almarai',Helvetica]">
                          {language === 'ar' ? "معهد الإدارة" : "Management Institute"}
                        </span>
                      </div>
                      <h3 className="font-bold text-white text-2xl md:text-3xl leading-tight [font-family:'Almarai',Helvetica] mb-3">
                        {language === 'ar' ? "المعهد العالي للإدارة والمالية ونظم المعلومات" : "Higher Institute of Management, Finance & Information Systems"}
                      </h3>
                      <p className="text-white/70 text-sm [font-family:'Almarai',Helvetica] mb-4">
                        {language === 'ar' ? "إدارة أعمال - محاسبة - نظم معلومات - علوم مالية ومصرفية" : "Business Admin - Accounting - MIS - Banking & Finance"}
                      </p>
                      <div className="flex items-center gap-2 text-green-400 group-hover:gap-4 transition-all [font-family:'Almarai',Helvetica]">
                        <span className="text-sm font-bold">{language === 'ar' ? "ادخل الموقع" : "Visit Site"}</span>
                        <ArrowIcon className="w-4 h-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </AnimatedSection>

            <AnimatedSection direction={direction === 'rtl' ? "left" : "right"} delay={0.2}>
              <Link href="/institute/engineering">
                <Card className="rounded-3xl border-0 overflow-hidden shadow-lg cursor-pointer group h-[500px] relative">
                  <CardContent className="p-0 h-full">
                    <img className="w-full h-full object-cover transition-transform duration-700" alt="Engineering Institute" src="/figmaAssets/rectangle-17.png" />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10" dir={direction}>
                      <div className="flex items-center gap-2 mb-3">
                        <Cpu className="w-6 h-6 text-blue-400" />
                        <span className="text-blue-400 text-sm font-bold [font-family:'Almarai',Helvetica]">
                          {language === 'ar' ? "معهد الهندسة" : "Engineering Institute"}
                        </span>
                      </div>
                      <h3 className="font-bold text-white text-2xl md:text-3xl leading-tight [font-family:'Almarai',Helvetica] mb-3">
                        {language === 'ar' ? "المعهد العالي للهندسة والتكنولوجيا" : "Higher Institute of Engineering & Technology"}
                      </h3>
                      <p className="text-white/70 text-sm [font-family:'Almarai',Helvetica] mb-4">
                        {language === 'ar' ? "هندسة مدنية - معمارية - كهربائية - ميكانيكية" : "Civil - Architecture - Electrical - Mechanical Engineering"}
                      </p>
                      <div className="flex items-center gap-2 text-blue-400 group-hover:gap-4 transition-all [font-family:'Almarai',Helvetica]">
                        <span className="text-sm font-bold">{language === 'ar' ? "ادخل الموقع" : "Visit Site"}</span>
                        <ArrowIcon className="w-4 h-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-green-800 dark:bg-green-900 relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8" dir={direction}>
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.15} direction="up">
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white [font-family:'Almarai',Helvetica]">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <span className="text-white/80 text-lg [font-family:'Almarai',Helvetica]">{stat.label}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-16" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <span className="text-green-700 font-bold text-sm [font-family:'Almarai',Helvetica]">
                  {language === 'ar' ? "مميزاتنا" : "Our Advantages"}
                </span>
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? "لماذا معاهد الوادي العليا؟" : "Why Valley Higher Institutes?"}
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-lg mt-4 max-w-[600px] mx-auto [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? "نقدم تجربة تعليمية فريدة تجمع بين الأكاديميا والتطبيق العملي" : "We offer a unique educational experience combining academia and practical application"}
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" dir={direction}>
            {(language === 'ar' ? [
              { icon: Shield, title: "اعتماد أكاديمي", desc: "برامج معتمدة من المجلس الأعلى للجامعات تضمن جودة التعليم والاعتراف بالشهادات" },
              { icon: Target, title: "تأهيل لسوق العمل", desc: "مناهج مصممة لتلبية احتياجات سوق العمل وتأهيل الخريجين للمنافسة محلياً ودولياً" },
              { icon: Briefcase, title: "تدريب عملي", desc: "شراكات مع كبرى الشركات والمؤسسات لتوفير فرص تدريب عملي حقيقية للطلاب" },
              { icon: Lightbulb, title: "بحث علمي", desc: "مراكز بحثية متخصصة تدعم الابتكار وتشجع الطلاب على المشاركة في الأبحاث العلمية" },
              { icon: Building2, title: "بنية تحتية حديثة", desc: "معامل ومرافق مجهزة بأحدث التقنيات والأجهزة لدعم العملية التعليمية" },
              { icon: HeartHandshake, title: "شراكات دولية", desc: "اتفاقيات تعاون مع جامعات ومؤسسات دولية لتبادل الخبرات والمعرفة" },
            ] : [
              { icon: Shield, title: "Academic Accreditation", desc: "Programs accredited by the Supreme Council of Universities ensuring quality education and recognized degrees" },
              { icon: Target, title: "Career Readiness", desc: "Curricula designed to meet labor market needs and prepare graduates to compete locally and internationally" },
              { icon: Briefcase, title: "Practical Training", desc: "Partnerships with leading companies and institutions providing real hands-on training opportunities" },
              { icon: Lightbulb, title: "Scientific Research", desc: "Specialized research centers supporting innovation and encouraging student participation in scientific research" },
              { icon: Building2, title: "Modern Infrastructure", desc: "Labs and facilities equipped with the latest technologies and equipment to support the educational process" },
              { icon: HeartHandshake, title: "International Partnerships", desc: "Cooperation agreements with international universities and institutions for knowledge and expertise exchange" },
            ]).map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <div className="bg-white dark:bg-neutral-800 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100 dark:border-neutral-700">
                  <div className="w-14 h-14 rounded-2xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-green-700 dark:text-green-400" />
                  </div>
                  <h3 className="font-bold text-xl text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] mb-3 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{feature.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 md:py-24 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-16" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <span className="text-green-700 font-bold text-sm [font-family:'Almarai',Helvetica]">
                  {language === 'ar' ? "روابط سريعة" : "Quick Links"}
                </span>
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? "خدماتنا الأساسية" : "Essential Services"}
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-lg mt-4 max-w-[600px] mx-auto [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? "وصول سريع لأهم الخدمات والمعلومات" : "Quick access to the most important services and information"}
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" dir={direction}>
            {(language === 'ar' ? [
              { icon: FileText, title: "القبول والتسجيل", href: "/admission", color: "bg-emerald-50 dark:bg-emerald-900/20", iconColor: "text-emerald-600 dark:text-emerald-400" },
              { icon: Calendar, title: "التقويم الأكاديمي", href: "/academic-calendar", color: "bg-blue-50 dark:bg-blue-900/20", iconColor: "text-blue-600 dark:text-blue-400" },
              { icon: Image, title: "معرض الصور", href: "/media-gallery", color: "bg-purple-50 dark:bg-purple-900/20", iconColor: "text-purple-600 dark:text-purple-400" },
              { icon: HelpCircle, title: "الأسئلة الشائعة", href: "/faq", color: "bg-amber-50 dark:bg-amber-900/20", iconColor: "text-amber-600 dark:text-amber-400" },
              { icon: Briefcase, title: "فرص العمل", href: "/available-jobs", color: "bg-rose-50 dark:bg-rose-900/20", iconColor: "text-rose-600 dark:text-rose-400" },
              { icon: Phone, title: "اتصل بنا", href: "/contact", color: "bg-teal-50 dark:bg-teal-900/20", iconColor: "text-teal-600 dark:text-teal-400" },
            ] : [
              { icon: FileText, title: "Admission", href: "/admission", color: "bg-emerald-50 dark:bg-emerald-900/20", iconColor: "text-emerald-600 dark:text-emerald-400" },
              { icon: Calendar, title: "Academic Calendar", href: "/academic-calendar", color: "bg-blue-50 dark:bg-blue-900/20", iconColor: "text-blue-600 dark:text-blue-400" },
              { icon: Image, title: "Media Gallery", href: "/media-gallery", color: "bg-purple-50 dark:bg-purple-900/20", iconColor: "text-purple-600 dark:text-purple-400" },
              { icon: HelpCircle, title: "FAQ", href: "/faq", color: "bg-amber-50 dark:bg-amber-900/20", iconColor: "text-amber-600 dark:text-amber-400" },
              { icon: Briefcase, title: "Available Jobs", href: "/available-jobs", color: "bg-rose-50 dark:bg-rose-900/20", iconColor: "text-rose-600 dark:text-rose-400" },
              { icon: Phone, title: "Contact Us", href: "/contact", color: "bg-teal-50 dark:bg-teal-900/20", iconColor: "text-teal-600 dark:text-teal-400" },
            ]).map((link, index) => (
              <AnimatedSection key={index} delay={index * 0.08} direction="up">
                <Link href={link.href}>
                  <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                    <div className={`w-14 h-14 rounded-2xl ${link.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <link.icon className={`w-7 h-7 ${link.iconColor}`} />
                    </div>
                    <span className="text-sm font-bold text-neutral-700 dark:text-neutral-300 [font-family:'Almarai',Helvetica] text-center transition-colors duration-300">{link.title}</span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 md:py-28 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[1300px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6" dir={direction}>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-1 bg-green-700 rounded-full" />
                  <span className="text-green-700 font-bold text-sm [font-family:'Almarai',Helvetica]">{t("latest_news")}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                  {t("latest_news")}
                </h2>
              </div>
              <Link href="/news">
                <Button variant="outline" className="rounded-full border-green-700 text-green-700 hover:bg-green-700 hover:text-white [font-family:'Almarai',Helvetica] transition-all">
                  {t("view_all")}
                </Button>
              </Link>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" dir={direction}>
            {newsItems.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 0.15} direction="up">
                <Link href={`/news/${item.slug}`}>
                  <Card className="rounded-3xl border-0 shadow-sm hover:shadow-xl dark:shadow-neutral-900/50 transition-shadow cursor-pointer overflow-hidden bg-white dark:bg-neutral-900">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <img className="w-full h-[220px] object-cover" alt={item.title} src={item.image} />
                        <div className="absolute top-4 right-4 bg-green-700 text-white px-3 py-1 rounded-full text-xs font-bold [font-family:'Almarai',Helvetica]">{item.category}</div>
                      </div>
                      <div className="p-6 flex flex-col gap-3">
                        <span className="text-neutral-400 dark:text-neutral-500 text-sm [font-family:'Almarai',Helvetica]">{item.date}</span>
                        <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] leading-relaxed line-clamp-2 transition-colors duration-300">{item.title}</h3>
                        <span className="text-green-700 dark:text-green-500 text-sm font-bold [font-family:'Almarai',Helvetica] flex items-center gap-2 group-hover:gap-3 transition-all">
                          {t("read_more")} <ArrowIcon className="w-4 h-4" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      {eventItems.length > 0 && (
        <section className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300">
          <div className="max-w-[1300px] mx-auto px-4 md:px-8">
            <AnimatedSection>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6" dir={direction}>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-1 bg-green-700 rounded-full" />
                    <span className="text-green-700 font-bold text-sm [font-family:'Almarai',Helvetica]">{language === 'ar' ? "الفعاليات" : "Events"}</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                    {language === 'ar' ? "الفعاليات القادمة" : "Upcoming Events"}
                  </h2>
                </div>
                <Link href="/academic-calendar">
                  <Button variant="outline" className="rounded-full border-green-700 text-green-700 hover:bg-green-700 hover:text-white [font-family:'Almarai',Helvetica] transition-all">
                    {language === 'ar' ? "عرض الكل" : "View All"}
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" dir={direction}>
              {eventItems.map((event, index) => (
                <AnimatedSection key={event.id} delay={index * 0.15} direction="up">
                  <Card className="rounded-2xl border-0 shadow-sm hover:shadow-xl dark:shadow-neutral-900/50 transition-shadow cursor-pointer overflow-hidden bg-white dark:bg-neutral-900">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden h-[200px] bg-gradient-to-br from-green-400 to-green-600">
                        {event.coverImage ? (
                          <img className="w-full h-full object-cover" alt={language === 'ar' ? event.titleAr : (event.titleEn || event.titleAr)} src={event.coverImage} onError={(e) => { (e.target as HTMLImageElement).src = "/figmaAssets/rectangle-10.png"; }} />
                        ) : null}
                        <div className="absolute top-4 right-4 bg-green-700 text-white px-3 py-1 rounded-full text-xs font-bold [font-family:'Almarai',Helvetica]">{event.category || ''}</div>
                      </div>
                      <div className="p-5 flex flex-col gap-3">
                        <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 text-sm [font-family:'Almarai',Helvetica]">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(event.startDate).toLocaleDateString(language === 'ar' ? 'ar-EG' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                        </div>
                        <h3 className="font-bold text-base text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] leading-relaxed line-clamp-2 transition-colors duration-300">
                          {language === 'ar' ? event.titleAr : (event.titleEn || event.titleAr)}
                        </h3>
                        <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 text-sm [font-family:'Almarai',Helvetica]">
                          <MapPin className="w-4 h-4 flex-shrink-0" />
                          <span className="line-clamp-1">{event.location || ''}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Supervisors Slider */}
      <section className="py-20 md:py-28 bg-gray-50 dark:bg-neutral-900 overflow-hidden transition-colors duration-300">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className={`text-center mb-12`} dir={direction}>
              <h2 className="text-3xl md:text-5xl font-bold [font-family:'Almarai',Helvetica]">
                <span className="text-neutral-900 dark:text-white transition-colors duration-300">
                  {language === 'ar' ? "نماذج " : "Distinguished "}
                </span>
                <span className="text-green-700">
                  {language === 'ar' ? "مشرفة" : "Alumni"}
                </span>
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-lg mt-4 [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? "خريجون حققوا نجاحات مميزة" : "Graduates who achieved remarkable success"}
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={24}
              slidesPerView={1.2}
              breakpoints={{ 640: { slidesPerView: 2.2 }, 1024: { slidesPerView: 3.2 }, 1280: { slidesPerView: 3.5 } }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              dir={direction}
            >
              {supervisorsData.map((supervisor, index) => (
                <SwiperSlide key={index}>
                  <Card className="relative overflow-hidden rounded-3xl border-0 h-[450px] md:h-[500px] cursor-pointer bg-neutral-100 dark:bg-neutral-800">
                    <CardContent className="p-0 h-full relative">
                      <img className="w-full h-full object-cover" alt={supervisor.name} src={supervisor.image} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8" dir={direction}>
                        <h3 className="font-bold text-white text-xl md:text-2xl [font-family:'Almarai',Helvetica] mb-2">{supervisor.name}</h3>
                        <p className="text-white/70 text-sm md:text-base [font-family:'Almarai',Helvetica]">{supervisor.title}</p>
                      </div>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-16" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <span className="text-green-700 font-bold text-sm [font-family:'Almarai',Helvetica]">
                  {language === 'ar' ? "آراء طلابنا" : "Student Testimonials"}
                </span>
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? "ماذا يقول طلابنا؟" : "What Our Students Say"}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" dir={direction}>
            {(language === 'ar' ? [
              { name: "سارة أحمد", role: "خريجة - نظم معلومات إدارية", text: "تجربتي في معاهد الوادي العليا كانت استثنائية. الأساتذة متميزون والمناهج عملية ومواكبة لسوق العمل. حصلت على وظيفة قبل التخرج بفضل التدريب العملي." },
              { name: "محمد خالد", role: "خريج - هندسة مدنية", text: "المعامل والمختبرات مجهزة بأحدث الأجهزة. التدريب العملي في الشركات الكبرى أعطاني خبرة حقيقية وساعدني في بناء مسيرتي المهنية." },
              { name: "نورهان علي", role: "طالبة - محاسبة", text: "البيئة الأكاديمية محفزة والأنشطة الطلابية متنوعة. أشعر بالفخر لانتمائي لمعاهد الوادي العليا وأنصح كل طالب بالالتحاق بها." },
            ] : [
              { name: "Sara Ahmed", role: "Graduate - MIS", text: "My experience at Valley Higher Institutes was exceptional. The professors are outstanding and the curricula are practical and relevant to the job market. I got a job before graduation thanks to the practical training." },
              { name: "Mohamed Khaled", role: "Graduate - Civil Engineering", text: "The labs and workshops are equipped with the latest equipment. Practical training at major companies gave me real experience and helped me build my career." },
              { name: "Nourhan Ali", role: "Student - Accounting", text: "The academic environment is stimulating and student activities are diverse. I'm proud to belong to Valley Higher Institutes and recommend every student to join." },
            ]).map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 0.15} direction="up">
                <Card className="rounded-3xl border-0 shadow-sm hover:shadow-lg bg-gray-50 dark:bg-neutral-900 h-full transition-all duration-300">
                  <CardContent className="p-8 flex flex-col gap-5">
                    <Quote className="w-8 h-8 text-green-700/30 dark:text-green-500/30" />
                    <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed [font-family:'Almarai',Helvetica] flex-1">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-neutral-700">
                      <div className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center text-white font-bold text-sm [font-family:'Almarai',Helvetica]">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-neutral-900 dark:text-white text-sm [font-family:'Almarai',Helvetica]">{testimonial.name}</p>
                        <p className="text-neutral-400 dark:text-neutral-500 text-xs [font-family:'Almarai',Helvetica]">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Accreditation */}
      <section className="py-16 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-10" dir={direction}>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm [font-family:'Almarai',Helvetica] mb-2 transition-colors duration-300">
                {language === 'ar' ? 'معتمدون ومعترف بنا من' : 'Accredited & Recognized By'}
              </p>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'شركاؤنا وجهات الاعتماد' : 'Our Partners & Accreditation Bodies'}
              </h3>
            </div>
          </AnimatedSection>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {(language === 'ar' ? [
              "المجلس الأعلى للجامعات",
              "وزارة التعليم العالي",
              "هيئة ضمان الجودة (NAQAAE)",
              "نقابة المهندسين",
              "جمعية المحاسبين",
              "أوراسكوم",
            ] : [
              "Supreme Council of Universities",
              "Ministry of Higher Education",
              "NAQAAE",
              "Engineers Syndicate",
              "Accountants Association",
              "Orascom",
            ]).map((partner, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="flex items-center justify-center px-6 py-3 rounded-xl bg-white dark:bg-neutral-800 shadow-sm border border-gray-100 dark:border-neutral-700 transition-colors duration-300">
                  <span className="text-sm font-semibold text-neutral-600 dark:text-neutral-300 [font-family:'Almarai',Helvetica] whitespace-nowrap">{partner}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-green-800 dark:bg-green-900 relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-40 h-40 border border-white rounded-full" />
          <div className="absolute bottom-10 left-10 w-60 h-60 border border-white rounded-full" />
        </div>
        <div className="max-w-[800px] mx-auto px-4 md:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center flex flex-col items-center gap-6" dir={direction}>
              <h2 className="text-3xl md:text-4xl font-bold text-white [font-family:'Almarai',Helvetica]">
                {language === 'ar' ? "اشترك في النشرة الإخبارية" : "Subscribe to Our Newsletter"}
              </h2>
              <p className="text-white/70 text-lg max-w-[500px] [font-family:'Almarai',Helvetica]">
                {language === 'ar' ? "احصل على آخر الأخبار والمستجدات" : "Get the latest news and updates"}
              </p>
              <form onSubmit={handleNewsletterSubmit} className="w-full max-w-[500px] mt-4">
                <div className={`flex gap-3 ${direction === 'rtl' ? 'flex-row' : 'flex-row-reverse'}`}>
                  <Button type="submit" disabled={newsletterLoading} className="px-6 py-3 h-auto rounded-full bg-white text-green-800 hover:bg-gray-100 [font-family:'Almarai',Helvetica] font-bold flex-shrink-0 disabled:opacity-70">
                    {newsletterLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : (language === 'ar' ? "اشترك" : "Subscribe")}
                  </Button>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={language === 'ar' ? "بريدك الإلكتروني" : "Your email address"}
                    className={`flex-1 px-6 py-3 rounded-full bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 ${direction === 'rtl' ? 'text-right' : 'text-left'} [font-family:'Almarai',Helvetica]`}
                    required
                  />
                </div>
              </form>
              {newsletterError && (
                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-rose-300 text-sm [font-family:'Almarai',Helvetica]">
                  {newsletterError}
                </motion.p>
              )}
              {submitted && (
                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-green-200 text-sm [font-family:'Almarai',Helvetica]">
                  {language === 'ar' ? "تم الاشتراك بنجاح!" : "Successfully subscribed!"}
                </motion.p>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <SearchModal isOpen={isSearchModalOpen} onClose={() => setIsSearchModalOpen(false)} />
      <Footer />
    </div>
  );
}
