"use client";

import { useEffect, useState } from "react";

export const MockHeader = () => {
  const [greeting, setGreeting] = useState("Good morning");

  useEffect(() => {
    const hour = new Date().getHours();
    let newGreeting = "Good morning";
    if (hour >= 12 && hour < 18) newGreeting = "Good afternoon";
    else if (hour >= 18) newGreeting = "Good evening";

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setGreeting(newGreeting);
  }, []);

  return (
    <div className="mb-6 flex items-center justify-between">
      <div>
        <p className="text-xs text-slate-500">{greeting}</p>
        <p className="font-semibold text-white">Welcome back</p>
      </div>
      <div className="border-primary-500/30 bg-primary-500/20 h-10 w-10 rounded-full border"></div>
    </div>
  );
};
