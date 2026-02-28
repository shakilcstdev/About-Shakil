"use client";
import { useTheme } from "@/contexts/ThemeContext";
import { useEffect, useState } from "react";
import { ImSun } from "react-icons/im";
import { GoMoon } from "react-icons/go";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    // theme change hole rotate hobe
    setRotation(prev => prev + 360);
  }, [theme]);

  return (
    <button
      onClick={toggleTheme}
      className="fixed right-6 bg-blue-400/40 p-2 rounded-full  bottom-24 text-base-content transition-all duration-500 z-50 hover:scale-110"
      title="Toggle Theme"
    >
      {theme === "light" ? <ImSun className="text-yellow-600 font-extrabold" size={30} style={{ transform: `rotate(${rotation}deg)` }}/> : <GoMoon className="text-yellow-500 font-extrabold" size={30} style={{ transform: `rotate(${rotation}deg)` }}/>}
    </button>
  );
}