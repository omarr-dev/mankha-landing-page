"use client";

import React, { createContext, useContext, useState, useCallback, useEffect, useMemo } from "react";
import { translations, type Locale, type TranslationKey } from "./translations";

interface I18nContextType {
  locale: Locale;
  t: (key: TranslationKey) => string;
  toggleLocale: () => void;
  dir: "ltr" | "rtl";
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("ar");

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("lang");
    if (fromUrl === "en" || fromUrl === "ar") {
      setLocale(fromUrl);
      localStorage.setItem("mankha_locale", fromUrl);
      return;
    }
    const stored = localStorage.getItem("mankha_locale");
    if (stored === "en") {
      setLocale("en");
    }
  }, []);

  const t = useCallback(
    (key: TranslationKey) => translations[locale][key],
    [locale]
  );

  const toggleLocale = useCallback(() => {
    setLocale((prev) => {
      const next = prev === "en" ? "ar" : "en";
      localStorage.setItem("mankha_locale", next);
      return next;
    });
  }, []);

  const dir: "ltr" | "rtl" = locale === "ar" ? "rtl" : "ltr";

  const value = useMemo(
    () => ({ locale, t, toggleLocale, dir }),
    [locale, t, toggleLocale, dir]
  );

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used within I18nProvider");
  return context;
}
