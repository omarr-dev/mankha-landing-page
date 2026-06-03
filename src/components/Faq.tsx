import type { FaqItem } from "@/i18n/faq";

// Server-rendered, JS-free accordion (native <details>). The <h3> question text
// matches the FAQPage JSON-LD character-for-character, which AI answer engines
// reward. Visible content = structured content.
export function Faq({ title, items }: { title: string; items: FaqItem[] }) {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="bg-parchment py-20 lg:py-28"
    >
      <div className="max-w-3xl mx-auto px-6">
        <div className="inline-flex items-center gap-2.5 mb-6">
          <span className="w-6 h-px bg-terracotta/70" />
          <span className="text-terracotta text-xs font-semibold uppercase tracking-[0.14em]">
            FAQ
          </span>
        </div>
        <h2
          id="faq-title"
          className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.01em] leading-[1.1] text-near-black mb-10"
        >
          {title}
        </h2>

        <div className="divide-y divide-border-warm border-y border-border-warm">
          {items.map((item, i) => (
            <details key={i} className="group py-1">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none py-5">
                <h3 className="font-sans text-[17px] sm:text-lg font-semibold text-near-black leading-snug">
                  {item.q}
                </h3>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="shrink-0 text-terracotta transition-transform duration-200 group-open:rotate-45"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </summary>
              <p className="text-olive text-[15px] sm:text-base leading-[1.8] pb-6 max-w-2xl">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
