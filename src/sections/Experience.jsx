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
        className="space-y-4 pt-10 pl-8 md:pl-40"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-semibold text-2xl text-white">
          What I'have done so far..
        </h1>
        <h1 className="text-5xl font-bold text-[#00FF88]">Experience</h1>
      </motion.div>

      {/* Responsive Layout */}
      <div className="
        flex flex-col 
        md:flex-row 
        items-center 
        mt-10 
        px-4 
        sm:px-6 
        md:px-10
      ">

        {/* LEFT SIDE */}
        <div className="
          w-full 
          md:w-1/2 
          relative 
          flex 
          flex-col 
          items-center 
          md:items-start
          
        ">
          
          {/* Card 1 */}
          <motion.div
            className="
              w-full
              sm:w-[90%]
              md:w-full md:max-w-[420px]
              h-auto
              md:h-48
              border border-[#00FF88]/40
              p-4
              mt-10
              rounded-xl
              bg-white/5
              backdrop-blur-sm
              lg:ml-40
              lg:mt-18
            "
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.03 }}
          >
            <h1 className="text-2xl font-bold text-white">
              Software Developer Intern
            </h1>
            <h2 className="text-xl font-bold text-white">
              HashedBit Innovations PVT LTD
            </h2>
            <p className="text-sm text-[#9CA3AF] pt-2">
              • Contributing to live projects.<br />
              • Collaborating with team in daily standups.<br />
              • Working on production-level applications.
            </p>
          </motion.div>

          <motion.h3
            className="
              text-xl
              font-bold
              text-[#9CA3AF]
              mt-2
              md:absolute
              md:top-2
              md:ml-20
              lg:ml-60
              
            "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            May 2025 – July 2025
          </motion.h3>

          {/* Card 2 */}
          <motion.div
            className="
              w-full
              sm:w-[90%]
              md:w-full md:max-w-[420px]
              h-auto
              md:h-48
              border border-[#00FF88]/40
              p-4
              mt-10
              md:mt-40
              rounded-xl
              bg-white/5
              backdrop-blur-sm
              flex
              flex-col
              items-center
              justify-center
              lg:ml-40
            "
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.03 }}
          >
            <h1 className="text-2xl font-bold text-white">RESUME</h1>

            <a
              href="/Rohan-Resume.pdf"
              download="Rohan-Resume.pdf"
              className="
                mt-4
                px-5
                py-2
                bg-[#00FF88]
                text-black
                font-semibold
                rounded-lg
                shadow-[0_0_10px_#00FF88aa]
                hover:scale-105
                transition-all
                duration-300
              "
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* TIMELINE — Only Desktop */}
        <motion.div
          className="
            hidden
            lg:block
            h-[650px]
            w-[4px]
            bg-[#00FF88]
            mx-10
            rounded-md
            shadow-[0_0_20px_#00FF88aa]
          "
          initial={{ height: 0 }}
          animate={{ height: "650px" }}
          transition={{ duration: 1.5 }}
        />

        {/* RIGHT SIDE */}
        <div className="
          w-full
          md:w-1/2
          relative
          mt-12
          md:mt-0
          flex
          flex-col
          items-center
          md:items-start
        ">
          <motion.h3
            className="
              text-xl
              md:text-2xl
              font-bold
              text-center
              md:text-left
              text-[#9CA3AF]
              md:px-25
            "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            May 2025 – June 2025
          </motion.h3>

          {/* Card 3 */}
          <motion.div
            className="
              w-full
              sm:w-[90%]
              md:w-full md:max-w-[420px]
              h-auto
              md:h-48
              border border-[#00FF88]/40
              p-4
              mt-6
              md:mt-10
              md:ml-10
              rounded-xl
              bg-white/5
              backdrop-blur-sm
            "
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.03 }}
          >
            <h1 className="text-2xl font-bold text-white">
              Web Development Intern
            </h1>
            <h2 className="text-xl font-bold text-white">COER University</h2>
            <p className="text-sm text-[#9CA3AF] pt-2">
              • Full-time internship.<br />
              • Learned HTML, CSS, JS, React.<br />
              • Backend with Node.js, Express, DB.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
