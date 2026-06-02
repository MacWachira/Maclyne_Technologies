// src/components/Services.jsx
import React, { useState } from "react";
import {
  Laptop,
  Wrench,
  Network,
  Headphones,
  Cloud,
  ShieldCheck,
  Code,
  Database,
  Server,
  BookOpen,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  X,
  Send,
  User,
  Mail,
  Phone,
  Building,
  MessageCircle,
} from "lucide-react";

const services = [
  {
    icon: <Laptop className="w-8 h-8" />,
    title: "Computer Sales",
    description: "Wide range of branded desktops, laptops, and accessories. We provide genuine products with warranty, installation, and after-sales support tailored to individuals, SMEs, and institutions.",
    moreInfo: "We partner with leading global brands to deliver affordable and high-performance machines. Get personalized recommendations based on your needs.",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50"
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Repairs & Maintenance",
    description: "Hardware troubleshooting, OS reinstallation, virus removal, and preventive maintenance. Our experts ensure minimal downtime and maximum productivity.",
    moreInfo: "We offer both on-site and remote support, ensuring your systems are always up-to-date and functioning optimally.",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50"
  },
  {
    icon: <Network className="w-8 h-8" />,
    title: "LAN & Networking",
    description: "Design and deployment of LAN, WAN, and Wi-Fi networks. Includes structured cabling, router/switch configuration, VPN setup, and network security audits.",
    moreInfo: "We provide complete solutions for offices, schools, and businesses that require stable and secure networking infrastructure.",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50"
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "ICT Consultancy",
    description: "Strategic guidance on ICT infrastructure, digital transformation, system integration, and IT policies. We align technology with your business goals.",
    moreInfo: "Our consultancy ensures you invest in the right technology to drive productivity and cost-efficiency.",
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50"
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Solutions",
    description: "Migration to cloud platforms such as Microsoft 365 and Google Workspace. Cloud storage, SaaS integration, and scalable virtual environments for businesses.",
    moreInfo: "We help you scale seamlessly by moving workloads to secure and cost-effective cloud platforms.",
    gradient: "from-indigo-500 to-blue-500",
    bgGradient: "from-indigo-50 to-blue-50"
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Cybersecurity",
    description: "Comprehensive security audits, firewall configuration, endpoint protection, penetration testing, and staff awareness training to safeguard your IT assets.",
    moreInfo: "Protect your business from threats with enterprise-grade security frameworks tailored to your industry.",
    gradient: "from-red-500 to-orange-500",
    bgGradient: "from-red-50 to-orange-50"
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Website Development",
    description: "Modern, responsive, and SEO-friendly websites. From corporate sites to e-commerce platforms, we build digital experiences that drive growth.",
    moreInfo: "We utilize the latest technologies to create fast, secure, and user-friendly websites that represent your brand and convert visitors into customers.",
    gradient: "from-blue-500 to-purple-500",
    bgGradient: "from-blue-50 to-purple-50"
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "Custom Software Development",
    description: "Bespoke business applications and software integration to streamline your unique operations and improve internal workflows.",
    moreInfo: "Our dev team builds scalable apps tailored to your processes, from internal management tools to complex ERP systems.",
    gradient: "from-green-500 to-blue-500",
    bgGradient: "from-green-50 to-blue-50"
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Data Backup & Recovery",
    description: "Automated backup solutions, disaster recovery planning, and secure offsite data storage to ensure your information is always safe and retrievable.",
    moreInfo: "We provide continuous data protection so you never lose critical information, even in emergencies.",
    gradient: "from-purple-500 to-indigo-500",
    bgGradient: "from-purple-50 to-indigo-50"
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "Server Installation & Management",
    description: "Deployment and management of physical and virtual servers. We configure, monitor, and maintain servers for high availability and scalability.",
    moreInfo: "Our server management solutions include monitoring, updates, and disaster recovery planning.",
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50"
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "IT Training & Support",
    description: "User training sessions, IT workshops, and dedicated support to empower teams with the skills to use technology effectively and securely.",
    moreInfo: "We offer personalized training packages, from beginner computer literacy to advanced IT certifications.",
    gradient: "from-indigo-500 to-purple-500",
    bgGradient: "from-indigo-50 to-purple-50"
  },
];

function Services() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
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

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const openQuoteModal = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setFormData(prev => ({ ...prev, service: serviceTitle }));
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService("");
    setSubmitError('');
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
        
        const whatsappMessage = `QUOTATION REQUEST - ${formData.service}%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0ACompany: ${formData.company || 'Not specified'}%0AMessage: ${formData.message.substring(0, 150)}...`;
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
          setIsSubmitted(false);
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

  return (
    <>
      <section 
        id="services" 
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
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive ICT Solutions
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Maclyne Technologies provides end-to-end ICT solutions — from
              supplying quality hardware to delivering advanced IT consultancy,
              cloud migration, and cybersecurity. We are your one-stop partner for
              reliable and innovative technology services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative group transition-all duration-500 ${
                  expandedIndex === index ? 'transform scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 h-full border-2 border-white/20 transition-all duration-500 overflow-hidden ${
                  expandedIndex === index 
                    ? `border-${service.gradient.split('-')[1]}-500/50 shadow-2xl` 
                    : 'shadow-xl hover:shadow-2xl'
                } ${
                  hoveredIndex === index ? 'transform -translate-y-2' : ''
                }`}>
                  
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className={`relative mb-6 p-4 rounded-2xl bg-gradient-to-r ${service.gradient} w-16 h-16 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 cursor-pointer`}
                       onClick={() => toggleExpand(index)}>
                    {service.icon}
                  </div>

                  <div className="relative">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className={`overflow-hidden transition-all duration-500 ${
                      expandedIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="border-t border-gray-200 pt-6">
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          {service.moreInfo}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-4 mt-6 pt-6 border-t border-gray-200">
                      <button
                        onClick={() => openQuoteModal(service.title)}
                        className={`flex-1 inline-flex items-center justify-center gap-2 text-sm font-semibold py-2.5 px-4 rounded-xl bg-gradient-to-r ${service.gradient} text-white transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg`}
                      >
                        Request Quote
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      
                      <button
                        onClick={() => toggleExpand(index)}
                        className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors duration-300"
                      >
                        <span>{expandedIndex === index ? 'Show less' : 'Learn more'}</span>
                        <div className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300 group-hover:bg-gradient-to-r ${service.gradient} group-hover:text-white ${
                          expandedIndex === index ? `bg-gradient-to-r ${service.gradient} text-white` : ''
                        }`}>
                          {expandedIndex === index ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </div>
                      </button>
                    </div>
                  </div>

                  <div className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r ${service.gradient} bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}>
                    <div className="absolute inset-[2px] rounded-3xl bg-white/95 backdrop-blur-sm"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 animate-fade-in">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 text-gray-900 shadow-2xl border border-white/20">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Transform Your IT Infrastructure?
              </h3>
              <p className="text-gray-700 text-lg mb-6 max-w-2xl mx-auto">
                Let's discuss how our comprehensive ICT solutions can drive your business forward.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-500/25"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Full Screen Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto" style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)', backdropFilter: 'blur(8px)' }}>
          <div className="min-h-screen px-4 py-8 flex items-center justify-center">
            <div className="relative max-w-2xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden animate-slide-up">
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-primary-600 to-blue-600 px-8 py-6 flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white">Request a Quotation</h3>
                  <p className="text-primary-100 text-sm mt-1">For: {selectedService}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Body - Form */}
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
                        Service Interested In *
                      </label>
                      <input
                        id="modal_service"
                        type="text"
                        name="service"
                        required
                        value={formData.service}
                        readOnly
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-700 font-medium"
                      />
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

export default Services;
