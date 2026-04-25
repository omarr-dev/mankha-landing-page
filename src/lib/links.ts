const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3001";

export const DOWNLOAD_URL = APP_URL;
export const DRIVER_REGISTER_URL = `${APP_URL}/driver`;

// TODO: replace placeholders with real business destinations
export const CONTACT_EMAIL = "Support@sathtek.app";
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;
export const CONTACT_PHONE_DISPLAY = "+966 55 364 0317";
export const CONTACT_PHONE_E164 = "+966553640317";
export const CONTACT_TEL = `tel:${CONTACT_PHONE_E164}`;
export const WHATSAPP_URL = `https://wa.me/${CONTACT_PHONE_E164.replace("+", "")}`;

export const buildMailto = (subject: string) =>
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;

export const buildWhatsAppUrl = (text: string) =>
  `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`;

export const SOCIAL_X_URL = APP_URL;
export const SOCIAL_INSTAGRAM_URL = APP_URL;
export const SOCIAL_LINKEDIN_URL = APP_URL;
