"use client";

import { useEffect } from "react";
import { withLocale } from "@/lib/links";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function readLocale(): "en" | "ar" {
  const fromUrl = new URLSearchParams(window.location.search).get("lang");
  if (fromUrl === "en" || fromUrl === "ar") return fromUrl;
  if (typeof localStorage !== "undefined" && localStorage.getItem("mankha_locale") === "en") {
    return "en";
  }
  return "ar";
}

export function RecordRedirect({ href }: { href: string }) {
  useEffect(() => {
    const target = withLocale(href, readLocale());
    let done = false;
    const go = () => {
      if (done) return;
      done = true;
      window.location.replace(target);
    };

    if (typeof window.gtag === "function") {
      window.gtag("event", "ads_conversion___1", { event_callback: go });
      // Fallback if gtag is blocked or never invokes the callback.
      setTimeout(go, 1200);
    } else {
      go();
    }
  }, [href]);
  return null;
}
