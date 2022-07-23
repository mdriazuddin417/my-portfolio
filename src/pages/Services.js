import { FaAndroid, FaArrowRight, FaReact } from "react-icons/fa";
import {
  HiAcademicCap,
  HiOutlineGlobeAlt,
  HiOutlinePencil,
} from "react-icons/hi";
import { SiJavascript } from "react-icons/si";
const Services = () => {
  return (
    <div id="services" className=" h-[calc(100vh-81px)] lg:pb-10 lg:pt-5">
      <p className="text-center text-secondary font-bold">Service</p>
      <p className="text-center text-3xl text-black font-bold">
        <span className="text-primary">MY </span>SERVICES
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 px-12 py-5">
        <div
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="800"
          className="my-card rounded-2xl  bg-base-100 my-shadow-icon hover:bg-primary duration-500 "
        >
          <div className="p-10 space-y-5 card-info duration-700">
            <SiJavascript className="text-6xl text-primary icons " />

            <h2 className="text-3xl font-[500] ">Javascript Development</h2>
            <p className="text-md text-gray-500 ">
              A JavaScript Developer is a Software Developer who specialises in
              the design, testing and implementation of software using the
              JavaScript programming language.
            </p>
            <p>
              <FaArrowRight className="text-xl text-primary icons opacity-0" />
            </p>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="900"
          className="my-card rounded-2xl  bg-base-100 my-shadow-icon hover:bg-primary duration-500 "
        >
          <div className="p-10 space-y-5 card-info duration-700">
            <FaReact className="text-6xl text-primary icons " />

            <h2 className="text-3xl font-[500] ">
              React application Development
            </h2>
            <p className="text-md text-gray-500 ">
              React is a JavaScript-based UI development library. Facebook and
              an open-source developer community run it. Although React is a
              library rather than a language, it is widely used in web
              development.
            </p>
            <p>
              <FaArrowRight className="text-xl text-primary icons opacity-0" />
            </p>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="my-card rounded-2xl bg-base-100 my-shadow-icon hover:bg-primary duration-500 "
        >
          <div className="p-10 space-y-5 card-info duration-700">
            <HiAcademicCap className="text-6xl text-primary icons " />

            <h2 className="text-3xl font-[500] ">Front-end Development</h2>
            <p className="text-md text-gray-500 ">
              Front end development is a style of computer programming that
              focuses on the coding and creation of elements and features of a
              website that will then be seen by the user.
            </p>
            <p>
              <FaArrowRight className="text-xl text-primary icons opacity-0" />
            </p>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1100"
          className="my-card rounded-2xl  bg-base-100 my-shadow-icon hover:bg-primary duration-500 "
        >
          <div className="p-10 space-y-5 card-info duration-700">
            <HiOutlinePencil className="text-6xl text-primary icons " />

            <h2 className="text-3xl font-[500] ">Any file to HTML</h2>
            <p className="text-md text-gray-500 ">
              Now right-click on the page and select View Page Source. You can
              also view the page source through the browser menu. In Internet
              Explorer, it is accessed through the View menu and then select
              Source.
            </p>
            <p>
              <FaArrowRight className="text-xl text-primary icons opacity-0" />
            </p>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1200"
          className="my-card rounded-2xl  bg-base-100 my-shadow-icon hover:bg-primary duration-500 "
        >
          <div className="p-10 space-y-5 card-info duration-700">
            <HiOutlineGlobeAlt className="text-6xl text-primary icons " />

            <h2 className="text-3xl font-[500] ">Web Development</h2>
            <p className="text-md text-gray-500 ">
              Web developers are responsible for designing and developing
              websites and website applications. Using a variety of programming
              languages and web technologies, web developers
            </p>
            <p>
              <FaArrowRight className="text-xl text-primary icons opacity-0" />
            </p>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1300"
          className="my-card rounded-2xl  bg-base-100 my-shadow-icon hover:bg-primary duration-500 "
        >
          <div className="p-10 space-y-5 card-info duration-700">
            <FaAndroid className="text-6xl text-primary icons " />

            <h2 className="text-3xl font-[500] ">React Native</h2>
            <p className="text-md text-gray-500 ">
              React Native is an open-source JavaScript framework, designed for
              building apps on multiple platforms like iOS, Android, and also
              web applications, utilizing the very same code base.
            </p>
            <p>
              <FaArrowRight className="text-xl text-primary icons opacity-0" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
