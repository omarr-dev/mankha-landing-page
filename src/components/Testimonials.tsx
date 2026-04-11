"use client";

import { useI18n } from "@/i18n/context";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Testimonials() {
  const { t } = useI18n();
  const sectionRef = useScrollReveal();

  const testimonials = [
    {
      name: t("testimonial1Name"),
      role: t("testimonial1Role"),
      text: t("testimonial1Text"),
      stars: 5,
    },
    {
      name: t("testimonial2Name"),
      role: t("testimonial2Role"),
      text: t("testimonial2Text"),
      stars: 5,
    },
    {
      name: t("testimonial3Name"),
      role: t("testimonial3Role"),
      text: t("testimonial3Text"),
      stars: 5,
    },
    {
      name: t("testimonial4Name"),
      role: t("testimonial4Role"),
      text: t("testimonial4Text"),
      stars: 5,
    },
  ];

  const avatarColors = ["#0A7B6F", "#4F46E5", "#E11D48", "#D97706"];

  return (
    <section
      className="bg-bg-muted py-20 lg:py-28"
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-lg mx-auto mb-14 reveal">
          <h2 className="text-3xl lg:text-4xl font-bold text-text tracking-tight">
            {t("testimonialsTitle")}
          </h2>
          <p className="text-text-secondary mt-3">
            {t("testimonialsSub")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {/* Featured testimonial — first one, larger */}
          <div
            className="reveal sm:col-span-2 bg-primary text-white rounded-2xl p-8 relative overflow-hidden"
            style={{ transitionDelay: "0ms" }}
          >
            <div className="absolute top-0 end-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 rtl:-translate-x-1/2" />
            <div className="absolute bottom-0 start-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 rtl:translate-x-1/2" />

            <div className="relative">
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              <p className="text-lg sm:text-xl leading-relaxed mb-6 max-w-2xl">
                &ldquo;{testimonials[0].text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold bg-white/20"
                >
                  {testimonials[0].name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{testimonials[0].name}</p>
                  <p className="text-white/60 text-sm">{testimonials[0].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Remaining testimonials */}
          {testimonials.slice(1).map((item, i) => (
            <div
              key={i}
              className={`reveal bg-bg border border-border rounded-2xl p-6 hover:shadow-lg hover:border-border-hover transition-all ${
                i === 2 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(item.stars)].map((_, j) => (
                  <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              <p className="text-text text-sm leading-relaxed mb-5">
                &ldquo;{item.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ backgroundColor: avatarColors[i + 1] }}
                >
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-text">{item.name}</p>
                  <p className="text-xs text-text-tertiary">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
