"use client";
import React from "react";
import { FiGift, FiShare2, FiClock } from "react-icons/fi";
import { GiFire, GiTrophy, GiEnvelope } from "react-icons/gi";

const gifts = [
  {
    id: "referral",
    title: "Referral Gifts",
    subtitle: "Bring your crew, stack your coins.",
    detail: "Every friend you invite = extra rewards for both of you!",
    icon: <FiShare2 className="h-6 w-6" />,
    tag: "Invite",
  },
  {
    id: "streaks",
    title: "Streak Rewards",
    subtitle: "Stay hot! Win streak bonuses.",
    detail:
      "5 wins → bonus coins • 10 wins → mystery box • 20 wins → big flex rewards 🎉",
    icon: <GiFire className="h-6 w-6" />,
    tag: "Streak",
  },
  {
    id: "milestones",
    title: "Milestone Gifts",
    subtitle: "Every game counts.",
    detail:
      "Hit 50/100/500 rounds to unlock hidden gifts for grinders like you.",
    icon: <GiTrophy className="h-6 w-6" />,
    tag: "Milestone",
  },
  {
    id: "mystery",
    title: "Mystery Envelopes",
    subtitle: "Tap to reveal…",
    detail:
      "Coins, bonuses or free plays — red envelopes drop randomly. Stay lucky!",
    icon: <GiEnvelope className="h-6 w-6" />,
    tag: "Mystery",
  },
  {
    id: "seasonal",
    title: "Seasonal Drops",
    subtitle: "Holiday vibes = special prizes.",
    detail:
      "Limited-time gifts during events — watch for drops and don’t miss out.",
    icon: <FiClock className="h-6 w-6" />,
    tag: "Limited",
  },
];

function Gifts() {
  return (
    <section className="w-full max-w-5xl mx-auto my-8 px-4">
      <header className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-100 to-pink-100">
          <FiGift className="h-5 w-5 text-yellow-600" />
          <span className="text-sm font-medium text-yellow-700">
            Gifts & Rewards
          </span>
        </div>
        <h2 className="mt-4 text-2xl sm:text-3xl font-bold">
          Earn, Open & Flex
        </h2>
        <p className="mt-2 text-sm text-slate-500 max-w-2xl mx-auto">
          Mystery envelopes, referral bonuses, streak drops and seasonal prizes
          — small wins, big flex. Play smart and collect rewards along the way.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {gifts.map((g) => (
          <article
            key={g.id}
            className="group bg-brand-primary border border-white/6 rounded-2xl p-5 flex flex-col justify-between h-full transition-transform hover:scale-[1.02] hover:shadow-lg"
            // add role/button semantics if clickable in future
          >
            <div>
              <div className="inline-flex items-center justify-center h-11 w-11 rounded-lg bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 mb-3">
                <div className="text-brand-accent">{g.icon}</div>
              </div>

              <h3 className="text-lg font-semibold">{g.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{g.subtitle}</p>

              <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                {g.detail}
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-xs px-2 py-1 rounded-md bg-white/5 text-slate-300">
                {g.tag}
              </span>
              <button
                type="button"
                className="text-xs font-medium px-3 py-2 rounded-md bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-sm hover:opacity-95"
              >
                Claim
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Gifts;
