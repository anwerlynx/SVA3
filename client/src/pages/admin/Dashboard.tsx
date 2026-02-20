import { AdminLayout } from "./AdminLayout";
import { useAdminTheme } from "@/context/AdminThemeContext";
import { useAdminAuth } from "@/context/AdminAuthContext";
import { motion } from "framer-motion";
import {
    Users, Newspaper, GraduationCap, Eye, TrendingUp, TrendingDown,
    ArrowUpRight, Activity, FileText, Image, Clock, CheckCircle2,
    AlertCircle, BarChart3, Globe, Plus
} from "lucide-react";
import { Link } from "wouter";

const colorMap: Record<string, string> = {
    indigo: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-500/20",
    emerald: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20",
    violet: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-200 dark:border-violet-500/20",
    amber: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-500/20",
};

const priorityColor: Record<string, string> = {
    high: "bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400",
    medium: "bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400",
    low: "bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400",
};

export default function AdminDashboard() {
    const { t, lang } = useAdminTheme();
    const { admin } = useAdminAuth();

    const stats = [
        { labelKey: "total_visitors", value: "24,521", change: "+12.5%", up: true, icon: Eye, color: "indigo" },
        { labelKey: "faculty_members", value: "87", change: "+3", up: true, icon: Users, color: "emerald" },
        { labelKey: "published_articles", value: "142", change: "+8", up: true, icon: Newspaper, color: "violet" },
        { labelKey: "active_students", value: "3,840", change: "-2.1%", up: false, icon: GraduationCap, color: "amber" },
    ];

    const recentActivity = [
        { actionEn: "New article published", actionAr: "تم نشر مقال جديد", user: "Ahmed Hassan", time: lang === "ar" ? "منذ دقيقتين" : "2 min ago", type: "success" },
        { actionEn: "Faculty profile updated", actionAr: "تم تحديث ملف عضو هيئة تدريس", user: "Sara Ali", time: lang === "ar" ? "منذ 15 دقيقة" : "15 min ago", type: "info" },
        { actionEn: "Media file uploaded", actionAr: "تم رفع ملف وسائط", user: "Admin", time: lang === "ar" ? "منذ ساعة" : "1 hour ago", type: "info" },
        { actionEn: "Homepage hero updated", actionAr: "تم تحديث قسم الهيرو", user: "Admin", time: lang === "ar" ? "منذ 3 ساعات" : "3 hours ago", type: "success" },
        { actionEn: "Failed login attempt", actionAr: "محاولة تسجيل دخول فاشلة", user: "Unknown", time: lang === "ar" ? "منذ 5 ساعات" : "5 hours ago", type: "error" },
        { actionEn: "New FAQ added", actionAr: "تمت إضافة سؤال شائع جديد", user: "Content Editor", time: lang === "ar" ? "أمس" : "Yesterday", type: "success" },
    ];

    const quickActions = [
        { labelEn: "New Article", labelAr: "مقال جديد", href: "/admin/news/new", icon: Newspaper, color: "bg-indigo-600" },
        { labelEn: "Add Faculty", labelAr: "إضافة عضو", href: "/admin/faculty/new", icon: Users, color: "bg-emerald-600" },
        { labelEn: "Upload Media", labelAr: "رفع وسائط", href: "/admin/media", icon: Image, color: "bg-violet-600" },
        { labelEn: "Edit Homepage", labelAr: "تعديل الرئيسية", href: "/admin/homepage/hero", icon: Globe, color: "bg-amber-600" },
        { labelEn: "Manage FAQs", labelAr: "إدارة الأسئلة", href: "/admin/students/faqs", icon: FileText, color: "bg-rose-600" },
        { labelEn: "View Analytics", labelAr: "عرض الإحصائيات", href: "/admin/analytics", icon: BarChart3, color: "bg-cyan-600" },
    ];

    const pendingTasks = [
        { taskEn: "Review 3 draft articles", taskAr: "مراجعة 3 مقالات مسودة", priority: "high" },
        { taskEn: "Update graduation ceremony photos", taskAr: "تحديث صور حفل التخرج", priority: "medium" },
        { taskEn: "Add new semester schedule PDF", taskAr: "إضافة جدول الفصل الدراسي", priority: "high" },
        { taskEn: "Update contact information", taskAr: "تحديث معلومات التواصل", priority: "low" },
        { taskEn: "Review faculty applications", taskAr: "مراجعة طلبات هيئة التدريس", priority: "medium" },
    ];

    const chartData = [
        { visitors: 65, views: 80, dayEn: "Mon", dayAr: "إث" },
        { visitors: 80, views: 95, dayEn: "Tue", dayAr: "ثل" },
        { visitors: 55, views: 70, dayEn: "Wed", dayAr: "أر" },
        { visitors: 90, views: 100, dayEn: "Thu", dayAr: "خم" },
        { visitors: 75, views: 88, dayEn: "Fri", dayAr: "جم" },
        { visitors: 45, views: 60, dayEn: "Sat", dayAr: "سب" },
        { visitors: 85, views: 92, dayEn: "Sun", dayAr: "أح" },
    ];

    const cardCls = "bg-white dark:bg-[#111118] border border-slate-200 dark:border-slate-800 rounded-2xl";

    return (
        <AdminLayout>
            <div className="p-5 md:p-7 max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="mb-7">
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                        {t("dashboard_overview")}
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-1 text-sm">
                        {lang === "ar"
                            ? `مرحباً بعودتك، ${(admin as any)?.nameAr ?? admin?.name}! ${t("whats_happening")}`
                            : `${t("welcome_back")}, ${admin?.name}! ${t("whats_happening")}`
                        }
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.07 }}
                            className={`${cardCls} p-5 flex flex-col gap-4 hover:shadow-md dark:hover:shadow-black/20 transition-shadow`}
                        >
                            <div className="flex items-center justify-between">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${colorMap[stat.color]}`}>
                                    <stat.icon className="w-5 h-5" />
                                </div>
                                <span className={`flex items-center gap-1 text-xs font-medium ${stat.up ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"}`}>
                                    {stat.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                                    {stat.change}
                                </span>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
                                <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">{t(stat.labelKey)}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mb-5">
                    {/* Quick Actions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className={`${cardCls} p-5`}
                    >
                        <h2 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">{t("quick_actions")}</h2>
                        <div className="grid grid-cols-2 gap-2.5">
                            {quickActions.map((action, i) => (
                                <Link key={i} href={action.href}>
                                    <div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-100 dark:border-slate-700/50 transition-all cursor-pointer group">
                                        <div className={`w-9 h-9 rounded-xl ${action.color} flex items-center justify-center shadow-sm`}>
                                            <action.icon className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-[11px] text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors text-center leading-tight">
                                            {lang === "ar" ? action.labelAr : action.labelEn}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </motion.div>

                    {/* Recent Activity */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 }}
                        className={`xl:col-span-2 ${cardCls} p-5`}
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-sm font-semibold text-slate-900 dark:text-white">{t("recent_activity")}</h2>
                            <Link href="/admin/users/logs">
                                <span className="text-xs text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 cursor-pointer flex items-center gap-1">
                                    {t("view_all")} <ArrowUpRight className="w-3 h-3" />
                                </span>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-0.5">
                            {recentActivity.map((item, i) => (
                                <div key={i} className="flex items-start gap-3 py-2.5 border-b border-slate-100 dark:border-slate-800 last:border-0">
                                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${item.type === "success" ? "bg-emerald-50 dark:bg-emerald-500/10" :
                                            item.type === "error" ? "bg-red-50 dark:bg-red-500/10" : "bg-slate-100 dark:bg-slate-800"
                                        }`}>
                                        {item.type === "success" ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" /> :
                                            item.type === "error" ? <AlertCircle className="w-3.5 h-3.5 text-red-500 dark:text-red-400" /> :
                                                <Activity className="w-3.5 h-3.5 text-slate-400" />}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm text-slate-800 dark:text-slate-200">
                                            {lang === "ar" ? item.actionAr : item.actionEn}
                                        </p>
                                        <p className="text-xs text-slate-400 dark:text-slate-500">
                                            {lang === "ar" ? "بواسطة" : "by"} {item.user}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-1 text-xs text-slate-400 flex-shrink-0">
                                        <Clock className="w-3 h-3" />
                                        {item.time}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Pending Tasks + Chart */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
                    {/* Pending Tasks */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className={`${cardCls} p-5`}
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-sm font-semibold text-slate-900 dark:text-white">{t("pending_tasks")}</h2>
                            <span className="text-xs bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 px-2 py-0.5 rounded-full border border-red-100 dark:border-red-500/20">
                                {pendingTasks.length} {lang === "ar" ? "معلقة" : "pending"}
                            </span>
                        </div>
                        <div className="flex flex-col gap-2">
                            {pendingTasks.map((task, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700/50">
                                    <input type="checkbox" className="rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-indigo-600 flex-shrink-0" />
                                    <span className="text-sm text-slate-700 dark:text-slate-300 flex-1 text-start">
                                        {lang === "ar" ? task.taskAr : task.taskEn}
                                    </span>
                                    <span className={`text-[10px] px-2 py-0.5 rounded-full flex-shrink-0 font-medium ${priorityColor[task.priority]}`}>
                                        {lang === "ar"
                                            ? task.priority === "high" ? "عالي" : task.priority === "medium" ? "متوسط" : "منخفض"
                                            : task.priority
                                        }
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Visitors Chart */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45 }}
                        className={`xl:col-span-2 ${cardCls} p-5`}
                    >
                        <div className="flex items-center justify-between mb-5">
                            <div>
                                <h2 className="text-sm font-semibold text-slate-900 dark:text-white">{t("visitors_overview")}</h2>
                                <p className="text-slate-400 dark:text-slate-500 text-xs mt-0.5">{t("last_7_days")}</p>
                            </div>
                            <div className="flex items-center gap-4 text-xs text-slate-400">
                                <span className="flex items-center gap-1.5">
                                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                                    {lang === "ar" ? "الزوار" : "Visitors"}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                                    {lang === "ar" ? "مشاهدات الصفحة" : "Page Views"}
                                </span>
                            </div>
                        </div>
                        <div className="flex items-end gap-2 h-[140px]">
                            {chartData.map((d, i) => (
                                <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                                    <div className="w-full flex items-end gap-0.5 h-[110px]">
                                        <div
                                            className="flex-1 bg-indigo-500/60 dark:bg-indigo-500/70 hover:bg-indigo-500 rounded-t-md transition-all cursor-pointer"
                                            style={{ height: `${d.visitors}%` }}
                                        />
                                        <div
                                            className="flex-1 bg-emerald-500/60 dark:bg-emerald-500/70 hover:bg-emerald-500 rounded-t-md transition-all cursor-pointer"
                                            style={{ height: `${d.views}%` }}
                                        />
                                    </div>
                                    <span className="text-[10px] text-slate-400 dark:text-slate-600">
                                        {lang === "ar" ? d.dayAr : d.dayEn}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </AdminLayout>
    );
}
