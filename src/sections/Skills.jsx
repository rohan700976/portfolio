import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: FaHtml5,
    iconColor: "#E34F26",
    glow: "rgba(227,79,38,0.5)",
    category: "Markup",
    level: 95,
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    iconColor: "#1572B6",
    glow: "rgba(21,114,182,0.5)",
    category: "Styling",
    level: 90,
  },
  {
    name: "JavaScript",
    icon: FaJs,
    iconColor: "#F7DF1E",
    glow: "rgba(247,223,30,0.5)",
    category: "Language",
    level: 88,
  },
  {
    name: "React",
    icon: FaReact,
    iconColor: "#61DAFB",
    glow: "rgba(97,218,251,0.5)",
    category: "Framework",
    level: 85,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    iconColor: "#38BDF8",
    glow: "rgba(56,189,248,0.5)",
    category: "Styling",
    level: 90,
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    iconColor: "#539E43",
    glow: "rgba(83,158,67,0.5)",
    category: "Runtime",
    level: 82,
  },
  {
    name: "Express.js",
    icon: SiExpress,
    iconColor: "#ffffff",
    glow: "rgba(255,255,255,0.3)",
    category: "Framework",
    level: 80,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    iconColor: "#47A248",
    glow: "rgba(71,162,72,0.5)",
    category: "Database",
    level: 78,
  },
  {
    name: "SQL",
    icon: FaDatabase,
    iconColor: "#00AEF0",
    glow: "rgba(0,174,240,0.5)",
    category: "Database",
    level: 75,
  },
  {
    name: "Git & GitHub",
    icon: FaGitAlt,
    iconColor: "#F05032",
    glow: "rgba(240,80,50,0.5)",
    category: "DevOps",
    level: 88,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function SkillCard({ skill, index }) {
  const [hovered, setHovered] = useState(false);
  const Icon = skill.icon;

  return (
    <motion.div
      variants={cardVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -6, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative group cursor-default"
      style={{ willChange: "transform" }}
    >
      {/* Glow backdrop */}
      <motion.div
        className="absolute inset-0 rounded-2xl blur-xl"
        animate={{
          opacity: hovered ? 0.6 : 0,
          scale: hovered ? 1.1 : 0.9,
        }}
        transition={{ duration: 0.3 }}
        style={{ background: skill.glow }}
      />

      {/* Card body */}
      <div
        className="relative flex flex-col items-center justify-between p-5 sm:p-6 rounded-2xl border transition-colors duration-300 h-full"
        style={{
          background: hovered
            ? "linear-gradient(135deg, #1a2332 0%, #1f2d40 100%)"
            : "#161B22",
          borderColor: hovered ? skill.iconColor : "#30363D",
          boxShadow: hovered
            ? `0 0 0 1px ${skill.iconColor}40, 0 20px 40px rgba(0,0,0,0.4)`
            : "0 1px 3px rgba(0,0,0,0.3)",
        }}
      >
        {/* Category pill */}
        <span
          className="self-start text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded-full mb-3 transition-all duration-300"
          style={{
            background: `${skill.iconColor}18`,
            color: skill.iconColor,
            border: `1px solid ${skill.iconColor}30`,
          }}
        >
          {skill.category}
        </span>

        {/* Icon */}
        <motion.div
          animate={
            hovered
              ? { rotate: [0, -8, 8, 0], scale: 1.15 }
              : { rotate: 0, scale: 1 }
          }
          transition={{ duration: 0.4 }}
          className="text-5xl sm:text-6xl mb-4"
          style={{ color: skill.iconColor, filter: hovered ? `drop-shadow(0 0 12px ${skill.glow})` : "none" }}
        >
          <Icon />
        </motion.div>

        {/* Skill name */}
        <p className="text-sm sm:text-base font-semibold text-center text-white mb-4 tracking-wide">
          {skill.name}
        </p>

        {/* Proficiency bar */}
        <div className="w-full">
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-[10px] text-gray-500 font-medium tracking-wider uppercase">
              Proficiency
            </span>
            <span
              className="text-[11px] font-bold tabular-nums"
              style={{ color: skill.iconColor }}
            >
              {skill.level}%
            </span>
          </div>
          <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              initial={{ width: 0 }}
              animate={{ width: hovered ? `${skill.level}%` : "0%" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
              style={{
                background: `linear-gradient(90deg, ${skill.iconColor}99, ${skill.iconColor})`,
                boxShadow: `0 0 8px ${skill.glow}`,
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-12 xl:px-20 py-20 sm:py-24"
      style={{
        background:
          "linear-gradient(160deg, #0D1117 0%, #0f1923 50%, #0D1117 100%)",
      }}
    >
      {/* Ambient background blobs */}
      <div
        className="pointer-events-none absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-5 blur-[120px]"
        style={{ background: "#00FF88" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-5 blur-[100px]"
        style={{ background: "#00C4FF" }}
        aria-hidden="true"
      />

      {/* Dot grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-14 sm:mb-16 z-10"
      >
        <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-gray-500 mb-4">
          What I work with
        </p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none">
          <span className="text-white">Technical</span>{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #00FF88 0%, #00C4FF 100%)",
            }}
          >
            Skills
          </span>
        </h2>
        <div className="flex items-center justify-center gap-3 mt-6">
          <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-gray-700" />
          <span className="text-gray-600 text-xs tracking-widest uppercase">
            {skills.length} technologies
          </span>
          <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-gray-700" />
        </div>
      </motion.div>

      {/* Skills grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6 w-full max-w-6xl z-10"
      >
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </motion.div>

      {/* Bottom footnote */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-12 text-xs text-gray-600 tracking-wider z-10"
      >
        Hover over a card to explore proficiency
      </motion.p>
    </section>
  );
}