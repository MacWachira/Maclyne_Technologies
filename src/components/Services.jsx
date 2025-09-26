// src/components/Services.jsx
import React from "react";
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
} from "lucide-react";

const services = [
  {
    icon: <Laptop className="w-10 h-10 text-blue-600" />,
    title: "Computer Sales",
    description:
      "Wide range of branded desktops, laptops, and accessories. We provide genuine products with warranty, installation, and after-sales support tailored to individuals, SMEs, and institutions.",
  },
  {
    icon: <Wrench className="w-10 h-10 text-blue-600" />,
    title: "Repairs & Maintenance",
    description:
      "Hardware troubleshooting, OS reinstallation, virus removal, and preventive maintenance. Our experts ensure minimal downtime and maximum productivity.",
  },
  {
    icon: <Network className="w-10 h-10 text-blue-600" />,
    title: "LAN & Networking",
    description:
      "Design and deployment of LAN, WAN, and Wi-Fi networks. Includes structured cabling, router/switch configuration, VPN setup, and network security audits.",
  },
  {
    icon: <Headphones className="w-10 h-10 text-blue-600" />,
    title: "ICT Consultancy",
    description:
      "Strategic guidance on ICT infrastructure, digital transformation, system integration, and IT policies. We align technology with your business goals.",
  },
  {
    icon: <Cloud className="w-10 h-10 text-blue-600" />,
    title: "Cloud Solutions",
    description:
      "Migration to cloud platforms such as Microsoft 365 and Google Workspace. Cloud storage, SaaS integration, and scalable virtual environments for businesses.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
    title: "Cybersecurity",
    description:
      "Comprehensive security audits, firewall configuration, endpoint protection, penetration testing, and staff awareness training to safeguard your IT assets.",
  },
  {
    icon: <Code className="w-10 h-10 text-blue-600" />,
    title: "Software Development",
    description:
      "Custom business applications, website development, and software integration to streamline operations and improve customer engagement.",
  },
  {
    icon: <Database className="w-10 h-10 text-blue-600" />,
    title: "Data Backup & Recovery",
    description:
      "Automated backup solutions, disaster recovery planning, and secure offsite data storage to ensure your information is always safe and retrievable.",
  },
  {
    icon: <Server className="w-10 h-10 text-blue-600" />,
    title: "Server Installation & Management",
    description:
      "Deployment and management of physical and virtual servers. We configure, monitor, and maintain servers for high availability and scalability.",
  },
  {
    icon: <BookOpen className="w-10 h-10 text-blue-600" />,
    title: "IT Training & Support",
    description:
      "User training sessions, IT workshops, and dedicated support to empower teams with the skills to use technology effectively and securely.",
  },
];

function Services() {
  return (
    <section id="services" className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Services
        </h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          Maclyne Technologies provides end-to-end ICT solutions — from supplying
          quality hardware to delivering advanced IT consultancy, cloud migration,
          and cybersecurity. We are your one-stop partner for reliable and
          innovative technology services.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
