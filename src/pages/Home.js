import React from "react";
import img from "../image/photo.png";
import figma from "../image/figma.png";
import js from "../image/js.png";
import react from "../image/react.png";
import { FiFacebook, FiLinkedin, FiGithub } from "react-icons/fi";

const Home = () => {
  return (
    <div id="home" className="lg:py-10 lg:px-5 p-5">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
        <div className="flex flex-col justify-around">
          <div className="space-y-8">
            <p className="text-gray-500 tracking-[3px] text-xl">
              welcome to my world
            </p>
            <p>
              <span className="text-6xl font-bold">
                Hi, I'm <span className="text-primary">Riaz Uddin </span>
              </span>{" "}
              <br />
            </p>
            <p className="text-5xl font-semibold ">
              <span className="text-primary">a</span> Professional Developer
            </p>
            <p className="text-gray-500 text-md">
              I use animation as a third dimension by which to simplify
              experiences and kuiding thro each and every interaction. I’m not
              adding motion just to spruce things up, but doing it in ways that.
            </p>
            <div className="flex  justify-start items-center gap-5">
              <button className="btn btn-primary">Hire me</button>
              <button className="btn btn-outline btn-primary">
                Download Resume
              </button>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 md:lg-grid-cols-2 grid-cols-1 gap-10 ">
            <div>
              <p className="text-md uppercase tracking-[1px] text-gray-700 mb-5">
                find with me
              </p>
              <div className="space-x-6 flex">
                <a href="#">
                  <FiFacebook className="icon" />
                </a>
                <a href="#">
                  <FiLinkedin className="icon" />
                </a>
                <a href="#">
                  <FiGithub className="icon" />
                </a>
              </div>
            </div>
            <div>
              <p className="text-md uppercase tracking-[1px] text-gray-700 mb-5">
                BEST SKILL ON
              </p>
              <div className="space-x-6 flex">
                <a href="#">
                  <img
                    src={figma}
                    className="shadow-2xl rounded-lg w-[65px] h-[65px] p-5 my-shadow-icon"
                  />
                </a>
                <a href="#">
                  <img
                    src={react}
                    className="shadow-2xl rounded-lg w-[65px] h-[65px] p-5 my-shadow-icon"
                  />
                </a>
                <a href="#">
                  <img
                    src={js}
                    className="shadow-2xl rounded-lg w-[65px] h-[65px] p-5 my-shadow-icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className=" p-5 flex justify-center items-center border">
            <img src={img} alt="" className="h-[700px] w-[500]" />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Home;
