import React from "react";
import { motion } from "framer-motion";

export default function Projects() {

  const projects = [
    {
      title: "Real-Time Ambulance Tracker",
      desc: "Track ambulances live using GPS & maps for emergency response.",
      tech: "React, Node, MongoDB, Socket.io"
    },
    {
      title: "Notes Generator AI  web app",
      desc: "AI-powered app to generate study notes.",
      tech: "MERN Stack"
    },
    {
      title: "Hostel Management System",
      desc: "Manage hostel bookings, student records & facilities efficiently.",
      tech: "MERN Stack, Express, MongoDB"
    },
    {
      title: "Garbage Management System",
      desc: "Efficiently manage and track garbage collection routes and schedules.",
      tech: "MERN Stack, Express, MongoDB"
    }
  ];

  return (
    <section id="projects" className="p-20 text-center">
      
      <motion.h2
        className="text-4xl mb-12 font-bold"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects 
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="p-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg border border-white/10 cursor-pointer"
            
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}

            whileHover={{
              scale: 1.05,
              rotate: 1
            }}
          >
            <h3 className="text-xl font-semibold mb-2">
              {p.title}
            </h3>

            <p className="text-gray-300 mb-4">
              {p.desc}
            </p>

            <span className="text-sm text-cyan-400">
              {p.tech}
            </span>
          </motion.div>
        ))}

      </div>
    </section>
  );
}