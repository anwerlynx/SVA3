import { useState, useRef } from "react";
import { AdminLayout } from "./AdminLayout";
import { motion } from "framer-motion";
import {
    Upload, Search, Grid, List, Folder, Image as ImageIcon,
    FileText, Film, Music, Trash2, Download, Copy, Eye,
    Plus, X, Check, FolderPlus, MoreVertical
} from "lucide-react";

const folders = ["All Files", "Images", "Documents", "Videos", "Logos"];

const initialFiles = [
    { id: 1, name: "rectangle-10.png", type: "image", size: "245 KB", folder: "Images", url: "/figmaAssets/rectangle-10.png", date: "Feb 20, 2026" },
    { id: 2, name: "rectangle-12.png", type: "image", size: "312 KB", folder: "Images", url: "/figmaAssets/rectangle-12.png", date: "Feb 18, 2026" },
    { id: 3, name: "rectangle-16.png", type: "image", size: "198 KB", folder: "Images", url: "/figmaAssets/rectangle-16.png", date: "Feb 15, 2026" },
    { id: 4, name: "rectangle-17.png", type: "image", size: "287 KB", folder: "Images", url: "/figmaAssets/rectangle-17.png", date: "Feb 12, 2026" },
    { id: 5, name: "rectangle-2.png", type: "image", size: "421 KB", folder: "Images", url: "/figmaAssets/rectangle-2.png", date: "Feb 10, 2026" },
    { id: 6, name: "admission-guide-2026.pdf", type: "document", size: "1.2 MB", folder: "Documents", url: "#", date: "Feb 8, 2026" },
    { id: 7, name: "semester-schedule.pdf", type: "document", size: "890 KB", folder: "Documents", url: "#", date: "Feb 5, 2026" },
    { id: 8, name: "sva-logo.png", type: "image", size: "45 KB", folder: "Logos", url: "/figmaAssets/image-1.png", date: "Jan 15, 2026" },
    { id: 9, name: "graduation-ceremony.mp4", type: "video", size: "45 MB", folder: "Videos", url: "#", date: "Jan 10, 2026" },
    { id: 10, name: "faculty-handbook.pdf", type: "document", size: "2.1 MB", folder: "Documents", url: "#", date: "Jan 5, 2026" },
];

const typeIcon: Record<string, React.ElementType> = {
    image: ImageIcon,
    document: FileText,
    video: Film,
    audio: Music,
};

const typeColor: Record<string, string> = {
    image: "text-indigo-400 bg-indigo-500/10",
    document: "text-amber-400 bg-amber-500/10",
    video: "text-rose-400 bg-rose-500/10",
    audio: "text-emerald-400 bg-emerald-500/10",
};

export default function AdminMedia() {
    const [files, setFiles] = useState(initialFiles);
    const [search, setSearch] = useState("");
    const [folderFilter, setFolderFilter] = useState("All Files");
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const [selected, setSelected] = useState<number[]>([]);
    const [dragging, setDragging] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const filtered = files.filter(f => {
        const matchFolder = folderFilter === "All Files" || f.folder === folderFilter;
        const matchSearch = !search || f.name.toLowerCase().includes(search.toLowerCase());
        return matchFolder && matchSearch;
    });

    const toggleSelect = (id: number) => {
        setSelected(prev => prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]);
    };

    const deleteSelected = () => {
        setFiles(prev => prev.filter(f => !selected.includes(f.id)));
        setSelected([]);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setDragging(false);
        // In production: upload files via API
    };

    const totalSize = files.reduce((acc, f) => {
        const num = parseFloat(f.size);
        const unit = f.size.includes("MB") ? 1024 : 1;
        return acc + num * unit;
    }, 0);

    return (
        <AdminLayout>
            <div className="p-6 md:p-8 max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-white">Media Manager</h1>
                        <p className="text-slate-400 text-sm mt-1">{files.length} files · {(totalSize / 1024).toFixed(1)} MB used</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm rounded-xl transition-colors">
                            <FolderPlus className="w-4 h-4" />
                            New Folder
                        </button>
                        <button
                            onClick={() => fileInputRef.current?.click()}
                            className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition-colors shadow-lg shadow-indigo-500/20"
                        >
                            <Upload className="w-4 h-4" />
                            Upload Files
                        </button>
                        <input ref={fileInputRef} type="file" multiple className="hidden" />
                    </div>
                </div>

                {/* Drop Zone */}
                <div
                    onDragOver={e => { e.preventDefault(); setDragging(true); }}
                    onDragLeave={() => setDragging(false)}
                    onDrop={handleDrop}
                    className={`border-2 border-dashed rounded-2xl p-8 mb-6 text-center transition-all ${dragging
                            ? "border-indigo-500 bg-indigo-500/5"
                            : "border-slate-700 hover:border-slate-600"
                        }`}
                >
                    <Upload className={`w-8 h-8 mx-auto mb-2 ${dragging ? "text-indigo-400" : "text-slate-600"}`} />
                    <p className="text-sm text-slate-400">Drag & drop files here, or <button onClick={() => fileInputRef.current?.click()} className="text-indigo-400 hover:text-indigo-300">browse</button></p>
                    <p className="text-xs text-slate-600 mt-1">Supports: JPG, PNG, PDF, MP4, DOCX up to 50MB</p>
                </div>

                <div className="flex gap-6">
                    {/* Sidebar Folders */}
                    <div className="w-48 flex-shrink-0 hidden lg:block">
                        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3">
                            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-2 mb-2">Folders</p>
                            {folders.map(folder => (
                                <button
                                    key={folder}
                                    onClick={() => setFolderFilter(folder)}
                                    className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm transition-all ${folderFilter === folder
                                            ? "bg-indigo-600 text-white"
                                            : "text-slate-400 hover:bg-slate-800 hover:text-white"
                                        }`}
                                >
                                    <Folder className="w-4 h-4 flex-shrink-0" />
                                    <span className="truncate">{folder}</span>
                                    <span className="ml-auto text-xs opacity-60">
                                        {folder === "All Files" ? files.length : files.filter(f => f.folder === folder).length}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 min-w-0">
                        {/* Toolbar */}
                        <div className="flex items-center gap-3 mb-4">
                            <div className="relative flex-1 max-w-sm">
                                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search files..."
                                    className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" />
                            </div>
                            <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 rounded-xl p-1">
                                <button onClick={() => setViewMode("grid")} className={`p-2 rounded-lg transition-colors ${viewMode === "grid" ? "bg-slate-700 text-white" : "text-slate-500 hover:text-white"}`}>
                                    <Grid className="w-4 h-4" />
                                </button>
                                <button onClick={() => setViewMode("list")} className={`p-2 rounded-lg transition-colors ${viewMode === "list" ? "bg-slate-700 text-white" : "text-slate-500 hover:text-white"}`}>
                                    <List className="w-4 h-4" />
                                </button>
                            </div>
                            {selected.length > 0 && (
                                <button onClick={deleteSelected} className="flex items-center gap-2 px-4 py-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 text-sm rounded-xl transition-colors">
                                    <Trash2 className="w-4 h-4" />
                                    Delete ({selected.length})
                                </button>
                            )}
                        </div>

                        {/* Grid View */}
                        {viewMode === "grid" && (
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                                {filtered.map((file, i) => {
                                    const Icon = typeIcon[file.type] || FileText;
                                    const isSelected = selected.includes(file.id);
                                    return (
                                        <motion.div
                                            key={file.id}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: i * 0.03 }}
                                            onClick={() => toggleSelect(file.id)}
                                            className={`relative bg-slate-900 border rounded-xl overflow-hidden cursor-pointer transition-all group ${isSelected ? "border-indigo-500 ring-2 ring-indigo-500/30" : "border-slate-800 hover:border-slate-600"
                                                }`}
                                        >
                                            {isSelected && (
                                                <div className="absolute top-2 left-2 z-10 w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center">
                                                    <Check className="w-3 h-3 text-white" />
                                                </div>
                                            )}
                                            <div className="h-[100px] bg-slate-800 flex items-center justify-center overflow-hidden">
                                                {file.type === "image" ? (
                                                    <img src={file.url} alt={file.name} className="w-full h-full object-cover" />
                                                ) : (
                                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${typeColor[file.type]}`}>
                                                        <Icon className="w-6 h-6" />
                                                    </div>
                                                )}
                                            </div>
                                            <div className="p-2.5">
                                                <p className="text-xs text-white font-medium truncate">{file.name}</p>
                                                <p className="text-xs text-slate-500 mt-0.5">{file.size}</p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        )}

                        {/* List View */}
                        {viewMode === "list" && (
                            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-slate-800">
                                            <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Name</th>
                                            <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider hidden md:table-cell">Type</th>
                                            <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider hidden md:table-cell">Size</th>
                                            <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider hidden lg:table-cell">Date</th>
                                            <th className="text-right px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filtered.map((file, i) => {
                                            const Icon = typeIcon[file.type] || FileText;
                                            const isSelected = selected.includes(file.id);
                                            return (
                                                <tr key={file.id} onClick={() => toggleSelect(file.id)}
                                                    className={`border-b border-slate-800/50 cursor-pointer transition-colors ${isSelected ? "bg-indigo-500/5" : "hover:bg-slate-800/30"}`}>
                                                    <td className="px-5 py-3">
                                                        <div className="flex items-center gap-3">
                                                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${typeColor[file.type]}`}>
                                                                {file.type === "image" ? (
                                                                    <img src={file.url} alt="" className="w-full h-full object-cover rounded-lg" />
                                                                ) : (
                                                                    <Icon className="w-4 h-4" />
                                                                )}
                                                            </div>
                                                            <span className="text-sm text-white">{file.name}</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-5 py-3 hidden md:table-cell"><span className="text-xs text-slate-400 capitalize">{file.type}</span></td>
                                                    <td className="px-5 py-3 hidden md:table-cell"><span className="text-xs text-slate-400">{file.size}</span></td>
                                                    <td className="px-5 py-3 hidden lg:table-cell"><span className="text-xs text-slate-400">{file.date}</span></td>
                                                    <td className="px-5 py-3">
                                                        <div className="flex items-center justify-end gap-1">
                                                            <button className="p-1.5 rounded-lg hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"><Download className="w-3.5 h-3.5" /></button>
                                                            <button className="p-1.5 rounded-lg hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"><Copy className="w-3.5 h-3.5" /></button>
                                                            <button onClick={e => { e.stopPropagation(); setFiles(prev => prev.filter(f => f.id !== file.id)); }} className="p-1.5 rounded-lg hover:bg-red-500/10 text-slate-400 hover:text-red-400 transition-colors"><Trash2 className="w-3.5 h-3.5" /></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {filtered.length === 0 && (
                            <div className="flex flex-col items-center justify-center py-20 text-slate-500">
                                <ImageIcon className="w-12 h-12 mb-3 opacity-30" />
                                <p className="text-sm">No files found</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
