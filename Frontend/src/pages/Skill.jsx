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
    <section className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16"
        >
          My <span className="text-purple-500">Skills</span>
        </motion.h1>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ delay: index * 0.05 }}
              className="group bg-gray-900 rounded-xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-purple-500/40 hover:bg-gray-800 transition duration-300"
            >

              {/* Icon */}
              <div className="text-4xl text-purple-400 group-hover:text-purple-500 mb-3 transition">
                {skill.icon}
              </div>

              {/* Skill Name */}
              <p className="text-sm sm:text-base font-medium">
                {skill.name}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Skills;