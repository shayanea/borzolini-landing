export const MockWidgets = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="flex flex-col items-center justify-center gap-2 rounded-xl bg-[#1f1f26] p-4">
        <div className="bg-primary-500/20 flex h-10 w-10 items-center justify-center rounded-full">
          <div className="bg-primary-500 h-4 w-4 rounded"></div>
        </div>
        <p className="text-xs text-slate-400">AI Scanner</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 rounded-xl bg-[#1f1f26] p-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800">
          <div className="h-4 w-4 rounded bg-slate-600"></div>
        </div>
        <p className="text-xs text-slate-400">Find Vet</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 rounded-xl bg-[#1f1f26] p-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800">
          <div className="h-4 w-4 rounded bg-slate-600"></div>
        </div>
        <p
          data-source-location="components/landing/HeroSection:133:26"
          data-dynamic-content="true"
          className="text-xs text-slate-400"
        >
          Training
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 rounded-xl bg-[#1f1f26] p-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800">
          <div className="h-4 w-4 rounded bg-slate-600"></div>
        </div>
        <p className="text-xs text-slate-400">Care Tips</p>
      </div>
    </div>
  );
};
