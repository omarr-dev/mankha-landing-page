import type { MetadataRoute } from "next";
import { CITY_SLUGS } from "@/content/cities";
import { CONTENT_UPDATED, GUIDE_SLUGS } from "@/content/guides";
import { SITE_URL } from "@/lib/seo";

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

export default function sitemap(): MetadataRoute.Sitemap {
  // The real last-content-change date, not the build clock — a sitemap that
  // reports "modified today" on every deploy trains crawlers to ignore the
  // field, which is exactly the signal we want them to trust.
  const lastModified = CONTENT_UPDATED;
  return ROUTES.map((r) => ({
    url: `${SITE_URL}/ar${r.path}`, // Arabic is the canonical primary
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
    alternates: {
      languages: {
        "ar-SA": `${SITE_URL}/ar${r.path}`,
        en: `${SITE_URL}/en${r.path}`,
        "x-default": `${SITE_URL}/ar${r.path}`,
      },
    },
  }));
}
