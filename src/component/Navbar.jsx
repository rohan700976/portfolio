import React, { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className="w-full bg-gradient-to-r from-[#0D1117] to-[#111827] text-white bg-fixed">

      {/* TOP BAR */}
      <div className="
        flex items-center justify-between
        w-full
        px-4 sm:px-6 lg:px-0
        h-auto lg:h-18
      ">

        {/* LOGO */}
        <h1 className="
          text-3xl font-bold
          p-5
          lg:mx-35
          text-[#00FF88]
          [text-shadow:0_0_10px_rgba(0,255,136,0.6)]
        ">
          ROHAN
        </h1>

        {/* DESKTOP MENU (Laptop / PC ONLY) */}
        <nav className="hidden lg:flex justify-end gap-20 lg:mx-35 p-5">
          <span className="hover:underline hover:text-[#00FF88] transition">Home</span>
          <a href="#about" className="hover:underline hover:text-[#00FF88] transition">About</a>
          <a href="#skills" className="hover:underline hover:text-[#00FF88] transition">Skills</a>
          <a href="#project" className="hover:underline hover:text-[#00FF88] transition">Project</a>
          <a href="#experience" className="hover:underline hover:text-[#00FF88] transition">Experience</a>

          <a
            href="/Rohan-Resume.pdf"
            download
            className="
              inline-flex items-center gap-2
              px-6 py-2 rounded-full
              bg-[#00FF88] text-[#111827] font-semibold
              shadow-[0_0_15px_rgba(0,255,136,0.5)]
              hover:shadow-[0_0_30px_rgba(0,255,136,0.9)]
              hover:scale-105 transition-all duration-300
            "
          >
            Resume
          </a>
        </nav>

        {/* HAMBURGER (Mobile + iPad + iPad Mini) */}
        <div className="lg:hidden flex items-center p-2">
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="text-[#00FF88] text-3xl"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* MOBILE / IPAD MENU */}
      <div
        className={`
          lg:hidden
          overflow-hidden
          transition-all duration-300 ease-in-out
          ${open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <nav className="
          flex flex-col
          bg-gradient-to-b from-[#0D1117]/95 to-[#111827]/95
          px-6 py-6 gap-4
        ">
          <button onClick={() => scrollTo('home')} className="text-left text-lg hover:text-[#00FF88] transition">Home</button>
          <button onClick={() => scrollTo('about')} className="text-left text-lg hover:text-[#00FF88] transition">About</button>
          <button onClick={() => scrollTo('skills')} className="text-left text-lg hover:text-[#00FF88] transition">Skills</button>
          <button onClick={() => scrollTo('project')} className="text-left text-lg hover:text-[#00FF88] transition">Project</button>
          <button onClick={() => scrollTo('experience')} className="text-left text-lg hover:text-[#00FF88] transition">Experience</button>

          <a
            href="/Rohan-Resume.pdf"
            download
            className="
              mt-2 inline-flex justify-center
              px-6 py-3 rounded-full
              bg-[#00FF88] text-[#111827] font-semibold
              shadow-[0_0_20px_rgba(0,255,136,0.6)]
            "
          >
            Resume
          </a>
        </nav>
      </div>

    </header>
  )
}
