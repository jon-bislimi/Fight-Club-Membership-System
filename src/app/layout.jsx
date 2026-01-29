"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <html lang="en">
      <body
        className={`${inter.className} flex h-screen overflow-hidden bg-gray-100`}
      >
        <Sidebar isOpen={!isOpen} />
        <div className="flex-1 flex flex-col min-w-0">
          <Navbar toggleSidebar={toggleSidebar} />
          <main className="p-2 sm:p-4 md:p-6 bg-gray-100 flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
