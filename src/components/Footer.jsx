import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  const phoneNumber = '9726559892';
  const whatsappNumber = '9726559892';
  const address = 'Shop no.11, Asthaa Homes, New Vasna, Vishala, Ahmedabad';
  const defaultMessage = encodeURIComponent("Hello AquaWash Laundry, I'd like to inquire about your services.");

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img
              src={logo}
              alt="AquaWash Laundry"
              className="h-20 w-auto object-contain mb-4 brightness-0 invert"
            />
            <h3 className="text-2xl font-bold text-white mb-4">AquaWash Laundry</h3>
            <p className="text-gray-400 mb-4">
              Fresh. Clean. Reliable Laundry Service
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-2">
              <p className="flex items-start gap-2">
                <i className="fas fa-map-marker-alt text-aqua-400 mt-1"></i>
                <span>{address}</span>
              </p>
              <a
                href={`tel:+91${phoneNumber}`}
                className="flex items-center gap-2 hover:text-aqua-400 transition-colors"
              >
                <i className="fas fa-phone text-aqua-400"></i>
                <span>+91 {phoneNumber}</span>
              </a>
              <a
                href={`https://wa.me/91${whatsappNumber}?text=${defaultMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-400 transition-colors"
              >
                <i className="fab fa-whatsapp text-green-400"></i>
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-aqua-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-aqua-400 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-aqua-400 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#map" className="hover:text-aqua-400 transition-colors">
                  Location
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} AquaWash Laundry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

