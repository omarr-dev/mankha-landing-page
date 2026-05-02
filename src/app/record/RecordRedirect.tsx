"use client";

import { useEffect } from "react";
import { withLocale } from "@/lib/links";

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
    window.location.replace(withLocale(href, readLocale()));
  }, [href]);
  return null;
}
