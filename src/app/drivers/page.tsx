import { DriverBenefits } from "@/components/drivers/DriverBenefits";
import { DriverFinalCta } from "@/components/drivers/DriverFinalCta";
import { DriverHero } from "@/components/drivers/DriverHero";
import { DriverTopBar } from "@/components/drivers/DriverTopBar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { DRIVER_REGISTER_URL } from "@/lib/links";
import { BRAND_NAME_AR } from "@/brand";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";
import type { Metadata } from "next";

const REGISTER_HREF = DRIVER_REGISTER_URL;

const DRIVERS_TITLE = `انضم سائق سطحة — اكسب مع ${BRAND_NAME_AR} بدون عمولة`;
const DRIVERS_DESCRIPTION = `انضم إلى ${BRAND_NAME_AR} كسائق سطحة في السعودية. بدون رسوم تسجيل، عمولة 0%، طلبات مباشرة عبر واتساب، واحتفظ بـ 100% من كل رحلة سطحة.`;

export const metadata: Metadata = {
  title: DRIVERS_TITLE,
  description: DRIVERS_DESCRIPTION,
  alternates: { canonical: "/drivers" },
  robots: { index: true, follow: true },
  openGraph: {
    title: DRIVERS_TITLE,
    description: DRIVERS_DESCRIPTION,
    url: "https://sathtek.app/drivers",
    type: "website",
    locale: "ar_SA",
    siteName: BRAND_NAME_AR,
    images: [
      {
        url: "/og-image-drivers.png",
        width: 1200,
        height: 630,
        alt: BRAND_NAME_AR,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DRIVERS_TITLE,
    description: DRIVERS_DESCRIPTION,
    images: ["/og-image-drivers.png"],
  },
};

export default function DriversPage() {
  return (
    <main className="min-h-screen bg-bg">
      <JsonLd
        data={[
          organizationSchema,
          breadcrumbSchema("/drivers", "للسائقين"),
        ]}
      />
      <DriverTopBar registerHref={REGISTER_HREF} />
      <DriverHero registerHref={REGISTER_HREF} />
      <DriverBenefits />
      <DriverFinalCta registerHref={REGISTER_HREF} />
      <Footer />
    </main>
  );
}
