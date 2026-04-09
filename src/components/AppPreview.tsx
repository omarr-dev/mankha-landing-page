"use client";

import { useI18n } from "@/i18n/context";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, MessageSquare, Navigation, Smartphone } from "lucide-react";

export function AppPreview() {
  const { t, locale } = useI18n();
  const sectionRef = useScrollReveal();

  const screens = [
    { label: t("appScreenRequest"), icon: MapPin, active: false },
    { label: t("appScreenOffers"), icon: MessageSquare, active: true },
    { label: t("appScreenTracking"), icon: Navigation, active: false },
  ];

  return (
    <section
      id="download"
      className="relative bg-bg-dark py-24 lg:py-32 noise-overlay overflow-hidden"
      ref={sectionRef}
    >
      {/* Gradient */}
      <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Phone mockups */}
          <div className="reveal order-2 lg:order-1 flex justify-center items-end gap-4 lg:gap-6">
            {screens.map((screen, i) => (
              <div
                key={i}
                className={`reveal relative transition-all duration-500 ${
                  screen.active
                    ? "w-[200px] sm:w-[220px] lg:w-[240px] z-10"
                    : "w-[160px] sm:w-[180px] lg:w-[200px] opacity-60"
                } ${i === 0 ? "-translate-y-4" : i === 2 ? "-translate-y-8" : ""}`}
                style={{ transitionDelay: `${300 + i * 150}ms` }}
              >
                {/* Phone frame */}
                <div className={`bg-surface-dark border rounded-2xl overflow-hidden ${
                  screen.active ? "border-primary/40 shadow-2xl shadow-primary/10" : "border-border-dark"
                }`}>
                  {/* Status bar */}
                  <div className="flex items-center justify-between px-4 py-2 bg-bg-dark">
                    <span className="text-[10px] text-text-muted-dark font-medium">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-3 h-1.5 bg-text-muted-dark/50 rounded-sm" />
                      <div className="w-3 h-1.5 bg-text-muted-dark/50 rounded-sm" />
                      <div className="w-4 h-1.5 bg-primary rounded-sm" />
                    </div>
                  </div>

                  {/* App header */}
                  <div className="px-4 py-3 border-b border-border-dark">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-sm bg-primary flex items-center justify-center">
                        <span className="text-[8px] font-extrabold text-white">M</span>
                      </div>
                      <span className="text-xs font-bold text-text-dark">{t("appName")}</span>
                    </div>
                  </div>

                  {/* Screen content placeholder */}
                  <div className="aspect-[9/14] p-4 flex flex-col">
                    <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mb-4">
                      <screen.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-sm font-bold text-text-dark mb-2">{screen.label}</div>

                    {/* Skeleton content */}
                    <div className="space-y-3 flex-1">
                      <div className="h-2 bg-border-dark rounded-full w-full" />
                      <div className="h-2 bg-border-dark rounded-full w-3/4" />
                      <div className="h-2 bg-border-dark rounded-full w-5/6" />

                      {screen.active && (
                        <>
                          <div className="mt-4 p-3 bg-primary/10 border border-primary/20 rounded-sm">
                            <div className="h-2 bg-primary/30 rounded-full w-2/3 mb-2" />
                            <div className="h-2 bg-primary/20 rounded-full w-1/2" />
                          </div>
                          <div className="p-3 bg-bg-dark border border-border-dark rounded-sm">
                            <div className="h-2 bg-border-dark rounded-full w-3/4 mb-2" />
                            <div className="h-2 bg-border-dark rounded-full w-1/2" />
                          </div>
                        </>
                      )}
                    </div>

                    {/* Bottom button */}
                    <div className={`h-10 rounded-sm mt-4 ${
                      screen.active ? "bg-cta" : "bg-primary/20"
                    }`} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <span className="text-primary text-sm font-bold uppercase tracking-[0.2em] reveal">
              {locale === "ar" ? "التطبيق" : "The App"}
            </span>
            <h2
              className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-text-dark mt-4 tracking-tight whitespace-pre-line leading-[1.1] reveal"
              style={{ transitionDelay: "100ms" }}
            >
              {t("appPreviewTitle")}
            </h2>
            <p
              className="text-text-muted-dark text-lg mt-6 font-light leading-relaxed max-w-lg reveal"
              style={{ transitionDelay: "200ms" }}
            >
              {t("appPreviewSub")}
            </p>

            {/* Download badges */}
            <div
              className="flex flex-col sm:flex-row gap-4 mt-8 reveal"
              style={{ transitionDelay: "300ms" }}
            >
              {/* iOS */}
              <a
                href="#"
                className="group inline-flex items-center gap-3 bg-surface-dark border border-border-dark hover:border-primary/40 px-6 py-3 rounded-sm transition-all duration-200"
              >
                <svg className="w-7 h-7 text-text-dark" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div>
                  <div className="text-[10px] text-text-muted-dark font-medium leading-none">
                    {t("appPreviewBadgeIos")}
                  </div>
                  <div className="text-base font-bold text-text-dark leading-tight">
                    {t("appPreviewBadgeIosStore")}
                  </div>
                </div>
              </a>

              {/* Android */}
              <a
                href="#"
                className="group inline-flex items-center gap-3 bg-surface-dark border border-border-dark hover:border-primary/40 px-6 py-3 rounded-sm transition-all duration-200"
              >
                <Smartphone className="w-7 h-7 text-text-dark" />
                <div>
                  <div className="text-[10px] text-text-muted-dark font-medium leading-none">
                    {t("appPreviewBadgeAndroid")}
                  </div>
                  <div className="text-base font-bold text-text-dark leading-tight">
                    {t("appPreviewBadgeAndroidStore")}
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
