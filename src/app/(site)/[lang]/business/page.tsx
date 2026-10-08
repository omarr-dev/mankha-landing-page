import {
  ContentHeader,
  NoteList,
  SectionTitle,
  StepList,
} from "@/components/content/blocks";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { Button } from "@/components/ui/Button";
import { business } from "@/content/business";
import { DOWNLOAD_URL, buildWhatsAppUrl, withLocale } from "@/lib/links";
import {
  breadcrumbTrail,
  faqSchema,
  organizationSchema,
  serviceSchema,
} from "@/lib/schema";
import { SITE_URL, buildAlternates, isLocale, ogLocale } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const PATH = "/business";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const c = business[lang];
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
    twitter: { card: "summary_large_image", title: c.metaTitle, description: c.description },
  };
}

export default async function BusinessPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const c = business[lang];
  const whatsappHref = buildWhatsAppUrl(c.whatsappText);

  const cta = (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
      <Button href={whatsappHref} size="lg" showArrow className="w-full sm:w-auto">
        {c.ctaLabel}
      </Button>
      <span className="text-olive text-sm">{c.ctaNote}</span>
    </div>
  );

  return (
    <main className="bg-parchment min-h-screen">
      <JsonLd
        data={[
          organizationSchema,
          serviceSchema,
          breadcrumbTrail(lang, [{ path: PATH, label: c.label }]),
          faqSchema(c.faq),
        ]}
      />
      <Header />
      <ContentHeader locale={lang} trail={[{ label: c.label }]} />

      <header className="max-w-[820px] mx-auto px-6 pt-6 pb-10">
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-0.01em] leading-[1.15] text-near-black">
          {c.question}
        </h1>
        <p className="mt-6 text-near-black text-lg sm:text-xl leading-[1.75] font-medium">
          {c.answer}
        </p>
        <div className="mt-8">{cta}</div>
      </header>

      <section className="max-w-[820px] mx-auto px-6 py-10 border-t border-border-warm">
        <SectionTitle>{c.segmentsTitle}</SectionTitle>
        <dl className="grid sm:grid-cols-2 gap-3">
          {c.segments.map((s) => (
            <div key={s.name} className="rounded-2xl border border-border-warm bg-ivory p-5">
              <dt className="font-semibold text-near-black text-[16px] leading-snug">{s.name}</dt>
              <dd className="mt-1.5 text-olive text-[14px] leading-[1.7]">{s.text}</dd>
            </div>
          ))}
        </dl>
      </section>

      <NoteList title={c.whyTitle} notes={c.why} />
      <StepList title={c.stepsTitle} steps={c.steps} />

      <section className="max-w-[820px] mx-auto px-6 pb-4">{cta}</section>

      <Faq title={c.faqTitle} items={c.faq} />

      <section className="max-w-[820px] mx-auto px-6 py-14">
        <div className="rounded-3xl bg-near-black text-ivory px-7 py-9 sm:px-10 sm:py-11 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <p className="font-serif text-2xl sm:text-3xl font-bold leading-tight">{c.label}</p>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Button href={whatsappHref} variant="inverse" size="md" showArrow>
              {c.ctaLabel}
            </Button>
            <Button href={withLocale(DOWNLOAD_URL, lang)} variant="ghost" size="md">
              {lang === "ar" ? "اطلب سطحة الحين" : "Request a tow now"}
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
