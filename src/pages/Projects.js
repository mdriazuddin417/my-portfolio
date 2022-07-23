import { useState } from "react";
import MoreProjects from "./MoreProjects";
import Project from "./Project";

import useItems from "../hook/useItems";
const Projects = () => {
  const [projects, setProjects] = useItems("project");
  const [items, setItems] = useState({});

  const [moreBtn, setMoreBtn] = useState(false);

  return (
    <div id="projects" className="px-12">
      <p className="text-center tracking-[2px] text-secondary text-md">
        VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
      </p>
      <h3 className="text-4xl font-bold text-black text-center">
        MY <span className="text-primary">PORTFOLIO</span>
      </h3>
      <div className="grid lg:grid-cols-3 md:grid-cols2 grid-cols-1 gap-10 my-10">
        {projects?.slice(0, 6).map((project) => (
          <Project key={project._id} project={project}></Project>
        ))}
      </div>

      <>{moreBtn && <MoreProjects projects={projects} />}</>
      <div className="flex justify-center items-center mt-3">
        {!moreBtn ? (
          <button
            className="px-[24px] py-[12px] rounded-full hover:bg-[#FF451B] hover:text-white duration-300 my-shadow-icon  text-center  text-[#FF451B]"
            onClick={() => setMoreBtn(!moreBtn)}
          >
            More Projects...
          </button>
        ) : (
          <button
            className="px-[24px] py-[12px] rounded-full hover:bg-[#FF451B] hover:text-white duration-300 my-shadow-icon  text-center  text-[#FF451B]"
            onClick={() => setMoreBtn(!moreBtn)}
          >
            Hide More...
          </button>
        )}
      </div>
    </div>
  );
};

export default Projects;
