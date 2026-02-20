import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { Download, BookCopy, Clock, HelpCircle, FileText, Tablet, CheckCircle2 } from "lucide-react";

export default function DigitalBorrowing() {
  const { language, direction } = useLanguage();

  const pageTitle = language === 'ar' ? 'الاستعارة الرقمية' : 'Digital Borrowing';
  const pageSubtitle = language === 'ar'
    ? 'استعارة الكتب والمراجع الإلكترونية بسهولة من أي مكان'
    : 'Borrow e-books and digital references easily from anywhere';

  const borrowingSteps = [
    {
      step: '1',
      title: language === 'ar' ? 'تسجيل الدخول' : 'Log In',
      desc: language === 'ar' ? 'سجل الدخول إلى حسابك في المكتبة الرقمية باستخدام بريدك الجامعي وكلمة المرور.' : 'Log in to your digital library account using your university email and password.',
    },
    {
      step: '2',
      title: language === 'ar' ? 'البحث والتصفح' : 'Search & Browse',
      desc: language === 'ar' ? 'ابحث عن الكتاب أو المرجع المطلوب باستخدام محرك البحث المتقدم أو تصفح الأقسام.' : 'Search for the desired book or reference using the advanced search engine or browse categories.',
    },
    {
      step: '3',
      title: language === 'ar' ? 'طلب الاستعارة' : 'Request Borrowing',
      desc: language === 'ar' ? 'اضغط على زر "استعارة" لإضافة الكتاب إلى قائمة المستعارات الخاصة بك.' : 'Click the "Borrow" button to add the book to your borrowing list.',
    },
    {
      step: '4',
      title: language === 'ar' ? 'القراءة والتحميل' : 'Read & Download',
      desc: language === 'ar' ? 'اقرأ الكتاب مباشرة عبر المتصفح أو حمّله بالصيغة المتاحة للقراءة دون اتصال.' : 'Read the book directly in your browser or download it in the available format for offline reading.',
    },
  ];

  const policies = [
    {
      icon: Clock,
      title: language === 'ar' ? 'مدة الاستعارة' : 'Borrowing Duration',
      items: [
        language === 'ar' ? 'الكتب الإلكترونية: 14 يوماً قابلة للتجديد' : 'E-books: 14 days, renewable',
        language === 'ar' ? 'المقالات والأبحاث: 7 أيام' : 'Articles and research: 7 days',
        language === 'ar' ? 'المراجع الأساسية: 3 أيام فقط' : 'Core references: 3 days only',
      ],
    },
    {
      icon: BookCopy,
      title: language === 'ar' ? 'حدود الاستعارة' : 'Borrowing Limits',
      items: [
        language === 'ar' ? 'الحد الأقصى: 5 كتب في وقت واحد' : 'Maximum: 5 books at a time',
        language === 'ar' ? 'التجديد: مرة واحدة لكل كتاب' : 'Renewal: once per book',
        language === 'ar' ? 'الحجز المسبق: متاح لكتابين في وقت واحد' : 'Advance reservation: available for 2 books at a time',
      ],
    },
  ];

  const formats = [
    {
      format: 'PDF',
      desc: language === 'ar' ? 'الصيغة الأكثر شيوعاً، متوافقة مع جميع الأجهزة والمتصفحات.' : 'The most common format, compatible with all devices and browsers.',
      icon: FileText,
    },
    {
      format: 'ePub',
      desc: language === 'ar' ? 'صيغة مثالية للقراءة على الأجهزة المحمولة مع دعم تغيير حجم الخط.' : 'Ideal format for mobile reading with font size adjustment support.',
      icon: Tablet,
    },
    {
      format: 'MOBI',
      desc: language === 'ar' ? 'صيغة متوافقة مع أجهزة Kindle وتطبيقات القراءة المتخصصة.' : 'Compatible format with Kindle devices and specialized reading apps.',
      icon: BookCopy,
    },
    {
      format: language === 'ar' ? 'قراءة عبر الإنترنت' : 'Online Reader',
      desc: language === 'ar' ? 'اقرأ مباشرة في المتصفح دون الحاجة لتحميل أي ملفات أو برامج.' : 'Read directly in the browser without downloading any files or software.',
      icon: Download,
    },
  ];

  const faqs = [
    {
      question: language === 'ar' ? 'كيف أنشئ حساباً في المكتبة الرقمية؟' : 'How do I create a digital library account?',
      answer: language === 'ar'
        ? 'يمكنك إنشاء حساب تلقائياً باستخدام بريدك الإلكتروني الجامعي. قم بزيارة بوابة المكتبة الرقمية واختر "تسجيل جديد"، ثم أدخل بريدك الجامعي وسيتم إرسال رابط التفعيل إليك.'
        : 'You can automatically create an account using your university email. Visit the digital library portal, select "New Registration," enter your university email, and an activation link will be sent to you.',
    },
    {
      question: language === 'ar' ? 'هل يمكنني تجديد فترة الاستعارة؟' : 'Can I renew the borrowing period?',
      answer: language === 'ar'
        ? 'نعم، يمكنك تجديد فترة الاستعارة مرة واحدة لكل كتاب، بشرط عدم وجود طلب حجز من مستخدم آخر على نفس الكتاب. يتم التجديد تلقائياً من خلال حسابك.'
        : 'Yes, you can renew the borrowing period once per book, provided there is no reservation request from another user for the same book. Renewal is done automatically through your account.',
    },
    {
      question: language === 'ar' ? 'ماذا يحدث عند انتهاء فترة الاستعارة؟' : 'What happens when the borrowing period expires?',
      answer: language === 'ar'
        ? 'عند انتهاء فترة الاستعارة، يتم إلغاء الوصول تلقائياً إلى الكتاب المستعار. لن يتم فرض غرامات ولكن سيتم تعليق حق الاستعارة لمدة أسبوع إذا تجاوزت الموعد دون إعادة.'
        : 'When the borrowing period expires, access to the borrowed book is automatically revoked. No fines are imposed, but borrowing rights will be suspended for one week if the due date is exceeded without return.',
    },
    {
      question: language === 'ar' ? 'هل يمكنني طباعة الكتب المستعارة؟' : 'Can I print borrowed books?',
      answer: language === 'ar'
        ? 'يمكنك طباعة حتى 10% من محتوى الكتاب للاستخدام الشخصي والأكاديمي فقط. يحظر طباعة الكتاب كاملاً وفقاً لحقوق النشر والملكية الفكرية.'
        : 'You can print up to 10% of the book content for personal and academic use only. Printing the entire book is prohibited in accordance with copyright and intellectual property rights.',
    },
    {
      question: language === 'ar' ? 'هل الخدمة مجانية للطلاب؟' : 'Is the service free for students?',
      answer: language === 'ar'
        ? 'نعم، خدمة الاستعارة الرقمية مجانية بالكامل لجميع الطلاب وأعضاء هيئة التدريس المسجلين في معاهد الوادي العليا. يتم تغطية تكاليف الاشتراكات من ميزانية المعاهد.'
        : 'Yes, the digital borrowing service is completely free for all students and faculty members registered at Valley Higher Institutes. Subscription costs are covered by the institutes\' budget.',
    },
    {
      question: language === 'ar' ? 'ما هي الأجهزة المدعومة؟' : 'What devices are supported?',
      answer: language === 'ar'
        ? 'يمكنك الوصول إلى المكتبة الرقمية من أي جهاز متصل بالإنترنت: الحاسب الشخصي، اللابتوب، الأجهزة اللوحية، والهواتف الذكية. كما تتوفر تطبيقات مخصصة لنظامي iOS و Android.'
        : 'You can access the digital library from any internet-connected device: desktop, laptop, tablet, and smartphone. Dedicated apps are also available for iOS and Android.',
    },
  ];

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={pageTitle} description={pageSubtitle} />
      <Navbar />

      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" alt="Digital Borrowing" src="/figmaAssets/rectangle-2.png" />
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
        <div className="max-w-[900px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <Download className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'كيف تعمل الاستعارة الرقمية' : 'How Digital Borrowing Works'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="flex flex-col gap-6" dir={direction}>
            {borrowingSteps.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction={direction === 'rtl' ? "right" : "left"}>
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-neutral-900">
                  <CardContent className="p-6 flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-green-700 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg [font-family:'Almarai',Helvetica]">{item.step}</span>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{item.title}</h3>
                      <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{item.desc}</p>
                    </div>
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
                <BookCopy className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'سياسات الاستعارة' : 'Borrowing Policies'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" dir={direction}>
            {policies.map((policy, index) => (
              <AnimatedSection key={index} delay={index * 0.15} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full bg-white dark:bg-neutral-800">
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center flex-shrink-0">
                        <policy.icon className="w-6 h-6 text-green-700 dark:text-green-500" />
                      </div>
                      <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{policy.title}</h3>
                    </div>
                    <div className="flex flex-col gap-2">
                      {policy.items.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 p-2 rounded-lg">
                          <CheckCircle2 className="w-4 h-4 text-green-700 dark:text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-neutral-600 dark:text-neutral-300 text-sm [font-family:'Almarai',Helvetica]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
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
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <FileText className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'الصيغ المتاحة' : 'Available Formats'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" dir={direction}>
            {formats.map((fmt, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full text-center group bg-white dark:bg-neutral-900">
                  <CardContent className="p-6 flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center group-hover:bg-green-100 dark:group-hover:bg-green-900/40 transition-colors">
                      <fmt.icon className="w-8 h-8 text-green-700 dark:text-green-500" />
                    </div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{fmt.format}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{fmt.desc}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[800px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <HelpCircle className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
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

      <Footer />
    </div>
  );
}