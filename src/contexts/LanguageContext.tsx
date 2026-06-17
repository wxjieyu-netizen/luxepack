"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import en from "@/messages/en.json";
import zh from "@/messages/zh.json";

type Locale = "en" | "zh";
type Translations = typeof en;

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (path: string) => string;
}

const translations: Record<Locale, Translations> = { en, zh };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    // Load saved locale from localStorage
    const savedLocale = localStorage.getItem("locale") as Locale;
    if (savedLocale && (savedLocale === "en" || savedLocale === "zh")) {
      setLocaleState(savedLocale);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
    document.documentElement.lang = newLocale;
  };

  const t = (path: string): string => {
    const keys = path.split(".");
    let value: any = translations[locale];
    
    for (const key of keys) {
      if (value && typeof value === "object" && key in value) {
        value = value[key];
      } else {
        // Fallback to English if translation not found
        let fallback: any = translations.en;
        for (const fallbackKey of keys) {
          if (fallback && typeof fallback === "object" && fallbackKey in fallback) {
            fallback = fallback[fallbackKey];
          } else {
            return path; // Return the path if no translation found
          }
        }
        return fallback;
      }
    }
    
    return typeof value === "string" ? value : path;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
