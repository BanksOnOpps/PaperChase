"use client";

import { ErrorBoundaryHandler } from "next/dist/client/components/error-boundary";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsCashCoin } from "react-icons/bs";
import { FiGift } from "react-icons/fi";
import { LuWallet } from "react-icons/lu";
import TopBar from "../_components/header/TopBar";
import Notifications from "../_components/Notifications";

function DashboardLayout({ children }) {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="grid grid-rows-[auto_1fr] h-screen">
      {/* Top Bar */}
      <TopBar showNotifications={() => setShowNotifications(true)} />

      {/* Body */}
      <div className="p-4 overflow-auto pb-24">
        {showNotifications && (
          <Notifications onClose={() => setShowNotifications(false)} />
        )}

        {/* ALL DASHBOARD CHILDREN ARE WRAPPED HERE */}
        {children}
      </div>

      {/* Bottom Nav */}
      <div
        className="fixed bottom-4 left-4 right-4 
        bg-accent-primary py-2 flex justify-around items-center 
        rounded-lg shadow-xl"
      >
        {/* Home */}
        <Link href="/dashboard" className="flex flex-col items-center">
          <AiOutlineHome className="h-7 w-7" />
          <span className="text-xs">Home</span>
        </Link>

        {/* Deposit */}
        <Link
          href="/dashboard/deposits"
          className="flex flex-col items-center text-brand-secondary hover:text-white transition"
        >
          <LuWallet className="h-7 w-7" />
          <span className="text-xs">Deposit</span>
        </Link>

        {/* Withdraw */}
        <Link
          href="/dashboard/withdraw"
          className="flex flex-col items-center text-brand-secondary hover:text-white transition"
        >
          <BsCashCoin className="h-7 w-7" />
          <span className="text-xs">Withdraw</span>
        </Link>

        {/* Rewards */}
        <Link
          href="/dashboard/rewards"
          className="flex flex-col items-center text-brand-secondary hover:text-white transition"
        >
          <FiGift className="h-7 w-7" />
          <span className="text-xs">Rewards</span>
        </Link>
      </div>
    </div>
  );
}

export default DashboardLayout;
