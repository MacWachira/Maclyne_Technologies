// src/components/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-gray-300 py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Maclyne Technologies</h3>
          <p>
            Providing ICT solutions including computer sales, repairs,
            maintenance, consultancy, and LAN setups across Kenya.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
            <li><a href="#services" className="hover:text-blue-400">Services</a></li>
            <li><a href="#partners" className="hover:text-blue-400">Partners</a></li>
            <li><a href="#footer" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
          <p>Email: info@maclynetech.com</p>
          <p>Phone: +254 711 642 342</p>
          <p>Nairobi, Kenya</p>
        </div>
      </div>

      <div className="text-center text-gray-400 mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Maclyne Technologies. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
