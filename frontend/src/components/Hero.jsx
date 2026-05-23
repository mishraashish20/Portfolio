import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 gap-10"
    >
      {/* LEFT SIDE */}
      <div className="text-center md:text-left">
        
        <motion.h1
          className="text-5xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm <span className="text-cyan-400">Ashish</span> 👋
        </motion.h1>

        {/* Animated Profession */}
        <motion.p
          className="text-xl md:text-2xl text-gray-400 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          MERN Stack Developer 
        </motion.p>

        {/* Button */}
        <motion.a
          href="#projects"
          className="inline-block mt-6 px-6 py-3 bg-cyan-500 rounded-xl text-black font-semibold"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          View Projects
        </motion.a>
        <motion.a
  href="/ashishResume.pdf"
  download
  className="ml-4 inline-block mt-6 px-6 py-3 border border-cyan-400 rounded-xl text-cyan-400 font-semibold"
  whileHover={{ scale: 1.1 }}
>
  Download Resume
</motion.a>
      </div>
      

      {/* RIGHT SIDE (PROFILE IMAGE) */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20 rounded-full"></div>

        {/* Image */}
        <motion.img
          src="profile3.png" // 👉 put your image in public folder
          alt="profile"
          className="w-60 h-60 md:w-80 md:h-80 rounded-full object-cover border-4 border-cyan-400 shadow-lg"
          
          animate={{
            y: [0, -20, 0], // floating effect
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />
      </motion.div>
    </section>
  );
}
