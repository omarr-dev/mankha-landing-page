import { GtagScripts } from "@/components/GtagScripts";
import { TikTokPixel } from "@/components/TikTokPixel";
import { ibmPlexArabic } from "@/lib/fonts";
import { SITE_URL } from "@/lib/seo";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import "../globals.css";

// Standalone bio-link page (/links) — the single URL that lives in the
// Instagram / TikTok profiles. Locale-agnostic on purpose: one shareable URL,
// language switched in-page (see LinksClient), so a bio never has to change.
// Same palette as the marketing site: this reads as Wire, not as a template.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
};

export const viewport: Viewport = {
  themeColor: "#f5f4ed",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

// One entrance fade and the logo stroke drawing itself. Nothing else moves —
// decoration is what makes a links page look generated.
const KEYFRAMES = `
@keyframes wire-in {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes wire-draw {
  from { stroke-dashoffset: 520; }
  to   { stroke-dashoffset: 0; }
}
.wire-in { animation: wire-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) both; }
.wire-draw { stroke-dasharray: 520; animation: wire-draw 0.9s cubic-bezier(0.65, 0, 0.35, 1) 0.1s both; }
@media (prefers-reduced-motion: reduce) {
  .wire-in, .wire-draw {
    animation: none !important;
    opacity: 1 !important;
    stroke-dashoffset: 0 !important;
  }
}
`;

export default function LinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={ibmPlexArabic.variable}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: KEYFRAMES }} />
      </head>
      <body className="font-sans antialiased">
        <GtagScripts />
        <TikTokPixel />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
