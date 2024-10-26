"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import CirclePatternSVG from "./CirclePatternSVG";
import { useState, useEffect } from "react";

export default function HeroRight() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getCirclePosition = (angle: number) => {
    const isMobile = windowWidth < 768;
    const radius = isMobile ? 150 : 200;
    const x = radius * Math.cos((angle * Math.PI) / 180);
    const y = radius * Math.sin((angle * Math.PI) / 180);
    return { x, y };
  };

  const angles = [
    {
      deg: windowWidth < 768 ? 90 : 120,
      src: "/Cloud.png",
    },
    {
      deg: windowWidth < 768 ? 180 : 160,
      src: "/Event Accepted.png",
    },
    {
      deg: windowWidth < 768 ? 270 : 200,
      src: "/Tidal.png",
    },
    {
      deg: windowWidth < 768 ? 360 : 240,
      src: "/Increase.png",
    },
  ];

  return (
    <div
      className={`${
        windowWidth < 768 ? "h-[380px]" : "h-[500px]"
      } aspect-square rounded-full relative 
      ${windowWidth < 768 ? "right-0 mx-auto" : "right-[-200px]"} 
      shadow-[inset_-2px_-4px_4px_0px_rgba(255,255,255,1),inset_0px_3px_4px_0px_rgba(0,0,0,0.25)]`}
    >
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        ${windowWidth < 768 ? "h-[350px]" : "h-[480px]"} 
        aspect-square rounded-full shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25),-0px_-3px_4px_0px_rgba(255,255,255,1)] 
        flex justify-center items-center`}
      >
        <CirclePatternSVG />
      </div>

      {angles.map((angle, index) => {
        const pos = getCirclePosition(angle.deg);
        return (
          <motion.div
            key={index}
            className="absolute top-[51%] left-[51%]"
            style={{
              x: pos.x - (windowWidth < 768 ? 40 : 110),
              y: pos.y - (windowWidth < 768 ? 40 : 60),
            }}
          >
            <CircleItem src={angle.src} isMobile={windowWidth < 768} />
          </motion.div>
        );
      })}
    </div>
  );
}

const CircleItem = ({ src, isMobile }: { src: string; isMobile: boolean }) => (
  <div
    className={`${isMobile ? "w-[70px]" : "w-[100px]"} 
    flex justify-center items-center rounded-full aspect-square border-2 border-white 
    shadow-[0px_4px_11px_0px_rgba(0,0,0,0.25),-6px_-5px_12px_0px_rgba(255,255,255,1)] 
    bg-gradient-to-br from-[#DCDEE4] to-[#EBECF0]`}
  >
    <Image
      src={src}
      width={isMobile ? 40 : 66}
      height={isMobile ? 40 : 66}
      alt="logo"
    />
  </div>
);
