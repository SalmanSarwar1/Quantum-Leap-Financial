import React, { useState } from 'react';
import { 
  CompoundInterestCalculator,
  MortgageCalculator,
  RetirementCalculator 
} from '../components/calculators';

type CalculatorType = 'compound' | 'mortgage' | 'retirement';

const calculatorsList = [
  {
    id: 'compound',
    title: 'Compound Interest Calculator',
    description: 'Calculate how your investments will grow with compound interest over time.',
    icon: '💰'
  },
  {
    id: 'mortgage',
    title: 'Mortgage Calculator',
    description: 'Estimate your monthly mortgage payments and total interest costs.',
    icon: '🏠'
  },
  {
    id: 'retirement',
    title: 'Retirement Calculator',
    description: 'Plan your retirement by calculating future savings and returns.',
    icon: '👴'
  }
];

const Calculators = () => {
  const [selectedCalculator, setSelectedCalculator] = useState<CalculatorType | null>(null);

  const renderCalculator = () => {
    switch (selectedCalculator) {
      case 'compound':
        return <CompoundInterestCalculator />;
      case 'mortgage':
        return <MortgageCalculator />;
      case 'retirement':
        return <RetirementCalculator />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Financial Calculators</h1>
      
      {!selectedCalculator ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {calculatorsList.map((calc) => (
            <button
              key={calc.id}
              onClick={() => setSelectedCalculator(calc.id as CalculatorType)}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow
                       border border-gray-200 text-left"
            >
              <div className="text-4xl mb-4">{calc.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{calc.title}</h3>
              <p className="text-gray-600">{calc.description}</p>
            </button>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          <button
            onClick={() => setSelectedCalculator(null)}
            className="mb-4 text-blue-500 hover:text-blue-700 flex items-center gap-2"
          >
            ← Back to Calculators
          </button>
          {renderCalculator()}
        </div>
      )}
    </div>
  );
};

export default Calculators;