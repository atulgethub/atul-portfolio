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
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/80 backdrop-blur-md text-white">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 sm:px-8 lg:px-10 py-4">

        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{
            scale: 1.08,
            textShadow: "0px 0px 10px rgb(168,85,247)"
          }}
          className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent cursor-pointer"
        >
          Atul Yadav
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm lg:text-base">

          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              className="relative group"
              whileHover={{ scale: 1.1 }}
            >
              <a
                href={link.path}
                className="text-gray-300 hover:text-purple-400 transition"
              >
                {link.name}
              </a>

              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>

            </motion.li>
          ))}

        </ul>

        {/* Desktop Button */}
        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 12px rgba(168,85,247,0.8)"
          }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block px-5 py-2 rounded-xl border border-purple-400 text-purple-400 font-semibold hover:bg-purple-500 hover:text-white transition"
        >
          Hire Me
        </motion.button>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setMenu(!menu)}
        >
          {menu ? "✕" : "☰"}
        </div>

      </div>

      {/* Mobile Menu */}
      {menu && (

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="md:hidden bg-black/95 backdrop-blur-lg"
        >

          <ul className="flex flex-col items-center gap-8 py-10 text-lg">

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

          <div className="flex justify-center pb-8">
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 12px rgba(168,85,247,0.8)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 px-6 py-3 rounded-lg"
            >
              Hire Me
            </motion.button>
          </div>

        </motion.div>

      )}

    </nav>
  );
};

export default Navbar;