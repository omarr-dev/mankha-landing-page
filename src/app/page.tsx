import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyMankha } from "@/components/WhyMankha";
import { ForDrivers } from "@/components/ForDrivers";
import { AppPreview } from "@/components/AppPreview";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <HowItWorks />
      <WhyMankha />
      <ForDrivers />
      <AppPreview />
      <Testimonials />
      <Footer />
    </main>
  );
}
