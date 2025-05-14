'use client';

import { useState } from 'react';
import { calculate } from '../utils/calculator';

export default function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleCalculate = () => {
    try {
      setError('');
      const result = calculate(operation, Number(num1), Number(num2));
      setResult(result);
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">Calculator</h2>
      <div className="space-y-4">
        <div>
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="First number"
          />
        </div>
        <div>
          <select
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">×</option>
            <option value="/">÷</option>
          </select>
        </div>
        <div>
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Second number"
          />
        </div>
        <button
          onClick={handleCalculate}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Calculate
        </button>
        {error && <p className="text-red-500">{error}</p>}
        {result !== null && (
          <div className="text-xl font-bold">
            Result: {result}
          </div>
        )}
      </div>
    </div>
  );
} 