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
    {
      label: t("heroPromise1"),
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
    },
    {
      label: t("heroPromise2"),
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      label: t("heroPromise3"),
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
          <path d="M12 6v12" />
        </svg>
      ),
    },
    {
      label: t("heroPromise4"),
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
  ];

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
                href={DOWNLOAD_URL}
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

            {/* Promise pills */}
            <div className="flex flex-wrap gap-2 mt-8">
              {promises.map((p, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-1.5 bg-surface border border-border rounded-full px-3.5 py-2 text-xs font-medium text-text-secondary"
                >
                  <span className="text-primary">{p.icon}</span>
                  {p.label}
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
