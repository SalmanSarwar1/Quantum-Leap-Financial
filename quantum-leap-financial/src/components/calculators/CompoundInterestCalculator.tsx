import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';

interface CalculatorState {
  principal: string;
  rate: string;
  time: string;
  result: number | null;
}

const CompoundInterestCalculator: React.FC = () => {
  const [values, setValues] = useState<CalculatorState>({
    principal: '',
    rate: '',
    time: '',
    result: null
  });

  const calculate = () => {
    const p = parseFloat(values.principal);
    const r = parseFloat(values.rate) / 100;
    const t = parseFloat(values.time);

    if (isNaN(p) || isNaN(r) || isNaN(t)) return;

    const amount = p * Math.pow(1 + r, t);
    setValues(prev => ({ ...prev, result: Number(amount.toFixed(2)) }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Compound Interest Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Principal Amount ($)</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={values.principal}
              onChange={e => setValues(prev => ({ ...prev, principal: e.target.value }))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Annual Interest Rate (%)</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={values.rate}
              onChange={e => setValues(prev => ({ ...prev, rate: e.target.value }))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Time (years)</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={values.time}
              onChange={e => setValues(prev => ({ ...prev, time: e.target.value }))}
            />
          </div>
        </div>
        
        <button
          onClick={calculate}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Calculate
        </button>
        
        {values.result !== null && (
          <div className="mt-4 p-4 bg-gray-50 rounded">
            <p className="text-lg font-semibold">Future Value: ${values.result}</p>
            <p className="text-sm text-gray-600">
              Interest Earned: ${(values.result - parseFloat(values.principal)).toFixed(2)}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CompoundInterestCalculator;