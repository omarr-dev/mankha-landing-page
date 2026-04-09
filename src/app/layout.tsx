import type { Metadata } from "next";
import "./globals.css";
import { ClientProviders } from "@/components/ClientProviders";

export const metadata: Metadata = {
  title: "Mankha — On-Demand Tow Truck Service",
  description:
    "Connect with verified tow truck drivers near you. Get instant offers, track arrival in real-time, and pay seamlessly.",
  keywords: ["tow truck", "roadside assistance", "towing service", "Saudi Arabia", "سطحة", "منخه"],
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
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,200;0,400;0,500;0,600;0,700;0,800;1,200;1,400&family=IBM+Plex+Sans+Arabic:wght@200;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
