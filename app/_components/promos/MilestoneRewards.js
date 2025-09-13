"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { FiGift } from "react-icons/fi";
import { FiCheckSquare } from "react-icons/fi";

function MilestoneRewards({ milestones, friendsQualified }) {
  const [claimed, setClaimed] = useState([]);

  function handleClaim(m) {
    if (claimed.includes(m)) return;
    setClaimed((prev) => [...prev, m]);

    // NOTIFICATION
    toast.success(
      <div className="flex flex-col items-center text-center">
        <span className="font-semibold">🎉 Milestone Unlocked!</span>
        <span>
          You referred {m} friends 🎁{" "}
          <span className="font-bold">₦1000 free bet credited! </span>
        </span>
      </div>,
      {
        style: {
          borderRadius: "10px",
          background: "#b08d57",
          color: "#111315",
          padding: "12px 16px",
        },
        icon: false,
      }
    );
  }

  return (
    <div className="flex flex-col items-center">
      <span className="text-sm text-brand-tetiary">Milestone Rewards</span>
      <div className="flex gap-4 mt-4 justify-center">
        {milestones.map((m, i) => {
          const unlocked = friendsQualified >= m;
          const isClaimed = claimed.includes(m);

          return (
            <button
              key={i}
              onClick={() => unlocked && !isClaimed && handleClaim(m)}
              className={`w-16 h-16 flex items-center justify-center rounded-lg border-2 text-2xl font-bold transition-all ${
                unlocked && !isClaimed
                  ? "bg-gradient-to-r from-brand-primary to-button-primary border-brand-primary text-brand-secondary shadow-lg animate-bounce hover:scale-110"
                  : unlocked && isClaimed
                  ? "bg-brand-primary border-brand-tetiary text-gray-400 cursor-not-allowed"
                  : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"
              }`}
              title={
                unlocked
                  ? isClaimed
                    ? `Already claimed`
                    : `Tap to claim reward`
                  : `Reach ${m} qualified friends to unlock`
              }
            >
              {isClaimed ? <FiCheckSquare /> : <FiGift />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default MilestoneRewards;
