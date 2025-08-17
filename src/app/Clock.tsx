"use client";

import { useEffect, useState } from "react";

export function Clock({ SecondHand }: { SecondHand: React.FC<{ secondRotation: number }> }) {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 10);
    return () => clearInterval(timer);
  }, []);

  const secondRotation = time.getSeconds() * 6 + time.getMilliseconds() * 0.006;

  return (
    <div>
      <svg width="200" height="200" viewBox="0 0 100 100">
        {/* Clock face */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="white"
          stroke="black"
          strokeWidth="2"
        />

        {/* Center dot */}
        <circle cx="50" cy="50" r="2" fill="black" />

        {/* Second hand */}
        <SecondHand secondRotation={secondRotation} />
      </svg>
    </div>
  );
}
