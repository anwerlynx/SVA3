import { useState } from "react";
import { AdminLayout } from "./AdminLayout";
import { motion } from "framer-motion";
import {
    BarChart3, TrendingUp, TrendingDown, Eye, Users, Clock,
    Globe, Smartphone, Monitor, ArrowUpRight, Calendar
} from "lucide-react";

const weeklyData = [
    { day: "Mon", visitors: 1240, pageViews: 3120, bounceRate: 42 },
    { day: "Tue", visitors: 1580, pageViews: 4200, bounceRate: 38 },
    { day: "Wed", visitors: 980, pageViews: 2450, bounceRate: 45 },
    { day: "Thu", visitors: 1820, pageViews: 5100, bounceRate: 35 },
    { day: "Fri", visitors: 1450, pageViews: 3800, bounceRate: 40 },
    { day: "Sat", visitors: 720, pageViews: 1900, bounceRate: 52 },
    { day: "Sun", visitors: 1100, pageViews: 2800, bounceRate: 44 },
];

const topPages = [
    { page: "/", title: "Homepage", views: 8420, change: "+12%" },
    { page: "/institute/engineering", title: "Engineering Institute", views: 5230, change: "+8%" },
    { page: "/institute/management", title: "Management Institute", views: 4180, change: "+15%" },
    { page: "/news", title: "News & Events", views: 3650, change: "+5%" },
    { page: "/services", title: "Services", views: 2940, change: "-2%" },
    { page: "/about", title: "About Us", views: 2100, change: "+3%" },
];

const devices = [
    { name: "Mobile", percentage: 58, color: "bg-indigo-500" },
    { name: "Desktop", percentage: 32, color: "bg-emerald-500" },
    { name: "Tablet", percentage: 10, color: "bg-amber-500" },
];

const countries = [
    { name: "Egypt", flag: "🇪🇬", visitors: 18420, percentage: 75 },
    { name: "Saudi Arabia", flag: "🇸🇦", visitors: 2840, percentage: 12 },
    { name: "UAE", flag: "🇦🇪", visitors: 1520, percentage: 6 },
    { name: "Kuwait", flag: "🇰🇼", visitors: 980, percentage: 4 },
    { name: "Other", flag: "🌍", visitors: 761, percentage: 3 },
];

const maxVisitors = Math.max(...weeklyData.map(d => d.visitors));

export default function AdminAnalytics() {
    const [period, setPeriod] = useState("7d");

    const totalVisitors = weeklyData.reduce((a, b) => a + b.visitors, 0);
    const totalPageViews = weeklyData.reduce((a, b) => a + b.pageViews, 0);
    const avgBounce = Math.round(weeklyData.reduce((a, b) => a + b.bounceRate, 0) / weeklyData.length);

    return (
        <AdminLayout>
            <div className="p-6 md:p-8 max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-white">Analytics</h1>
                        <p className="text-slate-400 text-sm mt-1">Website performance overview</p>
                    </div>
                    <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-xl p-1">
                        {["7d", "30d", "90d", "1y"].map(p => (
                            <button key={p} onClick={() => setPeriod(p)}
                                className={`px-4 py-1.5 rounded-lg text-sm transition-all ${period === p ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"}`}>
                                {p}
                            </button>
                        ))}
                    </div>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
                    {[
                        { label: "Total Visitors", value: totalVisitors.toLocaleString(), change: "+12.5%", up: true, icon: Users },
                        { label: "Page Views", value: totalPageViews.toLocaleString(), change: "+8.3%", up: true, icon: Eye },
                        { label: "Avg. Session", value: "3m 42s", change: "+0.5%", up: true, icon: Clock },
                        { label: "Bounce Rate", value: `${avgBounce}%`, change: "-2.1%", up: true, icon: TrendingDown },
                    ].map((kpi, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                            className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                            <div className="flex items-center justify-between mb-3">
                                <div className="w-9 h-9 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                                    <kpi.icon className="w-4 h-4 text-indigo-400" />
                                </div>
                                <span className={`text-xs font-medium flex items-center gap-1 ${kpi.up ? "text-emerald-400" : "text-red-400"}`}>
                                    {kpi.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                                    {kpi.change}
                                </span>
                            </div>
                            <p className="text-2xl font-bold text-white">{kpi.value}</p>
                            <p className="text-xs text-slate-500 mt-0.5">{kpi.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Visitors Chart */}
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                    className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-base font-semibold text-white">Visitors & Page Views</h2>
                        <div className="flex items-center gap-4 text-xs text-slate-400">
                            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-indigo-500" />Visitors</span>
                            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500" />Page Views</span>
                        </div>
                    </div>
                    <div className="flex items-end gap-3 h-[200px]">
                        {weeklyData.map((d, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-2">
                                <div className="w-full flex items-end gap-0.5 h-[160px]">
                                    <div className="flex-1 bg-indigo-500/70 hover:bg-indigo-500 rounded-t-md transition-all cursor-pointer"
                                        style={{ height: `${(d.visitors / maxVisitors) * 100}%` }}
                                        title={`${d.visitors} visitors`} />
                                    <div className="flex-1 bg-emerald-500/70 hover:bg-emerald-500 rounded-t-md transition-all cursor-pointer"
                                        style={{ height: `${(d.pageViews / (maxVisitors * 3)) * 100}%` }}
                                        title={`${d.pageViews} page views`} />
                                </div>
                                <span className="text-xs text-slate-600">{d.day}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Top Pages */}
                    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
                        className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-6">
                        <h2 className="text-base font-semibold text-white mb-4">Top Pages</h2>
                        <div className="flex flex-col gap-3">
                            {topPages.map((page, i) => (
                                <div key={i} className="flex items-center gap-3 py-2 border-b border-slate-800/50 last:border-0">
                                    <span className="text-xs text-slate-600 w-5 text-center">{i + 1}</span>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm text-white font-medium">{page.title}</p>
                                        <p className="text-xs text-slate-500 font-mono">{page.page}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-semibold text-white">{page.views.toLocaleString()}</p>
                                        <p className={`text-xs ${page.change.startsWith("+") ? "text-emerald-400" : "text-red-400"}`}>{page.change}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Devices + Countries */}
                    <div className="flex flex-col gap-6">
                        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                            className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                            <h2 className="text-base font-semibold text-white mb-4">Devices</h2>
                            <div className="flex flex-col gap-3">
                                {devices.map((d, i) => (
                                    <div key={i} className="flex flex-col gap-1.5">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-slate-300">{d.name}</span>
                                            <span className="text-white font-medium">{d.percentage}%</span>
                                        </div>
                                        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                            <div className={`h-full ${d.color} rounded-full`} style={{ width: `${d.percentage}%` }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
                            className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                            <h2 className="text-base font-semibold text-white mb-4">Top Countries</h2>
                            <div className="flex flex-col gap-3">
                                {countries.map((c, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <span className="text-xl">{c.flag}</span>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-sm text-slate-300">{c.name}</span>
                                                <span className="text-xs text-slate-500">{c.percentage}%</span>
                                            </div>
                                            <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                                <div className="h-full bg-indigo-500/70 rounded-full" style={{ width: `${c.percentage}%` }} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
