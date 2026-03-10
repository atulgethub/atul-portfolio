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
        "service_639",   // SERVICE ID
        "template_4g958hc",  // TEMPLATE ID
        form.current,
        "VQgTR-4N8XV2tmUVr"        // PUBLIC KEY
      )
      .then(
        () => {
          alert("Message Sent Successfully ✅");
        },
        (error) => {
          alert("Failed to send ❌");
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="bg-black text-white py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-6"
        >
          Contact <span className="text-purple-500">Me</span>
        </motion.h1>

        <p className="text-gray-400 text-center mb-16">
          I would love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-12 bg-gray-900 p-12 rounded-xl">

          {/* LEFT SIDE */}
          <div className="space-y-6 text-lg">

            <div className="flex items-center gap-4">
              <FaPhone className="text-purple-500" />
              <span className="text-gray-300">+91 6392754984</span>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-purple-500" />
              <span className="text-gray-300">
                atulyadav06390639@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-4">
              <FaGithub className="text-purple-500" />
              <a href="https://github.com/atulgethub" target="_blank">
                github
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaLinkedin className="text-purple-500" />
              <a href="https://linkedin.com" target="_blank">
                linkedin
              </a>
            </div>

          </div>

          {/* FORM */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-5"
          >

            <input
              type="text"
              name="user_name"
              placeholder="Full name"
              required
              className="w-full bg-black border border-gray-700 p-3 rounded-lg"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Email address"
              required
              className="w-full bg-black border border-gray-700 p-3 rounded-lg"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your message"
              required
              className="w-full bg-black border border-gray-700 p-3 rounded-lg"
            />

            <button
              type="submit"
              className="px-8 py-2 bg-purple-600 rounded-full hover:bg-purple-700"
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