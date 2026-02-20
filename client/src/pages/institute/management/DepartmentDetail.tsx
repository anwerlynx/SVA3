import { InstituteNavbar } from "@/components/institute/InstituteNavbar";
import { InstituteFooter } from "@/components/institute/InstituteFooter";
import { managementNavbar, managementFooter } from "@/lib/instituteConfig";
import { InstituteHero } from "@/components/institute/InstituteHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { useRoute } from "wouter";
import { Link } from "wouter";
import {
  Users, BookOpen, GraduationCap, User,
  Monitor, Calculator, TrendingUp, Briefcase, Mail, Award, ClipboardList
} from "lucide-react";

interface FacultyMember {
  nameAr: string;
  nameEn: string;
  titleAr: string;
  titleEn: string;
  specializationAr: string;
  specializationEn: string;
  email: string;
}

interface TrainingProgram {
  nameAr: string;
  nameEn: string;
  descAr: string;
  descEn: string;
}

interface Course {
  nameAr: string;
  nameEn: string;
  codeAr: string;
  codeEn: string;
  descAr: string;
  descEn: string;
}

interface GradProject {
  titleAr: string;
  titleEn: string;
  studentAr: string;
  studentEn: string;
  yearAr: string;
  yearEn: string;
}

interface DepartmentData {
  slug: string;
  nameAr: string;
  nameEn: string;
  icon: typeof Monitor;
  headMessageAr: string;
  headMessageEn: string;
  headNameAr: string;
  headNameEn: string;
  courses: Course[];
  trainingPrograms: TrainingProgram[];
  gradProjects: GradProject[];
  faculty: FacultyMember[];
}

const departmentsData: DepartmentData[] = [
  {
    slug: "mis",
    nameAr: "نظم المعلومات الإدارية",
    nameEn: "Management Information Systems",
    icon: Monitor,
    headMessageAr: "نسعى في قسم نظم المعلومات الإدارية لتخريج كوادر متميزة قادرة على تصميم وتطوير وإدارة نظم المعلومات في المؤسسات المختلفة. نركز على الجمع بين المعرفة الإدارية والتقنية لمواكبة التحول الرقمي في بيئة الأعمال.",
    headMessageEn: "In the Department of Management Information Systems, we strive to graduate distinguished professionals capable of designing, developing, and managing information systems in various organizations. We focus on combining managerial and technical knowledge to keep pace with digital transformation in the business environment.",
    headNameAr: "أ.د. رئيس قسم نظم المعلومات الإدارية",
    headNameEn: "Prof. Head of MIS Department",
    courses: [
      { nameAr: "مقدمة في نظم المعلومات", nameEn: "Introduction to Information Systems", codeAr: "نظم 101", codeEn: "MIS 101", descAr: "أساسيات نظم المعلومات ودورها في المنظمات", descEn: "Fundamentals of information systems and their role in organizations" },
      { nameAr: "قواعد البيانات", nameEn: "Database Management", codeAr: "نظم 201", codeEn: "MIS 201", descAr: "تصميم وإدارة قواعد البيانات العلائقية", descEn: "Design and management of relational databases" },
      { nameAr: "تحليل وتصميم النظم", nameEn: "Systems Analysis & Design", codeAr: "نظم 301", codeEn: "MIS 301", descAr: "منهجيات تحليل وتصميم نظم المعلومات", descEn: "Methodologies for analyzing and designing information systems" },
      { nameAr: "التجارة الإلكترونية", nameEn: "E-Commerce", codeAr: "نظم 302", codeEn: "MIS 302", descAr: "أساسيات التجارة الإلكترونية والأعمال الرقمية", descEn: "Fundamentals of e-commerce and digital business" },
      { nameAr: "أمن المعلومات", nameEn: "Information Security", codeAr: "نظم 401", codeEn: "MIS 401", descAr: "حماية نظم المعلومات والبيانات في المنظمات", descEn: "Protecting information systems and data in organizations" },
      { nameAr: "نظم دعم القرار", nameEn: "Decision Support Systems", codeAr: "نظم 402", codeEn: "MIS 402", descAr: "تصميم وتطوير نظم دعم اتخاذ القرار", descEn: "Design and development of decision support systems" },
    ],
    trainingPrograms: [
      { nameAr: "برنامج تطوير تطبيقات الأعمال", nameEn: "Business Applications Development Program", descAr: "تدريب عملي على تطوير تطبيقات إدارية متكاملة", descEn: "Practical training on developing integrated business applications" },
      { nameAr: "برنامج إدارة قواعد البيانات", nameEn: "Database Administration Program", descAr: "تدريب على إدارة وصيانة قواعد البيانات المؤسسية", descEn: "Training on managing and maintaining enterprise databases" },
      { nameAr: "برنامج الأمن السيبراني للأعمال", nameEn: "Business Cybersecurity Program", descAr: "تدريب على حماية البيانات والأنظمة المؤسسية", descEn: "Training on protecting enterprise data and systems" },
    ],
    gradProjects: [
      { titleAr: "نظام إدارة موارد بشرية إلكتروني", titleEn: "Electronic Human Resources Management System", studentAr: "أحمد سعيد - محمد عادل", studentEn: "Ahmed Said - Mohamed Adel", yearAr: "2025", yearEn: "2025" },
      { titleAr: "تطبيق ذكي لإدارة المخزون", titleEn: "Smart Inventory Management Application", studentAr: "نور حسن - ريم خالد", studentEn: "Nour Hassan - Reem Khaled", yearAr: "2025", yearEn: "2025" },
      { titleAr: "منصة تعليم إلكتروني تفاعلية", titleEn: "Interactive E-Learning Platform", studentAr: "عمر محمد - يوسف أحمد", studentEn: "Omar Mohamed - Yousef Ahmed", yearAr: "2024", yearEn: "2024" },
    ],
    faculty: [
      { nameAr: "أ.د. سمير عبدالعزيز", nameEn: "Prof. Samir Abdulaziz", titleAr: "أستاذ", titleEn: "Professor", specializationAr: "نظم المعلومات الإدارية", specializationEn: "Management Information Systems", email: "samir.abdulaziz@valley.edu" },
      { nameAr: "د. هدى محمد حسن", nameEn: "Dr. Huda Mohamed Hassan", titleAr: "أستاذ مساعد", titleEn: "Assistant Professor", specializationAr: "قواعد البيانات", specializationEn: "Database Management", email: "huda.hassan@valley.edu" },
      { nameAr: "د. كريم عبدالله", nameEn: "Dr. Karim Abdullah", titleAr: "مدرس", titleEn: "Lecturer", specializationAr: "أمن المعلومات", specializationEn: "Information Security", email: "karim.abdullah@valley.edu" },
      { nameAr: "م. سلمى أحمد", nameEn: "Eng. Salma Ahmed", titleAr: "معيد", titleEn: "Teaching Assistant", specializationAr: "تحليل النظم", specializationEn: "Systems Analysis", email: "salma.ahmed@valley.edu" },
    ],
  },
  {
    slug: "accounting",
    nameAr: "المحاسبة",
    nameEn: "Accounting",
    icon: Calculator,
    headMessageAr: "يسعى قسم المحاسبة إلى إعداد محاسبين مهنيين متميزين قادرين على تطبيق المعايير المحاسبية الدولية والمحلية. نركز على تزويد الطلاب بالمعرفة النظرية والمهارات العملية اللازمة للعمل في مجالات المحاسبة والمراجعة والضرائب.",
    headMessageEn: "The Department of Accounting seeks to prepare distinguished professional accountants capable of applying international and local accounting standards. We focus on providing students with the theoretical knowledge and practical skills needed to work in accounting, auditing, and taxation fields.",
    headNameAr: "أ.د. رئيس قسم المحاسبة",
    headNameEn: "Prof. Head of Accounting Department",
    courses: [
      { nameAr: "مبادئ محاسبة", nameEn: "Accounting Principles", codeAr: "محس 101", codeEn: "ACC 101", descAr: "أساسيات المحاسبة المالية والدورة المحاسبية", descEn: "Fundamentals of financial accounting and the accounting cycle" },
      { nameAr: "محاسبة تكاليف", nameEn: "Cost Accounting", codeAr: "محس 201", codeEn: "ACC 201", descAr: "طرق تحديد وتحليل التكاليف", descEn: "Methods of cost determination and analysis" },
      { nameAr: "محاسبة ضريبية", nameEn: "Tax Accounting", codeAr: "محس 301", codeEn: "ACC 301", descAr: "التشريعات الضريبية والمحاسبة الضريبية", descEn: "Tax legislation and tax accounting" },
      { nameAr: "مراجعة حسابات", nameEn: "Auditing", codeAr: "محس 302", codeEn: "ACC 302", descAr: "معايير وإجراءات المراجعة المهنية", descEn: "Professional auditing standards and procedures" },
      { nameAr: "محاسبة إدارية", nameEn: "Managerial Accounting", codeAr: "محس 303", codeEn: "ACC 303", descAr: "استخدام المعلومات المحاسبية في اتخاذ القرارات", descEn: "Using accounting information in decision making" },
      { nameAr: "معايير محاسبية دولية", nameEn: "International Accounting Standards", codeAr: "محس 401", codeEn: "ACC 401", descAr: "دراسة وتطبيق المعايير الدولية للتقارير المالية", descEn: "Study and application of IFRS" },
    ],
    trainingPrograms: [
      { nameAr: "برنامج المحاسبة المهنية", nameEn: "Professional Accounting Program", descAr: "تدريب على البرامج المحاسبية المعتمدة في سوق العمل", descEn: "Training on accounting software recognized in the job market" },
      { nameAr: "برنامج المراجعة الداخلية", nameEn: "Internal Auditing Program", descAr: "تدريب على إجراءات المراجعة الداخلية وفقاً للمعايير الدولية", descEn: "Training on internal auditing procedures per international standards" },
      { nameAr: "برنامج الإعداد لاختبار CPA", nameEn: "CPA Exam Preparation Program", descAr: "تأهيل الطلاب لاجتياز اختبار المحاسب القانوني المعتمد", descEn: "Preparing students to pass the Certified Public Accountant exam" },
    ],
    gradProjects: [
      { titleAr: "تحليل أثر المعايير الدولية على القوائم المالية", titleEn: "Analysis of IFRS Impact on Financial Statements", studentAr: "فاطمة علي - مريم حسين", studentEn: "Fatma Ali - Mariam Hussein", yearAr: "2025", yearEn: "2025" },
      { titleAr: "نظام محاسبي إلكتروني للمنشآت الصغيرة", titleEn: "Electronic Accounting System for Small Enterprises", studentAr: "حسام محمد - طارق أحمد", studentEn: "Hossam Mohamed - Tarek Ahmed", yearAr: "2025", yearEn: "2025" },
      { titleAr: "دراسة تقييم نظام الرقابة الداخلية في البنوك", titleEn: "Evaluation of Internal Control System in Banks", studentAr: "منى خالد - هبة سعيد", studentEn: "Mona Khaled - Heba Said", yearAr: "2024", yearEn: "2024" },
    ],
    faculty: [
      { nameAr: "أ.د. محمود عبدالحميد", nameEn: "Prof. Mahmoud Abdulhameed", titleAr: "أستاذ", titleEn: "Professor", specializationAr: "المحاسبة المالية", specializationEn: "Financial Accounting", email: "mahmoud.abdulhameed@valley.edu" },
      { nameAr: "د. نادية حسن إبراهيم", nameEn: "Dr. Nadia Hassan Ibrahim", titleAr: "أستاذ مساعد", titleEn: "Assistant Professor", specializationAr: "محاسبة التكاليف", specializationEn: "Cost Accounting", email: "nadia.ibrahim@valley.edu" },
      { nameAr: "د. أحمد فؤاد محمد", nameEn: "Dr. Ahmed Fouad Mohamed", titleAr: "مدرس", titleEn: "Lecturer", specializationAr: "المراجعة والرقابة", specializationEn: "Auditing & Control", email: "ahmed.fouad@valley.edu" },
      { nameAr: "م. ياسمين حسام", nameEn: "Eng. Yasmin Hossam", titleAr: "معيد", titleEn: "Teaching Assistant", specializationAr: "المحاسبة الإدارية", specializationEn: "Managerial Accounting", email: "yasmin.hossam@valley.edu" },
    ],
  },
  {
    slug: "finance",
    nameAr: "العلوم المالية والمصرفية",
    nameEn: "Financial & Banking Sciences",
    icon: TrendingUp,
    headMessageAr: "يهدف قسم العلوم المالية والمصرفية إلى إعداد متخصصين في المجالات المالية والمصرفية قادرين على تحليل الأسواق المالية وإدارة المحافظ الاستثمارية والعمل في القطاع المصرفي. نسعى لتوفير بيئة تعليمية تجمع بين النظرية والتطبيق العملي.",
    headMessageEn: "The Department of Financial & Banking Sciences aims to prepare specialists in financial and banking fields capable of analyzing financial markets, managing investment portfolios, and working in the banking sector. We strive to provide an educational environment that combines theory and practical application.",
    headNameAr: "أ.د. رئيس قسم العلوم المالية والمصرفية",
    headNameEn: "Prof. Head of Finance & Banking Department",
    courses: [
      { nameAr: "مبادئ التمويل", nameEn: "Principles of Finance", codeAr: "مال 101", codeEn: "FIN 101", descAr: "أساسيات الإدارة المالية والقيمة الزمنية للنقود", descEn: "Fundamentals of financial management and time value of money" },
      { nameAr: "الأسواق المالية", nameEn: "Financial Markets", codeAr: "مال 201", codeEn: "FIN 201", descAr: "دراسة الأسواق المالية وأدواتها", descEn: "Study of financial markets and their instruments" },
      { nameAr: "إدارة البنوك", nameEn: "Bank Management", codeAr: "مال 301", codeEn: "FIN 301", descAr: "إدارة العمليات المصرفية والخدمات البنكية", descEn: "Managing banking operations and services" },
      { nameAr: "تحليل مالي", nameEn: "Financial Analysis", codeAr: "مال 302", codeEn: "FIN 302", descAr: "تحليل القوائم المالية وتقييم الأداء", descEn: "Financial statement analysis and performance evaluation" },
      { nameAr: "إدارة المخاطر", nameEn: "Risk Management", codeAr: "مال 401", codeEn: "FIN 401", descAr: "تحديد وتقييم وإدارة المخاطر المالية", descEn: "Identifying, assessing, and managing financial risks" },
      { nameAr: "التمويل الدولي", nameEn: "International Finance", codeAr: "مال 402", codeEn: "FIN 402", descAr: "إدارة العمليات المالية الدولية وأسعار الصرف", descEn: "Managing international financial operations and exchange rates" },
    ],
    trainingPrograms: [
      { nameAr: "برنامج التحليل المالي المتقدم", nameEn: "Advanced Financial Analysis Program", descAr: "تدريب على أدوات وتقنيات التحليل المالي الحديثة", descEn: "Training on modern financial analysis tools and techniques" },
      { nameAr: "برنامج إدارة المحافظ الاستثمارية", nameEn: "Investment Portfolio Management Program", descAr: "تدريب على بناء وإدارة المحافظ الاستثمارية", descEn: "Training on building and managing investment portfolios" },
      { nameAr: "برنامج العمليات المصرفية", nameEn: "Banking Operations Program", descAr: "تدريب على العمليات المصرفية اليومية والخدمات البنكية", descEn: "Training on daily banking operations and services" },
    ],
    gradProjects: [
      { titleAr: "تحليل أداء المحافظ الاستثمارية في البورصة المصرية", titleEn: "Performance Analysis of Investment Portfolios in Egyptian Stock Exchange", studentAr: "خالد أحمد - عمرو محمد", studentEn: "Khaled Ahmed - Amr Mohamed", yearAr: "2025", yearEn: "2025" },
      { titleAr: "أثر التكنولوجيا المالية على الخدمات المصرفية", titleEn: "Impact of FinTech on Banking Services", studentAr: "سارة محمود - نور الدين علي", studentEn: "Sara Mahmoud - Nour El-Din Ali", yearAr: "2025", yearEn: "2025" },
      { titleAr: "تقييم مخاطر الائتمان في البنوك التجارية", titleEn: "Credit Risk Assessment in Commercial Banks", studentAr: "ريم حسن - هدى أحمد", studentEn: "Reem Hassan - Huda Ahmed", yearAr: "2024", yearEn: "2024" },
    ],
    faculty: [
      { nameAr: "أ.د. عبدالرحمن سليمان", nameEn: "Prof. Abdulrahman Soliman", titleAr: "أستاذ", titleEn: "Professor", specializationAr: "الإدارة المالية", specializationEn: "Financial Management", email: "abdulrahman.soliman@valley.edu" },
      { nameAr: "د. ليلى محمد عبدالله", nameEn: "Dr. Laila Mohamed Abdullah", titleAr: "أستاذ مساعد", titleEn: "Assistant Professor", specializationAr: "الأسواق المالية", specializationEn: "Financial Markets", email: "laila.abdullah@valley.edu" },
      { nameAr: "د. حسام الدين أحمد", nameEn: "Dr. Hossam El-Din Ahmed", titleAr: "مدرس", titleEn: "Lecturer", specializationAr: "إدارة البنوك", specializationEn: "Bank Management", email: "hossam.ahmed@valley.edu" },
      { nameAr: "م. دينا محمود", nameEn: "Eng. Dina Mahmoud", titleAr: "معيد", titleEn: "Teaching Assistant", specializationAr: "التحليل المالي", specializationEn: "Financial Analysis", email: "dina.mahmoud@valley.edu" },
    ],
  },
  {
    slug: "business-admin",
    nameAr: "إدارة الأعمال",
    nameEn: "Business Administration",
    icon: Briefcase,
    headMessageAr: "يسعى قسم إدارة الأعمال إلى تخريج قادة ومديرين مؤهلين قادرين على إدارة المنظمات بكفاءة وفعالية. نركز على تنمية المهارات القيادية والإدارية والتفكير الاستراتيجي لدى طلابنا لمواكبة تحديات بيئة الأعمال المعاصرة.",
    headMessageEn: "The Department of Business Administration seeks to graduate qualified leaders and managers capable of managing organizations efficiently and effectively. We focus on developing leadership, managerial, and strategic thinking skills in our students to meet the challenges of the contemporary business environment.",
    headNameAr: "أ.د. رئيس قسم إدارة الأعمال",
    headNameEn: "Prof. Head of Business Administration Department",
    courses: [
      { nameAr: "مبادئ إدارة الأعمال", nameEn: "Principles of Business Administration", codeAr: "إدا 101", codeEn: "BUS 101", descAr: "أساسيات الإدارة ووظائفها الرئيسية", descEn: "Fundamentals of management and its main functions" },
      { nameAr: "إدارة الموارد البشرية", nameEn: "Human Resource Management", codeAr: "إدا 201", codeEn: "BUS 201", descAr: "إدارة وتنمية الموارد البشرية في المنظمات", descEn: "Managing and developing human resources in organizations" },
      { nameAr: "إدارة التسويق", nameEn: "Marketing Management", codeAr: "إدا 301", codeEn: "BUS 301", descAr: "استراتيجيات التسويق وسلوك المستهلك", descEn: "Marketing strategies and consumer behavior" },
      { nameAr: "الإدارة الاستراتيجية", nameEn: "Strategic Management", codeAr: "إدا 302", codeEn: "BUS 302", descAr: "التخطيط الاستراتيجي وتحليل بيئة الأعمال", descEn: "Strategic planning and business environment analysis" },
      { nameAr: "إدارة العمليات", nameEn: "Operations Management", codeAr: "إدا 303", codeEn: "BUS 303", descAr: "تخطيط وإدارة العمليات الإنتاجية والخدمية", descEn: "Planning and managing production and service operations" },
      { nameAr: "ريادة الأعمال", nameEn: "Entrepreneurship", codeAr: "إدا 401", codeEn: "BUS 401", descAr: "أساسيات ريادة الأعمال وإنشاء المشروعات", descEn: "Fundamentals of entrepreneurship and project creation" },
    ],
    trainingPrograms: [
      { nameAr: "برنامج المهارات القيادية", nameEn: "Leadership Skills Program", descAr: "تدريب على المهارات القيادية والإدارية الحديثة", descEn: "Training on modern leadership and managerial skills" },
      { nameAr: "برنامج التسويق الرقمي", nameEn: "Digital Marketing Program", descAr: "تدريب على استراتيجيات وأدوات التسويق الرقمي", descEn: "Training on digital marketing strategies and tools" },
      { nameAr: "برنامج إدارة المشروعات", nameEn: "Project Management Program", descAr: "تدريب على منهجيات إدارة المشروعات المعتمدة دولياً", descEn: "Training on internationally recognized project management methodologies" },
    ],
    gradProjects: [
      { titleAr: "دراسة أثر التسويق الرقمي على المنشآت الصغيرة", titleEn: "Impact of Digital Marketing on Small Enterprises", studentAr: "محمد حسين - أحمد طارق", studentEn: "Mohamed Hussein - Ahmed Tarek", yearAr: "2025", yearEn: "2025" },
      { titleAr: "تحليل عوامل نجاح ريادة الأعمال في مصر", titleEn: "Analysis of Entrepreneurship Success Factors in Egypt", studentAr: "نورهان علي - سلمى محمد", studentEn: "Nourhan Ali - Salma Mohamed", yearAr: "2025", yearEn: "2025" },
      { titleAr: "تطوير خطة استراتيجية لمنشأة خدمية", titleEn: "Strategic Plan Development for a Service Enterprise", studentAr: "عمر خالد - يوسف سعيد", studentEn: "Omar Khaled - Yousef Said", yearAr: "2024", yearEn: "2024" },
    ],
    faculty: [
      { nameAr: "أ.د. طارق حسين محمد", nameEn: "Prof. Tarek Hussein Mohamed", titleAr: "أستاذ", titleEn: "Professor", specializationAr: "الإدارة الاستراتيجية", specializationEn: "Strategic Management", email: "tarek.hussein@valley.edu" },
      { nameAr: "د. رنا أحمد سعيد", nameEn: "Dr. Rana Ahmed Said", titleAr: "أستاذ مساعد", titleEn: "Assistant Professor", specializationAr: "إدارة الموارد البشرية", specializationEn: "Human Resource Management", email: "rana.said@valley.edu" },
      { nameAr: "د. محمد عادل حسن", nameEn: "Dr. Mohamed Adel Hassan", titleAr: "مدرس", titleEn: "Lecturer", specializationAr: "إدارة التسويق", specializationEn: "Marketing Management", email: "mohamed.adel@valley.edu" },
      { nameAr: "م. هاجر محمود", nameEn: "Eng. Hagar Mahmoud", titleAr: "معيد", titleEn: "Teaching Assistant", specializationAr: "ريادة الأعمال", specializationEn: "Entrepreneurship", email: "hagar.mahmoud@valley.edu" },
    ],
  },
];

export default function DepartmentDetail() {
  const [, params] = useRoute("/institute/management/department/:slug");
  const { language } = useLanguage();
  const slug = params?.slug;
  const dept = departmentsData.find((d) => d.slug === slug);

  if (!dept) {
    return (
      <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
        <PageHead title="القسم غير موجود - المعهد العالي للإدارة" />
        <InstituteNavbar {...managementNavbar} />
        <InstituteHero title={language === "ar" ? "القسم غير موجود" : "Department Not Found"} subtitle={language === "ar" ? "لم يتم العثور على القسم المطلوب" : "The requested department was not found"} image="/figmaAssets/rectangle-2.png" overlayColor="from-green-900/60 to-green-900/80" />
        <section className="py-20 bg-white dark:bg-neutral-950 transition-colors duration-300">
          <div className="max-w-[800px] mx-auto px-4 md:px-8 text-center" dir={direction}>
            <p className="text-neutral-500 dark:text-neutral-400 text-lg [font-family:'Almarai',Helvetica] mb-8">{language === "ar" ? "يمكنك العودة لصفحة الأقسام لاستعراض الأقسام المتاحة" : "You can go back to the departments page to browse available departments"}</p>
            <Link href="/institute/management/departments">
              <span className="px-8 py-3 rounded-full bg-green-700 hover:bg-green-800 text-white [font-family:'Almarai',Helvetica] transition-all inline-block cursor-pointer">{language === "ar" ? "العودة للأقسام" : "Back to Departments"}</span>
            </Link>
          </div>
        </section>
        <InstituteFooter {...managementFooter} />
      </div>
    );
  }

  const DeptIcon = dept.icon;
  const deptName = language === "ar" ? dept.nameAr : dept.nameEn;

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={`${deptName} - ${language === "ar" ? "المعهد العالي للإدارة" : "Higher Institute of Management"}`} description={deptName} />
      <InstituteNavbar {...managementNavbar} />
      <InstituteHero title={deptName} subtitle={language === "ar" ? "المعهد العالي للإدارة والمالية ونظم المعلومات" : "Higher Institute of Management, Finance & Information Systems"} image="/figmaAssets/rectangle-2.png" overlayColor="from-green-900/60 to-green-900/80" />

      <section className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-green-700 rounded-full" />
                <span className="text-green-700 font-bold text-sm [font-family:'Almarai',Helvetica]">{language === "ar" ? "كلمة رئيس القسم" : "Department Head Message"}</span>
                <div className="w-12 h-1 bg-green-700 rounded-full" />
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Card className="rounded-3xl border-0 shadow-lg bg-white dark:bg-neutral-900 dark:border-neutral-800 transition-colors duration-300">
              <CardContent className="p-8 md:p-12" dir={direction}>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-24 h-24 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center flex-shrink-0 mx-auto md:mx-0 transition-colors duration-300">
                    <User className="w-12 h-12 text-green-700 dark:text-green-400 transition-colors duration-300" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">
                      "{language === "ar" ? dept.headMessageAr : dept.headMessageEn}"
                    </p>
                    <div>
                      <h4 className="font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? dept.headNameAr : dept.headNameEn}</h4>
                      <span className="text-green-700 dark:text-green-400 text-sm [font-family:'Almarai',Helvetica] transition-colors duration-300">{deptName}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-green-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[1100px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <BookOpen className="w-10 h-10 text-green-700 dark:text-green-500 mx-auto mb-4 transition-colors duration-300" />
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "توصيف المقررات" : "Course Descriptions"}</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" dir={direction}>
            {dept.courses.map((course, index) => (
              <AnimatedSection key={index} delay={index * 0.08} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full bg-white dark:bg-neutral-800 dark:border-neutral-700">
                  <CardContent className="p-6 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? course.nameAr : course.nameEn}</h3>
                      <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-xs [font-family:'Almarai',Helvetica] transition-colors duration-300 flex-shrink-0">{language === "ar" ? course.codeAr : course.codeEn}</span>
                    </div>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? course.descAr : course.descEn}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1100px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <ClipboardList className="w-10 h-10 text-green-700 dark:text-green-500 mx-auto mb-4 transition-colors duration-300" />
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "البرامج التدريبية" : "Training Programs"}</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" dir={direction}>
            {dept.trainingPrograms.map((program, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full bg-white dark:bg-neutral-900 dark:border-neutral-800">
                  <CardContent className="p-6 flex flex-col gap-3 items-center text-center">
                    <div className="w-14 h-14 rounded-2xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center transition-colors duration-300">
                      <ClipboardList className="w-7 h-7 text-green-700 dark:text-green-500 transition-colors duration-300" />
                    </div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? program.nameAr : program.nameEn}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? program.descAr : program.descEn}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[1100px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <GraduationCap className="w-10 h-10 text-green-700 dark:text-green-500 mx-auto mb-4 transition-colors duration-300" />
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "مشاريع التخرج" : "Graduation Projects"}</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" dir={direction}>
            {dept.gradProjects.map((project, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full bg-white dark:bg-neutral-800 dark:border-neutral-700">
                  <CardContent className="p-6 flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-green-700 dark:text-green-500 flex-shrink-0 transition-colors duration-300" />
                      <h3 className="font-bold text-base text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? project.titleAr : project.titleEn}</h3>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 text-sm [font-family:'Almarai',Helvetica] transition-colors duration-300">
                      <Users className="w-4 h-4 flex-shrink-0" />
                      <span>{language === "ar" ? project.studentAr : project.studentEn}</span>
                    </div>
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-xs [font-family:'Almarai',Helvetica] w-fit transition-colors duration-300">{language === "ar" ? project.yearAr : project.yearEn}</span>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1100px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <Users className="w-10 h-10 text-green-700 dark:text-green-500 mx-auto mb-4 transition-colors duration-300" />
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "أعضاء هيئة التدريس" : "Faculty Members"}</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" dir={direction}>
            {dept.faculty.map((member, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full bg-white dark:bg-neutral-900 dark:border-neutral-800">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                    <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center transition-colors duration-300">
                      <User className="w-10 h-10 text-green-700 dark:text-green-400 transition-colors duration-300" />
                    </div>
                    <h3 className="font-bold text-base text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? member.nameAr : member.nameEn}</h3>
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-xs [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? member.titleAr : member.titleEn}</span>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? member.specializationAr : member.specializationEn}</p>
                    <div className="flex items-center gap-1 text-neutral-400 dark:text-neutral-500 text-xs">
                      <Mail className="w-3 h-3" />
                      <span className="[font-family:'Almarai',Helvetica]">{member.email}</span>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <InstituteFooter {...managementFooter} />
    </div>
  );
}