import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Student Management System",
    desc: "A full stack CRUD application to manage student records with React, Node.js, Express and MongoDB.",
    img: "/projects/student.png",
    code: "https://github.com/yourgithub/student-management",
    live: "https://student-management.vercel.app"
  },
  {
    name: "AI Interview Platform",
    desc: "A platform where students practice technical interviews with AI generated questions and skill tests.",
    img: "/projects/interview.png",
    code: "https://github.com/yourgithub/ai-interview",
    live: "https://ai-interview.vercel.app"
  },
  {
    name: "Tutorial Website",
    desc: "A learning platform where students can access programming tutorials, notes and practice tests.",
    img: "/projects/tutorial.png",
    code: "https://github.com/yourgithub/tutorial-site",
    live: "https://tutorial-site.vercel.app"
  },
  {
    name: "Ecommerce T-Shirt Store",
    desc: "An ecommerce website where users can buy custom designed T-shirts and hoodies online.",
    img: "/projects/store.png",
    code: "https://github.com/yourgithub/tshirt-store",
    live: "https://tshirt-store.vercel.app"
  }
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-black text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-10"
    >
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16">
          My <span className="text-purple-500">Projects</span>
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg"
            >

              {/* Image */}
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-44 sm:h-48 md:h-52 object-cover"
              />

              {/* Content */}
              <div className="p-5 sm:p-6">

                <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                  {project.name}
                </h2>

                <p className="text-gray-400 text-sm sm:text-base mb-5">
                  {project.desc}
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">

                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center px-4 py-2 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500 hover:text-white transition"
                  >
                    Show Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
                  >
                    Live Preview
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;