import { Warning } from "@/assets/icons";

export const MockResult = () => {
  return (
    <div className="mb-4 rounded-xl bg-[#1f1f26] p-4">
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/20">
          <Warning className="h-5 w-5 text-red-400" />
        </div>
        <div>
          <p className="text-sm font-medium text-white">
            <Warning className="h-5 w-5 text-red-400" /> Blood detected in stool
          </p>
          <p className="text-xs text-red-400">Urgency: HIGH</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-2">
        <button className="w-full rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700">
          Connect to Vet NOW
        </button>
        <button className="w-full rounded-lg border border-slate-600 px-4 py-2 text-sm font-medium text-slate-300 hover:border-slate-500">
          Learn about possible causes
        </button>
      </div>
    </div>
  );
};
