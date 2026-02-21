import { useState, useEffect } from "react";
import { AdminLayout } from "./AdminLayout";
import { useAdminAuth } from "@/context/AdminAuthContext";
import { motion } from "framer-motion";
import {
    Plus, Search, Edit2, Trash2, Activity, Users,
    Trophy, X, Check, Upload, Clock,
    FileText, Building2, AlertTriangle, Eye, EyeOff,
    Palette, Heart, FlaskConical
} from "lucide-react";

const categories = ["All", "Club", "Sport", "Cultural", "Volunteer", "Scientific"];

interface ActivityItem {
    id: string;
    nameAr: string;
    nameEn: string;
    descriptionAr: string;
    descriptionEn: string;
    category: string;
    coverImage: string;
    institute: string;
    isActive: boolean;
}

const emptyActivity: Omit<ActivityItem, "id"> & { id?: string } = {
    nameAr: "", nameEn: "", descriptionAr: "", descriptionEn: "",
    category: "Club", coverImage: "",
    institute: "both", isActive: true
};

const categoryIcons: Record<string, React.ElementType> = {
    Club: Users,
    Sport: Trophy,
    Cultural: Palette,
    Volunteer: Heart,
    Scientific: FlaskConical,
};

const categoryColors: Record<string, string> = {
    Club: "text-indigo-400 bg-indigo-500/10",
    Sport: "text-emerald-400 bg-emerald-500/10",
    Cultural: "text-amber-400 bg-amber-500/10",
    Volunteer: "text-rose-400 bg-rose-500/10",
    Scientific: "text-cyan-400 bg-cyan-500/10",
};

function ActivityModal({ activity, onClose, onSave }: {
    activity: ActivityItem | null;
    onClose: () => void;
    onSave: (e: Omit<ActivityItem, "id"> & { id?: string }) => void;
}) {
    const [form, setForm] = useState<Omit<ActivityItem, "id"> & { id?: string }>(activity || { ...emptyActivity });

    return (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-start justify-center p-4 overflow-y-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-[800px] my-8"
            >
                <div className="flex items-center justify-between p-6 border-b border-slate-800">
                    <h2 className="text-lg font-semibold text-white">{activity ? "Edit Activity" : "New Activity"}</h2>
                    <button onClick={onClose} className="p-2 rounded-xl hover:bg-slate-800 transition-colors text-slate-400">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-6 flex flex-col gap-5">
                    <div className="relative rounded-xl overflow-hidden bg-slate-800 border-2 border-dashed border-slate-600 h-[180px] flex items-center justify-center cursor-pointer hover:border-indigo-500 transition-colors group">
                        {form.coverImage ? (
                            <img src={form.coverImage} alt="" className="w-full h-full object-cover" />
                        ) : (
                            <div className="flex flex-col items-center gap-2 text-slate-500 group-hover:text-slate-300 transition-colors">
                                <Upload className="w-8 h-8" />
                                <span className="text-sm">Upload cover image</span>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium text-slate-300">Cover Image URL</label>
                        <input value={form.coverImage} onChange={e => setForm({ ...form, coverImage: e.target.value })}
                            placeholder="https://..."
                            className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">Name (English)</label>
                            <input value={form.nameEn} onChange={e => setForm({ ...form, nameEn: e.target.value })}
                                placeholder="Activity name..."
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">الاسم (عربي)</label>
                            <input value={form.nameAr} onChange={e => setForm({ ...form, nameAr: e.target.value })} dir="rtl"
                                placeholder="اسم النشاط..."
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all text-right" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">Description (English)</label>
                            <textarea value={form.descriptionEn} onChange={e => setForm({ ...form, descriptionEn: e.target.value })}
                                rows={4} placeholder="Activity description..."
                                className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all resize-none" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">الوصف (عربي)</label>
                            <textarea value={form.descriptionAr} onChange={e => setForm({ ...form, descriptionAr: e.target.value })}
                                rows={4} dir="rtl" placeholder="وصف النشاط..."
                                className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all resize-none text-right" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">Category</label>
                            <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all">
                                {categories.filter(c => c !== "All").map(c => <option key={c}>{c}</option>)}
                            </select>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">Institute</label>
                            <select value={form.institute} onChange={e => setForm({ ...form, institute: e.target.value })}
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all">
                                <option value="engineering">Engineering</option>
                                <option value="management">Management</option>
                                <option value="both">Both</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">Status</label>
                            <button
                                onClick={() => setForm({ ...form, isActive: !form.isActive })}
                                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm transition-all ${form.isActive
                                        ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                                        : "bg-slate-800 border-slate-700 text-slate-400"
                                    }`}
                            >
                                {form.isActive ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                                {form.isActive ? "Active" : "Inactive"}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-end gap-3 p-6 border-t border-slate-800">
                    <button onClick={onClose} className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm rounded-xl transition-colors">
                        Cancel
                    </button>
                    <button onClick={() => onSave(form)} className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition-colors flex items-center gap-2">
                        <Check className="w-4 h-4" />
                        {activity ? "Save Changes" : "Create Activity"}
                    </button>
                </div>
            </motion.div>
        </div>
    );
}

function DeleteConfirmModal({ onClose, onConfirm, title }: {
    onClose: () => void;
    onConfirm: () => void;
    title: string;
}) {
    return (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-[420px] p-6"
            >
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                        <AlertTriangle className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                        <h3 className="text-white font-semibold">Delete Activity</h3>
                        <p className="text-slate-400 text-sm">This action cannot be undone.</p>
                    </div>
                </div>
                <p className="text-slate-300 text-sm mb-6">
                    Are you sure you want to delete "<span className="text-white font-medium">{title}</span>"?
                </p>
                <div className="flex items-center justify-end gap-3">
                    <button onClick={onClose} className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm rounded-xl transition-colors">
                        Cancel
                    </button>
                    <button onClick={onConfirm} className="px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white text-sm font-semibold rounded-xl transition-colors">
                        Delete
                    </button>
                </div>
            </motion.div>
        </div>
    );
}

export default function ActivitiesManager() {
    const { token } = useAdminAuth();
    const [activities, setActivities] = useState<ActivityItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [catFilter, setCatFilter] = useState("All");
    const [modalOpen, setModalOpen] = useState(false);
    const [editActivity, setEditActivity] = useState<ActivityItem | null>(null);
    const [deleteTarget, setDeleteTarget] = useState<ActivityItem | null>(null);

    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    };

    const fetchActivities = async () => {
        try {
            const res = await fetch("/api/admin/activities", { headers });
            if (res.ok) {
                const data = await res.json();
                setActivities(data);
            }
        } catch {
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchActivities(); }, []);

    const filtered = activities.filter(a => {
        const matchCat = catFilter === "All" || a.category === catFilter;
        const matchSearch = !search || (a.nameEn || "").toLowerCase().includes(search.toLowerCase()) || (a.nameAr || "").includes(search);
        return matchCat && matchSearch;
    });

    const handleSave = async (form: Omit<ActivityItem, "id"> & { id?: string }) => {
        try {
            if (editActivity) {
                const res = await fetch(`/api/admin/activities/${editActivity.id}`, {
                    method: "PUT", headers, body: JSON.stringify(form),
                });
                if (res.ok) {
                    const updated = await res.json();
                    setActivities(prev => prev.map(a => a.id === editActivity.id ? updated : a));
                }
            } else {
                const res = await fetch("/api/admin/activities", {
                    method: "POST", headers, body: JSON.stringify(form),
                });
                if (res.ok) {
                    const created = await res.json();
                    setActivities(prev => [...prev, created]);
                }
            }
        } catch {
        }
        setModalOpen(false);
        setEditActivity(null);
    };

    const handleDelete = async () => {
        if (!deleteTarget) return;
        try {
            const res = await fetch(`/api/admin/activities/${deleteTarget.id}`, {
                method: "DELETE", headers,
            });
            if (res.ok) {
                setActivities(prev => prev.filter(a => a.id !== deleteTarget.id));
            }
        } catch {
        }
        setDeleteTarget(null);
    };

    const toggleActive = async (activity: ActivityItem) => {
        try {
            const res = await fetch(`/api/admin/activities/${activity.id}`, {
                method: "PUT", headers,
                body: JSON.stringify({ ...activity, isActive: !activity.isActive }),
            });
            if (res.ok) {
                const updated = await res.json();
                setActivities(prev => prev.map(a => a.id === activity.id ? updated : a));
            }
        } catch {
        }
    };

    return (
        <AdminLayout>
            {(modalOpen || editActivity) && (
                <ActivityModal
                    activity={editActivity}
                    onClose={() => { setModalOpen(false); setEditActivity(null); }}
                    onSave={handleSave}
                />
            )}

            {deleteTarget && (
                <DeleteConfirmModal
                    title={deleteTarget.nameEn || deleteTarget.nameAr}
                    onClose={() => setDeleteTarget(null)}
                    onConfirm={handleDelete}
                />
            )}

            <div className="p-6 md:p-8 max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-white">Activities Manager</h1>
                        <p className="text-slate-400 text-sm mt-1">{activities.length} total activities</p>
                    </div>
                    <button
                        onClick={() => { setEditActivity(null); setModalOpen(true); }}
                        className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition-colors shadow-lg shadow-indigo-500/20"
                    >
                        <Plus className="w-4 h-4" />
                        New Activity
                    </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-7 gap-4 mb-6">
                    {[
                        { label: "Active", count: activities.filter(a => a.isActive).length, color: "text-emerald-400" },
                        { label: "Inactive", count: activities.filter(a => !a.isActive).length, color: "text-red-400" },
                        { label: "Club", count: activities.filter(a => a.category === "Club").length, color: "text-indigo-400" },
                        { label: "Sport", count: activities.filter(a => a.category === "Sport").length, color: "text-emerald-400" },
                        { label: "Cultural", count: activities.filter(a => a.category === "Cultural").length, color: "text-amber-400" },
                        { label: "Volunteer", count: activities.filter(a => a.category === "Volunteer").length, color: "text-rose-400" },
                        { label: "Scientific", count: activities.filter(a => a.category === "Scientific").length, color: "text-cyan-400" },
                    ].map((s, i) => (
                        <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center">
                            <p className={`text-2xl font-bold ${s.color}`}>{s.count}</p>
                            <p className="text-xs text-slate-500 mt-0.5">{s.label}</p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search activities..."
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {categories.map(c => (
                            <button key={c} onClick={() => setCatFilter(c)}
                                className={`px-4 py-2 rounded-xl text-sm transition-all ${catFilter === c ? "bg-indigo-600 text-white" : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600"}`}>
                                {c}
                            </button>
                        ))}
                    </div>
                </div>

                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20 text-slate-500">
                        <Clock className="w-12 h-12 mb-3 opacity-30 animate-spin" />
                        <p className="text-sm">Loading activities...</p>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                            {filtered.map((activity, i) => {
                                const CatIcon = categoryIcons[activity.category] || Activity;
                                const catColor = categoryColors[activity.category] || "text-slate-400 bg-slate-500/10";
                                return (
                                    <motion.div
                                        key={activity.id}
                                        initial={{ opacity: 0, y: 16 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.06 }}
                                        className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden group"
                                    >
                                        <div className="relative h-[160px] overflow-hidden">
                                            {activity.coverImage ? (
                                                <img src={activity.coverImage} alt={activity.nameEn || activity.nameAr} className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                                                    <Activity className="w-10 h-10 text-slate-700" />
                                                </div>
                                            )}
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                                            <div className="absolute top-3 left-3 flex gap-2">
                                                <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${activity.isActive ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400"}`}>
                                                    {activity.isActive ? "Active" : "Inactive"}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className={`text-xs px-2 py-0.5 rounded-full flex items-center gap-1 ${catColor}`}>
                                                    <CatIcon className="w-3 h-3" />{activity.category}
                                                </span>
                                                {activity.institute && (
                                                    <span className="text-xs text-slate-500 flex items-center gap-1">
                                                        <Building2 className="w-3 h-3" />{activity.institute}
                                                    </span>
                                                )}
                                            </div>
                                            <h3 className="text-sm font-semibold text-white line-clamp-2 mb-1">{activity.nameEn || activity.nameAr}</h3>
                                            {(activity.descriptionEn || activity.descriptionAr) && (
                                                <p className="text-xs text-slate-500 line-clamp-2">
                                                    {activity.descriptionEn || activity.descriptionAr}
                                                </p>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-2 px-4 pb-4">
                                            <button onClick={() => setEditActivity(activity)} className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-xl transition-colors">
                                                <Edit2 className="w-3.5 h-3.5" /> Edit
                                            </button>
                                            <button onClick={() => toggleActive(activity)} className={`p-2 rounded-xl transition-colors ${activity.isActive ? "bg-emerald-500/10 text-emerald-400" : "bg-slate-800 text-slate-400 hover:text-emerald-400"}`}>
                                                {activity.isActive ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                                            </button>
                                            <button onClick={() => setDeleteTarget(activity)} className="p-2 rounded-xl bg-slate-800 hover:bg-red-500/10 text-slate-400 hover:text-red-400 transition-colors">
                                                <Trash2 className="w-3.5 h-3.5" />
                                            </button>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {filtered.length === 0 && (
                            <div className="flex flex-col items-center justify-center py-20 text-slate-500">
                                <FileText className="w-12 h-12 mb-3 opacity-30" />
                                <p className="text-sm">No activities found</p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </AdminLayout>
    );
}
