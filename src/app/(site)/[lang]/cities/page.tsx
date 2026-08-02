import { ContentCta, ContentHeader, LinkCards } from "@/components/content/blocks";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { cities, citiesIndex } from "@/content/cities";
import { guidesIndex } from "@/content/guides";
import { breadcrumbTrail, itemListSchema, organizationSchema } from "@/lib/schema";
import {
  SITE_URL,
  buildAlternates,
  isLocale,
  localePath,
  ogLocale,
} from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const c = citiesIndex[lang];
  return {
    title: c.metaTitle,
    description: c.description,
    alternates: buildAlternates(lang, "/cities"),
    openGraph: {
      title: c.metaTitle,
      description: c.description,
      url: `${SITE_URL}/${lang}/cities`,
      type: "website",
      locale: ogLocale(lang),
    },
    twitter: { card: "summary_large_image", title: c.metaTitle, description: c.description },
  };
}

export default async function CitiesIndexPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const c = citiesIndex[lang];

  const cards = cities.map((city) => ({
    href: localePath(lang, `/cities/${city.slug}`),
    label: city.content[lang].name,
    description: city.content[lang].areas
      .slice(0, 4)
      .join(lang === "ar" ? "، " : ", "),
  }));

  return (
    <main className="bg-parchment min-h-screen">
      <JsonLd
        data={[
          organizationSchema,
          breadcrumbTrail(lang, [{ path: "/cities", label: c.label }]),
          itemListSchema(
            cities.map((city) => ({
              name: city.content[lang].name,
              url: `${SITE_URL}/${lang}/cities/${city.slug}`,
            })),
          ),
        ]}
      />
      <Header />
      <ContentHeader locale={lang} trail={[{ label: c.label }]} />

      <header className="max-w-[820px] mx-auto px-6 pt-6 pb-4">
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-0.01em] leading-[1.15] text-near-black">
          {c.title}
        </h1>
        <p className="mt-5 text-near-black text-lg leading-[1.75]">{c.intro}</p>
      </header>

      <LinkCards items={cards} />

      <LinkCards
        title={guidesIndex[lang].title}
        items={[
          {
            href: localePath(lang, "/guides"),
            label: guidesIndex[lang].label,
            description: guidesIndex[lang].intro,
          },
        ]}
      />

      <ContentCta locale={lang} />
      <Footer />
    </main>
  );
}
