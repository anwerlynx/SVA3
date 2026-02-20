import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { Eye, Target, Shield, Award, FileCheck, Users, BarChart3, CheckCircle2 } from "lucide-react";

export default function CentralQuality() {
  const { language, direction } = useLanguage();

  const pageTitle = language === 'ar' ? 'الجودة المركزية' : 'Central Quality Assurance';
  const pageSubtitle = language === 'ar'
    ? 'ضمان أعلى معايير الجودة في التعليم والبحث العلمي'
    : 'Ensuring the highest quality standards in education and scientific research';

  const qualityStandards = [
    {
      icon: Shield,
      title: language === 'ar' ? 'معايير NAQAAE' : 'NAQAAE Standards',
      desc: language === 'ar' ? 'الالتزام بمعايير الهيئة القومية لضمان جودة التعليم والاعتماد في جميع البرامج الأكاديمية.' : 'Compliance with the National Authority for Quality Assurance and Accreditation standards in all academic programs.',
    },
    {
      icon: Award,
      title: language === 'ar' ? 'الاعتماد الدولي' : 'International Accreditation',
      desc: language === 'ar' ? 'السعي للحصول على اعتمادات دولية معترف بها لتعزيز مكانة المعاهد عالمياً.' : 'Seeking internationally recognized accreditations to enhance the institutes\' global standing.',
    },
    {
      icon: BarChart3,
      title: language === 'ar' ? 'التحسين المستمر' : 'Continuous Improvement',
      desc: language === 'ar' ? 'تطبيق منهجية التحسين المستمر في جميع العمليات الأكاديمية والإدارية.' : 'Applying continuous improvement methodology in all academic and administrative processes.',
    },
    {
      icon: FileCheck,
      title: language === 'ar' ? 'التقييم الدوري' : 'Periodic Assessment',
      desc: language === 'ar' ? 'إجراء تقييمات دورية شاملة لأداء البرامج الأكاديمية وأعضاء هيئة التدريس.' : 'Conducting comprehensive periodic assessments of academic program and faculty performance.',
    },
  ];

  const accreditations = [
    {
      title: language === 'ar' ? 'اعتماد الهيئة القومية (NAQAAE)' : 'NAQAAE Accreditation',
      status: language === 'ar' ? 'معتمد' : 'Accredited',
      year: '2024',
      desc: language === 'ar' ? 'حصلت المعاهد على اعتماد الهيئة القومية لضمان جودة التعليم والاعتماد لجميع البرامج الأكاديمية.' : 'The institutes have obtained NAQAAE accreditation for all academic programs.',
    },
    {
      title: language === 'ar' ? 'شهادة ISO 9001:2015' : 'ISO 9001:2015 Certificate',
      status: language === 'ar' ? 'معتمد' : 'Certified',
      year: '2023',
      desc: language === 'ar' ? 'تطبيق نظام إدارة الجودة الشاملة وفقاً للمعايير الدولية ISO.' : 'Implementation of total quality management system according to international ISO standards.',
    },
    {
      title: language === 'ar' ? 'التصنيف الأكاديمي' : 'Academic Ranking',
      status: language === 'ar' ? 'متميز' : 'Distinguished',
      year: '2025',
      desc: language === 'ar' ? 'تصنيف متقدم بين المعاهد العليا الخاصة في مصر في جودة التعليم والبحث العلمي.' : 'Advanced ranking among private higher institutes in Egypt in education quality and scientific research.',
    },
  ];

  const qualityReports = [
    { title: language === 'ar' ? 'التقرير السنوي للجودة 2025' : 'Annual Quality Report 2025', date: language === 'ar' ? 'يناير 2025' : 'January 2025' },
    { title: language === 'ar' ? 'تقرير التقييم الذاتي' : 'Self-Assessment Report', date: language === 'ar' ? 'نوفمبر 2024' : 'November 2024' },
    { title: language === 'ar' ? 'تقرير رضا الطلاب' : 'Student Satisfaction Report', date: language === 'ar' ? 'سبتمبر 2024' : 'September 2024' },
    { title: language === 'ar' ? 'تقرير أداء البرامج الأكاديمية' : 'Academic Programs Performance Report', date: language === 'ar' ? 'يوليو 2024' : 'July 2024' },
  ];

  const qualityTeam = [
    {
      name: language === 'ar' ? 'د. سارة محمد أحمد' : 'Dr. Sara Mohamed Ahmed',
      role: language === 'ar' ? 'مدير وحدة الجودة' : 'Quality Unit Director',
    },
    {
      name: language === 'ar' ? 'أ. خالد عبد الله حسن' : 'Mr. Khaled Abdullah Hassan',
      role: language === 'ar' ? 'منسق الاعتماد' : 'Accreditation Coordinator',
    },
    {
      name: language === 'ar' ? 'د. ليلى أحمد سعيد' : 'Dr. Laila Ahmed Saeed',
      role: language === 'ar' ? 'مسؤول التقييم والمتابعة' : 'Assessment & Follow-up Officer',
    },
    {
      name: language === 'ar' ? 'م. يوسف إبراهيم علي' : 'Eng. Youssef Ibrahim Ali',
      role: language === 'ar' ? 'أخصائي تحليل البيانات' : 'Data Analysis Specialist',
    },
  ];

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={pageTitle} description={pageSubtitle} />
      <Navbar />

      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" alt="Quality" src="/figmaAssets/rectangle-2.png" />
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

      <section className="py-20 bg-green-800 dark:bg-green-900 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12" dir={direction}>
            <AnimatedSection direction={direction === 'rtl' ? "right" : "left"}>
              <Card className="rounded-3xl border-0 bg-white/10 backdrop-blur-sm h-full dark:bg-black/20">
                <CardContent className="p-8 flex flex-col gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                    <Eye className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white [font-family:'Almarai',Helvetica]">
                    {language === 'ar' ? 'رؤية الجودة' : 'Quality Vision'}
                  </h3>
                  <p className="text-white/80 text-lg leading-relaxed [font-family:'Almarai',Helvetica]">
                    {language === 'ar'
                      ? 'أن نكون مركزاً رائداً لضمان الجودة في التعليم العالي، نسعى لتحقيق أعلى المعايير الأكاديمية والمهنية التي تضمن تخريج كوادر مؤهلة ومنافسة عالمياً.'
                      : 'To be a leading center for quality assurance in higher education, striving to achieve the highest academic and professional standards that ensure graduating qualified and globally competitive cadres.'}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection direction={direction === 'rtl' ? "left" : "right"} delay={0.2}>
              <Card className="rounded-3xl border-0 bg-white/10 backdrop-blur-sm h-full dark:bg-black/20">
                <CardContent className="p-8 flex flex-col gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white [font-family:'Almarai',Helvetica]">
                    {language === 'ar' ? 'رسالة الجودة' : 'Quality Mission'}
                  </h3>
                  <p className="text-white/80 text-lg leading-relaxed [font-family:'Almarai',Helvetica]">
                    {language === 'ar'
                      ? 'نشر ثقافة الجودة والتحسين المستمر في جميع أنشطة المعاهد، وتطبيق أفضل الممارسات العالمية في ضمان جودة التعليم والبحث العلمي وخدمة المجتمع.'
                      : 'Spreading the culture of quality and continuous improvement in all institute activities, and applying best global practices in ensuring quality of education, scientific research, and community service.'}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-16" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <Shield className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'معايير الجودة' : 'Quality Standards'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" dir={direction}>
            {qualityStandards.map((standard, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full text-center group bg-white dark:bg-neutral-900 dark:border-neutral-800">
                  <CardContent className="p-6 flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center group-hover:bg-green-100 dark:group-hover:bg-green-900/40 transition-colors">
                      <standard.icon className="w-8 h-8 text-green-700 dark:text-green-500" />
                    </div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{standard.title}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{standard.desc}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-16" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <Award className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'الاعتمادات والشهادات' : 'Accreditations & Certifications'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" dir={direction}>
            {accreditations.map((accred, index) => (
              <AnimatedSection key={index} delay={index * 0.15} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full bg-white dark:bg-neutral-800">
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-500 px-3 py-1 rounded-full text-xs font-bold [font-family:'Almarai',Helvetica]">{accred.status}</span>
                      <span className="text-neutral-400 dark:text-neutral-500 text-sm [font-family:'Almarai',Helvetica]">{accred.year}</span>
                    </div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{accred.title}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{accred.desc}</p>
                    <div className="flex items-center gap-2 text-green-700 dark:text-green-500">
                      <CheckCircle2 className="w-5 h-5" />
                      <span className="text-sm font-medium [font-family:'Almarai',Helvetica]">{accred.status}</span>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-16" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <FileCheck className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'تقارير الجودة' : 'Quality Reports'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="flex flex-col gap-4" dir={direction}>
            {qualityReports.map((report, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-neutral-800">
                  <CardContent className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center flex-shrink-0">
                        <FileCheck className="w-6 h-6 text-green-700 dark:text-green-500" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{report.title}</h3>
                        <span className="text-neutral-500 dark:text-neutral-400 text-sm [font-family:'Almarai',Helvetica]">{report.date}</span>
                      </div>
                    </div>
                    <button className="px-5 py-2 bg-green-700 hover:bg-green-800 text-white rounded-xl text-sm font-bold [font-family:'Almarai',Helvetica] transition-colors flex-shrink-0">
                      {language === 'ar' ? 'تحميل' : 'Download'}
                    </button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-16" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <Users className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'فريق الجودة' : 'Quality Team'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" dir={direction}>
            {qualityTeam.map((member, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full text-center group bg-white dark:bg-neutral-800">
                  <CardContent className="p-6 flex flex-col items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center group-hover:bg-green-100 dark:group-hover:bg-green-900/40 transition-colors">
                      <Users className="w-10 h-10 text-green-700 dark:text-green-500" />
                    </div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{member.name}</h3>
                    <p className="text-green-700 dark:text-green-500 text-sm font-medium [font-family:'Almarai',Helvetica]">{member.role}</p>
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