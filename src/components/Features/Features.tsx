"use client"

import React from "react";
import { Raleway } from "next/font/google";
import { motion } from "framer-motion";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
});

export default function Features() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full min-h-[150dvh] md:h-[150dvh] flex justify-center items-center"
    >
      <div className="rounded-[56px] w-full p-4 md:p-10 md:py-5 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className={`${raleway.className} text-[#003966] text-center text-2xl md:text-4xl leading-[34px] md:leading-[44px] font-semibold my-5 md:my-10`}
          >
            Enabling the real-time Data Business
          </motion.h2>
          <div className="relative flex flex-col md:block gap-4">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="relative p-3 rounded-[15px] w-full md:max-w-[48%] bg-gradient-to-r from-[#DFE0E6] to-[rgba(235,236,240,0)]"
            >
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
              <div className="rounded-[15px] p-3">
                <h4
                  className={`${raleway.className} font-semibold text-xl md:text-2xl text-[#212121] leading-7 md:leading-8`}
                >
                  Ingestion
                </h4>
                <p className="text-sm md:text-base leading-[18.75px] mt-2.5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Mollitia recusandae minima nulla quis, praesentium quas
                  voluptates blanditiis quam laboriosam pariatur at fuga aliquid
                  explicabo culpa corporis, incidunt ducimus? Velit, quia?
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="relative p-3 rounded-[15px] w-full md:max-w-[48%] bg-gradient-to-r from-[#DFE0E6] to-[rgba(235,236,240,0)] md:ml-auto md:bottom-[15px]"
            >
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
              <div className="rounded-[15px] p-3">
                <h4
                  className={`${raleway.className} font-semibold text-xl md:text-2xl text-[#212121] leading-7 md:leading-8`}
                >
                  Transformation
                </h4>
                <p className="text-sm md:text-base leading-[18.75px] mt-2.5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Mollitia recusandae minima nulla quis, praesentium quas
                  voluptates blanditiis quam laboriosam pariatur at fuga aliquid
                  explicabo culpa corporis, incidunt ducimus? Velit, quia?
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
