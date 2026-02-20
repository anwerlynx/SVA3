import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/context/LanguageContext";

const heroSlides = [
  {
    title: { ar: "مستوى مؤسسي قوي", en: "Strong Institutional Standard" },
    subtitle: {
      ar: "صرح تعليمي رائد يرسخ معايير التميز الأكاديمي ويصنع قادة المستقبل",
      en: "A leading educational institution establishing academic excellence standards and shaping future leaders",
    },
  },
  {
    title: { ar: "تعليم يصنع الفرق", en: "Education That Makes a Difference" },
    subtitle: {
      ar: "نقدم برامج أكاديمية متميزة تواكب متطلبات سوق العمل المتطور",
      en: "We offer distinguished academic programs that meet the demands of an evolving job market",
    },
  },
  {
    title: { ar: "معايير عالمية", en: "Global Standards" },
    subtitle: {
      ar: "نلتزم بأعلى معايير الجودة الأكاديمية لتخريج كوادر مؤهلة ومنافسة",
      en: "We adhere to the highest academic quality standards to graduate qualified and competitive professionals",
    },
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const { language, direction } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[100vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          alt="Hero background"
          src="/figmaAssets/rectangle-2.png"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute top-24 left-0 right-0 z-10"
      >
        <div className="max-w-[800px] mx-auto px-4 flex items-center justify-center">
          <div className="flex items-center gap-2 text-white/80 text-sm [font-family:'Almarai',Helvetica]" dir={direction}>
            <div className="w-2.5 h-2.5 bg-green-600 rounded-full animate-pulse" />
            <span>
              {language === "ar"
                ? "تعرف على سياساتنا وإجراءاتنا التي تضمن حماية طلابنا وأعضاء هيئة التدريس"
                : "Learn about our policies and procedures that ensure the protection of our students and faculty"}
            </span>
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 flex flex-col items-center justify-center gap-10 px-4 max-w-[900px] mx-auto text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
            <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-bold leading-tight [font-family:'Almarai',Helvetica]" dir={direction}>
              {heroSlides[currentSlide].title[language]}
            </h1>
            <p className="text-white/90 text-lg md:text-2xl lg:text-3xl leading-relaxed [font-family:'Almarai',Helvetica] max-w-[700px]" dir={direction}>
              {heroSlides[currentSlide].subtitle[language]}
            </p>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full max-w-[600px]"
        >
          <div
            className={`relative rounded-full overflow-hidden transition-all duration-300 ${
              isSearchFocused ? "ring-2 ring-green-500 shadow-lg shadow-green-500/20" : ""
            }`}
            dir={direction}
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              placeholder={language === "ar" ? "ابحث عن البرامج، الأقسام، الأخبار..." : "Search programs, departments, news..."}
              className={`w-full px-6 py-4 ${direction === "rtl" ? "pr-14" : "pl-14"} bg-white/15 backdrop-blur-md text-white placeholder-white/60 border border-white/20 rounded-full focus:outline-none text-base [font-family:'Almarai',Helvetica]`}
            />
            <Search className={`absolute ${direction === "rtl" ? "right-5" : "left-5"} top-1/2 -translate-y-1/2 w-5 h-5 text-white/60`} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/about">
            <Button className="px-8 py-3 h-auto rounded-full bg-green-700 hover:bg-green-800 text-white text-lg [font-family:'Almarai',Helvetica] transition-all hover:scale-105">
              {language === "ar" ? "من نحن" : "About Us"}
            </Button>
          </Link>
          <Link href="/academic">
            <Button
              variant="outline"
              className="px-8 py-3 h-auto rounded-full border-2 border-white bg-transparent text-white hover:bg-white hover:text-neutral-900 text-lg [font-family:'Almarai',Helvetica] transition-all hover:scale-105"
            >
              {language === "ar" ? "الأقسام الأكاديمية" : "Academic Departments"}
            </Button>
          </Link>
        </motion.div>

        <div className="flex items-center gap-3 mt-4">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 h-3 bg-green-500"
                  : "w-3 h-3 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-8 h-8 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
