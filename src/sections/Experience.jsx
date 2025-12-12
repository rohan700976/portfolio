import React from "react";
import { motion } from "framer-motion";

function Experience() {
  return (
    <motion.div
      className="w-full min-h-screen bg-gradient-to-br from-[#111827] via-[#1F2937] to-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Section Titles */}
      <motion.div
        className="space-y-4 pt-10 pl-40 "
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-semibold text-2xl text-white">What I'have done so far..</h1>
        <h1 className="text-5xl font-bold text-[#00FF88]  ">Experience</h1>
      </motion.div>

      {/* Main Grid */}
      <div className="flex items-center mt-10 px-10">

        {/* LEFT SIDE */}
        <div className="w-1/2  px-25 relative">
          {/* Card 1 */}
          <motion.div
            className="w-120 h-48 border border-[#00FF88]/40 p-4 mt-20 rounded-xl bg-white/5 backdrop-blur-sm "
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.03 }}
          >
            <h1 className="text-2xl font-bold text-white">Software Developer Intern</h1>
            <h2 className="text-xl font-bold text-white">HashedBit Innovations PVT LTD</h2>
            <p className="text-sm text-[#9CA3AF] pt-2">
              • Contributing to live projects, gaining hands-on experience in real-world development.<br />
              • Collaborating with team in daily standups.<br />
              • Enhancing skills by working on production-level applications.
            </p>
          </motion.div>

          <motion.h3
            className="text-2xl font-bold ml-20 text-[#9CA3AF] top-2 absolute"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            May 2025 – July 2025
          </motion.h3>

          {/* Card 2 */}
          <motion.div
            className="w-120 h-48 border border-[#00FF88]/40 p-4 mt-40 rounded-xl bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.03 }}
          >
            <h1 className="text-2xl font-bold text-white">RESUME</h1>

            {/* Download Button */}
            <a
              href="/Rohan-Resume.pdf"
              download="Rohan-Resume.pdf"
              className="mt-4 px-5 py-2 bg-[#00FF88] text-black font-semibold rounded-lg 
               shadow-[0_0_10px_#00FF88aa] hover:scale-105 transition-all duration-300"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* VERTICAL TIMELINE */}
        <motion.div
          className="h-[650px] w-[4px] bg-[#00FF88] mx-10 rounded-md 
                     shadow-[0_0_20px_#00FF88aa]"
          initial={{ height: 0 }}
          animate={{ height: "650px" }}
          transition={{ duration: 1.5 }}
        />

        {/* RIGHT SIDE */}
        <div className="w-1/2 relative">
          <motion.h3
            className="text-2xl font-bold text-center mr-30 text-[#9CA3AF]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            May 2025 – June 2025
          </motion.h3>

          {/* Card 3 */}
          <motion.div
            className="w-120 h-48 border border-[#00FF88]/40 p-4 mt-10 ml-10 rounded-xl bg-white/5 backdrop-blur-sm"
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.03 }}
          >
            <h1 className="text-2xl font-bold text-white">Web Development Intern</h1>
            <h2 className="text-xl font-bold text-white">COER University</h2>
            <p className="text-sm text-[#9CA3AF] pt-2">
              • Completed on-site full-time internship.<br />
              • Learned Frontend (HTML, CSS, JS, React).<br />
              • Backend using Node.js, Express, and databases.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
