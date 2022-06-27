import { useState } from "react";

const ProjectModel = ({ project, pic }) => {
  let { name, picture, tools, text } = project;
  const [newPic, setNewPic] = useState("");

  return (
    <div className="p-5 ">
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className=" relative bg-white my-shadow-icon m-10 p-10 rounded-xl ">
          <label
            htmlFor="my-modal-3"
            className="btn btn-secondary btn-sm btn-circle absolute right-2 top-2"
            onClick={() => setNewPic("")}
          >
            ✕
          </label>
          <div className="grid lg:grid-cols-2 gap-10 ">
            <div className="space-y-5 ">
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
            <div className="overflow-scroll">
              <h3 className="text-2xl font-bold">{name}</h3>
              <p className="py-4 text-gray-500 text-md">{text}</p>
              <p className="text-xl font-bold">Tools:</p>
              <div className="flex justify-between items-start gap-10">
                <ul className="space-y-2">
                  {tools?.slice(0, tools.length / 2).map((tool, index) => (
                    <li
                      key={index}
                      className="hover:text-secondary duration-500 border-b-gray-300 border-dashed border-b-2 "
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
                <ul  className="space-y-2">
                  {tools?.slice(6, tools.length - 1).map((tool, index) => (
                    <li
                      key={index}
                      className="hover:text-secondary duration-500 border-b-gray-300 border-dashed border-b-2"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-around items-center gap-5 mt-5">
                <a target={"_blank"} href={`${project.livesite}`} rel="noreferrer">
                  <p className="p-2 rounded-md my-shadow-icon exampleClass cursor-pointer font-bold">
                    <span>Livesite</span>
                  </p>
                </a>
                <a target={"_blank"} href={`${project.client}`} rel="noreferrer">
                  <p className="p-2 rounded-md my-shadow-icon exampleClass cursor-pointer font-bold">
                    <span>Github(Client)</span>
                  </p>
                </a>
                <a target={"_blank"} href={`${project.server}`} rel="noreferrer">
                  <p className="p-2 rounded-md my-shadow-icon exampleClass cursor-pointer font-bold">
                    <span>Github(Server)</span>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModel;
