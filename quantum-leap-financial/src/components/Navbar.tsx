import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const activeClass = "text-yellow-400";
  const defaultClass = "hover:text-yellow-400 transition-colors";

  const navLinks = [
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/markets', label: 'Markets' },  // Changed from market to markets
    { path: '/transactions', label: 'Transactions' },  // Changed from transaction to transactions
    { path: '/calculators', label: 'Calculators' }
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl md:text-3xl font-extrabold tracking-wide flex items-center gap-2">
            <span className="text-yellow-400">₿</span> Quantum Leap
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(({ path, label }) => (
              <Link 
                key={path}
                to={path} 
                className={isActive(path) ? activeClass : defaultClass}
              >
                {label}
              </Link>
            ))}
            <ThemeToggle />
            <Link 
              to="/login"
              className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors"
            >
              Login
            </Link>
            <Link 
              to="/register"
              className="px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 transition-colors text-gray-900"
            >
              Register
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navLinks.map(({ path, label }) => (
              <Link 
                key={path}
                to={path}
                className="block py-2 px-4 rounded hover:bg-blue-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link 
              to="/login"
              className="block py-2 px-4 rounded hover:bg-blue-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
            <Link 
              to="/register"
              className="block py-2 px-4 rounded hover:bg-blue-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;