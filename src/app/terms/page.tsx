import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { TERMS_EN, TERMS_AR } from "@/content/legal";
import { BRAND_NAME_EN } from "@/brand";

export const metadata: Metadata = {
  title: `Terms of Service — ${BRAND_NAME_EN}`,
  description: `Terms of Service for the ${BRAND_NAME_EN} platform, operating in the Kingdom of Saudi Arabia. Please read before using the service.`,
  alternates: {
    languages: {
      en: "/terms",
      ar: "/terms",
    },
  },
};

export default function TermsPage() {
  return <LegalLayout en={TERMS_EN} ar={TERMS_AR} />;
}
