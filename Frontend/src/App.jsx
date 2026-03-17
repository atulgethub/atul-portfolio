import React from "react";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skill";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Achievement from "./pages/Achievement";

const App = () => {
  return (
    <div className="bg-black text-white scroll-smooth">

      <Navbar />

      <main>

        <section id="home" className="min-h-[80vh] pt-16">
          <Home />
        </section>

        <section id="about" className="py-10">
          <About />
        </section>

        <section id="skills" className="py-10">
          <Skills />
        </section>

        <section id="projects" className="py-10">
          <Projects />
        </section>

        <section id="achieve" className="py-10">
          <Achievement />
        </section>

        <section id="contact" className="py-10">
          <Contact />
        </section>

      </main>

    </div>
  );
};

export default App;