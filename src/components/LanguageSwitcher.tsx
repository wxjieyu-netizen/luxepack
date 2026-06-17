"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Globe size={16} className="text-gray-500" />
      <div className="flex gap-1">
        <button
          onClick={() => setLocale("en")}
          className={`text-xs uppercase tracking-wider px-2 py-1 transition-colors ${
            locale === "en"
              ? "text-brand-gold font-bold"
              : "text-gray-500 hover:text-brand-gold"
          }`}
        >
          EN
        </button>
        <span className="text-gray-300">|</span>
        <button
          onClick={() => setLocale("zh")}
          className={`text-xs uppercase tracking-wider px-2 py-1 transition-colors ${
            locale === "zh"
              ? "text-brand-gold font-bold"
              : "text-gray-500 hover:text-brand-gold"
          }`}
        >
          中文
        </button>
      </div>
    </div>
  );
}
