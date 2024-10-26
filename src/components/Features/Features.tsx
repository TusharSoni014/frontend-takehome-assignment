import React from "react";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
});

export default function Features() {
  return (
    <div className="w-full h-[150dvh] flex justify-center items-center">
      <div className="rounded-[56px] w-full p-10 py-5 relative">
        <div
          className="absolute inset-0 rounded-[56px]"
          style={{
            background:
              "linear-gradient(100.7deg, rgba(255, 255, 255, 0.3) 50.68%, #7D7D7D 99.63%)",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            padding: "2px",
          }}
        />
        <div className="relative">
          <h2
            className={`${raleway.className} text-[#003966] text-center text-4xl leading-[44px] font-semibold my-10`}
          >
            Enabling the real-time Data Business
          </h2>
          <div className="relative">
            <div className="relative p-3 rounded-[15px] max-w-[48%] bg-gradient-to-r from-[#DFE0E6] to-[rgba(235,236,240,0)]">
              <div
                className="absolute inset-0 rounded-[15px]"
                style={{
                  background:
                    "linear-gradient(100.7deg, rgba(255, 255, 255, 0.3) 50.68%, #7D7D7D 99.63%)",
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "exclude",
                  padding: "2px",
                }}
              />
              <div className=" rounded-[15px] p-3">
                <h4
                  className={`${raleway.className} font-semibold text-2xl text-[#212121] leading-8`}
                >
                  Ingestion
                </h4>
                <p className="leading-[18.75px] mt-2.5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Mollitia recusandae minima nulla quis, praesentium quas
                  voluptates blanditiis quam laboriosam pariatur at fuga aliquid
                  explicabo culpa corporis, incidunt ducimus? Velit, quia?
                </p>
              </div>
            </div>
            <div className="relative p-3 rounded-[15px] max-w-[48%] bg-gradient-to-r from-[#DFE0E6] to-[rgba(235,236,240,0)] ml-auto bottom-[15px]">
              <div
                className="absolute inset-0 rounded-[15px]"
                style={{
                  background:
                    "linear-gradient(100.7deg, rgba(255, 255, 255, 0.3) 50.68%, #7D7D7D 99.63%)",
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "exclude",
                  padding: "2px",
                }}
              />
              <div className=" rounded-[15px] p-3">
                <h4
                  className={`${raleway.className} font-semibold text-2xl text-[#212121] leading-8`}
                >
                  Transformation
                </h4>
                <p className="leading-[18.75px] mt-2.5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Mollitia recusandae minima nulla quis, praesentium quas
                  voluptates blanditiis quam laboriosam pariatur at fuga aliquid
                  explicabo culpa corporis, incidunt ducimus? Velit, quia?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
