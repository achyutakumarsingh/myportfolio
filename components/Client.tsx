"use client";

import { useEffect, useRef, useState } from "react";
import { previews } from "@/components/Previews";
import {
  nav,
  path,
  picks,
  profile,
  projects,
  roles,
  skillsEngineer,
  skillsSolver,
  tooling,
} from "@/lib/data";

/* ============================================================
   Sound — a short blip on interaction
   ============================================================ */
let audioCtx: AudioContext | null = null;

function getCtx(): AudioContext | null {
  if (!audioCtx) {
    try {
      const Ctor =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      audioCtx = new Ctor();
    } catch {
      return null;
    }
  }
  if (audioCtx.state === "suspended") void audioCtx.resume();
  return audioCtx;
}

function tone({ freq = 880, dur = 0.04, gain = 0.04 } = {}) {
  const ctx = getCtx();
  if (!ctx) return;
  const osc = ctx.createOscillator();
  const amp = ctx.createGain();
  osc.type = "sine";
  osc.frequency.value = freq;
  osc.connect(amp);
  amp.connect(ctx.destination);
  const t = ctx.currentTime;
  amp.gain.setValueAtTime(0, t);
  amp.gain.linearRampToValueAtTime(gain, t + 0.005);
  amp.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  osc.start(t);
  osc.stop(t + dur + 0.02);
}

/* ============================================================
   Custom cursor — exact dot, lerped ring, contextual label
   ============================================================ */
export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target || typeof target.closest !== "function") return;
      const hit = target.closest("[data-cursor], a, button");
      if (!hit) {
        ring.current?.classList.remove("hover", "text");
        if (label.current) label.current.textContent = "";
        return;
      }
      const kind = hit.getAttribute("data-cursor") || "hover";
      ring.current?.classList.remove("hover", "text");
      ring.current?.classList.add(kind === "text" ? "text" : "hover");
      if (label.current)
        label.current.textContent = hit.getAttribute("data-cursor-label") || "";
    };

    const loop = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (dot.current)
        dot.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      if (ring.current)
        ring.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
    };
  }, [mounted]);

  if (!mounted) return null;
  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring">
        <span ref={label} className="label" />
      </div>
    </>
  );
}

/* ============================================================
   Scroll reveal
   ============================================================ */
export function useReveal() {
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const els = document.querySelectorAll(".reveal:not(.in)");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Reveals() {
  useReveal();
  return null;
}

/* ============================================================
   Nav
   ============================================================ */
export function Nav() {
  const [sound, setSound] = useState(false);
  return (
    <nav className="nav">
      <a className="mark" data-cursor="hover" href="#top">
        <span className="glyph">a</span>
        <span>{profile.name}</span>
      </a>
      <div className="links">
        {nav.map((n) => (
          <a
            key={n.label}
            href={n.href}
            data-cursor="hover"
            onClick={() => sound && tone({ freq: 660 })}
          >
            <span className="num">{n.num}</span>
            {n.label}
          </a>
        ))}
        <a
          className="hire"
          data-cursor="hover"
          data-cursor-label="Hire me →"
          href={`mailto:${profile.email}?subject=Internship%20opportunity`}
        >
          <span className="num">07</span>Hire me
        </a>
      </div>
      <div className="status">
        <span className="dot" />
        <span>{profile.status}</span>
        <button
          className="sound"
          aria-label="toggle sound"
          data-cursor="hover"
          data-cursor-label={sound ? "Mute" : "Unmute"}
          onClick={() => {
            setSound((s) => !s);
            if (!sound) tone({ freq: 880 });
          }}
        >
          ♪ {sound ? "ON" : "OFF"}
        </button>
      </div>
    </nav>
  );
}

/* ============================================================
   Hero
   ============================================================ */
function useTypewriter(
  words: string[],
  { typeMs = 70, holdMs = 1600, eraseMs = 35 } = {}
) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState<"type" | "erase">("type");

  useEffect(() => {
    if (!words.length) return;
    const word = words[i % words.length];
    let t: ReturnType<typeof setTimeout>;
    if (phase === "type") {
      t =
        text.length < word.length
          ? setTimeout(() => setText(word.slice(0, text.length + 1)), typeMs)
          : setTimeout(() => setPhase("erase"), holdMs);
    } else if (text.length > 0) {
      t = setTimeout(() => setText(word.slice(0, text.length - 1)), eraseMs);
    } else {
      setI((n) => n + 1);
      setPhase("type");
      return;
    }
    return () => clearTimeout(t);
  }, [text, phase, i, words, typeMs, holdMs, eraseMs]);

  return text;
}

function Clock() {
  const [time, setTime] = useState("00:00:00");
  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: profile.timezone,
        }).format(new Date())
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <span>
      {time} <span style={{ color: "var(--ink-faint)" }}>{profile.tzLabel}</span>
    </span>
  );
}

function Engine() {
  const [mounted, setMounted] = useState(false);
  const [fps, setFps] = useState(60);
  const [load, setLoad] = useState(0.42);

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => setFps(58 + Math.floor(Math.random() * 3)), 1400);
    const nav = performance.getEntriesByType("navigation")[0] as
      | PerformanceNavigationTiming
      | undefined;
    if (nav?.domContentLoadedEventEnd)
      setLoad(Math.max(0.05, nav.domContentLoadedEventEnd / 1000));
    return () => clearInterval(id);
  }, []);

  return (
    <div className="engine">
      <div className="head">
        <span className="dots">
          <span />
          <span />
          <span />
        </span>
        <span>~/portfolio · build</span>
      </div>
      <div className="body">
        <div className="row">
          <span className="k">status</span>
          <span className="v accent">● shipping</span>
        </div>
        <div className="row">
          <span className="k">role</span>
          <span className="v">{profile.role}</span>
        </div>
        <div className="row">
          <span className="k">based</span>
          <span className="v">{profile.based}</span>
        </div>
        <div className="row">
          <span className="k">at</span>
          <span className="v">{profile.at}</span>
        </div>
        <div className="row">
          <span className="k">cgpa</span>
          <span className="v accent">{profile.cgpa}</span>
        </div>
        <div className="row">
          <span className="k">local</span>
          <span className="v">
            <Clock />
          </span>
        </div>
        <div className="row">
          <span className="k">fps</span>
          <span className="v">{mounted ? fps : 60}</span>
        </div>
        <div className="row">
          <span className="k">load</span>
          <span className="v">{mounted ? load.toFixed(2) : "0.42"}</span>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const typed = useTypewriter(roles);
  const [years, setYears] = useState(0);

  useEffect(() => {
    const now = new Date();
    setYears(
      Math.max(1, Math.floor(now.getFullYear() - profile.since + now.getMonth() / 12))
    );
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero-meta">
        <div className="col">
          <span className="val">
            Building since {profile.since} ·{" "}
            {years > 0 ? `${years} ${years === 1 ? "yr" : "yrs"}` : "loading..."}
          </span>
        </div>
        <div className="col right">
          <span className="label">— Currently</span>
          <span className="val">{profile.currently}</span>
        </div>
      </div>

      <h1 className="reveal in">
        {profile.first}
        <br />
        <span className="it">{profile.last}</span>
        <span className="ember">.</span>
      </h1>

      <div className="roles reveal in delay-1">
        <span className="role">
          <b>{typed}</b>
          <span style={{ color: "var(--accent)" }}>▍</span>
        </span>
        <span className="sep" />
        <span>{profile.tagline[0]}</span>
        <span className="sep" />
        <span>{profile.tagline[1]}</span>
      </div>

      <div className="hero-bottom">
        <p className="reveal in delay-2">
          <span className="small">— Manifesto / 01</span>
          Interfaces aren&apos;t built — they&apos;re{" "}
          <span style={{ fontStyle: "italic", color: "var(--accent-2)" }}>
            experienced
          </span>
          . I work where the algorithm meets the editor: reasoning about the problem,
          then writing the code that makes it feel effortless.
        </p>
        <div className="reveal in delay-3" />
        <div className="reveal in delay-3">
          <Engine />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Work — project rows with a cursor-following preview
   ============================================================ */
export function Work() {
  const [active, setActive] = useState<string | null>(null);
  const float = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    const onMove = (e: MouseEvent) => {
      if (!float.current) return;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      let x = e.clientX + 240;
      let y = e.clientY;
      if (x + 200 > vw - 55) x = e.clientX - 240;
      if (y + 130 > vh - 20) y = vh - 150;
      if (y - 130 < 80) y = 200;
      float.current.style.left = `${x}px`;
      float.current.style.top = `${y}px`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mounted]);

  return (
    <section className="section" id="work">
      <div className="section-head">
        <span className="num">/ 02</span>
        <h2>
          <span className="it">Selected</span> work
        </h2>
        <span className="meta">
          {projects.length} of {projects.length} · all repos →
        </span>
      </div>

      <div className="projects">
        <div className="projects-list">
          {projects.map((p) => (
            <a
              key={p.id}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="project-row reveal"
              data-cursor="hover"
              data-cursor-label="Visit ↗"
              onMouseEnter={() => setActive(p.preview)}
              onMouseLeave={() => setActive(null)}
            >
              <span className="idx">{p.num}</span>
              <span className="title">
                {p.title}
                <span className="it">{p.tagline}</span>
                <span className="arrow">↗</span>
              </span>
              <span className="role">{p.role}</span>
              <span className="stack">{p.stack}</span>
              <span className="year">{p.year}</span>
            </a>
          ))}
        </div>

        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="view-all reveal"
          data-cursor="hover"
          data-cursor-label="GitHub →"
        >
          <span className="va-line" />
          <span className="va-label">
            <span className="va-mono">/ everything else</span>
            <span className="va-title">
              View <span className="it">all repos</span>
            </span>
            <span className="va-sub">In progress · shipped · experiments</span>
          </span>
          <span className="va-arrow">→</span>
        </a>

        {mounted && (
          <div
            ref={float}
            className={"preview-float" + (active ? " show" : "")}
            aria-hidden="true"
          >
            {Object.entries(previews).map(([key, Preview]) => (
              <div key={key} className={"frame" + (active === key ? " active" : "")}>
                <Preview />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ============================================================
   Craft — skill bars that fill on scroll
   ============================================================ */
export function Craft() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setInView(true)),
      { threshold: 0.2 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const cols = [
    { cls: "ux", label: "problem solver", tag: "Fundamentals", skills: skillsSolver },
    { cls: "eng", label: "interface engineer", tag: "Frontend", skills: skillsEngineer },
  ];

  return (
    <section className="section" id="craft">
      <div className="section-head">
        <span className="num">/ 03</span>
        <h2>
          Two halves, <span className="it">one brain</span>
        </h2>
        <span className="meta">Algorithms × Interface</span>
      </div>

      <div ref={ref} className={"split" + (inView ? " in" : "")}>
        <div className="col ux">
          <div className="head">
            <h3>
              The <span className="it">{cols[0].label}</span>
            </h3>
            <span className="tag">{cols[0].tag}</span>
          </div>
          {cols[0].skills.map((s) => (
            <div className="skill" key={s.name}>
              <div className="name">
                {s.name}
                {s.sub && <span className="sub">— {s.sub}</span>}
              </div>
              <div className="bar">
                <div
                  className="fill"
                  style={{ "--w": `${s.w}%` } as React.CSSProperties}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="divider" />

        <div className="col eng">
          <div className="head">
            <h3>
              The <span className="it">{cols[1].label}</span>
            </h3>
            <span className="tag">{cols[1].tag}</span>
          </div>
          {cols[1].skills.map((s) => (
            <div className="skill" key={s.name}>
              <div className="name">
                {s.name}
                {s.sub && <span className="sub">— {s.sub}</span>}
              </div>
              <div className="bar">
                <div
                  className="fill"
                  style={{ "--w": `${s.w}%` } as React.CSSProperties}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="tooling reveal">
        <span className="label">— Tooling</span>
        {tooling.map((t) => (
          <span className="chip" key={t}>
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   Path — timeline that expands on hover
   ============================================================ */
export function Path() {
  const [open, setOpen] = useState(path[0].id);
  return (
    <section className="section" id="path">
      <div className="section-head">
        <span className="num">/ 04</span>
        <h2>
          <span className="it">One</span> year, six markers
        </h2>
        <span className="meta">Path · 2012 → now</span>
      </div>

      <div className="exp">
        <div className="exp-rail" />
        {path.map((m) => {
          const isOpen = open === m.id;
          return (
            <div
              key={m.id}
              className={
                "exp-row" + (isOpen ? " open" : "") + (m.current ? " current" : "")
              }
              onMouseEnter={() => setOpen(m.id)}
            >
              <div className="exp-when">
                <div className="exp-end">{m.end}</div>
                <div className="exp-start">{m.start}</div>
              </div>
              <div className="exp-node">
                <span className="exp-dot" />
              </div>
              <div className="exp-body">
                <div className="exp-head">
                  <h3 className="exp-title">
                    {m.role} <span className="exp-at">at</span>{" "}
                    <span className="exp-co">{m.company}</span>
                    {m.team && <span className="exp-team"> · {m.team}</span>}
                  </h3>
                  <div className="exp-meta">
                    <span>{m.location}</span>
                    {m.highlight && <span className="exp-pill">{m.highlight}</span>}
                  </div>
                </div>
                <ul className="exp-bullets">
                  {m.bullets.map((b) => (
                    <li key={b}>
                      <span className="exp-marker">→</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ============================================================
   Quick picks
   ============================================================ */
export function QuickPicks() {
  const [state, setState] = useState(picks.map((p) => p.pick));
  return (
    <div className="fun">
      {picks.map((p, i) => (
        <div className="fun-row" key={p.q}>
          <span className="q">{p.q}</span>
          <span className="pick">
            {[p.a, p.b].map((opt, j) => (
              <button
                key={opt}
                data-cursor="hover"
                className={state[i] === j ? "on" : ""}
                onClick={() => {
                  setState((s) => s.map((v, k) => (k === i ? j : v)));
                  tone({ freq: j === 0 ? 720 : 940, gain: 0.03 });
                }}
              >
                {opt}
              </button>
            ))}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ============================================================
   Portrait — falls back to a monogram until /public/portrait.jpg exists
   ============================================================ */
export function Portrait({ src }: { src: string }) {
  const [ok, setOk] = useState(false);

  // Probe the file first so a missing portrait never flashes a broken image.
  useEffect(() => {
    const img = new Image();
    img.onload = () => setOk(true);
    img.src = src;
  }, [src]);

  return (
    <div className="os-portrait-frame">
      {ok ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={profile.name} />
      ) : (
        <div className="os-portrait-empty">
          <span className="glyph">a</span>
          <span className="hint">
            drop portrait.jpg
            <br />
            into /public
          </span>
        </div>
      )}
      <div className="os-portrait-grain" />
    </div>
  );
}

export { Reveals };
