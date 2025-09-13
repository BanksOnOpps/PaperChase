function Countdown() {
  return (
    <div className="flex justify-between mb-2">
      <div className="flex flex-col items-start">
        <span className="text-lg text-brand-tetiary">Bet ID</span>
        <span className="text-lg font-medium tracking-widest">2628344578</span>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-lg text-brand-tetiary">Timer</span>
        <span className="text-lg font-medium tracking-widest">03 : 00</span>
      </div>
    </div>
  );
}

export default Countdown;
