import React, { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
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
          <div className="space-y-5 p-10 rounded-2xl my-shadow-icon cursor-pointer">
            <img
              src={project.picture}
              alt=""
              className="h-[300px] w-full hover:scale-105 duration-500 "
            />
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold hover:text-primary ">
                {project.name}
              </h3>
              <p className="p-2 rounded-md my-shadow-icon exampleClass ">
                <span> Livesite</span>
              </p>
            </div>
            <div className="flex justify-between items-center gap-5">
              <p className="p-2 rounded-md my-shadow-icon exampleClass">
                <span>Github(Client)</span>
              </p>
              <p className="p-2 rounded-md my-shadow-icon exampleClass">
                <span>Github(Server)</span>
              </p>
            </div>
            <div className="p-2 rounded-md my-shadow-icon exampleBtn w-1/2 text-center font-bold">
              <span>Details</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
