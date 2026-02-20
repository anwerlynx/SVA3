import { useState } from "react";
import { InstituteNavbar } from "@/components/institute/InstituteNavbar";
import { InstituteFooter } from "@/components/institute/InstituteFooter";
import { engineeringNavbar, engineeringFooter } from "@/lib/instituteConfig";
import { InstituteHero } from "@/components/institute/InstituteHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { User, Mail, Filter } from "lucide-react";

interface FacultyMember {
  nameAr: string;
  nameEn: string;
  titleAr: string;
  titleEn: string;
  departmentAr: string;
  departmentEn: string;
  departmentSlug: string;
  email: string;
}

const facultyMembers: FacultyMember[] = [
  { nameAr: "أ.د. أحمد محمد إبراهيم", nameEn: "Prof. Ahmed Mohamed Ibrahim", titleAr: "أستاذ", titleEn: "Professor", departmentAr: "هندسة القوى والاتصالات", departmentEn: "Power & Telecom Engineering", departmentSlug: "power-telecom", email: "ahmed.ibrahim@valley.edu" },
  { nameAr: "د. محمد علي حسن", nameEn: "Dr. Mohamed Ali Hassan", titleAr: "أستاذ مساعد", titleEn: "Assistant Professor", departmentAr: "هندسة القوى والاتصالات", departmentEn: "Power & Telecom Engineering", departmentSlug: "power-telecom", email: "mohamed.hassan@valley.edu" },
  { nameAr: "د. خالد عبدالرحمن", nameEn: "Dr. Khaled Abdulrahman", titleAr: "مدرس", titleEn: "Lecturer", departmentAr: "هندسة القوى والاتصالات", departmentEn: "Power & Telecom Engineering", departmentSlug: "power-telecom", email: "khaled.abdulrahman@valley.edu" },
  { nameAr: "م. سارة أحمد", nameEn: "Eng. Sara Ahmed", titleAr: "معيد", titleEn: "Teaching Assistant", departmentAr: "هندسة القوى والاتصالات", departmentEn: "Power & Telecom Engineering", departmentSlug: "power-telecom", email: "sara.ahmed@valley.edu" },

  { nameAr: "أ.د. حسين محمود عبدالله", nameEn: "Prof. Hussein Mahmoud Abdullah", titleAr: "أستاذ", titleEn: "Professor", departmentAr: "الهندسة المدنية والبيئية", departmentEn: "Civil & Environmental Engineering", departmentSlug: "civil", email: "hussein.abdullah@valley.edu" },
  { nameAr: "د. عمرو سعيد محمد", nameEn: "Dr. Amr Said Mohamed", titleAr: "أستاذ مساعد", titleEn: "Assistant Professor", departmentAr: "الهندسة المدنية والبيئية", departmentEn: "Civil & Environmental Engineering", departmentSlug: "civil", email: "amr.mohamed@valley.edu" },
  { nameAr: "د. فاطمة حسن علي", nameEn: "Dr. Fatma Hassan Ali", titleAr: "مدرس", titleEn: "Lecturer", departmentAr: "الهندسة المدنية والبيئية", departmentEn: "Civil & Environmental Engineering", departmentSlug: "civil", email: "fatma.ali@valley.edu" },
  { nameAr: "م. كريم أحمد", nameEn: "Eng. Karim Ahmed", titleAr: "معيد", titleEn: "Teaching Assistant", departmentAr: "الهندسة المدنية والبيئية", departmentEn: "Civil & Environmental Engineering", departmentSlug: "civil", email: "karim.ahmed@valley.edu" },

  { nameAr: "أ.د. سامي عبدالعزيز", nameEn: "Prof. Sami Abdulaziz", titleAr: "أستاذ", titleEn: "Professor", departmentAr: "الهندسة المعمارية والتصميم", departmentEn: "Architecture & Design Engineering", departmentSlug: "architecture", email: "sami.abdulaziz@valley.edu" },
  { nameAr: "د. منى خالد محمد", nameEn: "Dr. Mona Khaled Mohamed", titleAr: "أستاذ مساعد", titleEn: "Assistant Professor", departmentAr: "الهندسة المعمارية والتصميم", departmentEn: "Architecture & Design Engineering", departmentSlug: "architecture", email: "mona.mohamed@valley.edu" },
  { nameAr: "د. أحمد رضا", nameEn: "Dr. Ahmed Reda", titleAr: "مدرس", titleEn: "Lecturer", departmentAr: "الهندسة المعمارية والتصميم", departmentEn: "Architecture & Design Engineering", departmentSlug: "architecture", email: "ahmed.reda@valley.edu" },
  { nameAr: "م. هبة محمود", nameEn: "Eng. Heba Mahmoud", titleAr: "معيد", titleEn: "Teaching Assistant", departmentAr: "الهندسة المعمارية والتصميم", departmentEn: "Architecture & Design Engineering", departmentSlug: "architecture", email: "heba.mahmoud@valley.edu" },

  { nameAr: "أ.د. عادل محمد سليمان", nameEn: "Prof. Adel Mohamed Soliman", titleAr: "أستاذ", titleEn: "Professor", departmentAr: "هندسة التحكم والحاسبات", departmentEn: "Control & Computer Engineering", departmentSlug: "control-computer", email: "adel.soliman@valley.edu" },
  { nameAr: "د. هاني عبدالله أحمد", nameEn: "Dr. Hani Abdullah Ahmed", titleAr: "أستاذ مساعد", titleEn: "Assistant Professor", departmentAr: "هندسة التحكم والحاسبات", departmentEn: "Control & Computer Engineering", departmentSlug: "control-computer", email: "hani.ahmed@valley.edu" },
  { nameAr: "د. رانيا محمد حسن", nameEn: "Dr. Rania Mohamed Hassan", titleAr: "مدرس", titleEn: "Lecturer", departmentAr: "هندسة التحكم والحاسبات", departmentEn: "Control & Computer Engineering", departmentSlug: "control-computer", email: "rania.hassan@valley.edu" },
  { nameAr: "م. عمر طارق", nameEn: "Eng. Omar Tarek", titleAr: "معيد", titleEn: "Teaching Assistant", departmentAr: "هندسة التحكم والحاسبات", departmentEn: "Control & Computer Engineering", departmentSlug: "control-computer", email: "omar.tarek@valley.edu" },
];

const departments = [
  { slugAr: "الكل", slugEn: "All", value: "all" },
  { slugAr: "هندسة القوى والاتصالات", slugEn: "Power & Telecom", value: "power-telecom" },
  { slugAr: "الهندسة المدنية والبيئية", slugEn: "Civil & Environmental", value: "civil" },
  { slugAr: "الهندسة المعمارية والتصميم", slugEn: "Architecture & Design", value: "architecture" },
  { slugAr: "هندسة التحكم والحاسبات", slugEn: "Control & Computer", value: "control-computer" },
];

export default function EngineeringFaculty() {
  const { language } = useLanguage();
  const [selectedDept, setSelectedDept] = useState("all");

  const filtered = selectedDept === "all" ? facultyMembers : facultyMembers.filter((m) => m.departmentSlug === selectedDept);

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={language === "ar" ? "أعضاء هيئة التدريس - المعهد العالي للهندسة" : "Faculty - Higher Institute of Engineering"} description={language === "ar" ? "دليل أعضاء هيئة التدريس بالمعهد العالي للهندسة" : "Faculty directory of the Higher Institute of Engineering"} />
      <InstituteNavbar {...engineeringNavbar} />
      <InstituteHero title={language === "ar" ? "أعضاء هيئة التدريس" : "Faculty Members"} subtitle={language === "ar" ? "نخبة من الأساتذة والمتخصصين في مختلف التخصصات الهندسية" : "Elite professors and specialists in various engineering disciplines"} image="/figmaAssets/rectangle-17.png" overlayColor="from-blue-900/60 to-blue-900/80" />

      <section className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1100px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-blue-700 rounded-full" />
                <span className="text-blue-700 font-bold text-sm [font-family:'Almarai',Helvetica]">{language === "ar" ? "هيئة التدريس" : "Faculty"}</span>
                <div className="w-12 h-1 bg-blue-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "دليل أعضاء هيئة التدريس" : "Faculty Directory"}</h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-12" dir={direction}>
              <Filter className="w-5 h-5 text-blue-700 dark:text-blue-500 transition-colors duration-300" />
              {departments.map((dept) => (
                <button
                  key={dept.value}
                  onClick={() => setSelectedDept(dept.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all [font-family:'Almarai',Helvetica] ${
                    selectedDept === dept.value
                      ? "bg-blue-700 text-white"
                      : "bg-gray-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                  }`}
                >
                  {language === "ar" ? dept.slugAr : dept.slugEn}
                </button>
              ))}
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" dir={direction}>
            {filtered.map((member, index) => (
              <AnimatedSection key={member.email} delay={index * 0.05} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full bg-white dark:bg-neutral-900 dark:border-neutral-800">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                    <div className="w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center transition-colors duration-300">
                      <User className="w-10 h-10 text-blue-700 dark:text-blue-400 transition-colors duration-300" />
                    </div>
                    <h3 className="font-bold text-base text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? member.nameAr : member.nameEn}</h3>
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full text-xs [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? member.titleAr : member.titleEn}</span>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? member.departmentAr : member.departmentEn}</p>
                    <div className="flex items-center gap-1 text-neutral-400 dark:text-neutral-500 text-xs">
                      <Mail className="w-3 h-3" />
                      <span className="[font-family:'Almarai',Helvetica]">{member.email}</span>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <InstituteFooter {...engineeringFooter} />
    </div>
  );
}