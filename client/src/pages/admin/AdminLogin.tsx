import { useState } from "react";
import { useAdminAuth } from "@/context/AdminAuthContext";
import { useAdminTheme } from "@/context/AdminThemeContext";
import { GraduationCap, Eye, EyeOff, Lock, Mail, AlertCircle, Sun, Moon, Languages, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const DEMO_ACCOUNTS = [
    { email: "admin@sva.edu.eg", password: "admin123", role: "Super Admin", roleAr: "المدير العام" },
    { email: "manager@sva.edu.eg", password: "manager123", role: "Admin", roleAr: "مدير" },
    { email: "editor@sva.edu.eg", password: "editor123", role: "Content Editor", roleAr: "محرر المحتوى" },
    { email: "faculty@sva.edu.eg", password: "faculty123", role: "Faculty Manager", roleAr: "مدير هيئة التدريس" },
    { email: "students@sva.edu.eg", password: "students123", role: "Student Affairs", roleAr: "شؤون الطلاب" },
    { email: "library@sva.edu.eg", password: "library123", role: "Library Manager", roleAr: "أمين المكتبة" },
    { email: "analytics@sva.edu.eg", password: "analytics123", role: "Analytics Viewer", roleAr: "مشاهد الإحصائيات" },
];

export default function AdminLogin() {
    const { login } = useAdminAuth();
    const { theme, toggleTheme, lang, toggleLang, dir, t } = useAdminTheme();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [showDemoAccounts, setShowDemoAccounts] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        const success = await login(email, password);
        if (!success) {
            setError(t("invalid_credentials"));
        }
        setLoading(false);
    };

    const fillDemo = (acc: typeof DEMO_ACCOUNTS[0]) => {
        setEmail(acc.email);
        setPassword(acc.password);
        setShowDemoAccounts(false);
        setError("");
    };

    return (
        <div
            className={`min-h-screen flex items-center justify-center p-4 relative overflow-hidden transition-colors duration-300 ${theme === "dark" ? "dark bg-[#0a0a0f]" : "bg-slate-50"}`}
            dir={dir}
            style={{ fontFamily: lang === "ar" ? "'Cairo', sans-serif" : "'Inter', sans-serif" }}
        >
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/8 dark:bg-indigo-600/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-600/8 dark:bg-violet-600/10 rounded-full blur-3xl" />
                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
                    style={{ backgroundImage: "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
            </div>

            {/* Theme & Lang toggles */}
            <div className="absolute top-4 end-4 flex items-center gap-2">
                <button onClick={toggleLang}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm">
                    <Languages className="w-3.5 h-3.5" />
                    {lang === "ar" ? "English" : "عربي"}
                </button>
                <button onClick={toggleTheme}
                    className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm">
                    {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="relative w-full max-w-[420px]"
            >
                {/* Card */}
                <div className="bg-white dark:bg-[#111118] border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-xl dark:shadow-2xl dark:shadow-black/40">
                    {/* Logo */}
                    <div className="flex flex-col items-center gap-4 mb-8">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                            <GraduationCap className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-center">
                            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                                {lang === "ar" ? "لوحة تحكم SVA" : "SVA Admin"}
                            </h1>
                            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{t("sign_in_subtitle")}</p>
                        </div>
                    </div>

                    {/* Error */}
                    <AnimatePresence>
                        {error && (
                            <motion.div
                                initial={{ opacity: 0, y: -8, height: 0 }}
                                animate={{ opacity: 1, y: 0, height: "auto" }}
                                exit={{ opacity: 0, y: -8, height: 0 }}
                                className="flex items-center gap-2 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400 text-sm px-4 py-3 rounded-xl mb-5"
                            >
                                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                                {error}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        {/* Email */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">{t("email_address")}</label>
                            <div className="relative">
                                <Mail className="absolute start-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="admin@sva.edu.eg"
                                    required
                                    className="w-full ps-10 pe-4 py-3 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition-all"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">{t("password")}</label>
                            <div className="relative">
                                <Lock className="absolute start-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    required
                                    className="w-full ps-10 pe-10 py-3 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(s => !s)}
                                    className="absolute end-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 text-slate-500 dark:text-slate-400 cursor-pointer">
                                <input type="checkbox" className="rounded border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-800 text-indigo-600" />
                                {t("remember_me")}
                            </label>
                            <button type="button" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors font-medium">
                                {t("forgot_password")}
                            </button>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 text-white font-semibold rounded-xl transition-all shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 mt-1"
                        >
                            {loading ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    {t("signing_in")}
                                </>
                            ) : t("sign_in")}
                        </button>
                    </form>

                    {/* Demo Accounts */}
                    <div className="mt-5">
                        <button
                            onClick={() => setShowDemoAccounts(s => !s)}
                            className="w-full flex items-center justify-between px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        >
                            <span className="font-medium">{t("demo_credentials")}</span>
                            <ChevronDown className={`w-4 h-4 transition-transform ${showDemoAccounts ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence>
                            {showDemoAccounts && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="overflow-hidden"
                                >
                                    <div className="mt-2 flex flex-col gap-1.5 max-h-52 overflow-y-auto">
                                        {DEMO_ACCOUNTS.map((acc, i) => (
                                            <button
                                                key={i}
                                                onClick={() => fillDemo(acc)}
                                                className="flex items-center justify-between px-3 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-left hover:border-indigo-400 dark:hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-500/5 transition-all group"
                                            >
                                                <div>
                                                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-200 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors">
                                                        {lang === "ar" ? acc.roleAr : acc.role}
                                                    </p>
                                                    <p className="text-[11px] text-slate-400 dark:text-slate-500 font-mono mt-0.5">{acc.email}</p>
                                                </div>
                                                <span className="text-[10px] text-slate-400 dark:text-slate-600 font-mono">{acc.password}</span>
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                <p className="text-center text-slate-400 dark:text-slate-600 text-xs mt-5">
                    © 2026 Valley Higher Institutes. All rights reserved.
                </p>
            </motion.div>
        </div>
    );
}
