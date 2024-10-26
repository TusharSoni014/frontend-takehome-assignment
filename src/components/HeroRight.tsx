"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import CirclePatternSVG from "./CirclePatternSVG";

export default function HeroRight() {
  const getCirclePosition = (angle: number) => {
    const radius = 200;
    const x = radius * Math.cos((angle * Math.PI) / 180);
    const y = radius * Math.sin((angle * Math.PI) / 180);
    return { x, y };
  };

  const angles = [
    {
      deg: 120,
      src: "/Cloud.png",
    },
    { deg: 160, src: "/Event Accepted.png" },
    { deg: 200, src: "/Tidal.png" },
    { deg: 240, src: "/Increase.png" },
  ];

  return (
    <div className="h-[500px] aspect-square rounded-full relative right-[-150px] shadow-[inset_-2px_-4px_4px_0px_rgba(255,255,255,1),inset_0px_3px_4px_0px_rgba(0,0,0,0.25)] ">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[470px] aspect-square rounded-full shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25),-0px_-3px_4px_0px_rgba(255,255,255,1)] flex justify-center items-center">
        <CirclePatternSVG />
      </div>

      {angles.map((angle, index) => {
        const pos = getCirclePosition(angle.deg);
        return (
          <motion.div
            key={index}
            className="absolute top-1/2 left-1/2"
            style={{
              x: pos.x - 110,
              y: pos.y - 60,
            }}
          >
            <CircleItem src={angle.src} />
          </motion.div>
        );
      })}
    </div>
  );
}

const CircleItem = ({ src }: { src: string }) => (
  <div className="w-[100px] flex justify-center items-center rounded-full aspect-square border-2 border-white shadow-[0px_4px_11px_0px_rgba(0,0,0,0.25),-6px_-5px_12px_0px_rgba(255,255,255,1)] bg-gradient-to-br from-[#DCDEE4] to-[#EBECF0]">
    <Image src={src} width={66} height={66} alt="logo" />
  </div>
);
