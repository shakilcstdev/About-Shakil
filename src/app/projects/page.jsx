"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Dialog, DialogPanel, DialogBackdrop } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai"; 

const Slider = dynamic(() => import("react-slick"), { ssr: false });
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch("/data/projectsData.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
  };

  return (
    <section id="projects" className=" bg-base-100 text-base-content ">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold pt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          Projects
        </motion.h2>
        <div className="w-36 sm:w-36 md:w-46 h-1 bg-blue-400/80 mx-auto rounded mt-4"></div>
        <p className="text-lg text-base-content/70 pt-4">
          A glimpse of the real-world projects I’ve built.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className="group relative bg-base-300 pb-8 md:pb-3 rounded shadow cursor-pointer overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedProject(project)}
            >
              {/* slider inside card */}
              <div className="rounded overflow-hidden">
                <Slider {...sliderSettings}>
                  {project.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={project.name + idx}
                      className="w-full h-56 object-cover"
                      loading="lazy"
                    />
                  ))}
                </Slider>
              </div>

              {/* overlay for large screens only */}
              <div className="absolute inset-0 hidden lg:flex bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 items-center justify-center">
                <button className="btn bg-base-100 text-base-content px-6">
                  View Details
                </button>
              </div>

              {/* button always visible on small screens */}
              <div className="lg:hidden absolute -bottom-1 left-1/2 -translate-x-1/2 z-10 pb-3">
                <button
                  className="btn btn-sm btn-outline"
                  onClick={() => setSelectedProject(project)}
                >
                  View Details
                </button>
              </div>

              <div className="p-5 text-left">
                <h3 className="font-semibold text-xl mb-2">{project.name}</h3>
                <p className="text-sm text-base-content/70 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <Dialog
          open={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          className="relative z-50"
        >
          <DialogBackdrop className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
          <div className="fixed inset-0 flex items-center justify-center p-4 mt-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="bg-base-200 text-base-content rounded p-6 max-w-2xl w-full shadow-xl overflow-y-auto max-h-[90vh] relative"
            >
              {/* Close button */}
              <button
                className="absolute top-8 right-2 text-gray-500 hover:text-base-content"
                onClick={() => setSelectedProject(null)}
              >
                <AiOutlineClose className="w-6 h-6" />
              </button>

              <DialogPanel>
                <h3 className="text-2xl font-bold mb-3">{selectedProject.name}</h3>

                <Slider {...sliderSettings} className="rounded overflow-hidden mb-5">
                  {selectedProject.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${selectedProject.name}-${idx}`}
                      className="w-full h-64 object-cover"
                    />
                  ))}
                </Slider>

                <p className="mb-4">{selectedProject.description}</p>
                <div className="text-left space-y-3">
                  <div>
                    <h4 className="font-semibold"> Features:</h4>
                    <ul className="list-disc list-inside text-sm text-base-content/80">
                      {selectedProject.features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold"> Challenges:</h4>
                    <p className="text-sm text-base-content/80">
                      {selectedProject.challenges}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Learnings:</h4>
                    <p className="text-sm text-base-content/80">
                      {selectedProject.learnings}
                    </p>
                  </div>
                  {selectedProject.benefits && (
                    <div>
                      <h4 className="font-semibold">Benefits:</h4>
                      <ul className="list-disc list-inside text-sm text-base-content/80">
                        {selectedProject.benefits.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="flex justify-between mt-6">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline"
                  >
                    GitHub
                  </a>
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-blue-400/80 text-base-content px-6"
                  >
                    Live Demo
                  </a>
                </div>
              </DialogPanel>
            </motion.div>
          </div>
        </Dialog>
      )}
    </section>
  );
}
