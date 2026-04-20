import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { LegalLayout } from "@/components/LegalLayout";
import { PRIVACY_EN, PRIVACY_AR } from "@/content/legal";
import { BRAND_NAME_EN } from "@/brand";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: `Privacy Policy — ${BRAND_NAME_EN}`,
  description: `How ${BRAND_NAME_EN} collects, uses, and protects personal data under the Saudi Personal Data Protection Law (PDPL).`,
  alternates: { canonical: "/privacy" },
  openGraph: {
    type: "article",
    title: `Privacy Policy — ${BRAND_NAME_EN}`,
    description: `How ${BRAND_NAME_EN} collects, uses, and protects personal data under the Saudi PDPL.`,
    url: "https://sathtek.app/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema("/privacy", "سياسة الخصوصية")} />
      <LegalLayout en={PRIVACY_EN} ar={PRIVACY_AR} />
    </>
  );
}
