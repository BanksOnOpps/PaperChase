function Transactions() {
  const transactions = [
    {
      id: "TXN324234",
      type: "Deposit",
      amount: "+₦1,000",
      method: "OPay",
      status: "Successful",
      date: "Aug 30, 2025, 2:14 PM",
    },
    {
      id: "WDL989823",
      type: "Withdrawal",
      amount: "-₦2,500",
      method: "Bank Transfer (GTB)",
      status: "Pending",
      date: "Aug 29, 2025, 8:42 PM",
    },
    {
      id: "BETP-44833",
      type: "Bet Payout",
      amount: "+₦3,200",
      method: "ColorBet – #2628344578",
      status: "Successful",
      date: "Aug 29, 2025, 9:10 PM",
    },
    {
      id: "BN500-FF123",
      type: "Bonus Credit",
      amount: "+₦500",
      method: "First Deposit Bonus",
      status: "Successful",
      date: "Aug 28, 2025, 4:00 PM",
    },
    {
      id: "TXN555889",
      type: "Refund",
      amount: "+₦2,000",
      method: "Bank Transfer",
      status: "Failed → Refunded",
      date: "Aug 27, 2025, 3:25 PM",
    },
  ];

  return (
    <div className="bg-white/10 p-4 rounded-lg shadow-lg">
      <div className="space-y-3">
        {transactions.map((trx) => (
          <div
            key={trx.id}
            className="bg-white/5 border hover:bg-white/10 transition border-white/10 p-4 rounded-lg flex items-start justify-between"
          >
            <div>
              <p className="font-semibold text-base">{trx.type}</p>
              <p className="text-sm text-white/70">{trx.method}</p>
              <p className="text-xs text-white/50">{trx.date}</p>
            </div>
            <div className="text-right">
              <p
                className={`font-bold ${
                  trx.amount.startsWith("+")
                    ? "text-deposit"
                    : "text-withdrawal"
                }`}
              >
                {trx.amount}
              </p>
              <p className="text-xs text-white/70">{trx.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Transactions;
