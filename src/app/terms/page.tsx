import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { TERMS_EN, TERMS_AR } from "@/content/legal";

export const metadata: Metadata = {
  title: "Terms of Service — Mankha",
  description:
    "Terms of Service for the Mankha platform, operating in the Kingdom of Saudi Arabia. Please read before using the service.",
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
