import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE, LOCALES } from "@/lib/seo";

// Locale-agnostic routes that must keep their bare URLs (Google Ads conversion
// is configured against /record; both are noindex).
const EXCLUDED = ["/record", "/whatsapp"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (EXCLUDED.some((p) => pathname === p || pathname.startsWith(`${p}/`))) {
    return;
  }

  const hasLocale = LOCALES.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) return;

  // Un-prefixed path → permanent redirect to the default (Arabic) locale.
  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url, 308);
}

export const config = {
  // Skip API, Next internals, and any file with an extension (sitemap.xml,
  // robots.txt, *.png, manifest.webmanifest, llms.txt, icons, og images).
  matcher: ["/((?!api|_next/static|_next/image|.*\\..*).*)"],
};
