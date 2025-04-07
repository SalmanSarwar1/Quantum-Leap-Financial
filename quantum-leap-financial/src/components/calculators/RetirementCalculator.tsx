import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';

interface RetirementState {
  currentAge: string;
  retirementAge: string;
  currentSavings: string;
  monthlyContribution: string;
  expectedReturn: string;
  result: {
    totalSavings: number;
    totalContributions: number;
    totalEarnings: number;
  } | null;
}

const RetirementCalculator: React.FC = () => {
  const [values, setValues] = useState<RetirementState>({
    currentAge: '',
    retirementAge: '',
    currentSavings: '',
    monthlyContribution: '',
    expectedReturn: '',
    result: null
  });

  const calculateRetirement = () => {
    const initialAmount = parseFloat(values.currentSavings);
    const monthly = parseFloat(values.monthlyContribution);
    const annualRate = parseFloat(values.expectedReturn) / 100;
    const years = parseFloat(values.retirementAge) - parseFloat(values.currentAge);
    
    if (isNaN(initialAmount) || isNaN(monthly) || isNaN(annualRate) || isNaN(years)) return;

    let totalSavings = initialAmount;
    const monthlyRate = annualRate / 12;
    const totalMonths = years * 12;
    
    for (let i = 0; i < totalMonths; i++) {
      totalSavings += monthly;
      totalSavings *= (1 + monthlyRate);
    }

    const totalContributions = initialAmount + (monthly * totalMonths);
    const totalEarnings = totalSavings - totalContributions;

    setValues(prev => ({
      ...prev,
      result: {
        totalSavings: Number(totalSavings.toFixed(2)),
        totalContributions: Number(totalContributions.toFixed(2)),
        totalEarnings: Number(totalEarnings.toFixed(2))
      }
    }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Retirement Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Current Age</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={values.currentAge}
              onChange={e => setValues(prev => ({ ...prev, currentAge: e.target.value }))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Retirement Age</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={values.retirementAge}
              onChange={e => setValues(prev => ({ ...prev, retirementAge: e.target.value }))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Current Savings ($)</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={values.currentSavings}
              onChange={e => setValues(prev => ({ ...prev, currentSavings: e.target.value }))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Monthly Contribution ($)</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={values.monthlyContribution}
              onChange={e => setValues(prev => ({ ...prev, monthlyContribution: e.target.value }))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Expected Annual Return (%)</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={values.expectedReturn}
              onChange={e => setValues(prev => ({ ...prev, expectedReturn: e.target.value }))}
            />
          </div>
        </div>
        
        <button
          onClick={calculateRetirement}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Calculate
        </button>
        
        {values.result && (
          <div className="mt-4 p-4 bg-gray-50 rounded space-y-2">
            <p className="text-lg font-semibold">
              Total Savings at Retirement: ${values.result.totalSavings}
            </p>
            <p className="text-sm text-gray-600">
              Total Contributions: ${values.result.totalContributions}
            </p>
            <p className="text-sm text-gray-600">
              Total Investment Earnings: ${values.result.totalEarnings}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RetirementCalculator;