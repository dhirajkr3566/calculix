"use client";

import { useState } from "react";

export default function LoanCalculator() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [interest, setInterest] = useState<number | null>(null);
  const [total, setTotal] = useState<number | null>(null);

  const calculateLoan = () => {
    const principal = parseFloat(amount);
    const annualRate = parseFloat(rate);
    const time = parseFloat(years);

    if (!principal || !annualRate || !time) {
      setInterest(null);
      setTotal(null);
      return;
    }

    const simpleInterest = (principal * annualRate * time) / 100;

    setInterest(simpleInterest);
    setTotal(principal + simpleInterest);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">
          Loan Calculator
        </h1>

        <input
          type="number"
          placeholder="Loan Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
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
          onClick={calculateLoan}
          className="w-full bg-blue-600 text-white py-3 rounded-lg"
        >
          Calculate
        </button>

        {interest !== null && total !== null && (
          <div className="mt-6 text-center space-y-2">
            <p className="text-lg">
              Interest: <strong>${interest.toFixed(2)}</strong>
            </p>
            <p className="text-xl font-bold">
              Total Payable: ${total.toFixed(2)}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}