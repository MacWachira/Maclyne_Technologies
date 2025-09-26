
// src/components/About.jsx
import React from "react";

function About() {
  return (
    <section id="about" className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            About Maclyne Technologies
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Maclyne Technologies is a trusted ICT solutions provider based in
            Kenya. We specialize in computer sales, repairs, and maintenance,
            as well as comprehensive ICT consultancy services tailored to meet
            the unique needs of our clients.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our team of professionals delivers reliable solutions in LAN setups,
            structured cabling, and IT infrastructure support. With a focus on
            quality service and customer satisfaction, we ensure that both
            individuals and businesses can thrive in today’s fast-changing
            digital world.
          </p>
          <a
            href="#services"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Explore Our Services
          </a>
        </div>

        {/* Right side - image */}
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/free-photo/it-engineer-working-server-room_53876-139505.jpg"
            alt="Maclyne Technologies - ICT Solutions"
            className="rounded-2xl shadow-lg w-full md:w-5/6 object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default About;