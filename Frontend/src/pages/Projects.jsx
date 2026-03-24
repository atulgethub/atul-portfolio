import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [selected, setSelected] = useState(null);

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
                    onClick={() => setSelected(project)}
                    className="w-full h-48 object-cover group-hover:scale-110 transition duration-500 cursor-pointer"
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

      {/* 🔥 MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            onClick={() => setSelected(null)} // ✅ click outside to close
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            {/* Prevent closing when clicking inside */}
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
              className="bg-gray-900 p-6 rounded-xl max-w-3xl w-full relative max-h-[90vh] overflow-y-auto"
            >

              {/* ❌ Close Icon */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white text-lg"
              >
                ✕
              </button>

              {/* Title */}
              <h2 className="text-xl font-semibold text-purple-400 mb-4">
                {selected.name}
              </h2>

              {/* ✅ Fixed Image (Responsive) */}
              <img
                src={selected.image}
                alt={selected.name}
                className="w-full max-h-[400px] object-contain rounded-lg mb-4"
              />

              {/* Points */}
              <ul className="text-gray-300 text-sm space-y-2 list-disc list-inside mb-4">
                {selected.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mb-4">
                {selected.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">

                {/* GitHub */}
                <a
                  href={selected.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-600 hover:text-white transition"
                >
                  View Code
                </a>

                {/* Cancel */}
                <button
                  onClick={() => setSelected(null)}
                  className="flex-1 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
                >
                  Cancel
                </button>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Projects;