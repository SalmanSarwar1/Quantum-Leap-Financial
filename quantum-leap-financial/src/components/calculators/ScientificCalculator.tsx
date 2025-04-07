import React, { useState } from 'react';

const ScientificCalculator = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState<string | number>('');

  const handleCalculate = () => {
    try {
      // Use `eval` for simplicity, but avoid in production for security reasons
      const calculatedResult = eval(expression);
      setResult(calculatedResult);
    } catch {
      setResult('Error');
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Scientific Calculator</h2>
      <input
        type="text"
        value={expression}
        onChange={(e) => setExpression(e.target.value)}
        className="w-full p-2 border rounded mb-4"
        placeholder="Enter expression (e.g., sin(45) + cos(30))"
      />
      <button
        onClick={handleCalculate}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Calculate
      </button>
      {result !== '' && (
        <div className="mt-4 p-4 bg-gray-50 rounded">
          <p className="text-lg font-semibold">Result: {result}</p>
        </div>
      )}
    </div>
  );
};

export default ScientificCalculator;