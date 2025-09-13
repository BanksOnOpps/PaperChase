"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Transactions from "./tags/Transactions";
import MyBets from "./tags/MyBets";
import Activities from "./tags/Activities";

const ANIMATION_DURATION = 500;

function NotificationPage({ onClose }) {
  const router = useRouter();
  const pathname = usePathname();

  const [closing, setClosing] = useState(false);
  const [activeTab, setActiveTab] = useState("transactions");

  function handleClose() {
    setClosing(true);

    // After animation duration, navigate back to dashboard
    setTimeout(() => {
      router.replace(pathname, { scroll: false });
      onClose?.();
    }, ANIMATION_DURATION);
  }

  useEffect(() => {
    if (closing) {
      const timer = setTimeout(() => {
        onClose();
      }, ANIMATION_DURATION);
      return () => clearTimeout(timer);
    }
  }, [closing, onClose]);

  return (
    <div
      className={`fixed inset-0 bg-accent-primary z-100 flex flex-col 
        ${
          closing
            ? "animate-[slideOutRight_0.5s_ease-out]"
            : "animate-[slideInRight_0.5s_ease-out]"
        }
      `}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-white/20">
        <h2 className="text-xl font-bold">Notifications</h2>
        <button
          onClick={handleClose}
          className="text-white/70 hover:text-white text-2xl"
        >
          ✕
        </button>
      </div>

      {/* Body */}
      <div className="flex justify-between p-4 gap-2">
        <button
          onClick={() => setActiveTab("transactions")}
          className="flex-1 font-semibold text-center bg-white/10 p-2 rounded-lg"
        >
          Transactions
        </button>
        <div className="flex items-center">
          <button
            onClick={() => setActiveTab("myBets")}
            className="flex-1 font-semibold text-center bg-white/10 p-2 rounded-lg"
          >
            My Bets
          </button>
        </div>
        <button
          onClick={() => setActiveTab("activities")}
          className="flex-1 font-semibold text-center bg-white/10 p-2 rounded-lg"
        >
          Activities
        </button>
      </div>
      <div className="flex-1 overflow-auto p-4 space-y-4">
        {activeTab === "transactions" && <Transactions />}

        {activeTab === "myBets" && <MyBets />}

        {activeTab === "activities" && <Activities />}
      </div>
    </div>
  );
}

export default NotificationPage;
