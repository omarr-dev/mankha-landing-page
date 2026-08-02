import Script from "next/script";

const GOOGLE_ADS_ID = "AW-18095601957";
const GOOGLE_ADS_ID_SECONDARY = "AW-18124546435";
const GOOGLE_ANALYTICS_ID = "G-JNXD8CLCR1";

/**
 * Google Ads + Analytics gtag bootstrap. Rendered in BOTH root layouts
 * (the localized site and the bare /record /whatsapp redirect pages) because
 * the Ads page-view conversion on /record depends on `window.gtag` existing.
 */
export function GtagScripts() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('set', 'linker', { domains: ['wire.sa','order.wire.sa','sathtek.app','order.sathtek.app'], accept_incoming: true });
gtag('config', '${GOOGLE_ADS_ID}');
gtag('config', '${GOOGLE_ADS_ID_SECONDARY}');
gtag('config', '${GOOGLE_ANALYTICS_ID}');`}
      </Script>
    </>
  );
}
