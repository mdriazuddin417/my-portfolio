import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
const Project = ({ project, handleModel }) => {
  return (
    <div
      data-aos="flip-right"
      data-aos-easing="linear"
      data-aos-duration="1300"
      className="space-y-5  rounded-2xl my-shadow-icon "
    >
      <div className="overflow-hidden h-[300px] rounded-lg w-full ">
        <img
          src={project?.picture[0]}
          alt=""
          className="w-full h-full hover:scale-110 duration-500 "
        />
      </div>

      <div className="px-5 pb-5 m-0">
        <h3 className="text-2xl font-bold duration-300 hover:text-primary pb-2">
          {project.name}
        </h3>

        <div className="flex justify-between items-center gap-5">
          <Link to={`/project/${project._id}`}>
            <div className="lg:px-[24px] lg:py-[12px] md:px-[24px] md:py-[12px] sm:px-[24px] sm:py-[12px] p-1 rounded-md my-shadow-icon exampleBtn  text-center font-bold cursor-pointer">
              <span className="flex">
                Details <BsArrowRight className="text-xl ml-2" />
              </span>
            </div>
          </Link>
          <a target={"_blank"} href={`${project?.livesite}`} rel="noreferrer">
            <div className="lg:px-[24px] lg:py-[12px] md:px-[24px] md:py-[12px] sm:px-[24px] sm:py-[12px] p-1 rounded-md my-shadow-icon exampleBtn  text-center font-bold">
              <span>Live</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
