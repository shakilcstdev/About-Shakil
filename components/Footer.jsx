"use client";

import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-blue-400/40 text-base-content py-12 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-evenly gap-10">
        {/*quick links */}
        <div className="flex-1">
          <h3 className="text-xl text-base-content font-semibold mb-2">Quick Links</h3>
          <ul className="flex flex-col gap-1 text-white/70 text-sm">
            <li>
              <Link href="#home" className=" transition-colors text-base-content">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className=" transition-colors text-base-content">
                About
              </Link>
            </li>
            <li>
              <Link href="#skills" className=" transition-colors text-base-content">
                Skills
              </Link>
            </li>
            <li>
              <Link href="#projects" className=" transition-colors text-base-content">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#education" className=" transition-colors text-base-content">
                Education
              </Link>
            </li>
            <li>
              <Link href="#contact" className="transition-colors text-base-content">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* contact & socials */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2 text-base-content">Contact & Socials</h3>
          <p className="text-base-content text-sm mb-2">Email me directly or connect via social links:</p>
          <div className="flex gap-4 mt-2">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=shakilahamed.s2000@gmail.com&su=Shakil&"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base-content hover:text-blue-300 transition-colors"
            >
              <FaEnvelope size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/shakildv/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base-content hover:text-blue-300 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/shakilcstdev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base-content hover:text-blue-300 transition-colors"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* bottom line */}
      <div className="border-t border-base-content mt-8 pt-4 text-center text-base-content text-sm">
        &copy; {new Date().getFullYear()} Shakil. All rights reserved.
      </div>

      {/* top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-blue-400/50 text-white p-3 rounded-full shadow-lg transition-all z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaArrowUp size={20} />
      </motion.button>
    </footer>
  );
}
