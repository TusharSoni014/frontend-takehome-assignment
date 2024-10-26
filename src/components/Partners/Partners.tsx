"use client"

import React from "react";
import { Raleway } from "next/font/google";
import Seperator from "../Seperator";
import Image from "next/image";
import { motion } from "framer-motion";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
});

export default function Partners() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="w-full relative p-3 mb-10 md:mb-20"
    >
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className={`${raleway.className} font-semibold text-center text-4xl md:text-[54px] text-black my-10`}
        >
          Our Partners
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Seperator />
        </motion.div>
      </div>
      <div className="mt-8 md:mt-14 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-14">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 + index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="__container p-4 md:p-5 rounded-[31px] border-2 border-white w-fit flex justify-center items-center flex-col gap-5"
            style={{
              background: "linear-gradient(94.97deg, #DCDDE2 4.48%, #E2E3E7 7.97%, #E4E6EB 44.7%)",
              boxShadow: "6px 5px 10px 3px rgba(54, 54, 54, 0.24), -8px -8px 10px 0px rgba(255, 255, 255, 1)",
            }}
          >
            <Image 
              src="/partner.png" 
              width={179} 
              height={75} 
              alt="partner"
              className="w-[140px] md:w-[179px] h-auto" 
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
