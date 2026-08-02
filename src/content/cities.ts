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
 * <title>. Derived rather than hand-written so all nine cities stay identical
 * in shape — an answer engine comparing them sees one consistent template.
 */
export const cityHeading = (locale: Locale, name: string): string =>
  locale === "ar"
    ? `سطحة ${name} — كيف تطلب أقرب سطحة؟`
    : `Tow truck in ${name} — how do I get the nearest one?`;

const arFaq = (city: string): FaqItem[] => [
  {
    q: `كيف أطلب سطحة في ${city}؟`,
    a: `افتح تطبيق واير، حدد موقعك في ${city} على الخريطة أو خل الـ GPS يحدده، ووصّف حالتك. الطلب يوصل فورًا لكل كباتن السطحات القريبين منك، وتجيك عروضهم بأسعارها خلال دقائق فتختار الأنسب.`,
  },
  {
    q: `كم سعر السطحة في ${city}؟`,
    a: `ما في تسعيرة ثابتة. كل كابتن قريب منك في ${city} يرسل عرضه لرحلتك بالتحديد حسب المسافة وحالة السيارة، وأنت تقارن العروض وتختار. تشوف السعر قبل ما توافق فما في مساومة على الطريق.`,
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

const enFaq = (city: string): FaqItem[] => [
  {
    q: `How do I get a tow truck in ${city}?`,
    a: `Open the Wire app, set your location in ${city} on the map or let GPS place it, and describe the problem. The request reaches every nearby tow truck driver at once, and their quotes come back within minutes so you pick the best fit.`,
  },
  {
    q: `How much does a tow truck cost in ${city}?`,
    a: `There is no fixed rate. Each driver near you in ${city} quotes your specific trip based on distance and the car's condition, and you compare and choose. You see the price before accepting, so there is no roadside haggling.`,
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
          "حطين",
          "النخيل",
          "الروضة",
          "النسيم",
          "السويدي",
          "الشفا",
          "العزيزية",
          "قرطبة",
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
        faq: arFaq("الرياض"),
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
          "Hittin",
          "Al Nakheel",
          "Al Rawdah",
          "Al Naseem",
          "Al Suwaidi",
          "Al Shifa",
          "Al Aziziyah",
          "Qurtubah",
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
        faq: enFaq("Riyadh"),
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
        faq: arFaq("جدة"),
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
        faq: enFaq("Jeddah"),
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
          "لطلب سطحة في الخبر، افتح تطبيق واير وحدد موقعك على الخريطة ووصّف حالتك. الطلب يوصل لكل كباتن السطحات القريبين منك في الخبر دفعة وحدة، تجيك عروضهم وتختار الأنسب وتتابع الكابتن على الخريطة. الخدمة متاحة ٢٤ ساعة في جميع أحياء الخبر.",
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
          "To get a tow truck in Khobar, open the Wire app, set your location on the map, and describe the problem. The request reaches every nearby tow truck driver in Khobar at once; their offers come back, you choose one, and you track them on the map. Available 24/7 across all Khobar districts.",
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
    slug: "makkah",
    schemaName: "Makkah",
    content: {
      ar: {
        name: "مكة",
        metaTitle: "سطحة مكة ٢٤ ساعة — أقرب سطحة لك بأفضل عرض",
        description:
          "اطلب سطحة في مكة المكرمة ٢٤ ساعة عبر واير. طلبك يوصل لكل الكباتن القريبين منك في العزيزية والشوقية والعوالي وبقية أحياء مكة.",
        answer:
          "لطلب سطحة في مكة المكرمة، افتح تطبيق واير وحدد موقعك على الخريطة ووصّف حالتك. طلبك يوصل لكل كباتن السطحات القريبين منك في مكة، تقارن عروضهم وأسعارهم وتختار الأنسب وتتابعه على الخريطة لين يوصلك. الخدمة متاحة ٢٤ ساعة.",
        areasTitle: "نغطي أحياء مكة",
        areas: [
          "العزيزية",
          "الشوقية",
          "النسيم",
          "العوالي",
          "الششة",
          "أجياد",
          "الزاهر",
          "الكعكية",
        ],
        roadsTitle: "والطرق الرئيسية",
        roads: [
          "طريق الحرمين السريع",
          "طريق جدة القديم",
          "الدائري الثالث",
          "طريق الملك عبدالله",
          "طريق الطائف",
        ],
        faqTitle: "أسئلة عن السطحة في مكة",
        faq: arFaq("مكة"),
      },
      en: {
        name: "Makkah",
        metaTitle: "Tow truck in Makkah, 24/7 — nearest driver, best offer",
        description:
          "Request a tow truck in Makkah 24/7 with Wire. Your request reaches every nearby driver across Al Aziziyah, Al Shawqiyah, Al Awali and the rest of Makkah.",
        answer:
          "To get a tow truck in Makkah, open the Wire app, set your location on the map, and describe the problem. Your request reaches every nearby tow truck driver in Makkah; you compare their quotes, pick the best, and track them on the map until they arrive. Available 24/7.",
        areasTitle: "Districts we cover in Makkah",
        areas: [
          "Al Aziziyah",
          "Al Shawqiyah",
          "Al Naseem",
          "Al Awali",
          "Al Shishah",
          "Ajyad",
          "Al Zahir",
          "Al Kakiyah",
        ],
        roadsTitle: "And the main roads",
        roads: [
          "Haramain Expressway",
          "Old Jeddah Road",
          "Third Ring Road",
          "King Abdullah Road",
          "Taif Road",
        ],
        faqTitle: "Questions about towing in Makkah",
        faq: enFaq("Makkah"),
      },
    },
  },
  {
    slug: "madinah",
    schemaName: "Madinah",
    content: {
      ar: {
        name: "المدينة المنورة",
        metaTitle: "سطحة المدينة المنورة ٢٤ ساعة — اطلب أقرب سطحة",
        description:
          "اطلب سطحة في المدينة المنورة ٢٤ ساعة عبر واير. طلبك يوصل لكل الكباتن القريبين منك في قباء والعوالي والخالدية وبقية أحياء المدينة.",
        answer:
          "لطلب سطحة في المدينة المنورة، افتح تطبيق واير وحدد موقعك على الخريطة ووصّف حالتك. الطلب يوصل لكل كباتن السطحات القريبين منك في المدينة، تجيك عروضهم بأسعارها وتختار الأنسب وتتابع الكابتن على الخريطة. الخدمة متاحة ٢٤ ساعة.",
        areasTitle: "نغطي أحياء المدينة",
        areas: [
          "قباء",
          "العوالي",
          "الحرة الشرقية",
          "شظاة",
          "الخالدية",
          "سلطانة",
          "الدفاع",
          "بني حارثة",
        ],
        roadsTitle: "والطرق الرئيسية",
        roads: [
          "طريق الملك عبدالله",
          "طريق الهجرة",
          "الدائري الثاني",
          "طريق الملك فهد",
          "طريق تبوك",
        ],
        faqTitle: "أسئلة عن السطحة في المدينة",
        faq: arFaq("المدينة المنورة"),
      },
      en: {
        name: "Madinah",
        metaTitle: "Tow truck in Madinah, 24/7 — request the nearest driver",
        description:
          "Request a tow truck in Madinah 24/7 with Wire. Your request reaches every nearby driver across Quba, Al Awali, Al Khalidiyah and the rest of Madinah.",
        answer:
          "To get a tow truck in Madinah, open the Wire app, set your location on the map, and describe the problem. The request reaches every nearby tow truck driver in Madinah, their quotes arrive, and you pick one and track them on the map. Available 24/7.",
        areasTitle: "Districts we cover in Madinah",
        areas: [
          "Quba",
          "Al Awali",
          "Eastern Harrah",
          "Shuzah",
          "Al Khalidiyah",
          "Sultanah",
          "Al Difa",
          "Bani Harithah",
        ],
        roadsTitle: "And the main roads",
        roads: [
          "King Abdullah Road",
          "Al Hijrah Road",
          "Second Ring Road",
          "King Fahd Road",
          "Tabuk Road",
        ],
        faqTitle: "Questions about towing in Madinah",
        faq: enFaq("Madinah"),
      },
    },
  },
  {
    slug: "taif",
    schemaName: "Taif",
    content: {
      ar: {
        name: "الطائف",
        metaTitle: "سطحة الطائف ٢٤ ساعة — أقرب سطحة لك في الطائف والهدا",
        description:
          "اطلب سطحة في الطائف ٢٤ ساعة عبر واير، من داخل المدينة إلى طريق الهدا وطريق السيل. قارن عروض الكباتن القريبين واختر الأنسب.",
        answer:
          "لطلب سطحة في الطائف، افتح تطبيق واير وحدد موقعك على الخريطة ووصّف حالتك. طلبك يوصل لكل كباتن السطحات القريبين منك في الطائف وطرقه الجبلية، تجيك عروضهم وتختار الأنسب وتتابعه على الخريطة. الخدمة متاحة ٢٤ ساعة.",
        areasTitle: "نغطي أحياء الطائف",
        areas: ["الشفا", "الهدا", "الفيصلية", "شهار", "المثناة", "الوشحاء", "السلامة"],
        roadsTitle: "والطرق الرئيسية",
        roads: [
          "طريق الهدا",
          "طريق السيل الكبير",
          "طريق الرياض",
          "طريق مكة الطائف",
          "طريق الملك فيصل",
        ],
        faqTitle: "أسئلة عن السطحة في الطائف",
        faq: arFaq("الطائف"),
      },
      en: {
        name: "Taif",
        metaTitle: "Tow truck in Taif, 24/7 — nearest driver in Taif and Al Hada",
        description:
          "Request a tow truck in Taif 24/7 with Wire, from inside the city to the Al Hada and Al Sail mountain roads. Compare nearby drivers' quotes and choose.",
        answer:
          "To get a tow truck in Taif, open the Wire app, set your location on the map, and describe the problem. Your request reaches every nearby tow truck driver in Taif and on its mountain roads; you compare offers, choose one, and track them on the map. Available 24/7.",
        areasTitle: "Districts we cover in Taif",
        areas: ["Al Shafa", "Al Hada", "Al Faisaliyah", "Shihar", "Al Mathnah", "Al Wishha", "Al Salamah"],
        roadsTitle: "And the main roads",
        roads: [
          "Al Hada Road",
          "Al Sail Al Kabir Road",
          "Riyadh Road",
          "Makkah–Taif Road",
          "King Faisal Road",
        ],
        faqTitle: "Questions about towing in Taif",
        faq: enFaq("Taif"),
      },
    },
  },
  {
    slug: "abha",
    schemaName: "Abha",
    content: {
      ar: {
        name: "أبها",
        metaTitle: "سطحة أبها ٢٤ ساعة — أقرب سطحة في أبها وخميس مشيط",
        description:
          "اطلب سطحة في أبها ٢٤ ساعة عبر واير، داخل المدينة وعلى الطرق الجبلية. قارن عروض الكباتن القريبين وتابع رحلتك على الخريطة.",
        answer:
          "لطلب سطحة في أبها، افتح تطبيق واير وحدد موقعك على الخريطة ووصّف حالتك. طلبك يوصل لكل كباتن السطحات القريبين منك في أبها ومحيطها، تجيك عروضهم بأسعارها وتختار الأنسب وتتابعه على الخريطة. الخدمة متاحة ٢٤ ساعة.",
        areasTitle: "نغطي أحياء أبها",
        areas: ["المنسك", "الموظفين", "الخالدية", "السد", "الشعف", "النسيم", "البديع"],
        roadsTitle: "والطرق الرئيسية",
        roads: [
          "طريق الملك فهد",
          "طريق أبها خميس مشيط",
          "عقبة ضلع",
          "طريق السودة",
          "طريق الملك عبدالعزيز",
        ],
        faqTitle: "أسئلة عن السطحة في أبها",
        faq: arFaq("أبها"),
      },
      en: {
        name: "Abha",
        metaTitle: "Tow truck in Abha, 24/7 — nearest driver in Abha and Khamis Mushait",
        description:
          "Request a tow truck in Abha 24/7 with Wire, inside the city and on the mountain roads. Compare nearby drivers' quotes and track your tow on the map.",
        answer:
          "To get a tow truck in Abha, open the Wire app, set your location on the map, and describe the problem. Your request reaches every nearby tow truck driver in Abha and its surroundings; their quotes arrive, you choose one, and you track them on the map. Available 24/7.",
        areasTitle: "Districts we cover in Abha",
        areas: ["Al Mansak", "Al Muwazafin", "Al Khalidiyah", "Al Sadd", "Al Shaaf", "Al Naseem", "Al Badie"],
        roadsTitle: "And the main roads",
        roads: [
          "King Fahd Road",
          "Abha–Khamis Mushait Road",
          "Dhala Escarpment",
          "Al Soudah Road",
          "King Abdulaziz Road",
        ],
        faqTitle: "Questions about towing in Abha",
        faq: enFaq("Abha"),
      },
    },
  },
  {
    slug: "buraidah",
    schemaName: "Buraidah",
    content: {
      ar: {
        name: "بريدة",
        metaTitle: "سطحة بريدة ٢٤ ساعة — أقرب سطحة لك في القصيم",
        description:
          "اطلب سطحة في بريدة ٢٤ ساعة عبر واير. طلبك يوصل لكل الكباتن القريبين منك في الصفراء والفايزية والريان وبقية أحياء بريدة.",
        answer:
          "لطلب سطحة في بريدة، افتح تطبيق واير وحدد موقعك على الخريطة ووصّف حالتك. الطلب يوصل لكل كباتن السطحات القريبين منك في بريدة والقصيم، تقارن عروضهم وتختار الأنسب وتتابع الكابتن على الخريطة. الخدمة متاحة ٢٤ ساعة.",
        areasTitle: "نغطي أحياء بريدة",
        areas: ["الصفراء", "الفايزية", "الإسكان", "الريان", "النهضة", "الخليج", "الرابية"],
        roadsTitle: "والطرق الرئيسية",
        roads: [
          "طريق الملك عبدالعزيز",
          "طريق الرياض القصيم",
          "طريق عنيزة",
          "طريق الملك فهد",
          "الدائري الشرقي",
        ],
        faqTitle: "أسئلة عن السطحة في بريدة",
        faq: arFaq("بريدة"),
      },
      en: {
        name: "Buraidah",
        metaTitle: "Tow truck in Buraidah, 24/7 — nearest driver in Qassim",
        description:
          "Request a tow truck in Buraidah 24/7 with Wire. Your request reaches every nearby driver across Al Safra, Al Fayziyah, Al Rayyan and the rest of Buraidah.",
        answer:
          "To get a tow truck in Buraidah, open the Wire app, set your location on the map, and describe the problem. The request reaches every nearby tow truck driver in Buraidah and Qassim; you compare offers, choose one, and track the driver on the map. Available 24/7.",
        areasTitle: "Districts we cover in Buraidah",
        areas: ["Al Safra", "Al Fayziyah", "Al Iskan", "Al Rayyan", "Al Nahdah", "Al Khaleej", "Al Rabiyah"],
        roadsTitle: "And the main roads",
        roads: [
          "King Abdulaziz Road",
          "Riyadh–Qassim Highway",
          "Unaizah Road",
          "King Fahd Road",
          "Eastern Ring Road",
        ],
        faqTitle: "Questions about towing in Buraidah",
        faq: enFaq("Buraidah"),
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
    metaTitle: "سطحة ٢٤ ساعة في مدن السعودية — الرياض وجدة والدمام وغيرها",
    description:
      "واير تغطي الرياض وجدة والدمام والخبر ومكة والمدينة والطائف وأبها وبريدة. اختر مدينتك وشوف كيف تطلب أقرب سطحة وتقارن العروض.",
    intro:
      "اختر مدينتك تشوف الأحياء والطرق اللي نغطيها، وكيف يوصل طلبك لكل الكباتن القريبين منك خلال دقائق.",
    label: "المدن",
  },
  en: {
    title: "Towing in your city",
    metaTitle: "24/7 towing across Saudi cities — Riyadh, Jeddah, Dammam and more",
    description:
      "Wire covers Riyadh, Jeddah, Dammam, Khobar, Makkah, Madinah, Taif, Abha and Buraidah. Pick your city to see how to reach the nearest tow truck and compare quotes.",
    intro:
      "Pick your city to see the districts and roads we cover, and how your request reaches every nearby driver within minutes.",
    label: "Cities",
  },
};
