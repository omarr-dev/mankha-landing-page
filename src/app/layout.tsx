import type { Metadata } from "next";
import "./globals.css";
import { ClientProviders } from "@/components/ClientProviders";
import { BRAND_NAME_AR, BRAND_NAME_EN } from "@/brand";

export const metadata: Metadata = {
  title: `${BRAND_NAME_EN} — On-Demand Tow Truck Service`,
  description:
    "Connect with verified tow truck drivers near you. Get instant offers, track arrival in real-time, and pay seamlessly.",
  keywords: ["tow truck", "roadside assistance", "towing service", "Saudi Arabia", "سطحة", BRAND_NAME_AR],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-parchment text-near-black">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
