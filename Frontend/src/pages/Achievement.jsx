import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Import your local image
import pythonCert from "../assets/python.jpg";

const achievements = [
  {
    title: "Cloud Computing Certification",
    issuer: "NPTEL",
    description:
      "Completed NPTEL Cloud Computing course covering cloud architecture, virtualization, distributed systems, and real-world cloud applications.",
    link: "https://drive.google.com/file/d/1JsNxhiJSyrjgtsNA5gcznfJNOQ5G0miE/view",
    type: "drive"
  },
  {
    title: "Java Programming Certification",
    issuer: "IAMNEO",
    description:
      "Gained strong knowledge in Java programming including OOP concepts, problem-solving, and application development using Java.",
    link: "https://drive.google.com/file/d/1j-wf3L4vvrt8AYqatJ5Me0Tn7eridt0N/view",
    type: "drive"
  },
  {
    title: "Python Development Course",
    issuer: "Udemy",
    description:
      "Learned Python fundamentals, scripting, and practical applications including data handling and automation concepts.",
    link: pythonCert, // ✅ use imported image
    type: "image"
  }
];

const Achievement = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="bg-black text-white py-20 px-4 relative">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl md:text-5xl font-bold text-center mb-16">
          My <span className="text-purple-500">Achievements</span>
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {achievements.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 rounded-xl p-6 border border-gray-800 shadow-lg hover:shadow-purple-500/30 transition"
            >

              <h2 className="text-lg font-semibold text-purple-400 mb-2">
                {item.title}
              </h2>

              <p className="text-sm text-gray-400 mb-3">
                Issued by: {item.issuer}
              </p>

              <p className="text-sm text-gray-300 mb-5">
                {item.description}
              </p>

              <div className="flex gap-3">

                {/* View Certificate */}
                <a
                  href={item.type === "drive" ? item.link : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (item.type === "image") {
                      e.preventDefault();
                      setSelected(item);
                    }
                  }}
                  className="flex-1 text-center py-2 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500 hover:text-white transition"
                >
                  View Certificate
                </a>

                {/* Preview */}
                <button
                  onClick={() => setSelected(item)}
                  className="flex-1 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
                >
                  Preview
                </button>

              </div>

            </motion.div>

          ))}

        </div>
      </div>

      {/* 🔥 Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <motion.div
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
              className="bg-gray-900 p-6 rounded-xl max-w-2xl w-full relative"
            >

              {/* Close */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white"
              >
                ✕
              </button>

              <h2 className="text-xl font-semibold text-purple-400 mb-4">
                {selected.title}
              </h2>

              {/* 🔥 Conditional Preview */}
              {selected.type === "drive" ? (
                <iframe
                  src={selected.link.replace("/view", "/preview")}
                  className="w-full h-[400px] rounded-lg mb-4"
                  title="Certificate Preview"
                ></iframe>
              ) : (
                <img
                  src={selected.link}
                  alt="Certificate"
                  className="w-full h-auto rounded-lg mb-4"
                />
              )}

              <p className="text-gray-300 text-sm">
                {selected.description}
              </p>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Achievement;