import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Logo from "../assets/LM_Logo.jpeg";

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
    <div>
      <div className="mt-28">
        <div className="relative">
          <div className="w-full">
            <div className="w-full px-4 mx-auto max-w-[1400px] pb-12">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <div className="flex flex-col space-y-6 w-full">
                  <div className="flex items-center md:justify-start justify-center ">
                    <div className="h-4 w-1 bg-mainColor"></div>
                    <h1 className="ml-2 text-lg font-bold text-mainColor uppercase">
                      About LM Club
                    </h1>
                  </div>

                  <div className="lg:text-5xl text-4xl md:text-start text-center font-bold text-headingColor">
                    <h1>Empowering Connections, Cultivating Success</h1>
                  </div>

                  <div className="md:text-lg text-base text-sideHeading md:text-start text-center">
                    <p>
                      At Laoe Maom, we are dedicated to fostering a vibrant
                      culture that propels our members and businesses to
                      connect, collaborate, and create opportunities. Anchored
                      in the principle of TEAM (Together Everyone Achieves
                      More), we harness the power of human cooperation to
                      accomplish significant goals incrementally.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-2">
                    <div className="bg-[#f8f9fa] rounded flex flex-col justify-center items-center p-4">
                      <div className="text-4xl font-semibold hidden">
                        <h1>3.5</h1>
                      </div>
                      <div className="text-sideHeading font-semibold">
                        <p>World wide Accessibility</p>
                      </div>
                    </div>
                    <div className="bg-[#f8f9fa] rounded flex flex-col justify-center items-center p-4">
                      <div className="text-4xl font-semibold hidden">
                        <h1>830+</h1>
                      </div>
                      <div className="text-sideHeading font-semibold">
                        <p>Promote Entrepreneurship</p>
                      </div>
                    </div>
                    <div className="bg-[#f8f9fa] rounded flex flex-col justify-center items-center p-4">
                      <div className="text-4xl font-semibold hidden">
                        <h1>23</h1>
                      </div>
                      <div className="text-sideHeading font-semibold">
                        <p>Expand the Horizons</p>
                      </div>
                    </div>
                    <div className="bg-[#f8f9fa] rounded flex flex-col justify-center items-center p-4">
                      <div className="text-4xl font-semibold hidden">
                        <h1>100K</h1>
                      </div>
                      <div className="text-sideHeading font-semibold">
                        <p>Engage the Members</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center items-center">
                  <div>
                    <img
                      src="https://www.plentific.com/_next/image/?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F233758%2F1224x1024%2F92e7f917c6%2Fgraphic.jpg&w=1920&q=75"
                      alt=""
                      width="612"
                      height="512"
                      className="rounded"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-8">
                <div className="bg-[#f8f9fa] rounded p-8">
                  <div className="space-y-2 md:text-start text-center md:mx-4">
                    <div className="flex items-center md:justify-start justify-center ">
                      <div className="h-4 w-1 bg-mainColor"></div>
                      <h1 className="ml-2 text-lg font-semibold text-mainColor">
                        Our Mission
                      </h1>
                    </div>
                    <div className="md:text-4xl text-3xl font-bold text-headingColor md:w-3/4">
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
                <div className="bg-[#f8f9fa] rounded p-8">
                  <div className="space-y-2 md:text-start text-center md:mx-4">
                    <div className="flex items-center md:justify-start justify-center ">
                      <div className="h-4 w-1 bg-mainColor"></div>
                      <h1 className="ml-2 text-lg font-semibold text-mainColor">
                        Our Vision
                      </h1>
                    </div>
                    <div className="md:text-4xl text-3xl font-bold text-headingColor md:w-3/4">
                      <h1>Enhanced collaboration & mutual benefit</h1>
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
                  <a href="" class="flex md:justify-start justify-center">
                    <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                      <div class="space-y-4">
                        <div class="flex justify-center items-center">
                          <img
                            src="https://images.ctfassets.net/p24lh3qexxeo/4T0cBbXXIQ3CRWIaQlGxBD/0879f3b9df1ef3a4cd13bdcf910344e5/Frame_4104_2x.png?w=1080&h=1094&q=80&fm=webp"
                            alt=""
                            class="w-20 h-20"
                          />
                        </div>
                        <div class="flex justify-center items-center">
                          <h1 class="text-3xl text-colorTwo font-bold text-center">
                            Reward Collaboration
                          </h1>
                        </div>

                        <div class="flex justify-center items-center text-gray-600 text-center">
                          <p>
                            Recognize member initiatives with businesses both
                            locally and globally with incentives.
                          </p>
                        </div>

                        <div className="flex justify-center">
                          <a
                            href="/contact-us"
                            class="border-[1px] border-mainColor text-mainColor transition duration-1000 font-semibold text-colorFour py-2 px-4 rounded-full"
                          >
                            View Features
                          </a>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a href="" class="flex md:justify-start justify-center">
                    <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                      <div class="space-y-4">
                        <div class="flex justify-center items-center">
                          <img
                            src="https://images.ctfassets.net/p24lh3qexxeo/4YzizdfYjYbQzK1UqnWXeN/20ae4c6430d4d3fce733b638c280750b/Frame_4103_2x.png?w=1080&h=1094&q=80&fm=webp"
                            alt=""
                            class="w-20 h-20"
                          />
                        </div>

                        <div class="flex justify-center items-center">
                          <h1 class=" text-3xl text-colorTwo font-bold text-center">
                            Build Global Community
                          </h1>
                        </div>

                        <div class="flex justify-center items-center text-gray-600 text-center">
                          <p>
                            Establish a global presence that encourages
                            networking and mutual benefits.
                          </p>
                        </div>

                        <div className="flex justify-center">
                          <a
                            href="/contact-us"
                            class="border-[1px] border-mainColor text-mainColor transition duration-1000 font-semibold text-colorFour py-2 px-4 rounded-full"
                          >
                            View Features
                          </a>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a href="" class="flex md:justify-start justify-center">
                    <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                      <div class="space-y-4">
                        <div class="flex justify-center items-center">
                          <img
                            src="https://images.ctfassets.net/p24lh3qexxeo/4IqbCNJne6WmRSe7XdEM7w/6d1fc73b3d5fc612bdb484a64598a7c7/Frame_4102_2x.png?w=1078&h=1094&q=80&fm=webp"
                            alt=""
                            class="w-20 h-20"
                          />
                        </div>

                        <div class="flex justify-center items-center">
                          <h1 class=" text-3xl text-colorTwo font-bold text-center">
                            Foster Social Bonds
                          </h1>
                        </div>

                        <div class="flex justify-center items-center text-gray-600 text-center">
                          <p>
                            Develop a nurturing environment that fosters
                            enduring friendships and a robust social network.
                          </p>
                        </div>

                        <div className="flex justify-center">
                          <a
                            href="/contact-us"
                            class="border-[1px] border-mainColor text-mainColor transition duration-1000 font-semibold text-colorFour py-2 px-4 rounded-full"
                          >
                            View Features
                          </a>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div class=" lg:grid-cols-2 grid-cols-1 gap-6 pt-8 hidden">
                  <div class="flex md:justify-start justify-center w-full">
                    <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                      <div class="space-y-6">
                        <div class="flex lg:justify-start justify-center items-center">
                          <img
                            src="https://uptimerobot.com/assets/images/monitor-icons/ssl-monitoring.svg"
                            alt=""
                            class="w-20 h-20"
                          />
                        </div>
                        <div class="flex lg:justify-start justify-center items-center">
                          <h1 class="text-2xl font-bold">Website monitoring</h1>
                        </div>

                        <div class="flex lg:justify-start justify-center items-center lg:text-start text-center text-gray-600 text-lg">
                          <p>
                            Is the email service still UP? How about the
                            critical database server? Let's check! Monitor any
                            specific service running on any port.
                          </p>
                        </div>

                        <div class="flex lg:justify-start justify-center">
                          <a
                            href="/contact"
                            class="relative inline-flex items-center justify-center py-3 px-20 overflow-hidden font-semibold text-brand shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition duration-1000 ease-out bg-white hover:bg-brand rounded-3xl group"
                          >
                            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-colorOne duration-300 -translate-x-full group-hover:translate-x-0 ease-in-out"></span>
                            <span class="absolute flex items-center justify-center w-full h-full font-bold hover:text-white duration-1000 transition ease-in-out">
                              Website monitoring
                            </span>
                            <span class="relative invisible">Button Text</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="flex md:justify-start justify-center">
                    <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                      <div class="space-y-6">
                        <div class="flex lg:justify-start justify-center items-center">
                          <img
                            src="https://uptimerobot.com/assets/images/monitor-icons/cron-job-monitoring.svg"
                            alt=""
                            class="w-20 h-20"
                          />
                        </div>
                        <div class="flex lg:justify-start justify-center items-center">
                          <h1 class="text-2xl font-bold">
                            Cron job monitoring
                          </h1>
                        </div>

                        <div class="flex lg:justify-start justify-center items-center lg:text-start text-center text-gray-600 text-lg">
                          <p>
                            Is the email service still UP? How about the
                            critical database server? Let's check! Monitor any
                            specific service running on any port.
                          </p>
                        </div>

                        <div class="flex lg:justify-start justify-center">
                          <a
                            href="/contact"
                            class="relative inline-flex items-center justify-center py-3 px-20 overflow-hidden font-semibold hover:bg-brand text-brand shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition duration-1000 ease-out bg-white rounded-3xl group"
                          >
                            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-colorOne duration-300 -translate-x-full group-hover:translate-x-0 ease-in-out"></span>
                            <span class="absolute flex items-center justify-center w-full h-full font-bold hover:text-white duration-1000 transition ease-in-out">
                              Cron Job Monitoring
                            </span>
                            <span class="relative invisible">Button Text</span>
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
