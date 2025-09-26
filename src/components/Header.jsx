// src/components/Header.jsx
import React from "react";

function Header() {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Company Name */}
        <div className="flex items-center space-x-4">
          <img
            src="/logo.PNG" // replace with your actual logo file in /public
            alt="Maclyne Technologies Logo"
            className="h-16 w-16 object-contain"
          />
          <h1 className="text-3xl font-extrabold text-blue-600">
            Maclyne Technologies
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 text-blue-700 font-bold">
          {[
            { label: "Home", link: "#home" },
            { label: "About Us", link: "#about" },
            { label: "Our Services", link: "#services" },
            { label: "Statistics", link: "#stats" },
            { label: "Our Partners", link: "#partners" },
            { label: "Contact Us", link: "#footer" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="group relative inline-block transition transform hover:scale-110 hover:text-blue-600 px-1"
              aria-label={item.label}
            >
              {item.label}
              {/* sliding underline */}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
