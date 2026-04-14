"use client";

import { useI18n } from "@/i18n/context";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { DOWNLOAD_URL } from "@/lib/links";

export function AppPreview() {
  const { t, dir } = useI18n();
  const sectionRef = useScrollReveal();
  const isRtl = dir === "rtl";

  const features = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      label: t("appScreenRequest"),
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 3h5v5" /><path d="M8 3H3v5" />
          <path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3" />
          <path d="m15 9 6-6" />
        </svg>
      ),
      label: t("appScreenOffers"),
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      label: t("appScreenTracking"),
    },
  ];

  return (
    <section
      className="bg-bg py-20 lg:py-28 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-text tracking-tight whitespace-pre-line leading-snug reveal">
            {t("appPreviewTitle")}
          </h2>
          <p className="text-text-secondary mt-4 max-w-md mx-auto reveal" style={{ transitionDelay: "80ms" }}>
            {t("appPreviewSub")}
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-8 reveal" style={{ transitionDelay: "120ms" }}>
            {features.map((f, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 bg-bg-muted border border-border rounded-full px-4 py-2 text-sm text-text-secondary"
              >
                <span className="text-primary">{f.icon}</span>
                {f.label}
              </div>
            ))}
          </div>

          {/* Phone mockup */}
          <div className="mt-10 reveal" style={{ transitionDelay: "160ms" }}>
            <div className="mx-auto w-[280px] h-[540px] bg-[#0C0C0C] rounded-[3rem] p-3 shadow-2xl shadow-black/20 border border-white/10 relative">
              {/* Preview label */}
              <div className="absolute -top-3 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 z-10 bg-text text-bg text-[10px] font-semibold px-2.5 py-1 rounded-full tracking-wide uppercase">
                {t("appPreviewLabel")}
              </div>

              <div className="w-full h-full bg-bg rounded-[2.3rem] overflow-hidden flex flex-col">
                {/* Phone status bar — non-iconic time */}
                <div className="flex items-center justify-between px-6 pt-4 pb-2">
                  <span className="text-[10px] text-text-tertiary font-medium">10:24</span>
                  <div className="w-20 h-5 bg-[#0C0C0C] rounded-full" />
                  <div className="flex items-center gap-1">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-text-tertiary">
                      <rect x="1" y="6" width="4" height="12" rx="1" opacity="0.3" />
                      <rect x="7" y="4" width="4" height="14" rx="1" opacity="0.5" />
                      <rect x="13" y="2" width="4" height="16" rx="1" opacity="0.7" />
                      <rect x="19" y="0" width="4" height="18" rx="1" />
                    </svg>
                  </div>
                </div>

                {/* App content mockup */}
                <div className="flex-1 px-4 py-3 overflow-hidden">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
                      <span className="text-white text-[8px] font-bold">M</span>
                    </div>
                    <span className="text-text text-xs font-bold">{t("appName")}</span>
                  </div>

                  {/* Section title */}
                  <p className="text-[11px] font-semibold text-text mb-2">
                    {t("appScreenOffers")}
                  </p>

                  {/* Offer cards — mirrors real OffersScreen */}
                  <div className="space-y-2.5">
                    {/* Card 1 */}
                    <div className="bg-surface border border-border rounded-xl p-3 shadow-sm">
                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <span className="text-primary text-[11px] font-semibold">A</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1">
                            <span className="text-[11px] font-semibold text-text truncate">
                              {t("appPreviewDriverName")} A
                            </span>
                            <span className="inline-flex items-center gap-0.5 text-[10px] font-medium text-text">
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="#F59E0B" stroke="none">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                              </svg>
                              4.8
                            </span>
                          </div>
                          <p className="text-[9px] text-text-tertiary mt-0.5">
                            128 {t("appPreviewTrips")} · 3.2 km {t("appPreviewDistance")}
                          </p>
                          <p className="text-[9px] text-text-secondary mt-0.5">
                            {t("appPreviewVehicle")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-border">
                        <div className="flex items-baseline gap-1">
                          <span className="text-base font-bold text-text">95</span>
                          <span className="text-[10px] text-text-secondary">{t("appPreviewPrice")}</span>
                        </div>
                        <button
                          type="button"
                          className="bg-cta text-white text-[10px] font-semibold px-3.5 py-1.5 rounded-[10px]"
                        >
                          {t("appPreviewAccept")}
                        </button>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-surface border border-border rounded-xl p-3 shadow-sm">
                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <span className="text-primary text-[11px] font-semibold">B</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1">
                            <span className="text-[11px] font-semibold text-text truncate">
                              {t("appPreviewDriverName")} B
                            </span>
                            <span className="inline-flex items-center gap-0.5 text-[10px] font-medium text-text">
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="#F59E0B" stroke="none">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                              </svg>
                              4.6
                            </span>
                          </div>
                          <p className="text-[9px] text-text-tertiary mt-0.5">
                            62 {t("appPreviewTrips")} · 4.1 km {t("appPreviewDistance")}
                          </p>
                          <p className="text-[9px] text-text-secondary mt-0.5">
                            {t("appPreviewVehicle")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-border">
                        <div className="flex items-baseline gap-1">
                          <span className="text-base font-bold text-text">110</span>
                          <span className="text-[10px] text-text-secondary">{t("appPreviewPrice")}</span>
                        </div>
                        <button
                          type="button"
                          className="bg-cta text-white text-[10px] font-semibold px-3.5 py-1.5 rounded-[10px]"
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

          {/* CTA */}
          <div className="flex justify-center mt-10 reveal" style={{ transitionDelay: "200ms" }}>
            <a
              href={DOWNLOAD_URL}
              className="group inline-flex items-center gap-2.5 bg-primary hover:bg-primary-dark text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              {t("heroCtaCustomer")}
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
          </div>
        </div>
      </div>
    </section>
  );
}
