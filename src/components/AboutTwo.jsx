import { FaGlobe, FaHandshake, FaMedal } from "react-icons/fa";
import Founder from "../assets/Founder.jpeg";
import { FaLinkedinIn } from "react-icons/fa6";
import { TiArrowRight } from "react-icons/ti";
import Logo from "../assets/LM_Logo.jpeg";
import globalThree from "../assets/globeThree.jpg";
import gPay from "../assets/GPlay.webp";
import appStore from "../assets/AppStore.webp";

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
                                href="/contact-us"
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

      <div>
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] ">
              <div className="p-4">
                <div
                  className="grid md:grid-cols-2 grid-cols-1 gap-4 pt-12"
                  id="logo_meaning"
                >
                  <div className="flex flex-col space-y-6 w-full md:justify-center">
                    <div className="flex items-center md:justify-start justify-center ">
                      <div className="h-4 w-1 bg-green-500"></div>
                      <h1 className="ml-2 font-bold text-green-500 uppercase">
                        About the Logo
                      </h1>
                    </div>

                    <div className="lg:text-4xl text-2xl md:text-start text-center md:font-bold text-headingColor font-bold">
                      <h1>
                        Laoe Maom (LAOE MAOM): Least Amount of Effort, Most
                        Amount of Money
                      </h1>
                    </div>

                    <div className="text-sideHeading md:text-start text-center">
                      <p>
                        Laoe Maom embodies progress and adaptability, responding
                        dynamically to the evolving relationships and interests
                        in our global landscape. We are a collective of
                        individuals and businesses worldwide, committed to
                        mutual support and shared success. By joining forces, we
                        breathe life into businesses and nurture them to thrive.
                        Let’s achieve greatness together.
                      </p>
                    </div>

                    <div className="flex items-center lg:justify-start justify-center ">
                      <a
                        href="/contact-us"
                        className="group border-[1px] relative px-6 py-2 text-green-500 text-sm rounded-full border-green-500 font-semibold overflow-hidden flex items-center gap-2 w-[200px] hover:bg-green-500 hover:text-white duration-1000 ease-in-out transition hover:font-medium"
                      >
                        <span className="relative z-10 flex-[8] text-center">
                          Contact Us
                        </span>
                        <span className="w-7 h-7 flex items-center justify-center rounded-full bg-green-500 flex-[2] transition duration-1000 ease-in-out text-black group-hover:bg-white group-hover:text-green-500">
                          <TiArrowRight className=" text-lg" />
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="w-full flex justify-center">
                      <img
                        src={Logo}
                        alt="logo"
                        height={400}
                        className="rounded w-[50%]"
                      />
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
            <div className="w-full mx-auto max-w-[1400px] ">
              <div className="p-4">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <div className="flex justify-center items-center">
                    <div className="w-full">
                      <img
                        src={Founder}
                        alt="founder"
                        className="rounded lg:h-[500px] h-auto md:w-[90%] w-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col space-y-6 w-full md:justify-center">
                    <div className="flex items-center md:justify-start justify-center ">
                      <div className="h-4 w-1 bg-mainColor"></div>
                      <h1 className="ml-2 font-bold text-green-500 uppercase">
                        About the founder
                      </h1>
                    </div>

                    <div className="lg:text-4xl text-2xl md:text-start text-center font-bold text-headingColor">
                      <h1>Rickardo Anderson</h1>
                    </div>

                    <div className="text-sideHeading space-y-2 md:text-start text-center">
                      <p>
                        Laoe Maom is more than a membership club; it’s a
                        community built on the principles of collaboration,
                        positivity, and shared success. Founded by Richard
                        Anderson and Sandy Pittman, Laoe Maom focuses on
                        fostering a positive culture that energizes and
                        motivates its members and businesses to network and
                        create opportunities together.
                      </p>
                      <p>
                        My mission, as the founder, is clear: to forge the
                        premier networking club that supports our members and
                        businesses efficiently and effectively. We strive to
                        streamline success, minimizing time expenditure and
                        maximizing achievements. Join us to transcend barriers
                        and unlock a realm of exceptional networking and
                        opportunities! To expand our vibrant community to 2.5
                        billion members worldwide, creating a network of
                        opportunities and shared success.
                      </p>
                    </div>

                    <div className="flex items-center lg:justify-start justify-center ">
                      <a
                        href="/contact-us"
                        className="group border-[1px] relative px-6 py-2 text-green-500 text-sm rounded-full border-green-500 font-semibold overflow-hidden flex items-center gap-2 w-[200px] hover:bg-green-500 hover:text-white duration-1000 ease-in-out transition hover:font-medium"
                      >
                        <span className="relative z-10 flex-[8] text-center">
                          Contact Us
                        </span>
                        <span className="w-7 h-7 flex items-center justify-center rounded-full bg-green-500 flex-[2] transition duration-1000 ease-in-out text-black group-hover:bg-white group-hover:text-green-500">
                          <TiArrowRight className=" text-lg" />
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

      <div className="pt-8">
        <div className="relative lg:block hidden">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] ">
              <div className="p-4">
                <div className="flex bg-white rounded-lg my-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-[100%] ">
                  <div className="flex-1 px-10 py-24 space-y-4 ">
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black ">
                      {/* <p className="">
                              Unlock the power with <br />
                              our Game-Changing Widgets!{" "}
                            </p> */}
                      <div className="flex flex-wrap flex-col lg:items-start items-start pb-3">
                        <div className=" lg:text-start text-center leading-relaxed text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
                          <p>
                            {" "}
                            Unlock the power with <br />
                            our Game-Changing Widgets!{" "}
                          </p>
                        </div>
                        <div className="md:w-36 w-28 h-1 border-b-2 border-green-500 mt-[1px]"></div>
                      </div>
                    </div>

                    <div className="flex flex-row gap-2 pt-2">
                      <a href="https://play.google.com/store/apps/details?id=com.lm.lmclub&hl=en_US">
                        <img
                          src={gPay}
                          alt="gPay"
                          className="md:w-auto md:h-[56px] h-auto w-auto"
                        />
                      </a>
                      <a href="https://apps.apple.com/us/app/lm-club/id6469708246">
                        <img
                          src={appStore}
                          alt="appStore"
                          className="md:w-auto md:h-[56px] h-auto w-auto"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="w-[57%] overflow-hidden relative ">
                    <img
                      className="w-[100%] shadow absolute object-cover bottom-0 right-0"
                      src={globalThree}
                      alt="app"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutTwo;
