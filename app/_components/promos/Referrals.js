"use client";
import React, { useState } from "react";
import { FiCopy, FiShare2 } from "react-icons/fi";
import MilestoneRewards from "./MilestoneRewards";

function Referrals() {
  const [copied, setCopied] = useState(false);

  const referralCode = "PAPER123";
  const rewardPerReferral = 500;
  const milestones = [3, 5, 10];

  // Example friend data
  const friends = [
    { name: "Alice", qualified: true },
    { name: "Bob", qualified: false },
    { name: "Charlie", qualified: true },
    { name: "David", qualified: false },
    { name: "Eve", qualified: true },
  ];

  const friendsQualified = friends.filter((f) => f.qualified).length; //3
  const friendsPending = friends.filter((f) => !f.qualified).length; //2
  const totalReward = friendsQualified * rewardPerReferral; //1500

  function handleCopy() {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const nextMilestone =
    milestones.find((milestone) => milestone > friendsQualified) || null;

  const progressPercent = nextMilestone
    ? (friendsQualified / nextMilestone) * 100
    : 100; //60 percent

  return (
    <div className="bg-white rounded-xl p-6 shadow-md space-y-6 max-w-4xl mx-auto">
      {/* Referral Code */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex flex-col">
          <span className="text-sm text-gray-500 mb-1">Your Referral Code</span>
          <div className="flex items-center gap-2">
            <span className="font-mono font-semibold text-lg bg-gray-100 px-3 py-1 rounded">
              {referralCode}
            </span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
            >
              <FiCopy /> {copied ? "Copied!" : "Copy"}
            </button>
            <button className="flex items-center gap-1 px-3 py-1 rounded bg-green-500 text-white hover:bg-green-600 transition">
              <FiShare2 /> Share
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div className="p-4 bg-gray-50 rounded-lg">
          <span className="text-sm text-brand-tetiary">Invited Friends</span>
          <p className="text-xl font-bold text-brand-secondary">
            {friendsQualified}
          </p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <span className="text-sm text-brand-tetiary">Total Rewards</span>
          <p className="text-xl font-bold text-accent-primary">
            ₦{totalReward}
          </p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <span className="text-sm text-brand-tetiary">Pending Rewards</span>
          <p className="text-xl font-semibold text-brand-secondary">
            {friendsPending} friend(s) yet to qualify
          </p>
        </div>
      </div>

      {/* Milestone Progress */}
      {nextMilestone && (
        <div className="space-y-2">
          <span className="text-sm text-brand-tetiary">
            Progress to next milestone ({nextMilestone} friends)
          </span>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-gradient-to-r from-brand-primary to-accent-primary h-4 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-600 mt-1">
            <span>{friendsQualified}</span>
            <span>{nextMilestone}</span>
          </div>
        </div>
      )}

      {/* Mystery Envelopes */}
      <MilestoneRewards
        milestones={milestones}
        friendsQualified={friendsQualified}
      />
      {/* <div className="flex flex-col items-center">
        <span className="text-sm text-brand-tetiary">Milestone Rewards</span>
        <div className="flex gap-4 mt-6">
          {milestones.map((m, i) => {
            const unlocked = friendsQualified >= m;
            return (
              <div
                key={i}
                className={`w-16 h-16 flex items-center justify-center rounded-lg border-2 text-2xl font-bold cursor-pointer transition-all ${
                  unlocked
                    ? "bg-gradient-to-r from-brand-tetiary to-accent-primary border-brand-primary text-brand-secondary shadow-lg animate-bounce"
                    : "bg-gray-100 border-brand-primary text-brand-secondary"
                }`}
                title={
                  unlocked
                    ? `Milestone reached!`
                    : `Reach ${m} qualified friends to unlock`
                }
              >
                🎁
              </div>
            );
          })}
        </div>
      </div> */}

      {/* Friend List */}
      <div>
        <span className="text-sm text-gray-500">Friends Invited</span>
        <div className="mt-2 space-y-2">
          {friends.map((friend, index) => (
            <div
              key={index}
              className={`flex justify-between items-center p-3 rounded-lg ${
                friend.qualified ? "bg-gray-50" : "bg-white/10"
              }`}
            >
              <span>{friend.name}</span>
              <span
                className={`font-semibold ${
                  friend.qualified
                    ? "text-accent-primary"
                    : "text-brand-tetiary"
                }`}
              >
                {friend.qualified ? `₦${rewardPerReferral} earned` : "Pending"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tip */}
      <div className="bg-gray-50 p-4 rounded-lg text-brand-tetiary text-sm">
        Tip: You earn ₦500 for each friend who deposits and stakes ₦1,000 or
        more. Reach milestones to unlock mystery envelopes!
      </div>
    </div>
  );
}

export default Referrals;
