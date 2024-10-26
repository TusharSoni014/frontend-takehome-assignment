import Image from "next/image";
import React from "react";

export default function Header() {
  const links: { href: string; label: string; isActive?: boolean }[] = [
    { href: "#", label: "Home", isActive: true },
    { href: "#", label: "Platform", isActive: false },
    { href: "#", label: "News & Events", isActive: false },
    { href: "#", label: "About Us", isActive: false },
  ];
  return (
    <header className="border-2 border-white h-[83px] rounded-full flex justify-between items-center shadow-[-6px_-7px_11px_0px_rgba(255,255,255,0.84),_8px_7px_21px_0px_rgba(0,0,0,0.15)]">
      <div className="rounded-full h-full aspect-square flex justify-center items-center overflow-hidden">
        <Image
          src="/logo.png"
          alt="logo"
          width={40}
          height={40}
          className="w-full h-full object-cover"
        />
      </div>
      <nav className="flex gap-6 justify-center items-center">
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
      <div className="mr-5">
        <button className="h-[50px] bg-[#959391] text-white rounded-full px-10 shadow-[6px_5px_10px_3px_#3636363D,_-8px_-8px_10px_0px_#FFFFFF] font-bold hover:bg-[#7a7877] transition-colors duration-300">
          REGISTER NOW
        </button>
      </div>
    </header>
  );
}
