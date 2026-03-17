import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool, FaCode } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          About <span className="text-purple-500">Me</span>
        </motion.h1>

        {/* About Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 text-lg text-center max-w-3xl mx-auto leading-relaxed mb-16"
        >
          I am a passionate Full Stack Developer currently pursuing a B.Tech in
          Computer Science. I enjoy building modern web applications and
          scalable backend systems using technologies like React, Node.js,
          Express, and MongoDB. I love solving complex problems and creating
          user-friendly digital experiences.
        </motion.p>

        {/* Highlight Skills */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {["React", "Node.js", "Express", "MongoDB", "JavaScript", "Tailwind"].map((skill, i) => (
            <span
              key={i}
              className="px-4 py-1 text-sm bg-purple-600/20 text-purple-300 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Education Title */}
        <h2 className="text-3xl font-semibold text-center mb-12">
          My <span className="text-purple-500">Education</span>
        </h2>

        {/* Education Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* College */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 backdrop-blur-md border border-gray-800 p-8 rounded-xl text-center shadow-lg"
          >
            <FaGraduationCap size={40} className="text-purple-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">B.Tech CSE</h3>
            <p className="text-gray-400 mt-2">
              Lovely Professional University
            </p>
            <p className="text-gray-500 text-sm">2023 - Present</p>
            <p className="text-purple-400 mt-2">CGPA: 6.62</p>
          </motion.div>

          {/* Intermediate */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 backdrop-blur-md border border-gray-800 p-8 rounded-xl text-center shadow-lg"
          >
            <FaSchool size={40} className="text-purple-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">Intermediate</h3>
            <p className="text-gray-400 mt-2">PD Academy</p>
            <p className="text-gray-500 text-sm">2020 - 2021</p>
            <p className="text-purple-400 mt-2">75%</p>
          </motion.div>

          {/* Matriculation */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 backdrop-blur-md border border-gray-800 p-8 rounded-xl text-center shadow-lg"
          >
            <FaSchool size={40} className="text-purple-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">Matriculation</h3>
            <p className="text-gray-400 mt-2">Central Academy</p>
            <p className="text-gray-500 text-sm">2018 - 2019</p>
            <p className="text-purple-400 mt-2">62%</p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;