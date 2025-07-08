import React from 'react';
import { motion } from 'framer-motion';
import { Car, MapPin, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent"></div>
      </div>

      <div className="relative container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white order-2 lg:order-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight"
            >
              Premium
              <span className="text-yellow-400 block">Travel Services</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed"
            >
              Explore Uttar Pradesh and beyond with premium cab services and unforgettable tour packages. Experience comfort, safety, and reliability with Paradise Tours.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-12"
            >
              <Link
                to="/taxi-rental"
                className="bg-yellow-400 text-gray-900 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 text-center text-sm md:text-base"
              >
                Book a Taxi
              </Link>
              <a
                href="https://wa.me/919935512599"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-yellow-400 text-yellow-400 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 text-center text-sm md:text-base"
              >
                WhatsApp Us
              </a>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            >
              {[
                { icon: Car, text: '24/7 Service' },
                { icon: Shield, text: 'Safe & Secure' },
                { icon: MapPin, text: 'All Destinations' },
                { icon: Clock, text: 'On Time' }
              ].map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex flex-col items-center text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-yellow-400 mb-2" />
                  <span className="text-xs md:text-sm text-gray-300">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Spiritual Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <img
                  src="/hp.jpg"
                  alt="Spiritual Journey with Paradise Tours"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-2 md:-top-4 -right-2 md:-right-4 w-12 h-12 md:w-20 md:h-20 bg-yellow-400 rounded-full opacity-20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-2 md:-bottom-4 -left-2 md:-left-4 w-10 h-10 md:w-16 md:h-16 bg-blue-400 rounded-full opacity-20"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 text-white hidden md:block"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;