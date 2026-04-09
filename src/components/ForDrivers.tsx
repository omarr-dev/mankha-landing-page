"use client";

import { useI18n } from "@/i18n/context";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CalendarClock, Wallet, FileCheck, ArrowRight, ArrowLeft } from "lucide-react";

export function ForDrivers() {
  const { t, dir, locale } = useI18n();
  const sectionRef = useScrollReveal();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  const benefits = [
    { icon: CalendarClock, title: t("driversBenefit1"), desc: t("driversBenefit1Desc") },
    { icon: Wallet, title: t("driversBenefit2"), desc: t("driversBenefit2Desc") },
    { icon: FileCheck, title: t("driversBenefit3"), desc: t("driversBenefit3Desc") },
  ];

  return (
    <section
      id="for-drivers"
      className="relative bg-bg-light py-24 lg:py-32 overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute inset-0 stripe-pattern" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left — Text */}
          <div>
            <span className="text-primary text-sm font-bold uppercase tracking-[0.2em] reveal">
              {locale === "ar" ? "للسواقين" : "For Drivers"}
            </span>
            <h2
              className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-text-light mt-4 tracking-tight leading-[1.05] whitespace-pre-line reveal"
              style={{ transitionDelay: "100ms" }}
            >
              {t("driversTitle")}
            </h2>
            <p
              className="text-text-muted-light text-lg mt-6 font-light leading-relaxed max-w-lg reveal"
              style={{ transitionDelay: "200ms" }}
            >
              {t("driversSub")}
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-4 mt-8 reveal"
              style={{ transitionDelay: "300ms" }}
            >
              <a
                href="#download"
                className="group inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark text-white font-bold text-base px-8 py-4 rounded-sm transition-all duration-200 hover:gap-4"
              >
                {t("driversCtaRegister")}
                <Arrow className="w-4 h-4" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 text-primary hover:text-primary-dark font-semibold text-base px-4 py-4 transition-colors"
              >
                {t("driversCtaLearn")}
              </a>
            </div>
          </div>

          {/* Right — Benefits */}
          <div className="space-y-5">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="reveal group flex gap-5 p-6 bg-surface-light border border-border-light rounded-sm hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300"
                style={{ transitionDelay: `${400 + i * 120}ms` }}
              >
                <div className="shrink-0 w-12 h-12 bg-primary-light rounded-sm flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <b.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-light mb-1">{b.title}</h3>
                  <p className="text-text-muted-light font-light text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
