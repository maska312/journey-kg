"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

interface LanguageSwitcherProps {
  scrolled?: boolean;
  className?: string;
  isMobile?: boolean;
}

export default function LanguageSwitcher({
  scrolled = false,
  className = "",
  isMobile = false,
}: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  if (isMobile) {
    return (
      <div className={`flex items-center justify-between rounded-xl bg-gray-100 p-2 ${className}`}>
        <div className="flex items-center gap-2 text-sm font-medium text-dark/70">
          <Globe className="h-4 w-4 text-accent" />
          <span>Language / Язык:</span>
        </div>
        <div className="flex items-center rounded-lg bg-white p-0.5 shadow-xs border border-gray-200">
          <button
            type="button"
            onClick={() => setLanguage("en")}
            className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${
              language === "en"
                ? "bg-accent text-white shadow-sm"
                : "text-dark/70 hover:text-dark"
            }`}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => setLanguage("ru")}
            className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${
              language === "ru"
                ? "bg-accent text-white shadow-sm"
                : "text-dark/70 hover:text-dark"
            }`}
          >
            RU
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center rounded-full p-1 transition-all backdrop-blur-md ${
        scrolled
          ? "bg-black/5 border border-black/10 shadow-xs"
          : "bg-white/15 border border-white/25 shadow-sm"
      } ${className}`}
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-label="Switch to English"
        className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all duration-200 ${
          language === "en"
            ? "bg-accent text-white shadow-sm scale-100"
            : scrolled
            ? "text-dark/70 hover:text-dark"
            : "text-white/80 hover:text-white"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage("ru")}
        aria-label="Переключить на русский"
        className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all duration-200 ${
          language === "ru"
            ? "bg-accent text-white shadow-sm scale-100"
            : scrolled
            ? "text-dark/70 hover:text-dark"
            : "text-white/80 hover:text-white"
        }`}
      >
        RU
      </button>
    </div>
  );
}
