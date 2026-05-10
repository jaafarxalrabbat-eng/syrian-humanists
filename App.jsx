import React, { useState } from "react";
import logoHeader from "./logo-Header.png";
import logoFull from "./logo-full.png";
import logoMark from "./logo-mark.png";

const nav = [
  { label: "About", href: "#about" },
  { label: "Vision", href: "#vision" },
  { label: "Values", href: "#values" },
  { label: "Building", href: "#building" },
  { label: "FAQ", href: "#faq" },
];

const values = [
  {
    icon: "🤝",
    title: "Human Dignity",
    text: "Every person deserves respect, safety, and the freedom to live without humiliation or fear.",
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
    text: "Freedom becomes stronger when it is joined with care, ethics, and responsibility toward others.",
  },
];

const building = [
  {
    icon: "✨",
    title: "Humanistic Resources",
    text: "We are developing educational and reflective Arabic-language content on humanist ethics, dignity, critical thinking, and meaning.",
  },
  {
    icon: "🛡️",
    title: "Safe Community",
    text: "We aim to build a future privacy-conscious space where thoughtful Syrians can connect, reflect, and support each other carefully.",
  },
  {
    icon: "💬",
    title: "Dialogue and Reflection",
    text: "We are shaping formats for constructive conversations about ethics, identity, belonging, human rights, and personal responsibility.",
  },
  {
    icon: "🌍",
    title: "Freedom of Conscience",
    text: "We hope to support awareness and careful documentation around the right to believe, not believe, question, and think freely.",
  },
];

const principles = [
  "Peace, not hostility",
  "People, not hatred",
  "Respect for belief and non-belief",
  "No violence, coercion, or dehumanization",
  "Dialogue over fear",
  "Safety and privacy first",
];

const faqs = [
  {
    q: "What is Syrian Humanists?",
    a: "Syrian Humanists is an independent initiative in development. It aims to create a safe, humane, and intellectually honest space for Syrians who value dignity, freedom of conscience, critical thinking, and peaceful coexistence.",
  },
  {
    q: "Is this a political project?",
    a: "No. The initiative is not built as a political campaign or party. Its focus is human dignity, conscience, ethical reflection, and safe dialogue.",
  },
  {
    q: "Is this an anti-religion project?",
    a: "No. Syrian Humanists respects both belief and non-belief. It does not exist to attack religious people, but to support freedom of conscience and humane coexistence.",
  },
  {
    q: "Who is it for?",
    a: "It is mainly for Syrians and Arabic-speaking free thinkers who feel the need for thoughtful resources, careful conversation, and a more humane ethical language.",
  },
  {
    q: "Is the project already registered?",
    a: "Not yet. It is currently in feasibility study and concept development, with legal and organizational groundwork being prepared for a responsible future structure.",
  },
  {
    q: "How can someone contribute or connect?",
    a: "At this stage, the most valuable contribution is thoughtful feedback, practical advice, careful collaboration, and respectful conversation about direction and viability.",
  },
];

function IconGlyph({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center justify-center leading-none ${className}`}
      aria-hidden="true"
    >
      {children}
    </span>
  );
}

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

function LogoMark({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={logoHeader}
        alt="Syrian Humanists logo"
        className="h-10 w-auto max-w-[210px] object-contain md:h-12 md:max-w-[250px]"
      />
    </div>
  );
}

function FullLogo({ className = "" }) {
  return (
    <img
      src={logoFull}
      alt="Syrian Humanists full logo"
      className={`h-auto w-full max-w-[320px] object-contain ${className}`}
    />
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

function Button({ children, variant = "primary", href = "#contact" }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 focus:outline-none focus:ring-4";

  const styles =
    variant === "primary"
      ? "bg-[#195C85] text-white shadow-lg shadow-[#195C85]/20 hover:-translate-y-0.5 hover:bg-[#144b6d] focus:ring-[#7CCBAE]/40"
      : "border border-[#195C85]/20 bg-white text-[#195C85] hover:-translate-y-0.5 hover:border-[#25A77A]/40 hover:bg-[#F8FAF7] focus:ring-[#7CCBAE]/30";

  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
      <ArrowIcon className="h-4 w-4" />
    </a>
  );
}

function HeroLogoVisual() {
  return (
    <div className="relative mx-auto flex h-[360px] w-full max-w-[500px] items-center justify-center md:h-[470px]">
      <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#7CCBAE]/25 via-white to-[#F1912E]/10 blur-2xl" />

      <div className="relative w-full max-w-[420px] rounded-[3rem] border border-[#195C85]/10 bg-white/90 p-8 shadow-2xl shadow-[#195C85]/15 backdrop-blur md:p-10">
        <img
          src={logoMark}
          alt="Syrian Humanists symbol"
          className="mx-auto h-auto w-full max-w-[300px] object-contain md:max-w-[340px]"
        />

        <div className="mx-auto mt-8 max-w-[280px] rounded-3xl border border-[#25A77A]/20 bg-[#F8FAF7] px-5 py-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#25A77A]">
            In development
          </p>
          <p className="mt-1 text-sm font-bold text-[#14232B]">
            Careful before scale
          </p>
        </div>
      </div>
    </div>
  );
}

function Card({ icon, title, children }) {
  return (
    <div className="group rounded-[2rem] border border-[#195C85]/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#195C85]/10">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F8FAF7] text-2xl ring-1 ring-[#7CCBAE]/30 transition-colors group-hover:bg-[#195C85]">
        <IconGlyph>{icon}</IconGlyph>
      </div>
      <h3 className="text-lg font-extrabold text-[#14232B]">{title}</h3>
      <p className="mt-3 leading-7 text-[#14232B]/70">{children}</p>
    </div>
  );
}

export default function SyrianHumanistsWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen scroll-smooth bg-[#F8FAF7] font-sans text-[#14232B]">
      <header className="sticky top-0 z-50 border-b border-[#195C85]/10 bg-[#F8FAF7]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" aria-label="Syrian Humanists home">
            <LogoMark />
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-[#14232B]/70 transition hover:text-[#195C85]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="#contact">Start a Conversation</Button>
          </div>

          <button
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#195C85]/10 bg-white text-[#195C85] lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
            type="button"
          >
            {menuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-[#195C85]/10 bg-white px-5 py-5 lg:hidden">
            <div className="flex flex-col gap-4">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-semibold text-[#14232B]/80"
                >
                  {item.label}
                </a>
              ))}
              <Button href="#contact">Start a Conversation</Button>
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <section className="relative overflow-hidden px-5 pb-20 pt-14 lg:px-8 lg:pb-28 lg:pt-20">
          <div className="absolute left-[-160px] top-[-160px] h-[360px] w-[360px] rounded-full bg-[#7CCBAE]/25 blur-3xl" />
          <div className="absolute bottom-[-180px] right-[-140px] h-[360px] w-[360px] rounded-full bg-[#F1912E]/10 blur-3xl" />

          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <SectionLabel>Independent initiative in development</SectionLabel>

              <h1 className="max-w-4xl text-5xl font-black leading-[1.04] tracking-tight text-[#14232B] sm:text-6xl lg:text-7xl">
                A calm voice for dignity, conscience, and human solidarity.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#14232B]/72 sm:text-xl">
                Syrian Humanists is an early-stage initiative to create a safe,
                humane, and intellectually honest space for Syrians who value
                freedom of conscience and often face pressure, isolation, or
                silence because of it.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button href="#about">Learn More</Button>
                <Button href="#contact" variant="secondary">
                  Support the Development
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {["Freedom of conscience", "Critical thinking", "Peaceful dialogue"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#25A77A]/20 bg-white/70 px-4 py-2 text-sm font-semibold text-[#195C85]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <HeroLogoVisual />
          </div>
        </section>

        <section id="about" className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <SectionLabel>About</SectionLabel>
                <h2 className="text-4xl font-black tracking-tight text-[#195C85] md:text-5xl">
                  What Syrian Humanists is becoming
                </h2>
              </div>

              <div className="rounded-[2.5rem] border border-[#195C85]/10 bg-white p-8 shadow-sm md:p-10">
                <p className="text-xl leading-9 text-[#14232B]/80">
                  Syrian Humanists is being developed as a careful intellectual
                  and human support initiative for Syrians who seek dignity,
                  meaning, and ethical self-direction beyond inherited fear or
                  silence.
                </p>

                <p className="mt-6 leading-8 text-[#14232B]/70">
                  It is currently in feasibility study and concept development.
                  The work now is to prepare the legal, ethical, organizational,
                  and human foundations before growth. The aim is not speed. The
                  aim is responsibility.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {[
                    ["Current status", "Planning & concept development"],
                    ["Core aim", "Safe support network & humanist content"],
                    ["Focus", "Syrian free thinkers and young people"],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="rounded-2xl bg-[#F8FAF7] p-4 ring-1 ring-[#7CCBAE]/25"
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#25A77A]">
                        {k}
                      </p>
                      <p className="mt-2 text-sm font-bold leading-6 text-[#14232B]">
                        {v}
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
            <SectionLabel>Vision</SectionLabel>
            <h2 className="text-4xl font-black leading-tight tracking-tight text-[#195C85] md:text-6xl">
              A future where every Syrian can live with dignity, think freely,
              and belong without fear.
            </h2>
          </div>
        </section>

        <section className="px-5 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
            <div className="rounded-[2.5rem] bg-[#195C85] p-8 text-white shadow-xl shadow-[#195C85]/20 md:p-10">
              <SectionLabel>Mission</SectionLabel>
              <h2 className="text-3xl font-black md:text-4xl">
                Building careful foundations before scale.
              </h2>
              <p className="mt-6 leading-8 text-white/82">
                The mission is to develop safe intellectual, ethical, and
                humanistic resources and networks for Syrians who need a calmer
                language for conscience, dignity, and responsibility.
              </p>
            </div>

            <div className="rounded-[2.5rem] border border-[#25A77A]/20 bg-white p-8 shadow-sm md:p-10">
              <SectionLabel>Why it matters</SectionLabel>
              <h2 className="text-3xl font-black text-[#14232B] md:text-4xl">
                The need is human before it is organizational.
              </h2>
              <p className="mt-6 leading-8 text-[#14232B]/70">
                Many people who move toward secular or humanist values face
                isolation, pressure, and the need to hide. Syrian Humanists
                exists as a developing response to that human need: dignity,
                meaning, belonging, and a non-dogmatic ethical alternative.
              </p>
            </div>
          </div>
        </section>

        <section id="values" className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <SectionLabel>Values</SectionLabel>
              <h2 className="text-4xl font-black tracking-tight text-[#14232B] md:text-5xl">
                The moral language of the project
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#14232B]/70">
                Simple values, held carefully. No hostility. No slogans. Just a
                humane foundation for thinking and living together.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {values.map((v) => (
                <Card key={v.title} icon={v.icon} title={v.title}>
                  {v.text}
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="building" className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <SectionLabel>What we are building</SectionLabel>
                <h2 className="text-4xl font-black tracking-tight text-[#195C85] md:text-5xl">
                  A responsible platform, not a loud campaign.
                </h2>
              </div>
              <p className="text-lg leading-8 text-[#14232B]/70">
                Because the initiative is still developing, the language is
                intentionally future-oriented. The goal is to design safe,
                useful, and realistic pathways before making public promises.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {building.map((b) => (
                <Card key={b.title} icon={b.icon} title={b.title}>
                  {b.text}
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[3rem] border border-[#195C85]/10 bg-white p-8 shadow-sm md:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <SectionLabel>Principles</SectionLabel>
                <h2 className="text-4xl font-black tracking-tight text-[#14232B] md:text-5xl">
                  Clear boundaries make the project safer.
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {principles.map((p) => (
                  <div
                    key={p}
                    className="flex items-start gap-3 rounded-2xl bg-[#F8FAF7] p-4 ring-1 ring-[#7CCBAE]/25"
                  >
                    <div className="mt-1 h-3 w-3 rounded-full bg-[#F1912E]" />
                    <p className="font-bold text-[#14232B]/85">{p}</p>
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
                <IconGlyph>🔐</IconGlyph>
              </div>
              <h2 className="text-3xl font-black text-[#14232B] md:text-4xl">
                Safety and privacy first
              </h2>
              <p className="mt-6 leading-8 text-[#14232B]/70">
                Privacy, anonymity, and careful communication are central to the
                project. Syrian Humanists will not make careless technical
                promises; it will build with caution, consultation, and realistic
                safety standards.
              </p>
            </div>

            <div className="rounded-[2.5rem] border border-[#25A77A]/20 bg-[#F8FAF7] p-8 shadow-sm md:p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25A77A] text-2xl text-white">
                <IconGlyph>🌿</IconGlyph>
              </div>
              <h2 className="text-3xl font-black text-[#14232B] md:text-4xl">
                Inspired by humanist traditions
              </h2>
              <p className="mt-6 leading-8 text-[#14232B]/70">
                The initiative is inspired by the wider humanist tradition:
                freedom, self-determination, responsibility, dignity, and care
                for others. It is not presented as an official affiliate of any
                organization.
              </p>
            </div>
          </div>
        </section>

        <section id="faq" className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="text-4xl font-black tracking-tight text-[#195C85] md:text-5xl">
                Clear answers, careful language
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((item, index) => (
                <div
                  key={item.q}
                  className="overflow-hidden rounded-3xl border border-[#195C85]/10 bg-white shadow-sm"
                >
                  <button
                    className="flex w-full items-center justify-between gap-6 p-6 text-left"
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                    type="button"
                  >
                    <span className="text-lg font-extrabold text-[#14232B]">
                      {item.q}
                    </span>
                    <ChevronIcon
                      className={`h-5 w-5 shrink-0 text-[#195C85] transition-transform ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openFaq === index && (
                    <p className="px-6 pb-6 leading-8 text-[#14232B]/70">
                      {item.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[3rem] bg-[#195C85] text-white shadow-2xl shadow-[#195C85]/20">
            <div className="grid gap-8 p-8 md:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:p-16">
              <div>
                <SectionLabel>Contact / Join</SectionLabel>
                <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                  Help shape the idea carefully.
                </h2>
                <p className="mt-6 max-w-2xl leading-8 text-white/82">
                  At this stage, thoughtful feedback matters more than scale.
                  Connect if you want to share advice, ask questions, contribute
                  to the idea, or start a respectful conversation.
                </p>

                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="mailto:hello@syrianhumanists.org"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#195C85] transition hover:-translate-y-0.5 hover:bg-[#F8FAF7]"
                  >
                    <MailIcon className="h-4 w-4" /> Start a Conversation
                  </a>

                  <a
                    href="#building"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                  >
                    Support the Development <ArrowIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="rounded-[2rem] bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7CCBAE]">
                  This stage needs
                </p>
                <ul className="mt-5 space-y-4 text-white/86">
                  <li>• Honest human feedback</li>
                  <li>• Practical advice</li>
                  <li>• Thoughtful conversations</li>
                  <li>• Questions that should be faced before growth</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#195C85]/10 bg-white px-5 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <FullLogo />
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#14232B]/65">
              Syrian Humanists — dignity, conscience, solidarity. An independent
              initiative in development.
            </p>
          </div>

          <div className="flex flex-wrap gap-5 text-sm font-semibold text-[#14232B]/65">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-[#195C85]">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-[#195C85]/10 pt-6 text-sm text-[#14232B]/50">
          © {new Date().getFullYear()} Syrian Humanists. Independent initiative in development.
        </div>
      </footer>
    </div>
  );
}
