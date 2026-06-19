import React, { useState, useEffect, useRef } from "react";
import rohan from "../assets/heroImg/rohan.jpg";
import rohannew from "../assets/heroImg/RohanNew.jpeg";

/* ── Typewriter hook ───────────────────────────────────────── */
function useTypewriter(words, speed = 90, pause = 1800) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const current = words[wordIdx];
    const tick = () => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          timeoutRef.current = setTimeout(() => setDeleting(true), pause);
          return;
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setWordIdx((i) => (i + 1) % words.length);
          return;
        }
      }
    };
    timeoutRef.current = setTimeout(tick, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeoutRef.current);
  }, [text, deleting, wordIdx, words, speed, pause]);

  return text;
}

/* ── Floating particle ─────────────────────────────────────── */
function Particle({ style }) {
  return (
    <div
      style={{
        position: "absolute",
        borderRadius: "50%",
        background: "rgba(0,255,136,0.15)",
        animation: "floatUp 8s ease-in-out infinite",
        ...style,
      }}
    />
  );
}

/* ── Social link data ──────────────────────────────────────── */
const socials = [
  {
    label: "GitHub",
    href: "https://github.com/rohan700976",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rohansingh0880/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:rohansingh700976@gmail.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

/* ── Stats ─────────────────────────────────────────────────── */
const stats = [
  { value: "1+", label: "Years Exp." },
  { value: "5+", label: "Projects" },
  { value: "10+", label: "Technologies" },
];

/* ── Particles config ──────────────────────────────────────── */
const particles = [
  { width: 6, height: 6, top: "15%", left: "8%",  animationDelay: "0s",   animationDuration: "7s"  },
  { width: 4, height: 4, top: "70%", left: "5%",  animationDelay: "1.5s", animationDuration: "9s"  },
  { width: 8, height: 8, top: "40%", left: "92%", animationDelay: "0.8s", animationDuration: "6s"  },
  { width: 5, height: 5, top: "80%", left: "88%", animationDelay: "2.2s", animationDuration: "8s"  },
  { width: 3, height: 3, top: "25%", left: "50%", animationDelay: "3s",   animationDuration: "10s" },
  { width: 7, height: 7, top: "60%", left: "70%", animationDelay: "1s",   animationDuration: "7.5s"},
  { width: 4, height: 4, top: "10%", left: "75%", animationDelay: "2.5s", animationDuration: "11s" },
  { width: 5, height: 5, top: "90%", left: "40%", animationDelay: "0.3s", animationDuration: "8.5s"},
];

/* ═══════════════════════════════════════════════════════════ */
export default function Hero() {
  const role = useTypewriter(
    ["Full-Stack Developer", "React Specialist", "UI/UX Enthusiast", "Problem Solver"],
    85,
    2000
  );

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,255,136,0.1) 0%, transparent 60%), linear-gradient(135deg, #0D1117 0%, #111827 50%, #0a0f1a 100%)",
        overflow: "hidden",
        paddingTop: "clamp(90px, 12vw, 110px)",
        paddingBottom: "clamp(40px, 6vw, 80px)",
      }}
    >
      {/* ── Floating particles ── */}
      {particles.map((p, i) => (
        <Particle key={i} style={p} />
      ))}

      {/* ── Grid overlay ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(0,255,136,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* ── Main content ── */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 clamp(1.2rem, 5vw, 3rem)",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "clamp(2rem, 4vw, 4rem)",
          flexWrap: "wrap-reverse",
        }}
        className="hero-main"
      >
        {/* ── LEFT COLUMN ── */}
        <div
          style={{
            flex: "1 1 320px",
            display: "flex",
            flexDirection: "column",
            gap: "clamp(0.8rem, 2vw, 1.2rem)",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          {/* Greeting badge */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 16px",
                borderRadius: "50px",
                border: "1px solid rgba(0,255,136,0.3)",
                background: "rgba(0,255,136,0.06)",
                color: "#00FF88",
                fontSize: "clamp(0.75rem, 1.5vw, 0.85rem)",
                fontWeight: 500,
                letterSpacing: "0.08em",
                backdropFilter: "blur(8px)",
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "#00FF88",
                  boxShadow: "0 0 8px #00FF88",
                  animation: "blink 1.4s ease-in-out infinite",
                }}
              />
              Available for work
            </span>
          </div>

          {/* Name */}
          <div>
            <p
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "clamp(1rem, 2.2vw, 1.2rem)",
                fontWeight: 400,
                letterSpacing: "0.06em",
                marginBottom: "4px",
              }}
            >
              Hello, I'm
            </p>
            <h1
              style={{
                fontSize: "clamp(2.6rem, 6vw, 4.5rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "#ffffff",
                margin: 0,
              }}
            >
              Rohan
              {/* <span
                style={{
                  display: "block",
                  background: "linear-gradient(135deg, #00FF88, #00d4ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Sharma
              </span> */}
            </h1>
          </div>

          {/* Typewriter role */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              minHeight: "clamp(2rem, 4vw, 2.8rem)",
            }}
          >
            <span
              style={{
                fontSize: "clamp(1.1rem, 2.5vw, 1.65rem)",
                fontWeight: 600,
                color: "#00FF88",
                textShadow: "0 0 20px rgba(0,255,136,0.4)",
              }}
            >
              {role}
            </span>
            <span
              style={{
                display: "inline-block",
                width: "2px",
                height: "clamp(1.2rem, 2.5vw, 1.8rem)",
                background: "#00FF88",
                borderRadius: "2px",
                animation: "blink 1s step-end infinite",
                boxShadow: "0 0 8px rgba(0,255,136,0.8)",
              }}
            />
          </div>

          {/* Description */}
          <p
            style={{
              color: "rgba(209,213,219,0.85)",
              fontSize: "clamp(0.88rem, 1.6vw, 1.05rem)",
              lineHeight: 1.75,
              maxWidth: "480px",
              margin: 0,
            }}
          >
            Crafting seamless digital experiences with elegant design, efficient
            code, and a passion for building impactful web solutions that users
            love.
          </p>

          {/* CTA buttons */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              marginTop: "4px",
            }}
          >
            <button
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "clamp(10px,1.5vw,13px) clamp(22px,3vw,32px)",
                borderRadius: "50px",
                background: "linear-gradient(135deg, #00FF88, #00d4ff)",
                color: "#0D1117",
                fontWeight: 700,
                fontSize: "clamp(0.85rem, 1.4vw, 0.95rem)",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 0 24px rgba(0,255,136,0.45)",
                transition: "all 0.3s ease",
                letterSpacing: "0.03em",
                whiteSpace: "nowrap",
              }}
              className="hero-btn-primary"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
              </svg>
              About Me
            </button>

            <a
              href="/Rohan-Resume.pdf"
              download
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "clamp(10px,1.5vw,13px) clamp(22px,3vw,32px)",
                borderRadius: "50px",
                background: "transparent",
                color: "#00FF88",
                fontWeight: 600,
                fontSize: "clamp(0.85rem, 1.4vw, 0.95rem)",
                border: "1.5px solid rgba(0,255,136,0.45)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                textDecoration: "none",
                letterSpacing: "0.03em",
                whiteSpace: "nowrap",
                backdropFilter: "blur(8px)",
              }}
              className="hero-btn-outline"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Resume
            </a>
          </div>

          {/* Social links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginTop: "6px",
            }}
          >
            <span
              style={{
                color: "rgba(156,163,175,0.7)",
                fontSize: "0.78rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Find me
            </span>
            <div
              style={{
                flex: 1,
                height: "1px",
                background:
                  "linear-gradient(90deg, rgba(0,255,136,0.3), transparent)",
                maxWidth: "40px",
              }}
            />
            {socials.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                aria-label={label}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  border: "1px solid rgba(0,255,136,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(255,255,255,0.65)",
                  background: "rgba(255,255,255,0.03)",
                  transition: "all 0.25s ease",
                  textDecoration: "none",
                }}
                className="hero-social"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              gap: "clamp(1rem, 3vw, 2rem)",
              marginTop: "clamp(0.5rem, 2vw, 1rem)",
              paddingTop: "clamp(0.8rem, 2vw, 1.2rem)",
              borderTop: "1px solid rgba(255,255,255,0.07)",
              flexWrap: "wrap",
            }}
          >
            {stats.map(({ value, label }) => (
              <div key={label} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "clamp(1.4rem, 3vw, 2rem)",
                    fontWeight: 800,
                    background: "linear-gradient(135deg, #00FF88, #00d4ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: 1,
                  }}
                >
                  {value}
                </div>
                <div
                  style={{
                    fontSize: "clamp(0.7rem, 1.2vw, 0.8rem)",
                    color: "rgba(156,163,175,0.8)",
                    marginTop: "4px",
                    letterSpacing: "0.05em",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT COLUMN — Profile Image ── */}
        <div
          style={{
            flex: "0 0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.9s cubic-bezier(0.22,1,0.36,1) 0.15s",
          }}
        >
          {/* Decorative rings + image wrapper */}
          <div
            style={{
              position: "relative",
              width: "clamp(240px, 35vw, 360px)",
              height: "clamp(240px, 35vw, 360px)",
            }}
          >
            {/* Outer spinning ring */}
            <div
              style={{
                position: "absolute",
                inset: "-16px",
                borderRadius: "50%",
                border: "2px solid transparent",
                borderTopColor: "#00FF88",
                borderRightColor: "rgba(0,255,136,0.3)",
                animation: "spin 8s linear infinite",
              }}
            />
            {/* Inner spinning ring (opposite) */}
            <div
              style={{
                position: "absolute",
                inset: "-32px",
                borderRadius: "50%",
                border: "1.5px solid transparent",
                borderBottomColor: "#00d4ff",
                borderLeftColor: "rgba(0,212,255,0.2)",
                animation: "spin 12s linear infinite reverse",
              }}
            />

            {/* Glow blob */}
            <div
              style={{
                position: "absolute",
                inset: "-10px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(0,255,136,0.25) 0%, rgba(0,212,255,0.1) 50%, transparent 70%)",
                filter: "blur(20px)",
                animation: "breathe 4s ease-in-out infinite",
              }}
            />

            {/* Profile image */}
            <img
              src={rohannew}
              alt="Rohan — Full Stack Developer"
              style={{
                position: "relative",
                zIndex: 1,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                borderRadius: "50%",
                border: "3px solid #00FF88",
                boxShadow:
                  "0 0 0 6px rgba(0,255,136,0.1), 0 0 50px rgba(0,255,136,0.35), 0 0 100px rgba(0,255,136,0.15)",
                transition: "transform 0.5s ease",
              }}
              className="hero-img"
            />

            {/* Floating badge — top right */}
            <div
              style={{
                position: "absolute",
                top: "8%",
                right: "-10%",
                zIndex: 2,
                background: "rgba(13,17,23,0.9)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(0,255,136,0.25)",
                borderRadius: "12px",
                padding: "8px 14px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                animation: "floatBadge 3s ease-in-out infinite",
              }}
              className="hero-badge"
            >
              <span style={{ fontSize: "18px" }}>💻</span>
              <div>
                <div style={{ color: "#00FF88", fontWeight: 700, fontSize: "0.7rem", lineHeight: 1 }}>Full-Stack</div>
                <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.65rem" }}>Developer</div>
              </div>
            </div>

            {/* Floating badge — bottom left */}
            <div
              style={{
                position: "absolute",
                bottom: "8%",
                left: "-12%",
                zIndex: 2,
                background: "rgba(13,17,23,0.9)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(0,212,255,0.25)",
                borderRadius: "12px",
                padding: "8px 14px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                animation: "floatBadge 3.5s ease-in-out infinite 0.5s",
              }}
              className="hero-badge"
            >
              <span style={{ fontSize: "18px" }}>🚀</span>
              <div>
                <div style={{ color: "#00d4ff", fontWeight: 700, fontSize: "0.7rem", lineHeight: 1 }}>Open to</div>
                <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.65rem" }}>Opportunities</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        style={{
          position: "absolute",
          bottom: "clamp(16px, 3vw, 28px)",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          opacity: 0.6,
          animation: "fadeIn 1s ease 1.2s both",
          cursor: "pointer",
        }}
        onClick={() =>
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <div
          style={{
            width: "22px",
            height: "36px",
            borderRadius: "12px",
            border: "1.5px solid rgba(0,255,136,0.35)",
            display: "flex",
            justifyContent: "center",
            paddingTop: "6px",
          }}
        >
          <div
            style={{
              width: "3px",
              height: "8px",
              borderRadius: "2px",
              background: "#00FF88",
              animation: "scrollDot 1.8s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      {/* ── Scoped keyframes + responsive ── */}
      <style>{`
        @keyframes floatUp {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.6; }
          50%       { transform: translateY(-18px) scale(1.1); opacity: 1; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes breathe {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.06); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-8px); }
        }
        @keyframes scrollDot {
          0%   { transform: translateY(0); opacity: 1; }
          80%  { transform: translateY(10px); opacity: 0; }
          100% { transform: translateY(0); opacity: 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(10px); }
          to   { opacity: 0.6; transform: translateX(-50%) translateY(0); }
        }

        /* ── Button hover states ── */
        .hero-btn-primary:hover {
          transform: translateY(-3px) scale(1.04);
          box-shadow: 0 0 40px rgba(0,255,136,0.65) !important;
        }
        .hero-btn-outline:hover {
          background: rgba(0,255,136,0.08) !important;
          border-color: rgba(0,255,136,0.7) !important;
          transform: translateY(-2px);
        }

        /* ── Social icon hover ── */
        .hero-social:hover {
          color: #00FF88 !important;
          border-color: rgba(0,255,136,0.6) !important;
          background: rgba(0,255,136,0.08) !important;
          transform: translateY(-3px) scale(1.08);
        }

        /* ── Profile image hover ── */
        .hero-img:hover {
          transform: scale(1.04);
        }

        /* ── Responsive: small tablets + large phones ── */
        @media (max-width: 767px) {
          .hero-main {
            flex-direction: column-reverse !important;
            align-items: center !important;
            text-align: center !important;
            gap: 2.5rem !important;
          }
          .hero-badge {
            display: none !important;
          }
        }

        /* ── Very small phones (< 360px) ── */
        @media (max-width: 359px) {
          .hero-main {
            padding: 0 1rem !important;
          }
        }

        /* ── Large screens (1440px+) ── */
        @media (min-width: 1440px) {
          .hero-main {
            gap: 6rem !important;
          }
        }
      `}</style>
    </section>
  );
}
