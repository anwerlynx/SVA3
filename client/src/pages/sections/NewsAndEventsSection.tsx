import { Card, CardContent } from "@/components/ui/card";

const institutes = [
  {
    title: "المعهد العالي للهندسة والتكنولوجيا",
    image: "/figmaAssets/rectangle-17.png",
  },
  {
    title: "المعهد العالي للإدارة والمالية ونظم المعلومات",
    image: "/figmaAssets/rectangle-16.png",
  },
];

export const NewsAndEventsSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-bold text-white text-5xl md:text-[64px] leading-normal [font-family:'Almarai',Helvetica] tracking-[0] mb-12 [direction:rtl]">
          اقسام معاهدنا
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-[1446px] mx-auto">
          {institutes.map((institute, index) => (
            <Card
              key={index}
              className="relative overflow-hidden rounded-none border-0 h-[617px] group cursor-pointer"
            >
              <CardContent className="p-0 h-full relative">
                <img
                  className="w-full h-full object-cover"
                  alt={institute.title}
                  src={institute.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="font-bold text-white text-xl md:text-2xl leading-normal [font-family:'Almarai',Helvetica] tracking-[0] [direction:rtl]">
                    {institute.title}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
