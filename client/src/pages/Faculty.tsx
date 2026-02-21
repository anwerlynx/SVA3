import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Card, CardContent } from "@/components/ui/card";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { User, Mail, Search, Filter, GraduationCap, Award, BookOpen, Users, Loader2 } from "lucide-react";

interface FacultyMember {
    id: string;
    nameAr: string;
    nameEn: string;
    titleAr: string;
    titleEn: string;
    departmentId: string;
    institute: string;
    email: string;
    photoUrl: string | null;
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
    [key: string]: any;
}

export default function Faculty() {
    const { t, language, direction } = useLanguage();
    const [filter, setFilter] = useState<string | null>(null);
    const [search, setSearch] = useState("");
    const [facultyMembers, setFacultyMembers] = useState<FacultyMember[]>([]);
    const [departments, setDepartments] = useState<Department[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                const [facultyRes, departmentsRes] = await Promise.all([
                    fetch("/api/faculty"),
                    fetch("/api/departments"),
                ]);

                if (!facultyRes.ok || !departmentsRes.ok) {
                    throw new Error("Failed to fetch data");
                }

                const facultyData = await facultyRes.json();
                const departmentsData = await departmentsRes.json();

                setFacultyMembers(facultyData.data || []);
                setDepartments(departmentsData || []);
                setFilter(null); // Set to null to show all by default
            } catch (err) {
                setError(err instanceof Error ? err.message : "An error occurred");
                console.error("Error fetching faculty data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const filteredMembers = facultyMembers.filter(m => {
        const matchesDept = filter === null || filter === "all" || m.departmentId === filter;
        const matchesSearch = search === "" ||
            m.nameAr.includes(search) ||
            m.nameEn.toLowerCase().includes(search.toLowerCase()) ||
            m.titleAr.includes(search) ||
            m.titleEn.toLowerCase().includes(search.toLowerCase());
        return matchesDept && matchesSearch;
    });

    const getDepartmentName = (departmentId: string) => {
        const dept = departments.find(d => d.id === departmentId);
        return dept ? (language === 'ar' ? dept.nameAr : dept.nameEn) : "";
    };

    return (
        <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
            <PageHead title={t("faculty_staff")} description={t("staff_directory")} />
            <Navbar />

            {/* Hero */}
            <section className="relative w-full h-[50vh] min-h-[350px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img className="w-full h-full object-cover" alt="Faculty" src="/figmaAssets/rectangle-3.png" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
                </div>
                <div className="relative z-10 text-center px-4">
                    <AnimatedSection>
                        <h1 className="text-4xl md:text-6xl font-bold text-white [font-family:'Almarai',Helvetica] mb-4" dir={direction}>
                            {t("faculty_staff")}
                        </h1>
                        <p className="text-white/80 text-lg md:text-xl max-w-[600px] mx-auto [font-family:'Almarai',Helvetica]" dir={direction}>
                            {t("staff_directory")}
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            <div className="max-w-[1200px] mx-auto px-4 md:px-8 pt-6">
                <Breadcrumb
                    items={[
                        { label: language === 'ar' ? 'الرئيسية' : 'Home', href: '/' },
                        { label: language === 'ar' ? 'هيئة التدريس' : 'Faculty & Staff' },
                    ]}
                />
            </div>

            <section className="py-14 bg-green-800 dark:bg-green-900 transition-colors duration-300">
                <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6" dir={direction}>
                        {[
                            { icon: Users, value: facultyMembers.length, suffix: "", label: language === 'ar' ? "عضو هيئة تدريس" : "Faculty Members" },
                            { icon: GraduationCap, value: 45, suffix: "+", label: language === 'ar' ? "حامل دكتوراه" : "PhD Holders" },
                            { icon: Award, value: 85, suffix: "+", label: language === 'ar' ? "بحث منشور" : "Published Research" },
                            { icon: BookOpen, value: departments.length, suffix: "", label: language === 'ar' ? "أقسام أكاديمية" : "Academic Departments" },
                        ].map((stat, index) => (
                            <AnimatedSection key={index} delay={index * 0.1} direction="up">
                                <div className="text-center">
                                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-3">
                                        <stat.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <div className="text-3xl md:text-4xl font-bold text-white [font-family:'Almarai',Helvetica] mb-1">
                                        <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                                    </div>
                                    <p className="text-white/70 text-sm [font-family:'Almarai',Helvetica]">{stat.label}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Filters & Search */}
            <section className="py-10 bg-gray-50 dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-800 transition-colors duration-300">
                <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between" dir={direction}>
                        {/* Search */}
                        <div className="relative w-full md:w-80">
                            <input
                                type="text"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                placeholder={language === 'ar' ? "ابحث عن عضو هيئة التدريس..." : "Search faculty members..."}
                                className={`w-full ${direction === 'rtl' ? 'pr-10 pl-4' : 'pl-10 pr-4'} py-2.5 rounded-xl border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] text-sm focus:outline-none focus:ring-2 focus:ring-green-500/30 transition-colors`}
                            />
                            <Search className={`absolute ${direction === 'rtl' ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400`} />
                        </div>

                        {/* Department Filter */}
                        <div className="flex flex-wrap gap-2 justify-center md:justify-end">
                            <button
                                onClick={() => setFilter("all")}
                                className={`px-4 py-2 rounded-full text-sm font-medium [font-family:'Almarai',Helvetica] transition-all ${filter === "all"
                                        ? "bg-green-700 text-white"
                                        : "bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-green-50 dark:hover:bg-neutral-700 border border-gray-200 dark:border-neutral-700"
                                    }`}
                            >
                                {language === 'ar' ? "الكل" : "All"}
                            </button>
                            {departments.map(dept => (
                                <button
                                    key={dept.id}
                                    onClick={() => setFilter(dept.id)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium [font-family:'Almarai',Helvetica] transition-all ${filter === dept.id
                                            ? "bg-green-700 text-white"
                                            : "bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-green-50 dark:hover:bg-neutral-700 border border-gray-200 dark:border-neutral-700"
                                        }`}
                                >
                                    {language === 'ar' ? dept.nameAr : dept.nameEn}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Faculty Grid */}
            <section className="py-16">
                <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                    {loading ? (
                        <div className="text-center py-20">
                            <Loader2 className="w-16 h-16 text-green-600 mx-auto mb-4 animate-spin" />
                            <p className="text-neutral-500 dark:text-neutral-400 [font-family:'Almarai',Helvetica] text-lg">
                                {language === 'ar' ? "جاري التحميل..." : "Loading..."}
                            </p>
                        </div>
                    ) : error ? (
                        <div className="text-center py-20">
                            <User className="w-16 h-16 text-red-400 dark:text-red-600 mx-auto mb-4" />
                            <p className="text-red-600 dark:text-red-400 [font-family:'Almarai',Helvetica] text-lg">
                                {language === 'ar' ? "حدث خطأ في تحميل البيانات" : "Error loading data"}
                            </p>
                            <p className="text-neutral-500 dark:text-neutral-400 text-sm mt-2">{error}</p>
                        </div>
                    ) : filteredMembers.length === 0 ? (
                        <div className="text-center py-20">
                            <User className="w-16 h-16 text-gray-300 dark:text-neutral-600 mx-auto mb-4" />
                            <p className="text-neutral-500 dark:text-neutral-400 [font-family:'Almarai',Helvetica] text-lg">
                                {language === 'ar' ? "لا توجد نتائج" : "No results found"}
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" dir={direction}>
                            {filteredMembers.map((member, index) => (
                                <AnimatedSection key={member.id} delay={index * 0.05}>
                                    <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-shadow bg-white dark:bg-neutral-900 overflow-hidden group cursor-pointer">
                                        <div className="h-[260px] overflow-hidden relative">
                                            <img
                                                src={member.photoUrl || "/figmaAssets/rectangle-10.png"}
                                                alt={language === 'ar' ? member.nameAr : member.nameEn}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                                                <div className="flex gap-3">
                                                    <button className="p-2.5 bg-white rounded-full hover:bg-green-600 hover:text-white transition-colors text-neutral-900" aria-label="Email">
                                                        <Mail className="w-4 h-4" />
                                                    </button>
                                                    <button className="p-2.5 bg-white rounded-full hover:bg-green-600 hover:text-white transition-colors text-neutral-900" aria-label="Profile">
                                                        <User className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <CardContent className="p-5 text-center">
                                            <h3 className="text-lg font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] mb-1 transition-colors duration-300">
                                                {language === 'ar' ? member.nameAr : member.nameEn}
                                            </h3>
                                            <p className="text-neutral-500 dark:text-neutral-400 text-sm [font-family:'Almarai',Helvetica] leading-relaxed">
                                                {language === 'ar' ? member.titleAr : member.titleEn}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </AnimatedSection>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
}
