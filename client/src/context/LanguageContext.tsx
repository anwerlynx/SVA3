import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Language, type Direction } from "@/lib/translations";

interface LanguageContextType {
    language: Language;
    direction: Direction;
    t: (key: keyof typeof translations['en']) => string;
    setLanguage: (lang: Language) => void;
    toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>(() => {
        // Default to 'ar' if no preference
        const saved = localStorage.getItem("language");
        return (saved === "ar" || saved === "en") ? saved : "ar";
    });

    const direction: Direction = language === "ar" ? "rtl" : "ltr";

    useEffect(() => {
        localStorage.setItem("language", language);
        document.documentElement.setAttribute("lang", language);
        document.documentElement.setAttribute("dir", direction);
    }, [language, direction]);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
    };

    const toggleLanguage = () => {
        setLanguageState(prev => prev === "ar" ? "en" : "ar");
    };

    const t = (key: keyof typeof translations['en']) => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, direction, t, setLanguage, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
