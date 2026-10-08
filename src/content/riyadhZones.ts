import type { FaqItem } from "@/i18n/faq";
import type { Locale } from "@/lib/seo";

/**
 * Riyadh zone pages — /cities/riyadh/{north,east,south,west}.
 *
 * "سطحة شمال الرياض" and its siblings are searched as their own queries, and
 * page one for them is thin keyword sites (one was a hacked gambling page in
 * Oct 2026). Riyadh is ~85% of our trips, so each zone gets a real page.
 *
 * To stay clear of Google's doorway/scaled-content rules every page carries
 * its own districts, roads, destinations and numbers rather than a swapped
 * name. Zone numbers come from our requests (pickup bearing from the city
 * centre, test accounts excluded, Apr–Oct 2026); prices fall back to the
 * Riyadh-wide distance medians (content/prices.ts) where a zone has too few
 * completed trips to quote on its own.
 */

export const RIYADH_ZONE_SLUGS = ["north", "east", "south", "west"] as const;
export type RiyadhZoneSlug = (typeof RIYADH_ZONE_SLUGS)[number];

export type ZoneContent = {
  name: string;
  metaTitle: string;
  description: string;
  /** Self-contained 40–60 word answer naming the zone, Wire and a number. */
  answer: string;
  statsTitle: string;
  stats: { value: string; label: string }[];
  areasTitle: string;
  areas: string[];
  roadsTitle: string;
  roads: string[];
  destinationsTitle: string;
  destinations: { name: string; text: string }[];
  faqTitle: string;
  faq: FaqItem[];
};

export type RiyadhZone = {
  slug: RiyadhZoneSlug;
  /** Latin label for the OG card (Arabic breaks Satori's bidi). */
  ogLabel: string;
  content: Record<Locale, ZoneContent>;
};

export const zoneHeading = (locale: Locale, name: string): string =>
  locale === "ar"
    ? `سطحة ${name} — كيف تطلب أقرب سطحة؟`
    : `Tow truck in ${name} — how do I get the nearest one?`;

export const riyadhZones: RiyadhZone[] = [
  {
    slug: "north",
    ogLabel: "NORTH RIYADH",
    content: {
      ar: {
        name: "شمال الرياض",
        metaTitle: "سطحة شمال الرياض ٢٤ ساعة — النرجس والملقا والياسمين والعارض",
        description:
          "تبي سطحة في شمال الرياض؟ طلب واحد من واير يوصل لكل الكباتن القريبين في النرجس والملقا والياسمين والعارض والقيروان، تجيك ٨ عروض في المتوسط وتختار الأنسب.",
        answer:
          "لطلب سطحة في شمال الرياض: افتح واير وحدد موقعك ووصّف حالتك، وطلبك يوصل لكل الكباتن الموثقين القريبين في النرجس والملقا والياسمين والعارض وما حولها. شمال الرياض أكثر منطقة نستقبل منها طلبات — ٣٠٠ طلب — ويجي لكل طلب ٨ عروض في المتوسط، والسعر الوسيط للرحلات المنفذة ١٤٠ ريال.",
        statsTitle: "شمال الرياض بالأرقام",
        stats: [
          { value: "٣٠٠", label: "طلب سطحة من شمال الرياض" },
          { value: "٨", label: "عروض في المتوسط لكل طلب" },
          { value: "١٤ ث", label: "وسيط وقت أول عرض" },
          { value: "١٤٠ ريال", label: "السعر الوسيط للرحلات المنفذة" },
        ],
        areasTitle: "أحياء شمال الرياض اللي نغطيها",
        areas: [
          "النرجس",
          "الملقا",
          "الياسمين",
          "العارض",
          "القيروان",
          "حطين",
          "الصحافة",
          "العقيق",
          "الوادي",
          "الربيع",
          "النفل",
          "الغدير",
          "التعاون",
          "المصيف",
          "المروج",
          "الندى",
          "الفلاح",
          "الازدهار",
        ],
        roadsTitle: "والطرق الرئيسية",
        roads: [
          "طريق الملك فهد",
          "طريق الملك سلمان",
          "طريق أبو بكر الصديق",
          "طريق الملك عبدالعزيز",
          "طريق أنس بن مالك",
          "طريق عثمان بن عفان",
          "طريق الإمام سعود بن فيصل",
          "الدائري الشمالي",
        ],
        destinationsTitle: "وين تروح سطحات شمال الرياض غالبًا؟",
        destinations: [
          {
            name: "الصناعية وورش الجنوب",
            text: "أكثر وجهة لعملاء الشمال. المشوار غالبًا ٢٠ كم وأكثر بخط مستقيم، ووسيط هالمسافة داخل الرياض ١٥٠ ريال.",
          },
          {
            name: "الوكالات ومراكز الصيانة على طريق الملك فهد",
            text: "مشاوير أقصر من ١٠ إلى ٢٠ كم، ووسيطها داخل الرياض ١٢٠ ريال.",
          },
          {
            name: "داخل الشمال نفسه",
            text: "من حي لحي قريب (أقل من ١٠ كم) — الوسيط ١٢٠ ريال، وأغلبها بين ١٠٠ و١٤٠.",
          },
        ],
        faqTitle: "أسئلة عن السطحة في شمال الرياض",
        faq: [
          {
            q: "كم سعر السطحة في شمال الرياض؟",
            a: "الرحلات المنفذة عبر واير من شمال الرياض سعرها الوسيط ١٤٠ ريال، وأغلبها بين ١١٠ و١٦٠ ريال حسب المسافة ونوع السطحة. تشوف عروض الكباتن بأسعارها قبل ما توافق، فما في مساومة على الطريق.",
          },
          {
            q: "كم سعر سطحة من شمال الرياض للصناعية؟",
            a: "من شمال الرياض للصناعية مشوار طويل داخل المدينة (غالبًا ٢٠ كم وأكثر بخط مستقيم)، ووسيط هالمسافة في رحلات واير ١٥٠ ريال وأغلبها بين ١٥٠ و١٧٥. اطلب وقارن العروض لرحلتك بالتحديد.",
          },
          {
            q: "هل في سطحة ٢٤ ساعة في النرجس والملقا والياسمين؟",
            a: "نعم. واير تشتغل ٢٤ ساعة طوال الأسبوع، وطلبك يوصل لكل الكباتن القريبين منك في النرجس والملقا والياسمين وبقية أحياء الشمال، مع وقت الوصول المتوقع لكل عرض.",
          },
        ],
      },
      en: {
        name: "North Riyadh",
        metaTitle: "Tow truck in North Riyadh, 24/7 — Narjis, Malqa, Yasmin, Arid",
        description:
          "Need a tow truck in North Riyadh? One Wire request reaches every nearby driver in Al Narjis, Al Malqa, Al Yasmin, Al Arid and Al Qirawan — 8 offers on average, you pick.",
        answer:
          "To get a tow truck in North Riyadh, open Wire, set your location and describe the problem; your request reaches every verified driver near you in Al Narjis, Al Malqa, Al Yasmin, Al Arid and around. North Riyadh is where most of our requests come from — 300 so far — with 8 offers per request on average and a 140 SAR median on completed tows.",
        statsTitle: "North Riyadh in numbers",
        stats: [
          { value: "300", label: "Tow requests from North Riyadh" },
          { value: "8", label: "Offers per request on average" },
          { value: "14 s", label: "Median time to first offer" },
          { value: "140 SAR", label: "Median price on completed tows" },
        ],
        areasTitle: "North Riyadh districts we cover",
        areas: [
          "Al Narjis",
          "Al Malqa",
          "Al Yasmin",
          "Al Arid",
          "Al Qirawan",
          "Hittin",
          "Al Sahafah",
          "Al Aqiq",
          "Al Wadi",
          "Al Rabi",
          "Al Nafal",
          "Al Ghadir",
          "Al Taawun",
          "Al Masif",
          "Al Muruj",
          "Al Nada",
          "Al Falah",
          "Al Izdihar",
        ],
        roadsTitle: "And the main roads",
        roads: [
          "King Fahd Road",
          "King Salman Road",
          "Abu Bakr Al Siddiq Road",
          "King Abdulaziz Road",
          "Anas Bin Malik Road",
          "Othman Bin Affan Road",
          "Imam Saud Bin Faisal Road",
          "Northern Ring Road",
        ],
        destinationsTitle: "Where North Riyadh tows usually go",
        destinations: [
          {
            name: "Al Sinaiyah and the southern workshops",
            text: "The most common destination for northern customers. Usually 20 km or more in a straight line; that distance has a 150 SAR median inside Riyadh.",
          },
          {
            name: "Dealers and service centres on King Fahd Road",
            text: "Shorter trips of 10–20 km, with a 120 SAR median inside Riyadh.",
          },
          {
            name: "Within the north",
            text: "District to nearby district (under 10 km) — median 120 SAR, mostly 100–140.",
          },
        ],
        faqTitle: "Questions about towing in North Riyadh",
        faq: [
          {
            q: "How much is a tow truck in North Riyadh?",
            a: "Tows completed on Wire from North Riyadh have a median of 140 SAR, mostly 110–160 SAR depending on distance and truck type. You see each driver's price before accepting, so there is no roadside haggling.",
          },
          {
            q: "How much is a tow from North Riyadh to Al Sinaiyah?",
            a: "North Riyadh to Al Sinaiyah is a long in-city trip (usually 20 km or more in a straight line); that distance has a 150 SAR median on Wire, mostly 150–175 SAR. Request and compare offers for your exact trip.",
          },
          {
            q: "Is there 24-hour towing in Al Narjis, Al Malqa and Al Yasmin?",
            a: "Yes. Wire runs 24/7, and your request reaches every driver near you in Al Narjis, Al Malqa, Al Yasmin and the rest of the north, each offer showing an estimated arrival time.",
          },
        ],
      },
    },
  },
  {
    slug: "east",
    ogLabel: "EAST RIYADH",
    content: {
      ar: {
        name: "شرق الرياض",
        metaTitle: "سطحة شرق الرياض ٢٤ ساعة — النسيم والروضة والخليج والرمال",
        description:
          "تبي سطحة في شرق الرياض؟ طلب واحد من واير يوصل لكل الكباتن القريبين في النسيم والروضة والخليج والرمال والجنادرية، تقارن عروضهم وتختار الأنسب.",
        answer:
          "لطلب سطحة في شرق الرياض: افتح واير وحدد موقعك ووصّف حالتك، وطلبك يوصل لكل الكباتن الموثقين القريبين في النسيم والروضة والخليج والرمال والجنادرية. استقبلنا ٢٣٤ طلب من شرق الرياض، يجي لكل طلب ٧ عروض في المتوسط، والسعر الوسيط للرحلات المنفذة ١٤٥ ريال.",
        statsTitle: "شرق الرياض بالأرقام",
        stats: [
          { value: "٢٣٤", label: "طلب سطحة من شرق الرياض" },
          { value: "٧", label: "عروض في المتوسط لكل طلب" },
          { value: "١٤ ث", label: "وسيط وقت أول عرض" },
          { value: "١٤٥ ريال", label: "السعر الوسيط للرحلات المنفذة" },
        ],
        areasTitle: "أحياء شرق الرياض اللي نغطيها",
        areas: [
          "النسيم",
          "الروضة",
          "الخليج",
          "الرمال",
          "الجنادرية",
          "اليرموك",
          "قرطبة",
          "غرناطة",
          "الريان",
          "السلي",
          "الروابي",
          "المونسية",
          "النهضة",
          "القدس",
          "الحمراء",
          "الأندلس",
          "القادسية",
          "البيان",
        ],
        roadsTitle: "والطرق الرئيسية",
        roads: [
          "الدائري الشرقي",
          "طريق خريص",
          "طريق الدمام",
          "طريق الملك عبدالله",
          "طريق الشيخ جابر الأحمد الصباح",
          "طريق الإمام عبدالله بن سعود",
        ],
        destinationsTitle: "وين تروح سطحات شرق الرياض غالبًا؟",
        destinations: [
          {
            name: "الصناعية",
            text: "أكثر وجهة لعملاء الشرق بفارق كبير. حسب حيّك تكون المسافة من ١٠ إلى ٤٠ كم، والوسيط داخل الرياض بين ١٢٠ و١٥٠ ريال.",
          },
          {
            name: "صناعية السلي والمدينة الصناعية الثانية",
            text: "ورش كثيرة قريبة من أحياء الشرق — مشاوير قصيرة غالبًا ووسيط أقل من ١٠ كم داخل الرياض ١٢٠ ريال.",
          },
          {
            name: "شمال الرياض (الملقا والقيروان)",
            text: "لمراكز الصيانة والوكالات في الشمال — مشوار طويل داخل المدينة، ووسيطه ١٥٠ ريال.",
          },
        ],
        faqTitle: "أسئلة عن السطحة في شرق الرياض",
        faq: [
          {
            q: "كم سعر السطحة في شرق الرياض؟",
            a: "الرحلات المنفذة عبر واير من شرق الرياض سعرها الوسيط ١٤٥ ريال، وأغلبها بين ١٠٠ و١٥٠ ريال. السعر يتحدد بعرض الكابتن اللي تختاره، وتشوفه قبل ما توافق.",
          },
          {
            q: "كم سعر سطحة من النسيم أو الروضة للصناعية؟",
            a: "من أحياء الشرق للصناعية مشوار متوسط إلى طويل داخل المدينة. وسيط المشاوير من ١٠ إلى ٢٠ كم في رحلات واير ١٢٠ ريال، ومن ٢٠ إلى ٤٠ كم ١٥٠ ريال. اطلب وتجيك العروض بأسعارها.",
          },
          {
            q: "هل في سطحة قريبة مني في الخليج أو الرمال أو الجنادرية؟",
            a: "نعم. طلبك يوصل لكل الكباتن القريبين منك في الخليج والرمال والجنادرية وبقية أحياء الشرق في نفس اللحظة، وكل عرض يوضح وقت الوصول المتوقع فتختار الأقرب.",
          },
        ],
      },
      en: {
        name: "East Riyadh",
        metaTitle: "Tow truck in East Riyadh, 24/7 — Naseem, Rawdah, Khaleej, Rimal",
        description:
          "Need a tow truck in East Riyadh? One Wire request reaches every nearby driver in Al Naseem, Al Rawdah, Al Khaleej, Al Rimal and Al Janadriyah — compare offers and choose.",
        answer:
          "To get a tow truck in East Riyadh, open Wire, set your location and describe the problem; your request reaches every verified driver near you in Al Naseem, Al Rawdah, Al Khaleej, Al Rimal and Al Janadriyah. We've had 234 requests from East Riyadh, with 7 offers per request on average and a 145 SAR median on completed tows.",
        statsTitle: "East Riyadh in numbers",
        stats: [
          { value: "234", label: "Tow requests from East Riyadh" },
          { value: "7", label: "Offers per request on average" },
          { value: "14 s", label: "Median time to first offer" },
          { value: "145 SAR", label: "Median price on completed tows" },
        ],
        areasTitle: "East Riyadh districts we cover",
        areas: [
          "Al Naseem",
          "Al Rawdah",
          "Al Khaleej",
          "Al Rimal",
          "Al Janadriyah",
          "Al Yarmouk",
          "Qurtubah",
          "Ghirnatah",
          "Al Rayyan",
          "Al Sulay",
          "Al Rawabi",
          "Al Munsiyah",
          "Al Nahdah",
          "Al Quds",
          "Al Hamra",
          "Al Andalus",
          "Al Qadisiyah",
          "Al Bayan",
        ],
        roadsTitle: "And the main roads",
        roads: [
          "Eastern Ring Road",
          "Khurais Road",
          "Dammam Road",
          "King Abdullah Road",
          "Sheikh Jaber Al Ahmad Al Sabah Road",
          "Imam Abdullah Bin Saud Road",
        ],
        destinationsTitle: "Where East Riyadh tows usually go",
        destinations: [
          {
            name: "Al Sinaiyah",
            text: "By far the most common destination for eastern customers. 10–40 km depending on your district; the in-city median is 120–150 SAR.",
          },
          {
            name: "Al Sulay industrial area and the Second Industrial City",
            text: "Many workshops close to the eastern districts — usually short trips; under 10 km the Riyadh median is 120 SAR.",
          },
          {
            name: "North Riyadh (Al Malqa, Al Qirawan)",
            text: "For dealers and service centres in the north — a long in-city trip with a 150 SAR median.",
          },
        ],
        faqTitle: "Questions about towing in East Riyadh",
        faq: [
          {
            q: "How much is a tow truck in East Riyadh?",
            a: "Tows completed on Wire from East Riyadh have a median of 145 SAR, mostly 100–150 SAR. The price is set by the driver offer you choose, and you see it before accepting.",
          },
          {
            q: "How much is a tow from Al Naseem or Al Rawdah to Al Sinaiyah?",
            a: "From the eastern districts to Al Sinaiyah is a medium-to-long in-city trip. On Wire, 10–20 km tows have a 120 SAR median and 20–40 km tows 150 SAR. Request and the offers arrive with prices.",
          },
          {
            q: "Is there a tow truck near me in Al Khaleej, Al Rimal or Al Janadriyah?",
            a: "Yes. Your request reaches every nearby driver in Al Khaleej, Al Rimal, Al Janadriyah and the rest of the east at the same moment, and each offer shows an estimated arrival so you can pick the closest.",
          },
        ],
      },
    },
  },
  {
    slug: "south",
    ogLabel: "SOUTH RIYADH",
    content: {
      ar: {
        name: "جنوب الرياض",
        metaTitle: "سطحة جنوب الرياض ٢٤ ساعة — الشفا والعزيزية والدار البيضاء",
        description:
          "تبي سطحة في جنوب الرياض؟ طلب واحد من واير يوصل لكل الكباتن القريبين في الشفا والعزيزية والدار البيضاء والمصانع والحائر، تقارن عروضهم وتختار الأنسب.",
        answer:
          "لطلب سطحة في جنوب الرياض: افتح واير وحدد موقعك ووصّف حالتك، وطلبك يوصل لكل الكباتن الموثقين القريبين في الشفا والعزيزية والدار البيضاء والمصانع والحائر. استقبلنا ١٧٦ طلب من جنوب الرياض، يجي لكل طلب ٦ عروض في المتوسط وأول عرض خلال حوالي ١٥ ثانية.",
        statsTitle: "جنوب الرياض بالأرقام",
        stats: [
          { value: "١٧٦", label: "طلب سطحة من جنوب الرياض" },
          { value: "٦", label: "عروض في المتوسط لكل طلب" },
          { value: "١٥ ث", label: "وسيط وقت أول عرض" },
          { value: "١٤٠ ريال", label: "السعر الوسيط داخل الرياض" },
        ],
        areasTitle: "أحياء جنوب الرياض اللي نغطيها",
        areas: [
          "الشفا",
          "العزيزية",
          "الدار البيضاء",
          "المنصورة",
          "الشميسي",
          "الدريهمية",
          "المصانع",
          "بدر",
          "عكاظ",
          "الحائر",
          "المروة",
          "الغنامية",
          "المناخ",
          "اليمامة",
          "طيبة",
        ],
        roadsTitle: "والطرق الرئيسية",
        roads: [
          "طريق الخرج",
          "طريق الحائر",
          "الدائري الجنوبي",
          "طريق ديراب",
          "طريق مكة المكرمة",
        ],
        destinationsTitle: "وين تروح سطحات جنوب الرياض غالبًا؟",
        destinations: [
          {
            name: "ورش المصانع والصناعية",
            text: "الجنوب فيه أكبر تجمع ورش في الرياض، فأغلب المشاوير قصيرة — ووسيط المشوار أقل من ١٠ كم داخل الرياض ١٢٠ ريال.",
          },
          {
            name: "شرق ووسط الرياض",
            text: "لمراكز الصيانة والوكالات خارج الجنوب — مشاوير من ١٠ إلى ٢٠ كم ووسيطها ١٢٠ ريال.",
          },
          {
            name: "طريق الخرج والحائر",
            text: "أعطال على الطرق السريعة جنوب المدينة — حدد موقعك بدقة على الخريطة واذكر اتجاه الطريق في الوصف.",
          },
        ],
        faqTitle: "أسئلة عن السطحة في جنوب الرياض",
        faq: [
          {
            q: "كم سعر السطحة في جنوب الرياض؟",
            a: "داخل الرياض الوسيط ١٤٠ ريال لرحلات واير المنفذة، وأغلب مشاوير الجنوب قصيرة لأن الورش قريبة: المشوار أقل من ١٠ كم وسيطه ١٢٠ ريال وأغلبه بين ١٠٠ و١٤٠. وتشوف عروض الكباتن بأسعارها قبل ما توافق.",
          },
          {
            q: "تعطلت سيارتي على طريق الخرج — كيف أطلب سطحة؟",
            a: "وقف في مكان آمن وشغّل الإشارات، ثم افتح واير وخل الـ GPS يحدد موقعك واكتب اتجاه الطريق في وصف الطلب. الطلب يوصل لكل الكباتن القريبين وتجيك عروضهم خلال ثواني. وفي الحالات الخطرة اتصل بأمن الطرق ٩٩٦.",
          },
          {
            q: "هل في سطحة ٢٤ ساعة في الشفا والعزيزية والدار البيضاء؟",
            a: "نعم. واير تشتغل ٢٤ ساعة طوال الأسبوع في كل أحياء جنوب الرياض، وطلبك يوصل لكل الكباتن القريبين منك مع وقت الوصول المتوقع لكل عرض.",
          },
        ],
      },
      en: {
        name: "South Riyadh",
        metaTitle: "Tow truck in South Riyadh, 24/7 — Shifa, Aziziyah, Dar Al Bayda",
        description:
          "Need a tow truck in South Riyadh? One Wire request reaches every nearby driver in Al Shifa, Al Aziziyah, Al Dar Al Bayda, Al Masani and Al Hair — compare offers and choose.",
        answer:
          "To get a tow truck in South Riyadh, open Wire, set your location and describe the problem; your request reaches every verified driver near you in Al Shifa, Al Aziziyah, Al Dar Al Bayda, Al Masani and Al Hair. We've had 176 requests from South Riyadh, with 6 offers per request on average and the first usually in about 15 seconds.",
        statsTitle: "South Riyadh in numbers",
        stats: [
          { value: "176", label: "Tow requests from South Riyadh" },
          { value: "6", label: "Offers per request on average" },
          { value: "15 s", label: "Median time to first offer" },
          { value: "140 SAR", label: "Median price inside Riyadh" },
        ],
        areasTitle: "South Riyadh districts we cover",
        areas: [
          "Al Shifa",
          "Al Aziziyah",
          "Al Dar Al Bayda",
          "Al Mansourah",
          "Al Shumaisi",
          "Al Duraihimiyah",
          "Al Masani",
          "Badr",
          "Okaz",
          "Al Hair",
          "Al Marwah",
          "Al Ghannamiyah",
          "Al Manakh",
          "Al Yamamah",
          "Taibah",
        ],
        roadsTitle: "And the main roads",
        roads: [
          "Al Kharj Road",
          "Al Hair Road",
          "Southern Ring Road",
          "Dirab Road",
          "Makkah Road",
        ],
        destinationsTitle: "Where South Riyadh tows usually go",
        destinations: [
          {
            name: "Al Masani and Al Sinaiyah workshops",
            text: "The south has Riyadh's biggest workshop cluster, so most trips are short — under 10 km the Riyadh median is 120 SAR.",
          },
          {
            name: "East and central Riyadh",
            text: "For dealers and service centres outside the south — 10–20 km trips with a 120 SAR median.",
          },
          {
            name: "Al Kharj and Al Hair roads",
            text: "Breakdowns on the highways south of the city — pin your location precisely and mention the direction of travel in the request.",
          },
        ],
        faqTitle: "Questions about towing in South Riyadh",
        faq: [
          {
            q: "How much is a tow truck in South Riyadh?",
            a: "Completed Wire tows inside Riyadh have a 140 SAR median, and most southern trips are short because workshops are close: under 10 km the median is 120 SAR, mostly 100–140. You see each driver's price before accepting.",
          },
          {
            q: "My car broke down on Al Kharj Road — how do I get a tow?",
            a: "Pull over somewhere safe with hazard lights on, then open Wire, let GPS set your location and write the direction of travel in the request. It reaches every nearby driver and offers arrive within seconds. In a dangerous situation call Road Security on 996.",
          },
          {
            q: "Is there 24-hour towing in Al Shifa, Al Aziziyah and Al Dar Al Bayda?",
            a: "Yes. Wire runs 24/7 across South Riyadh, and your request reaches every driver near you, each offer showing an estimated arrival time.",
          },
        ],
      },
    },
  },
  {
    slug: "west",
    ogLabel: "WEST RIYADH",
    content: {
      ar: {
        name: "غرب الرياض",
        metaTitle: "سطحة غرب الرياض ٢٤ ساعة — السويدي وظهرة لبن وطويق وعرقة",
        description:
          "تبي سطحة في غرب الرياض؟ طلب واحد من واير يوصل لكل الكباتن القريبين في السويدي وظهرة لبن وطويق ونمار وعرقة، تقارن عروضهم وتختار الأنسب.",
        answer:
          "لطلب سطحة في غرب الرياض: افتح واير وحدد موقعك ووصّف حالتك، وطلبك يوصل لكل الكباتن الموثقين القريبين في السويدي وظهرة لبن وطويق ونمار وعرقة. يجي لكل طلب من غرب الرياض ٦ عروض في المتوسط وأول عرض خلال حوالي ١٤ ثانية، وداخل الرياض السعر الوسيط ١٤٠ ريال.",
        statsTitle: "غرب الرياض بالأرقام",
        stats: [
          { value: "٨٩", label: "طلب سطحة من غرب الرياض" },
          { value: "٦", label: "عروض في المتوسط لكل طلب" },
          { value: "١٤ ث", label: "وسيط وقت أول عرض" },
          { value: "١٤٠ ريال", label: "السعر الوسيط داخل الرياض" },
        ],
        areasTitle: "أحياء غرب الرياض اللي نغطيها",
        areas: [
          "السويدي",
          "السويدي الغربي",
          "العريجاء",
          "ظهرة لبن",
          "طويق",
          "نمار",
          "ظهرة نمار",
          "عرقة",
          "الخزامى",
          "السفارات",
          "الحزم",
          "المهدية",
          "البديعة",
          "شبرا",
        ],
        roadsTitle: "والطرق الرئيسية",
        roads: [
          "الدائري الغربي",
          "طريق مكة المكرمة",
          "طريق جدة",
          "طريق الملك خالد",
        ],
        destinationsTitle: "وين تروح سطحات غرب الرياض غالبًا؟",
        destinations: [
          {
            name: "الصناعية والمصانع",
            text: "ورش الجنوب أقرب تجمع ورش للغرب — مشاوير من ١٠ إلى ٢٠ كم غالبًا ووسيطها داخل الرياض ١٢٠ ريال.",
          },
          {
            name: "شرق الرياض",
            text: "للوكالات ومراكز الصيانة في الشرق — مشوار طويل داخل المدينة ووسيطه ١٥٠ ريال.",
          },
          {
            name: "طريق جدة وطريق مكة",
            text: "أعطال على الطرق السريعة غرب المدينة — حدد موقعك بدقة واذكر اتجاه الطريق في الوصف.",
          },
        ],
        faqTitle: "أسئلة عن السطحة في غرب الرياض",
        faq: [
          {
            q: "كم سعر السطحة في غرب الرياض؟",
            a: "داخل الرياض السعر الوسيط لرحلات واير المنفذة ١٤٠ ريال، وأغلبها بين ١١٠ و١٥٠. من الغرب للصناعية مشوار متوسط وسيطه ١٢٠ ريال، ولشرق الرياض مشوار طويل وسيطه ١٥٠. تشوف السعر قبل ما توافق.",
          },
          {
            q: "تعطلت سيارتي على طريق جدة أو طريق مكة — وش أسوي؟",
            a: "اطلع لكتف الطريق بأمان وشغّل الإشارات، ثم افتح واير وخل الـ GPS يحدد موقعك واكتب اتجاه الطريق في الوصف. الطلب يوصل لكل الكباتن القريبين وتجيك عروضهم خلال ثواني. وفي الحالات الخطرة اتصل بأمن الطرق ٩٩٦.",
          },
          {
            q: "هل في سطحة قريبة مني في السويدي أو ظهرة لبن أو طويق؟",
            a: "نعم. طلبك يوصل لكل الكباتن القريبين منك في السويدي وظهرة لبن وطويق وبقية أحياء الغرب في نفس اللحظة، وكل عرض يوضح وقت الوصول المتوقع.",
          },
        ],
      },
      en: {
        name: "West Riyadh",
        metaTitle: "Tow truck in West Riyadh, 24/7 — Suwaidi, Laban, Tuwaiq, Irqah",
        description:
          "Need a tow truck in West Riyadh? One Wire request reaches every nearby driver in Al Suwaidi, Dhahrat Laban, Tuwaiq, Namar and Irqah — compare offers and choose.",
        answer:
          "To get a tow truck in West Riyadh, open Wire, set your location and describe the problem; your request reaches every verified driver near you in Al Suwaidi, Dhahrat Laban, Tuwaiq, Namar and Irqah. Requests from West Riyadh get 6 offers on average, the first in about 14 seconds, and inside Riyadh the median price is 140 SAR.",
        statsTitle: "West Riyadh in numbers",
        stats: [
          { value: "89", label: "Tow requests from West Riyadh" },
          { value: "6", label: "Offers per request on average" },
          { value: "14 s", label: "Median time to first offer" },
          { value: "140 SAR", label: "Median price inside Riyadh" },
        ],
        areasTitle: "West Riyadh districts we cover",
        areas: [
          "Al Suwaidi",
          "West Suwaidi",
          "Al Uraija",
          "Dhahrat Laban",
          "Tuwaiq",
          "Namar",
          "Dhahrat Namar",
          "Irqah",
          "Al Khuzama",
          "Diplomatic Quarter",
          "Al Hazm",
          "Al Mahdiyah",
          "Al Badiah",
          "Shubra",
        ],
        roadsTitle: "And the main roads",
        roads: [
          "Western Ring Road",
          "Makkah Road",
          "Jeddah Road",
          "King Khalid Road",
        ],
        destinationsTitle: "Where West Riyadh tows usually go",
        destinations: [
          {
            name: "Al Sinaiyah and Al Masani",
            text: "The southern workshops are the nearest cluster to the west — usually 10–20 km trips with a 120 SAR Riyadh median.",
          },
          {
            name: "East Riyadh",
            text: "For dealers and service centres in the east — a long in-city trip with a 150 SAR median.",
          },
          {
            name: "Jeddah Road and Makkah Road",
            text: "Breakdowns on the highways west of the city — pin your location precisely and mention the direction of travel.",
          },
        ],
        faqTitle: "Questions about towing in West Riyadh",
        faq: [
          {
            q: "How much is a tow truck in West Riyadh?",
            a: "Completed Wire tows inside Riyadh have a 140 SAR median, mostly 110–150. West to Al Sinaiyah is a medium trip with a 120 SAR median, and to East Riyadh a long one at 150 SAR. You see the price before accepting.",
          },
          {
            q: "My car broke down on Jeddah Road or Makkah Road — what do I do?",
            a: "Get onto the shoulder safely with hazard lights on, then open Wire, let GPS set your location and write the direction of travel. The request reaches every nearby driver and offers arrive within seconds. In a dangerous situation call Road Security on 996.",
          },
          {
            q: "Is there a tow truck near me in Al Suwaidi, Dhahrat Laban or Tuwaiq?",
            a: "Yes. Your request reaches every nearby driver in Al Suwaidi, Dhahrat Laban, Tuwaiq and the rest of the west at the same moment, and each offer shows an estimated arrival.",
          },
        ],
      },
    },
  },
];

export const zoneBySlug = (slug: string): RiyadhZone | undefined =>
  riyadhZones.find((z) => z.slug === slug);
