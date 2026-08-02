import { BRAND_NAME_AR, BRAND_NAME_EN } from "@/brand";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_E164,
  DRIVER_APP_STORE_URL,
  DRIVER_PLAY_STORE_URL,
  SOCIAL_INSTAGRAM_URL,
  SOCIAL_TIKTOK_URL,
  USER_APP_STORE_URL,
  USER_PLAY_STORE_URL,
} from "@/lib/links";

const SITE_URL = "https://sathtek.app";
const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: BRAND_NAME_AR,
  // "Sathtek/سطحتك" is the pre-rebrand name and still the domain. Keeping both
  // as alternateName is what lets an engine that learned the old name resolve
  // it to this entity instead of treating Wire as an unknown brand.
  alternateName: [BRAND_NAME_EN, "Sathtek", "سطحتك", "Satha"],
  description:
    "تطبيق سعودي لطلب السطحة والمساعدة على الطريق: طلب واحد يوصل لكل الكباتن القريبين، تقارن عروضهم وتتابع رحلتك مباشرة، ٢٤ ساعة في جميع أنحاء المملكة.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  image: `${SITE_URL}/icon-512.png`,
  email: CONTACT_EMAIL,
  telephone: CONTACT_PHONE_E164,
  address: {
    "@type": "PostalAddress",
    addressCountry: "SA",
  },
  areaServed: {
    "@type": "Country",
    name: "Saudi Arabia",
  },
  knowsLanguage: ["ar", "en"],
  // The App Store / Play listings are the strongest third-party corroboration
  // this brand has that isn't self-published — they carry more weight for
  // entity resolution than the social profiles do. All four listings are live
  // as of 2026-08-02; filter(Boolean) stays as a guard for future additions.
  sameAs: [
    SOCIAL_INSTAGRAM_URL,
    SOCIAL_TIKTOK_URL,
    USER_APP_STORE_URL,
    USER_PLAY_STORE_URL,
    DRIVER_APP_STORE_URL,
    DRIVER_PLAY_STORE_URL,
  ].filter(Boolean),
};

/**
 * The customer app as a first-class entity. "Which app do I use to get a tow
 * in Saudi?" is answered from app listings far more often than from marketing
 * copy, so the app needs to exist in the graph as something other than a link.
 */
export const mobileAppSchema = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "@id": `${SITE_URL}/#app`,
  name: BRAND_NAME_AR,
  alternateName: BRAND_NAME_EN,
  applicationCategory: "TravelApplication",
  applicationSubCategory: "خدمة سطحات ومساعدة على الطريق",
  operatingSystem: "iOS, Android",
  url: SITE_URL,
  installUrl: [USER_APP_STORE_URL, USER_PLAY_STORE_URL].filter(Boolean),
  publisher: { "@id": ORG_ID },
  inLanguage: ["ar", "en"],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "SAR",
    description:
      "تحميل التطبيق مجاني — السعر يتحدد بعرض الكابتن الذي تختاره لكل رحلة.",
  },
};

/**
 * The driver app is a separate entity, not a variant of the customer one:
 * "how do I become a tow truck driver in Saudi" and "how do I get a tow" are
 * different questions and should resolve to different install targets.
 */
export const driverAppSchema = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "@id": `${SITE_URL}/#driver-app`,
  name: `${BRAND_NAME_AR} كابتن`,
  alternateName: `${BRAND_NAME_EN} Driver`,
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "تطبيق سائقي السطحات",
  operatingSystem: "iOS, Android",
  url: `${SITE_URL}/ar/drivers`,
  installUrl: [DRIVER_APP_STORE_URL, DRIVER_PLAY_STORE_URL].filter(Boolean),
  publisher: { "@id": ORG_ID },
  inLanguage: ["ar", "en"],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "SAR",
    description: "التسجيل كسائق سطحة مجاني بالكامل — بدون رسوم اشتراك.",
  },
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
  image: `${SITE_URL}/icon-512.png`,
  logo: `${SITE_URL}/logo.svg`,
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
    name: "خدمات واير",
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

export function breadcrumbSchema(locale: string, path: string, label: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: BRAND_NAME_AR,
        item: `${SITE_URL}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: label,
        item: `${SITE_URL}/${locale}${path}`,
      },
    ],
  };
}

/**
 * Multi-level breadcrumb, for pages nested deeper than one segment
 * (/ar/guides/car-broke-down). `crumbs` are locale-agnostic paths + labels;
 * the brand root is prepended automatically.
 */
export function breadcrumbTrail(
  locale: string,
  crumbs: ReadonlyArray<{ path: string; label: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { label: BRAND_NAME_AR, path: "" },
      ...crumbs.map((c) => ({ label: c.label, path: c.path })),
    ].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${SITE_URL}/${locale}${c.path}`,
    })),
  };
}

export function faqSchema(items: ReadonlyArray<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

/**
 * HowTo for a scenario guide. The steps here are the same array the page
 * renders visibly — answer engines discount structured data that has no
 * on-page counterpart, so the two must never diverge.
 */
export function howToSchema(opts: {
  name: string;
  description: string;
  url: string;
  steps: ReadonlyArray<{ name: string; text: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    totalTime: "PT15M",
    supply: { "@type": "HowToSupply", name: BRAND_NAME_AR },
    step: opts.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
      url: `${opts.url}#step-${i + 1}`,
    })),
  };
}

/**
 * Article wrapper for a guide. Gives answer engines an author + publisher to
 * attribute the passage to, which materially raises citation rate.
 */
export function guideArticleSchema(opts: {
  headline: string;
  description: string;
  url: string;
  locale: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    url: opts.url,
    inLanguage: opts.locale === "ar" ? "ar-SA" : "en",
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    mainEntityOfPage: { "@type": "WebPage", "@id": opts.url },
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    image: `${SITE_URL}/icon-512.png`,
    isPartOf: { "@id": WEBSITE_ID },
  };
}

/** City-scoped service, so "tow truck in Jeddah" resolves to one entity. */
export function cityServiceSchema(opts: {
  cityName: string;
  schemaName: string;
  url: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${BRAND_NAME_AR} — ${opts.cityName}`,
    serviceType: "خدمة سطحات ومساعدة على الطريق",
    description: opts.description,
    url: opts.url,
    provider: { "@id": ORG_ID },
    areaServed: {
      "@type": "City",
      name: opts.schemaName,
      containedInPlace: { "@type": "Country", name: "Saudi Arabia" },
    },
    hoursAvailable: {
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
    availableChannel: { "@type": "ServiceChannel", serviceUrl: opts.url },
  };
}

/** Index pages: an explicit list beats leaving crawlers to infer one. */
export function itemListSchema(
  items: ReadonlyArray<{ name: string; url: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: item.url,
    })),
  };
}
