import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Shield, Scale, AlertTriangle, AlertOctagon, Ban, ClipboardList, RotateCcw, Award, CheckCircle2, BookOpen } from "lucide-react";

export default function StudentDiscipline() {
  const { language, direction } = useLanguage();

  const pageTitle = language === 'ar' ? 'نظام تأديب الطالب' : 'Student Discipline System';
  const pageSubtitle = language === 'ar'
    ? 'قواعد ولوائح تنظيم السلوك الطلابي وضمان بيئة أكاديمية منضبطة'
    : 'Rules and regulations governing student conduct and ensuring a disciplined academic environment';

  const systemOverview = language === 'ar'
    ? 'يهدف نظام تأديب الطالب في معاهد الوادي العليا إلى تنظيم السلوك الطلابي وضمان بيئة أكاديمية آمنة ومنضبطة تحترم حقوق جميع أعضاء المجتمع الأكاديمي. يستند النظام إلى مبادئ العدالة والشفافية وحماية حقوق الطالب مع الحفاظ على النظام العام والقيم الأكاديمية.'
    : 'The student discipline system at Valley Higher Institutes aims to regulate student conduct and ensure a safe and disciplined academic environment that respects the rights of all members of the academic community. The system is based on principles of justice, transparency, and protection of student rights while maintaining public order and academic values.';

  const studentRights = [
    language === 'ar' ? 'الحق في التعليم الجيد والمعاملة العادلة' : 'Right to quality education and fair treatment',
    language === 'ar' ? 'الحق في التعبير عن الرأي بشكل حضاري' : 'Right to express opinions in a civilized manner',
    language === 'ar' ? 'الحق في الطعن والتظلم من القرارات التأديبية' : 'Right to appeal and challenge disciplinary decisions',
    language === 'ar' ? 'الحق في الدفاع عن النفس أمام لجان التحقيق' : 'Right to defend oneself before investigation committees',
    language === 'ar' ? 'الحق في السرية والخصوصية في التحقيقات' : 'Right to confidentiality and privacy in investigations',
    language === 'ar' ? 'الحق في الحصول على نسخة من قرار التأديب' : 'Right to receive a copy of the disciplinary decision',
  ];

  const studentResponsibilities = [
    language === 'ar' ? 'الالتزام بلوائح ونظم المعاهد' : 'Adherence to institute regulations and systems',
    language === 'ar' ? 'احترام أعضاء هيئة التدريس والموظفين والزملاء' : 'Respecting faculty members, staff, and fellow students',
    language === 'ar' ? 'الحفاظ على ممتلكات المعهد والمرافق العامة' : 'Preserving institute property and public facilities',
    language === 'ar' ? 'الالتزام بالمواعيد والحضور المنتظم' : 'Commitment to schedules and regular attendance',
    language === 'ar' ? 'النزاهة الأكاديمية وعدم الغش في الامتحانات' : 'Academic integrity and no cheating in examinations',
    language === 'ar' ? 'الالتزام بقواعد الزي الرسمي والمظهر اللائق' : 'Adherence to dress code and appropriate appearance',
  ];

  const violationTypes = [
    {
      level: language === 'ar' ? 'مخالفات بسيطة' : 'Minor Violations',
      icon: AlertTriangle,
      color: 'text-yellow-600 dark:text-yellow-500',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      items: [
        language === 'ar' ? 'التأخر عن المحاضرات بشكل متكرر' : 'Repeated tardiness to lectures',
        language === 'ar' ? 'عدم الالتزام بالزي الرسمي' : 'Non-compliance with dress code',
        language === 'ar' ? 'إحداث ضوضاء أو إزعاج داخل الحرم' : 'Creating noise or disturbance on campus',
        language === 'ar' ? 'استخدام الهاتف أثناء المحاضرات' : 'Using phone during lectures',
      ],
      penalty: language === 'ar' ? 'إنذار شفهي أو كتابي' : 'Verbal or written warning',
    },
    {
      level: language === 'ar' ? 'مخالفات متوسطة' : 'Moderate Violations',
      icon: AlertOctagon,
      color: 'text-orange-600 dark:text-orange-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      items: [
        language === 'ar' ? 'تجاوز نسبة الغياب المسموح بها' : 'Exceeding the allowed absence rate',
        language === 'ar' ? 'الإساءة اللفظية للزملاء أو الموظفين' : 'Verbal abuse towards colleagues or staff',
        language === 'ar' ? 'إتلاف ممتلكات المعهد بشكل غير متعمد' : 'Unintentional damage to institute property',
        language === 'ar' ? 'التدخين في الأماكن المحظورة' : 'Smoking in prohibited areas',
      ],
      penalty: language === 'ar' ? 'إنذار نهائي أو حرمان من امتحان مادة واحدة' : 'Final warning or denial of one subject examination',
    },
    {
      level: language === 'ar' ? 'مخالفات جسيمة' : 'Severe Violations',
      icon: Ban,
      color: 'text-red-600 dark:text-red-500',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      items: [
        language === 'ar' ? 'الغش في الامتحانات أو التزوير في المستندات' : 'Cheating in exams or document forgery',
        language === 'ar' ? 'الاعتداء الجسدي على أي شخص داخل الحرم' : 'Physical assault on any person on campus',
        language === 'ar' ? 'إتلاف ممتلكات المعهد بشكل متعمد' : 'Intentional destruction of institute property',
        language === 'ar' ? 'حيازة مواد محظورة أو أسلحة' : 'Possession of prohibited substances or weapons',
      ],
      penalty: language === 'ar' ? 'الفصل المؤقت أو الفصل النهائي من المعهد' : 'Temporary suspension or permanent expulsion from the institute',
    },
  ];

  const disciplinaryProcedures = [
    {
      step: '1',
      title: language === 'ar' ? 'الإبلاغ عن المخالفة' : 'Report the Violation',
      desc: language === 'ar' ? 'يتم الإبلاغ عن المخالفة من قبل عضو هيئة التدريس أو الموظف المختص أو أي شاهد.' : 'The violation is reported by a faculty member, relevant staff, or any witness.',
    },
    {
      step: '2',
      title: language === 'ar' ? 'تشكيل لجنة التحقيق' : 'Form Investigation Committee',
      desc: language === 'ar' ? 'يتم تشكيل لجنة تحقيق مستقلة من أعضاء هيئة التدريس للنظر في المخالفة.' : 'An independent investigation committee is formed from faculty members to examine the violation.',
    },
    {
      step: '3',
      title: language === 'ar' ? 'الاستماع للطالب' : 'Hear the Student',
      desc: language === 'ar' ? 'يُستدعى الطالب لحضور جلسة استماع أمام اللجنة ويحق له الدفاع عن نفسه وتقديم شهود.' : 'The student is summoned to attend a hearing before the committee and has the right to defend themselves and present witnesses.',
    },
    {
      step: '4',
      title: language === 'ar' ? 'إصدار القرار' : 'Issue Decision',
      desc: language === 'ar' ? 'تصدر اللجنة قرارها التأديبي بناءً على الأدلة والشهادات ويُبلغ الطالب رسمياً.' : 'The committee issues its disciplinary decision based on evidence and testimonies, and the student is officially notified.',
    },
    {
      step: '5',
      title: language === 'ar' ? 'التنفيذ والمتابعة' : 'Implementation & Follow-up',
      desc: language === 'ar' ? 'يتم تنفيذ العقوبة وتوثيقها في ملف الطالب مع متابعة سلوكه خلال الفترة التالية.' : 'The penalty is implemented and documented in the student\'s file with monitoring of their behavior in the following period.',
    },
  ];

  const appealsProcess = [
    language === 'ar' ? 'يحق للطالب تقديم تظلم كتابي خلال 15 يوماً من تاريخ إبلاغه بالقرار' : 'Student has the right to submit a written appeal within 15 days of being notified of the decision',
    language === 'ar' ? 'يُقدم التظلم إلى عميد المعهد أو لجنة التظلمات العليا' : 'Appeal is submitted to the institute dean or the Higher Appeals Committee',
    language === 'ar' ? 'يتم مراجعة التظلم خلال 10 أيام عمل من تاريخ تقديمه' : 'Appeal is reviewed within 10 working days from the date of submission',
    language === 'ar' ? 'قرار لجنة التظلمات العليا نهائي وملزم' : 'The Higher Appeals Committee decision is final and binding',
    language === 'ar' ? 'يحق للطالب الاستعانة بمستشار أكاديمي أثناء عملية التظلم' : 'Student has the right to seek academic advisor assistance during the appeal process',
  ];

  const honorCode = [
    language === 'ar' ? 'أتعهد بالالتزام بالنزاهة الأكاديمية في جميع أعمالي الدراسية' : 'I pledge to maintain academic integrity in all my academic work',
    language === 'ar' ? 'أتعهد بعدم الغش أو المساعدة في الغش في أي امتحان أو واجب' : 'I pledge not to cheat or assist in cheating in any exam or assignment',
    language === 'ar' ? 'أتعهد باحترام حقوق الملكية الفكرية والإسناد الصحيح للمصادر' : 'I pledge to respect intellectual property rights and properly cite sources',
    language === 'ar' ? 'أتعهد بالتعامل باحترام ومسؤولية مع جميع أعضاء المجتمع الأكاديمي' : 'I pledge to treat all members of the academic community with respect and responsibility',
    language === 'ar' ? 'أتعهد بالإبلاغ عن أي مخالفة أكاديمية أشهدها' : 'I pledge to report any academic violation I witness',
  ];

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={pageTitle} description={pageSubtitle} />
      <Navbar />

      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" alt="Student Discipline" src="/figmaAssets/rectangle-2.png" />
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
            { label: language === 'ar' ? 'شؤون الطلاب' : 'Student Affairs', href: '/student-affairs' },
            { label: pageTitle },
          ]}
        />
      </div>

      <section className="py-20 md:py-24 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <Shield className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'نظرة عامة' : 'Overview'}
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Card className="rounded-3xl border-0 shadow-lg bg-white dark:bg-neutral-900">
              <CardContent className="p-8" dir={direction}>
                <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">
                  {systemOverview}
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
                <Scale className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'حقوق ومسؤوليات الطالب' : 'Student Rights & Responsibilities'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" dir={direction}>
            <AnimatedSection direction={direction === 'rtl' ? "right" : "left"}>
              <Card className="rounded-2xl border-0 shadow-sm h-full bg-white dark:bg-neutral-800">
                <CardContent className="p-6 flex flex-col gap-4">
                  <h3 className="font-bold text-xl text-green-700 dark:text-green-500 [font-family:'Almarai',Helvetica]">
                    {language === 'ar' ? 'حقوق الطالب' : 'Student Rights'}
                  </h3>
                  <div className="flex flex-col gap-2">
                    {studentRights.map((right, index) => (
                      <div key={index} className="flex items-start gap-3 p-2 rounded-lg">
                        <CheckCircle2 className="w-4 h-4 text-green-700 dark:text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-700 dark:text-neutral-300 [font-family:'Almarai',Helvetica] text-sm">{right}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection direction={direction === 'rtl' ? "left" : "right"} delay={0.2}>
              <Card className="rounded-2xl border-0 shadow-sm h-full bg-white dark:bg-neutral-800">
                <CardContent className="p-6 flex flex-col gap-4">
                  <h3 className="font-bold text-xl text-green-700 dark:text-green-500 [font-family:'Almarai',Helvetica]">
                    {language === 'ar' ? 'مسؤوليات الطالب' : 'Student Responsibilities'}
                  </h3>
                  <div className="flex flex-col gap-2">
                    {studentResponsibilities.map((resp, index) => (
                      <div key={index} className="flex items-start gap-3 p-2 rounded-lg">
                        <Shield className="w-4 h-4 text-green-700 dark:text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-700 dark:text-neutral-300 [font-family:'Almarai',Helvetica] text-sm">{resp}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-16" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <AlertTriangle className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'أنواع المخالفات' : 'Types of Violations'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" dir={direction}>
            {violationTypes.map((type, index) => (
              <AnimatedSection key={index} delay={index * 0.15} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full bg-white dark:bg-neutral-900">
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div className={`w-14 h-14 rounded-full ${type.bgColor} flex items-center justify-center`}>
                      <type.icon className={`w-7 h-7 ${type.color}`} />
                    </div>
                    <h3 className={`font-bold text-lg ${type.color} [font-family:'Almarai',Helvetica]`}>{type.level}</h3>
                    <div className="flex flex-col gap-2">
                      {type.items.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm">
                          <span className={`w-1.5 h-1.5 rounded-full ${type.color.replace('text-', 'bg-')} mt-1.5 flex-shrink-0`} />
                          <span className="text-neutral-700 dark:text-neutral-300 [font-family:'Almarai',Helvetica]">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className={`mt-auto pt-4 border-t border-gray-100 dark:border-neutral-700`}>
                      <p className="text-sm [font-family:'Almarai',Helvetica]">
                        <span className="font-bold text-neutral-900 dark:text-white">{language === 'ar' ? 'العقوبة: ' : 'Penalty: '}</span>
                        <span className="text-neutral-500 dark:text-neutral-400">{type.penalty}</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[900px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <ClipboardList className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'الإجراءات التأديبية' : 'Disciplinary Procedures'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="flex flex-col gap-6" dir={direction}>
            {disciplinaryProcedures.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction={direction === 'rtl' ? "right" : "left"}>
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-neutral-800">
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

      <section className="py-20 md:py-24 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <RotateCcw className="w-6 h-6 text-green-700" />
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">
                {language === 'ar' ? 'إجراءات التظلم والاستئناف' : 'Appeals Process'}
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Card className="rounded-3xl border-0 shadow-lg bg-white dark:bg-neutral-900">
              <CardContent className="p-8" dir={direction}>
                <div className="flex flex-col gap-3">
                  {appealsProcess.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-xl hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
                      <RotateCcw className="w-5 h-5 text-green-700 dark:text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-700 dark:text-neutral-300 [font-family:'Almarai',Helvetica] text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-green-800 dark:bg-green-900 transition-colors duration-300">
        <div className="max-w-[900px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-white/30 rounded-full" />
                <Award className="w-6 h-6 text-white" />
                <div className="w-12 h-1 bg-white/30 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white [font-family:'Almarai',Helvetica]">
                {language === 'ar' ? 'ميثاق الشرف الأكاديمي' : 'Academic Honor Code'}
              </h2>
              <p className="text-white/80 text-lg mt-4 max-w-[600px] mx-auto [font-family:'Almarai',Helvetica]" dir={direction}>
                {language === 'ar'
                  ? 'يلتزم كل طالب في معاهد الوادي العليا بالتعهدات التالية:'
                  : 'Every student at Valley Higher Institutes commits to the following pledges:'}
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Card className="rounded-3xl border-0 bg-white/10 backdrop-blur-sm">
              <CardContent className="p-8" dir={direction}>
                <div className="flex flex-col gap-3">
                  {honorCode.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors">
                      <BookOpen className="w-5 h-5 text-white/80 mt-0.5 flex-shrink-0" />
                      <span className="text-white/90 [font-family:'Almarai',Helvetica] text-sm">{item}</span>
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