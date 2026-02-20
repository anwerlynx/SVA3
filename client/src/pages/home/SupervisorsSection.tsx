import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useLanguage } from "@/context/LanguageContext";

const supervisorsData = [
  {
    name: "محمد ابراهيم محمد ماضي",
    title: { ar: "خطيب وعلمي للاستشارات الهندسية مهندس مشروع بقسم الطرق", en: "Engineering Consultant & Roads Department Project Engineer" },
    image: "/figmaAssets/photo.png",
  },
  {
    name: "مهندس عبدالرحمن محمد حسين",
    title: { ar: "مهندس مكتب فني بشركه اوراسكوم", en: "Technical Office Engineer at Orascom" },
    image: "/figmaAssets/photo-1.png",
  },
  {
    name: "محمد ابراهيم محمد ماضي",
    title: { ar: "نقيب مهندس بوزارة الداخليه", en: "Engineering Captain at the Ministry of Interior" },
    image: "/figmaAssets/photo-4.png",
  },
  {
    name: "أحمد محمود السيد",
    title: { ar: "مهندس معماري بشركة المقاولون العرب", en: "Architectural Engineer at Arab Contractors" },
    image: "/figmaAssets/photo.png",
  },
  {
    name: "خالد عبدالله محمد",
    title: { ar: "مدير مشروعات بشركة حسن علام", en: "Projects Manager at Hassan Allam" },
    image: "/figmaAssets/photo-1.png",
  },
];

export function SupervisorsSection() {
  const { language, direction } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-gray-50 dark:bg-neutral-900 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <AnimatedSection>
          <div className="text-center md:text-right mb-12" dir={direction}>
            <h2 className="text-3xl md:text-5xl font-bold [font-family:'Almarai',Helvetica]">
              {language === "ar" ? (
                <>
                  <span className="text-neutral-900 dark:text-white">نماذج </span>
                  <span className="text-green-700">مشرفة</span>
                </>
              ) : (
                <>
                  <span className="text-green-700">Distinguished</span>
                  <span className="text-neutral-900 dark:text-white"> Alumni</span>
                </>
              )}
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-lg mt-4 [font-family:'Almarai',Helvetica]">
              {language === "ar"
                ? "خريجون حققوا نجاحات مميزة في مسيرتهم المهنية"
                : "Graduates who achieved remarkable professional success"}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.2 },
              1280: { slidesPerView: 3.5 },
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            dir={direction}
          >
            {supervisorsData.map((supervisor, index) => (
              <SwiperSlide key={index}>
                <Card className="relative overflow-hidden rounded-3xl border-0 h-[450px] md:h-[500px] group cursor-pointer">
                  <CardContent className="p-0 h-full relative">
                    <img
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      alt={supervisor.name}
                      src={supervisor.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8" dir={direction}>
                      <h3 className="font-bold text-white text-xl md:text-2xl [font-family:'Almarai',Helvetica] mb-2">
                        {supervisor.name}
                      </h3>
                      <p className="text-white/70 text-sm md:text-base [font-family:'Almarai',Helvetica]">
                        {supervisor.title[language]}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </AnimatedSection>
      </div>
    </section>
  );
}
