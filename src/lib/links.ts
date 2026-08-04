export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3001";

export function withLocale(url: string, locale: string) {
  if (locale !== "en" && locale !== "ar") return url;
  const sep = url.includes("?") ? "&" : "?";
  return `${url}${sep}lang=${locale}`;
}

// Customer "request tow" CTAs go straight to the web app (the old /record
// ads-conversion hop was removed 2026-07-30 — no longer needed).
export const DOWNLOAD_URL = APP_URL;

// Customer app stores — both live as of 2026-08-02.
export const USER_APP_STORE_URL = "https://apps.apple.com/sa/app/id6789758197";
export const USER_PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.sathtek.user";
export const USER_APP_SMART_LINK = "/app";

// Review deep links. iOS opens the write-review sheet directly; Play has no
// web equivalent, so we land on the listing with the reviews section expanded.
export const USER_APP_STORE_REVIEW_URL = `${USER_APP_STORE_URL}?action=write-review`;
export const USER_PLAY_STORE_REVIEW_URL = `${USER_PLAY_STORE_URL}&showAllReviews=true`;
// Same-origin UA-based redirect to the right review page (WhatsApp follow-ups).
export const USER_RATE_SMART_LINK = "/rate";

// Driver acquisition goes to the native app stores — the web driver flow is a
// fallback only, never a marketing destination.
export const DRIVER_APP_STORE_URL = "https://apps.apple.com/sa/app/id6777888557";
export const DRIVER_PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.sathtek.driver";
// Same-origin UA-based redirect to the right store (QR codes, WhatsApp templates).
export const DRIVER_APP_SMART_LINK = "/driver-app";

// TODO: replace placeholders with real business destinations
export const CONTACT_EMAIL = "Support@wire.sa";
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;
export const CONTACT_PHONE_DISPLAY = "+966 55 364 0317";
export const CONTACT_PHONE_E164 = "+966553640317";
export const CONTACT_TEL = `tel:${CONTACT_PHONE_E164}`;
export const WHATSAPP_URL = `https://wa.me/${CONTACT_PHONE_E164.replace("+", "")}`;

export const buildMailto = (subject: string) =>
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;

export const buildWhatsAppUrl = (text: string) =>
  `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`;

// Handles moved with the rebrand. Instagram took "wire.sa1" because "wire.sa"
// was unavailable there — do not "fix" this to match the TikTok handle.
export const SOCIAL_INSTAGRAM_URL = "https://www.instagram.com/wire.sa1";
export const SOCIAL_TIKTOK_URL = "https://www.tiktok.com/@wire.sa";
