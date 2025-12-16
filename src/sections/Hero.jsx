import React from "react";
import rohan from "../assets/heroImg/rohan.jpg";

function Hero() {
  return (
    <div className="w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-5 sm:px-10 md:px-40 bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#000000] overflow-hidden py-10 ">

      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-4 sm:space-y-5 ">
        <p className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-[#00FF88] animate-pulse">Hi,</p>
        <p className="text-white text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold">I'm Rohan</p>

        <h1 className="text-[#00FF88] text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mt-3 md:mt-5 animate-gradient">
          Full-Stack Developer
        </h1>

        <p className="text-[#D1D5DB] mt-4 md:mt-6 text-sm sm:text-base md:text-base lg:text-lg max-w-md md:max-w-lg">
          Crafting seamless digital experiences with elegant design, efficient code, and a sprinkle of creativity.
        </p>

        <p className="text-[#9CA3AF] mt-2 text-sm sm:text-base md:text-base lg:text-base">
          Passionate about turning ideas into impactful web solutions.
        </p>

        <span className="text-[#9CA3AF] italic text-sm sm:text-base md:text-base tracking-wide">
          Let’s build something amazing together 🚀
        </span>

    <button
  onClick={() => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
  className="bg-[#00FF88] text-[#111827] hover:bg-[#00cc6a] transition-all
  duration-300 font-semibold rounded-2xl mt-5 px-5 py-2 sm:px-6 sm:py-2 
  shadow-[0_0_20px_rgba(0,255,136,0.6)] hover:shadow-[0_0_35px_rgba(0,255,136,0.9)]"
>
  Connect Me
</button>

      </div>

      {/* Right Section */}
    <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-10 md:mb-0 relative">
  <div className="relative">
    {/* Permanent Glow */}
    <div className="absolute inset-0 rounded-full blur-3xl bg-[#00FF88]/50 scale-125 animate-pulse"></div>

    {/* Profile Image */}
    <img
      src={rohan}
      alt="Rohan"
      className="
        w-64 sm:w-72 md:w-80 lg:w-96
        h-64 sm:h-72 md:h-80 lg:h-105
        object-cover
        rounded-full
        border-4 border-[#00FF88]

        scale-105
        shadow-[0_0_90px_rgba(0,255,136,1)]

        transition-transform duration-500 ease-in-out
      "
    />
  </div>
</div>

    </div>
  );
}

export default Hero;
