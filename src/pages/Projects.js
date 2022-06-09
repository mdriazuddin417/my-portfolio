import React, { useEffect, useState } from "react";
import Project from "./Project";
import ProjectModel from "./ProjectModel";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [item, setItem] = useState({});
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const handleModel = (project) => {
    setItem(project);
  };
  return (
    <div id="projects" className="px-12">
      <p className="text-center font-semibold text-secondary text-md">
        VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
      </p>
      <h3 className="text-4xl font-bold text-black text-center">
        MY PORTFOLIO
      </h3>
      <div className="grid lg:grid-cols-3 md:grid-cols2 grid-cols-1 gap-10 my-10">
        {projects.map((project) => (
          <Project project={project} handleModel={handleModel}></Project>
        ))}
      </div>
      <ProjectModel project={item} />
    </div>
  );
};

export default Projects;
