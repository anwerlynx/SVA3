import { useState } from "react";
import { AdminLayout } from "./AdminLayout";
import { motion } from "framer-motion";
import {
    Plus, Edit2, Trash2, Shield, Check, X, User,
    Eye, EyeOff, Key, Clock, Activity, Search
} from "lucide-react";

const roles = [
    { id: 1, name: "Super Admin", color: "bg-red-500/10 text-red-400", permissions: ["all"], users: 1 },
    { id: 2, name: "Admin", color: "bg-indigo-500/10 text-indigo-400", permissions: ["content", "faculty", "news", "media", "settings"], users: 2 },
    { id: 3, name: "Editor", color: "bg-emerald-500/10 text-emerald-400", permissions: ["content", "news", "media"], users: 3 },
    { id: 4, name: "Faculty Manager", color: "bg-amber-500/10 text-amber-400", permissions: ["faculty"], users: 1 },
    { id: 5, name: "Student Affairs", color: "bg-violet-500/10 text-violet-400", permissions: ["students", "faqs"], users: 2 },
];

const initialUsers = [
    { id: 1, name: "Ahmed Hassan", email: "admin@sva.edu.eg", role: "Super Admin", status: "active", lastLogin: "2 hours ago", avatar: "AH" },
    { id: 2, name: "Sara Ali", email: "sara@sva.edu.eg", role: "Admin", status: "active", lastLogin: "1 day ago", avatar: "SA" },
    { id: 3, name: "Mohamed Karim", email: "m.karim@sva.edu.eg", role: "Editor", status: "active", lastLogin: "3 days ago", avatar: "MK" },
    { id: 4, name: "Nour Ibrahim", email: "n.ibrahim@sva.edu.eg", role: "Faculty Manager", status: "inactive", lastLogin: "1 week ago", avatar: "NI" },
    { id: 5, name: "Ali Mostafa", email: "a.mostafa@sva.edu.eg", role: "Student Affairs", status: "active", lastLogin: "5 hours ago", avatar: "AM" },
    { id: 6, name: "Hana Sayed", email: "h.sayed@sva.edu.eg", role: "Editor", status: "active", lastLogin: "2 days ago", avatar: "HS" },
];

const activityLogs = [
    { user: "Ahmed Hassan", action: "Updated homepage hero section", time: "2 min ago", type: "edit" },
    { user: "Sara Ali", action: "Published article: 'New Lab Opening'", time: "1 hour ago", type: "publish" },
    { user: "Mohamed Karim", action: "Uploaded 5 media files", time: "3 hours ago", type: "upload" },
    { user: "Unknown", action: "Failed login attempt from 192.168.1.45", time: "5 hours ago", type: "error" },
    { user: "Ali Mostafa", action: "Added new FAQ entry", time: "1 day ago", type: "create" },
    { user: "Nour Ibrahim", action: "Updated faculty profile: Dr. Sara Ali", time: "2 days ago", type: "edit" },
];

const roleColors: Record<string, string> = {
    "Super Admin": "bg-red-500/10 text-red-400",
    "Admin": "bg-indigo-500/10 text-indigo-400",
    "Editor": "bg-emerald-500/10 text-emerald-400",
    "Faculty Manager": "bg-amber-500/10 text-amber-400",
    "Student Affairs": "bg-violet-500/10 text-violet-400",
};

const logTypeColor: Record<string, string> = {
    edit: "text-indigo-400",
    publish: "text-emerald-400",
    upload: "text-amber-400",
    error: "text-red-400",
    create: "text-cyan-400",
};

export default function AdminUsers() {
    const [users, setUsers] = useState(initialUsers);
    const [activeTab, setActiveTab] = useState<"users" | "roles" | "logs">("users");
    const [search, setSearch] = useState("");
    const [showAddUser, setShowAddUser] = useState(false);
    const [newUser, setNewUser] = useState({ name: "", email: "", role: "Editor", password: "" });
    const [showPassword, setShowPassword] = useState(false);

    const filtered = users.filter(u =>
        !search || u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase())
    );

    const handleAddUser = () => {
        if (newUser.name && newUser.email) {
            setUsers(prev => [...prev, {
                id: Date.now(), ...newUser, status: "active",
                lastLogin: "Never", avatar: newUser.name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2)
            }]);
            setNewUser({ name: "", email: "", role: "Editor", password: "" });
            setShowAddUser(false);
        }
    };

    return (
        <AdminLayout>
            <div className="p-6 md:p-8 max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-white">Users & Permissions</h1>
                        <p className="text-slate-400 text-sm mt-1">Manage access control and roles</p>
                    </div>
                    {activeTab === "users" && (
                        <button onClick={() => setShowAddUser(true)}
                            className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition-colors shadow-lg shadow-indigo-500/20">
                            <Plus className="w-4 h-4" />
                            Add User
                        </button>
                    )}
                </div>

                {/* Add User Modal */}
                {showAddUser && (
                    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                            className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-[480px]">
                            <div className="flex items-center justify-between p-6 border-b border-slate-800">
                                <h2 className="text-lg font-semibold text-white">Add New User</h2>
                                <button onClick={() => setShowAddUser(false)} className="p-2 rounded-xl hover:bg-slate-800 text-slate-400">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="p-6 flex flex-col gap-4">
                                {[
                                    { label: "Full Name", key: "name", type: "text", placeholder: "John Doe" },
                                    { label: "Email", key: "email", type: "email", placeholder: "john@sva.edu.eg" },
                                ].map(field => (
                                    <div key={field.key} className="flex flex-col gap-1.5">
                                        <label className="text-sm font-medium text-slate-300">{field.label}</label>
                                        <input type={field.type} value={(newUser as any)[field.key]} placeholder={field.placeholder}
                                            onChange={e => setNewUser({ ...newUser, [field.key]: e.target.value })}
                                            className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" />
                                    </div>
                                ))}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-medium text-slate-300">Role</label>
                                    <select value={newUser.role} onChange={e => setNewUser({ ...newUser, role: e.target.value })}
                                        className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all">
                                        {roles.map(r => <option key={r.id}>{r.name}</option>)}
                                    </select>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-medium text-slate-300">Password</label>
                                    <div className="relative">
                                        <input type={showPassword ? "text" : "password"} value={newUser.password} placeholder="••••••••"
                                            onChange={e => setNewUser({ ...newUser, password: e.target.value })}
                                            className="w-full px-4 py-2.5 pr-10 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" />
                                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">
                                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-end gap-3 p-6 border-t border-slate-800">
                                <button onClick={() => setShowAddUser(false)} className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm rounded-xl transition-colors">Cancel</button>
                                <button onClick={handleAddUser} className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition-colors flex items-center gap-2">
                                    <Check className="w-4 h-4" /> Add User
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}

                {/* Tabs */}
                <div className="flex gap-1 bg-slate-900 border border-slate-800 rounded-xl p-1 mb-6 w-fit">
                    {[
                        { key: "users", label: "Users", icon: User },
                        { key: "roles", label: "Roles & Permissions", icon: Shield },
                        { key: "logs", label: "Activity Logs", icon: Activity },
                    ].map(tab => (
                        <button key={tab.key} onClick={() => setActiveTab(tab.key as any)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all ${activeTab === tab.key ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"}`}>
                            <tab.icon className="w-4 h-4" />
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Users Tab */}
                {activeTab === "users" && (
                    <>
                        <div className="relative max-w-sm mb-4">
                            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search users..."
                                className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" />
                        </div>
                        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-slate-800">
                                        <th className="text-left px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">User</th>
                                        <th className="text-left px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider hidden md:table-cell">Role</th>
                                        <th className="text-left px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider hidden lg:table-cell">Last Login</th>
                                        <th className="text-left px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                                        <th className="text-right px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filtered.map((user, i) => (
                                        <motion.tr key={user.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.04 }}
                                            className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                                                        {user.avatar}
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-medium text-white">{user.name}</p>
                                                        <p className="text-xs text-slate-500">{user.email}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 hidden md:table-cell">
                                                <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${roleColors[user.role] || "bg-slate-700 text-slate-400"}`}>
                                                    {user.role}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 hidden lg:table-cell">
                                                <span className="text-xs text-slate-400 flex items-center gap-1.5"><Clock className="w-3 h-3" />{user.lastLogin}</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full font-medium ${user.status === "active" ? "bg-emerald-500/10 text-emerald-400" : "bg-slate-700 text-slate-400"}`}>
                                                    <span className={`w-1.5 h-1.5 rounded-full ${user.status === "active" ? "bg-emerald-400" : "bg-slate-500"}`} />
                                                    {user.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center justify-end gap-2">
                                                    <button className="p-2 rounded-xl hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"><Edit2 className="w-4 h-4" /></button>
                                                    <button className="p-2 rounded-xl hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"><Key className="w-4 h-4" /></button>
                                                    <button onClick={() => setUsers(prev => prev.filter(u => u.id !== user.id))} className="p-2 rounded-xl hover:bg-red-500/10 text-slate-400 hover:text-red-400 transition-colors"><Trash2 className="w-4 h-4" /></button>
                                                </div>
                                            </td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>
                )}

                {/* Roles Tab */}
                {activeTab === "roles" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                        {roles.map((role, i) => (
                            <motion.div key={role.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                                className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${role.color}`}>
                                            <Shield className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-white">{role.name}</p>
                                            <p className="text-xs text-slate-500">{role.users} user{role.users !== 1 ? "s" : ""}</p>
                                        </div>
                                    </div>
                                    <button className="p-2 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition-colors">
                                        <Edit2 className="w-4 h-4" />
                                    </button>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {role.permissions.map(perm => (
                                        <span key={perm} className="text-xs px-2.5 py-1 bg-slate-800 text-slate-300 rounded-lg capitalize">
                                            {perm === "all" ? "Full Access" : perm}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* Logs Tab */}
                {activeTab === "logs" && (
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
                        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
                            <p className="text-sm font-medium text-white">Recent Activity</p>
                            <span className="text-xs text-slate-500">{activityLogs.length} entries</span>
                        </div>
                        <div className="divide-y divide-slate-800/50">
                            {activityLogs.map((log, i) => (
                                <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }}
                                    className="flex items-start gap-4 px-6 py-4 hover:bg-slate-800/20 transition-colors">
                                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${logTypeColor[log.type].replace("text-", "bg-")}`} />
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm text-white">{log.action}</p>
                                        <p className="text-xs text-slate-500 mt-0.5">by <span className={logTypeColor[log.type]}>{log.user}</span></p>
                                    </div>
                                    <span className="text-xs text-slate-600 flex-shrink-0 flex items-center gap-1">
                                        <Clock className="w-3 h-3" />{log.time}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}
