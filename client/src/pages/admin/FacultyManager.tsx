import { useState } from "react";
import { AdminLayout } from "./AdminLayout";
import { motion } from "framer-motion";
import {
    Plus, Search, Filter, Edit2, Trash2, Eye, MoreVertical,
    User, Mail, Phone, Building2, Upload, X, Check, Camera
} from "lucide-react";

const initialFaculty = [
    { id: 1, name: "Prof. Mohamed Ahmed", nameAr: "أ.د. محمد أحمد", title: "Dean", titleAr: "عميد المعهد", department: "Management", email: "m.ahmed@sva.edu.eg", phone: "+20 123 111 0001", status: "active", image: "/figmaAssets/rectangle-10.png" },
    { id: 2, name: "Dr. Sara Ali", nameAr: "د. سارة علي", title: "Head of Accounting", titleAr: "رئيس قسم المحاسبة", department: "Accounting", email: "s.ali@sva.edu.eg", phone: "+20 123 111 0002", status: "active", image: "/figmaAssets/rectangle-12.png" },
    { id: 3, name: "Dr. Ahmed Hassan", nameAr: "د. أحمد حسن", title: "Associate Professor", titleAr: "أستاذ مشارك", department: "MIS", email: "a.hassan@sva.edu.eg", phone: "+20 123 111 0003", status: "active", image: "/figmaAssets/rectangle-16.png" },
    { id: 4, name: "Prof. Ali Mostafa", nameAr: "أ.د. علي مصطفى", title: "Dean of Engineering", titleAr: "عميد معهد الهندسة", department: "Engineering", email: "a.mostafa@sva.edu.eg", phone: "+20 123 111 0004", status: "active", image: "/figmaAssets/rectangle-17.png" },
    { id: 5, name: "Dr. Mona Saeed", nameAr: "د. منى سعيد", title: "Head of Architecture", titleAr: "رئيس قسم العمارة", department: "Architecture", email: "m.saeed@sva.edu.eg", phone: "+20 123 111 0005", status: "inactive", image: "/figmaAssets/rectangle-2.png" },
    { id: 6, name: "Dr. Karim Abdullah", nameAr: "د. كريم عبدالله", title: "Professor", titleAr: "أستاذ", department: "Management", email: "k.abdullah@sva.edu.eg", phone: "+20 123 111 0006", status: "active", image: "/figmaAssets/rectangle-3.png" },
];

const departments = ["All", "Management", "Engineering", "Accounting", "MIS", "Architecture", "Finance"];

interface FacultyMember {
    id: number;
    name: string;
    nameAr: string;
    title: string;
    titleAr: string;
    department: string;
    email: string;
    phone: string;
    status: string;
    image: string;
}

function FacultyModal({ member, onClose, onSave }: {
    member: FacultyMember | null;
    onClose: () => void;
    onSave: (m: FacultyMember) => void;
}) {
    const [form, setForm] = useState<FacultyMember>(member || {
        id: Date.now(), name: "", nameAr: "", title: "", titleAr: "",
        department: "Management", email: "", phone: "", status: "active", image: ""
    });

    return (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-[640px] max-h-[90vh] overflow-y-auto"
            >
                <div className="flex items-center justify-between p-6 border-b border-slate-800">
                    <h2 className="text-lg font-semibold text-white">{member ? "Edit Faculty Member" : "Add Faculty Member"}</h2>
                    <button onClick={onClose} className="p-2 rounded-xl hover:bg-slate-800 transition-colors text-slate-400">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-6 flex flex-col gap-5">
                    {/* Photo Upload */}
                    <div className="flex items-center gap-4">
                        <div className="w-20 h-20 rounded-2xl bg-slate-800 border-2 border-dashed border-slate-600 flex items-center justify-center overflow-hidden">
                            {form.image ? (
                                <img src={form.image} alt="" className="w-full h-full object-cover" />
                            ) : (
                                <Camera className="w-6 h-6 text-slate-500" />
                            )}
                        </div>
                        <div>
                            <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm rounded-xl transition-colors">
                                <Upload className="w-4 h-4" />
                                Upload Photo
                            </button>
                            <p className="text-xs text-slate-500 mt-1">JPG, PNG up to 2MB</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">Name (English)</label>
                            <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">الاسم (عربي)</label>
                            <input value={form.nameAr} onChange={e => setForm({ ...form, nameAr: e.target.value })} dir="rtl"
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all text-right" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">Title (English)</label>
                            <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })}
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">اللقب (عربي)</label>
                            <input value={form.titleAr} onChange={e => setForm({ ...form, titleAr: e.target.value })} dir="rtl"
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all text-right" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">Department</label>
                            <select value={form.department} onChange={e => setForm({ ...form, department: e.target.value })}
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all">
                                {departments.filter(d => d !== "All").map(d => <option key={d}>{d}</option>)}
                            </select>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">Status</label>
                            <select value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all">
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">Email</label>
                            <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-300">Phone</label>
                            <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
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
                        {member ? "Save Changes" : "Add Member"}
                    </button>
                </div>
            </motion.div>
        </div>
    );
}

export default function AdminFaculty() {
    const [faculty, setFaculty] = useState(initialFaculty);
    const [search, setSearch] = useState("");
    const [deptFilter, setDeptFilter] = useState("All");
    const [modalOpen, setModalOpen] = useState(false);
    const [editMember, setEditMember] = useState<FacultyMember | null>(null);
    const [deleteId, setDeleteId] = useState<number | null>(null);

    const filtered = faculty.filter(m => {
        const matchDept = deptFilter === "All" || m.department === deptFilter;
        const matchSearch = !search || m.name.toLowerCase().includes(search.toLowerCase()) || m.email.toLowerCase().includes(search.toLowerCase());
        return matchDept && matchSearch;
    });

    const handleSave = (member: FacultyMember) => {
        if (editMember) {
            setFaculty(prev => prev.map(m => m.id === member.id ? member : m));
        } else {
            setFaculty(prev => [...prev, member]);
        }
        setModalOpen(false);
        setEditMember(null);
    };

    const handleDelete = (id: number) => {
        setFaculty(prev => prev.filter(m => m.id !== id));
        setDeleteId(null);
    };

    return (
        <AdminLayout>
            {(modalOpen || editMember) && (
                <FacultyModal
                    member={editMember}
                    onClose={() => { setModalOpen(false); setEditMember(null); }}
                    onSave={handleSave}
                />
            )}

            <div className="p-6 md:p-8 max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-white">Faculty Management</h1>
                        <p className="text-slate-400 text-sm mt-1">{faculty.length} total members</p>
                    </div>
                    <button
                        onClick={() => { setEditMember(null); setModalOpen(true); }}
                        className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition-colors shadow-lg shadow-indigo-500/20"
                    >
                        <Plus className="w-4 h-4" />
                        Add Faculty Member
                    </button>
                </div>

                {/* Filters */}
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            placeholder="Search faculty..."
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                        />
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {departments.map(d => (
                            <button
                                key={d}
                                onClick={() => setDeptFilter(d)}
                                className={`px-4 py-2 rounded-xl text-sm transition-all ${deptFilter === d
                                        ? "bg-indigo-600 text-white"
                                        : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600"
                                    }`}
                            >
                                {d}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Table */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-slate-800">
                                    <th className="text-left px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Member</th>
                                    <th className="text-left px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider hidden md:table-cell">Department</th>
                                    <th className="text-left px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider hidden lg:table-cell">Contact</th>
                                    <th className="text-left px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                                    <th className="text-right px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map((member, i) => (
                                    <motion.tr
                                        key={member.id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: i * 0.04 }}
                                        className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors"
                                    >
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-xl overflow-hidden bg-slate-800 flex-shrink-0">
                                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-white">{member.name}</p>
                                                    <p className="text-xs text-slate-500">{member.title}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 hidden md:table-cell">
                                            <span className="text-sm text-slate-300">{member.department}</span>
                                        </td>
                                        <td className="px-6 py-4 hidden lg:table-cell">
                                            <div className="flex flex-col gap-0.5">
                                                <span className="text-xs text-slate-400 flex items-center gap-1.5"><Mail className="w-3 h-3" />{member.email}</span>
                                                <span className="text-xs text-slate-400 flex items-center gap-1.5"><Phone className="w-3 h-3" />{member.phone}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full font-medium ${member.status === "active"
                                                    ? "bg-emerald-500/10 text-emerald-400"
                                                    : "bg-slate-700 text-slate-400"
                                                }`}>
                                                <span className={`w-1.5 h-1.5 rounded-full ${member.status === "active" ? "bg-emerald-400" : "bg-slate-500"}`} />
                                                {member.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    onClick={() => setEditMember(member)}
                                                    className="p-2 rounded-xl hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                                                    title="Edit"
                                                >
                                                    <Edit2 className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(member.id)}
                                                    className="p-2 rounded-xl hover:bg-red-500/10 text-slate-400 hover:text-red-400 transition-colors"
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

                    {filtered.length === 0 && (
                        <div className="flex flex-col items-center justify-center py-16 text-slate-500">
                            <User className="w-12 h-12 mb-3 opacity-30" />
                            <p className="text-sm">No faculty members found</p>
                        </div>
                    )}
                </div>
            </div>
        </AdminLayout>
    );
}
