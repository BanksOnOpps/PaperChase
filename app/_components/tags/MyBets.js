import { GrTrophy } from "react-icons/gr";
import { MdOutlinePendingActions } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

function MyBets() {
  const myBets = [
    {
      id: "2628344580",
      game: "BetID – #2628344580",
      choice: "Rust",
      stake: "₦1,000,000",
      outcome: "Won",
      winnings: "+₦5,000,000",
      date: "Aug 29, 2025, 9:10 PM",
      color: "bg-rust",
    },
    {
      id: "2628344579",
      game: "BetID – #2628344579",
      choice: "Emerald",
      stake: "₦500",
      outcome: "Lost",
      winnings: "-₦500",
      date: "Aug 29, 2025, 9:15 PM",
      color: "bg-emerald",
    },
    {
      id: "2628344578",
      game: "BetID – #2628344578",
      choice: "Purple",
      stake: "₦700",
      outcome: "Pending",
      winnings: "—",
      date: "Aug 29, 2025, 9:20 PM",
      color: "bg-purple",
    },
    {
      id: "2628344577",
      game: "BetID – #2628344577",
      choice: "Rust",
      stake: "₦100,000",
      outcome: "Won",
      winnings: "+₦500,000",
      date: "Aug 29, 2025, 9:10 PM",
      color: "bg-rust",
    },
    {
      id: "2628344576",
      game: "BetID – #2628344576",
      choice: "Emerald",
      stake: "₦500",
      outcome: "Lost",
      winnings: "-₦500",
      date: "Aug 29, 2025, 9:15 PM",
      color: "bg-emerald",
    },
    {
      id: "2628344575",
      game: "BetID – #2628344575",
      choice: "Purple",
      stake: "₦700",
      outcome: "Pending",
      winnings: "—",
      date: "Aug 29, 2025, 9:20 PM",
      color: "bg-purple",
    },
  ];

  return (
    <div className="bg-white/10 p-4 rounded-lg shadow-lg">
      <div className="space-y-3">
        {myBets.map((bet) => (
          <div
            key={bet.id}
            className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition"
          >
            <div className="flex justify-between items-center mb-2">
              <p className="text-base font-semibold">{bet.game}</p>
              <p className="text-xs text-white/50">{bet.date}</p>
            </div>

            <div className="flex justify-between items-center mb-3">
              <p className="text-sm text-white/70">
                Stake:{" "}
                <span className="font-semibold text-white/70">{bet.stake}</span>
              </p>
              <div className="flex items-center gap-1">
                <div className={`w-3 h-3 ${bet.color}`} />
                <span className="text-sm font-medium text-white/70">
                  {bet.choice}
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              {bet.outcome === "Won" && (
                <div className="flex items-center gap-1 text-deposit font-bold text-sm">
                  <GrTrophy className="text-lg" />
                  <span>Won</span>
                </div>
              )}
              {bet.outcome === "Lost" && (
                <div className="flex items-center gap-1 text-withdrawal font-bold text-sm">
                  <RxCross2 className="text-lg" />
                  <span>Lost</span>
                </div>
              )}
              {bet.outcome === "Pending" && (
                <div className="flex items-center gap-1 text-pending font-bold text-sm">
                  <MdOutlinePendingActions className="text-lg" />
                  <span>Pending</span>
                </div>
              )}

              {bet.winnings !== "—" ? (
                <p
                  className={`text-base font-bold ${
                    bet.winnings.startsWith("+")
                      ? "text-deposit"
                      : "text-withdrawal"
                  }`}
                >
                  {bet.winnings}
                </p>
              ) : (
                <p className="text-white/40 text-sm font-medium">
                  Awaiting result…
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyBets;
