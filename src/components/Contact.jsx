// src/components/Contact.jsx
import React, { useState } from "react";
import { Phone, Globe, Facebook, MessageCircle, Send, Smartphone, Mail, User, Building } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    budget: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to Formspree using form action
      const form = e.target;
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Show WhatsApp alert
        setTimeout(() => {
          const whatsappMessage = `Hello! I've submitted a quotation request for ${formData.service}. Name: ${formData.name}, Phone: ${formData.phone}`;
          const whatsappUrl = `https://wa.me/254711642342?text=${encodeURIComponent(whatsappMessage)}`;
          window.open(whatsappUrl, '_blank');
        }, 1000);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: '',
          budget: ''
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    const message = "Hello! I'm interested in your services and would like to request a quotation.";
    const url = `https://wa.me/254711642342?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="bg-gray-50 py-20 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
            Contact Us
          </h2>
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
            <p className="text-green-700 mb-4">
              Your quotation request has been submitted successfully to macrusdavid@gmail.com.
            </p>
            <p className="text-green-600 mb-6">
              We've opened WhatsApp for you to send immediate follow-up. We'll get back to you within 24 hours.
            </p>
            <button
              onClick={openWhatsApp}
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              Open WhatsApp Again
            </button>
          </div>
        </div>
      </section>
    );
  }

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
                className="flex items-center space-x-3 text-blue-700 hover:text-blue-900 transition-colors"
              >
                <Globe className="w-5 h-5" /> 
                <span>www.maclynetech.com</span>
              </a>

              <a
                href="https://facebook.com/maclynetechnologies"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-blue-700 hover:text-blue-900 transition-colors"
              >
                <Facebook className="w-5 h-5" /> 
                <span>maclynetechnologies</span>
              </a>

              <a
                href="tel:+254711642342"
                className="flex items-center space-x-3 text-blue-700 hover:text-blue-900 transition-colors"
              >
                <Phone className="w-5 h-5" /> 
                <span>+254 711 642 342</span>
              </a>

              <a
                href="https://wa.me/254711642342"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-green-600 hover:text-green-800 transition-colors"
              >
                <MessageCircle className="w-5 h-5" /> 
                <span>WhatsApp: +254 711 642 342</span>
              </a>

              <a
                href="https://www.tiktok.com/@maclynetechnologies"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-blue-700 hover:text-blue-900 transition-colors"
              >
                <Smartphone className="w-5 h-5" /> 
                <span>maclynetechnologies</span>
              </a>

              <a 
                href="mailto:macrusdavid@gmail.com"
                className="flex items-center space-x-3 text-blue-700 hover:text-blue-900 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>macrusdavid@gmail.com</span>
              </a>
                
              <a
                href="mailto:info@maclynetech.com"
                className="flex items-center space-x-3 text-blue-700 hover:text-blue-900 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>info@maclynetech.com</span>
              </a>
            </div>

            {/* Quick Contact Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Get Quick Quote via WhatsApp</h4>
              <p className="text-blue-700 text-sm mb-3">
                For immediate pricing and quick responses, contact us directly on WhatsApp.
              </p>
              <button
                onClick={openWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Request for Quotation Form */}
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Request a Quotation</h3>
            <p className="text-gray-600 mb-6">
              Fill out this form and we'll send a customized quote to <strong>macrusdavid@gmail.com</strong>
            </p>
            
            <form 
              onSubmit={handleSubmit}
              action="https://formspree.io/f/xovkvbrn"
              method="POST"
              className="space-y-4"
            >
              <div className="grid md:grid-cols-2 gap-4">
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
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

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
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
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
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

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
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="+254 XXX XXX XXX"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                  Service Interested In *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                    placeholder="Please describe your project requirements, timeline, and any specific needs..."
                  />
                </div>
              </div>

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
                        checked={formData.budget === range}
                        onChange={handleChange}
                        className="text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{range}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Request Quotation</span>
                  </>
                )}
              </button>

              <div className="text-center pt-2">
                <p className="text-gray-500 text-sm">
                  Form submits to <strong>macrusdavid@gmail.com</strong> and opens WhatsApp for immediate follow-up
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
