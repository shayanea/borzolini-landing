export const DownloadButtons = () => {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="hidden items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-slate-900 transition-all hover:scale-105 hover:bg-slate-100 active:scale-95 sm:flex"
    >
      Join Waitlist
    </button>
  );
};
