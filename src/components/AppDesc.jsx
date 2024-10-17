import { Tabs, Tab } from "../components/Tabs";

const AppDesc = () => {
  return (
    <div>
      <div className="bg-white">
        <div className="relative pt-20">
          <div className="w-full">
            <div className="w-full px-4 mx-auto max-w-[1400px]">
              <div className="flex items-center text-center justify-center ">
                <div className="h-4 w-1 bg-mainColor"></div>
                <h1 className="ml-2 text-lg font-bold text-mainColor uppercase">
                  We respect users credibility
                </h1>
              </div>
              <div className="mx-auto max-w-[1200px] text-center mt-4">
                <h1 className="text-4xl font-semibold text-[#3d454d]">
                  The organic platform for better rewards
                </h1>
              </div>

              <div className="lg:block hidden">
                <Tabs>
                  <Tab label="Creating Exciting Rewards" className="text-sm">
                    <div className="py-4">
                      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                        <div className="space-y-6 flex flex-col pl-8">
                          <div className=" md:text-start text-center">
                            <h1 className="lg:text-4xl text-3xl font-semibold text-black">
                              Ready to turn your development{" "}
                              <span className="text-mainColor">
                                innovation?
                              </span>
                            </h1>
                          </div>
                          <div className="mt-4 md:text-start text-center text-gray-700">
                            <p>
                              Try and see the magic of the LM Club in action.
                            </p>
                          </div>

                          <div className="flex items-center lg:justify-start justify-center">
                            <a
                              href="/login"
                              className="bg-mainColor outline-none
                              rounded over:shadow-form transition duration-1000 ease-in-out md:text-base text-sm text-white px-8 md:py-3 py-2 text-center"
                            >
                              What we offer
                            </a>
                          </div>
                        </div>

                        <div className="w-[100%] flex justify-center items-center">
                          <img
                            src="https://images.ctfassets.net/p24lh3qexxeo/2iOltnu3emEY83ey9618YO/a7e53877ad5929b2a669666429011335/image.png?w=1080&h=952&q=80&fm=webp"
                            alt=""
                            className="h-80 rounded w-[80%]"
                          />
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab
                    label="Experience Powerful Networking"
                    className="text-sm"
                  >
                    <div className="py-4">
                      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                        <div className="space-y-6 flex flex-col pl-8">
                          <div className=" md:text-start text-center">
                            <h1 className="lg:text-4xl text-3xl font-semibold text-black">
                              Empowering Connections, Cultivating
                              <span className="text-mainColor"> Success</span>
                            </h1>
                          </div>
                          <div className="mt-4 md:text-start text-center text-gray-700">
                            <p>
                              Try and see the magic of the LM Club in action.
                            </p>
                          </div>

                          <div className="flex items-center lg:justify-start justify-center">
                            <a
                              href="/login"
                              className="bg-mainColor outline-none
                      rounded over:shadow-form transition duration-1000 ease-in-out md:text-base text-sm text-white px-8 md:py-3 py-2 text-center"
                            >
                              Learn More
                            </a>
                          </div>
                        </div>

                        <div className="w-[100%] flex justify-center items-center">
                          <img
                            src="https://images.ctfassets.net/p24lh3qexxeo/6KNsBNnO6rRbQYpmWiAwIJ/7f71ddbf08941a0a67c7125238a3b102/Image_2.jpeg?w=540&h=476&q=80&fm=webp"
                            alt=""
                            className="h-80 rounded w-[80%]"
                          />
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab label="Global Membership Club" className="text-sm">
                    <div className="py-4">
                      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                        <div className="space-y-6 flex flex-col pl-8">
                          <div className=" md:text-start text-center">
                            <h1 className="lg:text-4xl text-3xl font-semibold text-black">
                              Empowering Lives Through
                              <span className="text-mainColor"> Rewards</span>
                            </h1>
                          </div>
                          <div className="mt-4 md:text-start text-center text-gray-700">
                            <p>
                              Try and see the magic of the LM Club in action.
                            </p>
                          </div>

                          <div className="flex items-center lg:justify-start justify-center">
                            <a
                              href="/login"
                              className="bg-mainColor outline-none
                      rounded over:shadow-form transition duration-1000 ease-in-out md:text-base text-sm text-white px-8 md:py-3 py-2 text-center"
                            >
                              Our Vision
                            </a>
                          </div>
                        </div>

                        <div className="w-[100%] flex justify-center items-center">
                          <img
                            src="https://images.ctfassets.net/p24lh3qexxeo/6GB7eepDnAGDK7P1feKYcA/4dd44c41342bfccc884a3558b66d70a5/image.png?w=1081&h=952&q=80&fm=webp"
                            alt=""
                            className="h-80 rounded w-[80%]"
                          />
                        </div>
                      </div>
                    </div>
                  </Tab>

                  <Tab label="Building Global Community" className="text-sm">
                    <div className="py-4">
                      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                        <div className="space-y-6 flex flex-col pl-8">
                          <div className=" md:text-start text-center">
                            <h1 className="lg:text-4xl text-3xl font-semibold text-black">
                              Connectivity for all,
                              <span className="text-mainColor">
                                {" "}
                                everywhere
                              </span>
                            </h1>
                          </div>
                          <div className="mt-4 md:text-start text-center text-gray-700">
                            <p>
                              Try and see the magic of the LM Club in action.
                            </p>
                          </div>

                          <div className="flex items-center lg:justify-start justify-center">
                            <a
                              href="/login"
                              className="bg-mainColor outline-none
                      rounded over:shadow-form transition duration-1000 ease-in-out md:text-base text-sm text-white px-8 md:py-3 py-2 text-center"
                            >
                              Contact us
                            </a>
                          </div>
                        </div>

                        <div className="w-[100%] flex justify-center items-center">
                          <img
                            src="https://images.ctfassets.net/p24lh3qexxeo/Kn30UgsRK5RXRHbHVOeXc/ce4bbf7bf746ff6ebf7f7c465fadca9a/image.png?w=1081&h=952&q=80&fm=webp"
                            alt=""
                            className="h-80 rounded w-[80%]"
                          />
                        </div>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>

              <div className="lg:hidden block">
                <Tabs>
                  <Tab
                    label="Creating Exciting Rewards"
                    className="text-sm px-1"
                  >
                    <div className="py-4 ">
                      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                        <div className="space-y-6 flex flex-col px-2">
                          <div className=" md:text-start text-center">
                            <h1 className="lg:text-4xl text-3xl font-semibold text-black">
                              Ready to turn your development{" "}
                              <span className="text-mainColor">
                                innovation?
                              </span>
                            </h1>
                          </div>
                          <div className="mt-4 md:text-start text-center text-gray-700">
                            <p>
                              Try and see the magic of the LM Club in action.
                            </p>
                          </div>

                          <div className="flex items-center lg:justify-start justify-center">
                            <a
                              href="/login"
                              className="bg-mainColor outline-none
                              rounded over:shadow-form transition duration-1000 ease-in-out md:text-base text-sm text-white px-8 md:py-3 py-2 text-center"
                            >
                              What we offer
                            </a>
                          </div>
                        </div>

                        <div className="w-[100%] flex justify-center items-center">
                          <img
                            src="https://images.ctfassets.net/p24lh3qexxeo/2iOltnu3emEY83ey9618YO/a7e53877ad5929b2a669666429011335/image.png?w=1080&h=952&q=80&fm=webp"
                            alt=""
                            className="h-80 rounded w-[90%]"
                          />
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab
                    label="Experience Powerful Networking"
                    className="text-sm px-1"
                  >
                    <div className="py-4">
                      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                        <div className="space-y-6 flex flex-col px-2">
                          <div className=" md:text-start text-center">
                            <h1 className="lg:text-4xl text-3xl font-semibold text-black">
                              Empowering Connections, Cultivating
                              <span className="text-mainColor"> Success</span>
                            </h1>
                          </div>
                          <div className="mt-4 md:text-start text-center text-gray-700">
                            <p>
                              Try and see the magic of the LM Club in action.
                            </p>
                          </div>

                          <div className="flex items-center lg:justify-start justify-center">
                            <a
                              href="/login"
                              className="bg-mainColor outline-none
                      rounded over:shadow-form transition duration-1000 ease-in-out md:text-base text-sm text-white px-8 md:py-3 py-2 text-center"
                            >
                              Learn More
                            </a>
                          </div>
                        </div>

                        <div className="w-[100%] flex justify-center items-center">
                          <img
                            src="https://images.ctfassets.net/p24lh3qexxeo/6KNsBNnO6rRbQYpmWiAwIJ/7f71ddbf08941a0a67c7125238a3b102/Image_2.jpeg?w=540&h=476&q=80&fm=webp"
                            alt=""
                            className="h-80 rounded w-[90%]"
                          />
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab label="Global Membership Club" className="text-sm px-1">
                    <div className="py-4">
                      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                        <div className="space-y-6 flex flex-col px-2">
                          <div className=" md:text-start text-center">
                            <h1 className="lg:text-4xl text-3xl font-semibold text-black">
                              Empowering Lives Through
                              <span className="text-mainColor"> Rewards</span>
                            </h1>
                          </div>
                          <div className="mt-4 md:text-start text-center text-gray-700">
                            <p>
                              Try and see the magic of the LM Club in action.
                            </p>
                          </div>

                          <div className="flex items-center lg:justify-start justify-center">
                            <a
                              href="/login"
                              className="bg-mainColor outline-none
                      rounded over:shadow-form transition duration-1000 ease-in-out md:text-base text-sm text-white px-8 md:py-3 py-2 text-center"
                            >
                              Our Vision
                            </a>
                          </div>
                        </div>

                        <div className="w-[100%] flex justify-center items-center">
                          <img
                            src="https://images.ctfassets.net/p24lh3qexxeo/6GB7eepDnAGDK7P1feKYcA/4dd44c41342bfccc884a3558b66d70a5/image.png?w=1081&h=952&q=80&fm=webp"
                            alt=""
                            className="h-80 rounded w-[90%]"
                          />
                        </div>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="relative lg:pt-20 pt-8">
          <div className="w-full">
            <div className="w-full px-4 mx-auto max-w-[1400px]">
              <div className="flex items-center text-center justify-center ">
                <div className="h-4 w-1 bg-mainColor"></div>
                <h1 className="ml-2 text-lg font-bold text-mainColor uppercase">
                  Features
                </h1>
              </div>
              <div className="mx-auto max-w-[1200px] text-center mt-4">
                <h1 className="text-4xl font-semibold text-[#3d454d]">
                  Empowering Connections, Cultivating Success
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

              <div className="mx-auto max-w-[1200px] ">
                <div class="grid md:grid-cols-2 grid-cols-1 gap-6 pt-8">
                  <div class="w-full bg-[#f8f9fa] border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col">
                      <div className="grid grid-cols-4 w-[100%] border-b-[1px] border-stone-200">
                        <div className="lg:col-span-2 col-span-4 p-4">
                          <div className="flex flex-col">
                            <div className="flex items-center md:justify-start justify-center">
                              <div className="h-[12px] w-1 bg-mainColor"></div>
                              <h1 className="ml-2 text-sm font-bold text-mainColor uppercase">
                                Our Mission
                              </h1>
                            </div>

                            <div className="flex md:justify-start justify-center md:mt-8 mt-4">
                              <h1 className="md:text-3xl text-2xl md:font-semibold font-bold md:text-start text-center">
                                Activate Grow & Enroll
                              </h1>
                            </div>
                          </div>
                        </div>
                        <div className="lg:col-span-2 col-span-4 flex justify-center">
                          <img
                            src="https://images.ctfassets.net/p24lh3qexxeo/4ANrrtIW5N4zIr5DjabOQX/9f0be9be4a3eb2c6152441f8f82b0758/image.png?w=1081&h=952&q=80&fm=webp"
                            alt=""
                            className="rounded-lg md:w-[100%] w-[90%]"
                          />
                        </div>
                      </div>
                      <div className="p-4 text-gray-600 md:text-start text-center">
                        <p className="pt-4 pb-4">
                          We forge premier networking club that supports our
                          members and businesses efficiently and effectively. We
                          strive to streamline success, minimizing time
                          expenditure and maximizing achievements.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="w-full bg-[#f8f9fa] border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col">
                      <div className="grid grid-cols-4 w-[100%] border-b-[1px] border-green-200">
                        <div className="lg:col-span-2 col-span-4 p-4">
                          <div className="flex flex-col">
                            <div className="flex items-center md:justify-start justify-center">
                              <div className="h-[12px] w-1 bg-mainColor"></div>
                              <h1 className="ml-2 text-sm font-bold text-mainColor uppercase">
                                Our Vision
                              </h1>
                            </div>
                            <div className="flex md:justify-start justify-center md:mt-8 mt-4">
                              <h1 className="md:text-3xl text-2xl md:font-semibold font-bold md:text-start text-center">
                                Streamline Success Rate
                              </h1>
                            </div>
                          </div>
                        </div>
                        <div className="lg:col-span-2 col-span-4 flex justify-center">
                          <img
                            src="https://images.ctfassets.net/p24lh3qexxeo/1wlcJWIgXuaYyBEhxBDVYu/1eb22fb3858708f335f2b5284d32973e/image.png?w=1081&h=952&q=80&fm=webp"
                            alt=""
                            className="rounded-lg md:w-[100%] w-[90%]"
                          />
                        </div>
                      </div>
                      <div className="p-4 text-gray-600 md:text-start text-center">
                        <p className="pt-4 pb-4">
                          We foster enhanced collaboration and mutual benefit
                          among our members and business affiliates. Recognize
                          member initiatives with businesses both locally and
                          globally with incentives.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="w-full bg-slate-50 border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col">
                      <div className="grid grid-cols-4 w-[100%] border-b-[1px] border-slate-200">
                        <div className="lg:col-span-2 col-span-4 p-4">
                          <div className="flex flex-col">
                            <div className="flex items-center md:justify-start justify-center">
                              <div className="h-[12px] w-1 bg-mainColor"></div>
                              <h1 className="ml-2 text-sm font-bold text-mainColor uppercase">
                                Our Strength
                              </h1>
                            </div>

                            <div className="flex md:justify-start justify-center md:mt-8 mt-4">
                              <h1 className="md:text-3xl text-2xl md:font-semibold font-bold md:text-start text-center">
                                Enhanced Mutual Collaboration
                              </h1>
                            </div>
                          </div>
                        </div>
                        <div className="lg:col-span-2 col-span-4 flex justify-center">
                          <img
                            src="https://images.ctfassets.net/p24lh3qexxeo/Kn30UgsRK5RXRHbHVOeXc/ce4bbf7bf746ff6ebf7f7c465fadca9a/image.png?w=1081&h=952&q=80&fm=webp"
                            alt=""
                            className="rounded-lg md:w-[100%] w-[90%]"
                          />
                        </div>
                      </div>
                      <div className="p-4 text-gray-600 md:text-start text-center">
                        <p className="pt-4 pb-4">
                          Establish a global presence that encourages networking
                          and mutual benefits. Develop a nurturing environment
                          that fosters enduring friendships and a robust social
                          network.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="w-full bg-slate-50 border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col">
                      <div className="grid grid-cols-4 w-[100%] border-b-[1px] border-slate-200">
                        <div className="lg:col-span-2 col-span-4 p-4">
                          <div className="flex flex-col">
                            <div className="flex items-center md:justify-start justify-center">
                              <div className="h-[12px] w-1 bg-mainColor"></div>
                              <h1 className="ml-2 text-sm font-bold text-mainColor uppercase">
                                Our strategy
                              </h1>
                            </div>

                            <div className="flex md:justify-start justify-center md:mt-8 mt-4">
                              <h1 className="md:text-3xl text-2xl md:font-semibold font-bold md:text-start text-center">
                                Promote Entrepreneurship
                              </h1>
                            </div>
                          </div>
                        </div>
                        <div className="lg:col-span-2 col-span-4 flex justify-center">
                          <img
                            src="https://images.ctfassets.net/p24lh3qexxeo/6UtH8WBSjZFiVZvEfEvpyZ/22a91c5db979f03a964f862195b7bef1/image.png?w=1081&h=952&q=80&fm=webp"
                            alt=""
                            className="rounded-lg md:w-[100%] w-[90%]"
                          />
                        </div>
                      </div>
                      <div className="p-4 text-gray-600 md:text-start text-center">
                        <p className="pt-4 pb-4">
                          To expand our vibrant community to 2.5 billion members
                          worldwide, creating a network of opportunities and
                          shared success.
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
    </div>
  );
};

export default AppDesc;
