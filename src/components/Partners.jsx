// src/components/Partners.jsx
import React from "react";
import { Star } from "lucide-react";

function Partners() {
const partners = [
  {
    name: "Microsoft",
    logo: "https://img.icons8.com/color/480/microsoft.png",
    description: "Global Technology Partner"
  },
  {
    name: "Apple",
    logo: "https://img.icons8.com/color/480/mac-logo.png",
    description: "Authorized Reseller"
  },
  {
    name: "HP",
    logo: "https://img.icons8.com/color/480/hp.png",
    description: "Premium Partner"
  },
  {
    name: "Dell",
    logo: "https://img.icons8.com/color/480/dell.png",
    description: "Technology Alliance"
  },
  {
    name: "Cisco",
    logo: "https://cdn.worldvectorlogo.com/logos/cisco-2.svg",
    description: "Networking Partner"
  },
  {
    name: "Intel",
    logo: "https://cdn.worldvectorlogo.com/logos/intel-6.svg",
    description: "Technology Partner"
  }
];

  return (
    <section id="partners" className="relative py-20 px-6 md:px-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50"></div>
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-30 translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40 -translate-x-36 translate-y-36"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm uppercase tracking-wider mb-4">
            <Star className="w-4 h-4 fill-current" />
            Our Partners
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">Leading Brands</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We collaborate with world-class technology providers to deliver exceptional solutions and genuine products to our clients.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative w-full max-w-40 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Partner Card */}
              <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all duration-500 group-hover:shadow-2xl group-hover:scale-110 group-hover:border-primary-200">
                {/* Logo Container */}
                <div className="relative aspect-square flex items-center justify-center p-4">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} Logo`}
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Partner Info (shown on hover) */}
                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100">
                  <h3 className="font-bold text-gray-900 text-center mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-gray-600 text-center">
                    {partner.description}
                  </p>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full mt-2"></div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"></div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg border border-gray-200">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Certified Partners
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              Genuine Products
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              Warranty Included
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-3xl p-8 text-white shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Partner With The Best
            </h3>
            <p className="text-primary-100 text-lg mb-6">
              Get access to genuine products and enterprise-grade solutions through our trusted partnerships.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-white/25"
            >
              Become a Partner
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;
