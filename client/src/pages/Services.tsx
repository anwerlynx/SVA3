import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FileText, HelpCircle, PartyPopper, Briefcase, CheckCircle2, GraduationCap, BookOpen, HeartHandshake, Award, Shield, Loader2 } from "lucide-react";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { Link } from "wouter";
import { useState, useEffect } from "react";

export default function Services() {
  const { t, direction, language } = useLanguage();

  const admissionRequirements = [
    t("req1"), t("req2"), t("req3"), t("req4"),
    t("req5"), t("req6"), t("req7"), t("req8"),
  ];

  const staticFaqs = [
    {
      question: language === 'ar' ? "ما هي مصاريف الدراسة؟" : "What are the tuition fees?",
      answer: language === 'ar'
        ? "تختلف المصاريف حسب القسم والتخصص. يمكنك التواصل مع مكتب القبول للحصول على تفاصيل المصاريف الدراسية لكل قسم."
        : "Fees vary by department and specialization. Please contact the admissions office for detailed fee information.",
    },
    {
      question: language === 'ar' ? "هل يوجد نظام تقسيط؟" : "Is there an installment system?",
      answer: language === 'ar'
        ? "نعم، يتوفر نظام تقسيط للمصاريف الدراسية على عدة أقساط لتسهيل عملية الدفع على الطلاب وأولياء الأمور."
        : "Yes, an installment plan is available to make payment easier for students and parents.",
    },
    {
      question: language === 'ar' ? "ما هي مدة الدراسة؟" : "What is the duration of study?",
      answer: language === 'ar'
        ? "مدة الدراسة أربع سنوات دراسية للحصول على درجة البكالوريوس في التخصص المختار."
        : "The duration of study is four academic years to obtain a bachelor's degree in the chosen specialization.",
    },
    {
      question: language === 'ar' ? "هل يوجد تدريب عملي؟" : "Is there practical training?",
      answer: language === 'ar'
        ? "نعم، تتضمن جميع البرامج الأكاديمية فترات تدريب عملي في الشركات والمؤسسات ذات الصلة بالتخصص."
        : "Yes, all academic programs include practical training periods in companies and institutions related to the specialization.",
    },
    {
      question: language === 'ar' ? "كيف يمكنني التقديم؟" : "How can I apply?",
      answer: language === 'ar'
        ? "يمكنك التقديم من خلال مكتب القبول والتسجيل في المعهد مباشرة أو من خلال موقع التنسيق الإلكتروني."
        : "You can apply through the admissions office directly or through the electronic coordination website.",
    },
  ];

  const [faqs, setFaqs] = useState(staticFaqs);

  useEffect(() => {
    fetch('/api/faqs')
      .then(r => r.json())
      .then((data: any[]) => {
        if (Array.isArray(data) && data.length > 0) {
          const activeFaqs = data.filter((f: any) => f.isActive !== false);
          if (activeFaqs.length > 0) {
            setFaqs(activeFaqs.map((f: any) => ({
              question: language === 'ar' ? f.questionAr : (f.questionEn || f.questionAr),
              answer: language === 'ar' ? f.answerAr : (f.answerEn || f.answerAr),
            })));
          }
        }
      })
      .catch(() => {});
  }, [language]);

  const jobs = [
    {
      title: language === 'ar' ? "أستاذ مساعد - قسم الهندسة المدنية" : "Assistant Professor - Civil Engineering Dept.",
      type: t("full_time"),
      deadline: language === 'ar' ? "15 مارس 2026" : "March 15, 2026"
    },
    {
      title: language === 'ar' ? "معيد - قسم إدارة الأعمال" : "Teaching Assistant - Business Administration Dept.",
      type: t("full_time"),
      deadline: language === 'ar' ? "20 مارس 2026" : "March 20, 2026"
    },
    {
      title: language === 'ar' ? "أخصائي تكنولوجيا معلومات" : "IT Specialist",
      type: t("full_time"),
      deadline: language === 'ar' ? "25 مارس 2026" : "March 25, 2026"
    },
  ];

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={t("services_title")} description={t("services_subtitle")} />
      <Navbar />

      {/* Hero */}
      <section className="relative w-full h-[50vh] min-h-[350px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" alt="Services" src="/figmaAssets/rectangle-2.png" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        </div>
        <div className="relative z-10 text-center px-4">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold text-white [font-family:'Almarai',Helvetica] mb-4" dir={direction}>
              {t("services_title")}
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-[600px] mx-auto [font-family:'Almarai',Helvetica]" dir={direction}>
              {t("services_subtitle")}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 pt-6">
        <Breadcrumb
          items={[
            { label: language === 'ar' ? 'الرئيسية' : 'Home', href: '/' },
            { label: language === 'ar' ? 'الخدمات' : 'Services' },
          ]}
        />
      </div>

      <section className="py-16 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? "خدماتنا المتكاملة" : "Our Comprehensive Services"}
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-lg mt-4 max-w-[600px] mx-auto [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? "نقدم مجموعة متكاملة من الخدمات الأكاديمية والإدارية" : "A comprehensive set of academic and administrative services"}
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5" dir={direction}>
            {[
              { icon: FileText, title: language === 'ar' ? "القبول والتسجيل" : "Admission", href: "/admission", color: "bg-emerald-50 dark:bg-emerald-900/20", iconColor: "text-emerald-600 dark:text-emerald-400" },
              { icon: HeartHandshake, title: language === 'ar' ? "شؤون الطلاب" : "Student Affairs", href: "/student-affairs", color: "bg-blue-50 dark:bg-blue-900/20", iconColor: "text-blue-600 dark:text-blue-400" },
              { icon: BookOpen, title: language === 'ar' ? "المكتبة" : "Library", href: "/library", color: "bg-purple-50 dark:bg-purple-900/20", iconColor: "text-purple-600 dark:text-purple-400" },
              { icon: Shield, title: language === 'ar' ? "ضمان الجودة" : "Quality Assurance", href: "/central-quality", color: "bg-amber-50 dark:bg-amber-900/20", iconColor: "text-amber-600 dark:text-amber-400" },
            ].map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Link href={service.href}>
                  <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group bg-white dark:bg-neutral-900 h-full">
                    <CardContent className="p-6 flex flex-col items-center gap-3 text-center">
                      <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                      </div>
                      <span className="font-bold text-sm text-neutral-700 dark:text-neutral-300 [font-family:'Almarai',Helvetica] transition-colors duration-300">{service.title}</span>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-20 md:py-24 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300" id="admission">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <FileText className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {t("admission_requirements")}
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Card className="rounded-3xl border-0 shadow-lg bg-white dark:bg-neutral-900">
              <CardContent className="p-8" dir={direction}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {admissionRequirements.map((req, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-xl hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-green-700 dark:text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-700 dark:text-neutral-300 [font-family:'Almarai',Helvetica] text-sm">{req}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white dark:bg-neutral-950 transition-colors duration-300" id="faq">
        <div className="max-w-[800px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <HelpCircle className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {t("faqs_title")}
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Accordion type="single" collapsible className="flex flex-col gap-3" dir={direction}>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="bg-white dark:bg-neutral-800 rounded-2xl border-0 shadow-sm px-6">
                  <AccordionTrigger className={`${direction === 'rtl' ? 'text-right' : 'text-left'} font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] hover:no-underline py-5 transition-colors duration-300`}>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-500 dark:text-neutral-300 [font-family:'Almarai',Helvetica] pb-5 leading-relaxed transition-colors duration-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      {/* Graduation */}
      <section className="py-20 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300" id="graduation">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <GraduationCap className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {t("graduation_parties")}
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" dir={direction}>
            <AnimatedSection direction={direction === 'rtl' ? "right" : "left"}>
              <Card className="rounded-3xl border-0 overflow-hidden shadow-lg bg-white dark:bg-neutral-900">
                <CardContent className="p-0">
                  <img className="w-full h-[250px] object-cover" alt="Graduation" src="/figmaAssets/rectangle-10.png" />
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] mb-2 transition-colors duration-300">{t("grad_2025")}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm [font-family:'Almarai',Helvetica] transition-colors duration-300">
                      {t("grad_2025_desc")}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection direction={direction === 'rtl' ? "left" : "right"} delay={0.2}>
              <Card className="rounded-3xl border-0 overflow-hidden shadow-lg bg-white dark:bg-neutral-900">
                <CardContent className="p-0">
                  <img className="w-full h-[250px] object-cover" alt="Graduation" src="/figmaAssets/rectangle-12-1.png" />
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] mb-2 transition-colors duration-300">{t("grad_2024")}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm [font-family:'Almarai',Helvetica] transition-colors duration-300">
                      {t("grad_2024_desc")}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section className="py-20 bg-white dark:bg-neutral-950 transition-colors duration-300" id="jobs">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <Briefcase className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {t("available_jobs")}
              </h2>
            </div>
          </AnimatedSection>

          <div className="flex flex-col gap-4" dir={direction}>
            {jobs.map((job, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-neutral-800">
                  <CardContent className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex flex-col gap-1.5">
                      <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{job.title}</h3>
                      <div className="flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400 [font-family:'Almarai',Helvetica]">
                        <span className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-500 px-3 py-1 rounded-full text-xs font-bold">{job.type}</span>
                        <span>{t("deadline")}: {job.deadline}</span>
                      </div>
                    </div>
                    <button className="px-5 py-2 bg-green-700 hover:bg-green-800 text-white rounded-xl text-sm font-bold [font-family:'Almarai',Helvetica] transition-colors flex-shrink-0">
                      {language === 'ar' ? "تقدم الآن" : "Apply Now"}
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
