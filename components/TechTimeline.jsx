"use client";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { FaHtml5 } from "react-icons/fa";
import { SiJavascript, SiNextdotjs } from "react-icons/si";

const TechTimeline = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      offset: 120,
      easing: "ease-in-out",
    });

    // AOS  refresh kore every time jokhon scroll kora hoy or route change hoy
    const refreshAOS = () => {
      AOS.refresh();
    };

    window.addEventListener("scroll", refreshAOS);
    return () => {
      window.removeEventListener("scroll", refreshAOS);
    };
  }, []);

  const timeline = [
    {
      year: "2023",
      title: "The Beginning",
      text: "Started my web development journey by learning HTML & CSS through W3 schools — understanding the building blocks of the web and creating simple static websites.",
      icon: <FaHtml5 className="text-orange-500 text-3xl" />,
    },
    {
      year: "2024",
      title: "JavaScript & React",
      text: "Dived deep into JavaScript fundamentals and built my first React App. Learned to manage state, handle dynamic UIs, and explore modern frontend workflows.",
      icon: <SiJavascript className="text-yellow-400 text-3xl rounded-full"/>,
    },
    {
      year: "2025",
      title: "MERN & Next.js",
      text: "Explored full-stack development using the MERN stack — MongoDB, Express.js, React, and Node.js. Currently expanding my knowledge in Next.js and server-side rendering.",
      icon: <SiNextdotjs className="text-base-content text-3xl" />,
    },
  ];

  return (
    <section
      id="timeline"
      className="pt-24 bg-base-100 text-base-content relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-5 relative z-10">
        {/* heading */}
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            My Learning Journey
          </h2>
          <div className="w-56 md:w-78 h-1 bg-blue-400/80 mx-auto rounded"></div>
          <p className="mt-4 text-base md:text-lg text-base-content/70 max-w-2xl mx-auto">
            A quick look at how my web development journey has evolved over the
            years — from crafting simple layouts to exploring full-stack
            technologies.
          </p>
        </div>

        {/* timeline */}
        <div className="relative border-l-4 border-blue-400/80 ml-6 md:ml-10">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="mb-12 ml-6 relative"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="absolute -left-10 md:-left-12 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-base-200 rounded-full border-2 border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                {item.icon}
              </div>

              <div className="bg-base-300/60 backdrop-blur-lg border border-blue-400/30 rounded p-6 shadow-md hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] transition-shadow duration-300">
                <h3 className="text-lg md:text-xl font-bold text-blue-400 mb-1">
                  {item.year} — {item.title}
                </h3>
                <p className="text-sm md:text-base text-base-content/80 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechTimeline;
