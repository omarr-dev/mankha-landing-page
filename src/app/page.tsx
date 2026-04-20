import type { Metadata } from "next";
import { AppPreview } from "@/components/AppPreview";
import { Footer } from "@/components/Footer";
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
  title: "سطحتك — سطحة 24 ساعة قريبة منك في السعودية | الرياض، جدة، الدمام",
  description:
    "اطلب سطحة الآن عبر تطبيق سطحتك. أقرب سائق سطحة موثوق، أسعار واضحة، تتبع مباشر، ومساعدة على الطريق 24 ساعة في الرياض وجدة والدمام وجميع مدن المملكة.",
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
