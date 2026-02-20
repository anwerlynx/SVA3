import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, Home, Globe, ChevronDown } from "lucide-react";
import { ToggleTheme } from "@/components/ui/toggle-theme";
import { useLanguage } from "@/context/LanguageContext";
import type { NavGroup } from "@/lib/instituteConfig";

interface NavLink {
  label: string;
  key?: string;
  href: string;
}

interface InstituteNavbarProps {
  links: NavLink[];
  navGroups?: NavGroup[];
  accentColor: string;
  accentHover: string;
  instituteName: string;
  instituteNameKey?: string;
  basePath: string;
}

export function InstituteNavbar({ links, navGroups, accentColor, accentHover, instituteName, instituteNameKey, basePath }: InstituteNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [location] = useLocation();
  const { t, language, direction, toggleLanguage } = useLanguage();
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const translatedName = instituteNameKey ? t(instituteNameKey as any) : instituteName;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsSearchOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const handleMouseEnter = (key: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const isChildActive = (group: NavGroup) => {
    if (group.children) {
      return group.children.some(child => location === child.href);
    }
    return false;
  };

  const renderDesktopNav = () => {
    if (!navGroups) {
      return (
        <div className="hidden lg:flex items-center gap-0.5">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                data-testid={`link-nav-${link.key || link.label}`}
                className={`px-3 py-2 rounded-full text-[13px] font-medium transition-all cursor-pointer [font-family:'Almarai',Helvetica] whitespace-nowrap ${location === link.href
                  ? scrolled
                    ? `${accentColor} text-white`
                    : "bg-white/20 text-white"
                  : scrolled
                    ? "text-neutral-700 dark:text-neutral-200 hover:bg-gray-100 dark:hover:bg-neutral-800"
                    : "text-white/90 hover:bg-white/10"
                  }`}
              >
                {link.key ? t(link.key as any) : link.label}
              </span>
            </Link>
          ))}
        </div>
      );
    }

    return (
      <div className="hidden lg:flex items-center gap-0.5">
        {navGroups.map((group) => {
          if (group.href && !group.children) {
            return (
              <Link key={group.key} href={group.href}>
                <span
                  data-testid={`link-nav-${group.key}`}
                  className={`px-3 py-2 rounded-full text-[13px] font-medium transition-all cursor-pointer [font-family:'Almarai',Helvetica] whitespace-nowrap ${location === group.href
                    ? scrolled
                      ? `${accentColor} text-white`
                      : "bg-white/20 text-white"
                    : scrolled
                      ? "text-neutral-700 dark:text-neutral-200 hover:bg-gray-100 dark:hover:bg-neutral-800"
                      : "text-white/90 hover:bg-white/10"
                    }`}
                >
                  {t(group.key as any)}
                </span>
              </Link>
            );
          }

          return (
            <div
              key={group.key}
              className="relative"
              onMouseEnter={() => handleMouseEnter(group.key)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                data-testid={`dropdown-nav-${group.key}`}
                className={`flex items-center gap-1 px-3 py-2 rounded-full text-[13px] font-medium transition-all cursor-pointer [font-family:'Almarai',Helvetica] whitespace-nowrap ${isChildActive(group)
                  ? scrolled
                    ? `${accentColor} text-white`
                    : "bg-white/20 text-white"
                  : scrolled
                    ? "text-neutral-700 dark:text-neutral-200 hover:bg-gray-100 dark:hover:bg-neutral-800"
                    : "text-white/90 hover:bg-white/10"
                  }`}
              >
                {t(group.key as any)}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === group.key ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === group.key && group.children && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute top-full ${direction === 'rtl' ? 'right-0' : 'left-0'} mt-1 min-w-[220px] bg-white dark:bg-neutral-900 rounded-xl shadow-lg shadow-black/10 dark:shadow-black/30 border border-gray-100 dark:border-neutral-800 py-2 z-50`}
                  >
                    {group.children.map((child) => (
                      <Link key={child.href} href={child.href}>
                        <span
                          data-testid={`link-dropdown-${child.key}`}
                          className={`block px-4 py-2.5 text-[13px] font-medium transition-all cursor-pointer [font-family:'Almarai',Helvetica] ${location === child.href
                            ? `${accentColor} text-white mx-2 rounded-lg`
                            : "text-neutral-700 dark:text-neutral-200 hover:bg-gray-50 dark:hover:bg-neutral-800"
                            }`}
                        >
                          {t(child.key as any)}
                        </span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    );
  };

  const renderMobileNav = () => {
    if (!navGroups) {
      return links.map((link) => (
        <Link key={link.href} href={link.href}>
          <span
            className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors cursor-pointer [font-family:'Almarai',Helvetica] ${location === link.href
              ? `${accentColor} text-white`
              : "text-neutral-700 dark:text-neutral-200 hover:bg-gray-100 dark:hover:bg-neutral-800"
              }`}
          >
            {link.key ? t(link.key as any) : link.label}
          </span>
        </Link>
      ));
    }

    return navGroups.map((group) => {
      if (group.href && !group.children) {
        return (
          <Link key={group.key} href={group.href}>
            <span
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors cursor-pointer [font-family:'Almarai',Helvetica] ${location === group.href
                ? `${accentColor} text-white`
                : "text-neutral-700 dark:text-neutral-200 hover:bg-gray-100 dark:hover:bg-neutral-800"
                }`}
            >
              {t(group.key as any)}
            </span>
          </Link>
        );
      }

      return (
        <div key={group.key} className="space-y-1">
          <span className={`block px-4 py-2 text-sm font-bold [font-family:'Almarai',Helvetica] ${scrolled ? "text-neutral-400 dark:text-neutral-500" : "text-neutral-400 dark:text-neutral-500"}`}>
            {t(group.key as any)}
          </span>
          {group.children?.map((child) => (
            <Link key={child.href} href={child.href}>
              <span
                className={`block px-8 py-2.5 rounded-xl text-[15px] font-medium transition-colors cursor-pointer [font-family:'Almarai',Helvetica] ${location === child.href
                  ? `${accentColor} text-white`
                  : "text-neutral-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800"
                  }`}
              >
                {t(child.key as any)}
              </span>
            </Link>
          ))}
        </div>
      );
    });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${scrolled ? "bg-white/80 dark:bg-black/90 backdrop-blur-xl border-b border-gray-200/50 dark:border-white/10 shadow-sm" : "bg-transparent"
        }`}
      dir={direction}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">

          <Link href={basePath}>
            <img
              className="h-12 md:h-14 object-contain cursor-pointer"
              alt={translatedName}
              src="/figmaAssets/1-7.png"
              data-testid="img-logo"
            />
          </Link>

          {renderDesktopNav()}

          <div className="flex items-center gap-2">
            <Link href="/">
              <span
                className={`hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer [font-family:'Almarai',Helvetica] ${scrolled
                  ? "text-neutral-500 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 border border-gray-200 dark:border-neutral-700"
                  : "text-white/70 hover:bg-white/10 border border-white/20"
                  }`}
                data-testid="link-back-portal"
              >
                <Home className="w-3.5 h-3.5" />
                {t("portal")}
              </span>
            </Link>

            <button
              onClick={toggleLanguage}
              className={`hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full transition-colors text-xs font-medium [font-family:'Almarai',Helvetica] ${scrolled
                ? "text-neutral-900 dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800"
                : "text-white hover:bg-white/10"
                }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'English' : 'العربية'}</span>
            </button>

            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={`p-2 rounded-full transition-colors ${scrolled
                ? "text-neutral-900 dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800"
                : "text-white hover:bg-white/10"
                }`}
              data-testid="button-search-toggle"
            >
              <Search className="w-5 h-5" />
            </button>
            <ToggleTheme
              className={`transition-colors ${scrolled
                ? "text-neutral-900 dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800"
                : "text-white hover:bg-white/10"
                }`}
              animationType="circle-spread"
            />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-full transition-colors ${scrolled
                ? "text-neutral-900 dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800"
                : "text-white hover:bg-white/10"
                }`}
              data-testid="button-mobile-menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-white dark:bg-neutral-900 border-b dark:border-neutral-800 shadow-lg"
          >
            <div className="max-w-[800px] mx-auto px-4 py-4">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t("search_placeholder")}
                  className={`w-full px-6 py-3 ${direction === 'rtl' ? 'pr-12 pl-6' : 'pl-12 pr-6'} rounded-full border-2 focus:outline-none focus:ring-2 text-start [font-family:'Almarai',Helvetica] bg-white dark:bg-neutral-800 dark:text-white`}
                  style={{ borderColor: accentColor === "bg-green-700" ? "#15803d" : "#1d4ed8" }}
                  autoFocus
                  data-testid="input-search"
                />
                <Search className={`absolute ${direction === 'rtl' ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400`} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-white dark:bg-neutral-900 border-b dark:border-neutral-800 shadow-lg"
          >
            <div className="px-4 py-4 flex flex-col gap-2 max-h-[70vh] overflow-y-auto">
              {renderMobileNav()}
              <div className="border-t border-gray-100 dark:border-neutral-800 mt-2 pt-2">
                <button
                  onClick={toggleLanguage}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors cursor-pointer [font-family:'Almarai',Helvetica] text-neutral-700 dark:text-neutral-200 hover:bg-gray-100 dark:hover:bg-neutral-800"
                >
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5" />
                    <span>{t("toggle_lang")}</span>
                  </div>
                </button>
                <Link href="/">
                  <span className="block px-4 py-3 rounded-xl text-base font-medium text-neutral-400 dark:text-neutral-500 hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer [font-family:'Almarai',Helvetica] flex items-center gap-2">
                    <Home className="w-4 h-4" />
                    {t("back_to_portal")}
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
