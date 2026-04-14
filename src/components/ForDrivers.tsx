"use client";

import { useI18n } from "@/i18n/context";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { DRIVER_REGISTER_URL } from "@/lib/links";

const benefitIcons = [
  <svg key="1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>,
  <svg key="2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
  </svg>,
  <svg key="3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>,
];

export function ForDrivers() {
  const { t, dir, locale } = useI18n();
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
      className="bg-dark py-24 lg:py-32"
      ref={sectionRef}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-14 lg:gap-20 items-start">
          {/* Left — Text */}
          <div className="reveal">
            <div className="inline-flex items-center gap-2.5 mb-6">
              <span className="w-6 h-px bg-coral/70" />
              <span className="font-sans text-[11px] font-medium tracking-[0.14em] uppercase text-coral">
                {locale === "ar" ? "للسواقين" : "For drivers"}
              </span>
            </div>
            <h2 className="font-serif text-ivory text-[40px] lg:text-[52px] font-medium tracking-[-0.01em] whitespace-pre-line leading-[1.08]">
              {t("driversTitle")}
            </h2>
            <p className="font-sans text-warm-silver text-[18px] mt-7 leading-[1.6] max-w-[480px]">
              {t("driversSub")}
            </p>

            <div className="flex flex-wrap gap-3 mt-10">
              <a
                href={DRIVER_REGISTER_URL}
                className="group inline-flex items-center gap-2.5 bg-terracotta hover:bg-terracotta-hover text-ivory font-sans font-medium text-[15px] px-6 py-3.5 rounded-[12px] transition-colors"
                style={{ boxShadow: "0 0 0 1px #c96442" }}
              >
                {t("driversCtaRegister")}
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform group-hover:translate-x-0.5 ${isRtl ? "rotate-180 group-hover:-translate-x-0.5" : ""}`}
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a
                href="/drivers"
                className="inline-flex items-center bg-dark-surface hover:bg-[#3d3d3a] text-warm-silver font-sans font-medium text-[15px] px-6 py-3.5 rounded-[12px] border border-border-dark transition-colors"
              >
                {t("driversCtaLearn")}
              </a>
            </div>
          </div>

          {/* Right — Benefits */}
          <div className="space-y-3">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="reveal group bg-dark-surface rounded-[16px] p-6 flex gap-5 items-start border border-border-dark hover:border-coral/30 transition-colors"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-11 h-11 shrink-0 rounded-[10px] bg-ivory/[0.04] text-coral flex items-center justify-center border border-white/[0.06]">
                  {benefitIcons[i]}
                </div>
                <div>
                  <h3 className="font-serif text-ivory text-[20px] font-medium mb-1.5 leading-[1.25]">
                    {b.title}
                  </h3>
                  <p className="font-sans text-warm-silver text-[14.5px] leading-[1.6]">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
