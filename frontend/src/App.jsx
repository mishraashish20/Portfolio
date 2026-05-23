import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="relative overflow-hidden">
      
      {/* 🌌 Animated Gradient Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black via-slate-900 to-cyan-900 animate-pulse"></div>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  );
}

export default App;