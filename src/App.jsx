import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Command,
  Layers3,
  Menu,
  MessageSquareText,
  ShieldCheck,
  X,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Layers3,
    title: "Everything in one place",
    description:
      "Bring tasks, notes, files, and team conversations together. Spend less time switching tabs and more time making progress.",
    tint: "bg-violet-100 text-violet-700",
  },
  {
    icon: Zap,
    title: "A clearer way to work",
    description:
      "Turn big goals into manageable steps, assign owners, and see what needs attention before it becomes a blocker.",
    tint: "bg-amber-100 text-amber-700",
  },
  {
    icon: ShieldCheck,
    title: "Stay confidently on track",
    description:
      "Get a real-time view of project health, upcoming deadlines, and the work your team has already accomplished.",
    tint: "bg-emerald-100 text-emerald-700",
  },
];

const plans = [
  {
    name: "Starter",
    price: "Free",
    detail: "For individuals and small teams getting organized.",
    features: [
      "Up to 3 active projects",
      "Basic task management",
      "Team workspace",
      "Community support",
    ],
    cta: "Start for free",
    featured: false,
  },
  {
    name: "Growth",
    price: "$12",
    suffix: "/ user / month",
    detail: "For teams ready to move faster together.",
    features: [
      "Unlimited projects",
      "Project insights & reports",
      "Automations and integrations",
      "Priority email support",
    ],
    cta: "Choose Growth",
    featured: true,
  },
];

function Logo() {
  return (
    <a
      href="#home"
      className="flex items-center gap-2.5"
      aria-label="FlowPilot home"
    >
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-violet-600 text-white shadow-lg shadow-violet-200">
        <Command size={20} strokeWidth={2.5} />
      </span>
      <span className="font-display text-xl font-extrabold tracking-tight text-ink">
        flowpilot<span className="text-violet-600">.</span>
      </span>
    </a>
  );
}

function DashboardPreview() {
  return (
    <div className="relative mx-auto w-full max-w-140">
      <div className="absolute -right-5 -top-8 h-40 w-40 rounded-full bg-violet-200/60 blur-3xl" />
      <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-sky-200/70 blur-3xl" />
      <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_30px_80px_rgba(40,32,90,0.16)]">
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <i className="h-2.5 w-2.5 rounded-full bg-rose-300" />
              <i className="h-2.5 w-2.5 rounded-full bg-amber-300" />
              <i className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
            </div>
            <span className="ml-2 text-xs font-semibold text-slate-500">
              Workspace
            </span>
          </div>
        </div>
        <div className="grid grid-cols-[104px_1fr] sm:grid-cols-[132px_1fr]">
          <aside className="space-y-4 border-r border-slate-100 bg-slate-50/70 p-3 sm:p-4">
            {["Overview", "My tasks", "Projects", "Messages"].map((t, i) => (
              <div
                key={t}
                className={`flex items-center gap-2 rounded-lg px-2 py-2 text-[10px] font-semibold sm:text-xs ${i === 0 ? "bg-violet-100 text-violet-700" : "text-slate-400"}`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                {t}
              </div>
            ))}
          </aside>
          <main className="min-w-0 p-4 sm:p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] font-medium text-slate-400 sm:text-xs">
                  MONDAY, OCTOBER 21
                </p>
                <h3 className="mt-1 font-display text-base font-extrabold sm:text-xl">
                  Good morning, Aryan
                </h3>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-2 sm:gap-3">
              <div className="rounded-xl bg-violet-50 p-3">
                <p className="text-[9px] font-semibold text-violet-600 sm:text-xs">
                  Tasks completed
                </p>
                <div className="mt-1 flex items-end gap-2">
                  <b className="font-display text-2xl sm:text-3xl">24</b>
                  <span className="mb-1 text-[9px] font-bold text-emerald-600">
                    ↑ 18%
                  </span>
                </div>
                <div className="mt-2 h-1.5 rounded-full bg-violet-100">
                  <div className="h-1.5 w-3/4 rounded-full bg-violet-500" />
                </div>
              </div>
              <div className="rounded-xl bg-emerald-50 p-3">
                <p className="text-[9px] font-semibold text-emerald-600 sm:text-xs">
                  Active projects
                </p>
                <div className="mt-1 flex items-end gap-2">
                  <b className="font-display text-2xl sm:text-3xl">08</b>
                  <span className="mb-1 text-[9px] font-bold text-emerald-600">
                    on track
                  </span>
                </div>
                <div className="mt-2 flex gap-1">
                  <i className="h-1.5 flex-1 rounded-full bg-emerald-400" />
                  <i className="h-1.5 flex-1 rounded-full bg-emerald-300" />
                  <i className="h-1.5 flex-1 rounded-full bg-emerald-200" />
                </div>
              </div>
            </div>
            <div className="mt-5">
              <div className="mb-3 flex items-center justify-between">
                <b className="text-xs sm:text-sm">Your priorities</b>
              </div>
              {[
                [
                  "Finalize landing page",
                  "Design",
                  "bg-violet-100 text-violet-700",
                  "Today",
                ],
                [
                  "Review user feedback",
                  "Research",
                  "bg-amber-100 text-amber-700",
                  "Tomorrow",
                ],
                [
                  "Prepare launch checklist",
                  "Planning",
                  "bg-emerald-100 text-emerald-700",
                  "Oct 25",
                ],
              ].map(([name, tag, style, date], i) => (
                <div
                  key={name}
                  className="flex items-center gap-2 border-t border-slate-100 py-3"
                >
                  <span
                    className={`grid h-5 w-5 place-items-center rounded-md border ${i === 0 ? "border-violet-400 bg-violet-50" : "border-slate-200"}`}
                  >
                    {i === 0 && <Check size={12} className="text-violet-600" />}
                  </span>
                  <span className="min-w-0 flex-1 truncate text-[10px] font-semibold text-slate-600 sm:text-xs">
                    {name}
                  </span>
                  <span
                    className={`hidden rounded-md px-2 py-1 text-[9px] font-bold sm:inline ${style}`}
                  >
                    {tag}
                  </span>
                  <span className="text-[9px] text-slate-400 sm:text-[10px]">
                    {date}
                  </span>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [billing, setBilling] = useState("monthly");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const goToContact = () => {
    setMenuOpen(false);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email address.";
    if (!form.message.trim())
      next.message = "Please tell us a little about your team.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSubmitted(true);
  };

  const navLinks = [
    ["Features", "#features"],
    ["How it works", "#how-it-works"],
    ["Pricing", "#pricing"],
  ];

  return (
    <div className="overflow-hidden">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Logo />
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-sm font-semibold text-slate-500 transition hover:text-blue-700"
              >
                {label}
              </a>
            ))}
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#contact"
              className="px-3 py-2 text-sm font-bold text-slate-600 hover:text-blue-700"
            >
              Log in
            </a>
            <button
              onClick={goToContact}
              className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Get started <ArrowUpRight size={15} className="ml-1 inline" />
            </button>
          </div>
          <button
            className="rounded-lg p-2 text-slate-700 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>
        {menuOpen && (
          <div className="border-t border-slate-100 bg-white px-5 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map(([label, href]) => (
                <a
                  onClick={() => setMenuOpen(false)}
                  key={label}
                  href={href}
                  className="font-semibold text-slate-600"
                >
                  {label}
                </a>
              ))}
              <button
                onClick={goToContact}
                className="rounded-xl bg-blue-600 px-4 py-3 font-bold text-white"
              >
                Get started
              </button>
            </div>
          </div>
        )}
      </header>

      <main>
        <section
          id="home"
          className="relative px-5 pb-24 pt-16 sm:pt-24 lg:px-8"
        >
          <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-155 w-225 -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-100/70 via-sky-50/50 to-transparent blur-2xl" />
          <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
              <h1 className="font-display text-4xl font-extrabold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-[58px]">
                Less busywork.
                <br />
                <span className="bg-linear-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  More brilliant work.
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-base leading-8 text-slate-500 sm:text-lg lg:mx-0">
                FlowPilot brings your projects, people, and priorities together
                — so your team can focus on what moves the needle.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                <button
                  onClick={goToContact}
                  className="rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-200 transition hover:-translate-y-1 hover:bg-blue-700"
                >
                  Start your free workspace{" "}
                  <ArrowRight className="ml-2 inline" size={17} />
                </button>
                <a
                  href="#how-it-works"
                  className="rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50"
                >
                  See how it works{" "}
                  <ArrowUpRight className="ml-1 inline" size={16} />
                </a>
              </div>
            </div>
            <DashboardPreview />
          </div>
        </section>

        <section id="features" className="px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-600">
                One calm place to work
              </span>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                A better workflow starts here.
              </h2>
              <p className="mt-4 leading-7 text-slate-500">
                The tools you need to turn scattered activity into meaningful
                momentum.
              </p>
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {features.map(({ icon: Icon, title, description, tint }) => (
                <article
                  key={title}
                  className="group rounded-2xl border border-slate-200/80 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-soft"
                >
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-xl ${tint}`}
                  >
                    <Icon size={23} />
                  </span>
                  <h3 className="mt-6 font-display text-lg font-extrabold">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="bg-white px-5 py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
            <div className="relative rounded-3xl bg-linear-to-br from-blue-100 via-indigo-50 to-sky-100 p-6 sm:p-10">
              <div className="rounded-2xl border border-white/80 bg-white p-5 shadow-soft sm:p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="mt-1 font-display text-xl font-extrabold">
                      Website redesign
                    </h3>
                  </div>
                </div>
                <div className="mt-8 flex items-end justify-between">
                  <div>
                    <b className="font-display text-4xl">78%</b>
                    <p className="mt-1 text-xs text-slate-400">
                      Overall progress
                    </p>
                  </div>
                </div>
                <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[78%] rounded-full bg-linear-to-r from-emerald-600 to-emerald-300" />
                </div>
                <div className="mt-8 grid grid-cols-3 gap-3">
                  {[
                    ["18", "Completed"],
                    ["05", "In progress"],
                    ["02", "Upcoming"],
                  ].map(([n, l]) => (
                    <div key={l} className="rounded-xl bg-slate-50 p-3">
                      <b className="font-display text-xl">{n}</b>
                      <p className="mt-1 text-[10px] text-slate-400 sm:text-xs">
                        {l}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-600">
                How it works
              </span>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                From “what’s next?” to “what’s done?”
              </h2>
              <p className="mt-5 leading-7 text-slate-500">
                FlowPilot gives everyone a shared view of the work. Set a goal,
                bring your team in, and let simple workflows keep everything
                moving.
              </p>
              <div className="mt-8 space-y-6">
                {[
                  [
                    "01",
                    "Create your workspace",
                    "Start with a project template or build a workflow that fits your team.",
                  ],
                  [
                    "02",
                    "Bring everyone together",
                    "Assign owners, add context, and make priorities clear to the whole team.",
                  ],
                  [
                    "03",
                    "Make progress visible",
                    "Track milestones and celebrate wins without another status meeting.",
                  ],
                ].map(([n, t, d]) => (
                  <div key={n} className="flex gap-4">
                    <span className="font-display text-sm font-extrabold text-slate-900">
                      {n}
                    </span>
                    <div>
                      <h3 className="font-bold">{t}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {d}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-600">
                Simple, honest pricing
              </span>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                A plan for your next big thing.
              </h2>
              <p className="mt-4 text-slate-500">
                Start free. Upgrade when your team is ready.
              </p>
              <div className="mt-6 inline-flex rounded-xl border border-slate-200 bg-white p-1">
                <button
                  onClick={() => setBilling("monthly")}
                  className={`rounded-lg px-4 py-2 text-xs font-bold ${billing === "monthly" ? "bg-blue-600 text-white shadow" : "text-slate-500"}`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBilling("yearly")}
                  className={`rounded-lg px-4 py-2 text-xs font-bold ${billing === "yearly" ? "bg-blue-600 text-white shadow" : "text-slate-500"}`}
                >
                  Yearly{" "}
                  <span
                    className={
                      billing === "yearly"
                        ? "text-blue-100"
                        : "text-emerald-600"
                    }
                  >
                    {" "}
                    · Save 20%
                  </span>
                </button>
              </div>
            </div>
            <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
              {plans.map((plan) => (
                <article
                  key={plan.name}
                  className={`relative rounded-2xl border p-8 ${plan.featured ? "border-emerald-500 bg-white shadow-soft" : "border-slate-200 bg-white"}`}
                >
                  {plan.featured && (
                    <span className="absolute -top-3 right-7 rounded-full bg-emerald-600 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white">
                      Most popular
                    </span>
                  )}
                  <h3 className="font-display text-xl font-extrabold">
                    {plan.name}
                  </h3>
                  <p className="mt-2 min-h-10 text-sm leading-6 text-slate-500">
                    {plan.detail}
                  </p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="font-display text-4xl font-extrabold">
                      {plan.price === "Free"
                        ? "Free"
                        : billing === "yearly"
                          ? "$9.60"
                          : plan.price}
                    </span>
                    {plan.suffix && (
                      <span className="text-xs text-slate-400">
                        {plan.suffix}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={goToContact}
                    className={`mt-7 w-full rounded-xl px-4 py-3 text-sm font-bold transition hover:-translate-y-0.5 ${plan.featured ? "bg-blue-600 text-white hover:bg-blue-700" : "border border-slate-200 text-slate-700 hover:border-blue-300 hover:bg-blue-50"}`}
                  >
                    {plan.cta} <ArrowRight size={15} className="ml-1 inline" />
                  </button>
                  <div className="my-7 border-t border-slate-100" />
                  <p className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                    What’s included
                  </p>
                  <ul className="mt-4 space-y-3">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-3 text-sm text-slate-600"
                      >
                        <CheckCircle2
                          size={16}
                          className="shrink-0 text-emerald-500"
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-ink px-5 py-24 text-white lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="max-w-lg">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-400">
                Let's make it happen
              </span>
              <p className="mt-5 leading-7 text-slate-800">
                Tell us what your team is working on. We’ll help you find a
                better way to move it forward.
              </p>
              <div className="mt-9 space-y-4 text-sm text-slate-700">
                <p className="flex items-center gap-3">
                  <MessageSquareText size={17} className="text-blue-400" />{" "}
                  hello@flowpilot.example
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-6 text-ink shadow-2xl sm:p-8">
              {submitted ? (
                <div className="py-10 text-center">
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-100 text-emerald-700">
                    <CheckCircle2 size={28} />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-extrabold">
                    Thanks, {form.name.split(" ")[0]}!
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Your demo request has been recorded in this preview. We’ll
                    be in touch soon.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", message: "" });
                    }}
                    className="mt-6 text-sm font-bold text-blue-700"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="font-display text-xl font-extrabold">
                    Request a demo
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    We’ll get back to you within one business day.
                  </p>
                  <div className="mt-6 space-y-4">
                    <label className="block text-sm font-bold">
                      Your name
                      <input
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-normal text-slate-900 outline-none transition placeholder:text-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                        placeholder="User name"
                      />
                      {errors.name && (
                        <small className="mt-1 block text-rose-600">
                          {errors.name}
                        </small>
                      )}
                    </label>
                    <label className="block text-sm font-bold">
                      Work email
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-normal text-slate-900 outline-none transition placeholder:text-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                        placeholder="user@company.com"
                      />
                      {errors.email && (
                        <small className="mt-1 block text-rose-600">
                          {errors.email}
                        </small>
                      )}
                    </label>
                    <label className="block text-sm font-bold">
                      What would you like to improve?
                      <textarea
                        rows="3"
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-normal text-slate-900 outline-none transition placeholder:text-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                        placeholder="Tell us about your team's workflow..."
                      />
                      {errors.message && (
                        <small className="mt-1 block text-rose-600">
                          {errors.message}
                        </small>
                      )}
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="mt-5 w-full rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-blue-700"
                  >
                    Send demo request{" "}
                    <ArrowRight size={16} className="ml-1 inline" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#101a30] px-5 py-8 text-slate-400 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center sm:flex-row">
          {/* <Logo /> */}
          <p className="text-xs">
            © {new Date().getFullYear()} FlowPilot. Made for better work.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
