"use client";

import { useI18n } from "@/i18n/context";

export function Footer() {
  const { t, locale } = useI18n();

  const columns = [
    {
      title: t("footerProduct"),
      links: [
        { label: t("footerHowItWorks"), href: "#how-it-works" },
        { label: t("footerForDrivers"), href: "#for-drivers" },
        { label: t("footerPricing"), href: "#" },
      ],
    },
    {
      title: t("footerCompany"),
      links: [
        { label: t("footerAbout"), href: "#" },
        { label: t("footerCareers"), href: "#" },
        { label: t("footerBlog"), href: "#" },
      ],
    },
    {
      title: t("footerSupport"),
      links: [
        { label: t("footerHelpCenter"), href: "#" },
        { label: t("footerContact"), href: "#" },
        { label: t("footerSafety"), href: "#" },
      ],
    },
    {
      title: t("footerLegal"),
      links: [
        { label: t("footerPrivacy"), href: "#" },
        { label: t("footerTerms"), href: "#" },
        { label: t("footerCookies"), href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-bg-dark border-t border-border-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-sm bg-primary flex items-center justify-center">
                <span className="text-white font-extrabold text-sm">M</span>
              </div>
              <span className="text-text-dark font-extrabold text-xl tracking-tight">
                {t("appName")}
              </span>
            </div>
            <p className="text-text-muted-dark font-light text-sm leading-relaxed max-w-xs mb-6">
              {t("footerTagline")}
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {["X", "IG", "LI"].map((label) => (
                <a
                  key={label}
                  href="#"
                  className="w-9 h-9 bg-surface-dark border border-border-dark rounded-sm flex items-center justify-center text-text-muted-dark hover:text-primary hover:border-primary/40 transition-colors text-xs font-bold"
                  aria-label={label}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-text-dark font-bold text-sm mb-4 uppercase tracking-wider">
                {col.title}
              </p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-text-muted-dark hover:text-primary text-sm font-light transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border-dark flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted-dark text-xs font-light">
            &copy; {new Date().getFullYear()} {t("footerCopyright")}
          </p>
          <p className="text-text-muted-dark text-xs font-light flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" />
            {t("footerMadeIn")}
          </p>
        </div>
      </div>
    </footer>
  );
}
