import { useState, useEffect } from "react";
import { AdminLayout } from "./AdminLayout";
import { useAdminAuth } from "@/context/AdminAuthContext";
import { motion } from "framer-motion";
import {
    Plus, Search, Edit2, Trash2, HelpCircle, MessageSquare,
    X, Check, Clock, AlertTriangle, ToggleLeft, ToggleRight,
    Hash, Filter
} from "lucide-react";

const categories = ["All", "General", "Admission", "Academic", "Financial", "Student Life", "Library"];

interface FAQItem {
    id: string;
    questionAr: string;
    questionEn: string;
    answerAr: string;
    answerEn: string;
    category: string;
    sortOrder: number;
    isActive: boolean;
}

const emptyFaq: Omit<FAQItem, "id"> & { id?: string } = {
    questionAr: "", questionEn: "", answerAr: "", answerEn: "",
    category: "General", sortOrder: 0, isActive: true
};

const categoryColor: Record<string, string> = {
    General: "bg-slate-500/10 text-slate-400",
    Admission: "bg-emerald-500/10 text-emerald-400",
    Academic: "bg-indigo-500/10 text-indigo-400",
    Financial: "bg-amber-500/10 text-amber-400",
    "Student Life": "bg-pink-500/10 text-pink-400",
    Library: "bg-cyan-500/10 text-cyan-400",
};

function FAQModal({ faq, onClose, onSave }: {
    faq: FAQItem | null;
    onClose: () => void;
    onSave: (e: Omit<FAQItem, "id"> & { id?: string }) => void;
}) {
    const [form, setForm] = useState<Omit<FAQItem, "id"> & { id?: string }>(faq || { ...emptyFaq });

    return (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-start justify-center p-4 overflow-y-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-[800px] my-8"
            >
                <div className="flex items-center justify-between p-6 border-b border-slate-800">
                    <h2 className="text-lg font-semibold text-white">{faq ? "Edit FAQ" : "New FAQ"}</h2>
                    <button onClick={onClose} className="p-2 rounded-xl hover:bg-slate-800 transition-colors text-slate-400">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-6 flex flex-col gap-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">Question (English)</label>
                            <input value={form.questionEn} onChange={e => setForm({ ...form, questionEn: e.target.value })}
                                placeholder="Question in English..."
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">السؤال (عربي) *</label>
                            <input value={form.questionAr} onChange={e => setForm({ ...form, questionAr: e.target.value })} dir="rtl"
                                placeholder="السؤال بالعربية..."
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all text-right" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">Answer (English)</label>
                            <textarea value={form.answerEn} onChange={e => setForm({ ...form, answerEn: e.target.value })}
                                rows={4} placeholder="Answer in English..."
                                className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all resize-none" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">الإجابة (عربي) *</label>
                            <textarea value={form.answerAr} onChange={e => setForm({ ...form, answerAr: e.target.value })}
                                rows={4} dir="rtl" placeholder="الإجابة بالعربية..."
                                className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all resize-none text-right" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">Category</label>
                            <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all">
                                {categories.filter(c => c !== "All").map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">Sort Order</label>
                            <input type="number" value={form.sortOrder} onChange={e => setForm({ ...form, sortOrder: parseInt(e.target.value) || 0 })}
                                placeholder="0"
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" />
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
                                {form.isActive ? <ToggleRight className="w-4 h-4" /> : <ToggleLeft className="w-4 h-4" />}
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
                        {faq ? "Save Changes" : "Create FAQ"}
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
                        <h3 className="text-white font-semibold">Delete FAQ</h3>
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

export default function FAQsManager() {
    const { token } = useAdminAuth();
    const [faqs, setFaqs] = useState<FAQItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [catFilter, setCatFilter] = useState("All");
    const [modalOpen, setModalOpen] = useState(false);
    const [editFaq, setEditFaq] = useState<FAQItem | null>(null);
    const [deleteTarget, setDeleteTarget] = useState<FAQItem | null>(null);

    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    };

    const fetchFaqs = async () => {
        try {
            const res = await fetch("/api/admin/faqs", { headers });
            if (res.ok) {
                const data = await res.json();
                setFaqs(data);
            }
        } catch {
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchFaqs(); }, []);

    const filtered = faqs.filter(f => {
        const matchCat = catFilter === "All" || f.category === catFilter;
        const matchSearch = !search || (f.questionEn || "").toLowerCase().includes(search.toLowerCase()) || (f.questionAr || "").includes(search);
        return matchCat && matchSearch;
    });

    const handleSave = async (form: Omit<FAQItem, "id"> & { id?: string }) => {
        try {
            if (editFaq) {
                const res = await fetch(`/api/admin/faqs/${editFaq.id}`, {
                    method: "PUT", headers, body: JSON.stringify(form),
                });
                if (res.ok) {
                    const updated = await res.json();
                    setFaqs(prev => prev.map(f => f.id === editFaq.id ? updated : f));
                }
            } else {
                const res = await fetch("/api/admin/faqs", {
                    method: "POST", headers, body: JSON.stringify(form),
                });
                if (res.ok) {
                    const created = await res.json();
                    setFaqs(prev => [...prev, created]);
                }
            }
        } catch {
        }
        setModalOpen(false);
        setEditFaq(null);
    };

    const handleDelete = async () => {
        if (!deleteTarget) return;
        try {
            const res = await fetch(`/api/admin/faqs/${deleteTarget.id}`, {
                method: "DELETE", headers,
            });
            if (res.ok) {
                setFaqs(prev => prev.filter(f => f.id !== deleteTarget.id));
            }
        } catch {
        }
        setDeleteTarget(null);
    };

    const toggleActive = async (faq: FAQItem) => {
        try {
            const res = await fetch(`/api/admin/faqs/${faq.id}`, {
                method: "PUT", headers,
                body: JSON.stringify({ ...faq, isActive: !faq.isActive }),
            });
            if (res.ok) {
                const updated = await res.json();
                setFaqs(prev => prev.map(f => f.id === faq.id ? updated : f));
            }
        } catch {
        }
    };

    return (
        <AdminLayout>
            {(modalOpen || editFaq) && (
                <FAQModal
                    faq={editFaq}
                    onClose={() => { setModalOpen(false); setEditFaq(null); }}
                    onSave={handleSave}
                />
            )}

            {deleteTarget && (
                <DeleteConfirmModal
                    title={deleteTarget.questionEn || deleteTarget.questionAr}
                    onClose={() => setDeleteTarget(null)}
                    onConfirm={handleDelete}
                />
            )}

            <div className="p-6 md:p-8 max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-white">FAQs Manager</h1>
                        <p className="text-slate-400 text-sm mt-1">{faqs.length} total FAQs</p>
                    </div>
                    <button
                        onClick={() => { setEditFaq(null); setModalOpen(true); }}
                        className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition-colors shadow-lg shadow-indigo-500/20"
                    >
                        <Plus className="w-4 h-4" />
                        New FAQ
                    </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {[
                        { label: "Active", count: faqs.filter(f => f.isActive).length, color: "text-emerald-400" },
                        { label: "Inactive", count: faqs.filter(f => !f.isActive).length, color: "text-red-400" },
                        { label: "Categories", count: new Set(faqs.map(f => f.category)).size, color: "text-indigo-400" },
                        { label: "Total", count: faqs.length, color: "text-slate-400" },
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
                        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search FAQs..."
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
                        <p className="text-sm">Loading FAQs...</p>
                    </div>
                ) : (
                    <>
                        <div className="flex flex-col gap-3">
                            {filtered.map((faq, i) => (
                                <motion.div
                                    key={faq.id}
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.04 }}
                                    className="bg-slate-900 border border-slate-800 rounded-2xl p-5 group hover:border-slate-700 transition-all"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex items-start gap-4 flex-1 min-w-0">
                                            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <HelpCircle className="w-5 h-5 text-indigo-400" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-white font-medium text-sm leading-snug">
                                                    {faq.questionEn || faq.questionAr}
                                                </h3>
                                                {faq.questionAr && faq.questionEn && (
                                                    <p className="text-slate-500 text-xs mt-0.5" dir="rtl">{faq.questionAr}</p>
                                                )}
                                                <div className="flex items-start gap-2 mt-2">
                                                    <MessageSquare className="w-3.5 h-3.5 text-slate-600 mt-0.5 flex-shrink-0" />
                                                    <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
                                                        {faq.answerEn || faq.answerAr || "No answer provided"}
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-2 mt-3 flex-wrap">
                                                    <span className={`px-2.5 py-0.5 rounded-lg text-xs font-medium ${categoryColor[faq.category] || categoryColor.General}`}>
                                                        {faq.category}
                                                    </span>
                                                    <span className="flex items-center gap-1 text-xs text-slate-500">
                                                        <Hash className="w-3 h-3" />
                                                        {faq.sortOrder}
                                                    </span>
                                                    <span className={`px-2.5 py-0.5 rounded-lg text-xs font-medium ${faq.isActive ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400"}`}>
                                                        {faq.isActive ? "Active" : "Inactive"}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                                            <button
                                                onClick={() => toggleActive(faq)}
                                                className={`p-2 rounded-xl transition-colors ${faq.isActive ? "hover:bg-red-500/10 text-slate-400 hover:text-red-400" : "hover:bg-emerald-500/10 text-slate-400 hover:text-emerald-400"}`}
                                                title={faq.isActive ? "Deactivate" : "Activate"}
                                            >
                                                {faq.isActive ? <ToggleRight className="w-4 h-4" /> : <ToggleLeft className="w-4 h-4" />}
                                            </button>
                                            <button
                                                onClick={() => setEditFaq(faq)}
                                                className="p-2 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                                                title="Edit"
                                            >
                                                <Edit2 className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => setDeleteTarget(faq)}
                                                className="p-2 rounded-xl hover:bg-red-500/10 text-slate-400 hover:text-red-400 transition-colors"
                                                title="Delete"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {filtered.length === 0 && !loading && (
                            <div className="flex flex-col items-center justify-center py-20 text-slate-500">
                                <HelpCircle className="w-16 h-16 mb-4 opacity-20" />
                                <p className="text-lg font-medium text-slate-400">No FAQs found</p>
                                <p className="text-sm mt-1">
                                    {search || catFilter !== "All" ? "Try adjusting your filters" : "Create your first FAQ to get started"}
                                </p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </AdminLayout>
    );
}
