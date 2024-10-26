import React from "react";
import HeroRight from "./HeroRight";

export default function Hero() {
  return (
    <div className="w-full border border-red-500 p-2 flex justify-between items-center gap-3">
      <div className="border border-red-500"></div>
      <div className="relative">
        <HeroRight />
      </div>
    </div>
  );
}
