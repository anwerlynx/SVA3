import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
    LayoutDashboard, FileText, Home, Users, BookOpen, Newspaper,
    GraduationCap, Library, Activity, Image, Search, Shield,
    BarChart3, Settings, ChevronDown, ChevronRight, Menu,
    Bell, LogOut, Moon, Sun, Globe, Building2,
    Calendar, FlaskConical, BookMarked, Database, Zap, Eye,
    Languages, ChevronLeft
} from "lucide-react";
import { useAdminAuth } from "@/context/AdminAuthContext";
import { useAdminTheme } from "@/context/AdminThemeContext";

// ── Nav Structure ─────────────────────────────────────────────────────────────
interface NavChild { labelKey: string; href: string }
interface NavItem {
    labelKey: string;
    icon: React.ElementType;
    href?: string;
    badge?: number;
    children?: NavChild[];
    permission?: string;
}
interface NavGroup { groupKey: string; items: NavItem[] }

const NAV_GROUPS: NavGroup[] = [
    {
        groupKey: "overview",
        items: [
            { labelKey: "dashboard", icon: LayoutDashboard, href: "/admin" },
            { labelKey: "analytics", icon: BarChart3, href: "/admin/analytics" },
        ],
    },
    {
        groupKey: "content",
        items: [
            {
                labelKey: "content_manager", icon: FileText,
                children: [
                    { labelKey: "all_pages", href: "/admin/pages" },
                    { labelKey: "page_builder", href: "/admin/pages/builder" },
                ],
            },
            {
                labelKey: "homepage", icon: Home,
                children: [
                    { labelKey: "hero_section", href: "/admin/homepage/hero" },
                    { labelKey: "statistics", href: "/admin/homepage/stats" },
                    { labelKey: "announcements", href: "/admin/homepage/announcements" },
                    { labelKey: "featured_content", href: "/admin/homepage/featured" },
                ],
            },
            {
                labelKey: "news_events", icon: Newspaper,
                children: [
                    { labelKey: "all_articles", href: "/admin/news" },
                    { labelKey: "new_article", href: "/admin/news/new" },
                    { labelKey: "events", href: "/admin/events" },
                    { labelKey: "categories", href: "/admin/news/categories" },
                ],
            },
            { labelKey: "media_manager", icon: Image, href: "/admin/media" },
        ],
    },
    {
        groupKey: "academic",
        items: [
            {
                labelKey: "departments", icon: Building2,
                children: [
                    { labelKey: "all_departments", href: "/admin/departments" },
                    { labelKey: "add_department", href: "/admin/departments/new" },
                    { labelKey: "courses", href: "/admin/courses" },
                ],
            },
            {
                labelKey: "faculty", icon: Users,
                children: [
                    { labelKey: "all_members", href: "/admin/faculty" },
                    { labelKey: "add_member", href: "/admin/faculty/new" },
                ],
            },
            {
                labelKey: "academic_system", icon: GraduationCap,
                children: [
                    { labelKey: "schedules", href: "/admin/academic/schedules" },
                    { labelKey: "academic_calendar", href: "/admin/academic/calendar" },
                    { labelKey: "course_catalog", href: "/admin/academic/courses" },
                ],
            },
            {
                labelKey: "research", icon: FlaskConical,
                children: [
                    { labelKey: "publications", href: "/admin/research" },
                    { labelKey: "projects", href: "/admin/research/projects" },
                ],
            },
        ],
    },
    {
        groupKey: "students",
        items: [
            {
                labelKey: "student_affairs", icon: BookOpen,
                children: [
                    { labelKey: "admissions", href: "/admin/students/admissions" },
                    { labelKey: "scholarships", href: "/admin/students/scholarships" },
                    { labelKey: "faqs", href: "/admin/students/faqs" },
                    { labelKey: "announcements", href: "/admin/students/announcements" },
                ],
            },
            {
                labelKey: "library", icon: Library,
                children: [
                    { labelKey: "books", href: "/admin/library/books" },
                    { labelKey: "digital_resources", href: "/admin/library/digital" },
                    { labelKey: "databases", href: "/admin/library/databases" },
                ],
            },
            {
                labelKey: "activities", icon: Activity,
                children: [
                    { labelKey: "student_clubs", href: "/admin/activities" },
                    { labelKey: "events", href: "/admin/activities/events" },
                    { labelKey: "sports", href: "/admin/activities/sports" },
                ],
            },
        ],
    },
    {
        groupKey: "system",
        items: [
            {
                labelKey: "users_roles", icon: Shield,
                children: [
                    { labelKey: "all_users", href: "/admin/users" },
                    { labelKey: "roles_permissions", href: "/admin/users/roles" },
                    { labelKey: "activity_logs", href: "/admin/users/logs" },
                ],
            },
            {
                labelKey: "seo_settings", icon: Search,
                children: [
                    { labelKey: "global_seo", href: "/admin/seo" },
                    { labelKey: "site_settings", href: "/admin/settings" },
                    { labelKey: "contact_info", href: "/admin/settings/contact" },
                    { labelKey: "email_templates", href: "/admin/settings/email" },
                ],
            },
            {
                labelKey: "system", icon: Database,
                children: [
                    { labelKey: "system_health", href: "/admin/system/health" },
                    { labelKey: "backup_export", href: "/admin/system/backup" },
                    { labelKey: "error_logs", href: "/admin/system/logs" },
                    { labelKey: "feature_flags", href: "/admin/system/flags" },
                ],
            },
        ],
    },
];

// ── NavItem Component ─────────────────────────────────────────────────────────
function NavItemRow({
    item, collapsed, location, t, dir
}: {
    item: NavItem;
    collapsed: boolean;
    location: string;
    t: (k: string) => string;
    dir: "rtl" | "ltr";
}) {
    const isChildActive = item.children?.some(c => location === c.href || location.startsWith(c.href));
    const isActive = item.href
        ? location === item.href
        : isChildActive;

    const [open, setOpen] = useState(() => !!isChildActive);

    if (item.href) {
        return (
            <Link href={item.href}>
                <div
                    title={collapsed ? t(item.labelKey) : undefined}
                    className={`
            flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer transition-all group
            ${isActive
                            ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                            : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
                        }
          `}
                >
                    <item.icon className="w-[17px] h-[17px] flex-shrink-0" />
                    {!collapsed && (
                        <span className="text-[13px] font-medium truncate flex-1">{t(item.labelKey)}</span>
                    )}
                    {!collapsed && item.badge != null && item.badge > 0 && (
                        <span className="text-[10px] px-1.5 py-0.5 bg-red-500 text-white rounded-full font-bold leading-none">
                            {item.badge}
                        </span>
                    )}
                </div>
            </Link>
        );
    }

    return (
        <div>
            <button
                onClick={() => setOpen(o => !o)}
                title={collapsed ? t(item.labelKey) : undefined}
                className={`
          w-full flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer transition-all
          ${isActive
                        ? "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white"
                        : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
                    }
        `}
            >
                <item.icon className="w-[17px] h-[17px] flex-shrink-0" />
                {!collapsed && (
                    <>
                        <span className="text-[13px] font-medium flex-1 text-left truncate">{t(item.labelKey)}</span>
                        {open
                            ? <ChevronDown className="w-3.5 h-3.5 flex-shrink-0 opacity-50" />
                            : <ChevronRight className="w-3.5 h-3.5 flex-shrink-0 opacity-50" />
                        }
                    </>
                )}
            </button>

            <AnimatePresence initial={false}>
                {open && !collapsed && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.18, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className={`mt-0.5 pb-1 flex flex-col gap-0.5 border-s border-slate-200 dark:border-slate-800 ${dir === "rtl" ? "mr-[22px] pr-3" : "ml-[22px] pl-3"}`}>
                            {item.children?.map(child => {
                                const childActive = location === child.href;
                                return (
                                    <Link key={child.href} href={child.href}>
                                        <div className={`
                      px-3 py-1.5 rounded-lg text-[12.5px] cursor-pointer transition-all
                      ${childActive
                                                ? "text-indigo-600 dark:text-indigo-400 font-semibold bg-indigo-50 dark:bg-indigo-500/10"
                                                : "text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60"
                                            }
                    `}>
                                            {t(child.labelKey)}
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// ── Role Badge ────────────────────────────────────────────────────────────────
const ROLE_COLORS: Record<string, string> = {
    super_admin: "bg-violet-500/10 text-violet-500 dark:text-violet-400",
    admin: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    content_editor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    faculty_manager: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    student_affairs: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
    library_manager: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
    analytics_viewer: "bg-slate-500/10 text-slate-600 dark:text-slate-400",
};

// ── Main Layout ───────────────────────────────────────────────────────────────
export function AdminLayout({ children }: { children: React.ReactNode }) {
    const [collapsed, setCollapsed] = useState(false);
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
    const { admin, logout } = useAdminAuth();
    const { theme, toggleTheme, lang, toggleLang, dir, t } = useAdminTheme();
    const [location] = useLocation();

    // Breadcrumb
    const crumbs = location.replace("/admin", "").split("/").filter(Boolean);

    const sidebarWidth = collapsed ? 64 : 240;

    return (
        <div
            className={`flex h-screen overflow-hidden font-sans ${theme === "dark" ? "dark" : ""}`}
            dir={dir}
            style={{ fontFamily: lang === "ar" ? "'Cairo', sans-serif" : "'Inter', sans-serif" }}
        >
            {/* ── Background ── */}
            <div className="absolute inset-0 bg-slate-50 dark:bg-[#0a0a0f] transition-colors duration-300" />

            {/* ── Mobile Overlay ── */}
            {mobileSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
                    onClick={() => setMobileSidebarOpen(false)}
                />
            )}

            {/* ── Sidebar ── */}
            <motion.aside
                animate={{ width: sidebarWidth }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className={`
          relative z-50 h-full flex flex-col flex-shrink-0
          bg-white dark:bg-[#111118] border-e border-slate-200 dark:border-slate-800/80
          shadow-sm dark:shadow-none
          ${mobileSidebarOpen ? "translate-x-0" : dir === "rtl" ? "translate-x-full lg:translate-x-0" : "-translate-x-full lg:translate-x-0"}
          fixed lg:relative transition-transform lg:transition-none
        `}
                style={{ minWidth: sidebarWidth, maxWidth: sidebarWidth }}
            >
                {/* Logo */}
                <div className={`flex items-center gap-3 px-4 py-4 border-b border-slate-100 dark:border-slate-800/80 flex-shrink-0 ${collapsed ? "justify-center" : ""}`}>
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-500/30">
                        <GraduationCap className="w-4 h-4 text-white" />
                    </div>
                    {!collapsed && (
                        <div className="overflow-hidden min-w-0">
                            <p className="text-[13px] font-bold text-slate-900 dark:text-white leading-tight truncate">
                                {lang === "ar" ? "لوحة تحكم SVA" : "SVA Admin"}
                            </p>
                            <p className="text-[10px] text-slate-400 leading-tight truncate">
                                {lang === "ar" ? "لوحة الإدارة" : "Control Panel"}
                            </p>
                        </div>
                    )}
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto py-3 px-2 flex flex-col gap-5 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-800">
                    {NAV_GROUPS.map((group, gi) => (
                        <div key={gi}>
                            {!collapsed && (
                                <p className="text-[10px] font-semibold text-slate-400 dark:text-slate-600 uppercase tracking-widest px-3 mb-1.5">
                                    {t(group.groupKey)}
                                </p>
                            )}
                            <div className="flex flex-col gap-0.5">
                                {NAV_GROUPS[gi].items.map((item, ii) => (
                                    <NavItemRow
                                        key={ii}
                                        item={item}
                                        collapsed={collapsed}
                                        location={location}
                                        t={t}
                                        dir={dir}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </nav>

                {/* Collapse Button */}
                <div className="px-2 py-2 border-t border-slate-100 dark:border-slate-800/80 flex-shrink-0">
                    <button
                        onClick={() => setCollapsed(c => !c)}
                        className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-400 hover:text-slate-700 dark:hover:text-white"
                        title={collapsed ? t("expand") : t("collapse")}
                    >
                        {dir === "rtl"
                            ? (collapsed ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />)
                            : (collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />)
                        }
                        {!collapsed && <span className="text-[11px]">{t("collapse")}</span>}
                    </button>
                </div>

                {/* User Footer */}
                <div className={`p-3 border-t border-slate-100 dark:border-slate-800/80 flex-shrink-0 ${collapsed ? "flex justify-center" : ""}`}>
                    {!collapsed ? (
                        <div className="flex items-center gap-2.5 px-2 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer group">
                            {/* Avatar */}
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-[12px] font-bold text-white flex-shrink-0">
                                {admin?.name?.charAt(0) ?? "A"}
                            </div>
                            <div className="flex-1 overflow-hidden min-w-0">
                                <p className="text-[12px] font-semibold text-slate-900 dark:text-white truncate">
                                    {lang === "ar" ? (admin as any)?.nameAr ?? admin?.name : admin?.name}
                                </p>
                                <p className={`text-[10px] truncate px-1.5 py-0.5 rounded-full inline-block mt-0.5 ${ROLE_COLORS[admin?.role ?? "admin"]}`}>
                                    {admin?.role?.replace(/_/g, " ")}
                                </p>
                            </div>
                            <button
                                onClick={logout}
                                className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-500/10"
                                title={t("logout")}
                            >
                                <LogOut className="w-3.5 h-3.5 text-slate-400 hover:text-red-500" />
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={logout}
                            className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            title={t("logout")}
                        >
                            <LogOut className="w-4 h-4 text-slate-400 hover:text-red-500" />
                        </button>
                    )}
                </div>
            </motion.aside>

            {/* ── Main Area ── */}
            <div className="relative flex-1 flex flex-col overflow-hidden min-w-0">

                {/* ── Topbar ── */}
                <header className="relative z-10 h-14 flex items-center justify-between px-4 md:px-5 border-b border-slate-200 dark:border-slate-800/80 bg-white/80 dark:bg-[#111118]/80 backdrop-blur-sm flex-shrink-0">
                    {/* Left: hamburger + breadcrumb */}
                    <div className="flex items-center gap-3 min-w-0">
                        <button
                            onClick={() => setMobileSidebarOpen(o => !o)}
                            className="lg:hidden p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500 hover:text-slate-900 dark:hover:text-white"
                        >
                            <Menu className="w-4 h-4" />
                        </button>

                        {/* Breadcrumb */}
                        <nav className="hidden md:flex items-center gap-1.5 text-[12px] text-slate-400 min-w-0">
                            <Link href="/admin">
                                <span className="hover:text-slate-700 dark:hover:text-white transition-colors cursor-pointer font-medium">SVA</span>
                            </Link>
                            {crumbs.map((crumb, i) => (
                                <span key={i} className="flex items-center gap-1.5 min-w-0">
                                    {dir === "rtl"
                                        ? <ChevronLeft className="w-3 h-3 flex-shrink-0" />
                                        : <ChevronRight className="w-3 h-3 flex-shrink-0" />
                                    }
                                    <span className={`truncate ${i === crumbs.length - 1 ? "text-slate-900 dark:text-white font-medium capitalize" : "capitalize hover:text-slate-700 dark:hover:text-white cursor-pointer"}`}>
                                        {crumb.replace(/-/g, " ")}
                                    </span>
                                </span>
                            ))}
                            {crumbs.length === 0 && (
                                <span className="text-slate-900 dark:text-white font-medium">{t("dashboard")}</span>
                            )}
                        </nav>
                    </div>

                    {/* Right: actions */}
                    <div className="flex items-center gap-1">
                        {/* View Site */}
                        <Link href="/">
                            <button className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[12px] text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                                <Eye className="w-3.5 h-3.5" />
                                {t("view_site")}
                            </button>
                        </Link>

                        {/* Language Toggle */}
                        <button
                            onClick={toggleLang}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[12px] text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all font-medium"
                            title="Toggle language"
                        >
                            <Languages className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">{lang === "ar" ? "EN" : "عربي"}</span>
                        </button>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500 hover:text-slate-900 dark:hover:text-white"
                            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                        >
                            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                        </button>

                        {/* Notifications */}
                        <button className="relative p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500 hover:text-slate-900 dark:hover:text-white">
                            <Bell className="w-4 h-4" />
                            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full" />
                        </button>

                        {/* Avatar */}
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-[11px] font-bold text-white cursor-pointer ms-1">
                            {admin?.name?.charAt(0) ?? "A"}
                        </div>
                    </div>
                </header>

                {/* ── Page Content ── */}
                <main className="relative flex-1 overflow-y-auto bg-slate-50 dark:bg-[#0a0a0f] transition-colors duration-300">
                    {children}
                </main>
            </div>
        </div>
    );
}
