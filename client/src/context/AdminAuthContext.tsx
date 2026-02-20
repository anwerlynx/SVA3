import { createContext, useContext, useState, type ReactNode } from "react";

export type AdminRole =
    | "super_admin"
    | "admin"
    | "content_editor"
    | "faculty_manager"
    | "student_affairs"
    | "library_manager"
    | "analytics_viewer";

export interface AdminUser {
    id: string;
    name: string;
    nameAr: string;
    email: string;
    role: AdminRole;
    avatar?: string;
}

interface AdminAuthContextType {
    admin: AdminUser | null;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
    hasPermission: (permission: Permission) => boolean;
}

// ── Permissions ───────────────────────────────────────────────────────────────
export type Permission =
    | "view_dashboard"
    | "view_analytics"
    | "manage_content"
    | "manage_news"
    | "manage_media"
    | "manage_faculty"
    | "manage_departments"
    | "manage_students"
    | "manage_library"
    | "manage_activities"
    | "manage_users"
    | "manage_settings"
    | "manage_system"
    | "view_logs";

const ROLE_PERMISSIONS: Record<AdminRole, Permission[]> = {
    super_admin: [
        "view_dashboard", "view_analytics", "manage_content", "manage_news",
        "manage_media", "manage_faculty", "manage_departments", "manage_students",
        "manage_library", "manage_activities", "manage_users", "manage_settings",
        "manage_system", "view_logs",
    ],
    admin: [
        "view_dashboard", "view_analytics", "manage_content", "manage_news",
        "manage_media", "manage_faculty", "manage_departments", "manage_students",
        "manage_library", "manage_activities", "view_logs",
    ],
    content_editor: [
        "view_dashboard", "manage_content", "manage_news", "manage_media",
    ],
    faculty_manager: [
        "view_dashboard", "manage_faculty", "manage_departments",
    ],
    student_affairs: [
        "view_dashboard", "manage_students", "manage_activities",
    ],
    library_manager: [
        "view_dashboard", "manage_library",
    ],
    analytics_viewer: [
        "view_dashboard", "view_analytics", "view_logs",
    ],
};

// ── Demo Accounts ─────────────────────────────────────────────────────────────
const DEMO_ACCOUNTS: Array<AdminUser & { password: string }> = [
    {
        id: "1", name: "Super Admin", nameAr: "المدير العام",
        email: "admin@sva.edu.eg", password: "admin123",
        role: "super_admin",
    },
    {
        id: "2", name: "Admin", nameAr: "مدير",
        email: "manager@sva.edu.eg", password: "manager123",
        role: "admin",
    },
    {
        id: "3", name: "Content Editor", nameAr: "محرر المحتوى",
        email: "editor@sva.edu.eg", password: "editor123",
        role: "content_editor",
    },
    {
        id: "4", name: "Faculty Manager", nameAr: "مدير هيئة التدريس",
        email: "faculty@sva.edu.eg", password: "faculty123",
        role: "faculty_manager",
    },
    {
        id: "5", name: "Student Affairs", nameAr: "شؤون الطلاب",
        email: "students@sva.edu.eg", password: "students123",
        role: "student_affairs",
    },
    {
        id: "6", name: "Library Manager", nameAr: "أمين المكتبة",
        email: "library@sva.edu.eg", password: "library123",
        role: "library_manager",
    },
    {
        id: "7", name: "Analytics Viewer", nameAr: "مشاهد الإحصائيات",
        email: "analytics@sva.edu.eg", password: "analytics123",
        role: "analytics_viewer",
    },
];

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

export function AdminAuthProvider({ children }: { children: ReactNode }) {
    const [admin, setAdmin] = useState<AdminUser | null>(() => {
        try {
            const stored = localStorage.getItem("admin_user");
            return stored ? JSON.parse(stored) : null;
        } catch {
            return null;
        }
    });

    const isAuthenticated = admin !== null;

    const login = async (email: string, password: string): Promise<boolean> => {
        // Simulate network delay
        await new Promise(r => setTimeout(r, 600));
        const account = DEMO_ACCOUNTS.find(
            a => a.email.toLowerCase() === email.toLowerCase() && a.password === password
        );
        if (account) {
            const { password: _, ...user } = account;
            setAdmin(user);
            localStorage.setItem("admin_user", JSON.stringify(user));
            return true;
        }
        return false;
    };

    const logout = () => {
        setAdmin(null);
        localStorage.removeItem("admin_user");
    };

    const hasPermission = (permission: Permission): boolean => {
        if (!admin) return false;
        return ROLE_PERMISSIONS[admin.role]?.includes(permission) ?? false;
    };

    return (
        <AdminAuthContext.Provider value={{ admin, isAuthenticated, login, logout, hasPermission }}>
            {children}
        </AdminAuthContext.Provider>
    );
}

export function useAdminAuth() {
    const ctx = useContext(AdminAuthContext);
    if (!ctx) throw new Error("useAdminAuth must be used within AdminAuthProvider");
    return ctx;
}
