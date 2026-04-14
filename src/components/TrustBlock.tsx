"use client";

import { useI18n } from "@/i18n/context";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { DOWNLOAD_URL } from "@/lib/links";

export function TrustBlock() {
  const { t, dir } = useI18n();
  const sectionRef = useScrollReveal();
  const isRtl = dir === "rtl";

  const pills = [
    {
      label: t("trustPill1"),
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      label: t("trustPill2"),
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
    {
      label: t("trustPill3"),
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
    },
    {
      label: t("trustPill4"),
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20" />
          <path d="M5 9l7-7 7 7" />
          <path d="M5 15l7 7 7-7" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-bg-muted py-20 lg:py-28" ref={sectionRef}>
      <div className="max-w-3xl mx-auto px-6">
        <div className="reveal relative bg-primary text-white rounded-2xl p-8 sm:p-12 overflow-hidden">
          <div className="absolute top-0 end-0 w-56 h-56 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 rtl:-translate-x-1/2" />
          <div className="absolute bottom-0 start-0 w-40 h-40 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 rtl:translate-x-1/2" />

          <div className="relative text-center">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight leading-snug">
              {t("trustTitle")}
            </h2>
            <p className="text-white/80 mt-4 max-w-xl mx-auto leading-relaxed">
              {t("trustSub")}
            </p>

            <div className="flex flex-wrap justify-center gap-2.5 mt-8">
              {pills.map((p, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-2 text-sm font-medium border border-white/15"
                >
                  <span className="text-white/90">{p.icon}</span>
                  {p.label}
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href={DOWNLOAD_URL}
                className="group inline-flex items-center justify-center gap-2.5 bg-white text-primary hover:bg-white/95 font-semibold text-sm px-7 py-3.5 rounded-full transition-all"
              >
                {t("trustCta")}
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
      </div>
    </section>
  );
}
