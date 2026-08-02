#!/usr/bin/env node
/**
 * Ping IndexNow with every URL in the sitemap.
 *
 * Google ignores IndexNow, but Bing, Yandex and Seznam honour it — and
 * Copilot's answers ride the Bing index. Submitting drops "new page is
 * discoverable" from weeks to hours, which matters most right after a batch
 * of pages ships.
 *
 * Run it after a deploy:  npm run indexnow
 *
 * The key must be readable at https://<host>/<key>.txt — that file is the
 * proof of ownership, so it lives in public/ and must be deployed first.
 */

const KEY = "fbc5266ba728b924c64f652dcbfad748";
const HOST = "sathtek.app";
const ENDPOINT = "https://api.indexnow.org/IndexNow";

const LOCALES = ["ar", "en"];
const PATHS = [
  "",
  "/drivers",
  "/guides",
  "/cities",
  "/guides/car-broke-down",
  "/guides/car-wont-start",
  "/guides/flat-tire",
  "/guides/car-accident",
  "/guides/out-of-fuel",
  "/guides/stuck-in-sand",
  "/guides/transport-car-between-cities",
  "/cities/riyadh",
  "/cities/jeddah",
  "/cities/dammam",
  "/cities/khobar",
  "/cities/makkah",
  "/cities/madinah",
  "/cities/taif",
  "/cities/abha",
  "/cities/buraidah",
];

const urlList = LOCALES.flatMap((lang) =>
  PATHS.map((path) => `https://${HOST}/${lang}${path}`),
);

const body = {
  host: HOST,
  key: KEY,
  keyLocation: `https://${HOST}/${KEY}.txt`,
  urlList,
};

const res = await fetch(ENDPOINT, {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
});

// 200 = accepted, 202 = accepted but key still being validated. Both are fine.
if (res.ok) {
  console.log(`IndexNow: submitted ${urlList.length} URLs (HTTP ${res.status})`);
} else {
  console.error(`IndexNow failed: HTTP ${res.status}`);
  console.error(await res.text());
  process.exit(1);
}
