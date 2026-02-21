import { useState, useEffect } from "react";
import { AdminLayout } from "./AdminLayout";
import { useAdminAuth } from "@/context/AdminAuthContext";
import { motion } from "framer-motion";
import {
    Plus, Search, Edit2, Trash2, FileText, Globe,
    X, Check, Clock, Hash, ArrowUpDown,
    AlertTriangle, Image, Tag, Type
} from "lucide-react";

const statusTabs = ["All", "published", "draft", "archived", "scheduled"];

interface PageItem {
    id: string;
    titleAr: string;
    titleEn: string;
    slug: string;
    sections: any;
    status: string;
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string;
    ogImage: string;
    parentId: string;
    sortOrder: number;
}

const emptyPage: Omit<PageItem, "id"> & { id?: string } = {
    titleAr: "", titleEn: "", slug: "", sections: "[]",
    status: "draft", metaTitle: "", metaDescription: "",
    metaKeywords: "", ogImage: "", parentId: "", sortOrder: 0
};

const statusColor: Record<string, string> = {
    published: "bg-emerald-500/10 text-emerald-400",
    draft: "bg-slate-700 text-slate-400",
    scheduled: "bg-amber-500/10 text-amber-400",
    archived: "bg-red-500/10 text-red-400",
};

function PageModal({ page, onClose, onSave }: {
    page: PageItem | null;
    onClose: () => void;
    onSave: (p: Omit<PageItem, "id"> & { id?: string }) => void;
}) {
    const [form, setForm] = useState<Omit<PageItem, "id"> & { id?: string }>(() => {
        if (page) {
            return {
                ...page,
                sections: typeof page.sections === "string" ? page.sections : JSON.stringify(page.sections ?? [], null, 2)
            };
        }
        return { ...emptyPage };
    });

    return (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-start justify-center p-4 overflow-y-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-[800px] my-8"
            >
                <div className="flex items-center justify-between p-6 border-b border-slate-800">
                    <h2 className="text-lg font-semibold text-white">{page ? "Edit Page" : "New Page"}</h2>
                    <button onClick={onClose} className="p-2 rounded-xl hover:bg-slate-800 transition-colors text-slate-400">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-6 flex flex-col gap-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">Title (English)</label>
                            <input value={form.titleEn} onChange={e => setForm({ ...form, titleEn: e.target.value })}
                                placeholder="Page title..."
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">العنوان (عربي)</label>
                            <input value={form.titleAr} onChange={e => setForm({ ...form, titleAr: e.target.value })} dir="rtl"
                                placeholder="عنوان الصفحة..."
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all text-right" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">Slug</label>
                            <input value={form.slug} onChange={e => setForm({ ...form, slug: e.target.value })}
                                placeholder="page-slug"
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">Parent Page ID</label>
                            <input value={form.parentId} onChange={e => setForm({ ...form, parentId: e.target.value })}
                                placeholder="Optional parent page ID..."
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium text-slate-300">Sections (JSON)</label>
                        <textarea value={form.sections} onChange={e => setForm({ ...form, sections: e.target.value })}
                            rows={6} placeholder='[{"type": "hero", "content": {...}}]'
                            className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all resize-none font-mono" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                            <label className="text-sm font-medium text-slate-300">Sort Order</label>
                            <input type="number" value={form.sortOrder} onChange={e => setForm({ ...form, sortOrder: parseInt(e.target.value) || 0 })}
                                placeholder="0"
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all [color-scheme:dark]" />
                        </div>
                    </div>

                    <div className="border-t border-slate-800 pt-5">
                        <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                            <Globe className="w-4 h-4 text-indigo-400" />
                            SEO Settings
                        </h3>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-slate-300">Meta Title</label>
                                <input value={form.metaTitle} onChange={e => setForm({ ...form, metaTitle: e.target.value })}
                                    placeholder="SEO page title..."
                                    className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-slate-300">Meta Description</label>
                                <textarea value={form.metaDescription} onChange={e => setForm({ ...form, metaDescription: e.target.value })}
                                    rows={2} placeholder="SEO description..."
                                    className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all resize-none" />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-slate-300">Meta Keywords</label>
                                <input value={form.metaKeywords} onChange={e => setForm({ ...form, metaKeywords: e.target.value })}
                                    placeholder="keyword1, keyword2, keyword3..."
                                    className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-slate-300">OG Image URL</label>
                                <input value={form.ogImage} onChange={e => setForm({ ...form, ogImage: e.target.value })}
                                    placeholder="https://..."
                                    className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-end gap-3 p-6 border-t border-slate-800">
                    <button onClick={onClose} className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm rounded-xl transition-colors">
                        Cancel
                    </button>
                    <button onClick={() => {
                        let sectionsValue = form.sections;
                        try {
                            sectionsValue = typeof form.sections === "string" ? JSON.parse(form.sections) : form.sections;
                        } catch { sectionsValue = []; }
                        onSave({ ...form, sections: sectionsValue });
                    }} className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition-colors flex items-center gap-2">
                        <Check className="w-4 h-4" />
                        {page ? "Save Changes" : "Create Page"}
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
                        <h3 className="text-white font-semibold">Delete Page</h3>
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

export default function PagesManager() {
    const { token } = useAdminAuth();
    const [pages, setPages] = useState<PageItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
    const [modalOpen, setModalOpen] = useState(false);
    const [editPage, setEditPage] = useState<PageItem | null>(null);
    const [deleteTarget, setDeleteTarget] = useState<PageItem | null>(null);

    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    };

    const fetchPages = async () => {
        try {
            const res = await fetch("/api/admin/pages", { headers });
            if (res.ok) {
                const data = await res.json();
                setPages(data);
            }
        } catch {
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchPages(); }, []);

    const filtered = pages.filter(p => {
        const matchStatus = statusFilter === "All" || p.status === statusFilter;
        const matchSearch = !search || (p.titleEn || "").toLowerCase().includes(search.toLowerCase()) || (p.titleAr || "").includes(search) || (p.slug || "").toLowerCase().includes(search.toLowerCase());
        return matchStatus && matchSearch;
    });

    const handleSave = async (form: Omit<PageItem, "id"> & { id?: string }) => {
        try {
            if (editPage) {
                const res = await fetch(`/api/admin/pages/${editPage.id}`, {
                    method: "PUT", headers, body: JSON.stringify(form),
                });
                if (res.ok) {
                    const updated = await res.json();
                    setPages(prev => prev.map(p => p.id === editPage.id ? updated : p));
                }
            } else {
                const res = await fetch("/api/admin/pages", {
                    method: "POST", headers, body: JSON.stringify(form),
                });
                if (res.ok) {
                    const created = await res.json();
                    setPages(prev => [...prev, created]);
                }
            }
        } catch {
        }
        setModalOpen(false);
        setEditPage(null);
    };

    const handleDelete = async () => {
        if (!deleteTarget) return;
        try {
            const res = await fetch(`/api/admin/pages/${deleteTarget.id}`, {
                method: "DELETE", headers,
            });
            if (res.ok) {
                setPages(prev => prev.filter(p => p.id !== deleteTarget.id));
            }
        } catch {
        }
        setDeleteTarget(null);
    };

    return (
        <AdminLayout>
            {(modalOpen || editPage) && (
                <PageModal
                    page={editPage}
                    onClose={() => { setModalOpen(false); setEditPage(null); }}
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
                        <h1 className="text-2xl font-bold text-white">Pages Manager</h1>
                        <p className="text-slate-400 text-sm mt-1">{pages.length} total pages</p>
                    </div>
                    <button
                        onClick={() => { setEditPage(null); setModalOpen(true); }}
                        className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition-colors shadow-lg shadow-indigo-500/20"
                    >
                        <Plus className="w-4 h-4" />
                        New Page
                    </button>
                </div>

                <div className="grid grid-cols-4 gap-4 mb-6">
                    {[
                        { label: "Published", count: pages.filter(p => p.status === "published").length, color: "text-emerald-400" },
                        { label: "Drafts", count: pages.filter(p => p.status === "draft").length, color: "text-slate-400" },
                        { label: "Archived", count: pages.filter(p => p.status === "archived").length, color: "text-red-400" },
                        { label: "Total", count: pages.length, color: "text-indigo-400" },
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
                        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search pages..."
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {statusTabs.map(s => (
                            <button key={s} onClick={() => setStatusFilter(s)}
                                className={`px-4 py-2 rounded-xl text-sm transition-all capitalize ${statusFilter === s ? "bg-indigo-600 text-white" : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600"}`}>
                                {s}
                            </button>
                        ))}
                    </div>
                </div>

                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20 text-slate-500">
                        <Clock className="w-12 h-12 mb-3 opacity-30 animate-spin" />
                        <p className="text-sm">Loading pages...</p>
                    </div>
                ) : filtered.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 text-slate-500">
                        <FileText className="w-12 h-12 mb-3 opacity-30" />
                        <p className="text-sm">No pages found</p>
                    </div>
                ) : (
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-slate-800">
                                    <th className="text-left px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Page</th>
                                    <th className="text-left px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Slug</th>
                                    <th className="text-left px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                                    <th className="text-left px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                        <span className="flex items-center gap-1">
                                            <ArrowUpDown className="w-3 h-3" />
                                            Order
                                        </span>
                                    </th>
                                    <th className="text-right px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map((page, i) => (
                                    <motion.tr
                                        key={page.id}
                                        initial={{ opacity: 0, y: 16 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.04 }}
                                        className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors group"
                                    >
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0">
                                                    <FileText className="w-4 h-4 text-slate-500" />
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="text-sm font-medium text-white truncate">{page.titleEn || page.titleAr || "Untitled"}</p>
                                                    {page.titleAr && page.titleEn && (
                                                        <p className="text-xs text-slate-500 truncate" dir="rtl">{page.titleAr}</p>
                                                    )}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-sm text-slate-400 font-mono">/{page.slug}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex px-2.5 py-1 rounded-lg text-xs font-medium capitalize ${statusColor[page.status] || statusColor.draft}`}>
                                                {page.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-sm text-slate-400">{page.sortOrder ?? 0}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button
                                                    onClick={() => setEditPage(page)}
                                                    className="p-2 rounded-xl hover:bg-slate-700 transition-colors text-slate-400 hover:text-white"
                                                    title="Edit"
                                                >
                                                    <Edit2 className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => setDeleteTarget(page)}
                                                    className="p-2 rounded-xl hover:bg-red-500/10 transition-colors text-slate-400 hover:text-red-400"
                                                    title="Delete"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}