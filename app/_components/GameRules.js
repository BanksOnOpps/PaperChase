import { RxCrossCircled } from "react-icons/rx";

function GameRules({ onCloseModal }) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">GAME RULES</h3>
        <button onClick={onCloseModal}>
          <RxCrossCircled className="h-6 w-6 text-brand-secondary flex-shrink-0" />
        </button>
      </div>

      {/* Issue Duration */}
      <div>
        <h4 className="font-medium mb-2 text-base">⏳ Issue Duration</h4>
        <ul className="list-disc list-inside space-y-1 text-brand-tetiary">
          <li>
            Each issue = <span className="font-semibold">1 game round</span>
          </li>
          <li>
            Total time: <span className="font-semibold">3 minutes</span>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>2 min 30 sec → Place your bets</li>
              <li>30 sec → Result countdown & reveal</li>
            </ul>
          </li>
          <li>
            After results, a{" "}
            <span className="font-semibold">
              new issue starts automatically
            </span>
          </li>
          <li>
            There are <span className="font-semibold">480 issues per day</span>{" "}
            (480 game rounds = 24 hours ÷ 3 min per round)
          </li>
        </ul>
      </div>

      {/* Betting & Service Fee */}
      <div>
        <h4 className="font-medium mb-2 text-base">💰 Betting & Service Fee</h4>
        <ul className="list-disc list-inside space-y-1 text-brand-tetiary">
          <li>Minimum bet: ₦100</li>
          <li>
            Service fee: <span className="font-semibold">2%</span> (deducted
            upfront)
          </li>
          <li>
            Example: ₦100 bet → ₦2 fee →{" "}
            <span className="font-semibold">Net bet = ₦98</span>
          </li>
        </ul>
      </div>

      {/* Betting Options */}
      <div>
        <h4 className="font-medium mb-2 text-base">🎨 Betting Options</h4>
        <ul className="list-disc list-inside space-y-2 text-brand-tetiary">
          <li>
            <span className="font-semibold">Rust</span>
            <ul className="list-disc list-inside ml-6">
              <li>Result = 1, 3, 7, 9 → Win = Net × 2</li>
              <li>Result = 5 → Win = Net × 1.5</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Emerald</span>
            <ul className="list-disc list-inside ml-6">
              <li>Result = 2, 4, 6, 8 → Win = Net × 2</li>
              <li>Result = 0 → Win = Net × 1.5</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Purple</span>
            <ul className="list-disc list-inside ml-6">
              <li>Result = 0 or 5 → Win = Net × 4.5</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Select Number (0–9)</span>
            <ul className="list-disc list-inside ml-6">
              <li>If result matches your number → Win = Net × 9</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Example */}
      <div>
        <h4 className="font-medium mb-2 text-base">🧾 Example</h4>
        <ul className="list-disc list-inside space-y-1 text-brand-tetiary">
          <li>Bet ₦100 → Fee ₦2 → Net ₦98</li>
          <li>
            Choose <span className="font-semibold">Rust</span>, result = 3 → You
            win ₦196
          </li>
          <li>
            Choose <span className="font-semibold">Number 5</span>, result = 5 →
            You win ₦882
          </li>
        </ul>
      </div>
    </div>
  );
}

export default GameRules;
