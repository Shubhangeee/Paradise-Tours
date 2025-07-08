import React from 'react';
import { motion } from 'framer-motion';
import { Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const VehicleFleet = () => {
  const vehicles = [
    {
      name: 'Swift Dzire',
      type: 'Sedan',
      capacity: '4+1',
      image: '/swift.jpg',
      features: ['AC', 'Music System', 'GPS'],
      pricePerKm: '₹12',
      rating: 4.8
    },
    {
      name: 'Honda Amaze',
      type: 'Sedan',
      capacity: '4+1',
      image: '/amaze.jpg',
      features: ['AC', 'Comfortable Seats', 'Safety Features'],
      pricePerKm: '₹13',
      rating: 4.7
    },
    {
      name: 'Maruti Ertiga',
      type: 'MUV',
      capacity: '6+1',
      image: '/ertiga.jpg',
      features: ['Spacious', 'AC', 'Luggage Space'],
      pricePerKm: '₹15',
      rating: 4.9
    },
    {
      name: 'Innova Crysta',
      type: 'Premium MUV',
      capacity: '7+1',
      image: '/innova.jpg',
      features: ['Premium Comfort', 'AC', 'Entertainment System'],
      pricePerKm: '₹18',
      rating: 4.9
    },
    {
      name: 'Tempo Traveller',
      type: 'Mini Bus',
      capacity: '12+1',
      image: '/tempo.jpg',
      features: ['Group Travel', 'AC', 'Reclining Seats'],
      pricePerKm: '₹25',
      rating: 4.6
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(251, 191, 36, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(251, 191, 36, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
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
              textShadow: [
                "0 0 20px rgba(251, 191, 36, 0.5)",
                "0 0 30px rgba(251, 191, 36, 0.8)",
                "0 0 20px rgba(251, 191, 36, 0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Our <span className="text-yellow-400">Fleet</span>
          </motion.h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Choose from our diverse range of well-maintained vehicles for every travel need
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02, 
                rotateY: 4,
                boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.5)"
              }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden transition-all duration-500 group shadow-2xl border border-gray-700 hover:border-yellow-400/50"
            >
              <div className="relative h-48 md:h-56 overflow-hidden">
                <motion.img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover transition-transform duration-700"
                  whileHover={{ scale: 1.1, rotate: 1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                
                {/* Glowing price tag */}
                <motion.div 
                  className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold shadow-lg"
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
                  {vehicle.pricePerKm}/km
                </motion.div>
                
                {/* Floating rating */}
                <motion.div 
                  className="absolute bottom-4 left-4 flex items-center text-white bg-black/50 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full"
                  whileHover={{ scale: 1.1 }}
                >
                  <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 mr-1" />
                  <span className="text-xs md:text-sm font-semibold">{vehicle.rating}</span>
                </motion.div>

                {/* Animated corner accent */}
                <motion.div
                  className="absolute top-0 left-0 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-yellow-400/20 to-transparent"
                  animate={{ rotate: [0, 90, 180, 270, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
              </div>
              
              <div className="p-4 md:p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <motion.h3 
                      className="text-lg md:text-xl font-bold text-white"
                      whileHover={{ color: "#fbbf24" }}
                    >
                      {vehicle.name}
                    </motion.h3>
                    <p className="text-yellow-400 text-sm font-medium">{vehicle.type}</p>
                  </div>
                  <motion.div 
                    className="flex items-center text-gray-300 bg-gray-800 px-2 py-1 rounded-full"
                    whileHover={{ scale: 1.1, backgroundColor: "#374151" }}
                  >
                    <Users className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    <span className="text-xs md:text-sm">{vehicle.capacity}</span>
                  </motion.div>
                </div>
                
                <div className="flex flex-wrap gap-1 md:gap-2 mb-4">
                  {vehicle.features.map((feature, idx) => (
                    <motion.span
                      key={idx}
                      className="bg-gradient-to-r from-gray-800 to-gray-700 text-gray-300 px-2 md:px-3 py-1 rounded-full text-xs border border-gray-600"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "#fbbf24",
                        color: "#1f2937"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/taxi-rental"
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 py-2 md:py-3 rounded-lg font-semibold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 text-center block shadow-lg hover:shadow-yellow-400/25 text-sm md:text-base"
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

export default VehicleFleet;