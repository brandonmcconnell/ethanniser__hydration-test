import React from "react";
import { Clock } from "./Clock";
import { SecondHand } from "./SecondHand";

export default function Page() {
  return (
    <div className="flex flex-row items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Broken</h1>
        <Clock SecondHand={SecondHand} />
      </div>
    </div>
  );
}


