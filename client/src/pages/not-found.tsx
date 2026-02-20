import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { Link } from "wouter";
import { Home, ArrowRight, ArrowLeft, Search, BookOpen, Phone } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function NotFound() {
  const { language, direction } = useLanguage();
  const ArrowIcon = direction === 'rtl' ? ArrowLeft : ArrowRight;

  const quickLinks = [
    { icon: Home, label: language === 'ar' ? 'الرئيسية' : 'Home', href: '/' },
    { icon: BookOpen, label: language === 'ar' ? 'البرامج الأكاديمية' : 'Academic Programs', href: '/academic' },
    { icon: Search, label: language === 'ar' ? 'القبول والتسجيل' : 'Admission', href: '/admission' },
    { icon: Phone, label: language === 'ar' ? 'اتصل بنا' : 'Contact Us', href: '/contact' },
  ];

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300" dir={direction}>
      <PageHead
        title={language === 'ar' ? 'الصفحة غير موجودة - معاهد الوادي العليا' : 'Page Not Found - Valley Higher Institutes'}
        description={language === 'ar' ? 'الصفحة التي تبحث عنها غير موجودة' : 'The page you are looking for does not exist'}
      />
      <Navbar />

      <section className="min-h-[70vh] flex items-center justify-center py-20 bg-gradient-to-b from-gray-50 to-white dark:from-neutral-900 dark:to-neutral-950 transition-colors duration-300">
        <div className="max-w-[700px] mx-auto px-4 md:px-8 text-center">
          <AnimatedSection>
            <div className="mb-8">
              <span className="text-[120px] md:text-[160px] font-black text-green-700/10 dark:text-green-500/10 leading-none block [font-family:'Almarai',Helvetica]">404</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] mb-4 transition-colors duration-300">
              {language === 'ar' ? 'الصفحة غير موجودة' : 'Page Not Found'}
            </h1>
            <p className="text-neutral-500 dark:text-neutral-400 text-lg [font-family:'Almarai',Helvetica] mb-10 max-w-[500px] mx-auto transition-colors duration-300">
              {language === 'ar'
                ? 'عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها. يمكنك العودة للصفحة الرئيسية أو تصفح الروابط أدناه.'
                : 'Sorry, the page you are looking for does not exist or has been moved. You can return to the homepage or browse the links below.'}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {quickLinks.map((link, i) => (
                <Link key={i} href={link.href}>
                  <div className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 hover:border-green-200 dark:hover:border-green-800 hover:shadow-lg transition-all cursor-pointer group">
                    <div className="w-12 h-12 rounded-xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center group-hover:bg-green-100 dark:group-hover:bg-green-900/40 transition-colors">
                      <link.icon className="w-6 h-6 text-green-700 dark:text-green-500 transition-colors duration-300" />
                    </div>
                    <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 [font-family:'Almarai',Helvetica] transition-colors duration-300">{link.label}</span>
                  </div>
                </Link>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <Link href="/">
              <button className="inline-flex items-center gap-2 px-8 py-3 bg-green-700 hover:bg-green-800 text-white rounded-full font-bold [font-family:'Almarai',Helvetica] transition-all shadow-lg hover:shadow-xl">
                <Home className="w-5 h-5" />
                {language === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}
                <ArrowIcon className="w-4 h-4" />
              </button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
