"use client";

import { useI18n } from "@/i18n/context";

export function DriverFooter() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-text-tertiary">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="" aria-hidden className="w-5 h-5 opacity-80" />
          <span>
            © {year} {t("appName")}
          </span>
        </div>
        <div>{t("dpFooterNote")}</div>
      </div>
    </footer>
  );
}
