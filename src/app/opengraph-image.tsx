import { ImageResponse } from "next/og";
import { BRAND_NAME_AR } from "@/brand";

export const alt = `${BRAND_NAME_AR} — سطحة 24 ساعة في السعودية`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PARCHMENT = "#f5f4ed";
const NEAR_BLACK = "#141413";
const BRAND_ORANGE = "#C45520";
const BRAND_GOLD = "#E29D2A";

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
          flexDirection: "row-reverse",
          background: PARCHMENT,
          color: NEAR_BLACK,
          padding: "72px 88px",
          fontFamily: "IBM Plex Sans Arabic",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 14,
            background: BRAND_ORANGE,
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 360,
            height: 360,
          }}
        >
          <svg
            width="320"
            height="448"
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
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-end",
            textAlign: "right",
            paddingLeft: 48,
          }}
        >
          <div
            style={{
              fontSize: 132,
              fontWeight: 700,
              lineHeight: 1,
              color: NEAR_BLACK,
              display: "flex",
            }}
          >
            {BRAND_NAME_AR}
          </div>
          <div
            style={{
              marginTop: 32,
              fontSize: 44,
              fontWeight: 700,
              color: BRAND_ORANGE,
              display: "flex",
            }}
          >
            سطحة 24 ساعة عند الطلب
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 30,
              fontWeight: 400,
              color: NEAR_BLACK,
              opacity: 0.78,
              maxWidth: 720,
              lineHeight: 1.35,
              display: "flex",
            }}
          >
            أقرب سائق سطحة موثوق، أسعار واضحة، وتتبّع مباشر في الرياض وجدة والدمام.
          </div>
          <div
            style={{
              marginTop: 40,
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: 999,
                background: BRAND_GOLD,
                display: "flex",
              }}
            />
            <div style={{ fontSize: 26, fontWeight: 600, display: "flex" }}>
              sathtek.app
            </div>
          </div>
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
