import { BRAND_NAME_AR, BRAND_NAME_EN } from "@/brand";
import { DriverBenefits } from "@/components/drivers/DriverBenefits";
import { DriverFinalCta } from "@/components/drivers/DriverFinalCta";
import { DriverHero } from "@/components/drivers/DriverHero";
import { DriverTopBar } from "@/components/drivers/DriverTopBar";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { driverFaq } from "@/i18n/faq";
import { DRIVER_REGISTER_URL } from "@/lib/links";
import { breadcrumbSchema, faqSchema, organizationSchema } from "@/lib/schema";
import { SITE_URL, buildAlternates, isLocale, ogLocale, type Locale } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const REGISTER_HREF = DRIVER_REGISTER_URL;

const TITLES: Record<Locale, string> = {
  ar: `انضم سائق سطحة — طلبات أكثر ودخل أعلى مع ${BRAND_NAME_AR}`,
  en: `Become a tow truck driver — more orders, higher income with ${BRAND_NAME_EN}`,
};
const DESCRIPTIONS: Record<Locale, string> = {
  ar: `انضم إلى ${BRAND_NAME_AR} كسائق سطحة في السعودية. تسجيل مجاني، طلبات مباشرة عبر واتساب، وأنت تحدد سعرك على كل رحلة.`,
  en: `Join ${BRAND_NAME_EN} as a tow truck driver in Saudi Arabia. Free to register, new requests straight to WhatsApp, and you set your own price on every trip.`,
};
const BREADCRUMB_LABEL: Record<Locale, string> = { ar: "للسائقين", en: "For Drivers" };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const title = TITLES[lang];
  const description = DESCRIPTIONS[lang];
  return {
    title,
    description,
    alternates: buildAlternates(lang, "/drivers"),
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${lang}/drivers`,
      type: "website",
      locale: ogLocale(lang),
      siteName: BRAND_NAME_AR,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function DriversPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const faq = driverFaq[lang];

  return (
    <main className="min-h-screen bg-bg">
      <JsonLd
        data={[
          organizationSchema,
          breadcrumbSchema(lang, "/drivers", BREADCRUMB_LABEL[lang]),
          faqSchema(faq.items),
        ]}
      />
      <DriverTopBar registerHref={REGISTER_HREF} />
      <DriverHero registerHref={REGISTER_HREF} />
      <DriverBenefits />
      <Faq title={faq.title} items={faq.items} />
      <DriverFinalCta registerHref={REGISTER_HREF} />
      <Footer />
    </main>
  );
}
