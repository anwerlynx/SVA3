import { useState, useEffect } from "react";
import { InstituteNavbar } from "@/components/institute/InstituteNavbar";
import { InstituteFooter } from "@/components/institute/InstituteFooter";
import { engineeringNavbar, engineeringFooter } from "@/lib/instituteConfig";
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
  isFeatured?: boolean;
  isActive?: boolean;
  sortOrder?: number;
}

interface Department {
  id: string;
  nameAr: string;
  nameEn: string;
  institute: string;
  slug: string;
}

export default function EngineeringFaculty() {
  const { language, direction } = useLanguage();
  const pageTitle = language === "ar" ? "أعضاء هيئة التدريس" : "Faculty Members";
  
  const [facultyMembers, setFacultyMembers] = useState<FacultyMember[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDept, setSelectedDept] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch faculty members
        const facultyResponse = await fetch("/api/faculty?institute=engineering");
        const facultyData = await facultyResponse.json();
        setFacultyMembers(facultyData.data || []);
        
        // Fetch departments and filter for engineering
        const deptResponse = await fetch("/api/departments");
        const allDepartments = await deptResponse.json();
        const engineeringDepts = allDepartments.filter((dept: Department) => dept.institute === "engineering");
        setDepartments(engineeringDepts);
      } catch (error) {
        console.error("Error fetching data:", error);
        setFacultyMembers([]);
        setDepartments([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Create a map for faster department lookup
  const deptMap = new Map(departments.map((dept) => [dept.id, dept]));

  // Filter faculty by selected department
  const filtered =
    selectedDept === "all"
      ? facultyMembers
      : facultyMembers.filter((m) => m.departmentId === selectedDept);

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={language === "ar" ? "أعضاء هيئة التدريس - المعهد العالي للهندسة" : "Faculty - Higher Institute of Engineering"} description={language === "ar" ? "دليل أعضاء هيئة التدريس بالمعهد العالي للهندسة" : "Faculty directory of the Higher Institute of Engineering"} />
      <InstituteNavbar {...engineeringNavbar} />
      <InstituteHero title={language === "ar" ? "أعضاء هيئة التدريس" : "Faculty Members"} subtitle={language === "ar" ? "نخبة من الأساتذة والمتخصصين في مختلف التخصصات الهندسية" : "Elite professors and specialists in various engineering disciplines"} image="/figmaAssets/rectangle-17.png" overlayColor="from-blue-900/60 to-blue-900/80" />

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 pt-6">
        <Breadcrumb
          items={[
            { label: language === 'ar' ? 'الرئيسية' : 'Home', href: '/' },
            { label: language === 'ar' ? 'معهد الهندسة' : 'Engineering Institute', href: '/institute/engineering' },
            { label: pageTitle },
          ]}
        />
      </div>

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
              {/* All button */}
              <button
                onClick={() => setSelectedDept("all")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all [font-family:'Almarai',Helvetica] ${
                  selectedDept === "all"
                    ? "bg-blue-700 text-white"
                    : "bg-gray-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                }`}
              >
                {language === "ar" ? "الكل" : "All"}
              </button>
              {/* Department buttons */}
              {departments.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDept(dept.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all [font-family:'Almarai',Helvetica] ${
                    selectedDept === dept.id
                      ? "bg-blue-700 text-white"
                      : "bg-gray-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                  }`}
                >
                  {language === "ar" ? dept.nameAr : dept.nameEn}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-8 h-8 text-blue-700 dark:text-blue-500 animate-spin" />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" dir={direction}>
              {filtered.map((member, index) => {
                const dept = deptMap.get(member.departmentId);
                return (
                  <AnimatedSection key={member.id} delay={index * 0.05} direction="up">
                    <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full bg-white dark:bg-neutral-900 dark:border-neutral-800">
                      <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                        <div className="w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center transition-colors duration-300 overflow-hidden">
                          {member.photoUrl ? (
                            <img src={member.photoUrl} alt={language === "ar" ? member.nameAr : member.nameEn} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                          ) : (
                            <User className="w-10 h-10 text-blue-700 dark:text-blue-400 transition-colors duration-300" />
                          )}
                        </div>
                        <h3 className="font-bold text-base text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? member.nameAr : member.nameEn}</h3>
                        <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full text-xs [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? member.titleAr : member.titleEn}</span>
                        <p className="text-neutral-500 dark:text-neutral-400 text-sm [font-family:'Almarai',Helvetica] transition-colors duration-300">{dept ? (language === "ar" ? dept.nameAr : dept.nameEn) : ""}</p>
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

      <InstituteFooter {...engineeringFooter} />
    </div>
  );
}