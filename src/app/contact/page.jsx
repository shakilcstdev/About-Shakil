"use client";

import { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // EmailJS কনফিগারেশন (এনভায়রনমেন্ট ভেরিয়েবল ব্যবহার করুন)
    const serviceId = "service_7kuig9a"; 
    const templateId = "template_egq7pmo"; 
      const publicKey = "qfz8cUGMJog5fKDfn"; // ◄◄◄ কোটেশন যোগ করা হয়েছে

    // ভ্যালিডেশন চেক
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("Please enter a valid email.");
      return;
    }

    try {
      // EmailJS-এ ডাটা পাঠান (টেমপ্লেট ভেরিয়েবলের সাথে মিল রেখে)
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,        // টেমপ্লেটে {{from_name}}
          from_email: formData.email,      // টেমপ্লেটে {{from_email}}
          subject: formData.subject,        // টেমপ্লেটে {{subject}}
          message: formData.message,        // টেমপ্লেটে {{message}}
        },
        publicKey
      );

      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" }); // ফর্ম খালি করুন
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Failed to send message. Please try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center py-20 px-6 bg-base-100"
    >
      {/* Glass Panel */}
      <div className="absolute inset-0 backdrop-blur-lg pointer-events-none rounded-3xl"></div>

      {/* Heading */}
      <motion.div
        className="relative max-w-4xl text-center mb-16 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-2">
          Get in Touch
        </h2>
        <div className="w-56 sm:w-56 md:w-70 h-1 bg-blue-400/80 mx-auto rounded mb-12"></div>
        <p className="text-lg md:text-xl text-base-content dark:text-gray/90">
          Feel free to reach out for collaborations, questions, or just to say hi!
        </p>
      </motion.div>

      <motion.div
        className="relative z-10 flex flex-col lg:flex-row gap-12 w-full max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 bg-base-300 p-10 rounded shadow flex flex-col gap-5 backdrop-blur-lg transition-all duration-500"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            value={formData.name}
            onChange={handleChange}
            className="input input-bordered w-full bg-base-200 text-base-content placeholder-base-content focus:bg-base-100 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email *"
            value={formData.email}
            onChange={handleChange}
            className="input input-bordered w-full bg-base-200 text-base-content placeholder-base-content focus:bg-base-100 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="input input-bordered w-full bg-base-200 text-base-content placeholder-base-content focus:bg-base-100 focus:ring-blue-400"
          />
          <textarea
            name="message"
            placeholder="Message *"
            value={formData.message}
            onChange={handleChange}
            className="textarea textarea-bordered input input-bordered w-full bg-base-200 text-base-content placeholder-base-content focus:bg-base-100 focus:ring-blue-400"
            rows={6}
            required
          ></textarea>

          <button
            type="submit"
            className="btn bg-blue-400/50 text-base-content font-semibold w-full shadow-lg transition-all duration-300"
          >
            Send Message
          </button>

          {status && (
            <p
              className={`text-center mt-3 font-medium ${
                status.includes("success") ? "text-blue-500" : "text-red-700"
              }`}
            >
              {status}
            </p>
          )}
        </form>

        {/* Direct Contact Options */}
        <div className="flex-1 flex flex-col justify-center gap-6 bg-blue-400/40 p-10 rounded shadow backdrop-blur-lg transition-all duration-500">
          <h3 className="text-2xl font-semibold text-center text-base-content mb-4">
            Direct Contact
          </h3>
          <p className="text-center text-base-content mb-4">
            Alternatively, you can reach me via these platforms:
          </p>
          <div className="flex flex-col gap-4 items-center">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=shakilahamed.s2000@gmail.com&su=Shakil&"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 btn bg-white/30 text-base-content w-3/4 justify-center hover:bg-white/30 shadow-md transition-all duration-300"
            >
              <FaEnvelope /> Email
            </a>
            <a
              href="https://www.linkedin.com/in/shakildv/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 btn bg-white/30 text-base-content w-3/4 justify-center hover:bg-white/30 shadow-md transition-all duration-300"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://github.com/shakilcstdev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 btn bg-white/30 text-base-content w-3/4 justify-center hover:bg-white/30 shadow-md transition-all duration-300"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}