import type { Metadata } from "next";
import { DriverTopBar } from "@/components/drivers/DriverTopBar";
import { DriverHero } from "@/components/drivers/DriverHero";
import { DriverBenefits } from "@/components/drivers/DriverBenefits";
import { DriverFinalCta } from "@/components/drivers/DriverFinalCta";
import { DriverFooter } from "@/components/drivers/DriverFooter";
import { DRIVER_REGISTER_URL } from "@/lib/links";

const REGISTER_HREF = DRIVER_REGISTER_URL;

export const metadata: Metadata = {
  title: "Drive with Mankha — Keep 100% of every trip",
  description:
    "Join Mankha as a tow truck driver. No registration fees, 0% commission, easy onboarding, and new requests delivered straight to your WhatsApp.",
  openGraph: {
    title: "Drive with Mankha — Keep 100% of every trip",
    description:
      "No registration fees. 0% commission. Trip requests on WhatsApp. Join hundreds of drivers earning on their own terms.",
    type: "website",
  },
};

export default function DriversPage() {
  return (
    <main className="min-h-screen bg-bg">
      <DriverTopBar registerHref={REGISTER_HREF} />
      <DriverHero registerHref={REGISTER_HREF} />
      <DriverBenefits />
      <DriverFinalCta registerHref={REGISTER_HREF} />
      <DriverFooter />
    </main>
  );
}
