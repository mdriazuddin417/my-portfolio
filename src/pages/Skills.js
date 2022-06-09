import React from "react";

const Skills = () => {
  return (
    <div id="skills">
      <div className="text-center pb-5 mb-10">
        <p className="text-md text-secondary font-bold">skills</p>
        <p className="text-3xl text-primary font-bold "> MY SKILLS</p>
        <p className="text-md text-gray-500 font-semibold">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 lg:w-[90%] lg:p-10 bg-white rounded-xl mx-auto">
        <div className="p-10">
          <h3 className="text-primary font-bold text-3xl">
            <input
              type="radio"
              name="radio-4"
              class="radio radio-primary mr-2"
              checked
            />
            Personal Skills
          </h3>

          <div className="mt-5 space-y-4">
            <div className="">
              <div class="flex justify-between items-center  text-black">
                <h3 className="font-semibold">Time Management</h3>
                <span className="text-secondary">90%</span>
              </div>
              <progress
                class="progress progress-secondary w-full"
                value="90"
                max="100"
              ></progress>
            </div>
            <div>
              <div class="flex justify-between items-center  text-black">
                <h3 className="font-semibold">Time Management</h3>
                <span className="text-secondary">90%</span>
              </div>
              <progress
                class="progress progress-secondary w-full"
                value="90"
                max="100"
              ></progress>
            </div>
            <div>
              <div class="flex justify-between items-center  text-black">
                <h3 className="font-semibold">Time Management</h3>
                <span className="text-secondary">90%</span>
              </div>
              <progress
                class="progress progress-secondary w-full"
                value="90"
                max="100"
              ></progress>
            </div>
            <div>
              <div class="flex justify-between items-center  text-black">
                <h3 className="font-semibold">Time Management</h3>
                <span className="text-secondary">90%</span>
              </div>
              <progress
                class="progress progress-secondary w-full"
                value="90"
                max="100"
              ></progress>
            </div>
            <div>
              <div class="flex justify-between items-center  text-black">
                <h3 className="font-semibold">Time Management</h3>
                <span className="text-secondary">90%</span>
              </div>
              <progress
                class="progress progress-secondary w-full"
                value="90"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
        <div className="p-10">
          <h3 className="text-primary font-bold text-3xl">
            <input
              type="radio"
              name="radio-4"
              class="radio radio-primary mr-2"
              checked
            />
            Software Skills
          </h3>

          <div className="mt-5 space-y-4">
            <div className="flex justify-between items-center">
              <div class="flex flex-col justify-center items-center ">
                <div
                  class="radial-progress bg-secondary text-primary-content border-4 border-primary"
                  style={{ "--value": "70", "--size": "8rem" }}
                >
                  70%
                </div>
                <h3 className="font-bold text-black pt-2  text-xl">
                  Ms Office
                </h3>
              </div>
              <div class="flex flex-col justify-center items-center ">
                <div
                  class="radial-progress bg-secondary text-primary-content border-4 border-primary"
                  style={{ "--value": "70", "--size": "8rem" }}
                >
                  70%
                </div>
                <h3 className="font-bold text-black pt-2 text-xl">Ms Office</h3>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div class="flex flex-col justify-center items-center ">
                <div
                  class="radial-progress bg-secondary text-primary-content border-4 border-primary"
                  style={{ "--value": "70", "--size": "8rem" }}
                >
                  70%
                </div>
                <h3 className="font-bold text-black pt-2  text-xl">
                  Ms Office
                </h3>
              </div>
              <div class="flex flex-col justify-center items-center ">
                <div
                  class="radial-progress bg-secondary text-primary-content border-4 border-primary"
                  style={{ "--value": "70", "--size": "8rem" }}
                >
                  70%
                </div>
                <h3 className="font-bold text-black pt-2 text-xl">Ms Office</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
