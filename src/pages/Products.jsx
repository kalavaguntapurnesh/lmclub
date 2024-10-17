import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import { FaArrowRight } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaMicrophoneAlt, FaRocketchat } from "react-icons/fa";

const Products = () => {
  return (
    <div>
      {" "}
      <Navbar />
      <ScrollToTop />
      <div className="mt-28">
        <div className="relative">
          <div className="w-full">
            <div className="w-full px-4 mx-auto max-w-[1400px] pb-12">
              <div className="max-w-[1400px] m-auto grid lg:grid-cols-2 lg:mx-4 gap-6">
                <div className="flex flex-col gap-4 w-full space-y-2">
                  <div className="flex items-center lg:justify-start justify-center ">
                    <div className="h-4 w-1 bg-mainColor"></div>
                    <h1 className="ml-2 text-lg font-bold text-mainColor uppercase">
                      The best Widget for you
                    </h1>
                  </div>
                  <div className=" flex items-center lg:justify-start justify-center ">
                    <h1 className="xl:text-5xl text-4xl font-bold text-[#3d454d] lg:text-start text-center">
                      Pathway to a global connectivity products.
                    </h1>
                  </div>

                  <div className="flex items-center lg:justify-start justify-center ">
                    <p className="lg:text-lg text-[16px] text-gray-600  lg:text-start text-center">
                      Welcome to Laoe Maom – The Global Membership Club Where
                      Businesses and Members Connect. Experience Powerful
                      Networking and Exceptional Rewards!
                    </p>
                  </div>

                  <div className="flex items-center lg:justify-start justify-center">
                    <a
                      href="/rewards"
                      className="bg-mainColor outline-none
                      rounded hover:shadow-form transition duration-1000 ease-in-out md:text-base text-sm text-white px-8 md:py-3 py-2 text-center"
                    >
                      Get for Free
                    </a>
                    <a
                      href="/login"
                      className="outline-none 
                      rounded flex items-center hover:border-[1px] hover:border-mainColor transition duration-1000 ease-in-out md:text-base text-sm text-mainColor px-8 md:py-3 py-2 text-center ml-2"
                    >
                      <span className="mr-1">Learn More</span>
                      <FaArrowRight size={20} />
                    </a>
                  </div>
                </div>

                <div className="flex justify-center lg:justify-center items-start ">
                  <img
                    src="https://lmclub.club/wp-content/uploads/elementor/thumbs/Picture3-e1725876734355-qtulrs9nmbuowyoblvsof0hhew4tb67qo0bx2rt3gw.png"
                    alt=""
                    height="400"
                    className="rounded md:w-[50%] w-[60%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="relative pt-20 pb-12">
          <div className="w-full">
            <div className="w-full px-4 mx-auto max-w-[1400px]">
              <div className="flex items-center text-center justify-center ">
                <div className="h-4 w-1 bg-mainColor"></div>
                <h1 className="ml-2 text-lg font-bold text-mainColor uppercase">
                  Our products
                </h1>
              </div>
              <div className="mx-auto max-w-[1200px] text-center mt-4">
                <h1 className="text-4xl font-semibold text-[#3d454d]">
                  Best Products available at LM Club
                </h1>
              </div>

              <div className="mx-auto max-w-[1200px] text-center mt-4">
                <p>
                  At Laoe Maom, we are dedicated to fostering a vibrant culture
                  that propels our members and businesses to connect,
                  collaborate, and create opportunities. Anchored in the
                  principle of TEAM (Together Everyone Achieves More), we
                  harness the power of human cooperation to accomplish
                  significant goals incrementally.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 pt-8 md:px-2 lg:px-1 px-4">
                <a
                  href="mailto:info@laoemaom.com"
                  class="flex md:justify-start justify-center"
                >
                  <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                    <div class="space-y-4">
                      <div className="flex justify-center items-center w-full">
                        <img
                          src="
                            https://lmclub.club/wp-content/uploads/2024/09/Picture1-300x300.png"
                          alt=""
                          className="md:h-52 md:w-[70%] w-[80%]"
                        />
                      </div>
                      <div class="flex justify-center items-center">
                        <h1 class="text-3xl font-bold text-center">
                          LM Broadcast
                        </h1>
                      </div>

                      <div class="flex justify-center items-center text-gray-600 text-center font-medium">
                        <p>
                          Activate BROADCAST to advertise local businesses on
                          your social media and we will pay you a percentage of
                          the revenue earned by giving you points to redeem gift
                          certificates.
                        </p>
                      </div>

                      <div className="flex justify-center">
                        <a
                          href="/contact-us"
                          class="border-[1px] border-mainColor text-mainColor transition duration-1000 font-semibold text-colorFour py-2 px-4 rounded"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:info@laoemaom.com"
                  class="flex md:justify-start justify-center"
                >
                  <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                    <div class="space-y-4">
                      <div className="flex justify-center items-center w-full">
                        <img
                          src="
                            https://lmclub.club/wp-content/uploads/2024/09/Picture2-300x300.png"
                          alt=""
                          className="md:h-52 md:w-[70%] w-[80%]"
                        />
                      </div>
                      <div class="flex justify-center items-center">
                        <h1 class="text-3xl font-bold text-center">
                          LM Beehive
                        </h1>
                      </div>

                      <div class="flex justify-center items-center text-gray-600 text-center font-medium">
                        <p>
                          Unlock the BEEHIVE. It will allow us to text / email
                          great deals, coupons, information and opportunities
                          from local restaurants hotel, retailers, give you
                          points for posting and more!.
                        </p>
                      </div>

                      <div className="flex justify-center">
                        <a
                          href="/contact-us"
                          class="border-[1px] border-mainColor text-mainColor transition duration-1000 font-semibold text-colorFour py-2 px-4 rounded"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/enroll-rewards"
                  class="flex md:justify-start justify-center"
                >
                  <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                    <div class="space-y-4">
                      <div className="flex justify-center items-center w-full">
                        <img
                          src="
                            https://lmclub.club/wp-content/uploads/2024/09/Picture3-300x300.png"
                          alt=""
                          className="md:h-52 md:w-[70%] w-[80%]"
                        />
                      </div>
                      <div class="flex justify-center items-center">
                        <h1 class="text-3xl font-bold text-center">
                         Enroll Rewards
                        </h1>
                      </div>

                      <div class="flex justify-center items-center text-gray-600 text-center font-medium">
                        <p>
                          Enroll earn rewards for helping our community to
                          expand. T & C apply. And you’re instantly connected to
                          a powerful network group and the rewards are AMAZING!
                        </p>
                      </div>

                      <div className="flex justify-center">
                        <a
                          href="/contact-us"
                          class="border-[1px] border-mainColor text-mainColor transition duration-1000 font-semibold text-colorFour py-2 px-4 rounded"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
