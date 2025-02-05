import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import estore from "../assets/estore.webp";
import beehive from "../assets/beehive.webp";
import enroll from "../assets/enroll.webp";
import network from "../assets/network.webp";
import broadcast from "../assets/broadcast.webp";
import One from "../assets/One.svg";
import MockOne from "../assets/MockOne.png";
import MockTwo from "../assets/MockTwo.png";
import MockThree from "../assets/MockThree.png";
import Two from "../assets/Two.svg";
import connection from "../assets/connection.svg";
import lity from "../assets/lity.svg";

const Widgets = () => {
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

  const values1 = [
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
  ];

  return (
    <div>
      <Navbar />
      <ScrollToTop />

      <div className="pt-24 pb-8">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] ">
              <div className="p-4">
                <div className="flex flex-col space-y-3 w-full lg:pt-8">
                  <div className="flex items-center justify-center ">
                    <div className="h-4 w-1 bg-green-500"></div>
                    <h1 className="ml-2 font-bold text-green-500 lg:uppercase">
                      Our Widgets
                    </h1>
                  </div>

                  <div className="lg:text-4xl text-2xl text-center font-bold text-headingColor">
                    <h1>Earn rewards for inviting new members</h1>
                  </div>

                  <div className="text-gray-600 text-center">
                    <p>
                      At Laoe Maom, we are dedicated to fostering a vibrant
                      culture that propels our members and businesses to
                      connect, collaborate, and create opportunities. Anchored
                      in the principle of TEAM (Together Everyone Achieves
                      More), we harness the power of human cooperation to
                      accomplish significant goals incrementally.
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4 pt-8">
                    {values2.map((value, index) => (
                      <div
                        key={index}
                        className="flex md:justify-start justify-center"
                      >
                        <div className="w-full bg-white border border-gray-200 rounded p-6">
                          <div className="space-y-2">
                            <div className="flex md:justify-start justify-center items-center">
                              <img
                                src={value.icon}
                                alt="about_one"
                                className="w-[80px] h-[80px]"
                              />
                            </div>

                            <div className="flex md:justify-start justify-center items-center">
                              <h1 className="text-2xl text-trumpTwo font-semibold text-center lg:text-start">
                                {value.Title}
                              </h1>
                            </div>
                            <div className="flex md:justify-start justify-center  items-center text-gray-600 lg:text-start text-center text-[14px] leading-[22px]">
                              <p>{value.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

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
                        others to join our community. Help us grow, and in
                        return, enjoy exclusive perks and rewards!.
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
                              Browse the member directory to find connections
                              and start building your network.
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
      </div>

      <Footer />
    </div>
  );
};

export default Widgets;
