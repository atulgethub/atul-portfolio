import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// ✅ Import your images from assets folder
import examImg from "../assets/exam-platform.png";
import aiImg from "../assets/ai-investment.png";

const projects = [
  {
    name: "ExamVerse – Online Examination Platform",
    image: examImg, // Now using actual image
    github: "https://github.com/atulgethub/Exam-Platform",
    live: "https://atulgethub-exam-platform.vercel.app",
    points: [
      "Student & Admin dashboards with role-based access",
      "JWT authentication for secure route access",
      "Full CRUD operations for exams, questions, submissions",
      "Real-time timers and proctoring alerts to reduce cheating",
      "Database indexing & query optimization for 15% faster responses"
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
    bgColor: "from-blue-500 to-purple-500" // Fallback if image fails
  },
  {
    name: "AI Investment Research Agent",
    image: aiImg, // Now using actual image
    github: "https://github.com/atulgethub/AiInvestment",
    live: "https://ai-investment-p3ib56nbw-atulyadav06390639-3745s-projects.vercel.app",
    points: [
      "AI-powered investment research using Groq's Mixtral 8x7B",
      "Instant INVEST/PASS decisions with detailed reasoning",
      "Complete CRUD operations for investment history & preferences",
      "Glassmorphism UI with real-time AI analysis & dashboards",
      "99.9% uptime via Vercel (frontend) and Render (backend)"
    ],
    tech: ["React.js", "JavaScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Groq API"],
    bgColor: "from-green-500 to-purple-500"
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

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My <span className="text-purple-500">Projects</span>
        </h1>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="relative group"
            >

              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition"></div>

              <div className="relative bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-lg h-full flex flex-col">

                {/* ✅ Image with fallback to placeholder if image fails to load */}
                <div className="overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.name}
                    onClick={() => setSelected(project)}
                    className="w-full h-48 object-cover group-hover:scale-110 transition duration-500 cursor-pointer"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div class="w-full h-48 bg-gradient-to-r ${project.bgColor} flex items-center justify-center cursor-pointer">
                          <div class="text-center px-4">
                            <div class="text-5xl mb-2">${project.name.includes("Exam") ? "📝" : "🤖"}</div>
                            <p class="text-white font-semibold text-sm opacity-90">${project.name.includes("Exam") ? "Exam Platform" : "AI Investment"}</p>
                            <p class="text-white/60 text-xs">Click to preview</p>
                          </div>
                        </div>
                      `;
                    }}
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">

                  <h2 className="text-xl font-semibold text-purple-400 mb-3">
                    {project.name}
                  </h2>

                  <ul className="text-gray-300 text-sm space-y-2 mb-5 list-disc list-inside flex-grow">
                    {project.points.slice(0, 3).map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 text-sm border border-purple-500 text-purple-400 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition"
                    >
                      <FaGithub />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 text-sm border border-green-500 text-green-400 py-2 rounded-lg hover:bg-green-600 hover:text-white transition"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  </div>

                </div>
              </div>

            </motion.div>

          ))}

        </div>
      </div>

      {/* Modal with actual images */}
      <AnimatePresence>
        {selected && (
          <motion.div
            onClick={() => setSelected(null)}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
              className="bg-gray-900 p-6 rounded-xl max-w-3xl w-full relative max-h-[90vh] overflow-y-auto"
            >

              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white text-lg"
              >
                ✕
              </button>

              <h2 className="text-xl font-semibold text-purple-400 mb-4">
                {selected.name}
              </h2>

              {/* ✅ Actual image in modal */}
              <img
                src={selected.image}
                alt={selected.name}
                className="w-full max-h-[400px] object-contain rounded-lg mb-4"
                onError={(e) => {
                  // Fallback if image fails in modal
                  e.target.style.display = 'none';
                  const parent = e.target.parentElement;
                  const fallback = document.createElement('div');
                  fallback.className = `w-full h-64 bg-gradient-to-r ${selected.bgColor} rounded-lg mb-4 flex items-center justify-center`;
                  fallback.innerHTML = `
                    <div class="text-center">
                      <div class="text-6xl mb-2">${selected.name.includes("Exam") ? "📝" : "🤖"}</div>
                      <p class="text-white font-semibold text-lg">${selected.name.includes("Exam") ? "ExamVerse Platform" : "AI Investment Agent"}</p>
                      <p class="text-white/60 text-sm">Image not found</p>
                    </div>
                  `;
                  parent.appendChild(fallback);
                }}
              />

              <ul className="text-gray-300 text-sm space-y-2 list-disc list-inside mb-4">
                {selected.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

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

              <div className="flex gap-4">
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-600 hover:text-white transition"
                >
                  <FaGithub />
                  View Code
                </a>
                <a
                  href={selected.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 border border-green-500 text-green-400 rounded-lg hover:bg-green-600 hover:text-white transition"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
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