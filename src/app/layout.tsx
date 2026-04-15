import type { Metadata } from "next";
import "./globals.css";
import { ClientProviders } from "@/components/ClientProviders";
import { BRAND_NAME_AR, BRAND_NAME_EN } from "@/brand";

export const metadata: Metadata = {
  metadataBase: new URL("https://sathtek.app"),
  title: `${BRAND_NAME_AR} — خدمة سطحات عند الطلب`,
  description:
    "تواصل مع سائقي سطحات موثوقين بالقرب منك. استقبل عروضاً فورية، تتبّع وصول السطحة مباشرة، وادفع بسهولة.",
  keywords: ["سطحة", "مساعدة على الطريق", "خدمة سطحات", "السعودية", BRAND_NAME_AR, BRAND_NAME_EN],
  openGraph: {
    title: `${BRAND_NAME_AR} — خدمة سطحات عند الطلب`,
    description:
      "تواصل مع سائقي سطحات موثوقين بالقرب منك. استقبل عروضاً فورية، تتبّع وصول السطحة مباشرة، وادفع بسهولة.",
    type: "website",
    locale: "ar_SA",
    siteName: BRAND_NAME_AR,
    images: [
      {
        url: "/logo.png",
        width: 864,
        height: 1210,
        alt: BRAND_NAME_AR,
      },
    ],
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
