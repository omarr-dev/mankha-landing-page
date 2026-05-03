import { ImageResponse } from "next/og";
import { BRAND_NAME_AR } from "@/brand";

export const alt = `${BRAND_NAME_AR} — أقرب سطحة وقت ما تبي`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PARCHMENT = "#f5f4ed";
const NEAR_BLACK = "#141413";
const BRAND_ORANGE = "#C45520";
const BRAND_GOLD = "#E29D2A";
const MUTED = "#8a8780";

async function loadArabicFont(weight: 400 | 600 | 700): Promise<ArrayBuffer> {
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

export default async function Image() {
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
            flexDirection: "row",
            alignItems: "center",
            gap: 36,
          }}
        >
          <svg
            width="180"
            height="252"
            viewBox="0 0 500 700"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 250 680 L 433.25 352.56 A 210 210 0 1 0 66.75 352.56 Z"
              fill={BRAND_ORANGE}
            />
            <path
              d="M 314.7 462.0 L 389.6 328.1 A 160 160 0 1 0 110.4 328.1 L 188.9 284.2 A 70 70 0 1 1 311.1 284.2 L 236.2 418.1 Z"
              fill={PARCHMENT}
            />
            <circle cx="250" cy="250" r="35" fill={BRAND_GOLD} />
          </svg>
          <div
            style={{
              fontSize: 200,
              fontWeight: 700,
              lineHeight: 1,
              color: NEAR_BLACK,
              display: "flex",
            }}
          >
            {BRAND_NAME_AR}
          </div>
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 32,
            fontWeight: 400,
            color: MUTED,
            letterSpacing: "0.08em",
            display: "flex",
          }}
        >
          سحب سيارات في السعودية
        </div>
      </div>
    ),
    {
      ...size,
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
