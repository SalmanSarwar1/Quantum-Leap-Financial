import React from 'react';
import Navbar from './components/Navbar';
import RegistrationForm from './components/RegistrationForm';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <main className="p-4">
        <RegistrationForm />
      </main>
    </div>
  );
};

export default App;