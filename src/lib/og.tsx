import { ImageResponse } from "next/og";
import { BRAND_NAME_AR, BRAND_NAME_EN } from "@/brand";

/**
 * Shared Open Graph card renderer for the content pages.
 *
 * The guide and city pages had no image of their own — metadata images are
 * NOT inherited across nested route segments in Next, so every share of
 * /guides/* or /cities/* rendered as a bare link.
 *
 * DO NOT put an Arabic sentence on these cards. Satori (what next/og renders
 * with) has no real bidi engine: two-word Arabic strings come out right, but
 * three or more words get their order reversed, so "وش تسوي إذا" renders as
 * "إذا تسوي وش". A garbled headline on a share card is worse than no headline,
 * so the card carries the brand plus a Latin section label — both immune to
 * the bug — and the page title comes from the og:title meta tag instead, which
 * every scraper reads and which has no such problem.
 */

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const PARCHMENT = "#f5f4ed";
const NEAR_BLACK = "#141413";
const BRAND_ORANGE = "#c96442";
const SUBTITLE = "#3a3833";

export async function loadArabicFont(
  weight: 400 | 600 | 700,
): Promise<ArrayBuffer> {
  const cssUrl = `https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@${weight}&display=swap`;
  // Older Android UA makes Google Fonts serve TTF (Satori needs TTF/OTF/WOFF, not WOFF2).
  const css = await fetch(cssUrl, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Linux; U; Android 2.3.4; en-us; sdk Build/GRJ22) AppleWebKit/533.1 (KHTML, like Gecko)",
    },
  }).then((r) => r.text());
  const match = css.match(/src:\s*url\((https:[^)]+?\.(?:ttf|otf))\)/i);
  if (!match) {
    throw new Error(
      `Could not locate IBM Plex Sans Arabic TTF in CSS response (weight=${weight})`,
    );
  }
  return fetch(match[1]).then((r) => r.arrayBuffer());
}

/**
 * Brand card with a Latin section label.
 *
 * `section` must be Latin (e.g. "ROADSIDE GUIDES") — see the bidi note above.
 */
export async function renderSectionCard({
  section,
  lang,
}: {
  section: string;
  lang: string;
}) {
  const isRtl = lang !== "en";
  const brand = isRtl ? BRAND_NAME_AR : BRAND_NAME_EN;
  const [regular, bold] = await Promise.all([
    loadArabicFont(400),
    loadArabicFont(700),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: PARCHMENT,
          color: NEAR_BLACK,
          fontFamily: "IBM Plex Sans Arabic",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "center",
            justifyContent: "center",
            gap: 32,
          }}
        >
          <svg
            width="200"
            height="200"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="512" height="512" rx="116" fill={BRAND_ORANGE} />
            <path
              d="M96 210 L176 322 L256 210 L336 322 L416 210"
              stroke={PARCHMENT}
              strokeWidth="42"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
          {/* Single word — the one Arabic string Satori is reliable with. */}
          <div
            style={{
              fontSize: 184,
              fontWeight: 700,
              lineHeight: 1,
              color: NEAR_BLACK,
              display: "flex",
            }}
          >
            {brand}
          </div>
        </div>

        <div
          style={{
            marginTop: 72,
            fontSize: 34,
            fontWeight: 700,
            color: BRAND_ORANGE,
            letterSpacing: "0.14em",
            display: "flex",
          }}
        >
          {section}
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 26,
            fontWeight: 600,
            color: SUBTITLE,
            letterSpacing: "0.22em",
            display: "flex",
          }}
        >
          SATHTEK.APP
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        {
          name: "IBM Plex Sans Arabic",
          data: regular,
          style: "normal",
          weight: 400,
        },
        {
          name: "IBM Plex Sans Arabic",
          data: bold,
          style: "normal",
          weight: 700,
        },
      ],
    },
  );
}
