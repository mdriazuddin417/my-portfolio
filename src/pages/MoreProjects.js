import React from "react";
import useItems from "../hook/useItems";
import Project from "../pages/Project";
import Loading from "../pages/Loading";
const MoreProjects = () => {
  const [projects, loading] = useItems("project");
  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <div className="lg:py-16 md:py-10 p-10">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-10 ">
        {projects.map((project) => (
          <Project project={project} key={project._id}></Project>
        ))}
      </div>
    </div>
  );
};

export default MoreProjects;
