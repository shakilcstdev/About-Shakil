"use client";

import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

export default function PersonalitySection() {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: false,
    });
  }, []);

  const hobbies = [
    {
      title: "Journaling",
      image: "https://i.ibb.co.com/G3VPd7nt/journaling.png",
    },
    {
      title: "Journaling",
      image: "https://i.ibb.co.com/6RPY8T6w/journaling2.png",
    },
  ];

  return (
    <section id="personality" className="bg-base-100 text-base-content pt-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-center"
          data-aos="fade-up"
        >
          Personality & Hobbies
        </h2>
        <div
          className="w-40 sm:w-96 h-1 bg-blue-400/80 mx-auto rounded mb-12 "
          data-aos="fade-up"
          data-aos-delay="100"
        ></div>

        {/* Description */}
        <p
          className="text-center text-base-content/80 mb-12 text-lg"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Beyond coding, I love exploring my creative side through{" "}
          <span className="font-semibold text-blue-400/80">journaling</span>. This hobby helps me stay detail-oriented, creative, and bring a unique perspective to my work as a developer.
        </p>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {hobbies.map((hobby, i) => (
            <div
              key={i}
              className="rounded overflow-hidden shadow-lg bg-base-300"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <img
                src={hobby.image}
                alt={hobby.title}
                className="w-full h-64 object-cover"
              />
              <p className="text-center mt-2 text-sm text-base-content/70">{hobby.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
