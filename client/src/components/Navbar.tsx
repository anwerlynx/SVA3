import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Search, Globe, ChevronDown } from "lucide-react";
import { ToggleTheme } from "@/components/ui/toggle-theme";
import { useLanguage } from "@/context/LanguageContext";
import { SearchModal } from "@/components/SearchModal";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: DropdownItem[];
}

function NavDropdown({ item, textColor, iconBg, isActive, direction }: { item: NavItem; textColor: string; iconBg: string; isActive: boolean; direction: string }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => {
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, []);

  const hasRealHref = item.href && item.href !== "#";

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {hasRealHref ? (
        <Link href={item.href}>
          <span
            onClick={() => setOpen(!open)}
            className={`flex items-center gap-1 px-3 py-2 rounded-full text-sm font-medium transition-all cursor-pointer [font-family:'Almarai',Helvetica] ${isActive ? "bg-green-700 text-white" : `${textColor} ${iconBg}`}`}
          >
            {item.label}
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
          </span>
        </Link>
      ) : (
        <button
          onClick={() => setOpen(!open)}
          className={`flex items-center gap-1 px-3 py-2 rounded-full text-sm font-medium transition-all cursor-pointer [font-family:'Almarai',Helvetica] ${isActive ? "bg-green-700 text-white" : `${textColor} ${iconBg}`}`}
        >
          {item.label}
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
      )}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-full mt-1 ${direction === "rtl" ? "right-0" : "left-0"} bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-gray-200 dark:border-neutral-700 py-2 min-w-[220px] z-50`}
          >
            {item.children!.map((child) => (
              <Link key={child.href} href={child.href}>
                <span
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2.5 text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer [font-family:'Almarai',Helvetica] transition-colors"
                >
                  {child.label}
                </span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [location] = useLocation();
  const { t, language, direction, toggleLanguage } = useLanguage();

  const navItems: NavItem[] = [
    { label: t("home"), href: "/" },
    {
      label: language === "ar" ? "عن المؤسسة" : "About",
      href: "/about",
      children: [
        { label: t("about"), href: "/about" },
        { label: language === "ar" ? "كلمة رئيس مجلس الإدارة" : "Chairman's Word", href: "/chairman-word" },
        { label: language === "ar" ? "رسالة الترحيب" : "Welcome Message", href: "/welcome" },
        { label: language === "ar" ? "الرؤية والرسالة" : "Vision & Mission", href: "/vision-mission" },
        { label: language === "ar" ? "مجلس الإدارة" : "Board of Directors", href: "/board" },
        { label: language === "ar" ? "ميثاق الشرف" : "Honor Charter", href: "/honor-charter" },
        { label: language === "ar" ? "الشركاء" : "Partners", href: "/partners" },
      ],
    },
    {
      label: language === "ar" ? "المعاهد" : "Institutes",
      href: "#",
      children: [
        { label: language === "ar" ? "معهد الهندسة والتكنولوجيا" : "Engineering Institute", href: "/institute/engineering" },
        { label: language === "ar" ? "معهد الإدارة والمالية" : "Management Institute", href: "/institute/management" },
      ],
    },
    {
      label: language === "ar" ? "القبول والخدمات" : "Admission & Services",
      href: "/admission",
      children: [
        { label: language === "ar" ? "القبول المركزي" : "Central Admission", href: "/admission" },
        { label: language === "ar" ? "شروط الالتحاق" : "Enrollment Conditions", href: "/enrollment-conditions" },
        { label: language === "ar" ? "إجراءات القبول" : "Admission Procedures", href: "/admission-procedures" },
        { label: language === "ar" ? "شئون التعليم والطلاب" : "Student Affairs", href: "/student-affairs" },
        { label: language === "ar" ? "نظام تأديب الطالب" : "Student Discipline", href: "/student-discipline" },
        { label: language === "ar" ? "الجودة المركزية" : "Central Quality", href: "/quality" },
        { label: language === "ar" ? "ملفات الجودة" : "Quality Files", href: "/quality-files" },
        { label: language === "ar" ? "حفلات التخرج" : "Graduation Parties", href: "/graduation-parties" },
        { label: language === "ar" ? "الوظائف المتاحة" : "Available Jobs", href: "/available-jobs" },
        { label: language === "ar" ? "الأسئلة الشائعة" : "FAQ", href: "/faq" },
        { label: language === "ar" ? "التقويم الأكاديمي" : "Academic Calendar", href: "/academic-calendar" },
        { label: t("services"), href: "/services" },
      ],
    },
    {
      label: language === "ar" ? "رعاية الشباب" : "Youth Welfare",
      href: "#",
      children: [
        { label: language === "ar" ? "اتحاد الطلاب" : "Student Union", href: "/committees/student-union" },
        { label: language === "ar" ? "النشاط الثقافي" : "Cultural Committee", href: "/committees/cultural" },
        { label: language === "ar" ? "النشاط الرياضي" : "Sports Committee", href: "/committees/sports" },
        { label: language === "ar" ? "النشاط الفني" : "Arts Committee", href: "/committees/arts" },
        { label: language === "ar" ? "النشاط الاجتماعي" : "Social Committee", href: "/committees/social" },
        { label: language === "ar" ? "الجوالة والخدمات العامة" : "Scouts & Public Services", href: "/committees/scouts" },
      ],
    },
    {
      label: language === "ar" ? "المكتبة" : "Library",
      href: "/library",
      children: [
        { label: language === "ar" ? "عن المكتبة" : "About Library", href: "/library/about" },
        { label: language === "ar" ? "بنك المعرفة" : "Knowledge Bank", href: "/library/knowledge-bank" },
        { label: language === "ar" ? "الاستعارة الرقمية" : "Digital Borrowing", href: "/library/digital-borrowing" },
        { label: language === "ar" ? "معرض الصور والفيديو" : "Media Gallery", href: "/media-gallery" },
      ],
    },
    { label: t("news"), href: "/news" },
    { label: t("contact_title"), href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsSearchOpen(false);
    setMobileExpanded(null);
  }, [location]);

  const heroPages = [
    "/", "/about", "/news", "/contact", "/board", "/partners", "/quality", "/admission",
    "/services", "/academic", "/faculty", "/library", "/research", "/community", "/students",
    "/enrollment-conditions", "/student-affairs", "/admission-procedures", "/student-discipline",
    "/quality-files", "/honor-charter", "/chairman-word", "/welcome", "/vision-mission", "/media-gallery",
    "/committees/student-union", "/committees/cultural", "/committees/sports",
    "/committees/arts", "/committees/social", "/committees/scouts",
    "/library/about", "/library/knowledge-bank", "/library/digital-borrowing",
    "/sitemap", "/graduation-parties", "/available-jobs", "/faq", "/academic-calendar",
  ];
  const isHeroPage = heroPages.includes(location);

  const navBg = scrolled
    ? "bg-white dark:bg-neutral-950 border-b border-gray-200 dark:border-neutral-800 shadow-sm"
    : isHeroPage
      ? "bg-transparent"
      : "bg-white dark:bg-neutral-950 border-b border-gray-200 dark:border-neutral-800";

  const textColor = scrolled || !isHeroPage
    ? "text-neutral-800 dark:text-white"
    : "text-white";

  const iconBg = scrolled || !isHeroPage
    ? "hover:bg-gray-100 dark:hover:bg-neutral-800"
    : "hover:bg-white/10";

  const isItemActive = (item: NavItem): boolean => {
    if (location === item.href) return true;
    if (item.children) return item.children.some((c) => location === c.href);
    return false;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
      dir={direction}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/">
            <img
              className="h-12 md:h-14 object-contain cursor-pointer"
              alt={language === "ar" ? "معاهد الوادي العليا" : "Valley Higher Institutes"}
              src="/figmaAssets/1-7.png"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <NavDropdown
                  key={item.label}
                  item={item}
                  textColor={textColor}
                  iconBg={iconBg}
                  isActive={isItemActive(item)}
                  direction={direction}
                />
              ) : (
                <Link key={item.href} href={item.href}>
                  <span
                    className={`px-3 py-2 rounded-full text-sm font-medium transition-all cursor-pointer [font-family:'Almarai',Helvetica] ${location === item.href
                      ? scrolled || !isHeroPage
                        ? "bg-green-700 text-white"
                        : "bg-white/20 text-white"
                      : `${textColor} ${iconBg}`
                      }`}
                  >
                    {item.label}
                  </span>
                </Link>
              )
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all text-sm font-medium [font-family:'Almarai',Helvetica] ${textColor} ${iconBg}`}
              aria-label="Toggle Language"
            >
              <Globe className="w-4 h-4" />
              <span>{language === "ar" ? "EN" : "ع"}</span>
            </button>

            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={`p-2 rounded-full transition-all ${textColor} ${iconBg}`}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <ToggleTheme
              className={`transition-all rounded-full ${textColor} ${iconBg}`}
              animationType="circle-spread"
            />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-full transition-all ${textColor} ${iconBg}`}
              aria-label="Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-white dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-800 shadow-lg"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors cursor-pointer [font-family:'Almarai',Helvetica] ${isItemActive(item)
                        ? "bg-green-700 text-white"
                        : "text-neutral-700 dark:text-neutral-200 hover:bg-gray-100 dark:hover:bg-neutral-800"
                        }`}
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {mobileExpanded === item.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className={`${direction === "rtl" ? "pr-6" : "pl-6"} py-1`}>
                            {item.children.map((child) => (
                              <Link key={child.href} href={child.href}>
                                <span className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-pointer [font-family:'Almarai',Helvetica] ${location === child.href
                                  ? "text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/20"
                                  : "text-neutral-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800"
                                  }`}>
                                  {child.label}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link key={item.href} href={item.href}>
                    <span
                      className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors cursor-pointer [font-family:'Almarai',Helvetica] ${location === item.href
                        ? "bg-green-700 text-white"
                        : "text-neutral-700 dark:text-neutral-200 hover:bg-gray-100 dark:hover:bg-neutral-800"
                        }`}
                    >
                      {item.label}
                    </span>
                  </Link>
                )
              )}
              <button
                onClick={toggleLanguage}
                className="w-full flex items-center gap-2 px-4 py-3 rounded-xl text-base font-medium transition-colors cursor-pointer [font-family:'Almarai',Helvetica] text-neutral-700 dark:text-neutral-200 hover:bg-gray-100 dark:hover:bg-neutral-800"
              >
                <Globe className="w-5 h-5" />
                <span>{t("toggle_lang")}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
