// src/components/Header.jsx
import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Company Name */}
        <div className="flex items-center space-x-4">
          <img
            src="/logo.PNG" // replace with your actual logo file
            alt="Maclyne Technologies Logo"
            className="h-16 w-16 object-contain"
          />
          <h1 className="text-4xl font-extrabold text-blue-600">
            Maclyne Technologies
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-blue-700 font-bold text-lg">
          <a href="#hero" className="hover:text-blue-600 transition-transform transform hover:scale-110">
            Home
          </a>
          <a href="#about" className="hover:text-blue-600 transition-transform transform hover:scale-110">
            About Us
          </a>
          <a href="#services" className="hover:text-blue-600 transition-transform transform hover:scale-110">
            Our Services
          </a>
          <a href="#stats" className="hover:text-blue-600 transition-transform transform hover:scale-110">
            Statistics
          </a>
          <a href="#partners" className="hover:text-blue-600 transition-transform transform hover:scale-110">
            Our Partners
          </a>
          <a href="#contact" className="hover:text-blue-600 transition-transform transform hover:scale-110">
            Contact Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-700 text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md py-4 px-6 space-y-4 text-blue-700 font-bold text-lg">
          <a href="#hero" className="block hover:text-blue-600">Home</a>
          <a href="#about" className="block hover:text-blue-600">About Us</a>
          <a href="#services" className="block hover:text-blue-600">Our Services</a>
          <a href="#stats" className="block hover:text-blue-600">Statistics</a>
          <a href="#partners" className="block hover:text-blue-600">Our Partners</a>
          <a href="#contact" className="block hover:text-blue-600">Contact Us</a>
        </div>
      )}
    </header>
  );
}

export default Header;





