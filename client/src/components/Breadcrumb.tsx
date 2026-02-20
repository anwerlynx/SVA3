import { Link } from "wouter";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const { direction } = useLanguage();
  const ChevronIcon = direction === "rtl" ? ChevronLeft : ChevronRight;

  return (
    <nav aria-label="Breadcrumb" dir={direction}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-4">
        <ol className="flex items-center flex-wrap gap-1 [font-family:'Almarai',Helvetica] text-sm">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="flex items-center gap-1">
                {index > 0 && (
                  <ChevronIcon className="w-4 h-4 text-neutral-400 dark:text-neutral-500 flex-shrink-0" />
                )}
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="text-green-700 dark:text-green-500 hover:text-green-800 dark:hover:text-green-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-neutral-500 dark:text-neutral-400">
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
