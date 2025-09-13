"use client";
import { useReducer, useState } from "react";
import { FaDotCircle } from "react-icons/fa";
import { TiPlusOutline } from "react-icons/ti";

const faqs = [
  {
    question: "What even is this app?",
    answer:
      "Paper Stake is the ultimate color-betting vibe 🎲🔥. Pick your shade, drop your stake, and let the colors decide your fate. Stack coins 💎, build streaks ⚡, and see if luck’s really on your side today ⭐. Each round lasts just 3 minutes, so the action never stops.",
  },
  {
    question: "How do I bet?",
    answer:
      "Super easy 🚀: Pick Rust, Emerald, Purple, or a number (0–9), stake at least ₦100, lock it in before 2:30, and watch the results drop in the last 30 seconds.",
  },
  {
    question: "How do I win?",
    answer:
      "It’s all about the result 🎨💎: 🔴 Rust (1,3,7,9=2× | 5=1.5×) | 🟢 Emerald (2,4,6,8=2× | 0=1.5×) | 🟣 Purple (0,5=4.5×) | 🔢 Number (0–9=9×) ⚡ Higher risk = bigger reward.",
  },
  {
    question: "How often can I play?",
    answer:
      "All day, every day ⏳. Each game round = 3 minutes, and there are 480 rounds daily. No waiting, no breaks — just nonstop action.",
  },
  {
    question: "What’s the minimum bet?",
    answer:
      "₦100 only 💵. A 2% service fee applies (₦2 on ₦100), so your net stake = ₦98.",
  },
  {
    question: "Can I cash out?",
    answer:
      "Of course! Head to Wallet → Withdraw, choose your method, and confirm — payouts are processed in less than 24 hours ⚡💵.",
  },
];

function faqReducer(state, action) {
  switch (action.type) {
    case "TOGGLE":
      return state === action.index ? null : action.index;
    default:
      return state;
  }
}

function FrequentlyAskedQuestions() {
  const [openIndex, dispatch] = useReducer(faqReducer, null);

  function toggleFAQ(index) {
    dispatch({ type: "TOGGLE", index });
  }
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col mb-8">
      <div className="mb-2">
        <span className="flex items-center justify-center gap-1">
          <FaDotCircle className="text-accent-primary" />
          FAQs
        </span>
      </div>
      <div className="mb-5">
        <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-2">
          Frequently Asked Questions
        </h1>
        <p className="text-base text-brand-tetiary text-center">
          Ready to test your luck and see if you’ve got the vibes to win big?
          🎨💰 Bet on your favorite colors, rack up streaks, unlock mystery
          rewards, and level up your casino game. Play smart, have fun, and may
          the luckiest colors be on your side!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            onClick={() => toggleFAQ(index)}
            className="bg-brand-primary p-4 rounded-lg w-full space-y-3"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg sm:text-xl font-semibold ">
                {faq.question}
              </h2>
              <TiPlusOutline
                className={`h-6 w-6 text-brand-secondary transition-transform duration-300 ${
                  openIndex === index ? "rotate-45" : ""
                }`}
              />
            </div>
            {openIndex === index && (
              <p className="text-base text-brand-tetiary leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FrequentlyAskedQuestions;
