import type { FaqItem } from "@/i18n/faq";
import type { Locale } from "@/lib/seo";

/**
 * The "nearest tow truck" landing page.
 *
 * Search Console showed this query cluster generating ~1,800 impressions a
 * month at an average position of 8–9.5, converting almost nothing:
 *
 *   أقرب سطحة من موقعي   306 impressions   0 clicks   pos 9.5
 *   اقرب سطحه            615 impressions   3 clicks   pos 8.4
 *   سطحه قريب من موقعي   324 impressions   3 clicks   pos 9.0
 *
 * The home page was answering it, and it is not built for that intent: it
 * describes what Wire is, while this searcher is stopped on a road and wants
 * the next tap. The city pages don't fit either — "سطحة الرياض" is a place
 * query, "أقرب سطحة مني" is a proximity query, and they deserve different
 * pages. Hence a dedicated one, written for a phone (91% of this traffic) with
 * the action above everything else.
 *
 * Oct 2026 (17–18 Oct: «أقرب سطحة من موقعي» 139 impressions, pos 9.2, 0
 * clicks): the exact query now sits in the title, the <h1>, the description
 * and the breadcrumb/anchor label, and the page answers the two things that
 * searcher needs next — what to have ready and how long the wait is. The wait
 * uses only what we measure: the median first offer lands in ~15 seconds.
 * Prices quote content/prices.ts, nothing else. Bump NEAREST_UPDATED on edits.
 */
export const NEAREST_UPDATED = "2026-10-22";

export type NearestContent = {
  question: string;
  metaTitle: string;
  description: string;
  label: string;
  /** The extractable canonical answer: 40–60 words, names Wire. */
  answer: string;
  ctaLabel: string;
  ctaNote: string;
  stepsTitle: string;
  steps: { name: string; text: string }[];
  /** What to have to hand — mirrors the request form, in its order. */
  prepTitle: string;
  prepIntro: string;
  prep: { name: string; text: string }[];
  /** How long it takes — only numbers we actually measure. */
  waitTitle: string;
  wait: { name: string; text: string }[];
  /** Why "nearest" is not automatically "best" — the real differentiator. */
  insightTitle: string;
  insightBody: string;
  insightPoints: string[];
  faqTitle: string;
  faq: FaqItem[];
};

export const nearest: Record<Locale, NearestContent> = {
  ar: {
    question: "أقرب سطحة من موقعي — كيف أطلبها الحين؟",
    metaTitle: "أقرب سطحة من موقعي ٢٤ ساعة — أول عرض خلال ثواني",
    description:
      "أقرب سطحة من موقعي؟ افتح واير وخل الـ GPS يحدد مكانك، وطلبك يوصل لكل كباتن السطحات حولك وأول عرض يجيك خلال ثواني. قارن السعر والمسافة واختر — ٢٤ ساعة.",
    label: "أقرب سطحة من موقعي",
    answer:
      "لطلب أقرب سطحة من موقعك: افتح تطبيق واير وخل الـ GPS يحدد موقعك، ووصّف حالتك. طلبك يوصل في نفس اللحظة لكل كباتن السطحات الموثقين القريبين منك — ما تحتاج تدق على أحد ولا تدور أرقام. أول عرض يجيك عادةً خلال ثواني، تقارن الأسعار وتختار الأنسب، وتتابع الكابتن على الخريطة لين يوصل.",
    ctaLabel: "اطلب سطحة الحين",
    ctaNote: "متاح ٢٤ ساعة · بدون اتصال ولا انتظار على الخط",
    stepsTitle: "أربع خطوات، أقل من دقيقة",
    steps: [
      {
        name: "حدد موقعك ووجهتك",
        text: "خل الـ GPS يحدد موقعك تلقائيًا أو حرّك الدبوس على الخريطة، ثم اختر وين تبي توديها: ورشة، وكالة، أو بيتك.",
      },
      {
        name: "وصّف حالتك",
        text: "تعطلت؟ بنشر؟ بطارية؟ حادث؟ الوصف يخلي الكباتن اللي عندهم المعدات المناسبة هم اللي يرسلون لك عروض.",
      },
      {
        name: "قارن العروض",
        text: "الكباتن القريبون يرسلون أسعارهم. تشوف السعر والمسافة قبل ما توافق على أي عرض.",
      },
      {
        name: "تابع على الخريطة",
        text: "بعد ما تقبل، تشوف الكابتن يتحرك نحوك لحظة بلحظة مع وقت الوصول المتوقع.",
      },
    ],
    prepTitle: "وش تجهز قبل ما تطلب أقرب سطحة؟",
    prepIntro:
      "الطلب ياخذ أقل من دقيقة إذا كانت هذي جاهزة عندك، وكل معلومة دقيقة تخلي العرض اللي يجيك دقيق من أول مرة:",
    prep: [
      {
        name: "موقعك بالضبط",
        text: "شغّل خدمة الموقع واسمح لواير يستخدمها. إذا كنت في قبو أو نفق أو الإشارة ضعيفة، حرّك الدبوس بنفسك واكتب في الملاحظات أقرب معلم: محطة، مسجد، أو رقم المخرج.",
      },
      {
        name: "وين تبي توديها",
        text: "التطبيق يطلب الوجهة قبل ما يرسل طلبك: الورشة أو الوكالة أو البيت. وإذا ما عندك ورشة معينة، حدد أقرب صناعية لك — والعرض يكون على المشوار كامل.",
      },
      {
        name: "نوع السيارة وحالتها",
        text: "تمشي؟ تنسحب على كفراتها؟ ولا واقفة تمامًا؟ السيارة المنخفضة أو الفخمة أو اللي ما تتحرك أبدًا تناسبها السطحة الهيدروليك، فاختر نوع السطحة على هالأساس.",
      },
      {
        name: "صورة للسيارة",
        text: "إذا سيارتك ما تتحرك، التطبيق يطلب صورة لها قبل الإرسال — صوّرها وأنت واقف في مكان آمن، والصورة تساعد الكابتن يلقاها أسرع.",
      },
      {
        name: "أي شي يصعّب الوصول",
        text: "قبو، موقف ضيق، أو طريق سريع؟ اذكره في الملاحظات، وعلى الطريق السريع اكتب اتجاهك (مثلًا: طريق الخرج متجه جنوب).",
      },
      {
        name: "المبلغ كاش",
        text: "الدفع للكابتن كاش، بنفس السعر اللي وافقت عليه في التطبيق وبدون رسوم إضافية.",
      },
    ],
    waitTitle: "كم تنتظر أقرب سطحة؟",
    wait: [
      {
        name: "أول عرض: خلال ثواني",
        text: "في نص طلبات واير تقريبًا يوصل أول عرض خلال ١٥ ثانية من الإرسال، وبعده تتوالى عروض باقي الكباتن القريبين.",
      },
      {
        name: "وصول الكابتن: حسب بُعده والزحمة",
        text: "كل عرض يوضح كم يبعد الكابتن عنك، فتعرف مين الأقرب قبل ما توافق. وبعد ما تقبل تتابعه على الخريطة لحظة بلحظة لين يوصل.",
      },
      {
        name: "بالليل العروض أقل",
        text: "من ١١ الليل إلى ٦ الصبح الكباتن المتاحين أقل، فقد تجيك عروض أقل وأسعار أعلى شوي — ومع ذلك طلبك يوصل لكل الكباتن المتاحين حولك.",
      },
    ],
    insightTitle: "الأقرب مو دائمًا الأفضل",
    insightBody:
      "أغلب الناس تدور «الأقرب» وهي تقصد «الأسرع وصولًا وبسعر معقول». وهذول ثلاثة أشياء مختلفة — والكابتن الأقرب جغرافيًا قد يكون أبعدها فعليًا:",
    insightPoints: [
      "كابتن على بعد ٣ كم خلف ازدحام قد يوصلك متأخرًا عن كابتن على بعد ٧ كم على طريق سالك.",
      "الأقرب قد يكون مشغولًا في رحلة أخرى، فيقبل طلبك ثم يتأخر.",
      "الأقرب قد ما تكون عنده السطحة المناسبة لحالتك — سيارة متضررة تحتاج هيدروليك.",
      "ولذلك واير يرسل طلبك للجميع بدل ما يختار لك واحدًا: تشوف السعر ووقت الوصول المتوقع لكل عرض، وتقرر أنت.",
    ],
    faqTitle: "أسئلة عن أقرب سطحة",
    faq: [
      {
        q: "كيف ألقى أقرب سطحة من موقعي؟",
        a: "افتح تطبيق واير وخل الـ GPS يحدد موقعك ووصّف حالتك. طلبك يوصل فورًا لكل كباتن السطحات القريبين منك دفعة وحدة، فما تحتاج تبحث عن أرقام ولا تتصل بواحد واحد — العروض تجيك أنت، وأولها عادةً خلال ثواني.",
      },
      {
        q: "كم تاخذ أقرب سطحة عشان توصلني؟",
        a: "أول عرض يوصلك عادةً خلال ثواني — في نص الطلبات تقريبًا خلال ١٥ ثانية. وصول الكابتن نفسه يعتمد على بُعده عنك والزحمة: تشوف المسافة في كل عرض قبل ما تختار، وبعد ما تقبل تتابعه على الخريطة لحظة بلحظة.",
      },
      {
        q: "كم سعر أقرب سطحة؟",
        a: "ما في تسعيرة ثابتة — كل كابتن قريب يرسل عرضه لرحلتك وأنت تختار. وللمرجع من رحلات واير المنفذة داخل الرياض: المشوار القصير (أقل من ١٠ كم) أغلبه بين ١٠٠ و١٤٠ ريال، والمتوسط (١٠–٢٠ كم) بين ١٢٠ و١٥٠. تشوف السعر قبل ما توافق، فما في مساومة على الطريق.",
      },
      {
        q: "وش أجهز قبل ما أطلب سطحة؟",
        a: "موقعك بدقة (وحرّك الدبوس إذا الـ GPS مو دقيق)، ووين تبي توديها، ونوع سيارتك وحالتها. إذا السيارة ما تتحرك جهّز صورة لها لأن التطبيق يطلبها، واذكر في الملاحظات إذا كانت في قبو أو على طريق سريع. والدفع للكابتن كاش.",
      },
      {
        q: "هل في سطحة قريبة مني ٢٤ ساعة؟",
        a: "نعم. واير تشتغل ٢٤ ساعة طوال أيام الأسبوع بما فيها العطلات في الرياض وجدة والشرقية والأحساء، فتقدر تطلب أقرب سطحة في أي وقت من الليل أو النهار.",
      },
      {
        q: "هل الدفع كاش للكابتن؟",
        a: "نعم. تدفع للكابتن كاش نفس السعر اللي وافقت عليه في التطبيق، بدون رسوم إضافية على العميل. تحميل التطبيق وإرسال الطلب مجاني، وما يلزمك شي لين تقبل عرض.",
      },
      {
        q: "وش أسوي إذا ما جاني أي عرض؟",
        a: "غالبًا يعني أنك في منطقة بعيدة عن تجمّع الكباتن. تأكد أن موقعك محدد بدقة على الخريطة، وأعد إرسال الطلب. في الطرق البرية شارك إحداثياتك بدقة لأن أغلب التأخير سببه وصف الموقع لا المسافة.",
      },
    ],
  },
  en: {
    question: "Tow truck near me — how do I get the closest one?",
    metaTitle: "Tow truck near me, 24/7 — first offer within seconds",
    description:
      "Need the nearest tow truck? Open Wire, let GPS find you, and your request reaches every nearby driver — first offer within seconds. Compare and choose, 24/7.",
    label: "Tow truck near me",
    answer:
      "To get the nearest tow truck: open the Wire app, let GPS set your location, and describe the problem. Your request reaches every verified tow truck driver near you at the same moment — no calling around, no hunting for numbers. The first offer usually lands within seconds; you compare prices, pick one, and track the driver live on the map.",
    ctaLabel: "Request a tow now",
    ctaNote: "Available 24/7 · no phone calls, no hold music",
    stepsTitle: "Four steps, under a minute",
    steps: [
      {
        name: "Set your location and destination",
        text: "Let GPS place you automatically or drag the pin on the map, then choose where the car should go: a workshop, a dealer, or home.",
      },
      {
        name: "Describe the problem",
        text: "Broken down? Flat tire? Dead battery? Accident? The description means the drivers with the right equipment are the ones who quote.",
      },
      {
        name: "Compare the offers",
        text: "Nearby drivers send their prices. You see the price and the distance before you accept anything.",
      },
      {
        name: "Track on the map",
        text: "Once you accept, watch your driver move toward you in real time with an estimated arrival.",
      },
    ],
    prepTitle: "What to have ready before you request",
    prepIntro:
      "A request takes under a minute when you have these to hand, and the more precise they are, the more accurate the offers are the first time:",
    prep: [
      {
        name: "Your exact location",
        text: "Turn on location services and let Wire use them. In a basement, a tunnel or anywhere GPS is weak, move the pin yourself and add the nearest landmark in the notes: a petrol station, a mosque, an exit number.",
      },
      {
        name: "Where the car should go",
        text: "The app asks for the destination before your request goes out: a workshop, a dealer or home. No workshop in mind? Pick the industrial area nearest you — the offer covers the whole trip.",
      },
      {
        name: "The car and its condition",
        text: "Does it drive? Roll on its wheels? Or not move at all? A hydraulic flatbed suits low, luxury and fully immobile cars, so choose the truck type accordingly.",
      },
      {
        name: "A photo of the car",
        text: "If the car doesn't move, the app asks for a photo before sending — take it while you wait somewhere safe; it also helps the driver find the car faster.",
      },
      {
        name: "Anything that makes access hard",
        text: "A basement, tight parking or a highway? Say so in the notes, and on a highway write your direction of travel (e.g. Al Kharj Road, southbound).",
      },
      {
        name: "Cash",
        text: "You pay the driver in cash — the price you accepted in the app, with no extra fees.",
      },
    ],
    waitTitle: "How long will the nearest tow take?",
    wait: [
      {
        name: "First offer: within seconds",
        text: "On about half of Wire requests the first offer arrives within 15 seconds of sending, and the other nearby drivers' offers follow.",
      },
      {
        name: "Arrival: depends on distance and traffic",
        text: "Each offer shows how far the driver is from you, so you know who is closest before you accept. Once you accept, you follow them live on the map until they arrive.",
      },
      {
        name: "Fewer offers at night",
        text: "Between 11 pm and 6 am fewer drivers are available, so you may get fewer offers and slightly higher prices — your request still reaches every available driver around you.",
      },
    ],
    insightTitle: "Nearest isn't always best",
    insightBody:
      "Most people search for \"nearest\" but mean \"fastest to arrive at a fair price\" — three different things, and the geographically closest driver is often not the quickest:",
    insightPoints: [
      "A driver 3 km away behind traffic can reach you later than one 7 km away on a clear road.",
      "The closest driver may already be on another job, accept, and then run late.",
      "The closest may not have the right truck — a damaged car needs a hydraulic flatbed.",
      "So Wire sends your request to all of them instead of picking one for you: you see each offer's price and estimated arrival, and you decide.",
    ],
    faqTitle: "Questions about finding the nearest tow",
    faq: [
      {
        q: "How do I find a tow truck near me?",
        a: "Open the Wire app, let GPS set your location, and describe the problem. Your request reaches every nearby tow truck driver at once, so you never search for numbers or call around one by one — the offers come to you, the first usually within seconds.",
      },
      {
        q: "How long does the nearest tow truck take?",
        a: "The first offer usually lands within seconds — on about half of requests within 15 seconds. The driver's own arrival depends on distance and traffic: each offer shows how far the driver is before you choose, and once you accept you follow them live on the map.",
      },
      {
        q: "How much does the nearest tow truck cost?",
        a: "There is no fixed rate — each nearby driver quotes your trip and you choose. For reference, from tows completed on Wire inside Riyadh: a short tow (under 10 km) is mostly 100–140 SAR and a medium one (10–20 km) 120–150 SAR. You see the price before accepting, so there is no roadside haggling.",
      },
      {
        q: "What should I have ready before requesting a tow?",
        a: "Your exact location (move the pin if GPS is off), where the car should go, and the car's type and condition. If the car doesn't move, have a photo ready because the app asks for one, and note a basement or highway in the request. You pay the driver in cash.",
      },
      {
        q: "Is there a tow truck near me at any hour?",
        a: "Yes. Wire operates 24 hours a day, 7 days a week including holidays in Riyadh, Jeddah, the Eastern Province and Al-Ahsa, so you can request the nearest tow at any time of day or night.",
      },
      {
        q: "Do I pay the driver in cash?",
        a: "Yes. You pay the driver in cash — exactly the price you accepted in the app, with no extra fees for customers. Downloading the app and sending a request are free, and nothing binds you until you accept an offer.",
      },
      {
        q: "What if no offers come in?",
        a: "It usually means you're far from where drivers are concentrated. Check that your location is placed accurately on the map and send the request again. On open roads, share precise coordinates — most delays come from a vague location, not the distance.",
      },
    ],
  },
};
