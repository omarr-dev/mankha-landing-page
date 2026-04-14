import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { PRIVACY_EN, PRIVACY_AR } from "@/content/legal";

export const metadata: Metadata = {
  title: "Privacy Policy — Mankha",
  description:
    "How Mankha collects, uses, and protects personal data under the Saudi Personal Data Protection Law (PDPL).",
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
