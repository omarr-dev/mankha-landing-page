"use client";

import { useI18n } from "@/i18n/context";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stepIcons = [
  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>,
  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10h-7" /><path d="M21 6h-7" /><path d="M21 14h-7" /><path d="M21 18h-7" />
    <rect x="3" y="5" width="7" height="14" rx="1.5" />
  </svg>,
  <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>,
];

export function HowItWorks() {
  const { t, locale } = useI18n();
  const sectionRef = useScrollReveal();

  const steps = [
    { num: "01", title: t("howStep1Title"), desc: t("howStep1Desc") },
    { num: "02", title: t("howStep2Title"), desc: t("howStep2Desc") },
    { num: "03", title: t("howStep3Title"), desc: t("howStep3Desc") },
  ];

  return (
    <section
      id="how-it-works"
      className="bg-parchment py-24 lg:py-32"
      ref={sectionRef}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-2xl mb-16 lg:mb-20 reveal">
          <div className="inline-flex items-center gap-2.5 mb-5">
            <span className="w-6 h-px bg-terracotta/70" />
            <span className="font-sans text-[11px] font-medium tracking-[0.14em] uppercase text-terracotta">
              {locale === "ar" ? "الطريقة" : "The flow"}
            </span>
          </div>
          <h2 className="font-serif text-near-black text-[40px] lg:text-[52px] font-medium leading-[1.1] tracking-[-0.01em]">
            {t("howTitle")}
          </h2>
          <p className="font-sans text-olive text-[18px] mt-5 leading-[1.6] max-w-lg">
            {t("howSub")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="reveal"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <article className="h-full bg-ivory rounded-[16px] p-7 lg:p-8 border border-border-warm hover:border-terracotta/30 transition-colors">
                {/* Icon + number row */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-11 h-11 rounded-[10px] bg-parchment text-terracotta flex items-center justify-center border border-border-cream">
                    {stepIcons[i]}
                  </div>
                  <span className="font-serif text-[28px] text-stone tabular-nums">
                    {step.num}
                  </span>
                </div>

                <h3 className="font-serif text-near-black text-[24px] font-medium leading-[1.2] mb-3">
                  {step.title}
                </h3>
                <p className="font-sans text-olive text-[15px] leading-[1.6]">
                  {step.desc}
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
