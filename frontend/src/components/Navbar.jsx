import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "About", "Skills", "Projects", "Certificates", "Contact"];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 px-6 md:px-20 py-4 flex justify-between items-center transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
    >
      {/* LOGO */}
      <h1 className="text-xl font-bold text-cyan-400">
        Ashish.dev
      </h1>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex gap-8">
        {navLinks.map((link, i) => (
          <a
            key={i}
            href={`#${link.toLowerCase()}`}
            className="relative text-gray-300 hover:text-cyan-400 transition"
          >
            {link}

            {/* underline animation */}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 hover:w-full"></span>
          </a>
        ))}
      </div>

      {/* MOBILE MENU BUTTON */}
      <div
        className="md:hidden cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <motion.div
          className="absolute top-16 right-6 bg-black/90 p-6 rounded-xl flex flex-col gap-4 md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-cyan-400"
            >
              {link}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}