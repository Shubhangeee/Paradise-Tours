import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const reviews = [
    {
      name: 'Rajesh Kumar',
      location: 'Varanasi, UP',
      rating: 5,
      comment: 'Excellent service! The driver was very professional and the car was clean and comfortable. Highly recommend Paradise Tours for anyone visiting Varanasi.',
      date: '2 weeks ago'
    },
    {
      name: 'Priya Sharma',
      location: 'Delhi',
      rating: 5,
      comment: 'Amazing tour package to Ayodhya. Everything was well organized and the guide was very knowledgeable. Will definitely book again for our next trip.',
      date: '1 month ago'
    },
    {
      name: 'Amit Singh',
      location: 'Mumbai',
      rating: 4,
      comment: 'Great experience with Paradise Tours. The Innova was spacious and perfect for our family trip. Driver was punctual and helpful throughout the journey.',
      date: '3 weeks ago'
    },
    {
      name: 'Sunita Devi',
      location: 'Varanasi, UP',
      rating: 5,
      comment: 'Very reliable service. Used their taxi for airport pickup and they were right on time. Clean vehicle and reasonable pricing. Recommended!',
      date: '1 week ago'
    },
    {
      name: 'Vikash Gupta',
      location: 'Lucknow, UP',
      rating: 5,
      comment: 'Booked tempo traveller for our group pilgrimage. Excellent service, comfortable journey, and the driver was very cooperative. Thank you Paradise Tours!',
      date: '2 months ago'
    },
    {
      name: 'Meera Joshi',
      location: 'Pune',
      rating: 4,
      comment: 'Good service overall. The car was in good condition and the driver was polite. Booking process was smooth through WhatsApp. Will use again.',
      date: '3 weeks ago'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, reviews.length]);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const goToReview = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-12 md:py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            What Our <span className="text-yellow-400">Customers Say</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Read genuine reviews from our satisfied customers who have experienced our premium services
          </p>
        </motion.div>

        {/* Reviews Slideshow */}
        <div className="relative max-w-4xl mx-auto">
          <div 
            className="overflow-hidden rounded-2xl"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 md:w-6 md:h-6 ${
                          i < reviews[currentIndex].rating ? 'text-yellow-400 fill-current' : 'text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 md:w-10 md:h-10 text-yellow-400" />
                </div>
                
                <p className="text-gray-300 mb-6 md:mb-8 leading-relaxed text-base md:text-lg">
                  "{reviews[currentIndex].comment}"
                </p>
                
                <div className="border-t border-gray-700 pt-4 md:pt-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-white font-semibold text-lg md:text-xl">{reviews[currentIndex].name}</h4>
                      <p className="text-gray-400 text-sm md:text-base">{reviews[currentIndex].location}</p>
                    </div>
                    <span className="text-gray-500 text-sm md:text-base">{reviews[currentIndex].date}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevReview}
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-gray-900/80 hover:bg-gray-800 text-white p-2 md:p-3 rounded-full transition-all duration-200 backdrop-blur-sm border border-gray-600 hover:border-yellow-400"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          
          <button
            onClick={nextReview}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-gray-900/80 hover:bg-gray-800 text-white p-2 md:p-3 rounded-full transition-all duration-200 backdrop-blur-sm border border-gray-600 hover:border-yellow-400"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 md:mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToReview(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-yellow-400 scale-125' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Share Review CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8 md:mt-12"
        >
          <div className="bg-gray-900 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto shadow-2xl">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Share Your Experience</h3>
            <p className="text-gray-300 mb-6 text-sm md:text-base">
              We'd love to hear about your journey with Paradise Tours. Your feedback helps us serve you better.
            </p>
            <motion.a
              href="https://wa.me/919935512599"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 text-gray-900 px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200 text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Share Your Review
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;