"use client";

import { useI18n } from "@/i18n/context";
import { DRIVER_APP_STORE_URL, DRIVER_PLAY_STORE_URL } from "@/lib/links";

const COPY = {
  ar: {
    appStoreTop: "حمّله من",
    appStoreName: "App Store",
    playTop: "احصل عليه من",
    playName: "Google Play",
  },
  en: {
    appStoreTop: "Download on the",
    appStoreName: "App Store",
    playTop: "GET IT ON",
    playName: "Google Play",
  },
} as const;

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

type Props = {
  /** "dark" = black badges (default). "light" = white badges for dark/colored sections. */
  tone?: "dark" | "light";
  className?: string;
};

export function StoreBadges({ tone = "dark", className = "" }: Props) {
  const { locale } = useI18n();
  const copy = COPY[locale === "en" ? "en" : "ar"];

  const badgeClass =
    tone === "light"
      ? "bg-white text-[#111] hover:bg-white/90 border border-black/5"
      : "bg-[#111] text-white hover:bg-black border border-white/15";

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href={DRIVER_APP_STORE_URL}
        target="_blank"
        rel="noopener"
        className={`inline-flex items-center gap-3 rounded-[12px] px-5 py-2.5 transition-colors ${badgeClass}`}
      >
        <AppleLogo className="w-[22px] h-[26px] shrink-0" />
        <span className="flex flex-col text-start leading-tight">
          <span className="font-sans text-[11px] opacity-75">{copy.appStoreTop}</span>
          <span className="font-sans text-[17px] font-semibold -mt-0.5">{copy.appStoreName}</span>
        </span>
      </a>
      <a
        href={DRIVER_PLAY_STORE_URL}
        target="_blank"
        rel="noopener"
        className={`inline-flex items-center gap-3 rounded-[12px] px-5 py-2.5 transition-colors ${badgeClass}`}
      >
        <PlayLogo className="w-[24px] h-[24px] shrink-0" />
        <span className="flex flex-col text-start leading-tight">
          <span className="font-sans text-[11px] opacity-75">{copy.playTop}</span>
          <span className="font-sans text-[17px] font-semibold -mt-0.5">{copy.playName}</span>
        </span>
      </a>
    </div>
  );
}
