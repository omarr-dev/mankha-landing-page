import type { Metadata } from "next";

export const SITE_URL = "https://sathtek.app";

export const LOCALES = ["ar", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "ar";

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

// App locale -> hreflang code. Arabic is the primary market (KSA) => ar-SA.
const HREFLANG: Record<Locale, string> = { ar: "ar-SA", en: "en" };

/**
 * Build reciprocal canonical + hreflang alternates for a route.
 * `path` is the locale-agnostic path ("" for home, "/drivers", ...).
 * Every page emits the SAME `languages` set; only `canonical` differs per
 * locale — which is what Google requires for bidirectional hreflang.
 * Relative paths resolve against `metadataBase` (set in the [lang] layout).
 */
export function buildAlternates(locale: Locale, path: string): Metadata["alternates"] {
  const clean = path === "/" ? "" : path;
  const languages: Record<string, string> = {};
  for (const l of LOCALES) languages[HREFLANG[l]] = `/${l}${clean}`;
  languages["x-default"] = `/${DEFAULT_LOCALE}${clean}`; // Arabic = x-default
  return {
    canonical: `/${locale}${clean}`,
    languages,
  };
}

/** OpenGraph locale code for a given app locale. */
export function ogLocale(locale: Locale): string {
  return locale === "ar" ? "ar_SA" : "en_US";
}

/** Prefix an internal path with the active locale (for in-site links). */
export function localePath(locale: Locale, path: string): string {
  const clean = path === "/" ? "" : path;
  return `/${locale}${clean}`;
}

/** Swap the leading /ar or /en segment of a pathname to `next`. */
export function swapLocaleInPath(pathname: string, next: Locale): string {
  if (/^\/(ar|en)(?=\/|$)/.test(pathname)) {
    return pathname.replace(/^\/(ar|en)(?=\/|$)/, `/${next}`);
  }
  return `/${next}${pathname === "/" ? "" : pathname}`;
}
