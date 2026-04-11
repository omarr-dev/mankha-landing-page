"use client";

import { useI18n } from "@/i18n/context";

export function Footer() {
  const { t, locale } = useI18n();
  const isRtl = locale === "ar";

  const linkGroups = [
    {
      title: t("footerProduct"),
      links: [
        { label: t("footerHowItWorks"), href: "#how-it-works" },
        { label: t("footerForDrivers"), href: "#for-drivers" },
        { label: t("footerPricing"), href: "#" },
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
      ],
    },
  ];

  return (
    <footer className="bg-[#0C0C0C] text-white">
      {/* CTA Banner */}
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-8 sm:p-12 text-center mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            {t("footerCtaTitle")}
          </h3>
          <p className="text-white/80 text-sm sm:text-base max-w-md mx-auto mb-6">
            {t("footerCtaSub")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-white text-primary font-semibold text-sm px-6 py-3 rounded-lg hover:bg-white/90 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {t("footerCtaDownload")}
            </a>
            <a
              href="#for-drivers"
              className="inline-flex items-center gap-2 bg-white/15 text-white font-semibold text-sm px-6 py-3 rounded-lg hover:bg-white/25 transition-colors backdrop-blur-sm"
            >
              {t("footerCtaDriver")}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={isRtl ? "rotate-180" : ""}
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <img src="/logo.svg" alt="Mankha" className="w-8 h-8 shrink-0" />
              <span className="text-white font-semibold text-xl">
                {t("appName")}
              </span>
            </div>
            <p className="text-[#888] text-sm leading-relaxed max-w-sm mb-6">
              {t("footerTagline")}
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {[
                {
                  label: "X",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
                {
                  label: "Instagram",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                    </svg>
                  ),
                },
                {
                  label: "LinkedIn",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-white/8 flex items-center justify-center text-[#888] hover:text-white hover:bg-white/15 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="md:col-span-7 grid grid-cols-3 gap-6">
            {linkGroups.map((group) => (
              <div key={group.title}>
                <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-4">
                  {group.title}
                </p>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[#999] hover:text-white text-sm transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#555] text-xs">
            &copy; {new Date().getFullYear()} {t("footerCopyright")}
          </p>
          <p className="text-[#555] text-xs flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {t("footerMadeIn")}
          </p>
        </div>
      </div>
    </footer>
  );
}
