import Footer from "../components/Footer";
import us from "../assets/us.svg";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import { useState } from "react";
import { FaBlenderPhone, FaBuilding, FaHandshake } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { TiArrowRight } from "react-icons/ti";

const Contact = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <Navbar />
      <ScrollToTop />

      <div className="lg:pt-28 pt-24">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] ">
              <div className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-center ">
                    <div className="h-4 w-1 bg-green-500"></div>
                    <h1 className="ml-2 font-bold text-green-500 lg:uppercase">
                      Contact Us
                    </h1>
                  </div>

                  <div className="lg:text-4xl text-2xl text-center font-bold text-headingColor">
                    <h1>Let&apos;s Start a Conservation</h1>
                  </div>

                  <div className="text-gray-600 text-center">
                    <p>
                      We’re here to help and answer any questions you might
                      have. We look forward to hearing from you!. You can also
                      reach out to us from the following social media links.
                    </p>
                  </div>
                </div>

                <div className="max-w-[600px] mx-auto my-6">
                  <div className="grid grid-cols-5 gap-4">
                    <a
                      href="https://www.linkedin.com/company/laoe-maom/"
                      className="flex justify-center items-center"
                    >
                      <div className="flex justify-center items-center w-12 h-12 border-2 border-green-50 bg-green-50 rounded-full">
                        <FaLinkedin size={24} className="text-green-500" />
                      </div>
                    </a>
                    <a
                      href="https://www.facebook.com/people/Laoe-Maom/100063772398711/#"
                      className="flex justify-center items-center"
                    >
                      <div className="flex justify-center items-center w-12 h-12 border-2 border-green-50 bg-green-50 rounded-full">
                        <FaFacebook size={24} className="text-green-500" />
                      </div>
                    </a>

                    <a
                      href="https://x.com/RichardLMCLUB"
                      className="flex justify-center items-center"
                    >
                      <div className="flex justify-center items-center w-12 h-12 border-2 border-green-50 bg-green-50 rounded-full">
                        <FaXTwitter size={24} className="text-green-500" />
                      </div>
                    </a>

                    <a
                      href="https://www.instagram.com/laoemaomclub/"
                      className="flex justify-center items-center"
                    >
                      <div className="flex justify-center items-center w-12 h-12 border-2 border-green-50 bg-green-50 rounded-full">
                        <FaInstagram size={24} className="text-green-500" />
                      </div>
                    </a>

                    <a
                      href="https://www.tiktok.com/@lmclub0"
                      className="flex justify-center items-center"
                    >
                      <div className="flex justify-center items-center w-12 h-12 border-2 border-green-50 bg-green-50 rounded-full">
                        <FaTiktok size={24} className="text-green-500" />
                      </div>
                    </a>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 pt-8">
                  <div className="flex flex-col space-y-4">
                    <div className="pt-6">
                      <div className="w-full ">
                        <a
                          href="https://www.bing.com/maps?where=7778%20McGinnis%20Ferry%20Rd%2C%20PMB%20162%2C%20Suwanee%2C%20Georgia%2030024%2C%20US"
                          className="flex justify-center items-center"
                        >
                          <img src={us} alt="usMap" className=" w-[100%]" />
                        </a>

                        <div className="flex flex-row mt-6 mb-8">
                          <a href="" className="w-[50%] ">
                            <div className="flex flex-col space-y-1 items-center">
                              <p className="text-start text-xl font-bold text-black">
                                <span className="text-mainColor">Head</span>{" "}
                                Quarters:
                              </p>
                              <p className=" text-sideHeading">
                                7778 McGinnis Ferry Rd
                              </p>
                              <p className=" text-sideHeading">
                                PMB 162, Suwanee,
                              </p>
                              <p className=" text-sideHeading">
                                Georgia 30024, US
                              </p>
                            </div>
                          </a>
                          <a href="" className="w-[50%] ">
                            <div className="flex flex-col space-y-1 items-center">
                              <p className="text-start text-xl font-semibold text-black">
                                <span className="text-mainColor">Branch</span>{" "}
                                Offices:
                              </p>
                              <p className=" text-sideHeading">
                                7778 McGinnis Ferry Rd
                              </p>
                              <p className=" text-sideHeading">
                                PMB 162, Suwanee,
                              </p>
                              <p className=" text-sideHeading">
                                Georgia 30024, US
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mx-2">
                    <form action="" method="POST" className="mt-8">
                      <div className="w-full flex justify-center items-center">
                        <div className="mb-5 md:w-10/12 w-full">
                          <label
                            htmlFor="email"
                            className="mb-3 block text-base font-medium text-black"
                          >
                            Full Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your Full Name"
                            className="w-full rounded border border-[#e0e0e0] bg-white py-3 px-6 text-base text-[#6B7280] outline-none  focus:shadow-md"
                          />
                        </div>
                      </div>
                      <div className="w-full flex justify-center items-center">
                        <div className="mb-5 md:w-10/12 w-full">
                          <label
                            htmlFor="email"
                            className="mb-3 block text-base font-medium text-black"
                          >
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="example@domain.com"
                            className="w-full rounded border border-[#e0e0e0] bg-white py-3 px-6 text-base text-[#6B7280] outline-none  focus:shadow-md"
                          />
                        </div>
                      </div>

                      <div className="w-full flex justify-center items-center">
                        <div className="mb-5 md:w-10/12 w-full">
                          <label
                            htmlFor="subject"
                            className="mb-3 block text-base font-medium text-black"
                          >
                            Subject
                          </label>
                          <input
                            type="text"
                            name="subject"
                            id="subject"
                            placeholder="Enter your subject"
                            className="w-full rounded border border-[#e0e0e0] bg-white py-3 px-6 text-base text-[#6B7280] outline-none focus:shadow-md"
                          />
                        </div>
                      </div>

                      <div className="w-full flex justify-center items-center">
                        <div className="mb-5 md:w-10/12 w-full">
                          <label
                            htmlFor="message"
                            className="mb-3 block text-base font-medium text-black"
                          >
                            Message
                          </label>
                          <textarea
                            rows="4"
                            name="message"
                            id="message"
                            placeholder="Type your message"
                            className="w-full resize-none rounded border border-[#e0e0e0] bg-white py-3 px-6 text-base text-[#6B7280] outline-none  focus:shadow-md"
                          ></textarea>
                        </div>
                      </div>

                      <div className="flex items-center justify-center pt-2 md:mx-0 mx-8">
                        <div className="mb-5 md:w-10/12 w-full">
                          <button className="rounded bg-green-500 transition duration-1000 py-3 ease-in-out w-full text-base  text-white outline-none">
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 pt-16">
                  <a
                    href="mailto:info@laoemaom.com"
                    className="flex md:justify-start justify-center"
                  >
                    <div className="w-full p-6 bg-white border border-gray-200 rounded shadow ">
                      <div className="space-y-3">
                        <div className="flex lg:justify-start justify-center items-center">
                          <div className="flex lg:justify-start justify-center items-center">
                            <FaHandshake size={32} className="text-[#22c55e]" />
                          </div>
                        </div>
                        <div className="flex lg:justify-start justify-center items-center">
                          <h1 className="text-2xl text-headingColor font-bold text-center">
                            Chat to friendly team
                          </h1>
                        </div>

                        <div className="flex lg:justify-start justify-center items-center text-sideHeading text-center">
                          <p>
                            Speak to our friendly team and we will try to
                            respond
                          </p>
                        </div>

                        <div className="flex lg:justify-start justify-center">
                          <a
                            href="/contact-us"
                            className="group border-[1px] relative px-6 py-2 text-green-500 text-sm rounded-full border-green-500 font-semibold overflow-hidden flex items-center gap-2 w-[200px] hover:bg-green-500 hover:text-white duration-1000 ease-in-out transition hover:font-medium"
                          >
                            <span className="relative flex-[8] text-center">
                              Contact Us
                            </span>
                            <span className="w-7 h-7 flex items-center justify-center rounded-full bg-green-500 flex-[2] transition duration-1000 ease-in-out text-black group-hover:bg-white group-hover:text-green-500">
                              <TiArrowRight className=" text-lg" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a
                    href="mailto:info@laoemaom.com"
                    className="flex md:justify-start justify-center"
                  >
                    <div className="w-full p-6 bg-white border border-gray-200 rounded shadow ">
                      <div className="space-y-3">
                        <div className="flex lg:justify-start justify-center items-center">
                          <div className="flex lg:justify-start justify-center items-center">
                            <FaBlenderPhone
                              size={32}
                              className="text-[#22c55e]"
                            />
                          </div>
                        </div>
                        <div className="flex lg:justify-start justify-center items-center">
                          <h1 className="text-2xl text-headingColor font-bold text-center">
                            Make a call directly
                          </h1>
                        </div>

                        <div className="flex lg:justify-start justify-center items-center text-sideHeading text-center">
                          <p>Phone / Mobile Number: (+1) 678-200-4524</p>
                        </div>

                        <div className="flex lg:justify-start justify-center">
                          <a
                            href="/contact-us"
                            className="group border-[1px] relative px-6 py-2 text-green-500 text-sm rounded-full border-green-500 font-semibold overflow-hidden flex items-center gap-2 w-[200px] hover:bg-green-500 hover:text-white duration-1000 ease-in-out transition hover:font-medium"
                          >
                            <span className="relative flex-[8] text-center">
                              Call us here
                            </span>
                            <span className="w-7 h-7 flex items-center justify-center rounded-full bg-green-500 flex-[2] transition duration-1000 ease-in-out text-black group-hover:bg-white group-hover:text-green-500">
                              <TiArrowRight className=" text-lg" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a
                    href="mailto:info@laoemaom.com"
                    className="flex md:justify-start justify-center"
                  >
                    <div className="w-full p-6 bg-white border border-gray-200 rounded shadow">
                      <div className="space-y-3">
                        <div className="flex lg:justify-start justify-center items-center">
                          <div className="flex lg:justify-start justify-center items-center">
                            <FaBuilding size={32} className="text-[#22c55e]" />
                          </div>
                        </div>
                        <div className="flex lg:justify-start justify-center items-center">
                          <h1 className="text-2xl text-headingColor font-bold text-center">
                            Plan for a visit
                          </h1>
                        </div>

                        <div className="flex lg:justify-start justify-center items-center text-sideHeading text-center">
                          <p>Visit our office Head Quarters by this address.</p>
                        </div>

                        <div className="flex lg:justify-start justify-center">
                          <a
                            href="/contact-us"
                            className="group border-[1px] relative px-6 py-2 text-green-500 text-sm rounded-full border-green-500 font-semibold overflow-hidden flex items-center gap-2 w-[200px] hover:bg-green-500 hover:text-white duration-1000 ease-in-out transition hover:font-medium"
                          >
                            <span className="relative flex-[8] text-center">
                              Visit our address
                            </span>
                            <span className="w-7 h-7 flex items-center justify-center rounded-full bg-green-500 flex-[2] transition duration-1000 ease-in-out text-black group-hover:bg-white group-hover:text-green-500">
                              <TiArrowRight className=" text-lg" />
                            </span>
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
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
