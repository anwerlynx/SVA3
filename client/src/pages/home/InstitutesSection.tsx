import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const institutes = [
  {
    title: { ar: "المعهد العالي للهندسة والتكنولوجيا", en: "Higher Institute of Engineering & Technology" },
    description: {
      ar: "يقدم المعهد برامج متميزة في الهندسة المدنية والمعمارية والكهربائية والميكانيكية",
      en: "The institute offers distinguished programs in civil, architectural, electrical, and mechanical engineering",
    },
    image: "/figmaAssets/rectangle-17.png",
    href: "/academic",
  },
  {
    title: { ar: "المعهد العالي للإدارة والمالية ونظم المعلومات", en: "Higher Institute of Management, Finance & Information Systems" },
    description: {
      ar: "يضم أقسام المحاسبة وإدارة الأعمال ونظم المعلومات الإدارية",
      en: "Includes departments of accounting, business administration, and management information systems",
    },
    image: "/figmaAssets/rectangle-16.png",
    href: "/academic",
  },
];

export function InstitutesSection() {
  const { language, direction } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-neutral-900">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <AnimatedSection>
          <div className="text-center mb-16" dir={direction}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-1 bg-green-500 rounded-full" />
              <span className="text-green-500 font-bold text-sm [font-family:'Almarai',Helvetica]">
                {language === "ar" ? "الأقسام الأكاديمية" : "Academic Departments"}
              </span>
              <div className="w-12 h-1 bg-green-500 rounded-full" />
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white [font-family:'Almarai',Helvetica]">
              {language === "ar" ? "اقسام معاهدنا" : "Our Institute Departments"}
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {institutes.map((institute, index) => (
            <AnimatedSection key={index} delay={index * 0.2} direction="up">
              <Link href={institute.href}>
                <motion.div whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="relative overflow-hidden rounded-3xl border-0 h-[500px] md:h-[600px] group cursor-pointer">
                    <CardContent className="p-0 h-full relative">
                      <img
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        alt={institute.title[language]}
                        src={institute.image}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10" dir={direction}>
                        <h3 className="font-bold text-white text-xl md:text-3xl leading-tight [font-family:'Almarai',Helvetica] mb-3">
                          {institute.title[language]}
                        </h3>
                        <p className="text-white/70 text-sm md:text-base [font-family:'Almarai',Helvetica] mb-4">
                          {institute.description[language]}
                        </p>
                        <div className="flex items-center gap-2 text-green-400 group-hover:gap-4 transition-all [font-family:'Almarai',Helvetica]">
                          <span className="text-sm font-bold">{language === "ar" ? "اكتشف المزيد" : "Discover More"}</span>
                          {direction === "rtl" ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                        </div>
                      </div>
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
