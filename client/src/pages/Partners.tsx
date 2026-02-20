import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Card, CardContent } from "@/components/ui/card";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { GraduationCap, Building2, Landmark, Handshake, ExternalLink, Globe, Users, FileText, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Partners() {
  const { language, direction } = useLanguage();

  const pageTitle = language === 'ar' ? 'الشركاء' : 'Partners';
  const pageSubtitle = language === 'ar'
    ? 'شراكات استراتيجية لبناء مستقبل أفضل'
    : 'Strategic partnerships for building a better future';

  const ArrowIcon = direction === 'rtl' ? ArrowLeft : ArrowRight;

  const partnerStats = language === 'ar' ? [
    { icon: Handshake, value: 14, suffix: "+", label: "شراكة فعّالة" },
    { icon: FileText, value: 20, suffix: "+", label: "اتفاقية تعاون" },
    { icon: Users, value: 500, suffix: "+", label: "طالب مستفيد سنوياً" },
    { icon: Globe, value: 5, suffix: "", label: "دول شريكة" },
  ] : [
    { icon: Handshake, value: 14, suffix: "+", label: "Active Partnerships" },
    { icon: FileText, value: 20, suffix: "+", label: "Cooperation Agreements" },
    { icon: Users, value: 500, suffix: "+", label: "Students Benefiting/Year" },
    { icon: Globe, value: 5, suffix: "", label: "Partner Countries" },
  ];

  const academicPartners = [
    {
      name: language === 'ar' ? 'جامعة القاهرة' : 'Cairo University',
      desc: language === 'ar' ? 'شراكة أكاديمية في مجال البحث العلمي وتبادل الخبرات الأكاديمية والبرامج المشتركة.' : 'Academic partnership in scientific research, exchange of academic expertise, and joint programs.',
    },
    {
      name: language === 'ar' ? 'جامعة عين شمس' : 'Ain Shams University',
      desc: language === 'ar' ? 'تعاون في تطوير المناهج الدراسية والتدريب العملي للطلاب في مختلف التخصصات.' : 'Collaboration in curriculum development and practical training for students in various specializations.',
    },
    {
      name: language === 'ar' ? 'الجامعة الأمريكية بالقاهرة' : 'American University in Cairo',
      desc: language === 'ar' ? 'برامج تبادل طلابي وتعاون بحثي في مجالات الهندسة والإدارة والتكنولوجيا.' : 'Student exchange programs and research collaboration in engineering, management, and technology.',
    },
    {
      name: language === 'ar' ? 'جامعة الإسكندرية' : 'Alexandria University',
      desc: language === 'ar' ? 'شراكة في مجال ضمان الجودة والاعتماد الأكاديمي وتطوير أعضاء هيئة التدريس.' : 'Partnership in quality assurance, academic accreditation, and faculty development.',
    },
    {
      name: language === 'ar' ? 'جامعة حلوان' : 'Helwan University',
      desc: language === 'ar' ? 'تعاون في البرامج التدريبية والورش العملية وتبادل الكوادر الأكاديمية.' : 'Collaboration in training programs, workshops, and exchange of academic staff.',
    },
  ];

  const industryPartners = [
    {
      name: language === 'ar' ? 'شركة أوراسكوم للإنشاءات' : 'Orascom Construction',
      desc: language === 'ar' ? 'توفير فرص تدريب عملي لطلاب الهندسة وتوظيف الخريجين المتميزين.' : 'Providing practical training opportunities for engineering students and employing outstanding graduates.',
    },
    {
      name: language === 'ar' ? 'البنك الأهلي المصري' : 'National Bank of Egypt',
      desc: language === 'ar' ? 'شراكة في تدريب طلاب الإدارة والمالية وتقديم منح دراسية للمتفوقين.' : 'Partnership in training management and finance students and offering scholarships to top performers.',
    },
    {
      name: language === 'ar' ? 'شركة فودافون مصر' : 'Vodafone Egypt',
      desc: language === 'ar' ? 'تعاون في مجال التكنولوجيا والاتصالات وتوفير بنية تحتية رقمية متطورة.' : 'Collaboration in technology and communications, providing advanced digital infrastructure.',
    },
    {
      name: language === 'ar' ? 'مجموعة طلعت مصطفى' : 'Talaat Moustafa Group',
      desc: language === 'ar' ? 'شراكة في التطوير العقاري وتدريب الطلاب في مجالات الإدارة والهندسة المعمارية.' : 'Partnership in real estate development and training students in management and architecture.',
    },
    {
      name: language === 'ar' ? 'شركة السويدي إليكتريك' : 'El Sewedy Electric',
      desc: language === 'ar' ? 'تعاون في مجال الهندسة الكهربائية والطاقة المتجددة وتوفير فرص عمل.' : 'Collaboration in electrical engineering and renewable energy, providing job opportunities.',
    },
  ];

  const governmentPartners = [
    {
      name: language === 'ar' ? 'وزارة التعليم العالي' : 'Ministry of Higher Education',
      desc: language === 'ar' ? 'الإشراف الأكاديمي وضمان جودة التعليم والاعتماد المؤسسي.' : 'Academic oversight, quality assurance of education, and institutional accreditation.',
    },
    {
      name: language === 'ar' ? 'الهيئة القومية لضمان جودة التعليم' : 'NAQAAE',
      desc: language === 'ar' ? 'التعاون في معايير الجودة والاعتماد الأكاديمي وتطوير الأداء المؤسسي.' : 'Collaboration in quality standards, academic accreditation, and institutional performance development.',
    },
    {
      name: language === 'ar' ? 'أكاديمية البحث العلمي والتكنولوجيا' : 'Academy of Scientific Research',
      desc: language === 'ar' ? 'دعم المشاريع البحثية والابتكار وتمويل الأبحاث العلمية المتميزة.' : 'Supporting research projects and innovation, and funding outstanding scientific research.',
    },
    {
      name: language === 'ar' ? 'صندوق تطوير التعليم' : 'Education Development Fund',
      desc: language === 'ar' ? 'تمويل مشاريع تطوير البنية التحتية والبرامج الأكاديمية المبتكرة.' : 'Funding infrastructure development projects and innovative academic programs.',
    },
  ];

  const internationalPrograms = language === 'ar' ? [
    { title: "برنامج التبادل الطلابي", desc: "تبادل طلابي مع جامعات في أوروبا والشرق الأوسط لإثراء التجربة الأكاديمية والثقافية.", highlight: "20+ طالب سنوياً" },
    { title: "المؤتمرات الدولية المشتركة", desc: "تنظيم والمشاركة في مؤتمرات علمية دولية بالتعاون مع الجامعات الشريكة.", highlight: "5 مؤتمرات سنوياً" },
    { title: "البرامج البحثية المشتركة", desc: "مشاريع بحثية مشتركة مع مؤسسات أكاديمية دولية في مجالات متعددة.", highlight: "10+ مشاريع نشطة" },
  ] : [
    { title: "Student Exchange Program", desc: "Student exchange with universities in Europe and the Middle East to enrich academic and cultural experience.", highlight: "20+ students/year" },
    { title: "Joint International Conferences", desc: "Organizing and participating in international scientific conferences in cooperation with partner universities.", highlight: "5 conferences/year" },
    { title: "Joint Research Programs", desc: "Joint research projects with international academic institutions in multiple fields.", highlight: "10+ active projects" },
  ];

  const renderPartnerSection = (
    title: string,
    partners: typeof academicPartners,
    icon: React.ReactNode,
    bgClass: string
  ) => (
    <section className={`py-20 md:py-24 ${bgClass} transition-colors duration-300`}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <AnimatedSection>
          <div className="text-center mb-16" dir={direction}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-1 bg-green-700 rounded-full" />
              {icon}
              <div className="w-12 h-1 bg-green-700 rounded-full" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
              {title}
            </h2>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" dir={direction}>
          {partners.map((partner, index) => (
            <AnimatedSection key={index} delay={index * 0.1} direction="up">
              <Card className="rounded-2xl border-0 shadow-sm hover:shadow-xl transition-all duration-300 h-full group bg-white dark:bg-neutral-900 dark:border-neutral-800 hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center group-hover:bg-green-100 dark:group-hover:bg-green-900/40 transition-colors">
                    <Handshake className="w-8 h-8 text-green-700 dark:text-green-500" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{partner.name}</h3>
                      <ExternalLink className="w-4 h-4 text-neutral-400 dark:text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{partner.desc}</p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={pageTitle} description={pageSubtitle} />
      <Navbar />

      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" alt="Partners" src="/figmaAssets/rectangle-16.png" />
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
            {partnerStats.map((stat, index) => (
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

      {renderPartnerSection(
        language === 'ar' ? 'الشركاء الأكاديميون' : 'Academic Partners',
        academicPartners,
        <GraduationCap className="w-6 h-6 text-green-700" />,
        'bg-white dark:bg-neutral-950'
      )}

      {renderPartnerSection(
        language === 'ar' ? 'شركاء الصناعة' : 'Industry Partners',
        industryPartners,
        <Building2 className="w-6 h-6 text-green-700" />,
        'bg-gray-50 dark:bg-neutral-900'
      )}

      {renderPartnerSection(
        language === 'ar' ? 'الشركاء الحكوميون' : 'Government Partners',
        governmentPartners,
        <Landmark className="w-6 h-6 text-green-700" />,
        'bg-white dark:bg-neutral-950'
      )}

      <section className="py-20 md:py-24 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-16" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <Globe className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'برامج التعاون الدولي' : 'International Cooperation Programs'}
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-lg mt-4 max-w-[600px] mx-auto [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'نوافذ مفتوحة على العالم لإثراء التجربة التعليمية' : 'Open windows to the world to enrich the educational experience'}
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" dir={direction}>
            {internationalPrograms.map((program, index) => (
              <AnimatedSection key={index} delay={index * 0.15} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-xl transition-all duration-300 h-full bg-white dark:bg-neutral-800 overflow-hidden group hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="bg-green-700 px-6 py-3">
                      <span className="text-white text-sm font-bold [font-family:'Almarai',Helvetica]">{program.highlight}</span>
                    </div>
                    <div className="p-6 flex flex-col gap-3">
                      <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{program.title}</h3>
                      <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{program.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-800 dark:bg-green-900 relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-40 h-40 border border-white rounded-full" />
          <div className="absolute bottom-10 left-10 w-60 h-60 border border-white rounded-full" />
        </div>
        <div className="max-w-[800px] mx-auto px-4 md:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center flex flex-col items-center gap-6" dir={direction}>
              <h2 className="text-3xl md:text-4xl font-bold text-white [font-family:'Almarai',Helvetica]">
                {language === 'ar' ? 'هل ترغب في الشراكة معنا؟' : 'Interested in Partnering With Us?'}
              </h2>
              <p className="text-white/70 text-lg max-w-[500px] [font-family:'Almarai',Helvetica]">
                {language === 'ar' ? 'نرحب بالتعاون مع المؤسسات الأكاديمية والصناعية لبناء شراكات استراتيجية مثمرة' : 'We welcome cooperation with academic and industrial institutions to build fruitful strategic partnerships'}
              </p>
              <Link href="/contact">
                <Button className="px-8 py-3 h-auto rounded-full bg-white text-green-800 hover:bg-gray-100 [font-family:'Almarai',Helvetica] font-bold flex items-center gap-2">
                  {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                  <ArrowIcon className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}