"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Tooltip } from "react-tooltip";
import {
  FaHome,
  FaUser,
  FaTools,
  FaGraduationCap,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaClock,
} from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";

export default function Sidebar() {
  const [active, setActive] = useState("/");

  const navItems = [
    { name: "Home", href: "#home", icon: <FaHome /> },
    { name: "About", href: "#about", icon: <FaUser /> },
    { name: "Skills", href: "#skills", icon: <FaTools /> },
    { name: "Projects", href: "#projects", icon: <GoProjectSymlink /> },
    { name: "Timeline", href: "#timeline", icon: <FaClock /> },
    { name: "Education", href: "#education", icon: <FaGraduationCap /> },
    { name: "Contact", href: "#contact", icon: <FaEnvelope /> },
  ];

  // scroll spy effect — scroll korle je section viewport e ase seta active hobe
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let currentSection = "/";
      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) {
          const sectionTop = section.offsetTop - 100;
          const sectionHeight = section.offsetHeight;
          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            currentSection = item.href;
          }
        }
      });
      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // smooth scroll handler
  const handleClick = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setActive(href);
  };

  return (
    <div className="min-h-screen bg-base-100 text-base-content relative flex flex-col">
      {/* left side (desktop) */}
      <aside className="hidden md:hidden lg:flex fixed left-0 top-0 h-screen w-1/5 lg:w-1/5 z-40 items-center justify-center bg-base-100">
        <div className="flex flex-col items-center text-center p-8 rounded-3xl px-6 backdrop-blur-2xl bg-base-300 border border-blue-400/20 shadow-[0_0_30px_rgba(30,64,175,0.1)]">
          <div
                className="relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-blue-400/80 shadow-[0_0_25px_rgba(59,130,246,0.3)] mx-auto"
              >
                <Image
                  src="/images/my-photo.jpg"
                  alt="Shakil Ahamed"
                  fill
                  sizes="(max-width: 768px) 176px, 224px"
                  className="object-cover object-top"
                />
              </div>

          <h2 className="text-2xl font-semibold tracking-wide mt-6">Shakil Ahamed</h2>
          <p className="text-sm font-bold text-blue-400/80 mt-2">
            MERN Stack Developer 
          </p>
          <p>shakilahamed.s2000@gmail.com</p>
          <hr className="border-base-content w-2/3 mt-5" />
          <div className="mt-6 flex gap-4 text-base-content">
            <a
              href="https://www.linkedin.com/in/shakildv/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaLinkedin size={32} className="text-base-content" />
            </a>
            <a
              href="https://github.com/shakilcstdev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaGithub size={32} className="text-base-content" />
            </a>
            <a
              href="mailto:shakilahamed.s2000@gmail.com"
              className="hover:scale-110 transition-transform"
            >
              <FaEnvelope size={32} className="text-base-content" />
            </a>
          </div>
        </div>
      </aside>

      {/* Right side nav (desktop) */}
      <nav className="hidden md:hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 flex-col bg-blue-400/50 text-base-content rounded-2xl shadow-lg p-3 space-y-3 z-60">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            data-tooltip-id="nav-tooltip"
            data-tooltip-content={item.name}
            className={`flex items-center justify-center w-12 h-12 rounded-full transition-all ${
              active === item.href
                ? "bg-blue-400/70 scale-90 shadow-md"
                : "hover:bg-blue-400/50"
            }`}
          >
            <span className="text-lg">{item.icon}</span>
          </a>
        ))}
      </nav>

      {/* Top nav (mobile & tablet) */}
      <nav className="lg:hidden fixed top-3 left-1/2 -translate-x-1/2 flex justify-around bg-blue-400/50 text-base-content px-2 py-2 rounded-2xl shadow-lg w-[90%] max-w-sm z-70">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            data-tooltip-id="nav-tooltip"
            data-tooltip-content={item.name}
            className={`flex items-center justify-center w-12 h-12 rounded-full transition-all ${
              active === item.href
                ? "bg-blue-400/70 scale-90 shadow-md"
                : "hover:bg-blue-400/50"
            }`}
          >
            <span className="text-lg">{item.icon}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}
