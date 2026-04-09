"use client";

import { useI18n } from "@/i18n/context";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const { t, locale } = useI18n();
  const sectionRef = useScrollReveal();

  const testimonials = [
    {
      name: t("testimonial1Name"),
      role: t("testimonial1Role"),
      text: t("testimonial1Text"),
      rating: 5,
    },
    {
      name: t("testimonial2Name"),
      role: t("testimonial2Role"),
      text: t("testimonial2Text"),
      rating: 5,
    },
    {
      name: t("testimonial3Name"),
      role: t("testimonial3Role"),
      text: t("testimonial3Text"),
      rating: 5,
    },
    {
      name: t("testimonial4Name"),
      role: t("testimonial4Role"),
      text: t("testimonial4Text"),
      rating: 5,
    },
  ];

  return (
    <section
      className="relative bg-bg-light py-24 lg:py-32 overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute inset-0 stripe-pattern" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-bold uppercase tracking-[0.2em] reveal">
            {locale === "ar" ? "كلام الناس" : "Testimonials"}
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-text-light mt-4 tracking-tight reveal" style={{ transitionDelay: "100ms" }}>
            {t("testimonialsTitle")}
          </h2>
          <p className="text-text-muted-light text-lg mt-4 font-light reveal" style={{ transitionDelay: "200ms" }}>
            {t("testimonialsSub")}
          </p>
        </div>

        {/* Testimonial grid — 2x2 with first card spanning */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((test, i) => (
            <div
              key={i}
              className={`reveal ${i === 0 ? "md:row-span-2" : ""}`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              <div
                className={`group relative h-full p-8 rounded-sm border transition-all duration-300 hover:-translate-y-1 ${
                  i === 0
                    ? "bg-primary text-white border-primary"
                    : "bg-surface-light border-border-light hover:border-primary/30"
                }`}
              >
                {/* Quote icon */}
                <Quote
                  className={`w-8 h-8 mb-4 ${
                    i === 0 ? "text-white/20" : "text-primary/10"
                  }`}
                />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: test.rating }).map((_, s) => (
                    <Star
                      key={s}
                      className={`w-4 h-4 ${
                        i === 0 ? "text-cta fill-cta" : "text-cta fill-cta"
                      }`}
                    />
                  ))}
                </div>

                {/* Text */}
                <blockquote
                  className={`text-base lg:text-lg font-light leading-relaxed mb-6 ${
                    i === 0 ? "text-white/90" : "text-text-light"
                  }`}
                >
                  &ldquo;{test.text}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 mt-auto">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                      i === 0
                        ? "bg-white/20 text-white"
                        : "bg-primary-light text-primary"
                    }`}
                  >
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <div
                      className={`font-bold text-sm ${
                        i === 0 ? "text-white" : "text-text-light"
                      }`}
                    >
                      {test.name}
                    </div>
                    <div
                      className={`text-xs ${
                        i === 0 ? "text-white/60" : "text-text-muted-light"
                      }`}
                    >
                      {test.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
