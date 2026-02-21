import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface Announcement {
  id: string;
  titleAr: string;
  titleEn: string;
  contentAr: string | null;
  contentEn: string | null;
  type: string;
  institute: string | null;
  isActive: boolean;
  expiresAt: string | null;
}

export function AnnouncementsBanner() {
  const { language, direction } = useLanguage();
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [isDismissed, setIsDismissed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await fetch("/api/announcements");
        const data = await response.json();
        const items = Array.isArray(data) ? data : [];
        setAnnouncements(items);
      } catch (error) {
        setAnnouncements([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

  useEffect(() => {
    if (announcements.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % announcements.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [announcements.length]);

  useEffect(() => {
    if (!loading && announcements.length > 0 && !isDismissed) {
      document.documentElement.style.setProperty('--announcement-height', '40px');
    } else {
      document.documentElement.style.setProperty('--announcement-height', '0px');
    }
    return () => {
      document.documentElement.style.setProperty('--announcement-height', '0px');
    };
  }, [loading, announcements.length, isDismissed]);

  if (loading || announcements.length === 0 || isDismissed) {
    return null;
  }

  const currentAnnouncement = announcements[currentIndex];
  const title = language === 'ar' ? currentAnnouncement.titleAr : (currentAnnouncement.titleEn || currentAnnouncement.titleAr);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentAnnouncement.id}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full bg-gradient-to-r from-green-700 to-green-800 dark:from-green-800 dark:to-green-900 text-white transition-colors duration-300 fixed top-0 left-0 right-0 h-10 z-[60] flex items-center"
      >
        <div className="max-w-full mx-auto px-4 md:px-8 flex items-center justify-between gap-4 w-full" dir={direction}>
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <Bell className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />

            <div className="min-w-0 flex-1 overflow-hidden">
              {announcements.length > 1 ? (
                <div className="relative h-6">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={currentIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      className="text-sm md:text-base font-medium [font-family:'Almarai',Helvetica] truncate"
                    >
                      {title}
                    </motion.p>
                  </AnimatePresence>
                </div>
              ) : (
                <p className="text-sm md:text-base font-medium [font-family:'Almarai',Helvetica] truncate">
                  {title}
                </p>
              )}
            </div>
          </div>

          {announcements.length > 1 && (
            <div className="flex items-center gap-1.5 flex-shrink-0">
              {announcements.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? "w-2 bg-white" : "w-1.5 bg-white/50 hover:bg-white/70"
                    }`}
                  aria-label={`Show announcement ${index + 1}`}
                />
              ))}
            </div>
          )}

          <button
            onClick={() => setIsDismissed(true)}
            className="flex-shrink-0 p-1 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Dismiss announcements"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
