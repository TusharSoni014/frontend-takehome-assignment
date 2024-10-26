import React from "react";
import Seperator from "../Seperator";
import { Raleway } from "next/font/google";
import Image from "next/image";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
});

export default function Testimonials() {
  return (
    <div className="relative w-full p-3 z-20">
      <div>
        <h1
          className={`${raleway.className} font-semibold text-center text-4xl md:text-[54px] text-black my-10`}
        >
          Testimonials
        </h1>
        <Seperator />
      </div>
      <div className="mt-12 md:mt-[100px] flex flex-col md:flex-row justify-center gap-8 md:gap-10 items-center">
        <TestimonialCard 
          imageSrc="/Person.png"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi epudiandae raesentium optio, eaque rerum!"
          author="John Doe"
        />
        <TestimonialCard 
          imageSrc="/Person.png"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi epudiandae raesentium optio, eaque rerum!"
          author="John Doe"
        />
        <TestimonialCard 
          imageSrc="/Person.png"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi epudiandae raesentium optio, eaque rerum!"
          author="John Doe"
        />
      </div>
    </div>
  );
}

const TestimonialCard = ({ imageSrc, text, author }: { imageSrc: string; text: string; author: string }) => (
  <div className="__Card bg-[#EBECF0] rounded-[30px] p-8 md:p-10 md:py-12 shadow-[9px_9px_19px_-5px_rgba(0,0,0,0.25),-8px_-8px_15px_0px_rgba(255,255,255,0.98)] w-full max-w-[300px]">
    <CircleItem src={imageSrc} />
    <p className="leading-[18.75px] mt-5 font-normal text-sm md:text-base">
      {text}
    </p>
    <p className={`${raleway.className} text-lg md:text-xl text-black font-semibold leading-7 tracking-[-0.115em] text-left mt-3`}>
      ----- {author}
    </p>
  </div>
);

const CircleItem = ({ src }: { src: string }) => (
  <div className="w-[56px] md:w-[66px] flex justify-center items-center rounded-full aspect-square border-2 border-white shadow-[0px_4px_11px_0px_rgba(0,0,0,0.25),-6px_-5px_12px_0px_rgba(255,255,255,1)] bg-gradient-to-br from-[#DCDEE4] to-[#EBECF0]">
    <Image src={src} width={36} height={36} className="md:w-[42px] md:h-[42px]" alt="logo" />
  </div>
);
