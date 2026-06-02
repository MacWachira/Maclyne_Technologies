// src/components/About.jsx
import React from "react";
import { CheckCircle, ArrowRight, Users, Target, Award } from "lucide-react";

function About() {
  const features = [
    "Trusted ICT Solutions Provider",
    "Professional Team of Experts", 
    "Quality Service Guarantee",
    "Customer Satisfaction Focus",
    "Fast & Reliable Support",
    "Competitive Pricing"
  ];

  return (
    <section id="about" className="relative py-20 px-6 md:px-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-30 -translate-y-36 translate-x-36"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 -translate-x-48 translate-y-48"></div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left side - text */}
        <div className="animate-slide-up">
          {/* Section Header */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">
              <Target className="w-4 h-4" />
              About Our Company
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Leading <span className="text-primary-600">ICT Solutions</span> Provider in Kenya
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full mb-8"></div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Maclyne Technologies is a trusted ICT solutions provider based in
              Kenya. We specialize in computer sales, repairs, and maintenance,
              as well as comprehensive ICT consultancy services tailored to meet
              the unique needs of our clients.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our team of professionals delivers reliable solutions in LAN setups,
              structured cabling, and IT infrastructure support. With a focus on
              quality service and customer satisfaction, we ensure that both
              individuals and businesses can thrive in today's fast-changing
              digital world.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-4 my-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 group">
                <div className="flex-shrink-0 w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-500 transition-colors duration-300">
                  <CheckCircle className="w-3 h-3 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 p-6 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl border border-primary-100">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 mb-1">5+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 mb-1">100+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 mb-1">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-500/25"
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border-2 border-gray-300 hover:border-primary-500 text-gray-700 hover:text-primary-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Right side - image */}
        <div className="relative animate-slide-up">
          <div className="relative group">
            {/* Main Image */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
              <img
                src="computer-repair.jpg"
                alt="Maclyne Technologies - ICT Solutions"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-500 rounded-2xl rotate-12 opacity-90 group-hover:rotate-45 transition-transform duration-500"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 rounded-3xl -rotate-12 opacity-80 group-hover:-rotate-45 transition-transform duration-500"></div>
            
            {/* Experience Badge */}
            <div className="absolute top-8 -right-8 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100 transform rotate-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">5+</div>
                  <div className="text-sm text-gray-600">Years</div>
                </div>
              </div>
            </div>

            {/* Team Badge */}
            <div className="absolute bottom-8 -left-8 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100 transform -rotate-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">Expert</div>
                  <div className="text-sm text-gray-600">Team</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
