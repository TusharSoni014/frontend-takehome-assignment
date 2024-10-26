"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [itemsVisible, setItemsVisible] = useState<boolean>(false);

  const links: { href: string; label: string; isActive?: boolean }[] = [
    { href: "#", label: "Home", isActive: true },
    { href: "#", label: "Platform", isActive: false },
    { href: "#", label: "News & Events", isActive: false },
    { href: "#", label: "About Us", isActive: false },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, width: "50px", height: "50px" }}
      animate={{ opacity: 1, width: "100%", height: "83px" }}
      transition={{ duration: 0.5, delay: 0.3 }}
      onAnimationComplete={() => setItemsVisible(true)}
      className="sticky top-[30px] w-full mx-auto max-w-7xl border-2 border-white h-[83px] rounded-full flex justify-between items-center shadow-[-6px_-7px_11px_0px_rgba(255,255,255,0.84),_8px_7px_21px_0px_rgba(0,0,0,0.15)] bg-gradient-to-r from-[#E8EAF1] from-[2.4%] to-[rgba(235,236,240,0)] to-[98.82%] backdrop-blur-md z-50"
    >
      <AnimatePresence mode="wait">
        {itemsVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full flex justify-between items-center h-full"
          >
            <div className="rounded-full h-full aspect-square flex justify-center items-center overflow-hidden">
              <Image
                src="/logo.png"
                alt="logo"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6 justify-center items-center">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-black font-semibold relative ${
                    link.isActive
                      ? "bg-[#EBECF0] p-1 px-2 rounded-full shadow-[5px_5px_2px_0px_rgba(0,0,0,0.12)_inset,_-4px_-4px_4px_0px_rgba(255,255,255,1)_inset]"
                      : "after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black hover:after:w-full after:transition-all after:duration-300"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              title="menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden mr-6 p-2 rounded-full hover:bg-[#EBECF0] transition-colors"
            >
              <div
                className={`w-6 h-0.5 bg-black mb-1.5 transition-all ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <div
                className={`w-6 h-0.5 bg-black mb-1.5 transition-all ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <div
                className={`w-6 h-0.5 bg-black transition-all ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>

            <div className="hidden md:block mr-5">
              <button className="h-[50px] bg-[#959391] text-white rounded-full px-10 shadow-[6px_5px_10px_3px_#3636363D,_-8px_-8px_10px_0px_#FFFFFF] font-bold hover:bg-[#7a7877] transition-colors duration-300">
                REGISTER NOW
              </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
                className="absolute top-full mt-4 right-0 w-[250px] bg-[#EBECF0] rounded-2xl shadow-lg p-4 md:hidden border-2 border-white"
              >
                <nav className="flex flex-col gap-4">
                  {links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className={`text-black font-semibold p-2 rounded-lg ${
                        link.isActive
                          ? "bg-white shadow-inner"
                          : "hover:bg-white/50"
                      }`}
                    >
                      {link.label}
                    </a>
                  ))}
                  <button className="w-full bg-[#959391] text-white rounded-full py-3 px-6 shadow-md font-bold hover:bg-[#7a7877] transition-colors duration-300 mt-2">
                    REGISTER NOW
                  </button>
                </nav>
              </motion.div>
            )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
