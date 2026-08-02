import { Button } from "@/components/ui/Button";
import { DOWNLOAD_URL, withLocale } from "@/lib/links";
import { localePath, type Locale } from "@/lib/seo";
import Link from "next/link";

/**
 * Shared building blocks for the guide and city pages.
 *
 * These are deliberately server components with content passed in: the whole
 * point of these pages is that the answer is in the initial HTML, not painted
 * in later by the client.
 */

const CTA_COPY: Record<Locale, { lead: string; button: string }> = {
  ar: { lead: "محتاج سطحة الحين؟", button: "اطلب سطحة" },
  en: { lead: "Need a tow right now?", button: "Request a tow" },
};

const BACK_COPY: Record<Locale, string> = {
  ar: "الرئيسية",
  en: "Home",
};

/** Sits under the fixed header; renders the breadcrumb trail visibly. */
export function ContentHeader({
  locale,
  trail,
}: {
  locale: Locale;
  trail: { label: string; href?: string }[];
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="max-w-[820px] mx-auto px-6 pt-28 sm:pt-32 text-[13px] text-stone"
    >
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <li>
          <Link
            href={localePath(locale, "/")}
            className="hover:text-near-black transition-colors"
          >
            {BACK_COPY[locale]}
          </Link>
        </li>
        {trail.map((crumb) => (
          <li key={crumb.label} className="flex items-center gap-2">
            <span aria-hidden="true" className="text-ring-warm">
              /
            </span>
            {crumb.href ? (
              <Link
                href={crumb.href}
                className="hover:text-near-black transition-colors"
              >
                {crumb.label}
              </Link>
            ) : (
              <span className="text-charcoal">{crumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/**
 * The single most important block on the page: <h1> phrased as the user's own
 * question, immediately followed by a complete answer. Answer engines quote
 * the first self-contained passage after the heading, so nothing goes between.
 */
export function AnswerLead({
  locale,
  question,
  answer,
}: {
  locale: Locale;
  question: string;
  answer: string;
}) {
  return (
    <header className="max-w-[820px] mx-auto px-6 pt-6 pb-10">
      <h1 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-0.01em] leading-[1.15] text-near-black">
        {question}
      </h1>
      <p className="mt-6 text-near-black text-lg sm:text-xl leading-[1.75] font-medium">
        {answer}
      </p>
      <div className="mt-8">
        <Button href={withLocale(DOWNLOAD_URL, locale)} size="md" showArrow>
          {CTA_COPY[locale].button}
        </Button>
      </div>
    </header>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-[-0.01em] text-near-black mb-6">
      {children}
    </h2>
  );
}

/** Ordered steps — mirrors the HowTo JSON-LD exactly. */
export function StepList({
  title,
  steps,
}: {
  title: string;
  steps: { name: string; text: string }[];
}) {
  return (
    <section className="max-w-[820px] mx-auto px-6 py-10 border-t border-border-warm">
      <SectionTitle>{title}</SectionTitle>
      <ol className="space-y-7">
        {steps.map((step, i) => (
          <li key={step.name} id={`step-${i + 1}`} className="flex gap-4 scroll-mt-24">
            <span
              aria-hidden="true"
              className="shrink-0 w-8 h-8 rounded-full bg-sand text-charcoal font-semibold text-sm flex items-center justify-center mt-0.5"
            >
              {i + 1}
            </span>
            <div>
              <h3 className="font-semibold text-near-black text-[17px] leading-snug">
                {step.name}
              </h3>
              <p className="mt-1.5 text-olive text-[15px] leading-[1.8]">
                {step.text}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function NoteList({ title, notes }: { title: string; notes: string[] }) {
  return (
    <section className="max-w-[820px] mx-auto px-6 py-10 border-t border-border-warm">
      <SectionTitle>{title}</SectionTitle>
      <ul className="space-y-3">
        {notes.map((note) => (
          <li key={note} className="flex gap-3 text-olive text-[15px] leading-[1.8]">
            <span aria-hidden="true" className="text-terracotta mt-2 shrink-0">
              <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                <circle cx="3" cy="3" r="3" />
              </svg>
            </span>
            {note}
          </li>
        ))}
      </ul>
    </section>
  );
}

/** Flat chip list — used for city districts and named roads. */
export function ChipList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <h2 className="text-olive text-sm font-medium mb-3">{title}</h2>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="inline-flex items-center rounded-full bg-sand px-3 py-1 text-[13px] text-charcoal"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/** Internal-link grid for the index pages and cross-links between guides. */
export function LinkCards({
  title,
  items,
}: {
  title?: string;
  items: { href: string; label: string; description: string }[];
}) {
  return (
    <section className="max-w-[820px] mx-auto px-6 py-10 border-t border-border-warm">
      {title && <SectionTitle>{title}</SectionTitle>}
      <div className="grid sm:grid-cols-2 gap-3">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group rounded-2xl border border-border-warm bg-ivory p-5 hover:border-ring-warm hover:shadow-sm transition-all"
          >
            <span className="block font-semibold text-near-black text-[16px] leading-snug group-hover:text-terracotta transition-colors">
              {item.label}
            </span>
            <span className="mt-1.5 block text-olive text-[14px] leading-[1.7]">
              {item.description}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function ContentCta({ locale }: { locale: Locale }) {
  const c = CTA_COPY[locale];
  return (
    <section className="max-w-[820px] mx-auto px-6 py-14">
      <div className="rounded-3xl bg-near-black text-ivory px-7 py-9 sm:px-10 sm:py-11 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <p className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
          {c.lead}
        </p>
        <Button
          href={withLocale(DOWNLOAD_URL, locale)}
          variant="inverse"
          size="md"
          showArrow
          className="shrink-0"
        >
          {c.button}
        </Button>
      </div>
    </section>
  );
}
