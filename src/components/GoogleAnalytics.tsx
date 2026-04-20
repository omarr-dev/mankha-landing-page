"use client";

import Script from "next/script";
import { GA_ID } from "@/lib/gtag";

export function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('set', 'linker', { domains: ['sathtek.app', 'order.sathtek.app'] });
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
