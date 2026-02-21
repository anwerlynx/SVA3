import { useState, useEffect } from "react";
import { AdminLayout } from "./AdminLayout";
import { useAdminAuth } from "@/context/AdminAuthContext";
import { motion } from "framer-motion";
import {
  GraduationCap, Calendar, BookOpen, Clock, Save, Loader2,
  CheckCircle2, Plus, Trash2, BookMarked, FileText, Building2
} from "lucide-react";
import { Link } from "wouter";

interface SemesterSchedule {
  nameAr: string;
  nameEn: string;
  startDate: string;
  endDate: string;
  events: { labelAr: string; labelEn: string; date: string }[];
}

interface AcademicCalendarSettings {
  currentYear: string;
  semesters: SemesterSchedule[];
}

type Tab = "calendar" | "schedules" | "courses" | "departments";

const defaultCalendar: AcademicCalendarSettings = {
  currentYear: "2025/2026",
  semesters: [
    {
      nameAr: "الفصل الدراسي الأول",
      nameEn: "First Semester",
      startDate: "2025-10-01",
      endDate: "2026-01-31",
      events: [
        { labelAr: "بداية الدراسة", labelEn: "Classes Begin", date: "2025-10-01" },
        { labelAr: "امتحانات نصف الفصل", labelEn: "Midterm Exams", date: "2025-11-24" },
        { labelAr: "إجازة نصف العام", labelEn: "Mid-Year Break", date: "2026-01-18" },
        { labelAr: "الامتحانات النهائية", labelEn: "Final Exams", date: "2026-01-25" },
      ],
    },
    {
      nameAr: "الفصل الدراسي الثاني",
      nameEn: "Second Semester",
      startDate: "2026-02-08",
      endDate: "2026-06-15",
      events: [
        { labelAr: "بداية الدراسة", labelEn: "Classes Begin", date: "2026-02-08" },
        { labelAr: "امتحانات نصف الفصل", labelEn: "Midterm Exams", date: "2026-04-06" },
        { labelAr: "الامتحانات النهائية", labelEn: "Final Exams", date: "2026-06-01" },
        { labelAr: "نهاية العام الدراسي", labelEn: "Academic Year End", date: "2026-06-15" },
      ],
    },
  ],
};

export default function AcademicManager() {
  const { token } = useAdminAuth();
  const [activeTab, setActiveTab] = useState<Tab>("calendar");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);
  const [calendar, setCalendar] = useState<AcademicCalendarSettings>(defaultCalendar);
  const [courseCount, setCourseCount] = useState(0);
  const [deptCount, setDeptCount] = useState(0);

  useEffect(() => {
    if (!token) return;
    Promise.all([
      fetch("/api/admin/settings", { headers: { Authorization: `Bearer ${token}` } }).then(r => r.json()).catch(() => []),
      fetch("/api/courses").then(r => r.json()).catch(() => []),
      fetch("/api/departments").then(r => r.json()).catch(() => []),
    ])
      .then(([settings, courses, depts]) => {
        if (Array.isArray(settings)) {
          const find = (key: string) => settings.find((s: any) => s.key === key)?.value;
          if (find("academic_calendar")) setCalendar(find("academic_calendar"));
        }
        if (Array.isArray(courses)) setCourseCount(courses.length);
        if (Array.isArray(depts)) setDeptCount(depts.length);
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
        body: JSON.stringify({ value, group: "academic" }),
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch {
    } finally {
      setSaving(false);
    }
  };

  const tabs = [
    { id: "calendar" as Tab, label: "Academic Calendar", icon: Calendar },
    { id: "schedules" as Tab, label: "Exam Schedules", icon: Clock },
    { id: "courses" as Tab, label: "Course Catalog", icon: BookMarked },
    { id: "departments" as Tab, label: "Departments", icon: Building2 },
  ];

  const inputClass = "w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-colors";
  const labelClass = "block text-sm font-medium text-slate-300 mb-1.5";

  const updateSemester = (semIdx: number, field: string, value: any) => {
    const updated = { ...calendar };
    (updated.semesters[semIdx] as any)[field] = value;
    setCalendar({ ...updated });
  };

  const updateSemesterEvent = (semIdx: number, evtIdx: number, field: string, value: string) => {
    const updated = { ...calendar };
    (updated.semesters[semIdx].events[evtIdx] as any)[field] = value;
    setCalendar({ ...updated });
  };

  const addEventToSemester = (semIdx: number) => {
    const updated = { ...calendar };
    updated.semesters[semIdx].events.push({ labelAr: "", labelEn: "", date: "" });
    setCalendar({ ...updated });
  };

  const removeEventFromSemester = (semIdx: number, evtIdx: number) => {
    const updated = { ...calendar };
    updated.semesters[semIdx].events = updated.semesters[semIdx].events.filter((_, i) => i !== evtIdx);
    setCalendar({ ...updated });
  };

  return (
    <AdminLayout>
      <div className="p-6 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-violet-400" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Academic System</h1>
                <p className="text-slate-400 text-sm">Manage academic calendar, schedules, and course catalog</p>
              </div>
            </div>
            {saved && (
              <span className="flex items-center gap-1.5 text-emerald-400 text-sm">
                <CheckCircle2 className="w-4 h-4" /> Saved successfully
              </span>
            )}
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <p className="text-2xl font-bold text-white">{calendar.currentYear}</p>
            <p className="text-slate-500 text-xs">Current Year</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <p className="text-2xl font-bold text-violet-400">{calendar.semesters.length}</p>
            <p className="text-slate-500 text-xs">Semesters</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <p className="text-2xl font-bold text-emerald-400">{courseCount}</p>
            <p className="text-slate-500 text-xs">Courses</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <p className="text-2xl font-bold text-amber-400">{deptCount}</p>
            <p className="text-slate-500 text-xs">Departments</p>
          </div>
        </div>

        <div className="flex gap-2 mb-8 flex-wrap">
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-500/20"
                  : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
              }`}>
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 text-violet-400 animate-spin" />
          </div>
        ) : (
          <motion.div key={activeTab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

            {activeTab === "calendar" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-white">Academic Calendar</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className={labelClass}>Academic Year</label>
                    <input className={inputClass} value={calendar.currentYear}
                      onChange={e => setCalendar({ ...calendar, currentYear: e.target.value })}
                      placeholder="e.g. 2025/2026" />
                  </div>
                </div>

                {calendar.semesters.map((sem, si) => (
                  <div key={si} className="bg-slate-800 border border-slate-700 rounded-xl p-5 mb-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-white font-medium">{sem.nameEn || `Semester ${si + 1}`}</h3>
                      <button onClick={() => addEventToSemester(si)}
                        className="flex items-center gap-1 px-2 py-1 bg-violet-600 hover:bg-violet-500 text-white rounded-lg text-xs transition-colors">
                        <Plus className="w-3 h-3" /> Add Event
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className={labelClass}>Name (Arabic)</label>
                        <input className={inputClass} dir="rtl" value={sem.nameAr}
                          onChange={e => updateSemester(si, "nameAr", e.target.value)} />
                      </div>
                      <div>
                        <label className={labelClass}>Name (English)</label>
                        <input className={inputClass} value={sem.nameEn}
                          onChange={e => updateSemester(si, "nameEn", e.target.value)} />
                      </div>
                      <div>
                        <label className={labelClass}>Start Date</label>
                        <input className={inputClass} type="date" value={sem.startDate}
                          onChange={e => updateSemester(si, "startDate", e.target.value)} />
                      </div>
                      <div>
                        <label className={labelClass}>End Date</label>
                        <input className={inputClass} type="date" value={sem.endDate}
                          onChange={e => updateSemester(si, "endDate", e.target.value)} />
                      </div>
                    </div>

                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Key Dates</p>
                    {sem.events.map((evt, ei) => (
                      <div key={ei} className="grid grid-cols-5 gap-3 mb-2 items-center">
                        <input className={`${inputClass} text-sm col-span-1`} dir="rtl" placeholder="Arabic" value={evt.labelAr}
                          onChange={e => updateSemesterEvent(si, ei, "labelAr", e.target.value)} />
                        <input className={`${inputClass} text-sm col-span-1`} placeholder="English" value={evt.labelEn}
                          onChange={e => updateSemesterEvent(si, ei, "labelEn", e.target.value)} />
                        <input className={`${inputClass} text-sm col-span-2`} type="date" value={evt.date}
                          onChange={e => updateSemesterEvent(si, ei, "date", e.target.value)} />
                        <button onClick={() => removeEventFromSemester(si, ei)}
                          className="text-red-400 hover:text-red-300 p-2 justify-self-center">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                ))}

                <div className="flex justify-between pt-4">
                  <button onClick={() => {
                    const updated = { ...calendar };
                    updated.semesters.push({ nameAr: "", nameEn: "", startDate: "", endDate: "", events: [] });
                    setCalendar(updated);
                  }}
                    className="flex items-center gap-1.5 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-sm transition-colors">
                    <Plus className="w-4 h-4" /> Add Semester
                  </button>
                  <button onClick={() => saveSettings("academic_calendar", calendar)} disabled={saving}
                    className="flex items-center gap-2 px-6 py-2.5 bg-violet-600 hover:bg-violet-500 text-white rounded-xl font-medium transition-colors disabled:opacity-50">
                    {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                    Save Calendar
                  </button>
                </div>
              </div>
            )}

            {activeTab === "schedules" && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-white mb-4">Exam Schedules</h2>
                <p className="text-slate-400 text-sm mb-6">
                  Exam schedules are managed through the Events Manager. Create events with the "academic" category
                  to have them appear in the Academic Calendar.
                </p>
                <Link href="/admin/events">
                  <div className="bg-slate-800 border border-slate-700 hover:border-violet-500/50 rounded-xl p-6 transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                        <Clock className="w-6 h-6 text-amber-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium text-lg">Events Manager</h3>
                        <p className="text-slate-500 text-sm">Create exam schedules as academic events</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {activeTab === "courses" && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-white mb-4">Course Catalog</h2>
                <p className="text-slate-400 text-sm mb-6">
                  Manage the full course catalog across all departments and institutes.
                  Currently {courseCount} courses registered.
                </p>
                <Link href="/admin/courses">
                  <div className="bg-slate-800 border border-slate-700 hover:border-violet-500/50 rounded-xl p-6 transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                        <BookMarked className="w-6 h-6 text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium text-lg">Courses Manager</h3>
                        <p className="text-slate-500 text-sm">Create, edit, and organize courses with bilingual support</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {activeTab === "departments" && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-white mb-4">Academic Departments</h2>
                <p className="text-slate-400 text-sm mb-6">
                  Manage academic departments across Engineering and Management institutes.
                  Currently {deptCount} departments registered.
                </p>
                <Link href="/admin/departments">
                  <div className="bg-slate-800 border border-slate-700 hover:border-violet-500/50 rounded-xl p-6 transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-indigo-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium text-lg">Departments Manager</h3>
                        <p className="text-slate-500 text-sm">Manage department structure and details</p>
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
