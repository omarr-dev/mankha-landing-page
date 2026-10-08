"use client";

import { useEffect, useState } from "react";
import { BRAND_NAME_AR, BRAND_NAME_EN } from "@/brand";
import {
  API_URL,
  goPlayStoreUrl,
  SOCIAL_INSTAGRAM_URL,
  SOCIAL_TIKTOK_URL,
  userAppStoreUrl,
} from "@/lib/links";
import type { Locale } from "@/lib/seo";

/* --------------------------------- copy --------------------------------- */

const COPY = {
  ar: {
    dir: "rtl" as const,
    docTitle: `${BRAND_NAME_AR} | التطبيق والروابط`,
    name: BRAND_NAME_AR,
    desc: "تطلب سطحة من جوالك، تجيك عروض الكباتن القريبين وتختار اللي يناسبك.",
    appStoreTop: "حمّله من",
    playTop: "احصل عليه من",
    driver: "انضم كـ كابتن",
    driverSub: "شروط الانضمام وطريقة التسجيل",
    site: "الموقع الإلكتروني",
    siteSub: "wire.sa",
    privacy: "الخصوصية",
    terms: "الشروط",
    switch: "English",
  },
  en: {
    dir: "ltr" as const,
    docTitle: `${BRAND_NAME_EN} | app and links`,
    name: BRAND_NAME_EN,
    desc: "Request a tow from your phone, get offers from nearby drivers, and pick the one you want.",
    appStoreTop: "Download on the",
    playTop: "GET IT ON",
    driver: "Drive with Wire",
    driverSub: "Requirements and how to sign up",
    site: "Our website",
    siteSub: "wire.sa",
    privacy: "Privacy",
    terms: "Terms",
    switch: "العربية",
  },
} as const;

/* ------------------------------- analytics ------------------------------ */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** One event name for every tap on this page; `link_id` tells them apart. */
function track(linkId: string) {
  window.gtag?.("event", "bio_link_click", { link_id: linkId });
}

/* --------------------------------- icons -------------------------------- */

function AppleLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 384 512" fill="currentColor" className={className} aria-hidden>
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 140.3 4 184.8 4 275.5c0 26.8 4.9 54.5 14.7 83.1 13.1 37.6 60.4 129.7 109.7 128.2 25.8-.6 44-18.3 77.5-18.3 32.5 0 49.3 18.3 78 18.3 49.7-.7 92.5-84.4 105-122.1-66.7-31.4-70.2-92.1-70.2-96zM255.5 96.2c26.1 2 49.9-11.4 69.5-34.3 27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9z" />
    </svg>
  );
}

function PlayLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="#00C3FF" d="M4 2.5 13.5 12 4 21.5Z" />
      <path fill="#00DE76" d="M4 2.5 17 9.7 13.5 12Z" />
      <path fill="#FFCF00" d="M13.5 12 17 9.7 21 12l-4 2.3Z" />
      <path fill="#FF3A44" d="M4 21.5 13.5 12l3.5 2.3Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

function Arrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

/** Brand mark — inlined (not <img>) so the "W" draws itself once on load. */
function LogoMark() {
  return (
    <svg viewBox="0 0 512 512" fill="none" className="h-full w-full" aria-hidden>
      <rect width="512" height="512" rx="116" fill="#c96442" />
      <path
        className="wire-draw"
        d="M96 210 L176 322 L256 210 L336 322 L416 210"
        stroke="#faf9f5"
        strokeWidth="42"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* --------------------------------- page --------------------------------- */

export function LinksClient() {
  const [locale, setLocale] = useState<Locale>("ar");
  // Which bio this visit came from: /links?src=tiktok vs ?src=instagram.
  // Untagged visits count under the generic "links" channel.
  const [channel, setChannel] = useState("links");
  const c = COPY[locale];

  // The layout renders <html lang="ar" dir="rtl"> — keep it in sync with the
  // in-page toggle so the rtl:/ltr: variants and text direction follow.
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = c.dir;
    document.title = c.docTitle;
  }, [locale, c.dir, c.docTitle]);

  // Count the bio visit server-side (same beacon shape as /go/<channel>).
  useEffect(() => {
    const src = new URLSearchParams(window.location.search).get("src")?.toLowerCase() ?? "";
    const ch = /^[a-z0-9_-]{1,40}$/.test(src) ? src : "links";
    setChannel(ch);
    if (API_URL) {
      fetch(`${API_URL}/track/click?channel=${encodeURIComponent(ch)}`, {
        method: "POST",
        mode: "no-cors",
        keepalive: true,
      }).catch(() => {});
    }
  }, []);

  const storeClass =
    "flex items-center justify-center gap-3 rounded-[14px] bg-near-black px-4 py-3.5 text-ivory transition-colors hover:bg-[#000]";

  const rowClass =
    "group flex items-center gap-3 rounded-[14px] border border-border-warm bg-ivory px-4 py-3.5 transition-colors hover:border-ring-warm";

  return (
    <main className="min-h-dvh bg-parchment px-5 pb-12 pt-6 text-near-black">
      <div className="wire-in mx-auto w-full max-w-[420px]">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => setLocale(locale === "ar" ? "en" : "ar")}
            className="cursor-pointer text-[13px] font-medium text-stone underline-offset-4 transition-colors hover:text-near-black hover:underline"
          >
            {c.switch}
          </button>
        </div>

        {/* Identity */}
        <header className="mt-4 flex flex-col items-center text-center">
          <div className="h-16 w-16 overflow-hidden rounded-[19px]">
            <LogoMark />
          </div>
          <h1 className="mt-4 text-[26px] font-bold leading-none tracking-[-0.01em]">
            {c.name}
          </h1>
          <p className="mt-3 max-w-[330px] text-[15px] leading-[1.65] text-charcoal">
            {c.desc}
          </p>
        </header>

        <div className="mt-7 grid gap-2.5">
          <a
            href={`/${locale}?utm_source=${channel}&utm_medium=bio`}
            onClick={() => track("website")}
            className={rowClass}
          >
            <span className="min-w-0 flex-1 text-start">
              <span className="block text-[15px] font-semibold">{c.site}</span>
              <span className="mt-0.5 block text-[12.5px] text-stone">
                {c.siteSub}
              </span>
            </span>
            <Arrow className="h-4 w-4 shrink-0 text-warm-silver transition-colors group-hover:text-terracotta rtl:rotate-180" />
          </a>

          <a
            href={userAppStoreUrl(`bio_${channel}`)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("user_app_store")}
            className={storeClass}
          >
            <AppleLogo className="h-[23px] w-[20px] shrink-0" />
            <span className="flex flex-col text-start leading-tight">
              <span className="text-[10.5px] opacity-70">{c.appStoreTop}</span>
              <span className="-mt-0.5 text-[16px] font-semibold">App Store</span>
            </span>
          </a>
          <a
            href={goPlayStoreUrl(channel, "bio")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("user_play_store")}
            className={storeClass}
          >
            <PlayLogo className="h-[22px] w-[22px] shrink-0" />
            <span className="flex flex-col text-start leading-tight">
              <span className="text-[10.5px] opacity-70">{c.playTop}</span>
              <span className="-mt-0.5 text-[16px] font-semibold">Google Play</span>
            </span>
          </a>
        </div>

        {/* Driver acquisition goes to the drivers page on the site, not to the
            store: a captain reads the terms before installing anything. */}
        <div className="mt-2.5">
          <a
            href={`/${locale}/drivers`}
            onClick={() => track("drivers_page")}
            className={rowClass}
          >
            <span className="min-w-0 flex-1 text-start">
              <span className="block text-[15px] font-semibold">{c.driver}</span>
              <span className="mt-0.5 block text-[12.5px] text-stone">
                {c.driverSub}
              </span>
            </span>
            <Arrow className="h-4 w-4 shrink-0 text-warm-silver transition-colors group-hover:text-terracotta rtl:rotate-180" />
          </a>
        </div>

        {/* Socials + legal */}
        <footer className="mt-9 flex flex-col items-center gap-4">
          <div className="flex items-center gap-4 text-stone">
            <a
              href={SOCIAL_INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              onClick={() => track("instagram")}
              className="transition-colors hover:text-near-black"
            >
              <InstagramIcon className="h-[19px] w-[19px]" />
            </a>
            <a
              href={SOCIAL_TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              onClick={() => track("tiktok")}
              className="transition-colors hover:text-near-black"
            >
              <TikTokIcon className="h-[18px] w-[18px]" />
            </a>
          </div>

          <div className="flex items-center gap-3 text-[12px] text-warm-silver">
            <a href={`/${locale}/privacy`} className="transition-colors hover:text-stone">
              {c.privacy}
            </a>
            <span>·</span>
            <a href={`/${locale}/terms`} className="transition-colors hover:text-stone">
              {c.terms}
            </a>
            <span>·</span>
            <span dir="ltr">© {new Date().getFullYear()} {BRAND_NAME_EN}</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
