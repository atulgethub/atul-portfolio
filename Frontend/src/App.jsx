import React from "react";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skill";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="bg-black text-white scroll-smooth">

      <Navbar />

      <main>

        <section id="home" className="min-h-screen">
          <Home />
        </section>

        <section id="about" className="py-20">
          <About />
        </section>

        <section id="skills" className="py-20">
          <Skills />
        </section>

        <section id="projects" className="py-20">
          <Projects />
        </section>

        <section id="contact" className="py-20">
          <Contact />
        </section>

      </main>

    </div>
  );
};

export default App;