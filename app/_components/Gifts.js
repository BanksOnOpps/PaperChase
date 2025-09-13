"use client";
import React from "react";
import { FiGift } from "react-icons/fi";
import Referrals from "./promos/Referrals";

function Gifts() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <header className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-yellow-100 to-pink-100">
          <FiGift className="h-5 w-5 text-button-primary" />
          <span className="text-sm font-medium text-button-secondary">
            Gifts & Rewards
          </span>
        </div>
        <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-brand-secondary">
          Invite Friends & Earn
        </h2>
        <p className="mt-2 text-base text-brand-tetiary leading-relaxed max-w-2xl mx-auto">
          Share your referral code with friends to earn mystery envelopes and
          bonus rewards. Every friend invited counts towards your rewards —
          small wins, big flex.
        </p>
      </header>

      {/* Referral Section */}
      <Referrals />
    </section>
  );
}

export default Gifts;
