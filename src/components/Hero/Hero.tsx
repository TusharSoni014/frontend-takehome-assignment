import React from "react";
import HeroRight from "./HeroRight";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Hero() {
  return (
    <div className="w-full p-2 flex flex-col md:flex-row justify-between items-center gap-3 my-3">
      <div className="w-full md:w-auto px-4 md:px-0">
        <div className="text-center md:text-left">
          <h1
            className={`font-bold text-[#555770] text-[40px] md:text-[64px] leading-[45px] md:leading-[60px] ${poppins.className}`}
          >
            The Web3
          </h1>
          <h1
            className={`font-bold text-[#555770] text-[40px] md:text-[64px] leading-[45px] md:leading-[60px] ${poppins.className}`}
          >
            Data Studio
          </h1>
        </div>
        <p
          className={`text-[20px] md:text-[29px] text-[#606060] leading-[26px] md:leading-[33.98px] max-w-[600px] my-3 text-center md:text-left`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint
        </p>
        <div className="mt-10 w-full flex flex-col md:flex-row gap-4 md:gap-8">
          <button className="h-[50px] w-full md:w-auto bg-[#959391] text-white rounded-full px-8 md:px-14 shadow-[6px_5px_10px_3px_#3636363D,_-8px_-8px_10px_0px_#FFFFFF] font-bold text-sm hover:bg-[#7a7877] transition-colors duration-300">
            REGISTER NOW
          </button>
          <button className="h-[50px] w-full md:w-auto bg-[linear-gradient(94.97deg,#DCDDE2_4.48%,#E2E3E7_7.97%,#EBECF0_44.7%,#E4E6EB_44.7%)] text-black border-2 border-white rounded-full px-8 md:px-14 shadow-[6px_5px_10px_3px_#3636363D,_-8px_-8px_10px_0px_#FFFFFF] font-bold text-sm hover:bg-[linear-gradient(94.97deg,#c9cacd_4.48%,#cdced1_7.97%,#d5d6d9_44.7%,#cfd0d4_44.7%)] hover:text-gray-800 transition-all duration-300">
            GET A QUOTE
          </button>
        </div>
      </div>
      <div className="relative mt-8 md:mt-0">
        <HeroRight />
      </div>
    </div>
  );
}
