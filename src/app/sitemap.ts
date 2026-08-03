import type { MetadataRoute } from "next";
import { CITY_SLUGS } from "@/content/cities";
import { CONTENT_UPDATED, GUIDE_SLUGS } from "@/content/guides";
import { LOCALES, SITE_URL } from "@/lib/seo";

type Route = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const STATIC_ROUTES: Route[] = [
  { path: "", changeFrequency: "weekly", priority: 1.0 },
  { path: "/drivers", changeFrequency: "monthly", priority: 0.9 },
  { path: "/guides", changeFrequency: "weekly", priority: 0.9 },
  { path: "/cities", changeFrequency: "weekly", priority: 0.8 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
];

// Scenario guides and city pages carry the "my car broke down" / "سطحة الرياض"
// long tail — they are the pages answer engines land on, so they sit high.
const GUIDE_ROUTES: Route[] = GUIDE_SLUGS.map((slug) => ({
  path: `/guides/${slug}`,
  changeFrequency: "monthly",
  priority: 0.8,
}));

const CITY_ROUTES: Route[] = CITY_SLUGS.map((slug) => ({
  path: `/cities/${slug}`,
  changeFrequency: "monthly",
  priority: 0.7,
}));

const ROUTES: Route[] = [...STATIC_ROUTES, ...GUIDE_ROUTES, ...CITY_ROUTES];

/** Every language version of a route, for the xhtml:link alternates. */
function alternatesFor(path: string) {
  return {
    languages: {
      "ar-SA": `${SITE_URL}/ar${path}`,
      en: `${SITE_URL}/en${path}`,
      "x-default": `${SITE_URL}/ar${path}`,
    },
  };
}

/**
 * One entry per locale per route, each carrying the full alternate set.
 *
 * Listing only the Arabic URLs and leaving English to be inferred from the
 * alternates does work — Google finds the pages — but they never count as
 * submitted, so coverage reports undercount by half and the English pages get
 * no crawl priority of their own.
 *
 * `lastModified` is the real last-content-change date, not the build clock: a
 * sitemap that reports "modified today" on every deploy trains crawlers to
 * ignore the field, which is exactly the signal we want them to trust.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.flatMap((r) =>
    LOCALES.map((locale) => ({
      url: `${SITE_URL}/${locale}${r.path}`,
      lastModified: CONTENT_UPDATED,
      changeFrequency: r.changeFrequency,
      // Arabic is the primary market, so it keeps the higher priority.
      priority: locale === "ar" ? r.priority : Math.max(0.1, r.priority - 0.1),
      alternates: alternatesFor(r.path),
    })),
  );
}
