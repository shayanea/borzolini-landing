import { Stool } from "@/assets/icons";

export const MockHeader = () => {
  return (
    <div className="mb-4 flex items-center justify-between">
      <span className="font-medium text-white">AI Stool Scanner</span>
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/20">
        <Stool className="h-5 w-5 text-red-400" />
      </div>
    </div>
  );
};
