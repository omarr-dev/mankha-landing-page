import { GtagScripts } from "@/components/GtagScripts";
import { TikTokPixel } from "@/components/TikTokPixel";
import { ibmPlexArabic } from "@/lib/fonts";
import { SITE_URL } from "@/lib/seo";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import "../globals.css";

// Bare, locale-agnostic redirect pages (/record, /whatsapp). They are noindex
// and keep stable URLs that the Google Ads conversion is configured against.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
};

export const viewport: Viewport = {
  themeColor: "#C96442",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RedirectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={ibmPlexArabic.variable}>
      <body className="font-sans antialiased bg-parchment text-near-black">
        <GtagScripts />
        <TikTokPixel />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
