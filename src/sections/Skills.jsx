import React from "react";
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

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Git & GitHub", icon: <FaGitAlt className="text-red-500" /> },
    { name: "SQL", icon: <FaDatabase className="text-blue-300" /> },
  ];

  // 🔹 Parent container animation (controls stagger timing)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // 🔹 Each card’s entry animation
  const cardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#000000] text-white overflow-hidden relative">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl font-bold text-[#00FF88] mb-16 mt-10"
      >
        Technical Skills
      </motion.h1>

      {/* Skill Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 px-10 pb-20 z-10"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              scale: 1.1,
              rotate: 2,
              boxShadow: "0px 0px 25px rgba(0,255,136,0.6)",
            }}
            className="flex flex-col items-center justify-center w-46 h-46 rounded-2xl bg-[#1f2937] hover:bg-[#00FF88]/10 border border-[#00FF88]/40 shadow-[0_0_20px_rgba(0,255,136,0.2)] transition-all duration-500"
          >
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3 + index * 0.2,
                ease: "easeInOut",
              }}
              className="text-5xl mb-2"
            >
              {skill.icon}
            </motion.div>
            <p className="text-[#D1D5DB] font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Glowing Background Element */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full bg-[#00FF88]/20 blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
    </div>
  );
}

export default Skills;
