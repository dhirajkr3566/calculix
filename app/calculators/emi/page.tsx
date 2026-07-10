"use client";

import { useState } from "react";

export default function EMICalculator() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [emi, setEmi] = useState<number | null>(null);

  const calculateEMI = () => {
    const P = parseFloat(principal);
    const annualRate = parseFloat(rate);
    const Y = parseFloat(years);

    if (!P || !annualRate || !Y) {
      setEmi(null);
      return;
    }

    const r = annualRate / 12 / 100;
    const n = Y * 12;

    const monthly =
      (P * r * Math.pow(1 + r, n)) /
      (Math.pow(1 + r, n) - 1);

    setEmi(monthly);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">
          EMI Calculator
        </h1>

        <input
          type="number"
          placeholder="Loan Amount"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="number"
          placeholder="Interest Rate (%)"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="number"
          placeholder="Loan Term (Years)"
          value={years}
          onChange={(e) => setYears(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <button
          onClick={calculateEMI}
          className="w-full bg-blue-600 text-white py-3 rounded-lg"
        >
          Calculate EMI
        </button>

        {emi !== null && (
          <h2 className="text-center text-xl font-semibold mt-6">
            Monthly EMI: ${emi.toFixed(2)}
          </h2>
        )}
      </div>
    </main>
  );
}