"use client";

import { useI18n } from "@/i18n/context";

const ROUTE_D = "M 60 330 C 110 330 130 285 165 270 S 235 235 255 195 S 320 110 350 70";
const TRUCK_LEFT_PCT = 56;
const TRUCK_TOP_PCT = 53;
const PROGRESS_PCT = 46;

export function HeroMapMockup() {
  const { t } = useI18n();

  return (
    <div className="relative aspect-square rounded-[32px] overflow-hidden bg-[#efece1] border border-border-warm whisper-shadow">
      {/* Map base */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="mapVignette" cx="50%" cy="40%" r="70%">
            <stop offset="0%" stopColor="#f5f1e3" />
            <stop offset="100%" stopColor="#e6e0cf" />
          </radialGradient>
          <filter id="routeGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" />
          </filter>
        </defs>

        <rect x="0" y="0" width="400" height="400" fill="url(#mapVignette)" />

        {/* Park — muted green */}
        <path d="M 280 0 L 400 0 L 400 95 C 360 110 320 95 295 70 C 280 50 270 30 280 0 Z" fill="#c7d4b8" />
        <circle cx="345" cy="40" r="4" fill="#a8b79a" opacity="0.7" />
        <circle cx="370" cy="65" r="3" fill="#a8b79a" opacity="0.7" />
        <circle cx="320" cy="55" r="3" fill="#a8b79a" opacity="0.7" />

        {/* River — warm teal */}
        <path d="M 0 380 C 80 360 130 410 220 380 C 290 355 340 400 400 380 L 400 420 L 0 420 Z" fill="#c9dcd6" />
        <path d="M 0 378 C 80 358 130 408 220 378 C 290 353 340 398 400 378" fill="none" stroke="#b3cac3" strokeWidth="1" opacity="0.6" />

        {/* Buildings — warm cream */}
        <g fill="#e5dfcd">
          <rect x="20" y="20" width="80" height="55" rx="4" />
          <rect x="115" y="20" width="55" height="55" rx="4" />
          <rect x="20" y="90" width="55" height="65" rx="4" />
          <rect x="90" y="90" width="80" height="40" rx="4" />
          <rect x="90" y="145" width="35" height="65" rx="4" />
          <rect x="140" y="145" width="55" height="40" rx="4" />
          <rect x="20" y="170" width="55" height="60" rx="4" />
          <rect x="20" y="245" width="50" height="50" rx="4" />
          <rect x="85" y="225" width="65" height="70" rx="4" />
          <rect x="165" y="200" width="55" height="55" rx="4" />
          <rect x="235" y="200" width="55" height="40" rx="4" />
          <rect x="305" y="190" width="75" height="55" rx="4" />
          <rect x="235" y="255" width="60" height="60" rx="4" />
          <rect x="310" y="260" width="70" height="50" rx="4" />
          <rect x="200" y="105" width="55" height="55" rx="4" />
          <rect x="270" y="120" width="60" height="50" rx="4" />
          <rect x="345" y="115" width="50" height="55" rx="4" />
          <rect x="200" y="20" width="60" height="40" rx="4" />
          <rect x="85" y="305" width="60" height="55" rx="4" />
          <rect x="160" y="305" width="55" height="55" rx="4" />
        </g>

        {/* Streets */}
        <g stroke="#d6cfba" strokeLinecap="round" fill="none">
          <path d="M 0 192 L 400 192" strokeWidth="14" />
          <path d="M 80 0 L 80 400" strokeWidth="12" />
          <path d="M 225 0 L 225 400" strokeWidth="12" />
          <path d="M 0 80 C 100 90 150 150 230 175 C 310 200 360 260 400 270" strokeWidth="12" />
          <path d="M 0 240 L 400 240" strokeWidth="8" />
          <path d="M 0 305 L 400 305" strokeWidth="8" />
          <path d="M 0 110 L 400 110" strokeWidth="8" />
          <path d="M 295 0 L 295 400" strokeWidth="8" />
          <path d="M 155 0 L 155 400" strokeWidth="8" />
        </g>
        <g stroke="#faf9f5" strokeLinecap="round" fill="none">
          <path d="M 0 192 L 400 192" strokeWidth="10" />
          <path d="M 80 0 L 80 400" strokeWidth="8" />
          <path d="M 225 0 L 225 400" strokeWidth="8" />
          <path d="M 0 80 C 100 90 150 150 230 175 C 310 200 360 260 400 270" strokeWidth="8" />
          <path d="M 0 240 L 400 240" strokeWidth="5" />
          <path d="M 0 305 L 400 305" strokeWidth="5" />
          <path d="M 0 110 L 400 110" strokeWidth="5" />
          <path d="M 295 0 L 295 400" strokeWidth="5" />
          <path d="M 155 0 L 155 400" strokeWidth="5" />
        </g>

        {/* Route — terracotta, hand-drawn feel */}
        <path d={ROUTE_D} stroke="#c96442" strokeWidth="14" strokeLinecap="round" fill="none" opacity="0.18" filter="url(#routeGlow)" />
        <path d={ROUTE_D} stroke="#c96442" strokeWidth="5" strokeLinecap="round" fill="none" />
        <path
          d={ROUTE_D}
          stroke="#faf9f5"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          strokeDasharray="6 6"
          className="animate-route-dash"
          opacity="0.85"
        />

        {/* Pickup pin (origin) */}
        <g transform="translate(60 330)">
          <circle r="9" fill="#faf9f5" stroke="#c96442" strokeWidth="3" />
          <circle r="3" fill="#c96442" />
        </g>

        {/* Dropoff pin (destination) */}
        <g transform="translate(350 70)">
          <ellipse cx="0" cy="6" rx="6" ry="2" fill="#141413" opacity="0.18" />
          <path d="M 0 -18 C -8 -18 -13 -12 -13 -6 C -13 2 0 12 0 12 C 0 12 13 2 13 -6 C 13 -12 8 -18 0 -18 Z" fill="#c96442" />
          <circle cx="0" cy="-7" r="4" fill="#faf9f5" />
        </g>
      </svg>

      {/* Pickup label chip */}
      <div className="absolute" style={{ left: "15%", top: "82.5%" }}>
        <div className="font-sans text-[10px] font-medium text-near-black bg-ivory px-2 py-0.5 rounded-md border border-border-cream whitespace-nowrap">
          {t("heroMapPickup")}
        </div>
      </div>

      {/* Dropoff label chip */}
      <div className="absolute" style={{ left: "87.5%", top: "17.5%", transform: "translate(-50%, -120%)" }}>
        <div className="font-sans text-[10px] font-medium text-ivory bg-terracotta px-2 py-0.5 rounded-md whitespace-nowrap">
          {t("heroMapDropoff")}
        </div>
      </div>

      {/* Truck marker with pulse rings */}
      <div
        className="absolute pointer-events-none"
        style={{ left: `${TRUCK_LEFT_PCT}%`, top: `${TRUCK_TOP_PCT}%` }}
      >
        <span className="absolute top-1/2 left-1/2 w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-terracotta/40 animate-marker-pulse" />
        <span className="absolute top-1/2 left-1/2 w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-terracotta/40 animate-marker-pulse" style={{ animationDelay: "1s" }} />
        <div
          className="relative w-12 h-12 rounded-full bg-ivory flex items-center justify-center -translate-x-1/2 -translate-y-1/2 animate-truck-drift border-2 border-terracotta"
          style={{ boxShadow: "0 6px 16px rgba(201, 100, 66, 0.25)" }}
        >
          <svg width="24" height="24" viewBox="0 0 32 24" fill="none" aria-hidden="true">
            <rect x="1" y="9" width="20" height="6" rx="1" fill="#c96442" />
            <path d="M 21 7 L 28 7 L 31 11 L 31 15 L 21 15 Z" fill="#c96442" />
            <rect x="22" y="8" width="5" height="4" rx="0.5" fill="#faf9f5" opacity="0.85" />
            <circle cx="7" cy="17" r="3" fill="#141413" />
            <circle cx="7" cy="17" r="1.2" fill="#faf9f5" />
            <circle cx="25" cy="17" r="3" fill="#141413" />
            <circle cx="25" cy="17" r="1.2" fill="#faf9f5" />
          </svg>
        </div>
      </div>

      {/* ETA pill (top-start) */}
      <div className="absolute top-4 start-4">
        <div className="inline-flex items-center gap-2 bg-ivory rounded-full pl-2 pr-3.5 py-1.5 border border-border-cream whisper-shadow">
          <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-terracotta/10">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#c96442" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </span>
          <span className="font-sans text-[11px] font-medium text-near-black leading-none">{t("heroMapEta")}</span>
        </div>
      </div>

      {/* North/compass chip (top-end) */}
      <div className="absolute top-4 end-4">
        <div className="w-8 h-8 rounded-full bg-ivory border border-border-cream flex items-center justify-center whisper-shadow">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M 12 3 L 16 14 L 12 11 L 8 14 Z" fill="#c96442" />
            <path d="M 12 21 L 8 10 L 12 13 L 16 10 Z" fill="#c2c0b6" />
          </svg>
        </div>
      </div>

      {/* Driver card (bottom) */}
      <div className="absolute inset-x-3 bottom-3">
        <div className="bg-ivory rounded-[16px] border border-border-cream whisper-shadow p-3">
          <div className="flex items-center gap-3">
            <div className="relative shrink-0">
              <div className="w-10 h-10 rounded-full bg-terracotta flex items-center justify-center text-ivory">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <span className="absolute -bottom-0.5 -end-0.5 w-3 h-3 rounded-full bg-[#7a9d6e] ring-2 ring-ivory" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-[14px] font-medium text-near-black truncate">{t("heroMapDriverName")}</span>
                <span className="inline-flex items-center gap-0.5 font-sans text-[11px] font-medium text-olive">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="#c96442">
                    <polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9" />
                  </svg>
                  4.9
                </span>
              </div>
              <div className="font-sans text-[11px] text-olive leading-tight mt-0.5 truncate">
                {t("heroMapTruckMeta")}
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 bg-terracotta/8 text-terracotta rounded-full px-2.5 py-1 font-sans text-[10px] font-medium shrink-0 border border-terracotta/15">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-live-dot" />
              {t("heroMapLive")}
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-2.5 h-1 rounded-full bg-sand overflow-hidden">
            <div
              className="h-full bg-terracotta rounded-full"
              style={{ width: `${PROGRESS_PCT}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
