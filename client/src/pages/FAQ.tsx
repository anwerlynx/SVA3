import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, GraduationCap, BookOpen, CreditCard, Building2, Users, Clock, Phone, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";

export default function FAQ() {
  const { language, direction } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('admission');
  const [faqsData, setFaqsData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/faqs')
      .then(res => res.json())
      .then(data => {
        setFaqsData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const categories = [
    { id: 'admission', icon: GraduationCap, label: language === 'ar' ? 'القبول والتسجيل' : 'Admission & Registration' },
    { id: 'academic', icon: BookOpen, label: language === 'ar' ? 'الحياة الأكاديمية' : 'Academic Life' },
    { id: 'financial', icon: CreditCard, label: language === 'ar' ? 'المصاريف والدفع' : 'Fees & Payment' },
    { id: 'facilities', icon: Building2, label: language === 'ar' ? 'المرافق والخدمات' : 'Facilities & Services' },
    { id: 'student', icon: Users, label: language === 'ar' ? 'شئون الطلاب' : 'Student Affairs' },
    { id: 'schedule', icon: Clock, label: language === 'ar' ? 'المواعيد والجداول' : 'Schedules & Timings' },
  ];

  const faqData = faqsData.reduce((acc: Record<string, Array<{q: string, a: string}>>, faq: any) => {
    const cat = faq.category || 'general';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push({
      q: language === 'ar' ? faq.questionAr : (faq.questionEn || faq.questionAr),
      a: language === 'ar' ? faq.answerAr : (faq.answerEn || faq.answerAr),
    });
    return acc;
  }, {});

  const currentFaqs = faqData[activeCategory] || [];

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300" dir={direction}>
      <PageHead
        title={language === 'ar' ? 'الأسئلة الشائعة - معاهد الوادي العليا' : 'FAQ - Valley Higher Institutes'}
        description={language === 'ar' ? 'إجابات على الأسئلة الشائعة حول القبول والدراسة في معاهد الوادي العليا' : 'Answers to frequently asked questions about admission and studying at Valley Higher Institutes'}
      />
      <Navbar />

      <section className="relative h-[350px] md:h-[420px] flex items-center justify-center overflow-hidden">
        <img src="/figmaAssets/rectangle-2.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white [font-family:'Almarai',Helvetica] mb-4">
            {language === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
          </h1>
          <p className="text-white/80 text-lg md:text-xl [font-family:'Almarai',Helvetica] max-w-[600px] mx-auto">
            {language === 'ar' ? 'إجابات على أهم الأسئلة التي تشغل بال الطلاب وأولياء الأمور' : 'Answers to the most important questions on the minds of students and parents'}
          </p>
        </div>
      </section>

      <Breadcrumb items={[
        { label: language === 'ar' ? 'الرئيسية' : 'Home', href: '/' },
        { label: language === 'ar' ? 'الأسئلة الشائعة' : 'FAQ' },
      ]} />

      <section className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1100px] mx-auto px-4 md:px-8">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-10 h-10 text-green-700 animate-spin" />
            </div>
          ) : (
          <>
          <AnimatedSection>
            <div className="text-center mb-12">
              <HelpCircle className="w-12 h-12 text-green-700 dark:text-green-500 mx-auto mb-4 transition-colors duration-300" />
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] mb-3 transition-colors duration-300">
                {language === 'ar' ? 'كيف يمكننا مساعدتك؟' : 'How can we help you?'}
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-lg [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'اختر الفئة التي تهمك لعرض الأسئلة والأجوبة المتعلقة بها' : 'Choose a category to view related questions and answers'}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3 mb-14">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold [font-family:'Almarai',Helvetica] transition-all ${
                    activeCategory === cat.id
                      ? 'bg-green-700 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-green-50 dark:hover:bg-neutral-700'
                  }`}
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.label}
                </button>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="max-w-[800px] mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {currentFaqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-gray-200 dark:border-neutral-800 rounded-2xl px-6 overflow-hidden bg-white dark:bg-neutral-900 transition-colors duration-300"
                  >
                    <AccordionTrigger className="text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] font-bold text-base py-5 hover:no-underline transition-colors duration-300">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-neutral-600 dark:text-neutral-400 [font-family:'Almarai',Helvetica] text-sm leading-relaxed pb-5 transition-colors duration-300">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </AnimatedSection>
          </>
          )}
        </div>
      </section>

      <section className="py-16 bg-green-700 dark:bg-green-900 transition-colors duration-300">
        <div className="max-w-[700px] mx-auto px-4 md:px-8 text-center">
          <AnimatedSection>
            <h3 className="text-2xl font-bold text-white [font-family:'Almarai',Helvetica] mb-4">
              {language === 'ar' ? 'لم تجد إجابة لسؤالك؟' : "Didn't find an answer to your question?"}
            </h3>
            <p className="text-white/80 [font-family:'Almarai',Helvetica] mb-6">
              {language === 'ar' ? 'تواصل معنا مباشرة وسنسعد بالإجابة على جميع استفساراتك' : 'Contact us directly and we will be happy to answer all your inquiries'}
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-green-700 rounded-full font-bold [font-family:'Almarai',Helvetica] hover:bg-green-50 transition-colors">
              <Phone className="w-5 h-5" />
              {language === 'ar' ? 'اتصل بنا' : 'Contact Us'}
            </a>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
