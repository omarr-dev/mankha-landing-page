"use client";

import { useEffect } from "react";
import { APP_URL } from "@/lib/links";

// Attribution relay for the marketing site.
//
// The site itself is where most journeys BEGIN (Google SEO, TikTok bio), but
// signups happen on the web app — a different origin — so the source would be
// lost at the hop. This component:
//
//  1. On mount, stores the first utm_* params it ever sees in a cookie
//     (first-touch, 30 days). /links?src=tiktok forwards here as
//     ?utm_source=tiktok&utm_medium=bio.
//  2. When nothing was stored, derives an organic source from document.referrer
//     — google/bing → "google"/"bing" + medium "organic".
//  3. At click time, appends the attribution to any link that points at the
//     web app (APP_URL), so the app's own UTM capture picks it up on arrival.
//
// Click-time decoration (capture phase) instead of rewriting hrefs on mount
// keeps the server-rendered markup stable for hydration.

const UTM_COOKIE = "wire_utm";
const TTL_DAYS = 30;

interface Utm {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}

function readCookie(name: string): string | null {
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}=([^;]*)`)
  );
  return match ? decodeURIComponent(match[1]) : null;
}

function writeCookie(name: string, value: string) {
  const expires = new Date(Date.now() + TTL_DAYS * 86_400_000).toUTCString();
  const secure = location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; expires=${expires}; SameSite=Lax${secure}`;
}

function sanitize(value: string | null | undefined): string | undefined {
  const trimmed = value?.trim().slice(0, 100);
  return trimmed ? trimmed : undefined;
}

function storedUtm(): Utm | null {
  const raw = readCookie(UTM_COOKIE);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as Utm;
    return {
      utm_source: sanitize(parsed.utm_source),
      utm_medium: sanitize(parsed.utm_medium),
      utm_campaign: sanitize(parsed.utm_campaign),
    };
  } catch {
    return null;
  }
}

function referrerUtm(): Utm | null {
  try {
    if (!document.referrer) return null;
    const host = new URL(document.referrer).hostname;
    if (host === location.hostname) return null; // internal navigation
    if (/(^|\.)google\./.test(host)) return { utm_source: "google", utm_medium: "organic" };
    if (/(^|\.)bing\./.test(host)) return { utm_source: "bing", utm_medium: "organic" };
    return null;
  } catch {
    return null;
  }
}

export function UtmForward() {
  useEffect(() => {
    // 1) First-touch capture from the current URL, else from the referrer.
    if (!readCookie(UTM_COOKIE)) {
      const params = new URLSearchParams(window.location.search);
      const fromUrl: Utm = {
        utm_source: sanitize(params.get("utm_source")),
        utm_medium: sanitize(params.get("utm_medium")),
        utm_campaign: sanitize(params.get("utm_campaign")),
      };
      const utm =
        fromUrl.utm_source || fromUrl.utm_medium || fromUrl.utm_campaign
          ? fromUrl
          : referrerUtm();
      if (utm) writeCookie(UTM_COOKIE, JSON.stringify(utm));
    }

    // 2) Decorate app-bound links as they're clicked.
    const appOrigin = (() => {
      try {
        return new URL(APP_URL).origin;
      } catch {
        return null;
      }
    })();
    if (!appOrigin) return;

    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as Element | null)?.closest?.("a");
      if (!anchor?.href) return;
      let url: URL;
      try {
        url = new URL(anchor.href);
      } catch {
        return;
      }
      if (url.origin !== appOrigin || url.searchParams.has("utm_source")) return;

      // A cookie written from a campaign-only URL carries no source; fall back to the referrer then.
      const stored = storedUtm();
      const utm = stored?.utm_source ? stored : referrerUtm();
      if (!utm?.utm_source) return;
      url.searchParams.set("utm_source", utm.utm_source);
      if (utm.utm_medium) url.searchParams.set("utm_medium", utm.utm_medium);
      if (utm.utm_campaign) url.searchParams.set("utm_campaign", utm.utm_campaign);
      anchor.href = url.toString();
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
