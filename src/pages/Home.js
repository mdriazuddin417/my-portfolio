import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";
import figma from "../image/figma.png";
import js from "../image/js.png";
import img from "../image/photo.png";
import react from "../image/react.png";

const Home = () => {
  return (
    <div id="home" className="lg:py-10 lg:px-5 p-5">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
        <div className="flex flex-col justify-around">
          <div className="space-y-8">
            <p
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-easing="linear"
              data-aos-duration="1000"
              className="text-gray-500 tracking-[3px] text-xl"
            >
              welcome to my world
            </p>
            <p
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-easing="linear"
              data-aos-duration="1200"
            >
              <span className="text-6xl font-bold">
                Hi, I'm <span className="text-primary">Riaz Uddin </span>
              </span>{" "}
              <br />
            </p>
            <p
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="text-5xl font-semibold "
            >
              <span className="text-primary">a</span> Professional Developer
            </p>
            <p className="text-gray-500 text-md">
              I use animation as a third dimension by which to simplify
              experiences and kuiding thro each and every interaction. I’m not
              adding motion just to spruce things up, but doing it in ways that.
            </p>
            <div className="flex  justify-start items-center gap-5">
              <a href="#contact">
                <button className="btn btn-secondary">Hire me</button>
              </a>
              <a
                href="https://drive.google.com/file/d/1rN_YpzZx1XD_zcVk5VLfs7MbkBC-dl16/view?usp=sharing"
                download="true"
              >
                <button className="btn btn-outline btn-secondary">
                  Download Resume
                </button>
              </a>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 md:lg-grid-cols-2 grid-cols-1 gap-10 ">
            <div>
              <p className="text-md uppercase tracking-[1px] text-gray-700 mb-5">
                find with me
              </p>
              <div className="space-x-6 flex">
                <a
                  target="_blank"
                  href="https://web.facebook.com/md.riaj.9085790"
                  rel="noreferrer"
                >
                  <FiFacebook className="icon" />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/riaz-uddin-457421214/"
                  rel="noreferrer"
                >
                  <FiLinkedin className="icon" />
                </a>
                <a
                  target="_blank"
                  href="https://github.com/mdriazuddin417"
                  rel="noreferrer"
                >
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
                    alt=""
                  />
                </a>
                <a href="#">
                  <img
                    src={react}
                    className="shadow-2xl rounded-lg w-[65px] h-[65px] p-5 my-shadow-icon"
                    alt=""
                  />
                </a>
                <a href="#">
                  <img
                    src={js}
                    className="shadow-2xl rounded-lg w-[65px] h-[65px] p-5 my-shadow-icon"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-easing="linear"
            data-aos-duration="1200"
            className=" p-5 flex justify-center items-center "
          >
            <img
              src={img}
              alt=""
              className="lg:h-[700px] lg:w-[450px] h-[500px] w-[350px]  bg-primary rounded-full p-10"
            />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Home;
