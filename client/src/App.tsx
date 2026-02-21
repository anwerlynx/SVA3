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
import { lazy, Suspense } from "react";
import { Loader2 } from "lucide-react";

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-950">
    <Loader2 className="w-10 h-10 text-green-700 animate-spin" />
  </div>
);

import Home from "@/pages/Home";

const About = lazy(() => import("@/pages/About"));
const Academic = lazy(() => import("@/pages/Academic"));
const Services = lazy(() => import("@/pages/Services"));
const News = lazy(() => import("@/pages/News"));
const NewsDetail = lazy(() => import("@/pages/NewsDetail"));
const Portal = lazy(() => import("@/pages/Portal"));
const Faculty = lazy(() => import("@/pages/Faculty"));
const Contact = lazy(() => import("@/pages/Contact"));
const Library = lazy(() => import("@/pages/Library"));
const Research = lazy(() => import("@/pages/Research"));
const Community = lazy(() => import("@/pages/Community"));
const Students = lazy(() => import("@/pages/Students"));
const Board = lazy(() => import("@/pages/Board"));
const Partners = lazy(() => import("@/pages/Partners"));
const CentralQuality = lazy(() => import("@/pages/CentralQuality"));
const CentralAdmission = lazy(() => import("@/pages/CentralAdmission"));
const EnrollmentConditions = lazy(() => import("@/pages/EnrollmentConditions"));
const StudentAffairs = lazy(() => import("@/pages/StudentAffairs"));
const AdmissionProcedures = lazy(() => import("@/pages/AdmissionProcedures"));
const StudentDiscipline = lazy(() => import("@/pages/StudentDiscipline"));
const QualityFiles = lazy(() => import("@/pages/QualityFiles"));
const HonorCharter = lazy(() => import("@/pages/HonorCharter"));
const ChairmanWord = lazy(() => import("@/pages/ChairmanWord"));
const WelcomeMessage = lazy(() => import("@/pages/WelcomeMessage"));
const VisionMission = lazy(() => import("@/pages/VisionMission"));
const MediaGallery = lazy(() => import("@/pages/MediaGallery"));
const GraduationParties = lazy(() => import("@/pages/GraduationParties"));
const AvailableJobs = lazy(() => import("@/pages/AvailableJobs"));
const Sitemap = lazy(() => import("@/pages/Sitemap"));
const FAQ = lazy(() => import("@/pages/FAQ"));
const AcademicCalendar = lazy(() => import("@/pages/AcademicCalendar"));

const StudentUnion = lazy(() => import("@/pages/committees/StudentUnion"));
const CulturalCommittee = lazy(() => import("@/pages/committees/CulturalCommittee"));
const SportsCommittee = lazy(() => import("@/pages/committees/SportsCommittee"));
const ArtsCommittee = lazy(() => import("@/pages/committees/ArtsCommittee"));
const SocialCommittee = lazy(() => import("@/pages/committees/SocialCommittee"));
const ScoutsCommittee = lazy(() => import("@/pages/committees/ScoutsCommittee"));

const AboutLibrary = lazy(() => import("@/pages/library/AboutLibrary"));
const KnowledgeBank = lazy(() => import("@/pages/library/KnowledgeBank"));
const DigitalBorrowing = lazy(() => import("@/pages/library/DigitalBorrowing"));

const ManagementHome = lazy(() => import("@/pages/institute/management/Home"));
const ManagementAbout = lazy(() => import("@/pages/institute/management/About"));
const ManagementDepartments = lazy(() => import("@/pages/institute/management/Departments"));
const ManagementAdmission = lazy(() => import("@/pages/institute/management/Admission"));
const ManagementNews = lazy(() => import("@/pages/institute/management/News"));
const ManagementQuality = lazy(() => import("@/pages/institute/management/Quality"));
const ManagementLibrary = lazy(() => import("@/pages/institute/management/Library"));
const ManagementContact = lazy(() => import("@/pages/institute/management/Contact"));
const ManagementDepartmentDetail = lazy(() => import("@/pages/institute/management/DepartmentDetail"));
const ManagementStudentServices = lazy(() => import("@/pages/institute/management/StudentServices"));
const ManagementFaculty = lazy(() => import("@/pages/institute/management/Faculty"));
const ManagementTraining = lazy(() => import("@/pages/institute/management/Training"));
const ManagementActivities = lazy(() => import("@/pages/institute/management/Activities"));

const EngineeringHome = lazy(() => import("@/pages/institute/engineering/Home"));
const EngineeringAbout = lazy(() => import("@/pages/institute/engineering/About"));
const EngineeringDepartments = lazy(() => import("@/pages/institute/engineering/Departments"));
const EngineeringAdmission = lazy(() => import("@/pages/institute/engineering/Admission"));
const EngineeringLabs = lazy(() => import("@/pages/institute/engineering/Labs"));
const EngineeringNews = lazy(() => import("@/pages/institute/engineering/News"));
const EngineeringQuality = lazy(() => import("@/pages/institute/engineering/Quality"));
const EngineeringLibrary = lazy(() => import("@/pages/institute/engineering/Library"));
const EngineeringContact = lazy(() => import("@/pages/institute/engineering/Contact"));
const EngineeringDepartmentDetail = lazy(() => import("@/pages/institute/engineering/DepartmentDetail"));
const EngineeringStudentServices = lazy(() => import("@/pages/institute/engineering/StudentServices"));
const EngineeringFaculty = lazy(() => import("@/pages/institute/engineering/Faculty"));
const EngineeringResearch = lazy(() => import("@/pages/institute/engineering/Research"));
const EngineeringTraining = lazy(() => import("@/pages/institute/engineering/Training"));

const AdminLogin = lazy(() => import("@/pages/admin/AdminLogin"));
const AdminDashboard = lazy(() => import("@/pages/admin/Dashboard"));
const AdminFaculty = lazy(() => import("@/pages/admin/FacultyManager"));
const AdminNews = lazy(() => import("@/pages/admin/NewsManager"));
const AdminMedia = lazy(() => import("@/pages/admin/MediaManager"));
const AdminAnalytics = lazy(() => import("@/pages/admin/Analytics"));
const AdminUsers = lazy(() => import("@/pages/admin/UsersManager"));
const AdminSEO = lazy(() => import("@/pages/admin/SEOSettings"));
const AdminDepartmentsPage = lazy(() => import("@/pages/admin/DepartmentsManager"));
const AdminSiteSettings = lazy(() => import("@/pages/admin/SiteSettings"));
const AdminPages = lazy(() => import("@/pages/admin/PagesManager"));
const AdminHomepage = lazy(() => import("@/pages/admin/HomepageManager"));
const AdminAcademic = lazy(() => import("@/pages/admin/AcademicManager"));
const AdminStudents = lazy(() => import("@/pages/admin/StudentAffairsManager"));
const AdminLibraryManager = lazy(() => import("@/pages/admin/LibraryManager"));
const AdminActivities = lazy(() => import("@/pages/admin/ActivitiesManager"));
const AdminResearch = lazy(() => import("@/pages/admin/ResearchManager"));
const AdminFAQs = lazy(() => import("@/pages/admin/FAQsManager"));
const AdminEventsManager = lazy(() => import("@/pages/admin/EventsManager"));
const AdminAnnouncements = lazy(() => import("@/pages/admin/AnnouncementsManager"));
const AdminCourses = lazy(() => import("@/pages/admin/CoursesManager"));
const AdminSystem = lazy(() => import("@/pages/admin/SystemHealthManager"));
const AdminContactMessages = lazy(() => import("@/pages/admin/ContactMessagesManager"));
const AdminNewsletter = lazy(() => import("@/pages/admin/NewsletterManager"));

function AdminRouter() {
  const { isAuthenticated } = useAdminAuth();

  if (!isAuthenticated) {
    return (
      <Suspense fallback={<PageLoader />}>
        <AdminLogin />
      </Suspense>
    );
  }

  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/admin/analytics" component={AdminAnalytics} />
        <Route path="/admin/news" component={AdminNews} />
        <Route path="/admin/news/new" component={AdminNews} />
        <Route path="/admin/news/categories" component={AdminNews} />
        <Route path="/admin/media" component={AdminMedia} />
        <Route path="/admin/departments" component={AdminDepartmentsPage} />
        <Route path="/admin/departments/new" component={AdminDepartmentsPage} />
        <Route path="/admin/faculty" component={AdminFaculty} />
        <Route path="/admin/faculty/new" component={AdminFaculty} />
        <Route path="/admin/users" component={AdminUsers} />
        <Route path="/admin/users/roles" component={AdminUsers} />
        <Route path="/admin/users/logs" component={AdminUsers} />
        <Route path="/admin/seo" component={AdminSEO} />
        <Route path="/admin/settings" component={AdminSiteSettings} />
        <Route path="/admin/settings/contact" component={AdminSiteSettings} />
        <Route path="/admin/settings/email" component={AdminSiteSettings} />
        <Route path="/admin/pages" component={AdminPages} />
        <Route path="/admin/pages/builder" component={AdminPages} />
        <Route path="/admin/homepage/hero" component={AdminHomepage} />
        <Route path="/admin/homepage/stats" component={AdminHomepage} />
        <Route path="/admin/homepage/announcements" component={AdminHomepage} />
        <Route path="/admin/homepage/featured" component={AdminHomepage} />
        <Route path="/admin/events" component={AdminEventsManager} />
        <Route path="/admin/courses" component={AdminCourses} />
        <Route path="/admin/academic/schedules" component={AdminAcademic} />
        <Route path="/admin/academic/calendar" component={AdminAcademic} />
        <Route path="/admin/academic/courses" component={AdminAcademic} />
        <Route path="/admin/research" component={AdminResearch} />
        <Route path="/admin/research/projects" component={AdminResearch} />
        <Route path="/admin/students/admissions" component={AdminStudents} />
        <Route path="/admin/students/scholarships" component={AdminStudents} />
        <Route path="/admin/students/faqs" component={AdminFAQs} />
        <Route path="/admin/students/announcements" component={AdminStudents} />
        <Route path="/admin/announcements" component={AdminAnnouncements} />
        <Route path="/admin/library/books" component={AdminLibraryManager} />
        <Route path="/admin/library/digital" component={AdminLibraryManager} />
        <Route path="/admin/library/databases" component={AdminLibraryManager} />
        <Route path="/admin/activities" component={AdminActivities} />
        <Route path="/admin/activities/events" component={AdminActivities} />
        <Route path="/admin/activities/sports" component={AdminActivities} />
        <Route path="/admin/system/health" component={AdminSystem} />
        <Route path="/admin/system/backup" component={AdminSystem} />
        <Route path="/admin/system/logs" component={AdminSystem} />
        <Route path="/admin/system/flags" component={AdminSystem} />
        <Route path="/admin/contacts" component={AdminContactMessages} />
        <Route path="/admin/newsletter" component={AdminNewsletter} />
        <Route component={AdminDashboard} />
      </Switch>
    </Suspense>
  );
}

function PublicRouter() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/academic" component={Academic} />
        <Route path="/services" component={Services} />
        <Route path="/news" component={News} />
        <Route path="/news/:slug" component={NewsDetail} />
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

        <Route path="/committees/student-union" component={StudentUnion} />
        <Route path="/committees/cultural" component={CulturalCommittee} />
        <Route path="/committees/sports" component={SportsCommittee} />
        <Route path="/committees/arts" component={ArtsCommittee} />
        <Route path="/committees/social" component={SocialCommittee} />
        <Route path="/committees/scouts" component={ScoutsCommittee} />

        <Route path="/library/about" component={AboutLibrary} />
        <Route path="/library/knowledge-bank" component={KnowledgeBank} />
        <Route path="/library/digital-borrowing" component={DigitalBorrowing} />

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
    </Suspense>
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
