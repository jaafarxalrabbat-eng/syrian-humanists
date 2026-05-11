import React, { useMemo, useState } from "react";

export default function App() {
  const [dark, setDark] = useState(false);
  const [lang, setLang] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const t = useMemo(() => content[lang], [lang]);
  const isAr = lang === "ar";

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main className={`${dark ? "dark" : ""} app`} dir={isAr ? "rtl" : "ltr"}>
      <style>{styles}</style>

      <header className="header">
        <button className="logo" onClick={() => scrollTo("home")} aria-label="Home">
          <span>SYRIAN</span>
          <strong>HUMANISTS</strong>
          <small>.org</small>
        </button>

        <nav className="desktopNav">
          {t.nav.map((item) => (
            <button key={item.id} onClick={() => scrollTo(item.id)}>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="actions">
          <button className="themeBtn" onClick={() => setDark(!dark)} aria-label="Toggle theme">
            {dark ? t.light : t.dark}
          </button>

          <button className="iconBtn menuBtn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </header>

      {menuOpen && (
        <section className="mobileMenu">
          {t.nav.map((item) => (
            <button key={item.id} onClick={() => scrollTo(item.id)}>
              {item.label}
            </button>
          ))}

          <div className="mobileControls">
            <button onClick={() => setDark(!dark)}>{dark ? t.light : t.dark}</button>

            <div className="langToggle">
              <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>
                EN
              </button>
              <button className={lang === "ar" ? "active" : ""} onClick={() => setLang("ar")}>
                AR
              </button>
            </div>
          </div>

          <button className="primary full" onClick={() => scrollTo("contact")}>
            {t.start}
          </button>
        </section>
      )}

      <section id="home" className="hero">
        <div className="badge">{t.badge}</div>

        <h1>
          {t.heroTitle.part1}
          <span className="green">{t.heroTitle.part2}</span>
          {t.heroTitle.part3}
          <span className="orange">{t.heroTitle.part4}</span>
        </h1>

        <p className="heroText">{t.heroText}</p>

        <div className="heroButtons">
          <button className="primary" onClick={() => scrollTo("about")}>
            {t.learnMore} <span>{isAr ? "←" : "→"}</span>
          </button>

          <button className="secondary" onClick={() => scrollTo("contact")}>
            {t.support}
          </button>
        </div>

        <div className="chips">
          {t.chips.map((chip) => (
            <span key={chip}>{chip}</span>
          ))}
        </div>
      </section>

      <section id="about" className="section card">
        <span className="sectionLabel">{t.about.label}</span>
        <h2>{t.about.title}</h2>
        <p>{t.about.text1}</p>
        <p>{t.about.text2}</p>

        <div className="infoGrid">
          {t.about.cards.map((card) => (
            <div className="miniCard" key={card.title}>
              <small>{card.title}</small>
              <strong>{card.text}</strong>
            </div>
          ))}
        </div>
      </section>

      <section id="vision" className="section center">
        <span className="sectionLabel">{t.vision.label}</span>
        <h2>{t.vision.title}</h2>

        <div className="card soft">
          <span className="sectionLabel">{t.mission.label}</span>
          <h3>{t.mission.title}</h3>
          <p>{t.mission.text}</p>
        </div>
      </section>

      <section className="section card">
        <span className="sectionLabel">{t.why.label}</span>
        <h2>{t.why.title}</h2>
        <p>{t.why.text}</p>
      </section>

      <section id="values" className="section">
        <div className="center narrow">
          <span className="sectionLabel">{t.values.label}</span>
          <h2>{t.values.title}</h2>
          <p>{t.values.text}</p>
        </div>

        <div className="valueGrid">
          {t.values.items.map((item) => (
            <div className="valueCard" key={item.title}>
              <span className="emoji">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="building" className="section card">
        <span className="sectionLabel">{t.building.label}</span>
        <h2>{t.building.title}</h2>
        <p>{t.building.text}</p>

        <div className="infoGrid">
          {t.building.items.map((item) => (
            <div className="miniCard" key={item.title}>
              <small>{item.title}</small>
              <strong>{item.text}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section card">
        <span className="sectionLabel">{t.principles.label}</span>
        <h2>{t.principles.title}</h2>

        <div className="principles">
          {t.principles.items.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="section card">
        <span className="emoji large">🔐</span>
        <h2>{t.safety.title}</h2>
        <p>{t.safety.text}</p>
      </section>

      <section className="section card">
        <span className="emoji large">🌿</span>
        <h2>{t.inspired.title}</h2>
        <p>{t.inspired.text}</p>
      </section>

      <section id="faq" className="section">
        <div className="center narrow">
          <span className="sectionLabel">FAQ</span>
          <h2>{t.faqTitle}</h2>
        </div>

        <div className="faq">
          {t.faq.map((item, index) => (
            <div className="faqItem" key={item.q}>
              <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                <strong>{item.q}</strong>
                <span>{openFaq === index ? "−" : "+"}</span>
              </button>

              {openFaq === index && <p>{item.a}</p>}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact card">
        <span className="sectionLabel">{t.contact.label}</span>
        <h2>{t.contact.title}</h2>
        <p>{t.contact.text}</p>

        <button
          className="primary"
          onClick={() => {
            window.location.href = "mailto:contact@syrianhumanists.org";
          }}
        >
          {t.start} <span>{isAr ? "←" : "→"}</span>
        </button>

        <button className="textBtn" onClick={() => scrollTo("building")}>
          {t.support}
        </button>
      </section>

      <footer className="footer">
        <button className="logo footerLogo" onClick={() => scrollTo("home")}>
          <span>SYRIAN</span>
          <strong>HUMANISTS</strong>
          <small>.org</small>
        </button>

        <p>{t.footer}</p>

        <div className="footerLinks">
          {t.nav.map((item) => (
            <button key={item.id} onClick={() => scrollTo(item.id)}>
              {item.label}
            </button>
          ))}
        </div>

        <p className="copy">© 2026 Syrian Humanists. Independent initiative in development.</p>
      </footer>

      <div className="fixedLang">
        <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>
          EN
        </button>
        <button className={lang === "ar" ? "active" : ""} onClick={() => setLang("ar")}>
          AR
        </button>
      </div>
    </main>
  );
}

const content = {
  en: {
    nav: [
      { id: "about", label: "About" },
      { id: "vision", label: "Vision" },
      { id: "values", label: "Values" },
      { id: "building", label: "Building" },
      { id: "faq", label: "FAQ" },
    ],
    badge: "Independent initiative in development",
    heroTitle: {
      part1: "A calm voice for ",
      part2: "dignity",
      part3: ", conscience, and human ",
      part4: "solidarity.",
    },
    heroText:
      "Syrian Humanists is an early-stage initiative for Syrians who value freedom of conscience, critical thinking, and human dignity.",
    learnMore: "Learn More",
    support: "Support the Development",
    start: "Start a Conversation",
    dark: "Dark",
    light: "Light",
    chips: ["Freedom of conscience", "Critical thinking", "Peaceful dialogue"],
    about: {
      label: "About",
      title: "What Syrian Humanists is becoming",
      text1:
        "Syrian Humanists is being developed as a careful intellectual and human support initiative for Syrians who seek dignity, meaning, and ethical self-direction beyond inherited fear or silence.",
      text2:
        "It is currently in feasibility study and concept development. The aim is not speed. The aim is responsibility.",
      cards: [
        { title: "Current status", text: "Planning & concept development" },
        { title: "Core aim", text: "Safe support network & humanist content" },
        { title: "Focus", text: "Syrian free thinkers and young people" },
        { title: "In development", text: "Careful before scale" },
      ],
    },
    vision: {
      label: "Vision",
      title: "A future where every Syrian can live with dignity, think freely, and belong without fear.",
    },
    mission: {
      label: "Mission",
      title: "Building careful foundations before scale.",
      text:
        "The mission is to develop safe intellectual, ethical, and humanistic resources and networks for Syrians who need a calmer language for conscience, dignity, and responsibility.",
    },
    why: {
      label: "Why it matters",
      title: "The need is human before it is organizational.",
      text:
        "Many people who move toward secular or humanist values face isolation, pressure, and the need to hide. Syrian Humanists exists as a developing response to that human need.",
    },
    values: {
      label: "Values",
      title: "The moral language of the project",
      text:
        "Simple values, held carefully. No hostility. No slogans. Just a humane foundation for thinking and living together.",
      items: [
        {
          icon: "🤝",
          title: "Human Dignity",
          text: "Every person deserves respect, safety, and freedom from humiliation or fear.",
        },
        {
          icon: "🧭",
          title: "Freedom of Conscience",
          text: "People should be able to believe, not believe, question, and think without coercion.",
        },
        {
          icon: "🧠",
          title: "Critical Thinking",
          text: "We value reason, honest inquiry, and the courage to examine ideas carefully.",
        },
        {
          icon: "💬",
          title: "Peaceful Dialogue",
          text: "Difficult questions need calm conversations, not hostility or fear.",
        },
        {
          icon: "👥",
          title: "Solidarity",
          text: "No one should feel alone because of their convictions or search for meaning.",
        },
        {
          icon: "⚖️",
          title: "Responsibility",
          text: "Freedom becomes stronger when joined with care, ethics, and responsibility toward others.",
        },
      ],
    },
    building: {
      label: "What we are building",
      title: "A responsible platform, not a loud campaign.",
      text:
        "Because the initiative is still developing, the language is intentionally careful. The goal is to design safe, useful, and realistic pathways before making public promises.",
      items: [
        {
          title: "Humanistic resources",
          text: "Educational Arabic-language content on ethics, dignity, critical thinking, and meaning.",
        },
        {
          title: "Safe community",
          text: "A future privacy-conscious space where Syrians can connect and reflect carefully.",
        },
        {
          title: "Dialogue and reflection",
          text: "Constructive conversations about identity, belonging, rights, and responsibility.",
        },
        {
          title: "Freedom of conscience",
          text: "Awareness around the right to believe, not believe, question, and think freely.",
        },
      ],
    },
    principles: {
      label: "Principles",
      title: "Clear boundaries make the project safer.",
      items: [
        "Peace, not hostility",
        "People, not hatred",
        "Respect for belief and non-belief",
        "No violence, coercion, or dehumanization",
        "Dialogue over fear",
        "Safety and privacy first",
      ],
    },
    safety: {
      title: "Safety and privacy first",
      text:
        "Privacy, anonymity, and careful communication are central to the project. Syrian Humanists will build with caution, consultation, and realistic safety standards.",
    },
    inspired: {
      title: "Inspired by humanist traditions",
      text:
        "The initiative is inspired by wider humanist traditions, including movements such as Humanistisch Verbond. Syrian Humanists remains an independent initiative in development and is not presented as an official affiliate of any organization.",
    },
    faqTitle: "Clear answers, careful language",
    faq: [
      {
        q: "What is Syrian Humanists?",
        a:
          "Syrian Humanists is an independent initiative in development. It aims to create a safe, humane, and intellectually honest space for Syrians who value dignity, freedom of conscience, critical thinking, and peaceful coexistence.",
      },
      {
        q: "Is this a political project?",
        a:
          "No. It is not a party, political movement, or campaign. It is a developing humanist and educational initiative focused on conscience, dignity, and careful dialogue.",
      },
      {
        q: "Is this an anti-religion project?",
        a:
          "No. The project is not about hostility toward religion or believers. It supports freedom of conscience, including the right to believe, not believe, question, and think freely.",
      },
      {
        q: "Who is it for?",
        a:
          "It is mainly for Syrians who seek a safe language for free thought, humanist ethics, dignity, and belonging without fear.",
      },
      {
        q: "Is the project already registered?",
        a:
          "No. It is currently an independent initiative in development. Legal, ethical, and organizational questions are being studied carefully before any formal growth.",
      },
    ],
    contact: {
      label: "Contact / Join",
      title: "Help shape the idea carefully.",
      text:
        "At this stage, thoughtful feedback matters more than scale. Connect if you want to share advice, ask questions, contribute to the idea, or start a respectful conversation.",
    },
    footer:
      "Syrian Humanists — dignity, conscience, solidarity. An independent initiative in development.",
  },

  ar: {
    nav: [
      { id: "about", label: "عن المبادرة" },
      { id: "vision", label: "الرؤية" },
      { id: "values", label: "القيم" },
      { id: "building", label: "ما نبنيه" },
      { id: "faq", label: "أسئلة" },
    ],
    badge: "مبادرة مستقلة قيد التطوير",
    heroTitle: {
      part1: "صوت هادئ من أجل ",
      part2: "الكرامة",
      part3: "، الضمير، و",
      part4: "التضامن الإنساني.",
    },
    heroText:
      "Syrian Humanists مبادرة في مرحلة مبكرة للسوريين الذين يقدّرون حرية الضمير، التفكير النقدي، والكرامة الإنسانية.",
    learnMore: "اعرف أكثر",
    support: "دعم التطوير",
    start: "ابدأ محادثة",
    dark: "داكن",
    light: "فاتح",
    chips: ["حرية الضمير", "التفكير النقدي", "حوار سلمي"],
    about: {
      label: "عن المبادرة",
      title: "ما الذي تسعى Syrian Humanists إلى بنائه",
      text1:
        "تتطور Syrian Humanists كمبادرة فكرية وإنسانية حذرة للسوريين الذين يبحثون عن الكرامة والمعنى والتوجيه الأخلاقي بعيداً عن الخوف أو الصمت الموروث.",
      text2:
        "المبادرة حالياً في مرحلة دراسة الجدوى وتطوير الفكرة. الهدف ليس السرعة، بل المسؤولية.",
      cards: [
        { title: "الوضع الحالي", text: "تخطيط وتطوير الفكرة" },
        { title: "الهدف الأساسي", text: "شبكة دعم آمنة ومحتوى إنساني" },
        { title: "التركيز", text: "السوريون الأحرار فكرياً والشباب" },
        { title: "قيد التطوير", text: "حذر قبل التوسع" },
      ],
    },
    vision: {
      label: "الرؤية",
      title: "مستقبل يستطيع فيه كل سوري أن يعيش بكرامة، يفكر بحرية، وينتمي بلا خوف.",
    },
    mission: {
      label: "المهمة",
      title: "بناء أساسات حذرة قبل التوسع.",
      text:
        "المهمة هي تطوير موارد وشبكات فكرية وأخلاقية وإنسانية آمنة للسوريين الذين يحتاجون لغة أهدأ للضمير والكرامة والمسؤولية.",
    },
    why: {
      label: "لماذا يهم",
      title: "الحاجة إنسانية قبل أن تكون تنظيمية.",
      text:
        "كثيرون ممن يتجهون نحو قيم علمانية أو إنسانية يواجهون العزلة والضغط والحاجة إلى الإخفاء. تأتي المبادرة كاستجابة إنسانية لهذه الحاجة.",
    },
    values: {
      label: "القيم",
      title: "اللغة الأخلاقية للمشروع",
      text:
        "قيم بسيطة وحذرة. لا عداء. لا شعارات. فقط أساس إنساني للتفكير والعيش معاً.",
      items: [
        {
          icon: "🤝",
          title: "الكرامة الإنسانية",
          text: "كل إنسان يستحق الاحترام والأمان والعيش بلا إهانة أو خوف.",
        },
        {
          icon: "🧭",
          title: "حرية الضمير",
          text: "للناس حق الإيمان أو عدم الإيمان أو السؤال أو التفكير دون إكراه.",
        },
        {
          icon: "🧠",
          title: "التفكير النقدي",
          text: "نقدّر العقل والبحث الصادق والشجاعة في فحص الأفكار بهدوء.",
        },
        {
          icon: "💬",
          title: "حوار سلمي",
          text: "الأسئلة الصعبة تحتاج حواراً هادئاً لا عداء ولا خوفاً.",
        },
        {
          icon: "👥",
          title: "التضامن",
          text: "لا ينبغي لأحد أن يشعر بالوحدة بسبب قناعته أو بحثه عن المعنى.",
        },
        {
          icon: "⚖️",
          title: "المسؤولية",
          text: "تصبح الحرية أقوى عندما ترتبط بالعناية والأخلاق والمسؤولية تجاه الآخرين.",
        },
      ],
    },
    building: {
      label: "ما نبنيه",
      title: "منصة مسؤولة، لا حملة صاخبة.",
      text:
        "لأن المبادرة لا تزال قيد التطوير، فاللغة مقصودة وحذرة. الهدف هو تصميم مسارات آمنة ومفيدة وواقعية قبل إطلاق وعود عامة.",
      items: [
        {
          title: "موارد إنسانية",
          text: "محتوى عربي تعليمي حول الأخلاق والكرامة والتفكير النقدي والمعنى.",
        },
        {
          title: "مجتمع آمن",
          text: "مساحة مستقبلية واعية بالخصوصية للتواصل والتأمل بحذر.",
        },
        {
          title: "حوار وتأمل",
          text: "محادثات بناءة حول الهوية والانتماء والحقوق والمسؤولية.",
        },
        {
          title: "حرية الضمير",
          text: "توعية بحق الإيمان أو عدم الإيمان أو السؤال أو التفكير بحرية.",
        },
      ],
    },
    principles: {
      label: "المبادئ",
      title: "الحدود الواضحة تجعل المشروع أكثر أماناً.",
      items: [
        "سلام لا عداء",
        "الناس لا الكراهية",
        "احترام الإيمان وعدم الإيمان",
        "لا عنف ولا إكراه ولا نزع للإنسانية",
        "الحوار بدل الخوف",
        "السلامة والخصوصية أولاً",
      ],
    },
    safety: {
      title: "السلامة والخصوصية أولاً",
      text:
        "الخصوصية وإمكانية إخفاء الهوية والتواصل الحذر عناصر مركزية في المشروع. سيتم البناء بحذر واستشارة ومعايير واقعية للسلامة.",
    },
    inspired: {
      title: "مستوحاة من التقاليد الإنسانية",
      text:
        "المبادرة مستوحاة من تقاليد إنسانية أوسع، ومنها Humanistisch Verbond. تبقى Syrian Humanists مبادرة مستقلة قيد التطوير ولا تُقدَّم كفرع رسمي لأي منظمة.",
    },
    faqTitle: "إجابات واضحة بلغة حذرة",
    faq: [
      {
        q: "ما هي Syrian Humanists؟",
        a:
          "هي مبادرة مستقلة قيد التطوير تهدف إلى خلق مساحة آمنة وإنسانية وصادقة فكرياً للسوريين الذين يقدّرون الكرامة وحرية الضمير والتفكير النقدي والتعايش السلمي.",
      },
      {
        q: "هل هذا مشروع سياسي؟",
        a:
          "لا. ليست حزباً أو حركة سياسية أو حملة. هي مبادرة إنسانية وتعليمية قيد التطوير تركّز على الضمير والكرامة والحوار الحذر.",
      },
      {
        q: "هل هي ضد الدين؟",
        a:
          "لا. المشروع لا يقوم على العداء للدين أو المؤمنين. هو يدعم حرية الضمير، بما فيها حق الإيمان أو عدم الإيمان أو السؤال أو التفكير بحرية.",
      },
      {
        q: "لمن هي؟",
        a:
          "بالأساس للسوريين الذين يبحثون عن لغة آمنة للفكر الحر، الأخلاق الإنسانية، الكرامة، والانتماء بلا خوف.",
      },
      {
        q: "هل المشروع مسجل رسمياً؟",
        a:
          "لا. هو حالياً مبادرة مستقلة قيد التطوير. تتم دراسة الجوانب القانونية والأخلاقية والتنظيمية بحذر قبل أي توسع رسمي.",
      },
    ],
    contact: {
      label: "تواصل / مشاركة",
      title: "ساهم في تشكيل الفكرة بحذر.",
      text:
        "في هذه المرحلة، الملاحظات الجادة أهم من التوسع. تواصل إذا أردت تقديم نصيحة، طرح سؤال، المساهمة في الفكرة، أو بدء حوار محترم.",
    },
    footer: "Syrian Humanists — كرامة، ضمير، تضامن. مبادرة مستقلة قيد التطوير.",
  },
};

const styles = `
:root {
  --blue: #0d5f89;
  --blue2: #0a4d70;
  --green: #22aa7a;
  --orange: #f28b2e;
  --bg: #f7fcfb;
  --card: rgba(255,255,255,0.9);
  --text: #26343d;
  --muted: #5e6f7a;
  --line: #dfeceb;
  --shadow: 0 20px 55px rgba(13, 95, 137, 0.12);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: var(--bg);
  color: var(--text);
}

button {
  font: inherit;
}

.app {
  min-height: 100vh;
  background:
    radial-gradient(circle at top left, rgba(34, 170, 122, 0.12), transparent 34rem),
    radial-gradient(circle at top right, rgba(13, 95, 137, 0.10), transparent 30rem),
    var(--bg);
  color: var(--text);
  transition: background 0.25s ease, color 0.25s ease;
  overflow-x: hidden;
}

.app.dark {
  --bg: #071720;
  --card: rgba(10, 28, 38, 0.92);
  --text: #edf8f8;
  --muted: #abc0c8;
  --line: rgba(255,255,255,0.12);
  --shadow: 0 24px 60px rgba(0,0,0,0.28);
}

.header {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
  padding: 1.1rem clamp(1rem, 4vw, 4rem);
  border-bottom: 1px solid var(--line);
  background: rgba(247, 252, 251, 0.82);
  backdrop-filter: blur(18px);
}

.dark .header {
  background: rgba(7, 23, 32, 0.82);
}

.logo {
  border: 0;
  background: transparent;
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  line-height: 0.9;
  letter-spacing: -0.04em;
  color: var(--blue);
  padding: 0;
}

[dir="rtl"] .logo {
  align-items: flex-end;
  text-align: right;
}

.logo span {
  font-weight: 950;
  font-size: clamp(1.55rem, 4vw, 2.25rem);
}

.logo strong {
  color: var(--green);
  font-weight: 950;
  font-size: clamp(1rem, 2.4vw, 1.35rem);
}

.logo small {
  color: var(--muted);
  font-weight: 800;
  font-size: 0.72rem;
  letter-spacing: 0.02em;
  margin-top: 0.1rem;
}

.desktopNav {
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.desktopNav button,
.footerLinks button {
  border: 0;
  background: transparent;
  color: var(--muted);
  cursor: pointer;
  padding: 0.65rem 0.8rem;
  border-radius: 999px;
  font-weight: 700;
}

.desktopNav button:hover,
.footerLinks button:hover {
  color: var(--blue);
  background: rgba(13, 95, 137, 0.08);
}

.actions {
  display: flex;
  gap: 0.65rem;
  align-items: center;
}

.themeBtn {
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.45);
  color: var(--muted);
  cursor: pointer;
  border-radius: 999px;
  min-width: 4.4rem;
  height: 2.7rem;
  padding: 0 1rem;
  font-size: 0.82rem;
  font-weight: 850;
  letter-spacing: 0.02em;
  box-shadow: none;
}

.dark .themeBtn {
  background: rgba(255,255,255,0.04);
  color: var(--muted);
}

.themeBtn:hover {
  background: rgba(0,0,0,0.035);
  color: var(--text);
}

.dark .themeBtn:hover {
  background: rgba(255,255,255,0.08);
}

.iconBtn {
  width: 2.9rem;
  height: 2.9rem;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.45);
  color: var(--muted);
  cursor: pointer;
  box-shadow: none;
  font-size: 1.05rem;
  display: inline-grid;
  place-items: center;
}

.dark .iconBtn {
  background: rgba(255,255,255,0.04);
  color: var(--muted);
}

.iconBtn:hover {
  background: rgba(0,0,0,0.035);
  color: var(--text);
}

.dark .iconBtn:hover {
  background: rgba(255,255,255,0.08);
}

.menuBtn {
  display: none;
}

.mobileMenu {
  position: fixed;
  z-index: 19;
  top: 5.55rem;
  left: 1rem;
  right: 1rem;
  padding: 1rem;
  border-radius: 1.6rem;
  border: 1px solid var(--line);
  background: var(--card);
  backdrop-filter: blur(20px);
  box-shadow: var(--shadow);
  display: grid;
  gap: 0.4rem;
}

.mobileMenu > button:not(.primary) {
  border: 0;
  background: transparent;
  text-align: start;
  padding: 0.95rem 1rem;
  font-weight: 800;
  color: var(--text);
  border-radius: 1rem;
}

.mobileMenu > button:not(.primary):hover {
  background: rgba(13,95,137,0.08);
}

.mobileControls {
  margin-top: 0.4rem;
  padding-top: 0.8rem;
  border-top: 1px solid var(--line);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;
}

.mobileControls > button {
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.45);
  color: var(--muted);
  border-radius: 999px;
  padding: 0.75rem 1rem;
  font-weight: 800;
}

.dark .mobileControls > button {
  background: rgba(255,255,255,0.04);
}

.langToggle,
.fixedLang {
  display: inline-flex;
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 0.25rem;
  background: var(--card);
  box-shadow: 0 10px 25px rgba(13,95,137,0.08);
}

.langToggle button,
.fixedLang button {
  border: 0;
  background: transparent;
  color: var(--blue);
  font-weight: 900;
  border-radius: 999px;
  padding: 0.65rem 0.9rem;
  cursor: pointer;
}

.langToggle button.active,
.fixedLang button.active {
  background: var(--blue);
  color: white;
}

.fixedLang {
  position: fixed;
  right: 1.2rem;
  bottom: 1.2rem;
  z-index: 15;
}

[dir="rtl"] .fixedLang {
  right: auto;
  left: 1.2rem;
}

.hero {
  max-width: 1040px;
  margin: 0 auto;
  padding: clamp(2.4rem, 6vw, 5.2rem) clamp(1.2rem, 4vw, 2rem) clamp(2rem, 6vw, 4.2rem);
}

.badge,
.sectionLabel {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  border: 1px solid rgba(34,170,122,0.22);
  color: var(--blue);
  background: rgba(255,255,255,0.58);
  padding: 0.5rem 0.85rem;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.dark .badge,
.dark .sectionLabel {
  background: rgba(255,255,255,0.05);
}

.hero h1 {
  max-width: 880px;
  margin: 0;
  color: var(--blue);
  font-size: clamp(2.45rem, 8.2vw, 5.45rem);
  line-height: 0.98;
  letter-spacing: -0.075em;
  font-weight: 950;
}

.hero .green {
  color: var(--green);
}

.hero .orange {
  color: var(--orange);
}

.heroText {
  max-width: 720px;
  margin: 1.35rem 0 0;
  color: var(--muted);
  font-size: clamp(1.05rem, 2.6vw, 1.45rem);
  line-height: 1.65;
  font-weight: 520;
}

.heroButtons {
  display: flex;
  gap: 0.9rem;
  flex-wrap: wrap;
  margin-top: 1.8rem;
}

.primary,
.secondary,
.textBtn {
  border-radius: 999px;
  cursor: pointer;
  font-weight: 900;
  transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
}

.primary {
  border: 0;
  color: white;
  background: var(--blue);
  padding: 1rem 1.45rem;
  min-width: 12rem;
  box-shadow: 0 14px 30px rgba(13,95,137,0.20);
}

.secondary {
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.7);
  color: var(--blue);
  padding: 1rem 1.25rem;
}

.dark .secondary {
  background: rgba(255,255,255,0.05);
}

.primary:hover,
.secondary:hover,
.textBtn:hover {
  transform: translateY(-2px);
}

.full {
  width: 100%;
  margin-top: 0.6rem;
}

.chips {
  display: flex;
  gap: 0.65rem;
  flex-wrap: wrap;
  margin-top: 1.45rem;
}

.chips span {
  border: 1px solid rgba(34,170,122,0.22);
  color: var(--blue);
  padding: 0.65rem 0.9rem;
  border-radius: 999px;
  background: rgba(255,255,255,0.55);
  font-weight: 800;
  font-size: 0.92rem;
}

.dark .chips span {
  background: rgba(255,255,255,0.04);
}

.section {
  max-width: 980px;
  margin: 0 auto;
  padding: clamp(2.4rem, 6vw, 4.5rem) clamp(1.2rem, 4vw, 2rem);
}

.card {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 1px solid var(--line);
  background: var(--card);
  border-radius: 2rem;
  box-shadow: var(--shadow);
}

.soft {
  margin-top: 1.7rem;
  padding: clamp(1.3rem, 4vw, 2rem);
}

.center {
  text-align: center;
}

.narrow {
  max-width: 760px;
  margin-left: auto;
  margin-right: auto;
}

.section h2 {
  margin: 0;
  color: var(--blue);
  font-size: clamp(1.9rem, 5vw, 3.35rem);
  line-height: 1.08;
  letter-spacing: -0.055em;
}

.section h3 {
  margin: 0.4rem 0 0.55rem;
  color: var(--blue);
  font-size: clamp(1.1rem, 2vw, 1.45rem);
}

.section p {
  color: var(--muted);
  font-size: 1.03rem;
  line-height: 1.75;
  margin: 1rem 0 0;
}

.infoGrid,
.valueGrid {
  display: grid;
  gap: 1rem;
  margin-top: 1.6rem;
}

.infoGrid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.valueGrid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.miniCard,
.valueCard,
.faqItem {
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.56);
  border-radius: 1.4rem;
  padding: 1.15rem;
}

.dark .miniCard,
.dark .valueCard,
.dark .faqItem {
  background: rgba(255,255,255,0.04);
}

.miniCard small {
  display: block;
  color: var(--green);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 950;
  font-size: 0.72rem;
  margin-bottom: 0.45rem;
}

.miniCard strong {
  color: var(--text);
  font-size: 1rem;
}

.emoji {
  display: inline-grid;
  place-items: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 0.9rem;
  background: rgba(13,95,137,0.08);
  margin-bottom: 0.75rem;
}

.emoji.large {
  width: 3rem;
  height: 3rem;
  font-size: 1.4rem;
}

.principles {
  display: grid;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

.principles span {
  display: block;
  border: 1px solid var(--line);
  border-radius: 1rem;
  padding: 0.95rem 1rem;
  color: var(--text);
  background: rgba(255,255,255,0.45);
  font-weight: 800;
}

.dark .principles span {
  background: rgba(255,255,255,0.04);
}

.faq {
  max-width: 850px;
  margin: 1.5rem auto 0;
  display: grid;
  gap: 0.85rem;
}

.faqItem {
  padding: 0;
  overflow: hidden;
}

.faqItem button {
  width: 100%;
  border: 0;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: start;
  gap: 1rem;
  color: var(--text);
  padding: 1.1rem 1.2rem;
}

.faqItem button span {
  color: var(--blue);
  font-size: 1.4rem;
  font-weight: 900;
}

.faqItem p {
  margin: 0;
  padding: 0 1.2rem 1.2rem;
}

.contact {
  text-align: center;
}

.contact .primary {
  margin-top: 1.5rem;
}

.textBtn {
  display: block;
  margin: 1rem auto 0;
  border: 0;
  background: transparent;
  color: var(--muted);
  padding: 0.8rem;
}

.footer {
  max-width: 980px;
  margin: 2rem auto 0;
  padding: 3rem clamp(1.2rem, 4vw, 2rem) 5rem;
  border-top: 1px solid var(--line);
  color: var(--muted);
}

.footerLogo {
  margin-bottom: 1rem;
}

.footerLinks {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  margin-top: 1rem;
}

.copy {
  margin-top: 1.5rem;
  font-size: 0.9rem;
}

@media (max-width: 820px) {
  .desktopNav {
    display: none;
  }

  .menuBtn {
    display: inline-grid;
    place-items: center;
  }

  .fixedLang {
    display: none;
  }

  .header {
    padding: 1rem 1.1rem;
  }

  .logo span {
    font-size: 1.95rem;
  }

  .logo strong {
    font-size: 1.15rem;
  }

  .logo small {
    font-size: 0.68rem;
  }

  .themeBtn {
    min-width: 4rem;
    height: 2.65rem;
    padding: 0 0.85rem;
    font-size: 0.78rem;
  }

  .hero {
    padding-top: 2.25rem;
  }

  .hero h1 {
    font-size: clamp(2.25rem, 10.7vw, 3.85rem);
    line-height: 1.03;
  }

  .heroText {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-top: 1rem;
  }

  .heroButtons {
    display: grid;
    gap: 0.75rem;
    margin-top: 1.4rem;
  }

  .primary,
  .secondary {
    width: 100%;
    min-width: 0;
  }

  .chips {
    margin-top: 1.1rem;
    gap: 0.55rem;
  }

  .chips span {
    font-size: 0.86rem;
    padding: 0.55rem 0.75rem;
  }

  .infoGrid,
  .valueGrid {
    grid-template-columns: 1fr;
  }

  .card {
    border-radius: 1.55rem;
  }

  .section {
    padding-top: 2.4rem;
    padding-bottom: 2.4rem;
  }
}

@media (max-width: 430px) {
  .hero h1 {
    font-size: 2.35rem;
    letter-spacing: -0.065em;
  }

  .heroText {
    font-size: 1rem;
  }

  .badge,
  .sectionLabel {
    font-size: 0.68rem;
  }

  .iconBtn {
    width: 2.7rem;
    height: 2.7rem;
  }
}
`;
