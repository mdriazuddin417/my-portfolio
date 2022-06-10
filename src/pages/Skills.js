import React from "react";

const Skills = () => {
  return (
    <div id="skills">
      <div className="text-center pb-5 mb-10">
        <p className="text-md text-secondary tracking-[2px]">skills</p>
        <p className="text-center text-3xl text-black font-bold">
          <span className="text-primary">MY </span>SKILLS
        </p>
        <p className="text-md text-gray-500 font-semibold">
          HyperText Markup Language serves as the foundation for almost all
          websites
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
                <h3 className="font-semibold">HTML,HTML5,CSS,CSS3</h3>
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
                <h3 className="font-semibold">Bootstrap, Tailwind css</h3>
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
                <h3 className="font-semibold">Javascript & Ecmascript</h3>
                <span className="text-secondary">65%</span>
              </div>
              <progress
                class="progress progress-secondary w-full"
                value="65"
                max="100"
              ></progress>
            </div>
            <div>
              <div class="flex justify-between items-center  text-black">
                <h3 className="font-semibold">React Js</h3>
                <span className="text-secondary">80%</span>
              </div>
              <progress
                class="progress progress-secondary w-full"
                value="80"
                max="100"
              ></progress>
            </div>
            <div>
              <div class="flex justify-between items-center  text-black">
                <h3 className="font-semibold">Mongo DB</h3>
                <span className="text-secondary">70%</span>
              </div>
              <progress
                class="progress progress-secondary w-full"
                value="70"
                max="100"
              ></progress>
            </div>
            <div>
              <div class="flex justify-between items-center  text-black">
                <h3 className="font-semibold">
                  Node js(Crud Operation) & Express js
                </h3>
                <span className="text-secondary">80%</span>
              </div>
              <progress
                class="progress progress-secondary w-full"
                value="80"
                max="100"
              ></progress>
            </div>
            <div>
              <div class="flex justify-between items-center  text-black">
                <h3 className="font-semibold">Firebase authentication</h3>
                <span className="text-secondary">85%</span>
              </div>
              <progress
                class="progress progress-secondary w-full"
                value="85"
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

          <div className="mt-5 space-y-4  mt-10">
            <div className="flex justify-between items-center">
              <div class="flex flex-col justify-between items-center ">
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
                  style={{ "--value": "60", "--size": "8rem" }}
                >
                  60%
                </div>
                <h3 className="font-bold text-black pt-2 text-xl">Figma</h3>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div class="flex flex-col justify-center items-center ">
                <div
                  class="radial-progress bg-secondary text-primary-content border-4 border-primary"
                  style={{ "--value": "50", "--size": "8rem" }}
                >
                  50%
                </div>
                <h3 className="font-bold text-black pt-2  text-xl">
                  Adobe illustrator
                </h3>
              </div>
              <div class="flex flex-col justify-center items-center ">
                <div
                  class="radial-progress bg-secondary text-primary-content border-4 border-primary"
                  style={{ "--value": "65", "--size": "8rem" }}
                >
                  65%
                </div>
                <h3 className="font-bold text-black pt-2 text-xl">Canva</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
