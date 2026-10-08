"use client";

import { useEffect } from "react";
import { DRIVER_PLAY_STORE_URL, driverAppStoreUrl } from "@/lib/links";

// UA-based store redirect. Desktop (or unknown) stays on the page, which
// renders both badges as the manual fallback.
export function DriverAppRedirect() {
  useEffect(() => {
    const ua = navigator.userAgent;
    if (/iPhone|iPad|iPod/i.test(ua)) {
      window.location.replace(driverAppStoreUrl("driver_link"));
    } else if (/Android/i.test(ua)) {
      window.location.replace(DRIVER_PLAY_STORE_URL);
    }
  }, []);
  return null;
}
