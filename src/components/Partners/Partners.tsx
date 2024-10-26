import React from "react";
import { Raleway } from "next/font/google";
import Seperator from "../Seperator";
import Image from "next/image";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
});

export default function Partners() {
  return (
    <div className="w-full relative p-3 mb-20">
      <div className="">
        <h1
          className={`${raleway.className} font-semibold text-center text-[54px] text-black`}
        >
          Our Partners
        </h1>
        <Seperator />
      </div>
      <div className="mt-14 flex justify-center items-center gap-14">
        <div
          className="__container p-5 rounded-[31px] border-2 border-white w-fit flex justify-center items-center flex-col gap-5"
          style={{
            background:
              "linear-gradient(94.97deg, #DCDDE2 4.48%, #E2E3E7 7.97%,#E4E6EB 44.7%)",
            boxShadow:
              "6px 5px 10px 3px rgba(54, 54, 54, 0.24), -8px -8px 10px 0px rgba(255, 255, 255, 1)",
          }}
        >
          <Image src="/partner.png" width={179} height={75} alt="partner" />
        </div>
        <div
          className="__container p-5 rounded-[31px] border-2 border-white w-fit flex justify-center items-center flex-col gap-5"
          style={{
            background:
              "linear-gradient(94.97deg, #DCDDE2 4.48%, #E2E3E7 7.97%, #E4E6EB 44.7%)",
            boxShadow:
              "6px 5px 10px 3px rgba(54, 54, 54, 0.24), -8px -8px 10px 0px rgba(255, 255, 255, 1)",
          }}
        >
          <Image src="/partner.png" width={179} height={75} alt="partner" />
        </div>
        <div
          className="__container p-5 rounded-[31px] border-2 border-white w-fit flex justify-center items-center flex-col gap-5"
          style={{
            background:
              "linear-gradient(94.97deg, #DCDDE2 4.48%, #E2E3E7 7.97%, #E4E6EB 44.7%)",
            boxShadow:
              "6px 5px 10px 3px rgba(54, 54, 54, 0.24), -8px -8px 10px 0px rgba(255, 255, 255, 1)",
          }}
        >
          <Image src="/partner.png" width={179} height={75} alt="partner" />
        </div>
      </div>
    </div>
  );
}
