import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

interface InstituteHeroProps {
  title: string;
  subtitle: string;
  image: string;
  overlayColor?: string;
}

export function InstituteHero({ title, subtitle, image, overlayColor = "from-black/60 to-black/80" }: InstituteHeroProps) {
  return (
    <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center">
      <div className="absolute inset-0">
        <img className="w-full h-full object-cover" alt={title} src={image} />
        <div className={`absolute inset-0 bg-gradient-to-b ${overlayColor}`} />
      </div>
      <div className="relative z-10 text-center px-4">
        <AnimatedSection>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white [font-family:'Almarai',Helvetica] mb-4" dir="rtl">
            {title}
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-[600px] mx-auto [font-family:'Almarai',Helvetica]" dir="rtl">
            {subtitle}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
