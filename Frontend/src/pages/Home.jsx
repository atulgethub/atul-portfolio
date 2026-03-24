import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import atul from "../assets/Atulp.jpeg";
import cv from "../assets/12315040_CV.pdf";

const Home = () => {

  const roles = ["Web Developer", "App Developer"];

  const descriptions = [
    "I design and build modern web applications with beautiful UI.",
    "I create powerful mobile apps with smooth performance.",
    "I focus on scalable and user-friendly digital experiences."
  ];

  const [roleText, setRoleText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleDeleting, setRoleDeleting] = useState(false);

  const [descText, setDescText] = useState("");
  const [descIndex, setDescIndex] = useState(0);
  const [descDeleting, setDescDeleting] = useState(false);

  const [showCV, setShowCV] = useState(false); // ✅ CV Modal

  /* Role typing */
  useEffect(() => {
    const current = roles[roleIndex];
    const speed = roleDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!roleDeleting) {
        setRoleText(current.substring(0, roleText.length + 1));
        if (roleText === current) setTimeout(() => setRoleDeleting(true), 1200);
      } else {
        setRoleText(current.substring(0, roleText.length - 1));
        if (roleText === "") {
          setRoleDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [roleText, roleDeleting, roleIndex]);

  /* Description typing */
  useEffect(() => {
    const current = descriptions[descIndex];
    const speed = descDeleting ? 25 : 50;

    const timer = setTimeout(() => {
      if (!descDeleting) {
        setDescText(current.substring(0, descText.length + 1));
        if (descText === current) setTimeout(() => setDescDeleting(true), 1500);
      } else {
        setDescText(current.substring(0, descText.length - 1));
        if (descText === "") {
          setDescDeleting(false);
          setDescIndex((prev) => (prev + 1) % descriptions.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [descText, descDeleting, descIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-600 opacity-20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center z-10">

        {/* LEFT */}
        <div className="text-center md:text-left">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-purple-400 text-lg mb-2"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent"
          >
            Atul Yadav
          </motion.h1>

          {/* Role */}
          <h2 className="text-2xl md:text-3xl mt-4 text-gray-300 min-h-[40px]">
            {roleText}
            <span className="animate-pulse">|</span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-gray-400 max-w-xl mx-auto md:mx-0 min-h-[70px]">
            {descText}
            <span className="animate-pulse">|</span>
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-purple-600 rounded-xl font-semibold shadow-lg hover:bg-purple-700 transition"
            >
              Hire Me
            </motion.button>

            {/* Download */}
            <a href={cv} download>
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-purple-500 rounded-xl hover:bg-purple-500 hover:text-white transition"
              >
                Download CV
              </motion.button>
            </a>

            {/* ✅ Preview CV */}
            <motion.button
              onClick={() => setShowCV(true)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gray-800 border border-purple-500 rounded-xl hover:bg-purple-500 hover:text-white transition"
            >
              Preview CV
            </motion.button>

          </div>

          {/* Social Icons */}
          <div className="flex gap-5 mt-8 justify-center md:justify-start">
            <a href="https://github.com/atulgethub" target="_blank">
              <FaGithub className="text-2xl hover:text-purple-400 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank">
              <FaLinkedin className="text-2xl hover:text-purple-400 transition" />
            </a>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex justify-center"
        >
          <div className="relative">

            <div className="absolute inset-0 rounded-full border-4 border-purple-500 animate-pulse blur-sm"></div>

            <img
              src={atul}
              alt="Atul"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-purple-500 shadow-2xl"
            />

          </div>
        </motion.div>

      </div>

      {/* 🔥 CV MODAL */}
      <AnimatePresence>
        {showCV && (
          <motion.div
            onClick={() => setShowCV(false)}
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
              className="bg-gray-900 p-4 rounded-xl max-w-4xl w-full relative max-h-[90vh]"
            >

              {/* Close */}
              <button
                onClick={() => setShowCV(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white text-lg"
              >
                ✕
              </button>

              {/* PDF Preview */}
              <iframe
                src={cv}
                title="CV Preview"
                className="w-full h-[70vh] rounded-lg mb-4"
              ></iframe>

              {/* Buttons */}
              <div className="flex gap-4">

                <a
                  href={cv}
                  download
                  className="flex-1 text-center py-2 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-600 hover:text-white transition"
                >
                  Download
                </a>

                <button
                  onClick={() => setShowCV(false)}
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

export default Home;