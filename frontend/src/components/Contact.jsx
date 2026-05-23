import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const submit = async (e) => {
    e.preventDefault();
await axios.post("https://portfolio-1.onrender.com/api/contact", form);
    alert("Message Sent 🚀");
  };

  return (
    <footer
      id="contact"
      className="bg-black/60 backdrop-blur-lg border-t border-white/10 px-6 md:px-20 py-16"
    >
      {/* TOP SECTION */}
      <div className="grid md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Let's Connect 🚀
          </h2>

          <p className="text-gray-400 mb-6">
            I'm open to opportunities, collaborations, or just a friendly chat.
          </p>

          {/* SOCIAL LINKS */}
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/ashish-mishra-270786282/" className="hover:text-cyan-400">LinkedIn</a>
            <a href="https://github.com/mishraashish20" className="hover:text-cyan-400">GitHub</a>
            <a href="mailto:mishraashish13579@gmail.com" className="hover:text-cyan-400">Email</a>
          </div>
        </motion.div>

        {/* RIGHT SIDE (FORM) */}
        <motion.form
          onSubmit={submit}
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg bg-white/10 border border-white/10 focus:outline-none focus:border-cyan-400"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg bg-white/10 border border-white/10 focus:outline-none focus:border-cyan-400"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            className="p-3 rounded-lg bg-white/10 border border-white/10 focus:outline-none focus:border-cyan-400"
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />

          <motion.button
            type="submit"
            className="bg-cyan-500 text-black font-semibold py-3 rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>

      </div>

      {/* BOTTOM SECTION */}
      <motion.div
        className="text-center text-gray-500 mt-12 border-t border-white/10 pt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        © {new Date().getFullYear()} Ashish Mishra. All rights reserved.
      </motion.div>
    </footer>
  );
}
