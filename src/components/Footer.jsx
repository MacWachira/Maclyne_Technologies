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

<div id="profile-content" style="display: none;">
  <h1>Company Profile: Maclyne Technologies</h1>
  <p><strong>Your One-Stop Partner for Reliable and Innovative Technology Services.</strong></p>
  <hr>
  <h2>About Us</h2>
  <p>Maclyne Technologies provides end-to-end ICT solutions—from supplying quality hardware to delivering advanced IT consultancy, cloud migration, and cybersecurity. We align technology with your business goals to drive productivity, growth, and cost-efficiency.</p>
  <hr>
  <h2>Our Core Services</h2>

  <h3>Hardware & Support</h3>
  <ul>
    <li><strong>Computer Sales:</strong> A wide range of branded desktops, laptops, and accessories with warranty, installation, and after-sales support.</li>
    <li><strong>Repairs & Maintenance:</strong> Expert hardware troubleshooting, OS reinstallation, virus removal, and preventive maintenance to ensure minimal downtime.</li>
    <li><strong>Server Installation & Management:</strong> Deployment and management of physical and virtual servers for high availability and scalability.</li>
  </ul>

  <h3>Infrastructure & Networking</h3>
  <ul>
    <li><strong>LAN & Networking:</strong> Design and deployment of secure and stable LAN, WAN, and Wi-Fi networks, including structured cabling and VPN setup.</li>
    <li><strong>Cloud Solutions:</strong> Seamless migration to cloud platforms like Microsoft 365 and Google Workspace, including cloud storage and SaaS integration.</li>
    <li><strong>Data Backup & Recovery:</strong> Automated backup solutions and disaster recovery planning to ensure your critical information is always safe and retrievable.</li>
  </ul>

  <h3>Development & Security</h3>
  <ul>
    <li><strong>Website Development:</strong> Modern, responsive, and SEO-friendly websites, from corporate sites to e-commerce platforms, that drive growth.</li>
    <li><strong>Custom Software Development:</strong> Bespoke business applications and software integration to streamline your unique operations and workflows.</li>
    <li><strong>Cybersecurity:</strong> Comprehensive security audits, firewall configuration, endpoint protection, and penetration testing to safeguard your IT assets.</li>
  </ul>

  <h3>Consultancy & Training</h3>
  <ul>
    <li><strong>ICT Consultancy:</strong> Strategic guidance on ICT infrastructure, digital transformation, and system integration to align technology with your business objectives.</li>
    <li><strong>IT Training & Support:</strong> Personalized user training sessions and IT workshops to empower your team with essential technology skills.</li>
  </ul>
  <hr>
  <h2>Contact Us</h2>
  <p><strong>WhatsApp:</strong> +254 711 642 342</p>
  <p><strong>Email:</strong> [Your Email Address]</p>
  <p><strong>Website:</strong> [Your Website URL]</p>
</div>

<button id="download-button" style="background-color: #007bff; color: white; padding: 10px 20px; border-radius: 5px; border: none; cursor: pointer;">
  Download Company Profile (PDF)
</button>

<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
<script>
  // Find the button by its ID
  document.getElementById('download-button').addEventListener('click', function () {
    // Find the hidden content element by its ID
    const element = document.getElementById('profile-content');
    
    // Set options for the PDF generation
    const opt = {
      margin:       1,
      filename:     'Maclyne-Technologies-Company-Profile.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    
    // Use html2pdf to generate the PDF from the element and save it
    html2pdf().from(element).set(opt).save();
  });
</script>
