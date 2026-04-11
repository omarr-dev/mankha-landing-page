"use client";

import { useI18n } from "@/i18n/context";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const benefitIcons = [
  // Calendar / schedule
  <svg key="1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>,
  // Wallet / income
  <svg key="2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
  </svg>,
  // Rocket / onboarding
  <svg key="3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>,
];

export function ForDrivers() {
  const { t, dir } = useI18n();
  const sectionRef = useScrollReveal();
  const isRtl = dir === "rtl";

  const benefits = [
    { title: t("driversBenefit1"), desc: t("driversBenefit1Desc") },
    { title: t("driversBenefit2"), desc: t("driversBenefit2Desc") },
    { title: t("driversBenefit3"), desc: t("driversBenefit3Desc") },
  ];

  return (
    <section
      id="for-drivers"
      className="bg-bg-muted py-20 lg:py-28"
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Left — Text */}
          <div className="reveal">
            <h2 className="text-3xl lg:text-4xl font-bold text-text tracking-tight whitespace-pre-line leading-snug">
              {t("driversTitle")}
            </h2>
            <p className="text-text-secondary mt-4 leading-relaxed max-w-md">
              {t("driversSub")}
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="#download"
                className="group inline-flex items-center gap-2.5 bg-primary hover:bg-primary-dark text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                {t("driversCtaRegister")}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform group-hover:translate-x-0.5 ${isRtl ? "rotate-180 group-hover:-translate-x-0.5" : ""}`}
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center text-text hover:text-primary text-sm font-semibold px-5 py-3.5 rounded-full border border-border hover:border-primary/30 transition-all"
              >
                {t("driversCtaLearn")}
              </a>
            </div>
          </div>

          {/* Right — Benefits */}
          <div className="space-y-4">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="reveal group bg-bg border border-border rounded-2xl p-5 flex gap-4 items-start hover:shadow-md hover:border-border-hover transition-all"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-10 h-10 shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  {benefitIcons[i]}
                </div>
                <div>
                  <h3 className="text-base font-bold text-text mb-1">{b.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
