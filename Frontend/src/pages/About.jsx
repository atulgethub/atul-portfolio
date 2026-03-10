import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

const About = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20">

      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          About <span className="text-purple-500">Me</span>
        </motion.h1>

        {/* About Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 text-lg text-center max-w-3xl mx-auto leading-relaxed mb-20"
        >
          I am a passionate Full Stack Developer currently pursuing a B.Tech in
          Computer Science. I enjoy building modern web applications and
          scalable backend systems using technologies like React, Node.js,
          Express, and MongoDB. I love solving complex problems and creating
          user-friendly digital experiences.
        </motion.p>

        {/* Education */}
        <h2 className="text-3xl font-semibold text-center mb-12">
          My <span className="text-purple-500">Education</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* College */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 p-8 rounded-xl shadow-lg"
          >
            <FaGraduationCap size={35} className="text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold">
              B.Tech CSE
            </h3>
            <p className="text-gray-400 mt-2">
              Lovely Professional University
            </p>
            <p className="text-gray-500 text-sm">
              2023 - Present
            </p>
            <p className="text-purple-400 mt-2">
              CGPA: 6.62
            </p>
          </motion.div>

          {/* Intermediate */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 p-8 rounded-xl shadow-lg"
          >
            <FaSchool size={35} className="text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold">
              Intermediate
            </h3>
            <p className="text-gray-400 mt-2">
              PD Academy
            </p>
            <p className="text-gray-500 text-sm">
              2020 - 2021
            </p>
            <p className="text-purple-400 mt-2">
              75%
            </p>
          </motion.div>

          {/* Matriculation */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 p-8 rounded-xl shadow-lg"
          >
            <FaSchool size={35} className="text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold">
              Matriculation
            </h3>
            <p className="text-gray-400 mt-2">
              Central Academy
            </p>
            <p className="text-gray-500 text-sm">
              2018 - 2019
            </p>
            <p className="text-purple-400 mt-2">
              62%
            </p>
          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default About;