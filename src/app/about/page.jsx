"use client";

import Image from "next/image";
import Slider from "react-slick";
import { motion, useScroll, useTransform } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // scroll-based parallax
  const { scrollY } = useScroll();
  const headingY = useTransform(scrollY, [0, 500], [0, -100]); // heading moves slower
  

  return (
    <section
      id="about"
      className=" bg-base-100 text-base-content relative overflow-hidden"
    >
      <div className="pt-16 md:py-24">
        {/* Background Heading Parallax */}
        <motion.h2
          className="absolute text-[5rem] sm:text-[7rem] md:text-[12rem] font-extrabold text-base-300/10 top-10 left-1/2 -translate-x-1/2 select-none pointer-events-none"
          style={{ y: headingY }}
        >
          About Me
        </motion.h2>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Heading */}
          <div className="text-center mb-12">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
              }}
            >
              About Me
            </motion.h1>
            <div className="w-36 sm:w-40 md:w-56 h-1 bg-blue-400/80 mx-auto rounded"></div>
          </div>

          {/* Mobile Profile Card */}
          <div className="lg:hidden w-full z-40 items-center justify-center bg-base-100 mb-5">
            <div className="flex flex-col items-center text-center p-8 rounded backdrop-blur-2xl bg-base-300 border border-blue-400/80 shadow-[0_0_30px_rgba(30,64,175,0.1)]">
              <motion.div
                className="relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-blue-400/80 shadow-[0_0_25px_rgba(59,130,246,0.3)] mx-auto"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Image
  src="/images/my-photo.jpg"
  alt="Shakil Ahamed"
  fill
  priority
  sizes="(max-width: 768px) 176px, 224px"
  className="object-cover object-top"
/>
              </motion.div>
              <motion.h2
                className="text-2xl font-semibold tracking-wide mt-6"
                initial="hidden"
                whileInView="visible"
                variants={textVariant}
              >
                Shakil Ahamed
              </motion.h2>
              <motion.p
                className="text-sm font-bold text-blue-400/80 mt-2"
                initial="hidden"
                whileInView="visible"
                variants={textVariant}
                transition={{ delay: 0.2 }}
              >
                MERN Stack Developer 
              </motion.p>
              <motion.p
                initial="hidden"
                whileInView="visible"
                variants={textVariant}
                transition={{ delay: 0.3 }}
              >
                shakilahamed.s2000@gmail.com
              </motion.p>

              <hr className="border-base-content w-2/3 mt-5" />
              <motion.div
                className="mt-6 flex gap-4 text-base-content"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
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
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=shakilahamed.s2000@gmail.com&su=Shakil&"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <FaEnvelope size={32} className="text-base-content" />
                </a>
              </motion.div>
            </div>
          </div>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center space-y-3">
            {/* Left: Personal Details */}
            <motion.div
              className="w-full h-auto sm:h-120 p-6 sm:p-8 bg-blue-400/40 backdrop-blur-xl rounded border border-blue-400/50 shadow-[0_0_30px_rgba(59,130,246,0.3)]"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-base-content">
                Personal Details
              </h3>
              <div className="w-full text-base sm:text-base leading-loose space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <span className="font-semibold">Full Name:</span>
                  <span>Md. Shakil Ahamed</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <span className="font-semibold">Email:</span>
                  <span className="break-all">shakilahamed.s2000@gmail.com
</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <span className="font-semibold">Nationality:</span>
                  <span>Bangladeshi</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <span className="font-semibold">Languages:</span>
                  <span>English, Bangla</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <span className="font-semibold">Address:</span>
                  <span>
Habiganj, Bangladesh</span>
                </div>
              </div>
            </motion.div>

            {/* Right: Slider */}
            <motion.div
              className="w-full h-auto sm:h-120 bg-base-300 rounded p-6 sm:p-8 shadow-md"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Slider {...settings}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="leading-relaxed text-sm sm:text-base md:text-lg">
                    I’m a passionate <span className="font-bold text-blue-400/80">MERN Stack Developer </span>, dedicated to crafting visually engaging and highly functional web experiences. My core expertise lies in building dynamic and responsive interfaces with <span className="font-semibold">React</span>, managing server-side logic with <span className="font-semibold">Node.js</span> and <span className="font-semibold">Express.js</span>, and maintaining efficient data handling using <span className="font-semibold">MongoDB</span>. Recently, I’ve started exploring <span className="font-semibold">Next.js</span> to deepen my understanding of modern React frameworks, server-side rendering, and SEO-friendly development.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="leading-relaxed text-sm sm:text-base md:text-lg">
                    My coding journey began quite unexpectedly — what started as a casual curiosity, watching YouTube tutorials and experimenting with small beginner projects, soon turned into something much deeper. Over time, that early curiosity evolved into a genuine passion for creating <span className="font-semibold text-blue-400/80">scalable, maintainable, and user-centric applications</span>. Today, I see coding not just as a skill, but as a creative way to design meaningful solutions that make technology feel simple and human.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="leading-relaxed text-sm sm:text-base md:text-lg">
                    Outside of programming, I have a deep passion for journaling and scrapbooking — activities that allow me to capture memories, organize my thoughts, and express my creativity in a tangible way. This blend of creativity and reflection helps me maintain balance in life, and I often find that the patience, attention to detail, and design sense I cultivate through these practices directly influence how I approach coding and building thoughtful, visually appealing applications.
                  </p>
                </motion.div>
              </Slider>
            </motion.div>
          </div>
  {/* gitHub Stats Section */}
  <p className="text-base-content/70 mb-6 max-w-2xl mx-auto mt-8 ">
    Here’s an overview of my coding activity, favorite languages, and contribution streaks.  
    You can check my GitHub for more projects and updates.
  </p>
<motion.div
  className="mt-12 flex flex-col sm:flex-col md:flex-row items-center justify-center gap-6 flex-wrap"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  {/* gitHub stats */}
  <a
    href="https://github.com/shakilcstdev"
    target="_blank"
    rel="noopener noreferrer"
    className="flex justify-center"
  >
    <img
      src="https://github-readme-stats.vercel.app/api?username=shakilcstdev&show_icons=true&theme=transparent&count_private=true"
      alt="GitHub Stats"
      className="w-110 sm:w-full md:w-100 lg:w-130 rounded-lg shadow-lg"
    />
  </a>

  {/* gitHub top languages */}
  <a
    href="https://github.com/shakilcstdev"
    target="_blank"
    rel="noopener noreferrer"
    className="flex justify-center"
  >
    <img
      src="https://github-readme-stats.vercel.app/api/top-langs/?username=shakilcstdev&layout=compact&theme=transparent"
      alt="Top Languages"
      className="w-72 sm:w-full md:w-80 lg:w-96 rounded-lg shadow-lg"
    />
  </a>

  {/* contribution graph */}
  <a
    href="https://github.com/shakilcstdev"
    target="_blank"
    rel="noopener noreferrer"
    className="flex justify-center"
  >
    <img
      src="https://github-readme-streak-stats.herokuapp.com/?user=shakilcstdev&theme=transparent"
      alt="GitHub Streak"
      className="w-70 sm:w-full md:w-80 lg:w-96 rounded-lg shadow-lg"
    />
  </a>
</motion.div>
        </div>
      </div>
    </section>
  );
}
