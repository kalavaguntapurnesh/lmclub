import React from "react";
import estore from "../assets/estore.webp";
import beehive from "../assets/beehive.webp";
import enroll from "../assets/enroll.webp";
import network from "../assets/network.webp";
import broadcast from "../assets/broadcast.webp";

const HomeProducts = () => {
  const values2 = [
    {
      icon: network,
      Title: "Network",
      description:
        "Activate Network today to connect with like-minded individuals & expand your opportunities! By engaging with fellow members, you can participate in meetings & initiate various projects.",
    },
    {
      icon: beehive,
      Title: "Beehive",
      description:
        "Unlock the BEEHIVE. It will allow us to text / email great deals, coupons, information and opportunities from local restaurants hotel, retailers, give you points for posting and more!.",
    },
    {
      icon: broadcast,
      Title: "Broadcast",
      description:
        "Activate BROADCAST to advertise local businesses on your social media and we will pay you a percentage of the revenue earned by giving you points to redeem gift certificates.",
    },
    {
      icon: estore,
      Title: "Estore",
      description:
        "Activate E-Store and we will share a percentage of our profits with you. Why? Because you are helping our brand to grow. And in return we present you the profits.",
    },
    {
      icon: enroll,
      Title: "Grow",
      description:
        "Enroll earn rewards for helping our community to expand. T & C apply. And you’re instantly connected to a powerful network group and the rewards are AMAZING!",
    },
  ];

  return (
    <div className="pt-8 pb-8">
      <div className="relative">
        <div className="w-full">
          <div className="w-full mx-auto max-w-[1400px] ">
            <div className="p-4">
              <div>
                <h2 className="lg:text-4xl text-center text-2xl font-bold text-trumpTwo">
                  Explore our widgets
                </h2>
                <p className="text-gray-600 pt-3 text-center">
                  Whether you&apos;re looking to grow your network, share
                  valuable insights, or promote your business, LM Club has the
                  tools to make it happen.
                </p>

                <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4 pt-16">
                  {values2.map((value, index) => (
                    <div
                      key={index}
                      className="flex md:justify-start justify-center"
                    >
                      <div className="w-full bg-white border border-gray-200 rounded p-6">
                        <div className="space-y-3">
                          <div className="flex justify-center items-center">
                            <img
                              src={value.icon}
                              alt="about_one"
                              className="w-[80px] h-[80px]"
                            />
                          </div>

                          <div className="flex justify-center items-center">
                            <h1 className="text-2xl text-trumpTwo font-semibold text-center">
                              {value.Title}
                            </h1>
                          </div>
                          <div className="flex justify-center  items-center text-gray-600 text-center text-[14px] leading-[22px]">
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
  );
};

export default HomeProducts;
