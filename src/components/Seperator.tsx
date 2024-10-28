"use client";

import React from "react";

export default function Seperator() {
  return (
    <div className="h-[14px] mx-auto w-[250px] rounded-full relative [box-shadow:4px_2px_2px_0px_#00000040,_-2px_-2px_4px_0px_#FFFFFF]">
      <div className="__inner absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full bg-[#3d3d3e] w-[130px] rounded-full z-[3]"></div>
      <div className="__moddle absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full bg-[#858585] w-[190px] rounded-full z-[2]"></div>
      <div className="__moddle absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full bg-[#bbbbbb] w-[250px] rounded-full z-[1]"></div>
    </div>
  );
}
