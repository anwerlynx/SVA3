import { Link } from "wouter";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";

export function Footer() {
  const { t, direction, language } = useLanguage();
  const [socials, setSocials] = useState<Record<string, string>>({});

  useEffect(() => {
    fetch("/api/settings")
      .then(r => r.json())
      .then(data => {
        const s: Record<string, string> = {};
        if (Array.isArray(data)) {
          data.forEach((item: any) => {
            if (item.key?.startsWith("social_")) s[item.key] = item.value;
          });
        }
        setSocials(s);
      })
      .catch(() => {});
  }, []);

  const col1Links = [
    { label: t("about"), href: "/about" },
    { label: language === 'ar' ? "الرؤية والرسالة" : "Vision & Mission", href: "/vision-mission" },
    { label: t("board"), href: "/board" },
    { label: language === 'ar' ? "ميثاق الشرف" : "Honor Charter", href: "/honor-charter" },
    { label: t("partners_page"), href: "/partners" },
  ];

  const col2Links = [
    { label: language === 'ar' ? "القبول المركزي" : "Central Admission", href: "/admission" },
    { label: language === 'ar' ? "شروط الالتحاق" : "Enrollment Conditions", href: "/enrollment-conditions" },
    { label: language === 'ar' ? "شئون الطلاب" : "Student Affairs", href: "/student-affairs" },
    { label: language === 'ar' ? "الجودة المركزية" : "Central Quality", href: "/quality" },
    { label: t("services"), href: "/services" },
  ];

  const col3Links = [
    { label: t("management_institute"), href: "/institute/management" },
    { label: t("engineering_institute"), href: "/institute/engineering" },
    { label: language === 'ar' ? "المكتبة" : "Library", href: "/library/about" },
    { label: language === 'ar' ? "رعاية الشباب" : "Youth Welfare", href: "/committees/student-union" },
    { label: t("news"), href: "/news" },
  ];

  const footerColumns = [
    { title: t("institution"), links: col1Links },
    { title: t("admission_and_services"), links: col2Links },
    { title: t("institutes"), links: col3Links },
  ];

  return (
    <footer className="bg-neutral-950 text-white" dir={direction}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className={`flex flex-col ${direction === 'rtl' ? 'items-start' : 'items-start'} gap-6`}>
            <img
              className="h-16 object-contain"
              alt="معاهد الوادي العليا"
              src="/figmaAssets/1-7.png"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p className="text-gray-400 text-sm leading-relaxed [font-family:'Almarai',Helvetica]">
              {language === 'ar'
                ? "صرح تعليمي رائد يرسخ معايير التميز الأكاديمي ويصنع قادة المستقبل"
                : "A leading educational institution setting standards of academic excellence and shaping future leaders"}
            </p>
            <div className="flex items-center gap-3">
              {[
                { key: "social_facebook", icon: Facebook, label: "Facebook" },
                { key: "social_instagram", icon: Instagram, label: "Instagram" },
                { key: "social_twitter", icon: Twitter, label: "Twitter" },
                { key: "social_youtube", icon: Youtube, label: "Youtube" },
              ].map(({ key, icon: Icon, label }) => (
                <a
                  key={key}
                  href={socials[key] || `https://${label.toLowerCase()}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-700 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerColumns.map((column, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h3 className="font-bold text-base text-white [font-family:'Almarai',Helvetica] pb-2 border-b border-white/10">
                {column.title}
              </h3>
              <div className="flex flex-col gap-2.5">
                {column.links.map((link, linkIndex) => (
                  <Link key={linkIndex} href={link.href}>
                    <span className="text-gray-400 text-sm hover:text-green-400 transition-colors cursor-pointer [font-family:'Almarai',Helvetica] flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-green-700 group-hover:bg-green-400 transition-colors flex-shrink-0" />
                      {link.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Info Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm [font-family:'Almarai',Helvetica]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>{language === 'ar' ? "الكيلو 47 طريق مصر الإسماعيلية" : "Km 47, Cairo-Ismailia Road"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span dir="ltr">+20 123 456 7890</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>info@valley-institutes.edu.eg</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-500 text-sm [font-family:'Almarai',Helvetica]">
              <Link href="/sitemap">
                <span className="hover:text-green-400 transition-colors cursor-pointer">
                  {language === 'ar' ? "خريطة الموقع" : "Sitemap"}
                </span>
              </Link>
              <span>|</span>
              <span>© 2026 {language === 'ar' ? "معاهد الوادي العليا. جميع الحقوق محفوظة." : "Valley Higher Institutes. All Rights Reserved."}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
