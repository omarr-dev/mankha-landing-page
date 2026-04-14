"use client";

import { useI18n } from "@/i18n/context";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/Button";

type Props = { registerHref: string };

export function DriverHero({ registerHref }: Props) {
  const { t, dir } = useI18n();
  const ref = useScrollReveal();
  const isRtl = dir === "rtl";

  return (
    <section
      ref={ref}
      className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden"
    >
      {/* Soft radial background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px 500px at 80% -10%, rgba(10,123,111,0.10), transparent 60%), radial-gradient(700px 400px at 10% 110%, rgba(10,123,111,0.06), transparent 60%)",
        }}
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-bg via-bg to-bg-muted" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Left — copy */}
          <div className="reveal">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 17h4V5H2v12h3" />
                <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" />
                <circle cx="7.5" cy="17.5" r="2.5" />
                <circle cx="17.5" cy="17.5" r="2.5" />
              </svg>
              {t("dpBadge")}
            </div>

            {/* Headline */}
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text tracking-tight leading-[1.05]">
              {t("dpHeadlineLead")}{" "}
              <span className="text-primary">{t("dpHeadlineHighlight")}</span>{" "}
              {t("dpHeadlineTail")}
            </h1>

            {/* Sub */}
            <p className="mt-5 text-text-secondary text-lg sm:text-xl leading-relaxed max-w-[520px]">
              {t("dpSub")}
            </p>

            {/* CTAs */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button href={registerHref} size="lg" showArrow>
                {t("dpCtaRegister")}
              </Button>
            </div>

            {/* Trust strip */}
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-text-tertiary text-sm">
              <TrustItem label={t("dpTrustFree")} />
              <span className="opacity-40">•</span>
              <TrustItem label={t("dpTrustApproval")} />
              <span className="opacity-40">•</span>
              <TrustItem label={t("dpTrustCities")} />
            </div>
          </div>

          {/* Right — notification mockup */}
          <div className="reveal">
            <NotificationMock
              title={t("dpNotifTitle")}
              time={t("dpNotifTime")}
              body={t("dpNotifBody")}
              cta={t("dpNotifOffer")}
              isRtl={isRtl}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustItem({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <polyline points="20 6 9 17 4 12" />
      </svg>
      {label}
    </span>
  );
}

function NotificationMock({
  title,
  time,
  body,
  cta,
  isRtl,
}: {
  title: string;
  time: string;
  body: string;
  cta: string;
  isRtl: boolean;
}) {
  return (
    <div className="relative mx-auto max-w-[420px]">
      {/* Phone frame */}
      <div className="relative rounded-[36px] bg-[#111] p-3 shadow-2xl shadow-black/20">
        <div className="relative rounded-[28px] bg-gradient-to-b from-[#075E54] to-[#128C7E] aspect-[9/16] overflow-hidden">
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pt-4 text-white/90 text-xs font-medium">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor"><rect x="0" y="6" width="2" height="4" rx="0.5"/><rect x="4" y="4" width="2" height="6" rx="0.5"/><rect x="8" y="2" width="2" height="8" rx="0.5"/><rect x="12" y="0" width="2" height="10" rx="0.5"/></svg>
              <svg width="14" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C7 3 2.7 5 0 8l2 2c2.5-2.5 6-4 10-4s7.5 1.5 10 4l2-2C21.3 5 17 3 12 3zm0 6c-2.8 0-5.3 1-7 2.5l2 2c1.3-1.3 3-2 5-2s3.7.7 5 2l2-2C17.3 10 14.8 9 12 9zm0 6a3 3 0 100 6 3 3 0 000-6z"/></svg>
            </div>
          </div>

          {/* Lock screen date */}
          <div className="text-center mt-10 text-white">
            <div className="text-sm font-medium opacity-80">Friday, April 12</div>
            <div className="text-6xl font-light tracking-tighter mt-1">9:41</div>
          </div>

          {/* Notification card — the hero anchor */}
          <div className="absolute inset-x-4 bottom-8">
            <div
              className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl"
              style={{ animation: "pulse-subtle 3s ease-in-out infinite" }}
            >
              <div className="flex items-start gap-3" dir={isRtl ? "rtl" : "ltr"}>
                {/* WhatsApp icon */}
                <div className="shrink-0 w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center text-white">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.52 3.48A11.94 11.94 0 0 0 12.05 0C5.5 0 .18 5.32.18 11.87c0 2.09.55 4.13 1.6 5.93L0 24l6.35-1.66a11.86 11.86 0 0 0 5.7 1.45h.01c6.55 0 11.87-5.32 11.87-11.87 0-3.17-1.24-6.15-3.41-8.44z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <div className="font-bold text-[#111] text-sm truncate">{title}</div>
                    <div className="text-[11px] text-[#888] shrink-0">{time}</div>
                  </div>
                  <div className="text-[13px] text-[#444] leading-snug mt-0.5">{body}</div>
                  <div className="mt-2.5 inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#0A7B6F]">
                    {cta}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={isRtl ? "rotate-180" : ""}>
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating accent dot */}
      <div className="absolute -top-2 -right-2 w-16 h-16 rounded-full bg-primary/10 blur-2xl" />

      <style jsx>{`
        @keyframes pulse-subtle {
          0%, 100% { transform: translateY(0); box-shadow: 0 10px 30px rgba(0,0,0,0.15); }
          50% { transform: translateY(-3px); box-shadow: 0 18px 40px rgba(0,0,0,0.2); }
        }
      `}</style>
    </div>
  );
}
