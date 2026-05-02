"use client";

import { useI18n } from "@/i18n/context";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/Button";
import { withLocale } from "@/lib/links";

type Props = { registerHref: string };

export function DriverFinalCta({ registerHref }: Props) {
  const { t, locale } = useI18n();
  const href = withLocale(registerHref, locale);
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="reveal relative overflow-hidden rounded-3xl bg-primary text-white px-6 sm:px-12 py-14 lg:py-16">
          {/* Decorative rings */}
          <div aria-hidden className="absolute -top-24 -right-24 w-72 h-72 rounded-full border border-white/15" />
          <div aria-hidden className="absolute -bottom-32 -left-16 w-96 h-96 rounded-full border border-white/10" />
          <div
            aria-hidden
            className="absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(600px 300px at 80% 30%, rgba(255,255,255,0.12), transparent 60%)",
            }}
          />

          <div className="relative flex flex-col items-center text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              {t("dpFinalTitle")}
            </h2>
            <p className="mt-4 text-white/85 text-base sm:text-lg max-w-xl leading-relaxed">
              {t("dpFinalSub")}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href={href} variant="inverse" size="lg" showArrow>
                {t("dpFinalCta")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
