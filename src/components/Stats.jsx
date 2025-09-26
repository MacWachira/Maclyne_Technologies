// src/components/Stats.jsx
import React from "react";

const stats = [
  { label: "Happy Clients", value: "500+" },
  { label: "Projects Completed", value: "300+" },
  { label: "Years of Experience", value: "10+" },
  { label: "Support Available", value: "24/7" },
];

function Stats() {
  return (
    <section id="stats" className="bg-blue-600 py-16 px-6 md:px-20 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <h3 className="text-3xl md:text-4xl font-bold">{stat.value}</h3>
            <p className="text-gray-200 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
