import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Skills from "./pages/Skills";

function App() {
  return (
    <div className="max-w-7xl mx-auto ">
      <Header />
      <Home />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Blogs />
      <Contact />
    </div>
  );
}

export default App;
