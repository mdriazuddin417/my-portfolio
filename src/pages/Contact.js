import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { FiFacebook, FiLinkedin, FiGithub } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";
const Contact = () => {
  return (
    <div id="contact" className="my-10">
      <p className="text-primary text-md text-center uppercase tracking-[2px]">
        contact
      </p>
      <p className="text-black font-bold text-center text-4xl">
        Contact With Me
      </p>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 p-5 mt-5">
        <div className="my-shadow-icon bg-white p-10 rounded-2xl space-y-3">
          <Player
            autoplay
            loop
            src="https://assets6.lottiefiles.com/packages/lf20_isbiybfh.json"
            className="w-full h-full"
          >
            <Controls buttons={["play", "repeat", "frame", "debug"]} />
          </Player>
          <h3 className="text-3xl font-bold ">MD.Riaz Uddin</h3>
          <h3 className="text-xl font-semibold text-primary ">Web Developer</h3>
          <p className="text-lg text-gray-500  ">
            I am available for official work / freelance work. Connect with me
            via and call in to my account
          </p>
          <p className="text-lg font-semibold text-gray-500 ">
            Phone: 01786552964 <br />
            Email: mdriazuddin417@gmail.com
          </p>
          <div>
            <p className="text-md uppercase tracking-[1px] text-gray-600 mb-3">
              find with me
            </p>
            <div className="space-x-6 flex">
              <a
                target="_blank"
                href="https://web.facebook.com/md.riaj.9085790"
              >
                <FiFacebook className="icon" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/riaz-uddin-457421214/"
              >
                <FiLinkedin className="icon" />
              </a>
              <a target="_blank" href="https://github.com/mdriazuddin417">
                <FiGithub className="icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="my-shadow-icon p-10 rounded-2xl space-y-12">
          <div className="flex justify-between items-center gap-10">
            <div>
              <label htmlFor="name" className="text-gray-500">
                Your Name
              </label>
              <input
                type="text"
                className="border w-full p-4 rounded-md focus:outline-primary"
                id="name"
              />
            </div>
            <div>
              <label htmlFor="number" className="text-gray-500">
                Phone number
              </label>
              <input
                type="text"
                className="border w-full p-4 rounded-md focus:outline-primary"
                id="number"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="text-gray-500">
              Email
            </label>
            <input
              type="email"
              className="border w-full p-4 rounded-md focus:outline-primary"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="subject" className="text-gray-500">
              Subject
            </label>
            <input
              type="text"
              className="border w-full p-4 rounded-md focus:outline-primary"
              id="subject"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-gray-500">
              Your message
            </label>
            <textarea
              type="text"
              className="border w-full p-4 h-[150px] rounded-md focus:outline-primary"
              id="message"
            />
          </div>
          <button className="my-shadow-icon p-4 rounded-lg flex text-primary hover:-translate-y-2 duration-300 hover:bg-primary hover:text-white">
            Send message <BsArrowRight className="text-xl ml-2 " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
