import { FaGlobe, FaHandshake, FaMedal } from "react-icons/fa";
import Founder from "../assets/Founder.jpeg";
import { FaLinkedinIn } from "react-icons/fa6";
import { TiArrowRight } from "react-icons/ti";

const AboutTwo = () => {
  return (
    <>
      <div className="pb-8 mt-12">
        <div className="relative">
          <div className="relative inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <img
              src="https://images.pexels.com/photos/6405771/pexels-photo-6405771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="about_image"
              className="w-full lg:h-[600px] h-[800px] object-cover"
            />
            <div className="w-full absolute top-0 left-0">
              <div className="w-full mx-auto max-w-[1400px] ">
                <div className="p-4 lg:pt-20 pt-16">
                  <div className="w-full px-4 mx-auto max-w-[1400px] ">
                    <div className="flex items-center text-center justify-center ">
                      <div className="h-4 w-1 bg-green-500"></div>
                      <h1 className="ml-2 font-bold text-green-500 uppercase">
                        Our spectacular strength
                      </h1>
                    </div>

                    <div className="mx-auto max-w-[1000px] text-center mt-4">
                      <h1 className="lg:text-4xl text-2xl font-semibold text-gray-50">
                        One team, fire core values.
                      </h1>
                    </div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pt-8">
                      <a
                        href="/contact-us"
                        className="flex md:justify-start justify-center"
                      >
                        <div className="w-full backdrop-blur-md p-6 rounded text-gray-50  bg-white/20">
                          <div className="space-y-3">
                            <div className="flex lg:justify-start justify-center items-center">
                              <div className="flex justify-center items-center w-[58px] h-[58px] border-2 border-gray-50 bg-gray-50 rounded-full">
                                <FaHandshake
                                  size={28}
                                  className="text-green-500"
                                />
                              </div>
                            </div>
                            <div className="flex lg:justify-start justify-center items-center">
                              <h1 className="text-2xl text-colorTwo font-bold text-center">
                                Reward Collaboration
                              </h1>
                            </div>

                            <div className="flex lg:justify-start justify-center items-center text-white lg:text-start text-center">
                              <p>
                                Recognize member initiatives with businesses
                                both locally and globally with incentives.
                              </p>
                            </div>

                            <div className="flex lg:justify-start justify-center pt-2">
                              <a
                                href="/contact-us"
                                className="group border-[1px] relative px-6 py-[6px] text-gray-50 text-sm rounded-full border-gray-50  font-semibold overflow-hidden flex items-center gap-2 w-[200px] "
                              >
                                <span className="relative z-10 flex-[8] text-center">
                                  Learn More
                                </span>
                                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-50 flex-[2] transition duration-1000 ease-in-out text-black group-hover:bg-white group-hover:text-green-500">
                                  <TiArrowRight className=" text-lg" />
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </a>

                      <a
                        href="/contact-us"
                        className="flex md:justify-start justify-center"
                      >
                        <div className="w-full backdrop-blur-md p-6 rounded text-gray-50  bg-white/20">
                          <div className="space-y-3">
                            <div className="flex lg:justify-start justify-center items-center">
                              <div className="flex justify-center items-center w-[58px] h-[58px] border-2 border-gray-50 bg-gray-50 rounded-full">
                                <FaMedal size={28} className="text-green-500" />
                              </div>
                            </div>

                            <div className="flex lg:justify-start justify-center items-center">
                              <h1 className="text-2xl text-colorTwo font-bold text-center">
                                Build Global Community
                              </h1>
                            </div>

                            <div className="flex lg:justify-start justify-center items-center text-white lg:text-start text-center">
                              <p>
                                Establish a global presence that encourages
                                networking and mutual benefits.
                              </p>
                            </div>

                            <div className="flex lg:justify-start justify-center pt-2">
                              <a
                                href="/contact-us"
                                className="group border-[1px] relative px-6 py-[6px] text-gray-50 text-sm rounded-full border-gray-50  font-semibold overflow-hidden flex items-center gap-2 w-[200px] "
                              >
                                <span className="relative z-10 flex-[8] text-center">
                                  Learn More
                                </span>
                                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-50 flex-[2] transition duration-1000 ease-in-out text-black group-hover:bg-white group-hover:text-green-500">
                                  <TiArrowRight className=" text-lg" />
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </a>

                      <a
                        href="/contact-us"
                        className="lg:flex hidden md:justify-start justify-center"
                      >
                        <div className="w-full backdrop-blur-md p-6 rounded text-gray-50  bg-white/20">
                          <div className="space-y-3">
                            <div className="flex lg:justify-start justify-center items-center">
                              <div className="flex justify-center items-center w-[58px] h-[58px] border-2 border-gray-50 bg-gray-50 rounded-full">
                                <FaGlobe size={28} className="text-green-500" />
                              </div>
                            </div>

                            <div className="flex lg:justify-start justify-center items-center">
                              <h1 className="text-2xl text-colorTwo font-bold text-center">
                                Foster Social Bonds
                              </h1>
                            </div>

                            <div className="flex lg:justify-start justify-center items-center text-white lg:text-start text-center">
                              <p>
                                Develop a nurturing environment that fosters
                                enduring friendships and a robust social
                                network.
                              </p>
                            </div>

                            <div className="flex lg:justify-start justify-center pt-2">
                              <a
                                href="/contact-us"
                                className="group border-[1px] relative px-6 py-[6px] text-gray-50 text-sm rounded-full border-gray-50  font-semibold overflow-hidden flex items-center gap-2 w-[200px] "
                              >
                                <span className="relative z-10 flex-[8] text-center">
                                  Learn More
                                </span>
                                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-50 flex-[2] transition duration-1000 ease-in-out text-black group-hover:bg-white group-hover:text-green-500">
                                  <TiArrowRight className=" text-lg" />
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>

                    <div className=" lg:grid-cols-2 grid-cols-1 gap-6 pt-8 hidden">
                      <div className="flex md:justify-start justify-center w-full">
                        <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                          <div className="space-y-6">
                            <div className="flex lg:justify-start justify-center items-center">
                              <img
                                src="https://uptimerobot.com/assets/images/monitor-icons/ssl-monitoring.svg"
                                alt=""
                                className="w-20 h-20"
                              />
                            </div>
                            <div className="flex lg:justify-start justify-center items-center">
                              <h1 className="text-2xl font-bold">
                                Website monitoring
                              </h1>
                            </div>

                            <div className="flex lg:justify-start justify-center items-center lg:text-start text-center text-gray-600 text-lg">
                              <p>
                                Is the email service still UP? How about the
                                critical database server? Let's check! Monitor
                                any specific service running on any port.
                              </p>
                            </div>

                            <div className="flex lg:justify-start justify-center">
                              <a
                                href="/contact"
                                className="relative inline-flex items-center justify-center py-3 px-20 overflow-hidden font-semibold text-brand shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition duration-1000 ease-out bg-white hover:bg-brand rounded-3xl group"
                              >
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-colorOne duration-300 -translate-x-full group-hover:translate-x-0 ease-in-out"></span>
                                <span className="absolute flex items-center justify-center w-full h-full font-bold hover:text-white duration-1000 transition ease-in-out">
                                  Website monitoring
                                </span>
                                <span className="relative invisible">
                                  Button Text
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex md:justify-start justify-center">
                        <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                          <div className="space-y-6">
                            <div className="flex lg:justify-start justify-center items-center">
                              <img
                                src="https://uptimerobot.com/assets/images/monitor-icons/cron-job-monitoring.svg"
                                alt=""
                                className="w-20 h-20"
                              />
                            </div>
                            <div className="flex lg:justify-start justify-center items-center">
                              <h1 className="text-2xl font-bold">
                                Cron job monitoring
                              </h1>
                            </div>

                            <div className="flex lg:justify-start justify-center items-center lg:text-start text-center text-gray-600 text-lg">
                              <p>
                                Is the email service still UP? How about the
                                critical database server? Let's check! Monitor
                                any specific service running on any port.
                              </p>
                            </div>

                            <div className="flex lg:justify-start justify-center">
                              <a
                                href="/contact"
                                className="relative inline-flex items-center justify-center py-3 px-20 overflow-hidden font-semibold hover:bg-brand text-brand shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition duration-1000 ease-out bg-white rounded-3xl group"
                              >
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-colorOne duration-300 -translate-x-full group-hover:translate-x-0 ease-in-out"></span>
                                <span className="absolute flex items-center justify-center w-full h-full font-bold hover:text-white duration-1000 transition ease-in-out">
                                  Cron Job Monitoring
                                </span>
                                <span className="relative invisible">
                                  Button Text
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:pt-28 pt-12" id="about_founder">
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

                  <div className="lg:text-5xl text-4xl md:text-start text-center font-bold text-headingColor">
                    <h1>Rickardo Anderson</h1>
                  </div>

                  <div className="md:text-lg text-sideHeading md:text-start text-center">
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

                  <div className="md:flex items-center lg:justify-start justify-center hidden">
                    <a
                      href="https://www.linkedin.com/in/rickardo-anderson-a8964a220/"
                      className="bg-mainColor font-medium outline-none
                      rounded-full flex items-center hover:shadow-form transition duration-1000 ease-in-out md:text-base text-sm text-white px-8 md:py-3 py-2 text-center"
                    >
                      <FaLinkedinIn size={16} />
                      <span className="ml-1">LinkedIn Profile</span>
                    </a>
                  </div>

                  <div className="mx-8 md:hidden block">
                    <a
                      href="https://www.linkedin.com/in/rickardo-anderson-a8964a220/"
                      className="bg-mainColor flex items-center justify-center hover:bg-white hover:text-mainColor hover:border-[1px] hover:border-mainColor font-medium outline-none
                      rounded-full hover:shadow-form transition duration-1000 ease-in-out text-base text-white px-8 py-2.5 text-center"
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
    </>
  );
};

export default AboutTwo;
