"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/context";
import { useLocaleSwitchHref } from "@/i18n/useLocaleSwitch";
import { BRAND_NAME_EN } from "@/brand";
import { Button } from "@/components/ui/Button";
import { withLocale } from "@/lib/links";
import { localePath } from "@/lib/seo";

type Props = { registerHref: string };

export function DriverTopBar({ registerHref }: Props) {
  const { t, locale } = useI18n();
  const switchHref = useLocaleSwitchHref();
  const href = withLocale(registerHref, locale);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-bg/80 backdrop-blur-xl border-b border-border/60">
      <nav className="max-w-6xl mx-auto px-5 sm:px-6 flex items-center justify-between h-[64px]">
        <Link href={localePath(locale, "/")} className="flex items-center gap-2.5 group">
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
        </Link>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <Link
            href={switchHref}
            hrefLang={locale === "ar" ? "en" : "ar"}
            aria-label={locale === "ar" ? "Switch to English" : "حوّل للعربي"}
            className="flex items-center gap-1.5 text-text-secondary hover:text-text text-sm px-3 py-2 rounded-full hover:bg-bg-muted transition-all cursor-pointer"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span className="hidden sm:inline">{t("language")}</span>
          </Link>

          <Button href={href} size="sm">
            {t("dpCtaRegister")}
          </Button>
        </div>
      </nav>
    </header>
  );
}
