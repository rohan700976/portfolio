import React, { useState, useEffect, useCallback } from 'react'

const NAV_LINKS = [
  { label: 'Home',       id: 'home' },
  { label: 'About',      id: 'about' },
  { label: 'Skills',     id: 'skills' },
  { label: 'Projects',   id: 'project' },
  { label: 'Experience', id: 'experience' },
]

export default function Navbar() {
  const [open,     setOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active,   setActive]   = useState('home')

  /* ── Scroll detection ─────────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      // scroll-spy
      let current = 'home'
      NAV_LINKS.forEach(({ id }) => {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 100) current = id
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── Close menu on resize (lg+) ──────────────────────────── */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  /* ── Prevent body scroll when menu open ──────────────────── */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const scrollTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }, [])

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
          background: scrolled
            ? 'rgba(13,17,23,0.85)'
            : 'rgba(13,17,23,0.0)',
          backdropFilter: scrolled ? 'blur(18px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(18px) saturate(180%)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(0,255,136,0.12)'
            : '1px solid transparent',
          boxShadow: scrolled
            ? '0 4px 32px rgba(0,0,0,0.4)'
            : 'none',
        }}
      >
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 clamp(1rem, 4vw, 2rem)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 'clamp(60px, 8vw, 72px)',
        }}>

          {/* ── LOGO ── */}
          <button
            onClick={() => scrollTo('home')}
            aria-label="Go to top"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
            }}
          >
            <span style={{
              fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
              fontWeight: 800,
              letterSpacing: '0.06em',
              color: '#00FF88',
              textShadow: '0 0 18px rgba(0,255,136,0.7), 0 0 40px rgba(0,255,136,0.3)',
              fontFamily: "'Segoe UI', system-ui, sans-serif",
              lineHeight: 1,
            }}>
              ROHAN
            </span>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#00FF88',
              boxShadow: '0 0 8px rgba(0,255,136,0.9)',
              display: 'inline-block',
              animation: 'pulse 2s infinite',
            }} />
          </button>

          {/* ── DESKTOP NAV ── */}
          <nav
            role="navigation"
            aria-label="Primary navigation"
            style={{ display: 'flex', alignItems: 'center', gap: 'clamp(1.2rem, 2.5vw, 2.5rem)' }}
            className="desktop-nav"
          >
            {NAV_LINKS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                aria-current={active === id ? 'page' : undefined}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
                  fontWeight: active === id ? 600 : 400,
                  color: active === id ? '#00FF88' : 'rgba(255,255,255,0.8)',
                  letterSpacing: '0.03em',
                  padding: '4px 2px',
                  position: 'relative',
                  transition: 'color 0.25s ease',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                }}
                className="nav-link"
              >
                {label}
                <span
                  className="nav-underline"
                  style={{
                    position: 'absolute',
                    bottom: '-2px',
                    left: 0,
                    height: '2px',
                    width: active === id ? '100%' : '0%',
                    background: 'linear-gradient(90deg, #00FF88, #00ccff)',
                    borderRadius: '2px',
                    transition: 'width 0.3s ease',
                    boxShadow: active === id ? '0 0 8px rgba(0,255,136,0.7)' : 'none',
                  }}
                />
              </button>
            ))}

            {/* Resume CTA */}
            <a
              href="/Rohan-Resume.pdf"
              download
              aria-label="Download Rohan's Resume"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                padding: 'clamp(7px,1.2vw,9px) clamp(18px,2vw,26px)',
                borderRadius: '50px',
                background: 'linear-gradient(135deg, #00FF88, #00d4ff)',
                color: '#0D1117',
                fontWeight: 700,
                fontSize: 'clamp(0.8rem, 1.1vw, 0.9rem)',
                letterSpacing: '0.04em',
                textDecoration: 'none',
                boxShadow: '0 0 18px rgba(0,255,136,0.45)',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
                border: 'none',
              }}
              className="resume-btn"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Resume
            </a>
          </nav>

          {/* ── HAMBURGER ── */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="hamburger-btn"
            style={{
              background: 'none',
              border: '1.5px solid rgba(0,255,136,0.3)',
              borderRadius: '8px',
              cursor: 'pointer',
              width: '42px',
              height: '42px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '5px',
              padding: '8px',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(8px)',
            }}
          >
            <span style={{
              display: 'block',
              width: '20px',
              height: '2px',
              background: '#00FF88',
              borderRadius: '2px',
              transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
              transform: open ? 'translateY(7px) rotate(45deg)' : 'none',
              boxShadow: '0 0 6px rgba(0,255,136,0.5)',
            }} />
            <span style={{
              display: 'block',
              width: '20px',
              height: '2px',
              background: '#00FF88',
              borderRadius: '2px',
              transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
              opacity: open ? 0 : 1,
              transform: open ? 'scaleX(0)' : 'none',
            }} />
            <span style={{
              display: 'block',
              width: '20px',
              height: '2px',
              background: '#00FF88',
              borderRadius: '2px',
              transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
              transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none',
              boxShadow: '0 0 6px rgba(0,255,136,0.5)',
            }} />
          </button>

        </div>

        {/* ── MOBILE DRAWER ── */}
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="mobile-menu"
          style={{
            overflow: 'hidden',
            maxHeight: open ? '520px' : '0px',
            opacity: open ? 1 : 0,
            transition: 'max-height 0.42s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease',
            background: 'rgba(13,17,23,0.97)',
            backdropFilter: 'blur(24px)',
            borderTop: open ? '1px solid rgba(0,255,136,0.12)' : '1px solid transparent',
          }}
        >
          <nav
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: 'clamp(1rem, 4vw, 1.5rem) clamp(1rem, 4vw, 2rem)',
              gap: '4px',
            }}
          >
            {NAV_LINKS.map(({ label, id }, i) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                aria-current={active === id ? 'page' : undefined}
                style={{
                  background: active === id
                    ? 'rgba(0,255,136,0.08)'
                    : 'none',
                  border: 'none',
                  borderRadius: '10px',
                  borderLeft: active === id
                    ? '3px solid #00FF88'
                    : '3px solid transparent',
                  cursor: 'pointer',
                  textAlign: 'left',
                  color: active === id ? '#00FF88' : 'rgba(255,255,255,0.82)',
                  fontSize: 'clamp(1rem, 3.5vw, 1.1rem)',
                  fontWeight: active === id ? 600 : 400,
                  padding: '13px 16px',
                  letterSpacing: '0.02em',
                  transition: 'all 0.25s ease',
                  animationDelay: `${i * 0.05}s`,
                }}
                className="mobile-nav-link"
              >
                {label}
              </button>
            ))}

            <a
              href="/Rohan-Resume.pdf"
              download
              onClick={() => setOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                marginTop: '12px',
                padding: '14px 24px',
                borderRadius: '50px',
                background: 'linear-gradient(135deg, #00FF88, #00d4ff)',
                color: '#0D1117',
                fontWeight: 700,
                fontSize: 'clamp(0.9rem, 3vw, 1rem)',
                letterSpacing: '0.05em',
                textDecoration: 'none',
                boxShadow: '0 0 24px rgba(0,255,136,0.4)',
                transition: 'all 0.3s ease',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Resume
            </a>

            {/* Social links row */}
            <div style={{
              display: 'flex',
              gap: '12px',
              marginTop: '16px',
              paddingTop: '16px',
              borderTop: '1px solid rgba(255,255,255,0.08)',
              justifyContent: 'center',
            }}>
              {[
                { href: 'https://github.com', label: 'GitHub', icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                  </svg>
                )},
                { href: 'https://linkedin.com', label: 'LinkedIn', icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                )},
                { href: 'mailto:rohan@email.com', label: 'Email', icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                )},
              ].map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    border: '1px solid rgba(0,255,136,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,255,255,0.7)',
                    textDecoration: 'none',
                    transition: 'all 0.25s ease',
                  }}
                  className="social-icon-btn"
                >
                  {icon}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* ── Overlay backdrop (mobile) ── */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9998,
            background: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(2px)',
          }}
        />
      )}

      {/* ── Scoped styles ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        /* Page offset for fixed navbar */
        html { scroll-padding-top: 80px; }

        /* Pulse animation for logo dot */
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.7); }
        }

        /* Desktop nav — hidden on mobile */
        .desktop-nav { display: none !important; }
        @media (min-width: 1024px) {
          .desktop-nav  { display: flex !important; }
          .hamburger-btn { display: none !important; }
          .mobile-menu   { display: none !important; }
        }

        /* Hover states — desktop nav links */
        .nav-link:hover {
          color: #00FF88 !important;
        }
        .nav-link:hover .nav-underline {
          width: 100% !important;
        }

        /* Resume button hover */
        .resume-btn:hover {
          transform: translateY(-2px) scale(1.04);
          box-shadow: 0 0 32px rgba(0,255,136,0.65) !important;
        }

        /* Hamburger hover */
        .hamburger-btn:hover {
          border-color: rgba(0,255,136,0.7) !important;
          background: rgba(0,255,136,0.06) !important;
        }

        /* Mobile nav links hover */
        .mobile-nav-link:hover {
          background: rgba(0,255,136,0.08) !important;
          color: #00FF88 !important;
        }

        /* Social icon hover */
        .social-icon-btn:hover {
          border-color: rgba(0,255,136,0.6) !important;
          color: #00FF88 !important;
          background: rgba(0,255,136,0.08) !important;
          transform: translateY(-2px);
        }

        /* Tablet-specific tweaks (768px – 1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .mobile-menu nav {
            padding: 1.25rem 2rem !important;
          }
        }

        /* Very small phones (< 360px) */
        @media (max-width: 359px) {
          .hamburger-btn {
            width: 38px !important;
            height: 38px !important;
          }
        }
      `}</style>
    </>
  )
}
