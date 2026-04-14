const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3001";

export const DOWNLOAD_URL = APP_URL;
export const DRIVER_REGISTER_URL = `${APP_URL}/driver`;

// TODO: replace placeholders with real business destinations
export const CONTACT_EMAIL = "support@mankha.sa";
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;
export const SOCIAL_X_URL = "https://x.com/mankha";
export const SOCIAL_INSTAGRAM_URL = "https://instagram.com/mankha";
export const SOCIAL_LINKEDIN_URL = "https://linkedin.com/company/mankha";
