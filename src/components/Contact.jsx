// src/components/Contact.jsx
import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Phone, Globe, Facebook, MessageCircle, Send, Smartphone, Mail, User, Building } from "lucide-react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xjkprbzn");
  const [showAlert, setShowAlert] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
    
    // Show WhatsApp alert
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  const openWhatsApp = () => {
    const message = "Hello! I've just submitted a quotation request on your website. Please contact me with more details.";
    const phoneNumber = "+254711642342";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  if (state.succeeded) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700 mb-6">
          Your quotation request has been submitted successfully. We'll get back to you within 24 hours.
        </p>
        <button
          onClick={openWhatsApp}
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
        >
          <MessageCircle className="w-5 h-5" />
          Contact us on WhatsApp
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {showAlert && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MessageCircle className="w-5 h-5 text-blue-600" />
            <div>
              <p className="font-semibold text-blue-800">Follow up on WhatsApp</p>
              <p className="text-blue-600 text-sm">Get instant response at +254711642342</p>
            </div>
          </div>
          <button
            onClick={openWhatsApp}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
          >
            Open WhatsApp
          </button>
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Request a Quotation</h3>
          <p className="text-gray-600">
            Fill out the form below and we'll get back to you with a customized quote for your IT needs.
          </p>
        </div>

        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Full Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Company */}
            <div className="space-y-2">
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                Company/Organization
              </label>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  id="company"
                  type="text"
                  name="company"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="Your company name"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="john@company.com"
                />
              </div>
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  required
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="+254 XXX XXX XXX"
                />
              </div>
            </div>
          </div>

          {/* Service Interest */}
          <div className="space-y-2">
            <label htmlFor="service" className="block text-sm font-medium text-gray-700">
              Service Interested In *
            </label>
            <select
              id="service"
              name="service"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
            >
              <option value="">Select a service</option>
              <option value="computer-sales">Computer Sales</option>
              <option value="repairs-maintenance">Repairs & Maintenance</option>
              <option value="networking">LAN & Networking</option>
              <option value="consultancy">ICT Consultancy</option>
              <option value="cloud-solutions">Cloud Solutions</option>
              <option value="cybersecurity">Cybersecurity</option>
              <option value="web-development">Website Development</option>
              <option value="software-development">Custom Software Development</option>
              <option value="data-backup">Data Backup & Recovery</option>
              <option value="server-management">Server Installation & Management</option>
              <option value="it-training">IT Training & Support</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Project Details */}
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Project Details / Requirements *
            </label>
            <div className="relative">
              <MessageCircle className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-none"
                placeholder="Please describe your project requirements, timeline, budget range, and any specific needs..."
              />
            </div>
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Budget Range */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Budget Range (Optional)
            </label>
            <div className="grid grid-cols-2 gap-2">
              {['Under $1,000', '$1,000 - $5,000', '$5,000 - $10,000', 'Over $10,000'].map((range) => (
                <label key={range} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="budget"
                    value={range}
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">{range}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
          >
            {state.submitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Request Quotation
              </>
            )}
          </button>

          {/* WhatsApp Prompt */}
          <div className="text-center pt-3 border-t border-gray-200">
            <p className="text-gray-600 text-sm">
              For immediate assistance,{' '}
              <button
                type="button"
                onClick={openWhatsApp}
                className="text-blue-600 hover:text-blue-700 font-medium underline transition-colors duration-200"
              >
                contact us on WhatsApp
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Contact Us
        </h2>

        {/* Contact Info */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="space-y-4">
              <a
                href="https://www.maclynetech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-blue-700 hover:text-blue-900 transition-colors duration-200"
              >
                <Globe className="w-5 h-5" /> 
                <span>www.maclynetech.com</span>
              </a>

              <a
                href="https://facebook.com/maclynetechnologies"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-blue-700 hover:text-blue-900 transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" /> 
                <span>maclynetechnologies</span>
              </a>

              <a
                href="tel:+254711642342"
                className="flex items-center space-x-3 text-blue-700 hover:text-blue-900 transition-colors duration-200"
              >
                <Phone className="w-5 h-5" /> 
                <span>+254 711 642 342</span>
              </a>

              <a
                href="https://wa.me/254711642342"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-green-600 hover:text-green-800 transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5" /> 
                <span>WhatsApp: +254 711 642 342</span>
              </a>

              <a
                href="https://www.tiktok.com/@maclynetechnologies"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-blue-700 hover:text-blue-900 transition-colors duration-200"
              >
                <Smartphone className="w-5 h-5" /> 
                <span>maclynetechnologies</span>
              </a>

              <a 
                href="mailto:maclynetech@gmail.com"
                className="flex items-center space-x-3 text-blue-700 hover:text-blue-900 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                <span>maclynetech@gmail.com</span>
              </a>
                
              <a
                href="mailto:info@maclynetech.com"
                className="flex items-center space-x-3 text-blue-700 hover:text-blue-900 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                <span>info@maclynetech.com</span>
              </a>
            </div>

            {/* Additional Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Why Choose Us?</h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Fast response within 24 hours</li>
                <li>• Customized solutions for your needs</li>
                <li>• Competitive pricing</li>
                <li>• Professional IT consultancy</li>
                <li>• After-sales support</li>
              </ul>
            </div>
          </div>

          {/* Request for Quotation Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
