import type { FaqItem } from "@/i18n/faq";
import type { Locale } from "@/lib/seo";

/**
 * The "how much is a tow truck" page.
 *
 * "كم سعر السطحة" / "سعر سطحة داخل الرياض" is a high-volume question that
 * every competitor answers with "it depends, call us". We answer it with our
 * own completed trips, which nobody else can publish — that is what makes the
 * page worth ranking and worth quoting for an answer engine.
 *
 * Dataset: 195 completed tows, 8 Apr – 7 Oct 2026, review/test accounts and
 * sub-50 SAR test trips excluded. Distances are straight-line pickup→drop-off.
 * Ranges are the middle half (25th–75th percentile); "median" is the 50th.
 * Refresh the numbers here, in content/cities.ts (Riyadh/Jeddah price FAQ)
 * and in components/ServiceSummary.tsx together, and bump PRICES_UPDATED.
 */
export const PRICES_UPDATED = "2026-10-08";

export type PriceRow = {
  trip: string;
  detail: string;
  range: string;
  median: string;
};

export type PriceFactor = { name: string; text: string };

export type PricesContent = {
  question: string;
  metaTitle: string;
  description: string;
  label: string;
  /** Extractable canonical answer: 40–60 words, names Wire and the numbers. */
  answer: string;
  tableTitle: string;
  columns: { trip: string; range: string; median: string };
  rows: PriceRow[];
  tableNote: string;
  factorsTitle: string;
  factors: PriceFactor[];
  servicesTitle: string;
  services: PriceFactor[];
  tipsTitle: string;
  tips: string[];
  methodTitle: string;
  method: string;
  faqTitle: string;
  faq: FaqItem[];
};

export const prices: Record<Locale, PricesContent> = {
  ar: {
    question: "كم سعر السطحة؟ الأسعار الحقيقية داخل الرياض وجدة",
    metaTitle: "سعر السطحة في الرياض وجدة ٢٠٢٦ — أسعار حقيقية من ١٩٥ رحلة",
    description:
      "كم تكلف السطحة؟ داخل الرياض أغلب الرحلات بين ١١٠ و١٥٠ ريال والوسيط ١٤٠. شوف الأسعار حسب المسافة ونوع السطحة ووقت الطلب، من رحلات منفذة فعلًا عبر واير.",
    label: "أسعار السطحات",
    answer:
      "سعر السطحة داخل الرياض غالبًا بين ١١٠ و١٥٠ ريال، والسعر الوسيط ١٤٠ ريال — حسب ١٦٩ رحلة منفذة عبر واير بين أبريل وأكتوبر ٢٠٢٦. المشوار القصير (أقل من ١٠ كم) وسيطه ١٢٠ ريال، والطويل داخل المدينة (٢٠–٤٠ كم) ١٥٠ ريال، وفي جدة الوسيط ١٥٠ ريال. وبواير يجيك عادةً ٧ عروض فتختار السعر اللي يناسبك.",
    tableTitle: "أسعار السطحة حسب المسافة",
    columns: { trip: "المشوار", range: "أغلب الأسعار", median: "السعر الوسيط" },
    rows: [
      {
        trip: "الرياض — مشوار قصير",
        detail: "أقل من ١٠ كم · ٦٧ رحلة",
        range: "١٠٠–١٤٠ ريال",
        median: "١٢٠ ريال",
      },
      {
        trip: "الرياض — مشوار متوسط",
        detail: "١٠ إلى ٢٠ كم · ٥٨ رحلة",
        range: "١٢٠–١٥٠ ريال",
        median: "١٢٠ ريال",
      },
      {
        trip: "الرياض — مشوار طويل داخل المدينة",
        detail: "٢٠ إلى ٤٠ كم · ٣٩ رحلة",
        range: "١٥٠–١٧٥ ريال",
        median: "١٥٠ ريال",
      },
      {
        trip: "جدة — كل المسافات",
        detail: "١٩ رحلة",
        range: "١٠٥–٢٠٠ ريال",
        median: "١٥٠ ريال",
      },
    ],
    tableNote:
      "المسافة بخط مستقيم بين موقع الاستلام والتسليم (الطريق الفعلي أطول). «أغلب الأسعار» = نصف الرحلات اللي في الوسط، و«السعر الوسيط» = السعر اللي نص الرحلات أقل منه ونصها أعلى.",
    factorsTitle: "وش اللي يرفع سعر السطحة أو ينزله؟",
    factors: [
      {
        name: "نوع السطحة",
        text: "داخل المدينة، وسيط السطحة الهيدروليك ١٥٠ ريال مقابل ١٢٠ للسطحة العادية. الهيدروليك أنسب للسيارات المنخفضة والفخمة واللي ما تتحرك أبدًا.",
      },
      {
        name: "وقت الطلب",
        text: "بالليل (من ١١ مساءً إلى ٦ الصبح) الوسيط ١٦٠ ريال مقابل ١٣٠ بالنهار والمساء — مع أن مشاوير الليل أقصر. الكباتن المتاحين بالليل أقل.",
      },
      {
        name: "حالة السيارة",
        text: "السيارة اللي ما تتحرك ولا تنسحب وسيطها ١٥٠ ريال حتى في المشاوير القصيرة، لأن تحميلها ياخذ وقت ومعدات أكثر.",
      },
      {
        name: "المسافة",
        text: "داخل المدينة الفرق مو كبير: من ١٢٠ ريال للمشوار القصير إلى ١٥٠ للطويل. بين المدن السعر يرتفع حسب المسافة.",
      },
      {
        name: "مكان السيارة",
        text: "القبو والمواقف الضيقة والطرق السريعة تحتاج شغل أكثر — اذكرها في وصف الطلب عشان يجيك العرض دقيق من أول مرة.",
      },
    ],
    servicesTitle: "خدمات لها تسعيرة مختلفة",
    services: [
      {
        name: "فحص دوري أو تقدير حادث (ذهاب وعودة)",
        text: "الكابتن ياخذ سيارتك لأقرب مركز فحص أو تقدير ويرجعها لك. العروض لهالخدمة في واير بين ٣٠٠ و٤٠٠ ريال.",
      },
      {
        name: "نقل سيارة بين المدن",
        text: "من الرياض أو جدة أو الشرقية أو الأحساء لأي مدينة ثانية. السعر حسب المسافة ويختلف كثير بين الكباتن، فالأفضل تطلب وتقارن العروض قبل ما توافق.",
      },
    ],
    tipsTitle: "كيف تاخذ أفضل سعر",
    tips: [
      "وصّف حالتك بدقة وأضف صورة للسيارة — العرض الدقيق يجيك من أول مرة وما يتغير عند الوصول.",
      "قارن العروض: أغلب الطلبات يجيها ٧ عروض أو أكثر، وأول عرض غالبًا خلال أقل من ٣٠ ثانية.",
      "لا تختار الأرخص وبس — شوف تقييم الكابتن ووقت وصوله المتوقع.",
      "إذا سيارتك عادية وتنسحب، السطحة العادية أرخص من الهيدروليك بحوالي ٣٠ ريال.",
      "السعر اللي توافق عليه هو اللي تدفعه للكابتن عند التسليم — بدون رسوم إضافية على العميل.",
    ],
    methodTitle: "من وين جت هالأرقام؟",
    method:
      "من ١٩٥ رحلة سطحة منفذة ومكتملة عبر واير بين ٨ أبريل و٧ أكتوبر ٢٠٢٦، بعد استبعاد الرحلات التجريبية. هذي أسعار وافق عليها عملاء فعلًا، مو تسعيرة مقترحة. نحدّث الأرقام دوريًا.",
    faqTitle: "أسئلة عن سعر السطحة",
    faq: [
      {
        q: "كم سعر السطحة داخل الرياض؟",
        a: "أغلب رحلات السطحة داخل الرياض بين ١١٠ و١٥٠ ريال والسعر الوسيط ١٤٠ ريال، حسب ١٦٩ رحلة منفذة عبر واير (أبريل–أكتوبر ٢٠٢٦). المشوار القصير أقل من ١٠ كم وسيطه ١٢٠ ريال، والطويل من ٢٠ إلى ٤٠ كم وسيطه ١٥٠ ريال.",
      },
      {
        q: "كم سعر السطحة في جدة؟",
        a: "الرحلات المنفذة عبر واير داخل جدة كانت أغلبها بين ١٠٥ و٢٠٠ ريال حسب المسافة، والسعر الوسيط ١٥٠ ريال. العينة أصغر من الرياض، فالأفضل تطلب وتقارن عروض الكباتن لرحلتك بالتحديد.",
      },
      {
        q: "كم سعر السطحة الهيدروليك؟",
        a: "داخل المدينة، وسيط رحلات السطحة الهيدروليك عبر واير ١٥٠ ريال مقابل ١٢٠ للسطحة العادية. الهيدروليك أنسب للسيارات المنخفضة والفخمة واللي ما تتحرك، والعادية تكفي لأغلب السيارات اللي تنسحب.",
      },
      {
        q: "هل السطحة بالليل أغلى؟",
        a: "غالبًا نعم. رحلات الليل من ١١ مساءً إلى ٦ الصبح وسيطها ١٦٠ ريال مقابل ١٣٠ بالنهار والمساء، مع أن مشاويرها أقصر، لأن الكباتن المتاحين أقل. ومع ذلك يجيك أكثر من عرض وتختار الأنسب.",
      },
      {
        q: "هل في رسوم إضافية غير سعر الكابتن؟",
        a: "لا. تدفع للكابتن نفس السعر اللي وافقت عليه في التطبيق عند التسليم، بدون رسوم إضافية على العميل وبدون مساومة على الطريق. تحميل التطبيق والطلب مجاني.",
      },
      {
        q: "كيف أعرف سعر سطحتي بالضبط؟",
        a: "اطلب من تطبيق واير وحدد موقع الاستلام والتسليم ووصّف حالتك. الكباتن القريبين يرسلون عروضهم بأسعارها — أول عرض غالبًا خلال أقل من ٣٠ ثانية — وتشوف السعر قبل ما توافق، وما يلزمك شي لين تقبل عرض.",
      },
    ],
  },
  en: {
    question: "How much is a tow truck? Real prices in Riyadh and Jeddah",
    metaTitle: "Tow truck prices in Riyadh & Jeddah, 2026 — real data from 195 tows",
    description:
      "How much does a tow truck cost? Inside Riyadh most tows cost 110–150 SAR with a median of 140. See prices by distance, truck type and time of day, from tows actually completed on Wire.",
    label: "Tow truck prices",
    answer:
      "A tow truck inside Riyadh usually costs 110–150 SAR, with a median of 140 SAR — based on 169 tows completed on Wire between April and October 2026. A short tow (under 10 km) has a median of 120 SAR, a long one inside the city (20–40 km) 150 SAR, and Jeddah's median is 150 SAR. On Wire you typically get 7 offers and pick the price that suits you.",
    tableTitle: "Tow truck prices by distance",
    columns: { trip: "Trip", range: "Most prices", median: "Median" },
    rows: [
      {
        trip: "Riyadh — short tow",
        detail: "Under 10 km · 67 tows",
        range: "100–140 SAR",
        median: "120 SAR",
      },
      {
        trip: "Riyadh — medium tow",
        detail: "10 to 20 km · 58 tows",
        range: "120–150 SAR",
        median: "120 SAR",
      },
      {
        trip: "Riyadh — long tow inside the city",
        detail: "20 to 40 km · 39 tows",
        range: "150–175 SAR",
        median: "150 SAR",
      },
      {
        trip: "Jeddah — all distances",
        detail: "19 tows",
        range: "105–200 SAR",
        median: "150 SAR",
      },
    ],
    tableNote:
      "Distance is straight-line between pickup and drop-off (the road is longer). \"Most prices\" is the middle half of tows; the median is the price half the tows were below and half above.",
    factorsTitle: "What makes a tow cost more or less?",
    factors: [
      {
        name: "Truck type",
        text: "Inside the city, hydraulic flatbeds have a median of 150 SAR against 120 SAR for a regular flatbed. Hydraulic suits low, luxury and fully immobile cars.",
      },
      {
        name: "Time of day",
        text: "At night (11 pm to 6 am) the median is 160 SAR against 130 SAR by day and evening — even though night tows are shorter. Fewer drivers are available at night.",
      },
      {
        name: "Car condition",
        text: "A car that neither drives nor rolls has a median of 150 SAR even on short tows, because loading it takes more time and equipment.",
      },
      {
        name: "Distance",
        text: "Inside the city the difference is small: from 120 SAR for a short tow to 150 SAR for a long one. Between cities the price rises with distance.",
      },
      {
        name: "Where the car is",
        text: "Basements, tight parking and highways take more work — mention them in the request so the offer is accurate the first time.",
      },
    ],
    servicesTitle: "Services priced differently",
    services: [
      {
        name: "Periodic inspection or accident valuation (round trip)",
        text: "The driver takes your car to the nearest inspection or valuation centre and brings it back. Offers for this service on Wire are 300–400 SAR.",
      },
      {
        name: "Moving a car between cities",
        text: "From Riyadh, Jeddah, the Eastern Province or Al-Ahsa to any other city. The price depends on distance and varies a lot between drivers, so request first and compare offers before accepting.",
      },
    ],
    tipsTitle: "How to get the best price",
    tips: [
      "Describe the problem precisely and add a photo — the offer is accurate the first time and doesn't change on arrival.",
      "Compare offers: most requests get 7 or more, and the first one usually lands in under 30 seconds.",
      "Don't just take the cheapest — check the driver's rating and estimated arrival.",
      "If your car is ordinary and rolls, a regular flatbed is about 30 SAR cheaper than a hydraulic one.",
      "The price you accept is what you pay the driver at drop-off — no extra fees for customers.",
    ],
    methodTitle: "Where do these numbers come from?",
    method:
      "From 195 tows completed on Wire between 8 April and 7 October 2026, with test trips excluded. These are prices customers actually accepted, not a suggested tariff. We refresh them regularly.",
    faqTitle: "Questions about tow truck prices",
    faq: [
      {
        q: "How much is a tow truck inside Riyadh?",
        a: "Most tows inside Riyadh cost 110–150 SAR with a median of 140 SAR, based on 169 tows completed on Wire (April–October 2026). A short tow under 10 km has a median of 120 SAR, and a long one of 20–40 km a median of 150 SAR.",
      },
      {
        q: "How much is a tow truck in Jeddah?",
        a: "Tows completed on Wire inside Jeddah mostly cost 105–200 SAR depending on distance, with a median of 150 SAR. The sample is smaller than Riyadh's, so request and compare driver offers for your specific trip.",
      },
      {
        q: "How much is a hydraulic tow truck?",
        a: "Inside the city, hydraulic flatbed tows on Wire have a median of 150 SAR against 120 SAR for a regular flatbed. Hydraulic suits low, luxury and immobile cars; a regular flatbed is enough for most cars that roll.",
      },
      {
        q: "Is towing more expensive at night?",
        a: "Usually, yes. Night tows from 11 pm to 6 am have a median of 160 SAR against 130 SAR by day and evening, even though they are shorter, because fewer drivers are available. You still get several offers and choose.",
      },
      {
        q: "Are there fees on top of the driver's price?",
        a: "No. You pay the driver exactly the price you accepted in the app at drop-off, with no extra fees for customers and no roadside haggling. Downloading the app and requesting are free.",
      },
      {
        q: "How do I find out the exact price of my tow?",
        a: "Request in the Wire app with your pickup and drop-off and describe the problem. Nearby drivers send priced offers — the first usually in under 30 seconds — and you see the price before accepting; nothing binds you until you accept an offer.",
      },
    ],
  },
};
