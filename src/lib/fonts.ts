import { IBM_Plex_Sans_Arabic } from "next/font/google";

// Self-hosted via next/font (no render-blocking <link> to Google Fonts).
// One family covers Arabic + Latin for the whole site.
export const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-ibm-plex-arabic",
});
