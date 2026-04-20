"use client";

import { useI18n } from "@/i18n/context";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { DOWNLOAD_URL } from "@/lib/links";
import { trackOrderClick } from "@/lib/gtag";
import { HeroMapMockup } from "./HeroMapMockup";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const { t } = useI18n();
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
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta text-xs font-semibold px-3 py-1.5 rounded-full">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {t("heroBadge")}
            </div>

            <h1 className="mt-5 font-serif text-near-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-[-0.02em]">
              {t("heroHeadlineLead")}{" "}
              <span className="text-terracotta">{t("heroHeadlineHighlight")}</span>{" "}
              {t("heroHeadlineTail")}
            </h1>

            <p className="text-olive text-lg sm:text-xl mt-5 leading-relaxed max-w-[520px]">
              {t("heroSub")}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-10">
              <Button href={DOWNLOAD_URL} size="lg" showArrow onClick={() => trackOrderClick()}>
                {t("heroCtaCustomer")}
              </Button>
              <Button href="#for-drivers" variant="secondary" size="lg">
                {t("heroCtaDriver")}
              </Button>
            </div>

            {/* Editorial promise list */}
            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3">
              {promises.map((label, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c96442" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="font-sans text-[14px] font-medium text-dark-warm">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Live tracking map mockup */}
          <div className="relative reveal mx-auto w-full max-w-[420px] lg:max-w-none" style={{ transitionDelay: "200ms" }}>
            <HeroMapMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
