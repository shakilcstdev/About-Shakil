"use client";

import { ThemeProvider } from "@/contexts/ThemeContext";
import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import ThemeToggle from "../../components/ThemeToggle";


export default function ClientLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex relative">
        {/* Sidebar */}
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* Main content */}
        <main
          className={`flex-1 transition-all duration-300 
          ${
            "w-full lg:ml-[20%]"
          }`}
        >
          {children}
        </main>

        {/* Theme toggle button */}
        <div className="fixed top-6 right-6 z-50">
          <ThemeToggle />
        </div>
      </div>
    </ThemeProvider>
  );
}
