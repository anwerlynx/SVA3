import { useState, useEffect } from "react";
import { AdminLayout } from "./AdminLayout";
import { useAdminAuth } from "@/context/AdminAuthContext";
import { motion } from "framer-motion";
import {
    Plus, Search, Edit2, Trash2, Bell, Megaphone,
    AlertCircle, X, Check, Clock, Building2,
    AlertTriangle, CheckCircle, XCircle, BookOpen, Calendar
} from "lucide-react";

const announcementTypes = ["All", "General", "Urgent", "Academic", "Event"];

interface AnnouncementItem {
    id: string;
    titleAr: string;
    titleEn: string;
    contentAr: string;
    contentEn: string;
    type: string;
    institute: string;
    isActive: boolean;
    expiresAt: string;
    createdAt: string;
}

const emptyAnnouncement: Omit<AnnouncementItem, "id" | "createdAt"> & { id?: string } = {
    titleAr: "", titleEn: "", contentAr: "", contentEn: "",
    type: "general", institute: "both", isActive: true, expiresAt: ""
};

const typeColor: Record<string, string> = {
    urgent: "bg-red-500/10 text-red-400",
    academic: "bg-blue-500/10 text-blue-400",
    event: "bg-purple-500/10 text-purple-400",
    general: "bg-slate-700 text-slate-400",
};

const typeIcon: Record<string, React.ElementType> = {
    urgent: AlertCircle,
    academic: BookOpen,
    event: Calendar,
    general: Bell,
};

function AnnouncementModal({ announcement, onClose, onSave }: {
    announcement: AnnouncementItem | null;
    onClose: () => void;
    onSave: (e: Omit<AnnouncementItem, "id" | "createdAt"> & { id?: string }) => void;
}) {
    const [form, setForm] = useState<Omit<AnnouncementItem, "id" | "createdAt"> & { id?: string }>(
        announcement ? { ...announcement } : { ...emptyAnnouncement }
    );

    return (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-start justify-center p-4 overflow-y-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-[800px] my-8"
            >
                <div className="flex items-center justify-between p-6 border-b border-slate-800">
                    <h2 className="text-lg font-semibold text-white">{announcement ? "Edit Announcement" : "New Announcement"}</h2>
                    <button onClick={onClose} className="p-2 rounded-xl hover:bg-slate-800 transition-colors text-slate-400">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-6 flex flex-col gap-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">Title (English)</label>
                            <input value={form.titleEn} onChange={e => setForm({ ...form, titleEn: e.target.value })}
                                placeholder="Announcement title..."
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">العنوان (عربي)</label>
                            <input value={form.titleAr} onChange={e => setForm({ ...form, titleAr: e.target.value })} dir="rtl"
                                placeholder="عنوان الإعلان..."
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all text-right" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">Content (English)</label>
                            <textarea value={form.contentEn} onChange={e => setForm({ ...form, contentEn: e.target.value })}
                                rows={4} placeholder="Announcement content..."
                                className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all resize-none" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">المحتوى (عربي)</label>
                            <textarea value={form.contentAr} onChange={e => setForm({ ...form, contentAr: e.target.value })}
                                rows={4} dir="rtl" placeholder="محتوى الإعلان..."
                                className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all resize-none text-right" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium text-slate-300">Expires At</label>
                        <input type="datetime-local" value={form.expiresAt ? form.expiresAt.slice(0, 16) : ""}
                            onChange={e => setForm({ ...form, expiresAt: e.target.value })}
                            className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all [color-scheme:dark]" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">Type</label>
                            <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all">
                                <option value="general">General</option>
                                <option value="urgent">Urgent</option>
                                <option value="academic">Academic</option>
                                <option value="event">Event</option>
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
                            <label className="text-sm font-medium text-slate-300">Active</label>
                            <button
                                onClick={() => setForm({ ...form, isActive: !form.isActive })}
                                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm transition-all ${form.isActive
                                        ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                                        : "bg-slate-800 border-slate-700 text-slate-400"
                                    }`}
                            >
                                {form.isActive ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
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
                        {announcement ? "Save Changes" : "Create Announcement"}
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
                        <h3 className="text-white font-semibold">Delete Announcement</h3>
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

export default function AnnouncementsManager() {
    const { token } = useAdminAuth();
    const [announcements, setAnnouncements] = useState<AnnouncementItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [typeFilter, setTypeFilter] = useState("All");
    const [modalOpen, setModalOpen] = useState(false);
    const [editAnnouncement, setEditAnnouncement] = useState<AnnouncementItem | null>(null);
    const [deleteTarget, setDeleteTarget] = useState<AnnouncementItem | null>(null);

    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    };

    const fetchAnnouncements = async () => {
        try {
            const res = await fetch("/api/admin/announcements", { headers });
            if (res.ok) {
                const data = await res.json();
                setAnnouncements(data);
            }
        } catch {
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchAnnouncements(); }, []);

    const isExpired = (expiresAt: string) => {
        if (!expiresAt) return false;
        return new Date(expiresAt) < new Date();
    };

    const filtered = announcements.filter(a => {
        const matchType = typeFilter === "All" || (a.type || "general").toLowerCase() === typeFilter.toLowerCase();
        const matchSearch = !search || (a.titleEn || "").toLowerCase().includes(search.toLowerCase()) || (a.titleAr || "").includes(search);
        return matchType && matchSearch;
    });

    const handleSave = async (form: Omit<AnnouncementItem, "id" | "createdAt"> & { id?: string }) => {
        try {
            if (editAnnouncement) {
                const res = await fetch(`/api/admin/announcements/${editAnnouncement.id}`, {
                    method: "PUT", headers, body: JSON.stringify(form),
                });
                if (res.ok) {
                    const updated = await res.json();
                    setAnnouncements(prev => prev.map(a => a.id === editAnnouncement.id ? updated : a));
                }
            } else {
                const res = await fetch("/api/admin/announcements", {
                    method: "POST", headers, body: JSON.stringify(form),
                });
                if (res.ok) {
                    const created = await res.json();
                    setAnnouncements(prev => [...prev, created]);
                }
            }
        } catch {
        }
        setModalOpen(false);
        setEditAnnouncement(null);
    };

    const handleDelete = async () => {
        if (!deleteTarget) return;
        try {
            const res = await fetch(`/api/admin/announcements/${deleteTarget.id}`, {
                method: "DELETE", headers,
            });
            if (res.ok) {
                setAnnouncements(prev => prev.filter(a => a.id !== deleteTarget.id));
            }
        } catch {
        }
        setDeleteTarget(null);
    };

    const toggleActive = async (announcement: AnnouncementItem) => {
        try {
            const res = await fetch(`/api/admin/announcements/${announcement.id}`, {
                method: "PUT", headers,
                body: JSON.stringify({ ...announcement, isActive: !announcement.isActive }),
            });
            if (res.ok) {
                const updated = await res.json();
                setAnnouncements(prev => prev.map(a => a.id === announcement.id ? updated : a));
            }
        } catch {
        }
    };

    const formatDate = (d: string) => {
        if (!d) return "";
        try {
            return new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" });
        } catch { return d; }
    };

    const activeCount = announcements.filter(a => a.isActive && !isExpired(a.expiresAt)).length;
    const expiredCount = announcements.filter(a => isExpired(a.expiresAt)).length;
    const urgentCount = announcements.filter(a => (a.type || "general").toLowerCase() === "urgent").length;
    const academicCount = announcements.filter(a => (a.type || "general").toLowerCase() === "academic").length;

    return (
        <AdminLayout>
            {(modalOpen || editAnnouncement) && (
                <AnnouncementModal
                    announcement={editAnnouncement}
                    onClose={() => { setModalOpen(false); setEditAnnouncement(null); }}
                    onSave={handleSave}
                />
            )}

            {deleteTarget && (
                <DeleteConfirmModal
                    title={deleteTarget.titleEn || deleteTarget.titleAr}
                    onClose={() => setDeleteTarget(null)}
                    onConfirm={handleDelete}
                />
            )}

            <div className="p-6 md:p-8 max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-white flex items-center gap-3">
                            <Megaphone className="w-7 h-7 text-indigo-400" />
                            Announcements Manager
                        </h1>
                        <p className="text-slate-400 text-sm mt-1">{announcements.length} total announcements</p>
                    </div>
                    <button
                        onClick={() => { setEditAnnouncement(null); setModalOpen(true); }}
                        className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition-colors shadow-lg shadow-indigo-500/20"
                    >
                        <Plus className="w-4 h-4" />
                        New Announcement
                    </button>
                </div>

                <div className="grid grid-cols-4 gap-4 mb-6">
                    {[
                        { label: "Active", count: activeCount, color: "text-emerald-400" },
                        { label: "Expired", count: expiredCount, color: "text-red-400" },
                        { label: "Urgent", count: urgentCount, color: "text-red-400" },
                        { label: "Academic", count: academicCount, color: "text-blue-400" },
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
                        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search announcements..."
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {announcementTypes.map(t => (
                            <button key={t} onClick={() => setTypeFilter(t)}
                                className={`px-4 py-2 rounded-xl text-sm transition-all ${typeFilter === t ? "bg-indigo-600 text-white" : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600"}`}>
                                {t}
                            </button>
                        ))}
                    </div>
                </div>

                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20 text-slate-500">
                        <Clock className="w-12 h-12 mb-3 opacity-30 animate-spin" />
                        <p className="text-sm">Loading announcements...</p>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                            {filtered.map((announcement, i) => {
                                const expired = isExpired(announcement.expiresAt);
                                const aType = (announcement.type || "general").toLowerCase();
                                const TypeIcon = typeIcon[aType] || Bell;

                                return (
                                    <motion.div
                                        key={announcement.id}
                                        initial={{ opacity: 0, y: 16 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.06 }}
                                        className={`bg-slate-900 border rounded-2xl overflow-hidden group ${expired ? "border-red-500/30 opacity-70" : "border-slate-800"}`}
                                    >
                                        <div className="p-5">
                                            <div className="flex items-start justify-between mb-3">
                                                <div className="flex items-center gap-2.5">
                                                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${aType === "urgent" ? "bg-red-500/10" : aType === "academic" ? "bg-blue-500/10" : aType === "event" ? "bg-purple-500/10" : "bg-slate-800"}`}>
                                                        <TypeIcon className={`w-4.5 h-4.5 ${aType === "urgent" ? "text-red-400" : aType === "academic" ? "text-blue-400" : aType === "event" ? "text-purple-400" : "text-slate-400"}`} />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-white font-semibold text-sm line-clamp-1">
                                                            {announcement.titleEn || announcement.titleAr}
                                                        </h3>
                                                        {announcement.titleAr && announcement.titleEn && (
                                                            <p className="text-slate-500 text-xs line-clamp-1 mt-0.5" dir="rtl">{announcement.titleAr}</p>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button onClick={() => setEditAnnouncement(announcement)}
                                                        className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-500 hover:text-white transition-colors">
                                                        <Edit2 className="w-3.5 h-3.5" />
                                                    </button>
                                                    <button onClick={() => setDeleteTarget(announcement)}
                                                        className="p-1.5 rounded-lg hover:bg-red-500/10 text-slate-500 hover:text-red-400 transition-colors">
                                                        <Trash2 className="w-3.5 h-3.5" />
                                                    </button>
                                                </div>
                                            </div>

                                            {(announcement.contentEn || announcement.contentAr) && (
                                                <p className="text-slate-400 text-xs line-clamp-2 mb-3">
                                                    {announcement.contentEn || announcement.contentAr}
                                                </p>
                                            )}

                                            <div className="flex flex-wrap items-center gap-2 mb-3">
                                                <span className={`px-2.5 py-1 rounded-lg text-[11px] font-medium ${typeColor[aType] || typeColor.general}`}>
                                                    {aType.charAt(0).toUpperCase() + aType.slice(1)}
                                                </span>
                                                <span className={`px-2.5 py-1 rounded-lg text-[11px] font-medium ${announcement.isActive && !expired ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400"}`}>
                                                    {expired ? "Expired" : announcement.isActive ? "Active" : "Inactive"}
                                                </span>
                                                <span className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-slate-800 text-slate-400 flex items-center gap-1">
                                                    <Building2 className="w-3 h-3" />
                                                    {announcement.institute || "both"}
                                                </span>
                                            </div>

                                            <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                                                <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                                                    <Clock className="w-3 h-3" />
                                                    {announcement.expiresAt ? (
                                                        <span className={expired ? "text-red-400" : ""}>
                                                            {expired ? "Expired: " : "Expires: "}{formatDate(announcement.expiresAt)}
                                                        </span>
                                                    ) : (
                                                        <span>No expiry</span>
                                                    )}
                                                </div>
                                                <button
                                                    onClick={() => toggleActive(announcement)}
                                                    className={`p-1.5 rounded-lg transition-colors ${announcement.isActive ? "hover:bg-red-500/10 text-emerald-400 hover:text-red-400" : "hover:bg-emerald-500/10 text-slate-500 hover:text-emerald-400"}`}
                                                    title={announcement.isActive ? "Deactivate" : "Activate"}
                                                >
                                                    {announcement.isActive ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {filtered.length === 0 && !loading && (
                            <div className="flex flex-col items-center justify-center py-20 text-slate-500">
                                <Megaphone className="w-12 h-12 mb-3 opacity-20" />
                                <p className="text-sm">No announcements found</p>
                                <button onClick={() => { setEditAnnouncement(null); setModalOpen(true); }}
                                    className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm rounded-xl transition-colors">
                                    Create First Announcement
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </AdminLayout>
    );
}
