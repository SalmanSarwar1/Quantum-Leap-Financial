import React, { useState } from 'react';

const FinancialCalculator = () => {
  const [cashFlows, setCashFlows] = useState<number[]>([]);
  const [rate, setRate] = useState<number>(0);
  const [result, setResult] = useState<string | number>('');

  const calculateNPV = () => {
    if (cashFlows.length === 0 || rate <= 0) {
      setResult('Invalid inputs');
      return;
    }
    const npv = cashFlows.reduce((acc, cashFlow, index) => {
      return acc + cashFlow / Math.pow(1 + rate / 100, index + 1);
    }, 0);
    setResult(`NPV: ${npv.toFixed(2)}`);
  };

  const calculateIRR = () => {
    if (cashFlows.length === 0) {
      setResult('Invalid inputs');
      return;
    }
    let irr = 0.1; // Initial guess
    const maxIterations = 1000;
    const tolerance = 1e-6;

    for (let i = 0; i < maxIterations; i++) {
      const npv = cashFlows.reduce((acc, cashFlow, index) => {
        return acc + cashFlow / Math.pow(1 + irr, index + 1);
      }, 0);

      const derivative = cashFlows.reduce((acc, cashFlow, index) => {
        return acc - (index + 1) * cashFlow / Math.pow(1 + irr, index + 2);
      }, 0);

      const newIrr = irr - npv / derivative;
      if (Math.abs(newIrr - irr) < tolerance) {
        irr = newIrr;
        break;
      }
      irr = newIrr;
    }

    setResult(`IRR: ${(irr * 100).toFixed(2)}%`);
  };

  const handleCashFlowChange = (index: number, value: string) => {
    const updatedCashFlows = [...cashFlows];
    updatedCashFlows[index] = parseFloat(value) || 0;
    setCashFlows(updatedCashFlows);
  };

  const addCashFlow = () => {
    setCashFlows([...cashFlows, 0]);
  };

  const removeCashFlow = (index: number) => {
    const updatedCashFlows = cashFlows.filter((_, i) => i !== index);
    setCashFlows(updatedCashFlows);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Financial Calculator</h2>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Discount Rate (%)</label>
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(parseFloat(e.target.value))}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Cash Flows</label>
        {cashFlows.map((cashFlow, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="number"
              value={cashFlow}
              onChange={(e) => handleCashFlowChange(index, e.target.value)}
              className="w-full p-2 border rounded"
            />
            <button
              onClick={() => removeCashFlow(index)}
              className="ml-2 text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          onClick={addCashFlow}
          className="mt-2 text-blue-500 hover:text-blue-700"
        >
          Add Cash Flow
        </button>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={calculateNPV}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Calculate NPV
        </button>
        <button
          onClick={calculateIRR}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Calculate IRR
        </button>
      </div>
      {result && (
        <div className="mt-4 p-4 bg-gray-50 rounded">
          <p className="text-lg font-semibold">{result}</p>
        </div>
      )}
    </div>
  );
};

export default FinancialCalculator;