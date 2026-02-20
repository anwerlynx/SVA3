import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { Shield, Award, BookOpen } from "lucide-react";

export default function HonorCharter() {
  const { language, direction } = useLanguage();

  const pageTitle = language === 'ar' ? 'ميثاق الشرف' : 'Honor Charter';
  const pageSubtitle = language === 'ar'
    ? 'التزامنا بالنزاهة الأكاديمية والقيم الأخلاقية'
    : 'Our commitment to academic integrity and ethical values';

  const principles = [
    {
      icon: Shield,
      title: language === 'ar' ? 'الأمانة العلمية' : 'Academic Honesty',
      desc: language === 'ar' ? 'الالتزام بالأمانة في جميع الأعمال الأكاديمية والبحثية وعدم الانتحال أو الغش بأي شكل من الأشكال.' : 'Commitment to honesty in all academic and research work, and refraining from plagiarism or cheating in any form.',
    },
    {
      icon: Award,
      title: language === 'ar' ? 'الاحترام المتبادل' : 'Mutual Respect',
      desc: language === 'ar' ? 'احترام جميع أعضاء المجتمع الأكاديمي بغض النظر عن المنصب أو الخلفية أو الرأي.' : 'Respecting all members of the academic community regardless of position, background, or opinion.',
    },
    {
      icon: BookOpen,
      title: language === 'ar' ? 'المسؤولية' : 'Responsibility',
      desc: language === 'ar' ? 'تحمل المسؤولية الكاملة عن السلوك الأكاديمي والشخصي داخل الحرم الجامعي وخارجه.' : 'Taking full responsibility for academic and personal conduct inside and outside the campus.',
    },
    {
      icon: Shield,
      title: language === 'ar' ? 'العدالة والإنصاف' : 'Fairness & Equity',
      desc: language === 'ar' ? 'المعاملة العادلة والمتساوية لجميع الطلاب وأعضاء هيئة التدريس في جميع المعاملات.' : 'Fair and equal treatment for all students and faculty members in all dealings.',
    },
  ];

  const studentCommitments = [
    language === 'ar' ? 'الالتزام بالحضور والمواظبة على المحاضرات والأنشطة الأكاديمية.' : 'Commitment to attendance and regularity in lectures and academic activities.',
    language === 'ar' ? 'إعداد الأبحاث والواجبات بشكل مستقل وأصيل دون لجوء إلى الغش أو الانتحال.' : 'Preparing research and assignments independently and originally without resorting to cheating or plagiarism.',
    language === 'ar' ? 'احترام أعضاء هيئة التدريس والزملاء والعاملين بالمعهد.' : 'Respecting faculty members, peers, and institute staff.',
    language === 'ar' ? 'المحافظة على ممتلكات المعهد والمرافق الأكاديمية.' : 'Preserving institute property and academic facilities.',
    language === 'ar' ? 'الالتزام بقواعد السلوك والآداب العامة داخل الحرم الجامعي.' : 'Adhering to rules of conduct and general etiquette within the campus.',
    language === 'ar' ? 'المشاركة الفعالة في الأنشطة الطلابية وخدمة المجتمع.' : 'Active participation in student activities and community service.',
  ];

  const facultyCommitments = [
    language === 'ar' ? 'تقديم تعليم عالي الجودة يواكب أحدث المعايير الأكاديمية.' : 'Providing high-quality education that keeps pace with the latest academic standards.',
    language === 'ar' ? 'التقييم العادل والموضوعي لأداء الطلاب.' : 'Fair and objective assessment of student performance.',
    language === 'ar' ? 'توفير بيئة تعليمية محفزة وداعمة للإبداع والابتكار.' : 'Providing a stimulating and supportive educational environment for creativity and innovation.',
    language === 'ar' ? 'الالتزام بأخلاقيات البحث العلمي والنشر الأكاديمي.' : 'Commitment to research ethics and academic publishing standards.',
    language === 'ar' ? 'تقديم الإرشاد والتوجيه الأكاديمي للطلاب.' : 'Providing academic guidance and counseling to students.',
  ];

  const institutionalCommitments = [
    language === 'ar' ? 'توفير بيئة تعليمية آمنة ومحفزة لجميع أعضاء المجتمع الأكاديمي.' : 'Providing a safe and stimulating educational environment for all academic community members.',
    language === 'ar' ? 'ضمان تطبيق مبادئ العدالة والمساواة في جميع السياسات والإجراءات.' : 'Ensuring the application of justice and equality principles in all policies and procedures.',
    language === 'ar' ? 'دعم البحث العلمي والابتكار وتوفير الموارد اللازمة.' : 'Supporting scientific research and innovation and providing necessary resources.',
    language === 'ar' ? 'تعزيز ثقافة الجودة والتحسين المستمر في جميع الأنشطة.' : 'Promoting a culture of quality and continuous improvement in all activities.',
  ];

  const violations = [
    {
      title: language === 'ar' ? 'الإنذار الأكاديمي' : 'Academic Warning',
      desc: language === 'ar' ? 'يُوجه للطالب إنذار أكاديمي مكتوب في حالة المخالفة الأولى البسيطة.' : 'A written academic warning is issued to the student for the first minor violation.',
    },
    {
      title: language === 'ar' ? 'الحرمان من الامتحان' : 'Exam Disqualification',
      desc: language === 'ar' ? 'حرمان الطالب من أداء الامتحان في المقرر الذي ثبتت فيه المخالفة.' : 'Disqualifying the student from taking the exam in the course where the violation was proven.',
    },
    {
      title: language === 'ar' ? 'الإيقاف المؤقت' : 'Temporary Suspension',
      desc: language === 'ar' ? 'إيقاف الطالب مؤقتاً عن الدراسة لفترة محددة في حالات المخالفات الجسيمة.' : 'Temporarily suspending the student from studies for a specified period in cases of serious violations.',
    },
    {
      title: language === 'ar' ? 'الفصل النهائي' : 'Final Dismissal',
      desc: language === 'ar' ? 'فصل الطالب نهائياً من المعهد في حالة تكرار المخالفات الجسيمة.' : 'Final dismissal of the student from the institute in cases of repeated serious violations.',
    },
  ];

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={pageTitle} description={pageSubtitle} />
      <Navbar />

      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" alt="Honor Charter" src="/figmaAssets/rectangle-2.png" />
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
            { label: pageTitle },
          ]}
        />
      </div>

      <section className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[900px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <BookOpen className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'مقدمة ميثاق الشرف' : 'Introduction to the Honor Charter'}
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Card className="rounded-3xl border-0 shadow-lg bg-white dark:bg-neutral-900">
              <CardContent className="p-8 md:p-12" dir={direction}>
                <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">
                  {language === 'ar'
                    ? 'يمثل ميثاق الشرف الأكاديمي في معاهد الوادي العليا العقد الأخلاقي الذي يلتزم به جميع أعضاء المجتمع الأكاديمي من طلاب وأعضاء هيئة تدريس وإداريين. يهدف هذا الميثاق إلى تعزيز قيم النزاهة الأكاديمية والأمانة العلمية والاحترام المتبادل، وخلق بيئة تعليمية قائمة على الثقة والمسؤولية. إن الالتزام بهذا الميثاق هو واجب على كل فرد ينتمي إلى مجتمع معاهد الوادي العليا.'
                    : 'The Academic Honor Charter at Valley Higher Institutes represents the ethical contract that all members of the academic community—students, faculty, and administrators—commit to. This charter aims to promote the values of academic integrity, scientific honesty, and mutual respect, and to create an educational environment based on trust and responsibility. Commitment to this charter is a duty for every individual belonging to the Valley Higher Institutes community.'}
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-16" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <Shield className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'مبادئ النزاهة الأكاديمية' : 'Academic Integrity Principles'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" dir={direction}>
            {principles.map((principle, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full text-center group bg-white dark:bg-neutral-800">
                  <CardContent className="p-6 flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center group-hover:bg-green-100 dark:group-hover:bg-green-900/40 transition-colors">
                      <principle.icon className="w-8 h-8 text-green-700 dark:text-green-500" />
                    </div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{principle.title}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{principle.desc}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12" dir={direction}>
            <AnimatedSection direction={direction === 'rtl' ? "right" : "left"}>
              <Card className="rounded-3xl border-0 shadow-lg h-full bg-white dark:bg-neutral-900">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-green-700 dark:text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                      {language === 'ar' ? 'التزامات الطلاب' : 'Student Commitments'}
                    </h3>
                  </div>
                  <div className="flex flex-col gap-3">
                    {studentCommitments.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-xl hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
                        <Shield className="w-5 h-5 text-green-700 dark:text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-700 dark:text-neutral-300 text-sm [font-family:'Almarai',Helvetica]">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection direction={direction === 'rtl' ? "left" : "right"} delay={0.2}>
              <Card className="rounded-3xl border-0 shadow-lg h-full bg-white dark:bg-neutral-900">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center">
                      <Award className="w-6 h-6 text-green-700 dark:text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                      {language === 'ar' ? 'التزامات هيئة التدريس' : 'Faculty Commitments'}
                    </h3>
                  </div>
                  <div className="flex flex-col gap-3">
                    {facultyCommitments.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-xl hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
                        <Award className="w-5 h-5 text-green-700 dark:text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-700 dark:text-neutral-300 text-sm [font-family:'Almarai',Helvetica]">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-green-800 dark:bg-green-900 transition-colors duration-300">
        <div className="max-w-[900px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white [font-family:'Almarai',Helvetica]">
                {language === 'ar' ? 'التزامات المؤسسة' : 'Institutional Commitments'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" dir={direction}>
            {institutionalCommitments.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 bg-white/10 backdrop-blur-sm h-full dark:bg-black/20">
                  <CardContent className="p-6 flex items-start gap-4">
                    <Shield className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                    <p className="text-white/90 text-sm leading-relaxed [font-family:'Almarai',Helvetica]">{item}</p>
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
                <div className="w-12 h-1 bg-red-600 rounded-full" />
                <Shield className="w-6 h-6 text-red-600" />
                <div className="w-12 h-1 bg-red-600 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'عواقب المخالفات' : 'Consequences of Violations'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" dir={direction}>
            {violations.map((violation, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full bg-white dark:bg-neutral-900">
                  <CardContent className="p-6 flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-red-600 font-bold text-lg [font-family:'Almarai',Helvetica]">{index + 1}</span>
                      </div>
                      <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{violation.title}</h3>
                    </div>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{violation.desc}</p>
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