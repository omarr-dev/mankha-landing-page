import { ContentCta, ContentHeader, LinkCards } from "@/components/content/blocks";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { guides, guidesIndex } from "@/content/guides";
import { citiesIndex } from "@/content/cities";
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
  const c = guidesIndex[lang];
  return {
    title: c.metaTitle,
    description: c.description,
    alternates: buildAlternates(lang, "/guides"),
    openGraph: {
      title: c.metaTitle,
      description: c.description,
      url: `${SITE_URL}/${lang}/guides`,
      type: "website",
      locale: ogLocale(lang),
    },
    twitter: { card: "summary_large_image", title: c.metaTitle, description: c.description },
  };
}

export default async function GuidesIndexPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const c = guidesIndex[lang];

  const cards = guides.map((g) => ({
    href: localePath(lang, `/guides/${g.slug}`),
    label: g.content[lang].question,
    description: g.content[lang].label,
  }));

  return (
    <main className="bg-parchment min-h-screen">
      <JsonLd
        data={[
          organizationSchema,
          breadcrumbTrail(lang, [{ path: "/guides", label: c.label }]),
          itemListSchema(
            guides.map((g) => ({
              name: g.content[lang].question,
              url: `${SITE_URL}/${lang}/guides/${g.slug}`,
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
        title={citiesIndex[lang].title}
        items={[
          {
            href: localePath(lang, "/cities"),
            label: citiesIndex[lang].title,
            description: citiesIndex[lang].intro,
          },
        ]}
      />

      <ContentCta locale={lang} />
      <Footer />
    </main>
  );
}
