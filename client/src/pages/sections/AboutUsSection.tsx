import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const newsItems = [
  {
    title: "صور تكريم الطلبة من العميد",
    date: "16 فبراير 2026",
    description:
      "مشاركة المعهد العالي للهندسة في مؤتمر المرأه العالمي في العلوم",
    image: "/figmaAssets/rectangle-12.png",
  },
  {
    title: "مؤتمر المرأه في العلوم",
    date: "16 فبراير 2026",
    description:
      "مشاركة المعهد العالي للهندسة في مؤتمر المرأه العالمي في العلوم",
    image: "/figmaAssets/rectangle-12-1.png",
  },
  {
    title: "مؤتمر المرأه في العلوم",
    date: "16 فبراير 2026",
    description:
      "مشاركة المعهد العالي للهندسة في مؤتمر المرأه العالمي في العلوم",
    image: "/figmaAssets/rectangle-12-2.png",
  },
];

export const AboutUsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[1440px] mx-auto items-center gap-8 px-4 py-8">
      <header className="flex w-full max-w-[1334px] items-center justify-between">
        <Button className="h-[63px] w-[212px] bg-primary-color500 hover:bg-primary-color500/90 text-white text-xl font-normal [font-family:'Almarai',Helvetica] rounded-3xl [direction:rtl]">
          تصفح جميع الاخبار
        </Button>

        <div className="flex flex-col max-w-[417px] items-start gap-6">
          <h2 className="self-stretch font-bold text-neutral-900 text-[64px] leading-normal [font-family:'Almarai',Helvetica] [direction:rtl]">
            اخر الاخبار
          </h2>

          <p className="self-stretch font-normal text-neutral-500 text-base leading-normal [font-family:'Almarai',Helvetica] [direction:rtl]">
            اطلع على مستجدات المعاهد وأبرز الفعاليات والنجاحات التي تعكس مسيرتنا
            نحو التميز.
          </p>
        </div>
      </header>

      <div className="w-full max-w-[1351px]">
        <div className="flex flex-col lg:flex-row items-start gap-6 p-2.5">
          <Card className="flex-1 rounded-3xl border-0 shadow-none">
            <CardContent className="flex flex-col items-start gap-[30px] pt-0 pb-[51px] px-[39px]">
              {newsItems.map((item, index) => (
                <article
                  key={index}
                  className="flex items-center gap-[41px] px-0 py-3 w-full border-b border-black"
                >
                  <div className="flex flex-col w-[317px] items-end gap-3">
                    <h3 className="self-stretch font-bold text-black text-xl leading-normal [font-family:'Almarai',Helvetica] [direction:rtl]">
                      {item.title}
                    </h3>

                    <time className="self-stretch [font-family:'Almarai',Helvetica] font-normal text-[#727272] text-sm leading-normal [direction:rtl]">
                      {item.date}
                    </time>

                    <p className="self-stretch font-bold text-black text-sm leading-normal [font-family:'Almarai',Helvetica] [direction:rtl]">
                      {item.description}
                    </p>

                    <Button
                      variant="ghost"
                      className="h-[42px] w-[143px] rounded-3xl hover:bg-transparent"
                    >
                      <span className="flex-1 font-normal text-primary-color500 text-sm leading-[21px] [font-family:'Almarai',Helvetica] [direction:rtl]">
                        اقرأ المزيد
                      </span>
                    </Button>
                  </div>

                  <img
                    className="w-[190px] h-[148px] rounded-xl object-cover"
                    alt={item.title}
                    src={item.image}
                  />
                </article>
              ))}
            </CardContent>
          </Card>

          <Card className="w-full lg:w-[675px] rounded-3xl border-0 shadow-none">
            <CardContent className="flex flex-col items-end gap-[37px] pt-0 pb-6 px-0">
              <img
                className="self-stretch w-full h-[348px] object-cover rounded-t-3xl"
                alt="Featured news"
                src="/figmaAssets/rectangle-10.png"
              />

              <div className="flex flex-col items-end justify-center gap-2.5 px-[23px] w-full">
                <time className="self-stretch [font-family:'Almarai',Helvetica] font-bold text-[#727272] text-sm leading-normal [direction:rtl]">
                  25 فبراير 2026
                </time>

                <h3 className="self-stretch font-bold text-black text-2xl leading-normal [font-family:'Almarai',Helvetica] [direction:rtl]">
                  مشاركة معاهدنا كراع للمؤتمر الدولى التاسع للمنتدى الاستراتيجى
                </h3>

                <p className="self-stretch font-normal text-black text-xl leading-normal [font-family:'Almarai',Helvetica] [direction:rtl]">
                  تم تنظيم حفل تكريم للطلاب المتفوقين تحت رعاية الأستاذ الدكتور
                  عميد المعهد، تقديرا لتميزهم الأكاديمي وجهودهم المستمرة في
                  تحقيق النجاح.
                </p>
              </div>

              <div className="flex flex-col items-end gap-2.5 px-[15px] w-full">
                <Button
                  variant="ghost"
                  className="h-[42px] w-[143px] px-1.5 py-0 rounded-3xl hover:bg-transparent"
                >
                  <span className="flex-1 font-normal text-primary-color500 text-sm leading-[21px] [font-family:'Almarai',Helvetica] [direction:rtl]">
                    اقرأ المزيد
                  </span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
