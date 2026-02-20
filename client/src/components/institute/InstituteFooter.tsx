import { Link } from "wouter";
import { Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface FooterColumn {
  title: string;
  key?: string;
  links: { label: string; href: string; key?: string }[];
}

interface InstituteFooterProps {
  instituteName: string;
  instituteNameKey?: string;
  columns: FooterColumn[];
  accentColor: string;
  accentHoverClass: string;
}

export function InstituteFooter({ instituteName, instituteNameKey, columns, accentColor, accentHoverClass }: InstituteFooterProps) {
  const { t, language, direction } = useLanguage();

  const displayName = instituteNameKey ? t(instituteNameKey as any) : instituteName;

  return (
    <footer className="bg-neutral-900 dark:bg-neutral-950 text-white transition-colors duration-300" dir={direction}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          <div className="flex flex-col items-center md:items-start gap-6">
            <img
              className="h-16 object-contain"
              alt={displayName}
              src="/figmaAssets/1-7.png"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p className={`text-gray-400 text-sm leading-relaxed text-center ${direction === 'rtl' ? 'md:text-right' : 'md:text-left'} [font-family:'Almarai',Helvetica]`}>
              {displayName} - {t("mission")}
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center ${accentHoverClass} transition-colors`} data-testid="link-facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center ${accentHoverClass} transition-colors`} data-testid="link-instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center ${accentHoverClass} transition-colors`} data-testid="link-twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {columns.map((column, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h3 className="font-bold text-lg [font-family:'Almarai',Helvetica]">
                {column.key ? t(column.key as any) : column.title}
              </h3>
              <div className="flex flex-col gap-3">
                {column.links.map((link, linkIndex) => (
                  <Link key={linkIndex} href={link.href}>
                    <span className={`text-gray-400 text-sm transition-colors cursor-pointer [font-family:'Almarai',Helvetica] ${accentColor === "blue" ? "hover:text-blue-400" : "hover:text-green-400"}`}>
                      {link.key ? t(link.key as any) : link.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 transition-colors duration-300">
          <div className="flex items-center gap-6 text-gray-400 text-sm [font-family:'Almarai',Helvetica]">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>01234567890</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@valley-institutes.edu</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/">
              <span className="text-gray-500 text-sm hover:text-white transition-colors cursor-pointer [font-family:'Almarai',Helvetica]">{t("back_to_portal")}</span>
            </Link>
            <span className="text-gray-600">|</span>
            <p className="text-gray-500 text-sm [font-family:'Almarai',Helvetica]">
              © 2026 {displayName}. {t("rights_reserved")}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
