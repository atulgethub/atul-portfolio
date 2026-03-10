import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {

  const [menu, setMenu] = useState(false);

  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" }
  ];

  return (
    <div className="w-full bg-black/80 backdrop-blur-md text-white fixed top-0 z-50">

      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-2">

        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(168,85,247)"
          }}
          className="text-2xl md:text-3xl font-semibold tracking-wide bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent cursor-pointer"
        >
          Atul Yadav
        </motion.h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8">

          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              className="relative group"
              whileHover={{ scale: 1.1 }}
            >

              <a
                href={link.path}
                className="text-gray-300 hover:text-purple-400 transition duration-300"
              >
                {link.name}
              </a>

              <span
                className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"
              />

            </motion.li>
          ))}

        </ul>

        {/* Hire Me Button */}
        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 12px rgba(168,85,247,0.8)"
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="hidden md:block px-6 py-3 rounded-2xl border border-purple-400 text-purple-400 font-semibold hover:bg-purple-500 hover:text-white transition duration-300"
        >
          Hire Me
        </motion.button>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMenu(!menu)}
        >
          ☰
        </div>

      </div>

      {/* Mobile Menu */}
      {menu && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="md:hidden w-full bg-black text-center pb-6"
        >

          <ul className="flex flex-col gap-6 text-lg mt-4">

            {navLinks.map((link, index) => (

              <motion.li
                key={index}
                whileHover={{ scale: 1.1 }}
              >

                <a
                  href={link.path}
                  onClick={() => setMenu(false)}
                  className="hover:text-purple-400 transition"
                >
                  {link.name}
                </a>

              </motion.li>

            ))}

          </ul>

          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 12px rgba(168,85,247,0.8)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 px-6 py-2 rounded-lg mt-4"
          >
            Hire Me
          </motion.button>

        </motion.div>
      )}

    </div>
  );
};

export default Navbar;