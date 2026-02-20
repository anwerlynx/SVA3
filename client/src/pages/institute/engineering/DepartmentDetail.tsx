import { InstituteNavbar } from "@/components/institute/InstituteNavbar";
import { InstituteFooter } from "@/components/institute/InstituteFooter";
import { engineeringNavbar, engineeringFooter } from "@/lib/instituteConfig";
import { InstituteHero } from "@/components/institute/InstituteHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { PageHead } from "@/components/PageHead";
import { useLanguage } from "@/context/LanguageContext";
import { useRoute } from "wouter";
import { Link } from "wouter";
import {
  Users, BookOpen, FlaskConical, GraduationCap, User,
  Zap, Building2, Cpu, Settings, Mail, Phone, Award
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

interface Lab {
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
  icon: typeof Zap;
  headMessageAr: string;
  headMessageEn: string;
  headNameAr: string;
  headNameEn: string;
  courses: Course[];
  labs: Lab[];
  gradProjects: GradProject[];
  faculty: FacultyMember[];
}

const departmentsData: DepartmentData[] = [
  {
    slug: "power-telecom",
    nameAr: "هندسة القوى والاتصالات الكهربائية",
    nameEn: "Electrical Power & Telecommunications Engineering",
    icon: Zap,
    headMessageAr: "نسعى في قسم هندسة القوى والاتصالات الكهربائية لتقديم تعليم هندسي متميز يواكب التطورات التكنولوجية الحديثة في مجالات الطاقة الكهربائية والاتصالات. نعمل على إعداد مهندسين قادرين على تصميم وتشغيل وصيانة أنظمة القوى الكهربائية وشبكات الاتصالات الحديثة.",
    headMessageEn: "In the Department of Electrical Power & Telecommunications Engineering, we strive to provide distinguished engineering education that keeps pace with modern technological developments in electrical energy and telecommunications. We work to prepare engineers capable of designing, operating, and maintaining electrical power systems and modern communication networks.",
    headNameAr: "أ.د. رئيس قسم القوى والاتصالات",
    headNameEn: "Prof. Head of Power & Telecom Department",
    courses: [
      { nameAr: "دوائر كهربائية", nameEn: "Electrical Circuits", codeAr: "قوى 101", codeEn: "PWR 101", descAr: "دراسة أساسيات الدوائر الكهربائية وتحليلها", descEn: "Study of electrical circuit fundamentals and analysis" },
      { nameAr: "آلات كهربائية", nameEn: "Electrical Machines", codeAr: "قوى 201", codeEn: "PWR 201", descAr: "دراسة المحركات والمولدات الكهربائية", descEn: "Study of electrical motors and generators" },
      { nameAr: "إلكترونيات القوى", nameEn: "Power Electronics", codeAr: "قوى 301", codeEn: "PWR 301", descAr: "تطبيقات الإلكترونيات في أنظمة القوى", descEn: "Electronics applications in power systems" },
      { nameAr: "أنظمة اتصالات", nameEn: "Communication Systems", codeAr: "اتص 201", codeEn: "COM 201", descAr: "مبادئ أنظمة الاتصالات الحديثة", descEn: "Principles of modern communication systems" },
      { nameAr: "هندسة التحكم", nameEn: "Control Engineering", codeAr: "قوى 302", codeEn: "PWR 302", descAr: "أساسيات التحكم الآلي والأنظمة", descEn: "Fundamentals of automatic control systems" },
      { nameAr: "شبكات نقل القدرة", nameEn: "Power Transmission Networks", codeAr: "قوى 401", codeEn: "PWR 401", descAr: "تصميم وتحليل شبكات نقل الطاقة الكهربائية", descEn: "Design and analysis of electrical power transmission networks" },
    ],
    labs: [
      { nameAr: "معمل الدوائر الكهربائية", nameEn: "Electrical Circuits Lab", descAr: "مجهز بأحدث أجهزة القياس والتحليل الكهربائي", descEn: "Equipped with the latest measurement and electrical analysis devices" },
      { nameAr: "معمل الآلات الكهربائية", nameEn: "Electrical Machines Lab", descAr: "يحتوي على مولدات ومحركات كهربائية متنوعة", descEn: "Contains various electrical generators and motors" },
      { nameAr: "معمل الاتصالات", nameEn: "Communications Lab", descAr: "مجهز بأجهزة الإرسال والاستقبال وتحليل الإشارات", descEn: "Equipped with transmitters, receivers, and signal analysis devices" },
    ],
    gradProjects: [
      { titleAr: "نظام مراقبة ذكي لشبكات التوزيع الكهربائي", titleEn: "Smart Monitoring System for Electrical Distribution Networks", studentAr: "أحمد محمد - خالد علي", studentEn: "Ahmed Mohamed - Khaled Ali", yearAr: "2025", yearEn: "2025" },
      { titleAr: "تصميم نظام طاقة شمسية متكامل", titleEn: "Integrated Solar Energy System Design", studentAr: "محمود حسن - عمر سعيد", studentEn: "Mahmoud Hassan - Omar Said", yearAr: "2025", yearEn: "2025" },
      { titleAr: "تطوير نظام اتصالات لاسلكي للمناطق النائية", titleEn: "Wireless Communication System for Remote Areas", studentAr: "يوسف أحمد - إبراهيم خالد", studentEn: "Yousef Ahmed - Ibrahim Khaled", yearAr: "2024", yearEn: "2024" },
    ],
    faculty: [
      { nameAr: "أ.د. أحمد محمد إبراهيم", nameEn: "Prof. Ahmed Mohamed Ibrahim", titleAr: "أستاذ", titleEn: "Professor", specializationAr: "أنظمة القوى الكهربائية", specializationEn: "Electrical Power Systems", email: "ahmed.ibrahim@valley.edu" },
      { nameAr: "د. محمد علي حسن", nameEn: "Dr. Mohamed Ali Hassan", titleAr: "أستاذ مساعد", titleEn: "Assistant Professor", specializationAr: "هندسة الاتصالات", specializationEn: "Telecommunications Engineering", email: "mohamed.hassan@valley.edu" },
      { nameAr: "د. خالد عبدالرحمن", nameEn: "Dr. Khaled Abdulrahman", titleAr: "مدرس", titleEn: "Lecturer", specializationAr: "إلكترونيات القوى", specializationEn: "Power Electronics", email: "khaled.abdulrahman@valley.edu" },
      { nameAr: "م. سارة أحمد", nameEn: "Eng. Sara Ahmed", titleAr: "معيد", titleEn: "Teaching Assistant", specializationAr: "الدوائر الكهربائية", specializationEn: "Electrical Circuits", email: "sara.ahmed@valley.edu" },
    ],
  },
  {
    slug: "civil",
    nameAr: "الهندسة المدنية والبيئية",
    nameEn: "Civil & Environmental Engineering",
    icon: Building2,
    headMessageAr: "يسعى قسم الهندسة المدنية والبيئية إلى إعداد مهندسين مدنيين متميزين قادرين على تصميم وتنفيذ المنشآت المدنية بمختلف أنواعها. نركز على الجمع بين المعرفة النظرية والتطبيق العملي مع مراعاة البُعد البيئي في كافة المشاريع الهندسية.",
    headMessageEn: "The Department of Civil & Environmental Engineering seeks to prepare distinguished civil engineers capable of designing and implementing various civil structures. We focus on combining theoretical knowledge with practical application while considering the environmental dimension in all engineering projects.",
    headNameAr: "أ.د. رئيس قسم الهندسة المدنية",
    headNameEn: "Prof. Head of Civil Engineering Department",
    courses: [
      { nameAr: "خرسانة مسلحة", nameEn: "Reinforced Concrete", codeAr: "مدن 201", codeEn: "CIV 201", descAr: "تصميم العناصر الخرسانية المسلحة", descEn: "Design of reinforced concrete elements" },
      { nameAr: "ميكانيكا التربة", nameEn: "Soil Mechanics", codeAr: "مدن 202", codeEn: "CIV 202", descAr: "دراسة خواص التربة وسلوكها", descEn: "Study of soil properties and behavior" },
      { nameAr: "هندسة الطرق", nameEn: "Highway Engineering", codeAr: "مدن 301", codeEn: "CIV 301", descAr: "تصميم وإنشاء الطرق والمواصلات", descEn: "Design and construction of highways" },
      { nameAr: "هندسة المياه", nameEn: "Water Engineering", codeAr: "مدن 302", codeEn: "CIV 302", descAr: "دراسة الموارد المائية والهيدروليكا", descEn: "Study of water resources and hydraulics" },
      { nameAr: "تحليل إنشائي", nameEn: "Structural Analysis", codeAr: "مدن 303", codeEn: "CIV 303", descAr: "تحليل القوى والإجهادات في المنشآت", descEn: "Analysis of forces and stresses in structures" },
      { nameAr: "إدارة مشروعات", nameEn: "Project Management", codeAr: "مدن 401", codeEn: "CIV 401", descAr: "إدارة وتخطيط المشروعات الهندسية", descEn: "Management and planning of engineering projects" },
    ],
    labs: [
      { nameAr: "معمل الخرسانة والمواد", nameEn: "Concrete & Materials Lab", descAr: "اختبار خواص المواد الهندسية والخرسانة وفقاً للمواصفات", descEn: "Testing properties of engineering materials and concrete according to specifications" },
      { nameAr: "معمل ميكانيكا التربة", nameEn: "Soil Mechanics Lab", descAr: "إجراء اختبارات التربة المختلفة وتحديد خواصها", descEn: "Conducting various soil tests and determining their properties" },
      { nameAr: "معمل الهيدروليكا", nameEn: "Hydraulics Lab", descAr: "دراسة حركة السوائل والتدفق في القنوات", descEn: "Study of fluid movement and flow in channels" },
    ],
    gradProjects: [
      { titleAr: "تصميم جسر خرساني مسلح بطول 50 متر", titleEn: "Design of a 50m Reinforced Concrete Bridge", studentAr: "عمرو حسين - طارق محمد", studentEn: "Amr Hussein - Tarek Mohamed", yearAr: "2025", yearEn: "2025" },
      { titleAr: "دراسة تأثير التربة على أساسات المباني العالية", titleEn: "Study of Soil Impact on High-Rise Building Foundations", studentAr: "مصطفى كمال - حسام أحمد", studentEn: "Mustafa Kamal - Hossam Ahmed", yearAr: "2025", yearEn: "2025" },
      { titleAr: "تصميم شبكة صرف مياه الأمطار لمنطقة سكنية", titleEn: "Stormwater Drainage Network Design for Residential Area", studentAr: "علي سعيد - محمد فؤاد", studentEn: "Ali Said - Mohamed Fouad", yearAr: "2024", yearEn: "2024" },
    ],
    faculty: [
      { nameAr: "أ.د. حسين محمود عبدالله", nameEn: "Prof. Hussein Mahmoud Abdullah", titleAr: "أستاذ", titleEn: "Professor", specializationAr: "الهندسة الإنشائية", specializationEn: "Structural Engineering", email: "hussein.abdullah@valley.edu" },
      { nameAr: "د. عمرو سعيد محمد", nameEn: "Dr. Amr Said Mohamed", titleAr: "أستاذ مساعد", titleEn: "Assistant Professor", specializationAr: "ميكانيكا التربة والأساسات", specializationEn: "Soil Mechanics & Foundations", email: "amr.mohamed@valley.edu" },
      { nameAr: "د. فاطمة حسن علي", nameEn: "Dr. Fatma Hassan Ali", titleAr: "مدرس", titleEn: "Lecturer", specializationAr: "هندسة المياه والبيئة", specializationEn: "Water & Environmental Engineering", email: "fatma.ali@valley.edu" },
      { nameAr: "م. كريم أحمد", nameEn: "Eng. Karim Ahmed", titleAr: "معيد", titleEn: "Teaching Assistant", specializationAr: "هندسة الطرق", specializationEn: "Highway Engineering", email: "karim.ahmed@valley.edu" },
    ],
  },
  {
    slug: "architecture",
    nameAr: "الهندسة المعمارية والتصميم",
    nameEn: "Architecture & Design Engineering",
    icon: Cpu,
    headMessageAr: "يهتم قسم الهندسة المعمارية والتصميم بإعداد مهندسين معماريين مبدعين قادرين على تصميم فراغات معمارية تلبي احتياجات المجتمع. نسعى لدمج الإبداع الفني مع المتطلبات التقنية والبيئية لإنتاج عمارة معاصرة ومستدامة تحترم الهوية المعمارية.",
    headMessageEn: "The Department of Architecture & Design Engineering focuses on preparing creative architectural engineers capable of designing architectural spaces that meet community needs. We seek to integrate artistic creativity with technical and environmental requirements to produce contemporary and sustainable architecture that respects architectural identity.",
    headNameAr: "أ.د. رئيس قسم الهندسة المعمارية",
    headNameEn: "Prof. Head of Architecture Department",
    courses: [
      { nameAr: "تصميم معماري", nameEn: "Architectural Design", codeAr: "عمر 201", codeEn: "ARC 201", descAr: "أسس ومبادئ التصميم المعماري", descEn: "Fundamentals and principles of architectural design" },
      { nameAr: "تاريخ العمارة", nameEn: "History of Architecture", codeAr: "عمر 101", codeEn: "ARC 101", descAr: "دراسة تطور العمارة عبر العصور", descEn: "Study of architecture evolution through ages" },
      { nameAr: "تخطيط عمراني", nameEn: "Urban Planning", codeAr: "عمر 301", codeEn: "ARC 301", descAr: "مبادئ التخطيط العمراني والتنمية المستدامة", descEn: "Principles of urban planning and sustainable development" },
      { nameAr: "إنشاءات معمارية", nameEn: "Architectural Construction", codeAr: "عمر 202", codeEn: "ARC 202", descAr: "دراسة النظم الإنشائية للمباني", descEn: "Study of structural systems for buildings" },
      { nameAr: "تصميم داخلي", nameEn: "Interior Design", codeAr: "عمر 302", codeEn: "ARC 302", descAr: "تصميم الفراغات الداخلية والأثاث", descEn: "Design of interior spaces and furniture" },
      { nameAr: "رسم معماري بالحاسب", nameEn: "CAD Architectural Drawing", codeAr: "عمر 203", codeEn: "ARC 203", descAr: "استخدام برامج الحاسب في الرسم المعماري", descEn: "Using computer software in architectural drawing" },
    ],
    labs: [
      { nameAr: "معمل التصميم المعماري", nameEn: "Architectural Design Lab", descAr: "مجهز بأحدث برامج التصميم المعماري ثلاثي الأبعاد", descEn: "Equipped with the latest 3D architectural design software" },
      { nameAr: "معمل النماذج والماكيتات", nameEn: "Models & Mockups Lab", descAr: "لتنفيذ النماذج المعمارية والماكيتات", descEn: "For creating architectural models and mockups" },
      { nameAr: "ستوديو الرسم", nameEn: "Drawing Studio", descAr: "مجهز بطاولات رسم ومعدات الرسم اليدوي والرقمي", descEn: "Equipped with drawing tables and manual/digital drawing equipment" },
    ],
    gradProjects: [
      { titleAr: "تصميم مركز ثقافي متعدد الأغراض", titleEn: "Multi-Purpose Cultural Center Design", studentAr: "نور الهدى - مريم حسن", studentEn: "Nour El-Huda - Mariam Hassan", yearAr: "2025", yearEn: "2025" },
      { titleAr: "إعادة تأهيل منطقة تراثية في وسط المدينة", titleEn: "Rehabilitation of Heritage Area in City Center", studentAr: "هدى محمد - ريم أحمد", studentEn: "Huda Mohamed - Reem Ahmed", yearAr: "2025", yearEn: "2025" },
      { titleAr: "تصميم مجمع سكني مستدام بالطاقة الشمسية", titleEn: "Solar-Powered Sustainable Residential Complex Design", studentAr: "ياسمين علي - سلمى حسين", studentEn: "Yasmin Ali - Salma Hussein", yearAr: "2024", yearEn: "2024" },
    ],
    faculty: [
      { nameAr: "أ.د. سامي عبدالعزيز", nameEn: "Prof. Sami Abdulaziz", titleAr: "أستاذ", titleEn: "Professor", specializationAr: "التصميم المعماري", specializationEn: "Architectural Design", email: "sami.abdulaziz@valley.edu" },
      { nameAr: "د. منى خالد محمد", nameEn: "Dr. Mona Khaled Mohamed", titleAr: "أستاذ مساعد", titleEn: "Assistant Professor", specializationAr: "التخطيط العمراني", specializationEn: "Urban Planning", email: "mona.mohamed@valley.edu" },
      { nameAr: "د. أحمد رضا", nameEn: "Dr. Ahmed Reda", titleAr: "مدرس", titleEn: "Lecturer", specializationAr: "العمارة المستدامة", specializationEn: "Sustainable Architecture", email: "ahmed.reda@valley.edu" },
      { nameAr: "م. هبة محمود", nameEn: "Eng. Heba Mahmoud", titleAr: "معيد", titleEn: "Teaching Assistant", specializationAr: "التصميم الداخلي", specializationEn: "Interior Design", email: "heba.mahmoud@valley.edu" },
    ],
  },
  {
    slug: "control-computer",
    nameAr: "هندسة التحكم والحاسبات",
    nameEn: "Control & Computer Engineering",
    icon: Settings,
    headMessageAr: "يجمع قسم هندسة التحكم والحاسبات بين تخصصين حيويين هما هندسة التحكم الآلي وهندسة الحاسبات. نسعى لتخريج مهندسين متخصصين في تصميم وتطوير أنظمة التحكم الذكية والبرمجيات والذكاء الاصطناعي وإنترنت الأشياء لمواكبة متطلبات سوق العمل.",
    headMessageEn: "The Department of Control & Computer Engineering combines two vital specializations: automatic control engineering and computer engineering. We seek to graduate engineers specialized in designing and developing intelligent control systems, software, artificial intelligence, and IoT to keep pace with labor market requirements.",
    headNameAr: "أ.د. رئيس قسم التحكم والحاسبات",
    headNameEn: "Prof. Head of Control & Computer Department",
    courses: [
      { nameAr: "نظم تحكم آلي", nameEn: "Automatic Control Systems", codeAr: "تحك 201", codeEn: "CTR 201", descAr: "أساسيات نظم التحكم وتحليلها", descEn: "Fundamentals and analysis of control systems" },
      { nameAr: "برمجة متقدمة", nameEn: "Advanced Programming", codeAr: "حاس 201", codeEn: "CMP 201", descAr: "لغات البرمجة المتقدمة وهياكل البيانات", descEn: "Advanced programming languages and data structures" },
      { nameAr: "ذكاء اصطناعي", nameEn: "Artificial Intelligence", codeAr: "حاس 301", codeEn: "CMP 301", descAr: "مبادئ وتطبيقات الذكاء الاصطناعي", descEn: "Principles and applications of artificial intelligence" },
      { nameAr: "معالجة إشارات", nameEn: "Signal Processing", codeAr: "تحك 301", codeEn: "CTR 301", descAr: "معالجة الإشارات الرقمية والتناظرية", descEn: "Digital and analog signal processing" },
      { nameAr: "شبكات حاسب", nameEn: "Computer Networks", codeAr: "حاس 302", codeEn: "CMP 302", descAr: "تصميم وإدارة شبكات الحاسب", descEn: "Design and management of computer networks" },
      { nameAr: "نظم مدمجة", nameEn: "Embedded Systems", codeAr: "تحك 401", codeEn: "CTR 401", descAr: "تصميم وبرمجة النظم المدمجة", descEn: "Design and programming of embedded systems" },
    ],
    labs: [
      { nameAr: "معمل الحاسبات والبرمجيات", nameEn: "Computer & Software Lab", descAr: "مجهز بأحدث الحواسيب وبرامج التطوير", descEn: "Equipped with the latest computers and development software" },
      { nameAr: "معمل التحكم الآلي", nameEn: "Automatic Control Lab", descAr: "يحتوي على أنظمة تحكم متنوعة ومتحكمات PLC", descEn: "Contains various control systems and PLC controllers" },
      { nameAr: "معمل الذكاء الاصطناعي وإنترنت الأشياء", nameEn: "AI & IoT Lab", descAr: "مجهز بأجهزة Arduino وRaspberry Pi ومعدات IoT", descEn: "Equipped with Arduino, Raspberry Pi and IoT equipment" },
    ],
    gradProjects: [
      { titleAr: "تطوير روبوت ذكي للمساعدة في الزراعة", titleEn: "Smart Agricultural Robot Development", studentAr: "عبدالله محمد - معاذ أحمد", studentEn: "Abdullah Mohamed - Moaz Ahmed", yearAr: "2025", yearEn: "2025" },
      { titleAr: "نظام مراقبة منزلي ذكي باستخدام إنترنت الأشياء", titleEn: "Smart Home Monitoring System Using IoT", studentAr: "حسام خالد - أيمن علي", studentEn: "Hossam Khaled - Ayman Ali", yearAr: "2025", yearEn: "2025" },
      { titleAr: "تطبيق ذكاء اصطناعي للتشخيص الطبي", titleEn: "AI Application for Medical Diagnosis", studentAr: "نادية حسن - ريهام محمد", studentEn: "Nadia Hassan - Reham Mohamed", yearAr: "2024", yearEn: "2024" },
    ],
    faculty: [
      { nameAr: "أ.د. عادل محمد سليمان", nameEn: "Prof. Adel Mohamed Soliman", titleAr: "أستاذ", titleEn: "Professor", specializationAr: "نظم التحكم الآلي", specializationEn: "Automatic Control Systems", email: "adel.soliman@valley.edu" },
      { nameAr: "د. هاني عبدالله أحمد", nameEn: "Dr. Hani Abdullah Ahmed", titleAr: "أستاذ مساعد", titleEn: "Assistant Professor", specializationAr: "الذكاء الاصطناعي", specializationEn: "Artificial Intelligence", email: "hani.ahmed@valley.edu" },
      { nameAr: "د. رانيا محمد حسن", nameEn: "Dr. Rania Mohamed Hassan", titleAr: "مدرس", titleEn: "Lecturer", specializationAr: "شبكات الحاسب", specializationEn: "Computer Networks", email: "rania.hassan@valley.edu" },
      { nameAr: "م. عمر طارق", nameEn: "Eng. Omar Tarek", titleAr: "معيد", titleEn: "Teaching Assistant", specializationAr: "النظم المدمجة", specializationEn: "Embedded Systems", email: "omar.tarek@valley.edu" },
    ],
  },
];

export default function DepartmentDetail() {
  const [, params] = useRoute("/institute/engineering/department/:slug");
  const { language } = useLanguage();
  const slug = params?.slug;
  const dept = departmentsData.find((d) => d.slug === slug);

  if (!dept) {
    return (
      <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
        <PageHead title="القسم غير موجود - المعهد العالي للهندسة" />
        <InstituteNavbar {...engineeringNavbar} />
        <InstituteHero title={language === "ar" ? "القسم غير موجود" : "Department Not Found"} subtitle={language === "ar" ? "لم يتم العثور على القسم المطلوب" : "The requested department was not found"} image="/figmaAssets/rectangle-17.png" overlayColor="from-blue-900/60 to-blue-900/80" />
        <section className="py-20 bg-white dark:bg-neutral-950 transition-colors duration-300">
          <div className="max-w-[800px] mx-auto px-4 md:px-8 text-center" dir={direction}>
            <p className="text-neutral-500 dark:text-neutral-400 text-lg [font-family:'Almarai',Helvetica] mb-8">{language === "ar" ? "يمكنك العودة لصفحة الأقسام لاستعراض الأقسام المتاحة" : "You can go back to the departments page to browse available departments"}</p>
            <Link href="/institute/engineering/departments">
              <span className="px-8 py-3 rounded-full bg-blue-700 hover:bg-blue-800 text-white [font-family:'Almarai',Helvetica] transition-all inline-block cursor-pointer">{language === "ar" ? "العودة للأقسام" : "Back to Departments"}</span>
            </Link>
          </div>
        </section>
        <InstituteFooter {...engineeringFooter} />
      </div>
    );
  }

  const DeptIcon = dept.icon;
  const deptName = language === "ar" ? dept.nameAr : dept.nameEn;

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-hidden w-full transition-colors duration-300">
      <PageHead title={`${deptName} - ${language === "ar" ? "المعهد العالي للهندسة" : "Higher Institute of Engineering"}`} description={deptName} />
      <InstituteNavbar {...engineeringNavbar} />
      <InstituteHero title={deptName} subtitle={language === "ar" ? "المعهد العالي للهندسة والتكنولوجيا" : "Higher Institute of Engineering & Technology"} image="/figmaAssets/rectangle-17.png" overlayColor="from-blue-900/60 to-blue-900/80" />

      <section className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-blue-700 rounded-full" />
                <span className="text-blue-700 font-bold text-sm [font-family:'Almarai',Helvetica]">{language === "ar" ? "كلمة رئيس القسم" : "Department Head Message"}</span>
                <div className="w-12 h-1 bg-blue-700 rounded-full" />
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Card className="rounded-3xl border-0 shadow-lg bg-white dark:bg-neutral-900 dark:border-neutral-800 transition-colors duration-300">
              <CardContent className="p-8 md:p-12" dir={direction}>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-24 h-24 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center flex-shrink-0 mx-auto md:mx-0 transition-colors duration-300">
                    <User className="w-12 h-12 text-blue-700 dark:text-blue-400 transition-colors duration-300" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">
                      "{language === "ar" ? dept.headMessageAr : dept.headMessageEn}"
                    </p>
                    <div>
                      <h4 className="font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? dept.headNameAr : dept.headNameEn}</h4>
                      <span className="text-blue-700 dark:text-blue-400 text-sm [font-family:'Almarai',Helvetica] transition-colors duration-300">{deptName}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-blue-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[1100px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <BookOpen className="w-10 h-10 text-blue-700 dark:text-blue-500 mx-auto mb-4 transition-colors duration-300" />
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
                      <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full text-xs [font-family:'Almarai',Helvetica] transition-colors duration-300 flex-shrink-0">{language === "ar" ? course.codeAr : course.codeEn}</span>
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
              <FlaskConical className="w-10 h-10 text-blue-700 dark:text-blue-500 mx-auto mb-4 transition-colors duration-300" />
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "المعامل" : "Laboratories"}</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" dir={direction}>
            {dept.labs.map((lab, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full bg-white dark:bg-neutral-900 dark:border-neutral-800">
                  <CardContent className="p-6 flex flex-col gap-3 items-center text-center">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center transition-colors duration-300">
                      <FlaskConical className="w-7 h-7 text-blue-700 dark:text-blue-500 transition-colors duration-300" />
                    </div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? lab.nameAr : lab.nameEn}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? lab.descAr : lab.descEn}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-[1100px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12" dir={direction}>
              <GraduationCap className="w-10 h-10 text-blue-700 dark:text-blue-500 mx-auto mb-4 transition-colors duration-300" />
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "مشاريع التخرج" : "Graduation Projects"}</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" dir={direction}>
            {dept.gradProjects.map((project, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full bg-white dark:bg-neutral-800 dark:border-neutral-700">
                  <CardContent className="p-6 flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-blue-700 dark:text-blue-500 flex-shrink-0 transition-colors duration-300" />
                      <h3 className="font-bold text-base text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? project.titleAr : project.titleEn}</h3>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 text-sm [font-family:'Almarai',Helvetica] transition-colors duration-300">
                      <Users className="w-4 h-4 flex-shrink-0" />
                      <span>{language === "ar" ? project.studentAr : project.studentEn}</span>
                    </div>
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full text-xs [font-family:'Almarai',Helvetica] w-fit transition-colors duration-300">{language === "ar" ? project.yearAr : project.yearEn}</span>
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
              <Users className="w-10 h-10 text-blue-700 dark:text-blue-500 mx-auto mb-4 transition-colors duration-300" />
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? "أعضاء هيئة التدريس" : "Faculty Members"}</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" dir={direction}>
            {dept.faculty.map((member, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all h-full bg-white dark:bg-neutral-900 dark:border-neutral-800">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                    <div className="w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center transition-colors duration-300">
                      <User className="w-10 h-10 text-blue-700 dark:text-blue-400 transition-colors duration-300" />
                    </div>
                    <h3 className="font-bold text-base text-neutral-900 dark:text-white [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? member.nameAr : member.nameEn}</h3>
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full text-xs [font-family:'Almarai',Helvetica] transition-colors duration-300">{language === "ar" ? member.titleAr : member.titleEn}</span>
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

      <InstituteFooter {...engineeringFooter} />
    </div>
  );
}