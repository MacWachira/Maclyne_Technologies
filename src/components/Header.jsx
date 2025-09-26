// src/components/Header.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // for hamburger icons

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", link: "#home" },
    { label: "About Us", link: "#about" },
    { label: "Our Services", link: "#services" },
    { label: "Statistics", link: "#stats" },
    { label: "Our Partners", link: "#partners" },
    { label: "Contact Us", link: "#footer" },
  ];

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Company Name */}
        <div className="flex items-center space-x-4">
          <img
            src="/logo.PNG"
            alt="Maclyne Technologies Logo"
            className="h-14 w-14 object-contain"
          />
          <h1 className="text-2xl font-extrabold text-blue-600">
            Maclyne Technologies
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-blue-700 font-bold">
          {navLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="group relative transition transform hover:scale-110 hover:text-blue-600"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-blue-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-4 px-6 py-4 text-blue-700 font-bold">
            {navLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                onClick={() => setIsOpen(false)}
                className="transition transform hover:scale-105 hover:text-blue-600"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;

