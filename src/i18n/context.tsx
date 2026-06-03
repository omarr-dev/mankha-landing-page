"use client";

import React, { createContext, useContext, useCallback, useMemo } from "react";
import { translations, type Locale, type TranslationKey } from "./translations";

interface I18nContextType {
  locale: Locale;
  t: (key: TranslationKey) => string;
  dir: "ltr" | "rtl";
}

const I18nContext = createContext<I18nContextType | null>(null);

// Locale is now URL-driven (the [lang] route segment) and passed in as a prop
// from the server layout — no client state, localStorage, or query parsing, so
// there is no hydration flash or RTL flip. Switching language is navigation
// (see LocaleSwitcher / swapLocaleInPath), not a state toggle.
export function I18nProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const t = useCallback(
    (key: TranslationKey) => translations[locale][key],
    [locale]
  );
  const dir: "ltr" | "rtl" = locale === "ar" ? "rtl" : "ltr";

  const value = useMemo(() => ({ locale, t, dir }), [locale, t, dir]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used within I18nProvider");
  return context;
}
