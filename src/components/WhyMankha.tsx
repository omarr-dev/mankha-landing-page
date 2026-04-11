"use client";

import { useI18n } from "@/i18n/context";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { type ReactNode } from "react";

const icons: ReactNode[] = [
  <svg key="0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>,
  <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>,
  <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12h3" /><path d="M19 12h3" /><path d="M12 2v3" /><path d="M12 19v3" />
    <circle cx="12" cy="12" r="7" /><circle cx="12" cy="12" r="3" />
  </svg>,
  <svg key="3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>,
  <svg key="4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>,
];

export function WhyMankha() {
  const { t } = useI18n();
  const sectionRef = useScrollReveal();

  const features = [
    { title: t("whyFast"), desc: t("whyFastDesc") },
    { title: t("whyPrice"), desc: t("whyPriceDesc") },
    { title: t("whyTracking"), desc: t("whyTrackingDesc") },
    { title: t("whyVerified"), desc: t("whyVerifiedDesc") },
    { title: t("whyAvailable"), desc: t("whyAvailableDesc") },
  ];

  return (
    <section
      id="why-mankha"
      className="bg-bg py-20 lg:py-28"
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header — left aligned */}
        <div className="max-w-md mb-14 reveal">
          <h2 className="text-3xl lg:text-4xl font-bold text-text tracking-tight">
            {t("whyTitle")}
          </h2>
          <p className="text-text-secondary mt-3">
            {t("whySub")}
          </p>
        </div>

        {/* Feature list — clean rows */}
        <div className="space-y-0 border-t border-border">
          {features.map((feat, i) => (
            <div
              key={i}
              className="reveal group grid grid-cols-1 sm:grid-cols-[auto_1fr_1fr] items-start sm:items-center gap-4 sm:gap-8 py-7 border-b border-border hover:bg-bg-muted/50 transition-colors px-2 sm:px-4 -mx-2 sm:-mx-4 rounded-lg"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Number + icon */}
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold text-text-tertiary tabular-nums w-5">
                  0{i + 1}
                </span>
                <div className="w-11 h-11 rounded-xl bg-primary/8 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  {icons[i]}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-text">
                {feat.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary text-sm leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
