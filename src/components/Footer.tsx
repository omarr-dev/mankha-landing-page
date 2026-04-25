"use client";

import { useState } from "react";
import { useI18n } from "@/i18n/context";
import {
  SOCIAL_INSTAGRAM_URL,
  SOCIAL_LINKEDIN_URL,
  SOCIAL_X_URL,
} from "@/lib/links";
import { BRAND_NAME_EN } from "@/brand";
import { ContactChoiceDialog } from "./ContactChoiceDialog";

type FooterLink =
  | { label: string; href: string }
  | { label: string; onClick: () => void };

export function Footer() {
  const { t, locale } = useI18n();
  const [contact, setContact] = useState<{ title: string; topic: string } | null>(null);

  const openContact = (title: string, topic: string) =>
    setContact({ title, topic });

  const linkGroups: { title: string; links: FooterLink[] }[] = [
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
        {
          label: t("footerHelpCenter"),
          onClick: () =>
            openContact(t("footerHelpCenter"), t("contactTopicHelp")),
        },
        {
          label: t("footerContact"),
          onClick: () =>
            openContact(t("footerContact"), t("contactTopicContact")),
        },
      ],
    },
    {
      title: t("footerLegal"),
      links: [
        { label: t("footerPrivacy"), href: "/privacy" },
        { label: t("footerTerms"), href: "/terms" },
      ],
    },
  ];

  return (
    <footer className="bg-near-black text-ivory">
      <div className="max-w-[1200px] mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10">
          {/* Brand column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-5">
              <img src="/logo.svg" alt={BRAND_NAME_EN} className="w-8 h-8 shrink-0" />
              <span
                className={
                  locale === "ar"
                    ? "font-arabic text-ivory text-[26px] font-semibold leading-none"
                    : "font-serif text-ivory text-[22px] font-medium"
                }
              >
                {t("appName")}
              </span>
            </div>
            <p className="font-sans text-warm-silver text-[15px] leading-[1.6] max-w-sm mb-8">
              {t("footerTagline")}
            </p>

            {/* Social links */}
            <div className="flex items-center gap-2">
              {[
                {
                  label: "X",
                  href: SOCIAL_X_URL,
                  icon: (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
                {
                  label: "Instagram",
                  href: SOCIAL_INSTAGRAM_URL,
                  icon: (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                    </svg>
                  ),
                },
                {
                  label: "LinkedIn",
                  href: SOCIAL_LINKEDIN_URL,
                  icon: (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-[10px] bg-dark-surface flex items-center justify-center text-warm-silver hover:text-ivory hover:bg-[#3d3d3a] transition-colors border border-border-dark"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-10">
            {linkGroups.map((group) => (
              <div key={group.title}>
                <p className="font-sans text-warm-silver/70 text-[11px] font-medium uppercase tracking-[0.12em] mb-5">
                  {group.title}
                </p>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      {"href" in link ? (
                        <a
                          href={link.href}
                          className="font-sans text-warm-silver hover:text-ivory text-[15px] transition-colors"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <button
                          type="button"
                          onClick={link.onClick}
                          className="font-sans text-warm-silver hover:text-ivory text-[15px] transition-colors text-start cursor-pointer"
                        >
                          {link.label}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-border-dark flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-stone text-[13px]">
            &copy; {new Date().getFullYear()} {t("footerCopyright")}
          </p>
          <p className="font-sans text-stone text-[13px] flex items-center gap-1.5">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-coral">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {t("footerMadeIn")}
          </p>
        </div>
      </div>
      <ContactChoiceDialog
        open={contact !== null}
        onClose={() => setContact(null)}
        title={contact?.title ?? ""}
        topic={contact?.topic ?? ""}
      />
    </footer>
  );
}
