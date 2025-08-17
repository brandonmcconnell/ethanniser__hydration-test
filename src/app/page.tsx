"use client";

import React from "react";
import { useEffect, useState } from "react";
import { SecondHand } from "./SecondHand";

export default function Page() {
  return (
    <div className="flex flex-row items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Broken</h1>
        <Clock />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Fixed</h1>
        <Clock />
      </div>
    </div>
  );
}

function Clock() {
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
