// src/components/Contact.jsx
import React from "react";
import { Phone, Globe, Facebook, MessageCircle, Send, Smartphone } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Contact Us
        </h2>

        {/* Contact Info */}
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div className="space-y-4">
            <a
              href="https://www.maclynetech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-blue-700 hover:text-blue-900"
            >
              <Globe /> <span>www.maclynetech.com</span>
            </a>

            <a
              href="https://facebook.com/maclynetechnologies"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-blue-700 hover:text-blue-900"
            >
              <Facebook /> <span>maclynetechnologies</span>
            </a>

            <a
              href="tel:+254711642342"
              className="flex items-center space-x-3 text-blue-700 hover:text-blue-900"
            >
              <Phone /> <span>+254 711 642 342</span>
            </a>

            <a
              href="https://wa.me/254711642342"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-green-600 hover:text-green-800"
            >
              <MessageCircle /> <span>WhatsApp: +254 711 642 342</span>
            </a>

            <a
              href="https://www.tiktok.com/@maclynetechnologies"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-blue-700 hover:text-blue-900"
            >
              <Smartphone /> <span>maclynetechnologies</span>
            </a>

            <a 
              href="mailto:maclynetech@gmail.com"
              className="flex items-center space-x-3 text-blue-700 hover:text-blue-900"
            >
              <span>📧 maclynetech@gmail.com</span>
            </a>
              
            <a
              href="mailto:info@maclynetech.com"
              className="flex items-center space-x-3 text-blue-700 hover:text-blue-900"
            >
              <span>📧 info@maclynetech.com</span>
            </a>
            
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4">Send us a message</h3>
            <form
              action="https://formspree.io/f/xovkvbrn" // replace with your Formspree form ID
              method="POST"
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              ></textarea>
              <button
                type="submit"
                className="flex items-center justify-center space-x-2 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
