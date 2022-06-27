import { FaAndroid, FaArrowRight, FaReact } from "react-icons/fa";
import {
  HiAcademicCap, HiOutlineGlobeAlt,
  HiOutlinePencil
} from "react-icons/hi";
import { SiJavascript } from "react-icons/si";
const Services = () => {
  return (
    <div id="services" className="my-10 p-5">
      <p className="text-center text-secondary font-bold">Service</p>
      <p className="text-center text-3xl text-black font-bold">
        <span className="text-primary">MY </span>SERVICES
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-10">
        <div className="my-card rounded-2xl  bg-base-100 my-shadow-icon hover:bg-primary duration-500 ">
          <div className="p-10 space-y-5 card-info duration-700">
            <SiJavascript className="text-6xl text-primary icons " />

            <h2 className="text-3xl font-[500] ">Javascript Development</h2>
            <p className="text-md text-gray-500 ">
              I throw myself down among the tall grass by the stream as I lie
              close to the earth
            </p>
            <p>
              <FaArrowRight className="text-xl text-primary icons opacity-0" />
            </p>
          </div>
        </div>
        <div className="my-card rounded-2xl  bg-base-100 my-shadow-icon hover:bg-primary duration-500 ">
          <div className="p-10 space-y-5 card-info duration-700">
            <FaReact className="text-6xl text-primary icons " />

            <h2 className="text-3xl font-[500] ">
              React application Development
            </h2>
            <p className="text-md text-gray-500 ">
              I throw myself down among the tall grass by the stream as I lie
              close to the earth
            </p>
            <p>
              <FaArrowRight className="text-xl text-primary icons opacity-0" />
            </p>
          </div>
        </div>
        <div className="my-card rounded-2xl bg-base-100 my-shadow-icon hover:bg-primary duration-500 ">
          <div className="p-10 space-y-5 card-info duration-700">
            <HiAcademicCap className="text-6xl text-primary icons " />

            <h2 className="text-3xl font-[500] ">Front-end Development</h2>
            <p className="text-md text-gray-500 ">
              I throw myself down among the tall grass by the stream as I lie
              close to the earth
            </p>
            <p>
              <FaArrowRight className="text-xl text-primary icons opacity-0" />
            </p>
          </div>
        </div>
        <div className="my-card rounded-2xl  bg-base-100 my-shadow-icon hover:bg-primary duration-500 ">
          <div className="p-10 space-y-5 card-info duration-700">
            <HiOutlinePencil className="text-6xl text-primary icons " />

            <h2 className="text-3xl font-[500] ">Web Design</h2>
            <p className="text-md text-gray-500 ">
              I throw myself down among the tall grass by the stream as I lie
              close to the earth
            </p>
            <p>
              <FaArrowRight className="text-xl text-primary icons opacity-0" />
            </p>
          </div>
        </div>
        <div className="my-card rounded-2xl  bg-base-100 my-shadow-icon hover:bg-primary duration-500 ">
          <div className="p-10 space-y-5 card-info duration-700">
            <HiOutlineGlobeAlt className="text-6xl text-primary icons " />

            <h2 className="text-3xl font-[500] ">Web Development</h2>
            <p className="text-md text-gray-500 ">
              I throw myself down among the tall grass by the stream as I lie
              close to the earth
            </p>
            <p>
              <FaArrowRight className="text-xl text-primary icons opacity-0" />
            </p>
          </div>
        </div>
        <div className="my-card rounded-2xl  bg-base-100 my-shadow-icon hover:bg-primary duration-500 ">
          <div className="p-10 space-y-5 card-info duration-700">
            <FaAndroid className="text-6xl text-primary icons " />

            <h2 className="text-3xl font-[500] ">App Development</h2>
            <p className="text-md text-gray-500 ">
              I throw myself down among the tall grass by the stream as I lie
              close to the earth
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
