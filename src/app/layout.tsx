import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ClientProviders } from "@/components/ClientProviders";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { BRAND_NAME_AR, BRAND_NAME_EN } from "@/brand";

const SITE_URL = "https://sathtek.app";
const DEFAULT_TITLE = `${BRAND_NAME_AR} — سطحة 24 ساعة في السعودية | خدمة سطحات عند الطلب`;
const DEFAULT_DESCRIPTION =
  "تواصل مع سائقي سطحات موثوقين بالقرب منك. استقبل عروضاً فورية، تتبّع وصول السطحة مباشرة، وادفع بسهولة. خدمة 24 ساعة في الرياض وجدة والدمام.";

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
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: BRAND_NAME_AR,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/og-image.png"],
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
        <GoogleAnalytics />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-parchment text-near-black">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
