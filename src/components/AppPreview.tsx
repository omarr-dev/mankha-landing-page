"use client";

import { useI18n } from "@/i18n/context";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function AppPreview() {
  const { t } = useI18n();
  const sectionRef = useScrollReveal();

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
      id="download"
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
            <div className="mx-auto w-[260px] h-[460px] bg-[#0C0C0C] rounded-[3rem] p-3 shadow-2xl shadow-black/20 border border-white/10">
              <div className="w-full h-full bg-bg rounded-[2.3rem] overflow-hidden flex flex-col">
                {/* Phone status bar */}
                <div className="flex items-center justify-between px-6 pt-4 pb-2">
                  <span className="text-[10px] text-text-tertiary font-medium">9:41</span>
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
                <div className="flex-1 px-5 py-4">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
                      <span className="text-white text-[8px] font-bold">M</span>
                    </div>
                    <span className="text-text text-xs font-bold">{t("appName")}</span>
                  </div>

                  {/* Map placeholder */}
                  <div className="w-full h-28 bg-primary/5 rounded-2xl mb-4 flex items-center justify-center border border-primary/10">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>

                  {/* Offer cards */}
                  <div className="space-y-2">
                    <div className="bg-primary/8 border border-primary/15 rounded-xl p-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6 9 17l-5-5"/></svg>
                        </div>
                        <div>
                          <div className="w-14 h-2 bg-primary/20 rounded-full" />
                          <div className="w-10 h-1.5 bg-primary/10 rounded-full mt-1" />
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-primary">85 SAR</span>
                    </div>
                    <div className="bg-bg-muted border border-border rounded-xl p-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-bg-muted" />
                        <div>
                          <div className="w-16 h-2 bg-border rounded-full" />
                          <div className="w-8 h-1.5 bg-border/60 rounded-full mt-1" />
                        </div>
                      </div>
                      <span className="text-[10px] font-medium text-text-tertiary">120 SAR</span>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="px-5 pb-5">
                  <div className="bg-primary text-white text-[10px] font-bold text-center py-2.5 rounded-xl">
                    {t("heroCtaCustomer")}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Download badges */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10 reveal" style={{ transitionDelay: "200ms" }}>
            {/* iOS */}
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-[#0C0C0C] hover:bg-[#1a1a1a] text-white px-6 py-3.5 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-start">
                <div className="text-[10px] text-white/60 leading-none">
                  {t("appPreviewBadgeIos")}
                </div>
                <div className="text-sm font-semibold leading-tight">
                  {t("appPreviewBadgeIosStore")}
                </div>
              </div>
            </a>

            {/* Android */}
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-[#0C0C0C] hover:bg-[#1a1a1a] text-white px-6 py-3.5 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.523 2.237a.625.625 0 0 0-.853.226l-1.203 2.084A7.348 7.348 0 0 0 12 3.75a7.35 7.35 0 0 0-3.467.797L7.33 2.463a.625.625 0 1 0-1.08.627L7.4 5.06A7.338 7.338 0 0 0 4.75 10.5h14.5A7.338 7.338 0 0 0 16.6 5.06l1.15-1.97a.625.625 0 0 0-.227-.853zM8.5 8.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm7 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zM4.75 11.75h-.5A1.75 1.75 0 0 0 2.5 13.5v4a1.75 1.75 0 0 0 1.75 1.75h.5V11.75zm14.5 0v7.5h.5a1.75 1.75 0 0 0 1.75-1.75v-4a1.75 1.75 0 0 0-1.75-1.75h-.5zm-1.25 0H6v8.75c0 .69.56 1.25 1.25 1.25h1.5v2.75a1.75 1.75 0 1 0 3.5 0v-2.75h1.5v2.75a1.75 1.75 0 1 0 3.5 0v-2.75h1.5c.69 0 1.25-.56 1.25-1.25V11.75z" />
              </svg>
              <div className="text-start">
                <div className="text-[10px] text-white/60 leading-none">
                  {t("appPreviewBadgeAndroid")}
                </div>
                <div className="text-sm font-semibold leading-tight">
                  {t("appPreviewBadgeAndroidStore")}
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
