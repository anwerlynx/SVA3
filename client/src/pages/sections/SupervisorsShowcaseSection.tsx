import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const supervisorsData = [
  {
    name: "محمد ابراهيم محمد ماضي",
    title: "خطيب وعلمي للاستشارات الهندسية مهندس مشروع بقسم الطرق",
    image: "../figmaAssets/photo.png",
  },
  {
    name: "مهندس عبدالرحمن محمد حسين",
    title: "مهندس مكتب فني بشركه اوراسكوم",
    image: "../figmaAssets/photo-1.png",
  },
  {
    name: "محمد ابراهيم محمد ماضي",
    title: "نقيب مهندس بوزارة الداخليه",
    image: "../figmaAssets/photo-4.png",
  },
  {
    name: "محمد ابراهيم محمد ماضي",
    title: "نقيب مهندس بوزارة الداخليه",
    image: "../figmaAssets/photo-4.png",
  },
  {
    name: "محمد ابراهيم محمد ماضي",
    title: "نقيب مهندس بوزارة الداخليه",
    image: "../figmaAssets/photo-4.png",
  },
];

export const SupervisorsShowcaseSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-end gap-9 relative">
      <h2 className="relative self-stretch font-bold text-neutral-900 text-[64px] leading-[normal] [font-family:'Almarai',Helvetica] tracking-[0] [direction:rtl]">
        <span className="text-[#1a1a1a]">نماذج </span>
        <span className="text-[#056a00]">مشرفة</span>
      </h2>

      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex items-center gap-6 w-max">
          {supervisorsData.map((supervisor, index) => (
            <Card
              key={`supervisor-${index}`}
              className="relative w-[429px] h-[555px] overflow-hidden border-0 rounded-none"
              style={{
                background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.39) 100%), url(${supervisor.image}) 50% 50% / cover`,
              }}
            >
              <CardContent className="p-0 h-full flex flex-col justify-end">
                <div className="flex flex-col gap-2 p-8">
                  <h3 className="w-[365px] font-bold text-white text-[32px] leading-[normal] [font-family:'Almarai',Helvetica] tracking-[0] [direction:rtl]">
                    {supervisor.name}
                  </h3>
                  <p className="w-[365px] [font-family:'Almarai',Helvetica] font-normal text-white text-[28px] tracking-[0] leading-[normal] [direction:rtl]">
                    {supervisor.title}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};
