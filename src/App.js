import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Skills from "./pages/Skills";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
