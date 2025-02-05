import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import Accordion from "../components/Accordion";
import connection from "../assets/connection.svg";
import MockOne from "../assets/MockOne.png";
import MockTwo from "../assets/MockTwo.png";
import MockThree from "../assets/MockThree.png";
import lity from "../assets/lity.svg";

import { FreeMode, Pagination, Autoplay } from "swiper/modules";

const Testimonial = () => {
  const ServiceData = [
    {
      name: "Marcel Bordon",
      imageLink:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      designation: "Working at One",
      review:
        "Lorem ipsum dolor sit amet consectetur,adipisicing elit. Neque quam at reprehenderit, cumque delectus maiores possimus quibusdam ",
    },
    {
      name: "Aaron Zander",
      imageLink:
        "https://screencloud.com/_next/static/media/marcel-bordon.dd451a32.webp",
      designation: "Working at Two",
      review:
        "Lorem ipsum dolor sit amet consectetur,adipisicing elit. Neque quam at reprehenderit, cumque delectus maiores possimus quibusdam ",
    },
    {
      name: "Michael Fasbender",
      imageLink:
        "https://screencloud.com/_next/static/media/aaron-zander.74f76098.webp",
      designation: "Working at Three",
      review:
        "Lorem ipsum dolor sit amet consectetur,adipisicing elit. Neque quam at reprehenderit, cumque delectus maiores possimus quibusdam ",
    },
    {
      name: "Tulsa Fast",
      imageLink:
        "https://screencloud.com/_next/static/media/sharon-winning.cb6ceb06.webp",
      designation: "Working at Four",
      review:
        "Lorem ipsum dolor sit amet consectetur,adipisicing elit. Neque quam at reprehenderit, cumque delectus maiores possimus quibusdam ",
    },
    {
      name: "Leaney Dawson",
      imageLink:
        "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      designation: "Working at Five",
      review:
        "Lorem ipsum dolor sit amet consectetur,adipisicing elit. Neque quam at reprehenderit, cumque delectus maiores possimus quibusdam ",
    },
    {
      name: "Myrcella Stark",
      imageLink:
        "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80",
      designation: "Working at Six",
      review:
        "Lorem ipsum dolor sit amet consectetur,adipisicing elit. Neque quam at reprehenderit, cumque delectus maiores possimus quibusdam ",
    },
  ];

  return (
    <>
      <div className="pt-12 pb-8">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] ">
              <div className="p-4">
                <div>
                  <div className="flex flex-wrap flex-col lg:items-start items-start pb-3">
                    <div className="text-start leading-relaxed  font-bold text-black">
                      <p className="lg:text-4xl text-2xl">
                        Got Questions? We've got answers
                      </p>
                    </div>
                    <div className="md:w-36 w-28 h-1 border-b-2 border-green-500 mt-[1px]"></div>
                  </div>
                  <p className="text-gray-600 pt-3">
                    Here are the questions frequently asked by our customers.
                    And we've answered to the topics related to rewards,
                    membership.
                  </p>

                  <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4 gap-8 pt-12">
                    <div className="flex flex-col justify-center space-y-3">
                      <Accordion
                        title="What is included with my LM Club membership access?"
                        answer="All of our widgets, Broadcast, Grow, and Network are included! With access, you can access our e-store and a whole lot more."
                      />
                      <Accordion
                        title="What are the enroll and rewards widget and the uses of it?"
                        answer="We provide you reward points for being a member, buying products from our LM EStore, and more!"
                      />
                      <Accordion
                        title="How do I redeem my reward points and how to use them?"
                        answer="You will redeem points inside of our app!"
                      />
                      <Accordion
                        title="How can a customer contact us for immediate guidance?"
                        answer="You can contact us through mail on support@lmclub.com or go to the Contact page for further information. And we are always ready to help."
                      />
                      <Accordion
                        title="How do I cancel my Silver or Gold or Platinum membership?"
                        answer="You can cancel your paid Silver or Gold membership anytime. Simply log in to your LM Club account, go to the Manage My Account page, and click Cancel Auto-Renew."
                      />
                    </div>

                    <div>
                      <img
                        src="https://lmclub.club/wp-content/uploads/2024/10/GettyImages-1490847054.webp"
                        alt="image"
                        className="rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-12 lg:pb-16 pb-8">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] ">
              <div className="p-4">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 pt-16">
                  <div>
                    <h2 className="lg:text-4xl text-2xl font-bold text-trumpTwo">
                      A mission rooted for collaborative
                      <br className="lg:block hidden" /> growth & earning.
                    </h2>
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-600">
                      LM Grow Rewards program allows you to earn redeemable
                      points and achieve special milestones simply by inviting
                      others to join our community. Help us grow, and in return,
                      enjoy exclusive perks and rewards!.
                    </p>
                    <p className="text-gray-600">
                      Together, we can build a vibrant community, sharing
                      success and opportunities.
                    </p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 pt-8">
                  <div className="flex md:justify-start justify-center">
                    <div className="w-full bg-white rounded p-6">
                      <div className="space-y-3">
                        <div className="flex justify-start items-center">
                          <img
                            src={connection}
                            className="flex justify-center items-center w-12 h-12  "
                          ></img>
                        </div>

                        <div className="flex justify-start items-center">
                          <h1 className="text-2xl text-trumpTwo font-bold text-start">
                            Complete Your Profile
                          </h1>
                        </div>
                        <div className="flex justify-start items-center text-gray-600 ">
                          <p>
                            Add a profile picture, list your professional
                            interests to help us get to know you.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex md:justify-start justify-center">
                    <div className="w-full bg-white rounded p-6">
                      <div className="space-y-3">
                        <div className="flex justify-start items-center">
                          <img
                            src={lity}
                            className="flex justify-center items-center w-12 h-12  "
                          ></img>
                        </div>

                        <div className="flex justify-start items-center">
                          <h1 className="text-2xl text-trumpTwo font-bold text-start">
                            Explore the Directory
                          </h1>
                        </div>
                        <div className="flex justify-start items-center text-gray-600 ">
                          <p>
                            Browse the member directory to find connections and
                            start building your network.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-6 justify-center lg:col-span-2 ">
                    <img
                      src={MockOne}
                      alt="mockone"
                      className="lg:h-[380px] "
                    />
                    <img
                      src={MockTwo}
                      alt="mockone"
                      className="lg:h-[380px] "
                    />
                    <img
                      src={MockThree}
                      alt="mockone"
                      className="lg:h-[380px] "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-12 ">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] ">
              <div className="p-4">
                <div className="flex items-center text-center justify-center ">
                  <div className="h-4 w-1 bg-mainColor"></div>
                  <h1 className="ml-2 font-bold text-mainColor uppercase">
                    Trust our reviews
                  </h1>
                </div>
                <div className="mx-auto max-w-[1200px] text-center mt-4">
                  <h1 className="lg:text-4xl text-2xl font-bold text-headingColor">
                    Real stories, real results
                  </h1>
                </div>

                <div className="mx-auto max-w-[1200px] text-gray-600 text-center mt-4">
                  <p>
                    Laoe Maom embodies progress and adaptability, responding
                    dynamically to the evolving relationships and interests in
                    our global landscape. We are a collective of individuals and
                    businesses worldwide, committed to mutual support and shared
                    success. By joining forces, we breathe life into businesses
                    and nurture them to thrive. Let’s achieve greatness
                    together.
                  </p>
                </div>

                <Swiper
                  breakpoints={{
                    340: {
                      slidesPerView: 1,
                      spaceBetween: 15,
                    },
                    1000: {
                      slidesPerView: 3,
                      spaceBetween: 18,
                    },
                  }}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  freeMode={true}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, FreeMode]}
                  className="max-w-[90%] "
                >
                  {ServiceData.map((item) => (
                    <SwiperSlide key={item.title} className="pt-16 pb-12">
                      <div className="bg-white border-[1px] rounded-lg overflow-visible">
                        <div className="relative -mt-10 flex justify-center">
                          <img
                            className="rounded-full shadow-md h-20 w-20 object-cover "
                            src={item.imageLink}
                            alt="Profile"
                          />
                        </div>
                        <div className="px-6 py-4 text-center">
                          <h2 className="text-xl font-semibold text-gray-800">
                            {item.name}
                          </h2>
                          <p className="text-gray-600">{item.designation}</p>

                          <p className="mt-2 text-gray-600">
                            John&apos;s review about the company and services is
                            positive and detailed, explaining his experience
                            clearly.
                          </p>

                          <div className="flex justify-center mt-4">
                            <svg
                              className="w-6 h-6 text-yellow-400 fill-current"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2L14.09 8.26L20.78 9.27L16 13.14L17.18 19.84L12 16.77L6.82 19.84L8 13.14L3.22 9.27L9.91 8.26L12 2Z" />
                            </svg>
                            <svg
                              className="w-6 h-6 text-yellow-400 fill-current"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2L14.09 8.26L20.78 9.27L16 13.14L17.18 19.84L12 16.77L6.82 19.84L8 13.14L3.22 9.27L9.91 8.26L12 2Z" />
                            </svg>
                            <svg
                              className="w-6 h-6 text-yellow-400 fill-current"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2L14.09 8.26L20.78 9.27L16 13.14L17.18 19.84L12 16.77L6.82 19.84L8 13.14L3.22 9.27L9.91 8.26L12 2Z" />
                            </svg>
                            <svg
                              className="w-6 h-6 text-yellow-400 fill-current"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2L14.09 8.26L20.78 9.27L16 13.14L17.18 19.84L12 16.77L6.82 19.84L8 13.14L3.22 9.27L9.91 8.26L12 2Z" />
                            </svg>
                            <svg
                              className="w-6 h-6 text-yellow-400 fill-current"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2L14.09 8.26L20.78 9.27L16 13.14L17.18 19.84L12 16.77L6.82 19.84L8 13.14L3.22 9.27L9.91 8.26L12 2Z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
