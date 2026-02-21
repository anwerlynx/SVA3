import { useState, useEffect } from "react";
import { AdminLayout } from "./AdminLayout";
import { useAdminAuth } from "@/context/AdminAuthContext";
import { motion } from "framer-motion";
import {
    Plus, Search, Edit2, Trash2, FlaskConical, BookOpen,
    X, Check, Clock, FileText, Link as LinkIcon,
    Building2, AlertTriangle, ExternalLink, GraduationCap
} from "lucide-react";

const categories = ["All", "Journal Article", "Conference Paper", "Book Chapter", "Thesis", "Technical Report"];

interface ResearchItem {
    id: string;
    titleAr: string;
    titleEn: string;
    abstractAr: string;
    abstractEn: string;
    authorIds: string[];
    publishedYear: number | null;
    journal: string;
    doi: string;
    fileUrl: string;
    externalUrl: string;
    category: string;
    institute: string;
    status: string;
}

const emptyResearch: Omit<ResearchItem, "id"> & { id?: string } = {
    titleAr: "", titleEn: "", abstractAr: "", abstractEn: "",
    authorIds: [], publishedYear: null, journal: "", doi: "",
    fileUrl: "", externalUrl: "", category: "Journal Article",
    institute: "both", status: "draft"
};

const statusColor: Record<string, string> = {
    published: "bg-emerald-500/10 text-emerald-400",
    draft: "bg-slate-700 text-slate-400",
    scheduled: "bg-amber-500/10 text-amber-400",
    archived: "bg-red-500/10 text-red-400",
};

function ResearchModal({ research, onClose, onSave }: {
    research: ResearchItem | null;
    onClose: () => void;
    onSave: (r: Omit<ResearchItem, "id"> & { id?: string }) => void;
}) {
    const [form, setForm] = useState<Omit<ResearchItem, "id"> & { id?: string }>(research || { ...emptyResearch });
    const [authorIdsText, setAuthorIdsText] = useState(
        (research?.authorIds || []).join(", ")
    );

    return (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-start justify-center p-4 overflow-y-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-[800px] my-8"
            >
                <div className="flex items-center justify-between p-6 border-b border-slate-800">
                    <h2 className="text-lg font-semibold text-white">{research ? "Edit Research" : "New Research"}</h2>
                    <button onClick={onClose} className="p-2 rounded-xl hover:bg-slate-800 transition-colors text-slate-400">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-6 flex flex-col gap-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">Title (English)</label>
                            <input value={form.titleEn} onChange={e => setForm({ ...form, titleEn: e.target.value })}
                                placeholder="Research title..."
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">العنوان (عربي)</label>
                            <input value={form.titleAr} onChange={e => setForm({ ...form, titleAr: e.target.value })} dir="rtl"
                                placeholder="عنوان البحث..."
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all text-right" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">Abstract (English)</label>
                            <textarea value={form.abstractEn} onChange={e => setForm({ ...form, abstractEn: e.target.value })}
                                rows={4} placeholder="Research abstract..."
                                className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all resize-none" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">الملخص (عربي)</label>
                            <textarea value={form.abstractAr} onChange={e => setForm({ ...form, abstractAr: e.target.value })}
                                rows={4} dir="rtl" placeholder="ملخص البحث..."
                                className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all resize-none text-right" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">Author IDs (comma-separated)</label>
                            <input value={authorIdsText} onChange={e => {
                                setAuthorIdsText(e.target.value);
                                setForm({ ...form, authorIds: e.target.value.split(",").map(s => s.trim()).filter(Boolean) });
                            }}
                                placeholder="author1, author2, ..."
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">Published Year</label>
                            <input type="number" value={form.publishedYear ?? ""} onChange={e => setForm({ ...form, publishedYear: e.target.value ? parseInt(e.target.value) : null })}
                                placeholder="2024"
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all [color-scheme:dark]" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">Journal</label>
                            <input value={form.journal} onChange={e => setForm({ ...form, journal: e.target.value })}
                                placeholder="Journal name..."
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">DOI</label>
                            <input value={form.doi} onChange={e => setForm({ ...form, doi: e.target.value })}
                                placeholder="10.1000/xyz123"
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">File URL</label>
                            <input value={form.fileUrl} onChange={e => setForm({ ...form, fileUrl: e.target.value })}
                                placeholder="https://..."
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">External URL</label>
                            <input value={form.externalUrl} onChange={e => setForm({ ...form, externalUrl: e.target.value })}
                                placeholder="https://..."
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" />
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
                            <select value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all">
                                <option value="draft">Draft</option>
                                <option value="published">Published</option>
                                <option value="scheduled">Scheduled</option>
                                <option value="archived">Archived</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-end gap-3 p-6 border-t border-slate-800">
                    <button onClick={onClose} className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm rounded-xl transition-colors">
                        Cancel
                    </button>
                    <button onClick={() => onSave(form)} className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition-colors flex items-center gap-2">
                        <Check className="w-4 h-4" />
                        {research ? "Save Changes" : "Create Research"}
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
                        <h3 className="text-white font-semibold">Delete Research</h3>
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

export default function ResearchManager() {
    const { token } = useAdminAuth();
    const [researchList, setResearchList] = useState<ResearchItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [catFilter, setCatFilter] = useState("All");
    const [modalOpen, setModalOpen] = useState(false);
    const [editResearch, setEditResearch] = useState<ResearchItem | null>(null);
    const [deleteTarget, setDeleteTarget] = useState<ResearchItem | null>(null);

    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    };

    const fetchResearch = async () => {
        try {
            const res = await fetch("/api/admin/research", { headers });
            if (res.ok) {
                const data = await res.json();
                setResearchList(data);
            }
        } catch {
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchResearch(); }, []);

    const filtered = researchList.filter(r => {
        const matchCat = catFilter === "All" || r.category === catFilter;
        const matchSearch = !search || (r.titleEn || "").toLowerCase().includes(search.toLowerCase()) || (r.titleAr || "").includes(search);
        return matchCat && matchSearch;
    });

    const handleSave = async (form: Omit<ResearchItem, "id"> & { id?: string }) => {
        try {
            if (editResearch) {
                const res = await fetch(`/api/admin/research/${editResearch.id}`, {
                    method: "PUT", headers, body: JSON.stringify(form),
                });
                if (res.ok) {
                    const updated = await res.json();
                    setResearchList(prev => prev.map(r => r.id === editResearch.id ? updated : r));
                }
            } else {
                const res = await fetch("/api/admin/research", {
                    method: "POST", headers, body: JSON.stringify(form),
                });
                if (res.ok) {
                    const created = await res.json();
                    setResearchList(prev => [...prev, created]);
                }
            }
        } catch {
        }
        setModalOpen(false);
        setEditResearch(null);
    };

    const handleDelete = async () => {
        if (!deleteTarget) return;
        try {
            const res = await fetch(`/api/admin/research/${deleteTarget.id}`, {
                method: "DELETE", headers,
            });
            if (res.ok) {
                setResearchList(prev => prev.filter(r => r.id !== deleteTarget.id));
            }
        } catch {
        }
        setDeleteTarget(null);
    };

    return (
        <AdminLayout>
            {(modalOpen || editResearch) && (
                <ResearchModal
                    research={editResearch}
                    onClose={() => { setModalOpen(false); setEditResearch(null); }}
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
                        <h1 className="text-2xl font-bold text-white">Research Manager</h1>
                        <p className="text-slate-400 text-sm mt-1">{researchList.length} total publications</p>
                    </div>
                    <button
                        onClick={() => { setEditResearch(null); setModalOpen(true); }}
                        className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition-colors shadow-lg shadow-indigo-500/20"
                    >
                        <Plus className="w-4 h-4" />
                        New Research
                    </button>
                </div>

                <div className="grid grid-cols-4 gap-4 mb-6">
                    {[
                        { label: "Published", count: researchList.filter(r => r.status === "published").length, color: "text-emerald-400" },
                        { label: "Drafts", count: researchList.filter(r => r.status === "draft").length, color: "text-slate-400" },
                        { label: "Scheduled", count: researchList.filter(r => r.status === "scheduled").length, color: "text-amber-400" },
                        { label: "Archived", count: researchList.filter(r => r.status === "archived").length, color: "text-red-400" },
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
                        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search research..."
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
                        <p className="text-sm">Loading research...</p>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                            {filtered.map((item, i) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.06 }}
                                    className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden group"
                                >
                                    <div className="relative h-[120px] overflow-hidden bg-slate-800 flex items-center justify-center">
                                        <FlaskConical className="w-10 h-10 text-slate-700" />
                                        <div className="absolute top-3 left-3 flex gap-2">
                                            <span className={`text-[11px] px-2.5 py-0.5 rounded-full font-medium ${statusColor[item.status] || statusColor.draft}`}>
                                                {item.status}
                                            </span>
                                        </div>
                                        <div className="absolute top-3 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button onClick={() => setEditResearch(item)}
                                                className="w-8 h-8 bg-slate-900/80 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-indigo-600 transition-colors">
                                                <Edit2 className="w-3.5 h-3.5" />
                                            </button>
                                            <button onClick={() => setDeleteTarget(item)}
                                                className="w-8 h-8 bg-slate-900/80 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-red-600 transition-colors">
                                                <Trash2 className="w-3.5 h-3.5" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="p-4">
                                        <h3 className="text-white font-semibold text-sm line-clamp-2 mb-1">{item.titleEn || item.titleAr}</h3>
                                        {item.journal && (
                                            <p className="text-slate-500 text-xs flex items-center gap-1.5 mb-1">
                                                <BookOpen className="w-3 h-3" />
                                                {item.journal}
                                            </p>
                                        )}
                                        {item.publishedYear && (
                                            <p className="text-slate-500 text-xs flex items-center gap-1.5 mb-1">
                                                <GraduationCap className="w-3 h-3" />
                                                {item.publishedYear}
                                            </p>
                                        )}
                                        <div className="flex items-center gap-2 mt-3 flex-wrap">
                                            {item.category && (
                                                <span className="text-[10px] px-2 py-0.5 bg-slate-800 text-slate-400 rounded-full">
                                                    {item.category}
                                                </span>
                                            )}
                                            <span className="text-[10px] px-2 py-0.5 bg-slate-800 text-slate-400 rounded-full flex items-center gap-1">
                                                <Building2 className="w-2.5 h-2.5" />
                                                {item.institute}
                                            </span>
                                            {item.doi && (
                                                <span className="text-[10px] px-2 py-0.5 bg-slate-800 text-slate-400 rounded-full flex items-center gap-1">
                                                    <LinkIcon className="w-2.5 h-2.5" />
                                                    DOI
                                                </span>
                                            )}
                                            {item.fileUrl && (
                                                <span className="text-[10px] px-2 py-0.5 bg-slate-800 text-slate-400 rounded-full flex items-center gap-1">
                                                    <FileText className="w-2.5 h-2.5" />
                                                    PDF
                                                </span>
                                            )}
                                            {item.externalUrl && (
                                                <span className="text-[10px] px-2 py-0.5 bg-slate-800 text-slate-400 rounded-full flex items-center gap-1">
                                                    <ExternalLink className="w-2.5 h-2.5" />
                                                    Link
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {filtered.length === 0 && (
                            <div className="flex flex-col items-center justify-center py-20 text-slate-500">
                                <FlaskConical className="w-12 h-12 mb-3 opacity-20" />
                                <p className="text-sm">No research found</p>
                                <button onClick={() => { setEditResearch(null); setModalOpen(true); }}
                                    className="mt-3 text-indigo-400 text-sm hover:text-indigo-300 transition-colors">
                                    + Add your first research
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </AdminLayout>
    );
}