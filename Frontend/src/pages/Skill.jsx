import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaAndroid
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiPython,
  SiFigma
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Python", icon: <SiPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "Android", icon: <FaAndroid /> }
];

const Skills = () => {
  return (
    <section className="relative bg-black text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16"
        >
          My <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Skills</span>
        </motion.h1>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ delay: index * 0.05 }}
              className="relative group"
            >

              {/* Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-20 group-hover:opacity-60 transition"></div>

              {/* Card */}
              <div className="relative bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-xl p-6 flex flex-col items-center justify-center shadow-lg group-hover:shadow-purple-500/30 transition">

                {/* Icon */}
                <div className="text-4xl text-purple-400 group-hover:text-pink-400 mb-3 transition duration-300">
                  {skill.icon}
                </div>

                {/* Name */}
                <p className="text-sm sm:text-base font-medium tracking-wide">
                  {skill.name}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Skills;