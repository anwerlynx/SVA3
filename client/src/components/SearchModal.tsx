import { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X, Loader2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface SearchPage {
  labelAr: string;
  labelEn: string;
  href: string;
  category: "portal" | "management" | "engineering";
}

interface ApiResults {
  news: Array<{ titleAr: string; titleEn: string | null; slug: string; category?: string; coverImage?: string }>;
  faculty: Array<{ nameAr: string; nameEn: string; institute: string | null; departmentId?: string }>;
  departments: Array<{ nameAr: string; nameEn: string; institute: string; slug?: string }>;
  events: Array<{ titleAr: string; titleEn: string | null; slug: string; startDate?: string; location?: string }>;
  research: Array<{ titleAr: string; titleEn: string | null; journal?: string; publishedYear?: number }>;
  library: Array<{ titleAr: string; titleEn: string | null; authorAr?: string; authorEn?: string; type?: string }>;
}

const pages: SearchPage[] = [
  { labelAr: "الرئيسية", labelEn: "Home", href: "/", category: "portal" },
  { labelAr: "عن المؤسسة", labelEn: "About", href: "/about", category: "portal" },
  { labelAr: "الأقسام الأكاديمية", labelEn: "Academic", href: "/academic", category: "portal" },
  { labelAr: "الخدمات", labelEn: "Services", href: "/services", category: "portal" },
  { labelAr: "الأخبار", labelEn: "News", href: "/news", category: "portal" },
  { labelAr: "اتصل بنا", labelEn: "Contact", href: "/contact", category: "portal" },
  { labelAr: "مجلس الإدارة", labelEn: "Board", href: "/board", category: "portal" },
  { labelAr: "الشركاء", labelEn: "Partners", href: "/partners", category: "portal" },
  { labelAr: "الجودة المركزية", labelEn: "Central Quality", href: "/quality", category: "portal" },
  { labelAr: "القبول المركزي", labelEn: "Central Admission", href: "/admission", category: "portal" },
  { labelAr: "شروط الالتحاق", labelEn: "Enrollment Conditions", href: "/enrollment-conditions", category: "portal" },
  { labelAr: "إجراءات القبول", labelEn: "Admission Procedures", href: "/admission-procedures", category: "portal" },
  { labelAr: "شئون التعليم والطلاب", labelEn: "Student Affairs", href: "/student-affairs", category: "portal" },
  { labelAr: "نظام تأديب الطالب", labelEn: "Student Discipline", href: "/student-discipline", category: "portal" },
  { labelAr: "ملفات الجودة", labelEn: "Quality Files", href: "/quality-files", category: "portal" },
  { labelAr: "ميثاق الشرف", labelEn: "Honor Charter", href: "/honor-charter", category: "portal" },
  { labelAr: "كلمة رئيس مجلس الإدارة", labelEn: "Chairman's Word", href: "/chairman-word", category: "portal" },
  { labelAr: "رسالة الترحيب", labelEn: "Welcome Message", href: "/welcome", category: "portal" },
  { labelAr: "الرؤية والرسالة", labelEn: "Vision & Mission", href: "/vision-mission", category: "portal" },
  { labelAr: "معرض الصور والفيديو", labelEn: "Media Gallery", href: "/media-gallery", category: "portal" },
  { labelAr: "اتحاد الطلاب", labelEn: "Student Union", href: "/committees/student-union", category: "portal" },
  { labelAr: "النشاط الثقافي", labelEn: "Cultural Committee", href: "/committees/cultural", category: "portal" },
  { labelAr: "النشاط الرياضي", labelEn: "Sports Committee", href: "/committees/sports", category: "portal" },
  { labelAr: "النشاط الفني", labelEn: "Arts Committee", href: "/committees/arts", category: "portal" },
  { labelAr: "النشاط الاجتماعي", labelEn: "Social Committee", href: "/committees/social", category: "portal" },
  { labelAr: "الجوالة والخدمات العامة", labelEn: "Scouts Committee", href: "/committees/scouts", category: "portal" },
  { labelAr: "عن المكتبة", labelEn: "About Library", href: "/library/about", category: "portal" },
  { labelAr: "بنك المعرفة", labelEn: "Knowledge Bank", href: "/library/knowledge-bank", category: "portal" },
  { labelAr: "الاستعارة الرقمية", labelEn: "Digital Borrowing", href: "/library/digital-borrowing", category: "portal" },
  { labelAr: "حفلات التخرج", labelEn: "Graduation Parties", href: "/graduation-parties", category: "portal" },
  { labelAr: "الوظائف المتاحة", labelEn: "Available Jobs", href: "/available-jobs", category: "portal" },
  { labelAr: "خريطة الموقع", labelEn: "Sitemap", href: "/sitemap", category: "portal" },
  { labelAr: "الأسئلة الشائعة", labelEn: "FAQ", href: "/faq", category: "portal" },
  { labelAr: "التقويم الأكاديمي", labelEn: "Academic Calendar", href: "/academic-calendar", category: "portal" },

  { labelAr: "الرئيسية", labelEn: "Home", href: "/institute/management", category: "management" },
  { labelAr: "عن المعهد", labelEn: "About", href: "/institute/management/about", category: "management" },
  { labelAr: "الأقسام", labelEn: "Departments", href: "/institute/management/departments", category: "management" },
  { labelAr: "القبول", labelEn: "Admission", href: "/institute/management/admission", category: "management" },
  { labelAr: "خدمات الطلاب", labelEn: "Student Services", href: "/institute/management/student-services", category: "management" },
  { labelAr: "أعضاء هيئة التدريس", labelEn: "Faculty", href: "/institute/management/faculty", category: "management" },
  { labelAr: "التدريب", labelEn: "Training", href: "/institute/management/training", category: "management" },
  { labelAr: "الأنشطة", labelEn: "Activities", href: "/institute/management/activities", category: "management" },
  { labelAr: "الأخبار", labelEn: "News", href: "/institute/management/news", category: "management" },
  { labelAr: "الجودة", labelEn: "Quality", href: "/institute/management/quality", category: "management" },
  { labelAr: "المكتبة", labelEn: "Library", href: "/institute/management/library", category: "management" },
  { labelAr: "اتصل بنا", labelEn: "Contact", href: "/institute/management/contact", category: "management" },

  { labelAr: "الرئيسية", labelEn: "Home", href: "/institute/engineering", category: "engineering" },
  { labelAr: "عن المعهد", labelEn: "About", href: "/institute/engineering/about", category: "engineering" },
  { labelAr: "الأقسام", labelEn: "Departments", href: "/institute/engineering/departments", category: "engineering" },
  { labelAr: "القبول", labelEn: "Admission", href: "/institute/engineering/admission", category: "engineering" },
  { labelAr: "خدمات الطلاب", labelEn: "Student Services", href: "/institute/engineering/student-services", category: "engineering" },
  { labelAr: "أعضاء هيئة التدريس", labelEn: "Faculty", href: "/institute/engineering/faculty", category: "engineering" },
  { labelAr: "البحث العلمي", labelEn: "Research", href: "/institute/engineering/research", category: "engineering" },
  { labelAr: "التدريب", labelEn: "Training", href: "/institute/engineering/training", category: "engineering" },
  { labelAr: "المعامل", labelEn: "Labs", href: "/institute/engineering/labs", category: "engineering" },
  { labelAr: "الأخبار", labelEn: "News", href: "/institute/engineering/news", category: "engineering" },
  { labelAr: "الجودة", labelEn: "Quality", href: "/institute/engineering/quality", category: "engineering" },
  { labelAr: "المكتبة", labelEn: "Library", href: "/institute/engineering/library", category: "engineering" },
  { labelAr: "اتصل بنا", labelEn: "Contact", href: "/institute/engineering/contact", category: "engineering" },
];

const categoryLabels = {
  portal: { ar: "البوابة الرئيسية", en: "Portal" },
  management: { ar: "معهد الإدارة والمالية", en: "Management Institute" },
  engineering: { ar: "معهد الهندسة والتكنولوجيا", en: "Engineering Institute" },
};

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const emptyResults: ApiResults = { news: [], faculty: [], departments: [], events: [], research: [], library: [] };
  const [apiResults, setApiResults] = useState<ApiResults>(emptyResults);
  const [apiLoading, setApiLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { language, direction } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setApiResults(emptyResults);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    const q = query.trim();
    if (q.length < 2) {
      setApiResults(emptyResults);
      setApiLoading(false);
      return;
    }

    setApiLoading(true);
    const timer = setTimeout(async () => {
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(q)}&limit=5`);
        if (res.ok) {
          const data = await res.json();
          setApiResults(data);
        } else {
          setApiResults(emptyResults);
        }
      } catch {
        setApiResults(emptyResults);
      } finally {
        setApiLoading(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return pages;
    return pages.filter(
      (p) =>
        p.labelAr.toLowerCase().includes(q) ||
        p.labelEn.toLowerCase().includes(q)
    );
  }, [query]);

  const grouped = useMemo(() => {
    const groups: Record<string, SearchPage[]> = {};
    for (const p of filtered) {
      if (!groups[p.category]) groups[p.category] = [];
      groups[p.category].push(p);
    }
    return groups;
  }, [filtered]);

  const hasApiResults = apiResults.news.length > 0 || apiResults.faculty.length > 0 || apiResults.departments.length > 0 || apiResults.events.length > 0 || apiResults.research.length > 0 || apiResults.library.length > 0;
  const hasPageResults = Object.keys(grouped).length > 0;
  const instituteLabels: Record<string, { ar: string; en: string }> = {
    engineering: { ar: "الهندسة", en: "Engineering" },
    management: { ar: "الإدارة", en: "Management" },
    both: { ar: "الكل", en: "Both" },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          dir={direction}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="w-full h-full overflow-y-auto bg-white dark:bg-neutral-950"
          >
            <div className="max-w-[800px] mx-auto px-4 py-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica]">
                  {language === "ar" ? "البحث" : "Search"}
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors text-neutral-700 dark:text-neutral-300"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="relative mb-10">
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={language === "ar" ? "ابحث عن صفحة..." : "Search for a page..."}
                  className={`w-full px-6 py-4 ${direction === "rtl" ? "pr-14" : "pl-14"} rounded-2xl border-2 border-green-700 focus:outline-none focus:ring-2 focus:ring-green-500/30 text-lg text-neutral-900 dark:text-white bg-gray-50 dark:bg-neutral-900 [font-family:'Almarai',Helvetica]`}
                />
                <Search className={`absolute ${direction === "rtl" ? "right-5" : "left-5"} top-1/2 -translate-y-1/2 w-6 h-6 text-green-700`} />
              </div>

              {!hasPageResults && !hasApiResults && !apiLoading && (
                <p className="text-center text-neutral-500 dark:text-neutral-400 text-lg [font-family:'Almarai',Helvetica] py-12">
                  {language === "ar" ? "لا توجد نتائج" : "No results found"}
                </p>
              )}

              {(["portal", "management", "engineering"] as const).map((cat) =>
                grouped[cat] ? (
                  <div key={cat} className="mb-8">
                    <h3 className="text-sm font-bold text-green-700 dark:text-green-500 uppercase tracking-wider mb-3 [font-family:'Almarai',Helvetica]">
                      {language === "ar" ? categoryLabels[cat].ar : categoryLabels[cat].en}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {grouped[cat].map((page) => (
                        <Link key={page.href} href={page.href}>
                          <span
                            onClick={onClose}
                            className="block px-4 py-3 rounded-xl text-base font-medium text-neutral-700 dark:text-neutral-200 hover:bg-green-50 dark:hover:bg-green-900/20 hover:text-green-700 dark:hover:text-green-400 transition-colors cursor-pointer [font-family:'Almarai',Helvetica]"
                          >
                            {language === "ar" ? page.labelAr : page.labelEn}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null
              )}

              {apiLoading && query.trim().length >= 2 && (
                <div className="flex items-center justify-center gap-2 py-6 text-neutral-500 dark:text-neutral-400">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span className="text-sm [font-family:'Almarai',Helvetica]">
                    {language === "ar" ? "جاري البحث في المحتوى..." : "Searching content..."}
                  </span>
                </div>
              )}

              {hasApiResults && (
                <div className="mt-4">
                  <h3 className="text-sm font-bold text-neutral-600 dark:text-neutral-300 uppercase tracking-wider mb-4 [font-family:'Almarai',Helvetica] border-t border-neutral-200 dark:border-neutral-800 pt-6">
                    {language === "ar" ? "المحتوى" : "Content Results"}
                  </h3>

                  {apiResults.news.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-xs font-bold text-green-600 dark:text-green-400 uppercase tracking-wider mb-2 [font-family:'Almarai',Helvetica]">
                        {language === "ar" ? "الأخبار" : "News"}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {apiResults.news.map((item) => (
                          <Link key={item.slug} href={`/news/${item.slug}`}>
                            <span
                              onClick={onClose}
                              className="flex items-center gap-2 px-4 py-3 rounded-xl text-base font-medium text-neutral-700 dark:text-neutral-200 hover:bg-green-50 dark:hover:bg-green-900/20 hover:text-green-700 dark:hover:text-green-400 transition-colors cursor-pointer [font-family:'Almarai',Helvetica]"
                            >
                              <span className="shrink-0 px-2 py-0.5 text-[10px] font-bold rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400">
                                {language === "ar" ? "خبر" : "News"}
                              </span>
                              <span className="truncate">{language === "ar" ? item.titleAr : (item.titleEn || item.titleAr)}</span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {apiResults.faculty.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2 [font-family:'Almarai',Helvetica]">
                        {language === "ar" ? "أعضاء هيئة التدريس" : "Faculty"}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {apiResults.faculty.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 px-4 py-3 rounded-xl text-base font-medium text-neutral-700 dark:text-neutral-200 [font-family:'Almarai',Helvetica]"
                          >
                            <span className="shrink-0 px-2 py-0.5 text-[10px] font-bold rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400">
                              {language === "ar" ? "عضو" : "Faculty"}
                            </span>
                            <span className="truncate">{language === "ar" ? item.nameAr : item.nameEn}</span>
                            {item.departmentName && (
                              <span className="shrink-0 text-xs text-neutral-400 dark:text-neutral-500">
                                — {item.departmentName}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {apiResults.departments.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-2 [font-family:'Almarai',Helvetica]">
                        {language === "ar" ? "الأقسام" : "Departments"}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {apiResults.departments.map((item, idx) => (
                          <Link key={idx} href="/academic">
                            <span
                              onClick={onClose}
                              className="flex items-center gap-2 px-4 py-3 rounded-xl text-base font-medium text-neutral-700 dark:text-neutral-200 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-700 dark:hover:text-purple-400 transition-colors cursor-pointer [font-family:'Almarai',Helvetica]"
                            >
                              <span className="shrink-0 px-2 py-0.5 text-[10px] font-bold rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-400">
                                {language === "ar" ? "قسم" : "Dept"}
                              </span>
                              <span className="truncate">{language === "ar" ? item.nameAr : item.nameEn}</span>
                              {item.institute && (
                                <span className="shrink-0 text-xs text-neutral-400 dark:text-neutral-500">
                                  — {language === "ar" ? (instituteLabels[item.institute]?.ar || item.institute) : (instituteLabels[item.institute]?.en || item.institute)}
                                </span>
                              )}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {apiResults.events.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-2 [font-family:'Almarai',Helvetica]">
                        {language === "ar" ? "الفعاليات" : "Events"}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {apiResults.events.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 px-4 py-3 rounded-xl text-base font-medium text-neutral-700 dark:text-neutral-200 [font-family:'Almarai',Helvetica]"
                          >
                            <span className="shrink-0 px-2 py-0.5 text-[10px] font-bold rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400">
                              {language === "ar" ? "فعالية" : "Event"}
                            </span>
                            <span className="truncate">{language === "ar" ? item.titleAr : (item.titleEn || item.titleAr)}</span>
                            {item.location && (
                              <span className="shrink-0 text-xs text-neutral-400 dark:text-neutral-500">
                                — {item.location}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {apiResults.research.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-2 [font-family:'Almarai',Helvetica]">
                        {language === "ar" ? "البحث العلمي" : "Research"}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {apiResults.research.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 px-4 py-3 rounded-xl text-base font-medium text-neutral-700 dark:text-neutral-200 [font-family:'Almarai',Helvetica]"
                          >
                            <span className="shrink-0 px-2 py-0.5 text-[10px] font-bold rounded-full bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-400">
                              {language === "ar" ? "بحث" : "Research"}
                            </span>
                            <span className="truncate">{language === "ar" ? item.titleAr : (item.titleEn || item.titleAr)}</span>
                            {item.journal && (
                              <span className="shrink-0 text-xs text-neutral-400 dark:text-neutral-500">
                                — {item.journal}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {apiResults.library.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider mb-2 [font-family:'Almarai',Helvetica]">
                        {language === "ar" ? "المكتبة" : "Library"}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {apiResults.library.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 px-4 py-3 rounded-xl text-base font-medium text-neutral-700 dark:text-neutral-200 [font-family:'Almarai',Helvetica]"
                          >
                            <span className="shrink-0 px-2 py-0.5 text-[10px] font-bold rounded-full bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-400">
                              {language === "ar" ? "كتاب" : item.type || "Book"}
                            </span>
                            <span className="truncate">{language === "ar" ? item.titleAr : (item.titleEn || item.titleAr)}</span>
                            {(item.authorEn || item.authorAr) && (
                              <span className="shrink-0 text-xs text-neutral-400 dark:text-neutral-500">
                                — {language === "ar" ? (item.authorAr || item.authorEn) : (item.authorEn || item.authorAr)}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
