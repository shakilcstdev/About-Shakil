"use client";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import About from "./about/page";
import Contact from "./contact/page";
import Education from "./education/page";
import Projects from "./projects/page";
import Skills from "./skills/page";
import Loader from "../../components/Loader";
import TechTimeline from "../../components/TechTimeline";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader/>;
  return (
    <div className="min-h-screen bg-base-100 text-base-content" id="home">
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <TechTimeline/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  );
}