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
  { name: "React", icon: <FaReact size={40} /> },
  { name: "Node.js", icon: <FaNodeJs size={40} /> },
  { name: "Express", icon: <SiExpress size={40} /> },
  { name: "MongoDB", icon: <SiMongodb size={40} /> },
  { name: "MySQL", icon: <SiMysql size={40} /> },
  { name: "JavaScript", icon: <SiJavascript size={40} /> },
  { name: "Python", icon: <SiPython size={40} /> },
  { name: "Java", icon: <FaJava size={40} /> },
  { name: "HTML", icon: <FaHtml5 size={40} /> },
  { name: "CSS", icon: <FaCss3Alt size={40} /> },
  { name: "Tailwind", icon: <SiTailwindcss size={40} /> },
  { name: "Git", icon: <FaGitAlt size={40} /> },
  { name: "GitHub", icon: <FaGithub size={40} /> },
  { name: "Figma", icon: <SiFigma size={40} /> },
  { name: "Android", icon: <FaAndroid size={40} /> }
];

const Skills = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20">

      <div className="max-w-7xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          My <span className="text-purple-500">Skills</span>
        </motion.h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-gray-900 rounded-xl p-6 flex flex-col items-center justify-center shadow-lg hover:bg-purple-600 transition"
            >

              <div className="text-purple-400 mb-3">
                {skill.icon}
              </div>

              <p className="text-sm font-medium">
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