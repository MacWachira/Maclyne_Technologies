// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { X, Send, User, Mail, Phone, Building, MessageCircle, Menu } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openQuoteModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSubmitError('');
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
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

  const navItems = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#partners", label: "Partners" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-3 md:py-4'
      }`}>
        <div className="w-full px-4 md:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo + Company Name */}
          <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
            <img
              src="/logo.PNG"
              alt="Maclyne Technologies Logo"
              className="h-8 md:h-10 lg:h-12 w-8 md:w-10 lg:w-12 object-contain transition-transform duration-300 hover:scale-110"
            />
            <h1 className={`text-sm md:text-lg lg:text-2xl font-bold transition-colors duration-300 leading-tight ${
              scrolled ? 'text-primary-600' : 'text-white'
            }`}>
              <span className="hidden xs:inline">Maclyne Technologies</span>
              <span className="xs:hidden">Maclyne Tech</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-4 xl:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`font-semibold transition-all duration-300 hover:text-primary-500 relative group text-sm xl:text-base whitespace-nowrap ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <button
            onClick={openQuoteModal}
            className="hidden lg:block bg-primary-600 hover:bg-primary-700 text-white px-4 xl:px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-500/25 cursor-pointer text-sm xl:text-base whitespace-nowrap"
          >
            Get Quote
          </button>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className={`${scrolled ? 'bg-white' : 'bg-white/95 backdrop-blur-md'} shadow-lg py-4 px-4 space-y-2 border-t border-gray-100`}>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-gray-700 font-semibold hover:text-primary-600 transition-colors duration-300 py-3 px-2 rounded-lg hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                openQuoteModal();
              }}
              className="w-full bg-primary-600 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-primary-700 cursor-pointer mt-2"
            >
              Get Quote
            </button>
          </div>
        </div>
      </header>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto" style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)', backdropFilter: 'blur(8px)' }}>
          <div className="min-h-screen px-4 py-8 flex items-center justify-center">
            <div className="relative max-w-2xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden mx-4">
              <div className="bg-gradient-to-r from-primary-600 to-blue-600 px-6 md:px-8 py-5 md:py-6 flex justify-between items-center">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">Request a Quotation</h3>
                  <p className="text-primary-100 text-xs md:text-sm mt-1">Fill in your details below</p>
                </div>
                <button
                  onClick={closeModal}
                  className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                >
                  <X className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>

              <div className="px-6 md:px-8 py-6 max-h-[70vh] overflow-y-auto">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h4>
                    <p className="text-green-700 mb-4">
                      Your quotation request has been submitted successfully.
                    </p>
                    <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form 
                    onSubmit={handleSubmit}
                    action="https://formspree.io/f/xovkvbrn"
                    method="POST"
                    className="space-y-4 md:space-y-5"
                  >
                    {submitError && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                        {submitError}
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-4 md:gap-5">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Full Name *</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Company</label>
                        <div className="relative">
                          <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Your company"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 md:gap-5">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Email *</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Phone *</label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="+254 XXX XXX XXX"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">Service</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white"
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
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">Message *</label>
                      <div className="relative">
                        <MessageCircle className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                        <textarea
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                          placeholder="Please describe your project requirements..."
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
                          <span>Submit Quotation</span>
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

export default Header;
