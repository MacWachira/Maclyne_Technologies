// src/components/Hero.jsx
import React, { useState, useEffect } from "react";

const images = [
  "/computer-repair.jpg",
  "/networking.jpg",
  "/cloud-solutions.jpg",
  "/ict-consultancy.jpg",
  "/cloud-solutions1.jpg",
  "/cloud-solutions2.jpg",
  "/networking1.jpg",
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change images every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    // NOTE: id="home" makes this the anchor target for the Home link
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Background Slideshow */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <img
            src={img}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
          Reliable ICT Solutions <br /> for Businesses & Individuals
        </h1>

       {/* Phone Number */}
  <a
    href="#contact"
    className="text-5xl md:text-6xl font-extrabold text-green-300 mb-6 hover:underline"
  >
    +254 711 642 342
  </a>
        
        <a
          href="#services"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg shadow-lg transition transform hover:scale-105"
        >
          Discover Our Services
        </a>
      </div>
    </section>
  );
}

export default Hero;




