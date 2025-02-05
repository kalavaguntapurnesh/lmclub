import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Accordion from "../components/Accordion";

const Pricing = () => {
  const location = useLocation();
  const [isYearly, setYearly] = useState(false);

  const handleToggle = () => {
    setYearly((prev) => !prev);
  };

  const monthlyPlans = [
    {
      name: "Bronze",
      description: "Best option for personal use & for your next project.",
      price: 10,
      points: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 1 developer",
        "Premium support: 6 months",
        "Free updates: 6 months",
      ],
    },
    {
      name: "Silver",
      description: "Best option for personal use & for your next project.",
      price: 20,
      points: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 1 developer",
        "Premium support: 6 months",
        "Free updates: 6 months",
      ],
    },
    {
      name: "Gold",
      description: "Best option for personal use & for your next project.",
      price: 35,
      points: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 1 developer",
        "Premium support: 6 months",
        "Free updates: 6 months",
      ],
    },
    {
      name: "Platinum",
      description: "Best option for personal use & for your next project.",
      price: 40,
      points: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 1 developer",
        "Premium support: 6 months",
        "Free updates: 6 months",
      ],
    },
  ];

  const getButtonColor = (planName) => {
    switch (planName) {
      case "Bronze":
        return "text-[#CD7F32]";
      case "Silver":
        return "text-gray-600";
      case "Gold":
        return "text-[#FFD700]";
      case "Platinum":
        return "text-[#E5E4E2]";
      default:
        return "text-red-500";
    }
  };

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
      <Navbar />
      <ScrollToTop />
      <div className="mt-28">
        <div className="relative">
          <div className="w-full">
            <div className="w-full px-4 mx-auto max-w-[1400px] pb-8">
              <div className="space-y-2">
                <div className="md:text-4xl text-3xl font-bold text-headingColor text-center">
                  <h1>Find your perfect plan</h1>
                </div>

                <div className="text-center">
                  <p className="text-sideHeading">
                    No matter which level you choose, you’re instantly connected
                    to a powerful network group and the rewards are AMAZING!
                  </p>
                </div>
              </div>

              <div className="text-center my-6">
                <div className="flex items-center justify-center gap-4">
                  {/* Monthly Text */}
                  <span
                    className={`font-semibold ${
                      !isYearly ? "text-mainColor" : "text-gray-500"
                    }`}
                  >
                    Monthly
                  </span>

                  {/* Toggle Button */}
                  <div
                    className={`relative w-16 h-8 bg-gray-300 rounded-full p-1 cursor-pointer flex items-center ${
                      isYearly ? "bg-green-500" : "bg-gray-300"
                    }`}
                    onClick={handleToggle}
                  >
                    {/* Toggle Slider */}
                    <div
                      className={`w-6 h-6 bg-white rounded-full shadow-md transform duration-300 ease-in-out ${
                        isYearly ? "translate-x-8" : "translate-x-0"
                      }`}
                    ></div>
                  </div>

                  {/* Yearly Text */}
                  <span
                    className={`font-semibold ${
                      isYearly ? "text-mainColor" : "text-gray-500"
                    }`}
                  >
                    Yearly
                  </span>
                </div>
              </div>

              <section className="bg-white ">
                <div className="py-8 px-4 lg:px-6">
                  <div className=" grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
                    {monthlyPlans.map((plan) => (
                      <div
                        id="pricing_bronze"
                        key={plan.name}
                        className="flex flex-col text-center p-4 text-gray-900 bg-white rounded border border-gray-300 shadow"
                      >
                        <h3
                          // className="mb-4 text-2xl font-extrabold text-[#CD7F32]"
                          className={`mb-4 text-2xl font-extrabold ${getButtonColor(
                            plan.name
                          )}`}
                        >
                          {plan.name}
                        </h3>
                        <p className="font-light text-gray-500 sm:text-lg">
                          {plan.description}
                        </p>
                        <div className="flex justify-center items-baseline my-8">
                          <span className="mr-2 text-5xl font-extrabold">
                            ${isYearly ? plan.price * 12 : plan.price}
                          </span>
                          <span className="text-gray-500 ">
                            /{isYearly ? "year" : "month"}
                          </span>
                        </div>

                        <ul role="list" className="mb-8 space-y-4 text-left">
                          {plan.points.map((point, index) => (
                            <li
                              key={index}
                              className="flex items-center space-x-3"
                            >
                              <svg
                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                        <a
                          href="/login"
                          className="text-white bg-mainColor font-medium rounded-full text-sm px-5 py-2.5 my-3 text-center "
                        >
                          Get started
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <div className="pt-12 pb-12" id="faq">
                <div className="space-y-2">
                  <div className="md:text-4xl text-3xl font-bold text-headingColor text-center">
                    <h1>Frequently Asked Questions</h1>
                  </div>
                </div>

                <div className="max-w-[1000px] mx-auto pt-12 ">
                  <Accordion
                    title="As a new member, what are my membership options?"
                    answer="When you're logged into your LM Club account and book a pre-priced project, your 20% discount is automatically applied at checkout. If you're not logged in and are booking a fixed price project, you will be prompted to log in with your email at checkout."
                  />
                  <Accordion
                    title="How do I cancel my Silver or Gold or Platinum membership?"
                    answer="You can cancel your paid Silver or Gold membership anytime. Simply log in to your LM Club account, go to the Manage My Account page, and click Cancel Auto-Renew."
                  />
                  <Accordion
                    title="How do I know I can trust the reviews I read on LM Club?"
                    answer="We take several precautions to ensure that reviews come from real customers — including a combination of proprietary behind-the-scenes technology and good old-fashioned human investigations."
                  />
                  <Accordion
                    title="How can a customer contact us for immediate guidance?"
                    answer="You can contact us through mail on support@lmclub.com or go to the Contact page for further information. And we are always ready to help."
                  />
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

export default Pricing;
