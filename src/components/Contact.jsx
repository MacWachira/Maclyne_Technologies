// src/components/Contact.jsx
import React, { useState } from "react";
import { Phone, Globe, Facebook, MessageCircle, Send, Smartphone, Mail, User, Building, FileText, Clock, CheckCircle, Award, ThumbsUp, HelpCircle, X, ArrowRight } from "lucide-react";

function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const openQuoteModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSubmitError('');
    setIsSubmitted(false);
    document.body.style.overflow = 'unset';
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
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
        
        const whatsappMessage = `QUOTATION REQUEST%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0ACompany: ${formData.company || 'Not specified'}%0AService: ${formData.service || 'Not specified'}%0AMessage: ${formData.message.substring(0, 150)}...`;
        const whatsappUrl = `https://wa.me/254711642342?text=${whatsappMessage}`;
        window.open(whatsappUrl, '_blank');
        
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
        
        setTimeout(() => {
          closeModal();
        }, 3000);
      } else {
        const errorData = await response.json();
        setSubmitError(errorData.error || 'Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    const message = "Hello! I'm interested in your services and would like to request a quotation.";
    const url = `https://wa.me/254711642342?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
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
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-blue-900/30"></div>

        <div className="absolute top-0 left-0 w-72 h-72 bg-primary-200/10 rounded-full blur-3xl opacity-50 -translate-x-36 -translate-y-36"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl opacity-50 translate-x-48 translate-y-48"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center gap-2 text-white font-semibold text-sm uppercase tracking-wider mb-4">
              <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
              Get In Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Our Team
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Ready to transform your IT infrastructure? Get in touch with us for a free consultation 
              and let's discuss how we can help your business thrive with our comprehensive ICT solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* LEFT COLUMN - Contact Information */}
            <div className="space-y-8">
              {/* Section 1: Direct Contact */}
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Phone className="w-6 h-6 text-primary-600" />
                  Direct Contact
                </h3>
                
                <div className="space-y-4">
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
                </div>
              </div>

              {/* Section 2: WhatsApp Quick Quote */}
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 text-white shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">Quick Quote via WhatsApp</h3>
                </div>
                <p className="text-green-100 mb-6 leading-relaxed">
                  For immediate pricing and quick responses, contact us directly on WhatsApp. 
                  We're available 24/7 to assist you with any inquiries.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4" />
                    <span>Response within minutes</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4" />
                    <span>Share documents & images instantly</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4" />
                    <span>Free consultation</span>
                  </div>
                </div>
                <button
                  onClick={openWhatsApp}
                  className="w-full bg-white hover:bg-gray-100 text-green-700 py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp Now</span>
                </button>
              </div>

              {/* Section 3: Social Media */}
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Smartphone className="w-6 h-6 text-primary-600" />
                  Connect With Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://facebook.com/maclynetechnologies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 transform hover:scale-105"
                  >
                    <Facebook className="w-5 h-5" />
                    <span className="font-semibold">Facebook</span>
                  </a>
                  <a
                    href="https://www.tiktok.com/@maclynetechnologies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-4 rounded-xl bg-gray-800 hover:bg-gray-900 text-white transition-all duration-300 transform hover:scale-105"
                  >
                    <Smartphone className="w-5 h-5" />
                    <span className="font-semibold">TikTok</span>
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - Request for Quotation (Button Style) */}
            <div className="space-y-8">
              {/* Main Quote Card */}
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
                <div className="bg-gradient-to-r from-primary-600 to-blue-600 px-8 py-6">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    <FileText className="w-6 h-6" />
                    Request a Quotation
                  </h3>
                  <p className="text-primary-100 mt-1">
                    Get a customized quote for your ICT needs
                  </p>
                </div>
                
                <div className="p-8">
                  {/* Benefits Section */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="text-center p-4 bg-blue-50 rounded-2xl">
                      <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-gray-800">Quick Response</p>
                      <p className="text-xs text-gray-500">Within 24 hours</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-2xl">
                      <Award className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-gray-800">Free Quote</p>
                      <p className="text-xs text-gray-500">No obligation</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-2xl">
                      <ThumbsUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-gray-800">Custom Solutions</p>
                      <p className="text-xs text-gray-500">Tailored to you</p>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-2xl">
                      <HelpCircle className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-gray-800">Expert Advice</p>
                      <p className="text-xs text-gray-500">Professional guidance</p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="bg-gray-50 rounded-2xl p-5 mb-8">
                    <p className="text-gray-700 leading-relaxed text-center">
                      Tell us about your project requirements, and we'll prepare a 
                      <strong className="text-primary-600"> personalized quotation</strong> based on your specific needs. 
                      Our team will review your request and get back to you within 24 hours.
                    </p>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={openQuoteModal}
                    className="w-full bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 text-white font-semibold py-5 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-500/25 flex items-center justify-center gap-3 text-lg"
                  >
                    <Send className="w-5 h-5" />
                    <span>Request Quotation Now</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <p className="text-center text-gray-500 text-xs mt-4">
                    Form opens in overlay • No spam • Secure
                  </p>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg border border-white/20">
                <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>24/7 Support</span>
                  </div>
                  <div className="w-px h-4 bg-gray-300"></div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Certified Experts</span>
                  </div>
                  <div className="w-px h-4 bg-gray-300"></div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Best Price Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal - Separate from main content */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto" style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)', backdropFilter: 'blur(8px)' }}>
          <div className="min-h-screen px-4 py-8 flex items-center justify-center">
            <div className="relative max-w-2xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-primary-600 to-blue-600 px-8 py-6 flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white">Request a Quotation</h3>
                  <p className="text-primary-100 text-sm mt-1">Fill in your details below</p>
                </div>
                <button
                  onClick={closeModal}
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="px-8 py-6 max-h-[70vh] overflow-y-auto">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h4>
                    <p className="text-green-700 mb-4">
                      Your quotation request has been submitted successfully.
                    </p>
                    <p className="text-gray-600">
                      We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form 
                    onSubmit={handleSubmit}
                    action="https://formspree.io/f/xovkvbrn"
                    method="POST"
                    className="space-y-5"
                  >
                    {submitError && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                        {submitError}
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label htmlFor="modal_name" className="block text-sm font-medium text-gray-700">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            id="modal_name"
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="modal_company" className="block text-sm font-medium text-gray-700">
                          Company/Organization
                        </label>
                        <div className="relative">
                          <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            id="modal_company"
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                            placeholder="Your company name"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label htmlFor="modal_email" className="block text-sm font-medium text-gray-700">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            id="modal_email"
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="modal_phone" className="block text-sm font-medium text-gray-700">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            id="modal_phone"
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                            placeholder="+254 XXX XXX XXX"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="modal_service" className="block text-sm font-medium text-gray-700">
                        Service Interested In
                      </label>
                      <select
                        id="modal_service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 bg-white"
                      >
                        <option value="">Select a service (optional)</option>
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
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="modal_message" className="block text-sm font-medium text-gray-700">
                        Project Details / Requirements *
                      </label>
                      <div className="relative">
                        <MessageCircle className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                        <textarea
                          id="modal_message"
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 resize-none"
                          placeholder="Please describe your project requirements, timeline, and any specific needs..."
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Submit Quotation Request</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Contact;
