import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';

interface MortgageState {
  loanAmount: string;
  interestRate: string;
  loanTerm: string;
  result: {
    monthlyPayment: number;
    totalPayment: number;
    totalInterest: number;
  } | null;
}

const MortgageCalculator: React.FC = () => {
  const [values, setValues] = useState<MortgageState>({
    loanAmount: '',
    interestRate: '',
    loanTerm: '',
    result: null
  });

  const calculateMortgage = () => {
    const principal = parseFloat(values.loanAmount);
    const annualRate = parseFloat(values.interestRate) / 100;
    const monthlyRate = annualRate / 12;
    const terms = parseFloat(values.loanTerm) * 12;

    if (isNaN(principal) || isNaN(annualRate) || isNaN(terms)) return;

    const monthlyPayment = 
      (principal * monthlyRate * Math.pow(1 + monthlyRate, terms)) / 
      (Math.pow(1 + monthlyRate, terms) - 1);

    const totalPayment = monthlyPayment * terms;
    const totalInterest = totalPayment - principal;

    setValues(prev => ({
      ...prev,
      result: {
        monthlyPayment: Number(monthlyPayment.toFixed(2)),
        totalPayment: Number(totalPayment.toFixed(2)),
        totalInterest: Number(totalInterest.toFixed(2))
      }
    }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Mortgage Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Loan Amount ($)</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={values.loanAmount}
              onChange={e => setValues(prev => ({ ...prev, loanAmount: e.target.value }))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Annual Interest Rate (%)</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={values.interestRate}
              onChange={e => setValues(prev => ({ ...prev, interestRate: e.target.value }))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Loan Term (years)</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={values.loanTerm}
              onChange={e => setValues(prev => ({ ...prev, loanTerm: e.target.value }))}
            />
          </div>
        </div>
        
        <button
          onClick={calculateMortgage}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Calculate
        </button>
        
        {values.result && (
          <div className="mt-4 p-4 bg-gray-50 rounded space-y-2">
            <p className="text-lg font-semibold">
              Monthly Payment: ${values.result.monthlyPayment}
            </p>
            <p className="text-sm text-gray-600">
              Total Payment: ${values.result.totalPayment}
            </p>
            <p className="text-sm text-gray-600">
              Total Interest: ${values.result.totalInterest}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MortgageCalculator;