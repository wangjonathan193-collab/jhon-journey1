"use client";

import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  Menu,
  Moon,
  Sparkles,
  Sun,
  X,
} from "lucide-react";
 
const projects = [
  {
    title: "Fintech Dashboard",
    description:
      "A polished financial analytics platform with real-time metrics, interactive charts, and a responsive dashboard.",
    tags: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
    gradient: "from-violet-500/30 to-blue-500/10",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Modern online shopping experience focused on fast navigation, elegant product pages, and seamless checkout.",
    tags: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
    gradient: "from-cyan-500/30 to-emerald-500/10",
  },
  {
    title: "AI Productivity App",
    description:
      "An AI-powered productivity workspace that helps users organize tasks, notes, and workflows.",
    tags: ["React", "Next.js", "OpenAI", "Tailwind"],
    gradient: "from-pink-500/30 to-purple-500/10",
  },
];

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Git",
  "Figma",
];

export default function Home() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main
      className={
        dark
          ? "min-h-screen bg-[#08090c] text-white"
          : "min-h-screen bg-white text-zinc-900"
      }
    >
      {/* Navigation */}
      <nav
        className={`fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-xl ${
          dark
            ? "border-white/10 bg-[#08090c]/70"
            : "border-black/10 bg-white/70"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          <a href="#" className="text-xl font-bold tracking-tight">
            Jhon Michael(Fisher)<span className="text-violet-400">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {["About", "Projects", "Experience", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm transition ${
                  dark
                    ? "text-zinc-400 hover:text-white"
                    : "text-zinc-500 hover:text-black"
                }`}
              >
                {item}
              </a>
            ))}

            <button
              onClick={() => setDark(!dark)}
              className="rounded-full border border-white/10 p-2 transition hover:bg-white/10"
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setDark(!dark)}
              className="rounded-full border border-white/10 p-2"
            >
              {dark ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 px-6 pb-6 md:hidden">
            {["About", "Projects", "Experience", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-zinc-400"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[130px]" />

        <div className="relative mx-auto w-full max-w-6xl px-6 pt-24">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/5 px-4 py-2 text-sm text-violet-300">
              <Sparkles size={15} />
              Available for freelance work
            </div>

            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
              Let us build much more effective programs with you - SUSI, haha. Building digital
              <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                experiences.
              </span>
            </h1>

            <p
              className={`mt-8 max-w-2xl text-lg leading-8 ${
                dark ? "text-zinc-400" : "text-zinc-600"
              }`}
            >
              I'm Jhon Michal, a full-stack developer focused on creating fast,
              beautiful, and thoughtful products for the modern web.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-violet-200"
              >
                View my work
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="#contact"
                className={`rounded-full border px-6 py-3 font-medium transition ${
                  dark
                    ? "border-white/15 hover:bg-white/10"
                    : "border-black/15 hover:bg-black/5"
                }`}
              >
                Let's talk
              </a>
            </div>
          </div>

          <a
            href="#about"
            className="absolute bottom-10 left-6 hidden items-center gap-2 text-sm text-zinc-500 md:flex"
          >
            <ArrowDown size={16} />
            Scroll to explore
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-28">
        <div className="grid gap-14 md:grid-cols-[1fr_1.5fr]">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
              About me
            </p>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Developer. Designer. Problem solver.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-zinc-400">
            <p>
              I love turning complex problems into simple, elegant digital
              products. My approach combines engineering, design, and a strong
              attention to detail.
            </p>

            <p>
              From early-stage startups to established products, I work across
              the entire development process — from idea and architecture to
              deployment and iteration.
            </p>

            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8 sm:grid-cols-3">
              <div>
                <p className="text-3xl font-bold text-white">5+</p>
                <p className="mt-1 text-sm text-zinc-500">Years experience</p>
              </div>

              <div>
                <p className="text-3xl font-bold text-white">40+</p>
                <p className="mt-1 text-sm text-zinc-500">Projects shipped</p>
              </div>

              <div>
                <p className="text-3xl font-bold text-white">15+</p>
                <p className="mt-1 text-sm text-zinc-500">Happy clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
        <div className="mb-14 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
              Selected work
            </p>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Things I've built.
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`group overflow-hidden rounded-3xl border ${
                dark
                  ? "border-white/10 bg-white/[0.03]"
                  : "border-black/10 bg-black/[0.02]"
              }`}
            >
              <div
                className={`relative aspect-[16/10] bg-gradient-to-br ${project.gradient}`}
              >
                <div className="absolute inset-8 rounded-2xl border border-white/10 bg-black/30 shadow-2xl backdrop-blur-sm transition duration-500 group-hover:scale-[1.03]">
                  <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
                    <span className="h-2 w-2 rounded-full bg-red-400" />
                    <span className="h-2 w-2 rounded-full bg-yellow-400" />
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                  </div>
                  <div className="p-5">
                    <div className="mb-3 h-3 w-2/3 rounded bg-white/10" />
                    <div className="mb-2 h-2 w-full rounded bg-white/5" />
                    <div className="h-2 w-4/5 rounded bg-white/5" />
                  </div>
                </div>
              </div>

              <div className="p-7">
                <div className="mb-3 flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <ArrowUpRight
                    size={20}
                    className="text-zinc-500 transition group-hover:text-violet-400"
                  />
                </div>

                <p className="text-sm leading-6 text-zinc-500">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="border-y border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
                Toolbox
              </p>
              <h2 className="text-4xl font-bold tracking-tight">
                Technologies I work with.
              </h2>
            </div>

            <div className="flex flex-wrap content-start gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 px-5 py-3 text-sm text-zinc-300 transition hover:border-violet-400/50 hover:bg-violet-400/5 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-6 py-28">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
          Experience
        </p>

        <h2 className="mb-14 text-4xl font-bold tracking-tight sm:text-5xl">
          Where I've worked.
        </h2>

        <div className="space-y-0">
          {[
            {
              company: "Acme Digital",
              role: "Senior Full-Stack Developer",
              year: "2023 — Present",
            },
            {
              company: "Creative Labs",
              role: "Frontend Developer",
              year: "2021 — 2023",
            },
            {
              company: "Freelance",
              role: "Web Developer & Designer",
              year: "2020 — 2021",
            },
          ].map((job) => (
            <div
              key={job.company}
              className="grid gap-3 border-t border-white/10 py-7 md:grid-cols-[1fr_2fr_1fr]"
            >
              <p className="text-zinc-500">{job.year}</p>
              <div>
                <h3 className="text-xl font-semibold">{job.role}</h3>
                <p className="mt-1 text-zinc-500">{job.company}</p>
              </div>
              <p className="text-sm text-zinc-500 md:text-right">
                Full-time
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-28">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-violet-400/20 bg-gradient-to-br from-violet-500/10 via-fuchsia-500/5 to-cyan-500/10 p-10 text-center sm:p-20">
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/20 blur-[100px]" />

          <div className="relative">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-violet-300">
              Get in touch
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Have an idea?
              <br />
              Let's build it.
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-zinc-400">
              I'm always interested in hearing about interesting projects,
              products, and opportunities.
            </p>

            <a
              href="mailto:jhonmichal@gmail.com"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-medium text-black transition hover:bg-violet-200"
            >
              <Mail size={17} />
              jhonmichal@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-6 py-8 sm:flex-row">
          <p className="text-sm text-zinc-500">
            © 2026 Jhon Michal. Built with Next.js.
          </p>

          <div className="flex gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 p-2.5 text-zinc-400 transition hover:text-white"
            >
              {/* <GithubIcon size={18} /> */}
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 p-2.5 text-zinc-400 transition hover:text-white"
            >
              {/* <Linkedin size={18} /> */}
            </a>

            <a
              href="mailto:jhonmichal@gmail.com"
              className="rounded-full border border-white/10 p-2.5 text-zinc-400 transition hover:text-white"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}