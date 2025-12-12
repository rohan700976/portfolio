import React from "react";
import rohan from "../assets/heroImg/Rohan.jpg";

function Hero() {
  return (
    <div className="w-full min-h-screen flex items-center justify-between px-20 bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#000000] overflow-hidden">
      
      {/* Left Section */}
      <div className="w-1/2 space-y-5 mx-10">
        <p className="text-6xl font-bold text-[#00FF88] animate-pulse">Hi,</p>
        <p className="text-white text-6xl font-bold">I'm Rohan</p>

        <h1 className="text-[#00FF88] text-5xl font-bold mt-5 animate-gradient">
          Full-Stack Developer
        </h1>

        <p className="text-[#D1D5DB] mt-8 text-lg max-w-lg">
          Crafting seamless digital experiences with elegant design,
          efficient code, and a sprinkle of creativity.
        </p>

        <p className="text-[#9CA3AF] mt-2 text-base">
          Passionate about turning ideas into impactful web solutions.
        </p>

        <span className="text-[#9CA3AF] italic text-base tracking-wide">
          Let’s build something amazing together 🚀
        </span>

        <br />
        <button className="bg-[#00FF88] text-[#111827] hover:bg-[#00cc6a] transition-all duration-300 font-semibold rounded-2xl mt-5 px-6 py-2 shadow-[0_0_25px_rgba(0,255,136,0.6)] hover:shadow-[0_0_35px_rgba(0,255,136,0.9)]">
          Connect Me
        </button>
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex justify-center relative">
        <div className="relative group">
          {/* Glow behind the image */}
          <div className="absolute inset-0 rounded-full blur-3xl bg-[#00FF88]/40 scale-125 animate-pulse"></div>

          {/* Profile Image */}
          <img
            src={rohan}
            alt="Rohan"
            className="w-100 h-105  mb-1 object-cover rounded-full border-4 border-[#00FF88] shadow-[0_0_60px_rgba(0,255,136,0.8)] transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:shadow-[0_0_90px_rgba(0,255,136,1)]"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
