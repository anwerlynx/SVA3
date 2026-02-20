import { InstituteNavbar } from "@/components/institute/InstituteNavbar";
import { InstituteFooter } from "@/components/institute/InstituteFooter";
import { managementNavbar, managementFooter } from "@/lib/instituteConfig";
import { InstituteHero } from "@/components/institute/InstituteHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import {
  BookOpen, Palette, Users, Trophy, Heart,
  GraduationCap, Mic2, Handshake, Medal, Sparkles
} from "lucide-react";

const activityCategories = [
  {
    id: "academic",
    icon: BookOpen,
    titleAr: "الأنشطة الأكاديمية",
    titleEn: "Academic Activities",
    descAr: "ندوات علمية ومؤتمرات طلابية وورش عمل أكاديمية تهدف لتعميق المعرفة وتنمية مهارات البحث العلمي لدى الطلاب.",
    descEn: "Scientific seminars, student conferences, and academic workshops aimed at deepening knowledge and developing research skills among students.",
    activities: [
      { nameAr: "مسابقة خطة العمل", nameEn: "Business Plan Competition", descAr: "مسابقة سنوية لأفضل خطة عمل مقدمة من طلاب المعهد", descEn: "Annual competition for the best business plan presented by institute students" },
      { nameAr: "ندوات ريادة الأعمال", nameEn: "Entrepreneurship Seminars", descAr: "سلسلة ندوات مع رواد أعمال ناجحين لمشاركة خبراتهم", descEn: "Series of seminars with successful entrepreneurs to share their experiences" },
      { nameAr: "ورش تحليل البيانات", nameEn: "Data Analysis Workshops", descAr: "ورش عمل تطبيقية على أدوات تحليل البيانات الحديثة", descEn: "Applied workshops on modern data analysis tools" },
    ],
  },
  {
    id: "cultural",
    icon: Palette,
    titleAr: "الأنشطة الثقافية",
    titleEn: "Cultural Activities",
    descAr: "فعاليات ثقافية وفنية متنوعة تشمل المسابقات الأدبية والمعارض الفنية والأمسيات الشعرية والثقافية.",
    descEn: "Diverse cultural and artistic events including literary competitions, art exhibitions, and cultural and poetry evenings.",
    activities: [
      { nameAr: "مسابقة المناظرات", nameEn: "Debate Competition", descAr: "مسابقة مناظرات بين الأقسام في قضايا اقتصادية وإدارية", descEn: "Inter-departmental debate competition on economic and managerial issues" },
      { nameAr: "معرض الابتكار", nameEn: "Innovation Exhibition", descAr: "معرض سنوي لعرض مشاريع الطلاب الإبداعية والابتكارية", descEn: "Annual exhibition showcasing students' creative and innovative projects" },
      { nameAr: "نادي القراءة", nameEn: "Book Club", descAr: "نادي لمناقشة أحدث الكتب في الإدارة والمال والأعمال", descEn: "Club for discussing the latest books on management, finance, and business" },
    ],
  },
  {
    id: "social",
    icon: Handshake,
    titleAr: "الأنشطة الاجتماعية",
    titleEn: "Social Activities",
    descAr: "فعاليات اجتماعية تعزز الروابط بين الطلاب وتبني مجتمع طلابي متماسك من خلال الرحلات والحفلات والتجمعات.",
    descEn: "Social events that strengthen bonds between students and build a cohesive student community through trips, celebrations, and gatherings.",
    activities: [
      { nameAr: "حفل استقبال الطلاب الجدد", nameEn: "New Students Welcome Ceremony", descAr: "حفل ترحيبي لتعريف الطلاب الجدد بالمعهد وأنشطته", descEn: "Welcome ceremony to introduce new students to the institute and its activities" },
      { nameAr: "حفل تكريم المتفوقين", nameEn: "Honor Ceremony for Top Students", descAr: "تكريم الطلاب المتفوقين أكاديمياً في نهاية كل فصل دراسي", descEn: "Honoring academically outstanding students at the end of each semester" },
      { nameAr: "رحلات تعليمية", nameEn: "Educational Trips", descAr: "زيارات ميدانية للبنوك والشركات والمؤسسات المالية", descEn: "Field visits to banks, companies, and financial institutions" },
    ],
  },
  {
    id: "sports",
    icon: Trophy,
    titleAr: "الأنشطة الرياضية",
    titleEn: "Sports Activities",
    descAr: "برامج رياضية متنوعة تشمل البطولات الداخلية والمشاركة في بطولات الجامعات والمعاهد على المستوى المحلي.",
    descEn: "Diverse sports programs including internal championships and participation in university and institute championships at the local level.",
    activities: [
      { nameAr: "بطولة كرة القدم", nameEn: "Football Championship", descAr: "بطولة سنوية بين أقسام المعهد في كرة القدم", descEn: "Annual inter-departmental football championship" },
      { nameAr: "بطولة كرة السلة", nameEn: "Basketball Championship", descAr: "منافسات كرة السلة بين فرق الأقسام", descEn: "Basketball competitions between departmental teams" },
      { nameAr: "ماراثون المعهد", nameEn: "Institute Marathon", descAr: "ماراثون سنوي للجري لتعزيز الروح الرياضية", descEn: "Annual running marathon to promote sportsmanship" },
    ],
  },
  {
    id: "volunteer",
    icon: Heart,
    titleAr: "الأنشطة التطوعية",
    titleEn: "Volunteer Activities",
    descAr: "مبادرات تطوعية لخدمة المجتمع المحلي وتنمية روح المسؤولية الاجتماعية لدى الطلاب.",
    descEn: "Volunteer initiatives to serve the local community and develop social responsibility among students.",
    activities: [
      { nameAr: "حملة محو الأمية المالية", nameEn: "Financial Literacy Campaign", descAr: "تثقيف أفراد المجتمع المحلي بأساسيات التخطيط المالي", descEn: "Educating local community members on financial planning basics" },
      { nameAr: "مبادرة دعم المشروعات الصغيرة", nameEn: "Small Business Support Initiative", descAr: "تقديم استشارات إدارية ومالية مجانية لأصحاب المشروعات الصغيرة", descEn: "Providing free managerial and financial consultations to small business owners" },
      { nameAr: "حملة التبرع بالدم", nameEn: "Blood Donation Campaign", descAr: "حملة سنوية للتبرع بالدم بالتعاون مع بنك الدم", descEn: "Annual blood donation campaign in cooperation with the blood bank" },
    ],
  },
];

const categoryIcons: Record<string, typeof BookOpen> = {
  academic: GraduationCap,
  cultural: Mic2,
  social: Users,
  sports: Medal,
  volunteer: Sparkles,
};

export default function Activities() {
  const { language } = useLanguage();

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={language === "ar" ? "الأنشطة الطلابية - المعهد العالي للإدارة" : "Student Activities - Higher Institute of Management"} description={language === "ar" ? "الأنشطة الطلابية في المعهد العالي للإدارة والمالية ونظم المعلومات" : "Student activities at the Higher Institute of Management, Finance & Information Systems"} />
      <InstituteNavbar {...managementNavbar} />
      <InstituteHero title={language === "ar" ? "الأنشطة الطلابية" : "Student Activities"} subtitle={language === "ar" ? "تنمية شاملة لشخصية الطالب من خلال أنشطة متنوعة" : "Comprehensive student personality development through diverse activities"} image="/figmaAssets/rectangle-2.png" overlayColor="from-green-900/60 to-green-900/80" />

      <section className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1100px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-16" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <span className="text-green-700 font-bold text-sm [font-family:'Almarai',Helvetica]">{language === "ar" ? "أنشطتنا" : "Our Activities"}</span>
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "فئات الأنشطة الطلابية" : "Student Activity Categories"}</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" dir={direction}>
            {activityCategories.map((category, index) => (
              <AnimatedSection key={category.id} delay={index * 0.1} direction="up">
                <a href={`#${category.id}`}>
                  <Card className="rounded-2xl border-0 shadow-sm hover:shadow-xl transition-all cursor-pointer h-full group bg-white dark:bg-neutral-900 dark:border-neutral-800">
                    <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center group-hover:bg-green-700 dark:group-hover:bg-green-600 transition-all">
                        <category.icon className="w-8 h-8 text-green-700 dark:text-green-500 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? category.titleAr : category.titleEn}</h3>
                      <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? category.descAr : category.descEn}</p>
                    </CardContent>
                  </Card>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {activityCategories.map((category, catIndex) => (
        <section key={category.id} id={category.id} className={`py-20 ${catIndex % 2 === 0 ? "bg-green-50 dark:bg-neutral-900" : "bg-white dark:bg-neutral-950"} transition-colors duration-300`}>
          <div className="max-w-[1100px] mx-auto px-4 md:px-8">
            <AnimatedSection>
              <div className="text-center mb-12" dir={direction}>
                <category.icon className="w-10 h-10 text-green-700 dark:text-green-500 mx-auto mb-4 transition-colors duration-300" />
                <h2 className="text-3xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? category.titleAr : category.titleEn}</h2>
                <p className="text-neutral-500 dark:text-neutral-400 text-base mt-4 max-w-[600px] mx-auto [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? category.descAr : category.descEn}</p>
              </div>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" dir={direction}>
              {category.activities.map((activity, index) => {
                const ActivityIcon = categoryIcons[category.id] || BookOpen;
                return (
                  <AnimatedSection key={index} delay={index * 0.1} direction="up">
                    <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full bg-white dark:bg-neutral-800 dark:border-neutral-700">
                      <CardContent className="p-6 flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                            <ActivityIcon className="w-5 h-5 text-green-700 dark:text-green-500 transition-colors duration-300" />
                          </div>
                          <h3 className="font-bold text-base text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? activity.nameAr : activity.nameEn}</h3>
                        </div>
                        <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? activity.descAr : activity.descEn}</p>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 bg-green-700 dark:bg-green-900 transition-colors duration-300">
        <div className="max-w-[800px] mx-auto px-4 md:px-8 text-center" dir={direction}>
          <AnimatedSection>
            <Sparkles className="w-12 h-12 text-white/80 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white [font-family:'Almarai',Helvetica] mb-4">{language === "ar" ? "انضم لأنشطتنا" : "Join Our Activities"}</h2>
            <p className="text-white/70 text-lg [font-family:'Almarai',Helvetica] mb-2">{language === "ar" ? "شارك في الأنشطة الطلابية وطور مهاراتك" : "Participate in student activities and develop your skills"}</p>
            <p className="text-white/90 text-lg [font-family:'Almarai',Helvetica]">{language === "ar" ? "تواصل مع مكتب الأنشطة الطلابية للتسجيل" : "Contact the Student Activities Office to register"}</p>
          </AnimatedSection>
        </div>
      </section>

      <InstituteFooter {...managementFooter} />
    </div>
  );
}