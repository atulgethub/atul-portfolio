import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

  /* Role typing animation */
  useEffect(() => {

    const current = roles[roleIndex];
    const speed = roleDeleting ? 50 : 100;

    const timer = setTimeout(() => {

      if (!roleDeleting) {

        setRoleText(current.substring(0, roleText.length + 1));

        if (roleText === current) {
          setTimeout(() => setRoleDeleting(true), 1200);
        }

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

  /* Description typing animation */
  useEffect(() => {

    const current = descriptions[descIndex];
    const speed = descDeleting ? 25 : 50;

    const timer = setTimeout(() => {

      if (!descDeleting) {

        setDescText(current.substring(0, descText.length + 1));

        if (descText === current) {
          setTimeout(() => setDescDeleting(true), 1500);
        }

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
      className="min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-6 lg:px-10 py-20"
    >

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-purple-400 text-base sm:text-lg mb-2"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent"
          >
            Atul Yadav
          </motion.h1>

          {/* ROLE TEXT */}
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl mt-4 text-gray-300 min-h-[40px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {roleText}
            <span className="animate-pulse">|</span>
          </motion.h2>

          {/* DESCRIPTION TEXT */}
          <motion.p
            className="mt-6 text-gray-400 max-w-xl mx-auto md:mx-0 text-sm sm:text-base min-h-[70px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {descText}
            <span className="animate-pulse">|</span>
          </motion.p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-purple-600 rounded-xl font-semibold"
            >
              Hire Me
            </motion.button>

            <a href={cv} download="Atul-Yadav-CV.pdf">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-purple-500 rounded-xl hover:bg-purple-500 hover:text-white transition"
              >
                Download CV
              </motion.button>
            </a>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >

          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 bg-purple-600 blur-3xl opacity-30 rounded-full"></div>

            <img
              src={atul}
              alt="Atul Yadav"
              className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-purple-500 shadow-xl"
            />

          </div>

        </motion.div>

      </div>

    </section>

  );
};

export default Home;