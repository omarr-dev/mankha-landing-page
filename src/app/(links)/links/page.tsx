import type { Metadata } from "next";
import { BRAND_NAME_AR, BRAND_NAME_EN } from "@/brand";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_E164,
  SOCIAL_INSTAGRAM_URL,
  SOCIAL_TIKTOK_URL,
  USER_APP_STORE_URL,
  USER_PLAY_STORE_URL,
} from "@/lib/links";
import { SITE_URL } from "@/lib/seo";
import { LinksClient } from "./LinksClient";

export const metadata: Metadata = {
  title: `${BRAND_NAME_AR} | التطبيق والروابط`,
  description: `حمّل تطبيق ${BRAND_NAME_AR} لطلب سطحة من جوالك، أو سجّل كـ كابتن.`,
  alternates: { canonical: "/links" },
  // Bio-link page: it exists for social profiles, not for search — indexing it
  // would just compete with the home page for the brand query.
  robots: { index: false, follow: true },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/links`,
    siteName: BRAND_NAME_AR,
    title: `${BRAND_NAME_AR} | التطبيق والروابط`,
    description: `حمّل تطبيق ${BRAND_NAME_AR} لطلب سطحة من جوالك، أو سجّل كـ كابتن.`,
    images: ["/ar/opengraph-image"],
    locale: "ar_SA",
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: BRAND_NAME_AR,
  alternateName: BRAND_NAME_EN,
  url: SITE_URL,
  logo: `${SITE_URL}/icon-512.png`,
  email: CONTACT_EMAIL,
  telephone: CONTACT_PHONE_E164,
  areaServed: "SA",
  sameAs: [
    SOCIAL_INSTAGRAM_URL,
    SOCIAL_TIKTOK_URL,
    USER_APP_STORE_URL,
    USER_PLAY_STORE_URL,
  ],
};

export default function LinksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <LinksClient />
    </>
  );
}
