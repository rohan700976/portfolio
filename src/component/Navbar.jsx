import React, { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full bg-gradient-to-r from-[#0D1117] to-[#111827] text-white bg-fixed">

      {/* Top bar: keep original desktop/laptop layout exactly as requested at md and above */}
      <div className="flex items-center justify-between md:justify-between w-full px-4 md:px-0 md:h-18 h-auto">

        {/* Logo - preserved styles for md+ */}
        <div>
          <h1 className="text-3xl md:text-3xl font-bold md:mx-35 p-5 text-[#00FF88] [text-shadow:0_0_10px_rgba(0,255,136,0.6)]">
            ROHAN
          </h1>
        </div>

        {/* Desktop / Laptop menu: VISIBLE on md and up. This block keeps classes used in your original code so layout on laptop/desktop remains identical. */}
        <nav className="hidden md:flex justify-end gap-20 md:mx-35 p-5" aria-label="Primary navigation">
          <span className='hover:underline hover:decoration-2 hover:underline-offset-4 transition-all duration-300 hover:text-[#00FF88]'>Home</span>
          <span className='hover:underline hover:decoration-2 hover:underline-offset-4 transition-all duration-300 hover:text-[#00FF88]'>About</span>
          <span className='hover:underline hover:decoration-2 hover:underline-offset-4 transition-all duration-300 hover:text-[#00FF88]'>Skills</span>
          <span className='hover:underline hover:decoration-2 hover:underline-offset-4 transition-all duration-300 hover:text-[#00FF88]'>Project</span>
          <span className='hover:underline hover:decoration-2 hover:underline-offset-4 transition-all duration-300 hover:text-[#00FF88]'>Experience</span>
          <span className='hover:underline hover:decoration-2 hover:underline-offset-4 transition-all duration-300 hover:text-[#00FF88]'>Resume</span>
        </nav>

        {/* Mobile controls: VISIBLE below md. This will NOT affect md+ */}
        <div className="md:hidden flex items-center p-2">
          <button
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="text-[#00FF88] text-3xl p-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00FF88]/60"
          >
            {/* simple accessible hamburger / close icon */}
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile menu panel: full-width, stacked items. Only rendered on small screens (hidden on md+). */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 origin-top ${open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
        aria-hidden={!open}
      >
        <nav className="flex flex-col bg-gradient-to-b from-[#0D1117]/90 to-[#111827]/90 px-6 pb-6 pt-2 gap-4" role="menu">
          {/* Each button closes the menu when clicked (common mobile behaviour) */}
          <button onClick={() => setOpen(false)} className='text-left py-2 text-lg hover:text-[#00FF88] transition'>Home</button>
          <button onClick={() => setOpen(false)} className='text-left py-2 text-lg hover:text-[#00FF88] transition'>About</button>
          <button onClick={() => setOpen(false)} className='text-left py-2 text-lg hover:text-[#00FF88] transition'>Skills</button>
          <button onClick={() => setOpen(false)} className='text-left py-2 text-lg hover:text-[#00FF88] transition'>Project</button>
          <button onClick={() => setOpen(false)} className='text-left py-2 text-lg hover:text-[#00FF88] transition'>Experience</button>
          <button onClick={() => setOpen(false)} className='text-left py-2 text-lg hover:text-[#00FF88] transition'>Resume</button>
        </nav>
      </div>

    </header>
  )
}
