import { useState } from "react";
import { InstituteNavbar } from "@/components/institute/InstituteNavbar";
import { InstituteFooter } from "@/components/institute/InstituteFooter";
import { managementNavbar, managementFooter } from "@/lib/instituteConfig";
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
  { nameAr: "أ.د. سمير عبدالعزيز", nameEn: "Prof. Samir Abdulaziz", titleAr: "أستاذ", titleEn: "Professor", departmentAr: "نظم المعلومات الإدارية", departmentEn: "Management Information Systems", departmentSlug: "mis", email: "samir.abdulaziz@valley.edu" },
  { nameAr: "د. هدى محمد حسن", nameEn: "Dr. Huda Mohamed Hassan", titleAr: "أستاذ مساعد", titleEn: "Assistant Professor", departmentAr: "نظم المعلومات الإدارية", departmentEn: "Management Information Systems", departmentSlug: "mis", email: "huda.hassan@valley.edu" },
  { nameAr: "د. كريم عبدالله", nameEn: "Dr. Karim Abdullah", titleAr: "مدرس", titleEn: "Lecturer", departmentAr: "نظم المعلومات الإدارية", departmentEn: "Management Information Systems", departmentSlug: "mis", email: "karim.abdullah@valley.edu" },
  { nameAr: "م. سلمى أحمد", nameEn: "Eng. Salma Ahmed", titleAr: "معيد", titleEn: "Teaching Assistant", departmentAr: "نظم المعلومات الإدارية", departmentEn: "Management Information Systems", departmentSlug: "mis", email: "salma.ahmed@valley.edu" },

  { nameAr: "أ.د. محمود عبدالحميد", nameEn: "Prof. Mahmoud Abdulhameed", titleAr: "أستاذ", titleEn: "Professor", departmentAr: "المحاسبة", departmentEn: "Accounting", departmentSlug: "accounting", email: "mahmoud.abdulhameed@valley.edu" },
  { nameAr: "د. نادية حسن إبراهيم", nameEn: "Dr. Nadia Hassan Ibrahim", titleAr: "أستاذ مساعد", titleEn: "Assistant Professor", departmentAr: "المحاسبة", departmentEn: "Accounting", departmentSlug: "accounting", email: "nadia.ibrahim@valley.edu" },
  { nameAr: "د. أحمد فؤاد محمد", nameEn: "Dr. Ahmed Fouad Mohamed", titleAr: "مدرس", titleEn: "Lecturer", departmentAr: "المحاسبة", departmentEn: "Accounting", departmentSlug: "accounting", email: "ahmed.fouad@valley.edu" },
  { nameAr: "م. ياسمين حسام", nameEn: "Eng. Yasmin Hossam", titleAr: "معيد", titleEn: "Teaching Assistant", departmentAr: "المحاسبة", departmentEn: "Accounting", departmentSlug: "accounting", email: "yasmin.hossam@valley.edu" },

  { nameAr: "أ.د. عبدالرحمن سليمان", nameEn: "Prof. Abdulrahman Soliman", titleAr: "أستاذ", titleEn: "Professor", departmentAr: "العلوم المالية والمصرفية", departmentEn: "Financial & Banking Sciences", departmentSlug: "finance", email: "abdulrahman.soliman@valley.edu" },
  { nameAr: "د. ليلى محمد عبدالله", nameEn: "Dr. Laila Mohamed Abdullah", titleAr: "أستاذ مساعد", titleEn: "Assistant Professor", departmentAr: "العلوم المالية والمصرفية", departmentEn: "Financial & Banking Sciences", departmentSlug: "finance", email: "laila.abdullah@valley.edu" },
  { nameAr: "د. حسام الدين أحمد", nameEn: "Dr. Hossam El-Din Ahmed", titleAr: "مدرس", titleEn: "Lecturer", departmentAr: "العلوم المالية والمصرفية", departmentEn: "Financial & Banking Sciences", departmentSlug: "finance", email: "hossam.ahmed@valley.edu" },
  { nameAr: "م. دينا محمود", nameEn: "Eng. Dina Mahmoud", titleAr: "معيد", titleEn: "Teaching Assistant", departmentAr: "العلوم المالية والمصرفية", departmentEn: "Financial & Banking Sciences", departmentSlug: "finance", email: "dina.mahmoud@valley.edu" },

  { nameAr: "أ.د. طارق حسين محمد", nameEn: "Prof. Tarek Hussein Mohamed", titleAr: "أستاذ", titleEn: "Professor", departmentAr: "إدارة الأعمال", departmentEn: "Business Administration", departmentSlug: "business-admin", email: "tarek.hussein@valley.edu" },
  { nameAr: "د. رنا أحمد سعيد", nameEn: "Dr. Rana Ahmed Said", titleAr: "أستاذ مساعد", titleEn: "Assistant Professor", departmentAr: "إدارة الأعمال", departmentEn: "Business Administration", departmentSlug: "business-admin", email: "rana.said@valley.edu" },
  { nameAr: "د. محمد عادل حسن", nameEn: "Dr. Mohamed Adel Hassan", titleAr: "مدرس", titleEn: "Lecturer", departmentAr: "إدارة الأعمال", departmentEn: "Business Administration", departmentSlug: "business-admin", email: "mohamed.adel@valley.edu" },
  { nameAr: "م. هاجر محمود", nameEn: "Eng. Hagar Mahmoud", titleAr: "معيد", titleEn: "Teaching Assistant", departmentAr: "إدارة الأعمال", departmentEn: "Business Administration", departmentSlug: "business-admin", email: "hagar.mahmoud@valley.edu" },
];

const departments = [
  { slugAr: "الكل", slugEn: "All", value: "all" },
  { slugAr: "نظم المعلومات الإدارية", slugEn: "MIS", value: "mis" },
  { slugAr: "المحاسبة", slugEn: "Accounting", value: "accounting" },
  { slugAr: "العلوم المالية والمصرفية", slugEn: "Finance & Banking", value: "finance" },
  { slugAr: "إدارة الأعمال", slugEn: "Business Admin", value: "business-admin" },
];

export default function ManagementFaculty() {
  const { language } = useLanguage();
  const [selectedDept, setSelectedDept] = useState("all");

  const filtered = selectedDept === "all" ? facultyMembers : facultyMembers.filter((m) => m.departmentSlug === selectedDept);

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={language === "ar" ? "أعضاء هيئة التدريس - المعهد العالي للإدارة" : "Faculty - Higher Institute of Management"} description={language === "ar" ? "دليل أعضاء هيئة التدريس بالمعهد العالي للإدارة" : "Faculty directory of the Higher Institute of Management"} />
      <InstituteNavbar {...managementNavbar} />
      <InstituteHero title={language === "ar" ? "أعضاء هيئة التدريس" : "Faculty Members"} subtitle={language === "ar" ? "نخبة من الأساتذة والمتخصصين في مختلف التخصصات الإدارية والمالية" : "Elite professors and specialists in various management and financial disciplines"} image="/figmaAssets/rectangle-2.png" overlayColor="from-green-900/60 to-green-900/80" />

      <section className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1100px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <span className="text-green-700 font-bold text-sm [font-family:'Almarai',Helvetica]">{language === "ar" ? "هيئة التدريس" : "Faculty"}</span>
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "دليل أعضاء هيئة التدريس" : "Faculty Directory"}</h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-12" dir={direction}>
              <Filter className="w-5 h-5 text-green-700 dark:text-green-500 transition-colors duration-300" />
              {departments.map((dept) => (
                <button
                  key={dept.value}
                  onClick={() => setSelectedDept(dept.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all [font-family:'Almarai',Helvetica] ${
                    selectedDept === dept.value
                      ? "bg-green-700 text-white"
                      : "bg-gray-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-green-50 dark:hover:bg-green-900/20"
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
                    <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center transition-colors duration-300">
                      <User className="w-10 h-10 text-green-700 dark:text-green-400 transition-colors duration-300" />
                    </div>
                    <h3 className="font-bold text-base text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? member.nameAr : member.nameEn}</h3>
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-xs [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? member.titleAr : member.titleEn}</span>
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

      <InstituteFooter {...managementFooter} />
    </div>
  );
}