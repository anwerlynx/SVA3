import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { Database, Globe, Search, BookMarked, ExternalLink, Lightbulb } from "lucide-react";

export default function KnowledgeBank() {
  const { language, direction } = useLanguage();

  const pageTitle = language === 'ar' ? 'بنك المعرفة' : 'Knowledge Bank';
  const pageSubtitle = language === 'ar'
    ? 'بوابتك للوصول إلى المعرفة الرقمية والمصادر العلمية العالمية'
    : 'Your gateway to digital knowledge and global scientific resources';

  const categories = [
    {
      icon: BookMarked,
      title: language === 'ar' ? 'المجلات العلمية' : 'Scientific Journals',
      desc: language === 'ar'
        ? 'وصول كامل إلى آلاف المجلات العلمية المحكمة في مختلف التخصصات من أبرز الناشرين العالميين.'
        : 'Full access to thousands of peer-reviewed scientific journals across various disciplines from leading global publishers.',
      count: language === 'ar' ? '+5,000 مجلة' : '5,000+ Journals',
    },
    {
      icon: Database,
      title: language === 'ar' ? 'قواعد البيانات' : 'Databases',
      desc: language === 'ar'
        ? 'قواعد بيانات متخصصة تشمل أبحاثاً ودراسات ومراجعات علمية من جميع أنحاء العالم.'
        : 'Specialized databases including research, studies, and scientific reviews from around the world.',
      count: language === 'ar' ? '+20 قاعدة بيانات' : '20+ Databases',
    },
    {
      icon: Globe,
      title: language === 'ar' ? 'الكتب الإلكترونية' : 'E-Books',
      desc: language === 'ar'
        ? 'مكتبة رقمية شاملة تحتوي على آلاف الكتب الإلكترونية في الهندسة والإدارة والعلوم الأساسية.'
        : 'A comprehensive digital library containing thousands of e-books in engineering, management, and basic sciences.',
      count: language === 'ar' ? '+10,000 كتاب' : '10,000+ Books',
    },
    {
      icon: Search,
      title: language === 'ar' ? 'أوراق البحث' : 'Research Papers',
      desc: language === 'ar'
        ? 'مستودع شامل لأوراق البحث والأطروحات الأكاديمية من الجامعات والمعاهد حول العالم.'
        : 'Comprehensive repository of research papers and academic theses from universities and institutes worldwide.',
      count: language === 'ar' ? '+100,000 ورقة' : '100,000+ Papers',
    },
  ];

  const externalDatabases = [
    {
      name: language === 'ar' ? 'بنك المعرفة المصري (EKB)' : 'Egyptian Knowledge Bank (EKB)',
      desc: language === 'ar' ? 'أكبر مكتبة رقمية في مصر توفر وصولاً مجانياً لملايين المصادر العلمية.' : 'Egypt\'s largest digital library providing free access to millions of scientific resources.',
      url: 'https://www.ekb.eg',
    },
    {
      name: language === 'ar' ? 'IEEE Xplore' : 'IEEE Xplore',
      desc: language === 'ar' ? 'قاعدة بيانات رائدة في الهندسة الكهربائية وعلوم الحاسب والتكنولوجيا.' : 'Leading database in electrical engineering, computer science, and technology.',
      url: 'https://ieeexplore.ieee.org',
    },
    {
      name: language === 'ar' ? 'Scopus' : 'Scopus',
      desc: language === 'ar' ? 'أكبر قاعدة بيانات للملخصات والاستشهادات للأدبيات المحكمة.' : 'The largest abstract and citation database of peer-reviewed literature.',
      url: 'https://www.scopus.com',
    },
    {
      name: language === 'ar' ? 'Google Scholar' : 'Google Scholar',
      desc: language === 'ar' ? 'محرك بحث أكاديمي مجاني يغطي ملايين الأوراق البحثية والكتب.' : 'A free academic search engine covering millions of research papers and books.',
      url: 'https://scholar.google.com',
    },
  ];

  const accessSteps = [
    {
      step: '1',
      title: language === 'ar' ? 'التسجيل' : 'Registration',
      desc: language === 'ar' ? 'قم بالتسجيل باستخدام بريدك الإلكتروني الجامعي للحصول على حساب مجاني في بنك المعرفة.' : 'Register using your university email to get a free Knowledge Bank account.',
    },
    {
      step: '2',
      title: language === 'ar' ? 'تفعيل الحساب' : 'Account Activation',
      desc: language === 'ar' ? 'فعّل حسابك من خلال رابط التفعيل المرسل إلى بريدك الإلكتروني.' : 'Activate your account through the activation link sent to your email.',
    },
    {
      step: '3',
      title: language === 'ar' ? 'البحث والوصول' : 'Search & Access',
      desc: language === 'ar' ? 'استخدم محرك البحث المتقدم للوصول إلى المصادر التي تحتاجها وتحميلها مباشرة.' : 'Use the advanced search engine to find and download the resources you need directly.',
    },
  ];

  const searchTips = [
    language === 'ar' ? 'استخدم كلمات مفتاحية محددة ودقيقة للحصول على نتائج أفضل' : 'Use specific and precise keywords for better results',
    language === 'ar' ? 'استخدم علامات الاقتباس "" للبحث عن عبارة كاملة' : 'Use quotation marks "" to search for an exact phrase',
    language === 'ar' ? 'استخدم الفلاتر لتضييق نطاق البحث حسب التاريخ أو النوع أو المؤلف' : 'Use filters to narrow search by date, type, or author',
    language === 'ar' ? 'جرب البحث بالإنجليزية والعربية للحصول على نتائج أشمل' : 'Try searching in both English and Arabic for more comprehensive results',
    language === 'ar' ? 'احفظ عمليات البحث المفضلة لسهولة الوصول لاحقاً' : 'Save favorite searches for easy access later',
    language === 'ar' ? 'استخدم العوامل البولية (AND, OR, NOT) لتحسين نتائج البحث' : 'Use Boolean operators (AND, OR, NOT) to refine search results',
  ];

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={pageTitle} description={pageSubtitle} />
      <Navbar />

      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" alt="Knowledge Bank" src="/figmaAssets/rectangle-2.png" />
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

      <section className="py-20 md:py-24 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <Database className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'عن بنك المعرفة' : 'About Knowledge Bank'}
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Card className="rounded-3xl border-0 shadow-lg bg-white dark:bg-neutral-900">
              <CardContent className="p-8" dir={direction}>
                <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">
                  {language === 'ar'
                    ? 'يوفر بنك المعرفة في معاهد الوادي العليا منصة رقمية متكاملة تتيح للطلاب وأعضاء هيئة التدريس الوصول إلى أحدث الأبحاث والدراسات والمراجع العلمية من أبرز قواعد البيانات والناشرين العالميين. يضم البنك أكثر من 100,000 مصدر علمي رقمي متاح على مدار الساعة لدعم العملية التعليمية والبحثية.'
                    : 'The Knowledge Bank at Valley Higher Institutes provides an integrated digital platform that enables students and faculty to access the latest research, studies, and scientific references from leading global databases and publishers. The bank includes over 100,000 digital scientific resources available 24/7 to support educational and research activities.'}
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
                {language === 'ar' ? 'فئات المصادر' : 'Resource Categories'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" dir={direction}>
            {categories.map((cat, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full text-center group bg-white dark:bg-neutral-800">
                  <CardContent className="p-6 flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center group-hover:bg-green-100 dark:group-hover:bg-green-900/40 transition-colors">
                      <cat.icon className="w-8 h-8 text-green-700 dark:text-green-500" />
                    </div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{cat.title}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{cat.desc}</p>
                    <span className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-500 px-3 py-1 rounded-full text-xs font-bold [font-family:'Almarai',Helvetica]">{cat.count}</span>
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
                <Globe className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'قواعد البيانات الخارجية' : 'External Databases'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" dir={direction}>
            {externalDatabases.map((db, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-md transition-all h-full bg-white dark:bg-neutral-900">
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center flex-shrink-0">
                        <Globe className="w-6 h-6 text-green-700 dark:text-green-500" />
                      </div>
                      <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{db.name}</h3>
                    </div>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{db.desc}</p>
                    <div className="flex items-center gap-2 text-green-700 dark:text-green-500">
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium [font-family:'Almarai',Helvetica]">{db.url}</span>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-green-800 dark:bg-green-900 transition-colors duration-300">
        <div className="max-w-[900px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <h2 className="text-3xl md:text-4xl font-bold text-white [font-family:'Almarai',Helvetica]">
                {language === 'ar' ? 'كيفية الوصول' : 'How to Access'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="flex flex-col gap-6" dir={direction}>
            {accessSteps.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction={direction === 'rtl' ? "right" : "left"}>
                <Card className="rounded-2xl border-0 shadow-sm bg-white/10 backdrop-blur-sm dark:bg-black/20">
                  <CardContent className="p-6 flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                      <span className="text-green-800 font-bold text-lg [font-family:'Almarai',Helvetica]">{item.step}</span>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <h3 className="font-bold text-lg text-white [font-family:'Almarai',Helvetica]">{item.title}</h3>
                      <p className="text-white/80 text-sm leading-relaxed [font-family:'Almarai',Helvetica]">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <Lightbulb className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'نصائح البحث' : 'Search Tips'}
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Card className="rounded-3xl border-0 shadow-lg bg-white dark:bg-neutral-800">
              <CardContent className="p-8" dir={direction}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {searchTips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-xl hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
                      <Search className="w-5 h-5 text-green-700 dark:text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-700 dark:text-neutral-300 [font-family:'Almarai',Helvetica] text-sm">{tip}</span>
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