import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Card, CardContent } from "@/components/ui/card";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { Users, Mail, Award, Target, Shield, Lightbulb, TrendingUp, Building2, GraduationCap, Globe, ChevronDown } from "lucide-react";

export default function Board() {
  const { language, direction } = useLanguage();

  const pageTitle = language === 'ar' ? 'مجلس الإدارة' : 'Board of Directors';
  const pageSubtitle = language === 'ar'
    ? 'قيادة رؤية التميز الأكاديمي والابتكار'
    : 'Leading the vision of academic excellence and innovation';

  const chairmanName = language === 'ar' ? 'أ.د. محمد أحمد العزيز' : 'Prof. Mohamed Ahmed Al-Aziz';
  const chairmanRole = language === 'ar' ? 'رئيس مجلس الإدارة' : 'Chairman of the Board';
  const chairmanMessage = language === 'ar'
    ? 'نسعى في معاهد الوادي العليا إلى بناء مؤسسة تعليمية رائدة تلبي احتياجات سوق العمل وتواكب التطورات العالمية. نؤمن بأن الاستثمار في التعليم هو أساس بناء مستقبل مشرق لأبنائنا الطلاب ولمجتمعنا ككل. نعمل بلا كلل لتوفير بيئة تعليمية محفزة تجمع بين المعرفة النظرية والتطبيق العملي.'
    : 'At Valley Higher Institutes, we strive to build a leading educational institution that meets the needs of the labor market and keeps pace with global developments. We believe that investing in education is the foundation for building a bright future for our students and our community as a whole. We work tirelessly to provide a stimulating educational environment that combines theoretical knowledge with practical application.';

  const boardStats = language === 'ar' ? [
    { icon: Users, value: 9, suffix: "", label: "أعضاء المجلس" },
    { icon: Award, value: 25, suffix: "+", label: "سنوات خبرة" },
    { icon: Target, value: 50, suffix: "+", label: "قرار استراتيجي سنوياً" },
    { icon: GraduationCap, value: 15000, suffix: "+", label: "خريج مستفيد" },
  ] : [
    { icon: Users, value: 9, suffix: "", label: "Board Members" },
    { icon: Award, value: 25, suffix: "+", label: "Years of Experience" },
    { icon: Target, value: 50, suffix: "+", label: "Strategic Decisions/Year" },
    { icon: GraduationCap, value: 15000, suffix: "+", label: "Benefiting Graduates" },
  ];

  const boardMembers = [
    {
      name: language === 'ar' ? 'أ.د. سامي عبد الرحمن' : 'Prof. Sami Abdel Rahman',
      title: language === 'ar' ? 'نائب رئيس مجلس الإدارة' : 'Vice Chairman',
      role: language === 'ar' ? 'الشؤون الأكاديمية' : 'Academic Affairs',
      color: 'bg-emerald-500',
    },
    {
      name: language === 'ar' ? 'د. فاطمة حسن علي' : 'Dr. Fatma Hassan Ali',
      title: language === 'ar' ? 'عضو مجلس الإدارة' : 'Board Member',
      role: language === 'ar' ? 'الجودة والاعتماد' : 'Quality & Accreditation',
      color: 'bg-blue-500',
    },
    {
      name: language === 'ar' ? 'م. أحمد خالد محمود' : 'Eng. Ahmed Khaled Mahmoud',
      title: language === 'ar' ? 'عضو مجلس الإدارة' : 'Board Member',
      role: language === 'ar' ? 'التطوير والابتكار' : 'Development & Innovation',
      color: 'bg-purple-500',
    },
    {
      name: language === 'ar' ? 'د. نورا سعيد إبراهيم' : 'Dr. Noura Saeed Ibrahim',
      title: language === 'ar' ? 'عضو مجلس الإدارة' : 'Board Member',
      role: language === 'ar' ? 'شؤون الطلاب' : 'Student Affairs',
      color: 'bg-amber-500',
    },
    {
      name: language === 'ar' ? 'أ.د. عمر يوسف حسن' : 'Prof. Omar Youssef Hassan',
      title: language === 'ar' ? 'عضو مجلس الإدارة' : 'Board Member',
      role: language === 'ar' ? 'البحث العلمي' : 'Scientific Research',
      color: 'bg-teal-500',
    },
    {
      name: language === 'ar' ? 'د. مريم عادل السيد' : 'Dr. Mariam Adel El-Sayed',
      title: language === 'ar' ? 'عضو مجلس الإدارة' : 'Board Member',
      role: language === 'ar' ? 'العلاقات الدولية' : 'International Relations',
      color: 'bg-rose-500',
    },
    {
      name: language === 'ar' ? 'أ. كريم محمد توفيق' : 'Mr. Karim Mohamed Tawfik',
      title: language === 'ar' ? 'أمين عام المجلس' : 'Secretary General',
      role: language === 'ar' ? 'الشؤون الإدارية' : 'Administrative Affairs',
      color: 'bg-indigo-500',
    },
    {
      name: language === 'ar' ? 'د. هالة إسماعيل عبده' : 'Dr. Hala Ismail Abdo',
      title: language === 'ar' ? 'عضو مجلس الإدارة' : 'Board Member',
      role: language === 'ar' ? 'خدمة المجتمع' : 'Community Service',
      color: 'bg-cyan-500',
    },
  ];

  const responsibilities = language === 'ar' ? [
    { icon: Shield, title: "الحوكمة المؤسسية", desc: "وضع السياسات والإجراءات التي تضمن الشفافية والمساءلة في جميع العمليات المؤسسية." },
    { icon: Target, title: "التخطيط الاستراتيجي", desc: "رسم الخطط الاستراتيجية طويلة المدى وتحديد الأهداف والأولويات المؤسسية." },
    { icon: TrendingUp, title: "التطوير المستمر", desc: "متابعة وتقييم الأداء الأكاديمي والإداري وتنفيذ خطط التحسين والتطوير." },
    { icon: Building2, title: "تطوير البنية التحتية", desc: "الإشراف على مشاريع التطوير والتحديث لضمان بيئة تعليمية عصرية ومتكاملة." },
    { icon: Globe, title: "التعاون الدولي", desc: "بناء شراكات استراتيجية مع مؤسسات تعليمية دولية لتبادل الخبرات والمعرفة." },
    { icon: Lightbulb, title: "دعم الابتكار", desc: "تشجيع البحث العلمي والابتكار وتوفير الموارد اللازمة لدعم المشاريع البحثية." },
  ] : [
    { icon: Shield, title: "Institutional Governance", desc: "Setting policies and procedures that ensure transparency and accountability in all institutional operations." },
    { icon: Target, title: "Strategic Planning", desc: "Drawing long-term strategic plans and setting institutional goals and priorities." },
    { icon: TrendingUp, title: "Continuous Development", desc: "Monitoring and evaluating academic and administrative performance and implementing improvement plans." },
    { icon: Building2, title: "Infrastructure Development", desc: "Supervising development and modernization projects to ensure a modern and integrated educational environment." },
    { icon: Globe, title: "International Cooperation", desc: "Building strategic partnerships with international educational institutions for knowledge and expertise exchange." },
    { icon: Lightbulb, title: "Innovation Support", desc: "Encouraging scientific research and innovation and providing necessary resources to support research projects." },
  ];

  const orgLevels = language === 'ar' ? [
    { title: "رئيس مجلس الإدارة", subtitle: "القيادة العليا والتوجيه الاستراتيجي", color: "bg-green-700" },
    { title: "نائب رئيس مجلس الإدارة", subtitle: "الإشراف الأكاديمي والإداري", color: "bg-green-600" },
    { title: "عمداء المعاهد", subtitle: "إدارة الشؤون الأكاديمية لكل معهد", color: "bg-green-500" },
    { title: "رؤساء الأقسام", subtitle: "إدارة البرامج الأكاديمية والبحثية", color: "bg-green-400" },
  ] : [
    { title: "Chairman of the Board", subtitle: "Senior leadership and strategic direction", color: "bg-green-700" },
    { title: "Vice Chairman", subtitle: "Academic and administrative oversight", color: "bg-green-600" },
    { title: "Institute Deans", subtitle: "Managing academic affairs for each institute", color: "bg-green-500" },
    { title: "Department Heads", subtitle: "Managing academic and research programs", color: "bg-green-400" },
  ];

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={pageTitle} description={pageSubtitle} />
      <Navbar />

      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" alt="Board" src="/figmaAssets/rectangle-2.png" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        </div>
        <div className="relative z-10 text-center px-4">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold text-white [font-family:'Almarai',Helvetica] mb-4" dir={direction}>
              {pageTitle}
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-[600px] mx-auto [font-family:'Almarai',Helvetica]" dir={direction}>
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

      <section className="py-16 bg-green-800 dark:bg-green-900 relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8" dir={direction}>
            {boardStats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.15} direction="up">
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white [font-family:'Almarai',Helvetica]">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <span className="text-white/80 text-sm [font-family:'Almarai',Helvetica]">{stat.label}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-16" dir={direction}>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'كلمة رئيس مجلس الإدارة' : 'Chairman\'s Message'}
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Card className="rounded-3xl border-0 shadow-lg max-w-[900px] mx-auto bg-white dark:bg-neutral-800 dark:border-neutral-700">
              <CardContent className="p-8 md:p-12" dir={direction}>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex flex-col items-center gap-3 flex-shrink-0 mx-auto md:mx-0">
                    <div className="w-28 h-28 rounded-full bg-green-700 flex items-center justify-center">
                      <span className="text-white text-4xl font-bold [font-family:'Almarai',Helvetica]">
                        {language === 'ar' ? 'م' : 'M'}
                      </span>
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-neutral-900 dark:text-white text-sm [font-family:'Almarai',Helvetica] transition-colors duration-300">{chairmanName}</h4>
                      <span className="text-green-700 dark:text-green-500 text-xs [font-family:'Almarai',Helvetica]">{chairmanRole}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">
                      "{chairmanMessage}"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
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
                {language === 'ar' ? 'الهيكل التنظيمي' : 'Organizational Structure'}
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-lg mt-4 [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'تسلسل القيادة والإدارة في المعاهد' : 'Leadership and management hierarchy'}
              </p>
            </div>
          </AnimatedSection>
          <div className="max-w-[700px] mx-auto flex flex-col items-center gap-4" dir={direction}>
            {orgLevels.map((level, index) => (
              <AnimatedSection key={index} delay={index * 0.15} direction="up">
                <div className="flex flex-col items-center">
                  <div className={`${level.color} rounded-2xl px-8 py-5 text-center shadow-lg`} style={{ minWidth: `${280 + index * 40}px`, maxWidth: '100%' }}>
                    <h4 className="font-bold text-white text-lg [font-family:'Almarai',Helvetica]">{level.title}</h4>
                    <p className="text-white/80 text-sm mt-1 [font-family:'Almarai',Helvetica]">{level.subtitle}</p>
                  </div>
                  {index < orgLevels.length - 1 && (
                    <ChevronDown className="w-6 h-6 text-green-500 dark:text-green-400 my-2" />
                  )}
                </div>
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
                <Users className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'أعضاء مجلس الإدارة' : 'Board Members'}
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-lg mt-4 [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'نخبة من الخبراء والأكاديميين يقودون مسيرة التميز' : 'An elite group of experts and academics leading the path of excellence'}
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" dir={direction}>
            {boardMembers.map((member, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-xl transition-all duration-300 h-full text-center group bg-white dark:bg-neutral-800 dark:border-neutral-700 hover:-translate-y-1 overflow-hidden">
                  <CardContent className="p-0">
                    <div className={`${member.color} h-20 relative`}>
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white dark:bg-neutral-800 flex items-center justify-center shadow-lg">
                        <span className={`text-xl font-bold [font-family:'Almarai',Helvetica] ${member.color.replace('bg-', 'text-')}`}>
                          {member.name.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div className="px-6 pb-6 pt-12 flex flex-col items-center gap-2">
                      <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{member.name}</h3>
                      <p className="text-green-700 dark:text-green-500 text-sm font-medium [font-family:'Almarai',Helvetica]">{member.title}</p>
                      <span className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 [font-family:'Almarai',Helvetica]">{member.role}</span>
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity mt-2">
                        <div className="w-8 h-8 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center">
                          <Mail className="w-4 h-4 text-green-700 dark:text-green-500" />
                        </div>
                      </div>
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
                <Shield className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'مهام وصلاحيات المجلس' : 'Board Responsibilities'}
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-lg mt-4 max-w-[600px] mx-auto [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'الأدوار والمسؤوليات الرئيسية لمجلس الإدارة' : 'Key roles and responsibilities of the Board of Directors'}
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" dir={direction}>
            {responsibilities.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-xl transition-all duration-300 h-full group bg-white dark:bg-neutral-900 dark:border-neutral-800 hover:-translate-y-1">
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center group-hover:bg-green-100 dark:group-hover:bg-green-900/40 transition-colors">
                      <item.icon className="w-7 h-7 text-green-700 dark:text-green-500" />
                    </div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{item.title}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{item.desc}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}