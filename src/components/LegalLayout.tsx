"use client";

import { useI18n } from "@/i18n/context";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { LegalContent } from "@/content/legal";
import { LEGAL_LAST_UPDATED, LEGAL_CONTACT_EMAIL } from "@/content/legal";

type Props = {
  en: LegalContent;
  ar: LegalContent;
};

export function LegalLayout({ en, ar }: Props) {
  const { locale, toggleLocale } = useI18n();
  const content = locale === "ar" ? ar : en;
  const isRtl = locale === "ar";
  const BackArrow = isRtl ? ArrowRight : ArrowLeft;

  return (
    <main
      dir={isRtl ? "rtl" : "ltr"}
      className={`min-h-screen bg-bg text-text ${
        isRtl ? "font-[family-name:var(--font-arabic)]" : ""
      }`}
    >
      <header className="border-b border-border/60 bg-bg/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-text hover:text-primary transition-colors text-sm font-medium"
          >
            <BackArrow className="w-4 h-4" />
            {content.backToHome}
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-2 group"
              aria-label="Mankha"
            >
              <img
                src="/logo.svg"
                alt=""
                className="w-7 h-7 group-hover:scale-105 transition-transform"
              />
            </Link>
            <button
              onClick={toggleLocale}
              className="text-text-secondary hover:text-text text-sm px-3 py-1.5 rounded-full hover:bg-bg-muted transition-colors"
            >
              {isRtl ? "English" : "العربية"}
            </button>
          </div>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-6 py-12 sm:py-16">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
            {content.lastUpdatedLabel} · {LEGAL_LAST_UPDATED}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-5">
            {content.title}
          </h1>
          <p className="text-text-secondary leading-relaxed">
            {content.intro}
          </p>
        </div>

        <nav
          aria-label="Table of contents"
          className="mb-12 p-5 rounded-xl bg-bg-muted border border-border"
        >
          <ol
            className={`text-sm space-y-1.5 ${
              isRtl ? "list-arabic" : ""
            }`}
          >
            {content.sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  {section.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="space-y-10">
          {content.sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-text">
                {section.heading}
              </h2>
              <div className="space-y-3 text-[15px] leading-[1.75] text-text-secondary">
                {section.body.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-16 pt-10 border-t border-border">
          <h2 className="text-lg font-bold mb-3">{content.contactHeading}</h2>
          <p className="text-text-secondary leading-relaxed mb-3">
            {content.contactBody}
          </p>
          <a
            href={`mailto:${LEGAL_CONTACT_EMAIL}`}
            className="text-primary hover:text-primary-dark font-medium"
          >
            {LEGAL_CONTACT_EMAIL}
          </a>
        </section>
      </article>
    </main>
  );
}
