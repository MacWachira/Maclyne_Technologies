// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import { ChevronDown, Phone } from "lucide-react";

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
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

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <div className="max-w-4xl mx-auto animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/30">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold">Trusted ICT Solutions in Kenya</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 drop-shadow-2xl">
            Reliable <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">ICT Solutions</span> for Businesses & Individuals
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner for computer sales, repairs, networking, and comprehensive IT services across Kenya.
          </p>

          {/* Phone Number with enhanced styling */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="p-3 bg-green-500/20 backdrop-blur-sm rounded-full border border-green-400/30">
              <Phone className="w-6 h-6 text-green-300" />
            </div>
            <a
              href="tel:+254711642342"
              className="text-3xl md:text-4xl font-bold text-green-300 hover:text-green-200 transition-colors duration-300 hover:underline decoration-2"
            >
              +254 711 642 342
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#services"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
            >
              Discover Our Services
            </a>
            <a
              href="#contact"
              className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm hover:bg-white/10 flex items-center gap-2"
            >
              Get Free Consultation
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 animate-float text-white/80 hover:text-white transition-colors duration-300"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>

      {/* Slideshow Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
