import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import { FaArrowRight } from "react-icons/fa6";
import { LuRadioTower } from "react-icons/lu";
import { GiTreeBeehive } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";

const Products = () => {
  return (
    <div>
      {" "}
      <Navbar />
      <ScrollToTop />
      <div className="mt-28 md:mt-36">
        <div className="relative">
          <div className="w-full">
            <div className="w-full px-4 mx-auto max-w-[1400px] pb-8">
              <div className="flex flex-col gap-4 w-full space-y-2 justify-center text-center">
                <div className="flex items-center justify-center max-w-[1000px] mx-auto">
                  <div className="h-4 w-1 bg-mainColor"></div>
                  <h1 className="ml-2 text-lg font-bold text-mainColor uppercase">
                    The best Widget for you
                  </h1>
                </div>
                <div className="flex items-center justify-center max-w-[1000px] mx-auto">
                  <h1 className="lg:text-6xl text-4xl font-bold text-headingColor text-center">
                    Pathway to a global connectivity products.
                  </h1>
                </div>

                <div className="flex items-center justify-center max-w-[1000px] mx-auto">
                  <p className="lg:text-lg text-[16px] text-sideHeading text-center">
                    Welcome to Laoe Maom – The Global Membership Club Where
                    Businesses and Members Connect. Experience Powerful
                    Networking and Exceptional Rewards!
                  </p>
                </div>

                <div className="flex items-center justify-center max-w-[1000px] mx-auto">
                  <a
                    href="/rewards"
                    className="bg-mainColor outline-none
                      rounded-full hover:shadow-form transition duration-1000 ease-in-out md:text-base text-sm text-white px-8 md:py-3 py-2 text-center"
                  >
                    Get for Free
                  </a>
                  <a
                    href="/login"
                    className="outline-none 
                      rounded-full flex items-center hover:border-[1px] hover:border-mainColor transition duration-1000 ease-in-out md:text-base text-sm text-mainColor px-8 md:py-3 py-2 text-center ml-2"
                  >
                    <span className="mr-1">Learn More</span>
                    <FaArrowRight size={20} />
                  </a>
                </div>
              </div>

              <div className="md:grid grid-cols-1 md:grid-cols-3 items-center text-center gap-4 pt-20 pb-12 hidden">
                <div className="md:border-b-0 md:border-r-2 border-b-0 border-mainColor pb-2 md:pb-0 md:pr-4 w-full">
                  <div className="flex flex-row items-center justify-center">
                    <div className="flex justify-center items-center w-12 h-12 border-2 border-green-100 bg-green-100 rounded-full">
                      <LuRadioTower size={24} className="text-mainColor" />
                    </div>
                    <div className="flex flex-col space-y-1 ml-4 items-start justify-start">
                      <h1 className="font-bold text-lg">LM Broadcast</h1>
                      {/* <p className="text-gray-700 ">Users</p> */}
                    </div>
                  </div>
                </div>
                <div className="md:border-b-0 md:border-r-2 border-b-0 border-mainColor pb-2 md:pb-0 md:pr-4 w-full">
                  <div className="flex flex-row items-center justify-center">
                    <div className="flex justify-center items-center w-12 h-12 border-2 border-green-100 bg-green-100 rounded-full">
                      <GiTreeBeehive size={24} className="text-mainColor" />
                    </div>
                    <div className="flex flex-col space-y-1 ml-4 items-start justify-start">
                      <h1 className="font-bold text-lg">LM Bee Hive</h1>
                      {/* <p className="text-gray-700 ">Users</p> */}
                    </div>
                  </div>
                </div>
                <div className="md:border-b-0 border-b-0 border-mainColor pb-2 md:pb-0 md:pr-4 w-full">
                  <div className="flex flex-row items-center justify-center">
                    <div className="flex justify-center items-center w-12 h-12 border-2 border-green-100 bg-green-100 rounded-full">
                      <FaUserAlt size={24} className="text-mainColor" />
                    </div>
                    <div className="flex flex-col space-y-1 ml-4 items-start justify-start">
                      <h1 className="font-bold text-lg">Enroll Rewards</h1>
                      {/* <p className="text-gray-700 ">Users</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="relative pt-12 pb-12">
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
                          className="md:h-52 w-[60%]"
                        />
                      </div>
                      <div class="flex justify-center items-center">
                        <h1 class="text-3xl font-bold text-center">
                          LM Broadcast
                        </h1>
                      </div>

                      <div class="flex justify-center items-center text-gray-600 text-center">
                        <p>
                          Activate BROADCAST to advertise local businesses on
                          your social media and we will pay you a percentage of
                          the revenue earned by giving you points to redeem gift
                          certificates.
                        </p>
                      </div>
                      {/* 
                      <div className="flex justify-center">
                        <a
                          href="/contact-us"
                          class="border-[1px] border-mainColor text-mainColor transition duration-1000 font-semibold text-colorFour py-2 px-4 rounded"
                        >
                          Learn More
                        </a>
                      </div> */}
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
                          //   className="md:h-52 md:w-[70%] w-[80%]"
                          className="md:h-52 w-[60%]"
                        />
                      </div>
                      <div class="flex justify-center items-center">
                        <h1 class="text-3xl font-bold text-center">
                          LM Beehive
                        </h1>
                      </div>

                      <div class="flex justify-center items-center text-gray-600 text-center">
                        <p>
                          Unlock the BEEHIVE. It will allow us to text / email
                          great deals, coupons, information and opportunities
                          from local restaurants hotel, retailers, give you
                          points for posting and more!.
                        </p>
                      </div>

                      {/* <div className="flex justify-center">
                        <a
                          href="/contact-us"
                          class="border-[1px] border-mainColor text-mainColor transition duration-1000 font-semibold text-colorFour py-2 px-4 rounded"
                        >
                          Learn More
                        </a>
                      </div> */}
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
                          className="md:h-52 w-[60%]"
                        />
                      </div>
                      <div class="flex justify-center items-center">
                        <h1 class="text-3xl font-bold text-center">
                          Enroll Rewards
                        </h1>
                      </div>

                      <div class="flex justify-center items-center text-gray-600 text-center">
                        <p>
                          Enroll earn rewards for helping our community to
                          expand. T & C apply. And you’re instantly connected to
                          a powerful network group and the rewards are AMAZING!
                        </p>
                      </div>

                      {/* <div className="flex justify-center">
                        <a
                          href="/contact-us"
                          class="border-[1px] border-mainColor text-mainColor transition duration-1000 font-semibold text-colorFour py-2 px-4 rounded"
                        >
                          Learn More
                        </a>
                      </div> */}
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white ">
        <div className="relative pt-20 pb-12">
          <div className="w-full">
            <div className="w-full px-4 mx-auto max-w-[1400px]">
              <div className="max-w-[1400px] m-auto grid lg:grid-cols-2 lg:mx-4 gap-6">
                <div className="flex justify-center lg:justify-start items-center w-full">
                  <img
                    src="https://images.ctfassets.net/p24lh3qexxeo/6UtH8WBSjZFiVZvEfEvpyZ/22a91c5db979f03a964f862195b7bef1/image.png?w=1081&h=952&q=80&fm=webp"
                    alt=""
                    className="rounded md:w-[80%] h-[400px]"
                  />
                </div>

                <div className="flex flex-col gap-4 w-full space-y-2 ">
                  <div className="flex items-center lg:justify-start justify-center ">
                    <div className="h-4 w-1 bg-mainColor"></div>
                    <h1 className="ml-2 text-lg font-bold text-mainColor uppercase">
                      our products strategy
                    </h1>
                  </div>
                  <div className=" flex items-center lg:justify-start justify-center ">
                    <h1 className="xl:text-5xl text-4xl font-bold text-[#3d454d] lg:text-start text-center">
                      Why our products are the best?
                    </h1>
                  </div>

                  <div className="flex items-center lg:justify-start justify-center ">
                    <p className="lg:text-lg text-[16px] text-gray-600  lg:text-start text-center">
                      It is because of these following principles that we follow
                      to make a customer highly satisfied!
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                    <div className="flex flex-col md:items-start items-center space-y-1">
                      <div className="md:text-start text-center font-semibold text-2xl">
                        <h1>Reward Collaboration</h1>
                      </div>
                      <div className="md:text-start text-center text-gray-700">
                        <p>
                          Recognize member initiatives with businesses both
                          locally and globally with incentives.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:items-start items-center space-y-1">
                      <div className="md:text-start text-center font-semibold text-2xl">
                        <h1>Promote Entrepreneurship</h1>
                      </div>
                      <div className="md:text-start text-center text-gray-700">
                        <p>
                          Enable members to market new businesses via social
                          media and earn rewards.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:items-start items-center space-y-1">
                      <div className="md:text-start text-center font-semibold text-2xl">
                        <h1>Expand Horizons</h1>
                      </div>
                      <div className="md:text-start text-center text-gray-700">
                        <p>
                          Launch an International Membership Club with diverse
                          packages tailored to different needs.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:items-start items-center space-y-1">
                      <div className="md:text-start text-center font-semibold text-2xl">
                        <h1>Engage Members</h1>
                      </div>
                      <div className="md:text-start text-center text-gray-700">
                        <p>
                          Provide platforms like “Broadcast – BeeHive and Grow”
                          for member engagement and growth.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:items-start items-center space-y-1">
                      <div className="md:text-start text-center font-semibold text-2xl">
                        <h1>Build a Global Community</h1>
                      </div>
                      <div className="md:text-start text-center text-gray-700">
                        <p>
                          Establish a global presence that encourages networking
                          and mutual benefits.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:items-start items-center space-y-1">
                      <div className="md:text-start text-center font-semibold text-2xl">
                        <h1>Foster Social Bonds</h1>
                      </div>
                      <div className="md:text-start text-center text-gray-700">
                        <p>
                          Develop a nurturing environment that fosters enduring
                          friendships and a robust social network.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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
