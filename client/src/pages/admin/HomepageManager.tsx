import { useState, useEffect } from "react";
import { AdminLayout } from "./AdminLayout";
import { useAdminAuth } from "@/context/AdminAuthContext";
import { motion } from "framer-motion";
import {
  Home, Type, BarChart3, Megaphone, Star, Save, Loader2,
  CheckCircle2, AlertCircle, Image, Eye, RefreshCw, Plus, Trash2
} from "lucide-react";
import { Link } from "wouter";

interface HeroSettings {
  titleAr: string;
  titleEn: string;
  subtitleAr: string;
  subtitleEn: string;
  ctaTextAr: string;
  ctaTextEn: string;
  ctaLink: string;
  backgroundImage: string;
}

interface StatItem {
  labelAr: string;
  labelEn: string;
  value: string;
  suffix: string;
  icon: string;
}

interface AnnouncementTicker {
  textAr: string;
  textEn: string;
  link: string;
  isActive: boolean;
}

const defaultHero: HeroSettings = {
  titleAr: "معاهد الوادي العليا",
  titleEn: "Valley Higher Institutes",
  subtitleAr: "نحو تعليم متميز يبني الأجيال ويخدم المجتمع",
  subtitleEn: "Towards distinguished education that builds generations and serves society",
  ctaTextAr: "تقدم الآن",
  ctaTextEn: "Apply Now",
  ctaLink: "/admission",
  backgroundImage: "/figmaAssets/rectangle-2.png",
};

const defaultStats: StatItem[] = [
  { labelAr: "طالب مسجل", labelEn: "Enrolled Students", value: "3000", suffix: "+", icon: "GraduationCap" },
  { labelAr: "عضو هيئة تدريس", labelEn: "Faculty Members", value: "150", suffix: "+", icon: "Users" },
  { labelAr: "برنامج أكاديمي", labelEn: "Academic Programs", value: "8", suffix: "", icon: "BookOpen" },
  { labelAr: "سنوات خبرة", labelEn: "Years of Experience", value: "20", suffix: "+", icon: "Award" },
];

const defaultAnnouncements: AnnouncementTicker[] = [
  { textAr: "بدأ التسجيل للعام الدراسي الجديد", textEn: "Registration for the new academic year has started", link: "/admission", isActive: true },
];

type Tab = "hero" | "stats" | "announcements" | "featured";

export default function HomepageManager() {
  const { token } = useAdminAuth();
  const [activeTab, setActiveTab] = useState<Tab>("hero");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [hero, setHero] = useState<HeroSettings>(defaultHero);
  const [stats, setStats] = useState<StatItem[]>(defaultStats);
  const [announcements, setAnnouncements] = useState<AnnouncementTicker[]>(defaultAnnouncements);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) return;
    fetch("/api/admin/settings", { headers: { Authorization: `Bearer ${token}` } })
      .then(r => r.json())
      .then((data) => {
        if (!Array.isArray(data)) return;
        const find = (key: string) => data.find((s: any) => s.key === key)?.value;
        if (find("homepage_hero")) setHero(find("homepage_hero"));
        if (find("homepage_stats")) setStats(find("homepage_stats"));
        if (find("homepage_announcements")) setAnnouncements(find("homepage_announcements"));
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [token]);

  const saveSettings = async (key: string, value: any) => {
    setSaving(true);
    try {
      await fetch(`/api/admin/settings/${key}`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({ value, group: "homepage" }),
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch {
    } finally {
      setSaving(false);
    }
  };

  const tabs = [
    { id: "hero" as Tab, label: "Hero Section", icon: Image },
    { id: "stats" as Tab, label: "Statistics", icon: BarChart3 },
    { id: "announcements" as Tab, label: "Announcements", icon: Megaphone },
    { id: "featured" as Tab, label: "Featured Content", icon: Star },
  ];

  const inputClass = "w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-colors";
  const labelClass = "block text-sm font-medium text-slate-300 mb-1.5";

  return (
    <AdminLayout>
      <div className="p-6 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                <Home className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Homepage Control</h1>
                <p className="text-slate-400 text-sm">Customize the homepage sections and content</p>
              </div>
            </div>
            {saved && (
              <span className="flex items-center gap-1.5 text-emerald-400 text-sm">
                <CheckCircle2 className="w-4 h-4" /> Saved successfully
              </span>
            )}
          </div>
        </motion.div>

        <div className="flex gap-2 mb-8 flex-wrap">
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                  : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
              }`}>
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 text-indigo-400 animate-spin" />
          </div>
        ) : (
          <motion.div key={activeTab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

            {activeTab === "hero" && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-white mb-4">Hero Section Settings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass}>Title (Arabic)</label>
                    <input className={inputClass} dir="rtl" value={hero.titleAr}
                      onChange={e => setHero({ ...hero, titleAr: e.target.value })} />
                  </div>
                  <div>
                    <label className={labelClass}>Title (English)</label>
                    <input className={inputClass} value={hero.titleEn}
                      onChange={e => setHero({ ...hero, titleEn: e.target.value })} />
                  </div>
                  <div>
                    <label className={labelClass}>Subtitle (Arabic)</label>
                    <textarea className={inputClass} dir="rtl" rows={3} value={hero.subtitleAr}
                      onChange={e => setHero({ ...hero, subtitleAr: e.target.value })} />
                  </div>
                  <div>
                    <label className={labelClass}>Subtitle (English)</label>
                    <textarea className={inputClass} rows={3} value={hero.subtitleEn}
                      onChange={e => setHero({ ...hero, subtitleEn: e.target.value })} />
                  </div>
                  <div>
                    <label className={labelClass}>CTA Text (Arabic)</label>
                    <input className={inputClass} dir="rtl" value={hero.ctaTextAr}
                      onChange={e => setHero({ ...hero, ctaTextAr: e.target.value })} />
                  </div>
                  <div>
                    <label className={labelClass}>CTA Text (English)</label>
                    <input className={inputClass} value={hero.ctaTextEn}
                      onChange={e => setHero({ ...hero, ctaTextEn: e.target.value })} />
                  </div>
                  <div>
                    <label className={labelClass}>CTA Link</label>
                    <input className={inputClass} value={hero.ctaLink}
                      onChange={e => setHero({ ...hero, ctaLink: e.target.value })} />
                  </div>
                  <div>
                    <label className={labelClass}>Background Image URL</label>
                    <input className={inputClass} value={hero.backgroundImage}
                      onChange={e => setHero({ ...hero, backgroundImage: e.target.value })} />
                  </div>
                </div>
                <div className="flex justify-end pt-4">
                  <button onClick={() => saveSettings("homepage_hero", hero)} disabled={saving}
                    className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-colors disabled:opacity-50">
                    {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                    Save Hero Settings
                  </button>
                </div>
              </div>
            )}

            {activeTab === "stats" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-white">Statistics Counters</h2>
                  <button onClick={() => setStats([...stats, { labelAr: "", labelEn: "", value: "0", suffix: "", icon: "Users" }])}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-sm transition-colors">
                    <Plus className="w-3.5 h-3.5" /> Add Stat
                  </button>
                </div>
                {stats.map((stat, i) => (
                  <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-5">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-slate-300">Stat #{i + 1}</span>
                      <button onClick={() => setStats(stats.filter((_, idx) => idx !== i))}
                        className="text-red-400 hover:text-red-300 p-1">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div>
                        <label className={labelClass}>Label (Arabic)</label>
                        <input className={inputClass} dir="rtl" value={stat.labelAr}
                          onChange={e => { const s = [...stats]; s[i] = { ...s[i], labelAr: e.target.value }; setStats(s); }} />
                      </div>
                      <div>
                        <label className={labelClass}>Label (English)</label>
                        <input className={inputClass} value={stat.labelEn}
                          onChange={e => { const s = [...stats]; s[i] = { ...s[i], labelEn: e.target.value }; setStats(s); }} />
                      </div>
                      <div>
                        <label className={labelClass}>Value</label>
                        <input className={inputClass} value={stat.value}
                          onChange={e => { const s = [...stats]; s[i] = { ...s[i], value: e.target.value }; setStats(s); }} />
                      </div>
                      <div>
                        <label className={labelClass}>Suffix</label>
                        <input className={inputClass} placeholder="e.g. + or %" value={stat.suffix}
                          onChange={e => { const s = [...stats]; s[i] = { ...s[i], suffix: e.target.value }; setStats(s); }} />
                      </div>
                      <div>
                        <label className={labelClass}>Icon Name</label>
                        <select className={inputClass} value={stat.icon}
                          onChange={e => { const s = [...stats]; s[i] = { ...s[i], icon: e.target.value }; setStats(s); }}>
                          <option value="GraduationCap">Graduation Cap</option>
                          <option value="Users">Users</option>
                          <option value="BookOpen">Book</option>
                          <option value="Award">Award</option>
                          <option value="Building2">Building</option>
                          <option value="TrendingUp">Trending Up</option>
                          <option value="Globe">Globe</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="flex justify-end pt-4">
                  <button onClick={() => saveSettings("homepage_stats", stats)} disabled={saving}
                    className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-colors disabled:opacity-50">
                    {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                    Save Statistics
                  </button>
                </div>
              </div>
            )}

            {activeTab === "announcements" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-white">Homepage Announcements</h2>
                  <button onClick={() => setAnnouncements([...announcements, { textAr: "", textEn: "", link: "", isActive: true }])}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-sm transition-colors">
                    <Plus className="w-3.5 h-3.5" /> Add
                  </button>
                </div>
                {announcements.map((ann, i) => (
                  <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-5">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-slate-300">Announcement #{i + 1}</span>
                        <button onClick={() => {
                          const a = [...announcements]; a[i] = { ...a[i], isActive: !a[i].isActive }; setAnnouncements(a);
                        }}
                          className={`px-2 py-0.5 rounded-full text-xs font-medium ${ann.isActive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
                          {ann.isActive ? "Active" : "Inactive"}
                        </button>
                      </div>
                      <button onClick={() => setAnnouncements(announcements.filter((_, idx) => idx !== i))}
                        className="text-red-400 hover:text-red-300 p-1">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Text (Arabic)</label>
                        <input className={inputClass} dir="rtl" value={ann.textAr}
                          onChange={e => { const a = [...announcements]; a[i] = { ...a[i], textAr: e.target.value }; setAnnouncements(a); }} />
                      </div>
                      <div>
                        <label className={labelClass}>Text (English)</label>
                        <input className={inputClass} value={ann.textEn}
                          onChange={e => { const a = [...announcements]; a[i] = { ...a[i], textEn: e.target.value }; setAnnouncements(a); }} />
                      </div>
                      <div className="md:col-span-2">
                        <label className={labelClass}>Link (optional)</label>
                        <input className={inputClass} placeholder="/admission" value={ann.link}
                          onChange={e => { const a = [...announcements]; a[i] = { ...a[i], link: e.target.value }; setAnnouncements(a); }} />
                      </div>
                    </div>
                  </div>
                ))}
                <div className="flex justify-end pt-4">
                  <button onClick={() => saveSettings("homepage_announcements", announcements)} disabled={saving}
                    className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-colors disabled:opacity-50">
                    {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                    Save Announcements
                  </button>
                </div>
              </div>
            )}

            {activeTab === "featured" && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-white mb-4">Featured Content</h2>
                <p className="text-slate-400 text-sm mb-6">
                  Featured content is automatically pulled from published news, events, and announcements.
                  Use the managers below to control what appears on the homepage.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link href="/admin/news">
                    <div className="bg-slate-800 border border-slate-700 hover:border-indigo-500/50 rounded-xl p-5 transition-colors cursor-pointer">
                      <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-3">
                        <Type className="w-5 h-5 text-indigo-400" />
                      </div>
                      <h3 className="text-white font-medium mb-1">News Manager</h3>
                      <p className="text-slate-500 text-xs">Manage featured news articles</p>
                    </div>
                  </Link>
                  <Link href="/admin/events">
                    <div className="bg-slate-800 border border-slate-700 hover:border-emerald-500/50 rounded-xl p-5 transition-colors cursor-pointer">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-3">
                        <Megaphone className="w-5 h-5 text-emerald-400" />
                      </div>
                      <h3 className="text-white font-medium mb-1">Events Manager</h3>
                      <p className="text-slate-500 text-xs">Manage featured events</p>
                    </div>
                  </Link>
                  <Link href="/admin/announcements">
                    <div className="bg-slate-800 border border-slate-700 hover:border-amber-500/50 rounded-xl p-5 transition-colors cursor-pointer">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mb-3">
                        <AlertCircle className="w-5 h-5 text-amber-400" />
                      </div>
                      <h3 className="text-white font-medium mb-1">Announcements</h3>
                      <p className="text-slate-500 text-xs">Manage site announcements</p>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </AdminLayout>
  );
}
