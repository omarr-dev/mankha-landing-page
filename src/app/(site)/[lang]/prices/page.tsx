import {
  AnswerLead,
  ContentCta,
  ContentHeader,
  LinkCards,
  NoteList,
  SectionTitle,
} from "@/components/content/blocks";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { BRAND_NAME_AR } from "@/brand";
import { cities } from "@/content/cities";
import { PRICES_UPDATED, prices } from "@/content/prices";
import {
  breadcrumbTrail,
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

const PATH = "/prices";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const c = prices[lang];
  return {
    title: c.metaTitle,
    description: c.description,
    alternates: buildAlternates(lang, PATH),
    openGraph: {
      title: c.metaTitle,
      description: c.description,
      url: `${SITE_URL}/${lang}${PATH}`,
      type: "article",
      locale: ogLocale(lang),
    },
    twitter: {
      card: "summary_large_image",
      title: c.metaTitle,
      description: c.description,
    },
  };
}

export default async function PricesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const c = prices[lang];
  const url = `${SITE_URL}/${lang}${PATH}`;

  const cityCards = cities.map((city) => ({
    href: localePath(lang, `/cities/${city.slug}`),
    label:
      lang === "ar"
        ? `سطحة ${city.content.ar.name}`
        : `Towing in ${city.content.en.name}`,
    description: city.content[lang].areas
      .slice(0, 3)
      .join(lang === "ar" ? "، " : ", "),
  }));

  // The Riyadh range the answer quotes, as structured data an answer engine
  // can lift without parsing prose. Service rather than Product: no rich
  // result is claimed, it only makes the numbers machine-readable.
  const priceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: lang === "ar" ? `سطحة داخل الرياض — ${BRAND_NAME_AR}` : "Tow truck inside Riyadh — Wire",
    serviceType: "خدمة سطحات",
    url,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "City", name: "Riyadh" },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "SAR",
      lowPrice: 100,
      highPrice: 175,
      offerCount: 169,
    },
  };

  return (
    <main className="bg-parchment min-h-screen">
      <JsonLd
        data={[
          organizationSchema,
          breadcrumbTrail(lang, [{ path: PATH, label: c.label }]),
          priceSchema,
          faqSchema(c.faq),
        ]}
      />
      <Header />
      <ContentHeader locale={lang} trail={[{ label: c.label }]} />

      <AnswerLead locale={lang} question={c.question} answer={c.answer} />

      <section className="max-w-[820px] mx-auto px-6 py-10 border-t border-border-warm">
        <SectionTitle>{c.tableTitle}</SectionTitle>
        <div className="overflow-hidden rounded-2xl border border-border-warm bg-ivory">
          <table className="w-full text-start text-[15px]">
            <thead className="bg-sand text-charcoal text-[13px]">
              <tr>
                <th scope="col" className="px-4 py-3 text-start font-medium">
                  {c.columns.trip}
                </th>
                <th scope="col" className="px-4 py-3 text-start font-medium">
                  {c.columns.range}
                </th>
                <th scope="col" className="px-4 py-3 text-start font-medium">
                  {c.columns.median}
                </th>
              </tr>
            </thead>
            <tbody>
              {c.rows.map((row) => (
                <tr key={row.trip} className="border-t border-border-warm align-top">
                  <th scope="row" className="px-4 py-3.5 text-start font-normal">
                    <span className="block font-semibold text-near-black leading-snug">
                      {row.trip}
                    </span>
                    <span className="mt-1 block text-stone text-[13px]">
                      {row.detail}
                    </span>
                  </th>
                  <td className="px-4 py-3.5 text-near-black whitespace-nowrap">
                    {row.range}
                  </td>
                  <td className="px-4 py-3.5 font-semibold text-terracotta whitespace-nowrap">
                    {row.median}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-stone text-[13px] leading-[1.8]">{c.tableNote}</p>
      </section>

      <section className="max-w-[820px] mx-auto px-6 py-10 border-t border-border-warm">
        <SectionTitle>{c.factorsTitle}</SectionTitle>
        <dl className="space-y-6">
          {c.factors.map((f) => (
            <div key={f.name}>
              <dt className="font-semibold text-near-black text-[17px] leading-snug">
                {f.name}
              </dt>
              <dd className="mt-1.5 text-olive text-[15px] leading-[1.8]">{f.text}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="max-w-[820px] mx-auto px-6 py-10 border-t border-border-warm">
        <SectionTitle>{c.servicesTitle}</SectionTitle>
        <dl className="grid sm:grid-cols-2 gap-3">
          {c.services.map((s) => (
            <div
              key={s.name}
              className="rounded-2xl border border-border-warm bg-ivory p-5"
            >
              <dt className="font-semibold text-near-black text-[16px] leading-snug">
                {s.name}
              </dt>
              <dd className="mt-1.5 text-olive text-[14px] leading-[1.7]">{s.text}</dd>
            </div>
          ))}
        </dl>
      </section>

      <NoteList title={c.tipsTitle} notes={c.tips} />

      <section className="max-w-[820px] mx-auto px-6 py-10 border-t border-border-warm">
        <SectionTitle>{c.methodTitle}</SectionTitle>
        <p className="text-olive text-[15px] leading-[1.8]">{c.method}</p>
        <p className="mt-3 text-stone text-[13px]">
          {lang === "ar" ? "آخر تحديث: " : "Last updated: "}
          <time dateTime={PRICES_UPDATED}>{PRICES_UPDATED}</time>
        </p>
      </section>

      <Faq title={c.faqTitle} items={c.faq} />

      <LinkCards
        title={lang === "ar" ? "اطلب سطحة في مدينتك" : "Request a tow in your city"}
        items={cityCards}
      />
      <ContentCta locale={lang} />
      <Footer />
    </main>
  );
}
