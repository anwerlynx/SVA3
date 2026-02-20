import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, HelpCircle, PartyPopper, Briefcase, Library, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { useLanguage } from "@/context/LanguageContext";

const services = [
  {
    icon: FileText,
    title: { ar: "شروط الالتحاق", en: "Admission Requirements" },
    description: { ar: "تعرف على متطلبات القبول والأوراق المطلوبة", en: "Learn about admission requirements and documents" },
    color: "bg-green-50 text-green-700",
  },
  {
    icon: HelpCircle,
    title: { ar: "الأسئلة الشائعة", en: "FAQ" },
    description: { ar: "إجابات لأكثر الأسئلة شيوعاً", en: "Answers to frequently asked questions" },
    color: "bg-blue-50 text-blue-700",
  },
  {
    icon: PartyPopper,
    title: { ar: "حفلات التخرج", en: "Graduation Ceremonies" },
    description: { ar: "لحظات التتويج والاحتفال بالتفوق", en: "Moments of celebration and excellence" },
    color: "bg-purple-50 text-purple-700",
  },
  {
    icon: Briefcase,
    title: { ar: "الوظائف المتاحة", en: "Available Jobs" },
    description: { ar: "فرص العمل المتاحة في المعاهد", en: "Job opportunities at the institutes" },
    color: "bg-orange-50 text-orange-700",
  },
  {
    icon: Library,
    title: { ar: "المكتبة", en: "Library" },
    description: { ar: "مصادر ومراجع أكاديمية متنوعة", en: "Diverse academic sources and references" },
    color: "bg-red-50 text-red-700",
  },
  {
    icon: ShieldCheck,
    title: { ar: "ضمان الجودة", en: "Quality Assurance" },
    description: { ar: "معايير ومؤشرات الجودة الأكاديمية", en: "Academic quality standards and indicators" },
    color: "bg-teal-50 text-teal-700",
  },
];

export function ServicesSection() {
  const { language, direction } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-gray-50 dark:bg-neutral-950">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <AnimatedSection>
          <div className="text-center mb-16" dir={direction}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-1 bg-green-700 rounded-full" />
              <span className="text-green-700 font-bold text-sm [font-family:'Almarai',Helvetica]">
                {language === "ar" ? "خدماتنا" : "Our Services"}
              </span>
              <div className="w-12 h-1 bg-green-700 rounded-full" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica]">
              {language === "ar" ? "الخدمات والمعلومات" : "Services & Information"}
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-lg mt-4 max-w-[600px] mx-auto [font-family:'Almarai',Helvetica]">
              {language === "ar"
                ? "نوفر لك كل ما تحتاجه من معلومات وخدمات لتسهيل رحلتك الأكاديمية"
                : "We provide all the information and services you need to facilitate your academic journey"}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" dir={direction}>
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.1} direction="up">
              <Link href="/services">
                <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="rounded-2xl border-0 shadow-sm hover:shadow-xl transition-all cursor-pointer h-full dark:bg-neutral-900">
                    <CardContent className="p-6 flex flex-col gap-4">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${service.color}`}>
                        <service.icon className="w-7 h-7" />
                      </div>
                      <h3 className="font-bold text-xl text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica]">
                        {service.title[language]}
                      </h3>
                      <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica]">
                        {service.description[language]}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
