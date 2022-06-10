import React, { useState } from "react";

const ProjectModel = ({ project, pic }) => {
  let { name, picture, tools, text } = project;
  const [newPic, setNewPic] = useState("");

  return (
    <div>
      <input type="checkbox" id="my-modal-3" class="modal-toggle" />
      <div class="modal">
        <div class=" relative bg-white my-shadow-icon m-10 p-10 rounded-xl ">
          <label
            for="my-modal-3"
            class="btn btn-secondary btn-sm btn-circle absolute right-2 top-2"
            onClick={() => setNewPic("")}
          >
            ✕
          </label>
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-5">
              <div>
                <img src={newPic || pic} alt="" className="h-full w-full " />
              </div>
              <div className="flex items-center gap-10">
                {picture?.map((pic) => (
                  <div>
                    <img
                      src={pic}
                      alt=""
                      className="h-[100px] w-[100px] cursor-pointer hover:ring ring-1 ring-primary rounded-lg "
                      onClick={(e) => setNewPic(e.target.src)}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 class="text-2xl font-bold">{name}</h3>
              <p class="py-4 text-gray-500 text-md">{text}</p>
              <p className="text-xl font-bold">Tools:</p>
              <div className="flex justify-between items-start gap-10">
                <ul>
                  {tools?.slice(0, tools.length / 2).map((tool) => (
                    <li className="hover:text-secondary duration-500">
                      {tool}
                    </li>
                  ))}
                </ul>
                <ul>
                  {tools?.slice(6, tools.length - 1).map((tool) => (
                    <li className="hover:text-secondary duration-500">
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-around items-center gap-5 mt-5">
                <p className="p-2 rounded-md my-shadow-icon exampleClass cursor-pointer font-bold">
                  <span>Livesite</span>
                </p>
                <p className="p-2 rounded-md my-shadow-icon exampleClass cursor-pointer font-bold">
                  <span>Github(Client)</span>
                </p>
                <p className="p-2 rounded-md my-shadow-icon exampleClass cursor-pointer font-bold">
                  <span>Github(Server)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModel;
