function Spinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-accent-primary rounded-full">
          <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-brand-secondary rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default Spinner;
