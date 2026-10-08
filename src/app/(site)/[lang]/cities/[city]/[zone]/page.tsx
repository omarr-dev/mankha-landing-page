import {
  AnswerLead,
  ChipList,
  ContentCta,
  ContentHeader,
  LinkCards,
  SectionTitle,
} from "@/components/content/blocks";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { cityBySlug, citiesIndex } from "@/content/cities";
import { prices } from "@/content/prices";
import {
  RIYADH_ZONE_SLUGS,
  riyadhZones,
  zoneBySlug,
  zoneHeading,
} from "@/content/riyadhZones";
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

// Zones exist for Riyadh only — the one city with enough volume to give each
// zone its own numbers. Anything else 404s rather than rendering a template.
const ZONE_CITY = "riyadh";

export function generateStaticParams() {
  return RIYADH_ZONE_SLUGS.map((zone) => ({ city: ZONE_CITY, zone }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; city: string; zone: string }>;
}): Promise<Metadata> {
  const { lang, city, zone } = await params;
  const entry = zoneBySlug(zone);
  if (!isLocale(lang) || city !== ZONE_CITY || !entry) return {};
  const c = entry.content[lang];
  const path = `/cities/${city}/${zone}`;
  return {
    title: c.metaTitle,
    description: c.description,
    alternates: buildAlternates(lang, path),
    openGraph: {
      title: c.metaTitle,
      description: c.description,
      url: `${SITE_URL}/${lang}${path}`,
      type: "website",
      locale: ogLocale(lang),
    },
    twitter: { card: "summary_large_image", title: c.metaTitle, description: c.description },
  };
}

export default async function RiyadhZonePage({
  params,
}: {
  params: Promise<{ lang: string; city: string; zone: string }>;
}) {
  const { lang, city, zone } = await params;
  const entry = zoneBySlug(zone);
  const parent = cityBySlug(city);
  if (!isLocale(lang) || city !== ZONE_CITY || !entry || !parent) notFound();

  const c = entry.content[lang];
  const cityName = parent.content[lang].name;
  const path = `/cities/${city}/${zone}`;
  const url = `${SITE_URL}/${lang}${path}`;

  const siblings = riyadhZones
    .filter((z) => z.slug !== zone)
    .map((z) => ({
      href: localePath(lang, `/cities/${city}/${z.slug}`),
      label: lang === "ar" ? `سطحة ${z.content.ar.name}` : `Towing in ${z.content.en.name}`,
      description: z.content[lang].areas.slice(0, 3).join(lang === "ar" ? "، " : ", "),
    }));

  const related = [
    {
      href: localePath(lang, "/prices"),
      label: prices[lang].question,
      description: prices[lang].label,
    },
    {
      href: localePath(lang, `/cities/${city}`),
      label: lang === "ar" ? `سطحة ${cityName}` : `Towing in ${cityName}`,
      description: parent.content[lang].areas.slice(0, 3).join(lang === "ar" ? "، " : ", "),
    },
  ];

  return (
    <main className="bg-parchment min-h-screen">
      <JsonLd
        data={[
          organizationSchema,
          breadcrumbTrail(lang, [
            { path: "/cities", label: citiesIndex[lang].label },
            { path: `/cities/${city}`, label: cityName },
            { path, label: c.name },
          ]),
          cityServiceSchema({
            cityName: c.name,
            schemaName: "Riyadh",
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
          { label: citiesIndex[lang].label, href: localePath(lang, "/cities") },
          { label: cityName, href: localePath(lang, `/cities/${city}`) },
          { label: c.name },
        ]}
      />

      <AnswerLead locale={lang} question={zoneHeading(lang, c.name)} answer={c.answer} />

      <section className="max-w-[820px] mx-auto px-6 py-10 border-t border-border-warm">
        <SectionTitle>{c.statsTitle}</SectionTitle>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-7">
          {c.stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block font-serif text-3xl font-bold text-terracotta leading-none">
                  {s.value}
                </span>
                <span className="mt-2 block text-olive text-sm">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="max-w-[820px] mx-auto px-6 py-10 border-t border-border-warm space-y-8">
        <ChipList title={c.areasTitle} items={c.areas} />
        <ChipList title={c.roadsTitle} items={c.roads} />
      </section>

      <section className="max-w-[820px] mx-auto px-6 py-10 border-t border-border-warm">
        <SectionTitle>{c.destinationsTitle}</SectionTitle>
        <dl className="space-y-6">
          {c.destinations.map((d) => (
            <div key={d.name}>
              <dt className="font-semibold text-near-black text-[17px] leading-snug">{d.name}</dt>
              <dd className="mt-1.5 text-olive text-[15px] leading-[1.8]">{d.text}</dd>
            </div>
          ))}
        </dl>
      </section>

      <Faq title={c.faqTitle} items={c.faq} />

      <LinkCards items={related} />
      <LinkCards
        title={lang === "ar" ? "مناطق الرياض الثانية" : "Other parts of Riyadh"}
        items={siblings}
      />
      <ContentCta locale={lang} />
      <Footer />
    </main>
  );
}
