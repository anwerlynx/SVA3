import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { GraduationCap, Users, BookOpen, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const stats = [
  { icon: GraduationCap, value: 5000, suffix: "+", label: { ar: "خريج", en: "Graduates" } },
  { icon: Users, value: 200, suffix: "+", label: { ar: "عضو هيئة تدريس", en: "Faculty Members" } },
  { icon: BookOpen, value: 15, suffix: "", label: { ar: "قسم أكاديمي", en: "Academic Departments" } },
  { icon: Award, value: 98, suffix: "%", label: { ar: "نسبة التوظيف", en: "Employment Rate" } },
];

export function StatsSection() {
  const { language, direction } = useLanguage();

  return (
    <section className="py-20 bg-green-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8" dir={direction}>
          {stats.map((stat, index) => (
            <AnimatedSection key={index} delay={index * 0.15} direction="up">
              <div className="flex flex-col items-center gap-4 text-center group">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white [font-family:'Almarai',Helvetica]">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <span className="text-white/80 text-lg [font-family:'Almarai',Helvetica]">
                  {stat.label[language]}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
