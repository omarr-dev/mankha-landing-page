export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3001";

// Satha API base (e.g. https://api.example.com/api), used only for the
// /go/<channel> click beacon. When unset (e.g. a fresh local checkout) the
// beacon is skipped and /go still redirects. Trailing slashes are stripped so
// either form of the env value works.
export const API_URL = (process.env.NEXT_PUBLIC_API_URL ?? "").replace(/\/+$/, "");

// Tracked marketing links: wire.sa/go/<channel> (e.g. /go/tiktok).
// Counted server-side (ChannelClicks) and surfaced on the admin
// "customer sources" page; the redirect carries UTM params so web signups
// and Android installs attribute per-user.
export const GO_UTM_MEDIUM = "go_link";

export function goWebAppUrl(channel: string, medium: string = GO_UTM_MEDIUM): string {
  return `${APP_URL}?utm_source=${encodeURIComponent(channel)}&utm_medium=${medium}`;
}

export function goPlayStoreUrl(channel: string, medium: string = GO_UTM_MEDIUM): string {
  // The referrer param rides the Play install and is read by the app via the
  // Install Referrer API — this is what makes Android attribution per-user.
  const referrer = encodeURIComponent(
    `utm_source=${channel}&utm_medium=${medium}`
  );
  return `${USER_PLAY_STORE_URL}&referrer=${referrer}`;
}

export function withLocale(url: string, locale: string) {
  if (locale !== "en" && locale !== "ar") return url;
  const sep = url.includes("?") ? "&" : "?";
  return `${url}${sep}lang=${locale}`;
}

// Customer "request tow" CTAs go straight to the web app (the old /record
// ads-conversion hop was removed 2026-07-30 — no longer needed).
export const DOWNLOAD_URL = APP_URL;

// Customer app stores — both live as of 2026-08-02.
// Plain listing URL: for schema/sameAs/manifest. Links people tap use the
// campaign builders below so the install is attributed.
export const USER_APP_STORE_URL = "https://apps.apple.com/sa/app/id6789758197";
export const USER_APP_STORE_ID = "6789758197";
export const DRIVER_APP_STORE_ID = "6777888557";

// App Store campaign links (App Store Connect → Analytics → Campaigns): `pt`
// is the account's provider token, `ct` names the campaign (≤30 chars).
// The App Store hands the app no referrer, so these per-campaign install
// counts in App Store Connect are the only per-link iOS attribution we get.
export const APP_STORE_PROVIDER_TOKEN = "129003929";

export function appStoreCampaignUrl(appId: string, campaign: string): string {
  const ct = campaign.replace(/[^a-z0-9_-]/gi, "").slice(0, 30) || "unknown";
  return `https://apps.apple.com/app/apple-store/id${appId}?pt=${APP_STORE_PROVIDER_TOKEN}&ct=${ct}&mt=8`;
}

export const userAppStoreUrl = (campaign: string) =>
  appStoreCampaignUrl(USER_APP_STORE_ID, campaign);
export const driverAppStoreUrl = (campaign: string) =>
  appStoreCampaignUrl(DRIVER_APP_STORE_ID, campaign);
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
