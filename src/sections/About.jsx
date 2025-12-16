import React from "react";
import { motion } from "framer-motion";

function Icon({ type, className = "w-6 h-6" }) {
  if (type === "frontend")
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M3 4h18v4H3zM3 10h18v10H3z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 7l1-2h6l1 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  if (type === "backend")
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4" width="18" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <rect x="6" y="14" width="12" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8 8v8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  if (type === "database")
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="12" cy="6" rx="8" ry="3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  return null;
}

export default function About() {
  return (
    <div className="
      w-full min-h-screen
      flex flex-col md:flex-row md:gap-20
      items-center justify-center
      bg-gradient-to-br from-[#111827] via-[#1F2937] to-black
      px-4 sm:px-6 md:px-20
      py-12 overflow-hidden
    ">

      {/* LEFT CLUSTER */}
      <motion.div
        className="
          w-full md:w-1/2
          flex justify-center items-center
          mb-10 md:mb-0
          relative
          md:scale-[0.9] lg:scale-100
        "
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Rotating glow ring */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "400px",
            height: "400px",
            boxShadow: "0 0 60px 20px rgba(0,255,136,0.08)",
          }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
        />

        {/* Cluster */}
        <div className="
          relative z-10
          w-[280px] h-[280px]
          sm:w-[400px] sm:h-[400px]
          md:w-[480px] md:h-[480px]
          lg:w-[530px] lg:h-[530px]
        ">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            <defs>
              <marker id="arr" markerWidth="10" markerHeight="10" refX="6" refY="5" orient="auto">
                <path d="M0 0 L10 5 L0 10 z" fill="#00FF88" />
              </marker>
            </defs>

            <path d="M25 25 C38 32,44 44,50 50" stroke="#00FF88" strokeWidth="0.8" fill="none" markerEnd="url(#arr)" />
            <path d="M25 75 C34 66,44 56,50 50" stroke="#00FF88" strokeWidth="0.8" fill="none" markerEnd="url(#arr)" />
            <path d="M75 50 C64 48,56 50,50 50" stroke="#00FF88" strokeWidth="0.8" fill="none" markerEnd="url(#arr)" />
          </svg>

          {/* Frontend */}
          <div className="absolute left-[25%] top-[25%] -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] rounded-full bg-white/5 border border-[#00FF88]/30 backdrop-blur-md flex flex-col items-center justify-center">
            <Icon type="frontend" className="text-[#00FF88]" />
            <p className="text-white text-sm mt-1">Frontend</p>
          </div>

          {/* Backend */}
          <div className="absolute left-[25%] top-[75%] -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] rounded-full bg-white/5 border border-[#00FF88]/30 backdrop-blur-md flex flex-col items-center justify-center">
            <Icon type="backend" className="text-[#00FF88]" />
            <p className="text-white text-sm mt-1">Backend</p>
          </div>

          {/* Database */}
          <div className="absolute left-[75%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] rounded-full bg-white/5 border border-[#00FF88]/30 backdrop-blur-md flex flex-col items-center justify-center">
            <Icon type="database" className="text-[#00FF88]" />
            <p className="text-white text-sm mt-1">Database</p>
          </div>

          {/* Center */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] rounded-full bg-white/5 border border-[#00FF88]/40 flex items-center justify-center">
            <p className="text-white font-semibold text-center">Full Stack</p>
          </div>
        </div>
      </motion.div>

      {/* RIGHT TEXT */}
      <motion.div
        className="
          w-full md:w-1/2
          md:pl-6 lg:pl-0
          text-center md:text-left
          font-serif
          px-2 sm:px-4
        "
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-10">
          Hello,
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#00FF88] mt-3">
          I’m Rohan
        </h1>
        <p className="text-[#D1D5DB] text-lg sm:text-xl mt-6">
          A passionate Full Stack Web Developer
        </p>
        <p className="text-gray-300 text-base sm:text-lg mt-6 leading-relaxed">
          Skilled in <span className="text-[#00FF88]">React.js</span>, <span className="text-[#00FF88]">Node.js</span>,
          <span className="text-[#00FF88]"> JavaScript</span> & <span className="text-[#00FF88]">Tailwind CSS</span>,
          with experience in <span className="text-[#00FF88]">MongoDB</span> and <span className="text-[#00FF88]">SQL</span>.
        </p>

        <div className="mt-10">
          <button
            onClick={() => {
              document.getElementById("project")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="px-8 py-3 bg-[#00FF88] text-black rounded-full font-semibold hover:bg-[#00cc6a] transition"
          >
            View My Work
          </button>

        </div>
      </motion.div>
    </div>
  );
}
