"use client";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 120,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  const educationData = [
    {
      degree: "Diploma-in Engineering",
trade: "Computer Science and Technology",
institution: "HAbiganj Polytechnic Institute",
session: "2021/22",
duration: "Feb 2022 – 2026",
status: "Completed"
    },
    {
      degree: "(SSC)Secondary School Certificate(Vocational)",
      trade: "Genarel Electrical Works",
      institution: "Habiganj Technical School And College,Habiganj",
      year: "2021",
    },
    {
      degree: "Junir Dakhil Certificate(JDC)",
      institution: "Salehabad M.s.Dakhil Madrasha,habiganj",
      year: "2018",
    },
  ];

  return (
    <section
      id="education"
      className="bg-base-100 text-base-content pt-20 flex items-center justify-center"
    >
      <div className="max-w-5xl mx-auto px-6 w-full">
        {/* heading */}
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-2"
          data-aos="fade-up"
        >
          Education
        </h2>
        <div
          className="w-40 sm:w-40 md:w-56 h-1 bg-blue-400/80 mx-auto rounded mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        ></div>

        {/* timeline */}
        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-5 top-0 w-1 bg-blue-400/80 h-full"></div>

          <div className="flex flex-col gap-10">
            {educationData.map((edu, i) => (
              <div
                key={i}
                className="flex items-start gap-6 relative pl-10"
                data-aos="fade-up"
                data-aos-delay={i * 200}
              >
                {/* icon */}
                <div className="absolute -left-1 top-2 bg-blue-400/80 rounded w-5 h-5 flex items-center justify-center">
                  <FaGraduationCap className="text-white w-3 h-3" />
                </div>

                {/* edu card */}
                <div className="bg-base-300 rounded p-6 border-1 border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.1)] hover:shadow-lg transition-all duration-300 flex-1 min-h-[180px] flex flex-col justify-center">
                  <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                  <p className="text-base-content/80 font-medium">
                    {edu.institution}
                  </p>

                  {edu.year && (
                    <p className="text-base-content/70 mt-1">
                      <span className="font-medium">Year:</span> {edu.year}
                    </p>
                  )}
                  {edu.duration && (
                    <p className="text-base-content/70 mt-1">
                      <span className="font-medium">Duration:</span>{" "}
                      {edu.duration} |{" "}
                      <span className="font-medium">Expected Graduation:</span>{" "}
                      {edu.expected}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* note */}
        <div
          className="mt-10 text-base-content/70 text-sm leading-relaxed text-center"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <p>
            While my academic background is in{" "}
            <span className="font-medium">Food and Nutrition</span>, my strong
            interest in technology inspired me to explore{" "}
            <span className="font-medium">web development</span> and build
            full-stack projects alongside my studies.
          </p>
        </div>
      </div>
    </section>
  );
}
