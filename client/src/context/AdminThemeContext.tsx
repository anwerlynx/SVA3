import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "dark" | "light";
type AdminLang = "ar" | "en";

interface AdminThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (t: Theme) => void;
    lang: AdminLang;
    toggleLang: () => void;
    setLang: (l: AdminLang) => void;
    dir: "rtl" | "ltr";
    t: (key: string) => string;
}

// ── Admin UI Translations ─────────────────────────────────────────────────────
const adminTranslations: Record<AdminLang, Record<string, string>> = {
    en: {
        dashboard: "Dashboard",
        analytics: "Analytics",
        content: "Content",
        content_manager: "Content Manager",
        homepage: "Homepage",
        news_events: "News & Events",
        media_manager: "Media Manager",
        academic: "Academic",
        departments: "Departments",
        faculty: "Faculty",
        academic_system: "Academic System",
        research: "Research",
        students: "Students",
        student_affairs: "Student Affairs",
        library: "Library",
        activities: "Activities",
        system: "System",
        users_roles: "Users & Roles",
        seo_settings: "SEO & Settings",
        site_settings: "Site Settings",
        overview: "Overview",
        all_pages: "All Pages",
        page_builder: "Page Builder",
        hero_section: "Hero Section",
        statistics: "Statistics",
        announcements: "Announcements",
        featured_content: "Featured Content",
        all_articles: "All Articles",
        new_article: "New Article",
        events: "Events",
        categories: "Categories",
        all_departments: "All Departments",
        add_department: "Add Department",
        courses: "Courses",
        all_members: "All Members",
        add_member: "Add Member",
        schedules: "Schedules",
        academic_calendar: "Academic Calendar",
        course_catalog: "Course Catalog",
        publications: "Publications",
        projects: "Projects",
        admissions: "Admissions",
        scholarships: "Scholarships",
        faqs: "FAQs",
        books: "Books",
        digital_resources: "Digital Resources",
        databases: "Databases",
        student_clubs: "Student Clubs",
        sports: "Sports",
        all_users: "All Users",
        roles_permissions: "Roles & Permissions",
        activity_logs: "Activity Logs",
        global_seo: "Global SEO",
        contact_info: "Contact Info",
        email_templates: "Email Templates",
        contact_messages: "Contact Messages",
        newsletter: "Newsletter",
        system_health: "System Health",
        backup_export: "Backup & Export",
        error_logs: "Error Logs",
        feature_flags: "Feature Flags",
        view_site: "View Site",
        logout: "Logout",
        collapse: "Collapse",
        welcome_back: "Welcome back",
        dashboard_overview: "Dashboard Overview",
        whats_happening: "Here's what's happening with your site.",
        quick_actions: "Quick Actions",
        recent_activity: "Recent Activity",
        pending_tasks: "Pending Tasks",
        visitors_overview: "Visitors Overview",
        last_7_days: "Last 7 days",
        view_all: "View all",
        sign_in: "Sign In",
        sign_in_subtitle: "Sign in to your control panel",
        email_address: "Email Address",
        password: "Password",
        remember_me: "Remember me",
        forgot_password: "Forgot password?",
        signing_in: "Signing in...",
        demo_credentials: "Demo Credentials",
        invalid_credentials: "Invalid email or password. Please try again.",
        search_placeholder: "Search...",
        notifications: "Notifications",
        profile: "Profile",
        save_changes: "Save Changes",
        saved: "Saved!",
        cancel: "Cancel",
        add: "Add",
        edit: "Edit",
        delete: "Delete",
        confirm_delete: "Confirm Delete",
        cannot_undo: "This action cannot be undone.",
        active: "Active",
        inactive: "Inactive",
        draft: "Draft",
        published: "Published",
        archived: "Archived",
        total_visitors: "Total Visitors",
        faculty_members: "Faculty Members",
        published_articles: "Published Articles",
        active_students: "Active Students",
    },
    ar: {
        dashboard: "لوحة التحكم",
        analytics: "الإحصائيات",
        content: "المحتوى",
        content_manager: "إدارة المحتوى",
        homepage: "الصفحة الرئيسية",
        news_events: "الأخبار والفعاليات",
        media_manager: "مدير الوسائط",
        academic: "الأكاديمي",
        departments: "الأقسام",
        faculty: "أعضاء هيئة التدريس",
        academic_system: "النظام الأكاديمي",
        research: "البحث العلمي",
        students: "الطلاب",
        student_affairs: "شؤون الطلاب",
        library: "المكتبة",
        activities: "الأنشطة",
        system: "النظام",
        users_roles: "المستخدمون والصلاحيات",
        seo_settings: "تحسين محركات البحث والإعدادات",
        site_settings: "إعدادات الموقع",
        overview: "نظرة عامة",
        all_pages: "جميع الصفحات",
        page_builder: "منشئ الصفحات",
        hero_section: "قسم الهيرو",
        statistics: "الإحصائيات",
        announcements: "الإعلانات",
        featured_content: "المحتوى المميز",
        all_articles: "جميع المقالات",
        new_article: "مقال جديد",
        events: "الفعاليات",
        categories: "التصنيفات",
        all_departments: "جميع الأقسام",
        add_department: "إضافة قسم",
        courses: "المقررات",
        all_members: "جميع الأعضاء",
        add_member: "إضافة عضو",
        schedules: "الجداول الدراسية",
        academic_calendar: "التقويم الأكاديمي",
        course_catalog: "كتالوج المقررات",
        publications: "المنشورات",
        projects: "المشاريع",
        admissions: "القبول والتسجيل",
        scholarships: "المنح الدراسية",
        faqs: "الأسئلة الشائعة",
        books: "الكتب",
        digital_resources: "الموارد الرقمية",
        databases: "قواعد البيانات",
        student_clubs: "الأندية الطلابية",
        sports: "الرياضة",
        all_users: "جميع المستخدمين",
        roles_permissions: "الأدوار والصلاحيات",
        activity_logs: "سجلات النشاط",
        global_seo: "تحسين محركات البحث",
        contact_info: "معلومات التواصل",
        email_templates: "قوالب البريد الإلكتروني",
        contact_messages: "رسائل التواصل",
        newsletter: "النشرة الإخبارية",
        system_health: "صحة النظام",
        backup_export: "النسخ الاحتياطي والتصدير",
        error_logs: "سجلات الأخطاء",
        feature_flags: "إعدادات الميزات",
        view_site: "عرض الموقع",
        logout: "تسجيل الخروج",
        collapse: "طي القائمة",
        welcome_back: "مرحباً بعودتك",
        dashboard_overview: "نظرة عامة على لوحة التحكم",
        whats_happening: "إليك ما يحدث في موقعك.",
        quick_actions: "إجراءات سريعة",
        recent_activity: "النشاط الأخير",
        pending_tasks: "المهام المعلقة",
        visitors_overview: "نظرة عامة على الزوار",
        last_7_days: "آخر 7 أيام",
        view_all: "عرض الكل",
        sign_in: "تسجيل الدخول",
        sign_in_subtitle: "سجّل دخولك إلى لوحة التحكم",
        email_address: "البريد الإلكتروني",
        password: "كلمة المرور",
        remember_me: "تذكرني",
        forgot_password: "نسيت كلمة المرور؟",
        signing_in: "جارٍ تسجيل الدخول...",
        demo_credentials: "بيانات تجريبية",
        invalid_credentials: "البريد الإلكتروني أو كلمة المرور غير صحيحة.",
        search_placeholder: "بحث...",
        notifications: "الإشعارات",
        profile: "الملف الشخصي",
        save_changes: "حفظ التغييرات",
        saved: "تم الحفظ!",
        cancel: "إلغاء",
        add: "إضافة",
        edit: "تعديل",
        delete: "حذف",
        confirm_delete: "تأكيد الحذف",
        cannot_undo: "لا يمكن التراجع عن هذا الإجراء.",
        active: "نشط",
        inactive: "غير نشط",
        draft: "مسودة",
        published: "منشور",
        archived: "مؤرشف",
        total_visitors: "إجمالي الزوار",
        faculty_members: "أعضاء هيئة التدريس",
        published_articles: "المقالات المنشورة",
        active_students: "الطلاب النشطون",
    },
};

const AdminThemeContext = createContext<AdminThemeContextType | undefined>(undefined);

export function AdminThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setThemeState] = useState<Theme>(() => {
        try {
            const saved = localStorage.getItem("admin_theme");
            if (saved === "dark" || saved === "light") return saved;
            return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        } catch {
            return "dark";
        }
    });

    const [lang, setLangState] = useState<AdminLang>(() => {
        try {
            const saved = localStorage.getItem("admin_lang");
            return saved === "ar" || saved === "en" ? saved : "ar";
        } catch {
            return "ar";
        }
    });

    const dir = lang === "ar" ? "rtl" : "ltr";

    // Apply theme class to <html>
    useEffect(() => {
        const root = document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        localStorage.setItem("admin_theme", theme);
    }, [theme]);

    // Apply direction to <html> when in admin
    useEffect(() => {
        document.documentElement.setAttribute("dir", dir);
        document.documentElement.setAttribute("lang", lang);
        localStorage.setItem("admin_lang", lang);
    }, [lang, dir]);

    const toggleTheme = () => setThemeState(t => t === "dark" ? "light" : "dark");
    const setTheme = (t: Theme) => setThemeState(t);
    const toggleLang = () => setLangState(l => l === "ar" ? "en" : "ar");
    const setLang = (l: AdminLang) => setLangState(l);

    const t = (key: string): string => {
        return adminTranslations[lang][key] ?? key;
    };

    return (
        <AdminThemeContext.Provider value={{ theme, toggleTheme, setTheme, lang, toggleLang, setLang, dir, t }}>
            {children}
        </AdminThemeContext.Provider>
    );
}

export function useAdminTheme() {
    const ctx = useContext(AdminThemeContext);
    if (!ctx) throw new Error("useAdminTheme must be used within AdminThemeProvider");
    return ctx;
}
