import React from 'react';
import { motion } from 'framer-motion';
import { Car, MapPin, Calendar, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Car,
      title: 'Rent a Car',
      description: 'Professional drivers, well-maintained fleet, competitive pricing, and 24/7 support for comfortable city rides and outstation trips.',
      features: ['Professional Drivers', 'Well-maintained Fleet', 'Competitive Pricing', '24/7 Support'],
      link: '/taxi-rental',
      image: '/rent.jpg'
    },
    {
      icon: MapPin,
      title: 'Tour Booking',
      description: 'Customized itineraries, expert guides, comfortable accommodation, and all-inclusive packages for pilgrimage sites and cultural destinations.',
      features: ['Customized Itineraries', 'Expert Guides', 'Comfortable Accommodation', 'All-inclusive Packages'],
      link: '/tour-packages',
      image: '/tourbooking.jpg'
    },
    {
      icon: Calendar,
      title: 'Event Transportation',
      description: 'Event planning, group transportation, luxury vehicles, and timely service for weddings, corporate events, and special occasions.',
      features: ['Event Planning', 'Group Transportation', 'Luxury Vehicles', 'Timely Service'],
      link: '/contact',
      image: '/event.jpg'
    },
    {
      icon: Users,
      title: 'Group Travel',
      description: 'Large capacity vehicles, group discounts, coordinated logistics, and safety-first approach for family trips and group excursions.',
      features: ['Large Capacity Vehicles', 'Group Discounts', 'Coordinated Logistics', 'Safety First'],
      link: '/contact',
      image: '/grouptrip.jpg'
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 md:top-20 left-10 md:left-20 w-16 h-16 md:w-32 md:h-32 border border-yellow-400 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 md:bottom-20 right-10 md:right-20 w-12 h-12 md:w-24 md:h-24 border border-blue-400 rounded-full"
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
            animate={{ backgroundPosition: ['0%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{
              background: 'linear-gradient(90deg, #ffffff, #fbbf24, #ffffff)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Our <span className="text-yellow-400">Services</span>
          </motion.h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive travel solutions designed to make your journey comfortable, safe, and memorable
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
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
              <div className="relative h-40 md:h-48 overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700"
                  whileHover={{ scale: 1.1, rotate: 1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                <motion.div 
                  className="absolute top-3 md:top-4 left-3 md:left-4 bg-gradient-to-r from-yellow-400 to-yellow-500 p-2 md:p-3 rounded-full shadow-lg"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="w-4 h-4 md:w-6 md:h-6 text-gray-900" />
                </motion.div>
                
                {/* Floating particles effect */}
                <motion.div
                  className="absolute top-2 right-2 w-1.5 h-1.5 md:w-2 md:h-2 bg-yellow-400 rounded-full"
                  animate={{ 
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                />
              </div>
              
              <div className="p-4 md:p-6">
                <motion.h3 
                  className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3"
                  whileHover={{ color: "#fbbf24" }}
                >
                  {service.title}
                </motion.h3>
                <p className="text-gray-300 mb-3 md:mb-4 text-xs md:text-sm leading-relaxed">{service.description}</p>
                
                <ul className="space-y-1 md:space-y-2">
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      className="text-xs md:text-sm text-gray-400 flex items-center"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ x: 5, color: "#fbbf24" }}
                    >
                      <motion.div 
                        className="w-1 h-1 md:w-1.5 md:h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full mr-2"
                        animate={{ 
                          scale: [1, 1.3, 1],
                          boxShadow: ["0 0 0 0 rgba(251, 191, 36, 0.7)", "0 0 0 10px rgba(251, 191, 36, 0)", "0 0 0 0 rgba(251, 191, 36, 0)"]
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;