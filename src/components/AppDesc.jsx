import { Tabs, Tab } from "../components/Tabs";
import success from "../assets/success.svg";
import { TiArrowRight } from "react-icons/ti";
import One from "../assets/One.svg";
import Three from "../assets/Three.svg";
import Two from "../assets/Two.svg";

const AppDesc = () => {
  const values2 = [
    {
      icon: One,
      Title: "Log in to Your Account",
      description:
        "Start by logging in to your LM Club account and navigating to one of our widgets section.",
    },
    {
      icon: Two,
      Title: "Get Your Referral Code",
      description:
        "Copy your unique referral link or code to share with friends, family, and colleagues.",
    },
    {
      icon: Three,
      Title: "Start Inviting Members",
      description:
        "Share your referral link or code with others and encourage them to join the LM Club to access member benefits.",
    },
  ];

  return (
    <>
      <div className="pt-12">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] ">
              <div className="p-4">
                <div>
                  <div className="flex flex-wrap flex-col lg:items-start items-start pb-3">
                    <div className="text-start leading-relaxed  font-bold text-black">
                      <p className="lg:text-4xl text-2xl">
                        Empowering Connections & Cultivating Success
                      </p>
                    </div>
                    <div className="md:w-36 w-28 h-1 border-b-2 border-green-500 mt-[1px]"></div>
                  </div>
                  <p className="text-gray-600 pt-3">
                    Welcome to LM Club – where networking meets opportunity! Our
                    innovative widgets are designed to empower you, reward you,
                    and make your life easier. Whether you&apos;re looking to
                    grow your network, share valuable insights, or promote your
                    business, LM Club has the tools to make it happen.
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 pt-12">
                  <div className="grid grid-cols-2 grid-rows-2 gap-4">
                    <div className="col-span-2 row-span-1">
                      <img
                        src="https://lmclub.club/wp-content/uploads/2024/10/GettyImages-1360197604.webp"
                        alt="one"
                        className="rounded"
                      />
                    </div>

                    <div className="col-span-1 row-span-1">
                      <img
                        src="https://lmclub.club/wp-content/uploads/2024/10/GettyImages-2164278820.webp"
                        alt="two"
                        className="rounded"
                      />
                    </div>

                    <div className="col-span-1 row-span-1">
                      <img
                        src="https://lmclub.club/wp-content/uploads/2024/10/GettyImages-2000672702.webp"
                        alt="two"
                        className="rounded"
                      />
                    </div>
                  </div>

                  <div className="lg:p-4">
                    <div>
                      <div className="lg:text-3xl text-2xl font-bold">
                        <h2>About LM Club</h2>
                      </div>
                      <div className="pt-4">
                        <p className="text-gray-600">
                          Laoe Maom is more than a membership club; it’s a
                          community built on the principles of collaboration,
                          positivity, and shared success. Founded by Richard
                          Anderson and Sandy Pittman, Laoe Maom focuses on
                          fostering a positive culture that energizes and
                          motivates its members and businesses to network and
                          create opportunities together.
                        </p>
                      </div>

                      <div className="pt-4">
                        <p className="text-gray-600">
                          At the heart of Laoe Maom lies the belief that
                          "Together Everyone Achieves More" – the power of
                          teamwork and human cooperation. Richard, alongside his
                          family, is deeply committed to creating an
                          organization that values connections and helps members
                          achieve great goals, step by step. The inclusion of
                          family symbolizes the core values of unity, trust, and
                          mutual support that Laoe Maom embodies.
                        </p>
                      </div>

                      <div className="pt-4">
                        <p className="text-gray-600">
                          Built on the principle of "Least Amount of Effort,
                          Most Amount of Money" (LAOE MAOM), the organization
                          remains progressive and adaptable, evolving with the
                          changing needs of its members. It’s a global
                          collaboration where individuals and businesses come
                          together, recognizing that mutual support drives
                          collective success.
                        </p>
                      </div>

                      <div className="pt-12">
                        <a
                          href="/contact-us"
                          className="group border-[1px] relative px-6 py-2 text-green-500 text-sm rounded-full border-green-500 font-semibold overflow-hidden flex items-center gap-2 w-[200px] hover:bg-green-500 hover:text-white duration-1000 ease-in-out transition hover:font-medium"
                        >
                          <span className="relative   flex-[8] text-center">
                            Learn More
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
      </div>

      <div>
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] ">
              <div className="p-4">
                <div>
                  <div className="flex flex-wrap flex-col lg:items-start items-start pb-3">
                    <div className="text-start leading-relaxed  font-bold text-black">
                      <p className="lg:text-4xl text-2xl">
                        Simple steps get to start achieve more.
                      </p>
                    </div>
                    <div className="md:w-36 w-28 h-1 border-b-2 border-green-500 mt-[1px]"></div>
                  </div>
                  <p className="text-gray-600 pt-3">
                    By joining Laoe Maom, members and businesses gain access to
                    a supportive network that helps bring visions to life and
                    achieve success. Together, with the strength of family and
                    community, let’s work towards greatness and make our goals a
                    reality.
                  </p>

                  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pt-8">
                    {values2.map((value, index) => (
                      <div
                        key={index}
                        className="flex md:justify-start justify-center"
                      >
                        <div className="w-full bg-white rounded p-6">
                          <div className="space-y-3">
                            <div className="flex justify-start items-center">
                              <img
                                src={value.icon}
                                className="flex justify-center items-center w-12 h-12 border-2 border-green-50 bg-green-50 rounded-full"
                              >
                                {/* <FaHandshake
                                  size={24}
                                  className="text-mainColor"
                                /> */}
                              </img>
                            </div>

                            <div className="flex justify-start items-center">
                              <h1 className="text-2xl text-trumpTwo font-bold text-start">
                                {value.Title}
                              </h1>
                            </div>
                            <div className="flex justify-start items-center text-gray-600 text-[14px] leading-[22px]">
                              <p>{value.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
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

export default AppDesc;
