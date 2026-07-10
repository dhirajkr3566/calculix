"use client";

import { useState } from "react";

export default function PercentageCalculator() {
  const [value, setValue] = useState("");
  const [total, setTotal] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculatePercentage = () => {
    const v = parseFloat(value);
    const t = parseFloat(total);

    if (!v || !t) {
      setResult(null);
      return;
    }

    setResult((v / t) * 100);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">
          Percentage Calculator
        </h1>

        <input
          type="number"
          placeholder="Value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="number"
          placeholder="Total"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <button
          onClick={calculatePercentage}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Calculate
        </button>

        {result !== null && (
          <h2 className="text-center text-xl font-semibold mt-6">
            Result: {result.toFixed(2)}%
          </h2>
        )}
      </div>
    </main>
  );
}