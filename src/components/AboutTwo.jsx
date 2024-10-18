import { FaLinkedin } from "react-icons/fa";
import Founder from "../assets/Founder.jpeg";
import { FaLinkedinIn } from "react-icons/fa6";

const AboutTwo = () => {
  return (
    <div>
      <div className="lg:pt-28 pt-20" id="about_founder">
        <div className="relative">
          <div className="w-full">
            <div className="w-full px-4 mx-auto max-w-[1400px] pb-12">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <div className="flex justify-center items-center">
                  <div className="w-full">
                    <img
                      src={Founder}
                      alt=""
                      height="400"
                      className="rounded md:w-[70%] w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-6 w-full md:justify-center">
                  <div className="flex items-center md:justify-start justify-center ">
                    <div className="h-4 w-1 bg-mainColor"></div>
                    <h1 className="ml-2 text-lg font-bold text-mainColor uppercase">
                      About the founder
                    </h1>
                  </div>

                  <div className="lg:text-5xl text-4xl md:text-start text-center font-semibold">
                    <h1>Rickardo Anderson</h1>
                  </div>

                  <div className="md:text-lg text-[#2b2a35] md:text-start text-center">
                    <p>
                      My mission, as the founder, is clear: to forge the premier
                      networking club that supports our members and businesses
                      efficiently and effectively. We strive to streamline
                      success, minimizing time expenditure and maximizing
                      achievements. Join us to transcend barriers and unlock a
                      realm of exceptional networking and opportunities! To
                      expand our vibrant community to 2.5 billion members
                      worldwide, creating a network of opportunities and shared
                      success.
                    </p>
                  </div>

                  <div className="md:pt-6 pt-2 flex md:justify-start justify-center">
                    <a
                      href="https://www.linkedin.com/in/rickardo-anderson-a8964a220/"
                      className="bg-mainColor outline-none
                      rounded hover:shadow-form font-medium flex items-center transition duration-1000 ease-in-out md:text-base text-sm text-white px-8 md:py-3 py-3 text-center"
                    >
                      <FaLinkedinIn size={16} />
                      <span className="ml-1">LinkedIn Profile</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 
      <div className="bg-white border-2 border-red-500">
        <div className="relative md:pt-32 md:pb-32 pt-20 pb-12">
          <div className="w-full">
            <div className="w-full px-4 mx-auto max-w-[1400px]">
              <div className="flex max-w-5xl mx-auto gap-8 group">
                <div className="bg-white/10 duration-1000 cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 p-8 rounded-xl mix-blend-luminosity ">
                  <img
                    src="http://localhost:5173/src/assets/Founder.jpeg"
                    alt=""
                    className="h-20 mx-auto "
                  />
                  <h4 className="uppercase text-xl font-bold">John Doe</h4>
                  <p className="text-sm leading-7 my-3  font-light opacity-50">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam culpa libero perspiciatis recusandae laudantium
                    asperiores provident nam beatae dolores adipisci dolore vel
                    sapiente itaque, sit et quasi. Eos, libero odio.
                  </p>
                  <button className="bg-violet-500 py-2.5 px-8 rounded-full">
                    Get In Touch
                  </button>
                </div>
                <div className="bg-white/10 duration-1000 cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 p-8 rounded-xl mix-blend-luminosity ">
                  <img
                    src="http://localhost:5173/src/assets/Founder.jpeg"
                    alt=""
                    className="h-20 mx-auto "
                  />
                  <h4 className="uppercase text-xl font-bold">John Doe</h4>
                  <p className="text-sm leading-7 my-3  font-light opacity-50">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam culpa libero perspiciatis recusandae laudantium
                    asperiores provident nam beatae dolores adipisci dolore vel
                    sapiente itaque, sit et quasi. Eos, libero odio.
                  </p>
                  <button className="bg-violet-500 py-2.5 px-8 rounded-full">
                    Get In Touch
                  </button>
                </div>
                <div className="bg-white/10 duration-1000 cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 p-8 rounded-xl mix-blend-luminosity ">
                  <img
                    src="http://localhost:5173/src/assets/Founder.jpeg"
                    alt=""
                    className="h-20 mx-auto "
                  />
                  <h4 className="uppercase text-xl font-bold">John Doe</h4>
                  <p className="text-sm leading-7 my-3  font-light opacity-50">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam culpa libero perspiciatis recusandae laudantium
                    asperiores provident nam beatae dolores adipisci dolore vel
                    sapiente itaque, sit et quasi. Eos, libero odio.
                  </p>
                  <button className="bg-violet-500 py-2.5 px-8 rounded-full">
                    Get In Touch
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;
