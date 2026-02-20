import { InstituteNavbar } from "@/components/institute/InstituteNavbar";
import { InstituteFooter } from "@/components/institute/InstituteFooter";
import { engineeringNavbar, engineeringFooter } from "@/lib/instituteConfig";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Building2, Cpu, Zap, Settings, GraduationCap, Users, BookOpen, FlaskConical, CheckCircle2, Calendar, Award, Cog, Globe, Target, Shield, Microscope } from "lucide-react";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";

export default function EngineeringHome() {
  const { language, direction } = useLanguage();

  const departments = [
    { icon: Zap, name: language === "ar" ? "هندسة القوى والاتصالات الكهربائية" : "Power & Electrical Communications Engineering", desc: language === "ar" ? "أنظمة الطاقة والإلكترونيات والاتصالات" : "Power systems, electronics, and communications", slug: "power-telecom", color: "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400" },
    { icon: Building2, name: language === "ar" ? "الهندسة المدنية والبيئية" : "Civil & Environmental Engineering", desc: language === "ar" ? "تصميم وتنفيذ المنشآت والبنية التحتية" : "Design and construction of structures and infrastructure", slug: "civil", color: "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400" },
    { icon: Cpu, name: language === "ar" ? "الهندسة المعمارية والتصميم" : "Architecture & Design Engineering", desc: language === "ar" ? "التصميم المعماري والتخطيط العمراني" : "Architectural design and urban planning", slug: "architecture", color: "bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-400" },
    { icon: Settings, name: language === "ar" ? "هندسة التحكم والحاسبات" : "Control & Computer Engineering", desc: language === "ar" ? "أنظمة التحكم والذكاء الاصطناعي والبرمجيات" : "Control systems, AI, and software engineering", slug: "control-computer", color: "bg-sky-50 dark:bg-sky-900/20 text-sky-700 dark:text-sky-400" },
  ];

  const stats = [
    { icon: GraduationCap, value: 2000, suffix: "+", label: language === "ar" ? "خريج" : "Graduates" },
    { icon: Users, value: 100, suffix: "+", label: language === "ar" ? "عضو هيئة تدريس" : "Faculty Members" },
    { icon: FlaskConical, value: 12, label: language === "ar" ? "معمل متخصص" : "Specialized Labs" },
    { icon: BookOpen, value: 4, label: language === "ar" ? "أقسام أكاديمية" : "Academic Departments" },
  ];

  const features = [
    { icon: FlaskConical, title: language === "ar" ? "معامل حديثة" : "Modern Labs", desc: language === "ar" ? "12 معملاً متخصصاً مجهزاً بأحدث الأجهزة والتقنيات الهندسية" : "12 specialized labs equipped with the latest engineering devices and technologies" },
    { icon: Microscope, title: language === "ar" ? "بحث علمي" : "Scientific Research", desc: language === "ar" ? "مركز بحث علمي متقدم يدعم الابتكار والتطوير التقني" : "Advanced research center supporting innovation and technical development" },
    { icon: Globe, title: language === "ar" ? "شراكات دولية" : "International Partnerships", desc: language === "ar" ? "تعاون مع جامعات ومؤسسات هندسية عالمية" : "Collaboration with international universities and engineering institutions" },
    { icon: Target, title: language === "ar" ? "توظيف متميز" : "Outstanding Employment", desc: language === "ar" ? "نسبة توظيف عالية للخريجين في كبرى شركات المقاولات والتكنولوجيا" : "High employment rate for graduates in major contracting and technology companies" },
    { icon: Shield, title: language === "ar" ? "اعتماد هندسي" : "Engineering Accreditation", desc: language === "ar" ? "برامج معتمدة من نقابة المهندسين وهيئات الجودة" : "Programs accredited by the Engineers Syndicate and quality bodies" },
    { icon: Cog, title: language === "ar" ? "تدريب ميداني" : "Field Training", desc: language === "ar" ? "برامج تدريب عملي في المصانع والمشاريع الهندسية الكبرى" : "Practical training programs in factories and major engineering projects" },
  ];

  const news = [
    { id: 1, title: language === "ar" ? "افتتاح المعمل الجديد للهندسة الكهربائية" : "Opening of New Electrical Engineering Lab", date: language === "ar" ? "20 فبراير 2026" : "February 20, 2026", image: "/figmaAssets/rectangle-17.png" },
    { id: 2, title: language === "ar" ? "مؤتمر المرأة في العلوم الهندسية" : "Women in Engineering Sciences Conference", date: language === "ar" ? "15 فبراير 2026" : "February 15, 2026", image: "/figmaAssets/rectangle-12-1.png" },
    { id: 3, title: language === "ar" ? "مشاركة طلابنا في مسابقة IEEE" : "Students Participate in IEEE Competition", date: language === "ar" ? "10 فبراير 2026" : "February 10, 2026", image: "/figmaAssets/rectangle-10.png" },
  ];

  const ArrowIcon = direction === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={language === "ar" ? "المعهد العالي للهندسة" : "Higher Institute of Engineering"} description={language === "ar" ? "المعهد العالي للهندسة والتكنولوجيا - أحد معاهد الوادي العليا" : "Higher Institute of Engineering and Technology - One of Al-Wadi Al-Olia Institutes"} />
      <InstituteNavbar {...engineeringNavbar} />

      <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" alt="Engineering" src="/figmaAssets/rectangle-17.png" />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-blue-900/40 to-blue-900/80" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-[800px] mx-auto">
          <AnimatedSection>
            <div className="inline-block bg-blue-600/30 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-blue-200 text-sm font-bold [font-family:'Almarai',Helvetica]" dir={direction}>{language === "ar" ? "المعهد العالي للهندسة والتكنولوجيا" : "Higher Institute of Engineering and Technology"}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white [font-family:'Almarai',Helvetica] mb-6" dir={direction}>
              {language === "ar" ? "نصنع مهندسي المستقبل" : "We Shape Future Engineers"}
            </h1>
            <p className="text-white/80 text-lg md:text-xl [font-family:'Almarai',Helvetica] mb-8 max-w-[600px] mx-auto" dir={direction}>
              {language === "ar" ? "برامج هندسية متقدمة ومعامل حديثة لتخريج كوادر هندسية مؤهلة" : "Distinguished academic programs in electrical, civil, architectural, and control engineering"}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/institute/engineering/departments">
                <Button className="px-8 py-3 h-auto rounded-full bg-blue-600 hover:bg-blue-700 text-white [font-family:'Almarai',Helvetica] transition-all">
                  {language === "ar" ? "استكشف الأقسام" : "Explore Departments"}
                </Button>
              </Link>
              <Link href="/institute/engineering/labs">
                <Button variant="outline" className="px-8 py-3 h-auto rounded-full border-2 border-white bg-transparent text-white hover:bg-white hover:text-blue-900 [font-family:'Almarai',Helvetica] transition-all">
                  {language === "ar" ? "المعامل والمرافق" : "Labs & Facilities"}
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
                  <div className="w-12 h-1 bg-blue-700 rounded-full" />
                  <span className="text-blue-700 font-bold text-sm [font-family:'Almarai',Helvetica]">{language === "ar" ? "كلمة العميد" : "Dean's Message"}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "رسالة عميد المعهد" : "Message from the Dean"}</h2>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg [font-family:'Almarai',Helvetica] transition-colors duration-300">
                  {language === "ar" ? "أرحب بكم في المعهد العالي للهندسة والتكنولوجيا، حيث نجمع بين العلوم الهندسية الأساسية والتطبيقات التكنولوجية المتقدمة. نسعى لإعداد مهندسين قادرين على مواجهة تحديات العصر." : "Welcome to the Higher Institute of Engineering and Technology, where we combine fundamental engineering sciences with advanced technological applications. We strive to prepare engineers capable of meeting the challenges of the modern era."}
                </p>
                <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">
                  {language === "ar" ? "يضم المعهد أحدث المعامل الهندسية ومركز بحث علمي متقدم، إلى جانب شراكات مع كبرى الشركات الهندسية لضمان التدريب الميداني المتميز لطلابنا." : "The institute houses the latest engineering labs and an advanced research center, along with partnerships with major engineering companies to ensure outstanding field training for our students."}
                </p>
                <Link href="/institute/engineering/about">
                  <Button variant="outline" className="w-fit px-6 py-2.5 h-auto rounded-full border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white [font-family:'Almarai',Helvetica] transition-all">
                    {language === "ar" ? "المزيد عن المعهد" : "More About the Institute"}
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left" delay={0.2}>
              <div className="relative">
                <img src="/figmaAssets/rectangle-17.png" alt="Dean" className="rounded-3xl shadow-2xl w-full h-[400px] object-cover" />
                <div className="absolute -bottom-6 -right-6 bg-blue-700 text-white p-6 rounded-2xl shadow-lg hidden md:block">
                  <div className="text-3xl font-bold [font-family:'Almarai',Helvetica]">12+</div>
                  <div className="text-sm text-blue-200 [font-family:'Almarai',Helvetica]">{language === "ar" ? "معمل متخصص" : "Specialized Labs"}</div>
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
                <div className="w-12 h-1 bg-blue-700 rounded-full" />
                <span className="text-blue-700 font-bold text-sm [font-family:'Almarai',Helvetica]">{language === "ar" ? "أقسامنا" : "Our Departments"}</span>
                <div className="w-12 h-1 bg-blue-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "الأقسام الهندسية" : "Engineering Departments"}</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" dir={direction}>
            {departments.map((dept, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <div>
                  <Link href={`/institute/engineering/department/${dept.slug}`}>
                    <Card className="rounded-2xl border-0 shadow-sm hover:shadow-xl transition-all cursor-pointer h-full group bg-white dark:bg-neutral-800 dark:border-neutral-700">
                      <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${dept.color} group-hover:bg-blue-700 dark:group-hover:bg-blue-600 transition-all`}>
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

      <section className="py-16 bg-blue-700 dark:bg-blue-900 transition-colors duration-300">
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
                <div className="w-12 h-1 bg-blue-700 rounded-full" />
                <span className="text-blue-700 font-bold text-sm [font-family:'Almarai',Helvetica]">{language === "ar" ? "مميزاتنا" : "Our Features"}</span>
                <div className="w-12 h-1 bg-blue-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "لماذا تختار معهدنا؟" : "Why Choose Our Institute?"}</h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-lg mt-4 max-w-[600px] mx-auto [font-family:'Almarai',Helvetica]">{language === "ar" ? "بيئة هندسية متكاملة تجمع بين النظرية والتطبيق العملي" : "A comprehensive engineering environment combining theory and practical application"}</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" dir={direction}>
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full bg-white dark:bg-neutral-800 dark:border-neutral-700">
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                      <feature.icon className="w-7 h-7 text-blue-700 dark:text-blue-400" />
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

      <section className="py-20 bg-blue-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <FlaskConical className="w-10 h-10 text-blue-700 dark:text-blue-500 mx-auto mb-4 transition-colors duration-300" />
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "المعامل والمرافق" : "Labs & Facilities"}</h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-lg mt-4 max-w-[500px] mx-auto [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "معامل متطورة مجهزة بأحدث الأجهزة" : "Advanced labs equipped with the latest devices"}</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" dir={direction}>
            {(language === "ar" ? ["معمل الهندسة الكهربائية", "معمل الخرسانة والمواد", "معمل الحاسبات والبرمجيات"] : ["Electrical Engineering Lab", "Concrete & Materials Lab", "Computer & Software Lab"]).map((lab, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Link href="/institute/engineering/labs">
                  <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all cursor-pointer bg-white dark:bg-neutral-800 dark:border-neutral-700">
                    <CardContent className="p-6 text-center">
                      <FlaskConical className="w-10 h-10 text-blue-700 dark:text-blue-500 mx-auto mb-3 transition-colors duration-300" />
                      <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{lab}</h3>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "آخر الأخبار" : "Latest News"}</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" dir={direction}>
            {news.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 0.1} direction="up">
                <div>
                  <Link href="/institute/engineering/news">
                    <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all cursor-pointer group overflow-hidden bg-white dark:bg-neutral-800 dark:border-neutral-700">
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden">
                          <img className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-500" alt={item.title} src={item.image} />
                        </div>
                        <div className="p-5 flex flex-col gap-2">
                          <span className="text-neutral-400 dark:text-neutral-500 text-xs [font-family:'Almarai',Helvetica] flex items-center gap-1"><Calendar className="w-3 h-3" />{item.date}</span>
                          <h3 className="font-bold text-base text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] line-clamp-2 transition-colors duration-300">{item.title}</h3>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-l from-blue-700 to-blue-800 dark:from-blue-900 dark:to-blue-950 transition-colors duration-300">
        <div className="max-w-[800px] mx-auto px-4 md:px-8 text-center" dir={direction}>
          <AnimatedSection>
            <GraduationCap className="w-14 h-14 text-white/80 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white [font-family:'Almarai',Helvetica] mb-4">{language === "ar" ? "ابدأ رحلتك الهندسية معنا" : "Start Your Engineering Journey With Us"}</h2>
            <p className="text-white/80 text-lg [font-family:'Almarai',Helvetica] mb-8 max-w-[500px] mx-auto">{language === "ar" ? "انضم إلى آلاف المهندسين الناجحين وابنِ مستقبلك المهني معنا" : "Join thousands of successful engineers and build your professional future with us"}</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/institute/engineering/admission">
                <Button className="px-8 py-3 h-auto rounded-full bg-white text-blue-800 hover:bg-blue-50 [font-family:'Almarai',Helvetica] font-bold transition-all">
                  {language === "ar" ? "تقدم بطلب الالتحاق" : "Apply for Admission"}
                </Button>
              </Link>
              <Link href="/institute/engineering/contact">
                <Button variant="outline" className="px-8 py-3 h-auto rounded-full border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-800 [font-family:'Almarai',Helvetica] transition-all">
                  {language === "ar" ? "تواصل معنا" : "Contact Us"}
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[800px] mx-auto px-4 md:px-8 text-center" dir={direction}>
          <AnimatedSection>
            <CheckCircle2 className="w-12 h-12 text-blue-700 dark:text-blue-500 mx-auto mb-4 transition-colors duration-300" />
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] mb-4 transition-colors duration-300">{language === "ar" ? "ضمان الجودة" : "Quality Assurance"}</h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-lg [font-family:'Almarai',Helvetica] mb-8 transition-colors duration-300">{language === "ar" ? "معايير جودة أكاديمية عالية تضمن تخريج مهندسين مؤهلين" : "High academic quality standards ensuring the graduation of qualified engineers"}</p>
            <Link href="/institute/engineering/quality">
              <Button className="px-8 py-3 h-auto rounded-full bg-blue-700 hover:bg-blue-800 text-white [font-family:'Almarai',Helvetica] transition-all">
                {language === "ar" ? "تعرف على وحدة ضمان الجودة" : "Learn About Quality Assurance"}
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <InstituteFooter {...engineeringFooter} />
    </div>
  );
}
