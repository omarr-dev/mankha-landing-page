import type { Metadata } from "next";
import { DriverTopBar } from "@/components/drivers/DriverTopBar";
import { DriverHero } from "@/components/drivers/DriverHero";
import { DriverBenefits } from "@/components/drivers/DriverBenefits";
import { DriverFinalCta } from "@/components/drivers/DriverFinalCta";
import { DriverFooter } from "@/components/drivers/DriverFooter";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3001";
const REGISTER_HREF = `${APP_URL}/driver`;
// TODO: replace with real WhatsApp business number
const WHATSAPP_HREF = "https://wa.me/966500000000";

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
      <DriverHero registerHref={REGISTER_HREF} whatsappHref={WHATSAPP_HREF} />
      <DriverBenefits />
      <DriverFinalCta registerHref={REGISTER_HREF} whatsappHref={WHATSAPP_HREF} />
      <DriverFooter />
    </main>
  );
}
