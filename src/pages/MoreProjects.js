import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
// Autoplay,
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MoreProjects = ({ projects }) => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      slidesPerView={2.5}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper swiper swiper-height"
    >
      {projects?.map((project,index) => (
        <SwiperSlide key={index} className="mb-10">
          <div
           data-aos="flip-right"
           data-aos-easing="linear"
           data-aos-duration="1300"
          className="space-y-5  rounded-2xl my-shadow-icon  ">
            <div className="overflow-hidden h-[300px] rounded-lg w-full p-5 ">
              <img
                src={project?.picture[0]}
                alt=""
                className="w-full h-full rounded shadow "
              />
            </div>

            <div className="px-5 pb-5 m-0">
              <h3 className="text-2xl font-bold duration-300 hover:text-primary pb-2">
                {project.name}
              </h3>

              <div className="flex justify-between items-center gap-5">
                <a
                  target={"_blank"}
                  href={`${project?.livesite}`}
                  rel="noreferrer"
                >
                  <div className="lg:px-[24px] lg:py-[12px] md:px-[24px] md:py-[12px] sm:px-[24px] sm:py-[12px] p-1 rounded-md my-shadow-icon exampleBtn  text-center font-bold">
                    <span>Livesite</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MoreProjects;
