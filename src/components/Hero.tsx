"use client";

import { useI18n } from "@/i18n/context";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Hero() {
  const { t, dir, locale } = useI18n();
  const isRtl = dir === "rtl";
  const sectionRef = useScrollReveal();

  return (
    <section className="relative bg-bg pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -end-32 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -start-32 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="reveal">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-text leading-[1.08] tracking-tight">
              {t("heroHeadline").split("\n").map((line, i) => (
                <span key={i}>
                  {i === 1 ? (
                    <span className="text-primary relative">
                      {line}
                      <svg className="absolute -bottom-1 start-0 w-full" height="6" viewBox="0 0 200 6" fill="none" preserveAspectRatio="none">
                        <path d="M0 5C50 0 150 0 200 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
                      </svg>
                    </span>
                  ) : (
                    line
                  )}
                  {i === 0 && <br />}
                </span>
              ))}
            </h1>

            <p className="text-text-secondary text-lg mt-6 leading-relaxed max-w-lg">
              {t("heroSub")}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <a
                href="#download"
                className="group inline-flex items-center justify-center gap-2.5 bg-primary hover:bg-primary-dark text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-all hover:shadow-lg hover:shadow-primary/25"
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
              <a
                href="#for-drivers"
                className="inline-flex items-center justify-center gap-2 text-text hover:text-primary text-sm font-semibold px-7 py-3.5 rounded-full border border-border hover:border-primary/30 transition-all"
              >
                {t("heroCtaDriver")}
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-3 mt-8">
              <div className="flex -space-x-2 rtl:space-x-reverse">
                {["#4F46E5", "#0EA5E9", "#10B981", "#F59E0B"].map((color, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-bg flex items-center justify-center text-white text-[10px] font-bold"
                    style={{ backgroundColor: color }}
                  >
                    {["K", "S", "M", "F"][i]}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#F59E0B" stroke="none">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                  <span className="text-text font-semibold ms-1">4.9</span>
                </div>
                <p className="text-text-tertiary text-xs mt-0.5">{t("heroTrust")}</p>
              </div>
            </div>
          </div>

          {/* Right — Stats cards */}
          <div className="hidden lg:block relative reveal" style={{ transitionDelay: "200ms" }}>
            <div className="grid grid-cols-2 gap-4">
              {/* Stat card 1 */}
              <div className="bg-surface border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <p className="text-3xl font-bold text-text">
                  {t("heroStat1Value")}
                  <span className="text-lg font-medium text-text-secondary ms-1">
                    {t("heroStat1Unit")}
                  </span>
                </p>
                <p className="text-sm text-text-tertiary mt-1">{t("heroStat1Label")}</p>
              </div>

              {/* Stat card 2 */}
              <div className="bg-surface border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow mt-8">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <p className="text-3xl font-bold text-text">{t("heroStat2Value")}</p>
                <p className="text-sm text-text-tertiary mt-1">{t("heroStat2Label")}</p>
              </div>

              {/* Stat card 3 — wide */}
              <div className="col-span-2 bg-primary text-white rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 end-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 rtl:-translate-x-1/2" />
                <div className="relative flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold">{t("heroStat3Value")}</p>
                    <p className="text-white/70 text-sm mt-1">{t("heroStat3Label")}</p>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="white" fillOpacity={i < 5 ? 1 : 0.3} stroke="none">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile stats row */}
        <div className="lg:hidden flex flex-wrap gap-x-10 gap-y-4 mt-12 pt-8 border-t border-border">
          <div>
            <span className="text-2xl font-bold text-text">
              {t("heroStat1Value")}
              <span className="text-sm font-normal text-text-secondary ms-1">
                {t("heroStat1Unit")}
              </span>
            </span>
            <p className="text-sm text-text-tertiary mt-0.5">{t("heroStat1Label")}</p>
          </div>
          <div>
            <span className="text-2xl font-bold text-text">{t("heroStat2Value")}</span>
            <p className="text-sm text-text-tertiary mt-0.5">{t("heroStat2Label")}</p>
          </div>
          <div>
            <span className="text-2xl font-bold text-text">{t("heroStat3Value")}</span>
            <p className="text-sm text-text-tertiary mt-0.5">{t("heroStat3Label")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
