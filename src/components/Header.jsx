// src/components/Header.jsx
import React, { useState, useEffect } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Our Services" },
    { href: "#stats", label: "Statistics" },
    { href: "#partners", label: "Our Partners" },
    { href: "#contact", label: "Contact Us" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo + Company Name */}
        <div className="flex items-center space-x-4">
          <img
            src="/logo.PNG"
            alt="Maclyne Technologies Logo"
            className="h-12 w-12 object-contain transition-transform duration-300 hover:scale-110"
          />
          <h1 className={`text-2xl font-bold transition-colors duration-300 ${
            scrolled ? 'text-primary-600' : 'text-white'
          }`}>
            Maclyne Technologies
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`font-semibold transition-all duration-300 hover:text-primary-500 relative group ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:block bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-500/25"
        >
          Get Quote
        </a>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden text-2xl transition-colors duration-300 ${
            scrolled ? 'text-gray-700' : 'text-white'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/95 backdrop-blur-md py-4 px-6 space-y-4 shadow-lg">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block text-gray-700 font-semibold hover:text-primary-600 transition-colors duration-300 py-2"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block bg-primary-600 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-primary-700"
            onClick={() => setIsOpen(false)}
          >
            Get Quote
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
