export const managementNavLinks = [
  { label: "الرئيسية", key: "home", href: "/institute/management" },
  { label: "من نحن", key: "about", href: "/institute/management/about" },
  { label: "الأقسام", key: "departments", href: "/institute/management/departments" },
  { label: "القبول", key: "admission", href: "/institute/management/admission" },
  { label: "خدمات الطلاب", key: "student_services", href: "/institute/management/student-services" },
  { label: "أعضاء هيئة التدريس", key: "faculty", href: "/institute/management/faculty" },
  { label: "التدريب", key: "training", href: "/institute/management/training" },
  { label: "الأنشطة", key: "activities", href: "/institute/management/activities" },
  { label: "الأخبار", key: "news", href: "/institute/management/news" },
  { label: "ضمان الجودة", key: "quality", href: "/institute/management/quality" },
  { label: "المكتبة", key: "library", href: "/institute/management/library" },
  { label: "تواصل معنا", key: "contact_us", href: "/institute/management/contact" },
];

export const managementFooterColumns = [
  {
    title: "المعهد",
    key: "institute",
    links: [
      { label: "من نحن", key: "about", href: "/institute/management/about" },
      { label: "كلمة العميد", key: "dean_word", href: "/institute/management/about" },
      { label: "أعضاء هيئة التدريس", key: "faculty", href: "/institute/management/faculty" },
    ],
  },
  {
    title: "الأقسام",
    key: "departments",
    links: [
      { label: "نظم المعلومات الإدارية", key: "mis", href: "/institute/management/department/mis" },
      { label: "المحاسبة", key: "accounting", href: "/institute/management/department/accounting" },
      { label: "العلوم المالية والمصرفية", key: "finance", href: "/institute/management/department/finance" },
      { label: "إدارة الأعمال", key: "business_admin", href: "/institute/management/department/business-admin" },
    ],
  },
  {
    title: "الخدمات",
    key: "services",
    links: [
      { label: "شروط القبول", key: "admission_requirements", href: "/institute/management/admission" },
      { label: "خدمات الطلاب", key: "student_services", href: "/institute/management/student-services" },
      { label: "التدريب", key: "training", href: "/institute/management/training" },
      { label: "ضمان الجودة", key: "quality", href: "/institute/management/quality" },
      { label: "المكتبة", key: "library", href: "/institute/management/library" },
      { label: "تواصل معنا", key: "contact_us", href: "/institute/management/contact" },
    ],
  },
];

export const engineeringNavLinks = [
  { label: "الرئيسية", key: "home", href: "/institute/engineering" },
  { label: "من نحن", key: "about", href: "/institute/engineering/about" },
  { label: "الأقسام", key: "departments", href: "/institute/engineering/departments" },
  { label: "القبول", key: "admission", href: "/institute/engineering/admission" },
  { label: "خدمات الطلاب", key: "student_services", href: "/institute/engineering/student-services" },
  { label: "أعضاء هيئة التدريس", key: "faculty", href: "/institute/engineering/faculty" },
  { label: "التدريب", key: "training", href: "/institute/engineering/training" },
  { label: "البحث العلمي", key: "research", href: "/institute/engineering/research" },
  { label: "المعامل", key: "labs", href: "/institute/engineering/labs" },
  { label: "الأخبار", key: "news", href: "/institute/engineering/news" },
  { label: "ضمان الجودة", key: "quality", href: "/institute/engineering/quality" },
  { label: "المكتبة", key: "library", href: "/institute/engineering/library" },
  { label: "تواصل معنا", key: "contact_us", href: "/institute/engineering/contact" },
];

export const engineeringFooterColumns = [
  {
    title: "المعهد",
    key: "institute",
    links: [
      { label: "من نحن", key: "about", href: "/institute/engineering/about" },
      { label: "كلمة العميد", key: "dean_word", href: "/institute/engineering/about" },
      { label: "أعضاء هيئة التدريس", key: "faculty", href: "/institute/engineering/faculty" },
      { label: "البحث العلمي", key: "research", href: "/institute/engineering/research" },
    ],
  },
  {
    title: "الأقسام",
    key: "departments",
    links: [
      { label: "هندسة القوى والاتصالات", key: "power_telecom", href: "/institute/engineering/department/power-telecom" },
      { label: "الهندسة المدنية", key: "civil_eng", href: "/institute/engineering/department/civil" },
      { label: "الهندسة المعمارية", key: "architecture", href: "/institute/engineering/department/architecture" },
      { label: "هندسة التحكم والحاسبات", key: "control_computer", href: "/institute/engineering/department/control-computer" },
    ],
  },
  {
    title: "الخدمات",
    key: "services",
    links: [
      { label: "شروط القبول", key: "admission_requirements", href: "/institute/engineering/admission" },
      { label: "خدمات الطلاب", key: "student_services", href: "/institute/engineering/student-services" },
      { label: "التدريب", key: "training", href: "/institute/engineering/training" },
      { label: "المعامل والمرافق", key: "labs_facilities", href: "/institute/engineering/labs" },
      { label: "ضمان الجودة", key: "quality", href: "/institute/engineering/quality" },
      { label: "المكتبة", key: "library", href: "/institute/engineering/library" },
      { label: "تواصل معنا", key: "contact_us", href: "/institute/engineering/contact" },
    ],
  },
];

export interface NavGroup {
  label: string;
  key: string;
  href?: string;
  children?: { label: string; key: string; href: string }[];
}

export const managementNavGroups: NavGroup[] = [
  { label: "الرئيسية", key: "home", href: "/institute/management" },
  { label: "من نحن", key: "about", href: "/institute/management/about" },
  { label: "الأقسام", key: "departments", children: [
    { label: "جميع الأقسام", key: "departments", href: "/institute/management/departments" },
    { label: "نظم المعلومات الإدارية", key: "mis", href: "/institute/management/department/mis" },
    { label: "المحاسبة", key: "accounting", href: "/institute/management/department/accounting" },
    { label: "العلوم المالية والمصرفية", key: "finance", href: "/institute/management/department/finance" },
    { label: "إدارة الأعمال", key: "business_admin", href: "/institute/management/department/business-admin" },
  ]},
  { label: "الحياة الأكاديمية", key: "academic_life", children: [
    { label: "القبول", key: "admission", href: "/institute/management/admission" },
    { label: "خدمات الطلاب", key: "student_services", href: "/institute/management/student-services" },
    { label: "أعضاء هيئة التدريس", key: "faculty", href: "/institute/management/faculty" },
    { label: "التدريب", key: "training", href: "/institute/management/training" },
    { label: "الأنشطة", key: "activities", href: "/institute/management/activities" },
  ]},
  { label: "الأخبار", key: "news", href: "/institute/management/news" },
  { label: "المزيد", key: "more", children: [
    { label: "ضمان الجودة", key: "quality", href: "/institute/management/quality" },
    { label: "المكتبة", key: "library", href: "/institute/management/library" },
    { label: "تواصل معنا", key: "contact_us", href: "/institute/management/contact" },
  ]},
];

export const engineeringNavGroups: NavGroup[] = [
  { label: "الرئيسية", key: "home", href: "/institute/engineering" },
  { label: "من نحن", key: "about", href: "/institute/engineering/about" },
  { label: "الأقسام", key: "departments", children: [
    { label: "جميع الأقسام", key: "departments", href: "/institute/engineering/departments" },
    { label: "هندسة القوى والاتصالات", key: "power_telecom", href: "/institute/engineering/department/power-telecom" },
    { label: "الهندسة المدنية", key: "civil_eng", href: "/institute/engineering/department/civil" },
    { label: "الهندسة المعمارية", key: "architecture", href: "/institute/engineering/department/architecture" },
    { label: "هندسة التحكم والحاسبات", key: "control_computer", href: "/institute/engineering/department/control-computer" },
  ]},
  { label: "الحياة الأكاديمية", key: "academic_life", children: [
    { label: "القبول", key: "admission", href: "/institute/engineering/admission" },
    { label: "خدمات الطلاب", key: "student_services", href: "/institute/engineering/student-services" },
    { label: "أعضاء هيئة التدريس", key: "faculty", href: "/institute/engineering/faculty" },
    { label: "التدريب", key: "training", href: "/institute/engineering/training" },
    { label: "البحث العلمي", key: "research", href: "/institute/engineering/research" },
    { label: "المعامل", key: "labs", href: "/institute/engineering/labs" },
  ]},
  { label: "الأخبار", key: "news", href: "/institute/engineering/news" },
  { label: "المزيد", key: "more", children: [
    { label: "ضمان الجودة", key: "quality", href: "/institute/engineering/quality" },
    { label: "المكتبة", key: "library", href: "/institute/engineering/library" },
    { label: "تواصل معنا", key: "contact_us", href: "/institute/engineering/contact" },
  ]},
];

export const managementNavbar = {
  links: managementNavLinks,
  navGroups: managementNavGroups,
  accentColor: "bg-green-700" as const,
  accentHover: "hover:bg-green-800" as const,
  instituteName: "المعهد العالي للإدارة",
  instituteNameKey: "management_institute",
  basePath: "/institute/management",
};

export const engineeringNavbar = {
  links: engineeringNavLinks,
  navGroups: engineeringNavGroups,
  accentColor: "bg-blue-700" as const,
  accentHover: "hover:bg-blue-800" as const,
  instituteName: "المعهد العالي للهندسة",
  instituteNameKey: "engineering_institute",
  basePath: "/institute/engineering",
};

export const managementFooter = {
  instituteName: "المعهد العالي للإدارة والمالية ونظم المعلومات",
  instituteNameKey: "management_institute_full",
  columns: managementFooterColumns,
  accentColor: "green" as const,
  accentHoverClass: "hover:bg-green-700" as const,
};

export const engineeringFooter = {
  instituteName: "المعهد العالي للهندسة والتكنولوجيا",
  instituteNameKey: "engineering_institute_full",
  columns: engineeringFooterColumns,
  accentColor: "blue" as const,
  accentHoverClass: "hover:bg-blue-700" as const,
};
