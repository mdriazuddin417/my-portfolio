import React from "react";
import photo1 from "../image/photo2.png";
const About = () => {
  return (
    <div
      id="about"
      className="bg-white w-full lg:w-[80%] mx-auto lg:p-16 p-5 my-10 rounded-xl "
    >
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10">
        <div className="lg:order-1 order-2">
          <div className="lg:relative">
            <img
              src={photo1}
              alt=""
              className="lg:rounded-3xl w-3/4 lg:mb-24 lg:block hidden"
            />
            <div className="bg-primary lg:absolute top-16 right-0 lg:w-[270px] w-full lg:rounded-3xl rounded-xl p-10 space-y-5">
              <div className="">
                <p className="text-gray-200 text-[14px]">Name</p>
                <p className="border-b border-dashed text-[15px] border-gray-200 text-white font-semibold">
                  Md. Riaz Uddin
                </p>
              </div>
              <div className="">
                <p className="text-gray-200 text-[14px]">Birthday</p>
                <p className="border-b border-dashed text-[15px] border-gray-200 text-white font-semibold">
                  August 13,2000
                </p>
              </div>
              <div className="">
                <p className="text-gray-200 text-[14px]">Mail</p>
                <p className="border-b border-dashed text-[15px] border-gray-200 text-white font-semibold">
                  mdriazuddin417@gmail.com
                </p>
              </div>
              <div className="">
                <p className="text-gray-200 text-[14px]">Phone</p>
                <p className="border-b border-dashed text-[15px] border-gray-200 text-white font-semibold">
                  01786552964
                </p>
              </div>
              <div className="">
                <p className="text-gray-200 text-[14px]">Address</p>
                <p className="border-b border-dashed text-[15px] border-gray-200 text-white font-semibold">
                  Kusba ,Brahmonbaria
                </p>
              </div>
              <div className="">
                <p className="text-gray-200 text-[14px]">Nationality</p>
                <p className="border-b border-dashed text-[15px] border-gray-200 text-white font-semibold">
                  Banladeshi
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-5 lg:order-2 order-1">
          <h2 className="text-2xl text-primary font-bold">About Me</h2>
          <p className="text-4xl capitalize font-bold">
            World Leading World leading UI/UX designer & web developer
          </p>
          <p className="text-xl font-semibold">
            A passionate UI/UX Designer and Web Developer based In Programming
            hero(Banladesh)
          </p>
          <p className="text-gray-500 text-md">
            Hi! My name is Riaz uddin. I am Web Developer, and I'm very
            passionate and dedicated to my work. With 1 years experience as a
            professional web developer, I have acquired the skills and knowledge
            necessary to make your project a success.
          </p>
          <a
            href="https://drive.google.com/u/0/uc?id=1bGy_EAYOTgwqA1eNMA7bkEf2DnyK_A1F&export=download"
            download="true"
          >
            <button className="btn btn-secondary mt-5">Download Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
