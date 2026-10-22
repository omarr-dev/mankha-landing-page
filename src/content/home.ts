import { BRAND_NAME_AR, BRAND_NAME_EN } from "@/brand";
import type { Locale } from "@/lib/seo";

/**
 * Home page <title> and meta description.
 *
 * The home page is what ranks for the head term «سطحة» (495 impressions at
 * position 7.2 in Search Console, 17–18 Oct 2026, CTR under 1%). The old title
 * led with the brand («واير — أقرب سطحة وقت ما تبي»), which nobody searches
 * for, so the query word now leads, followed by the two things the result
 * next to us doesn't say: we're open 24 hours, and roughly what it costs.
 *
 * The price signal must stay true to content/prices.ts: the cheapest band
 * there (Riyadh, under 10 km) has most tows at 100–140 SAR, so "from about
 * 100" is honest; "cheapest" or a fixed price never is — captains set prices.
 * The hero (i18n/translations.ts) and the home FAQ (i18n/faq.ts) repeat the
 * same promise, so change the three together and bump HOME_UPDATED.
 *
 * This is the layout's `title.default`, which the `%s | واير` template does
 * not apply to, so the brand is written in by hand.
 */
export const HOME_UPDATED = "2026-10-22";

export const homeMeta: Record<Locale, { title: string; description: string }> = {
  ar: {
    title: `سطحة ٢٤ ساعة من ١٠٠ ريال تقريبًا — قارن عروض الكباتن | ${BRAND_NAME_AR}`,
    description:
      "تعطلت سيارتك؟ طلبك في واير يوصل لكل كباتن السطحات حولك في الرياض وجدة والشرقية والأحساء، وأول عرض يجيك خلال ثواني. قارن واختر وادفع كاش. اطلب الحين.",
  },
  en: {
    title: `Tow truck 24/7 from ~100 SAR — compare driver offers | ${BRAND_NAME_EN}`,
    description:
      "Broken down? One Wire request reaches every tow truck near you in Riyadh, Jeddah, the Eastern Province and Al-Ahsa — first offer in seconds. Request now.",
  },
};
