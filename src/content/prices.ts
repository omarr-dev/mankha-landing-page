import type { FaqItem } from "@/i18n/faq";
import type { Locale } from "@/lib/seo";

/**
 * The "how much is a tow truck" page.
 *
 * "كم سعر السطحة" / "سعر سطحة داخل الرياض" is a high-volume question that
 * every competitor answers with "it depends, call us". We answer it with the
 * prices our own customers accepted, which nobody else can publish — that is
 * what makes the page worth ranking and worth quoting for an answer engine.
 *
 * Dataset (queries and results: ops/weekly-report/prices-2026-10-22.md): every
 * trip created in the 90 days to 22 Oct 2026 15:00 Riyadh. A trip is an
 * accepted offer, so trips cancelled later still count. One-way, under 40 km
 * straight-line pickup→drop-off, price ≥ 50 SAR, test accounts excluded.
 * The three distance bands replicate the server's MarketPriceGuide, i.e. the
 * "usual price" both apps show customers and captains: the middle half
 * (25th–75th percentile), low end floored and high end ceiled to 5 SAR;
 * "median" is the 50th. Nothing is published under 12 samples (Jeddah had 9).
 * City = pickup inside the backend service-area circle (50 km), not the
 * PickupCity text.
 *
 * The same numbers are quoted in content/cities.ts (Riyadh price FAQ),
 * content/nearest.ts, content/riyadhZones.ts, content/business.ts,
 * content/guides.ts (car-flooded FAQ), content/home.ts ("from ~100"),
 * i18n/faq.ts, i18n/translations.ts (heroSub) and the AggregateOffer in
 * app/(site)/[lang]/prices/page.tsx; components/ServiceSummary.tsx carries
 * the supply facts (offers per request). Refresh them together and bump
 * PRICES_UPDATED.
 */
export const PRICES_UPDATED = "2026-10-22";

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
    question: "كم سعر السطحة؟ الأسعار الحقيقية داخل الرياض",
    metaTitle: "سعر السطحة في الرياض ٢٠٢٦ — أسعار حقيقية من آخر ٩٠ يوم",
    description:
      "كم تكلف السطحة؟ داخل الرياض أغلب الأسعار بين ١٠٠ و١٥٠ ريال والوسيط ١٢٠. شوف الأسعار حسب المسافة ونوع السطحة ووقت الطلب، من عروض وافق عليها العملاء فعلًا عبر واير.",
    label: "أسعار السطحات",
    answer:
      "سعر السطحة داخل الرياض غالبًا بين ١٠٠ و١٥٠ ريال، والسعر الوسيط ١٢٠ ريال — حسب ٢١١ عرض وافق عليه العملاء عبر واير في آخر ٩٠ يوم. المشوار القصير (أقل من ١٠ كم) أغلبه بين ١٠٠ و١٢٠ ريال، والطويل داخل المدينة (٢٠–٤٠ كم) بين ١٥٠ و١٧٠. وبواير يجيك عادةً ٧ عروض فتختار السعر اللي يناسبك.",
    tableTitle: "أسعار السطحة حسب المسافة",
    columns: { trip: "المشوار", range: "أغلب الأسعار", median: "السعر الوسيط" },
    rows: [
      {
        trip: "مشوار قصير",
        detail: "أقل من ١٠ كم · ٧٩ عرض مقبول",
        range: "١٠٠–١٢٠ ريال",
        median: "١٠٠ ريال",
      },
      {
        trip: "مشوار متوسط",
        detail: "١٠ إلى ٢٠ كم · ٨٧ عرض مقبول",
        range: "١٠٥–١٥٠ ريال",
        median: "١٢٠ ريال",
      },
      {
        trip: "مشوار طويل داخل المدينة",
        detail: "٢٠ إلى ٤٠ كم · ٥٩ عرض مقبول",
        range: "١٥٠–١٧٠ ريال",
        median: "١٥٠ ريال",
      },
      {
        trip: "الرياض — كل المشاوير داخل المدينة",
        detail: "٢١١ عرض مقبول",
        range: "١٠٠–١٥٠ ريال",
        median: "١٢٠ ريال",
      },
    ],
    tableNote:
      "أول ثلاث شرائح هي نفسها «السعر المعتاد» اللي يعرضه تطبيق واير للعملاء والكباتن، وتشمل كل المدن (أغلبها من الرياض). المسافة بخط مستقيم بين موقع الاستلام والتسليم (الطريق الفعلي أطول). «أغلب الأسعار» = نص الأسعار اللي في الوسط، و«السعر الوسيط» = السعر اللي نص الأسعار أقل منه ونصها أعلى. جدة ما نعرض لها رقم منفصل لأن عيّنتها أقل من ١٢ عرض.",
    factorsTitle: "وش اللي يرفع سعر السطحة أو ينزله؟",
    factors: [
      {
        name: "نوع السطحة",
        text: "داخل المدينة، وسيط السطحة الهيدروليك ١٣٥ ريال مقابل ١٢٠ للسطحة العادية. الهيدروليك أنسب للسيارات المنخفضة والفخمة واللي ما تتحرك أبدًا.",
      },
      {
        name: "وقت الطلب",
        text: "بالليل (من ٨ مساءً إلى ٦ الصبح) الوسيط ١٥٠ ريال مقابل ١٢٠ بالنهار، والفرق أوضح في المشاوير القصيرة والمتوسطة. الكباتن المتاحين بالليل أقل، خصوصًا بعد ١١ الليل.",
      },
      {
        name: "حالة السيارة",
        text: "في المشوار القصير (أقل من ١٠ كم) السيارة اللي تنسحب أغلب أسعارها ١٠٠ ريال، أما اللي ما تتحرك ولا تنسحب فأغلب أسعارها بين ١٠٠ و١٥٠ ريال، لأن تحميلها ياخذ وقت ومعدات أكثر.",
      },
      {
        name: "المسافة",
        text: "داخل المدينة الفرق مو كبير: الوسيط ١٠٠ ريال للمشوار القصير و١٢٠ للمتوسط و١٥٠ للطويل. بين المدن السعر يرتفع حسب المسافة.",
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
      "إذا سيارتك عادية وتنسحب، السطحة العادية وسيطها أقل من الهيدروليك بحوالي ١٥ ريال.",
      "السعر اللي توافق عليه في التطبيق هو السعر النهائي — بدون رسوم إضافية على العميل.",
    ],
    methodTitle: "من وين جت هالأرقام؟",
    method:
      "من آخر ٩٠ يوم من الطلبات المقبولة عبر واير (٢٤ يوليو – ٢٢ أكتوبر ٢٠٢٦): كل رقم هنا سعر عرض كابتن وافق عليه العميل، حتى لو انلغت الرحلة بعدها لسبب ثاني. حسبنا المشاوير داخل المدينة (أقل من ٤٠ كم بخط مستقيم)، واستبعدنا الحسابات التجريبية والأسعار الأقل من ٥٠ ريال وطلبات الفحص والتقدير. شرائح المسافة محسوبة بنفس طريقة «السعر المعتاد» اللي يعرضه تطبيق واير للعملاء والكباتن: نص الأسعار اللي في الوسط، بتقريب الحد الأدنى لأقرب ٥ ريال تحت والأعلى لأقرب ٥ فوق، وما ننشر أي فئة عيّنتها أقل من ١٢ عرض. هذي مو تسعيرة — الكباتن يحددون أسعارهم بعروض تتنافس على طلبك. نحدّث الأرقام دوريًا.",
    faqTitle: "أسئلة عن سعر السطحة",
    faq: [
      {
        q: "كم سعر السطحة داخل الرياض؟",
        a: "أغلب أسعار السطحة داخل الرياض بين ١٠٠ و١٥٠ ريال والسعر الوسيط ١٢٠ ريال، حسب ٢١١ عرض وافق عليه العملاء عبر واير في آخر ٩٠ يوم. المشوار القصير أقل من ١٠ كم أغلبه بين ١٠٠ و١٢٠ ريال، والطويل من ٢٠ إلى ٤٠ كم بين ١٥٠ و١٧٠ ريال.",
      },
      {
        q: "كم سعر السطحة في جدة؟",
        a: "ما في تسعيرة ثابتة — كل كابتن قريب يرسل عرضه لرحلتك وأنت تختار. طلبات جدة المقبولة في آخر ٩٠ يوم أقل من إنها تعطي رقم موثوق، فما ننشر لها سعر منفصل. اطلب وقارن عروض الكباتن لرحلتك بالتحديد، وداخل المدينة يعرض لك تطبيق واير السعر المعتاد لمشاوير بنفس مسافتك.",
      },
      {
        q: "كم سعر السطحة الهيدروليك؟",
        a: "داخل المدينة، وسيط أسعار السطحة الهيدروليك عبر واير ١٣٥ ريال مقابل ١٢٠ للسطحة العادية في آخر ٩٠ يوم. الهيدروليك أنسب للسيارات المنخفضة والفخمة واللي ما تتحرك، والعادية تكفي لأغلب السيارات اللي تنسحب.",
      },
      {
        q: "هل السطحة بالليل أغلى؟",
        a: "غالبًا نعم. الطلبات من ٨ مساءً إلى ٦ الصبح وسيطها ١٥٠ ريال مقابل ١٢٠ بالنهار، والفرق أوضح في المشاوير القصيرة والمتوسطة. والكباتن المتاحين بالليل أقل، خصوصًا بعد ١١ الليل، ومع ذلك يجيك أكثر من عرض وتختار الأنسب.",
      },
      {
        q: "هل في رسوم إضافية غير سعر الكابتن؟",
        a: "لا. السعر اللي وافقت عليه في التطبيق هو السعر النهائي، بدون رسوم إضافية على العميل وبدون مساومة على الطريق. تحميل التطبيق والطلب مجاني.",
      },
      {
        q: "كيف أعرف سعر سطحتي بالضبط؟",
        a: "اطلب من تطبيق واير وحدد موقع الاستلام والتسليم ووصّف حالتك. الكباتن القريبين يرسلون عروضهم بأسعارها — أول عرض غالبًا خلال أقل من ٣٠ ثانية — وتشوف السعر قبل ما توافق، وما يلزمك شي لين تقبل عرض.",
      },
    ],
  },
  en: {
    question: "How much is a tow truck? Real prices inside Riyadh",
    metaTitle: "Tow truck prices in Riyadh, 2026 — real data from the last 90 days",
    description:
      "How much does a tow truck cost? Inside Riyadh most prices are 100–150 SAR with a median of 120. See prices by distance, truck type and time of day, from offers customers actually accepted on Wire.",
    label: "Tow truck prices",
    answer:
      "A tow truck inside Riyadh usually costs 100–150 SAR, with a median of 120 SAR — based on 211 offers customers accepted on Wire in the last 90 days. A short tow (under 10 km) is mostly 100–120 SAR and a long one inside the city (20–40 km) 150–170 SAR. On Wire you typically get 7 offers and pick the price that suits you.",
    tableTitle: "Tow truck prices by distance",
    columns: { trip: "Trip", range: "Most prices", median: "Median" },
    rows: [
      {
        trip: "Short tow",
        detail: "Under 10 km · 79 accepted offers",
        range: "100–120 SAR",
        median: "100 SAR",
      },
      {
        trip: "Medium tow",
        detail: "10 to 20 km · 87 accepted offers",
        range: "105–150 SAR",
        median: "120 SAR",
      },
      {
        trip: "Long tow inside the city",
        detail: "20 to 40 km · 59 accepted offers",
        range: "150–170 SAR",
        median: "150 SAR",
      },
      {
        trip: "Riyadh — all in-city tows",
        detail: "211 accepted offers",
        range: "100–150 SAR",
        median: "120 SAR",
      },
    ],
    tableNote:
      "The first three bands are the same \"usual price\" the Wire app shows customers and drivers, across all cities (most of them in Riyadh). Distance is straight-line between pickup and drop-off (the road is longer). \"Most prices\" is the middle half of prices; the median is the price half were below and half above. Jeddah gets no separate figure because its sample is under 12 accepted offers.",
    factorsTitle: "What makes a tow cost more or less?",
    factors: [
      {
        name: "Truck type",
        text: "Inside the city, hydraulic flatbeds have a median of 135 SAR against 120 SAR for a regular flatbed. Hydraulic suits low, luxury and fully immobile cars.",
      },
      {
        name: "Time of day",
        text: "At night (8 pm to 6 am) the median is 150 SAR against 120 SAR by day, and the gap is clearest on short and medium trips. Fewer drivers are available at night, especially after 11 pm.",
      },
      {
        name: "Car condition",
        text: "On a short tow (under 10 km), a car that rolls mostly costs 100 SAR, while one that neither drives nor rolls mostly costs 100–150 SAR, because loading it takes more time and equipment.",
      },
      {
        name: "Distance",
        text: "Inside the city the difference is small: a median of 100 SAR for a short tow, 120 SAR for a medium one and 150 SAR for a long one. Between cities the price rises with distance.",
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
      "If your car is ordinary and rolls, a regular flatbed has a median about 15 SAR lower than a hydraulic one.",
      "The price you accept in the app is the final price — no extra fees for customers.",
    ],
    methodTitle: "Where do these numbers come from?",
    method:
      "From the last 90 days of accepted requests on Wire (24 July – 22 October 2026): every number here is a driver's offer that a customer accepted, even if the trip was later cancelled for another reason. We counted in-city trips (under 40 km in a straight line) and excluded test accounts, prices under 50 SAR and inspection or valuation round trips. The distance bands use the same method as the \"usual price\" the Wire app shows customers and drivers: the middle half of prices, with the low end rounded down and the high end rounded up to the nearest 5 SAR, and no group with fewer than 12 accepted offers is published. This is not a tariff — drivers set their prices through competing offers on your request. We refresh these numbers regularly.",
    faqTitle: "Questions about tow truck prices",
    faq: [
      {
        q: "How much is a tow truck inside Riyadh?",
        a: "Most tows inside Riyadh cost 100–150 SAR with a median of 120 SAR, based on 211 offers customers accepted on Wire in the last 90 days. A short tow under 10 km is mostly 100–120 SAR, and a long one of 20–40 km 150–170 SAR.",
      },
      {
        q: "How much is a tow truck in Jeddah?",
        a: "There is no fixed rate — each nearby driver quotes your trip and you choose. Jeddah had too few accepted offers in the last 90 days for a reliable figure, so we don't publish a separate one. Request and compare driver offers for your specific trip; inside the city, the Wire app also shows you the usual price for trips of your distance.",
      },
      {
        q: "How much is a hydraulic tow truck?",
        a: "Inside the city, hydraulic flatbed tows on Wire have a median of 135 SAR against 120 SAR for a regular flatbed over the last 90 days. Hydraulic suits low, luxury and immobile cars; a regular flatbed is enough for most cars that roll.",
      },
      {
        q: "Is towing more expensive at night?",
        a: "Usually, yes. Requests from 8 pm to 6 am have a median of 150 SAR against 120 SAR by day, and the gap is clearest on short and medium trips. Fewer drivers are available at night, especially after 11 pm, but you still get several offers and choose.",
      },
      {
        q: "Are there fees on top of the driver's price?",
        a: "No. The price you accepted in the app is the final price, with no extra fees for customers and no roadside haggling. Downloading the app and requesting are free.",
      },
      {
        q: "How do I find out the exact price of my tow?",
        a: "Request in the Wire app with your pickup and drop-off and describe the problem. Nearby drivers send priced offers — the first usually in under 30 seconds — and you see the price before accepting; nothing binds you until you accept an offer.",
      },
    ],
  },
};
