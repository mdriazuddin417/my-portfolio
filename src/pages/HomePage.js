import React from "react";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";

const HomePage = () => {
  return (
    <div>
      <Home />
      <About />
      <Skills />
      <Projects />
      <div className="py-5">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
