import { cities, citiesIndex } from "@/content/cities";
import { guides, guidesIndex } from "@/content/guides";
import { localePath, type Locale } from "@/lib/seo";
import Link from "next/link";

/**
 * Surfaces the guides and city pages from the home page body.
 *
 * They were reachable only from the header and footer, which is the weakest
 * possible internal link position — the home page carries whatever authority
 * this domain has, and linking the long tail from its body is what passes any
 * of it down.
 */

const COPY: Record<Locale, { eyebrow: string; title: string; more: string }> = {
  ar: {
    eyebrow: "قبل ما تحتاجها",
    title: "وش تسوي إذا…",
    more: "كل الأدلة",
  },
  en: {
    eyebrow: "Before you need it",
    title: "What to do if…",
    more: "All guides",
  },
};

export function GuideTeasers({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  const topGuides = guides.slice(0, 6);
  const cityIndex = citiesIndex[locale];

  return (
    <section className="bg-ivory border-y border-border-warm py-20 lg:py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="inline-flex items-center gap-2.5 mb-6">
          <span className="w-6 h-px bg-terracotta/70" />
          <span className="text-terracotta text-xs font-semibold uppercase tracking-[0.14em]">
            {c.eyebrow}
          </span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.01em] leading-[1.1] text-near-black mb-10">
          {c.title}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {topGuides.map((g) => (
            <Link
              key={g.slug}
              href={localePath(locale, `/guides/${g.slug}`)}
              className="group rounded-2xl border border-border-warm bg-parchment p-5 hover:border-ring-warm hover:shadow-sm transition-all"
            >
              <span className="block font-semibold text-near-black text-[16px] leading-snug group-hover:text-terracotta transition-colors">
                {g.content[locale].question}
              </span>
              <span className="mt-1.5 block text-olive text-[14px]">
                {g.content[locale].label}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link
            href={localePath(locale, "/guides")}
            className="text-terracotta hover:text-terracotta-hover font-semibold text-[15px] transition-colors"
          >
            {c.more} →
          </Link>
          <span aria-hidden="true" className="text-ring-warm">
            ·
          </span>
          <Link
            href={localePath(locale, "/cities")}
            className="text-terracotta hover:text-terracotta-hover font-semibold text-[15px] transition-colors"
          >
            {cityIndex.title} →
          </Link>
        </div>

        {/* Flat city links: crawlable anchors with the city name in the text,
            which is what "سطحة جدة" style queries resolve against. */}
        <div className="mt-8 pt-8 border-t border-border-warm flex flex-wrap gap-x-5 gap-y-2">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={localePath(locale, `/cities/${city.slug}`)}
              className="text-olive hover:text-near-black text-[14px] transition-colors"
            >
              {locale === "ar" ? "سطحة " : "Towing in "}
              {city.content[locale].name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
