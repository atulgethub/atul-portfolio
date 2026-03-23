import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

// ✅ Import Images
import forumImg from "../assets/forumverse.png";
import cmsImg from "../assets/cms.png";
import studentImg from "../assets/student.png";

const projects = [
  {
    name: "ForumVerse – Forum Management System",
    image: forumImg,
    code: "https://github.com/atulgethub/Forum-Management-System",
    points: [
      "User & Admin dashboards",
      "JWT authentication",
      "CRUD for posts & comments",
      "Admin moderation tools"
    ],
    tech: ["React", "Node", "Express", "MongoDB"]
  },
  {
    name: "ContentSphere – CMS",
    image: cmsImg,
    code: "https://github.com/atulgethub/Content-Management-System",
    points: [
      "Manage website content",
      "Role-based authentication",
      "REST API with CRUD",
      "Optimized frontend-backend flow"
    ],
    tech: ["React", "Node", "Express", "MongoDB"]
  },
  {
    name: "Student Management System",
    image: studentImg,
    code: "https://github.com/atulgethub/student-management-system",
    points: [
      "Manage student records",
      "Add, update, delete students",
      "REST API integration",
      "Responsive admin dashboard"
    ],
    tech: ["React", "Node", "Express", "MongoDB"]
  }
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My <span className="text-purple-500">Projects</span>
        </h1>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="relative group"
            >

              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition"></div>

              {/* Card */}
              <div className="relative bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-lg">

                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">

                  <h2 className="text-xl font-semibold text-purple-400 mb-3">
                    {project.name}
                  </h2>

                  <ul className="text-gray-300 text-sm space-y-2 mb-5 list-disc list-inside">
                    {project.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-sm border border-purple-500 text-purple-400 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition"
                  >
                    <FaGithub />
                    View Code
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