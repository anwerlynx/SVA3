import { useState, useEffect, useCallback } from "react";
import { AdminLayout } from "./AdminLayout";
import { useAdminAuth } from "@/context/AdminAuthContext";
import { motion } from "framer-motion";
import {
    Plus, Search, Edit2, Trash2, X, Check, Upload,
    BookOpen, Monitor, Database, BookMarked,
    Link as LinkIcon, FileText, Hash, Calendar,
    Building2, ExternalLink, AlertTriangle
} from "lucide-react";

interface LibraryResource {
    id: string;
    titleAr: string;
    titleEn: string;
    authorAr: string;
    authorEn: string;
    descriptionAr: string;
    descriptionEn: string;
    category: string;
    type: string;
    isbn: string;
    publishYear: number | null;
    coverImage: string;
    fileUrl: string;
    externalUrl: string;
    institute: string;
}

const categories = ["All", "Computer Science", "Engineering", "Business", "Mathematics", "Science", "General"];

const typeConfig: Record<string, { label: string; icon: React.ElementType; color: string }> = {
    book: { label: "Book", icon: BookOpen, color: "bg-blue-500/10 text-blue-400" },
    digital: { label: "Digital", icon: Monitor, color: "bg-emerald-500/10 text-emerald-400" },
    database: { label: "Database", icon: Database, color: "bg-purple-500/10 text-purple-400" },
    journal: { label: "Journal", icon: BookMarked, color: "bg-amber-500/10 text-amber-400" },
};

const instituteColor: Record<string, string> = {
    engineering: "bg-cyan-500/10 text-cyan-400",
    management: "bg-rose-500/10 text-rose-400",
    both: "bg-indigo-500/10 text-indigo-400",
};

const emptyResource: Omit<LibraryResource, "id"> = {
    titleAr: "", titleEn: "", authorAr: "", authorEn: "",
    descriptionAr: "", descriptionEn: "", category: "General",
    type: "book", isbn: "", publishYear: null, coverImage: "",
    fileUrl: "", externalUrl: "", institute: "both",
};

function ResourceModal({ resource, onClose, onSave }: {
    resource: LibraryResource | null;
    onClose: () => void;
    onSave: (r: LibraryResource | Omit<LibraryResource, "id">) => void;
}) {
    const [form, setForm] = useState<LibraryResource | Omit<LibraryResource, "id">>(
        resource || { ...emptyResource }
    );

    return (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-start justify-center p-4 overflow-y-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-[800px] my-8"
            >
                <div className="flex items-center justify-between p-6 border-b border-slate-800">
                    <h2 className="text-lg font-semibold text-white">{resource ? "Edit Resource" : "New Resource"}</h2>
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
                                placeholder="Resource title..."
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">العنوان (عربي) *</label>
                            <input value={form.titleAr} onChange={e => setForm({ ...form, titleAr: e.target.value })} dir="rtl"
                                placeholder="عنوان المصدر..."
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all text-right" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">Author (English)</label>
                            <input value={form.authorEn} onChange={e => setForm({ ...form, authorEn: e.target.value })}
                                placeholder="Author name..."
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">المؤلف (عربي)</label>
                            <input value={form.authorAr} onChange={e => setForm({ ...form, authorAr: e.target.value })} dir="rtl"
                                placeholder="اسم المؤلف..."
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all text-right" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">Description (English)</label>
                            <textarea value={form.descriptionEn} onChange={e => setForm({ ...form, descriptionEn: e.target.value })}
                                rows={3} placeholder="Resource description..."
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all resize-none" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">الوصف (عربي)</label>
                            <textarea value={form.descriptionAr} onChange={e => setForm({ ...form, descriptionAr: e.target.value })} dir="rtl"
                                rows={3} placeholder="وصف المصدر..."
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all resize-none text-right" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">Type</label>
                            <div className="flex flex-wrap gap-2">
                                {Object.entries(typeConfig).map(([key, cfg]) => (
                                    <button key={key} onClick={() => setForm({ ...form, type: key })}
                                        className={`flex items-center gap-1.5 px-3 py-2 rounded-xl border text-sm transition-all ${form.type === key
                                            ? `${cfg.color} border-current`
                                            : "bg-slate-800 border-slate-700 text-slate-400 hover:text-white"
                                        }`}>
                                        <cfg.icon className="w-3.5 h-3.5" />
                                        {cfg.label}
                                    </button>
                                ))}
                            </div>
                        </div>
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
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300 flex items-center gap-1.5"><Hash className="w-3.5 h-3.5" /> ISBN</label>
                            <input value={form.isbn} onChange={e => setForm({ ...form, isbn: e.target.value })}
                                placeholder="978-0-123456-78-9"
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300 flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> Publish Year</label>
                            <input type="number" value={form.publishYear ?? ""} onChange={e => setForm({ ...form, publishYear: e.target.value ? parseInt(e.target.value) : null })}
                                placeholder="2024"
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300 flex items-center gap-1.5"><LinkIcon className="w-3.5 h-3.5" /> File URL</label>
                            <input value={form.fileUrl} onChange={e => setForm({ ...form, fileUrl: e.target.value })}
                                placeholder="https://files.example.com/book.pdf"
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300 flex items-center gap-1.5"><ExternalLink className="w-3.5 h-3.5" /> External URL</label>
                            <input value={form.externalUrl} onChange={e => setForm({ ...form, externalUrl: e.target.value })}
                                placeholder="https://example.com/resource"
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" />
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-end gap-3 p-6 border-t border-slate-800">
                    <button onClick={onClose} className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm rounded-xl transition-colors">
                        Cancel
                    </button>
                    <button onClick={() => onSave(form)} className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition-colors flex items-center gap-2">
                        <Check className="w-4 h-4" />
                        {resource ? "Save Changes" : "Create Resource"}
                    </button>
                </div>
            </motion.div>
        </div>
    );
}

function DeleteConfirmModal({ resource, onClose, onConfirm }: {
    resource: LibraryResource;
    onClose: () => void;
    onConfirm: () => void;
}) {
    return (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-[420px] p-6"
            >
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-red-500/10">
                        <AlertTriangle className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white">Delete Resource</h3>
                        <p className="text-sm text-slate-400">This action cannot be undone.</p>
                    </div>
                </div>
                <p className="text-sm text-slate-300 mb-6">
                    Are you sure you want to delete <span className="font-semibold text-white">"{resource.titleEn || resource.titleAr}"</span>?
                </p>
                <div className="flex items-center justify-end gap-3">
                    <button onClick={onClose} className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm rounded-xl transition-colors">
                        Cancel
                    </button>
                    <button onClick={onConfirm} className="px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white text-sm font-semibold rounded-xl transition-colors flex items-center gap-2">
                        <Trash2 className="w-4 h-4" />
                        Delete
                    </button>
                </div>
            </motion.div>
        </div>
    );
}

export default function LibraryManager() {
    const { token } = useAdminAuth();
    const [resources, setResources] = useState<LibraryResource[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [typeFilter, setTypeFilter] = useState("All");
    const [catFilter, setCatFilter] = useState("All");
    const [modalOpen, setModalOpen] = useState(false);
    const [editResource, setEditResource] = useState<LibraryResource | null>(null);
    const [deleteTarget, setDeleteTarget] = useState<LibraryResource | null>(null);

    const headers = useCallback(() => ({
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
    }), [token]);

    const fetchResources = useCallback(async () => {
        try {
            const res = await fetch("/api/admin/library", { headers: headers() });
            if (res.ok) {
                const data = await res.json();
                setResources(Array.isArray(data) ? data : []);
            }
        } catch {
        } finally {
            setLoading(false);
        }
    }, [headers]);

    useEffect(() => {
        fetchResources();
    }, [fetchResources]);

    const handleSave = async (resource: LibraryResource | Omit<LibraryResource, "id">) => {
        const isEdit = "id" in resource && resource.id;
        const url = isEdit ? `/api/admin/library/${(resource as LibraryResource).id}` : "/api/admin/library";
        const method = isEdit ? "PUT" : "POST";

        try {
            const res = await fetch(url, { method, headers: headers(), body: JSON.stringify(resource) });
            if (res.ok) {
                await fetchResources();
            }
        } catch {
        }
        setModalOpen(false);
        setEditResource(null);
    };

    const handleDelete = async () => {
        if (!deleteTarget) return;
        try {
            await fetch(`/api/admin/library/${deleteTarget.id}`, { method: "DELETE", headers: headers() });
            await fetchResources();
        } catch {
        }
        setDeleteTarget(null);
    };

    const typeOptions = ["All", "book", "digital", "database", "journal"];

    const filtered = resources.filter(r => {
        const matchType = typeFilter === "All" || r.type === typeFilter;
        const matchCat = catFilter === "All" || r.category === catFilter;
        const matchSearch = !search || (r.titleEn || "").toLowerCase().includes(search.toLowerCase()) || (r.titleAr || "").includes(search) || (r.authorEn || "").toLowerCase().includes(search.toLowerCase());
        return matchType && matchCat && matchSearch;
    });

    return (
        <AdminLayout>
            {(modalOpen || editResource) && (
                <ResourceModal
                    resource={editResource}
                    onClose={() => { setModalOpen(false); setEditResource(null); }}
                    onSave={handleSave}
                />
            )}

            {deleteTarget && (
                <DeleteConfirmModal
                    resource={deleteTarget}
                    onClose={() => setDeleteTarget(null)}
                    onConfirm={handleDelete}
                />
            )}

            <div className="p-6 md:p-8 max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-white">Library Resources</h1>
                        <p className="text-slate-400 text-sm mt-1">{resources.length} total resources</p>
                    </div>
                    <button
                        onClick={() => { setEditResource(null); setModalOpen(true); }}
                        className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition-colors shadow-lg shadow-indigo-500/20"
                    >
                        <Plus className="w-4 h-4" />
                        New Resource
                    </button>
                </div>

                <div className="grid grid-cols-4 gap-4 mb-6">
                    {Object.entries(typeConfig).map(([key, cfg]) => {
                        const count = resources.filter(r => r.type === key).length;
                        return (
                            <div key={key} className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center">
                                <div className="flex items-center justify-center mb-1">
                                    <cfg.icon className={`w-5 h-5 ${cfg.color.split(" ")[1]}`} />
                                </div>
                                <p className={`text-2xl font-bold ${cfg.color.split(" ")[1]}`}>{count}</p>
                                <p className="text-xs text-slate-500 mt-0.5">{cfg.label}s</p>
                            </div>
                        );
                    })}
                </div>

                <div className="flex flex-col gap-4 mb-6">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="relative flex-1 max-w-sm">
                            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search resources..."
                                className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" />
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {typeOptions.map(t => (
                                <button key={t} onClick={() => setTypeFilter(t)}
                                    className={`px-4 py-2 rounded-xl text-sm transition-all flex items-center gap-1.5 ${typeFilter === t ? "bg-indigo-600 text-white" : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600"}`}>
                                    {t !== "All" && (() => { const Icon = typeConfig[t].icon; return <Icon className="w-3.5 h-3.5" />; })()}
                                    {t === "All" ? "All Types" : typeConfig[t].label}
                                </button>
                            ))}
                        </div>
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
                        <div className="w-8 h-8 border-2 border-slate-600 border-t-indigo-500 rounded-full animate-spin mb-3" />
                        <p className="text-sm">Loading resources...</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                        {filtered.map((resource, i) => {
                            const cfg = typeConfig[resource.type] || typeConfig.book;
                            const TypeIcon = cfg.icon;
                            return (
                                <motion.div
                                    key={resource.id}
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.06 }}
                                    className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden group"
                                >
                                    <div className="relative h-[160px] overflow-hidden">
                                        {resource.coverImage ? (
                                            <img src={resource.coverImage} alt={resource.titleEn || resource.titleAr} className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                                                <TypeIcon className={`w-12 h-12 ${cfg.color.split(" ")[1]} opacity-30`} />
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                                        <div className="absolute top-3 left-3 flex gap-2">
                                            <span className={`text-xs px-2.5 py-1 rounded-full font-medium flex items-center gap-1 ${cfg.color}`}>
                                                <TypeIcon className="w-3 h-3" />
                                                {cfg.label}
                                            </span>
                                            {resource.institute && (
                                                <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${instituteColor[resource.institute] || ""}`}>
                                                    {resource.institute}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            {resource.category && (
                                                <span className="text-xs text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full">{resource.category}</span>
                                            )}
                                            {resource.publishYear && (
                                                <span className="text-xs text-slate-500 flex items-center gap-1"><Calendar className="w-3 h-3" />{resource.publishYear}</span>
                                            )}
                                        </div>
                                        <h3 className="text-sm font-semibold text-white line-clamp-2 mb-1">{resource.titleEn || resource.titleAr}</h3>
                                        {(resource.authorEn || resource.authorAr) && (
                                            <p className="text-xs text-slate-400 mb-1">by {resource.authorEn || resource.authorAr}</p>
                                        )}
                                        {resource.isbn && (
                                            <p className="text-xs text-slate-500 flex items-center gap-1"><Hash className="w-3 h-3" />ISBN: {resource.isbn}</p>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-2 px-4 pb-4">
                                        <button onClick={() => setEditResource(resource)} className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-xl transition-colors">
                                            <Edit2 className="w-3.5 h-3.5" /> Edit
                                        </button>
                                        {(resource.fileUrl || resource.externalUrl) && (
                                            <a href={resource.fileUrl || resource.externalUrl} target="_blank" rel="noopener noreferrer"
                                                className="p-2 rounded-xl bg-slate-800 hover:bg-indigo-500/10 text-slate-400 hover:text-indigo-400 transition-colors">
                                                <ExternalLink className="w-3.5 h-3.5" />
                                            </a>
                                        )}
                                        <button onClick={() => setDeleteTarget(resource)} className="p-2 rounded-xl bg-slate-800 hover:bg-red-500/10 text-slate-400 hover:text-red-400 transition-colors">
                                            <Trash2 className="w-3.5 h-3.5" />
                                        </button>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                )}

                {!loading && filtered.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-20 text-slate-500">
                        <FileText className="w-12 h-12 mb-3 opacity-30" />
                        <p className="text-sm">No resources found</p>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}