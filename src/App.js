import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./pages/Header";
import HomePage from "./pages/HomePage";
import Blogs from "./pages/Blogs";
import Services from "./pages/Services";
import BlogDetails from "./pages/BlogDetails";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  AOS.init();
  return (
    <div className="max-w-7xl mx-auto ">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
