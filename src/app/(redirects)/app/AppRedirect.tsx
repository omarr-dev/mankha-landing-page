"use client";

import { useEffect } from "react";
import { APP_URL, USER_APP_STORE_URL, USER_PLAY_STORE_URL } from "@/lib/links";

// UA-based redirect for the customer app: iOS → App Store, Android → Play
// once it's live (falls back to the web app until then). Desktop stays on
// the page, which renders the manual links.
export function AppRedirect() {
  useEffect(() => {
    const ua = navigator.userAgent;
    if (/iPhone|iPad|iPod/i.test(ua)) {
      window.location.replace(USER_APP_STORE_URL);
    } else if (/Android/i.test(ua)) {
      window.location.replace(USER_PLAY_STORE_URL || APP_URL);
    }
  }, []);
  return null;
}
