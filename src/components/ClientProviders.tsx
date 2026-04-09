"use client";

import { I18nProvider, useI18n } from "@/i18n/context";

function DirectionWrapper({ children }: { children: React.ReactNode }) {
  const { dir, locale } = useI18n();

  return (
    <div
      dir={dir}
      className={locale === "ar" ? "font-arabic" : "font-sans"}
      style={{ fontFamily: locale === "ar" ? "var(--font-arabic)" : "var(--font-sans)" }}
    >
      {children}
    </div>
  );
}

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <I18nProvider>
      <DirectionWrapper>{children}</DirectionWrapper>
    </I18nProvider>
  );
}
