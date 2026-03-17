import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_639",
        "template_4g958hc",
        form.current,
        "VQgTR-4N8XV2tmUVr"
      )
      .then(
        () => alert("Message Sent Successfully ✅"),
        () => alert("Failed to send ❌")
      );

    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="pt-16 pb-6 px-4 sm:px-6 lg:px-10 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Contact <span className="text-purple-500">Me</span>
        </motion.h1>

        <p className="text-gray-400 text-center mb-10 sm:mb-14 text-sm sm:text-base">
          Feel free to reach out for collaborations or opportunities.
        </p>

        {/* Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 bg-white/5 backdrop-blur-md border border-gray-800 rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl">

          {/* LEFT SIDE */}
          <div className="space-y-5 sm:space-y-6 text-center md:text-left">

            <div className="flex items-center justify-center md:justify-start gap-3 sm:gap-4 group">
              <FaPhone className="text-purple-500 text-lg sm:text-xl group-hover:scale-110 transition" />
              <span className="text-gray-300 text-sm sm:text-base">
                +91 6392754984
              </span>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3 sm:gap-4 group">
              <FaEnvelope className="text-purple-500 text-lg sm:text-xl group-hover:scale-110 transition" />
              <span className="text-gray-300 text-sm sm:text-base break-all">
                atulyadav06390639@gmail.com
              </span>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3 sm:gap-4 group">
              <FaGithub className="text-purple-500 text-lg sm:text-xl group-hover:scale-110 transition" />
              <a
                href="https://github.com/atulgethub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 text-sm sm:text-base break-all"
              >
                github.com/atulgethub
              </a>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3 sm:gap-4 group">
              <FaLinkedin className="text-purple-500 text-lg sm:text-xl group-hover:scale-110 transition" />
              <a
                href="https://www.linkedin.com/in/atul-yadav-6491292a3/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 text-sm sm:text-base break-all"
              >
                linkedin.com/in/atul-yadav
              </a>
            </div>

          </div>

          {/* FORM */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-5"
          >

            <input
              type="text"
              name="user_name"
              placeholder="Full name"
              required
              className="w-full bg-black/60 border border-gray-700 p-3 sm:p-4 rounded-lg focus:outline-none focus:border-purple-500 text-sm sm:text-base"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Email address"
              required
              className="w-full bg-black/60 border border-gray-700 p-3 sm:p-4 rounded-lg focus:outline-none focus:border-purple-500 text-sm sm:text-base"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your message"
              required
              className="w-full bg-black/60 border border-gray-700 p-3 sm:p-4 rounded-lg focus:outline-none focus:border-purple-500 text-sm sm:text-base"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition font-medium text-sm sm:text-base"
            >
              Send Message
            </motion.button>

          </motion.form>

        </div>

      </div>
    </section>
  );
};

export default Contact;