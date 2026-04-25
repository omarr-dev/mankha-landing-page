import { AppPreview } from "@/components/AppPreview";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
// import { ForDrivers } from "@/components/ForDrivers";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
// import { HowItWorks } from "@/components/HowItWorks";
import { JsonLd } from "@/components/JsonLd";
import { TrustBlock } from "@/components/TrustBlock";
import {
  localBusinessSchema,
  organizationSchema,
  serviceSchema,
  websiteSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "سطحتك | اطلب سطحة من جوالك - تتبع مباشر ودفع إلكتروني",
  description:
    "سطحتك تطبيق سعودي لطلب السطحات. قارن العروض، اختر السائق المناسب، تابع الرحلة لحظة بلحظة، وادفع إلكترونياً. سواقين موثقين وأسعار واضحة.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      <JsonLd
        data={[
          organizationSchema,
          websiteSchema,
          localBusinessSchema,
          serviceSchema,
        ]}
      />
      <Header />
      <Hero />
      <AppPreview />
      {/* <ForDrivers /> */}
      <TrustBlock />
      <Footer />
    </main>
  );
}
