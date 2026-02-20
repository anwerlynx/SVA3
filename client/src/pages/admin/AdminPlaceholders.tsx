import { AdminLayout } from "./AdminLayout";
import { motion } from "framer-motion";
import {
    FileText, Home, GraduationCap, BookOpen, Library,
    Activity, Settings, FlaskConical, Calendar, BookMarked,
    Database, Layers, Zap, Construction
} from "lucide-react";

interface PlaceholderProps {
    title: string;
    description: string;
    icon?: React.ElementType;
    comingSoon?: string[];
}

export function AdminPlaceholder({ title, description, icon: Icon = Construction, comingSoon = [] }: PlaceholderProps) {
    return (
        <AdminLayout>
            <div className="p-6 max-w-4xl mx-auto">
                <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col items-center"
                    >
                        {/* Icon */}
                        <div className="w-20 h-20 rounded-3xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6">
                            <Icon className="w-10 h-10 text-indigo-400" />
                        </div>

                        {/* Badge */}
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-xs font-medium mb-4">
                            <Zap className="w-3 h-3" />
                            In Development
                        </span>

                        <h1 className="text-3xl font-bold text-white mb-3">{title}</h1>
                        <p className="text-slate-400 text-base max-w-md mb-8">{description}</p>

                        {/* Coming Soon Features */}
                        {comingSoon.length > 0 && (
                            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 w-full max-w-md text-left">
                                <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Planned Features</p>
                                <ul className="flex flex-col gap-2.5">
                                    {comingSoon.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2.5 text-sm text-slate-400">
                                            <span className="w-5 h-5 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0 text-[10px] font-bold text-indigo-400">{i + 1}</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </AdminLayout>
    );
}

// ── Individual Module Placeholders ────────────────────────────────────────────

export function AdminPages() {
    return <AdminPlaceholder
        title="Content Manager"
        description="Manage all website pages and content blocks with a visual drag-and-drop page builder."
        icon={FileText}
        comingSoon={[
            "Visual drag-and-drop page builder",
            "Bilingual content blocks (AR/EN)",
            "Version history and rollback",
            "Content approval workflow",
            "SEO settings per page",
        ]}
    />;
}

export function AdminHomepage() {
    return <AdminPlaceholder
        title="Homepage Control"
        description="Customize the homepage hero, statistics, announcements, and featured content sections."
        icon={Home}
        comingSoon={[
            "Hero section text and image editor",
            "Live statistics configuration",
            "Announcement ticker management",
            "Featured news and events selection",
            "Quick links customization",
        ]}
    />;
}

export function AdminAcademic() {
    return <AdminPlaceholder
        title="Academic System"
        description="Manage academic schedules, course catalog, and the academic calendar."
        icon={GraduationCap}
        comingSoon={[
            "Semester schedule builder",
            "Academic calendar with events",
            "Course prerequisite mapping",
            "Exam schedule management",
            "Grade distribution reports",
        ]}
    />;
}

export function AdminStudents() {
    return <AdminPlaceholder
        title="Student Affairs"
        description="Manage admissions, scholarships, FAQs, and student announcements."
        icon={BookOpen}
        comingSoon={[
            "Online application management",
            "Scholarship application review",
            "FAQ editor with categories",
            "Student announcement system",
            "Admission statistics dashboard",
        ]}
    />;
}

export function AdminLibrary() {
    return <AdminPlaceholder
        title="Library Manager"
        description="Manage physical books, digital resources, and academic databases."
        icon={Library}
        comingSoon={[
            "Book catalog management (CRUD)",
            "Digital resource upload and linking",
            "Database subscription management",
            "Borrowing records and reports",
            "Library statistics dashboard",
        ]}
    />;
}

export function AdminActivities() {
    return <AdminPlaceholder
        title="Student Activities"
        description="Manage student clubs, sports teams, cultural events, and volunteering initiatives."
        icon={Activity}
        comingSoon={[
            "Club and organization management",
            "Event scheduling and RSVP tracking",
            "Sports team roster management",
            "Volunteer program coordination",
            "Activity photo gallery",
        ]}
    />;
}

export function AdminResearch() {
    return <AdminPlaceholder
        title="Research Management"
        description="Manage faculty publications, research projects, and conference participation."
        icon={FlaskConical}
        comingSoon={[
            "Publication catalog with DOI linking",
            "Research project tracking",
            "Conference participation records",
            "Research statistics and reports",
            "Faculty research profile pages",
        ]}
    />;
}

export function AdminEvents() {
    return <AdminPlaceholder
        title="Events Manager"
        description="Create and manage university events, conferences, and academic activities."
        icon={Calendar}
        comingSoon={[
            "Event creation with rich details",
            "RSVP and attendance tracking",
            "Event calendar view",
            "Automated reminder emails",
            "Post-event photo galleries",
        ]}
    />;
}

export function AdminCourses() {
    return <AdminPlaceholder
        title="Course Catalog"
        description="Manage the full course catalog across all departments and institutes."
        icon={BookMarked}
        comingSoon={[
            "Course CRUD with bilingual support",
            "Credit hour and prerequisite management",
            "Course assignment to departments",
            "Semester availability settings",
            "Course description and syllabus upload",
        ]}
    />;
}

export function AdminSystem() {
    return <AdminPlaceholder
        title="System Administration"
        description="Monitor system health, manage backups, view error logs, and configure feature flags."
        icon={Database}
        comingSoon={[
            "Real-time system health monitoring",
            "Automated backup and restore",
            "Error log viewer with filtering",
            "Feature flag management",
            "Performance metrics dashboard",
        ]}
    />;
}
