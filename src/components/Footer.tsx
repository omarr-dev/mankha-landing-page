"use client";

import { useState } from "react";
import { useI18n } from "@/i18n/context";
import {
  SOCIAL_INSTAGRAM_URL,
  SOCIAL_TIKTOK_URL,
} from "@/lib/links";
import { localePath } from "@/lib/seo";
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
        // Locale-prefixed, not bare: a bare "/drivers" is 308'd by the proxy to
        // the *default* locale, which drops an English visitor into Arabic.
        {
          label: t("footerHowItWorks"),
          href: `${localePath(locale, "/")}#how-it-works`,
        },
        { label: t("footerForDrivers"), href: localePath(locale, "/drivers") },
        { label: t("footerGuides"), href: localePath(locale, "/guides") },
        { label: t("footerCities"), href: localePath(locale, "/cities") },
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
        { label: t("footerPrivacy"), href: localePath(locale, "/privacy") },
        { label: t("footerTerms"), href: localePath(locale, "/terms") },
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
                  label: "TikTok",
                  href: SOCIAL_TIKTOK_URL,
                  icon: (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
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
