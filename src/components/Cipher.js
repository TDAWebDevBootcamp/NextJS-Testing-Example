'use client';

import { useState } from 'react';
import { encrypt, decrypt } from '../utils/cipher';

export default function Cipher() {
  const [text, setText] = useState('');
  const [shift, setShift] = useState(1);
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [mode, setMode] = useState('encrypt');

  const handleTransform = () => {
    try {
      setError('');
      const transformed = mode === 'encrypt' 
        ? encrypt(text, Number(shift))
        : decrypt(text, Number(shift));
      setResult(transformed);
    } catch (err) {
      setError(err.message);
      setResult('');
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">Caesar Cipher</h2>
      <div className="space-y-4">
        <div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter text to transform"
            rows={3}
          />
        </div>
        <div>
          <input
            type="number"
            value={shift}
            onChange={(e) => setShift(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Shift value"
            min="1"
            max="25"
          />
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setMode('encrypt')}
            className={`flex-1 p-2 rounded ${
              mode === 'encrypt' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200'
            }`}
          >
            Encrypt
          </button>
          <button
            onClick={() => setMode('decrypt')}
            className={`flex-1 p-2 rounded ${
              mode === 'decrypt' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200'
            }`}
          >
            Decrypt
          </button>
        </div>
        <button
          onClick={handleTransform}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Transform
        </button>
        {error && <p className="text-red-500">{error}</p>}
        {result && (
          <div className="p-2 border rounded bg-gray-50">
            <p className="font-bold mb-1">Result:</p>
            <p>{result}</p>
          </div>
        )}
      </div>
    </div>
  );
} 