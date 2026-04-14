"use client";

import { useI18n } from "@/i18n/context";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { DOWNLOAD_URL } from "@/lib/links";
import { Button } from "@/components/ui/Button";

export function AppPreview() {
  const { t, locale } = useI18n();
  const sectionRef = useScrollReveal();

  const features = [
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      label: t("appScreenRequest"),
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10h-7" /><path d="M21 6h-7" /><path d="M21 14h-7" /><path d="M21 18h-7" />
          <rect x="3" y="5" width="7" height="14" rx="1.5" />
        </svg>
      ),
      label: t("appScreenOffers"),
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      label: t("appScreenTracking"),
    },
  ];

  return (
    <section
      id="app-preview"
      className="bg-bg-muted py-24 lg:py-32 relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="relative max-w-[1200px] mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2.5 mb-6 reveal">
            <span className="w-6 h-px bg-terracotta/70" />
            <span className="text-terracotta text-xs font-semibold uppercase tracking-[0.14em]">
              {locale === "ar" ? "التطبيق" : "The app"}
            </span>
            <span className="w-6 h-px bg-terracotta/70" />
          </div>
          <h2 className="font-serif text-near-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.01em] whitespace-pre-line leading-[1.08] reveal" style={{ transitionDelay: "60ms" }}>
            {t("appPreviewTitle")}
          </h2>
          <p className="text-olive text-base sm:text-lg mt-5 max-w-lg mx-auto leading-relaxed reveal" style={{ transitionDelay: "120ms" }}>
            {t("appPreviewSub")}
          </p>

          {/* Feature chips */}
          <div className="flex flex-wrap justify-center gap-2.5 mt-10 reveal" style={{ transitionDelay: "180ms" }}>
            {features.map((f, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 bg-ivory rounded-full px-4 py-2 text-[13px] text-charcoal border border-border-cream"
              >
                <span className="text-terracotta">{f.icon}</span>
                {f.label}
              </div>
            ))}
          </div>

          {/* Phone mockup inside a warm "stage" */}
          <div className="mt-14 reveal relative" style={{ transitionDelay: "240ms" }}>
            <div className="mx-auto w-full max-w-[520px] bg-ivory rounded-[32px] py-10 px-4 sm:py-14 sm:px-6 border border-border-cream whisper-shadow relative overflow-hidden">
              {/* Decorative warm rings */}
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-sand/40 pointer-events-none" />
              <div className="absolute -bottom-24 -left-16 w-56 h-56 rounded-full bg-sand/30 pointer-events-none" />

              <div className="relative mx-auto w-[240px] h-[480px] sm:w-[280px] sm:h-[560px] bg-near-black rounded-[44px] p-3 shadow-[0_30px_60px_-20px_rgba(20,20,19,0.25)]">
                {/* Preview label */}
                <div className="absolute -top-3 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 z-10 bg-terracotta text-ivory text-[10px] font-medium px-3 py-1 rounded-full tracking-[0.14em] uppercase">
                  {t("appPreviewLabel")}
                </div>

                <div className="w-full h-full bg-parchment rounded-[36px] overflow-hidden flex flex-col">
                  {/* Phone status bar */}
                  <div className="flex items-center justify-between px-6 pt-4 pb-2">
                    <span className="font-sans text-[10px] text-stone font-medium tabular-nums">10:24</span>
                    <div className="w-20 h-5 bg-near-black rounded-full" />
                    <div className="flex items-center gap-1">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-stone">
                        <rect x="1" y="6" width="4" height="12" rx="1" opacity="0.3" />
                        <rect x="7" y="4" width="4" height="14" rx="1" opacity="0.5" />
                        <rect x="13" y="2" width="4" height="16" rx="1" opacity="0.7" />
                        <rect x="19" y="0" width="4" height="18" rx="1" />
                      </svg>
                    </div>
                  </div>

                  {/* App content mockup */}
                  <div className="flex-1 px-4 py-3 overflow-hidden text-left rtl:text-right">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 rounded-md bg-terracotta flex items-center justify-center">
                        <span className="text-ivory text-[10px] font-bold font-serif">م</span>
                      </div>
                      <span className="font-serif text-near-black text-[14px] font-medium">{t("appName")}</span>
                    </div>

                    <p className="font-sans text-[11px] font-medium text-olive mb-3 uppercase tracking-[0.1em]">
                      {t("appScreenOffers")}
                    </p>

                    <div className="space-y-2.5">
                      {/* Card 1 */}
                      <div className="bg-ivory border border-border-cream rounded-[14px] p-3">
                        <div className="flex items-start gap-2">
                          <div className="w-8 h-8 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0">
                            <span className="text-terracotta text-[11px] font-semibold font-serif">A</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1">
                              <span className="font-sans text-[11px] font-semibold text-near-black truncate">
                                {t("appPreviewDriverName")} A
                              </span>
                              <span className="inline-flex items-center gap-0.5 font-sans text-[10px] font-medium text-charcoal">
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="#c96442" stroke="none">
                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                                4.8
                              </span>
                            </div>
                            <p className="font-sans text-[9px] text-stone mt-0.5">
                              128 {t("appPreviewTrips")} · 3.2 km {t("appPreviewDistance")}
                            </p>
                            <p className="font-sans text-[9px] text-olive mt-0.5">
                              {t("appPreviewVehicle")}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-border-cream">
                          <div className="flex items-baseline gap-1">
                            <span className="font-serif text-[17px] font-medium text-near-black">95</span>
                            <span className="font-sans text-[10px] text-olive">{t("appPreviewPrice")}</span>
                          </div>
                          <button
                            type="button"
                            className="bg-terracotta text-ivory text-[10px] font-medium px-3.5 py-1.5 rounded-[8px]"
                          >
                            {t("appPreviewAccept")}
                          </button>
                        </div>
                      </div>

                      {/* Card 2 */}
                      <div className="bg-ivory border border-border-cream rounded-[14px] p-3">
                        <div className="flex items-start gap-2">
                          <div className="w-8 h-8 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0">
                            <span className="text-terracotta text-[11px] font-semibold font-serif">B</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1">
                              <span className="font-sans text-[11px] font-semibold text-near-black truncate">
                                {t("appPreviewDriverName")} B
                              </span>
                              <span className="inline-flex items-center gap-0.5 font-sans text-[10px] font-medium text-charcoal">
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="#c96442" stroke="none">
                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                                4.6
                              </span>
                            </div>
                            <p className="font-sans text-[9px] text-stone mt-0.5">
                              62 {t("appPreviewTrips")} · 4.1 km {t("appPreviewDistance")}
                            </p>
                            <p className="font-sans text-[9px] text-olive mt-0.5">
                              {t("appPreviewVehicle")}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-border-cream">
                          <div className="flex items-baseline gap-1">
                            <span className="font-serif text-[17px] font-medium text-near-black">110</span>
                            <span className="font-sans text-[10px] text-olive">{t("appPreviewPrice")}</span>
                          </div>
                          <button
                            type="button"
                            className="bg-terracotta text-ivory text-[10px] font-medium px-3.5 py-1.5 rounded-[8px]"
                          >
                            {t("appPreviewAccept")}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-12 reveal" style={{ transitionDelay: "300ms" }}>
            <Button href={DOWNLOAD_URL} showArrow>
              {t("heroCtaCustomer")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
