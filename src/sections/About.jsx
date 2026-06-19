import React, { useEffect, useRef, useState } from "react";

/* ── useInView hook ─────────────────────────────────────────── */
function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.15, ...options }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

/* ── Data ───────────────────────────────────────────────────── */
const skills = [
  { label: "React.js",     color: "#61DAFB", bg: "rgba(97,218,251,0.08)"  },
  { label: "Node.js",      color: "#68A063", bg: "rgba(104,160,99,0.08)"  },
  { label: "JavaScript",   color: "#F7DF1E", bg: "rgba(247,223,30,0.08)"  },
  { label: "TypeScript",   color: "#3178C6", bg: "rgba(49,120,198,0.08)"  },
  { label: "MongoDB",      color: "#47A248", bg: "rgba(71,162,72,0.08)"   },
  { label: "Tailwind CSS", color: "#38BDF8", bg: "rgba(56,189,248,0.08)"  },
  { label: "Express.js",   color: "#00FF88", bg: "rgba(0,255,136,0.08)"   },
  { label: "SQL",          color: "#F29111", bg: "rgba(242,145,17,0.08)"  },
  { label: "Git & GitHub", color: "#F05032", bg: "rgba(240,80,50,0.08)"   },
  { label: "REST APIs",    color: "#A78BFA", bg: "rgba(167,139,250,0.08)" },
];

const cards = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: "Frontend Dev",
    desc: "Pixel-perfect UIs with React, Tailwind, and smooth animations.",
    color: "#00FF88",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: "Backend Dev",
    desc: "Scalable REST APIs and server logic with Node.js & Express.",
    color: "#00d4ff",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/>
      </svg>
    ),
    title: "Database Design",
    desc: "Efficient data modeling with MongoDB, MySQL & PostgreSQL.",
    color: "#f472b6",
  },
];

/* ── Sub-components ─────────────────────────────────────────── */
function SectionLabel({ children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
      <div style={{ width: "28px", height: "2px", background: "linear-gradient(90deg,#00FF88,#00d4ff)", borderRadius: "2px" }} />
      <span style={{
        fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.14em",
        textTransform: "uppercase", color: "#00FF88",
      }}>
        {children}
      </span>
    </div>
  );
}

function SkillBadge({ label, color, bg, delay }) {
  const [ref, inView] = useInView();
  return (
    <span
      ref={ref}
      className="skill-badge"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "5px 13px",
        borderRadius: "50px",
        background: bg,
        border: `1px solid ${color}35`,
        color,
        fontSize: "clamp(0.72rem, 1.4vw, 0.82rem)",
        fontWeight: 500,
        letterSpacing: "0.02em",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0) scale(1)" : "translateY(12px) scale(0.95)",
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
        cursor: "default",
        whiteSpace: "nowrap",
      }}
    >
      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: color, flexShrink: 0 }} />
      {label}
    </span>
  );
}

function ServiceCard({ icon, title, desc, color, delay }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className="service-card"
      style={{
        flex: "1 1 180px",
        minWidth: 0,
        padding: "clamp(1rem,2.5vw,1.4rem)",
        borderRadius: "16px",
        background: "rgba(255,255,255,0.03)",
        border: `1px solid ${color}20`,
        backdropFilter: "blur(12px)",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms, border-color 0.3s ease, box-shadow 0.3s ease`,
        cursor: "default",
      }}
    >
      <div style={{ color, marginBottom: "12px", display: "flex", alignItems: "center" }}>{icon}</div>
      <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "clamp(0.9rem,1.6vw,1rem)", marginBottom: "6px" }}>
        {title}
      </h3>
      <p style={{ color: "rgba(209,213,219,0.7)", fontSize: "clamp(0.78rem,1.3vw,0.88rem)", lineHeight: 1.65, margin: 0 }}>
        {desc}
      </p>
    </div>
  );
}

/* ── Timeline ────────────────────────────────────────────────── */
const timeline = [
  { year: "2022", title: "Started Coding Journey", desc: "Dived into HTML, CSS, JavaScript fundamentals." },
  { year: "2023", title: "React & Full-Stack", desc: "Built full-stack apps using React, Node.js & MongoDB." },
  { year: "2024", title: "Real-World Projects", desc: "Delivered client projects and open-source contributions." },
  { year: "Now",  title: "Open to Opportunities", desc: "Seeking roles to build impactful products at scale." },
];

function TimelineItem({ year, title, desc, delay, isLast }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        gap: "16px",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0)" : "translateX(-20px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {/* Left spine */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
        <div style={{
          width: "36px", height: "36px", borderRadius: "50%",
          background: "rgba(0,255,136,0.12)", border: "2px solid #00FF88",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "0.6rem", fontWeight: 700, color: "#00FF88", letterSpacing: "0.04em",
          flexShrink: 0, boxShadow: "0 0 12px rgba(0,255,136,0.25)",
        }}>
          {year}
        </div>
        {!isLast && (
          <div style={{
            width: "2px", flex: 1, minHeight: "28px",
            background: "linear-gradient(180deg,rgba(0,255,136,0.4),rgba(0,255,136,0.05))",
            marginTop: "6px",
          }} />
        )}
      </div>
      {/* Content */}
      <div style={{ paddingBottom: isLast ? 0 : "24px", paddingTop: "4px" }}>
        <div style={{ color: "#fff", fontWeight: 600, fontSize: "clamp(0.88rem,1.5vw,0.95rem)", marginBottom: "4px" }}>
          {title}
        </div>
        <div style={{ color: "rgba(209,213,219,0.65)", fontSize: "clamp(0.78rem,1.3vw,0.84rem)", lineHeight: 1.6 }}>
          {desc}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════════════════ */
export default function About() {
  const [titleRef, titleInView] = useInView();

  return (
    <section
      id="about-section"
      style={{
        position: "relative",
        width: "100%",
        background:
          "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(0,255,136,0.06) 0%, transparent 60%), linear-gradient(180deg,#0D1117 0%,#111827 50%,#0a0f1a 100%)",
        overflow: "hidden",
        padding: "clamp(5rem,10vw,8rem) 0 clamp(4rem,8vw,7rem)",
      }}
    >
      {/* ── Subtle grid ── */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(0,255,136,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,136,0.025) 1px,transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* ── Glow blobs ── */}
      <div style={{ position:"absolute", top:"10%", left:"-5%", width:"clamp(200px,35vw,320px)", height:"clamp(200px,35vw,320px)", borderRadius:"50%", background:"radial-gradient(circle,rgba(0,255,136,0.08),transparent 70%)", filter:"blur(40px)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:"5%", right:"-5%", width:"clamp(160px,28vw,260px)", height:"clamp(160px,28vw,260px)", borderRadius:"50%", background:"radial-gradient(circle,rgba(0,212,255,0.07),transparent 70%)", filter:"blur(40px)", pointerEvents:"none" }} />

      {/* ── Content wrapper ── */}
      <div style={{
        position: "relative", zIndex: 1,
        maxWidth: "1280px", margin: "0 auto",
        padding: "0 clamp(1rem,5vw,3.5rem)",
      }}>

        {/* ── Section heading ── */}
        <div
          ref={titleRef}
          style={{
            textAlign: "center", marginBottom: "clamp(3rem,6vw,5rem)",
            opacity: titleInView ? 1 : 0,
            transform: titleInView ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <SectionLabel>Who I Am</SectionLabel>
          <h2 style={{
            fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 800,
            color: "#fff", margin: "0 0 16px",
            letterSpacing: "-0.02em", lineHeight: 1.1,
          }}>
            About{" "}
            <span style={{
              background: "linear-gradient(135deg,#00FF88,#00d4ff)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Me
            </span>
          </h2>
          <p style={{
            color: "rgba(209,213,219,0.65)", maxWidth: "520px", margin: "0 auto",
            fontSize: "clamp(0.9rem,1.8vw,1.05rem)", lineHeight: 1.75,
          }}>
            A passionate Full-Stack Developer who loves turning ideas into elegant, performant web experiences.
          </p>
        </div>

        {/* ══ TWO-COLUMN LAYOUT ══ */}
        <div className="about-grid">

          {/* ── LEFT ── */}
          <div className="about-left" style={{ display:"flex", flexDirection:"column", gap:"clamp(1.8rem,3.5vw,2.4rem)" }}>

            {/* Bio card */}
            <BioCard />

            {/* Service cards */}
            <div>
              <SectionLabel>What I Do</SectionLabel>
              <div style={{ display:"flex", gap:"12px", flexWrap:"wrap" }}>
                {cards.map((c,i) => <ServiceCard key={c.title} {...c} delay={i*120} />)}
              </div>
            </div>

            {/* CTA */}
            <CtaRow />
          </div>

          {/* ── RIGHT ── */}
          <div className="about-right" style={{ display:"flex", flexDirection:"column", gap:"clamp(1.8rem,3.5vw,2.4rem)" }}>

            {/* Skills */}
            <div>
              <SectionLabel>Tech Stack</SectionLabel>
              <div style={{ display:"flex", flexWrap:"wrap", gap:"8px" }}>
                {skills.map((s,i) => <SkillBadge key={s.label} {...s} delay={i*60} />)}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <SectionLabel>My Journey</SectionLabel>
              <div style={{ display:"flex", flexDirection:"column" }}>
                {timeline.map((t,i) => (
                  <TimelineItem key={t.year} {...t} delay={i*120} isLast={i===timeline.length-1} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Scoped styles ── */}
      <style>{`
        /* Grid */
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(2rem, 4vw, 4rem);
          align-items: start;
        }

        /* Service card hover */
        .service-card:hover {
          border-color: rgba(0,255,136,0.35) !important;
          box-shadow: 0 8px 32px rgba(0,255,136,0.08) !important;
          transform: translateY(-4px) !important;
        }

        /* Skill badge hover */
        .skill-badge:hover {
          filter: brightness(1.25);
          transform: translateY(-2px) !important;
        }

        /* ── Tablet: 640–1023px ── */
        @media (max-width: 1023px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .about-left, .about-right {
            width: 100% !important;
          }
        }

        /* ── Mobile: ≤ 639px ── */
        @media (max-width: 639px) {
          .about-grid {
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ── Bio Card (separate to keep HoC clean) ─────────────────── */
function BioCard() {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      style={{
        padding: "clamp(1.2rem,3vw,1.8rem)",
        borderRadius: "20px",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(0,255,136,0.12)",
        backdropFilter: "blur(16px)",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: "all 0.7s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      <SectionLabel>Bio</SectionLabel>

      {/* avatar row */}
      <div style={{ display:"flex", alignItems:"center", gap:"14px", marginBottom:"16px" }}>
        <div style={{
          width:"52px", height:"52px", borderRadius:"50%", flexShrink:0,
          background:"linear-gradient(135deg,#00FF88,#00d4ff)",
          display:"flex", alignItems:"center", justifyContent:"center",
          fontSize:"1.4rem", fontWeight:800, color:"#0D1117",
        }}>R</div>
        <div>
          <div style={{ color:"#fff", fontWeight:700, fontSize:"clamp(0.95rem,1.8vw,1.1rem)" }}>Rohan Sharma</div>
          <div style={{ color:"#00FF88", fontSize:"clamp(0.75rem,1.3vw,0.84rem)", fontWeight:500 }}>Full-Stack Developer</div>
        </div>
      </div>

      <p style={{ color:"rgba(209,213,219,0.8)", fontSize:"clamp(0.85rem,1.6vw,0.96rem)", lineHeight:1.8, margin:"0 0 16px" }}>
        Hey! I'm <span style={{ color:"#00FF88", fontWeight:600 }}>Rohan</span>, a results-driven Full-Stack Developer with a love for
        building digital experiences that are fast, beautiful, and accessible. I craft solutions with{" "}
        <span style={{ color:"#00FF88", fontWeight:500 }}>React.js</span>,{" "}
        <span style={{ color:"#00FF88", fontWeight:500 }}>Node.js</span>, and modern web technologies.
      </p>

      {/* mini-stats */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"12px" }}>
        {[
          { val:"2+",  sub:"Years Exp."    },
          { val:"20+", sub:"Projects Done" },
          { val:"10+", sub:"Technologies"  },
        ].map(({ val, sub }) => (
          <div key={sub} style={{
            textAlign:"center", padding:"10px 6px", borderRadius:"12px",
            background:"rgba(0,255,136,0.05)", border:"1px solid rgba(0,255,136,0.1)",
          }}>
            <div style={{
              fontSize:"clamp(1.2rem,2.5vw,1.6rem)", fontWeight:800,
              background:"linear-gradient(135deg,#00FF88,#00d4ff)",
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
              lineHeight:1,
            }}>{val}</div>
            <div style={{ color:"rgba(156,163,175,0.85)", fontSize:"clamp(0.65rem,1.1vw,0.73rem)", marginTop:"4px", letterSpacing:"0.04em" }}>{sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── CTA Row ──────────────────────────────────────────────── */
function CtaRow() {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      style={{
        display:"flex", flexWrap:"wrap", gap:"12px", alignItems:"center",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.6s ease 0.2s",
      }}
    >
      <button
        onClick={() => document.getElementById("project")?.scrollIntoView({ behavior:"smooth" })}
        className="about-btn-primary"
        style={{
          display:"inline-flex", alignItems:"center", gap:"8px",
          padding:"11px clamp(20px,3vw,28px)", borderRadius:"50px",
          background:"linear-gradient(135deg,#00FF88,#00d4ff)", color:"#0D1117",
          fontWeight:700, fontSize:"clamp(0.82rem,1.4vw,0.92rem)",
          border:"none", cursor:"pointer",
          boxShadow:"0 0 20px rgba(0,255,136,0.4)",
          transition:"all 0.3s ease", letterSpacing:"0.03em", whiteSpace:"nowrap",
        }}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
          <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
        </svg>
        View Projects
      </button>
      <a
        href="/Rohan-Resume.pdf"
        download
        className="about-btn-outline"
        style={{
          display:"inline-flex", alignItems:"center", gap:"8px",
          padding:"11px clamp(20px,3vw,28px)", borderRadius:"50px",
          background:"transparent", color:"#00FF88",
          fontWeight:600, fontSize:"clamp(0.82rem,1.4vw,0.92rem)",
          border:"1.5px solid rgba(0,255,136,0.4)",
          textDecoration:"none", transition:"all 0.3s ease",
          letterSpacing:"0.03em", whiteSpace:"nowrap", backdropFilter:"blur(8px)",
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        Resume
      </a>
      <style>{`
        .about-btn-primary:hover { transform:translateY(-2px) scale(1.04); box-shadow:0 0 36px rgba(0,255,136,0.6)!important; }
        .about-btn-outline:hover  { background:rgba(0,255,136,0.08)!important; border-color:rgba(0,255,136,0.7)!important; transform:translateY(-2px); }
      `}</style>
    </div>
  );
}
