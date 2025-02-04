import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Logo from "../assets/LM_Logo.jpeg";
import { FaGlobe, FaHandshake, FaMedal } from "react-icons/fa";
import { TiArrowRight } from "react-icons/ti";
import intro from "../assets/Intro.mp4";

const AboutHero = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="lg:pt-36 pt-28">
      <div className="relative">
        <div className="w-full">
          <div className="w-full mx-auto max-w-[1400px] ">
            <div className="p-4">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                <div className="flex flex-col space-y-3 w-full">
                  <div className="flex items-center md:justify-start justify-center ">
                    <div className="h-4 w-1 bg-green-500"></div>
                    <h1 className="ml-2 font-bold text-green-500 lg:uppercase">
                      About LM Club
                    </h1>
                  </div>

                  <div className="lg:text-4xl text-2xl md:text-start text-center font-bold text-headingColor">
                    <h1>Empowering Connections, Cultivating Success</h1>
                  </div>

                  <div className="text-gray-600 md:text-start text-center">
                    <p>
                      At Laoe Maom, we are dedicated to fostering a vibrant
                      culture that propels our members and businesses to
                      connect, collaborate, and create opportunities. Anchored
                      in the principle of TEAM (Together Everyone Achieves
                      More), we harness the power of human cooperation to
                      accomplish significant goals incrementally.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-row gap-4">
                    <a
                      href="/contact-cdn"
                      className="group border-[1px] relative px-6 py-2 text-green-500 text-sm rounded-full border-green-500 font-semibold overflow-hidden flex items-center gap-2 w-[200px] hover:bg-green-500 hover:text-white duration-1000 ease-in-out transition hover:font-medium"
                    >
                      <span className="relative z-10 flex-[8] text-center">
                        Contact Us
                      </span>
                      <span className="w-7 h-7 flex items-center justify-center rounded-full bg-green-500 flex-[2] transition duration-1000 ease-in-out text-black group-hover:bg-white group-hover:text-green-500">
                        <TiArrowRight className=" text-lg" />
                      </span>
                    </a>
                    <a
                      href="/contact-cdn"
                      className="group border-[1px] relative px-6 py-2 text-green-500 text-sm rounded-full border-green-500 font-semibold overflow-hidden flex items-center gap-2 w-[200px] hover:bg-green-500 hover:text-white duration-1000 ease-in-out transition hover:font-medium"
                    >
                      <span className="relative z-10 flex-[8] text-center">
                        Learn More
                      </span>
                      <span className="w-7 h-7 flex items-center justify-center rounded-full bg-green-500 flex-[2] transition duration-1000 ease-in-out text-black group-hover:bg-white group-hover:text-green-500">
                        <TiArrowRight className=" text-lg" />
                      </span>
                    </a>
                  </div>

                  {/* <div className="grid md:grid-cols-2 pt-4 grid-cols-1 md:gap-4 gap-2">
                    <div className="bg-[#f8f9fa] rounded flex flex-col justify-center items-center p-4">
                      <div className="text-sideHeading font-semibold">
                        <p>World wide Accessibility</p>
                      </div>
                    </div>
                    <div className="bg-[#f8f9fa] rounded flex flex-col justify-center items-center p-4">
                      <div className="text-sideHeading font-semibold">
                        <p>Promote Entrepreneurship</p>
                      </div>
                    </div>
                    <div className="bg-[#f8f9fa] rounded flex flex-col justify-center items-center p-4">
                      <div className="text-sideHeading font-semibold">
                        <p>Expand the Horizons</p>
                      </div>
                    </div>
                    <div className="bg-[#f8f9fa] rounded flex flex-col justify-center items-center p-4">
                      <div className="text-sideHeading font-semibold">
                        <p>Engage the Members</p>
                      </div>
                    </div>
                  </div> */}
                </div>

                <div className="flex justify-center items-center lg:pt-0 pt-4">
                  <div>
                    <video
                      src={intro}
                      // width="612"
                      // height="512"
                      className="rounded w-auto h-auto"
                      autoPlay
                      muted
                      controls
                    />
                  </div>
                </div>
              </div>

              <div className="pt-16 grid lg:grid-cols-3 grid-cols-1 gap-4">
                <div className="space-y-1 flex flex-col justify-center items-center text-center">
                  <div>
                    <FaHandshake className="w-8 h-8 text-green-500" />
                  </div>
                  <div>
                    <p className="text-gray-600">
                      To foster enhanced collaboration & mutual benefit{" "}
                    </p>
                  </div>
                </div>

                <div className="space-y-1 flex flex-col justify-center items-center text-center">
                  <div>
                    <FaMedal className="w-8 h-8 text-green-500" />
                  </div>
                  <div>
                    <p className="text-gray-600">
                      To foster enhanced collaboration & mutual benefit{" "}
                    </p>
                  </div>
                </div>

                <div className="space-y-1 flex flex-col justify-center items-center text-center">
                  <div>
                    <FaGlobe className="w-8 h-8 text-green-500" />
                  </div>
                  <div>
                    <p className="text-gray-600">
                      To foster enhanced collaboration & mutual benefit{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1 gap-4 pt-16">
                <div className="bg-[#f8f9fa] rounded p-8 ">
                  <div className="space-y-2 md:text-start text-center md:mx-4">
                    <div className="flex items-center md:justify-start justify-center ">
                      <div className="h-4 w-1 bg-mainColor"></div>
                      <h1 className="ml-2 font-semibold text-mainColor">
                        Our Mission
                      </h1>
                    </div>
                    <div className="md:text-3xl text-2xl font-bold text-headingColor md:w-3/4">
                      <h1>A realm of exceptional networking</h1>
                    </div>
                    <div className="text-sideHeading">
                      <h1>
                        At Laoe Maom, we are dedicated to fostering a vibrant
                        culture that propels our members and businesses to
                        connect, collaborate, and create opportunities.
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="bg-[#f8f9fa] rounded p-8 ">
                  <div className="space-y-2 md:text-start text-center md:mx-4">
                    <div className="flex items-center md:justify-start justify-center ">
                      <div className="h-4 w-1 bg-mainColor"></div>
                      <h1 className="ml-2 font-semibold text-mainColor">
                        Our Vision
                      </h1>
                    </div>
                    <div className="md:text-3xl text-2xl font-bold text-headingColor md:w-3/4">
                      <h1>Enhanced collaboration & mutual benefit</h1>
                    </div>
                    <div className="text-sideHeading">
                      <h1>
                        At Laoe Maom, we believe in the true power of networking
                        providing you with powerful widgets that will
                        elevate your networking experience.
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="grid md:grid-cols-2 grid-cols-1 gap-4 pt-20"
                id="logo_meaning"
              >
                <div className="flex flex-col space-y-6 w-full md:justify-center">
                  <div className="flex items-center md:justify-start justify-center ">
                    <div className="h-4 w-1 bg-mainColor"></div>
                    <h1 className="ml-2 text-lg font-bold text-mainColor uppercase">
                      About the Logo
                    </h1>
                  </div>

                  <div className="lg:text-5xl text-4xl md:text-start text-center md:font-bold text-headingColor font-bold">
                    <h1>
                      Laoe Maom (LAOE MAOM): Least Amount of Effort, Most Amount
                      of Money
                    </h1>
                  </div>

                  <div className="lg:text-lg text-sideHeading md:text-start text-center">
                    <p>
                      Laoe Maom embodies progress and adaptability, responding
                      dynamically to the evolving relationships and interests in
                      our global landscape. We are a collective of individuals
                      and businesses worldwide, committed to mutual support and
                      shared success. By joining forces, we breathe life into
                      businesses and nurture them to thrive. Let’s achieve
                      greatness together.
                    </p>
                  </div>

                  <div className="md:flex items-center lg:justify-start justify-center hidden">
                    <a
                      href="/products"
                      className="bg-mainColor font-medium outline-none
                      rounded-full hover:shadow-form transition duration-1000 ease-in-out md:text-base text-sm text-white px-8 md:py-3 py-2 text-center"
                    >
                      Learn More
                    </a>
                  </div>

                  <div className="mx-8">
                    <a
                      href="/products"
                      className="bg-mainColor hover:bg-white hover:text-mainColor hover:border-[1px] hover:border-mainColor font-medium outline-none md:hidden block
                      rounded-full hover:shadow-form transition duration-1000 ease-in-out text-base text-white px-8 py-2.5 text-center"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="w-full flex justify-center">
                    <img
                      src={Logo}
                      alt=""
                      height="400"
                      className="rounded w-[60%]"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full px-4 mx-auto max-w-[1400px] mt-20">
                <div className="flex items-center text-center justify-center ">
                  <div className="h-4 w-1 bg-mainColor"></div>
                  <h1 className="ml-2 text-lg font-bold text-mainColor uppercase">
                    Our spectacular strength
                  </h1>
                </div>

                <div className="mx-auto max-w-[1000px] text-center mt-4">
                  <h1 className="text-4xl font-bold text-headingColor">
                    One team, fire core values.
                  </h1>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pt-8">
                  <a href="" className="flex md:justify-start justify-center">
                    <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                      <div className="space-y-4">
                        <div className="flex justify-center items-center">
                          <div className="flex justify-center items-center w-20 h-20 border-2 border-green-50 bg-green-50 rounded-full">
                            <FaHandshake size={36} className="text-mainColor" />
                          </div>
                        </div>
                        <div className="flex justify-center items-center">
                          <h1 className="text-3xl text-colorTwo font-bold text-center">
                            Reward Collaboration
                          </h1>
                        </div>

                        <div className="flex justify-center items-center text-gray-600 text-center">
                          <p>
                            Recognize member initiatives with businesses both
                            locally and globally with incentives.
                          </p>
                        </div>

                        <div className="flex justify-center">
                          <a
                            href="/contact-us"
                            className="border-[1px] border-mainColor text-mainColor transition duration-1000 font-semibold text-colorFour py-2 px-4 rounded-full"
                          >
                            View Features
                          </a>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a href="" className="flex md:justify-start justify-center">
                    <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                      <div className="space-y-4">
                        <div className="flex justify-center items-center">
                          <div className="flex justify-center items-center w-20 h-20 border-2 border-green-50 bg-green-50 rounded-full">
                            <FaMedal size={36} className="text-mainColor" />
                          </div>
                        </div>

                        <div className="flex justify-center items-center">
                          <h1 className=" text-3xl text-colorTwo font-bold text-center">
                            Build Global Community
                          </h1>
                        </div>

                        <div className="flex justify-center items-center text-gray-600 text-center">
                          <p>
                            Establish a global presence that encourages
                            networking and mutual benefits.
                          </p>
                        </div>

                        <div className="flex justify-center">
                          <a
                            href="/contact-us"
                            className="border-[1px] border-mainColor text-mainColor transition duration-1000 font-semibold text-colorFour py-2 px-4 rounded-full"
                          >
                            View Features
                          </a>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a href="" className="flex md:justify-start justify-center">
                    <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                      <div className="space-y-4">
                        <div className="flex justify-center items-center">
                          <div className="flex justify-center items-center w-20 h-20 border-2 border-green-50 bg-green-50 rounded-full">
                            <FaGlobe size={36} className="text-mainColor" />
                          </div>
                        </div>

                        <div className="flex justify-center items-center">
                          <h1 className=" text-3xl text-colorTwo font-bold text-center">
                            Foster Social Bonds
                          </h1>
                        </div>

                        <div className="flex justify-center items-center text-gray-600 text-center">
                          <p>
                            Develop a nurturing environment that fosters
                            enduring friendships and a robust social network.
                          </p>
                        </div>

                        <div className="flex justify-center">
                          <a
                            href="/contact-us"
                            className="border-[1px] border-mainColor text-mainColor transition duration-1000 font-semibold text-colorFour py-2 px-4 rounded-full"
                          >
                            View Features
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
                            critical database server? Let's check! Monitor any
                            specific service running on any port.
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
                            critical database server? Let's check! Monitor any
                            specific service running on any port.
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
  );
};

export default AboutHero;
