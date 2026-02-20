import { useState } from "react";
import { AdminLayout } from "./AdminLayout";
import { motion, AnimatePresence } from "framer-motion";
import {
    Building2, Plus, Search, Edit2, Trash2, X, Save,
    GraduationCap, Users, BookOpen, ChevronRight, ToggleLeft, ToggleRight
} from "lucide-react";

interface Department {
    id: string;
    nameAr: string;
    nameEn: string;
    descriptionAr: string;
    descriptionEn: string;
    institute: "engineering" | "management";
    slug: string;
    isActive: boolean;
    iconName: string;
    facultyCount: number;
    studentCount: number;
    courseCount: number;
}

const initialDepts: Department[] = [
    { id: "1", nameAr: "هندسة مدنية", nameEn: "Civil Engineering", descriptionAr: "دراسة تصميم وإنشاء المباني والبنية التحتية", descriptionEn: "Study of design and construction of buildings and infrastructure", institute: "engineering", slug: "civil-engineering", isActive: true, iconName: "Building2", facultyCount: 12, studentCount: 245, courseCount: 38 },
    { id: "2", nameAr: "هندسة كهربائية", nameEn: "Electrical Engineering", descriptionAr: "دراسة الأنظمة الكهربائية والإلكترونية", descriptionEn: "Study of electrical and electronic systems", institute: "engineering", slug: "electrical-engineering", isActive: true, iconName: "Zap", facultyCount: 10, studentCount: 198, courseCount: 35 },
    { id: "3", nameAr: "هندسة معمارية", nameEn: "Architecture", descriptionAr: "دراسة تصميم المباني والفضاءات", descriptionEn: "Study of building and space design", institute: "engineering", slug: "architecture", isActive: true, iconName: "Layers", facultyCount: 8, studentCount: 156, courseCount: 32 },
    { id: "4", nameAr: "محاسبة", nameEn: "Accounting", descriptionAr: "دراسة المبادئ المالية والمحاسبية", descriptionEn: "Study of financial and accounting principles", institute: "management", slug: "accounting", isActive: true, iconName: "Calculator", facultyCount: 9, studentCount: 312, courseCount: 30 },
    { id: "5", nameAr: "إدارة أعمال", nameEn: "Business Administration", descriptionAr: "دراسة مبادئ إدارة الأعمال والتنظيم", descriptionEn: "Study of business management and organizational principles", institute: "management", slug: "business-administration", isActive: true, iconName: "Briefcase", facultyCount: 11, studentCount: 380, courseCount: 34 },
    { id: "6", nameAr: "نظم المعلومات الإدارية", nameEn: "Management Information Systems", descriptionAr: "دراسة نظم المعلومات في بيئة الأعمال", descriptionEn: "Study of information systems in business environments", institute: "management", slug: "mis", isActive: true, iconName: "Database", facultyCount: 7, studentCount: 224, courseCount: 28 },
];

const emptyDept: Omit<Department, "id" | "facultyCount" | "studentCount" | "courseCount"> = {
    nameAr: "", nameEn: "", descriptionAr: "", descriptionEn: "",
    institute: "engineering", slug: "", isActive: true, iconName: "Building2"
};

function DeptModal({ dept, onClose, onSave }: {
    dept: Department | null;
    onClose: () => void;
    onSave: (d: Department) => void;
}) {
    const [form, setForm] = useState<Omit<Department, "id" | "facultyCount" | "studentCount" | "courseCount">>(
        dept ? { nameAr: dept.nameAr, nameEn: dept.nameEn, descriptionAr: dept.descriptionAr, descriptionEn: dept.descriptionEn, institute: dept.institute, slug: dept.slug, isActive: dept.isActive, iconName: dept.iconName }
            : { ...emptyDept }
    );

    const handleSave = () => {
        onSave({
            id: dept?.id || Date.now().toString(),
            ...form,
            facultyCount: dept?.facultyCount || 0,
            studentCount: dept?.studentCount || 0,
            courseCount: dept?.courseCount || 0,
        });
    };

    const autoSlug = (name: string) => name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
                <div className="flex items-center justify-between p-6 border-b border-slate-800">
                    <div>
                        <h2 className="text-lg font-bold text-white">{dept ? "Edit Department" : "Add Department"}</h2>
                        <p className="text-xs text-slate-500 mt-0.5">{dept ? "Update department information" : "Create a new academic department"}</p>
                    </div>
                    <button onClick={onClose} className="p-2 rounded-xl hover:bg-slate-800 transition-colors text-slate-400 hover:text-white">
                        <X className="w-5 h-5" />
                    </button>
                </div>
                <div className="p-6 flex flex-col gap-5">
                    {/* Institute */}
                    <div>
                        <label className="text-xs font-medium text-slate-400 mb-2 block">Institute</label>
                        <div className="grid grid-cols-2 gap-3">
                            {(["engineering", "management"] as const).map(inst => (
                                <button key={inst} onClick={() => setForm(f => ({ ...f, institute: inst }))}
                                    className={`py-3 rounded-xl border text-sm font-medium capitalize transition-all ${form.institute === inst ? "bg-indigo-600 border-indigo-500 text-white" : "bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-600"}`}>
                                    {inst === "engineering" ? "🏗️ Engineering" : "📊 Management"}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Names */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-xs font-medium text-slate-400 mb-2 block">Name (Arabic)</label>
                            <input value={form.nameAr} onChange={e => setForm(f => ({ ...f, nameAr: e.target.value }))}
                                dir="rtl" placeholder="اسم القسم بالعربية"
                                className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500" />
                        </div>
                        <div>
                            <label className="text-xs font-medium text-slate-400 mb-2 block">Name (English)</label>
                            <input value={form.nameEn} onChange={e => setForm(f => ({ ...f, nameEn: e.target.value, slug: autoSlug(e.target.value) }))}
                                placeholder="Department name in English"
                                className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500" />
                        </div>
                    </div>

                    {/* Descriptions */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-xs font-medium text-slate-400 mb-2 block">Description (Arabic)</label>
                            <textarea value={form.descriptionAr} onChange={e => setForm(f => ({ ...f, descriptionAr: e.target.value }))}
                                dir="rtl" rows={3} placeholder="وصف القسم بالعربية"
                                className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 resize-none" />
                        </div>
                        <div>
                            <label className="text-xs font-medium text-slate-400 mb-2 block">Description (English)</label>
                            <textarea value={form.descriptionEn} onChange={e => setForm(f => ({ ...f, descriptionEn: e.target.value }))}
                                rows={3} placeholder="Department description in English"
                                className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 resize-none" />
                        </div>
                    </div>

                    {/* Slug + Status */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-xs font-medium text-slate-400 mb-2 block">URL Slug</label>
                            <input value={form.slug} onChange={e => setForm(f => ({ ...f, slug: e.target.value }))}
                                placeholder="url-slug"
                                className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 font-mono" />
                        </div>
                        <div>
                            <label className="text-xs font-medium text-slate-400 mb-2 block">Status</label>
                            <button onClick={() => setForm(f => ({ ...f, isActive: !f.isActive }))}
                                className={`w-full py-2.5 px-4 rounded-xl border text-sm font-medium transition-all flex items-center gap-2 ${form.isActive ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" : "bg-slate-800 border-slate-700 text-slate-400"}`}>
                                {form.isActive ? <ToggleRight className="w-5 h-5" /> : <ToggleLeft className="w-5 h-5" />}
                                {form.isActive ? "Active" : "Inactive"}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-end gap-3 p-6 border-t border-slate-800">
                    <button onClick={onClose} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm rounded-xl transition-colors">Cancel</button>
                    <button onClick={handleSave} className="flex items-center gap-2 px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition-colors">
                        <Save className="w-4 h-4" /> Save Department
                    </button>
                </div>
            </motion.div>
        </div>
    );
}

export default function AdminDepartments() {
    const [depts, setDepts] = useState<Department[]>(initialDepts);
    const [search, setSearch] = useState("");
    const [filterInstitute, setFilterInstitute] = useState<"all" | "engineering" | "management">("all");
    const [modalDept, setModalDept] = useState<Department | null | undefined>(undefined);
    const [deleteId, setDeleteId] = useState<string | null>(null);

    const filtered = depts.filter(d => {
        const matchSearch = !search || d.nameEn.toLowerCase().includes(search.toLowerCase()) || d.nameAr.includes(search);
        const matchInstitute = filterInstitute === "all" || d.institute === filterInstitute;
        return matchSearch && matchInstitute;
    });

    const handleSave = (dept: Department) => {
        setDepts(prev => {
            const exists = prev.find(d => d.id === dept.id);
            if (exists) return prev.map(d => d.id === dept.id ? dept : d);
            return [...prev, dept];
        });
        setModalDept(undefined);
    };

    const handleDelete = (id: string) => {
        setDepts(prev => prev.filter(d => d.id !== id));
        setDeleteId(null);
    };

    const toggleActive = (id: string) => {
        setDepts(prev => prev.map(d => d.id === id ? { ...d, isActive: !d.isActive } : d));
    };

    const engCount = depts.filter(d => d.institute === "engineering").length;
    const mgmtCount = depts.filter(d => d.institute === "management").length;

    return (
        <AdminLayout>
            <div className="p-6 max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-white">Departments</h1>
                        <p className="text-sm text-slate-400 mt-1">Manage academic departments across both institutes</p>
                    </div>
                    <button onClick={() => setModalDept(null)}
                        className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition-colors shadow-lg shadow-indigo-500/20">
                        <Plus className="w-4 h-4" /> Add Department
                    </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {[
                        { label: "Total Departments", value: depts.length, icon: Building2, color: "text-indigo-400" },
                        { label: "Engineering", value: engCount, icon: GraduationCap, color: "text-amber-400" },
                        { label: "Management", value: mgmtCount, icon: BookOpen, color: "text-emerald-400" },
                        { label: "Total Faculty", value: depts.reduce((a, d) => a + d.facultyCount, 0), icon: Users, color: "text-violet-400" },
                    ].map((stat, i) => (
                        <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <stat.icon className={`w-4 h-4 ${stat.color}`} />
                                <span className="text-xs text-slate-500">{stat.label}</span>
                            </div>
                            <p className="text-2xl font-bold text-white">{stat.value}</p>
                        </div>
                    ))}
                </div>

                {/* Filters */}
                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input value={search} onChange={e => setSearch(e.target.value)}
                            placeholder="Search departments..."
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500" />
                    </div>
                    <div className="flex gap-2">
                        {(["all", "engineering", "management"] as const).map(inst => (
                            <button key={inst} onClick={() => setFilterInstitute(inst)}
                                className={`px-4 py-2.5 rounded-xl text-sm font-medium capitalize transition-all ${filterInstitute === inst ? "bg-indigo-600 text-white" : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"}`}>
                                {inst}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Departments Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filtered.map((dept, i) => (
                        <motion.div key={dept.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                            className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-slate-600 transition-all group">
                            {/* Header */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${dept.institute === "engineering" ? "bg-amber-500/10" : "bg-emerald-500/10"}`}>
                                        <Building2 className={`w-5 h-5 ${dept.institute === "engineering" ? "text-amber-400" : "text-emerald-400"}`} />
                                    </div>
                                    <div>
                                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium capitalize ${dept.institute === "engineering" ? "bg-amber-500/10 text-amber-400" : "bg-emerald-500/10 text-emerald-400"}`}>
                                            {dept.institute}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button onClick={() => setModalDept(dept)} className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors">
                                        <Edit2 className="w-3.5 h-3.5" />
                                    </button>
                                    <button onClick={() => setDeleteId(dept.id)} className="p-1.5 rounded-lg hover:bg-red-500/10 text-slate-400 hover:text-red-400 transition-colors">
                                        <Trash2 className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            </div>

                            <h3 className="text-sm font-semibold text-white mb-0.5">{dept.nameEn}</h3>
                            <p className="text-xs text-slate-500 mb-3">{dept.nameAr}</p>
                            <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2">{dept.descriptionEn}</p>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-2 mb-4">
                                {[
                                    { label: "Faculty", value: dept.facultyCount },
                                    { label: "Students", value: dept.studentCount },
                                    { label: "Courses", value: dept.courseCount },
                                ].map((s, j) => (
                                    <div key={j} className="text-center bg-slate-800/50 rounded-xl py-2">
                                        <p className="text-sm font-bold text-white">{s.value}</p>
                                        <p className="text-[10px] text-slate-500">{s.label}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Footer */}
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] text-slate-600 font-mono">/{dept.slug}</span>
                                <button onClick={() => toggleActive(dept.id)}
                                    className={`flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full font-medium transition-all ${dept.isActive ? "bg-emerald-500/10 text-emerald-400" : "bg-slate-700 text-slate-500"}`}>
                                    {dept.isActive ? <ToggleRight className="w-3.5 h-3.5" /> : <ToggleLeft className="w-3.5 h-3.5" />}
                                    {dept.isActive ? "Active" : "Inactive"}
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div className="text-center py-20 text-slate-500">
                        <Building2 className="w-12 h-12 mx-auto mb-3 opacity-20" />
                        <p>No departments found.</p>
                    </div>
                )}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {modalDept !== undefined && (
                    <DeptModal dept={modalDept} onClose={() => setModalDept(undefined)} onSave={handleSave} />
                )}
            </AnimatePresence>

            {/* Delete Confirm */}
            <AnimatePresence>
                {deleteId && (
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-slate-900 border border-slate-700 rounded-2xl p-6 w-full max-w-sm shadow-2xl">
                            <h3 className="text-base font-bold text-white mb-2">Delete Department?</h3>
                            <p className="text-sm text-slate-400 mb-6">This action cannot be undone. All associated data will be affected.</p>
                            <div className="flex gap-3">
                                <button onClick={() => setDeleteId(null)} className="flex-1 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm rounded-xl transition-colors">Cancel</button>
                                <button onClick={() => handleDelete(deleteId)} className="flex-1 py-2 bg-red-600 hover:bg-red-500 text-white text-sm font-semibold rounded-xl transition-colors">Delete</button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </AdminLayout>
    );
}
