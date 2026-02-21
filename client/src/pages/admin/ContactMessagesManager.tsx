import { useState, useEffect } from "react";
import { AdminLayout } from "./AdminLayout";
import { useAdminAuth } from "@/context/AdminAuthContext";
import { motion } from "framer-motion";
import {
  Mail, Search, Trash2, Eye, EyeOff, MessageSquare,
  User, Clock, Building2, Filter, Loader2, CheckCircle,
  AlertCircle, MailOpen
} from "lucide-react";

interface ContactMsg {
  id: string;
  name: string;
  email: string;
  subject: string | null;
  message: string;
  institute: string | null;
  isRead: boolean;
  createdAt: string;
}

export default function ContactMessagesManager() {
  const { token } = useAdminAuth();
  const [messages, setMessages] = useState<ContactMsg[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterRead, setFilterRead] = useState<string>("all");
  const [selected, setSelected] = useState<ContactMsg | null>(null);
  const [toast, setToast] = useState<{ msg: string; type: string } | null>(null);

  const headers = { Authorization: `Bearer ${token}` };

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (filterRead === "read") params.set("isRead", "true");
      if (filterRead === "unread") params.set("isRead", "false");
      const res = await fetch(`/api/admin/contacts?${params}`, { headers });
      const data = await res.json();
      setMessages(Array.isArray(data) ? data : []);
    } catch { setMessages([]); }
    setLoading(false);
  };

  useEffect(() => { if (token) fetchMessages(); }, [token, filterRead]);

  const markRead = async (id: string) => {
    try {
      await fetch(`/api/admin/contacts/${id}/read`, { method: "PUT", headers });
      setMessages(prev => prev.map(m => m.id === id ? { ...m, isRead: true } : m));
      if (selected?.id === id) setSelected({ ...selected, isRead: true });
      showToast("Marked as read", "success");
    } catch { showToast("Failed to mark as read", "error"); }
  };

  const deleteMessage = async (id: string) => {
    if (!confirm("Delete this message?")) return;
    try {
      await fetch(`/api/admin/contacts/${id}`, { method: "DELETE", headers });
      setMessages(prev => prev.filter(m => m.id !== id));
      if (selected?.id === id) setSelected(null);
      showToast("Message deleted", "success");
    } catch { showToast("Failed to delete", "error"); }
  };

  const showToast = (msg: string, type: string) => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const filtered = messages.filter(m =>
    m.name.toLowerCase().includes(search.toLowerCase()) ||
    m.email.toLowerCase().includes(search.toLowerCase()) ||
    (m.subject || "").toLowerCase().includes(search.toLowerCase()) ||
    m.message.toLowerCase().includes(search.toLowerCase())
  );

  const unreadCount = messages.filter(m => !m.isRead).length;

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white flex items-center gap-3">
              <MessageSquare className="w-7 h-7 text-emerald-400" />
              Contact Messages
            </h1>
            <p className="text-slate-400 text-sm mt-1">
              {messages.length} total messages · {unreadCount} unread
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search messages..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            />
          </div>
          <select
            value={filterRead}
            onChange={(e) => setFilterRead(e.target.value)}
            className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
          >
            <option value="all">All Messages</option>
            <option value="unread">Unread Only</option>
            <option value="read">Read Only</option>
          </select>
        </div>

        {loading ? (
          <div className="flex justify-center py-20"><Loader2 className="w-8 h-8 text-emerald-400 animate-spin" /></div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 space-y-2 max-h-[70vh] overflow-y-auto pr-1">
              {filtered.length === 0 ? (
                <div className="text-center py-12 text-slate-500">
                  <Mail className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p>No messages found</p>
                </div>
              ) : filtered.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={() => { setSelected(msg); if (!msg.isRead) markRead(msg.id); }}
                  className={`p-4 rounded-lg border cursor-pointer transition-all ${
                    selected?.id === msg.id
                      ? "bg-emerald-500/10 border-emerald-500/30"
                      : msg.isRead
                        ? "bg-slate-800/50 border-slate-700/50 hover:bg-slate-800"
                        : "bg-slate-800 border-emerald-500/20 hover:bg-slate-700"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        {!msg.isRead && <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />}
                        <span className={`text-sm font-medium truncate ${msg.isRead ? "text-slate-300" : "text-white"}`}>{msg.name}</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1 truncate">{msg.email}</p>
                      <p className={`text-sm mt-1 truncate ${msg.isRead ? "text-slate-500" : "text-slate-300"}`}>
                        {msg.subject || msg.message.slice(0, 60)}
                      </p>
                    </div>
                    <span className="text-xs text-slate-600 flex-shrink-0">
                      {new Date(msg.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="lg:col-span-2">
              {selected ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 space-y-6"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-white">{selected.subject || "No Subject"}</h2>
                      <div className="flex items-center gap-4 mt-2 text-sm text-slate-400">
                        <span className="flex items-center gap-1"><User className="w-4 h-4" /> {selected.name}</span>
                        <span className="flex items-center gap-1"><Mail className="w-4 h-4" /> {selected.email}</span>
                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {new Date(selected.createdAt).toLocaleString()}</span>
                      </div>
                      {selected.institute && (
                        <span className="inline-flex items-center gap-1 mt-2 px-2 py-0.5 bg-blue-500/10 text-blue-400 rounded text-xs">
                          <Building2 className="w-3 h-3" /> {selected.institute}
                        </span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => deleteMessage(selected.id)} className="p-2 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-4 text-slate-300 leading-relaxed whitespace-pre-wrap">
                    {selected.message}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    {selected.isRead ? (
                      <><MailOpen className="w-4 h-4 text-emerald-400" /> Read</>
                    ) : (
                      <><Mail className="w-4 h-4 text-amber-400" /> Unread</>
                    )}
                  </div>
                </motion.div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-slate-500 py-20">
                  <MessageSquare className="w-16 h-16 mb-4 opacity-30" />
                  <p className="text-lg">Select a message to read</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {toast && (
        <div className={`fixed bottom-6 right-6 px-4 py-3 rounded-lg text-white text-sm flex items-center gap-2 z-50 ${
          toast.type === "success" ? "bg-emerald-600" : "bg-red-600"
        }`}>
          {toast.type === "success" ? <CheckCircle className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
          {toast.msg}
        </div>
      )}
    </AdminLayout>
  );
}
