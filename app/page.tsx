"use client";

import { useEffect, useRef, useState } from "react";
import { OWNER, friendLinks, interview, projects, research, services, ui, type Lang } from "./content";

const LANG_KEY = "site-lang";

function Arrow({ size = 14 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" /></svg>;
}

function Cursor() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dot = document.getElementById("cur-dot");
    const ring = document.getElementById("cur-ring");
    if (!dot || !ring) return;
    document.documentElement.classList.add("has-cursor");
    let x = -100, y = -100, rx = -100, ry = -100, raf = 0, visible = false;
    const move = (e: MouseEvent) => {
      x = e.clientX; y = e.clientY;
      if (!visible) { visible = true; rx = x; ry = y; document.documentElement.classList.add("cursor-visible"); }
      dot.style.transform = `translate(${x}px, ${y}px)`;
      const t = (e.target as HTMLElement | null)?.closest?.("a, button, [role=button], input, textarea, select, label");
      document.documentElement.classList.toggle("cursor-hover", !!t);
    };
    const leave = () => { visible = false; document.documentElement.classList.remove("cursor-visible"); };
    const down = () => document.documentElement.classList.add("cursor-down");
    const up = () => document.documentElement.classList.remove("cursor-down");
    const loop = () => {
      const k = reduce ? 1 : 0.18;
      rx += (x - rx) * k; ry += (y - ry) * k;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseleave", leave);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.documentElement.classList.remove("has-cursor", "cursor-visible", "cursor-hover", "cursor-down");
    };
  }, []);
  return <><div id="cur-dot" aria-hidden="true" /><div id="cur-ring" aria-hidden="true" /></>;
}

function SmoothScroll() {
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    const html = document.documentElement;
    html.style.scrollBehavior = "auto";
    let target = window.scrollY, current = window.scrollY, raf = 0, programmatic = false;
    const DAMP = 0.14;
    const max = () => html.scrollHeight - window.innerHeight;
    const tick = () => {
      const diff = target - current;
      if (Math.abs(diff) < 0.4) {
        current = target;
        programmatic = true; window.scrollTo(0, current);
        raf = 0; return;
      }
      current += diff * DAMP;
      programmatic = true; window.scrollTo(0, current);
      raf = requestAnimationFrame(tick);
    };
    const kick = () => { if (!raf) raf = requestAnimationFrame(tick); };
    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) return; // pinch zoom
      e.preventDefault();
      const unit = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? window.innerHeight : 1;
      target = Math.max(0, Math.min(max(), target + e.deltaY * unit));
      kick();
    };
    const onScroll = () => {
      if (programmatic) { programmatic = false; return; }
      // native scroll (keyboard, scrollbar, find): resync
      target = current = window.scrollY;
    };
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a[href^='#']") as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute("href")!.slice(1);
      const el = id ? document.getElementById(id) : document.body;
      if (!el) return;
      e.preventDefault();
      target = Math.max(0, Math.min(max(), el.getBoundingClientRect().top + window.scrollY));
      history.replaceState(null, "", id ? `#${id}` : window.location.pathname);
      kick();
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onClick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick);
      html.style.scrollBehavior = "";
    };
  }, []);
  return null;
}

// Centre burst (50% 46%), re-fractured into irregular glass shards (Voronoi tiling).
const SHARDS: { poly: string; dx: number; dy: number; rot: number; dist: number }[] = [
  { poly: "57.7% 58.8%, 58.4% 57.9%, 57.1% 35.1%, 42.3% 41.0%, 42.2% 50.1%", dx: 0.91, dy: 0.41, rot: 10, dist: 1158 },
  { poly: "57.1% 35.1%, 58.4% 57.9%, 73.0% 52.2%, 76.8% 39.2%, 74.5% 34.6%, 59.1% 31.8%", dx: 0.99, dy: -0.14, rot: 11, dist: 1261 },
  { poly: "23.8% 61.8%, 42.2% 50.1%, 42.3% 41.0%, 34.6% 35.4%, 21.9% 59.1%", dx: -0.99, dy: 0.16, rot: -6, dist: 1268 },
  { poly: "34.6% 35.4%, 42.3% 41.0%, 57.1% 35.1%, 59.1% 31.8%, 55.5% 22.9%, 28.3% 17.8%, 26.4% 19.2%", dx: -0.37, dy: -0.93, rot: 6, dist: 1279 },
  { poly: "25.8% 72.3%, 56.7% 67.2%, 57.7% 58.8%, 42.2% 50.1%, 23.8% 61.8%", dx: -0.5, dy: 0.87, rot: -2, dist: 1280 },
  { poly: "59.1% 70.9%, 99.1% 75.9%, 73.0% 52.2%, 58.4% 57.9%, 57.7% 58.8%, 56.7% 67.2%", dx: 0.78, dy: 0.62, rot: -11, dist: 1364 },
  { poly: "59.1% 31.8%, 74.5% 34.6%, 86.7% 15.9%, 63.5% 7.6%, 55.5% 22.9%", dx: 0.63, dy: -0.78, rot: -1, dist: 1369 },
  { poly: "25.7% 72.6%, 56.4% 94.1%, 59.1% 70.9%, 56.7% 67.2%, 25.8% 72.3%", dx: -0.1, dy: 1.0, rot: 8, dist: 1374 },
  { poly: "21.9% 59.1%, 34.6% 35.4%, 26.4% 19.2%, 0.0% 23.5%, 0.0% 40.8%", dx: -0.96, dy: -0.28, rot: -5, dist: 1392 },
  { poly: "61.0% 0.0%, 35.6% 0.0%, 28.3% 17.8%, 55.5% 22.9%, 63.5% 7.6%", dx: -0.09, dy: -1.0, rot: -6, dist: 1400 },
  { poly: "73.0% 52.2%, 99.1% 75.9%, 100.0% 76.3%, 100.0% 46.5%, 76.8% 39.2%", dx: 0.97, dy: 0.22, rot: -9, dist: 1428 },
  { poly: "76.8% 39.2%, 100.0% 46.5%, 100.0% 11.4%, 86.7% 15.9%, 74.5% 34.6%", dx: 0.93, dy: -0.37, rot: 3, dist: 1453 },
  { poly: "25.7% 72.6%, 25.8% 72.3%, 23.8% 61.8%, 21.9% 59.1%, 0.0% 40.8%, 0.0% 100.0%, 7.0% 100.0%", dx: -0.85, dy: 0.53, rot: -4, dist: 1483 },
  { poly: "7.0% 100.0%, 46.6% 100.0%, 56.4% 94.2%, 56.4% 94.1%, 25.7% 72.6%", dx: -0.4, dy: 0.92, rot: -2, dist: 1488 },
  { poly: "56.4% 94.2%, 66.2% 100.0%, 100.0% 100.0%, 100.0% 76.3%, 99.1% 75.9%, 59.1% 70.9%, 56.4% 94.1%", dx: 0.58, dy: 0.82, rot: -2, dist: 1496 },
  { poly: "26.4% 19.2%, 28.3% 17.8%, 35.6% 0.0%, 0.0% 0.0%, 0.0% 23.5%", dx: -0.7, dy: -0.72, rot: -9, dist: 1499 },
  { poly: "63.5% 7.6%, 86.7% 15.9%, 100.0% 11.4%, 100.0% 0.0%, 61.0% 0.0%", dx: 0.64, dy: -0.77, rot: 9, dist: 1509 },
  { poly: "56.4% 94.2%, 46.6% 100.0%, 66.2% 100.0%", dx: 0.12, dy: 0.99, rot: 8, dist: 1517 },
];
function HeroArt() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const shards = refs.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let raf = 0;
    const apply = () => {
      raf = 0;
      // burst and clear within ~65% of a viewport, before the content below
      const range = window.innerHeight * 0.65;
      const p = Math.max(0, Math.min(1, window.scrollY / range));
      // starts fully assembled (0), holds, then bursts — ease-in, no jump
      const fly = p * p;
      // non-linear fade: stays solid, then drops off as pieces reach the far edge
      const opacity = Math.pow(1 - p, 2.2);
      for (let i = 0; i < shards.length; i++) {
        const el = shards[i]; const s = SHARDS[i]; if (!el) continue;
        el.style.transform = `translate(${s.dx * s.dist * fly}px, ${s.dy * s.dist * fly}px) rotate(${s.rot * fly}deg)`;
        el.style.opacity = `${opacity}`;
        el.style.filter = p > 0.01 ? `drop-shadow(0 6px 16px rgba(0,0,0,${0.5 * p})) drop-shadow(0 0 ${1 + 4 * p}px rgba(118,185,0,${0.45 * (1 - p)}))` : "none";
      }
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(apply); };
    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, []);
  return (
    <figure className="hero-art">
      <div className="shatter" aria-label="Athena">
        {SHARDS.map((sh, i) => (
          <div
            key={i}
            ref={(el) => { refs.current[i] = el; }}
            className="shard"
            style={{ clipPath: `polygon(${sh.poly})`, WebkitClipPath: `polygon(${sh.poly})`, backgroundImage: `url(${OWNER.art})` }}
          />
        ))}
      </div>
    </figure>
  );
}

function SectionHead({ index, label, children }: { index: string; label: string; children?: React.ReactNode }) {
  return (
    <div className="section-head reveal">
      <span className="idx">{index}</span>
      <span className="lbl">{label}</span>
      <span className="rule" />
      {children}
    </div>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("zh");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = ui[lang];

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(LANG_KEY);
      if (saved === "en" || saved === "zh") setLang(saved);
      else if (!navigator.language.toLowerCase().startsWith("zh")) setLang("en");
    } catch {}
  }, []);

  useEffect(() => { document.documentElement.lang = lang === "zh" ? "zh-CN" : "en"; }, [lang]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!("IntersectionObserver" in window)) { els.forEach((el) => el.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.05 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [lang]);

  const toggleLang = () => {
    const next: Lang = lang === "zh" ? "en" : "zh";
    setLang(next);
    try { window.localStorage.setItem(LANG_KEY, next); } catch {}
  };

  const navItems: [string, string, string][] = [
    ["#about", "01", t.nav.about],
    ["#research", "02", t.nav.research],
    ["#projects", "03", t.nav.projects],
    ["#club", "04", t.nav.club],
    ["#contact", "05", t.nav.contact],
  ];

  const tickerItems = [...t.ticker, ...t.ticker];

  return (
    <main data-lang={lang}>
      <Cursor />
      <SmoothScroll />
      <header className={`nav${scrolled ? " scrolled" : ""}${menuOpen ? " open" : ""}`}>
        <a className="brand" href="#home"><i className="mark" /><span>{OWNER.handle.toUpperCase()}</span></a>
        <nav aria-label="main">
          {navItems.map(([href, n, label]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}><small>{n}</small>{label}</a>)}
        </nav>
        <div className="nav-right">
          <a className="sq ghost" href={OWNER.github} target="_blank" rel="noreferrer" aria-label="GitHub">GH</a>
          <button className="sq" type="button" onClick={toggleLang} aria-label={t.langAria}>{t.langButton}</button>
          <button className="sq burger" type="button" onClick={() => setMenuOpen((v) => !v)} aria-label="menu" aria-expanded={menuOpen}>{menuOpen ? "×" : "≡"}</button>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="hero" id="home" aria-labelledby="hero-heading">
        <div className="grid-bg" aria-hidden="true" />
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="mono label">{t.heroLabel}</p>
            <h1 id="hero-heading" className="display">
              <span className="word">{t.heroTitle[0]}</span>
              <span className="name">{t.heroTitle[1]}<i className="cursor" aria-hidden="true" /></span>
            </h1>
            <p className="hero-sub">{t.heroSub}</p>
            <p className="hero-text">{t.heroText}</p>
            <div className="hero-actions">
              <a className="btn primary" href="#projects">{t.heroButtons.projects}<Arrow /></a>
              <a className="btn" href="#contact">{t.heroButtons.contact}<Arrow /></a>
            </div>
          </div>
          <HeroArt />
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {tickerItems.map((item, i) => <span key={i}>{item}<b>///</b></span>)}
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section className="section" id="about">
        <div className="wrap">
          <SectionHead index={t.aboutIndex} label={t.aboutLabel} />
          <div className="about">
            <div className="about-main reveal">
              <h2 className="statement">{t.aboutTitle}</h2>
              <p className="mono label traits">{t.aboutTraits}</p>
              <dl className="about-blocks">
                {t.aboutBlocks.map((b) => <div key={b.label}><dt className="mono">{b.label}</dt><dd>{b.text}</dd></div>)}
              </dl>
              <img className="about-eel" src="/eel.png" alt="Japanese eel engraving" loading="lazy" />
            </div>
            <div className="reveal">
          <aside className="spec" aria-label={t.spec.title}>
            <div className="spec-head"><span className="mono">{t.spec.title}</span><span className="mono dim">v2026.09</span></div>
            <dl>
              {t.spec.rows.map(([k, v]) => <div key={k}><dt className="mono">{k}</dt><dd>{v}</dd></div>)}
            </dl>
            <div className="spec-foot">
              <a href={OWNER.github} target="_blank" rel="noreferrer" className="mono">github.com/{OWNER.handle}<Arrow size={11} /></a>
              <a href={OWNER.huggingface} target="_blank" rel="noreferrer" className="mono">huggingface.co/Hippocrene<Arrow size={11} /></a>
            </div>
          </aside>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESEARCH ── */}
      <section className="section" id="research">
        <div className="wrap">
          <SectionHead index={t.researchIndex} label={t.researchLabel} />
          <div className="section-title-row reveal">
            <h2 className="h2">{t.researchTitle}</h2>
            <p className="intro">{t.researchIntro}</p>
          </div>
          <div className="rows">
            {research.map((r) => {
              const body = (
                <>
                  <span className="mono idx">{r.id}</span>
                  <h3>{r.title[lang]}</h3>
                  <div className="row-body">
                    <p>{r.text[lang]}</p>
                    <p className="mono tags">{r.tags.join(" / ")}</p>
                  </div>
                  <span className="row-end"><span className="pill">{r.status[lang]}</span>{r.href ? <Arrow /> : null}</span>
                </>
              );
              return r.href
                ? <a className="row reveal" href={r.href} target="_blank" rel="noreferrer" key={r.id}>{body}</a>
                : <div className="row reveal" key={r.id}>{body}</div>;
            })}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="section" id="projects">
        <div className="wrap">
          <SectionHead index={t.projectsIndex} label={t.projectsLabel}>
            <span className="mono dim count">{String(projects.length).padStart(2, "0")} REPOS</span>
          </SectionHead>
          <div className="section-title-row reveal"><h2 className="h2">{t.projectsTitle}</h2></div>
          <div className="cards">
            {projects.map((p) => (
              <a className={`card reveal${p.featured ? " featured" : ""}`} href={p.href} target="_blank" rel="noreferrer" key={p.id}>
                <div className="card-top mono"><span className="idx">{p.id}</span><span className="dim">{p.kind === "model" ? t.viewModel : t.viewRepo}</span></div>
                <h3>{p.name}</h3>
                <p>{p.text[lang]}</p>
                <div className="card-foot"><span className="mono tags">{p.stack.join(" / ")}</span><Arrow /></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLUB ── */}
      <section className="section club" id="club">
        <div className="wrap">
          <SectionHead index={t.clubIndex} label={t.clubLabel} />
          <div className="club-grid">
            <h2 className="statement reveal">{t.clubTitle.map((l, i) => <span key={i} className="block">{l}</span>)}</h2>
            <p className="club-intro reveal">{t.clubIntro}</p>
          </div>
          <a className="interview reveal" href={interview.href} target="_blank" rel="noreferrer">
            <div className="interview-play" aria-hidden="true"><i /></div>
            <div className="interview-body">
              <p className="mono">{t.interviewLabel}</p>
              <h3>{t.interviewTitle}</h3>
              <p className="interview-text">{t.interviewText}</p>
            </div>
            <div className="interview-end mono"><span>{t.interviewDate}</span><span className="cta">{t.interviewCta}<Arrow /></span></div>
          </a>
          <div className="services">
            {services.map((s) => {
              const body = (
                <>
                  <div className="service-top mono"><span>{s.url}</span><span className="live"><i />{s.inviteOnly ? t.inviteOnly : t.online}</span></div>
                  <h3>{s.name[lang]}</h3>
                  <p>{s.text[lang]}</p>
                  <div className="card-foot"><span className="mono tags">{s.tags.join(" / ")}</span>{s.href ? <Arrow /> : null}</div>
                </>
              );
              return s.href
                ? <a className="service reveal" href={s.href} target="_blank" rel="noreferrer" key={s.url}>{body}</a>
                : <div className="service reveal static" key={s.url}>{body}</div>;
            })}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="section" id="contact">
        <div className="wrap">
          <SectionHead index={t.contactIndex} label={t.contactLabel} />
          <h2 className="display contact-title reveal">{t.contactTitle.map((l, i) => <span key={i}>{l}</span>)}</h2>
          <div className="contact-rows reveal">
            <a className="crow" href={`mailto:${OWNER.email}`}><span className="mono">{t.contactItems.email}</span><strong>{OWNER.email}</strong><Arrow /></a>
            <a className="crow" href={OWNER.github} target="_blank" rel="noreferrer"><span className="mono">{t.contactItems.github}</span><strong>@{OWNER.handle}</strong><Arrow /></a>
            <a className="crow" href={OWNER.huggingface} target="_blank" rel="noreferrer"><span className="mono">{t.contactItems.hf}</span><strong>@Hippocrene</strong><Arrow /></a>
            <div className="crow"><span className="mono">{t.contactItems.wechat}</span><strong>{OWNER.wechat}</strong><span /></div>
            <div className="crow"><span className="mono">{t.contactItems.location}</span><strong>{OWNER.location[lang]}</strong><span /></div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap footer-grid mono">
          <span>{t.copyright}</span>
          <span className="dim">{t.footerBuilt}</span>
          <span className="friends"><span className="dim">{t.friendLinks}</span>{friendLinks.map((f) => <a key={f.href} href={f.href} target="_blank" rel="noreferrer">{f.name}</a>)}</span>
          <a href="#home" className="top">{t.backTop}</a>
        </div>
      </footer>
    </main>
  );
}
