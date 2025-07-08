import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, User, LogOut, Car } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success('Signed out successfully');
      navigate('/');
    } catch (error) {
      toast.error('Error signing out');
    }
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Taxi Rental', path: '/taxi-rental' },
    { name: 'Tour Packages', path: '/tour-packages' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Car className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />
            <div>
              <h1 className="text-lg md:text-2xl font-bold text-yellow-400">Paradise Tours</h1>
              <p className="text-xs text-gray-300 hidden sm:block">Premium Travel Services</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="hover:text-yellow-400 transition-colors duration-200 font-medium text-sm xl:text-base"
              >
                {item.name}
              </Link>
            ))}
            
            {user ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/dashboard"
                  className="flex items-center space-x-1 hover:text-yellow-400 transition-colors text-sm xl:text-base"
                >
                  <User className="w-4 h-4" />
                  <span>Dashboard</span>
                </Link>
                <button
                  onClick={handleSignOut}
                  className="flex items-center space-x-1 hover:text-yellow-400 transition-colors text-sm xl:text-base"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="hover:text-yellow-400 transition-colors font-medium text-sm xl:text-base"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-yellow-400 text-gray-900 px-3 py-2 xl:px-4 xl:py-2 rounded-lg hover:bg-yellow-300 transition-colors font-medium text-sm xl:text-base"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden pb-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block py-3 hover:text-yellow-400 transition-colors border-b border-gray-700 last:border-b-0"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {user ? (
              <div className="pt-4 border-t border-gray-700 mt-4">
                <Link
                  to="/dashboard"
                  className="block py-3 hover:text-yellow-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    handleSignOut();
                    setIsOpen(false);
                  }}
                  className="block py-3 hover:text-yellow-400 transition-colors w-full text-left"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="pt-4 border-t border-gray-700 mt-4">
                <Link
                  to="/login"
                  className="block py-3 hover:text-yellow-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block py-3 hover:text-yellow-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;