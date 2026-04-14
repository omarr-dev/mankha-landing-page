import { AppPreview } from "@/components/AppPreview";
import { Footer } from "@/components/Footer";
// import { ForDrivers } from "@/components/ForDrivers";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
// import { HowItWorks } from "@/components/HowItWorks";
import { TrustBlock } from "@/components/TrustBlock";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AppPreview />
      {/* <ForDrivers /> */}
      <TrustBlock />
      <Footer />
    </main>
  );
}
