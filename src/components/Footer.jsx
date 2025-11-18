// src/components/Footer.jsx
import React from "react";
import { Phone, Mail, MapPin, Facebook, MessageCircle, Globe, ArrowUp } from "lucide-react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="relative bg-gray-900 text-gray-300 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>

      {/* Top Gradient Border */}
      <div className="h-1 bg-gradient-to-r from-primary-500 via-blue-500 to-cyan-500"></div>

      <div className="relative max-w-7xl mx-auto py-16 px-6 md:px-20">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/logo.PNG"
                alt="Maclyne Technologies Logo"
                className="h-12 w-12 object-contain"
              />
              <h3 className="text-2xl font-bold text-white">Maclyne Technologies</h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Providing comprehensive ICT solutions including computer sales, repairs, 
              maintenance, consultancy, and LAN setups across Kenya.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/maclynetechnologies"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/254711642342"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://www.maclynetech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "#about", label: "About Us" },
                { href: "#services", label: "Services" },
                { href: "#stats", label: "Statistics" },
                { href: "#partners", label: "Partners" },
                { href: "#contact", label: "Contact" }
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Computer Sales",
                "Repairs & Maintenance", 
                "LAN & Networking",
                "ICT Consultancy",
                "Cloud Solutions",
                "Cybersecurity"
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group cursor-pointer">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <a
                    href="tel:+254711642342"
                    className="text-gray-400 hover:text-white transition-colors duration-300 block font-semibold"
                  >
                    +254 711 642 342
                  </a>
                  <span className="text-sm text-gray-500">Call us anytime</span>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <a
                    href="mailto:info@maclynetech.com"
                    className="text-gray-400 hover:text-white transition-colors duration-300 block font-semibold"
                  >
                    info@maclynetech.com
                  </a>
                  <span className="text-sm text-gray-500">Email us</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-gray-400 block font-semibold">Nairobi, Kenya</span>
                  <span className="text-sm text-gray-500">Service nationwide</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm">
            © {currentYear} Maclyne Technologies. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</a>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 flex items-center gap-2"
          >
            <ArrowUp className="w-5 h-5" />
            <span className="text-sm font-semibold">Back to Top</span>
          </button>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/254711642342"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 z-50"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </footer>
  );
}

export default Footer;
