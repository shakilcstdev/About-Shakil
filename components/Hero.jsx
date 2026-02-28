"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiExpress } from "react-icons/si";

export default function Hero() {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 30 }).map(() => ({
      x: Math.random() * 100,
      size: Math.random() * 12 + 6,
      delay: Math.random() * 5,
      duration: Math.random() * 6 + 6,
    }));
    setBubbles(generated);
  }, []);

  const floatingIcons = [
    { icon: <FaReact className="text-sky-400 text-3xl" />, x: "10%", y: "20%", delay: 0 },
    { icon: <FaNodeJs className="text-green-500 text-3xl" />, x: "80%", y: "25%", delay: 1 },
    { icon: <SiMongodb className="text-green-600 text-3xl" />, x: "15%", y: "70%", delay: 2 },
    { icon: <SiNextdotjs className="text-base-content text-3xl" />, x: "75%", y: "75%", delay: 3 },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center  text-center overflow-hidden bg-base-100 pt-24 sm:pt-28 pb-3">
      <div className="max-w-5xl mx-auto">
        {/* only client-side e bubble render hoy */}
        {bubbles.length > 0 &&
          bubbles.map((b, i) => (
            <motion.div
              key={i}
              className="absolute z-80 rounded-full bg-blue-400/50 blur-xs "
              style={{
                left: `${b.x}%`,
                bottom: "-10px",
                width: `${b.size}px`,
                height: `${b.size}px`,
              }}
              animate={{ y: ["0%", "-100vh"], opacity: [0.2, 1, 0.2] }}
              transition={{
                duration: b.duration,
                repeat: Infinity,
                delay: b.delay,
                ease: "easeInOut",
              }}
            />
          ))}

        {/* floating tech icons */}
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{ top: item.y, left: item.x }}
            animate={{ y: ["0%", "-10%", "0%"] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut",
            }}
          >
            {item.icon}
          </motion.div>
        ))}

        {/* hero text */}
        <div className="relative z-10 max-w-2xl px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I’m <span className="text-blue-400/80">Shakil Ahamed</span>
          </motion.h1>

          {/* typing animation */}
          <TypeAnimation
            sequence={[
  "Frontend Developer", 2000,
  "Backend Developer", 2000,
  "MERN Stack Developer", 2000,
  "Node.js & Express Developer", 2000,
  "TypeScript | Prisma | PostgreSQL", 2000,
  
]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="text-2xl md:text-3xl font-semibold text-base-content/80 mb-6"
          />

          <motion.p
            className="text-lg md:text-xl text-base-content leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            I’m a <span className="font-semibold">MERN Stack Developer</span> passionate about building modern, responsive, and user-centric web applications that help businesses grow their online presence. I work with technologies like React, Next.js, Node.js, Express.js, Prisma, and PostgreSQL to ensure performance, scalability, and reliability.
          </motion.p>

          {/* social icons */}
          <motion.div
            className="hidden md:flex lg:flex justify-center gap-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <a
              href="https://www.linkedin.com/in/shakildv/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaLinkedin size={32} className="text-blue-400/80" />
            </a>
            <a
              href="https://github.com/shakilcstdev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaGithub size={32} className="text-blue-400/80" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=shakilahamed.s2000@gmail.com&su=Shakil&"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaEnvelope size={32} className="text-blue-400/80" />
            </a>
          </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
  {/* Download Resume Button */}
  <a
    href="/resume.pdf"
    download
    className="btn bg-blue-400/50 text-base-content px-6 sm:px-8 py-2 sm:py-3 rounded shadow-lg hover:scale-105 transition-transform"
  >
    Download Resume
  </a>

  {/* explore my Works button */}
  <button
    onClick={() => {
      const section = document.getElementById("projects");
      if (section) {
        const yOffset = -20; 
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }}
    className="btn bg-transparent border border-blue-400/60 text-blue-400/90 font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded shadow-lg hover:bg-blue-400/50 hover:text-base-content transition-all"
  >
    Explore my Works
  </button>
</div>
        </div>
      </div>
    </section>
  );
}
