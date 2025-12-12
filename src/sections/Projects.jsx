import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import styleLoop from "../assets/projectsImg/styleLoop.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projects() {
  const projects = [
    {
      title: "StyleLoop",
      desc: "Full-stack E-commerce platform built with React.js, Node.js, and MongoDB.",
      img: styleLoop,
    },
    {
      title: "Women Safety App",
      desc: "Real-time location tracking & SOS alerts using React Native and Node.js.",
      img: styleLoop,
    },
    {
      title: "ATS Resume Analyzer",
      desc: "AI-based resume scoring system using NLP and LinkedIn integration.",
      img: styleLoop,
    },
    {
      title: "AltairCare",
      desc: "AI-driven healthcare analytics dashboard with React & Flask.",
      img: styleLoop,
    },
    {
      title: "Portfolio Site",
      desc: "Personal portfolio built with React, Tailwind, and Framer Motion.",
      img: styleLoop,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#000000] py-16 px-10">
      <h1 className="text-5xl font-bold text-center text-white mb-14">
        My <span className="text-[#00FF88]">Projects</span>
      </h1>

      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="px-4">
            <motion.div
              className="w-90  mt-10 h-[400px] bg-[#1E293B]/70 border border-[#00FF88]/30 rounded-2xl shadow-lg p-4 flex flex-col justify-between backdrop-blur-md hover:shadow-[0_0_25px_#00FF88]/50 transition-all duration-500"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
            >
              {/* Image Section */}
              <div className="overflow-hidden rounded-xl">
                <motion.img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-44 object-cover rounded-xl"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-[#00FF88] text-center mt-3">
                {project.title}
              </h2>

              {/* Description */}
              <p className="text-sm text-gray-300 text-center px-2 mt-2">
                {project.desc}
              </p>

              {/* Button */}
              <motion.button
                className="mt-5 mx-auto px-6 py-2 rounded-full text-black bg-[#00FF88] font-semibold hover:bg-[#00cc6a] transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                View Project
              </motion.button>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Projects;
