import { BRAND_NAME_AR, BRAND_NAME_EN } from "@/brand";
import { JsonLd } from "@/components/JsonLd";
import { LegalLayout } from "@/components/LegalLayout";
import { PRIVACY_AR, PRIVACY_EN } from "@/content/legal";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE_URL, buildAlternates, isLocale, type Locale } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const TITLES: Record<Locale, string> = {
  ar: `سياسة الخصوصية — ${BRAND_NAME_AR}`,
  en: `Privacy Policy — ${BRAND_NAME_EN}`,
};
const DESCRIPTIONS: Record<Locale, string> = {
  ar: `كيف يجمع ${BRAND_NAME_AR} البيانات الشخصية ويستخدمها ويحميها وفق نظام حماية البيانات الشخصية السعودي (PDPL).`,
  en: `How ${BRAND_NAME_EN} collects, uses, and protects personal data under the Saudi Personal Data Protection Law (PDPL).`,
};
const BREADCRUMB_LABEL: Record<Locale, string> = {
  ar: "سياسة الخصوصية",
  en: "Privacy Policy",
};

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
    alternates: buildAlternates(lang, "/privacy"),
    openGraph: {
      type: "article",
      title,
      description,
      url: `${SITE_URL}/${lang}/privacy`,
    },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return (
    <>
      <JsonLd data={breadcrumbSchema(lang, "/privacy", BREADCRUMB_LABEL[lang])} />
      <LegalLayout en={PRIVACY_EN} ar={PRIVACY_AR} />
    </>
  );
}
