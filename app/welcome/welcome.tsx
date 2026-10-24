
import { useState } from "react";
import type { FormEvent } from "react";
import SEMO_LOGO_512 from "./SEMO_LOGO_512.svg";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Code2,
  Cpu,
  Lightbulb,
  Menu,
  Presentation,
  Sparkles,
  Trophy,
  Users,
  X,
  Zap,
} from "lucide-react";

const tracks = [
  {
    icon: BriefcaseBusiness,
    title: "Smarter operations",
    description:
      "Use AI to streamline workflows, reduce busywork, and help teams do their best work.",
    tags: ["Automation", "Productivity"],
  },
  {
    icon: Users,
    title: "Better customer experiences",
    description:
      "Reimagine how businesses understand, support, and build lasting relationships with customers.",
    tags: ["Personalization", "Service"],
  },
  {
    icon: BrainCircuit,
    title: "Decisions powered by data",
    description:
      "Turn business data into useful insights, sharper forecasts, and confident decisions.",
    tags: ["Analytics", "Forecasting"],
  },
  {
    icon: Lightbulb,
    title: "Something unexpected",
    description:
      "Have a different idea? Explore a real business challenge AI could help solve.",
    tags: ["Open innovation", "Your idea"],
  },
];

const schedule = [
  {
    day: "DAY 01",
    time: "Morning",
    title: "Kickoff & team formation",
    text: "Meet fellow builders, explore the challenge, and sharpen your idea.",
  },
  {
    day: "DAY 01",
    time: "Afternoon",
    title: "Build sprint begins",
    text: "Validate the problem, sketch a solution, and start building.",
  },
  {
    day: "DAY 02",
    time: "Morning",
    title: "Make it real",
    text: "Turn your concept into a compelling demo and prepare your story.",
  },
  {
    day: "DAY 02",
    time: "Afternoon",
    title: "Pitch, judge & celebrate",
    text: "Present to the judging panel, hear feedback, and compete for the prize.",
  },
];

const faqs = [
  {
    question: "Who can participate?",
    answer:
      "Any SEMO student can participate, regardless of major or experience level. Business, arts, humanities, science, and technology perspectives are all welcome.",
  },
  {
    question: "Do I need to know how to code?",
    answer:
      "No. Coding can help, but it is not the only way to contribute. Research, design, business strategy, storytelling, and understanding the problem are valuable skills too.",
  },
  {
    question: "Do I need a team or an idea?",
    answer:
      "You can arrive with an idea or an open mind. Connect with other participants and shape a solution together.",
  },
  {
    question: "What will teams present?",
    answer:
      "At the end of the two days, teams will present their idea to a panel of judges. Explain the business problem, your AI-powered solution, and its potential impact.",
  },
];

const container = "mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12";

function Eyebrow({ children, color }: { children: React.ReactNode, color?: string }) {
  return (
    <div className={`mb-6 flex items-center gap-3 text-[10px] font-bold tracking-[0.19em] ${color || "text-semo-dark-copper"}`}>
      <span className={`h-px w-8 ${color === "text-white" ? "bg-semo-red" : "bg-semo-dark-copper"}`} />
      {children}
    </div>
  );
}

function Brand() {
  return (
    <a href="#top" className="flex shrink-0 items-center gap-3">
      <img
        src={SEMO_LOGO_512}
        alt="SEMO Logo"
        className="h-16 w-16"
      />
      <span className="flex flex-col">
        <span className="text-lg font-black leading-tight tracking-tight">
          SEMO
        </span>
        <span className="mt-1 text-[9px] font-bold tracking-[0.13em] text-stone-500">
          AI BUSINESS HACKATHON
        </span>
      </span>
    </a>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  const navLinks = [
    ["The challenge", "#challenge"],
    ["What to expect", "#experience"],
    ["Schedule", "#schedule"],
    ["FAQ", "#faq"],
  ];

  return (
    <div id="top" className="overflow-hidden bg-semo-cream text-semo-black">
      {/* Announcement bar */}
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 bg-semo-black px-4 py-3 text-center text-[9px] font-bold tracking-[0.15em] text-white sm:text-[10px]">
        <span className="h-2 w-2 rounded-full bg-semo-teal" />
        SEMO STUDENTS · ALL MAJORS WELCOME
        <span className="hidden text-semo-copper sm:inline">/</span>
        <span className="hidden sm:inline">
          TWO DAYS TO BUILD WHAT&apos;S NEXT
        </span>
      </div>

      {/* Navigation */}
      <header className="relative z-20 border-b border-semo-mid-gray/70 bg-semo-cream">
        <div className={`${container} flex min-h-[82px] items-center justify-between gap-5`}>
          <Brand />

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-md p-2 transition hover:bg-semo-light-gray md:hidden"
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>

          <nav
            className={`${
              menuOpen ? "flex" : "hidden"
            } absolute left-0 right-0 top-full flex-col gap-1 border-b border-semo-mid-gray bg-semo-cream p-5 shadow-lg md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
          >
            {navLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-sm font-medium text-stone-600 transition hover:text-semo-red md:py-2"
              >
                {label}
              </a>
            ))}
            <a
              href="#join"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-3 bg-semo-red px-5 py-3 text-sm font-semibold text-white transition hover:bg-semo-dark-red md:mt-0"
            >
              Get involved <ArrowUpRight size={16} />
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className={`${container} relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-24`}>
          <div>
            <Eyebrow>THE FUTURE OF BUSINESS IS BUILT HERE</Eyebrow>

            <h1 className="text-5xl font-black leading-[0.98] tracking-[-0.065em] sm:text-6xl lg:text-7xl xl:text-[84px]">
              Big ideas.
              <br />
              <span className="text-semo-red">Real impact.</span>
              <br />
              Powered by AI.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-stone-600 sm:text-lg">
              Two days to rethink how business works. Bring your perspective,
              team up across disciplines, and turn an AI-powered idea into
              something worth sharing.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href="#join"
                className="inline-flex items-center gap-4 bg-semo-red px-6 py-4 text-sm font-bold text-white transition hover:bg-semo-dark-red"
              >
                I&apos;m in <ArrowRight size={17} />
              </a>
              <a
                href="#challenge"
                className="inline-flex items-center gap-2 text-sm font-semibold transition hover:text-semo-red"
              >
                Explore the challenge <ArrowDownRight size={17} />
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 border-t border-semo-mid-gray pt-6">
              {[
                { icon: Trophy, value: "$1,000", label: "Prize pool" },
                { icon: Zap, value: "2 days", label: "One big challenge" },
                { icon: Users, value: "All majors", label: "Every perspective" },
              ].map(({ icon: Icon, value, label }) => (
                <div key={value} className="flex flex-col gap-2 pr-2 sm:pr-4">
                  <Icon size={20} strokeWidth={1.6} className="text-semo-red" />
                  <strong className="text-sm font-extrabold sm:text-lg">
                    {value}
                  </strong>
                  <span className="text-[10px] leading-4 text-stone-500 sm:text-xs">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* AI visual */}
          <div className="relative isolate flex min-h-[390px] items-center justify-center overflow-hidden border border-semo-mid-gray bg-semo-light-gray sm:min-h-[480px] lg:min-h-[540px]">
            <div
              className="absolute inset-0 opacity-60"
              style={{
                backgroundImage:
                  "linear-gradient(#DEDAD6 1px, transparent 1px), linear-gradient(90deg, #DEDAD6 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            <div className="absolute left-5 top-5 z-10 text-[9px] font-bold tracking-[0.15em] text-stone-500 sm:left-7 sm:top-7">
              HUMAN IDEAS x MACHINE INTELLIGENCE
            </div>

            <div className="relative flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80">
              <div className="absolute inset-0 rounded-full border border-semo-copper/60" />
              <div className="absolute inset-7 rounded-full border border-dashed border-semo-gray/70" />
              <div className="absolute inset-14 rounded-full border border-semo-teal/80" />
              <div className="absolute inset-16 rounded-full bg-semo-copper/10 blur-2xl" />

              <div className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full border border-semo-copper/70 bg-semo-cream text-semo-red shadow-xl sm:h-36 sm:w-36">
                <BrainCircuit size={68} strokeWidth={1.15} />
              </div>

              <div className="absolute left-0 top-10 flex -translate-x-2 items-center gap-2 border border-semo-mid-gray bg-semo-cream px-3 py-2 shadow-sm sm:-translate-x-5">
                <BriefcaseBusiness size={17} className="text-semo-red" />
                <span className="text-[9px] font-bold tracking-wider">BUSINESS</span>
              </div>

              <div className="absolute right-0 top-16 flex translate-x-2 items-center gap-2 border border-semo-mid-gray bg-semo-cream px-3 py-2 shadow-sm sm:translate-x-5">
                <Cpu size={17} className="text-semo-teal" />
                <span className="text-[9px] font-bold tracking-wider">AI</span>
              </div>

              <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 border border-semo-mid-gray bg-semo-cream px-4 py-2 shadow-sm">
                <Sparkles size={16} className="text-semo-dark-copper" />
                <span className="whitespace-nowrap text-[9px] font-bold tracking-wider">
                  NEW IDEAS
                </span>
              </div>

              <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-semo-red" />
              <span className="absolute bottom-12 right-5 h-2 w-2 rounded-full bg-semo-teal" />
            </div>

            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3 border-t border-semo-mid-gray pt-4 text-[8px] font-bold tracking-[0.13em] text-stone-500 sm:bottom-7 sm:left-7 sm:right-7 sm:text-[9px]">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-semo-teal" />
                HUMAN IDEAS. REAL IMPACT.
              </span>
            </div>
          </div>

          <div className="hidden items-center gap-3 text-[9px] font-bold tracking-[0.16em] text-stone-500 lg:flex">
            <span className="text-semo-red">01</span>
            THINK BEYOND THE OBVIOUS
            <span className="h-px w-16 bg-semo-mid-gray" />
          </div>
        </section>

        {/* Brand ticker */}
        <div className="overflow-hidden bg-semo-red py-5 text-white">
          <div className="flex flex-wrap items-center justify-around gap-x-8 gap-y-3 px-4 text-center text-[10px] font-bold tracking-[0.16em] sm:text-xs">
            <span>IDEAS INTO ACTION</span>
            <Sparkles size={15} />
            <span>BUILD WITH PURPOSE</span>
            <Sparkles size={15} />
            <span>MAKE AI USEFUL</span>
            <Sparkles size={15} />
            <span>IDEAS INTO ACTION</span>
          </div>
        </div>

        {/* Challenge */}
        <section id="challenge" className={`${container} scroll-mt-20 py-20 sm:py-28`}>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-20">
            <div>
              <Eyebrow>THE CHALLENGE</Eyebrow>
              <h2 className="text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                AI is changing business.
                <br />
                <span className="text-semo-dark-copper">
                  What&apos;s your take?
                </span>
              </h2>
            </div>

            <div className="lg:pt-10">
              <p className="text-lg leading-8 text-semo-black sm:text-xl">
                The best solutions start with a good question. Your mission
                is to imagine a practical, thoughtful, and creative way
                artificial intelligence can make a business better.
              </p>
              <p className="mt-5 leading-7 text-stone-600">
                No single major has all the answers. Whether you think in
                code, design, numbers, people, or possibilities, your point
                of view belongs in the room.
              </p>
              <a
                href="#join"
                className="mt-6 inline-flex items-center gap-2 border-b border-semo-copper pb-2 text-sm font-bold transition hover:text-semo-red"
              >
                Bring your perspective <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {tracks.map(({ icon: Icon, title, description, tags }, index) => (
              <article
                key={title}
                className="group relative flex min-h-[290px] flex-col border border-semo-mid-gray bg-white/60 p-6 transition duration-200 hover:-translate-y-1 hover:border-semo-copper hover:bg-white"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-semo-dark-copper">
                    0{index + 1}
                  </span>
                  <Icon
                    size={23}
                    strokeWidth={1.6}
                    className="text-semo-red"
                  />
                </div>
                <h3 className="mt-8 text-xl font-extrabold tracking-tight">
                  {title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-stone-600">
                  {description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-semo-light-gray px-2 py-1 text-[10px] font-semibold text-stone-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <ArrowUpRight
                  size={17}
                  className="absolute bottom-6 right-6 text-semo-copper opacity-0 transition group-hover:opacity-100"
                />
              </article>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-20 bg-semo-black text-white">
          <div className={`${container} grid gap-12 py-20 sm:py-28 lg:grid-cols-2 lg:gap-20`}>
            <div>
              <Eyebrow>MORE THAN A COMPETITION</Eyebrow>
              <h2 className="text-5xl font-black leading-[1.05] tracking-[-0.05em] sm:text-6xl">
                Learn fast.
                <br />
                <span className="text-semo-copper">Build together.</span>
              </h2>
              <p className="mt-7 max-w-lg leading-8 text-stone-300">
                A great hackathon isn&apos;t just about the final pitch.
                It&apos;s about getting out of your comfort zone, collaborating
                with people who think differently, and discovering what you
                can make in two days.
              </p>
              <a
                href="#schedule"
                className="mt-8 inline-flex items-center gap-3 bg-white px-5 py-4 text-sm font-bold text-semo-black transition hover:bg-semo-cream"
              >
                See the two-day plan <ArrowRight size={17} />
              </a>
            </div>

            <div className="divide-y divide-white/15">
              {[
                {
                  icon: Users,
                  title: "Find your people",
                  text: "Meet collaborators from across campus. Different majors make better solutions.",
                },
                {
                  icon: Code2,
                  title: "Make something tangible",
                  text: "Prototype, test, experiment, and turn a promising thought into a story people can see.",
                },
                {
                  icon: Presentation,
                  title: "Pitch with confidence",
                  text: "Present your idea to a judging panel and demonstrate its potential impact.",
                },
                {
                  icon: Trophy,
                  title: "Compete for $1,000",
                  text: "Put your idea in the running for the prize pool and gain experience that lasts.",
                },
              ].map(({ icon: Icon, title, text }, index) => (
                <div key={title} className="flex gap-4 py-6 first:pt-0 last:pb-0">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-semo-copper/50 text-semo-copper">
                    <Icon size={21} />
                  </span>
                  <div className="flex-1">
                    <h3 className="font-bold">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-stone-400">
                      {text}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-semo-copper">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 border-t border-white/15 px-5 py-5 text-center text-[9px] font-bold tracking-[0.15em] text-stone-400 sm:gap-12">
            <span>CURIOUS MINDS WELCOME</span>
            <span className="text-semo-copper">✳</span>
            <span>NO PERFECT IDEA REQUIRED</span>
          </div>
        </section>

        {/* Schedule */}
        <section id="schedule" className={`${container} scroll-mt-20 py-20 sm:py-28`}>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>THE TWO-DAY SPRINT</Eyebrow>
              <h2 className="text-4xl font-black leading-tight tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                From first thought
                <br />
                to <span className="text-semo-red">final pitch.</span>
              </h2>
            </div>
            <p className="max-w-sm leading-7 text-stone-600">
              Two focused days. One shared challenge. A room full of
              possibilities.
            </p>
          </div>

          <div className="mt-12 border-t border-semo-mid-gray">
            {schedule.map((item, index) => (
              <article
                key={item.title}
                className="group grid gap-4 border-b border-semo-mid-gray py-7 transition hover:bg-white/50 sm:grid-cols-[60px_1fr_30px] sm:items-center sm:gap-6 sm:px-4"
              >
                <span className="font-mono text-sm text-semo-dark-copper">
                  0{index + 1}
                </span>
                <div>
                  <div className="mb-2 flex flex-wrap items-center gap-2 text-[10px] font-bold tracking-[0.15em] text-semo-dark-copper">
                    <span>{item.day}</span>
                    <span>·</span>
                    <span>{item.time}</span>
                  </div>
                  <h3 className="text-xl font-extrabold tracking-tight sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-stone-600">
                    {item.text}
                  </p>
                </div>
                <ArrowUpRight
                  size={20}
                  className="hidden text-semo-red transition group-hover:-translate-y-1 group-hover:translate-x-1 sm:block"
                />
              </article>
            ))}
          </div>

          <p className="mt-6 text-xs leading-6 text-stone-500">
            <span className="mr-2 text-semo-copper">✳</span>
            Exact event dates, venue, and session times will be announced by
            the organizers.
          </p>
        </section>

        {/* CTA and signup demo */}
        <section id="join" className="relative scroll-mt-20 overflow-hidden bg-semo-red text-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full border border-white/10 sm:h-[500px] sm:w-[500px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-12 h-72 w-72 rounded-full border border-white/10 sm:h-[400px] sm:w-[400px]"
          />

          <div className={`${container} relative grid gap-12 py-20 sm:py-28 lg:grid-cols-[1fr_0.7fr] lg:items-center`}>
            <div>
              <Eyebrow color="text-white">YOUR NEXT BIG IDEA STARTS HERE</Eyebrow>
              <h2 className="text-5xl font-black leading-[1.03] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                Don&apos;t just watch
                <br />
                the future.
                <br />
                <span className="text-semo-cream">Build it.</span>
              </h2>
              <p className="mt-6 max-w-lg leading-7 text-white/85">
                Students from every major are welcome. Bring a problem worth
                solving, an open mind, and a willingness to try.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[10px] font-bold tracking-[0.13em] text-white/90">
                <span className="flex items-center gap-2">
                  <Check size={15} /> ALL SEMO MAJORS
                </span>
                <span className="flex items-center gap-2">
                  <Check size={15} /> $1,000 PRIZE POOL
                </span>
              </div>
            </div>

            <div className="border border-white/25 bg-semo-black/10 p-6 sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center bg-white/10">
                  <Sparkles size={20} />
                </span>
                <div>
                  <h3 className="font-bold">Stay in the loop</h3>
                  <p className="mt-1 text-xs text-white/75">
                    Get updates when registration opens.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <label htmlFor="email" className="sr-only">
                  Your email address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setSubmitted(false);
                  }}
                  placeholder="Your student email address"
                  className="w-full border border-white/30 bg-white px-4 py-4 text-sm text-semo-black outline-none placeholder:text-stone-500 focus:ring-2 focus:ring-semo-copper"
                />
                <button
                  type="submit"
                  className="flex w-full items-center justify-between gap-3 bg-semo-black px-5 py-4 text-sm font-bold text-white transition hover:bg-black"
                >
                  {submitted ? "You're on the list" : "Keep me in the loop"}
                  {submitted ? <Check size={17} /> : <ArrowRight size={17} />}
                </button>
              </form>

              {submitted ? (
                <p role="status" className="mt-4 text-xs leading-5 text-white">
                  Thanks for your interest! This is a front-end demo; no
                  email has been saved or sent.
                </p>
              ) : (
                <p className="mt-4 text-xs leading-5 text-white/70">
                  Registration details and official event information
                  coming soon.
                </p>
              )}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className={`${container} scroll-mt-20 grid gap-10 py-20 sm:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20`}>
          <div>
            <Eyebrow>GOOD TO KNOW</Eyebrow>
            <h2 className="text-4xl font-black leading-tight tracking-[-0.05em] sm:text-5xl">
              Questions?
              <br />
              <span className="text-semo-dark-copper">We&apos;ve got you.</span>
            </h2>
            <p className="mt-5 max-w-sm leading-7 text-stone-600">
              New to hackathons? That&apos;s okay. Everyone starts somewhere.
            </p>
          </div>

          <div className="border-t border-semo-mid-gray">
            {faqs.map(({ question, answer }, index) => (
              <div key={question} className="border-b border-semo-mid-gray">
                <button
                  type="button"
                  aria-expanded={faqOpen === index}
                  onClick={() =>
                    setFaqOpen(faqOpen === index ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-bold transition hover:text-semo-red sm:text-lg"
                >
                  <span>{question}</span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-semo-red transition-transform ${
                      faqOpen === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {faqOpen === index && (
                  <p className="max-w-2xl pb-6 pr-8 text-sm leading-7 text-stone-600">
                    {answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-semo-mid-gray bg-white">
        <div className={`${container} grid gap-8 py-10 sm:grid-cols-2 sm:items-center`}>
          <Brand />
          <div className="text-sm leading-6 text-stone-600 sm:text-right">
            <p className="font-semibold text-semo-black">
              Department of Computer Science
            </p>
            <p>Southeast Missouri State University</p>
          </div>
        </div>

        <div className={`${container} flex flex-col gap-4 border-t border-semo-light-gray py-5 text-[9px] font-bold tracking-[0.13em] text-stone-500 sm:flex-row sm:items-center sm:justify-between`}>
          <span>THINK BIG. BUILD USEFUL.</span>
          <span>MADE FOR THE NEXT GENERATION OF PROBLEM SOLVERS.</span>
          <a
            href="#top"
            className="inline-flex items-center gap-2 transition hover:text-semo-red"
          >
            BACK TO TOP <ArrowUpRight size={14} />
          </a>
        </div>
      </footer>
    </div>
  );
}
