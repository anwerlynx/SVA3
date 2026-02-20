import { useState } from "react";
import { AdminLayout } from "./AdminLayout";
import { motion } from "framer-motion";
import {
    Settings, Globe, Mail, Phone, MapPin, Save, Eye, EyeOff,
    Palette, Bell, Shield, Database, Zap, CheckCircle2, AlertCircle,
    RefreshCw, Download, Upload, ToggleLeft, ToggleRight, ChevronRight
} from "lucide-react";

interface SettingGroup {
    id: string;
    label: string;
    icon: React.ElementType;
    color: string;
}

const groups: SettingGroup[] = [
    { id: "general", label: "General", icon: Globe, color: "text-indigo-400" },
    { id: "contact", label: "Contact Info", icon: Phone, color: "text-emerald-400" },
    { id: "appearance", label: "Appearance", icon: Palette, color: "text-violet-400" },
    { id: "notifications", label: "Notifications", icon: Bell, color: "text-amber-400" },
    { id: "security", label: "Security", icon: Shield, color: "text-red-400" },
    { id: "system", label: "System", icon: Database, color: "text-cyan-400" },
];

interface Settings {
    // General
    siteTitleAr: string;
    siteTitleEn: string;
    siteDescriptionAr: string;
    siteDescriptionEn: string;
    logoUrl: string;
    faviconUrl: string;
    maintenanceMode: boolean;
    // Contact
    email: string;
    phone: string;
    address: string;
    addressAr: string;
    facebookUrl: string;
    twitterUrl: string;
    youtubeUrl: string;
    linkedinUrl: string;
    // Appearance
    primaryColor: string;
    accentColor: string;
    darkModeDefault: boolean;
    rtlDefault: boolean;
    // Notifications
    emailNotifications: boolean;
    adminEmailAlerts: string;
    newApplicationAlert: boolean;
    systemAlerts: boolean;
    // Security
    sessionTimeout: number;
    maxLoginAttempts: number;
    requireMfa: boolean;
    allowedIPs: string;
    // System
    cacheEnabled: boolean;
    cacheTtl: number;
    debugMode: boolean;
    analyticsId: string;
    backupFrequency: string;
}

const defaultSettings: Settings = {
    siteTitleAr: "معاهد الوادي العليا",
    siteTitleEn: "Valley Higher Institutes",
    siteDescriptionAr: "معاهد الوادي العليا للعلوم والتكنولوجيا",
    siteDescriptionEn: "Valley Higher Institutes for Science and Technology",
    logoUrl: "/figmaAssets/logo.png",
    faviconUrl: "/favicon.ico",
    maintenanceMode: false,
    email: "info@sva.edu.eg",
    phone: "+20 123 456 7890",
    address: "Valley City, Egypt",
    addressAr: "مدينة الوادي، مصر",
    facebookUrl: "https://facebook.com/sva.edu",
    twitterUrl: "https://twitter.com/sva_edu",
    youtubeUrl: "https://youtube.com/@sva_edu",
    linkedinUrl: "https://linkedin.com/school/sva-edu",
    primaryColor: "#6366f1",
    accentColor: "#8b5cf6",
    darkModeDefault: false,
    rtlDefault: true,
    emailNotifications: true,
    adminEmailAlerts: "admin@sva.edu.eg",
    newApplicationAlert: true,
    systemAlerts: true,
    sessionTimeout: 60,
    maxLoginAttempts: 5,
    requireMfa: false,
    allowedIPs: "",
    cacheEnabled: true,
    cacheTtl: 3600,
    debugMode: false,
    analyticsId: "",
    backupFrequency: "daily",
};

function Toggle({ value, onChange }: { value: boolean; onChange: (v: boolean) => void }) {
    return (
        <button onClick={() => onChange(!value)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-medium transition-all ${value ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" : "bg-slate-800 border-slate-700 text-slate-400"}`}>
            {value ? <ToggleRight className="w-4 h-4" /> : <ToggleLeft className="w-4 h-4" />}
            {value ? "Enabled" : "Disabled"}
        </button>
    );
}

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
    return (
        <div className="flex flex-col sm:flex-row sm:items-start gap-3">
            <div className="sm:w-48 flex-shrink-0">
                <p className="text-sm font-medium text-white">{label}</p>
                {hint && <p className="text-xs text-slate-500 mt-0.5">{hint}</p>}
            </div>
            <div className="flex-1">{children}</div>
        </div>
    );
}

const inputCls = "w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all";

export default function AdminSettings() {
    const [settings, setSettings] = useState<Settings>(defaultSettings);
    const [activeGroup, setActiveGroup] = useState("general");
    const [saved, setSaved] = useState(false);

    const set = (key: keyof Settings, value: any) => setSettings(s => ({ ...s, [key]: value }));

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    return (
        <AdminLayout>
            <div className="p-6 max-w-5xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-white">Site Settings</h1>
                        <p className="text-sm text-slate-400 mt-1">Configure global settings for the website and admin panel</p>
                    </div>
                    <button onClick={handleSave}
                        className={`flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl transition-all ${saved ? "bg-emerald-600 text-white" : "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20"}`}>
                        {saved ? <><CheckCircle2 className="w-4 h-4" /> Saved!</> : <><Save className="w-4 h-4" /> Save Changes</>}
                    </button>
                </div>

                <div className="flex gap-6">
                    {/* Sidebar Nav */}
                    <div className="w-48 flex-shrink-0">
                        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-2 flex flex-col gap-0.5">
                            {groups.map(group => (
                                <button key={group.id} onClick={() => setActiveGroup(group.id)}
                                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-left ${activeGroup === group.id ? "bg-slate-800 text-white" : "text-slate-400 hover:text-white hover:bg-slate-800/50"}`}>
                                    <group.icon className={`w-4 h-4 ${activeGroup === group.id ? group.color : ""}`} />
                                    {group.label}
                                </button>
                            ))}
                        </div>

                        {/* Quick Actions */}
                        <div className="mt-4 bg-slate-900 border border-slate-800 rounded-2xl p-3">
                            <p className="text-[10px] font-semibold text-slate-600 uppercase tracking-widest mb-2">Quick Actions</p>
                            {[
                                { label: "Clear Cache", icon: RefreshCw },
                                { label: "Export Data", icon: Download },
                                { label: "Import Data", icon: Upload },
                            ].map((action, i) => (
                                <button key={i} className="w-full flex items-center gap-2 px-2 py-2 rounded-xl text-xs text-slate-400 hover:text-white hover:bg-slate-800 transition-all">
                                    <action.icon className="w-3.5 h-3.5" />
                                    {action.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Settings Panel */}
                    <div className="flex-1 bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
                        {/* General */}
                        {activeGroup === "general" && (
                            <div className="p-6 flex flex-col gap-6">
                                <div>
                                    <h2 className="text-base font-bold text-white mb-1">General Settings</h2>
                                    <p className="text-xs text-slate-500">Basic site information and configuration</p>
                                </div>
                                <div className="h-px bg-slate-800" />
                                <Field label="Site Title (Arabic)" hint="Displayed in browser tab">
                                    <input value={settings.siteTitleAr} onChange={e => set("siteTitleAr", e.target.value)} dir="rtl" className={inputCls} />
                                </Field>
                                <Field label="Site Title (English)">
                                    <input value={settings.siteTitleEn} onChange={e => set("siteTitleEn", e.target.value)} className={inputCls} />
                                </Field>
                                <Field label="Description (Arabic)">
                                    <textarea value={settings.siteDescriptionAr} onChange={e => set("siteDescriptionAr", e.target.value)} dir="rtl" rows={2} className={`${inputCls} resize-none`} />
                                </Field>
                                <Field label="Description (English)">
                                    <textarea value={settings.siteDescriptionEn} onChange={e => set("siteDescriptionEn", e.target.value)} rows={2} className={`${inputCls} resize-none`} />
                                </Field>
                                <Field label="Logo URL">
                                    <input value={settings.logoUrl} onChange={e => set("logoUrl", e.target.value)} className={inputCls} />
                                </Field>
                                <Field label="Maintenance Mode" hint="Disables public access">
                                    <Toggle value={settings.maintenanceMode} onChange={v => set("maintenanceMode", v)} />
                                    {settings.maintenanceMode && (
                                        <div className="mt-2 flex items-center gap-2 text-xs text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-xl px-3 py-2">
                                            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                                            Site is currently in maintenance mode. Public users will see a maintenance page.
                                        </div>
                                    )}
                                </Field>
                            </div>
                        )}

                        {/* Contact */}
                        {activeGroup === "contact" && (
                            <div className="p-6 flex flex-col gap-6">
                                <div>
                                    <h2 className="text-base font-bold text-white mb-1">Contact Information</h2>
                                    <p className="text-xs text-slate-500">Displayed on the website contact page and footer</p>
                                </div>
                                <div className="h-px bg-slate-800" />
                                <Field label="Email Address"><input value={settings.email} onChange={e => set("email", e.target.value)} type="email" className={inputCls} /></Field>
                                <Field label="Phone Number"><input value={settings.phone} onChange={e => set("phone", e.target.value)} className={inputCls} /></Field>
                                <Field label="Address (English)"><input value={settings.address} onChange={e => set("address", e.target.value)} className={inputCls} /></Field>
                                <Field label="Address (Arabic)"><input value={settings.addressAr} onChange={e => set("addressAr", e.target.value)} dir="rtl" className={inputCls} /></Field>
                                <div className="h-px bg-slate-800" />
                                <p className="text-sm font-semibold text-white">Social Media Links</p>
                                <Field label="Facebook"><input value={settings.facebookUrl} onChange={e => set("facebookUrl", e.target.value)} className={inputCls} placeholder="https://facebook.com/..." /></Field>
                                <Field label="Twitter / X"><input value={settings.twitterUrl} onChange={e => set("twitterUrl", e.target.value)} className={inputCls} placeholder="https://twitter.com/..." /></Field>
                                <Field label="YouTube"><input value={settings.youtubeUrl} onChange={e => set("youtubeUrl", e.target.value)} className={inputCls} placeholder="https://youtube.com/..." /></Field>
                                <Field label="LinkedIn"><input value={settings.linkedinUrl} onChange={e => set("linkedinUrl", e.target.value)} className={inputCls} placeholder="https://linkedin.com/..." /></Field>
                            </div>
                        )}

                        {/* Appearance */}
                        {activeGroup === "appearance" && (
                            <div className="p-6 flex flex-col gap-6">
                                <div>
                                    <h2 className="text-base font-bold text-white mb-1">Appearance</h2>
                                    <p className="text-xs text-slate-500">Customize the look and feel of the website</p>
                                </div>
                                <div className="h-px bg-slate-800" />
                                <Field label="Primary Color" hint="Main brand color">
                                    <div className="flex items-center gap-3">
                                        <input type="color" value={settings.primaryColor} onChange={e => set("primaryColor", e.target.value)}
                                            className="w-12 h-10 rounded-xl border border-slate-700 bg-slate-800 cursor-pointer" />
                                        <input value={settings.primaryColor} onChange={e => set("primaryColor", e.target.value)}
                                            className={`${inputCls} flex-1 font-mono`} />
                                    </div>
                                </Field>
                                <Field label="Accent Color">
                                    <div className="flex items-center gap-3">
                                        <input type="color" value={settings.accentColor} onChange={e => set("accentColor", e.target.value)}
                                            className="w-12 h-10 rounded-xl border border-slate-700 bg-slate-800 cursor-pointer" />
                                        <input value={settings.accentColor} onChange={e => set("accentColor", e.target.value)}
                                            className={`${inputCls} flex-1 font-mono`} />
                                    </div>
                                </Field>
                                <Field label="Dark Mode Default" hint="Default theme for visitors">
                                    <Toggle value={settings.darkModeDefault} onChange={v => set("darkModeDefault", v)} />
                                </Field>
                                <Field label="RTL Default" hint="Right-to-left layout by default">
                                    <Toggle value={settings.rtlDefault} onChange={v => set("rtlDefault", v)} />
                                </Field>
                            </div>
                        )}

                        {/* Notifications */}
                        {activeGroup === "notifications" && (
                            <div className="p-6 flex flex-col gap-6">
                                <div>
                                    <h2 className="text-base font-bold text-white mb-1">Notifications</h2>
                                    <p className="text-xs text-slate-500">Configure email and system notification settings</p>
                                </div>
                                <div className="h-px bg-slate-800" />
                                <Field label="Email Notifications"><Toggle value={settings.emailNotifications} onChange={v => set("emailNotifications", v)} /></Field>
                                <Field label="Admin Alert Email" hint="Receives system notifications">
                                    <input value={settings.adminEmailAlerts} onChange={e => set("adminEmailAlerts", e.target.value)} type="email" className={inputCls} />
                                </Field>
                                <Field label="New Application Alert" hint="Notify on new student applications">
                                    <Toggle value={settings.newApplicationAlert} onChange={v => set("newApplicationAlert", v)} />
                                </Field>
                                <Field label="System Alerts" hint="Critical system notifications">
                                    <Toggle value={settings.systemAlerts} onChange={v => set("systemAlerts", v)} />
                                </Field>
                            </div>
                        )}

                        {/* Security */}
                        {activeGroup === "security" && (
                            <div className="p-6 flex flex-col gap-6">
                                <div>
                                    <h2 className="text-base font-bold text-white mb-1">Security</h2>
                                    <p className="text-xs text-slate-500">Authentication and access control settings</p>
                                </div>
                                <div className="h-px bg-slate-800" />
                                <Field label="Session Timeout" hint="Minutes of inactivity before logout">
                                    <input value={settings.sessionTimeout} onChange={e => set("sessionTimeout", +e.target.value)} type="number" min={5} max={480} className={inputCls} />
                                </Field>
                                <Field label="Max Login Attempts" hint="Before account lockout">
                                    <input value={settings.maxLoginAttempts} onChange={e => set("maxLoginAttempts", +e.target.value)} type="number" min={3} max={20} className={inputCls} />
                                </Field>
                                <Field label="Require MFA" hint="Two-factor authentication for admins">
                                    <Toggle value={settings.requireMfa} onChange={v => set("requireMfa", v)} />
                                </Field>
                                <Field label="Allowed IPs" hint="Comma-separated IPs (leave empty for all)">
                                    <input value={settings.allowedIPs} onChange={e => set("allowedIPs", e.target.value)} placeholder="192.168.1.1, 10.0.0.0/24" className={inputCls} />
                                </Field>
                            </div>
                        )}

                        {/* System */}
                        {activeGroup === "system" && (
                            <div className="p-6 flex flex-col gap-6">
                                <div>
                                    <h2 className="text-base font-bold text-white mb-1">System Configuration</h2>
                                    <p className="text-xs text-slate-500">Performance, caching, and developer settings</p>
                                </div>
                                <div className="h-px bg-slate-800" />
                                <Field label="Cache Enabled" hint="Improves page load performance">
                                    <Toggle value={settings.cacheEnabled} onChange={v => set("cacheEnabled", v)} />
                                </Field>
                                <Field label="Cache TTL (seconds)" hint="Time-to-live for cached content">
                                    <input value={settings.cacheTtl} onChange={e => set("cacheTtl", +e.target.value)} type="number" className={inputCls} />
                                </Field>
                                <Field label="Debug Mode" hint="Enable verbose error logging">
                                    <Toggle value={settings.debugMode} onChange={v => set("debugMode", v)} />
                                    {settings.debugMode && (
                                        <div className="mt-2 flex items-center gap-2 text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-3 py-2">
                                            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                                            Debug mode is enabled. Disable in production environments.
                                        </div>
                                    )}
                                </Field>
                                <Field label="Google Analytics ID" hint="GA4 measurement ID">
                                    <input value={settings.analyticsId} onChange={e => set("analyticsId", e.target.value)} placeholder="G-XXXXXXXXXX" className={`${inputCls} font-mono`} />
                                </Field>
                                <Field label="Backup Frequency">
                                    <select value={settings.backupFrequency} onChange={e => set("backupFrequency", e.target.value)}
                                        className={inputCls}>
                                        <option value="hourly">Hourly</option>
                                        <option value="daily">Daily</option>
                                        <option value="weekly">Weekly</option>
                                        <option value="monthly">Monthly</option>
                                    </select>
                                </Field>

                                {/* System Status */}
                                <div className="h-px bg-slate-800" />
                                <p className="text-sm font-semibold text-white">System Status</p>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        { label: "Database", status: "healthy" },
                                        { label: "Cache", status: "healthy" },
                                        { label: "Storage", status: "healthy" },
                                        { label: "Email Service", status: "warning" },
                                    ].map((s, i) => (
                                        <div key={i} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-xl">
                                            <span className="text-xs text-slate-400">{s.label}</span>
                                            <span className={`text-xs font-medium flex items-center gap-1 ${s.status === "healthy" ? "text-emerald-400" : "text-amber-400"}`}>
                                                {s.status === "healthy" ? <CheckCircle2 className="w-3.5 h-3.5" /> : <AlertCircle className="w-3.5 h-3.5" />}
                                                {s.status}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
