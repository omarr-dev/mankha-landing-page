import {
  ContentCta,
  ContentHeader,
  LinkCards,
  StepList,
} from "@/components/content/blocks";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { Button } from "@/components/ui/Button";
import { cities } from "@/content/cities";
import { guides } from "@/content/guides";
import { nearest } from "@/content/nearest";
import { DOWNLOAD_URL, withLocale } from "@/lib/links";
import {
  breadcrumbTrail,
  faqSchema,
  howToSchema,
  organizationSchema,
  serviceSchema,
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

const PATH = "/nearest-tow-truck";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const c = nearest[lang];
  return {
    title: c.metaTitle,
    description: c.description,
    alternates: buildAlternates(lang, PATH),
    openGraph: {
      title: c.metaTitle,
      description: c.description,
      url: `${SITE_URL}/${lang}${PATH}`,
      type: "website",
      locale: ogLocale(lang),
    },
    twitter: {
      card: "summary_large_image",
      title: c.metaTitle,
      description: c.description,
    },
  };
}

export default async function NearestTowTruckPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const c = nearest[lang];
  const url = `${SITE_URL}/${lang}${PATH}`;
  const downloadHref = withLocale(DOWNLOAD_URL, lang);

  const cityCards = cities.slice(0, 6).map((city) => ({
    href: localePath(lang, `/cities/${city.slug}`),
    label:
      lang === "ar"
        ? `سطحة ${city.content.ar.name}`
        : `Towing in ${city.content.en.name}`,
    description: city.content[lang].areas
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
          serviceSchema,
          breadcrumbTrail(lang, [{ path: PATH, label: c.label }]),
          howToSchema({
            name: c.question,
            description: c.answer,
            url,
            steps: c.steps,
          }),
          faqSchema(c.faq),
        ]}
      />
      <Header />
      <ContentHeader locale={lang} trail={[{ label: c.label }]} />

      {/* The action sits directly under the answer: 91% of this traffic is on
          a phone, and the searcher is usually stopped at the roadside. */}
      <header className="max-w-[820px] mx-auto px-6 pt-6 pb-10">
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-0.01em] leading-[1.15] text-near-black">
          {c.question}
        </h1>
        <p className="mt-6 text-near-black text-lg sm:text-xl leading-[1.75] font-medium">
          {c.answer}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
          <Button href={downloadHref} size="lg" showArrow className="w-full sm:w-auto">
            {c.ctaLabel}
          </Button>
          <span className="text-olive text-sm">{c.ctaNote}</span>
        </div>
      </header>

      <StepList title={c.stepsTitle} steps={c.steps} />

      <section className="max-w-[820px] mx-auto px-6 py-10 border-t border-border-warm">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-[-0.01em] text-near-black mb-5">
          {c.insightTitle}
        </h2>
        <p className="text-olive text-[15px] sm:text-base leading-[1.8] mb-6">
          {c.insightBody}
        </p>
        <ul className="space-y-3">
          {c.insightPoints.map((p) => (
            <li key={p} className="flex gap-3 text-olive text-[15px] leading-[1.8]">
              <span aria-hidden="true" className="text-terracotta mt-2 shrink-0">
                <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                  <circle cx="3" cy="3" r="3" />
                </svg>
              </span>
              {p}
            </li>
          ))}
        </ul>
      </section>

      <Faq title={c.faqTitle} items={c.faq} />

      <LinkCards items={cityCards} />
      <LinkCards items={guideCards} />
      <ContentCta locale={lang} />
      <Footer />
    </main>
  );
}
