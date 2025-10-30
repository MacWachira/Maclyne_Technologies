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
  MessageCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const services = [
  {
    icon: <Laptop className="w-10 h-10 text-blue-600" />,
    title: "Computer Sales",
    description:
      "Wide range of branded desktops, laptops, and accessories. We provide genuine products with warranty, installation, and after-sales support tailored to individuals, SMEs, and institutions.",
    moreInfo:
      "We partner with leading global brands to deliver affordable and high-performance machines. Get personalized recommendations based on your needs.",
  },
  {
    icon: <Wrench className="w-10 h-10 text-blue-600" />,
    title: "Repairs & Maintenance",
    description:
      "Hardware troubleshooting, OS reinstallation, virus removal, and preventive maintenance. Our experts ensure minimal downtime and maximum productivity.",
    moreInfo:
      "We offer both on-site and remote support, ensuring your systems are always up-to-date and functioning optimally.",
  },
  {
    icon: <Network className="w-10 h-10 text-blue-600" />,
    title: "LAN & Networking",
    description:
      "Design and deployment of LAN, WAN, and Wi-Fi networks. Includes structured cabling, router/switch configuration, VPN setup, and network security audits.",
    moreInfo:
      "We provide complete solutions for offices, schools, and businesses that require stable and secure networking infrastructure.",
  },
  {
    icon: <Headphones className="w-10 h-10 text-blue-600" />,
    title: "ICT Consultancy",
    description:
      "Strategic guidance on ICT infrastructure, digital transformation, system integration, and IT policies. We align technology with your business goals.",
    moreInfo:
      "Our consultancy ensures you invest in the right technology to drive productivity and cost-efficiency.",
  },
  {
    icon: <Cloud className="w-10 h-10 text-blue-600" />,
    title: "Cloud Solutions",
    description:
      "Migration to cloud platforms such as Microsoft 365 and Google Workspace. Cloud storage, SaaS integration, and scalable virtual environments for businesses.",
    moreInfo:
      "We help you scale seamlessly by moving workloads to secure and cost-effective cloud platforms.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
    title: "Cybersecurity",
    description:
      "Comprehensive security audits, firewall configuration, endpoint protection, penetration testing, and staff awareness training to safeguard your IT assets.",
    moreInfo:
      "Protect your business from threats with enterprise-grade security frameworks tailored to your industry.",
  },
  {
    icon: <Code className="w-10 h-10 text-blue-600" />,
    title: "Website Development",
    description:
      "Modern, responsive, and SEO-friendly websites. From corporate sites to e-commerce platforms, we build digital experiences that drive growth.",
    moreInfo:
      "We utilize the latest technologies to create fast, secure, and user-friendly websites that represent your brand and convert visitors into customers.",
  },
  {
    icon: <Server className="w-10 h-10 text-blue-600" />,
    title: "Custom Software Development",
    description:
      "Bespoke business applications and software integration to streamline your unique operations and improve internal workflows.",
    moreInfo:
      "Our dev team builds scalable apps tailored to your processes, from internal management tools to complex ERP systems.",
  },
  {
    icon: <Database className="w-10 h-10 text-blue-600" />,
    title: "Data Backup & Recovery",
    description:
      "Automated backup solutions, disaster recovery planning, and secure offsite data storage to ensure your information is always safe and retrievable.",
    moreInfo:
      "We provide continuous data protection so you never lose critical information, even in emergencies.",
  },
  {
    icon: <Server className="w-10 h-10 text-blue-600" />,
    title: "Server Installation & Management",
    description:
      "Deployment and management of physical and virtual servers. We configure, monitor, and maintain servers for high availability and scalability.",
    moreInfo:
      "Our server management solutions include monitoring, updates, and disaster recovery planning.",
  },
  {
    icon: <BookOpen className="w-10 h-10 text-blue-600" />,
    title: "IT Training & Support",
    description:
      "User training sessions, IT workshops, and dedicated support to empower teams with the skills to use technology effectively and securely.",
    moreInfo:
      "We offer personalized training packages, from beginner computer literacy to advanced IT certifications.",
  },
];

function Services() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section 
      id="services" 
      className="relative py-16 px-6 md:px-20 min-h-screen"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our Services
          </h2>
          <p className="text-gray-200 mt-4 max-w-3xl mx-auto">
            Maclyne Technologies provides end-to-end ICT solutions — from
            supplying quality hardware to delivering advanced IT consultancy,
            cloud migration, and cybersecurity. We are your one-stop partner for
            reliable and innovative technology services.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent
                ${expandedIndex === index 
                  ? 'transform scale-105 bg-white/95 border-blue-500 shadow-2xl' 
                  : 'hover:transform hover:scale-105'
                }
                ${hoveredIndex === index ? 'border-blue-300 shadow-xl' : ''}
                group hover:bg-white/95`}
              onClick={() => toggleExpand(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Hover glow effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                hoveredIndex === index ? 'opacity-100' : ''
              }`}></div>
              
              {/* Icon container with hover animation */}
              <div className="relative mb-4 flex justify-center">
                <div className={`p-3 rounded-2xl bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300 ${
                  hoveredIndex === index ? 'transform scale-110' : ''
                }`}>
                  {React.cloneElement(service.icon, {
                    className: `w-10 h-10 text-blue-600 transition-all duration-300 ${
                      hoveredIndex === index ? 'transform scale-110' : ''
                    }`
                  })}
                </div>
              </div>

              {/* Title with hover effect */}
              <h3 className={`relative text-xl font-semibold text-gray-800 mb-2 transition-all duration-300 ${
                hoveredIndex === index ? 'text-blue-700 transform scale-105' : ''
              }`}>
                {service.title}
              </h3>

              {/* Description */}
              <p className="relative text-gray-600 text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Expand indicator */}
              <div className="relative flex justify-center mt-2">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 group-hover:bg-blue-100 transition-colors duration-300 ${
                  expandedIndex === index ? 'bg-blue-100' : ''
                }`}>
                  {expandedIndex === index ? (
                    <ChevronUp className="w-4 h-4 text-blue-600" />
                  ) : (
                    <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${
                      hoveredIndex === index ? 'text-blue-600 transform scale-110' : ''
                    }`} />
                  )}
                </div>
              </div>

              {/* Expanded section with smooth animation */}
              <div className={`relative overflow-hidden transition-all duration-500 ${
                expandedIndex === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
              }`}>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                    {service.moreInfo}
                  </p>
                  <button className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors duration-300">
                    Learn more
                    <ChevronDown className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              {/* Pulse animation on hover */}
              <div className={`absolute inset-0 rounded-2xl border-2 border-blue-400/30 ${
                hoveredIndex === index ? 'animate-pulse' : 'hidden'
              }`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
