import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "سطحتك — خدمة سطحات عند الطلب",
    short_name: "سطحتك",
    description:
      "تواصل مع سائقي سطحات موثوقين بالقرب منك. استقبل عروضاً فورية، تتبّع وصول السطحة مباشرة، وادفع بسهولة.",
    start_url: "/",
    display: "standalone",
    dir: "rtl",
    lang: "ar-SA",
    background_color: "#F5EFE4",
    theme_color: "#C96442",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
