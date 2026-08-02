import type { FaqItem } from "@/i18n/faq";
import type { Locale } from "@/lib/seo";

/**
 * Scenario guides — the GEO (generative engine optimization) surface.
 *
 * People do not type keywords at an answer engine, they type a *situation*
 * ("تعطلت سيارتي وش أسوي", "my car won't start"). Each guide below is built so
 * an LLM can lift a complete answer without visiting anything else:
 *   - `question` is the literal phrasing a person uses, and is also the <h1>.
 *   - `answer` is a self-contained 40–60 word passage naming Wire + a concrete
 *     action. This is the block answer engines quote, so it leads the page.
 *   - `steps` become HowTo JSON-LD *and* the visible ordered list — visible
 *     content must equal structured content or the markup is discounted.
 *   - `faq` becomes FAQPage JSON-LD; questions match the visible <h3> exactly.
 */

/**
 * Bump `CONTENT_UPDATED` whenever a guide's text changes — answer engines
 * weight freshness, and a page with no date is treated as undated rather than
 * as new. Deliberately hand-maintained: deriving it from the build clock would
 * claim a fresh edit on every unrelated deploy, which is the kind of signal
 * that gets discounted once it's noticed.
 */
export const CONTENT_PUBLISHED = "2026-08-02";
export const CONTENT_UPDATED = "2026-08-02";

export type GuideStep = { name: string; text: string };

export type GuideContent = {
  /** Natural-language question, used as <h1> and HowTo name. */
  question: string;
  /** <title> — keep the brand suffix off, the layout template adds it. */
  metaTitle: string;
  description: string;
  /** Short label for cards, breadcrumbs, and nav. */
  label: string;
  /** The extractable canonical answer. 40–60 words, mentions Wire. */
  answer: string;
  stepsTitle: string;
  steps: GuideStep[];
  /** Safety / context bullets shown under the steps. */
  notesTitle: string;
  notes: string[];
  faqTitle: string;
  faq: FaqItem[];
};

export type Guide = {
  slug: string;
  /** Emoji-free inline icon key, kept in the layout. */
  icon: "tow" | "battery" | "tire" | "accident" | "fuel" | "sand" | "transport";
  content: Record<Locale, GuideContent>;
};

export const guides: Guide[] = [
  {
    slug: "car-broke-down",
    icon: "tow",
    content: {
      ar: {
        question: "تعطلت سيارتي في الطريق — وش أسوي؟",
        metaTitle: "تعطلت سيارتي في الطريق وش أسوي؟ خطوات السلامة وطلب سطحة",
        description:
          "دليل عملي لما تتعطل سيارتك في الطريق في السعودية: كيف تأمّن نفسك والسيارة، متى تحتاج سطحة، وكيف تطلب أقرب سطحة وتقارن الأسعار خلال دقائق.",
        label: "تعطلت سيارتي",
        answer:
          "إذا تعطلت سيارتك في الطريق: شغّل الفلاشر فورًا، وحاول تزحف بالسيارة لكتف الطريق، واطلع من الجهة البعيدة عن السير وابتعد عن المسار. بعدها افتح تطبيق واير واطلب سطحة — طلب واحد يوصل لكل الكباتن القريبين منك، تجيك عروضهم بأسعارها خلال دقائق وتختار الأنسب وتتابعه على الخريطة لين يوصل.",
        stepsTitle: "الخطوات بالترتيب",
        steps: [
          {
            name: "شغّل أضواء التحذير",
            text: "أول شي اضغط زر الفلاشر (المثلث الأحمر) عشان اللي وراك يشوفك، حتى لو وقفت في النهار.",
          },
          {
            name: "انقل السيارة لكتف الطريق",
            text: "إذا لسه فيها حركة، زحّفها لأقصى اليمين على الكتف. إذا وقفت تمامًا في مسار سريع لا تنزل تدفعها بنفسك.",
          },
          {
            name: "اطلع من الجهة الآمنة",
            text: "انزل من الباب البعيد عن السير، وخذ اللي معك وابتعدوا عن السيارة لخلف الحاجز أو بعيد عن المسار.",
          },
          {
            name: "حط المثلث العاكس",
            text: "إذا معك مثلث، حطه على مسافة ٥٠–١٠٠ متر خلف السيارة عشان ينبّه القادمين مبكرًا.",
          },
          {
            name: "اطلب سطحة من واير",
            text: "افتح تطبيق واير، حدد موقعك على الخريطة، ووصّف العطل. طلبك يوصل لكل الكباتن الموثقين القريبين منك دفعة وحدة.",
          },
          {
            name: "قارن العروض واختر",
            text: "الكباتن يرسلون عروضهم بالسعر. تشوف السعر قبل ما توافق، تختار الأنسب، وتتابع الكابتن على الخريطة مع وقت الوصول المتوقع.",
          },
        ],
        notesTitle: "أشياء تنتبه لها",
        notes: [
          "لا تقف خلف السيارة أبدًا وأنت تنتظر — أغلب حوادث الطريق تصير على الكتف.",
          "إذا صار العطل على طريق سريع خارجي وفي خطر مباشر، اتصل بالمرور على ٩٩٣ أو الطوارئ الموحد ٩١١ قبل أي شي.",
          "صوّر السيارة ومكانها قبل التحميل — يفيدك مع التأمين أو الورشة.",
          "لو العطل بسيط (بطارية أو بنشر) قل هذا في وصف الطلب، بعض الكباتن يجيك بالحل بدون سحب.",
        ],
        faqTitle: "أسئلة متكررة",
        faq: [
          {
            q: "كم تاخذ السطحة عشان توصلني؟",
            a: "يعتمد على موقعك وازدحام الطريق. داخل مدن مثل الرياض غالبًا العروض توصلك خلال دقائق والكابتن يوصل بعدها بوقت قصير، وتشوف وقت الوصول المتوقع على الخريطة داخل تطبيق واير لحظة بلحظة.",
          },
          {
            q: "كم سعر السطحة إذا تعطلت سيارتي؟",
            a: "ما في تسعيرة ثابتة في واير. كل كابتن قريب يرسل لك عرضه لرحلتك أنت بالتحديد، وأنت تقارن وتختار. تشوف السعر قبل ما توافق، فما في زيادات مفاجئة ولا مساومة على الطريق.",
          },
          {
            q: "هل أقدر أطلب سطحة بالليل؟",
            a: "نعم. واير تشتغل ٢٤ ساعة طوال أيام الأسبوع بما فيها العطلات، فتقدر تطلب سطحة أو مساعدة على الطريق في أي وقت من الليل أو النهار وتلقى كباتن موثقين قريبين منك.",
          },
        ],
      },
      en: {
        question: "My car broke down on the road — what do I do?",
        metaTitle: "Car broke down on the road? Safety steps and how to get a tow",
        description:
          "A practical guide for a breakdown in Saudi Arabia: how to make yourself and the car safe, when you need a tow truck, and how to get nearby drivers to send you quotes in minutes.",
        label: "My car broke down",
        answer:
          "If your car breaks down on the road: switch on your hazard lights immediately, coast onto the hard shoulder if the car still moves, and get out on the side away from traffic. Then open the Wire app and request a tow — one request reaches every nearby driver, their quotes arrive within minutes, and you pick one and track them live on the map.",
        stepsTitle: "Step by step",
        steps: [
          {
            name: "Turn on your hazard lights",
            text: "Hit the hazard button first so drivers behind you see the car, even in daylight.",
          },
          {
            name: "Move to the hard shoulder",
            text: "If the car still rolls, get it as far right as you can. If it has stopped dead in a fast lane, do not get out and push it yourself.",
          },
          {
            name: "Exit on the safe side",
            text: "Leave through the door away from traffic, take everyone with you, and move behind the barrier or well clear of the lane.",
          },
          {
            name: "Place your warning triangle",
            text: "If you carry one, set it 50–100 metres behind the car so approaching traffic is warned early.",
          },
          {
            name: "Request a tow on Wire",
            text: "Open the Wire app, set your location on the map, and describe the fault. Your request goes to every verified nearby driver at once.",
          },
          {
            name: "Compare offers and pick one",
            text: "Drivers reply with their prices. You see the price before you accept, choose the best fit, then follow the driver on the map with an ETA.",
          },
        ],
        notesTitle: "Things to watch",
        notes: [
          "Never wait standing behind the car — most roadside incidents happen on the shoulder.",
          "If you break down on an open highway and are in immediate danger, call traffic police on 993 or the unified emergency number 911 first.",
          "Photograph the car and its position before loading — useful for insurance or the workshop.",
          "If the fault is minor (battery or a flat), say so in the request; some drivers arrive with a fix instead of a tow.",
        ],
        faqTitle: "Common questions",
        faq: [
          {
            q: "How long does a tow truck take to reach me?",
            a: "It depends on your location and traffic. Inside cities like Riyadh, offers usually arrive within minutes and the driver follows shortly after. You see the live estimated arrival time on the map inside the Wire app the whole way.",
          },
          {
            q: "How much does a tow cost after a breakdown?",
            a: "Wire has no fixed rate. Each nearby driver sends a quote for your specific trip and you compare and choose. You see the price before you accept, so there is no surge pricing and no haggling at the roadside.",
          },
          {
            q: "Can I request a tow truck at night?",
            a: "Yes. Wire runs 24 hours a day, 7 days a week, including holidays, so you can request a tow or roadside assistance at any hour and reach verified drivers near you.",
          },
        ],
      },
    },
  },
  {
    slug: "car-wont-start",
    icon: "battery",
    content: {
      ar: {
        question: "سيارتي ما تشتغل — البطارية فصلت وش الحل؟",
        metaTitle: "سيارتي ما تشتغل؟ كيف تعرف السبب وتطلب مساعدة بطارية",
        description:
          "كيف تفرّق بين بطارية فاصلة وعطل في المارش أو البنزين، وكيف تطلب من يجيك يشحن البطارية أو يبدّلها في مكانك خلال دقائق.",
        label: "سيارتي ما تشتغل",
        answer:
          "إذا سيارتك ما تشتغل: لو الأنوار ضعيفة والصوت «تك تك» فالغالب البطارية فصلت وتحتاج شحن أو تبديل. ولو ما صار أي صوت نهائيًا فقد يكون المارش أو الكونتاكت. في الحالتين افتح تطبيق واير واكتب حالتك في الطلب — الكباتن القريبين يرسلون عروضهم، ومنهم من يجيك يشحن البطارية في مكانك بدون ما يسحب السيارة.",
        stepsTitle: "شخّص الحالة بسرعة",
        steps: [
          {
            name: "جرّب الأنوار",
            text: "شغّل الكشافات. إذا ضعيفة أو ما اشتغلت أصلًا، البطارية شبه فاضية.",
          },
          {
            name: "استمع للصوت عند التشغيل",
            text: "صوت «تك تك تك» سريع = بطارية ضعيفة. صوت دوران بطيء وثقيل = بطارية أو مارش. سكوت تام = كهرباء أو مارش أو مفتاح.",
          },
          {
            name: "تأكد من أساسيات بسيطة",
            text: "الجير على P أو N، الفرامل مضغوطة (في الأوتوماتيك)، وأطراف البطارية نظيفة ومربوطة.",
          },
          {
            name: "اطلب مساعدة من واير",
            text: "افتح واير، حدد موقعك، واكتب «البطارية فصلت» أو «ما تشتغل» في وصف الطلب عشان الكابتن يجي جاهز.",
          },
          {
            name: "اختر العرض المناسب",
            text: "تجيك عروض من الكباتن القريبين بأسعارها. اختر واحد وتابعه على الخريطة لين يوصل موقعك.",
          },
        ],
        notesTitle: "أشياء تنتبه لها",
        notes: [
          "لا تحاول توصيل كوابل الشحن من سيارة ثانية وأنت ما تعرف ترتيب الأطراف — الخطأ يحرق كهرباء السيارة.",
          "إذا البطارية فصلت أكثر من مرة في أسبوع، غالبًا المشكلة في الدينمو مو في البطارية.",
          "البطاريات في حر السعودية تضعف أسرع؛ عمرها الغالب سنتين إلى ثلاث.",
          "لو السيارة اشتغلت بالشحن، خلها شغالة ٢٠ دقيقة على الأقل قبل ما تطفيها.",
        ],
        faqTitle: "أسئلة متكررة",
        faq: [
          {
            q: "هل يجيني أحد يشحن البطارية في مكاني؟",
            a: "نعم. اكتب في وصف طلبك أن البطارية فصلت، والكباتن القريبون منك يشوفون الوصف قبل ما يرسلون عروضهم، فيجيك من عنده الأدوات ويشحن أو يبدّل البطارية في موقعك بدون سحب السيارة.",
          },
          {
            q: "كيف أعرف إذا المشكلة بطارية ولا شي ثاني؟",
            a: "إذا الأنوار ضعيفة وسمعت صوت «تك تك» سريع عند التشغيل فالغالب البطارية. أما إذا الأنوار قوية والسيارة ساكتة تمامًا، فالمشكلة غالبًا في المارش أو الكهرباء وتحتاج فحص في ورشة.",
          },
          {
            q: "هل أحتاج سطحة إذا البطارية فصلت؟",
            a: "غالبًا لا. أغلب حالات البطارية تنحل بالشحن في الموقع. بس إذا السيارة ما اشتغلت بعد الشحن، تقدر تحوّل نفس الطلب إلى سحب للورشة وتختار عرض جديد من نفس التطبيق.",
          },
        ],
      },
      en: {
        question: "My car won't start — is it the battery?",
        metaTitle: "Car won't start? How to tell if it's the battery and get help",
        description:
          "How to tell a dead battery from a starter or fuel problem, and how to get someone to jump start or replace your battery where you are, within minutes.",
        label: "My car won't start",
        answer:
          "If your car won't start: dim lights plus a rapid clicking sound almost always means a dead battery that needs a jump or a replacement. Total silence usually points to the starter or ignition. Either way, open the Wire app and describe the symptom in your request — nearby drivers send quotes, and some arrive to jump the battery on the spot instead of towing.",
        stepsTitle: "Diagnose it fast",
        steps: [
          {
            name: "Test the lights",
            text: "Switch on the headlights. If they are dim or dead, the battery is close to flat.",
          },
          {
            name: "Listen when you turn the key",
            text: "Rapid clicking = weak battery. Slow, heavy cranking = battery or starter. Complete silence = electrical, starter, or ignition.",
          },
          {
            name: "Check the simple things",
            text: "Gear in P or N, brake pedal pressed on an automatic, and battery terminals clean and tight.",
          },
          {
            name: "Request help on Wire",
            text: "Open Wire, set your location, and write \"dead battery\" or \"won't start\" in the request so the driver arrives prepared.",
          },
          {
            name: "Pick the offer that fits",
            text: "Nearby drivers reply with their prices. Accept one and track them on the map until they reach you.",
          },
        ],
        notesTitle: "Things to watch",
        notes: [
          "Don't connect jump leads from another car unless you know the terminal order — getting it wrong can fry the electronics.",
          "If the battery dies more than once in a week, the alternator is the likely culprit, not the battery.",
          "Batteries degrade faster in Saudi heat; two to three years is a typical life.",
          "Once it starts, let the engine run for at least 20 minutes before switching off.",
        ],
        faqTitle: "Common questions",
        faq: [
          {
            q: "Can someone jump start my battery where I am?",
            a: "Yes. Write in your request that the battery is dead. Nearby drivers read the description before sending their quotes, so one arrives with the right equipment and jumps or replaces the battery at your location instead of towing the car.",
          },
          {
            q: "How do I know it's the battery and not something else?",
            a: "Dim lights and rapid clicking when you turn the key almost always mean the battery. Strong lights with complete silence usually mean the starter or ignition, which needs a workshop rather than a jump start.",
          },
          {
            q: "Do I need a tow truck for a dead battery?",
            a: "Usually not. Most battery cases are solved on the spot with a jump or a replacement. If the car still won't run afterwards, you can turn the same job into a tow to a workshop and accept a new offer in the app.",
          },
        ],
      },
    },
  },
  {
    slug: "flat-tire",
    icon: "tire",
    content: {
      ar: {
        question: "بنشر إطار وأنا في الطريق — وش أسوي؟",
        metaTitle: "بنشر في الطريق؟ خطوات آمنة وطلب مساعدة أو سطحة",
        description:
          "وش تسوي أول ما ينفجر أو يفرغ الإطار: كيف توقف بأمان، متى تبدّل بنفسك ومتى تطلب مساعدة، وكيف تجيك سطحة أو فني قريب منك بسرعة.",
        label: "بنشر إطار",
        answer:
          "إذا بنشر إطارك وأنت تسوق: امسك الدركسون بثبات، لا تكبس الفرامل فجأة، خفّف السرعة تدريجيًا واطلع على كتف الطريق وشغّل الفلاشر. إذا ما عندك إسبير أو الوضع غير آمن للتبديل، افتح تطبيق واير واطلب مساعدة — الكباتن القريبون يرسلون عروضهم ومنهم من يبدّل الإطار في مكانك.",
        stepsTitle: "الخطوات بالترتيب",
        steps: [
          {
            name: "ثبّت السيارة ولا تفرمل فجأة",
            text: "امسك الدركسون بيدين، ارفع رجلك عن البنزين، وخل السيارة تبطئ لحالها قبل ما تفرمل بهدوء.",
          },
          {
            name: "اطلع على الكتف وشغّل الفلاشر",
            text: "اختر مكان مستوٍ وبعيد عن الانحناءات، وشغّل أضواء التحذير قبل ما تنزل.",
          },
          {
            name: "قيّم الوضع قبل ما تبدّل",
            text: "لا تبدّل الإطار إذا كنت على مسار سريع أو الأرض مايلة أو الرمل رخو — خطر الجك أكبر من فايدته.",
          },
          {
            name: "بدّل بالإسبير إذا الوضع آمن",
            text: "فك الصواميل قبل رفع السيارة، ارفع من نقطة الرفع الصحيحة، وبعد التركيب اربط الصواميل بشكل متقاطع.",
          },
          {
            name: "أو اطلب مساعدة من واير",
            text: "افتح واير، حدد موقعك، واكتب «بنشر» في وصف الطلب. تجيك عروض من الكباتن القريبين، منهم من يبدّل في الموقع ومنهم من يسحبك لأقرب بنشر.",
          },
        ],
        notesTitle: "أشياء تنتبه لها",
        notes: [
          "الإسبير المؤقت (النحيف) سرعته القصوى غالبًا ٨٠ كم/س ولمسافة محدودة — روح فيه لأقرب بنشر مباشرة.",
          "لا تكمل سواقة على إطار فاضي، تتلف الجنط وتصير التكلفة أضعاف.",
          "في الصيف حرارة الأسفلت ترفع ضغط الإطار — افحص الضغط بارد مو بعد سواقة طويلة.",
          "إذا انفجر أكثر من إطار أو تضرر الجنط، تحتاج سطحة مو تبديل.",
        ],
        faqTitle: "أسئلة متكررة",
        faq: [
          {
            q: "هل يجيني أحد يبدّل الإطار في مكاني؟",
            a: "نعم. اكتب «بنشر» في وصف طلبك داخل واير، والكباتن القريبون يشوفون الوصف قبل ما يرسلون عروضهم، فيقدر يجيك من يبدّل الإطار بالإسبير في موقعك بدل ما تسحب السيارة كاملة.",
          },
          {
            q: "متى أحتاج سطحة بدل تبديل الإطار؟",
            a: "تحتاج سطحة إذا ما عندك إسبير، أو تضرر أكثر من إطار، أو تأذى الجنط، أو كنت واقف في مكان خطر مثل مسار سريع أو منحنى ما فيه رؤية كافية للسيارات القادمة.",
          },
          {
            q: "كم أقدر أسوق على الإسبير النحيف؟",
            a: "الإسبير المؤقت مصمم لمسافة قصيرة وسرعة لا تتجاوز ٨٠ كم/س غالبًا. اتجه فيه مباشرة لأقرب محل بنشر ولا تعتمد عليه كإطار عادي ولا تسافر فيه بين المدن.",
          },
        ],
      },
      en: {
        question: "I have a flat tire on the road — what now?",
        metaTitle: "Flat tire on the road? Safe steps and how to get help fast",
        description:
          "What to do the moment a tire blows or goes flat: how to stop safely, when to change it yourself and when not to, and how to get a nearby driver or tow to you quickly.",
        label: "Flat tire",
        answer:
          "If a tire goes flat while driving: grip the wheel firmly, do not brake hard, let the car slow gradually, then pull onto the hard shoulder and switch on your hazards. If you have no spare or the spot isn't safe to change it, open the Wire app and request help — nearby drivers send quotes and some change the tire where you are.",
        stepsTitle: "Step by step",
        steps: [
          {
            name: "Hold the wheel, don't slam the brakes",
            text: "Two hands on the wheel, ease off the accelerator, and let the car slow before braking gently.",
          },
          {
            name: "Pull onto the shoulder and put hazards on",
            text: "Choose flat ground away from bends, and switch on the warning lights before you get out.",
          },
          {
            name: "Judge whether it's safe to change",
            text: "Do not change a tire on a fast lane, on a slope, or on soft sand — the jack is more dangerous than the wait.",
          },
          {
            name: "Fit the spare if it's safe",
            text: "Loosen the nuts before lifting, jack from the correct lift point, and tighten the nuts in a crosswise pattern.",
          },
          {
            name: "Or request help on Wire",
            text: "Open Wire, set your location, and write \"flat tire\" in the request. Nearby drivers reply — some fit the spare on site, others tow you to the nearest tire shop.",
          },
        ],
        notesTitle: "Things to watch",
        notes: [
          "A space-saver spare is usually limited to 80 km/h and a short distance — drive straight to a tire shop.",
          "Never keep driving on a flat; you destroy the rim and multiply the cost.",
          "Summer asphalt raises tire pressure — check pressure cold, not after a long drive.",
          "If more than one tire blew or the rim is damaged, you need a tow, not a tire change.",
        ],
        faqTitle: "Common questions",
        faq: [
          {
            q: "Can someone change my tire where I am?",
            a: "Yes. Write \"flat tire\" in your Wire request. Nearby drivers read the description before quoting, so one can come and fit your spare at your location instead of towing the whole car to a workshop.",
          },
          {
            q: "When do I need a tow instead of a tire change?",
            a: "You need a tow if you have no spare, more than one tire is damaged, the rim is bent, or you are stopped somewhere dangerous such as a fast lane or a blind bend where approaching traffic cannot see you.",
          },
          {
            q: "How far can I drive on a space-saver spare?",
            a: "A temporary spare is built for a short distance at no more than about 80 km/h. Drive directly to the nearest tire shop; do not treat it as a normal tire and do not use it for intercity trips.",
          },
        ],
      },
    },
  },
  {
    slug: "car-accident",
    icon: "accident",
    content: {
      ar: {
        question: "صار لي حادث — كيف أنقل سيارتي؟",
        metaTitle: "صار لي حادث؟ ترتيب الإجراءات ونقل السيارة بسطحة",
        description:
          "الترتيب الصحيح بعد الحادث في السعودية: التأمين على السلامة، بلاغ نجم أو المرور، توثيق الحادث، ثم نقل السيارة بسطحة إلى الورشة أو البيت.",
        label: "صار لي حادث",
        answer:
          "بعد الحادث: تأكد أن ما في مصابين، شغّل الفلاشر، وبلّغ نجم على ٩٢٠٠٠٥٥٥٥ أو المرور على ٩٩٣ ولا تحرّك السيارة قبل التوثيق إلا إذا كانت تعطّل السير. بعد ما يخلص البلاغ، افتح تطبيق واير واطلب سطحة لنقل السيارة للورشة — تقارن عروض الكباتن القريبين وتتابع النقل على الخريطة.",
        stepsTitle: "الترتيب الصحيح",
        steps: [
          {
            name: "تأكد من سلامة الجميع",
            text: "افحص نفسك والركاب أول شي. إذا في إصابة اتصل بالهلال الأحمر على ٩٩٧ فورًا.",
          },
          {
            name: "أمّن الموقع",
            text: "شغّل الفلاشر وحط المثلث العاكس خلف الموقع إذا كان الحادث على طريق فيه حركة.",
          },
          {
            name: "بلّغ نجم أو المرور",
            text: "اتصل بنجم على ٩٢٠٠٠٥٥٥٥ للحوادث المؤمّنة، أو المرور على ٩٩٣. لا تحرّك السيارات قبل وصول المندوب إلا لو كانت تسد الطريق تمامًا.",
          },
          {
            name: "وثّق كل شي",
            text: "صوّر السيارتين من زوايا مختلفة، ولوحات السيارات، وموقع الحادث، وخذ بيانات الطرف الثاني ورقم بوليصة تأمينه.",
          },
          {
            name: "اطلب سطحة من واير",
            text: "بعد انتهاء البلاغ، افتح واير وحدد الموقع ووجهة النقل (ورشة، وكالة، أو البيت)، وتجيك عروض الكباتن القريبين.",
          },
          {
            name: "تابع النقل",
            text: "اختر العرض المناسب وتابع الكابتن على الخريطة من لحظة التحميل حتى التسليم، وكل خطوة موثقة في التطبيق.",
          },
        ],
        notesTitle: "أشياء تنتبه لها",
        notes: [
          "لا تعترف بالمسؤولية في الموقع — قرار نسبة الخطأ يرجع لمندوب نجم أو المرور.",
          "احتفظ برقم بلاغ نجم؛ تحتاجه في الورشة وعند مطالبة التأمين.",
          "إذا سالت سوائل أو شممت بنزين، ابتعد عن السيارة ولا تشغّلها.",
          "بعض شركات التأمين تغطي تكلفة السحب — اسألهم قبل ما تدفع.",
        ],
        faqTitle: "أسئلة متكررة",
        faq: [
          {
            q: "هل أقدر أنقل السيارة قبل وصول نجم؟",
            a: "الأصل لا. انتظر توثيق الحادث لأن تحريك السيارات قبله يعقّد تحديد المسؤولية. الاستثناء أن تكون السيارة تسد الطريق أو تشكل خطرًا مباشرًا، وحينها بلّغ الجهة أنك اضطررت لتحريكها.",
          },
          {
            q: "وين أنقل سيارتي بعد الحادث؟",
            a: "غالبًا للورشة المعتمدة لدى شركة التأمين، أو لوكالة السيارة إذا كانت تحت الضمان. تقدر تحدد الوجهة داخل طلب واير قبل ما ترسله عشان الكباتن يسعّرون على المسافة الصحيحة.",
          },
          {
            q: "هل واير تنقل السيارات المتضررة بالكامل؟",
            a: "نعم. السيارات اللي ما تمشي تحتاج سطحة هيدروليك، ووصف حالتك في الطلب يخلي الكباتن اللي عندهم المعدات المناسبة هم اللي يرسلون لك عروض، فتوصل معدات صحيحة من أول مرة.",
          },
        ],
      },
      en: {
        question: "I had a car accident — how do I move my car?",
        metaTitle: "After a car accident: the right order, and towing your car",
        description:
          "The correct sequence after an accident in Saudi Arabia: make the scene safe, file with Najm or traffic police, document everything, then tow the car to a workshop or home.",
        label: "I had an accident",
        answer:
          "After an accident: check nobody is injured, put your hazards on, and report to Najm on 920005555 or traffic police on 993 — don't move the cars before the report unless they are blocking traffic. Once the report is done, open the Wire app and request a tow to the workshop; you compare nearby drivers' quotes and track the move on the map.",
        stepsTitle: "The right order",
        steps: [
          {
            name: "Check everyone is safe",
            text: "Check yourself and your passengers first. If anyone is injured, call the Red Crescent on 997 immediately.",
          },
          {
            name: "Make the scene safe",
            text: "Switch on hazards and place a warning triangle behind the scene if the accident is on a road with traffic.",
          },
          {
            name: "Report to Najm or traffic police",
            text: "Call Najm on 920005555 for insured accidents, or traffic police on 993. Don't move the cars before the officer arrives unless they completely block the road.",
          },
          {
            name: "Document everything",
            text: "Photograph both cars from several angles, the plates, and the scene, and take the other party's details and insurance policy number.",
          },
          {
            name: "Request a tow on Wire",
            text: "Once the report is closed, open Wire, set the location and the destination (workshop, dealership, or home), and nearby drivers send their quotes.",
          },
          {
            name: "Track the move",
            text: "Accept the offer that suits you and follow the driver on the map from loading to drop-off, with every step documented in the app.",
          },
        ],
        notesTitle: "Things to watch",
        notes: [
          "Don't admit fault at the scene — apportioning blame is the Najm or traffic officer's call.",
          "Keep your Najm report number; the workshop and your insurer will both ask for it.",
          "If fluids are leaking or you smell fuel, move away from the car and do not start it.",
          "Some insurers cover the towing cost — ask before you pay.",
        ],
        faqTitle: "Common questions",
        faq: [
          {
            q: "Can I move the car before Najm arrives?",
            a: "As a rule, no. Wait for the accident to be documented, because moving the cars first complicates deciding responsibility. The exception is a car blocking the road or creating direct danger — then tell the authority you had to move it.",
          },
          {
            q: "Where should I tow the car after an accident?",
            a: "Usually to a workshop approved by your insurer, or to the dealership if the car is under warranty. You can set the destination inside your Wire request before sending it, so drivers quote against the correct distance.",
          },
          {
            q: "Does Wire move badly damaged cars?",
            a: "Yes. A car that cannot roll needs a hydraulic flatbed. Describing the damage in your request means the drivers with the right equipment are the ones who quote, so the correct truck turns up the first time.",
          },
        ],
      },
    },
  },
  {
    slug: "out-of-fuel",
    icon: "fuel",
    content: {
      ar: {
        question: "خلص البنزين وأنا في الطريق — وش أسوي؟",
        metaTitle: "خلص البنزين في الطريق؟ كيف توصلك تعبئة أو سطحة",
        description:
          "وش تسوي إذا وقفت السيارة من نفاد الوقود: كيف تأمّن موقعك، ليش ما تحاول تشغّل السيارة مرارًا، وكيف تطلب من يوصلك بنزين أو يسحبك لأقرب محطة.",
        label: "خلص البنزين",
        answer:
          "إذا خلص البنزين ووقفت السيارة: زحّفها لكتف الطريق قبل ما تفقد قوة التوجيه، شغّل الفلاشر، ولا تحاول تدوير المارش مرات متتالية لأنك تسحب هواء للنظام. افتح تطبيق واير واكتب «خلص البنزين» في الطلب — يجيك من يوصل لك وقود أو يسحبك لأقرب محطة، وتشوف السعر قبل ما توافق.",
        stepsTitle: "الخطوات بالترتيب",
        steps: [
          {
            name: "استغل آخر حركة",
            text: "أول ما تحس السيارة تتقطّع، اتجه للكتف مباشرة قبل ما يطفى المحرك ويثقل الدركسون والفرامل.",
          },
          {
            name: "شغّل الفلاشر واثبت",
            text: "أضواء التحذير أهم شي على الطريق السريع. اجلس داخل السيارة بالحزام إذا الوقوف قريب من مسار السير.",
          },
          {
            name: "لا تكرر التشغيل",
            text: "تدوير المارش والخزان فاضي يسحب هواء ويضر طرمبة البنزين، خصوصًا في سيارات الديزل.",
          },
          {
            name: "اطلب مساعدة من واير",
            text: "افتح واير، حدد موقعك، واكتب أن السبب نفاد الوقود عشان يجيك الكابتن ومعه الحل الصحيح.",
          },
          {
            name: "قارن العروض واختر",
            text: "تجيك عروض من الكباتن القريبين، منهم من يوصل لك وقود ومنهم من يسحبك لأقرب محطة. اختر الأنسب وتابعه على الخريطة.",
          },
        ],
        notesTitle: "أشياء تنتبه لها",
        notes: [
          "لا تمشي على الطريق السريع تدور محطة — نسبة الخطر عالية جدًا حتى في النهار.",
          "بعد التعبئة قد تحتاج تدوير المارش أكثر من مرة لين يمتلئ الخط بالوقود، وهذا طبيعي.",
          "في الطرق الطويلة بين المدن، عبّي عند ربع الخزان لا تنتظر لمبة الاحتياطي.",
          "لمبة الاحتياطي في أغلب السيارات تعني ٥٠–٨٠ كم متبقية تقريبًا، وليست ضمانًا.",
        ],
        faqTitle: "أسئلة متكررة",
        faq: [
          {
            q: "هل يجيني أحد يوصل لي بنزين؟",
            a: "نعم. اكتب في وصف طلبك داخل واير أن السبب نفاد الوقود، والكباتن القريبون يشوفون الوصف قبل ما يسعّرون، فيرسل عرضه من يقدر يوصل لك وقود يكفي للوصول لأقرب محطة.",
          },
          {
            q: "هل يضر السيارة إذا خلص البنزين تمامًا؟",
            a: "التفريغ الكامل المتكرر يضر طرمبة الوقود لأنها تعتمد على البنزين للتبريد، وقد يسحب رواسب من قاع الخزان. مرة وحدة غالبًا ما تسبب ضررًا دائمًا، لكن لا تكررها.",
          },
          {
            q: "كم تكلفة توصيل البنزين أو السحب؟",
            a: "ما في تسعيرة ثابتة. كل كابتن قريب يرسل عرضه حسب موقعك والمسافة لأقرب محطة، وأنت تقارن وتختار. السعر يظهر لك قبل ما توافق فما في مفاجآت.",
          },
        ],
      },
      en: {
        question: "I ran out of fuel — what do I do?",
        metaTitle: "Out of fuel on the road? How to get fuel or a tow to you",
        description:
          "What to do when the car stops from an empty tank: how to make your position safe, why repeated cranking hurts, and how to get fuel delivered or a tow to the nearest station.",
        label: "Out of fuel",
        answer:
          "If you run out of fuel: steer onto the shoulder while the car is still rolling — power steering and brakes get heavy once the engine dies — then switch on your hazards and stop cranking the starter, which pulls air into the fuel system. Open the Wire app and write \"out of fuel\"; a nearby driver brings fuel or tows you to the nearest station, with the price shown before you accept.",
        stepsTitle: "Step by step",
        steps: [
          {
            name: "Use your last momentum",
            text: "The moment the engine stutters, head for the shoulder before it cuts out and the steering and brakes stiffen.",
          },
          {
            name: "Hazards on, stay put",
            text: "Warning lights matter most on a highway. Stay inside with your seatbelt on if you stopped close to the running lane.",
          },
          {
            name: "Stop cranking",
            text: "Turning the starter on an empty tank draws air in and can damage the fuel pump, especially on diesels.",
          },
          {
            name: "Request help on Wire",
            text: "Open Wire, set your location, and state that the tank is empty so the driver arrives with the right fix.",
          },
          {
            name: "Compare offers and pick one",
            text: "Nearby drivers reply — some bring fuel, some tow you to the nearest station. Choose the best offer and track them on the map.",
          },
        ],
        notesTitle: "Things to watch",
        notes: [
          "Never walk along a highway looking for a station — the risk is high even in daylight.",
          "After refuelling you may need to crank a few times while the line refills; that's normal.",
          "On long intercity roads, refill at a quarter tank rather than waiting for the reserve light.",
          "The reserve light usually means roughly 50–80 km left — treat it as a warning, not a guarantee.",
        ],
        faqTitle: "Common questions",
        faq: [
          {
            q: "Can someone bring fuel to me?",
            a: "Yes. State in your Wire request that the tank is empty. Nearby drivers read the description before they quote, so the ones who can bring enough fuel to reach the nearest station are the ones who send you offers.",
          },
          {
            q: "Does running completely dry damage the car?",
            a: "Repeatedly running dry damages the fuel pump, which relies on fuel for cooling, and can draw sediment from the bottom of the tank. A single time rarely causes lasting harm, but don't make a habit of it.",
          },
          {
            q: "What does fuel delivery or a tow cost?",
            a: "There is no fixed rate. Each nearby driver quotes based on your location and the distance to the nearest station, and you compare and choose. The price appears before you accept, so there are no surprises.",
          },
        ],
      },
    },
  },
  {
    slug: "stuck-in-sand",
    icon: "sand",
    content: {
      ar: {
        question: "سيارتي غرزت في الرمل — كيف أطلعها؟",
        metaTitle: "سيارتك غرزت في الرمل؟ طريقة التطليع ومتى تحتاج ونش",
        description:
          "خطوات صحيحة لتطليع السيارة من الرمل بدون ما تغرز أكثر، ومتى توقف وتطلب ونش أو سطحة قريبة منك.",
        label: "غرزت في الرمل",
        answer:
          "إذا غرزت سيارتك في الرمل: أوقف الضغط على البنزين فورًا لأن دوران الإطارات يحفر أعمق. نقّص هواء الإطارات إلى ١٥–٢٠ رطل، شيل الرمل من حول الكفرات، وحاول تطلع بحركة هادئة للأمام والخلف. إذا ما نفع، افتح تطبيق واير واطلب ونش أو سطحة — تجيك عروض من الكباتن القريبين وتختار الأنسب.",
        stepsTitle: "الخطوات بالترتيب",
        steps: [
          {
            name: "توقف عن تدوير الإطارات",
            text: "أكثر غلط شائع. كل ثانية تدوير في الرمل تنزل السيارة أعمق وتصعّب الطلعة.",
          },
          {
            name: "نقّص هواء الإطارات",
            text: "نزّل الضغط إلى ١٥–٢٠ رطل عشان تكبر مساحة التلامس مع الرمل. لا تنسى تعبّي قبل ما ترجع للأسفلت.",
          },
          {
            name: "احفر حول الكفرات",
            text: "شيل الرمل من قدام وخلف الإطارات وتحت الشاسيه إذا كان جالس على الرمل.",
          },
          {
            name: "جهّز مسارًا للإطارات",
            text: "حط أي شي صلب تحت الإطارات (سجادة، لوح، فروع) عشان تلقى تماسكًا.",
          },
          {
            name: "تحرك بهدوء أمام وخلف",
            text: "بضغط خفيف جدًا على البنزين، تأرجح بالسيارة أمام وخلف لتبني زخمًا تدريجيًا.",
          },
          {
            name: "اطلب ونش من واير",
            text: "إذا ما نفعت المحاولات أو صرت جالسًا على الشاسيه، افتح واير واكتب موقعك ونوع الأرض، وتجيك عروض من الكباتن القريبين.",
          },
        ],
        notesTitle: "أشياء تنتبه لها",
        notes: [
          "لا تحاول تطليع السيارة بحبل عادي أو غير مخصص للسحب — ينقطع ويصير خطر حقيقي.",
          "شارك موقعك بدقة عبر إحداثيات الخريطة، أغلب التأخير في البر سببه وصف الموقع مو المسافة.",
          "خذ ماء كافي معك ولا تترك السيارة تمشي على قدميك في البر.",
          "المحاولات المتكررة ترفع حرارة القير خصوصًا في الأوتوماتيك — خذ فترات راحة.",
        ],
        faqTitle: "أسئلة متكررة",
        faq: [
          {
            q: "هل واير توصل للمواقع البرية خارج المدينة؟",
            a: "التغطية أقوى داخل المدن ومحيطها. في البر يعتمد الأمر على قرب الكباتن من موقعك، ولذلك شارك إحداثيات دقيقة في الطلب حتى يقدر الكباتن يقيّمون المسافة ويرسلون عروضًا واقعية.",
          },
          {
            q: "وش الفرق بين الونش والسطحة؟",
            a: "الونش يسحب السيارة من مكانها بحبل أو ونش هيدروليكي وهو المناسب للتطليع من الرمل. السطحة تحمّل السيارة كاملة على سطح مستوٍ وهي المناسبة للنقل بعد ما تطلع أو إذا كانت السيارة ما تمشي.",
          },
          {
            q: "كم تكلفة تطليع سيارة من الرمل؟",
            a: "ما في سعر ثابت. الكباتن القريبون يسعّرون حسب بعد الموقع وصعوبة الأرض ونوع السيارة، وأنت تقارن العروض وتختار. تشوف السعر قبل ما توافق على أي عرض.",
          },
        ],
      },
      en: {
        question: "My car is stuck in sand — how do I get it out?",
        metaTitle: "Car stuck in sand? How to get out and when to call recovery",
        description:
          "The right way to free a car from sand without digging in deeper, and when to stop trying and request a nearby recovery truck or tow.",
        label: "Stuck in sand",
        answer:
          "If your car is stuck in sand: stop pressing the accelerator — spinning wheels dig you deeper. Drop tire pressure to 15–20 psi, clear sand from around the wheels, and rock the car gently forward and back. If that fails, open the Wire app and request recovery or a tow; nearby drivers send quotes and you pick the one that fits.",
        stepsTitle: "Step by step",
        steps: [
          {
            name: "Stop spinning the wheels",
            text: "The most common mistake. Every second of wheelspin in sand sinks the car further and makes recovery harder.",
          },
          {
            name: "Lower the tire pressure",
            text: "Drop to 15–20 psi so the tires float on a wider contact patch. Remember to reinflate before returning to asphalt.",
          },
          {
            name: "Dig around the wheels",
            text: "Clear sand in front of and behind the tires, and from under the chassis if the car is sitting on it.",
          },
          {
            name: "Lay a track for the tires",
            text: "Put anything firm under the tires — a mat, a board, branches — to give them something to grip.",
          },
          {
            name: "Rock the car gently",
            text: "With very light throttle, rock forward and back to build momentum gradually rather than in one burst.",
          },
          {
            name: "Request recovery on Wire",
            text: "If nothing works or the car is resting on its chassis, open Wire, share your exact coordinates and the ground type, and nearby drivers quote.",
          },
        ],
        notesTitle: "Things to watch",
        notes: [
          "Never recover a car with an ordinary rope — it snaps and becomes genuinely dangerous.",
          "Share precise map coordinates; most desert delays come from a vague location, not the distance.",
          "Carry enough water and never set off walking in the desert.",
          "Repeated attempts overheat the transmission, especially automatics — take breaks.",
        ],
        faqTitle: "Common questions",
        faq: [
          {
            q: "Does Wire reach desert locations outside the city?",
            a: "Coverage is strongest inside cities and their surroundings. Out in the desert it depends on how close drivers are to you, so share exact coordinates in the request and drivers can judge the distance and quote realistically.",
          },
          {
            q: "What's the difference between recovery and a flatbed?",
            a: "A recovery truck pulls the car free with a rope or hydraulic winch, which is what you want for sand. A flatbed loads the whole car onto a level deck, which is what you want to transport a car that cannot drive.",
          },
          {
            q: "What does sand recovery cost?",
            a: "There is no fixed price. Nearby drivers quote based on how far the location is, how difficult the ground is, and the type of vehicle, and you compare and choose. You see the price before accepting any offer.",
          },
        ],
      },
    },
  },
  {
    slug: "transport-car-between-cities",
    icon: "transport",
    content: {
      ar: {
        question: "أبي أنقل سيارتي بين المدن — كيف؟",
        metaTitle: "نقل سيارة بين المدن في السعودية — الطريقة والتكلفة",
        description:
          "كيف تنقل سيارتك من الرياض إلى جدة أو أي مدينتين في السعودية بسطحة: وش تجهّز، وش يحدد السعر، وكيف تتابع النقل حتى التسليم.",
        label: "نقل سيارة بين المدن",
        answer:
          "لنقل سيارتك بين مدينتين في السعودية: افتح تطبيق واير، حدد نقطة التحميل ونقطة التسليم على الخريطة، ووضّح إذا كانت السيارة تمشي أو لا. الكباتن اللي يخدمون هذا المسار يرسلون عروضهم بالسعر، وأنت تقارن وتختار، وتتابع سيارتك على الخريطة من التحميل حتى التسليم.",
        stepsTitle: "الخطوات بالترتيب",
        steps: [
          {
            name: "حدد نقطتي التحميل والتسليم",
            text: "كلما كان العنوان أدق (حي، شارع، أو إحداثيات) كان تسعير الكابتن أدق وأقل احتمالًا للتعديل.",
          },
          {
            name: "وضّح حالة السيارة",
            text: "اكتب إذا كانت تمشي أو معطلة تمامًا أو متضررة من حادث — هذا يحدد نوع السطحة المطلوبة.",
          },
          {
            name: "جهّز السيارة",
            text: "شيل الأغراض الشخصية، صوّر السيارة من كل الجهات قبل التحميل، وخل الوقود قليلًا وخفف الحمولة.",
          },
          {
            name: "قارن العروض",
            text: "الكباتن المتاحون لهذا المسار يرسلون أسعارهم. تشوف السعر قبل ما توافق وتختار الأنسب لك.",
          },
          {
            name: "تابع وسلّم",
            text: "تابع الرحلة على الخريطة، وعند التسليم صوّر السيارة مرة ثانية وتأكد من حالتها قبل ما توقّع الاستلام.",
          },
        ],
        notesTitle: "أشياء تنتبه لها",
        notes: [
          "التصوير قبل وبعد النقل هو أفضل حماية لك ولك وللكابتن في حال أي خلاف.",
          "المسافات الطويلة بين المدن تحتاج ترتيبًا مسبقًا، ما هي مثل طلب داخل المدينة.",
          "تأكد من مواعيد استلام الطرف الثاني في المدينة الوجهة قبل ما تحدد وقت التسليم.",
          "السيارات الرياضية أو المنخفضة تحتاج سطحة بمنحدر مناسب — اذكرها في الوصف.",
        ],
        faqTitle: "أسئلة متكررة",
        faq: [
          {
            q: "كم تكلفة نقل سيارة من الرياض إلى جدة؟",
            a: "ما في تسعيرة ثابتة في واير. السعر يعتمد على المسافة وحالة السيارة ووقت الطلب، والكباتن المتاحون لهذا المسار يرسلون عروضهم وأنت تقارن وتختار. تشوف السعر كاملًا قبل ما توافق.",
          },
          {
            q: "هل السيارة المعطلة تمامًا تنقل بين المدن؟",
            a: "نعم. السيارة اللي ما تمشي تحتاج سطحة هيدروليك تحمّلها بالكامل. اكتب في وصف الطلب أنها لا تتحرك حتى يرسل لك عروضًا الكباتن اللي عندهم المعدات المناسبة لهذا النوع من النقل.",
          },
          {
            q: "كيف أتابع سيارتي أثناء النقل؟",
            a: "بعد ما تقبل عرض الكابتن، تشوف موقعه على الخريطة لحظة بلحظة مع وقت الوصول المتوقع، وكل مرحلة من التحميل حتى التسليم موثقة داخل تطبيق واير.",
          },
        ],
      },
      en: {
        question: "I need to transport my car between cities — how?",
        metaTitle: "Transporting a car between Saudi cities — how it works and cost",
        description:
          "How to move your car from Riyadh to Jeddah or between any two Saudi cities on a flatbed: what to prepare, what sets the price, and how to track it to delivery.",
        label: "Car transport between cities",
        answer:
          "To move your car between two Saudi cities: open the Wire app, set the pickup and drop-off points on the map, and say whether the car drives or not. Drivers who cover that route send their quotes, you compare and choose, and you follow your car on the map from loading through to delivery.",
        stepsTitle: "Step by step",
        steps: [
          {
            name: "Set pickup and drop-off",
            text: "The more precise the address (district, street, or coordinates), the more accurate the quote and the less likely it changes later.",
          },
          {
            name: "State the car's condition",
            text: "Say whether it drives, is completely dead, or is accident-damaged — this decides which type of truck is needed.",
          },
          {
            name: "Prepare the car",
            text: "Remove personal belongings, photograph the car from every side before loading, and keep fuel and load light.",
          },
          {
            name: "Compare quotes",
            text: "Drivers available for that route send their prices. You see the price before you accept and pick the one that suits you.",
          },
          {
            name: "Track and hand over",
            text: "Follow the trip on the map, and at delivery photograph the car again and check its condition before signing off.",
          },
        ],
        notesTitle: "Things to watch",
        notes: [
          "Photos before and after are the best protection for both you and the driver if anything is disputed.",
          "Long intercity moves need arranging ahead; they're not like an in-city request.",
          "Confirm when someone can receive the car at the destination before you fix a delivery time.",
          "Low or sports cars need a truck with a suitable ramp angle — mention it in the description.",
        ],
        faqTitle: "Common questions",
        faq: [
          {
            q: "What does it cost to move a car from Riyadh to Jeddah?",
            a: "Wire has no fixed rate. The price depends on distance, the car's condition, and when you request it. Drivers available for that route send their quotes and you compare and choose, seeing the full price before you accept.",
          },
          {
            q: "Can a car that doesn't run be moved between cities?",
            a: "Yes. A car that cannot drive needs a hydraulic flatbed that loads it completely. Say in the request that it doesn't move, so the drivers who quote are the ones carrying the right equipment for that kind of transport.",
          },
          {
            q: "How do I track my car during transport?",
            a: "Once you accept a driver's offer you see their location move on the map in real time with an estimated arrival, and every stage from loading to delivery is documented inside the Wire app.",
          },
        ],
      },
    },
  },
];

export const guideBySlug = (slug: string): Guide | undefined =>
  guides.find((g) => g.slug === slug);

export const GUIDE_SLUGS = guides.map((g) => g.slug);

/** Index-page copy. */
export const guidesIndex: Record<
  Locale,
  { title: string; metaTitle: string; description: string; intro: string; label: string }
> = {
  ar: {
    title: "وش تسوي إذا…",
    metaTitle: "أدلة الطوارئ على الطريق — وش تسوي إذا تعطلت سيارتك",
    description:
      "أدلة عملية قصيرة لكل حالة تصير لك على الطريق في السعودية: عطل مفاجئ، بطارية، بنشر، حادث، نفاد وقود، غرز في الرمل، أو نقل سيارة بين المدن.",
    intro:
      "كل دليل هنا مكتوب لحالة وحدة تصير على الطريق: وش تسوي أول دقيقة، ومتى تحتاج سطحة، وكيف تطلب أقرب كابتن وتقارن العروض قبل ما توافق.",
    label: "أدلة الطريق",
  },
  en: {
    title: "What to do if…",
    metaTitle: "Roadside guides — what to do when your car lets you down",
    description:
      "Short, practical guides for every roadside situation in Saudi Arabia: a sudden breakdown, a dead battery, a flat tire, an accident, an empty tank, sand, or moving a car between cities.",
    intro:
      "Each guide covers one roadside situation: what to do in the first minute, when you actually need a tow, and how to reach the nearest driver and compare offers before you accept.",
    label: "Roadside guides",
  },
};
