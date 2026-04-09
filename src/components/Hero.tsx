"use client";

import { useI18n } from "@/i18n/context";
import { MapPin, ArrowRight, ArrowLeft, Truck } from "lucide-react";

export function Hero() {
  const { t, dir } = useI18n();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <section className="relative min-h-screen bg-bg-dark noise-overlay overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#0A7B6F" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Gradient accent */}
      <div className="absolute top-0 end-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4 rtl:-translate-x-1/4" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 lg:pt-36 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Text content — takes 7 cols */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 bg-surface-dark border border-border-dark px-4 py-2 rounded-full animate-slide-up">
              <span className="w-2 h-2 rounded-full bg-cta animate-pulse-glow" />
              <span className="text-text-muted-dark text-xs font-semibold uppercase tracking-widest">
                {dir === "rtl" ? "متوفر الحين في السعودية" : "Now available in Saudi Arabia"}
              </span>
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extralight text-text-dark leading-[0.95] tracking-tight animate-slide-up"
              style={{ animationDelay: "100ms", whiteSpace: "pre-line" }}
            >
              {t("heroHeadline").split("\n").map((line, i) => (
                <span key={i}>
                  {i === 1 ? (
                    <span className="font-extrabold text-primary">{line}</span>
                  ) : (
                    line
                  )}
                  {i === 0 && <br />}
                </span>
              ))}
            </h1>

            <p
              className="text-text-muted-dark text-lg lg:text-xl max-w-xl font-light leading-relaxed animate-slide-up"
              style={{ animationDelay: "200ms" }}
            >
              {t("heroSub")}
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-4 animate-slide-up"
              style={{ animationDelay: "300ms" }}
            >
              <a
                href="#download"
                className="group inline-flex items-center justify-center gap-3 bg-cta hover:bg-cta-hover text-bg-dark font-bold text-base px-8 py-4 rounded-sm transition-all duration-200 hover:gap-4"
              >
                {t("heroCtaCustomer")}
                <Arrow className="w-4 h-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
              </a>
              <a
                href="#for-drivers"
                className="group inline-flex items-center justify-center gap-3 border-2 border-border-dark hover:border-primary text-text-dark font-semibold text-base px-8 py-4 rounded-sm transition-all duration-200"
              >
                <Truck className="w-5 h-5 text-primary" />
                {t("heroCtaDriver")}
              </a>
            </div>
          </div>

          {/* Stats panel — takes 5 cols */}
          <div
            className="lg:col-span-5 lg:pt-16 animate-slide-up"
            style={{ animationDelay: "400ms" }}
          >
            {/* Illustration placeholder: stylized map card */}
            <div className="relative bg-surface-dark border border-border-dark rounded-sm p-6 lg:p-8">
              {/* Fake map area */}
              <div className="aspect-[4/3] bg-bg-dark rounded-sm mb-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="mapgrid" width="30" height="30" patternUnits="userSpaceOnUse">
                        <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#0A7B6F" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#mapgrid)" />
                  </svg>
                </div>
                {/* Road lines */}
                <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-primary/30" />
                <div className="absolute top-0 bottom-0 left-1/3 w-[2px] bg-primary/20" />
                <div className="absolute top-[30%] left-[60%] w-[2px] h-[40%] bg-primary/20 rotate-45 origin-top" />

                {/* User pin */}
                <div className="absolute top-[45%] left-[35%] rtl:left-auto rtl:right-[35%] animate-float">
                  <div className="w-10 h-10 bg-cta rounded-full flex items-center justify-center shadow-lg shadow-cta/30">
                    <MapPin className="w-5 h-5 text-bg-dark" />
                  </div>
                  <div className="w-3 h-3 bg-cta/40 rounded-full mx-auto -mt-1 animate-pulse" />
                </div>

                {/* Driver pin */}
                <div className="absolute top-[25%] left-[65%] rtl:left-auto rtl:right-[65%]">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
                    <Truck className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Dotted route line */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <line
                    x1="40%"
                    y1="50%"
                    x2="68%"
                    y2="30%"
                    stroke="#0A7B6F"
                    strokeWidth="2"
                    strokeDasharray="6 4"
                    opacity="0.5"
                  />
                </svg>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-extrabold text-primary">
                    {t("heroStat1Value")}
                    <span className="text-lg font-light text-text-muted-dark ms-0.5">
                      {t("heroStat1Unit")}
                    </span>
                  </div>
                  <div className="text-xs text-text-muted-dark font-medium uppercase tracking-wider mt-1">
                    {t("heroStat1Label")}
                  </div>
                </div>
                <div className="text-center border-x border-border-dark">
                  <div className="text-3xl lg:text-4xl font-extrabold text-text-dark">
                    {t("heroStat2Value")}
                  </div>
                  <div className="text-xs text-text-muted-dark font-medium uppercase tracking-wider mt-1">
                    {t("heroStat2Label")}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-extrabold text-text-dark">
                    {t("heroStat3Value")}
                  </div>
                  <div className="text-xs text-text-muted-dark font-medium uppercase tracking-wider mt-1">
                    {t("heroStat3Label")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom edge */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </section>
  );
}
