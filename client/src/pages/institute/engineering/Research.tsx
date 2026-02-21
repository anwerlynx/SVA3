import { InstituteNavbar } from "@/components/institute/InstituteNavbar";
import { InstituteFooter } from "@/components/institute/InstituteFooter";
import { engineeringNavbar, engineeringFooter } from "@/lib/instituteConfig";
import { InstituteHero } from "@/components/institute/InstituteHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { Breadcrumb } from "@/components/Breadcrumb";
import {
  Microscope, BookOpen, Handshake, FlaskConical,
  Zap, Building2, Cpu, Settings, FileText, Calendar, Users, Loader2
} from "lucide-react";
import { useState, useEffect } from "react";

const researchAreas = [
  { icon: Zap, titleAr: "أنظمة الطاقة المتجددة", titleEn: "Renewable Energy Systems", descAr: "أبحاث في الطاقة الشمسية وطاقة الرياح وتخزين الطاقة", descEn: "Research in solar energy, wind energy, and energy storage" },
  { icon: Building2, titleAr: "الهندسة الإنشائية المتقدمة", titleEn: "Advanced Structural Engineering", descAr: "تطوير مواد بناء مبتكرة وتقنيات إنشاء حديثة", descEn: "Development of innovative building materials and modern construction techniques" },
  { icon: Cpu, titleAr: "العمارة المستدامة", titleEn: "Sustainable Architecture", descAr: "تصميم مباني خضراء وعمارة صديقة للبيئة", descEn: "Green building design and environmentally friendly architecture" },
  { icon: Settings, titleAr: "الذكاء الاصطناعي والتحكم", titleEn: "AI & Control Systems", descAr: "تطبيقات الذكاء الاصطناعي في الأنظمة الهندسية", descEn: "AI applications in engineering systems" },
];

const publishedResearch = [
  { titleAr: "تحسين كفاءة الخلايا الشمسية باستخدام تقنيات النانو", titleEn: "Improving Solar Cell Efficiency Using Nanotechnology", authorAr: "أ.د. أحمد محمد إبراهيم", authorEn: "Prof. Ahmed Mohamed Ibrahim", journalAr: "المجلة الدولية للطاقة المتجددة", journalEn: "International Journal of Renewable Energy", yearAr: "2025", yearEn: "2025" },
  { titleAr: "تطوير خرسانة عالية الأداء مقاومة للزلازل", titleEn: "Development of High-Performance Earthquake-Resistant Concrete", authorAr: "أ.د. حسين محمود عبدالله", authorEn: "Prof. Hussein Mahmoud Abdullah", journalAr: "مجلة الهندسة الإنشائية", journalEn: "Journal of Structural Engineering", yearAr: "2025", yearEn: "2025" },
  { titleAr: "تصميم معماري مستدام لمباني المناخ الحار", titleEn: "Sustainable Architectural Design for Hot Climate Buildings", authorAr: "أ.د. سامي عبدالعزيز", authorEn: "Prof. Sami Abdulaziz", journalAr: "المجلة العربية للعمارة", journalEn: "Arab Architecture Journal", yearAr: "2024", yearEn: "2024" },
  { titleAr: "تطبيقات التعلم العميق في التحكم الصناعي", titleEn: "Deep Learning Applications in Industrial Control", authorAr: "أ.د. عادل محمد سليمان", authorEn: "Prof. Adel Mohamed Soliman", journalAr: "مجلة هندسة الحاسبات", journalEn: "Journal of Computer Engineering", yearAr: "2024", yearEn: "2024" },
  { titleAr: "تحليل أداء شبكات الجيل الخامس في المناطق الحضرية", titleEn: "Performance Analysis of 5G Networks in Urban Areas", authorAr: "د. محمد علي حسن", authorEn: "Dr. Mohamed Ali Hassan", journalAr: "مجلة هندسة الاتصالات", journalEn: "Journal of Telecom Engineering", yearAr: "2024", yearEn: "2024" },
  { titleAr: "نمذجة وتحليل السدود الخرسانية بطريقة العناصر المحدودة", titleEn: "Modeling and Analysis of Concrete Dams Using Finite Element Method", authorAr: "د. عمرو سعيد محمد", authorEn: "Dr. Amr Said Mohamed", journalAr: "مجلة الموارد المائية", journalEn: "Journal of Water Resources", yearAr: "2023", yearEn: "2023" },
];

const partnerships = [
  { nameAr: "الأكاديمية العربية للعلوم والتكنولوجيا", nameEn: "Arab Academy for Science & Technology", descAr: "شراكة بحثية في مجال الطاقة المتجددة", descEn: "Research partnership in renewable energy" },
  { nameAr: "المركز القومي للبحوث", nameEn: "National Research Center", descAr: "تعاون في مجال المواد الهندسية المتقدمة", descEn: "Collaboration in advanced engineering materials" },
  { nameAr: "جامعة القاهرة - كلية الهندسة", nameEn: "Cairo University - Faculty of Engineering", descAr: "برنامج بحثي مشترك في الذكاء الاصطناعي", descEn: "Joint research program in artificial intelligence" },
  { nameAr: "الهيئة العامة للتصنيع", nameEn: "General Authority for Industrialization", descAr: "أبحاث تطبيقية في الأتمتة الصناعية", descEn: "Applied research in industrial automation" },
];

const researchLabs = [
  { nameAr: "معمل أبحاث الطاقة المتجددة", nameEn: "Renewable Energy Research Lab", descAr: "مجهز بأنظمة طاقة شمسية وأجهزة قياس متطورة", descEn: "Equipped with solar energy systems and advanced measurement devices" },
  { nameAr: "معمل أبحاث المواد والخرسانة", nameEn: "Materials & Concrete Research Lab", descAr: "لاختبار وتطوير مواد بناء مبتكرة", descEn: "For testing and developing innovative building materials" },
  { nameAr: "معمل أبحاث الذكاء الاصطناعي", nameEn: "AI Research Lab", descAr: "مجهز بخوادم عالية الأداء لتدريب نماذج الذكاء الاصطناعي", descEn: "Equipped with high-performance servers for AI model training" },
];

export default function EngineeringResearch() {
  const { language, direction } = useLanguage();
  const [apiResearch, setApiResearch] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const pageTitle = language === "ar" ? "البحث العلمي" : "Scientific Research";

  useEffect(() => {
    const fetchResearch = async () => {
      try {
        const response = await fetch("/api/research");
        if (response.ok) {
          const data = await response.json();
          setApiResearch(data);
        }
      } catch (error) {
        console.error("Error fetching research:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResearch();
  }, []);

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={language === "ar" ? "البحث العلمي - المعهد العالي للهندسة" : "Research - Higher Institute of Engineering"} description={language === "ar" ? "البحث العلمي في المعهد العالي للهندسة والتكنولوجيا" : "Research at the Higher Institute of Engineering & Technology"} />
      <InstituteNavbar {...engineeringNavbar} />
      <InstituteHero title={language === "ar" ? "البحث العلمي" : "Scientific Research"} subtitle={language === "ar" ? "أبحاث هندسية متقدمة تخدم المجتمع والصناعة" : "Advanced engineering research serving society and industry"} image="/figmaAssets/rectangle-17.png" overlayColor="from-blue-900/60 to-blue-900/80" />

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 pt-6">
        <Breadcrumb
          items={[
            { label: language === 'ar' ? 'الرئيسية' : 'Home', href: '/' },
            { label: language === 'ar' ? 'معهد الهندسة' : 'Engineering Institute', href: '/institute/engineering' },
            { label: pageTitle },
          ]}
        />
      </div>

      <section className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1100px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-16" dir={direction}>
              <Microscope className="w-10 h-10 text-blue-700 dark:text-blue-500 mx-auto mb-4 transition-colors duration-300" />
              <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "مجالات البحث" : "Research Areas"}</h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-lg mt-4 max-w-[600px] mx-auto [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "يركز المعهد على مجالات بحثية متعددة تواكب التطور التكنولوجي" : "The institute focuses on multiple research areas keeping pace with technological development"}</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" dir={direction}>
            {researchAreas.map((area, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full group bg-white dark:bg-neutral-900 dark:border-neutral-800">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center group-hover:bg-blue-700 dark:group-hover:bg-blue-600 transition-all">
                      <area.icon className="w-8 h-8 text-blue-700 dark:text-blue-500 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? area.titleAr : area.titleEn}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? area.descAr : area.descEn}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[1100px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <BookOpen className="w-10 h-10 text-blue-700 dark:text-blue-500 mx-auto mb-4 transition-colors duration-300" />
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "الأبحاث المنشورة" : "Published Research"}</h2>
            </div>
          </AnimatedSection>
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="w-8 h-8 text-blue-700 dark:text-blue-500 animate-spin" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" dir={direction}>
              {[
                ...apiResearch.map((item: any, index: number) => ({
                  titleAr: item.titleAr || "",
                  titleEn: item.titleEn || "",
                  authorAr: (item.authorIds && item.authorIds.join(", ")) || "",
                  authorEn: (item.authorIds && item.authorIds.join(", ")) || "",
                  journalAr: item.journal || "",
                  journalEn: item.journal || "",
                  yearAr: item.publishedYear ? item.publishedYear.toString() : "",
                  yearEn: item.publishedYear ? item.publishedYear.toString() : "",
                  _isApi: true as const,
                  _apiIndex: index,
                })),
                ...publishedResearch.map((item) => ({ ...item, _isApi: false as const, _apiIndex: 0 })),
              ].map((research: any, index) => (
                <AnimatedSection key={`${research._isApi ? 'api' : 'hardcoded'}-${research._isApi ? research._apiIndex : index}`} delay={index * 0.08} direction="up">
                  <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full bg-white dark:bg-neutral-800 dark:border-neutral-700">
                    <CardContent className="p-6 flex flex-col gap-3">
                      <div className="flex items-start gap-3">
                        <FileText className="w-5 h-5 text-blue-700 dark:text-blue-500 flex-shrink-0 mt-1 transition-colors duration-300" />
                        <h3 className="font-bold text-base text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? research.titleAr : research.titleEn}</h3>
                      </div>
                      <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 text-sm [font-family:'Almarai',Helvetica] transition-colors duration-300">
                        <Users className="w-4 h-4 flex-shrink-0" />
                        <span>{language === "ar" ? research.authorAr : research.authorEn}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-neutral-400 dark:text-neutral-500 text-xs [font-family:'Almarai',Helvetica]">{language === "ar" ? research.journalAr : research.journalEn}</span>
                        <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full text-xs [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? research.yearAr : research.yearEn}</span>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1100px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <Handshake className="w-10 h-10 text-blue-700 dark:text-blue-500 mx-auto mb-4 transition-colors duration-300" />
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "الشراكات البحثية" : "Research Partnerships"}</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" dir={direction}>
            {partnerships.map((partner, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full bg-white dark:bg-neutral-900 dark:border-neutral-800">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                      <Handshake className="w-6 h-6 text-blue-700 dark:text-blue-500 transition-colors duration-300" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="font-bold text-base text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? partner.nameAr : partner.nameEn}</h3>
                      <p className="text-neutral-500 dark:text-neutral-400 text-sm [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? partner.descAr : partner.descEn}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[1100px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <FlaskConical className="w-10 h-10 text-blue-700 dark:text-blue-500 mx-auto mb-4 transition-colors duration-300" />
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "المعامل البحثية" : "Research Labs"}</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" dir={direction}>
            {researchLabs.map((lab, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full bg-white dark:bg-neutral-800 dark:border-neutral-700">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center transition-colors duration-300">
                      <FlaskConical className="w-7 h-7 text-blue-700 dark:text-blue-500 transition-colors duration-300" />
                    </div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? lab.nameAr : lab.nameEn}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? lab.descAr : lab.descEn}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <InstituteFooter {...engineeringFooter} />
    </div>
  );
}