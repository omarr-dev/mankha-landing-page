"use client";

import { useState, useEffect, useCallback } from "react";
import { useI18n } from "@/i18n/context";

export function Header() {
  const { t, toggleLocale, locale } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const navLinks = [
    { label: t("navHowItWorks"), href: "#how-it-works" },
    { label: t("navWhyMankha"), href: "#why-mankha" },
    { label: t("navForDrivers"), href: "#for-drivers" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <img src="/logo.svg" alt="Mankha" className="w-8 h-8 shrink-0 group-hover:scale-105 transition-transform" />
          <span className="text-text font-bold text-lg tracking-tight">
            {t("appName")}
          </span>
        </a>

        {/* Desktop nav — pill-style links */}
        <div className="hidden lg:flex items-center gap-1 bg-bg/60 backdrop-blur-md rounded-full px-1.5 py-1 border border-border/60">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-text-secondary hover:text-text hover:bg-bg-muted text-sm px-4 py-1.5 rounded-full transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleLocale}
            className="flex items-center gap-1.5 text-text-secondary hover:text-text text-sm px-3 py-1.5 rounded-full hover:bg-bg-muted transition-all cursor-pointer"
            aria-label={locale === "ar" ? "Switch to English" : "حوّل للعربي"}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            {t("language")}
          </button>
          <a
            href="#download"
            className="bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors flex items-center gap-2"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            {t("navDownload")}
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-text p-2 cursor-pointer rounded-lg hover:bg-bg-muted transition-colors"
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

      {/* Backdrop overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 top-[72px] bg-black/20 backdrop-blur-sm z-[-1]"
          onClick={closeMobile}
        />
      )}

      {/* Mobile menu — slide down */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-bg/95 backdrop-blur-xl border-t border-border/60 px-6 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              className="text-text text-base font-medium py-3 px-3 rounded-xl hover:bg-bg-muted transition-colors"
            >
              {link.label}
            </a>
          ))}

          <div className="h-px bg-border/60 my-2" />

          <button
            onClick={() => {
              toggleLocale();
              closeMobile();
            }}
            className="flex items-center gap-2 text-text-secondary text-base py-3 px-3 rounded-xl hover:bg-bg-muted transition-colors cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            {t("language")}
          </button>

          <a
            href="#download"
            onClick={closeMobile}
            className="bg-primary hover:bg-primary-dark text-white text-center font-semibold py-3 rounded-xl mt-2 transition-colors flex items-center justify-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            {t("navDownload")}
          </a>
        </div>
      </div>
    </header>
  );
}
