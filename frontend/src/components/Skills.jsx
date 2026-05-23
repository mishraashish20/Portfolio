import React from "react";
import { motion } from "framer-motion";

export default function Skills() {

  const categories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React", "Next.js"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB"]
    },
    {
      title: "Languages",
      skills: ["Java", "Python", "C"]
    },
    {
      title: "Core",
      skills: ["Data Structures & Algorithms"]
    },
    {
      title: "Soft Skills",
      skills: ["Quick Learner", "Leadership", "Adaptability"]
    }
  ];

  return (
    <section id="skills" className="p-20 text-center">

      {/* Title */}
      <motion.h2
        className="text-4xl font-bold mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills 💻
      </motion.h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {categories.map((cat, i) => (
          <motion.div
            key={i}
            className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10 shadow-lg"
            
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}

            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(34,211,238,0.5)"
            }}
          >
            {/* Category Title */}
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">
              {cat.title}
            </h3>

            {/* Skills */}
            <div className="flex flex-wrap justify-center gap-3">
              {cat.skills.map((skill, idx) => (
                <motion.span
                  key={idx}
                  className="px-4 py-2 bg-black/40 rounded-full text-sm"
                  
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#06b6d4",
                    color: "#000"
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}