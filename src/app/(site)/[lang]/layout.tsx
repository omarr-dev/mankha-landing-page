import { BRAND_NAME_AR, BRAND_NAME_EN } from "@/brand";
import { ClientProviders } from "@/components/ClientProviders";
import { GtagScripts } from "@/components/GtagScripts";
import { ibmPlexArabic } from "@/lib/fonts";
import {
  SITE_URL,
  buildAlternates,
  isLocale,
  ogLocale,
  type Locale,
} from "@/lib/seo";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "../../globals.css";

const TITLES: Record<Locale, string> = {
  ar: `${BRAND_NAME_AR} — أقرب سطحة وقت ما تبي`,
  en: `${BRAND_NAME_EN} — Nearest tow truck, on demand`,
};
const DESCRIPTIONS: Record<Locale, string> = {
  ar: "بدل ما تدق على ١٠ سطحات، طلب واحد يوصل لكل الكباتن حولك، تجيك عروضهم — اختر الأنسب وتابع رحلتك لحظة بلحظة.",
  en: "Skip calling ten tow trucks — one request reaches every nearby driver across Saudi Arabia. Compare quotes, pick the best, and track your tow live, 24/7.",
};
const KEYWORDS: Record<Locale, string[]> = {
  ar: [
    "سطحة",
    "سطحه",
    "سطحتك",
    "سطحة الرياض",
    "سطحة جدة",
    "سطحة الدمام",
    "سطحة 24 ساعة",
    "سطحة قريبة مني",
    "مساعدة على الطريق",
    "سحب سيارات",
    "نقل سيارات",
    "تطبيق سطحات",
    "خدمة سطحات",
    "السعودية",
    BRAND_NAME_AR,
    BRAND_NAME_EN,
  ],
  en: [
    "tow truck Saudi Arabia",
    "tow truck Riyadh",
    "roadside assistance Riyadh",
    "tow truck near me",
    "24 hour towing KSA",
    "car towing app",
    "Satha",
    BRAND_NAME_EN,
    BRAND_NAME_AR,
  ],
};

export function generateStaticParams() {
  return [{ lang: "ar" }, { lang: "en" }];
}

export const viewport: Viewport = {
  themeColor: "#C96442",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const title = TITLES[lang];
  const description = DESCRIPTIONS[lang];
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: title, template: `%s | ${BRAND_NAME_AR}` },
    description,
    applicationName: lang === "ar" ? BRAND_NAME_AR : BRAND_NAME_EN,
    category: "transportation",
    keywords: KEYWORDS[lang],
    alternates: buildAlternates(lang, "/"),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${lang}`,
      type: "website",
      locale: ogLocale(lang),
      siteName: BRAND_NAME_AR,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={lang === "ar" ? "ar" : "en"}
      dir={dir}
      className={ibmPlexArabic.variable}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased bg-parchment text-near-black">
        <GtagScripts />
        <ClientProviders locale={lang}>{children}</ClientProviders>
        <Analytics />
      </body>
    </html>
  );
}
