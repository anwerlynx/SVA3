import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/context/LanguageContext";
import { AdminAuthProvider, useAdminAuth } from "@/context/AdminAuthContext";
import { AdminThemeProvider } from "@/context/AdminThemeContext";
import NotFound from "@/pages/not-found";
import { ScrollToTop } from "@/components/ScrollToTop";
import { BackToTop } from "@/components/BackToTop";

// ── Public Pages ──────────────────────────────────────────────────────────────
import Home from "@/pages/Home";
import About from "@/pages/About";
import Academic from "@/pages/Academic";
import Services from "@/pages/Services";
import News from "@/pages/News";
import NewsDetail from "@/pages/NewsDetail";
import Portal from "@/pages/Portal";
import Faculty from "@/pages/Faculty";
import Contact from "@/pages/Contact";
import Library from "@/pages/Library";
import Research from "@/pages/Research";
import Community from "@/pages/Community";
import Students from "@/pages/Students";
import Board from "@/pages/Board";
import Partners from "@/pages/Partners";
import CentralQuality from "@/pages/CentralQuality";
import CentralAdmission from "@/pages/CentralAdmission";
import EnrollmentConditions from "@/pages/EnrollmentConditions";
import StudentAffairs from "@/pages/StudentAffairs";
import AdmissionProcedures from "@/pages/AdmissionProcedures";
import StudentDiscipline from "@/pages/StudentDiscipline";
import QualityFiles from "@/pages/QualityFiles";
import HonorCharter from "@/pages/HonorCharter";
import ChairmanWord from "@/pages/ChairmanWord";
import WelcomeMessage from "@/pages/WelcomeMessage";
import VisionMission from "@/pages/VisionMission";
import MediaGallery from "@/pages/MediaGallery";
import GraduationParties from "@/pages/GraduationParties";
import AvailableJobs from "@/pages/AvailableJobs";
import Sitemap from "@/pages/Sitemap";
import FAQ from "@/pages/FAQ";
import AcademicCalendar from "@/pages/AcademicCalendar";

import StudentUnion from "@/pages/committees/StudentUnion";
import CulturalCommittee from "@/pages/committees/CulturalCommittee";
import SportsCommittee from "@/pages/committees/SportsCommittee";
import ArtsCommittee from "@/pages/committees/ArtsCommittee";
import SocialCommittee from "@/pages/committees/SocialCommittee";
import ScoutsCommittee from "@/pages/committees/ScoutsCommittee";

import AboutLibrary from "@/pages/library/AboutLibrary";
import KnowledgeBank from "@/pages/library/KnowledgeBank";
import DigitalBorrowing from "@/pages/library/DigitalBorrowing";

// ── Institute Pages ───────────────────────────────────────────────────────────
import ManagementHome from "@/pages/institute/management/Home";
import ManagementAbout from "@/pages/institute/management/About";
import ManagementDepartments from "@/pages/institute/management/Departments";
import ManagementAdmission from "@/pages/institute/management/Admission";
import ManagementNews from "@/pages/institute/management/News";
import ManagementQuality from "@/pages/institute/management/Quality";
import ManagementLibrary from "@/pages/institute/management/Library";
import ManagementContact from "@/pages/institute/management/Contact";
import ManagementDepartmentDetail from "@/pages/institute/management/DepartmentDetail";
import ManagementStudentServices from "@/pages/institute/management/StudentServices";
import ManagementFaculty from "@/pages/institute/management/Faculty";
import ManagementTraining from "@/pages/institute/management/Training";
import ManagementActivities from "@/pages/institute/management/Activities";

import EngineeringHome from "@/pages/institute/engineering/Home";
import EngineeringAbout from "@/pages/institute/engineering/About";
import EngineeringDepartments from "@/pages/institute/engineering/Departments";
import EngineeringAdmission from "@/pages/institute/engineering/Admission";
import EngineeringLabs from "@/pages/institute/engineering/Labs";
import EngineeringNews from "@/pages/institute/engineering/News";
import EngineeringQuality from "@/pages/institute/engineering/Quality";
import EngineeringLibrary from "@/pages/institute/engineering/Library";
import EngineeringContact from "@/pages/institute/engineering/Contact";
import EngineeringDepartmentDetail from "@/pages/institute/engineering/DepartmentDetail";
import EngineeringStudentServices from "@/pages/institute/engineering/StudentServices";
import EngineeringFaculty from "@/pages/institute/engineering/Faculty";
import EngineeringResearch from "@/pages/institute/engineering/Research";
import EngineeringTraining from "@/pages/institute/engineering/Training";

// ── Admin Pages ───────────────────────────────────────────────────────────────
import AdminLogin from "@/pages/admin/AdminLogin";
import AdminDashboard from "@/pages/admin/Dashboard";
import AdminFaculty from "@/pages/admin/FacultyManager";
import AdminNews from "@/pages/admin/NewsManager";
import AdminMedia from "@/pages/admin/MediaManager";
import AdminAnalytics from "@/pages/admin/Analytics";
import AdminUsers from "@/pages/admin/UsersManager";
import AdminSEO from "@/pages/admin/SEOSettings";
import AdminDepartmentsPage from "@/pages/admin/DepartmentsManager";
import AdminSiteSettings from "@/pages/admin/SiteSettings";
import {
  AdminPages, AdminHomepage, AdminAcademic,
  AdminStudents, AdminLibrary, AdminActivities,
  AdminResearch, AdminEvents, AdminCourses, AdminSystem
} from "@/pages/admin/AdminPlaceholders";

function AdminRouter() {
  const { isAuthenticated } = useAdminAuth();

  if (!isAuthenticated) {
    return <AdminLogin />;
  }

  return (
    <Switch>
      {/* Dashboard & Analytics */}
      <Route path="/admin" component={AdminDashboard} />
      <Route path="/admin/analytics" component={AdminAnalytics} />

      {/* Content */}
      <Route path="/admin/pages" component={AdminPages} />
      <Route path="/admin/pages/builder" component={AdminPages} />
      <Route path="/admin/homepage/hero" component={AdminHomepage} />
      <Route path="/admin/homepage/stats" component={AdminHomepage} />
      <Route path="/admin/homepage/announcements" component={AdminHomepage} />
      <Route path="/admin/homepage/featured" component={AdminHomepage} />
      <Route path="/admin/news" component={AdminNews} />
      <Route path="/admin/news/new" component={AdminNews} />
      <Route path="/admin/news/categories" component={AdminNews} />
      <Route path="/admin/events" component={AdminEvents} />
      <Route path="/admin/media" component={AdminMedia} />

      {/* Academic */}
      <Route path="/admin/departments" component={AdminDepartmentsPage} />
      <Route path="/admin/departments/new" component={AdminDepartmentsPage} />
      <Route path="/admin/courses" component={AdminCourses} />
      <Route path="/admin/faculty" component={AdminFaculty} />
      <Route path="/admin/faculty/new" component={AdminFaculty} />
      <Route path="/admin/academic/schedules" component={AdminAcademic} />
      <Route path="/admin/academic/calendar" component={AdminAcademic} />
      <Route path="/admin/academic/courses" component={AdminAcademic} />
      <Route path="/admin/research" component={AdminResearch} />
      <Route path="/admin/research/projects" component={AdminResearch} />

      {/* Students */}
      <Route path="/admin/students/admissions" component={AdminStudents} />
      <Route path="/admin/students/scholarships" component={AdminStudents} />
      <Route path="/admin/students/faqs" component={AdminStudents} />
      <Route path="/admin/students/announcements" component={AdminStudents} />
      <Route path="/admin/library/books" component={AdminLibrary} />
      <Route path="/admin/library/digital" component={AdminLibrary} />
      <Route path="/admin/library/databases" component={AdminLibrary} />
      <Route path="/admin/activities" component={AdminActivities} />
      <Route path="/admin/activities/events" component={AdminActivities} />
      <Route path="/admin/activities/sports" component={AdminActivities} />

      {/* System */}
      <Route path="/admin/users" component={AdminUsers} />
      <Route path="/admin/users/roles" component={AdminUsers} />
      <Route path="/admin/users/logs" component={AdminUsers} />
      <Route path="/admin/seo" component={AdminSEO} />
      <Route path="/admin/settings" component={AdminSiteSettings} />
      <Route path="/admin/settings/contact" component={AdminSiteSettings} />
      <Route path="/admin/settings/email" component={AdminSiteSettings} />
      <Route path="/admin/system/health" component={AdminSystem} />
      <Route path="/admin/system/backup" component={AdminSystem} />
      <Route path="/admin/system/logs" component={AdminSystem} />
      <Route path="/admin/system/flags" component={AdminSystem} />

      {/* Fallback */}
      <Route component={AdminDashboard} />
    </Switch>
  );
}

function PublicRouter() {
  return (
    <Switch>
      {/* Main Public Pages */}
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/academic" component={Academic} />
      <Route path="/services" component={Services} />
      <Route path="/news" component={News} />
      <Route path="/news/:id" component={NewsDetail} />
      <Route path="/portal" component={Portal} />
      <Route path="/faculty" component={Faculty} />
      <Route path="/contact" component={Contact} />
      <Route path="/library" component={Library} />
      <Route path="/research" component={Research} />
      <Route path="/community" component={Community} />
      <Route path="/students" component={Students} />
      <Route path="/board" component={Board} />
      <Route path="/partners" component={Partners} />
      <Route path="/quality" component={CentralQuality} />
      <Route path="/admission" component={CentralAdmission} />
      <Route path="/enrollment-conditions" component={EnrollmentConditions} />
      <Route path="/student-affairs" component={StudentAffairs} />
      <Route path="/admission-procedures" component={AdmissionProcedures} />
      <Route path="/student-discipline" component={StudentDiscipline} />
      <Route path="/quality-files" component={QualityFiles} />
      <Route path="/honor-charter" component={HonorCharter} />
      <Route path="/chairman-word" component={ChairmanWord} />
      <Route path="/welcome" component={WelcomeMessage} />
      <Route path="/vision-mission" component={VisionMission} />
      <Route path="/media-gallery" component={MediaGallery} />
      <Route path="/graduation-parties" component={GraduationParties} />
      <Route path="/available-jobs" component={AvailableJobs} />
      <Route path="/sitemap" component={Sitemap} />
      <Route path="/faq" component={FAQ} />
      <Route path="/academic-calendar" component={AcademicCalendar} />

      {/* Committees */}
      <Route path="/committees/student-union" component={StudentUnion} />
      <Route path="/committees/cultural" component={CulturalCommittee} />
      <Route path="/committees/sports" component={SportsCommittee} />
      <Route path="/committees/arts" component={ArtsCommittee} />
      <Route path="/committees/social" component={SocialCommittee} />
      <Route path="/committees/scouts" component={ScoutsCommittee} />

      {/* Library Sub-pages */}
      <Route path="/library/about" component={AboutLibrary} />
      <Route path="/library/knowledge-bank" component={KnowledgeBank} />
      <Route path="/library/digital-borrowing" component={DigitalBorrowing} />

      {/* Management Institute */}
      <Route path="/institute/management" component={ManagementHome} />
      <Route path="/institute/management/about" component={ManagementAbout} />
      <Route path="/institute/management/departments" component={ManagementDepartments} />
      <Route path="/institute/management/admission" component={ManagementAdmission} />
      <Route path="/institute/management/news" component={ManagementNews} />
      <Route path="/institute/management/quality" component={ManagementQuality} />
      <Route path="/institute/management/library" component={ManagementLibrary} />
      <Route path="/institute/management/contact" component={ManagementContact} />
      <Route path="/institute/management/department/:slug" component={ManagementDepartmentDetail} />
      <Route path="/institute/management/student-services" component={ManagementStudentServices} />
      <Route path="/institute/management/faculty" component={ManagementFaculty} />
      <Route path="/institute/management/training" component={ManagementTraining} />
      <Route path="/institute/management/activities" component={ManagementActivities} />

      {/* Engineering Institute */}
      <Route path="/institute/engineering" component={EngineeringHome} />
      <Route path="/institute/engineering/about" component={EngineeringAbout} />
      <Route path="/institute/engineering/departments" component={EngineeringDepartments} />
      <Route path="/institute/engineering/admission" component={EngineeringAdmission} />
      <Route path="/institute/engineering/labs" component={EngineeringLabs} />
      <Route path="/institute/engineering/news" component={EngineeringNews} />
      <Route path="/institute/engineering/quality" component={EngineeringQuality} />
      <Route path="/institute/engineering/library" component={EngineeringLibrary} />
      <Route path="/institute/engineering/contact" component={EngineeringContact} />
      <Route path="/institute/engineering/department/:slug" component={EngineeringDepartmentDetail} />
      <Route path="/institute/engineering/student-services" component={EngineeringStudentServices} />
      <Route path="/institute/engineering/faculty" component={EngineeringFaculty} />
      <Route path="/institute/engineering/research" component={EngineeringResearch} />
      <Route path="/institute/engineering/training" component={EngineeringTraining} />

      <Route component={NotFound} />
    </Switch>
  );
}

function Router() {
  const path = window.location.pathname;
  const isAdmin = path.startsWith("/admin");

  if (isAdmin) {
    return (
      <AdminThemeProvider>
        <AdminRouter />
      </AdminThemeProvider>
    );
  }

  return (
    <LanguageProvider>
      <ScrollToTop />
      <PublicRouter />
      <BackToTop />
    </LanguageProvider>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AdminAuthProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </AdminAuthProvider>
    </QueryClientProvider>
  );
}

export default App;
