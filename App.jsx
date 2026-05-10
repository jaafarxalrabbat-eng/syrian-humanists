import React, { useState } from "react";
import logoHeader from "./logo-Header.png";
import logoFull from "./logo-full.png";
import logoHeaderAr from "./logo-header-ar.png";
import logoFullAr from "./logo-full-ar.png";
import logoMark from "./logo-mark.png";

const content = {
  en: {
    logoAlt: "Syrian Humanists logo",
    symbolAlt: "Syrian Humanists symbol",
    nav: [
      ["About", "#about"],
      ["Vision", "#vision"],
      ["Values", "#values"],
      ["Building", "#building"],
      ["FAQ", "#faq"],
    ],
    cta: "Start a Conversation",
    badge: "Independent initiative in development",
    heroTitle: "A calm voice for dignity, conscience, and human solidarity.",
    heroText:
      "Syrian Humanists is an early-stage initiative to create a safe, humane, and intellectually honest space for Syrians who value freedom of conscience and often face pressure, isolation, or silence because of it.",
    learnMore: "Learn More",
    support: "Support the Development",
    tags: ["Freedom of conscience", "Critical thinking", "Peaceful dialogue"],
    statusTop: "In development",
    statusBottom: "Careful before scale",

    aboutLabel: "About",
    aboutTitle: "What Syrian Humanists is becoming",
    aboutText1:
      "Syrian Humanists is being developed as a careful intellectual and human support initiative for Syrians who seek dignity, meaning, and ethical self-direction beyond inherited fear or silence.",
    aboutText2:
      "It is currently in feasibility study and concept development. The work now is to prepare the legal, ethical, organizational, and human foundations before growth. The aim is not speed. The aim is responsibility.",
    aboutCards: [
      ["Current status", "Planning & concept development"],
      ["Core aim", "Safe support network & humanist content"],
      ["Focus", "Syrian free thinkers and young people"],
    ],

    visionLabel: "Vision",
    visionTitle:
      "A future where every Syrian can live with dignity, think freely, and belong without fear.",

    missionLabel: "Mission",
    missionTitle: "Building careful foundations before scale.",
    missionText:
      "The mission is to develop safe intellectual, ethical, and humanistic resources and networks for Syrians who need a calmer language for conscience, dignity, and responsibility.",

    whyLabel: "Why it matters",
    whyTitle: "The need is human before it is organizational.",
    whyText:
      "Many people who move toward secular or humanist values face isolation, pressure, and the need to hide. Syrian Humanists exists as a developing response to that human need: dignity, meaning, belonging, and a non-dogmatic ethical alternative.",

    valuesLabel: "Values",
    valuesTitle: "The moral language of the project",
    valuesText:
      "Simple values, held carefully. No hostility. No slogans. Just a humane foundation for thinking and living together.",
    values: [
      [
        "🤝",
        "Human Dignity",
        "Every person deserves respect, safety, and the freedom to live without humiliation or fear.",
      ],
      [
        "🧭",
        "Freedom of Conscience",
        "People should be able to believe, not believe, question, and think without coercion.",
      ],
      [
        "🧠",
        "Critical Thinking",
        "We value reason, honest inquiry, and the courage to examine ideas carefully.",
      ],
      [
        "💬",
        "Peaceful Dialogue",
        "Difficult questions need calm conversations, not hostility or fear.",
      ],
      [
        "👥",
        "Solidarity",
        "No one should feel alone because of their convictions or search for meaning.",
      ],
      [
        "⚖️",
        "Responsibility",
        "Freedom becomes stronger when it is joined with care, ethics, and responsibility toward others.",
      ],
    ],

    buildingLabel: "What we are building",
    buildingTitle: "A responsible platform, not a loud campaign.",
    buildingText:
      "Because the initiative is still developing, the language is intentionally future-oriented. The goal is to design safe, useful, and realistic pathways before making public promises.",
    building: [
      [
        "✨",
        "Humanistic Resources",
        "We are developing educational and reflective Arabic-language content on humanist ethics, dignity, critical thinking, and meaning.",
      ],
      [
        "🛡️",
        "Safe Community",
        "We aim to build a future privacy-conscious space where thoughtful Syrians can connect, reflect, and support each other carefully.",
      ],
      [
        "💬",
        "Dialogue and Reflection",
        "We are shaping formats for constructive conversations about ethics, identity, belonging, human rights, and personal responsibility.",
      ],
      [
        "🌍",
        "Freedom of Conscience",
        "We hope to support awareness and careful documentation around the right to believe, not believe, question, and think freely.",
      ],
    ],

    principlesLabel: "Principles",
    principlesTitle: "Clear boundaries make the project safer.",
    principles: [
      "Peace, not hostility",
      "People, not hatred",
      "Respect for belief and non-belief",
      "No violence, coercion, or dehumanization",
      "Dialogue over fear",
      "Safety and privacy first",
    ],

    safetyTitle: "Safety and privacy first",
    safetyText:
      "Privacy, anonymity, and careful communication are central to the project. Syrian Humanists will not make careless technical promises; it will build with caution, consultation, and realistic safety standards.",

    inspirationTitle: "Inspired by humanist traditions",
    inspirationText:
      "The initiative is inspired by the wider humanist tradition: freedom, self-determination, responsibility, dignity, and care for others. It is not presented as an official affiliate of any organization.",

    faqLabel: "FAQ",
    faqTitle: "Clear answers, careful language",
    faqs: [
      [
        "What is Syrian Humanists?",
        "Syrian Humanists is an independent initiative in development. It aims to create a safe, humane, and intellectually honest space for Syrians who value dignity, freedom of conscience, critical thinking, and peaceful coexistence.",
      ],
      [
        "Is this a political project?",
        "No. The initiative is not built as a political campaign or party. Its focus is human dignity, conscience, ethical reflection, and safe dialogue.",
      ],
      [
        "Is this an anti-religion project?",
        "No. Syrian Humanists respects both belief and non-belief. It does not exist to attack religious people, but to support freedom of conscience and humane coexistence.",
      ],
      [
        "Who is it for?",
        "It is mainly for Syrians and Arabic-speaking free thinkers who feel the need for thoughtful resources, careful conversation, and a more humane ethical language.",
      ],
      [
        "Is the project already registered?",
        "Not yet. It is currently in feasibility study and concept development, with legal and organizational groundwork being prepared for a responsible future structure.",
      ],
      [
        "How can someone contribute or connect?",
        "At this stage, the most valuable contribution is thoughtful feedback, practical advice, careful collaboration, and respectful conversation about direction and viability.",
      ],
    ],

    contactLabel: "Contact / Join",
    contactTitle: "Help shape the idea carefully.",
    contactText:
      "At this stage, thoughtful feedback matters more than scale. Connect if you want to share advice, ask questions, contribute to the idea, or start a respectful conversation.",
    contactButton: "Start a Conversation",
    contactSupport: "Support the Development",
    needsTitle: "This stage needs",
    needs: [
      "Honest human feedback",
      "Practical advice",
      "Thoughtful conversations",
      "Questions that should be faced before growth",
    ],

    footerText:
      "Syrian Humanists — dignity, conscience, solidarity. An independent initiative in development.",
    copyright: "Syrian Humanists. Independent initiative in development.",
  },

  ar: {
    logoAlt: "شعار الإنسانيين السوريين",
    symbolAlt: "رمز الإنسانيين السوريين",
    nav: [
      ["من نحن", "#about"],
      ["الرؤية", "#vision"],
      ["القيم", "#values"],
      ["ما نبني", "#building"],
      ["أسئلة", "#faq"],
    ],
    cta: "ابدأ حواراً",
    badge: "مبادرة مستقلة قيد التطوير",
    heroTitle: "صوت هادئ من أجل الكرامة، وحرية الضمير، والتضامن الإنساني.",
    heroText:
      "الإنسانيون السوريون مبادرة في مرحلة مبكرة تهدف إلى بناء مساحة آمنة، إنسانية، وصادقة فكرياً للسوريين الذين يقدّرون حرية الضمير، ويواجهون أحياناً الضغط أو العزلة أو الصمت بسبب قناعاتهم.",
    learnMore: "اعرف أكثر",
    support: "ادعم التطوير",
    tags: ["حرية الضمير", "التفكير النقدي", "الحوار السلمي"],
    statusTop: "قيد التطوير",
    statusBottom: "الحرص قبل التوسع",

    aboutLabel: "من نحن",
    aboutTitle: "ما الذي تعمل المبادرة على بنائه",
    aboutText1:
      "الإنسانيون السوريون مبادرة يجري تطويرها بعناية كمسار فكري وإنساني داعم للسوريين الذين يبحثون عن الكرامة، المعنى، والاستقلال الأخلاقي بعيداً عن الخوف أو الصمت الموروث.",
    aboutText2:
      "المبادرة حالياً في مرحلة دراسة الجدوى وتطوير المفهوم. العمل الآن يركز على إعداد الأسس القانونية، الأخلاقية، التنظيمية، والإنسانية قبل أي توسع. الهدف ليس السرعة، بل المسؤولية.",
    aboutCards: [
      ["الوضع الحالي", "تخطيط وتطوير مفهوم"],
      ["الهدف الأساسي", "شبكة دعم آمنة ومحتوى إنساني"],
      ["التركيز", "السوريون أصحاب التفكير الحر والشباب"],
    ],

    visionLabel: "الرؤية",
    visionTitle:
      "مستقبل يستطيع فيه كل سوري أن يعيش بكرامة، ويفكر بحرية، وينتمي بلا خوف.",

    missionLabel: "المهمة",
    missionTitle: "بناء أسس حذرة قبل التوسع.",
    missionText:
      "تسعى المبادرة إلى تطوير موارد وشبكات فكرية، أخلاقية، وإنسانية آمنة للسوريين الذين يحتاجون لغة أهدأ للضمير، الكرامة، والمسؤولية.",

    whyLabel: "لماذا هذا مهم",
    whyTitle: "الحاجة إنسانية قبل أن تكون تنظيمية.",
    whyText:
      "كثيرون ممن يقتربون من قيم إنسانية أو علمانية يواجهون العزلة والضغط والحاجة إلى إخفاء ذواتهم. تأتي هذه المبادرة كاستجابة هادئة لتلك الحاجة: الكرامة، المعنى، الانتماء، وبديل أخلاقي غير دوغمائي.",

    valuesLabel: "القيم",
    valuesTitle: "اللغة الأخلاقية للمبادرة",
    valuesText:
      "قيم بسيطة وواضحة. بلا عداء، بلا شعارات، وبلا ضجيج. فقط أساس إنساني للتفكير والعيش المشترك.",
    values: [
      [
        "🤝",
        "الكرامة الإنسانية",
        "كل إنسان يستحق الاحترام، الأمان، والقدرة على العيش بلا إهانة أو خوف.",
      ],
      [
        "🧭",
        "حرية الضمير",
        "من حق الإنسان أن يؤمن، أو لا يؤمن، أو يسأل ويفكر بلا إكراه.",
      ],
      [
        "🧠",
        "التفكير النقدي",
        "نقدّر العقل، السؤال الصادق، والشجاعة في فحص الأفكار بهدوء.",
      ],
      [
        "💬",
        "الحوار السلمي",
        "الأسئلة الصعبة تحتاج حواراً هادئاً، لا عداءً ولا خوفاً.",
      ],
      [
        "👥",
        "التضامن",
        "لا ينبغي أن يشعر أحد أنه وحيد بسبب قناعاته أو بحثه عن المعنى.",
      ],
      [
        "⚖️",
        "المسؤولية",
        "تصبح الحرية أقوى عندما ترتبط بالعناية، الأخلاق، والمسؤولية تجاه الآخرين.",
      ],
    ],

    buildingLabel: "ما الذي نبنيه",
    buildingTitle: "منصة مسؤولة، لا حملة صاخبة.",
    buildingText:
      "لأن المبادرة ما زالت قيد التطوير، فاللغة هنا مقصودة وحذرة. الهدف هو تصميم مسارات آمنة، مفيدة، وواقعية قبل تقديم أي وعود عامة.",
    building: [
      [
        "✨",
        "موارد إنسانية",
        "نعمل على تطوير محتوى عربي تعليمي وتأملي حول الأخلاق الإنسانية، الكرامة، التفكير النقدي، والمعنى.",
      ],
      [
        "🛡️",
        "مجتمع آمن",
        "نطمح إلى بناء مساحة مستقبلية تراعي الخصوصية، يستطيع السوريون فيها التواصل والتفكير والدعم المتبادل بحذر.",
      ],
      [
        "💬",
        "حوار وتأمل",
        "نعمل على صياغة مساحات حوار بناءة حول الأخلاق، الهوية، الانتماء، حقوق الإنسان، والمسؤولية الشخصية.",
      ],
      [
        "🌍",
        "حرية الضمير",
        "نسعى إلى دعم الوعي والتوثيق الحذر حول الحق في الإيمان، عدم الإيمان، السؤال، والتفكير الحر.",
      ],
    ],

    principlesLabel: "المبادئ",
    principlesTitle: "الحدود الواضحة تجعل المبادرة أكثر أماناً.",
    principles: [
      "السلام لا العداء",
      "دعم الإنسان لا الكراهية",
      "احترام الإيمان وعدم الإيمان",
      "رفض العنف والإكراه ونزع الإنسانية",
      "الحوار أقوى من الخوف",
      "الأمان والخصوصية أولاً",
    ],

    safetyTitle: "الأمان والخصوصية أولاً",
    safetyText:
      "الخصوصية، عدم كشف الهوية، والتواصل الحذر عناصر مركزية في المبادرة. لن تقدم المبادرة وعوداً تقنية غير مسؤولة، بل ستبني بحذر واستشارة ومعايير واقعية للأمان.",

    inspirationTitle: "مستوحاة من التقاليد الإنسانية",
    inspirationText:
      "تستلهم المبادرة من التقليد الإنساني الأوسع: الحرية، تقرير المصير، المسؤولية، الكرامة، والعناية بالآخرين. ولا تُقدَّم باعتبارها فرعاً رسمياً لأي منظمة.",

    faqLabel: "أسئلة",
    faqTitle: "إجابات واضحة بلغة حذرة",
    faqs: [
      [
        "ما هي مبادرة الإنسانيين السوريين؟",
        "هي مبادرة مستقلة قيد التطوير، تهدف إلى بناء مساحة آمنة، إنسانية، وصادقة فكرياً للسوريين الذين يقدّرون الكرامة، حرية الضمير، التفكير النقدي، والتعايش السلمي.",
      ],
      [
        "هل هذا مشروع سياسي؟",
        "لا. المبادرة ليست حزباً أو حملة سياسية. تركيزها الأساسي هو الكرامة الإنسانية، الضمير، التأمل الأخلاقي، والحوار الآمن.",
      ],
      [
        "هل هي مبادرة ضد الدين؟",
        "لا. المبادرة تحترم الإيمان وعدم الإيمان. وجودها ليس لمهاجمة المتدينين، بل لدعم حرية الضمير والتعايش الإنساني.",
      ],
      [
        "لمن هذه المبادرة؟",
        "هي بالأساس للسوريين والناطقين بالعربية من أصحاب التفكير الحر الذين يحتاجون إلى موارد هادئة، حوار آمن، ولغة أخلاقية أكثر إنسانية.",
      ],
      [
        "هل المبادرة مسجلة رسمياً؟",
        "ليس بعد. هي حالياً في مرحلة دراسة الجدوى وتطوير المفهوم، مع التفكير في الأسس القانونية والتنظيمية المناسبة للمستقبل.",
      ],
      [
        "كيف يمكن المساهمة أو التواصل؟",
        "في هذه المرحلة، أهم مساهمة هي الملاحظات الصادقة، النصيحة العملية، التعاون الحذر، والحوار المحترم حول الاتجاه والجدوى.",
      ],
    ],

    contactLabel: "تواصل / مساهمة",
    contactTitle: "ساهم في تشكيل الفكرة بعناية.",
    contactText:
      "في هذه المرحلة، الملاحظات الجادة أهم من التوسع. تواصل إذا أردت مشاركة نصيحة، طرح سؤال، المساهمة في الفكرة، أو بدء حوار محترم.",
    contactButton: "ابدأ حواراً",
    contactSupport: "ادعم التطوير",
    needsTitle: "هذه المرحلة تحتاج",
    needs: [
      "ملاحظات إنسانية صادقة",
      "نصائح عملية",
      "حوارات هادئة",
      "أسئلة يجب مواجهتها قبل التوسع",
    ],

    footerText:
      "الإنسانيون السوريون — الكرامة، الضمير، التضامن. مبادرة مستقلة قيد التطوير.",
    copyright: "الإنسانيون السوريون. مبادرة مستقلة قيد التطوير.",
  },
};

function ArrowIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="m13 6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function XIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 6l12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MailIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 6h16v12H4V6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AmbientAura({ isAr = false }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className="absolute -left-40 -top-44 h-[440px] w-[440px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(124,203,174,0.34) 0%, rgba(124,203,174,0.14) 38%, rgba(124,203,174,0) 72%)",
        }}
      />

      <div
        className={`absolute bottom-[-180px] h-[430px] w-[430px] rounded-full blur-3xl ${
          isAr ? "-left-32" : "-right-32"
        }`}
        style={{
          background:
            "radial-gradient(circle, rgba(241,145,46,0.18) 0%, rgba(241,145,46,0.08) 38%, rgba(241,145,46,0) 72%)",
        }}
      />

      <div
        className={`absolute top-[12%] h-[360px] w-[360px] rounded-full blur-3xl ${
          isAr ? "left-[18%]" : "right-[10%]"
        }`}
        style={{
          background:
            "radial-gradient(circle, rgba(25,92,133,0.12) 0%, rgba(25,92,133,0.05) 42%, rgba(25,92,133,0) 72%)",
        }}
      />

      <svg
        className={`absolute top-[14%] h-[520px] w-[520px] opacity-[0.11] ${
          isAr ? "left-[2%]" : "right-[2%]"
        }`}
        viewBox="0 0 520 520"
        fill="none"
      >
        <circle cx="260" cy="260" r="190" stroke="#195C85" strokeWidth="1.5" />
        <circle cx="260" cy="260" r="235" stroke="#25A77A" strokeWidth="1" />
        <path
          d="M92 305C138 204 245 142 367 170"
          stroke="#F1912E"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(#14232B 0.7px, transparent 0.7px)",
          backgroundSize: "18px 18px",
        }}
      />
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#7CCBAE]/40 bg-white/80 px-4 py-2 text-sm font-semibold text-[#195C85] shadow-sm">
      <span className="h-2 w-2 rounded-full bg-[#F1912E]" />
      {children}
    </div>
  );
}

function Button({ children, variant = "primary", href = "#contact", isAr = false }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 focus:outline-none focus:ring-4";

  const styles =
    variant === "primary"
      ? "bg-[#195C85] text-white shadow-lg shadow-[#195C85]/20 hover:-translate-y-0.5 hover:bg-[#144b6d] focus:ring-[#7CCBAE]/40"
      : "border border-[#195C85]/20 bg-white text-[#195C85] hover:-translate-y-0.5 hover:border-[#25A77A]/40 hover:bg-[#F8FAF7] focus:ring-[#7CCBAE]/30";

  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
      <ArrowIcon className={`h-4 w-4 ${isAr ? "rotate-180" : ""}`} />
    </a>
  );
}

function LanguageToggle({ lang, setLang }) {
  const isAr = lang === "ar";

  return (
    <div className="flex items-center rounded-full border border-[#195C85]/15 bg-white p-1 text-xs font-bold shadow-sm">
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`rounded-full px-3 py-2 transition ${
          lang === "en" ? "bg-[#195C85] text-white" : "text-[#195C85] hover:bg-[#F8FAF7]"
        }`}
      >
        {isAr ? "الإنجليزية" : "EN"}
      </button>
      <button
        type="button"
        onClick={() => setLang("ar")}
        className={`rounded-full px-3 py-2 transition ${
          lang === "ar" ? "bg-[#195C85] text-white" : "text-[#195C85] hover:bg-[#F8FAF7]"
        }`}
      >
        {isAr ? "العربية" : "AR"}
      </button>
    </div>
  );
}

function Logo({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="h-10 w-auto max-w-[210px] object-contain md:h-12 md:max-w-[250px]"
    />
  );
}

function FullLogo({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="h-auto w-full max-w-[320px] object-contain"
    />
  );
}

function HeroLogoVisual({ copy }) {
  return (
    <div className="relative mx-auto flex h-[360px] w-full max-w-[500px] items-center justify-center md:h-[470px]">
      <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#7CCBAE]/25 via-white to-[#F1912E]/10 blur-2xl" />

      <div className="relative w-full max-w-[420px] rounded-[3rem] border border-[#195C85]/10 bg-white/90 p-8 shadow-2xl shadow-[#195C85]/15 backdrop-blur md:p-10">
        <img
          src={logoMark}
          alt={copy.symbolAlt}
          className="mx-auto h-auto w-full max-w-[300px] object-contain md:max-w-[340px]"
        />

        <div className="mx-auto mt-8 max-w-[280px] rounded-3xl border border-[#25A77A]/20 bg-[#F8FAF7] px-5 py-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#25A77A]">
            {copy.statusTop}
          </p>
          <p className="mt-1 text-sm font-bold text-[#14232B]">
            {copy.statusBottom}
          </p>
        </div>
      </div>
    </div>
  );
}

function Card({ icon, title, text }) {
  return (
    <div className="group rounded-[2rem] border border-[#195C85]/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#195C85]/10">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F8FAF7] text-2xl ring-1 ring-[#7CCBAE]/30 transition-colors group-hover:bg-[#195C85]">
        <span aria-hidden="true">{icon}</span>
      </div>
      <h3 className="text-lg font-extrabold text-[#14232B]">{title}</h3>
      <p className="mt-3 leading-7 text-[#14232B]/70">{text}</p>
    </div>
  );
}

export default function SyrianHumanistsWebsite() {
  const [lang, setLang] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const copy = content[lang];
  const isAr = lang === "ar";
  const headerLogo = isAr ? logoHeaderAr : logoHeader;
  const footerLogo = isAr ? logoFullAr : logoFull;
  const align = isAr ? "text-right" : "text-left";

 return (
  <div
    dir={isAr ? "rtl" : "ltr"}
    lang={lang}
    style={{
      fontFamily: isAr
        ? '"IBM Plex Sans Arabic", sans-serif'
        : '"Manrope", sans-serif',
    }}
    className="min-h-screen scroll-smooth bg-[#F8FAF7] text-[#14232B]"
  >
      <header className="sticky top-0 z-50 border-b border-[#195C85]/10 bg-[#F8FAF7]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" aria-label={copy.logoAlt}>
            <Logo src={headerLogo} alt={copy.logoAlt} />
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {copy.nav.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm font-semibold text-[#14232B]/70 transition hover:text-[#195C85]"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <LanguageToggle lang={lang} setLang={setLang} />
            <Button href="#contact" isAr={isAr}>
              {copy.cta}
            </Button>
          </div>

          <button
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#195C85]/10 bg-white text-[#195C85] lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={isAr ? "فتح القائمة" : "Open menu"}
            type="button"
          >
            {menuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-[#195C85]/10 bg-white px-5 py-5 lg:hidden">
            <div className="flex flex-col gap-4">
              {copy.nav.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="font-semibold text-[#14232B]/80"
                >
                  {label}
                </a>
              ))}
              <LanguageToggle lang={lang} setLang={setLang} />
              <Button href="#contact" isAr={isAr}>
                {copy.cta}
              </Button>
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <section className="relative overflow-hidden px-5 pb-20 pt-14 lg:px-8 lg:pb-28 lg:pt-20">
          <AmbientAura isAr={isAr} />

          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className={align}>
              <SectionLabel>{copy.badge}</SectionLabel>
              <h1 className="max-w-4xl text-5xl font-black leading-[1.04] tracking-tight text-[#14232B] sm:text-6xl lg:text-7xl">
                {copy.heroTitle}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#14232B]/72 sm:text-xl">
                {copy.heroText}
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button href="#about" isAr={isAr}>
                  {copy.learnMore}
                </Button>
                <Button href="#contact" variant="secondary" isAr={isAr}>
                  {copy.support}
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {copy.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#25A77A]/20 bg-white/70 px-4 py-2 text-sm font-semibold text-[#195C85]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <HeroLogoVisual copy={copy} />
          </div>
        </section>

        <section id="about" className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div className={align}>
                <SectionLabel>{copy.aboutLabel}</SectionLabel>
                <h2 className="text-4xl font-black tracking-tight text-[#195C85] md:text-5xl">
                  {copy.aboutTitle}
                </h2>
              </div>

              <div className="rounded-[2.5rem] border border-[#195C85]/10 bg-white p-8 shadow-sm md:p-10">
                <p className="text-xl leading-9 text-[#14232B]/80">{copy.aboutText1}</p>
                <p className="mt-6 leading-8 text-[#14232B]/70">{copy.aboutText2}</p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {copy.aboutCards.map(([title, text]) => (
                    <div
                      key={title}
                      className="rounded-2xl bg-[#F8FAF7] p-4 ring-1 ring-[#7CCBAE]/25"
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#25A77A]">
                        {title}
                      </p>
                      <p className="mt-2 text-sm font-bold leading-6 text-[#14232B]">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="vision" className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-6xl text-center">
            <SectionLabel>{copy.visionLabel}</SectionLabel>
            <h2 className="text-4xl font-black leading-tight tracking-tight text-[#195C85] md:text-6xl">
              {copy.visionTitle}
            </h2>
          </div>
        </section>

        <section className="px-5 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
            <div className="rounded-[2.5rem] bg-[#195C85] p-8 text-white shadow-xl shadow-[#195C85]/20 md:p-10">
              <SectionLabel>{copy.missionLabel}</SectionLabel>
              <h2 className="text-3xl font-black md:text-4xl">{copy.missionTitle}</h2>
              <p className="mt-6 leading-8 text-white/82">{copy.missionText}</p>
            </div>

            <div className="rounded-[2.5rem] border border-[#25A77A]/20 bg-white p-8 shadow-sm md:p-10">
              <SectionLabel>{copy.whyLabel}</SectionLabel>
              <h2 className="text-3xl font-black text-[#14232B] md:text-4xl">
                {copy.whyTitle}
              </h2>
              <p className="mt-6 leading-8 text-[#14232B]/70">{copy.whyText}</p>
            </div>
          </div>
        </section>

        <section id="values" className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <SectionLabel>{copy.valuesLabel}</SectionLabel>
              <h2 className="text-4xl font-black tracking-tight text-[#14232B] md:text-5xl">
                {copy.valuesTitle}
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#14232B]/70">
                {copy.valuesText}
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {copy.values.map(([icon, title, text]) => (
                <Card key={title} icon={icon} title={title} text={text} />
              ))}
            </div>
          </div>
        </section>

        <section id="building" className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div className={align}>
                <SectionLabel>{copy.buildingLabel}</SectionLabel>
                <h2 className="text-4xl font-black tracking-tight text-[#195C85] md:text-5xl">
                  {copy.buildingTitle}
                </h2>
              </div>
              <p className="text-lg leading-8 text-[#14232B]/70">{copy.buildingText}</p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {copy.building.map(([icon, title, text]) => (
                <Card key={title} icon={icon} title={title} text={text} />
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[3rem] border border-[#195C85]/10 bg-white p-8 shadow-sm md:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div className={align}>
                <SectionLabel>{copy.principlesLabel}</SectionLabel>
                <h2 className="text-4xl font-black tracking-tight text-[#14232B] md:text-5xl">
                  {copy.principlesTitle}
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {copy.principles.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-[#F8FAF7] p-4 ring-1 ring-[#7CCBAE]/25"
                  >
                    <div className="mt-1 h-3 w-3 rounded-full bg-[#F1912E]" />
                    <p className="font-bold text-[#14232B]/85">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
            <div className="rounded-[2.5rem] border border-[#195C85]/10 bg-white p-8 shadow-sm md:p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#195C85] text-2xl text-white">
                🔐
              </div>
              <h2 className="text-3xl font-black text-[#14232B] md:text-4xl">
                {copy.safetyTitle}
              </h2>
              <p className="mt-6 leading-8 text-[#14232B]/70">{copy.safetyText}</p>
            </div>

            <div className="rounded-[2.5rem] border border-[#25A77A]/20 bg-[#F8FAF7] p-8 shadow-sm md:p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25A77A] text-2xl text-white">
                🌿
              </div>
              <h2 className="text-3xl font-black text-[#14232B] md:text-4xl">
                {copy.inspirationTitle}
              </h2>
              <p className="mt-6 leading-8 text-[#14232B]/70">{copy.inspirationText}</p>
            </div>
          </div>
        </section>

        <section id="faq" className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <SectionLabel>{copy.faqLabel}</SectionLabel>
              <h2 className="text-4xl font-black tracking-tight text-[#195C85] md:text-5xl">
                {copy.faqTitle}
              </h2>
            </div>

            <div className="space-y-4">
              {copy.faqs.map(([q, a], index) => (
                <div
                  key={q}
                  className="overflow-hidden rounded-3xl border border-[#195C85]/10 bg-white shadow-sm"
                >
                  <button
                    className="flex w-full items-center justify-between gap-6 p-6 text-start"
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                    type="button"
                  >
                    <span className="text-lg font-extrabold text-[#14232B]">{q}</span>
                    <ChevronIcon
                      className={`h-5 w-5 shrink-0 text-[#195C85] transition-transform ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openFaq === index && (
                    <p className="px-6 pb-6 leading-8 text-[#14232B]/70">{a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[3rem] bg-[#195C85] text-white shadow-2xl shadow-[#195C85]/20">
            <div className="grid gap-8 p-8 md:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:p-16">
              <div className={align}>
                <SectionLabel>{copy.contactLabel}</SectionLabel>
                <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                  {copy.contactTitle}
                </h2>
                <p className="mt-6 max-w-2xl leading-8 text-white/82">
                  {copy.contactText}
                </p>

                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="mailto:hello@syrianhumanists.org"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#195C85] transition hover:-translate-y-0.5 hover:bg-[#F8FAF7]"
                  >
                    <MailIcon className="h-4 w-4" /> {copy.contactButton}
                  </a>

                  <a
                    href="#building"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                  >
                    {copy.contactSupport}
                    <ArrowIcon className={`h-4 w-4 ${isAr ? "rotate-180" : ""}`} />
                  </a>
                </div>
              </div>

              <div className="rounded-[2rem] bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7CCBAE]">
                  {copy.needsTitle}
                </p>
                <ul className="mt-5 space-y-4 text-white/86">
                  {copy.needs.map((need) => (
                    <li key={need}>• {need}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#195C85]/10 bg-white px-5 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <FullLogo src={footerLogo} alt={copy.logoAlt} />
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#14232B]/65">
              {copy.footerText}
            </p>
          </div>

          <div className="flex flex-wrap gap-5 text-sm font-semibold text-[#14232B]/65">
            {copy.nav.map(([label, href]) => (
              <a key={href} href={href} className="hover:text-[#195C85]">
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-[#195C85]/10 pt-6 text-sm text-[#14232B]/50">
          © {new Date().getFullYear()} {copy.copyright}
        </div>
      </footer>
    </div>
  );
}
