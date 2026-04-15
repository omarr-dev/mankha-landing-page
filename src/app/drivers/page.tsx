import { DriverBenefits } from "@/components/drivers/DriverBenefits";
import { DriverFinalCta } from "@/components/drivers/DriverFinalCta";
import { DriverHero } from "@/components/drivers/DriverHero";
import { DriverTopBar } from "@/components/drivers/DriverTopBar";
import { Footer } from "@/components/Footer";
import { DRIVER_REGISTER_URL } from "@/lib/links";
import { BRAND_NAME_AR } from "@/brand";
import type { Metadata } from "next";

const REGISTER_HREF = DRIVER_REGISTER_URL;

export const metadata: Metadata = {
  title: `قُد مع ${BRAND_NAME_AR} — احتفظ بـ 100% من كل رحلة`,
  description: `انضم إلى ${BRAND_NAME_AR} كسائق سطحة. بدون رسوم تسجيل، عمولة 0%، تسجيل سهل، وطلبات جديدة تصلك مباشرة على واتساب.`,
  openGraph: {
    title: `قُد مع ${BRAND_NAME_AR} — احتفظ بـ 100% من كل رحلة`,
    description:
      "بدون رسوم تسجيل. عمولة 0%. طلبات الرحلات عبر واتساب. انضم إلى مئات السائقين الذين يكسبون بشروطهم.",
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

export default function DriversPage() {
  return (
    <main className="min-h-screen bg-bg">
      <DriverTopBar registerHref={REGISTER_HREF} />
      <DriverHero registerHref={REGISTER_HREF} />
      <DriverBenefits />
      <DriverFinalCta registerHref={REGISTER_HREF} />
      <Footer />
    </main>
  );
}
