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

  // Auto-updating copyright year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900 text-gray-300">
      {/* Top Border */}
      <div className="h-0.5 bg-gradient-to-r from-primary-500 to-blue-500"></div>

      <div className="max-w-7xl mx-auto py-8 px-6 md:px-20">
        <div className="grid md:grid-cols-4 gap-6 text-sm">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src="/logo.PNG" alt="Logo" className="h-8 w-8 object-contain" />
              <h3 className="text-lg font-bold text-white">Maclyne Tech</h3>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              ICT solutions: computer sales, repairs, networking, and consultancy across Kenya.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://facebook.com/maclynetechnologies" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://wa.me/254711642342" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="https://www.maclynetech.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              {["hero", "about", "services", "contact"].map((item) => (
                <li key={item}>
                  <button onClick={() => scrollToSection(item)} className="text-gray-400 hover:text-white capitalize">
                    {item === "hero" ? "Home" : item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-3">Services</h4>
            <ul className="space-y-2 text-xs">
              {["Computer Sales", "Repairs & Maintenance", "Networking", "Consultancy"].map((service) => (
                <li key={service}>
                  <button onClick={() => scrollToSection("services")} className="text-gray-400 hover:text-white">
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <div className="space-y-2 text-xs">
              <a href="tel:+254711642342" className="flex items-center gap-2 text-gray-400 hover:text-white">
                <Phone className="w-3 h-3" /> +254 711 642 342
              </a>
              <a href="mailto:info@maclynetech.com" className="flex items-center gap-2 text-gray-400 hover:text-white">
                <Mail className="w-3 h-3" /> info@maclynetech.com
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-3 h-3" /> Nairobi, Kenya
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Auto-Updating Year */}
        <div className="border-t border-gray-800 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <span>© {currentYear} Maclyne Technologies. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
          <button onClick={scrollToTop} className="bg-primary-600 hover:bg-primary-700 text-white px-3 py-1 rounded-lg text-xs flex items-center gap-1">
            <ArrowUp className="w-3 h-3" /> Top
          </button>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a href="https://wa.me/254711642342" target="_blank" rel="noopener noreferrer" className="fixed bottom-4 right-4 w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg z-50">
        <MessageCircle className="w-5 h-5 text-white" />
      </a>
    </footer>
  );
}

export default Footer;
