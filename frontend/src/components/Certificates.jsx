import React from "react";
import { motion } from "framer-motion";

export default function Certificates() {

  const certs = [
    {
      title: "Data Analysis with Python",
      org: "NPTEL"
    },
    {
      title: "Developing Soft Skill and Personality",
      org: "NPTEL"
    },
    {
      title: "introduction to Internet of Things",
      org: "NPTEL"
    }
  ];

  return (
    <section id="certificates" className="p-20 text-center">

      <motion.h2
        className="text-4xl font-bold mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Certificates 🏆
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {certs.map((c, i) => (
          <motion.div
            key={i}
            className="p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/10"
            
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}

            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold">
              {c.title}
            </h3>

            <p className="text-gray-400 mt-2">
              {c.org}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}