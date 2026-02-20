import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, GraduationCap, Users, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function AboutPreview() {
  const { language, direction } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-neutral-950">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" dir={direction}>
          <AnimatedSection direction="right">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <span className="text-green-700 font-bold text-sm [font-family:'Almarai',Helvetica]">
                  {language === "ar" ? "من نحن" : "About Us"}
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white leading-tight [font-family:'Almarai',Helvetica]">
                {language === "ar" ? "معاهد الوادي العليا" : "Valley Higher Institutes"}
              </h2>

              <p className="text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed [font-family:'Almarai',Helvetica]">
                {language === "ar"
                  ? "معاهد الوادي العليا هي صرح تعليمي رائد يقدم برامج أكاديمية متميزة في مجالات الهندسة والإدارة والتكنولوجيا. نسعى لتخريج كوادر مؤهلة قادرة على المنافسة في سوق العمل المحلي والدولي."
                  : "Valley Higher Institutes is a leading educational institution offering distinguished academic programs in engineering, management, and technology. We strive to graduate qualified professionals capable of competing in the local and international job market."}
              </p>

              <div className="grid grid-cols-3 gap-4 my-4">
                <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-green-50 dark:bg-green-900/20">
                  <GraduationCap className="w-8 h-8 text-green-700" />
                  <span className="text-sm font-bold text-neutral-700 dark:text-neutral-300 [font-family:'Almarai',Helvetica]">
                    {language === "ar" ? "تعليم متميز" : "Distinguished Education"}
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-green-50 dark:bg-green-900/20">
                  <Users className="w-8 h-8 text-green-700" />
                  <span className="text-sm font-bold text-neutral-700 dark:text-neutral-300 [font-family:'Almarai',Helvetica]">
                    {language === "ar" ? "كوادر مؤهلة" : "Qualified Graduates"}
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-green-50 dark:bg-green-900/20">
                  <Award className="w-8 h-8 text-green-700" />
                  <span className="text-sm font-bold text-neutral-700 dark:text-neutral-300 [font-family:'Almarai',Helvetica]">
                    {language === "ar" ? "جودة معتمدة" : "Accredited Quality"}
                  </span>
                </div>
              </div>

              <Link href="/about">
                <Button className="w-fit px-8 py-3 h-auto rounded-full bg-green-700 hover:bg-green-800 text-white [font-family:'Almarai',Helvetica] flex items-center gap-2 transition-all hover:scale-105">
                  {language === "ar" ? "اكتشف المزيد" : "Discover More"}
                  {direction === "rtl" ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </Button>
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.2}>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  className="w-full h-[400px] object-cover"
                  alt="About Valley Institutes"
                  src="/figmaAssets/rectangle-10.png"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-700 rounded-3xl flex items-center justify-center shadow-xl">
                <div className="text-center text-white [font-family:'Almarai',Helvetica]">
                  <div className="text-3xl font-bold">+15</div>
                  <div className="text-xs">{language === "ar" ? "سنة خبرة" : "Years of Experience"}</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
