import { useState, useEffect } from "react";
import { AdminLayout } from "./AdminLayout";
import { useAdminAuth } from "@/context/AdminAuthContext";
import { motion } from "framer-motion";
import {
  GraduationCap, FileText, Award, HelpCircle, Megaphone, Save,
  Loader2, CheckCircle2, Users, DollarSign, BookOpen, Plus, Trash2, ToggleLeft, ToggleRight
} from "lucide-react";
import { Link } from "wouter";

interface AdmissionInfo {
  requirementsAr: string[];
  requirementsEn: string[];
  deadlineAr: string;
  deadlineEn: string;
  contactEmail: string;
  contactPhone: string;
}

interface Scholarship {
  nameAr: string;
  nameEn: string;
  valueAr: string;
  valueEn: string;
  criteriaAr: string;
  criteriaEn: string;
  isActive: boolean;
}

type Tab = "admissions" | "scholarships" | "faqs" | "announcements";

const defaultAdmission: AdmissionInfo = {
  requirementsAr: [
    "شهادة الثانوية العامة المصرية أو ما يعادلها",
    "الحد الأدنى 50% في المسار العلمي/الأدبي",
    "بطاقة رقم قومي أو جواز سفر ساري",
    "4 صور شخصية حديثة",
    "شهادة الموقف من التجنيد (للذكور)",
    "شهادة اللياقة الطبية"
  ],
  requirementsEn: [
    "Egyptian General Secondary Certificate or equivalent",
    "Minimum 50% in scientific/literary track",
    "Valid national ID or passport",
    "4 recent passport-size photographs",
    "Military status certificate (for males)",
    "Medical fitness certificate"
  ],
  deadlineAr: "من 1 يوليو إلى 30 سبتمبر",
  deadlineEn: "July 1 to September 30",
  contactEmail: "admissions@valleyinstitutes.edu.eg",
  contactPhone: "+20 123 456 789",
};

const defaultScholarships: Scholarship[] = [
  { nameAr: "منحة التفوق الأكاديمي", nameEn: "Academic Excellence Award", valueAr: "تخفيض 50%", valueEn: "50% reduction", criteriaAr: "أفضل 5% من دفعة التخرج بمعدل 90%+", criteriaEn: "Top 5% with 90%+ grade", isActive: true },
  { nameAr: "منحة الاحتياج المالي", nameEn: "Financial Need Grant", valueAr: "تخفيض 25-75%", valueEn: "25-75% reduction", criteriaAr: "بناءً على تقييم دخل الأسرة", criteriaEn: "Based on family income assessment", isActive: true },
  { nameAr: "منحة التفوق الرياضي", nameEn: "Sports Excellence Grant", valueAr: "تخفيض 30%", valueEn: "30% reduction", criteriaAr: "إنجاز رياضي وطني أو دولي", criteriaEn: "National/international sports achievement", isActive: true },
  { nameAr: "خصم الأشقاء", nameEn: "Sibling Discount", valueAr: "10% لكل شقيق", valueEn: "10% per sibling", criteriaAr: "طالبان أو أكثر مسجلين", criteriaEn: "2+ enrolled students", isActive: true },
];

export default function StudentAffairsManager() {
  const { token } = useAdminAuth();
  const [activeTab, setActiveTab] = useState<Tab>("admissions");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);
  const [admission, setAdmission] = useState<AdmissionInfo>(defaultAdmission);
  const [scholarships, setScholarships] = useState<Scholarship[]>(defaultScholarships);

  useEffect(() => {
    if (!token) return;
    fetch("/api/admin/settings", { headers: { Authorization: `Bearer ${token}` } })
      .then(r => r.json())
      .then((data) => {
        if (!Array.isArray(data)) return;
        const find = (key: string) => data.find((s: any) => s.key === key)?.value;
        if (find("student_admission")) setAdmission(find("student_admission"));
        if (find("student_scholarships")) setScholarships(find("student_scholarships"));
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
        body: JSON.stringify({ value, group: "students" }),
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch {
    } finally {
      setSaving(false);
    }
  };

  const tabs = [
    { id: "admissions" as Tab, label: "Admissions", icon: FileText },
    { id: "scholarships" as Tab, label: "Scholarships", icon: Award },
    { id: "faqs" as Tab, label: "Student FAQs", icon: HelpCircle },
    { id: "announcements" as Tab, label: "Announcements", icon: Megaphone },
  ];

  const inputClass = "w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-colors";
  const labelClass = "block text-sm font-medium text-slate-300 mb-1.5";

  return (
    <AdminLayout>
      <div className="p-6 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Student Affairs</h1>
                <p className="text-slate-400 text-sm">Manage admissions, scholarships, and student services</p>
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
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/20"
                  : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
              }`}>
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 text-emerald-400 animate-spin" />
          </div>
        ) : (
          <motion.div key={activeTab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

            {activeTab === "admissions" && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-white mb-4">Admission Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass}>Application Deadline (Arabic)</label>
                    <input className={inputClass} dir="rtl" value={admission.deadlineAr}
                      onChange={e => setAdmission({ ...admission, deadlineAr: e.target.value })} />
                  </div>
                  <div>
                    <label className={labelClass}>Application Deadline (English)</label>
                    <input className={inputClass} value={admission.deadlineEn}
                      onChange={e => setAdmission({ ...admission, deadlineEn: e.target.value })} />
                  </div>
                  <div>
                    <label className={labelClass}>Contact Email</label>
                    <input className={inputClass} type="email" value={admission.contactEmail}
                      onChange={e => setAdmission({ ...admission, contactEmail: e.target.value })} />
                  </div>
                  <div>
                    <label className={labelClass}>Contact Phone</label>
                    <input className={inputClass} value={admission.contactPhone}
                      onChange={e => setAdmission({ ...admission, contactPhone: e.target.value })} />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Requirements (Arabic) - one per line</label>
                  <textarea className={inputClass} dir="rtl" rows={6}
                    value={admission.requirementsAr.join("\n")}
                    onChange={e => setAdmission({ ...admission, requirementsAr: e.target.value.split("\n").filter(Boolean) })} />
                </div>
                <div>
                  <label className={labelClass}>Requirements (English) - one per line</label>
                  <textarea className={inputClass} rows={6}
                    value={admission.requirementsEn.join("\n")}
                    onChange={e => setAdmission({ ...admission, requirementsEn: e.target.value.split("\n").filter(Boolean) })} />
                </div>

                <div className="flex justify-end pt-4">
                  <button onClick={() => saveSettings("student_admission", admission)} disabled={saving}
                    className="flex items-center gap-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-medium transition-colors disabled:opacity-50">
                    {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                    Save Admission Info
                  </button>
                </div>
              </div>
            )}

            {activeTab === "scholarships" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-white">Scholarships & Financial Aid</h2>
                  <button onClick={() => setScholarships([...scholarships, { nameAr: "", nameEn: "", valueAr: "", valueEn: "", criteriaAr: "", criteriaEn: "", isActive: true }])}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-sm transition-colors">
                    <Plus className="w-3.5 h-3.5" /> Add Scholarship
                  </button>
                </div>
                {scholarships.map((s, i) => (
                  <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-5">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-slate-300">Scholarship #{i + 1}</span>
                        <button onClick={() => {
                          const sc = [...scholarships]; sc[i] = { ...sc[i], isActive: !sc[i].isActive }; setScholarships(sc);
                        }}
                          className={`px-2 py-0.5 rounded-full text-xs font-medium ${s.isActive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
                          {s.isActive ? "Active" : "Inactive"}
                        </button>
                      </div>
                      <button onClick={() => setScholarships(scholarships.filter((_, idx) => idx !== i))}
                        className="text-red-400 hover:text-red-300 p-1">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Name (Arabic)</label>
                        <input className={inputClass} dir="rtl" value={s.nameAr}
                          onChange={e => { const sc = [...scholarships]; sc[i] = { ...sc[i], nameAr: e.target.value }; setScholarships(sc); }} />
                      </div>
                      <div>
                        <label className={labelClass}>Name (English)</label>
                        <input className={inputClass} value={s.nameEn}
                          onChange={e => { const sc = [...scholarships]; sc[i] = { ...sc[i], nameEn: e.target.value }; setScholarships(sc); }} />
                      </div>
                      <div>
                        <label className={labelClass}>Value (Arabic)</label>
                        <input className={inputClass} dir="rtl" value={s.valueAr}
                          onChange={e => { const sc = [...scholarships]; sc[i] = { ...sc[i], valueAr: e.target.value }; setScholarships(sc); }} />
                      </div>
                      <div>
                        <label className={labelClass}>Value (English)</label>
                        <input className={inputClass} value={s.valueEn}
                          onChange={e => { const sc = [...scholarships]; sc[i] = { ...sc[i], valueEn: e.target.value }; setScholarships(sc); }} />
                      </div>
                      <div>
                        <label className={labelClass}>Criteria (Arabic)</label>
                        <input className={inputClass} dir="rtl" value={s.criteriaAr}
                          onChange={e => { const sc = [...scholarships]; sc[i] = { ...sc[i], criteriaAr: e.target.value }; setScholarships(sc); }} />
                      </div>
                      <div>
                        <label className={labelClass}>Criteria (English)</label>
                        <input className={inputClass} value={s.criteriaEn}
                          onChange={e => { const sc = [...scholarships]; sc[i] = { ...sc[i], criteriaEn: e.target.value }; setScholarships(sc); }} />
                      </div>
                    </div>
                  </div>
                ))}
                <div className="flex justify-end pt-4">
                  <button onClick={() => saveSettings("student_scholarships", scholarships)} disabled={saving}
                    className="flex items-center gap-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-medium transition-colors disabled:opacity-50">
                    {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                    Save Scholarships
                  </button>
                </div>
              </div>
            )}

            {activeTab === "faqs" && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-white mb-4">Student FAQs</h2>
                <p className="text-slate-400 text-sm mb-6">
                  Manage frequently asked questions through the FAQs Manager.
                  FAQs categorized as "Admission", "Financial", or "Student Life" appear on the Students page.
                </p>
                <Link href="/admin/students/faqs">
                  <div className="bg-slate-800 border border-slate-700 hover:border-emerald-500/50 rounded-xl p-6 transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center">
                        <HelpCircle className="w-6 h-6 text-violet-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium text-lg">FAQs Manager</h3>
                        <p className="text-slate-500 text-sm">Create, edit, and organize frequently asked questions</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {activeTab === "announcements" && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-white mb-4">Student Announcements</h2>
                <p className="text-slate-400 text-sm mb-6">
                  Manage student-related announcements through the Announcements Manager.
                </p>
                <Link href="/admin/announcements">
                  <div className="bg-slate-800 border border-slate-700 hover:border-amber-500/50 rounded-xl p-6 transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                        <Megaphone className="w-6 h-6 text-amber-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium text-lg">Announcements Manager</h3>
                        <p className="text-slate-500 text-sm">Create and manage student announcements and notifications</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </AdminLayout>
  );
}
