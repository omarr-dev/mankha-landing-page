"use client";

import { useEffect } from "react";
import { API_URL, goPlayStoreUrl, USER_APP_STORE_URL } from "@/lib/links";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Fires the click beacon, then UA-redirects to the right store. Desktop (or
// unknown) stays on the page, which renders the badges + web-app CTA as the
// manual fallback. Small delay so the card paints first (same reasoning as
// /rate: an instant white-flash redirect reads as a broken link).
export function GoRedirect({ channel }: { channel: string }) {
  useEffect(() => {
    // Server-side count (admin "customer sources" page). POST with no body and
    // no custom headers = a simple request: no CORS preflight, and keepalive
    // lets it survive the navigation away.
    if (API_URL) {
      fetch(`${API_URL}/track/click?channel=${encodeURIComponent(channel)}`, {
        method: "POST",
        mode: "no-cors",
        keepalive: true,
      }).catch(() => {});
    }
    window.gtag?.("event", "go_link_click", {
      link_id: channel,
      transport_type: "beacon",
    });

    const ua = navigator.userAgent;
    const target = /iPhone|iPad|iPod/i.test(ua)
      ? USER_APP_STORE_URL
      : /Android/i.test(ua)
        ? goPlayStoreUrl(channel)
        : null;
    if (!target) return;
    const t = setTimeout(() => window.location.replace(target), 900);
    return () => clearTimeout(t);
  }, [channel]);
  return null;
}
