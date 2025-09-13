"use client";

import { Suspense } from "react";
import { GrTrophy } from "react-icons/gr";
import Countdown from "./Countdown";
import RulesSection from "./RulesSection";
import StakePoints from "./StakePoints";
import ResultTable from "./ResultTable";
import ReferralRedeem from "./promos/Referrals";
import StakeAmount from "./StakeAmount";

function DashboardHome() {
  return (
    <>
      <div className="bg-accent-primary rounded-lg px-3 py-2 mb-2">
        <Suspense>
          <RulesSection />
        </Suspense>
      </div>

      <Countdown />

      <div className="bg-bet-card rounded-lg mb-5">
        <div className="flex justify-between p-4">
          <button className="bg-rust p-2 rounded-lg font-medium">
            Join Rust
          </button>
          <button className="bg-emerald p-2 rounded-lg font-medium">
            Join Emerald
          </button>
          <button className="bg-purple p-2 rounded-lg font-medium">
            Join Purple
          </button>
        </div>

        <StakePoints />
      </div>
      <div className="mb-10">
        <StakeAmount />
      </div>

      <div>
        <div className="flex justify-center items-center gap-2 text-lg font-medium mb-2">
          <span>Outcomes</span> <GrTrophy />
        </div>
        <ResultTable />
      </div>
    </>
  );
}

export default DashboardHome;
