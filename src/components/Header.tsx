"use client";

import { useState, useEffect, useCallback } from "react";
import { useI18n } from "@/i18n/context";
import { DOWNLOAD_URL } from "@/lib/links";
import { BRAND_NAME_EN } from "@/brand";

export function Header() {
  const { t, toggleLocale, locale } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const navLinks = [
    { label: t("navHowItWorks"), href: "#how-it-works" },
    { label: t("navApp"), href: "#app-preview" },
    { label: t("navForDrivers"), href: "#for-drivers" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-parchment/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <img src="/logo.svg" alt={BRAND_NAME_EN} className="w-8 h-8 shrink-0 group-hover:scale-105 transition-transform" />
          <span
            className={
              locale === "ar"
                ? "font-arabic text-near-black text-[26px] font-semibold leading-none"
                : "font-serif text-near-black text-[22px] font-medium tracking-tight"
            }
          >
            {t("appName")}
          </span>
        </a>

        {/* Desktop nav — editorial inline links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-olive hover:text-near-black text-[15px] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-2">
          <button
            onClick={toggleLocale}
            className="flex items-center gap-1.5 text-olive hover:text-near-black text-[14px] px-3 py-2 rounded-lg transition-colors cursor-pointer"
            aria-label={locale === "ar" ? "Switch to English" : "حوّل للعربي"}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            {t("language")}
          </button>
          <a
            href={DOWNLOAD_URL}
            className="bg-terracotta hover:bg-terracotta-hover text-ivory text-[14px] font-medium px-5 py-2.5 rounded-[10px] transition-colors flex items-center gap-2 ring-warm"
            style={{ boxShadow: "0 0 0 1px #c96442" }}
          >
            {t("navDownload")}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={locale === "ar" ? "rotate-180" : ""}
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-near-black p-2 cursor-pointer rounded-lg hover:bg-sand transition-colors"
          aria-label="Toggle menu"
        >
          <div className="w-5 h-5 flex flex-col items-center justify-center gap-[5px]">
            <span
              className={`block w-5 h-[1.5px] bg-current transition-all duration-300 origin-center ${
                mobileOpen ? "rotate-45 translate-y-[3.25px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-current transition-all duration-300 origin-center ${
                mobileOpen ? "-rotate-45 -translate-y-[3.25px]" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Divider — fades in at edges, sits under the navbar */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--color-ring-warm) 18%, var(--color-ring-warm) 82%, transparent)",
        }}
      />

      {/* Backdrop overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 top-[72px] bg-near-black/20 backdrop-blur-sm z-[-1]"
          onClick={closeMobile}
        />
      )}

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-parchment/95 backdrop-blur-xl border-t border-border-cream px-6 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              className="text-near-black text-[17px] py-3 px-3 rounded-xl hover:bg-sand transition-colors"
            >
              {link.label}
            </a>
          ))}

          <div className="h-px bg-border-cream my-2" />

          <button
            onClick={() => {
              toggleLocale();
              closeMobile();
            }}
            className="flex items-center gap-2 text-olive text-[16px] py-3 px-3 rounded-xl hover:bg-sand transition-colors cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            {t("language")}
          </button>

          <a
            href={DOWNLOAD_URL}
            onClick={closeMobile}
            className="bg-terracotta hover:bg-terracotta-hover text-ivory text-center font-medium py-3 rounded-[10px] mt-2 transition-colors flex items-center justify-center gap-2"
          >
            {t("navDownload")}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={locale === "ar" ? "rotate-180" : ""}
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
