// src/components/Partners.jsx
import React from "react";

function Partners() {
  const partners = [
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Microsoft_logo_%282012%29.svg",
    "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/20/HP_logo_2012.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg",
  ];

  return (
    <section id="partners" className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Partners
        </h2>
        <p className="text-gray-600 mt-4">
          We work with leading global technology providers.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center max-w-5xl mx-auto">
        {partners.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="Partner Logo"
            className="h-12 mx-auto grayscale hover:grayscale-0 transition"
          />
        ))}
      </div>
    </section>
  );
}

export default Partners;
