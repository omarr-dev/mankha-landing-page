"use client";

import { usePathname } from "next/navigation";
import { swapLocaleInPath } from "@/lib/seo";
import { useI18n } from "./context";

/**
 * Returns the URL of the current page in the OTHER locale, preserving the path.
 * Use it as the href of a language-switch <Link> — switching is navigation now.
 */
export function useLocaleSwitchHref(): string {
  const { locale } = useI18n();
  const pathname = usePathname();
  const next = locale === "ar" ? "en" : "ar";
  return swapLocaleInPath(pathname || `/${locale}`, next);
}
