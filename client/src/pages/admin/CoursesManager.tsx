import { useState, useEffect } from "react";
import { AdminLayout } from "./AdminLayout";
import { useAdminAuth } from "@/context/AdminAuthContext";
import { motion } from "framer-motion";
import {
    Plus, Search, Edit2, Trash2, X, Check, Clock,
    BookMarked, GraduationCap, AlertTriangle, Hash,
    Building2, Layers, ToggleLeft, ToggleRight
} from "lucide-react";

const levelFilters = ["All", "1", "2", "3", "4"];
const semesters = ["First", "Second", "Summer", "Both"];

interface CourseItem {
    id: string;
    code: string;
    nameAr: string;
    nameEn: string;
    descriptionAr: string;
    descriptionEn: string;
    departmentId: string;
    creditHours: number;
    semester: string;
    level: number;
    isActive: boolean;
}

interface DepartmentItem {
    id: string;
    nameAr: string;
    nameEn: string;
    institute: string;
}

const emptyCourse: Omit<CourseItem, "id"> & { id?: string } = {
    code: "", nameAr: "", nameEn: "", descriptionAr: "", descriptionEn: "",
    departmentId: "", creditHours: 3, semester: "First", level: 1, isActive: true
};

function CourseModal({ course, onClose, onSave, departments }: {
    course: CourseItem | null;
    onClose: () => void;
    onSave: (e: Omit<CourseItem, "id"> & { id?: string }) => void;
    departments: DepartmentItem[];
}) {
    const [form, setForm] = useState<Omit<CourseItem, "id"> & { id?: string }>(course || { ...emptyCourse });

    return (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-start justify-center p-4 overflow-y-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-[800px] my-8"
            >
                <div className="flex items-center justify-between p-6 border-b border-slate-800">
                    <h2 className="text-lg font-semibold text-white">{course ? "Edit Course" : "New Course"}</h2>
                    <button onClick={onClose} className="p-2 rounded-xl hover:bg-slate-800 transition-colors text-slate-400">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-6 flex flex-col gap-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">Course Code *</label>
                            <input value={form.code} onChange={e => setForm({ ...form, code: e.target.value })}
                                placeholder="CS101"
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">Department</label>
                            <select value={form.departmentId} onChange={e => setForm({ ...form, departmentId: e.target.value })}
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all">
                                <option value="">No Department</option>
                                {departments.map(d => <option key={d.id} value={d.id}>{d.nameEn || d.nameAr}</option>)}
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">Name (English)</label>
                            <input value={form.nameEn} onChange={e => setForm({ ...form, nameEn: e.target.value })}
                                placeholder="Course name..."
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">الاسم (عربي) *</label>
                            <input value={form.nameAr} onChange={e => setForm({ ...form, nameAr: e.target.value })} dir="rtl"
                                placeholder="اسم المقرر..."
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all text-right" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">Description (English)</label>
                            <textarea value={form.descriptionEn} onChange={e => setForm({ ...form, descriptionEn: e.target.value })}
                                rows={4} placeholder="Course description..."
                                className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all resize-none" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">الوصف (عربي)</label>
                            <textarea value={form.descriptionAr} onChange={e => setForm({ ...form, descriptionAr: e.target.value })}
                                rows={4} dir="rtl" placeholder="وصف المقرر..."
                                className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all resize-none text-right" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">Credit Hours</label>
                            <input type="number" value={form.creditHours} onChange={e => setForm({ ...form, creditHours: parseInt(e.target.value) || 0 })}
                                min={0} max={12}
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all [color-scheme:dark]" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">Semester</label>
                            <select value={form.semester} onChange={e => setForm({ ...form, semester: e.target.value })}
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all">
                                {semesters.map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">Level</label>
                            <select value={form.level} onChange={e => setForm({ ...form, level: parseInt(e.target.value) })}
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all">
                                {[1, 2, 3, 4].map(l => <option key={l} value={l}>Level {l}</option>)}
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
                        {course ? "Save Changes" : "Create Course"}
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
                        <h3 className="text-white font-semibold">Delete Course</h3>
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

export default function CoursesManager() {
    const { token } = useAdminAuth();
    const [courses, setCourses] = useState<CourseItem[]>([]);
    const [departments, setDepartments] = useState<DepartmentItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [levelFilter, setLevelFilter] = useState("All");
    const [modalOpen, setModalOpen] = useState(false);
    const [editCourse, setEditCourse] = useState<CourseItem | null>(null);
    const [deleteTarget, setDeleteTarget] = useState<CourseItem | null>(null);

    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    };

    const fetchCourses = async () => {
        try {
            const res = await fetch("/api/admin/courses", { headers });
            if (res.ok) {
                const data = await res.json();
                setCourses(data);
            }
        } catch {
        } finally {
            setLoading(false);
        }
    };

    const fetchDepartments = async () => {
        try {
            const res = await fetch("/api/departments");
            if (res.ok) {
                const data = await res.json();
                setDepartments(data);
            }
        } catch {
        }
    };

    useEffect(() => { fetchCourses(); fetchDepartments(); }, []);

    const getDeptName = (deptId: string) => {
        if (!deptId) return "—";
        const dept = departments.find(d => d.id === deptId);
        return dept ? (dept.nameEn || dept.nameAr) : "—";
    };

    const filtered = courses.filter(c => {
        const matchLevel = levelFilter === "All" || c.level === parseInt(levelFilter);
        const matchSearch = !search ||
            (c.code || "").toLowerCase().includes(search.toLowerCase()) ||
            (c.nameEn || "").toLowerCase().includes(search.toLowerCase()) ||
            (c.nameAr || "").includes(search);
        return matchLevel && matchSearch;
    });

    const handleSave = async (form: Omit<CourseItem, "id"> & { id?: string }) => {
        try {
            if (editCourse) {
                const res = await fetch(`/api/admin/courses/${editCourse.id}`, {
                    method: "PUT", headers, body: JSON.stringify(form),
                });
                if (res.ok) {
                    const updated = await res.json();
                    setCourses(prev => prev.map(c => c.id === editCourse.id ? updated : c));
                }
            } else {
                const res = await fetch("/api/admin/courses", {
                    method: "POST", headers, body: JSON.stringify(form),
                });
                if (res.ok) {
                    const created = await res.json();
                    setCourses(prev => [...prev, created]);
                }
            }
        } catch {
        }
        setModalOpen(false);
        setEditCourse(null);
    };

    const handleDelete = async () => {
        if (!deleteTarget) return;
        try {
            const res = await fetch(`/api/admin/courses/${deleteTarget.id}`, {
                method: "DELETE", headers,
            });
            if (res.ok) {
                setCourses(prev => prev.filter(c => c.id !== deleteTarget.id));
            }
        } catch {
        }
        setDeleteTarget(null);
    };

    const toggleActive = async (course: CourseItem) => {
        try {
            const res = await fetch(`/api/admin/courses/${course.id}`, {
                method: "PUT", headers,
                body: JSON.stringify({ ...course, isActive: !course.isActive }),
            });
            if (res.ok) {
                const updated = await res.json();
                setCourses(prev => prev.map(c => c.id === course.id ? updated : c));
            }
        } catch {
        }
    };

    return (
        <AdminLayout>
            {(modalOpen || editCourse) && (
                <CourseModal
                    course={editCourse}
                    onClose={() => { setModalOpen(false); setEditCourse(null); }}
                    onSave={handleSave}
                    departments={departments}
                />
            )}

            {deleteTarget && (
                <DeleteConfirmModal
                    title={deleteTarget.nameEn || deleteTarget.nameAr || deleteTarget.code}
                    onClose={() => setDeleteTarget(null)}
                    onConfirm={handleDelete}
                />
            )}

            <div className="p-6 md:p-8 max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-white flex items-center gap-3">
                            <BookMarked className="w-7 h-7 text-indigo-400" />
                            Courses Manager
                        </h1>
                        <p className="text-slate-400 text-sm mt-1">{courses.length} total courses</p>
                    </div>
                    <button
                        onClick={() => { setEditCourse(null); setModalOpen(true); }}
                        className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition-colors shadow-lg shadow-indigo-500/20"
                    >
                        <Plus className="w-4 h-4" />
                        New Course
                    </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4 mb-6">
                    {[
                        { label: "Total", count: courses.length, color: "text-white", icon: BookMarked },
                        { label: "Active", count: courses.filter(c => c.isActive).length, color: "text-emerald-400", icon: Check },
                        { label: "Level 1", count: courses.filter(c => c.level === 1).length, color: "text-indigo-400", icon: Layers },
                        { label: "Level 2", count: courses.filter(c => c.level === 2).length, color: "text-amber-400", icon: Layers },
                        { label: "Level 3", count: courses.filter(c => c.level === 3).length, color: "text-cyan-400", icon: Layers },
                        { label: "Level 4", count: courses.filter(c => c.level === 4).length, color: "text-violet-400", icon: Layers },
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
                        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search courses..."
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {levelFilters.map(l => (
                            <button key={l} onClick={() => setLevelFilter(l)}
                                className={`px-4 py-2 rounded-xl text-sm transition-all ${levelFilter === l ? "bg-indigo-600 text-white" : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600"}`}>
                                {l === "All" ? "All" : `Level ${l}`}
                            </button>
                        ))}
                    </div>
                </div>

                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20 text-slate-500">
                        <Clock className="w-12 h-12 mb-3 opacity-30 animate-spin" />
                        <p className="text-sm">Loading courses...</p>
                    </div>
                ) : (
                    <>
                        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-slate-800">
                                            <th className="text-left px-5 py-3.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">Code</th>
                                            <th className="text-left px-5 py-3.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">Name</th>
                                            <th className="text-left px-5 py-3.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">Department</th>
                                            <th className="text-center px-5 py-3.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">Credit Hrs</th>
                                            <th className="text-center px-5 py-3.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">Semester</th>
                                            <th className="text-center px-5 py-3.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">Level</th>
                                            <th className="text-center px-5 py-3.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">Status</th>
                                            <th className="text-right px-5 py-3.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filtered.map((course, i) => (
                                            <motion.tr
                                                key={course.id}
                                                initial={{ opacity: 0, y: 8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: i * 0.03 }}
                                                className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors"
                                            >
                                                <td className="px-5 py-3.5">
                                                    <span className="text-sm font-mono font-semibold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-lg">{course.code}</span>
                                                </td>
                                                <td className="px-5 py-3.5">
                                                    <div>
                                                        <p className="text-sm font-medium text-white">{course.nameEn || course.nameAr}</p>
                                                        {course.nameEn && course.nameAr && (
                                                            <p className="text-xs text-slate-500 mt-0.5" dir="rtl">{course.nameAr}</p>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="px-5 py-3.5">
                                                    <span className="text-sm text-slate-300 flex items-center gap-1.5">
                                                        <Building2 className="w-3.5 h-3.5 text-slate-500" />
                                                        {getDeptName(course.departmentId)}
                                                    </span>
                                                </td>
                                                <td className="px-5 py-3.5 text-center">
                                                    <span className="text-sm text-slate-300 flex items-center justify-center gap-1">
                                                        <Hash className="w-3.5 h-3.5 text-slate-500" />
                                                        {course.creditHours}
                                                    </span>
                                                </td>
                                                <td className="px-5 py-3.5 text-center">
                                                    <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-slate-800 text-slate-300">
                                                        {course.semester || "—"}
                                                    </span>
                                                </td>
                                                <td className="px-5 py-3.5 text-center">
                                                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                                                        course.level === 1 ? "bg-indigo-500/10 text-indigo-400" :
                                                        course.level === 2 ? "bg-amber-500/10 text-amber-400" :
                                                        course.level === 3 ? "bg-cyan-500/10 text-cyan-400" :
                                                        "bg-violet-500/10 text-violet-400"
                                                    }`}>
                                                        Level {course.level}
                                                    </span>
                                                </td>
                                                <td className="px-5 py-3.5 text-center">
                                                    <button onClick={() => toggleActive(course)}
                                                        className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium transition-colors cursor-pointer ${
                                                            course.isActive
                                                                ? "bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20"
                                                                : "bg-red-500/10 text-red-400 hover:bg-red-500/20"
                                                        }`}>
                                                        {course.isActive ? <ToggleRight className="w-3.5 h-3.5" /> : <ToggleLeft className="w-3.5 h-3.5" />}
                                                        {course.isActive ? "Active" : "Inactive"}
                                                    </button>
                                                </td>
                                                <td className="px-5 py-3.5">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <button onClick={() => setEditCourse(course)}
                                                            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors">
                                                            <Edit2 className="w-3.5 h-3.5" />
                                                        </button>
                                                        <button onClick={() => setDeleteTarget(course)}
                                                            className="p-2 rounded-xl bg-slate-800 hover:bg-red-500/10 text-slate-400 hover:text-red-400 transition-colors">
                                                            <Trash2 className="w-3.5 h-3.5" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </motion.tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {filtered.length === 0 && (
                            <div className="flex flex-col items-center justify-center py-20 text-slate-500">
                                <GraduationCap className="w-12 h-12 mb-3 opacity-30" />
                                <p className="text-sm">No courses found</p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </AdminLayout>
    );
}
