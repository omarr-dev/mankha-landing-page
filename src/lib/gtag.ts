export const GA_ID = "AW-18095601957";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export function trackConversion(
  label: string,
  value?: number,
  transactionId?: string,
) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  const params: Record<string, unknown> = { send_to: `${GA_ID}/${label}` };
  if (value !== undefined) {
    params.value = value;
    params.currency = "SAR";
  }
  if (transactionId) params.transaction_id = transactionId;
  window.gtag("event", "conversion", params);
}

export const trackOrderClick = () => trackConversion("CONVERSION_LABEL_1");

export const trackOrderCompleted = (orderId: string, amount: number) =>
  trackConversion("CONVERSION_LABEL_2", amount, orderId);

export const trackSignup = () => trackConversion("CONVERSION_LABEL_3");
