import { Button } from "@/components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[730px] mx-auto items-center justify-center gap-[58px] py-8 px-4">
      <div className="flex flex-col items-center justify-center gap-[31px] w-full">
        <h1 className="w-full text-neutral-100 text-4xl md:text-5xl lg:text-[64px] text-center leading-normal [font-family:'Almarai',Helvetica] font-bold tracking-[0] [direction:rtl]">
          مستوى مؤسسي قوي
        </h1>

        <p className="w-full [font-family:'Almarai',Helvetica] font-normal text-neutral-100 text-2xl md:text-3xl lg:text-[40px] text-center tracking-[0] leading-normal [direction:rtl]">
          صرح تعليمي رائد يرسخ معايير التميز الأكاديمي ويصنع قادة المستقبل
        </p>
      </div>

      <Button
        variant="outline"
        className="w-[185px] h-auto py-3 rounded-3xl border-2 border-white bg-transparent text-white hover:bg-white hover:text-neutral-900 transition-colors [font-family:'Almarai',Helvetica] font-normal text-xl [direction:rtl]"
      >
        من نحن
      </Button>
    </section>
  );
};
