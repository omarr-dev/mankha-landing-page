"use client";

import { useI18n } from "@/i18n/context";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stepIcons = [
  // Location pin
  <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>,
  // Compare / list
  <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 3h5v5" />
    <path d="M8 3H3v5" />
    <path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3" />
    <path d="m15 9 6-6" />
  </svg>,
  // Checkmark / done
  <svg key="3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>,
];

export function HowItWorks() {
  const { t, locale, dir } = useI18n();
  const sectionRef = useScrollReveal();
  const isRtl = dir === "rtl";

  const steps = [
    { num: "1", title: t("howStep1Title"), desc: t("howStep1Desc") },
    { num: "2", title: t("howStep2Title"), desc: t("howStep2Desc") },
    { num: "3", title: t("howStep3Title"), desc: t("howStep3Desc") },
  ];

  return (
    <section
      id="how-it-works"
      className="bg-bg-muted py-20 lg:py-28"
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-lg mx-auto mb-16 reveal">
          <h2 className="text-3xl lg:text-4xl font-bold text-text tracking-tight">
            {t("howTitle")}
          </h2>
          <p className="text-text-secondary mt-3">
            {t("howSub")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-14 start-[calc(16.67%+24px)] end-[calc(16.67%+24px)] h-px border-t-2 border-dashed border-primary/20" />

          {steps.map((step, i) => (
            <div
              key={step.num}
              className="reveal relative"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="bg-bg rounded-2xl border border-border p-6 hover:shadow-lg transition-shadow relative">
                {/* Step number badge */}
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5 relative z-10">
                  {stepIcons[i]}
                </div>

                <span className="inline-block text-xs font-bold text-primary bg-primary/8 px-2.5 py-1 rounded-full mb-3">
                  {locale === "ar" ? `خطوة ${step.num}` : `Step ${step.num}`}
                </span>

                <h3 className="text-lg font-bold text-text mb-2">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Arrow between cards (desktop, not last) */}
              {i < 2 && (
                <div className={`hidden md:flex absolute top-14 ${isRtl ? "-start-4" : "-end-4"} z-10 w-8 h-8 rounded-full bg-primary text-white items-center justify-center`}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={isRtl ? "rotate-180" : ""}
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
