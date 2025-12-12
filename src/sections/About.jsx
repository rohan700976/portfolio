import React from "react";
import { motion } from "framer-motion";

function Icon({ type, className = "w-6 h-6" }) {
  // simple inline SVGs for frontend / backend / database / center
  if (type === "frontend")
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M3 4h18v4H3zM3 10h18v10H3z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 7l1-2h6l1 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  if (type === "backend")
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4" width="18" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="6" y="14" width="12" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M8 8v8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    );
  if (type === "database")
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="12" cy="6" rx="8" ry="3" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    );
  // center icon - star / badge
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l2.4 4.9L20 8l-4 3.6L17 20l-5-2.8L7 20l1-8.4L4 8l5.6-1.1L12 2z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function About() {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#000000] px-6 md:px-20 py-16 overflow-hidden">
      {/* Left cluster: circles + rotating ring + svg arrows */}
      <motion.div
        className="md:w-1/2 w-full flex justify-center items-center mb-10 md:mb-0 relative"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Rotating glow ring behind the whole cluster */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "570px",
            height: "570px",
            boxShadow: "0 0 80px 30px rgba(0,255,136,0.08)",
            borderRadius: "9999px",
          }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
        />

        {/* cluster box (relative coordinates 0..100) */}
        <div className="relative z-10 w-[330px] h-[330px] md:w-[530px] md:h-[530px]">
          {/* SVG lines & arrows: use viewBox 0 0 100 100 — positions as percentages */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
            <defs>
              <marker id="arr" markerWidth="10" markerHeight="10" refX="6" refY="5" orient="auto">
                <path d="M0 0 L10 5 L0 10 z" fill="#00FF88" />
              </marker>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0%" stopColor="#00FF88" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#00FFA0" stopOpacity="0.7" />
              </linearGradient>
            </defs>

            {/* line from Frontend (25,25) to Center (50,50) */}
            <path d="M25 25 C38 32,44 44,50 50" stroke="url(#g1)" strokeWidth="0.9" fill="none" markerEnd="url(#arr)" strokeLinecap="round"/>

            {/* line from Backend (25,75) to Center */}
            <path d="M25 75 C34 66,44 56,50 50" stroke="url(#g1)" strokeWidth="0.9" fill="none" markerEnd="url(#arr)" strokeLinecap="round"/>

            {/* line from Database (75,50) to Center */}
            <path d="M75 50 C64 48,56 50,50 50" stroke="url(#g1)" strokeWidth="0.9" fill="none" markerEnd="url(#arr)" strokeLinecap="round"/>
          </svg>

          {/* Frontend circle - top-left */}
          <motion.div
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center rounded-full"
            style={{ left: "25%", top: "25%", width: 120, height: 120 }}
            whileHover={{ scale: 1.06 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            <div className="w-full h-full rounded-full bg-white/6 border border-[#00FF88]/30 backdrop-blur-md flex flex-col items-center justify-center shadow-lg">
              <div className="p-2 rounded-full bg-white/3">
                <Icon type="frontend" className="w-7 h-7 text-[#00FF88]" />
              </div>
              <div className="text-white text-sm font-semibold mt-2">Frontend</div>
            </div>
          </motion.div>

          {/* Backend circle - bottom-left */}
          <motion.div
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center rounded-full"
            style={{ left: "25%", top: "75%", width: 120, height: 120 }}
            whileHover={{ scale: 1.06 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            <div className="w-full h-full rounded-full bg-white/6 border border-[#00FF88]/30 backdrop-blur-md flex flex-col items-center justify-center shadow-lg">
              <div className="p-2 rounded-full bg-white/3">
                <Icon type="backend" className="w-7 h-7 text-[#00FF88]" />
              </div>
              <div className="text-white text-sm font-semibold mt-2">Backend</div>
            </div>
          </motion.div>

          {/* Database circle - right */}
          <motion.div
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center rounded-full"
            style={{ left: "75%", top: "50%", width: 120, height: 120}}
            whileHover={{ scale: 1.06 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            <div className="w-full h-full rounded-full bg-white/6 border border-[#00FF88]/30 backdrop-blur-md flex flex-col items-center justify-center shadow-lg">
              <div className="p-2 rounded-full bg-white/3">
                <Icon type="database" className="w-7 h-7 text-[#00FF88]" />
              </div>
              <div className="text-white text-sm font-semibold mt-2">Database</div>
            </div>
          </motion.div>

          {/* Center - Full Stack */}
          <motion.div
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center rounded-full bg-white/6 "
            style={{ left: "50%", top: "50%", width: 140, height: 140 }}
            initial={{ scale: 0.98 }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 14 }}
          >
            <div className="w-full h-full rounded-full  border border-[#00FF88]/40 flex flex-col items-center justify-center shadow-[0_10px_40px_rgba(0,255,136,0.08)]">
              <div className="p-2 rounded-full bg-white/5">
                {/* <Icon type="center" className="w-8 h-8 text-white" /> */}
              </div>
              <div className="text-gray-200 text-base md:text-lg font-extrabold mt-2 text-center px-2 ">Full Stack Developer</div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Text Section (keeps your previous copy, slightly compact) */}
      <motion.div
        className="md:w-1/2 w-full text-center md:text-left font-serif"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-white"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Hello,
        </motion.h1>

        <motion.h1
          className="text-5xl md:text-6xl font-bold text-[#00FF88] mt-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          I’m Rohan
        </motion.h1>

        <motion.p
          className="text-[#D1D5DB] text-2xl md:text-3xl mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.6 }}
        >
          A passionate Full Stack Web Developer
        </motion.p>

        <motion.p
          className="text-lg text-gray-300 mt-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          Skilled in <span className="text-[#00FF88] font-semibold">React.js</span>,{" "}
          <span className="text-[#00FF88] font-semibold">Node.js</span>,{" "}
          <span className="text-[#00FF88] font-semibold">JavaScript</span>, and{" "}
          <span className="text-[#00FF88] font-semibold">Tailwind CSS</span>, with
          experience in <span className="text-[#00FF88] font-semibold">MongoDB</span> and{" "}
          <span className="text-[#00FF88] font-semibold">SQL</span>.
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <button className="px-8 py-3 bg-[#00FF88] text-black rounded-full text-lg font-semibold hover:bg-[#00cc6a] transition-all duration-300 shadow-lg hover:shadow-[#00FF88]/50">
            View My Work
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
