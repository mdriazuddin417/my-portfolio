import React from "react";
import { BsArrowRight } from "react-icons/bs";
const Project = ({ project, handleModel }) => {
  return (
    <div className="space-y-5 p-10 rounded-2xl my-shadow-icon cursor-pointer">
      <img
        src={project.picture}
        alt=""
        className="h-[300px] w-full hover:scale-105 duration-500 "
      />

      <h3 className="text-2xl font-bold hover:text-primary ">{project.name}</h3>

      <div className="flex justify-between items-center gap-5">
        <label for="my-modal-3">
          <div className="p-2 rounded-md my-shadow-icon exampleBtn  text-center font-bold">
            <span className="flex" onClick={() => handleModel(project)}>
              Details <BsArrowRight className="text-xl ml-2" />
            </span>
          </div>
        </label>
        <div className="p-2 rounded-md my-shadow-icon exampleBtn  text-center font-bold">
          <span>Livesite</span>
        </div>
      </div>
    </div>
  );
};

export default Project;
