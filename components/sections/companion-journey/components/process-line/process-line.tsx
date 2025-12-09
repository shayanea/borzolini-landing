"use client";

interface ProcessLineProps {
  cardCount: number;
}

export function ProcessLine({ cardCount }: ProcessLineProps) {
  const dotPositions = Array.from({ length: cardCount }).map((_, index) => {
    return ((index + 2) / cardCount) * 100;
  });

  return (
    <div className="absolute top-14 right-0 left-0 hidden lg:block">
      <div className="relative mx-auto h-0.5 w-[calc(100%-8rem)] bg-[#324054]">
        {dotPositions.map((position, index) => (
          <div
            key={index}
            className="absolute top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#324054]"
            style={{
              left: `${position}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
