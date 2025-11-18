// src/components/Services.jsx
import React, { useState } from "react";
import {
  Laptop,
  Wrench,
  Network,
  Headphones,
  Cloud,
  ShieldCheck,
  Code,
  Database,
  Server,
  BookOpen,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: <Laptop className="w-8 h-8" />,
    title: "Computer Sales",
    description: "Wide range of branded desktops, laptops, and accessories. We provide genuine products with warranty, installation, and after-sales support tailored to individuals, SMEs, and institutions.",
    moreInfo: "We partner with leading global brands to deliver affordable and high-performance machines. Get personalized recommendations based on your needs.",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50"
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Repairs & Maintenance",
    description: "Hardware troubleshooting, OS reinstallation, virus removal, and preventive maintenance. Our experts ensure minimal downtime and maximum productivity.",
    moreInfo: "We offer both on-site and remote support, ensuring your systems are always up-to-date and functioning optimally.",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50"
  },
  {
    icon: <Network className="w-8 h-8" />,
    title: "LAN & Networking",
    description: "Design and deployment of LAN, WAN, and Wi-Fi networks. Includes structured cabling, router/switch configuration, VPN setup, and network security audits.",
    moreInfo: "We provide complete solutions for offices, schools, and businesses that require stable and secure networking infrastructure.",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50"
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "ICT Consultancy",
    description: "Strategic guidance on ICT infrastructure, digital transformation, system integration, and IT policies. We align technology with your business goals.",
    moreInfo: "Our consultancy ensures you invest in the right technology to drive productivity and cost-efficiency.",
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50"
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Solutions",
    description: "Migration to cloud platforms such as Microsoft 365 and Google Workspace. Cloud storage, SaaS integration, and scalable virtual environments for businesses.",
    moreInfo: "We help you scale seamlessly by moving workloads to secure and cost-effective cloud platforms.",
    gradient: "from-indigo-500 to-blue-500",
    bgGradient: "from-indigo-50 to-blue-50"
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Cybersecurity",
    description: "Comprehensive security audits, firewall configuration, endpoint protection, penetration testing, and staff awareness training to safeguard your IT assets.",
    moreInfo: "Protect your business from threats with enterprise-grade security frameworks tailored to your industry.",
    gradient: "from-red-500 to-orange-500",
    bgGradient: "from-red-50 to-orange-50"
  }
];

function Services() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="services" className="relative py-20 px-6 md:px-20 min-h-screen">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-blue-50"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary-200 rounded-full blur-3xl opacity-20 -translate-x-36 -translate-y-36"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 translate-x-48 translate-y-48"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm uppercase tracking-wider mb-4">
            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">ICT Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Maclyne Technologies provides end-to-end ICT solutions — from
            supplying quality hardware to delivering advanced IT consultancy,
            cloud migration, and cybersecurity.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer transition-all duration-500 ${
                expandedIndex === index ? 'transform scale-105' : ''
              }`}
              onClick={() => toggleExpand(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card */}
              <div className={`relative bg-white rounded-3xl p-8 h-full border-2 border-gray-100 transition-all duration-500 overflow-hidden ${
                expandedIndex === index 
                  ? `border-${service.gradient.split('-')[1]}-500/50 shadow-2xl` 
                  : 'shadow-xl hover:shadow-2xl'
              } ${
                hoveredIndex === index ? 'transform -translate-y-2' : ''
              }`}>
                
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`relative mb-6 p-4 rounded-2xl bg-gradient-to-r ${service.gradient} w-16 h-16 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Expand Section */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    expandedIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="border-t border-gray-200 pt-6">
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {service.moreInfo}
                      </p>
                      <button className="inline-flex items-center text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors duration-300 group/btn">
                        Learn more
                        <ArrowRight className="w-4 h-4 ml-1 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>

                  {/* Expand Indicator */}
                  <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
                    <span className="text-sm font-semibold text-gray-500">
                      {expandedIndex === index ? 'Show less' : 'Learn more'}
                    </span>
                    <div className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300 group-hover:bg-gradient-to-r ${service.gradient} group-hover:text-white ${
                      expandedIndex === index ? `bg-gradient-to-r ${service.gradient} text-white` : ''
                    }`}>
                      {expandedIndex === index ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Hover Border */}
                <div className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r ${service.gradient} bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}>
                  <div className="absolute inset-[2px] rounded-3xl bg-white"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your IT Infrastructure?
            </h3>
            <p className="text-primary-100 text-lg mb-6 max-w-2xl mx-auto">
              Let's discuss how our comprehensive ICT solutions can drive your business forward.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-white/25"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
