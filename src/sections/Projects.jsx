import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import styleLoop from "../assets/projectsImg/styleLoop.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import kisanmitra from '../assets/projectsImg/kisanmitra.png'
import ezLandingPage from '../assets/projectsImg/ez.png'

function Projects() {
  const projects = [
    {
      title: "StyleLoop",
      desc: "Full-stack E-commerce platform built with React.js, Node.js, and MongoDB.",
      img: styleLoop,
      url: "https://github.com/rohan700976/StyleLoop",
    },
    {
      title: "KisanMitra",
      desc: "KisanMitra provides AI support for farmers to grow crops efficiently.",
      img: kisanmitra,
      url: "https://github.com/rohan700976/AiFarmerAssistantWeb",
    },
    {
      title: "EZ Landing Page",
      desc: "EZ is a landing page developed to enhance my frontend skills.",
      img: ezLandingPage,
      url: "https://github.com/rohan700976/EzProject",
    },
  ];


  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    slidesToShow: 3, // Desktop unchanged
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // tablet / iPad landscape
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 768, // iPad portrait / larger phones
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 640, // smaller phones
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#000000] pb-10 pt-16 px-4 sm:px-6 md:px-10">
      <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold text-center text-white mb-10 sm:mb-14">
        My <span className="text-[#00FF88]">Projects</span>
      </h1>

      <Slider {...settings}>
        {projects.map((project, index) => (
          // Outer slide wrapper — make it flex so card is centered and doesn't overflow
          <div key={index} className="px-1 sm:px-2 md:px-3 lg:px-4">
            <div className="flex justify-center">
              {/* Card: w-full so it fills the slide, but limit with max-w per breakpoint */}
              <motion.div
                className="w-full max-w-[300px]  md:max-w-[420px] lg:h-100 lg:w-90 mt-6 bg-[#1E293B]/70 border border-[#00FF88]/30 rounded-2xl shadow-lg p-4 flex flex-col justify-between backdrop-blur-md hover:shadow-[0_0_25px_#00FF88]/50 transition-all duration-500"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
              >
                {/* Image Section */}
                <div className="overflow-hidden rounded-xl">
                  <motion.img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-36 sm:h-40 md:h-44 object-cover rounded-xl"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>

                {/* Title */}
                <h2 className="text-xl sm:text-2xl font-bold text-[#00FF88] text-center mt-3">
                  {project.title}
                </h2>

                {/* Description */}
                <p className="text-xs sm:text-sm md:text-base text-gray-300 text-center px-2 mt-2">
                  {project.desc}
                </p>

                {/* Button */}
                <motion.button
                  className="mt-4 mx-auto px-5 sm:px-6 py-2 rounded-full text-black bg-[#00FF88] font-semibold hover:bg-[#00cc6a] transition-all duration-300 text-sm sm:text-base"
                  whileHover={{ scale: 1.06 }}
                  onClick={() => window.open(project.url, "_blank")}
                >
                  View Project
                </motion.button>

              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Projects;
