import {
  AnswerLead,
  ChipList,
  ContentCta,
  ContentHeader,
  LinkCards,
} from "@/components/content/blocks";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import {
  CITY_SLUGS,
  cities,
  citiesIndex,
  cityBySlug,
  cityHeading,
} from "@/content/cities";
import { guides, guidesIndex } from "@/content/guides";
import {
  breadcrumbTrail,
  cityServiceSchema,
  faqSchema,
  organizationSchema,
} from "@/lib/schema";
import {
  SITE_URL,
  buildAlternates,
  isLocale,
  localePath,
  ogLocale,
} from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return CITY_SLUGS.map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; city: string }>;
}): Promise<Metadata> {
  const { lang, city } = await params;
  const entry = cityBySlug(city);
  if (!isLocale(lang) || !entry) return {};
  const c = entry.content[lang];
  return {
    title: c.metaTitle,
    description: c.description,
    alternates: buildAlternates(lang, `/cities/${city}`),
    openGraph: {
      title: c.metaTitle,
      description: c.description,
      url: `${SITE_URL}/${lang}/cities/${city}`,
      type: "website",
      locale: ogLocale(lang),
    },
    twitter: { card: "summary_large_image", title: c.metaTitle, description: c.description },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ lang: string; city: string }>;
}) {
  const { lang, city } = await params;
  const entry = cityBySlug(city);
  if (!isLocale(lang) || !entry) notFound();

  const c = entry.content[lang];
  const index = citiesIndex[lang];
  const url = `${SITE_URL}/${lang}/cities/${city}`;

  const otherCities = cities
    .filter((x) => x.slug !== city)
    .slice(0, 4)
    .map((x) => ({
      href: localePath(lang, `/cities/${x.slug}`),
      label: x.content[lang].name,
      description: x.content[lang].areas
        .slice(0, 3)
        .join(lang === "ar" ? "، " : ", "),
    }));

  const guideCards = guides.slice(0, 4).map((g) => ({
    href: localePath(lang, `/guides/${g.slug}`),
    label: g.content[lang].question,
    description: g.content[lang].label,
  }));

  return (
    <main className="bg-parchment min-h-screen">
      <JsonLd
        data={[
          organizationSchema,
          breadcrumbTrail(lang, [
            { path: "/cities", label: index.label },
            { path: `/cities/${city}`, label: c.name },
          ]),
          cityServiceSchema({
            cityName: c.name,
            schemaName: entry.schemaName,
            url,
            description: c.answer,
          }),
          faqSchema(c.faq),
        ]}
      />
      <Header />
      <ContentHeader
        locale={lang}
        trail={[
          { label: index.label, href: localePath(lang, "/cities") },
          { label: c.name },
        ]}
      />

      <AnswerLead
        locale={lang}
        question={cityHeading(lang, c.name)}
        answer={c.answer}
      />

      <section className="max-w-[820px] mx-auto px-6 py-10 border-t border-border-warm space-y-8">
        <ChipList title={c.areasTitle} items={c.areas} />
        <ChipList title={c.roadsTitle} items={c.roads} />
      </section>

      <Faq title={c.faqTitle} items={c.faq} />

      <LinkCards title={guidesIndex[lang].title} items={guideCards} />
      <LinkCards title={index.title} items={otherCities} />
      <ContentCta locale={lang} />
      <Footer />
    </main>
  );
}
