import React from 'react';
import { Car, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <Car className="w-8 h-8 text-yellow-400" />
              <div>
                <h1 className="text-2xl font-bold text-yellow-400">Paradise Tours</h1>
                <p className="text-xs text-gray-300">Premium Travel Services</p>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted travel partner in Varanasi. We provide premium taxi services and unforgettable tour packages across Uttar Pradesh and beyond.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Clock className="w-4 h-4" />
              <span>Available 24/7</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Taxi Rental', path: '/taxi-rental' },
                { name: 'Tour Packages', path: '/tour-packages' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Airport Transfers</li>
              <li>Local City Tours</li>
              <li>Outstation Trips</li>
              <li>Pilgrimage Tours</li>
              <li>Wedding Transportation</li>
              <li>Corporate Travel</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-yellow-400 mt-1" />
                <div>
                  <p className="text-gray-300">+91-9935512599</p>
                  <p className="text-sm text-gray-400">24/7 Support</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-yellow-400 mt-1" />
                <div>
                  <p className="text-gray-300">infoparadise0510@gmail.com</p>
                  <p className="text-sm text-gray-400">Quick Response</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-1" />
                <div>
                  <p className="text-gray-300">
                    Plot no. 175 Janki Bagh Colony,<br />
                    Lanka, Varanasi, UP 221005
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Paradise Tours. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Owner: Mr. Satish Chandra Ojha</span>
              <span>Experience: 20+ Years</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;