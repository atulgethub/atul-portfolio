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
        () => {
          alert("Message Sent Successfully ✅");
        },
        () => {
          alert("Failed to send ❌");
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="bg-black text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-10">

      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Contact <span className="text-purple-500">Me</span>
        </motion.h1>

        <p className="text-gray-400 text-center mb-12 sm:mb-16">
          I would love to hear from you.
        </p>

        {/* Contact Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-900 p-6 sm:p-8 lg:p-12 rounded-xl">

          {/* LEFT SIDE */}
          <div className="space-y-6 text-base sm:text-lg">

            <div className="flex items-center gap-4">
              <FaPhone className="text-purple-500 text-xl" />
              <span className="text-gray-300 break-all">
                +91 6392754984
              </span>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-purple-500 text-xl" />
              <span className="text-gray-300 break-all">
                atulyadav06390639@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-4">
              <FaGithub className="text-purple-500 text-xl" />
              <a
                href="https://github.com/atulgethub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition"
              >
                github.com/atulgethub
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaLinkedin className="text-purple-500 text-xl" />
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition"
              >
                linkedin.com
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
            className="space-y-5"
          >

            <input
              type="text"
              name="user_name"
              placeholder="Full name"
              required
              className="w-full bg-black border border-gray-700 p-3 sm:p-4 rounded-lg focus:outline-none focus:border-purple-500"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Email address"
              required
              className="w-full bg-black border border-gray-700 p-3 sm:p-4 rounded-lg focus:outline-none focus:border-purple-500"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your message"
              required
              className="w-full bg-black border border-gray-700 p-3 sm:p-4 rounded-lg focus:outline-none focus:border-purple-500"
            />

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-purple-600 rounded-full hover:bg-purple-700 transition"
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </div>

    </section>
  );
};

export default Contact;