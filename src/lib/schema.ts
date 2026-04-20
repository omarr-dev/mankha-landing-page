import { BRAND_NAME_AR, BRAND_NAME_EN } from "@/brand";
import { CONTACT_EMAIL, CONTACT_PHONE_E164 } from "@/lib/links";

const SITE_URL = "https://sathtek.app";
const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: BRAND_NAME_AR,
  alternateName: [BRAND_NAME_EN, "Satha"],
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  email: CONTACT_EMAIL,
  telephone: CONTACT_PHONE_E164,
  areaServed: {
    "@type": "Country",
    name: "Saudi Arabia",
  },
  sameAs: [] as string[],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: BRAND_NAME_AR,
  inLanguage: "ar-SA",
  publisher: { "@id": ORG_ID },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  "@id": `${SITE_URL}/#business`,
  name: BRAND_NAME_AR,
  url: SITE_URL,
  image: `${SITE_URL}/og-image.png`,
  logo: `${SITE_URL}/logo.png`,
  email: CONTACT_EMAIL,
  telephone: CONTACT_PHONE_E164,
  priceRange: "﷼﷼",
  areaServed: {
    "@type": "Country",
    name: "SA",
  },
  serviceType: "خدمة سطحات — مساعدة على الطريق",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "خدمات سطحتك",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "سحب سيارات",
          description: "سحب ونقل السيارات المعطلة بسطحة هيدروليك.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "مساعدة على الطريق",
          description: "مساعدة فورية على الطريق 24 ساعة في جميع مدن المملكة.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "تغيير بطارية السيارة",
          description: "تغيير بطارية السيارة في الموقع.",
        },
      },
    ],
  },
};

const SERVED_CITIES = [
  "Riyadh",
  "Jeddah",
  "Dammam",
  "Makkah",
  "Madinah",
  "Taif",
  "Abha",
  "Khobar",
  "Buraidah",
];

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "خدمة سطحات ومساعدة على الطريق",
  provider: { "@id": ORG_ID },
  areaServed: SERVED_CITIES.map((name) => ({
    "@type": "City",
    name,
    containedInPlace: { "@type": "Country", name: "Saudi Arabia" },
  })),
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: SITE_URL,
  },
};

export function breadcrumbSchema(path: string, labelAr: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: BRAND_NAME_AR,
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: labelAr,
        item: `${SITE_URL}${path}`,
      },
    ],
  };
}
