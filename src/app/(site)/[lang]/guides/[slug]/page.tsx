import {
  AnswerLead,
  ContentCta,
  ContentHeader,
  LinkCards,
  NoteList,
  StepList,
} from "@/components/content/blocks";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import {
  CONTENT_PUBLISHED,
  CONTENT_UPDATED,
  GUIDE_SLUGS,
  guideBySlug,
  guides,
  guidesIndex,
} from "@/content/guides";
import {
  breadcrumbTrail,
  faqSchema,
  guideArticleSchema,
  howToSchema,
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
  return GUIDE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const guide = guideBySlug(slug);
  if (!isLocale(lang) || !guide) return {};
  const c = guide.content[lang];
  return {
    title: c.metaTitle,
    description: c.description,
    alternates: buildAlternates(lang, `/guides/${slug}`),
    openGraph: {
      title: c.metaTitle,
      description: c.description,
      url: `${SITE_URL}/${lang}/guides/${slug}`,
      type: "article",
      locale: ogLocale(lang),
    },
    twitter: { card: "summary_large_image", title: c.metaTitle, description: c.description },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const guide = guideBySlug(slug);
  if (!isLocale(lang) || !guide) notFound();

  const c = guide.content[lang];
  const index = guidesIndex[lang];
  const url = `${SITE_URL}/${lang}/guides/${slug}`;

  const related = guides
    .filter((g) => g.slug !== slug)
    .slice(0, 4)
    .map((g) => ({
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
            { path: "/guides", label: index.label },
            { path: `/guides/${slug}`, label: c.label },
          ]),
          guideArticleSchema({
            headline: c.question,
            description: c.description,
            url,
            locale: lang,
            datePublished: CONTENT_PUBLISHED,
            dateModified: CONTENT_UPDATED,
          }),
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
      <ContentHeader
        locale={lang}
        trail={[
          { label: index.label, href: localePath(lang, "/guides") },
          { label: c.label },
        ]}
      />

      <AnswerLead locale={lang} question={c.question} answer={c.answer} />
      <StepList title={c.stepsTitle} steps={c.steps} />
      <NoteList title={c.notesTitle} notes={c.notes} />

      <Faq title={c.faqTitle} items={c.faq} />

      <LinkCards title={index.title} items={related} />
      <ContentCta locale={lang} />
      <Footer />
    </main>
  );
}
