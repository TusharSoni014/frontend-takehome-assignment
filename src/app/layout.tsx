import type { Metadata } from "next";
import "./globals.css";

import { Roboto } from "next/font/google";

export const metadata: Metadata = {
  title: "Web3",
  description: "Web3 Data Studio",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased bg-[#EBECF0] text-[#555770] max-w-7xl mx-auto overflow-x-hidden  ${roboto.className}`}
      >
        {children}
      </body>
    </html>
  );
}
