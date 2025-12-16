export const MockAnalytic = () => {
  return (
    <div className="mb-4 rounded-2xl bg-[#1f1f26] p-4">
      <div className="mb-4 flex items-center gap-3">
        <div className="from-primary-500/30 to-primary-500/10 h-14 w-14 rounded-xl bg-linear-to-br"></div>
        <div>
          <p className="font-medium text-white">Luna</p>
          <p className="text-sm text-slate-500">Golden Retriever</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="rounded-xl bg-[#18181C] p-3 text-center">
          <p className="text-primary-500 text-sm font-semibold">28kg</p>
          <p className="text-xs text-slate-500">Weight</p>
        </div>
        <div className="rounded-xl bg-[#18181C] p-3 text-center">
          <p className="text-primary-500 text-sm font-semibold">3y</p>
          <p className="text-xs text-slate-500">Age</p>
        </div>
        <div className="rounded-xl bg-[#18181C] p-3 text-center">
          <p className="text-primary-500 text-sm font-semibold">2w</p>
          <p className="text-xs text-slate-500">Next Vet</p>
        </div>
      </div>
    </div>
  );
};
