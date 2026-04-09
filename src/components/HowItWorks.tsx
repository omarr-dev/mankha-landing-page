"use client";

import { useI18n } from "@/i18n/context";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, MessageSquare, Navigation } from "lucide-react";

export function HowItWorks() {
  const { t, locale } = useI18n();
  const sectionRef = useScrollReveal();

  const steps = [
    {
      tag: t("howStep1Tag"),
      title: t("howStep1Title"),
      desc: t("howStep1Desc"),
      icon: MapPin,
      color: "bg-primary",
    },
    {
      tag: t("howStep2Tag"),
      title: t("howStep2Title"),
      desc: t("howStep2Desc"),
      icon: MessageSquare,
      color: "bg-cta",
    },
    {
      tag: t("howStep3Tag"),
      title: t("howStep3Title"),
      desc: t("howStep3Desc"),
      icon: Navigation,
      color: "bg-primary",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative bg-bg-light py-24 lg:py-32 overflow-hidden"
      ref={sectionRef}
    >
      {/* Subtle stripe pattern */}
      <div className="absolute inset-0 stripe-pattern" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header — left-aligned, not centered */}
        <div className="max-w-2xl mb-16 lg:mb-24">
          <span className="text-primary text-sm font-bold uppercase tracking-[0.2em] reveal">
            {t("howStep1Tag")}&mdash;{t("howStep3Tag")}
          </span>
          <h2 className="text-4xl lg:text-6xl font-extrabold text-text-light mt-4 tracking-tight reveal" style={{ transitionDelay: "100ms" }}>
            {t("howTitle")}
          </h2>
          <p className="text-text-muted-light text-lg mt-4 font-light reveal" style={{ transitionDelay: "200ms" }}>
            {t("howSub")}
          </p>
        </div>

        {/* Steps — staggered layout, not a simple grid */}
        <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-6">
          {steps.map((step, i) => (
            <div
              key={step.tag}
              className={`reveal lg:col-span-4 ${
                i === 1 ? "lg:translate-y-12" : i === 2 ? "lg:translate-y-24" : ""
              }`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              <div className="group relative bg-surface-light border border-border-light p-8 lg:p-10 rounded-sm hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                {/* Step number — large, faded */}
                <span className="absolute top-6 end-6 text-6xl font-extrabold text-text-light/[0.04] select-none leading-none">
                  {step.tag}
                </span>

                {/* Icon */}
                <div className={`w-12 h-12 ${step.color} rounded-sm flex items-center justify-center mb-6`}>
                  <step.icon className="w-6 h-6 text-white" />
                </div>

                {/* Tag */}
                <span className="text-xs font-bold text-primary uppercase tracking-[0.15em]">
                  {locale === "ar" ? `خطوة ${step.tag}` : `Step ${step.tag}`}
                </span>

                <h3 className="text-xl lg:text-2xl font-bold text-text-light mt-2 mb-3">
                  {step.title}
                </h3>
                <p className="text-text-muted-light font-light leading-relaxed">
                  {step.desc}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 inset-x-0 h-[3px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-start rounded-b-sm" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
