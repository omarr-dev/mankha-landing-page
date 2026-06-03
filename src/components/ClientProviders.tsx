"use client";

import { I18nProvider } from "@/i18n/context";
import type { Locale } from "@/i18n/translations";

// Direction + font now live on <html> in the [lang] layout (server-rendered),
// so no DirectionWrapper is needed here.
export function ClientProviders({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return <I18nProvider locale={locale}>{children}</I18nProvider>;
}
