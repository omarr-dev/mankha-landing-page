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
