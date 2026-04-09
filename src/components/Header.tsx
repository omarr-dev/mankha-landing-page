"use client";

import { useState, useEffect } from "react";
import { useI18n } from "@/i18n/context";
import { Menu, X, Globe } from "lucide-react";

export function Header() {
  const { t, toggleLocale, locale } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t("navHowItWorks"), href: "#how-it-works" },
    { label: t("navWhyMankha"), href: "#why-mankha" },
    { label: t("navForDrivers"), href: "#for-drivers" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-dark/95 backdrop-blur-md border-b border-border-dark shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-sm bg-primary flex items-center justify-center">
            <span className="text-white font-extrabold text-sm tracking-tight">M</span>
          </div>
          <span className="text-text-dark font-extrabold text-xl tracking-tight">
            {t("appName")}
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-text-muted-dark hover:text-text-dark text-sm font-medium transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:inset-x-0 after:h-[2px] after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-start"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleLocale}
            className="flex items-center gap-1.5 text-text-muted-dark hover:text-text-dark text-sm font-medium transition-colors cursor-pointer"
            aria-label={locale === "ar" ? "Switch to English" : "حوّل للعربي"}
          >
            <Globe className="w-4 h-4" />
            {t("language")}
          </button>
          <a
            href="#download"
            className="bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-5 py-2.5 rounded-sm transition-colors duration-200"
          >
            {t("navDownload")}
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-text-dark p-2 cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-bg-dark/98 backdrop-blur-md border-t border-border-dark animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-text-dark text-lg font-semibold py-2 border-b border-border-dark"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                toggleLocale();
                setMobileOpen(false);
              }}
              className="flex items-center gap-2 text-text-muted-dark text-lg font-medium py-2 cursor-pointer"
            >
              <Globe className="w-5 h-5" />
              {t("language")}
            </button>
            <a
              href="#download"
              onClick={() => setMobileOpen(false)}
              className="bg-primary text-white text-center font-semibold py-3 rounded-sm mt-2"
            >
              {t("navDownload")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
