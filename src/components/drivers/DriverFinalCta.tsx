"use client";

import { useI18n } from "@/i18n/context";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type Props = { registerHref: string; whatsappHref: string };

export function DriverFinalCta({ registerHref, whatsappHref }: Props) {
  const { t, dir } = useI18n();
  const ref = useScrollReveal();
  const isRtl = dir === "rtl";

  return (
    <section ref={ref} className="py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="reveal relative overflow-hidden rounded-3xl bg-primary text-white px-6 sm:px-12 py-14 lg:py-16">
          {/* Decorative rings */}
          <div aria-hidden className="absolute -top-24 -right-24 w-72 h-72 rounded-full border border-white/15" />
          <div aria-hidden className="absolute -bottom-32 -left-16 w-96 h-96 rounded-full border border-white/10" />
          <div
            aria-hidden
            className="absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(600px 300px at 80% 30%, rgba(255,255,255,0.12), transparent 60%)",
            }}
          />

          <div className="relative flex flex-col items-center text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              {t("dpFinalTitle")}
            </h2>
            <p className="mt-4 text-white/85 text-base sm:text-lg max-w-xl leading-relaxed">
              {t("dpFinalSub")}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={registerHref}
                className="group inline-flex items-center gap-2.5 bg-white text-primary hover:bg-white/95 font-bold text-[15px] px-8 py-4 rounded-full transition-all hover:shadow-2xl hover:shadow-black/20"
              >
                {t("dpFinalCta")}
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
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:bg-white/10 border border-white/30 text-[15px] font-semibold px-6 py-4 rounded-full transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20.52 3.48A11.94 11.94 0 0 0 12.05 0C5.5 0 .18 5.32.18 11.87c0 2.09.55 4.13 1.6 5.93L0 24l6.35-1.66a11.86 11.86 0 0 0 5.7 1.45h.01c6.55 0 11.87-5.32 11.87-11.87 0-3.17-1.24-6.15-3.41-8.44z" />
                </svg>
                {t("dpCtaWhatsapp")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
