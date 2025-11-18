// src/components/Contact.jsx
import React, { useState } from "react";
import { Phone, Globe, Facebook, MessageCircle, Send, Smartphone, Mail, User, Building, MapPin } from "lucide-react";

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
      <section 
        id="contact" 
        className="relative py-20 px-6 md:px-20 min-h-screen"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark overlay for better readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Additional gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-blue-900/30"></div>

        <div className="relative max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Contact Us
          </h2>
          <div className="bg-green-50/95 backdrop-blur-sm border border-green-200 rounded-2xl p-8 text-center shadow-2xl">
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
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
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
    <section 
      id="contact" 
      className="relative py-20 px-6 md:px-20 min-h-screen"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Additional gradient overlay for visual appeal */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-blue-900/30"></div>

      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary-200/10 rounded-full blur-3xl opacity-50 -translate-x-36 -translate-y-36"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl opacity-50 translate-x-48 translate-y-48"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 text-white font-semibold text-sm uppercase tracking-wider mb-4">
            <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-400">Our Team</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your IT infrastructure? Get in touch with us for a free consultation 
            and let's discuss how we can help your business thrive with our comprehensive ICT solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                {/* Phone */}
                <a
                  href="tel:+254711642342"
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-all duration-300 group hover:scale-105"
                >
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Call us</p>
                    <p className="text-lg font-semibold text-gray-900">+254 711 642 342</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/254711642342"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-green-50 hover:bg-green-100 transition-all duration-300 group hover:scale-105"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">WhatsApp</p>
                    <p className="text-lg font-semibold text-gray-900">+254 711 642 342</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@maclynetech.com"
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-purple-50 hover:bg-purple-100 transition-all duration-300 group hover:scale-105"
                >
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="text-lg font-semibold text-gray-900">info@maclynetech.com</p>
                  </div>
                </a>

                {/* Website */}
                <a
                  href="https://www.maclynetech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-orange-50 hover:bg-orange-100 transition-all duration-300 group hover:scale-105"
                >
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Website</p>
                    <p className="text-lg font-semibold text-gray-900">www.maclynetech.com</p>
                  </div>
                </a>

                {/* Social Media */}
                <div className="flex gap-4 pt-4">
                  <a
                    href="https://facebook.com/maclynetechnologies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 transform hover:scale-105"
                  >
                    <Facebook className="w-5 h-5" />
                    <span className="font-semibold">Facebook</span>
                  </a>
                  <a
                    href="https://www.tiktok.com/@maclynetechnologies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-gray-800 hover:bg-gray-900 text-white transition-all duration-300 transform hover:scale-105"
                  >
                    <Smartphone className="w-5 h-5" />
                    <span className="font-semibold">TikTok</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Contact Info */}
            <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-3xl p-8 text-white shadow-2xl">
              <h4 className="text-xl font-bold mb-4">Get Quick Quote via WhatsApp</h4>
              <p className="text-primary-100 mb-6">
                For immediate pricing and quick responses, contact us directly on WhatsApp. 
                We're available 24/7 to assist you with any inquiries.
              </p>
              <button
                onClick={openWhatsApp}
                className="w-full bg-white hover:bg-gray-100 text-primary-600 py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp Now</span>
              </button>
            </div>
          </div>

          {/* Request for Quotation Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Request a Quotation</h3>
              <p className="text-gray-600">
                Fill out this form and we'll send a customized quote to <strong>macrusdavid@gmail.com</strong>
              </p>
            </div>
            
            <form 
              onSubmit={handleSubmit}
              action="https://formspree.io/f/xovkvbrn"
              method="POST"
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                    Company/Organization
                  </label>
                  <div className="relative">
                    <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      id="company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="Your company name"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
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
                  <MessageCircle className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                    placeholder="Please describe your project requirements, timeline, and any specific needs..."
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Budget Range (Optional)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {['Under $1,000', '$1,000 - $5,000', '$5,000 - $10,000', 'Over $10,000'].map((range) => (
                    <label key={range} className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg border border-gray-300 hover:border-primary-500 transition-all duration-300 bg-white/50 backdrop-blur-sm">
                      <input
                        type="radio"
                        name="budget"
                        value={range}
                        checked={formData.budget === range}
                        onChange={handleChange}
                        className="text-primary-600 focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-700 font-medium">{range}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-500/25 flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Request Quotation</span>
                  </>
                )}
              </button>

              <div className="text-center pt-4">
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
