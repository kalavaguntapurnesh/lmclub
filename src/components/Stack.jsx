import discord from "../assets/discord.svg";
import hooks from "../assets/linkedin.svg";
import phone from "../assets/phone.svg";
import slack from "../assets/slack.svg";
import sms from "../assets/twitter.svg";
import teams from "../assets/teams.svg";
import zapier from "../assets/zapier.svg";
import whatsapp from "../assets/whatsapp.svg";
import telegram from "../assets/telegram.svg";
import evernote from "../assets/evernote.svg";
import { FaUsers } from "react-icons/fa6";
import { ImPower } from "react-icons/im";
import { IoBarChart } from "react-icons/io5";
import success from "../assets/success.svg";
import { GoGoal } from "react-icons/go";

const Stack = () => {
  return (
    <div className="bg-white">
      <div className="bg-white ">
        <div className="relative pt-20 pb-12">
          <div className="w-full">
            <div className="w-full px-4 mx-auto max-w-[1400px]">
              <div className="max-w-[1400px] m-auto grid lg:grid-cols-2 lg:mx-4 gap-6">
                <div className="flex flex-col gap-4 w-full space-y-2 ">
                  <div className="flex items-center lg:justify-start justify-center ">
                    <div className="h-4 w-1 bg-mainColor"></div>
                    <h1 className="ml-2 text-lg font-bold text-mainColor uppercase">
                      Features of our products
                    </h1>
                  </div>
                  <div className=" flex items-center lg:justify-start justify-center ">
                    <h1 className="xl:text-5xl text-4xl font-bold text-headingColor lg:text-start text-center">
                      Explores the powerful features of our Products
                    </h1>
                  </div>

                  <div className="flex flex-col space-y-3 text-headingColor text-lg pt-6">
                    <div className="flex flex-row items-center">
                      <img src={success} alt="" className="w-4 h-4" />
                      <p className="ml-2">
                        Membership Club Where Businesses and Members Connect.
                      </p>
                    </div>
                    <div className="flex flex-row items-center">
                      <img src={success} alt="" className="w-4 h-4" />
                      <p className="ml-2">
                        Establish a global presenc e that encourages networking.
                      </p>
                    </div>
                    <div className="flex flex-row items-center">
                      <img src={success} alt="" className="w-4 h-4" />
                      <p className="ml-2">
                        Develop a nurturing environment that fosters enduring
                        friendships.
                      </p>
                    </div>
                    <div className="flex flex-row items-center">
                      <img src={success} alt="" className="w-4 h-4" />
                      <p className="ml-2">
                        Membership Club Where Businesses and Members Connect.
                      </p>
                    </div>
                  </div>
                </div>

                <div className=" grid md:grid-cols-2 grid-cols-1 gap-4">
                  <a
                    href="mailto:info@laoemaom.com"
                    class="flex md:justify-start justify-center"
                  >
                    <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                      <div class="space-y-4">
                        <div className="flex justify-center items-center">
                          <div className="flex justify-center items-center w-12 h-12 border-2 border-green-100 bg-green-100 rounded-full">
                            <ImPower size={24} className="text-mainColor" />
                          </div>
                        </div>
                        <div class="flex justify-center items-center">
                          <h1 class="text-2xl text-headingColor font-bold text-center">
                            Empower Connections
                          </h1>
                        </div>

                        <div class="flex justify-center items-center text-sideHeading text-center font-medium">
                          <p>Access a vast list of valuable resources.</p>
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
                        <div className="flex justify-center items-center">
                          <div className="flex justify-center items-center w-12 h-12 border-2 border-green-100 bg-green-100 rounded-full">
                            <IoBarChart size={24} className="text-mainColor" />
                          </div>
                        </div>
                        <div class="flex justify-center items-center">
                          <h1 class="text-2xl text-headingColor font-bold text-center">
                            Reward Collaborations
                          </h1>
                        </div>

                        <div class="flex justify-center items-center text-sideHeading text-center font-medium">
                          <p>Access a vast list of valuable resources.</p>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a
                    href="mailto:info@laoemaom.com"
                    class="md:flex md:justify-start justify-center hidden"
                  >
                    <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                      <div class="space-y-4">
                        <div className="flex justify-center items-center">
                          <div className="flex justify-center items-center w-12 h-12 border-2 border-green-100 bg-green-100 rounded-full">
                            <FaUsers size={24} className="text-mainColor" />
                          </div>
                        </div>
                        <div class="flex justify-center items-center">
                          <h1 class="text-2xl text-headingColor font-bold text-center">
                            Global Community
                          </h1>
                        </div>

                        <div class="flex justify-center items-center text-sideHeading text-center font-medium">
                          <p>Access a vast list of valuable resources.</p>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a
                    href="mailto:info@laoemaom.com"
                    class="md:flex hidden md:justify-start justify-center"
                  >
                    <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                      <div class="space-y-4">
                        <div className="flex justify-center items-center">
                          <div className="flex justify-center items-center w-12 h-12 border-2 border-green-100 bg-green-100 rounded-full">
                            <GoGoal size={24} className="text-mainColor" />
                          </div>
                        </div>
                        <div class="flex justify-center items-center">
                          <h1 class="text-2xl text-headingColor font-bold text-center">
                            Cultivating Success
                          </h1>
                        </div>

                        <div class="flex justify-center items-center text-sideHeading text-center font-medium">
                          <p>Access a vast list of valuable resources.</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative pt-20 pb-12">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="flex items-center text-center justify-center ">
              <div className="h-4 w-1 bg-mainColor"></div>
              <h1 className="ml-2 text-lg font-bold text-mainColor uppercase">
                Integrate with tech stack
              </h1>
            </div>

            <div className="mx-auto max-w-[1000px] text-center mt-4">
              <h1 className="text-4xl font-semibold text-headingColor">
                Connect everything through notifications.
              </h1>
            </div>

            <div className="mx-auto max-w-[1000px] text-sideHeading text-center mt-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                sed quaerat culpa nihil! Molestias reiciendis culpa,
                reprehenderit iure laboriosam eius? Sed fuga quo iste.
              </p>
            </div>

            <div className="mx-auto max-w-[900px] text-center mt-8">
              <div className="grid md:grid-cols-5 grid-cols-3 gap-4">
                <div className="flex justify-center items-center">
                  <a
                    href="/learn-about-us"
                    className="w-24 md:w-28 md:h-28 h-24 rounded bg-[#f8f9fa] flex justify-center items-center"
                  >
                    <img
                      src={whatsapp}
                      alt=""
                      className="w-10 h-10 md:w-12 md:h-12"
                    />
                  </a>
                </div>
                <div className="flex justify-center items-center">
                  <a
                    href="/learn-about-us"
                    className="w-24 md:w-28 md:h-28 h-24 rounded bg-[#f8f9fa] flex justify-center items-center"
                  >
                    <img
                      src={slack}
                      alt=""
                      className="w-10 h-10 md:w-12 md:h-12"
                    />
                  </a>
                </div>
                <div className="flex justify-center items-center">
                  <a
                    href="/learn-about-us"
                    className="w-24 md:w-28 md:h-28 h-24 rounded bg-[#f8f9fa] flex justify-center items-center"
                  >
                    <img
                      src={telegram}
                      alt=""
                      className="w-10 h-10 md:w-12 md:h-12"
                    />
                  </a>
                </div>
                <div className="flex justify-center items-center">
                  <a
                    href="/learn-about-us"
                    className="w-24 md:w-28 md:h-28 h-24 rounded bg-[#f8f9fa] flex justify-center items-center"
                  >
                    <img
                      src={zapier}
                      alt=""
                      className="w-10 h-10 md:w-12 md:h-12"
                    />
                  </a>
                </div>
                <div className="flex justify-center items-center">
                  <a
                    href="/learn-about-us"
                    className="w-24 md:w-28 md:h-28 h-24 rounded bg-[#f8f9fa] flex justify-center items-center"
                  >
                    <img
                      src={sms}
                      alt=""
                      className="w-10 h-10 md:w-12 md:h-12"
                    />
                  </a>
                </div>
                <div className="flex justify-center items-center">
                  <a
                    href="/learn-about-us"
                    className="w-24 md:w-28 md:h-28 h-24 rounded bg-[#f8f9fa] flex justify-center items-center"
                  >
                    <img
                      src={phone}
                      alt=""
                      className="w-10 h-10 md:w-12 md:h-12"
                    />
                  </a>
                </div>
                <div className="flex justify-center items-center">
                  <a
                    href="/learn-about-us"
                    className="w-24 md:w-28 md:h-28 h-24 rounded bg-[#f8f9fa] flex justify-center items-center"
                  >
                    <img
                      src={teams}
                      alt=""
                      className="w-10 h-10 md:w-12 md:h-12"
                    />
                  </a>
                </div>
                <div className="flex justify-center items-center">
                  <a
                    href="/learn-about-us"
                    className="w-24 md:w-28 md:h-28 h-24 rounded bg-[#f8f9fa] flex justify-center items-center"
                  >
                    <img
                      src={evernote}
                      alt=""
                      className="w-10 h-10 md:w-12 md:h-12"
                    />
                  </a>
                </div>
                <div className="md:flex justify-center items-center hidden">
                  <a
                    href="/learn-about-us"
                    className="w-24 md:w-28 md:h-28 h-24 rounded bg-[#f8f9fa] flex justify-center items-center"
                  >
                    <img
                      src={discord}
                      alt=""
                      className="w-10 h-10 md:w-12 md:h-12"
                    />
                  </a>
                </div>
                <div className="flex justify-center items-center">
                  <a
                    href="/learn-about-us"
                    className="w-24 md:w-28 md:h-28 h-24 rounded bg-[#f8f9fa] flex justify-center items-center"
                  >
                    <img
                      src={hooks}
                      alt=""
                      className="w-10 h-10 md:w-12 md:h-12"
                    />
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center pt-8">
                <a
                  href="/rewards"
                  className="bg-mainColor outline-none
                      rounded-full hover:shadow-form transition font-medium duration-1000 ease-in-out md:text-base text-sm text-white px-8 py-3 text-center"
                >
                  Free Trial
                </a>
                <a
                  href="/login"
                  className="outline-none 
                      rounded-full border-[1px] border-mainColor transition duration-1000 ease-in-out md:text-base text-sm text-mainColor px-8 py-3 text-center ml-2"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
