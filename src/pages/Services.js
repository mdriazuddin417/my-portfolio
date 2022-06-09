import React from "react";
import { FaReadme, FaArrowRight } from "react-icons/fa";
const Services = () => {
  const services = [
    {
      icon: "Hello",
      title: "App Development",
      text: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
    },
    {
      icon: "Hello",
      title: "App Development",
      text: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
    },
    {
      icon: "Hello",
      title: "App Development",
      text: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
    },
    {
      icon: "Hello",
      title: "App Development",
      text: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
    },
    {
      icon: "Hello",
      title: "App Development",
      text: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
    },
    {
      icon: "Hello",
      title: "App Development",
      text: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
    },
  ];
  return (
    <div id="services" className="my-10 p-5">
      <p className="text-center text-secondary font-bold">Service</p>
      <p className="text-center text-3xl text-black font-bold">
        <span className="text-primary">MY </span>SERVICES
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-10">
        {services.map((service) => (
          <div class="my-card rounded-2xl h-[300px] bg-base-100 my-shadow-icon hover:bg-primary duration-500 ">
            <div class="p-10 space-y-5 card-info duration-700">
              <FaReadme className="text-6xl text-primary icons " />

              <h2 class="text-3xl font-[500] ">{service.title}</h2>
              <p className="text-md text-gray-500 ">{service.text}</p>
              <p>
                <FaArrowRight className="text-xl text-primary icons hidden" />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
