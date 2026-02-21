import { useState, useEffect } from "react";
import { InstituteNavbar } from "@/components/institute/InstituteNavbar";
import { InstituteFooter } from "@/components/institute/InstituteFooter";
import { managementNavbar, managementFooter } from "@/lib/instituteConfig";
import { InstituteHero } from "@/components/institute/InstituteHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { Breadcrumb } from "@/components/Breadcrumb";
import { User, Mail, Filter, Loader2 } from "lucide-react";

interface FacultyMember {
  id: string;
  nameAr: string;
  nameEn: string;
  titleAr: string;
  titleEn: string;
  departmentId: string;
  institute: string;
  email: string;
  photoUrl?: string;
  isFeatured: boolean;
  isActive: boolean;
  sortOrder: number;
}

interface Department {
  id: string;
  nameAr: string;
  nameEn: string;
  institute: string;
  slug: string;
}

export default function ManagementFaculty() {
  const { language, direction } = useLanguage();
  const [facultyMembers, setFacultyMembers] = useState<FacultyMember[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDept, setSelectedDept] = useState("all");
  
  const pageTitle = language === "ar" ? "أعضاء هيئة التدريس" : "Faculty Members";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [facultyRes, departmentsRes] = await Promise.all([
          fetch("/api/faculty?institute=management"),
          fetch("/api/departments"),
        ]);

        const facultyData = await facultyRes.json();
        const departmentsData = await departmentsRes.json();

        setFacultyMembers(facultyData.data || []);
        const filteredDepts = departmentsData.filter(
          (d: Department) => d.institute === "management"
        );
        setDepartments(filteredDepts);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setFacultyMembers([]);
        setDepartments([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filtered = selectedDept === "all" ? facultyMembers : facultyMembers.filter((m) => m.departmentId === selectedDept);

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={language === "ar" ? "أعضاء هيئة التدريس - المعهد العالي للإدارة" : "Faculty - Higher Institute of Management"} description={language === "ar" ? "دليل أعضاء هيئة التدريس بالمعهد العالي للإدارة" : "Faculty directory of the Higher Institute of Management"} />
      <InstituteNavbar {...managementNavbar} />
      <InstituteHero title={language === "ar" ? "أعضاء هيئة التدريس" : "Faculty Members"} subtitle={language === "ar" ? "نخبة من الأساتذة والمتخصصين في مختلف التخصصات الإدارية والمالية" : "Elite professors and specialists in various management and financial disciplines"} image="/figmaAssets/rectangle-2.png" overlayColor="from-green-900/60 to-green-900/80" />

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 pt-6">
        <Breadcrumb
          items={[
            { label: language === 'ar' ? 'الرئيسية' : 'Home', href: '/' },
            { label: language === 'ar' ? 'معهد الإدارة' : 'Management Institute', href: '/institute/management' },
            { label: pageTitle },
          ]}
        />
      </div>

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
              <button
                onClick={() => setSelectedDept("all")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all [font-family:'Almarai',Helvetica] ${
                  selectedDept === "all"
                    ? "bg-green-700 text-white"
                    : "bg-gray-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-green-50 dark:hover:bg-green-900/20"
                }`}
              >
                {language === "ar" ? "الكل" : "All"}
              </button>
              {departments.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDept(dept.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all [font-family:'Almarai',Helvetica] ${
                    selectedDept === dept.id
                      ? "bg-green-700 text-white"
                      : "bg-gray-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-green-50 dark:hover:bg-green-900/20"
                  }`}
                >
                  {language === "ar" ? dept.nameAr : dept.nameEn}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 text-green-700 dark:text-green-500 animate-spin" />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" dir={direction}>
              {filtered.map((member, index) => {
                const deptName = departments.find((d) => d.id === member.departmentId);
                return (
                  <AnimatedSection key={member.id} delay={index * 0.05} direction="up">
                    <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full bg-white dark:bg-neutral-900 dark:border-neutral-800">
                      <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                        <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center overflow-hidden transition-colors duration-300">
                          {member.photoUrl ? (
                            <img
                              src={member.photoUrl}
                              alt={language === "ar" ? member.nameAr : member.nameEn}
                              className="w-full h-full object-cover"
                              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                            />
                          ) : (
                            <User className="w-10 h-10 text-green-700 dark:text-green-400 transition-colors duration-300" />
                          )}
                        </div>
                        <h3 className="font-bold text-base text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? member.nameAr : member.nameEn}</h3>
                        <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-xs [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? member.titleAr : member.titleEn}</span>
                        <p className="text-neutral-500 dark:text-neutral-400 text-sm [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? deptName?.nameAr : deptName?.nameEn}</p>
                        <div className="flex items-center gap-1 text-neutral-400 dark:text-neutral-500 text-xs">
                          <Mail className="w-3 h-3" />
                          <span className="[font-family:'Almarai',Helvetica]">{member.email}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <InstituteFooter {...managementFooter} />
    </div>
  );
}