import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, GraduationCap, BookOpen, CreditCard, Building2, Users, Clock, Phone } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const { language, direction } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('admission');

  const categories = [
    { id: 'admission', icon: GraduationCap, label: language === 'ar' ? 'القبول والتسجيل' : 'Admission & Registration' },
    { id: 'academic', icon: BookOpen, label: language === 'ar' ? 'الحياة الأكاديمية' : 'Academic Life' },
    { id: 'financial', icon: CreditCard, label: language === 'ar' ? 'المصاريف والدفع' : 'Fees & Payment' },
    { id: 'facilities', icon: Building2, label: language === 'ar' ? 'المرافق والخدمات' : 'Facilities & Services' },
    { id: 'student', icon: Users, label: language === 'ar' ? 'شئون الطلاب' : 'Student Affairs' },
    { id: 'schedule', icon: Clock, label: language === 'ar' ? 'المواعيد والجداول' : 'Schedules & Timings' },
  ];

  const faqData: Record<string, Array<{q: string, a: string}>> = {
    admission: [
      {
        q: language === 'ar' ? 'ما هي شروط الالتحاق بمعاهد الوادي العليا؟' : 'What are the admission requirements for Valley Higher Institutes?',
        a: language === 'ar' ? 'يشترط الحصول على شهادة الثانوية العامة أو ما يعادلها، واستيفاء الحد الأدنى للدرجات المحدد من المجلس الأعلى للجامعات لكل عام دراسي. يتم القبول وفقاً لترتيب المجموع الكلي وقواعد التنسيق.' : 'Applicants must hold a high school diploma or equivalent, and meet the minimum grade requirements set by the Supreme Council of Universities for each academic year. Admission is based on total score ranking and coordination rules.',
      },
      {
        q: language === 'ar' ? 'ما هي المستندات المطلوبة للتقديم؟' : 'What documents are required for application?',
        a: language === 'ar' ? 'المستندات المطلوبة تشمل: أصل شهادة الثانوية العامة أو ما يعادلها، شهادة الميلاد الأصلية أو مستخرج رسمي، 6 صور شخصية حديثة، صورة بطاقة الرقم القومي، نموذج 2 جند للطلاب الذكور، وموقف التجنيد للطلاب فوق 19 سنة.' : 'Required documents include: Original high school certificate or equivalent, original birth certificate or official extract, 6 recent personal photos, copy of national ID card, Military Form 2 for male students, and military status for students over 19 years old.',
      },
      {
        q: language === 'ar' ? 'هل يقبل المعهد طلاب من الثانوية الأزهرية والدبلومات؟' : 'Does the institute accept students from Al-Azhar secondary and diplomas?',
        a: language === 'ar' ? 'نعم، يقبل المعهد طلاب الثانوية الأزهرية والدبلومات الفنية وفقاً لقواعد التنسيق والحد الأدنى المعلن من المجلس الأعلى للجامعات.' : 'Yes, the institute accepts students from Al-Azhar secondary and technical diplomas according to the coordination rules and minimum requirements announced by the Supreme Council of Universities.',
      },
      {
        q: language === 'ar' ? 'متى يبدأ التقديم في المعهد؟' : 'When does the application period begin?',
        a: language === 'ar' ? 'يبدأ التقديم عادة بعد ظهور نتائج تنسيق الثانوية العامة مباشرة، ويستمر حتى اكتمال العدد المحدد. يُنصح بمتابعة الموقع الرسمي وصفحات المعهد على وسائل التواصل الاجتماعي لمعرفة مواعيد التقديم بدقة.' : 'Applications usually begin immediately after high school coordination results are announced and continue until the designated number is complete. We recommend following the official website and social media pages for exact application dates.',
      },
      {
        q: language === 'ar' ? 'هل يمكن التحويل من معهد أو كلية أخرى؟' : 'Can I transfer from another institute or college?',
        a: language === 'ar' ? 'نعم، يمكن التحويل وفقاً للقواعد المنظمة التي يحددها المجلس الأعلى للجامعات، بشرط توافر الشروط اللازمة وموافقة الجهات المختصة.' : 'Yes, transfers are possible according to the regulations set by the Supreme Council of Universities, provided that the necessary conditions are met and the relevant authorities approve.',
      },
    ],
    academic: [
      {
        q: language === 'ar' ? 'كم مدة الدراسة في المعهد؟' : 'How long is the study duration?',
        a: language === 'ar' ? 'مدة الدراسة 4 سنوات دراسية يحصل بعدها الطالب على درجة البكالوريوس المعتمد من المجلس الأعلى للجامعات.' : 'The study duration is 4 academic years, after which the student receives a bachelor\'s degree accredited by the Supreme Council of Universities.',
      },
      {
        q: language === 'ar' ? 'ما هي الأقسام المتاحة في معهد الإدارة؟' : 'What departments are available in the Management Institute?',
        a: language === 'ar' ? 'يضم معهد الإدارة أربعة أقسام: نظم المعلومات الإدارية، المحاسبة، العلوم المالية والمصرفية، وإدارة الأعمال.' : 'The Management Institute has four departments: Management Information Systems, Accounting, Financial and Banking Sciences, and Business Administration.',
      },
      {
        q: language === 'ar' ? 'ما هي الأقسام المتاحة في معهد الهندسة؟' : 'What departments are available in the Engineering Institute?',
        a: language === 'ar' ? 'يضم معهد الهندسة أربعة أقسام: هندسة القوى والاتصالات الكهربائية، الهندسة المدنية، الهندسة المعمارية، وهندسة الحاسبات والتحكم الآلي.' : 'The Engineering Institute has four departments: Electrical Power and Telecommunications Engineering, Civil Engineering, Architecture, and Computer and Control Engineering.',
      },
      {
        q: language === 'ar' ? 'هل الشهادة معتمدة؟' : 'Is the degree accredited?',
        a: language === 'ar' ? 'نعم، الشهادة معتمدة من المجلس الأعلى للجامعات ومعادلة لشهادات الجامعات الحكومية المصرية. يمكن للخريجين استكمال الدراسات العليا في أي جامعة مصرية أو دولية.' : 'Yes, the degree is accredited by the Supreme Council of Universities and equivalent to Egyptian public university degrees. Graduates can pursue postgraduate studies at any Egyptian or international university.',
      },
      {
        q: language === 'ar' ? 'هل يوجد تدريب عملي خلال الدراسة؟' : 'Is there practical training during the study?',
        a: language === 'ar' ? 'نعم، يتضمن البرنامج الدراسي تدريبات عملية في المعامل والمختبرات المتخصصة، بالإضافة إلى التدريب الميداني في الشركات والمؤسسات المتعاقدة مع المعهد.' : 'Yes, the curriculum includes practical training in specialized labs and laboratories, as well as field training at companies and institutions contracted with the institute.',
      },
    ],
    financial: [
      {
        q: language === 'ar' ? 'ما هي مصاريف الدراسة؟' : 'What are the tuition fees?',
        a: language === 'ar' ? 'تختلف المصاريف حسب القسم والتخصص. يمكنك التواصل مع مكتب القبول للحصول على تفاصيل المصاريف الدراسية المحدثة لكل قسم.' : 'Fees vary by department and specialization. Please contact the admissions office for updated detailed fee information for each department.',
      },
      {
        q: language === 'ar' ? 'هل يوجد نظام تقسيط؟' : 'Is there an installment system?',
        a: language === 'ar' ? 'نعم، يتوفر نظام تقسيط مرن للمصاريف الدراسية على عدة أقساط لتسهيل عملية الدفع على الطلاب وأولياء الأمور. يمكن التواصل مع الشؤون المالية لمعرفة التفاصيل.' : 'Yes, a flexible installment plan is available for tuition fees in several installments to make payment easier for students and parents. Contact the financial affairs office for details.',
      },
      {
        q: language === 'ar' ? 'هل توجد منح دراسية أو تخفيضات؟' : 'Are there scholarships or discounts?',
        a: language === 'ar' ? 'يقدم المعهد تخفيضات خاصة لأبناء العاملين والمتفوقين دراسياً. كما تتوفر منح جزئية للطلاب المتميزين أكاديمياً وذوي الظروف الاقتصادية الخاصة.' : 'The institute offers special discounts for children of employees and academically outstanding students. Partial scholarships are also available for academically distinguished students and those with special economic circumstances.',
      },
      {
        q: language === 'ar' ? 'ما هي طرق الدفع المتاحة؟' : 'What payment methods are available?',
        a: language === 'ar' ? 'يمكن الدفع نقداً في مقر المعهد، أو عن طريق التحويل البنكي، أو من خلال خدمات الدفع الإلكتروني المعتمدة.' : 'Payment can be made in cash at the institute, via bank transfer, or through approved electronic payment services.',
      },
    ],
    facilities: [
      {
        q: language === 'ar' ? 'ما هي المرافق المتاحة في المعهد؟' : 'What facilities are available at the institute?',
        a: language === 'ar' ? 'يضم المعهد قاعات محاضرات مجهزة بأحدث التقنيات، معامل حاسب آلي، معامل هندسية متخصصة، مكتبة شاملة، ملاعب رياضية، كافتيريا، ومسجد.' : 'The institute includes lecture halls equipped with the latest technology, computer labs, specialized engineering labs, a comprehensive library, sports fields, a cafeteria, and a mosque.',
      },
      {
        q: language === 'ar' ? 'هل يوجد إنترنت واي فاي في الحرم الجامعي؟' : 'Is there Wi-Fi on campus?',
        a: language === 'ar' ? 'نعم، يتوفر إنترنت واي فاي مجاني في جميع أنحاء الحرم الجامعي يمكن للطلاب والموظفين الوصول إليه.' : 'Yes, free Wi-Fi is available throughout the campus and accessible to students and staff.',
      },
      {
        q: language === 'ar' ? 'هل يوجد مواصلات للمعهد؟' : 'Is there transportation to the institute?',
        a: language === 'ar' ? 'المعهد يقع على الكيلو 47 طريق مصر الإسماعيلية الصحراوي، ويمكن الوصول إليه بسهولة عبر وسائل النقل العام. كما تتوفر خدمات نقل خاصة من بعض المناطق.' : 'The institute is located at Km 47 on the Cairo-Ismailia Desert Road and is easily accessible by public transport. Private transportation services are also available from some areas.',
      },
    ],
    student: [
      {
        q: language === 'ar' ? 'ما هي الأنشطة الطلابية المتاحة؟' : 'What student activities are available?',
        a: language === 'ar' ? 'يوفر المعهد أنشطة متنوعة تشمل: اتحاد الطلاب، اللجنة الثقافية، اللجنة الرياضية، لجنة الفنون، اللجنة الاجتماعية، والكشافة والخدمة العامة.' : 'The institute offers diverse activities including: Student Union, Cultural Committee, Sports Committee, Arts Committee, Social Committee, and Scouts & Public Services.',
      },
      {
        q: language === 'ar' ? 'كيف يمكنني الحصول على إفادة أو شهادة قيد؟' : 'How can I get an enrollment certificate?',
        a: language === 'ar' ? 'يمكنك التقدم بطلب للحصول على إفادة قيد من خلال مكتب شئون الطلاب، وعادة يتم إصدارها خلال 2-3 أيام عمل.' : 'You can apply for an enrollment certificate through the Student Affairs office, and it is usually issued within 2-3 business days.',
      },
      {
        q: language === 'ar' ? 'ما هو نظام الغياب والحضور؟' : 'What is the attendance system?',
        a: language === 'ar' ? 'يلتزم الطالب بحضور 75% على الأقل من المحاضرات والدروس العملية. في حالة تجاوز نسبة الغياب المسموحة، يُحرم الطالب من دخول الامتحان في المقرر المعني.' : 'Students must attend at least 75% of lectures and practical sessions. If the allowed absence rate is exceeded, the student is barred from taking the exam in the relevant course.',
      },
    ],
    schedule: [
      {
        q: language === 'ar' ? 'ما هي مواعيد الدراسة؟' : 'What are the study hours?',
        a: language === 'ar' ? 'تبدأ المحاضرات عادة من الساعة 8:30 صباحاً حتى 3:30 مساءً، من السبت إلى الخميس. قد تختلف المواعيد حسب القسم والمستوى الدراسي.' : 'Lectures usually start from 8:30 AM to 3:30 PM, Saturday to Thursday. Schedules may vary by department and academic level.',
      },
      {
        q: language === 'ar' ? 'متى تبدأ الامتحانات؟' : 'When do exams start?',
        a: language === 'ar' ? 'تُعقد امتحانات نهاية الفصل الدراسي الأول عادة في يناير، وامتحانات الفصل الدراسي الثاني في يونيو. يتم الإعلان عن الجداول التفصيلية قبل الامتحانات بشهر على الأقل.' : 'First semester exams are usually held in January, and second semester exams in June. Detailed schedules are announced at least one month before exams.',
      },
      {
        q: language === 'ar' ? 'ما هي مواعيد المكتبة؟' : 'What are the library hours?',
        a: language === 'ar' ? 'المكتبة متاحة من السبت إلى الخميس من الساعة 8 صباحاً حتى 8 مساءً. وتعمل بساعات مخفضة خلال فترات العطل.' : 'The library is open Saturday to Thursday from 8 AM to 8 PM. It operates with reduced hours during holiday periods.',
      },
    ],
  };

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
            <a href="/about" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-green-700 rounded-full font-bold [font-family:'Almarai',Helvetica] hover:bg-green-50 transition-colors">
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
