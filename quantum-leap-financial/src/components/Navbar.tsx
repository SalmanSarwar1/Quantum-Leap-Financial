import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <h1 className="text-3xl font-extrabold tracking-wide">Quantum Leap</h1>
      <div className="flex items-center gap-6">
        <a href="#login" className="hover:underline hidden md:block">
          Login
        </a>
        <a href="#register" className="hover:underline hidden md:block">
          Register
        </a>
        <ThemeToggle />
        <button
          className="md:hidden p-2 bg-blue-500 rounded-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 right-4 bg-white text-black rounded-lg shadow-lg p-4 md:hidden">
          <a href="#login" className="block mb-2 hover:underline">
            Login
          </a>
          <a href="#register" className="block hover:underline">
            Register
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;