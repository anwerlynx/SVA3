import { useState } from "react";
import { AdminLayout } from "./AdminLayout";
import { motion } from "framer-motion";
import {
    Save, Globe, Search, Share2, Code, FileText,
    Check, AlertCircle, ExternalLink, RefreshCw, Settings
} from "lucide-react";

export default function AdminSEO() {
    const [saved, setSaved] = useState(false);
    const [settings, setSettings] = useState({
        siteTitle: "معاهد الوادي العليا | Valley Higher Institutes",
        siteTitleEn: "Valley Higher Institutes - Excellence in Education",
        metaDescription: "معاهد الوادي العليا - المعهد العالي للهندسة والتكنولوجيا والمعهد العالي للإدارة والمالية ونظم المعلومات",
        metaDescriptionEn: "Valley Higher Institutes - Higher Institute of Engineering & Technology and Higher Institute of Management, Finance & MIS",
        keywords: "معاهد الوادي العليا, هندسة, إدارة, تعليم عالي",
        keywordsEn: "Valley Higher Institutes, engineering, management, higher education Egypt",
        ogTitle: "معاهد الوادي العليا",
        ogDescription: "تعليم عالي متميز في قلب مصر",
        googleAnalyticsId: "G-XXXXXXXXXX",
        robotsTxt: "User-agent: *\nAllow: /\nDisallow: /admin/\nDisallow: /api/\n\nSitemap: https://sva.edu.eg/sitemap.xml",
        canonicalUrl: "https://sva.edu.eg",
        sitemapEnabled: true,
        indexingEnabled: true,
    });

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 2500);
    };

    const inputClass = "w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all placeholder-slate-500";
    const labelClass = "text-sm font-medium text-slate-300";

    return (
        <AdminLayout>
            <div className="p-6 md:p-8 max-w-[1000px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-white">SEO & Settings</h1>
                        <p className="text-slate-400 text-sm mt-1">Manage global SEO and site configuration</p>
                    </div>
                    <button onClick={handleSave}
                        className={`flex items-center gap-2 px-5 py-2.5 text-white text-sm font-semibold rounded-xl transition-all shadow-lg ${saved ? "bg-emerald-600 shadow-emerald-500/20" : "bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/20"}`}>
                        {saved ? <><Check className="w-4 h-4" /> Saved!</> : <><Save className="w-4 h-4" /> Save Changes</>}
                    </button>
                </div>

                <div className="flex flex-col gap-6">
                    {/* Meta Tags */}
                    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-9 h-9 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                                <Globe className="w-4 h-4 text-indigo-400" />
                            </div>
                            <h2 className="text-base font-semibold text-white">Meta Tags</h2>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label className={labelClass}>Site Title (Arabic)</label>
                                <input value={settings.siteTitle} onChange={e => setSettings({ ...settings, siteTitle: e.target.value })} className={inputClass} dir="rtl" />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className={labelClass}>Site Title (English)</label>
                                <input value={settings.siteTitleEn} onChange={e => setSettings({ ...settings, siteTitleEn: e.target.value })} className={inputClass} />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className={labelClass}>Meta Description (Arabic)</label>
                                <textarea value={settings.metaDescription} onChange={e => setSettings({ ...settings, metaDescription: e.target.value })} rows={3} className={inputClass} dir="rtl" />
                                <p className="text-xs text-slate-500">{settings.metaDescription.length}/160 characters</p>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className={labelClass}>Meta Description (English)</label>
                                <textarea value={settings.metaDescriptionEn} onChange={e => setSettings({ ...settings, metaDescriptionEn: e.target.value })} rows={3} className={inputClass} />
                                <p className="text-xs text-slate-500">{settings.metaDescriptionEn.length}/160 characters</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1.5">
                                    <label className={labelClass}>Keywords (Arabic)</label>
                                    <input value={settings.keywords} onChange={e => setSettings({ ...settings, keywords: e.target.value })} className={inputClass} dir="rtl" />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className={labelClass}>Keywords (English)</label>
                                    <input value={settings.keywordsEn} onChange={e => setSettings({ ...settings, keywordsEn: e.target.value })} className={inputClass} />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Open Graph */}
                    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-9 h-9 rounded-xl bg-violet-500/10 flex items-center justify-center">
                                <Share2 className="w-4 h-4 text-violet-400" />
                            </div>
                            <h2 className="text-base font-semibold text-white">Open Graph (Social Sharing)</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label className={labelClass}>OG Title</label>
                                <input value={settings.ogTitle} onChange={e => setSettings({ ...settings, ogTitle: e.target.value })} className={inputClass} />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className={labelClass}>OG Description</label>
                                <input value={settings.ogDescription} onChange={e => setSettings({ ...settings, ogDescription: e.target.value })} className={inputClass} />
                            </div>
                        </div>
                        {/* Preview */}
                        <div className="mt-4 p-4 bg-slate-800 rounded-xl border border-slate-700">
                            <p className="text-xs text-slate-500 mb-2 font-medium uppercase tracking-wider">Social Preview</p>
                            <div className="bg-white rounded-lg overflow-hidden max-w-[400px]">
                                <div className="h-[120px] bg-gradient-to-br from-green-700 to-green-900 flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">SVA</span>
                                </div>
                                <div className="p-3">
                                    <p className="text-xs text-gray-500 uppercase">sva.edu.eg</p>
                                    <p className="text-sm font-bold text-gray-900 mt-0.5">{settings.ogTitle}</p>
                                    <p className="text-xs text-gray-500 mt-0.5">{settings.ogDescription}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Technical SEO */}
                    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                                <Code className="w-4 h-4 text-emerald-400" />
                            </div>
                            <h2 className="text-base font-semibold text-white">Technical SEO</h2>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label className={labelClass}>Google Analytics ID</label>
                                <input value={settings.googleAnalyticsId} onChange={e => setSettings({ ...settings, googleAnalyticsId: e.target.value })} placeholder="G-XXXXXXXXXX" className={inputClass} />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className={labelClass}>Canonical URL</label>
                                <input value={settings.canonicalUrl} onChange={e => setSettings({ ...settings, canonicalUrl: e.target.value })} className={inputClass} />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className={labelClass}>robots.txt</label>
                                <textarea value={settings.robotsTxt} onChange={e => setSettings({ ...settings, robotsTxt: e.target.value })} rows={6} className={`${inputClass} font-mono text-xs`} />
                            </div>
                            <div className="flex flex-col gap-3">
                                {[
                                    { key: "sitemapEnabled", label: "Auto-generate Sitemap", desc: "Automatically generate sitemap.xml on content changes" },
                                    { key: "indexingEnabled", label: "Allow Search Engine Indexing", desc: "Allow Google and other search engines to index this site" },
                                ].map(toggle => (
                                    <div key={toggle.key} className="flex items-center justify-between p-4 bg-slate-800 rounded-xl">
                                        <div>
                                            <p className="text-sm font-medium text-white">{toggle.label}</p>
                                            <p className="text-xs text-slate-500 mt-0.5">{toggle.desc}</p>
                                        </div>
                                        <button
                                            onClick={() => setSettings({ ...settings, [toggle.key]: !(settings as any)[toggle.key] })}
                                            className={`w-12 h-6 rounded-full transition-all relative ${(settings as any)[toggle.key] ? "bg-indigo-600" : "bg-slate-700"}`}
                                        >
                                            <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${(settings as any)[toggle.key] ? "left-7" : "left-1"}`} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Sitemap Actions */}
                    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center">
                                <FileText className="w-4 h-4 text-amber-400" />
                            </div>
                            <h2 className="text-base font-semibold text-white">Sitemap & Indexing</h2>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm rounded-xl transition-colors">
                                <RefreshCw className="w-4 h-4" />
                                Regenerate Sitemap
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm rounded-xl transition-colors">
                                <ExternalLink className="w-4 h-4" />
                                View sitemap.xml
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm rounded-xl transition-colors">
                                <ExternalLink className="w-4 h-4" />
                                View robots.txt
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </AdminLayout>
    );
}
