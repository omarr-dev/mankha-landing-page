"use client";

import { useI18n } from "@/i18n/context";
import { BRAND_NAME_EN } from "@/brand";

type Props = { registerHref: string };

export function DriverTopBar({ registerHref }: Props) {
  const { t, toggleLocale, locale } = useI18n();

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-bg/80 backdrop-blur-xl border-b border-border/60">
      <nav className="max-w-6xl mx-auto px-5 sm:px-6 flex items-center justify-between h-[64px]">
        <a href="/" className="flex items-center gap-2.5 group">
          <img
            src="/logo.svg"
            alt={BRAND_NAME_EN}
            className="w-7 h-7 shrink-0 group-hover:scale-105 transition-transform"
          />
          <span
            className={
              locale === "ar"
                ? "font-arabic text-text font-semibold text-[20px] leading-none"
                : "text-text font-bold text-base tracking-tight"
            }
          >
            {t("appName")}
          </span>
        </a>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={toggleLocale}
            aria-label={locale === "ar" ? "Switch to English" : "حوّل للعربي"}
            className="flex items-center gap-1.5 text-text-secondary hover:text-text text-sm px-3 py-2 rounded-full hover:bg-bg-muted transition-all cursor-pointer"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span className="hidden sm:inline">{t("language")}</span>
          </button>

          <a
            href={registerHref}
            className="bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-colors"
          >
            {t("dpCtaRegister")}
          </a>
        </div>
      </nav>
    </header>
  );
}
