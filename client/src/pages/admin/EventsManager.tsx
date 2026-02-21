import { useState, useEffect } from "react";
import { AdminLayout } from "./AdminLayout";
import { useAdminAuth } from "@/context/AdminAuthContext";
import { motion } from "framer-motion";
import {
    Plus, Search, Edit2, Trash2, Calendar, MapPin,
    Star, StarOff, X, Check, Upload, Clock,
    FileText, Link as LinkIcon, Building2, AlertTriangle
} from "lucide-react";

const categories = ["All", "Conference", "Seminar", "Workshop", "Cultural", "Sports", "Ceremony"];

interface EventItem {
    id: string;
    titleAr: string;
    titleEn: string;
    slug: string;
    descriptionAr: string;
    descriptionEn: string;
    coverImage: string;
    location: string;
    startDate: string;
    endDate: string;
    institute: string;
    category: string;
    status: string;
    isFeatured: boolean;
    registrationUrl: string;
}

const emptyEvent: Omit<EventItem, "id"> & { id?: string } = {
    titleAr: "", titleEn: "", slug: "", descriptionAr: "", descriptionEn: "",
    coverImage: "", location: "", startDate: "", endDate: "",
    institute: "both", category: "Conference", status: "draft",
    isFeatured: false, registrationUrl: ""
};

const statusColor: Record<string, string> = {
    published: "bg-emerald-500/10 text-emerald-400",
    draft: "bg-slate-700 text-slate-400",
    scheduled: "bg-amber-500/10 text-amber-400",
    archived: "bg-red-500/10 text-red-400",
};

function EventModal({ event, onClose, onSave }: {
    event: EventItem | null;
    onClose: () => void;
    onSave: (e: Omit<EventItem, "id"> & { id?: string }) => void;
}) {
    const [form, setForm] = useState<Omit<EventItem, "id"> & { id?: string }>(event || { ...emptyEvent });

    return (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-start justify-center p-4 overflow-y-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-[800px] my-8"
            >
                <div className="flex items-center justify-between p-6 border-b border-slate-800">
                    <h2 className="text-lg font-semibold text-white">{event ? "Edit Event" : "New Event"}</h2>
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
                            <label className="text-sm font-medium text-slate-300">Title (English)</label>
                            <input value={form.titleEn} onChange={e => setForm({ ...form, titleEn: e.target.value })}
                                placeholder="Event title..."
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">العنوان (عربي)</label>
                            <input value={form.titleAr} onChange={e => setForm({ ...form, titleAr: e.target.value })} dir="rtl"
                                placeholder="عنوان الحدث..."
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all text-right" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">Description (English)</label>
                            <textarea value={form.descriptionEn} onChange={e => setForm({ ...form, descriptionEn: e.target.value })}
                                rows={4} placeholder="Event description..."
                                className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all resize-none" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">الوصف (عربي)</label>
                            <textarea value={form.descriptionAr} onChange={e => setForm({ ...form, descriptionAr: e.target.value })}
                                rows={4} dir="rtl" placeholder="وصف الحدث..."
                                className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all resize-none text-right" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">Slug</label>
                            <input value={form.slug} onChange={e => setForm({ ...form, slug: e.target.value })}
                                placeholder="event-slug"
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">Location</label>
                            <input value={form.location} onChange={e => setForm({ ...form, location: e.target.value })}
                                placeholder="Event location..."
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">Start Date</label>
                            <input type="datetime-local" value={form.startDate ? form.startDate.slice(0, 16) : ""}
                                onChange={e => setForm({ ...form, startDate: e.target.value })}
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all [color-scheme:dark]" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">End Date</label>
                            <input type="datetime-local" value={form.endDate ? form.endDate.slice(0, 16) : ""}
                                onChange={e => setForm({ ...form, endDate: e.target.value })}
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all [color-scheme:dark]" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium text-slate-300">Registration URL</label>
                        <input value={form.registrationUrl} onChange={e => setForm({ ...form, registrationUrl: e.target.value })}
                            placeholder="https://..."
                            className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
                            <select value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all">
                                <option value="draft">Draft</option>
                                <option value="published">Published</option>
                                <option value="scheduled">Scheduled</option>
                                <option value="archived">Archived</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">Featured</label>
                            <button
                                onClick={() => setForm({ ...form, isFeatured: !form.isFeatured })}
                                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm transition-all ${form.isFeatured
                                        ? "bg-amber-500/10 border-amber-500/30 text-amber-400"
                                        : "bg-slate-800 border-slate-700 text-slate-400"
                                    }`}
                            >
                                {form.isFeatured ? <Star className="w-4 h-4 fill-current" /> : <StarOff className="w-4 h-4" />}
                                {form.isFeatured ? "Featured" : "Not Featured"}
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
                        {event ? "Save Changes" : "Create Event"}
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
                        <h3 className="text-white font-semibold">Delete Event</h3>
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

export default function EventsManager() {
    const { token } = useAdminAuth();
    const [events, setEvents] = useState<EventItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [catFilter, setCatFilter] = useState("All");
    const [modalOpen, setModalOpen] = useState(false);
    const [editEvent, setEditEvent] = useState<EventItem | null>(null);
    const [deleteTarget, setDeleteTarget] = useState<EventItem | null>(null);

    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    };

    const fetchEvents = async () => {
        try {
            const res = await fetch("/api/admin/events", { headers });
            if (res.ok) {
                const data = await res.json();
                setEvents(data);
            }
        } catch {
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchEvents(); }, []);

    const filtered = events.filter(e => {
        const matchCat = catFilter === "All" || e.category === catFilter;
        const matchSearch = !search || (e.titleEn || "").toLowerCase().includes(search.toLowerCase()) || (e.titleAr || "").includes(search);
        return matchCat && matchSearch;
    });

    const handleSave = async (form: Omit<EventItem, "id"> & { id?: string }) => {
        try {
            if (editEvent) {
                const res = await fetch(`/api/admin/events/${editEvent.id}`, {
                    method: "PUT", headers, body: JSON.stringify(form),
                });
                if (res.ok) {
                    const updated = await res.json();
                    setEvents(prev => prev.map(e => e.id === editEvent.id ? updated : e));
                }
            } else {
                const res = await fetch("/api/admin/events", {
                    method: "POST", headers, body: JSON.stringify(form),
                });
                if (res.ok) {
                    const created = await res.json();
                    setEvents(prev => [...prev, created]);
                }
            }
        } catch {
        }
        setModalOpen(false);
        setEditEvent(null);
    };

    const handleDelete = async () => {
        if (!deleteTarget) return;
        try {
            const res = await fetch(`/api/admin/events/${deleteTarget.id}`, {
                method: "DELETE", headers,
            });
            if (res.ok) {
                setEvents(prev => prev.filter(e => e.id !== deleteTarget.id));
            }
        } catch {
        }
        setDeleteTarget(null);
    };

    const toggleFeatured = async (event: EventItem) => {
        try {
            const res = await fetch(`/api/admin/events/${event.id}`, {
                method: "PUT", headers,
                body: JSON.stringify({ ...event, isFeatured: !event.isFeatured }),
            });
            if (res.ok) {
                const updated = await res.json();
                setEvents(prev => prev.map(e => e.id === event.id ? updated : e));
            }
        } catch {
        }
    };

    const formatDate = (d: string) => {
        if (!d) return "";
        try {
            return new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
        } catch { return d; }
    };

    return (
        <AdminLayout>
            {(modalOpen || editEvent) && (
                <EventModal
                    event={editEvent}
                    onClose={() => { setModalOpen(false); setEditEvent(null); }}
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
                        <h1 className="text-2xl font-bold text-white">Events Manager</h1>
                        <p className="text-slate-400 text-sm mt-1">{events.length} total events</p>
                    </div>
                    <button
                        onClick={() => { setEditEvent(null); setModalOpen(true); }}
                        className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition-colors shadow-lg shadow-indigo-500/20"
                    >
                        <Plus className="w-4 h-4" />
                        New Event
                    </button>
                </div>

                <div className="grid grid-cols-4 gap-4 mb-6">
                    {[
                        { label: "Published", count: events.filter(e => e.status === "published").length, color: "text-emerald-400" },
                        { label: "Drafts", count: events.filter(e => e.status === "draft").length, color: "text-slate-400" },
                        { label: "Scheduled", count: events.filter(e => e.status === "scheduled").length, color: "text-amber-400" },
                        { label: "Archived", count: events.filter(e => e.status === "archived").length, color: "text-red-400" },
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
                        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search events..."
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
                        <p className="text-sm">Loading events...</p>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                            {filtered.map((event, i) => (
                                <motion.div
                                    key={event.id}
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.06 }}
                                    className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden group"
                                >
                                    <div className="relative h-[160px] overflow-hidden">
                                        {event.coverImage ? (
                                            <img src={event.coverImage} alt={event.titleEn || event.titleAr} className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                                                <Calendar className="w-10 h-10 text-slate-700" />
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                                        <div className="absolute top-3 left-3 flex gap-2">
                                            <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${statusColor[event.status] || statusColor.draft}`}>
                                                {event.status}
                                            </span>
                                            {event.isFeatured && (
                                                <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-amber-500/10 text-amber-400">
                                                    Featured
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-xs text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full">{event.category}</span>
                                            {event.institute && (
                                                <span className="text-xs text-slate-500 flex items-center gap-1">
                                                    <Building2 className="w-3 h-3" />{event.institute}
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="text-sm font-semibold text-white line-clamp-2 mb-1">{event.titleEn || event.titleAr}</h3>
                                        {event.startDate && (
                                            <p className="text-xs text-slate-500 flex items-center gap-1 mb-1">
                                                <Calendar className="w-3 h-3" />{formatDate(event.startDate)}
                                                {event.endDate && <> — {formatDate(event.endDate)}</>}
                                            </p>
                                        )}
                                        {event.location && (
                                            <p className="text-xs text-slate-500 flex items-center gap-1">
                                                <MapPin className="w-3 h-3" />{event.location}
                                            </p>
                                        )}
                                        {event.registrationUrl && (
                                            <p className="text-xs text-indigo-400 flex items-center gap-1 mt-1">
                                                <LinkIcon className="w-3 h-3" />Registration link
                                            </p>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-2 px-4 pb-4">
                                        <button onClick={() => setEditEvent(event)} className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-xl transition-colors">
                                            <Edit2 className="w-3.5 h-3.5" /> Edit
                                        </button>
                                        <button onClick={() => toggleFeatured(event)} className={`p-2 rounded-xl transition-colors ${event.isFeatured ? "bg-amber-500/10 text-amber-400" : "bg-slate-800 text-slate-400 hover:text-amber-400"}`}>
                                            <Star className="w-3.5 h-3.5" />
                                        </button>
                                        <button onClick={() => setDeleteTarget(event)} className="p-2 rounded-xl bg-slate-800 hover:bg-red-500/10 text-slate-400 hover:text-red-400 transition-colors">
                                            <Trash2 className="w-3.5 h-3.5" />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {filtered.length === 0 && (
                            <div className="flex flex-col items-center justify-center py-20 text-slate-500">
                                <FileText className="w-12 h-12 mb-3 opacity-30" />
                                <p className="text-sm">No events found</p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </AdminLayout>
    );
}
