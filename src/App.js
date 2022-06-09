import About from "./pages/About";
import Blog from "./pages/Blog";
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
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
