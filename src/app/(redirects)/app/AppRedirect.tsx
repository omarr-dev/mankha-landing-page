"use client";

import { useEffect } from "react";
import { USER_PLAY_STORE_URL, userAppStoreUrl } from "@/lib/links";

// UA-based store redirect for the customer app. Desktop (or unknown) stays on
// the page, which renders both store links as the manual fallback.
export function AppRedirect() {
  useEffect(() => {
    const ua = navigator.userAgent;
    if (/iPhone|iPad|iPod/i.test(ua)) {
      window.location.replace(userAppStoreUrl("site_app"));
    } else if (/Android/i.test(ua)) {
      window.location.replace(USER_PLAY_STORE_URL);
    }
  }, []);
  return null;
}
