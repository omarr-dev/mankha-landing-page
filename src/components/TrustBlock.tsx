"use client";

import { useI18n } from "@/i18n/context";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { DOWNLOAD_URL } from "@/lib/links";
import { trackOrderClick } from "@/lib/gtag";
import { Button } from "@/components/ui/Button";

export function TrustBlock() {
  const { t } = useI18n();
  const sectionRef = useScrollReveal();

  const pills = [
    t("trustPill1"),
    t("trustPill2"),
    t("trustPill3"),
    t("trustPill4"),
  ];

  return (
    <section className="bg-parchment py-20 lg:py-28" ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="reveal relative bg-near-black text-ivory rounded-[24px] lg:rounded-[32px] px-8 py-14 lg:px-16 lg:py-20 overflow-hidden border border-border-dark">
          {/* Organic warm accent — no gradients, just a terracotta shape */}
          <svg
            className="absolute top-0 end-0 w-[420px] h-[420px] opacity-[0.12] pointer-events-none"
            viewBox="0 0 400 400"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M 300 40 C 340 60 370 110 360 170 C 350 220 320 260 270 280 C 220 300 170 290 150 250 C 130 210 150 160 180 130 C 210 100 260 20 300 40 Z"
              fill="#c96442"
            />
          </svg>

          <div className="relative max-w-2xl">
            <div className="inline-flex items-center gap-2.5 mb-6">
              <span className="w-6 h-px bg-coral/70" />
              <span className="text-coral text-xs font-semibold uppercase tracking-[0.14em]">
                {t("trustPill2")}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.01em] leading-[1.1]">
              {t("trustTitle")}
            </h2>
            <p className="text-warm-silver text-base sm:text-lg mt-5 leading-relaxed max-w-xl">
              {t("trustSub")}
            </p>

            <div className="flex flex-wrap gap-2 mt-8">
              {pills.map((label, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-2 bg-dark-surface rounded-full px-4 py-1.5 font-sans text-[13px] text-warm-silver border border-border-dark"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-coral" />
                  {label}
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button href={DOWNLOAD_URL} size="lg" showArrow onClick={() => trackOrderClick()}>
                {t("trustCta")}
              </Button>
              <Button href="/drivers" variant="ghost" size="lg" showArrow>
                {t("trustCtaDriver")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
