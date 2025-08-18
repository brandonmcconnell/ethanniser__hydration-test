import React from "react";
import { Clock } from "./Clock";
import { SecondHand } from "./SecondHand_server";

export default function Page() {
  const time = new Date();
  const secondRotation = time.getSeconds() * 6 + time.getMilliseconds() * 0.006;

  return (
    <div className="flex flex-row items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">It… works?</h1>
        <Clock>
          <SecondHand secondRotation={secondRotation} />
        </Clock>
      </div>
    </div>
  );
}


