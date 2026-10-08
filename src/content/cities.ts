import type { FaqItem } from "@/i18n/faq";
import type { Locale } from "@/lib/seo";

/**
 * City landing pages — the local-intent half of the GEO surface.
 *
 * "سطحة الرياض" and "tow truck near me in Jeddah" are answered by whichever
 * page names real local entities. Districts and named roads are what make a
 * page look locally grounded to both a crawler and an answer engine, so every
 * city carries a real list of both rather than generic filler.
 */

export type CityContent = {
  /** City name in this locale — used in <h1> and schema. */
  name: string;
  metaTitle: string;
  description: string;
  /** Self-contained 40–60 word answer naming the city and Wire. */
  answer: string;
  areasTitle: string;
  areas: string[];
  roadsTitle: string;
  roads: string[];
  faqTitle: string;
  faq: FaqItem[];
};

export type City = {
  slug: string;
  /** Schema.org City name in English, used for `areaServed`. */
  schemaName: string;
  content: Record<Locale, CityContent>;
};

/**
 * The <h1> is phrased as the question a person actually asks, not as the
 * <title>. Derived rather than hand-written so every city stays identical
 * in shape — an answer engine comparing them sees one consistent template.
 */
export const cityHeading = (locale: Locale, name: string): string =>
  locale === "ar"
    ? `سطحة ${name} — كيف تطلب أقرب سطحة؟`
    : `Tow truck in ${name} — how do I get the nearest one?`;

const arFaq = (city: string, price?: string): FaqItem[] => [
  {
    q: `كيف أطلب سطحة في ${city}؟`,
    a: `افتح تطبيق واير، حدد موقعك في ${city} على الخريطة أو خل الـ GPS يحدده، ووصّف حالتك. الطلب يوصل فورًا لكل كباتن السطحات القريبين منك، وتجيك عروضهم بأسعارها خلال دقائق فتختار الأنسب.`,
  },
  {
    q: `كم سعر السطحة في ${city}؟`,
    a:
      price ??
      `ما في تسعيرة ثابتة. كل كابتن قريب منك في ${city} يرسل عرضه لرحلتك بالتحديد حسب المسافة وحالة السيارة، وأنت تقارن العروض وتختار. تشوف السعر قبل ما توافق فما في مساومة على الطريق.`,
  },
  {
    q: `هل في سطحة ٢٤ ساعة في ${city}؟`,
    a: `نعم. واير تشتغل ٢٤ ساعة طوال أيام الأسبوع بما فيها العطلات في ${city}، فتقدر تطلب سطحة أو مساعدة على الطريق في أي وقت وتلقى كباتن موثقين قريبين منك.`,
  },
  {
    q: `هل أقدر أتابع السطحة على الخريطة؟`,
    a: `نعم. بعد ما تقبل عرض الكابتن تشوف موقعه يتحرك على الخريطة لحظة بلحظة مع وقت الوصول المتوقع، وتبقى على اطلاع بكل خطوة من التحميل حتى التسليم داخل التطبيق.`,
  },
];

const enFaq = (city: string, price?: string): FaqItem[] => [
  {
    q: `How do I get a tow truck in ${city}?`,
    a: `Open the Wire app, set your location in ${city} on the map or let GPS place it, and describe the problem. The request reaches every nearby tow truck driver at once, and their quotes come back within minutes so you pick the best fit.`,
  },
  {
    q: `How much does a tow truck cost in ${city}?`,
    a:
      price ??
      `There is no fixed rate. Each driver near you in ${city} quotes your specific trip based on distance and the car's condition, and you compare and choose. You see the price before accepting, so there is no roadside haggling.`,
  },
  {
    q: `Is there 24 hour towing in ${city}?`,
    a: `Yes. Wire operates 24 hours a day, 7 days a week including holidays in ${city}, so you can request a tow or roadside assistance at any hour and reach verified drivers near you.`,
  },
  {
    q: `Can I track the tow truck on a map?`,
    a: `Yes. Once you accept a driver's offer, you watch their location move on the map in real time with an estimated arrival, and every step from loading to drop-off is documented in the app.`,
  },
];

// Price answers quote real completed trips (test accounts excluded); the same
// dataset backs /prices — keep the two in step when the numbers are refreshed.
const RIYADH_PRICE_AR =
  "ما في تسعيرة ثابتة — كل كابتن قريب يرسل عرضه لرحلتك وأنت تختار. وللمرجع: من ١٦٩ رحلة منفذة عبر واير داخل الرياض (أبريل–أكتوبر ٢٠٢٦) كان نصف الرحلات بين ١١٠ و١٥٠ ريال، والسعر الوسيط ١٤٠ ريال. تشوف السعر قبل ما توافق فما في مساومة على الطريق.";
const RIYADH_PRICE_EN =
  "There is no fixed rate — each nearby driver quotes your trip and you choose. For reference: across 169 tows completed on Wire inside Riyadh (April–October 2026), the middle half cost 110–150 SAR and the median was 140 SAR. You see the price before accepting, so there is no roadside haggling.";
const JEDDAH_PRICE_AR =
  "ما في تسعيرة ثابتة — كل كابتن قريب يرسل عرضه لرحلتك وأنت تختار. وللمرجع: الرحلات المنفذة عبر واير داخل جدة كانت أغلبها بين ١٠٥ و٢٠٠ ريال حسب المسافة، والسعر الوسيط ١٥٠ ريال. تشوف السعر قبل ما توافق فما في مساومة على الطريق.";
const JEDDAH_PRICE_EN =
  "There is no fixed rate — each nearby driver quotes your trip and you choose. For reference: tows completed on Wire inside Jeddah mostly cost 105–200 SAR depending on distance, with a median of 150 SAR. You see the price before accepting, so there is no roadside haggling.";

export const cities: City[] = [
  {
    slug: "riyadh",
    schemaName: "Riyadh",
    content: {
      ar: {
        name: "الرياض",
        metaTitle: "سطحة الرياض ٢٤ ساعة — أقرب سطحة لك بأفضل سعر",
        description:
          "اطلب سطحة في الرياض ٢٤ ساعة عبر واير. طلب واحد يوصل لكل الكباتن القريبين منك في العليا والملقا والنسيم وبقية أحياء الرياض، تقارن عروضهم وتتابع رحلتك مباشرة.",
        answer:
          "لطلب سطحة في الرياض، افتح تطبيق واير وحدد موقعك على الخريطة ووصّف حالتك. طلبك يوصل في نفس اللحظة لكل كباتن السطحات الموثقين القريبين منك في الرياض، تجيك عروضهم بأسعارها خلال دقائق، تختار الأنسب وتتابع الكابتن على الخريطة لين يوصل. الخدمة متاحة ٢٤ ساعة في جميع أحياء الرياض.",
        areasTitle: "نغطي أحياء الرياض",
        areas: [
          "العليا",
          "الملقا",
          "الياسمين",
          "النرجس",
          "حطين",
          "العارض",
          "النخيل",
          "العقيق",
          "الروضة",
          "اليرموك",
          "النسيم",
          "الجنادرية",
          "الرمال",
          "السلي",
          "السويدي",
          "عرقة",
          "الشفا",
          "العزيزية",
          "المروة",
          "قرطبة",
          "الصناعية",
          "المصانع",
          "الروابي",
          "الدرعية",
        ],
        roadsTitle: "والطرق الرئيسية",
        roads: [
          "طريق الملك فهد",
          "طريق الملك عبدالعزيز",
          "الدائري الشرقي",
          "طريق الدمام السريع",
          "طريق الخرج",
          "طريق مكة",
        ],
        faqTitle: "أسئلة عن السطحة في الرياض",
        faq: arFaq("الرياض", RIYADH_PRICE_AR),
      },
      en: {
        name: "Riyadh",
        metaTitle: "Tow truck in Riyadh, 24/7 — nearest driver, best price",
        description:
          "Request a tow truck in Riyadh 24/7 with Wire. One request reaches every nearby driver across Olaya, Malqa, Naseem and the rest of Riyadh — compare quotes and track your tow live.",
        answer:
          "To get a tow truck in Riyadh, open the Wire app, set your location on the map, and describe the problem. Your request reaches every verified tow truck driver near you in Riyadh at the same moment, their quotes arrive within minutes, and you pick one and track them live on the map. Available 24/7 across all Riyadh districts.",
        areasTitle: "Districts we cover in Riyadh",
        areas: [
          "Olaya",
          "Al Malqa",
          "Al Yasmin",
          "Al Narjis",
          "Hittin",
          "Al Arid",
          "Al Nakheel",
          "Al Aqiq",
          "Al Rawdah",
          "Al Yarmouk",
          "Al Naseem",
          "Al Janadriyah",
          "Al Rimal",
          "Al Sulay",
          "Al Suwaidi",
          "Irqah",
          "Al Shifa",
          "Al Aziziyah",
          "Al Marwah",
          "Qurtubah",
          "Al Sinaiyah (industrial area)",
          "Al Masani",
          "Al Rawabi",
          "Diriyah",
        ],
        roadsTitle: "And the main roads",
        roads: [
          "King Fahd Road",
          "King Abdulaziz Road",
          "Eastern Ring Road",
          "Dammam Expressway",
          "Al Kharj Road",
          "Makkah Road",
        ],
        faqTitle: "Questions about towing in Riyadh",
        faq: enFaq("Riyadh", RIYADH_PRICE_EN),
      },
    },
  },
  {
    slug: "jeddah",
    schemaName: "Jeddah",
    content: {
      ar: {
        name: "جدة",
        metaTitle: "سطحة جدة ٢٤ ساعة — اطلب أقرب سطحة وقارن الأسعار",
        description:
          "اطلب سطحة في جدة ٢٤ ساعة عبر واير. طلبك يوصل لكل الكباتن القريبين منك في الروضة والصفا وأبحر وبقية أحياء جدة، تقارن العروض وتختار الأنسب.",
        answer:
          "لطلب سطحة في جدة، افتح تطبيق واير وحدد موقعك على الخريطة ووصّف حالتك. الطلب يوصل مباشرة لكل كباتن السطحات القريبين منك في جدة، تجيك عروضهم بأسعارها، تختار الأنسب وتتابع الكابتن على الخريطة حتى يوصلك. الخدمة متاحة ٢٤ ساعة في جميع أحياء جدة.",
        areasTitle: "نغطي أحياء جدة",
        areas: [
          "الروضة",
          "الصفا",
          "السلامة",
          "الشاطئ",
          "أبحر الشمالية",
          "الحمراء",
          "النعيم",
          "العزيزية",
          "الرحاب",
          "البلد",
          "أبحر الجنوبية",
          "الأجاويد",
          "الحرازات",
          "الزهراء",
          "الحمدانية",
          "النزهة",
          "بريمان",
        ],
        roadsTitle: "والطرق الرئيسية",
        roads: [
          "طريق الملك عبدالعزيز",
          "طريق الحرمين",
          "طريق الكورنيش",
          "طريق المدينة",
          "طريق مكة القديم",
          "طريق الأمير سلطان",
        ],
        faqTitle: "أسئلة عن السطحة في جدة",
        faq: arFaq("جدة", JEDDAH_PRICE_AR),
      },
      en: {
        name: "Jeddah",
        metaTitle: "Tow truck in Jeddah, 24/7 — nearest driver, compare quotes",
        description:
          "Request a tow truck in Jeddah 24/7 with Wire. Your request reaches every nearby driver across Al Rawdah, Al Safa, Obhur and the rest of Jeddah — compare offers and choose.",
        answer:
          "To get a tow truck in Jeddah, open the Wire app, set your location on the map, and describe the problem. The request goes straight to every nearby tow truck driver in Jeddah, their quotes come back, and you pick one and track them on the map until they reach you. Available 24/7 across all Jeddah districts.",
        areasTitle: "Districts we cover in Jeddah",
        areas: [
          "Al Rawdah",
          "Al Safa",
          "Al Salamah",
          "Al Shati",
          "North Obhur",
          "Al Hamra",
          "Al Naeem",
          "Al Aziziyah",
          "Al Rehab",
          "Al Balad",
          "South Obhur",
          "Al Ajaweed",
          "Al Harazat",
          "Al Zahra",
          "Al Hamdaniyah",
          "Al Nuzhah",
          "Briman",
        ],
        roadsTitle: "And the main roads",
        roads: [
          "King Abdulaziz Road",
          "Haramain Road",
          "Corniche Road",
          "Madinah Road",
          "Old Makkah Road",
          "Prince Sultan Road",
        ],
        faqTitle: "Questions about towing in Jeddah",
        faq: enFaq("Jeddah", JEDDAH_PRICE_EN),
      },
    },
  },
  {
    slug: "dammam",
    schemaName: "Dammam",
    content: {
      ar: {
        name: "الدمام",
        metaTitle: "سطحة الدمام ٢٤ ساعة — أقرب سطحة لك في المنطقة الشرقية",
        description:
          "اطلب سطحة في الدمام ٢٤ ساعة عبر واير. طلب واحد يوصل لكل الكباتن القريبين منك في الفيصلية والشاطئ والريان وبقية أحياء الدمام.",
        answer:
          "لطلب سطحة في الدمام، افتح تطبيق واير وحدد موقعك على الخريطة ووصّف حالتك. طلبك يوصل لكل كباتن السطحات الموثقين القريبين منك في الدمام، تقارن عروضهم وأسعارهم وتختار الأنسب وتتابعه على الخريطة. الخدمة متاحة ٢٤ ساعة في جميع أحياء الدمام.",
        areasTitle: "نغطي أحياء الدمام",
        areas: [
          "الفيصلية",
          "الشاطئ",
          "الجلوية",
          "الريان",
          "بدر",
          "النور",
          "العدامة",
          "الأثير",
          "الزهور",
        ],
        roadsTitle: "والطرق الرئيسية",
        roads: [
          "طريق الملك فهد",
          "طريق الظهران الجبيل",
          "طريق الملك سعود",
          "طريق الأمير محمد بن فهد",
          "طريق الرياض السريع",
        ],
        faqTitle: "أسئلة عن السطحة في الدمام",
        faq: arFaq("الدمام"),
      },
      en: {
        name: "Dammam",
        metaTitle: "Tow truck in Dammam, 24/7 — nearest driver in the Eastern Province",
        description:
          "Request a tow truck in Dammam 24/7 with Wire. One request reaches every nearby driver across Al Faisaliyah, Al Shati, Al Rayyan and the rest of Dammam.",
        answer:
          "To get a tow truck in Dammam, open the Wire app, set your location on the map, and describe the problem. Your request reaches every verified driver near you in Dammam; you compare their quotes, pick the best, and track them on the map. Available 24/7 across all Dammam districts.",
        areasTitle: "Districts we cover in Dammam",
        areas: [
          "Al Faisaliyah",
          "Al Shati",
          "Al Jalawiyah",
          "Al Rayyan",
          "Badr",
          "Al Noor",
          "Al Adamah",
          "Al Atheer",
          "Al Zuhour",
        ],
        roadsTitle: "And the main roads",
        roads: [
          "King Fahd Road",
          "Dhahran–Jubail Highway",
          "King Saud Road",
          "Prince Mohammed bin Fahd Road",
          "Riyadh Expressway",
        ],
        faqTitle: "Questions about towing in Dammam",
        faq: enFaq("Dammam"),
      },
    },
  },
  {
    slug: "khobar",
    schemaName: "Khobar",
    content: {
      ar: {
        name: "الخبر",
        metaTitle: "سطحة الخبر ٢٤ ساعة — اطلب أقرب سطحة وقارن العروض",
        description:
          "اطلب سطحة في الخبر ٢٤ ساعة عبر واير. طلبك يوصل لكل الكباتن القريبين منك في العقربية والثقبة والراكة وبقية أحياء الخبر.",
        answer:
          "لطلب سطحة في الخبر، افتح تطبيق واير وحدد موقعك على الخريطة ووصّف حالتك. الطلب يوصل لكل كباتن السطحات القريبين منك في الخبر دفعة وحدة، تجيك عروضهم وتختار الأنسب وتتابع الكابتن على الخريطة. الخدمة متاحة ٢٤ ساعة في جميع أحياء الخبر والظهران.",
        areasTitle: "نغطي أحياء الخبر",
        areas: [
          "العقربية",
          "الثقبة",
          "الراكة",
          "الكورنيش",
          "الحزام الذهبي",
          "الخبر الشمالية",
          "الجسر",
          "اليرموك",
        ],
        roadsTitle: "والطرق الرئيسية",
        roads: [
          "طريق الملك فهد",
          "جسر الملك فهد",
          "طريق الكورنيش",
          "طريق الأمير فيصل بن فهد",
          "طريق الظهران",
        ],
        faqTitle: "أسئلة عن السطحة في الخبر",
        faq: arFaq("الخبر"),
      },
      en: {
        name: "Khobar",
        metaTitle: "Tow truck in Khobar, 24/7 — nearest driver, compare offers",
        description:
          "Request a tow truck in Khobar 24/7 with Wire. Your request reaches every nearby driver across Al Aqrabiyah, Thuqbah, Al Rakah and the rest of Khobar.",
        answer:
          "To get a tow truck in Khobar, open the Wire app, set your location on the map, and describe the problem. The request reaches every nearby tow truck driver in Khobar at once; their offers come back, you choose one, and you track them on the map. Available 24/7 across Khobar and Dhahran.",
        areasTitle: "Districts we cover in Khobar",
        areas: [
          "Al Aqrabiyah",
          "Thuqbah",
          "Al Rakah",
          "Corniche",
          "Golden Belt",
          "North Khobar",
          "Al Jisr",
          "Al Yarmouk",
        ],
        roadsTitle: "And the main roads",
        roads: [
          "King Fahd Road",
          "King Fahd Causeway",
          "Corniche Road",
          "Prince Faisal bin Fahd Road",
          "Dhahran Road",
        ],
        faqTitle: "Questions about towing in Khobar",
        faq: enFaq("Khobar"),
      },
    },
  },
  {
    slug: "ahsa",
    schemaName: "Al-Ahsa",
    content: {
      ar: {
        name: "الأحساء",
        metaTitle: "سطحة الأحساء ٢٤ ساعة — أقرب سطحة في الهفوف والمبرز",
        description:
          "اطلب سطحة في الأحساء ٢٤ ساعة عبر واير. طلب واحد يوصل لكل الكباتن القريبين منك في الهفوف والمبرز، تقارن عروضهم وتختار الأنسب وتتابع الكابتن على الخريطة.",
        answer:
          "لطلب سطحة في الأحساء، افتح تطبيق واير وحدد موقعك على الخريطة ووصّف حالتك. طلبك يوصل في نفس اللحظة لكل كباتن السطحات الموثقين القريبين منك في الهفوف والمبرز، تجيك عروضهم بأسعارها، تختار الأنسب وتتابع الكابتن على الخريطة لين يوصل. الخدمة متاحة ٢٤ ساعة في الهفوف والمبرز وما حولها.",
        areasTitle: "نغطي الهفوف والمبرز",
        areas: [
          "الهفوف",
          "المبرز",
          "الكوت",
          "الرفعة",
          "النعاثل",
          "المزروعية",
          "السلمانية",
          "الحفيرة",
          "السيفة",
          "اليرموك",
          "الحزم",
          "محاسن",
        ],
        roadsTitle: "والطرق الرئيسية",
        roads: [
          "طريق الظهران – الأحساء",
          "طريق الرياض – الأحساء",
          "طريق العقير",
          "طريق سلوى",
        ],
        faqTitle: "أسئلة عن السطحة في الأحساء",
        faq: arFaq("الأحساء"),
      },
      en: {
        name: "Al-Ahsa",
        metaTitle: "Tow truck in Al-Ahsa, 24/7 — nearest driver in Hofuf & Mubarraz",
        description:
          "Request a tow truck in Al-Ahsa 24/7 with Wire. One request reaches every nearby driver in Hofuf and Mubarraz — compare offers, pick one and track it live.",
        answer:
          "To get a tow truck in Al-Ahsa, open the Wire app, set your location on the map, and describe the problem. Your request reaches every verified tow truck driver near you in Hofuf and Mubarraz at the same moment; their quotes come back, you pick one and track them on the map until they arrive. Available 24/7 in Hofuf, Mubarraz and the surrounding area.",
        areasTitle: "Areas we cover in Al-Ahsa",
        areas: [
          "Hofuf",
          "Mubarraz",
          "Al Kut",
          "Al Rifa'a",
          "Al Na'athil",
          "Al Mazrou'iya",
          "Al Salmaniyah",
          "Al Hufayrah",
          "Al Sayfah",
          "Al Yarmouk",
          "Al Hazm",
          "Mahasin",
        ],
        roadsTitle: "And the main roads",
        roads: [
          "Dhahran–Al-Ahsa Highway",
          "Riyadh–Al-Ahsa Highway",
          "Al Uqair Road",
          "Salwa Road",
        ],
        faqTitle: "Questions about towing in Al-Ahsa",
        faq: enFaq("Al-Ahsa"),
      },
    },
  },
];

export const cityBySlug = (slug: string): City | undefined =>
  cities.find((c) => c.slug === slug);

export const CITY_SLUGS = cities.map((c) => c.slug);

/** Index-page copy. */
export const citiesIndex: Record<
  Locale,
  { title: string; metaTitle: string; description: string; intro: string; label: string }
> = {
  ar: {
    title: "سطحة في مدينتك",
    metaTitle: "سطحة ٢٤ ساعة — الرياض وجدة والدمام والخبر والأحساء",
    description:
      "واير تخدم الرياض وجدة والدمام والخبر والظهران والأحساء (الهفوف والمبرز). اختر مدينتك وشوف كيف تطلب أقرب سطحة وتقارن العروض.",
    intro:
      "اختر مدينتك تشوف الأحياء والطرق اللي نغطيها، وكيف يوصل طلبك لكل الكباتن القريبين منك خلال دقائق.",
    label: "المدن",
  },
  en: {
    title: "Towing in your city",
    metaTitle: "24/7 towing — Riyadh, Jeddah, Dammam, Khobar and Al-Ahsa",
    description:
      "Wire serves Riyadh, Jeddah, Dammam, Khobar, Dhahran and Al-Ahsa (Hofuf and Mubarraz). Pick your city to see how to reach the nearest tow truck and compare quotes.",
    intro:
      "Pick your city to see the districts and roads we cover, and how your request reaches every nearby driver within minutes.",
    label: "Cities",
  },
};
