import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { LegalLayout } from "@/components/LegalLayout";
import { TERMS_EN, TERMS_AR } from "@/content/legal";
import { BRAND_NAME_EN } from "@/brand";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: `Terms of Service — ${BRAND_NAME_EN}`,
  description: `Terms of Service for the ${BRAND_NAME_EN} platform, operating in the Kingdom of Saudi Arabia. Please read before using the service.`,
  alternates: { canonical: "/terms" },
  openGraph: {
    type: "article",
    title: `Terms of Service — ${BRAND_NAME_EN}`,
    description: `Terms of Service for the ${BRAND_NAME_EN} platform, operating in the Kingdom of Saudi Arabia.`,
    url: "https://sathtek.app/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema("/terms", "الشروط والأحكام")} />
      <LegalLayout en={TERMS_EN} ar={TERMS_AR} />
    </>
  );
}
