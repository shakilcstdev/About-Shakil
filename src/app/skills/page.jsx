"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";

import { FaReact, FaNodeJs, FaJs, FaGithub } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { 
  SiExpress, 
  SiMongodb, 
  SiTailwindcss, 
  SiFirebase, 
  SiNextdotjs, 
  SiTypescript, 
  SiPostgresql, 
  SiPrisma,
  SiAuth0 
} from "react-icons/si";

export default function Skills() {
  const skills = {
    Frontend: [
      { name: "React", icon: <FaReact className="text-sky-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-base-content" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    ],
    Backend: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-base-content" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      { name: "Prisma", icon: <SiPrisma className="text-teal-500" /> },
    ],
    "Auth & Tools": [
      { name: "Firebase Auth", icon: <SiFirebase className="text-yellow-400" /> },
      { name: "NextAuth", icon: <SiAuth0 className="text-blue-500" /> },
      { name: "Better Auth", icon: <SiAuth0 className="text-purple-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-base-content" /> },
      { name: "VS Code", icon: <TbBrandVscode className="text-blue-500" /> },
    ],
  };

  const ref = useRef(null);
  const [glow, setGlow] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // 0 fully out of view, 1 fully visible
      let visibility = Math.min(
        1,
        Math.max(0, (windowHeight - rect.top) / (rect.height + windowHeight))
      );
      setGlow(visibility);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // compute box-shadow based on glow intensity
  const boxShadow = `0 0 ${25 * glow}px rgba(59,130,246,${0.5 * glow})`;

  // Function to determine grid layout based on number of items
  const getGridClass = (itemCount) => {
    if (itemCount === 3) return "grid-cols-2 grid-rows-2";
    if (itemCount === 5) return "grid-cols-2 grid-rows-3";
    if (itemCount === 6) return "grid-cols-2 grid-rows-3";
    return "grid-cols-2";
  };

  // Function to determine if an item should span full width
  const getItemStyle = (items, index) => {
    if (items.length === 3 && index === 2) {
      return { gridColumn: "1 / span 2" };
    }
    if (items.length === 5 && index === 4) {
      return { gridColumn: "1 / span 2" };
    }
    if (items.length === 6 && index === 5) {
      return { gridColumn: "1 / span 2" };
    }
    return {};
  };

  return (
    <section id="skills" className="pt-20 md:pt-6 bg-base-100 text-base-content">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">Skills</h2>
        <div className="w-20 sm:w-28 md:w-40 h-1 bg-blue-400/80 mx-auto rounded"></div>
        <p className="text-base sm:text-lg md:text-xl text-base-content/70 mb-8 sm:mb-12 mt-2">
          My Tech Stack & Expertise by Categories
        </p>

        <div className="flex flex-col lg:flex-row gap-4 md:gap-6 justify-center items-stretch" ref={ref}>
          {Object.entries(skills).map(([category, items], idx) => (
            <Tilt
              key={category}
              glareEnable={true}
              glareMaxOpacity={0.2}
              glareColor="#3b82f6"
              glarePosition="all"
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              className="flex-1 flex"
            >
              {/* smooth scroll-based glow */}
              <motion.div
                style={{ boxShadow }}
                className={`w-full rounded-lg p-4 sm:p-5 md:p-6 shadow-md flex flex-col ${
                  idx === 1 ? "bg-blue-400/50" : "bg-base-300"
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.4, delay: idx * 0.2 }}
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-base-content">
                  {category}
                </h3>
                
                {/* Skills Grid - Fixed height for consistency */}
                <div className={`grid ${getGridClass(items.length)} gap-3 sm:gap-4 justify-items-center flex-1`}>
                  {items.map((skill, i) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center gap-1 sm:gap-2 bg-base-100 rounded-lg p-2 sm:p-3 shadow w-full max-w-[100px] sm:max-w-[110px] mx-auto"
                      style={getItemStyle(items, i)}
                    >
                      <div className="text-3xl sm:text-4xl">{skill.icon}</div>
                      <span className="text-xs sm:text-sm font-medium text-center break-words">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>

        {/* Achievements Section - Now with two certificates */}
        <div className="mt-12 sm:mt-16 max-w-5xl mx-auto bg-base-300 p-4 sm:p-6 md:p-10 rounded-lg shadow-[0_0_30px_rgba(59,130,246,0.2)]">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-6">
            Achievements & Certifications
          </h3>
          <div className="w-24 sm:w-32 md:w-48 h-1 bg-blue-400/80 mx-auto mb-6 sm:mb-8 rounded"></div>

          {/* Two certificates in a responsive grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Certificate 1 */}
            <div className="bg-base-100 p-4 rounded-xl shadow-lg border border-blue-400/20 hover:shadow-2xl transition-shadow">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <img
                  src="https://i.ibb.co.com/yFB7VF8z/Certificate.png"
                  alt="Programming Hero Certificate"
                  className="w-full max-w-[200px] md:max-w-[150px] rounded-lg border border-blue-400/60"
                />
                <div className="text-center md:text-left">
                  <h4 className="text-lg font-semibold text-blue-400/90">
                    Programming Hero - Web Development
                  </h4>
                  <p className="text-sm text-base-content/80 mt-2">
                    Completed MERN stack course with JavaScript, React, Node.js, MongoDB.
                  </p>
                  <a
                    href="https://i.ibb.co.com/yFB7VF8z/Certificate.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 bg-blue-400/50 px-4 py-2 rounded-lg text-sm hover:scale-105 transition"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </div>

            {/* Certificate 2 - Add your second certificate here */}
            <div className="bg-base-100 p-4 rounded-xl shadow-lg border border-blue-400/20 hover:shadow-2xl transition-shadow">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <img
                  src="https://i.ibb.co.com/4wG6HdF8/Screenshot-2026-03-04-143743.png"  // ← Replace with your image link
                  alt="Second Certificate"
                  className="w-full max-w-[200px] md:max-w-[150px] rounded-lg border border-blue-400/60"
                />
                <div className="text-center md:text-left">
                  <h4 className="text-lg font-semibold text-blue-400/90">
                    European IT Institute-Graphic Design
                  </h4>
                  <p className="text-sm text-base-content/80 mt-2">
                           Completed Graphic Design course with Adobe Photoshop, Illustrator, InDesign.
                  </p>
                  <a
                    href="https://i.ibb.co.com/4wG6HdF8/Screenshot-2026-03-04-143743.png"      // ← Replace with actual link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 bg-blue-400/50 px-4 py-2 rounded-lg text-sm hover:scale-105 transition"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}