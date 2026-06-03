import { BRAND_NAME_AR, BRAND_NAME_EN } from "@/brand";
import { JsonLd } from "@/components/JsonLd";
import { LegalLayout } from "@/components/LegalLayout";
import { TERMS_AR, TERMS_EN } from "@/content/legal";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE_URL, buildAlternates, isLocale, type Locale } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const TITLES: Record<Locale, string> = {
  ar: `الشروط والأحكام — ${BRAND_NAME_AR}`,
  en: `Terms of Service — ${BRAND_NAME_EN}`,
};
const DESCRIPTIONS: Record<Locale, string> = {
  ar: `الشروط والأحكام الخاصة بمنصة ${BRAND_NAME_AR} العاملة في المملكة العربية السعودية. يرجى قراءتها قبل استخدام الخدمة.`,
  en: `Terms of Service for the ${BRAND_NAME_EN} platform, operating in the Kingdom of Saudi Arabia. Please read before using the service.`,
};
const BREADCRUMB_LABEL: Record<Locale, string> = {
  ar: "الشروط والأحكام",
  en: "Terms of Service",
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
    alternates: buildAlternates(lang, "/terms"),
    openGraph: {
      type: "article",
      title,
      description,
      url: `${SITE_URL}/${lang}/terms`,
    },
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return (
    <>
      <JsonLd data={breadcrumbSchema(lang, "/terms", BREADCRUMB_LABEL[lang])} />
      <LegalLayout en={TERMS_EN} ar={TERMS_AR} />
    </>
  );
}
