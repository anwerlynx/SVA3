import { useState } from "react";
import { AdminLayout } from "./AdminLayout";
import { motion } from "framer-motion";
import {
    Plus, Search, Edit2, Trash2, Eye, Calendar, Tag,
    Star, StarOff, X, Check, Upload, Bold, Italic, Link,
    AlignLeft, List, Image as ImageIcon, Clock, FileText
} from "lucide-react";

const categories = ["All", "Conferences", "Honors", "News", "Seminars", "Partnerships", "Events"];

const initialArticles = [
    { id: 1, title: "Our Institutes Sponsor the 9th International Conference", titleAr: "مشاركة معاهدنا كراع للمؤتمر الدولى التاسع", category: "Conferences", status: "published", featured: true, date: "Feb 25, 2026", views: 1240, image: "/figmaAssets/rectangle-10.png" },
    { id: 2, title: "Dean Honors Outstanding Students", titleAr: "صور تكريم الطلبة من العميد", category: "Honors", status: "published", featured: false, date: "Feb 16, 2026", views: 890, image: "/figmaAssets/rectangle-12.png" },
    { id: 3, title: "Women in Science Conference", titleAr: "مؤتمر المرأه في العلوم", category: "Conferences", status: "draft", featured: false, date: "Feb 16, 2026", views: 0, image: "/figmaAssets/rectangle-12-1.png" },
    { id: 4, title: "Professional Development Seminar", titleAr: "ندوة التطوير المهني للخريجين", category: "Seminars", status: "published", featured: false, date: "Feb 10, 2026", views: 654, image: "/figmaAssets/rectangle-12-2.png" },
    { id: 5, title: "New Electrical Engineering Lab Opening", titleAr: "افتتاح المعمل الجديد للهندسة الكهربائية", category: "News", status: "scheduled", featured: true, date: "Feb 5, 2026", views: 0, image: "/figmaAssets/rectangle-17.png" },
];

interface Article {
    id: number;
    title: string;
    titleAr: string;
    category: string;
    status: string;
    featured: boolean;
    date: string;
    views: number;
    image: string;
}

const statusColor: Record<string, string> = {
    published: "bg-emerald-500/10 text-emerald-400",
    draft: "bg-slate-700 text-slate-400",
    scheduled: "bg-amber-500/10 text-amber-400",
};

function ArticleModal({ article, onClose, onSave }: {
    article: Article | null;
    onClose: () => void;
    onSave: (a: Article) => void;
}) {
    const [form, setForm] = useState<Article>(article || {
        id: Date.now(), title: "", titleAr: "", category: "News",
        status: "draft", featured: false, date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        views: 0, image: ""
    });
    const [content, setContent] = useState("");
    const [contentAr, setContentAr] = useState("");

    return (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-start justify-center p-4 overflow-y-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-[800px] my-8"
            >
                <div className="flex items-center justify-between p-6 border-b border-slate-800">
                    <h2 className="text-lg font-semibold text-white">{article ? "Edit Article" : "New Article"}</h2>
                    <button onClick={onClose} className="p-2 rounded-xl hover:bg-slate-800 transition-colors text-slate-400">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-6 flex flex-col gap-5">
                    {/* Cover Image */}
                    <div className="relative rounded-xl overflow-hidden bg-slate-800 border-2 border-dashed border-slate-600 h-[180px] flex items-center justify-center cursor-pointer hover:border-indigo-500 transition-colors group">
                        {form.image ? (
                            <img src={form.image} alt="" className="w-full h-full object-cover" />
                        ) : (
                            <div className="flex flex-col items-center gap-2 text-slate-500 group-hover:text-slate-300 transition-colors">
                                <Upload className="w-8 h-8" />
                                <span className="text-sm">Upload cover image</span>
                            </div>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">Title (English)</label>
                            <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })}
                                placeholder="Article title..."
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">العنوان (عربي)</label>
                            <input value={form.titleAr} onChange={e => setForm({ ...form, titleAr: e.target.value })} dir="rtl"
                                placeholder="عنوان المقال..."
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all text-right" />
                        </div>
                    </div>

                    {/* Rich Text Editor (simplified) */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium text-slate-300">Content (English)</label>
                        <div className="border border-slate-700 rounded-xl overflow-hidden">
                            <div className="flex items-center gap-1 p-2 bg-slate-800 border-b border-slate-700">
                                {[Bold, Italic, Link, AlignLeft, List, ImageIcon].map((Icon, i) => (
                                    <button key={i} className="p-1.5 rounded-lg hover:bg-slate-700 text-slate-400 hover:text-white transition-colors">
                                        <Icon className="w-4 h-4" />
                                    </button>
                                ))}
                            </div>
                            <textarea
                                value={content}
                                onChange={e => setContent(e.target.value)}
                                rows={5}
                                placeholder="Write your article content here..."
                                className="w-full px-4 py-3 bg-slate-900 text-white text-sm focus:outline-none resize-none placeholder-slate-600"
                            />
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
                            <label className="text-sm font-medium text-slate-300">Status</label>
                            <select value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all">
                                <option value="draft">Draft</option>
                                <option value="published">Published</option>
                                <option value="scheduled">Scheduled</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">Featured</label>
                            <button
                                onClick={() => setForm({ ...form, featured: !form.featured })}
                                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm transition-all ${form.featured
                                        ? "bg-amber-500/10 border-amber-500/30 text-amber-400"
                                        : "bg-slate-800 border-slate-700 text-slate-400"
                                    }`}
                            >
                                {form.featured ? <Star className="w-4 h-4 fill-current" /> : <StarOff className="w-4 h-4" />}
                                {form.featured ? "Featured" : "Not Featured"}
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
                        {article ? "Save Changes" : "Publish Article"}
                    </button>
                </div>
            </motion.div>
        </div>
    );
}

export default function AdminNews() {
    const [articles, setArticles] = useState(initialArticles);
    const [search, setSearch] = useState("");
    const [catFilter, setCatFilter] = useState("All");
    const [modalOpen, setModalOpen] = useState(false);
    const [editArticle, setEditArticle] = useState<Article | null>(null);

    const filtered = articles.filter(a => {
        const matchCat = catFilter === "All" || a.category === catFilter;
        const matchSearch = !search || a.title.toLowerCase().includes(search.toLowerCase());
        return matchCat && matchSearch;
    });

    const handleSave = (article: Article) => {
        if (editArticle) {
            setArticles(prev => prev.map(a => a.id === article.id ? article : a));
        } else {
            setArticles(prev => [...prev, article]);
        }
        setModalOpen(false);
        setEditArticle(null);
    };

    const toggleFeatured = (id: number) => {
        setArticles(prev => prev.map(a => a.id === id ? { ...a, featured: !a.featured } : a));
    };

    return (
        <AdminLayout>
            {(modalOpen || editArticle) && (
                <ArticleModal
                    article={editArticle}
                    onClose={() => { setModalOpen(false); setEditArticle(null); }}
                    onSave={handleSave}
                />
            )}

            <div className="p-6 md:p-8 max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-white">News & Events</h1>
                        <p className="text-slate-400 text-sm mt-1">{articles.length} total articles</p>
                    </div>
                    <button
                        onClick={() => { setEditArticle(null); setModalOpen(true); }}
                        className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition-colors shadow-lg shadow-indigo-500/20"
                    >
                        <Plus className="w-4 h-4" />
                        New Article
                    </button>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                    {[
                        { label: "Published", count: articles.filter(a => a.status === "published").length, color: "text-emerald-400" },
                        { label: "Drafts", count: articles.filter(a => a.status === "draft").length, color: "text-slate-400" },
                        { label: "Scheduled", count: articles.filter(a => a.status === "scheduled").length, color: "text-amber-400" },
                    ].map((s, i) => (
                        <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center">
                            <p className={`text-2xl font-bold ${s.color}`}>{s.count}</p>
                            <p className="text-xs text-slate-500 mt-0.5">{s.label}</p>
                        </div>
                    ))}
                </div>

                {/* Filters */}
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search articles..."
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

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {filtered.map((article, i) => (
                        <motion.div
                            key={article.id}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.06 }}
                            className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden group"
                        >
                            <div className="relative h-[160px] overflow-hidden">
                                <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                                <div className="absolute top-3 left-3 flex gap-2">
                                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${statusColor[article.status]}`}>
                                        {article.status}
                                    </span>
                                    {article.featured && (
                                        <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-amber-500/10 text-amber-400">
                                            Featured
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-xs text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full">{article.category}</span>
                                    <span className="text-xs text-slate-500 flex items-center gap-1"><Calendar className="w-3 h-3" />{article.date}</span>
                                </div>
                                <h3 className="text-sm font-semibold text-white line-clamp-2 mb-1">{article.title}</h3>
                                <p className="text-xs text-slate-500 flex items-center gap-1"><Eye className="w-3 h-3" />{article.views} views</p>
                            </div>
                            <div className="flex items-center gap-2 px-4 pb-4">
                                <button onClick={() => setEditArticle(article)} className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-xl transition-colors">
                                    <Edit2 className="w-3.5 h-3.5" /> Edit
                                </button>
                                <button onClick={() => toggleFeatured(article.id)} className={`p-2 rounded-xl transition-colors ${article.featured ? "bg-amber-500/10 text-amber-400" : "bg-slate-800 text-slate-400 hover:text-amber-400"}`}>
                                    <Star className="w-3.5 h-3.5" />
                                </button>
                                <button onClick={() => setArticles(prev => prev.filter(a => a.id !== article.id))} className="p-2 rounded-xl bg-slate-800 hover:bg-red-500/10 text-slate-400 hover:text-red-400 transition-colors">
                                    <Trash2 className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-20 text-slate-500">
                        <FileText className="w-12 h-12 mb-3 opacity-30" />
                        <p className="text-sm">No articles found</p>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}
