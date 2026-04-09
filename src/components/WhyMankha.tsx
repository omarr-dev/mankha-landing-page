"use client";

import { useI18n } from "@/i18n/context";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Zap, DollarSign, Locate, ShieldCheck, Clock } from "lucide-react";

export function WhyMankha() {
  const { t, locale } = useI18n();
  const sectionRef = useScrollReveal();

  const features = [
    { icon: Zap, title: t("whyFast"), desc: t("whyFastDesc"), accent: true },
    { icon: DollarSign, title: t("whyPrice"), desc: t("whyPriceDesc"), accent: false },
    { icon: Locate, title: t("whyTracking"), desc: t("whyTrackingDesc"), accent: false },
    { icon: ShieldCheck, title: t("whyVerified"), desc: t("whyVerifiedDesc"), accent: false },
    { icon: Clock, title: t("whyAvailable"), desc: t("whyAvailableDesc"), accent: true },
  ];

  return (
    <section
      id="why-mankha"
      className="relative bg-bg-dark py-24 lg:py-32 noise-overlay overflow-hidden"
      ref={sectionRef}
    >
      {/* Gradient blob */}
      <div className="absolute bottom-0 start-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header — right-aligned on desktop for variety */}
        <div className="lg:ms-auto max-w-2xl lg:text-end mb-16 lg:mb-24">
          <span className="text-primary text-sm font-bold uppercase tracking-[0.2em] reveal">
            {locale === "ar" ? "المميزات" : "Features"}
          </span>
          <h2 className="text-4xl lg:text-6xl font-extrabold text-text-dark mt-4 tracking-tight reveal" style={{ transitionDelay: "100ms" }}>
            {t("whyTitle")}
          </h2>
          <p className="text-text-muted-dark text-lg mt-4 font-light reveal" style={{ transitionDelay: "200ms" }}>
            {t("whySub")}
          </p>
        </div>

        {/* Feature layout — 2+3 asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
          {features.map((feat, i) => {
            const isWide = feat.accent;
            return (
              <div
                key={i}
                className={`reveal ${isWide ? "lg:col-span-6" : "lg:col-span-4"}`}
                style={{ transitionDelay: `${300 + i * 100}ms` }}
              >
                <div
                  className={`group relative h-full p-8 rounded-sm border transition-all duration-300 hover:-translate-y-1 ${
                    feat.accent
                      ? "bg-primary/10 border-primary/20 hover:border-primary/40"
                      : "bg-surface-dark border-border-dark hover:border-primary/30"
                  }`}
                >
                  <div className="flex items-start gap-5">
                    <div className={`shrink-0 w-11 h-11 rounded-sm flex items-center justify-center ${
                      feat.accent ? "bg-primary" : "bg-surface-dark border border-border-dark group-hover:border-primary/40"
                    } transition-colors`}>
                      <feat.icon className={`w-5 h-5 ${feat.accent ? "text-white" : "text-primary"}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-text-dark mb-2">
                        {feat.title}
                      </h3>
                      <p className="text-text-muted-dark font-light leading-relaxed text-sm">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
