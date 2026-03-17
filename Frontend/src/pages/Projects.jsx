import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "ForumVerse – Forum Management System",
    code: "https://github.com/atulgethub/Forum-Management-System",
    points: [
      "User & Admin dashboards",
      "JWT authentication",
      "CRUD for posts & comments",
      "Admin moderation tools"
    ],
    tech: "React, Node, Express, MongoDB"
  },
  {
    name: "ContentSphere – CMS",
    code: "https://github.com/atulgethub/Content-Management-System",
    points: [
      "Manage website content",
      "Role-based authentication",
      "REST API with CRUD",
      "Optimized frontend-backend flow"
    ],
    tech: "React, Node, Express, MongoDB"
  },
  {
    name: "Student Management System",
    code: "https://github.com/atulgethub/student-management-system",
    points: [
      "Manage student records",
      "Add, update, delete students",
      "REST API integration",
      "Responsive admin dashboard"
    ],
    tech: "React, Node, Express, MongoDB"
  }
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-black text-white py-16 px-4"
    >
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-purple-500">Projects</span>
        </h1>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-900 p-5 rounded-lg shadow-md"
            >

              {/* Title */}
              <h2 className="text-lg font-semibold text-purple-400 mb-3">
                {project.name}
              </h2>

              {/* Points */}
              <ul className="text-gray-300 text-sm space-y-1 mb-4 list-disc list-inside">
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {/* Tech */}
              <p className="text-xs text-gray-400 mb-4">
                <span className="text-white font-medium">Tech:</span> {project.tech}
              </p>

              {/* Button */}
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-sm border border-purple-500 text-purple-400 py-2 rounded-md hover:bg-purple-500 hover:text-white transition"
              >
                View Code
              </a>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;