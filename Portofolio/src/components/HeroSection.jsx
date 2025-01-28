import React from "react";
import {Link} from "react-router-dom"

const HeroSection = () => {
  const DevName = "Eyad Elsherif"
  const DevType = "Full-Stack Web Developer"

  return (
    <section className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
        Hi, I'm <span className="text-purple-700">{DevName}</span>
      </h1>
      <p className="text-lg md:text-2xl text-gray-300 mb-6 max-w-2xl">
        A passionate <span className="text-purple-700">{DevType} Developer</span> crafting modern, scalable, and user-friendly web applications.
      </p>
      <div className="flex space-x-4">
        <Link
          to="/Projects"
          className="bg-purple-700 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-purple-800 transition duration-300"
        >
          View My Work
        </Link>
        <Link
          to="/contact"
          className="border border-purple-700 text-purple-700 px-6 py-3 rounded-md text-lg font-medium hover:bg-purple-700 hover:text-white transition duration-300"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
