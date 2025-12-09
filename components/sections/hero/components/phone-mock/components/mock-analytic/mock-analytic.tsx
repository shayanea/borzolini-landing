export const MockAnalytic = () => {
  return (
    <div className="mb-4 rounded-2xl bg-[#1f1f26] p-4">
      <div className="mb-4 flex items-center gap-3">
        <div className="h-14 w-14 rounded-xl bg-linear-to-br from-[#9c5cf6]/30 to-[#9c5cf6]/10"></div>
        <div>
          <p className="font-medium text-white">Luna</p>
          <p className="text-sm text-slate-500">Golden Retriever</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="rounded-xl bg-[#18181C] p-3 text-center">
          <p className="text-sm font-semibold text-[#9c5cf6]">28kg</p>
          <p className="text-xs text-slate-500">Weight</p>
        </div>
        <div className="rounded-xl bg-[#18181C] p-3 text-center">
          <p className="text-sm font-semibold text-[#9c5cf6]">3y</p>
          <p className="text-xs text-slate-500">Age</p>
        </div>
        <div className="rounded-xl bg-[#18181C] p-3 text-center">
          <p className="text-sm font-semibold text-[#9c5cf6]">2w</p>
          <p className="text-xs text-slate-500">Next Vet</p>
        </div>
      </div>
    </div>
  );
};
