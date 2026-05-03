import { BRAND_NAME_AR, BRAND_NAME_EN } from "@/brand";
import { ClientProviders } from "@/components/ClientProviders";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const GOOGLE_ADS_ID = "AW-18095601957";
const GOOGLE_ANALYTICS_ID = "G-JNXD8CLCR1";

const SITE_URL = "https://sathtek.app";
const DEFAULT_TITLE = `${BRAND_NAME_AR} — أقرب سطحة وقت ما تبي`;
const DEFAULT_DESCRIPTION =
  "بدل ما تدق على ١٠ سطحات، طلب واحد يوصل لكل الكباتن حولك — اختر الأنسب وتابع رحلتك لحظة بلحظة.";
export const viewport: Viewport = {
  themeColor: "#C96442",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${BRAND_NAME_AR}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: BRAND_NAME_AR,
  category: "transportation",
  keywords: [
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
  alternates: {
    canonical: "/",
  },
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
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    type: "website",
    locale: "ar_SA",
    siteName: BRAND_NAME_AR,
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-parchment text-near-black">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-ads-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('set', 'linker', { domains: ['sathtek.app','order.sathtek.app'], accept_incoming: true });
gtag('config', '${GOOGLE_ADS_ID}');
gtag('config', '${GOOGLE_ANALYTICS_ID}');`}
        </Script>
        <ClientProviders>{children}</ClientProviders>
        <Analytics />
      </body>
    </html>
  );
}
