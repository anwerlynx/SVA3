import { Button } from "@/components/ui/button";
import { AboutUsSection } from "./sections/AboutUsSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { NewsAndEventsSection } from "./sections/NewsAndEventsSection";
import { SupervisorsShowcaseSection } from "./sections/SupervisorsShowcaseSection";

export const Desktop = (): JSX.Element => {
  return (
    <div className="bg-white overflow-hidden w-full min-w-[1440px] relative">
      <header className="relative w-full">
        <img
          className="absolute top-0 left-0 w-full h-[702px] object-cover z-0"
          alt="Rectangle"
          src="/figmaAssets/rectangle-2.png"
        />

        <nav className="relative z-10 flex items-center justify-between w-full">
          <div className="flex">
            <Button
              variant="ghost"
              className="w-[165px] h-[90px] rounded-none bg-black hover:bg-black/90 text-white [font-family:'Almarai',Helvetica] font-normal text-base tracking-[0] leading-[14.2px] [direction:rtl]"
            >
              بحث
            </Button>

            <Button
              variant="ghost"
              className="w-[165px] h-[90px] rounded-none bg-black hover:bg-black/90 text-white [font-family:'Almarai',Helvetica] font-normal text-base tracking-[0] leading-[14.2px] [direction:rtl]"
            >
              القائمة
            </Button>
          </div>

          <img
            className="w-[214px] h-[57px] object-cover mr-[53px] mt-5"
            alt="Element"
            src="/figmaAssets/1-7.png"
          />
        </nav>

        <div className="relative z-10 flex items-center justify-center gap-[11px] mt-11">
          <div className="w-fit [font-family:'Almarai',Helvetica] font-normal text-neutral-100 text-sm text-center leading-[normal] tracking-[0] [direction:rtl]">
            تعرف على سياساتنا وإجراءاتنا التي تضمن حماية طلابنا وأعضاء هيئة
            التدريس ودعم بيئة تعليمية آمنة.
          </div>
          <div className="w-[11px] h-[11px] bg-primary-color rounded-[5.5px]" />
        </div>
      </header>

      <HeroSection />

      <AboutUsSection />

      <NewsAndEventsSection />

      <SupervisorsShowcaseSection />

      <FooterSection />
    </div>
  );
};
