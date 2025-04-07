import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Welcome to Quantum Leap Financial
        </h1>
        <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12">
          Your gateway to smart investment and financial growth
        </p>
      </div>
    </div>
  );
};

export default Home;