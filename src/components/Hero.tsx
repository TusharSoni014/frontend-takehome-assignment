import React from "react";
import HeroRight from "./HeroRight";

export default function Hero() {
  return (
    <div className="w-full p-2 flex justify-between items-center gap-3 my-3">
      <div>
        <div className="">
          <h1 className="font-bold text-[#555770] text-[64px] leading-[60px] text-left">
            The Web3
          </h1>
          <h1 className="font-bold text-[#555770] text-[64px] leading-[60px] text-left">
            Data Studio
          </h1>
        </div>
        <p className="text-[29px] text-[#606060] leading-[33.98px] max-w-[600px] my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint
        </p>
        <div className="mt-10 w-full flex gap-8">
          <button className="h-[50px] bg-[#959391] text-white rounded-full px-14 shadow-[6px_5px_10px_3px_#3636363D,_-8px_-8px_10px_0px_#FFFFFF] font-bold text-sm">
            REGISTER NOW
          </button>
          <button className="h-[50px] bg-[linear-gradient(94.97deg,#DCDDE2_4.48%,#E2E3E7_7.97%,#EBECF0_44.7%,#E4E6EB_44.7%)] text-black border-2 border-white rounded-full px-14 shadow-[6px_5px_10px_3px_#3636363D,_-8px_-8px_10px_0px_#FFFFFF] font-bold text-sm">
            GET A QUOTE
          </button>{" "}
        </div>
      </div>
      <div className="relative">
        <HeroRight />
      </div>
    </div>
  );
}
