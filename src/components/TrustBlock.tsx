"use client";

import { useI18n } from "@/i18n/context";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { DOWNLOAD_URL } from "@/lib/links";

export function TrustBlock() {
  const { t, dir } = useI18n();
  const sectionRef = useScrollReveal();
  const isRtl = dir === "rtl";

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
              <span className="font-sans text-[11px] font-medium tracking-[0.14em] uppercase text-coral">
                {t("trustPill2")}
              </span>
            </div>
            <h2 className="font-serif text-[40px] lg:text-[52px] font-medium tracking-[-0.01em] leading-[1.1]">
              {t("trustTitle")}
            </h2>
            <p className="font-sans text-warm-silver text-[18px] mt-6 leading-[1.6] max-w-xl">
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
              <a
                href={DOWNLOAD_URL}
                className="group inline-flex items-center justify-center gap-2.5 bg-terracotta hover:bg-terracotta-hover text-ivory font-sans font-medium text-[15px] px-6 py-3.5 rounded-[12px] transition-colors"
                style={{ boxShadow: "0 0 0 1px #c96442" }}
              >
                {t("trustCta")}
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
                className="group inline-flex items-center justify-center gap-2.5 bg-transparent hover:bg-ivory/[0.06] text-ivory font-sans font-medium text-[15px] px-6 py-3.5 rounded-[12px] border border-ivory/25 hover:border-ivory/50 transition-colors"
              >
                {t("trustCtaDriver")}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
