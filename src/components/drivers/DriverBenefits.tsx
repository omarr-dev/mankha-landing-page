"use client";

import { useI18n } from "@/i18n/context";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { TranslationKey } from "@/i18n/translations";

type Benefit = {
  statKey: TranslationKey;
  unitKey: TranslationKey;
  titleKey: TranslationKey;
  descKey: TranslationKey;
  icon: React.ReactNode;
};

const benefits: Benefit[] = [
  {
    statKey: "dpB1Stat",
    unitKey: "dpB1Unit",
    titleKey: "dpB1Title",
    descKey: "dpB1Desc",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
      </svg>
    ),
  },
  {
    statKey: "dpB2Stat",
    unitKey: "dpB2Unit",
    titleKey: "dpB2Title",
    descKey: "dpB2Desc",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    statKey: "dpB3Stat",
    unitKey: "dpB3Unit",
    titleKey: "dpB3Title",
    descKey: "dpB3Desc",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <polyline points="8 10 11 13 16 8" />
      </svg>
    ),
  },
  {
    statKey: "dpB4Stat",
    unitKey: "dpB4Unit",
    titleKey: "dpB4Title",
    descKey: "dpB4Desc",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.52 3.48A11.94 11.94 0 0 0 12.05 0C5.5 0 .18 5.32.18 11.87c0 2.09.55 4.13 1.6 5.93L0 24l6.35-1.66a11.86 11.86 0 0 0 5.7 1.45h.01c6.55 0 11.87-5.32 11.87-11.87 0-3.17-1.24-6.15-3.41-8.44z" />
      </svg>
    ),
  },
];

export function DriverBenefits() {
  const { t } = useI18n();
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-bg-muted">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="reveal max-w-2xl">
          <div className="text-primary text-xs font-semibold uppercase tracking-wider">
            {t("dpBenefitsEyebrow")}
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text tracking-tight leading-tight">
            {t("dpBenefitsTitle")}
          </h2>
        </div>

        <div className="mt-10 lg:mt-14 grid sm:grid-cols-2 gap-4 lg:gap-5">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="reveal group bg-bg border border-border rounded-2xl p-6 lg:p-7 hover:border-primary/30 hover:shadow-[0_12px_40px_-16px_rgba(10,123,111,0.25)] transition-all"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                  {b.icon}
                </div>
                <div className="text-end">
                  <div className="text-4xl lg:text-5xl font-extrabold text-primary leading-none tracking-tight tabular-nums">
                    {t(b.statKey)}
                  </div>
                  <div className="text-[11px] font-medium text-text-tertiary uppercase tracking-wider mt-1">
                    {t(b.unitKey)}
                  </div>
                </div>
              </div>

              <h3 className="mt-6 text-lg font-bold text-text">{t(b.titleKey)}</h3>
              <p className="mt-1.5 text-text-secondary text-[15px] leading-relaxed">
                {t(b.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
