import { InstituteNavbar } from "@/components/institute/InstituteNavbar";
import { InstituteFooter } from "@/components/institute/InstituteFooter";
import { InstituteHero } from "@/components/institute/InstituteHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BarChart3, Calculator, Database, Landmark, GraduationCap, Users, BookOpen, CheckCircle2, Calendar, Award, Briefcase, Globe, Target, Shield, Lightbulb, Loader2 } from "lucide-react";
import { managementNavbar, managementFooter } from "@/lib/instituteConfig";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";

export default function ManagementHome() {
  const { language, direction } = useLanguage();
  const [news, setNews] = useState([]);
  const [newsLoading, setNewsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setNewsLoading(true);
        const response = await fetch("/api/news?institute=management&limit=3");
        if (response.ok) {
          const result = await response.json();
          setNews(result.data || []);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setNewsLoading(false);
      }
    };
    fetchNews();
  }, []);

  const departments = [
    { icon: Database, name: language === "ar" ? "نظم المعلومات الإدارية" : "Management Information Systems", desc: language === "ar" ? "تحليل وتصميم نظم المعلومات والبرمجيات" : "Analysis and design of information systems and software", slug: "mis", color: "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400" },
    { icon: Calculator, name: language === "ar" ? "المحاسبة" : "Accounting & Auditing", desc: language === "ar" ? "المحاسبة المالية والتكاليف والمراجعة" : "Financial accounting, cost accounting, and auditing", slug: "accounting", color: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400" },
    { icon: Landmark, name: language === "ar" ? "العلوم المالية والمصرفية" : "Banking & Finance", desc: language === "ar" ? "الأسواق المالية والبنوك والاستثمار" : "Financial markets, banking, and investment", slug: "finance", color: "bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-400" },
    { icon: BarChart3, name: language === "ar" ? "التسويق وإدارة الأعمال" : "Business Administration", desc: language === "ar" ? "التخطيط الاستراتيجي والتسويق الرقمي" : "Strategic planning and digital marketing", slug: "business-admin", color: "bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-400" },
  ];

  const stats = [
    { icon: GraduationCap, value: 3000, suffix: "+", label: language === "ar" ? "خريج" : "Graduates" },
    { icon: Users, value: 100, suffix: "+", label: language === "ar" ? "عضو هيئة تدريس" : "Faculty Members" },
    { icon: BookOpen, value: 4, label: language === "ar" ? "أقسام أكاديمية" : "Academic Departments" },
    { icon: Award, value: 15, suffix: "+", label: language === "ar" ? "عام من التميز" : "Years of Excellence" },
  ];

  const features = [
    { icon: Award, title: language === "ar" ? "اعتماد أكاديمي" : "Academic Accreditation", desc: language === "ar" ? "برامج معتمدة من المجلس الأعلى للجامعات وهيئة ضمان الجودة" : "Programs accredited by the Supreme Council of Universities and the Quality Assurance Authority" },
    { icon: Briefcase, title: language === "ar" ? "تدريب عملي" : "Practical Training", desc: language === "ar" ? "شراكات مع كبرى المؤسسات المالية والإدارية لتوفير تدريب ميداني" : "Partnerships with major financial and administrative institutions for field training" },
    { icon: Globe, title: language === "ar" ? "تعاون دولي" : "International Collaboration", desc: language === "ar" ? "بروتوكولات تعاون مع جامعات ومؤسسات دولية" : "Collaboration protocols with international universities and institutions" },
    { icon: Target, title: language === "ar" ? "سوق العمل" : "Job Market", desc: language === "ar" ? "نسبة توظيف عالية للخريجين في قطاعات الأعمال والبنوك" : "High employment rate for graduates in business and banking sectors" },
    { icon: Shield, title: language === "ar" ? "ضمان الجودة" : "Quality Assurance", desc: language === "ar" ? "نظام متكامل لضمان جودة التعليم والاعتماد المؤسسي" : "Integrated system for education quality assurance and institutional accreditation" },
    { icon: Lightbulb, title: language === "ar" ? "ريادة الأعمال" : "Entrepreneurship", desc: language === "ar" ? "حاضنة أعمال لدعم المشاريع الناشئة وتنمية مهارات الطلاب" : "Business incubator to support startups and develop student skills" },
  ];

  const ArrowIcon = direction === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={language === "ar" ? "المعهد العالي للإدارة" : "Higher Institute of Management"} description={language === "ar" ? "المعهد العالي للإدارة والمالية ونظم المعلومات - أحد معاهد الوادي العليا" : "Higher Institute of Management, Finance, and Information Systems - One of Al-Wadi Al-Olia Institutes"} />
      <InstituteNavbar {...managementNavbar} />

      <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" alt="Management" src="/figmaAssets/rectangle-16.png" />
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/60 via-green-900/40 to-green-900/80" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-[800px] mx-auto">
          <AnimatedSection>
            <div className="inline-block bg-green-600/30 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-green-200 text-sm font-bold [font-family:'Almarai',Helvetica]" dir={direction}>{language === "ar" ? "المعهد العالي للإدارة والمالية" : "Higher Institute of Management and Finance"}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white [font-family:'Almarai',Helvetica] mb-6" dir={direction}>
              {language === "ar" ? "نصنع قادة الأعمال والمال" : "We Shape Business & Finance Leaders"}
            </h1>
            <p className="text-white/80 text-lg md:text-xl [font-family:'Almarai',Helvetica] mb-8 max-w-[600px] mx-auto" dir={direction}>
              {language === "ar" ? "برامج أكاديمية متميزة في الإدارة والمحاسبة والعلوم المالية ونظم المعلومات" : "Distinguished academic programs in management, accounting, financial sciences, and information systems"}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/institute/management/departments">
                <Button className="px-8 py-3 h-auto rounded-full bg-green-600 hover:bg-green-700 text-white [font-family:'Almarai',Helvetica] transition-all">
                  {language === "ar" ? "استكشف الأقسام" : "Explore Departments"}
                </Button>
              </Link>
              <Link href="/institute/management/admission">
                <Button variant="outline" className="px-8 py-3 h-auto rounded-full border-2 border-white bg-transparent text-white hover:bg-white hover:text-green-900 [font-family:'Almarai',Helvetica] transition-all">
                  {language === "ar" ? "شروط القبول" : "Admission Requirements"}
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" dir={direction}>
            <AnimatedSection direction="right">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-1 bg-green-700 rounded-full" />
                  <span className="text-green-700 font-bold text-sm [font-family:'Almarai',Helvetica]">{language === "ar" ? "كلمة العميد" : "Dean's Message"}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "رسالة عميد المعهد" : "Message from the Dean"}</h2>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg [font-family:'Almarai',Helvetica] transition-colors duration-300">
                  {language === "ar" ? "أرحب بكم في المعهد العالي للإدارة والمالية ونظم المعلومات، أحد أعرق المؤسسات التعليمية المتخصصة في مجالات الإدارة والأعمال. نسعى جاهدين لتقديم تعليم متميز يجمع بين الأسس النظرية والتطبيق العملي." : "Welcome to the Higher Institute of Management, Finance, and Information Systems, one of the most prestigious educational institutions specializing in management and business. We strive to provide distinguished education that combines theoretical foundations with practical application."}
                </p>
                <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">
                  {language === "ar" ? "نحرص على إعداد كوادر مؤهلة قادرة على المنافسة في سوق العمل المحلي والدولي، من خلال مناهج حديثة وأعضاء هيئة تدريس متميزين وشراكات مع كبرى المؤسسات." : "We are committed to preparing qualified professionals who can compete in local and international job markets, through modern curricula, distinguished faculty members, and partnerships with major institutions."}
                </p>
                <Link href="/institute/management/about">
                  <Button variant="outline" className="w-fit px-6 py-2.5 h-auto rounded-full border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white [font-family:'Almarai',Helvetica] transition-all">
                    {language === "ar" ? "المزيد عن المعهد" : "More About the Institute"}
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left" delay={0.2}>
              <div className="relative">
                <img src="/figmaAssets/rectangle-16.png" alt="Dean" className="rounded-3xl shadow-2xl w-full h-[400px] object-cover" />
                <div className="absolute -bottom-6 -right-6 bg-green-700 text-white p-6 rounded-2xl shadow-lg hidden md:block">
                  <div className="text-3xl font-bold [font-family:'Almarai',Helvetica]">+15</div>
                  <div className="text-sm text-green-200 [font-family:'Almarai',Helvetica]">{language === "ar" ? "عام من التميز" : "Years of Excellence"}</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-16" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <span className="text-green-700 font-bold text-sm [font-family:'Almarai',Helvetica]">{language === "ar" ? "أقسامنا" : "Our Departments"}</span>
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "الأقسام الأكاديمية" : "Academic Departments"}</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" dir={direction}>
            {departments.map((dept, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <div>
                  <Link href={`/institute/management/department/${dept.slug}`}>
                    <Card className="rounded-2xl border-0 shadow-sm hover:shadow-xl transition-all cursor-pointer h-full group bg-white dark:bg-neutral-800 dark:border-neutral-700">
                      <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${dept.color} group-hover:bg-green-700 dark:group-hover:bg-green-600 transition-all`}>
                          <dept.icon className="w-8 h-8 group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{dept.name}</h3>
                        <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{dept.desc}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-700 dark:bg-green-900 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8" dir={direction}>
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.15} direction="up">
                <div className="flex flex-col items-center gap-3 text-center">
                  <stat.icon className="w-8 h-8 text-white/80" />
                  <div className="text-3xl md:text-4xl font-bold text-white [font-family:'Almarai',Helvetica]">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix || ""} />
                  </div>
                  <span className="text-white/70 text-sm [font-family:'Almarai',Helvetica]">{stat.label}</span>
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
                <span className="text-green-700 font-bold text-sm [font-family:'Almarai',Helvetica]">{language === "ar" ? "مميزاتنا" : "Our Features"}</span>
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "لماذا تختار معهدنا؟" : "Why Choose Our Institute?"}</h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-lg mt-4 max-w-[600px] mx-auto [font-family:'Almarai',Helvetica]">{language === "ar" ? "نقدم بيئة تعليمية متكاملة تجمع بين التميز الأكاديمي والتطبيق العملي" : "We provide a comprehensive learning environment combining academic excellence and practical application"}</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" dir={direction}>
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full bg-white dark:bg-neutral-800 dark:border-neutral-700">
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center">
                      <feature.icon className="w-7 h-7 text-green-700 dark:text-green-400" />
                    </div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica]">{feature.title}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica]">{feature.desc}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "آخر الأخبار" : "Latest News"}</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" dir={direction}>
            {newsLoading ? (
              <div className="col-span-full flex items-center justify-center py-12">
                <Loader2 className="w-8 h-8 text-green-700 dark:text-green-400 animate-spin" />
              </div>
            ) : news.length > 0 ? (
              news.map((item, index) => (
                <AnimatedSection key={item.id} delay={index * 0.1} direction="up">
                  <div>
                    <Link href={`/news/${item.slug}`}>
                      <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all cursor-pointer group overflow-hidden bg-white dark:bg-neutral-800 dark:border-neutral-700">
                        <CardContent className="p-0">
                          <div className="relative overflow-hidden">
                            <img className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-500" alt={language === "ar" ? item.titleAr : (item.titleEn || item.titleAr)} src={item.coverImage || "/figmaAssets/rectangle-16.png"} />
                          </div>
                          <div className="p-5 flex flex-col gap-2">
                            <span className="text-neutral-400 dark:text-neutral-500 text-xs [font-family:'Almarai',Helvetica] flex items-center gap-1"><Calendar className="w-3 h-3" />{new Date(item.createdAt).toLocaleDateString(language === "ar" ? "ar-EG" : "en-US")}</span>
                            <h3 className="font-bold text-base text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] line-clamp-2 transition-colors duration-300">{language === "ar" ? item.titleAr : (item.titleEn || item.titleAr)}</h3>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </div>
                </AnimatedSection>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-neutral-500 dark:text-neutral-400 [font-family:'Almarai',Helvetica]">{language === "ar" ? "لا توجد أخبار متاحة" : "No news available"}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-l from-green-700 to-green-800 dark:from-green-900 dark:to-green-950 transition-colors duration-300">
        <div className="max-w-[800px] mx-auto px-4 md:px-8 text-center" dir={direction}>
          <AnimatedSection>
            <GraduationCap className="w-14 h-14 text-white/80 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white [font-family:'Almarai',Helvetica] mb-4">{language === "ar" ? "ابدأ رحلتك الأكاديمية معنا" : "Start Your Academic Journey With Us"}</h2>
            <p className="text-white/80 text-lg [font-family:'Almarai',Helvetica] mb-8 max-w-[500px] mx-auto">{language === "ar" ? "سجل الآن وانضم إلى آلاف الخريجين الناجحين في مجالات الإدارة والأعمال" : "Register now and join thousands of successful graduates in management and business"}</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/institute/management/admission">
                <Button className="px-8 py-3 h-auto rounded-full bg-white text-green-800 hover:bg-green-50 [font-family:'Almarai',Helvetica] font-bold transition-all">
                  {language === "ar" ? "تقدم بطلب الالتحاق" : "Apply for Admission"}
                </Button>
              </Link>
              <Link href="/institute/management/contact">
                <Button variant="outline" className="px-8 py-3 h-auto rounded-full border-2 border-white text-white bg-transparent hover:bg-white hover:text-green-800 [font-family:'Almarai',Helvetica] transition-all">
                  {language === "ar" ? "تواصل معنا" : "Contact Us"}
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-green-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[800px] mx-auto px-4 md:px-8 text-center" dir={direction}>
          <AnimatedSection>
            <CheckCircle2 className="w-12 h-12 text-green-700 dark:text-green-500 mx-auto mb-4 transition-colors duration-300" />
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] mb-4 transition-colors duration-300">{language === "ar" ? "ضمان الجودة" : "Quality Assurance"}</h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-lg [font-family:'Almarai',Helvetica] mb-8 transition-colors duration-300">{language === "ar" ? "نلتزم بأعلى معايير الجودة الأكاديمية لضمان تقديم تعليم متميز" : "We adhere to the highest academic quality standards to ensure distinguished education"}</p>
            <Link href="/institute/management/quality">
              <Button className="px-8 py-3 h-auto rounded-full bg-green-700 hover:bg-green-800 text-white [font-family:'Almarai',Helvetica] transition-all">
                {language === "ar" ? "تعرف على وحدة ضمان الجودة" : "Learn About Quality Assurance"}
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <InstituteFooter {...managementFooter} />
    </div>
  );
}
