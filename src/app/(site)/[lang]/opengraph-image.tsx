import { ImageResponse } from "next/og";
import { BRAND_NAME_AR, BRAND_NAME_EN } from "@/brand";

export const alt = `${BRAND_NAME_AR} — أقرب سطحة وقت ما تبي`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PARCHMENT = "#f5f4ed";
const NEAR_BLACK = "#141413";
const BRAND_ORANGE = "#c96442";
const SUBTITLE = "#3a3833";

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

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const brand = lang === "en" ? BRAND_NAME_EN : BRAND_NAME_AR;
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
            marginTop: 110,
            fontSize: 28,
            fontWeight: 600,
            color: SUBTITLE,
            letterSpacing: "0.22em",
            display: "flex",
          }}
        >
          WIRE.SA
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
