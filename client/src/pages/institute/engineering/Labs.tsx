import { InstituteNavbar } from "@/components/institute/InstituteNavbar";
import { InstituteFooter } from "@/components/institute/InstituteFooter";
import { engineeringNavbar, engineeringFooter } from "@/lib/instituteConfig";
import { InstituteHero } from "@/components/institute/InstituteHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { FlaskConical, Zap, Building2, Cpu, Settings, Droplets, Ruler } from "lucide-react";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";

const labsAr = [
  { icon: Zap, name: "معمل الهندسة الكهربائية", desc: "مجهز بأحدث أجهزة القياس والمعدات الكهربائية لتدريب الطلاب على الدوائر الكهربائية وآلات القوى والتحكم", equipment: ["أجهزة قياس رقمية", "مولدات ومحركات كهربائية", "أجهزة تحليل الطيف", "معدات التحكم الآلي"] },
  { icon: Building2, name: "معمل الخرسانة والمواد", desc: "معمل متخصص لاختبار خواص المواد الهندسية والخرسانة وفقاً للمواصفات القياسية المصرية والدولية", equipment: ["آلة اختبار الضغط", "أجهزة اختبار الشد", "أجهزة تحديد نعومة الأسمنت", "قوالب مكعبات خرسانية"] },
  { icon: Cpu, name: "معمل الحاسبات والبرمجيات", desc: "معمل حديث مجهز بأحدث الحواسيب وبرامج التصميم الهندسي والبرمجة والمحاكاة", equipment: ["AutoCAD & Revit", "MATLAB & Simulink", "ETABS & SAP2000", "معالجات عالية الأداء"] },
  { icon: Settings, name: "معمل الميكانيكا والإنتاج", desc: "يوفر المعمل بيئة عملية للتدريب على العمليات الميكانيكية وطرق التصنيع المختلفة", equipment: ["مخارط ومثاقب", "آلات لحام", "أجهزة قياس دقيقة", "معدات التشكيل"] },
  { icon: Droplets, name: "معمل الهيدروليكا", desc: "معمل متخصص لدراسة خواص السوائل وتدفقها في الأنابيب والقنوات المفتوحة", equipment: ["قنوات هيدروليكية", "مضخات مختلفة", "أجهزة قياس التدفق", "نماذج سدود"] },
  { icon: Ruler, name: "معمل المساحة", desc: "يوفر المعمل أحدث أجهزة المساحة لتدريب الطلاب على الرفع المساحي والتخطيط", equipment: ["محطات رصد شاملة", "أجهزة GPS", "أجهزة ميزان", "برامج GIS"] },
];

const labsEn = [
  { icon: Zap, name: "Electrical Engineering Lab", desc: "Equipped with the latest measurement devices and electrical equipment for training students on electrical circuits, power machines, and control", equipment: ["Digital Measuring Devices", "Generators and Electric Motors", "Spectrum Analysis Devices", "Automatic Control Equipment"] },
  { icon: Building2, name: "Concrete & Materials Lab", desc: "Specialized lab for testing engineering materials and concrete properties according to Egyptian and international standards", equipment: ["Compression Testing Machine", "Tensile Testing Devices", "Cement Fineness Determination Devices", "Concrete Cube Molds"] },
  { icon: Cpu, name: "Computer & Software Lab", desc: "Modern lab equipped with the latest computers, engineering design, programming, and simulation software", equipment: ["AutoCAD & Revit", "MATLAB & Simulink", "ETABS & SAP2000", "High-Performance Processors"] },
  { icon: Settings, name: "Mechanics & Production Lab", desc: "Provides a practical environment for training on mechanical operations and various manufacturing methods", equipment: ["Lathes and Drills", "Welding Machines", "Precision Measuring Devices", "Forming Equipment"] },
  { icon: Droplets, name: "Hydraulics Lab", desc: "Specialized lab for studying fluid properties and flow in pipes and open channels", equipment: ["Hydraulic Channels", "Various Pumps", "Flow Measurement Devices", "Dam Models"] },
  { icon: Ruler, name: "Surveying Lab", desc: "Provides the latest surveying equipment for training students on surveying and planning", equipment: ["Total Stations", "GPS Devices", "Level Instruments", "GIS Software"] },
];

export default function EngineeringLabs() {
  const { language, direction } = useLanguage();
  const labs = language === "ar" ? labsAr : labsEn;
  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead 
        title={language === "ar" ? "المعامل - المعهد العالي للهندسة" : "Labs - Higher Institute of Engineering"} 
        description={language === "ar" ? "المعامل والمرافق الهندسية في المعهد العالي للهندسة والتكنولوجيا" : "Engineering labs and facilities at the Higher Institute of Engineering and Technology"} 
      />
      <InstituteNavbar {...engineeringNavbar} />
      <InstituteHero 
        title={language === "ar" ? "المعامل والمرافق" : "Labs and Facilities"} 
        subtitle={language === "ar" ? "معامل متطورة مجهزة بأحدث الأجهزة والتقنيات" : "Modern labs equipped with the latest devices and technologies"} 
        image="/figmaAssets/rectangle-17.png" 
        overlayColor="from-blue-900/60 to-blue-900/80" 
      />

      <section className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1100px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-16" dir={direction}>
              <FlaskConical className="w-10 h-10 text-blue-700 dark:text-blue-500 mx-auto mb-4 transition-colors duration-300" />
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "معاملنا" : "Our Labs"}</h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-lg mt-4 max-w-[600px] mx-auto [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "يضم المعهد مجموعة من المعامل المتخصصة المجهزة بأحدث الأجهزة لدعم العملية التعليمية" : "The institute has a collection of specialized labs equipped with the latest devices to support the educational process"}</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" dir={direction}>
            {labs.map((lab, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full bg-white dark:bg-neutral-900 dark:border-neutral-800" data-testid={`card-lab-${index}`}>
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center flex-shrink-0 transition-colors duration-300"><lab.icon className="w-7 h-7 text-blue-700 dark:text-blue-500 transition-colors duration-300" /></div>
                      <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{lab.name}</h3>
                    </div>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{lab.desc}</p>
                    <div>
                      <h4 className="font-bold text-xs text-neutral-700 dark:text-neutral-300 [font-family:'Almarai',Helvetica] mb-2 transition-colors duration-300">{language === "ar" ? "التجهيزات:" : "Equipment:"}</h4>
                      <div className="flex flex-wrap gap-2">
                        {lab.equipment.map((eq, ei) => (
                          <span key={ei} className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full text-xs [font-family:'Almarai',Helvetica] transition-colors duration-300">{eq}</span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <InstituteFooter {...engineeringFooter} />
    </div>
  );
}
