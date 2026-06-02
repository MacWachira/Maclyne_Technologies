// src/components/Stats.jsx
import React, { useState, useEffect, useRef } from "react";
import { Users, FolderCheck, Calendar, Clock } from "lucide-react";

const stats = [
  { 
    label: "Happy Clients", 
    value: "100", 
    suffix: "+",
    icon: <Users className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-500"
  },
  { 
    label: "Projects Completed", 
    value: "100", 
    suffix: "+",
    icon: <FolderCheck className="w-8 h-8" />,
    color: "from-green-500 to-emerald-500"
  },
  { 
    label: "Years of Experience", 
    value: "5", 
    suffix: "+",
    icon: <Calendar className="w-8 h-8" />,
    color: "from-purple-500 to-pink-500"
  },
  { 
    label: "Support Available", 
    value: "24/7",
    suffix: "",
    icon: <Clock className="w-8 h-8" />,
    color: "from-orange-500 to-red-500"
  },
];

function Stats() {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          stats.forEach((stat, index) => {
            const target = parseInt(stat.value);
            const duration = 2000;
            const steps = 60;
            const step = target / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += step;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setCounters(prev => {
                const newCounters = [...prev];
                newCounters[index] = Math.floor(current);
                return newCounters;
              });
            }, duration / steps);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} id="stats" className="relative py-20 px-6 md:px-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-blue-600 to-cyan-600"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-400/30 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Businesses Across Kenya
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            With years of experience and hundreds of satisfied clients, we deliver exceptional ICT solutions that drive success.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center relative"
            >
              {/* Card */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 transition-all duration-500 hover:bg-white/15 hover:scale-105 hover:shadow-2xl">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {stat.icon}
                </div>

                {/* Counter */}
                <div className="mb-3">
                  <span className="text-4xl md:text-5xl font-bold text-white">
                    {stat.value.includes('/') ? stat.value : counters[index]}
                  </span>
                  {!stat.value.includes('/') && (
                    <span className="text-4xl md:text-5xl font-bold text-white/80">
                      {stat.suffix}
                    </span>
                  )}
                </div>

                {/* Label */}
                <p className="text-blue-100 font-semibold text-lg tracking-wide">
                  {stat.label}
                </p>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}></div>
              </div>

              {/* Connecting Lines */}
              {index < stats.length - 1 && (
                <>
                  <div className="hidden lg:block absolute top-1/2 right-0 w-8 h-0.5 bg-white/30 transform translate-x-4 -translate-y-1/2"></div>
                  <div className="hidden lg:block absolute top-1/2 right-0 w-2 h-2 bg-white rounded-full transform translate-x-4 -translate-y-1/2"></div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <span className="text-white text-lg font-semibold">
              Ready to join our satisfied clients?
            </span>
            <a
              href="#contact"
              className="bg-white text-primary-600 px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-white/25"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
