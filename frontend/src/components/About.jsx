import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="px-6 md:px-20 py-20">

      {/* Title */}
      <motion.h2
        className="text-4xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        About Me 👨‍💻
      </motion.h2>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-300 text-lg leading-relaxed">
            I am a passionate{" "}
            <span className="text-cyan-400 font-semibold">
              MERN Stack Developer
            </span>{" "}
            who loves building modern, scalable and user-friendly web
            applications.
          </p>

          <p className="mt-4 text-gray-300">
            With a strong foundation in{" "}
            <span className="text-cyan-400">
              Data Structures & Algorithms
            </span>, I enjoy solving real-world problems and continuously
            improving my technical skills.
          </p>

          <p className="mt-4 text-gray-300">
            My goal is to grow as a developer, contribute to impactful
            projects, and build solutions that make a difference.
          </p>
        </motion.div>

        {/* RIGHT CARDS */}
        <motion.div
          className="grid grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {[
            { title: "Projects", value: "5+" },
            { title: "Technologies", value: "10+" },
            { title: "DSA Practice", value: "200+" },
            { title: "Core Stack", value: "MERN" }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="p-6 bg-white/10 backdrop-blur-lg rounded-2xl text-center border border-white/10"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 20px rgba(34,211,238,0.5)"
              }}
            >
              <h3 className="text-2xl font-bold text-cyan-400">
                {item.value}
              </h3>
              <p className="text-gray-400 mt-2">
                {item.title}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}