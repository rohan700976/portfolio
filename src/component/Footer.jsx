import React from "react";
import { motion } from "framer-motion";
import { SiLeetcode, SiGmail } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import resume from '../../public/Rohan-Resume.pdf'

const Footer = () => {
//   const resumeFile = '../../public/resume.pdf'
  return (
    <motion.footer
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-gradient-to-b from-gray-900 to-black text-white pt-12 pb-6 px-6 w-full"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2"
        >
          <h2 className="text-4xl font-extrabold tracking-wide mb-2">
            <span className="text-[#00FF88] drop-shadow-lg">Rohan</span>
          </h2>
          <p className="text-3xl mt-2 font-bold tracking-wider drop-shadow-md">
            Full Stack Developer
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
           href="/Rohan-Resume.pdf"
          download="Rohan-Resume.pdf"
            className="border-2 text-[#00FF88] px-8 py-2 rounded-full hover:bg-[#00FF88] hover:text-black hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 font-semibold mt-10"
          >
            Resume
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center w-full md:w-1/2 space-y-6"
        >
          <h2 className="font-bold text-2xl text-[#00FF88]drop-shadow-md hover:text-[#00FF88]">
            Let’s Connect
          </h2>

          <div className="flex flex-row gap-8 mt-2 flex-wrap justify-center">
            <motion.a
              whileHover={{ scale: 1.15, rotate: 5 }}
              href="https://github.com/rohan700976"
              aria-label="GitHub"
              className="hover:text-orange-400 transition-all duration-300"
            >
              <FaGithub size={42} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.15, rotate: -5 }}
              href="https://www.linkedin.com/in/rohansingh0880/"
              aria-label="LinkedIn"
              className="hover:text-[#00FF88] transition-all duration-300"
            >
              <FaLinkedin size={42} />
            </motion.a>
{/* 
            <motion.a
              whileHover={{ scale: 1.15, rotate: 5 }}
              href="mailto:rohansingh@gmail.com"
              aria-label="Gmail"
              className="hover:text-[#00FF88] transition-all duration-300"
            >
              <SiGmail size={40} />
            </motion.a> */}

            <motion.a
              whileHover={{ scale: 1.15, rotate: -5 }}
              href="https://leetcode.com/u/Rohansingh_/"
              aria-label="LeetCode"
              className="hover:text-yellow-400 transition-all duration-300"
            >
              <SiLeetcode size={40} />
            </motion.a>
          </div>

          <p className="text-sm text-gray-400 mt-4 text-center">
            © {new Date().getFullYear()} — Designed & Developed by{" "}
            <span className="text-[#00FF88] font-semibold">
              Rohan
            </span>
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
        className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-500 text-sm"
      >
        Made with ❤️ using React & Tailwind CSS
      </motion.div>
    </motion.footer>
  );
};

export default Footer;