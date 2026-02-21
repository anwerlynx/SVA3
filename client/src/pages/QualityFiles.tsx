import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FileText, Download, FolderOpen } from "lucide-react";

export default function QualityFiles() {
  const { language, direction } = useLanguage();

  const pageTitle = language === 'ar' ? 'ملفات الجودة' : 'Quality Files';
  const pageSubtitle = language === 'ar'
    ? 'الوثائق والتقارير والخطط الاستراتيجية لضمان الجودة'
    : 'Documents, reports, and strategic plans for quality assurance';

  const qualityReports = [
    {
      title: language === 'ar' ? 'التقرير السنوي للجودة 2025' : 'Annual Quality Report 2025',
      category: language === 'ar' ? 'تقارير سنوية' : 'Annual Reports',
      date: language === 'ar' ? 'يناير 2025' : 'January 2025',
    },
    {
      title: language === 'ar' ? 'تقرير التقييم الذاتي - معهد الهندسة' : 'Self-Assessment Report - Engineering Institute',
      category: language === 'ar' ? 'تقييم ذاتي' : 'Self-Assessment',
      date: language === 'ar' ? 'ديسمبر 2024' : 'December 2024',
    },
    {
      title: language === 'ar' ? 'تقرير التقييم الذاتي - معهد الإدارة' : 'Self-Assessment Report - Management Institute',
      category: language === 'ar' ? 'تقييم ذاتي' : 'Self-Assessment',
      date: language === 'ar' ? 'نوفمبر 2024' : 'November 2024',
    },
    {
      title: language === 'ar' ? 'تقرير رضا الطلاب' : 'Student Satisfaction Report',
      category: language === 'ar' ? 'استطلاعات' : 'Surveys',
      date: language === 'ar' ? 'أكتوبر 2024' : 'October 2024',
    },
    {
      title: language === 'ar' ? 'تقرير أداء البرامج الأكاديمية' : 'Academic Programs Performance Report',
      category: language === 'ar' ? 'تقارير أداء' : 'Performance Reports',
      date: language === 'ar' ? 'سبتمبر 2024' : 'September 2024',
    },
    {
      title: language === 'ar' ? 'تقرير المراجعة الخارجية' : 'External Review Report',
      category: language === 'ar' ? 'مراجعات خارجية' : 'External Reviews',
      date: language === 'ar' ? 'أغسطس 2024' : 'August 2024',
    },
  ];

  const strategicPlans = [
    {
      title: language === 'ar' ? 'الخطة الاستراتيجية 2024-2029' : 'Strategic Plan 2024-2029',
      desc: language === 'ar' ? 'الخطة الشاملة لتطوير المعاهد وتحقيق أهداف الجودة على مدى خمس سنوات.' : 'Comprehensive plan for institute development and achieving quality goals over five years.',
    },
    {
      title: language === 'ar' ? 'خطة التحسين المستمر' : 'Continuous Improvement Plan',
      desc: language === 'ar' ? 'خطة تفصيلية لتحسين العمليات الأكاديمية والإدارية بشكل مستمر.' : 'Detailed plan for continuous improvement of academic and administrative processes.',
    },
    {
      title: language === 'ar' ? 'خطة تطوير أعضاء هيئة التدريس' : 'Faculty Development Plan',
      desc: language === 'ar' ? 'برنامج شامل لتطوير قدرات ومهارات أعضاء هيئة التدريس.' : 'Comprehensive program for developing faculty capabilities and skills.',
    },
  ];

  const selfStudyDocs = [
    {
      title: language === 'ar' ? 'دراسة ذاتية - برنامج الهندسة المدنية' : 'Self-Study - Civil Engineering Program',
      year: '2024',
    },
    {
      title: language === 'ar' ? 'دراسة ذاتية - برنامج هندسة الاتصالات' : 'Self-Study - Communications Engineering Program',
      year: '2024',
    },
    {
      title: language === 'ar' ? 'دراسة ذاتية - برنامج إدارة الأعمال' : 'Self-Study - Business Administration Program',
      year: '2024',
    },
    {
      title: language === 'ar' ? 'دراسة ذاتية - برنامج المحاسبة' : 'Self-Study - Accounting Program',
      year: '2024',
    },
  ];

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={pageTitle} description={pageSubtitle} />
      <Navbar />

      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" alt="Quality Files" src="/figmaAssets/rectangle-2.png" />
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
            { label: language === 'ar' ? 'الجودة المركزية' : 'Central Quality', href: '/quality' },
            { label: pageTitle },
          ]}
        />
      </div>

      <section className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-16" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <FolderOpen className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'نظرة عامة على وثائق الجودة' : 'Quality Documentation Overview'}
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-lg mt-4 max-w-[700px] mx-auto [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar'
                  ? 'تلتزم معاهد الوادي العليا بتوثيق جميع عمليات الجودة وإتاحتها للمعنيين لضمان الشفافية والمساءلة.'
                  : 'Valley Higher Institutes is committed to documenting all quality processes and making them available to stakeholders to ensure transparency and accountability.'}
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" dir={direction}>
            <AnimatedSection direction="up" delay={0}>
              <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full text-center group bg-white dark:bg-neutral-900">
                <CardContent className="p-8 flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center group-hover:bg-green-100 dark:group-hover:bg-green-900/40 transition-colors">
                    <FileText className="w-8 h-8 text-green-700 dark:text-green-500" />
                  </div>
                  <h3 className="font-bold text-xl text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                    {language === 'ar' ? 'التقارير والتقييمات' : 'Reports & Assessments'}
                  </h3>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">
                    {language === 'ar' ? 'تقارير سنوية وتقييمات دورية شاملة لجميع البرامج الأكاديمية.' : 'Annual reports and comprehensive periodic assessments for all academic programs.'}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.1}>
              <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full text-center group bg-white dark:bg-neutral-900">
                <CardContent className="p-8 flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center group-hover:bg-green-100 dark:group-hover:bg-green-900/40 transition-colors">
                    <FolderOpen className="w-8 h-8 text-green-700 dark:text-green-500" />
                  </div>
                  <h3 className="font-bold text-xl text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                    {language === 'ar' ? 'الخطط الاستراتيجية' : 'Strategic Plans'}
                  </h3>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">
                    {language === 'ar' ? 'خطط طويلة وقصيرة المدى لتحقيق أهداف الجودة والتميز.' : 'Long and short-term plans to achieve quality and excellence goals.'}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.2}>
              <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full text-center group bg-white dark:bg-neutral-900">
                <CardContent className="p-8 flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center group-hover:bg-green-100 dark:group-hover:bg-green-900/40 transition-colors">
                    <Download className="w-8 h-8 text-green-700 dark:text-green-500" />
                  </div>
                  <h3 className="font-bold text-xl text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                    {language === 'ar' ? 'الدراسات الذاتية' : 'Self-Study Documents'}
                  </h3>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">
                    {language === 'ar' ? 'دراسات ذاتية مفصلة لكل برنامج أكاديمي لأغراض الاعتماد.' : 'Detailed self-study documents for each academic program for accreditation purposes.'}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-16" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <Download className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'تقارير الجودة' : 'Quality Reports'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" dir={direction}>
            {qualityReports.map((report, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full group bg-white dark:bg-neutral-800">
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-500 px-3 py-1 rounded-full text-xs font-bold [font-family:'Almarai',Helvetica]">{report.category}</span>
                      <span className="text-neutral-400 dark:text-neutral-500 text-sm [font-family:'Almarai',Helvetica]">{report.date}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center flex-shrink-0">
                        <FileText className="w-5 h-5 text-green-700 dark:text-green-500" />
                      </div>
                      <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{report.title}</h3>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-green-700 hover:bg-green-800 text-white rounded-xl text-sm font-bold [font-family:'Almarai',Helvetica] transition-colors w-full justify-center mt-auto">
                      <Download className="w-4 h-4" />
                      <span>{language === 'ar' ? 'تحميل التقرير' : 'Download Report'}</span>
                    </button>
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
                <FolderOpen className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'الخطط الاستراتيجية' : 'Strategic Plans'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" dir={direction}>
            {strategicPlans.map((plan, index) => (
              <AnimatedSection key={index} delay={index * 0.15} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full bg-white dark:bg-neutral-900">
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center">
                      <FolderOpen className="w-6 h-6 text-green-700 dark:text-green-500" />
                    </div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{plan.title}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{plan.desc}</p>
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-green-700 hover:bg-green-800 text-white rounded-xl text-sm font-bold [font-family:'Almarai',Helvetica] transition-colors w-full justify-center mt-auto">
                      <Download className="w-4 h-4" />
                      <span>{language === 'ar' ? 'تحميل الخطة' : 'Download Plan'}</span>
                    </button>
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
            <div className="text-center mb-16" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <FileText className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'وثائق الدراسة الذاتية' : 'Self-Study Documents'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="flex flex-col gap-4" dir={direction}>
            {selfStudyDocs.map((doc, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-neutral-800">
                  <CardContent className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center flex-shrink-0">
                        <FileText className="w-6 h-6 text-green-700 dark:text-green-500" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{doc.title}</h3>
                        <span className="text-neutral-500 dark:text-neutral-400 text-sm [font-family:'Almarai',Helvetica]">{doc.year}</span>
                      </div>
                    </div>
                    <button className="px-5 py-2 bg-green-700 hover:bg-green-800 text-white rounded-xl text-sm font-bold [font-family:'Almarai',Helvetica] transition-colors flex-shrink-0 flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      {language === 'ar' ? 'تحميل' : 'Download'}
                    </button>
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