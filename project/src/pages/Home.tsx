import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import VehicleFleet from '../components/VehicleFleet';
import TourPackages from '../components/TourPackages';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <VehicleFleet />
      <TourPackages />
      <Reviews />
      <Contact />
    </div>
  );
};

export default Home;