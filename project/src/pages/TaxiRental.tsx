import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Car, Users, Star, MapPin, Calendar, Clock, Phone } from 'lucide-react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

interface BookingForm {
  name: string;
  phone: string;
  email: string;
  pickupLocation: string;
  destination: string;
  pickupDate: string;
  pickupTime: string;
  vehicleType: string;
  passengers: number;
  tripType: 'local' | 'outstation';
  specialRequests: string;
}

const TaxiRental = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<BookingForm>();

  const tripType = watch('tripType');
  const passengers = watch('passengers');

  const vehicles = [
    {
      id: 'swift-dzire',
      name: 'Swift Dzire',
      type: 'Sedan',
      capacity: 4,
      image: '/swift.jpg',
      features: ['AC', 'Music System', 'GPS', 'Comfortable Seats'],
      localRate: '₹12/km',
      outstationRate: '₹10/km',
      rating: 4.8,
      description: 'Perfect for city rides and short trips'
    },
    {
      id: 'honda-amaze',
      name: 'Honda Amaze',
      type: 'Sedan',
      capacity: 4,
      image: '/amaze.jpg',
      features: ['AC', 'Safety Features', 'Spacious Interior', 'Fuel Efficient'],
      localRate: '₹13/km',
      outstationRate: '₹11/km',
      rating: 4.7,
      description: 'Reliable and comfortable for all journeys'
    },
    {
      id: 'maruti-ertiga',
      name: 'Maruti Ertiga',
      type: 'MUV',
      capacity: 6,
      image: '/ertiga.jpg',
      features: ['Spacious', 'AC', 'Large Luggage Space', '7 Seater'],
      localRate: '₹15/km',
      outstationRate: '₹13/km',
      rating: 4.9,
      description: 'Ideal for family trips and group travel'
    },
    {
      id: 'innova-crysta',
      name: 'Innova Crysta',
      type: 'Premium MUV',
      capacity: 7,
      image: '/innova.jpg',
      features: ['Premium Comfort', 'AC', 'Entertainment System', 'Captain Seats'],
      localRate: '₹18/km',
      outstationRate: '₹16/km',
      rating: 4.9,
      description: 'Luxury travel experience for special occasions'
    },
    {
      id: 'tempo-traveller',
      name: 'Tempo Traveller',
      type: 'Mini Bus',
      capacity: 12,
      image: '/tempo.jpg',
      features: ['Group Travel', 'AC', 'Reclining Seats', 'Entertainment'],
      localRate: '₹25/km',
      outstationRate: '₹22/km',
      rating: 4.6,
      description: 'Perfect for large groups and tour packages'
    }
  ];

  const filteredVehicles = vehicles.filter(vehicle => 
    !passengers || vehicle.capacity >= passengers
  );

  const onSubmit = async (data: BookingForm) => {
    setIsSubmitting(true);
    try {
      // Calculate estimated cost
      const selectedVehicleData = vehicles.find(v => v.id === data.vehicleType);
      const estimatedDistance = 50; // This would be calculated based on actual locations
      const rate = data.tripType === 'local' ? 
        parseInt(selectedVehicleData?.localRate.replace('₹', '').replace('/km', '') || '0') :
        parseInt(selectedVehicleData?.outstationRate.replace('₹', '').replace('/km', '') || '0');
      const totalAmount = estimatedDistance * rate;
      const advanceAmount = Math.round(totalAmount * 0.05); // 5% advance

      // Create booking object
      const booking = {
        ...data,
        service_type: 'taxi',
        total_amount: totalAmount,
        advance_amount: advanceAmount,
        status: 'pending'
      };

      // Send WhatsApp message
      const message = `New Taxi Booking:
Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}
Vehicle: ${selectedVehicleData?.name}
Pickup: ${data.pickupLocation}
Destination: ${data.destination}
Date: ${data.pickupDate}
Time: ${data.pickupTime}
Passengers: ${data.passengers}
Trip Type: ${data.tripType}
Special Requests: ${data.specialRequests || 'None'}`;

      const whatsappUrl = `https://wa.me/919935512599?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');

      toast.success('Booking request sent! We will contact you shortly.');
      reset();
      setSelectedVehicle('');
    } catch (error) {
      toast.error('Failed to submit booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            Taxi <span className="text-yellow-400">Rental</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Choose from our premium fleet of vehicles for comfortable and reliable transportation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          {/* Vehicle Selection */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 md:mb-8"
            >
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Select Your Vehicle</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {filteredVehicles.map((vehicle, index) => (
                  <motion.div
                    key={vehicle.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className={`bg-gray-800 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
                      selectedVehicle === vehicle.id ? 'ring-2 ring-yellow-400' : 'hover:transform hover:scale-105'
                    }`}
                    onClick={() => setSelectedVehicle(vehicle.id)}
                  >
                    <div className="relative h-40 md:h-48 overflow-hidden">
                      <img
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                      <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-yellow-400 text-gray-900 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold">
                        {tripType === 'outstation' ? vehicle.outstationRate : vehicle.localRate}
                      </div>
                      <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 flex items-center text-white">
                        <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 mr-1" />
                        <span className="text-xs md:text-sm font-semibold">{vehicle.rating}</span>
                      </div>
                    </div>
                    
                    <div className="p-4 md:p-6">
                      <div className="flex justify-between items-start mb-2 md:mb-3">
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-white">{vehicle.name}</h3>
                          <p className="text-yellow-400 text-xs md:text-sm">{vehicle.type}</p>
                        </div>
                        <div className="flex items-center text-gray-300">
                          <Users className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                          <span className="text-xs md:text-sm">{vehicle.capacity}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4">{vehicle.description}</p>
                      
                      <div className="flex flex-wrap gap-1 md:gap-2">
                        {vehicle.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800 rounded-2xl p-6 md:p-8 h-fit sticky top-24"
          >
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Book Your Ride</h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2 text-sm md:text-base">Name *</label>
                  <input
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full bg-gray-700 text-white px-3 md:px-4 py-2 md:py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm md:text-base"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs md:text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-white font-medium mb-2 text-sm md:text-base">Phone *</label>
                  <input
                    type="tel"
                    {...register('phone', { required: 'Phone is required' })}
                    className="w-full bg-gray-700 text-white px-3 md:px-4 py-2 md:py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm md:text-base"
                    placeholder="Phone number"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-xs md:text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2 text-sm md:text-base">Email</label>
                <input
                  type="email"
                  {...register('email')}
                  className="w-full bg-gray-700 text-white px-3 md:px-4 py-2 md:py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm md:text-base"
                  placeholder="Email address"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2 text-sm md:text-base">Trip Type *</label>
                <select
                  {...register('tripType', { required: 'Trip type is required' })}
                  className="w-full bg-gray-700 text-white px-3 md:px-4 py-2 md:py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm md:text-base"
                >
                  <option value="">Select trip type</option>
                  <option value="local">Local (Within city)</option>
                  <option value="outstation">Outstation</option>
                </select>
                {errors.tripType && (
                  <p className="text-red-400 text-xs md:text-sm mt-1">{errors.tripType.message}</p>
                )}
              </div>

              <div>
                <label className="block text-white font-medium mb-2 text-sm md:text-base">Pickup Location *</label>
                <input
                  type="text"
                  {...register('pickupLocation', { required: 'Pickup location is required' })}
                  className="w-full bg-gray-700 text-white px-3 md:px-4 py-2 md:py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm md:text-base"
                  placeholder="Enter pickup location"
                />
                {errors.pickupLocation && (
                  <p className="text-red-400 text-xs md:text-sm mt-1">{errors.pickupLocation.message}</p>
                )}
              </div>

              <div>
                <label className="block text-white font-medium mb-2 text-sm md:text-base">Destination *</label>
                <input
                  type="text"
                  {...register('destination', { required: 'Destination is required' })}
                  className="w-full bg-gray-700 text-white px-3 md:px-4 py-2 md:py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm md:text-base"
                  placeholder="Enter destination"
                />
                {errors.destination && (
                  <p className="text-red-400 text-xs md:text-sm mt-1">{errors.destination.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2 text-sm md:text-base">Date *</label>
                  <input
                    type="date"
                    {...register('pickupDate', { required: 'Date is required' })}
                    className="w-full bg-gray-700 text-white px-3 md:px-4 py-2 md:py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm md:text-base"
                    min={new Date().toISOString().split('T')[0]}
                  />
                  {errors.pickupDate && (
                    <p className="text-red-400 text-xs md:text-sm mt-1">{errors.pickupDate.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-white font-medium mb-2 text-sm md:text-base">Time *</label>
                  <input
                    type="time"
                    {...register('pickupTime', { required: 'Time is required' })}
                    className="w-full bg-gray-700 text-white px-3 md:px-4 py-2 md:py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm md:text-base"
                  />
                  {errors.pickupTime && (
                    <p className="text-red-400 text-xs md:text-sm mt-1">{errors.pickupTime.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2 text-sm md:text-base">Passengers *</label>
                <select
                  {...register('passengers', { required: 'Number of passengers is required' })}
                  className="w-full bg-gray-700 text-white px-3 md:px-4 py-2 md:py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm md:text-base"
                >
                  <option value="">Select passengers</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(num => (
                    <option key={num} value={num}>{num} passenger{num > 1 ? 's' : ''}</option>
                  ))}
                </select>
                {errors.passengers && (
                  <p className="text-red-400 text-xs md:text-sm mt-1">{errors.passengers.message}</p>
                )}
              </div>

              <div>
                <label className="block text-white font-medium mb-2 text-sm md:text-base">Vehicle Type *</label>
                <select
                  {...register('vehicleType', { required: 'Vehicle type is required' })}
                  value={selectedVehicle}
                  onChange={(e) => setSelectedVehicle(e.target.value)}
                  className="w-full bg-gray-700 text-white px-3 md:px-4 py-2 md:py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm md:text-base"
                >
                  <option value="">Select vehicle</option>
                  {filteredVehicles.map(vehicle => (
                    <option key={vehicle.id} value={vehicle.id}>
                      {vehicle.name} - {vehicle.capacity} seater
                    </option>
                  ))}
                </select>
                {errors.vehicleType && (
                  <p className="text-red-400 text-xs md:text-sm mt-1">{errors.vehicleType.message}</p>
                )}
              </div>

              <div>
                <label className="block text-white font-medium mb-2 text-sm md:text-base">Special Requests</label>
                <textarea
                  {...register('specialRequests')}
                  rows={3}
                  className="w-full bg-gray-700 text-white px-3 md:px-4 py-2 md:py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm md:text-base"
                  placeholder="Any special requirements..."
                ></textarea>
              </div>

              <div className="bg-gray-700 rounded-lg p-3 md:p-4">
                <h3 className="text-white font-semibold mb-2 text-sm md:text-base">Booking Information</h3>
                <ul className="text-gray-300 text-xs md:text-sm space-y-1">
                  <li>• 5% advance payment required</li>
                  <li>• Professional drivers included</li>
                  <li>• 24/7 customer support</li>
                  <li>• Fuel and toll charges included</li>
                </ul>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-yellow-400 text-gray-900 py-2 md:py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
              >
                {isSubmitting ? 'Submitting...' : 'Book Now'}
              </button>

              <div className="text-center">
                <a
                  href="https://wa.me/919935512599"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors text-sm md:text-base"
                >
                  <Phone className="w-3 h-3 md:w-4 md:h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TaxiRental;