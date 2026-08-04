"use client";

import { useEffect } from "react";
import {
  USER_APP_STORE_REVIEW_URL,
  USER_PLAY_STORE_REVIEW_URL,
} from "@/lib/links";

// UA-based redirect to the right review destination. Desktop (or unknown)
// stays on the page, which renders both store links as the manual fallback.
// Small delay so the card paints first — an instant white-flash redirect reads
// as a broken link when the store takes a second to open.
export function RateRedirect() {
  useEffect(() => {
    const ua = navigator.userAgent;
    const target = /iPhone|iPad|iPod/i.test(ua)
      ? USER_APP_STORE_REVIEW_URL
      : /Android/i.test(ua)
        ? USER_PLAY_STORE_REVIEW_URL
        : null;
    if (!target) return;
    const t = setTimeout(() => window.location.replace(target), 900);
    return () => clearTimeout(t);
  }, []);
  return null;
}
