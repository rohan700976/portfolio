import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import styleLoop from "../assets/projectsImg/styleLoop.png";
import kisanmitra from "../assets/projectsImg/kisanMitra.png";
import ezLandingPage from "../assets/projectsImg/ez.png";

const projects = [
  {
    title: "StyleLoop",
    desc: "Full-stack e-commerce platform with cart, authentication, and complete order management.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    img: styleLoop,
    url: "https://github.com/rohan700976/StyleLoop",
    accent: "#00FF88",
    glow: "rgba(0,255,136,0.25)",
    type: "E-Commerce",
  },
  {
    title: "KisanMitra",
    desc: "AI-powered web assistant giving real-time crop growth recommendations to farmers.",
    tags: ["React", "AI/ML", "Node.js", "REST API"],
    img: kisanmitra,
    url: "https://github.com/rohan700976/AiFarmerAssistantWeb",
    accent: "#FACC15",
    glow: "rgba(250,204,21,0.22)",
    type: "AI · AgriTech",
  },
  {
    title: "EZ Landing Page",
    desc: "Pixel-perfect, high-conversion landing page sharpening advanced frontend skills.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    img: ezLandingPage,
    url: "https://github.com/rohan700976/EzProject",
    accent: "#00C4FF",
    glow: "rgba(0,196,255,0.22)",
    type: "Frontend",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function TiltCard({ project, index }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const maxTilt = 14;
    const rotateY = (dx / (rect.width / 2)) * maxTilt;
    const rotateX = -(dy / (rect.height / 2)) * maxTilt;
    const gx = ((e.clientX - rect.left) / rect.width) * 100;
    const gy = ((e.clientY - rect.top) / rect.height) * 100;
    setTilt({ x: rotateX, y: rotateY });
    setGlowPos({ x: gx, y: gy });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setGlowPos({ x: 50, y: 50 });
    setHovered(false);
  };

  return (
    <motion.div
      variants={cardVariants}
      className="perspective-[1200px] w-full"
      style={{ perspective: "1200px" }}
    >
      <motion.article
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
          scale: hovered ? 1.03 : 1,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 22, mass: 0.6 }}
        className="relative w-full rounded-2xl overflow-hidden flex flex-col cursor-default"
        style={{
          background: "#161B22",
          border: `1px solid ${hovered ? project.accent + "55" : "#30363D"}`,
          boxShadow: hovered
            ? `0 30px 60px rgba(0,0,0,0.6), 0 0 0 1px ${project.accent}22, inset 0 1px 0 rgba(255,255,255,0.06)`
            : "0 4px 24px rgba(0,0,0,0.35)",
          transformStyle: "preserve-3d",
          transition: "border-color 0.3s, box-shadow 0.3s",
          willChange: "transform",
        }}
      >
        {/* Dynamic spotlight glow on mouse follow */}
        <div
          className="pointer-events-none absolute inset-0 z-10 rounded-2xl transition-opacity duration-300"
          style={{
            opacity: hovered ? 1 : 0,
            background: `radial-gradient(280px circle at ${glowPos.x}% ${glowPos.y}%, ${project.glow}, transparent 70%)`,
          }}
        />

        {/* Shimmer top edge */}
        <div
          className="absolute top-0 left-0 right-0 h-px z-20 transition-opacity duration-300"
          style={{
            opacity: hovered ? 0.7 : 0.2,
            background: `linear-gradient(90deg, transparent, ${project.accent}88, transparent)`,
          }}
        />

        {/* Image */}
        <div className="relative overflow-hidden h-48 sm:h-52 md:h-56 shrink-0">
          <motion.img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: hovered ? 1.07 : 1 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          />
          {/* Gradient fade from image to card */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 40%, #161B22 100%)",
            }}
          />
          {/* Type badge */}
          <span
            className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full z-10"
            style={{
              background: `${project.accent}18`,
              color: project.accent,
              border: `1px solid ${project.accent}40`,
              backdropFilter: "blur(10px)",
            }}
          >
            {project.type}
          </span>
        </div>

        {/* Body — lifted in 3D */}
        <div
          className="relative z-10 flex flex-col flex-1 px-5 sm:px-6 pb-6 pt-1"
          style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}
        >
          {/* Title */}
          <h3
            className="text-xl sm:text-2xl font-extrabold text-white mb-2 tracking-tight"
            style={{ textShadow: hovered ? `0 0 24px ${project.accent}66` : "none", transition: "text-shadow 0.3s" }}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-400 leading-relaxed mb-5">
            {project.desc}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-semibold px-2.5 py-1 rounded-md"
                style={{
                  background: "#0D1117",
                  color: "#8B949E",
                  border: "1px solid #21262D",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA button */}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm tracking-wide transition-all duration-300"
            style={{
              background: hovered
                ? project.accent
                : `${project.accent}15`,
              color: hovered ? "#0D1117" : project.accent,
              border: `1px solid ${project.accent}40`,
              boxShadow: hovered ? `0 8px 24px ${project.glow}` : "none",
            }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            View on GitHub
            <svg
              className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 7l-10 10M7 7h10v10" />
            </svg>
          </a>
        </div>
      </motion.article>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-12 xl:px-20 py-20 sm:py-24"
      style={{
        background: "linear-gradient(160deg, #0D1117 0%, #0f1923 50%, #0D1117 100%)",
      }}
    >
      {/* Ambient blobs */}
      <div
        className="pointer-events-none absolute top-10 left-1/3 w-[500px] h-[500px] rounded-full opacity-[0.035] blur-[110px]"
        style={{ background: "#00FF88" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 right-1/3 w-[400px] h-[400px] rounded-full opacity-[0.035] blur-[100px]"
        style={{ background: "#00C4FF" }}
        aria-hidden="true"
      />

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: -28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-14 sm:mb-16 z-10 w-full"
      >
        <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-gray-500 mb-4">
          What I've built
        </p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none">
          <span className="text-white">My</span>{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(90deg, #00FF88 0%, #00C4FF 100%)",
            }}
          >
            Projects
          </span>
        </h2>
        <div className="flex items-center justify-center gap-3 mt-6">
          <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-gray-700" />
          <span className="text-gray-600 text-xs tracking-widest uppercase">
            {projects.length} selected works
          </span>
          <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-gray-700" />
        </div>
      </motion.div>

      {/* 3D Tilt Cards grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 w-full max-w-6xl z-10"
      >
        {projects.map((project, index) => (
          <TiltCard key={project.title} project={project} index={index} />
        ))}
      </motion.div>

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-14 z-10 text-center"
      >
        <a
          href="https://github.com/rohan700976"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors duration-200 group"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          See all repositories on GitHub
          <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">→</span>
        </a>
      </motion.div>
    </section>
  );
}