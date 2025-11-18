// src/components/Footer.jsx
import React from "react";
import { Phone, Mail, MapPin, Facebook, MessageCircle, Globe, ArrowUp } from "lucide-react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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

      <div className="relative max-w-7xl mx-auto py-8 px-6 md:px-20">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 text-sm">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo.PNG"
                alt="Maclyne Technologies Logo"
                className="h-8 w-8 object-contain"
              />
              <h3 className="text-lg font-bold text-white">Maclyne Technologies</h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4 text-xs">
              Providing comprehensive ICT solutions including computer sales, repairs, 
              maintenance, consultancy, and LAN setups across Kenya.
            </p>
            <div className="flex gap-2">
              <a
                href="https://facebook.com/maclynetechnologies"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/254711642342"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://www.maclynetech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: "hero", label: "Home" },
                { href: "about", label: "About Us" },
                { href: "services", label: "Services" },
                { href: "stats", label: "Statistics" },
                { href: "partners", label: "Partners" },
                { href: "contact", label: "Contact" }
              ].map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-1 group text-xs"
                  >
                    <div className="w-1 h-1 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-semibold text-white mb-3">Our Services</h4>
            <ul className="space-y-2">
              {[
                "Computer Sales",
                "Repairs & Maintenance", 
                "LAN & Networking",
                "ICT Consultancy",
                "Cloud Solutions",
                "Cybersecurity"
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-1 group cursor-pointer text-xs">
                    <div className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-semibold text-white mb-3">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 group">
                <div className="w-6 h-6 bg-primary-600 rounded flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-3 h-3 text-white" />
                </div>
                <div>
                  <a
                    href="tel:+254711642342"
                    className="text-gray-400 hover:text-white transition-colors duration-300 block font-semibold text-xs"
                  >
                    +254 711 642 342
                  </a>
                  <span className="text-xs text-gray-500">Call us anytime</span>
                </div>
              </div>

              <div className="flex items-center gap-2 group">
                <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-3 h-3 text-white" />
                </div>
                <div>
                  <a
                    href="mailto:info@maclynetech.com"
                    className="text-gray-400 hover:text-white transition-colors duration-300 block font-semibold text-xs"
                  >
                    info@maclynetech.com
                  </a>
                  <span className="text-xs text-gray-500">Email us</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center">
                  <MapPin className="w-3 h-3 text-white" />
                </div>
                <div>
                  <span className="text-gray-400 block font-semibold text-xs">Nairobi, Kenya</span>
                  <span className="text-xs text-gray-500">Service nationwide</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="text-gray-500 text-xs">
            © {currentYear} Maclyne Technologies. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</a>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-lg transition-all duration-300 transform hover:scale-110 flex items-center gap-1 text-xs"
          >
            <ArrowUp className="w-3 h-3" />
            <span>Top</span>
          </button>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/254711642342"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 z-50"
      >
        <MessageCircle className="w-5 h-5" />
      </a>
    </footer>
  );
}

export default Footer;
