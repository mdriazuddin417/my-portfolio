import { Controls, Player } from "@lottiefiles/react-lottie-player";
import emailjs from "emailjs-com";
import { BsArrowRight } from "react-icons/bs";
import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";
import { toast } from "react-toastify";
const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x8f4ydd",
        "template_dksdug6",
        e.target,
        "nU6G5Ts_IqQb3CYjF",
      )
      .then((res) => {
        e.target.reset();

        toast.success("send email success!");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div id="contact" className="py-5">
      <p className="text-primary text-md text-center uppercase tracking-[2px]">
        contact
      </p>
      <p className="text-black font-bold text-center text-4xl">
        Contact With Me
      </p>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 p-5 mt-5">
        <div
          data-aos="zoom-in-up"
          data-aos-easing="linear"
          data-aos-duration="1300"
          className="my-shadow-icon bg-white p-10 rounded-2xl space-y-3"
        >
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
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="my-shadow-icon p-10 rounded-2xl "
        >
          <form onSubmit={sendEmail} className="space-y-12">
            <div className="flex justify-between items-center gap-10">
              <div>
                <label htmlFor="name" className="text-gray-500">
                  Your Name
                </label>
                <input
                  type="text"
                  className="border w-full p-4 rounded-md focus:outline-primary"
                  id="name"
                  name="name"
                  required
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
                  name="number"
                  required
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
                name="email"
                required
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
                name="subject"
                required
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
                name="message"
                required
              />
            </div>
            <button
              type="submit"
              className="my-shadow-icon p-4 rounded-lg flex text-primary hover:-translate-y-2 duration-300 hover:bg-primary hover:text-white "
            >
              Send message <BsArrowRight className="text-xl ml-2 " />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
