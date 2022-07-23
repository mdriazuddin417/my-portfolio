import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useSingleItem from "../hook/useSingleItem";
import Loading from "./Loading";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, loading] = useSingleItem("project", id);
  const [newPic, setNewPic] = useState("");
  const { tools, name, picture, text } = project;
  console.log(project);
  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <div className="h-[86vh]">
      <div className=" bg-white my-shadow-icon m-10 p-10 rounded-xl ">
        <div className="grid lg:grid-cols-2 gap-10 ">
          <div className="space-y-5 ">
            <div>
              <img
                src={newPic || (picture && picture[0])}
                alt=""
                className="h-full w-full "
              />
            </div>
            <div className="flex items-center gap-10 overflow-x-auto p-2">
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
              <ul className="space-y-2">
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
              <a
                target={"_blank"}
                href={`${project.livesite}`}
                rel="noreferrer"
              >
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
  );
};

export default ProjectDetails;
