"use client";

import { useI18n } from "@/i18n/context";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { DOWNLOAD_URL } from "@/lib/links";
import { HeroMapMockup } from "./HeroMapMockup";

export function Hero() {
  const { t, dir } = useI18n();
  const isRtl = dir === "rtl";
  const sectionRef = useScrollReveal();

  const promises = [
    t("heroPromise1"),
    t("heroPromise2"),
    t("heroPromise3"),
    t("heroPromise4"),
  ];

  return (
    <section
      className="relative bg-parchment pt-36 pb-24 lg:pt-44 lg:pb-32 overflow-hidden"
      ref={sectionRef}
    >
      <div className="relative max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-14 lg:gap-20 items-center">
          {/* Left content */}
          <div className="reveal">
            <h1 className="font-serif text-near-black text-[44px] sm:text-[56px] lg:text-[68px] font-bold leading-[1.05] tracking-[-0.02em]">
              {t("heroHeadline").split("\n").map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h1>

            <p className="font-sans text-olive text-[18px] sm:text-[19px] mt-7 leading-[1.6] max-w-[520px]">
              {t("heroSub")}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-10">
              <a
                href={DOWNLOAD_URL}
                className="group inline-flex items-center justify-center gap-2.5 bg-terracotta hover:bg-terracotta-hover text-ivory font-sans font-medium text-[15px] px-6 py-3.5 rounded-[12px] transition-colors"
                style={{ boxShadow: "0 0 0 1px #c96442" }}
              >
                {t("heroCtaCustomer")}
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
                href="#for-drivers"
                className="inline-flex items-center justify-center gap-2 bg-sand hover:bg-sand-deep text-charcoal font-sans font-medium text-[15px] px-6 py-3.5 rounded-[12px] transition-colors"
                style={{ boxShadow: "0 0 0 1px #d1cfc5" }}
              >
                {t("heroCtaDriver")}
              </a>
            </div>

            {/* Editorial promise list */}
            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3">
              {promises.map((label, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c96442" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="font-sans text-[14px] text-dark-warm">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Live tracking map mockup */}
          <div className="hidden lg:block relative reveal" style={{ transitionDelay: "200ms" }}>
            <HeroMapMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
