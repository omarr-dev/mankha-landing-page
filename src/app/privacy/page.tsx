import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { PRIVACY_EN, PRIVACY_AR } from "@/content/legal";
import { BRAND_NAME_EN } from "@/brand";

export const metadata: Metadata = {
  title: `Privacy Policy — ${BRAND_NAME_EN}`,
  description: `How ${BRAND_NAME_EN} collects, uses, and protects personal data under the Saudi Personal Data Protection Law (PDPL).`,
  alternates: {
    languages: {
      en: "/privacy",
      ar: "/privacy",
    },
  },
};

export default function PrivacyPage() {
  return <LegalLayout en={PRIVACY_EN} ar={PRIVACY_AR} />;
}
