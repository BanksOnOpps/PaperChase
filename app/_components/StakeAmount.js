"use client";
import { useEffect, useState } from "react";
import { RiExchangeDollarFill } from "react-icons/ri";

function StakeAmount() {
  const [amount, setAmount] = useState(100);

  function handleChange(e) {
    const value = e.target.value.replace(/\D/g, "");
    setAmount(value ? parseInt(value) : 100);
  }

  function handleBlur() {
    if (amount < 100) setAmount(100);
  }

  function increment() {
    setAmount((prev) => prev + 100);
  }
  function decrement() {
    setAmount((prev) => (prev > 100 ? prev - 100 : 100));
  }

  return (
    <div className="flex flex-col items-center gap-2 mb-4">
      <div className="flex items-center gap-2 text-lg font-medium">
        <span>Stake</span>
        <RiExchangeDollarFill />
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={decrement}
          className="px-6 py-2 bg-button-primary text-brand-secondary rounded-md font-semibold disabled:opacity-50"
          disabled={amount <= 100}
        >
          -
        </button>
        <input
          type="text"
          value={amount}
          onChange={handleChange}
          onBlur={handleBlur}
          className="w-32 text-center border border-brand-primary rounded-md py-2 font-semibold"
        />
        <button
          onClick={increment}
          className="px-6 py-2 bg-button-primary text-brand-secondary rounded-md font-semibold"
        >
          +
        </button>
      </div>
      <div className="text-sm text-brand-tetiary">Minimum: 100</div>
      <button className="px-6 py-2 bg-button-primary text-brand-secondary rounded-md font-semibold">
        Bet
      </button>
    </div>
  );
}

export default StakeAmount;
