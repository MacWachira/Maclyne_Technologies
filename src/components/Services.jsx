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

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="services" className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Services
        </h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          Maclyne Technologies provides end-to-end ICT solutions — from
          supplying quality hardware to delivering advanced IT consultancy,
          cloud migration, and cybersecurity. We are your one-stop partner for
          reliable and innovative technology services.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition cursor-pointer"
            onClick={() => toggleExpand(index)}
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {service.description}
            </p>

            {/* Expanded section */}
            {expandedIndex === index && (
              <div className="mt-4 text-left">
                <p className="text-gray-700 text-sm mb-3">{service.moreInfo}</p>

              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;

