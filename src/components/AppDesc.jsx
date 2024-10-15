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
                  We respect users time
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
                  <Tab label="Tests Preparation" className="text-sm">
                    <div className="py-4">
                      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                        <div></div>

                        <div className="flex justify-center items-center">
                          <ul className="space-y-6 list-disc lg:text-lg md:ml-0 md:mr-0 ml-2 mr-2">
                            <li className="font-medium text-colorTwo">
                              Assessment of student's academic background,
                              interests, and career goals to recommend suitable
                              countries and universities.
                            </li>
                            <li className="font-medium text-colorTwo">
                              Advice and resources for preparing for
                              standardized tests required for admission, such as
                              the TOEFL, IELTS, SAT, ACT, GRE, GMAT, etc.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab label="Financial Scholarships">
                    <div className="py-4">
                      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                        <div className="flex justify-center items-center">
                          {/* <Lottie
                            animationData={FeatureTwo}
                            loop={true}
                            className="w-full h-[280px]"
                          /> */}
                        </div>
                        <div className="flex justify-center items-center">
                          <ul className="space-y-6 list-disc lg:text-lg md:ml-0 md:mr-0 ml-2 mr-2">
                            <li className="font-medium text-colorTwo">
                              Information on estimated costs of studying abroad,
                              including tuition fees, living expenses, and other
                              financial considerations.
                            </li>
                            <li className="font-medium text-colorTwo">
                              Guidance on available scholarships, grants, and
                              financial aid options for international students,
                              and assistance with application processes.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab label="Post-arrival Support">
                    <div className="py-4">
                      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                        <div className="flex justify-center items-center">
                          {/* <Lottie
                            animationData={FeatureThree}
                            loop={true}
                            className="w-full h-[280px]"
                          /> */}
                        </div>
                        <div className="flex justify-center items-center">
                          <ul className="space-y-6 list-disc lg:text-lg md:ml-0 md:mr-0 ml-2 mr-2">
                            <li className="font-medium text-colorTwo">
                              Assistance upon arrival in the destination
                              country, including airport pickup, accommodation
                              arrangements, and initial settling-in support.
                            </li>
                            <li className="font-medium text-colorTwo">
                              Continued support throughout the duration of the
                              study program, including troubleshooting issues
                              related to academics, visas, or personal matters.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Tab>

                  <Tab label="Personalized Guidance">
                    <div className="py-4">
                      <div className="grid md:grid-cols-2 grid-cols-1  gap-4">
                        <div className="flex justify-center items-center">
                          {/* <Lottie
                            animationData={FeatureOne}
                            loop={true}
                            className="w-full h-[280px]"
                          /> */}
                        </div>
                        <div className="flex justify-center items-center">
                          <ul className="space-y-6 list-disc lg:text-lg md:ml-0 md:mr-0 ml-2 mr-2">
                            <li className="font-medium text-colorTwo">
                              Individualized counseling sessions to address
                              specific concerns or challenges faced by students
                              during their study abroad journey.
                            </li>
                            <li className="font-medium text-colorTwo">
                              Ongoing support and mentorship to ensure students
                              achieve their academic and personal goals abroad.
                            </li>
                          </ul>
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
        <div className="relative pt-20">
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
                  Lorem ipsum dolor sit amet consectetur elit
                </h1>
              </div>

              <div className="mx-auto max-w-[1200px] text-center mt-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  sed quaerat culpa nihil! Molestias reiciendis culpa,
                  reprehenderit iure laboriosam eius? Sed fuga quo iste.
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

                            <div className="flex items-center md:justify-start justify-center mt-8">
                              <h1 className="text-3xl font-semibold ">
                                Activate Grow & Enroll
                              </h1>
                            </div>
                          </div>
                        </div>
                        <div className="lg:col-span-2 col-span-4 bg-gray-300">
                          <img
                            src="https://images.ctfassets.net/p24lh3qexxeo/4ANrrtIW5N4zIr5DjabOQX/9f0be9be4a3eb2c6152441f8f82b0758/image.png?w=1081&h=952&q=80&fm=webp"
                            alt=""
                            className="rounded-lg w-[100%]"
                          />
                        </div>
                      </div>
                      <div className="p-4 text-gray-600 md:text-start text-center">
                        <p className="pt-4 pb-4">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Rerum, ullam, temporibus excepturi dolorum hic
                          enim inventore harum voluptas, incidunt aut explicabo
                          ea possimus odio eius magni dicta? Neque, optio
                          suscipit!
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

                            <div className="flex items-center md:justify-start justify-center mt-8">
                              <h1 className="text-3xl font-semibold ">
                                Streamline Success Rate
                              </h1>
                            </div>
                          </div>
                        </div>
                        <div className="lg:col-span-2 col-span-4 bg-gray-300">
                          <img
                            src="https://images.ctfassets.net/p24lh3qexxeo/1wlcJWIgXuaYyBEhxBDVYu/1eb22fb3858708f335f2b5284d32973e/image.png?w=1081&h=952&q=80&fm=webp"
                            alt=""
                            className="rounded-lg w-[100%]"
                          />
                        </div>
                      </div>
                      <div className="p-4 text-gray-600 md:text-start text-center">
                        <p className="pt-4 pb-4">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Rerum, ullam, temporibus excepturi dolorum hic
                          enim inventore harum voluptas, incidunt aut explicabo
                          ea possimus odio eius magni dicta? Neque, optio
                          suscipit!
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

                            <div className="flex items-center md:justify-start justify-center mt-8">
                              <h1 className="text-3xl font-semibold ">
                                Enhanced Mutual Collaboration
                              </h1>
                            </div>
                          </div>
                        </div>
                        <div className="lg:col-span-2 col-span-4 bg-gray-300">
                          <img
                            src="https://images.ctfassets.net/p24lh3qexxeo/Kn30UgsRK5RXRHbHVOeXc/ce4bbf7bf746ff6ebf7f7c465fadca9a/image.png?w=1081&h=952&q=80&fm=webp"
                            alt=""
                            className="rounded-lg w-[100%]"
                          />
                        </div>
                      </div>
                      <div className="p-4 text-gray-600 md:text-start text-center">
                        <p className="pt-4 pb-4">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Rerum, ullam, temporibus excepturi dolorum hic
                          enim inventore harum voluptas, incidunt aut explicabo
                          ea possimus odio eius magni dicta? Neque, optio
                          suscipit!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="w-full bg-[#f8f9fa] border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col">
                      <div className="grid grid-cols-4 w-[100%] border-b-[1px] border-gray-200">
                        <div className="lg:col-span-2 col-span-4 p-4">
                          <div className="flex flex-col">
                            <div className="flex items-center md:justify-start justify-center">
                              <div className="h-[12px] w-1 bg-mainColor"></div>
                              <h1 className="ml-2 text-sm font-bold text-mainColor uppercase">
                                Our Strategy
                              </h1>
                            </div>

                            <div className="flex items-center md:justify-start justify-center mt-8">
                              <h1 className="text-3xl font-semibold ">
                                Promote Entrepreneurship
                              </h1>
                            </div>
                          </div>
                        </div>
                        <div className="lg:col-span-2 col-span-4 bg-gray-300">
                          <img
                            src="https://images.ctfassets.net/p24lh3qexxeo/6UtH8WBSjZFiVZvEfEvpyZ/22a91c5db979f03a964f862195b7bef1/image.png?w=1081&h=952&q=80&fm=webp"
                            alt=""
                            className="rounded-lg w-[100%]"
                          />
                        </div>
                      </div>
                      <div className="mx-4 pt-4 text-gray-600 md:text-start text-center">
                        <p className="pt-2 pb-2">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Rerum, ullam, temporibus excepturi dolorum hic
                          enim inventore harum voluptas, incidunt aut explicabo
                          ea possimus odio eius magni dicta? Neque, optio
                          suscipit!
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
