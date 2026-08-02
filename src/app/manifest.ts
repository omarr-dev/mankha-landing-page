import type { MetadataRoute } from "next";
import { USER_APP_STORE_URL, USER_PLAY_STORE_URL } from "@/lib/links";

// The App Store id, extracted from the listing URL — `related_applications`
// wants the bare id, not the URL.
const IOS_APP_ID = USER_APP_STORE_URL.split("/id")[1] ?? "";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "واير — أقرب سطحة وقت ما تبي",
    short_name: "واير",
    description:
      "بدل ما تدق على ١٠ سطحات، طلب واحد يوصل لكل الكباتن حولك، تجيك عروضهم — اختر الأنسب وتابع رحلتك لحظة بلحظة.",
    start_url: "/ar",
    display: "standalone",
    dir: "rtl",
    lang: "ar-SA",
    background_color: "#F5EFE4",
    theme_color: "#C96442",
    // Declares the native apps as the same product as this site. Left without
    // `prefer_related_applications` on purpose: the PWA stays installable, the
    // store listings just become machine-readable siblings of the domain.
    related_applications: [
      {
        platform: "play",
        url: USER_PLAY_STORE_URL,
        id: "com.sathtek.user",
      },
      {
        platform: "itunes",
        url: USER_APP_STORE_URL,
        id: IOS_APP_ID,
      },
    ],
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
