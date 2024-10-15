import Founder from "../assets/Founder.jpeg";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

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

                  <div className="md:text-5xl text-4xl md:text-start text-center font-semibold">
                    <h1>Empowering Connections, Cultivating Success</h1>
                  </div>

                  <div className="text-lg text-[#2b2a35] md:text-start text-center">
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
                      <div className="text-gray-700 font-semibold">
                        <p>World wide Accessibility</p>
                      </div>
                    </div>
                    <div className="bg-[#f8f9fa] rounded flex flex-col justify-center items-center p-4">
                      <div className="text-4xl font-semibold hidden">
                        <h1>830+</h1>
                      </div>
                      <div className="text-gray-700 font-semibold">
                        <p>Promote Entrepreneurship</p>
                      </div>
                    </div>
                    <div className="bg-[#f8f9fa] rounded flex flex-col justify-center items-center p-4">
                      <div className="text-4xl font-semibold hidden">
                        <h1>23</h1>
                      </div>
                      <div className="text-gray-700 font-semibold">
                        <p>Expand the Horizons</p>
                      </div>
                    </div>
                    <div className="bg-[#f8f9fa] rounded flex flex-col justify-center items-center p-4">
                      <div className="text-4xl font-semibold hidden">
                        <h1>100K</h1>
                      </div>
                      <div className="text-gray-700 font-semibold">
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
                    <div className="md:text-4xl text-3xl font-semibold md:w-3/4">
                      <h1>A realm of exceptional networking</h1>
                    </div>
                    <div className="text-gray-700">
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
                    <div className="md:text-4xl text-3xl font-semibold md:w-3/4">
                      <h1>Enhanced collaboration & mutual benefit</h1>
                    </div>
                    <div className="text-gray-700">
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
                className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-20"
                id="about_founder"
              >
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

                  <div className="md:text-5xl text-4xl md:text-start text-center font-semibold">
                    <h1>Rickardo Anderson</h1>
                  </div>

                  <div className="text-lg text-[#2b2a35] md:text-start text-center">
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

                  <div className="pt-6 flex md:justify-start justify-center">
                    <a
                      href="/contact-us"
                      className="bg-mainColor font-semibold outline-none
                      rounded hover:shadow-form transition duration-1000 ease-in-out md:text-base text-sm text-white px-8 md:py-3 py-3 text-center"
                    >
                      Contact Us
                    </a>
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
