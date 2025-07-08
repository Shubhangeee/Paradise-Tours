import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const TourPackages = () => {
  const packages = [
    {
      name: 'Varanasi Spiritual Tour',
      duration: '2 Days / 1 Night',
      price: '₹8,999',
      image: '/vnscrop.jpg',
      destinations: ['Kashi Vishwanath', 'Dashashwamedh Ghat', 'Sarnath'],
      includes: ['Accommodation', 'Meals', 'Guide', 'Transportation'],
      rating: 4.9
    },
    {
      name: 'Ayodhya Pilgrimage',
      duration: '3 Days / 2 Nights',
      price: '₹12,999',
      image: '/ayodhya.jpg',
      destinations: ['Ram Janmabhoomi', 'Hanuman Garhi', 'Kanak Bhawan'],
      includes: ['Accommodation', 'Meals', 'Guide', 'Transportation'],
      rating: 4.8
    },
    {
      name: 'Mathura Vrindavan',
      duration: '2 Days / 1 Night',
      price: '₹9,999',
      image: '/vrindavancrop.jpg',
      destinations: ['Krishna Janmabhoomi', 'Banke Bihari', 'ISKCON Temple'],
      includes: ['Accommodation', 'Meals', 'Guide', 'Transportation'],
      rating: 4.7
    },
    {
      name: 'Nepal Tour',
      duration: '5 Days / 4 Nights',
      price: '₹24,999',
      image: '/nepal.jpg',
      destinations: ['Kathmandu', 'Pokhara', 'Lumbini'],
      includes: ['Accommodation', 'Meals', 'Guide', 'Transportation'],
      rating: 4.9
    },
    {
      name: 'Madhya Pradesh Heritage',
      duration: '4 Days / 3 Nights',
      price: '₹18,999',
      image: '/mp.jpg',
      destinations: ['Khajuraho', 'Orchha', 'Gwalior'],
      includes: ['Accommodation', 'Meals', 'Guide', 'Transportation'],
      rating: 4.6
    },
    {
      name: 'Gujarat Cultural Tour',
      duration: '6 Days / 5 Nights',
      price: '₹28,999',
      image: '/gujcrop.jpg',
      destinations: ['Dwarka', 'Somnath', 'Rann of Kutch'],
      includes: ['Accommodation', 'Meals', 'Guide', 'Transportation'],
      rating: 4.8
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-5 md:top-10 left-5 md:left-10 w-20 h-20 md:w-40 md:h-40 border-2 border-yellow-400 rounded-full"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1.2, 1, 1.2]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-5 md:bottom-10 right-5 md:right-10 w-16 h-16 md:w-32 md:h-32 border-2 border-blue-400 rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6"
            animate={{
              backgroundPosition: ['0%', '100%'],
              textShadow: [
                "0 0 30px rgba(251, 191, 36, 0.5)",
                "0 0 40px rgba(251, 191, 36, 0.8)",
                "0 0 30px rgba(251, 191, 36, 0.5)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Tour <span className="text-yellow-400">Packages</span>
          </motion.h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Discover incredible destinations with our carefully crafted tour packages
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02, 
                rotateY: 3,
                boxShadow: "0 25px 50px -12px rgba(251, 191, 36, 0.25)"
              }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden transition-all duration-500 group shadow-2xl border border-gray-700 hover:border-yellow-400/50"
            >
              <div className="relative h-48 md:h-56 overflow-hidden">
                <motion.img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover transition-transform duration-700"
                  whileHover={{ scale: 1.1, rotate: 1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                
                {/* Glowing price tag */}
                <motion.div 
                  className="absolute top-3 md:top-4 right-3 md:right-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold shadow-lg"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      "0 0 20px rgba(251, 191, 36, 0.5)",
                      "0 0 30px rgba(251, 191, 36, 0.8)",
                      "0 0 20px rgba(251, 191, 36, 0.5)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {pkg.price}
                </motion.div>
                
                {/* Floating rating */}
                <motion.div 
                  className="absolute bottom-3 md:bottom-4 left-3 md:left-4 flex items-center text-white bg-black/50 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full"
                  whileHover={{ scale: 1.1 }}
                >
                  <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 mr-1" />
                  <span className="text-xs md:text-sm font-semibold">{pkg.rating}</span>
                </motion.div>

                {/* Animated corner elements */}
                <motion.div
                  className="absolute top-0 right-0 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-bl from-yellow-400/30 to-transparent"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
              </div>
              
              <div className="p-4 md:p-6">
                <div className="flex justify-between items-start mb-2 md:mb-3">
                  <motion.h3 
                    className="text-lg md:text-xl font-bold text-white"
                    whileHover={{ color: "#fbbf24" }}
                  >
                    {pkg.name}
                  </motion.h3>
                  <motion.div 
                    className="flex items-center text-gray-300 bg-gray-800 px-2 py-1 rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    <span className="text-xs md:text-sm">{pkg.duration}</span>
                  </motion.div>
                </div>
                
                <div className="mb-3 md:mb-4">
                  <h4 className="text-yellow-400 text-xs md:text-sm font-semibold mb-1 md:mb-2">Destinations:</h4>
                  <div className="flex flex-wrap gap-1">
                    {pkg.destinations.map((dest, idx) => (
                      <motion.span
                        key={idx}
                        className="bg-gradient-to-r from-gray-700 to-gray-600 text-gray-300 px-2 py-1 rounded text-xs border border-gray-600"
                        whileHover={{ 
                          scale: 1.05,
                          backgroundColor: "#fbbf24",
                          color: "#1f2937"
                        }}
                      >
                        {dest}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-3 md:mb-4">
                  <h4 className="text-yellow-400 text-xs md:text-sm font-semibold mb-1 md:mb-2">Includes:</h4>
                  <div className="flex flex-wrap gap-1">
                    {pkg.includes.map((item, idx) => (
                      <motion.span
                        key={idx}
                        className="bg-gradient-to-r from-gray-700 to-gray-600 text-gray-300 px-2 py-1 rounded text-xs border border-gray-600"
                        whileHover={{ 
                          scale: 1.05,
                          backgroundColor: "#fbbf24",
                          color: "#1f2937"
                        }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/taxi-rental"
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 py-2 md:py-3 rounded-lg font-semibold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 text-center block shadow-lg hover:shadow-yellow-400/25 text-xs md:text-sm"
                  >
                    Book Now
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourPackages;