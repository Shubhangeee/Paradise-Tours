import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, User, MessageSquare, Calendar, Timer } from 'lucide-react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

interface ContactForm {
  name: string;
  phone: string;
  email: string;
  service: string;
  destination: string;
  date: string;
  time: string;
  message: string;
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    try {
      // Here you would typically send the data to your backend
      // For now, we'll simulate the API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Send WhatsApp message
      const message = `New Booking Request:
Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}
Service: ${data.service}
Destination: ${data.destination}
Date: ${data.date}
Time: ${data.time}
Message: ${data.message}`;
      
      const whatsappUrl = `https://wa.me/919935512599?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      
      toast.success('Booking request sent successfully! We will contact you soon.');
      reset();
    } catch (error) {
      toast.error('Failed to send booking request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 md:top-20 left-10 md:left-20 w-32 h-32 md:w-64 md:h-64 border border-yellow-400 rounded-full"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1.1, 1, 1.1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 md:bottom-20 right-10 md:right-20 w-24 h-24 md:w-48 md:h-48 border border-blue-400 rounded-full"
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
              textShadow: [
                "0 0 30px rgba(251, 191, 36, 0.5)",
                "0 0 40px rgba(251, 191, 36, 0.8)",
                "0 0 30px rgba(251, 191, 36, 0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Book From <span className="text-yellow-400">Us</span>
          </motion.h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your journey? Contact us for bookings, inquiries, or custom travel solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-700">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Contact Information</h3>
              
              <div className="space-y-4 md:space-y-6">
                <motion.div 
                  className="flex items-start space-x-3 md:space-x-4"
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-2 md:p-3 rounded-full shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-gray-900" />
                  </motion.div>
                  <div>
                    <h4 className="text-white font-semibold mb-1 text-sm md:text-base">Phone</h4>
                    <p className="text-gray-300 text-sm md:text-base">+91-9935512599</p>
                    <p className="text-xs md:text-sm text-gray-400">Available 24/7</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start space-x-3 md:space-x-4"
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-2 md:p-3 rounded-full shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-gray-900" />
                  </motion.div>
                  <div>
                    <h4 className="text-white font-semibold mb-1 text-sm md:text-base">Email</h4>
                    <p className="text-gray-300 text-sm md:text-base">infoparadise0510@gmail.com</p>
                    <p className="text-xs md:text-sm text-gray-400">We reply within 2 hours</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start space-x-3 md:space-x-4"
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-2 md:p-3 rounded-full shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-gray-900" />
                  </motion.div>
                  <div>
                    <h4 className="text-white font-semibold mb-1 text-sm md:text-base">Address</h4>
                    <p className="text-gray-300 text-sm md:text-base">
                      Plot no. 175 Janki Bagh Colony,<br />
                      Lanka, Varanasi, Uttar Pradesh, 221005
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start space-x-3 md:space-x-4"
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-2 md:p-3 rounded-full shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <User className="w-5 h-5 md:w-6 md:h-6 text-gray-900" />
                  </motion.div>
                  <div>
                    <h4 className="text-white font-semibold mb-1 text-sm md:text-base">Owner</h4>
                    <p className="text-gray-300 text-sm md:text-base">Mr. Satish Chandra Ojha</p>
                    <p className="text-xs md:text-sm text-gray-400">20+ years experience</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-700">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Quick Actions</h3>
              
              <div className="space-y-4">
                <motion.a
                  href="https://wa.me/919935512599"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-4 md:px-6 rounded-lg hover:from-green-500 hover:to-green-600 transition-all duration-300 shadow-lg text-sm md:text-base"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(34, 197, 94, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageSquare className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Chat on WhatsApp</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-700"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div whileHover={{ scale: 1.02 }}>
                  <label className="block text-white font-medium mb-2 text-sm md:text-base">Name *</label>
                  <input
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full bg-gray-700 text-white px-3 md:px-4 py-2 md:py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200 border border-gray-600 hover:border-gray-500 text-sm md:text-base"
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs md:text-sm mt-1">{errors.name.message}</p>
                  )}
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }}>
                  <label className="block text-white font-medium mb-2 text-sm md:text-base">Phone *</label>
                  <input
                    type="tel"
                    {...register('phone', { required: 'Phone is required' })}
                    className="w-full bg-gray-700 text-white px-3 md:px-4 py-2 md:py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200 border border-gray-600 hover:border-gray-500 text-sm md:text-base"
                    placeholder="Your phone number"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-xs md:text-sm mt-1">{errors.phone.message}</p>
                  )}
                </motion.div>
              </div>

              <motion.div whileHover={{ scale: 1.02 }}>
                <label className="block text-white font-medium mb-2 text-sm md:text-base">Email</label>
                <input
                  type="email"
                  {...register('email')}
                  className="w-full bg-gray-700 text-white px-3 md:px-4 py-2 md:py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200 border border-gray-600 hover:border-gray-500 text-sm md:text-base"
                  placeholder="Your email address"
                />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div whileHover={{ scale: 1.02 }}>
                  <label className="block text-white font-medium mb-2 text-sm md:text-base">Service Type *</label>
                  <select
                    {...register('service', { required: 'Service type is required' })}
                    className="w-full bg-gray-700 text-white px-3 md:px-4 py-2 md:py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200 border border-gray-600 hover:border-gray-500 text-sm md:text-base"
                  >
                    <option value="">Select service</option>
                    <option value="taxi">Taxi Rental</option>
                    <option value="tour">Tour Package</option>
                    <option value="airport">Airport Transfer</option>
                    <option value="outstation">Outstation Trip</option>
                  </select>
                  {errors.service && (
                    <p className="text-red-400 text-xs md:text-sm mt-1">{errors.service.message}</p>
                  )}
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }}>
                  <label className="block text-white font-medium mb-2 text-sm md:text-base">Destination</label>
                  <input
                    type="text"
                    {...register('destination')}
                    className="w-full bg-gray-700 text-white px-3 md:px-4 py-2 md:py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200 border border-gray-600 hover:border-gray-500 text-sm md:text-base"
                    placeholder="Where do you want to go?"
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div whileHover={{ scale: 1.02 }}>
                  <label className="block text-white font-medium mb-2 flex items-center text-sm md:text-base">
                    <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    {...register('date')}
                    className="w-full bg-gray-700 text-white px-3 md:px-4 py-2 md:py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200 border border-gray-600 hover:border-gray-500 text-sm md:text-base"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }}>
                  <label className="block text-white font-medium mb-2 flex items-center text-sm md:text-base">
                    <Timer className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    {...register('time')}
                    className="w-full bg-gray-700 text-white px-3 md:px-4 py-2 md:py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200 border border-gray-600 hover:border-gray-500 text-sm md:text-base"
                  />
                </motion.div>
              </div>

              <motion.div whileHover={{ scale: 1.02 }}>
                <label className="block text-white font-medium mb-2 text-sm md:text-base">Message</label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className="w-full bg-gray-700 text-white px-3 md:px-4 py-2 md:py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200 border border-gray-600 hover:border-gray-500 text-sm md:text-base"
                  placeholder="Tell us about your travel requirements..."
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 py-2 md:py-3 rounded-lg font-semibold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-yellow-400/25 text-sm md:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Sending...' : 'Book Now'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;