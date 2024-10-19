import Footer from "../components/Footer";
import us from "../assets/us.svg";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaMicrophoneAlt, FaRocketchat } from "react-icons/fa";

const Contact = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <Navbar />
      <ScrollToTop />

      <section className=" text-black">
        <div className="max-w-[1400px] mx-auto">
          <div className="mt-28 pb-16">
            <div className="space-y-2">
              <div className="md:text-4xl text-3xl font-bold text-black text-center">
                <h1>Let's Start a Conservation</h1>
              </div>

              <div className="text-center">
                <p className="text-gray-800">
                  We’re here to help and answer any questions you might have. We
                  look forward to hearing from you!
                </p>
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
                      <img src={us} alt="" className=" w-[100%]" />
                    </a>

                    <div className="flex flex-row mt-6 mb-8">
                      <a href="" className="w-[50%] ">
                        <div className="flex flex-col space-y-2 items-center">
                          <p className="text-start text-xl font-bold text-black">
                            <span className="text-mainColor">Head</span>{" "}
                            Quarters:
                          </p>
                          <p className="text-lg text-[#6B7280]">
                            7778 McGinnis Ferry Rd
                          </p>
                          <p className="text-lg text-[#6B7280]">
                            PMB 162, Suwanee,
                          </p>
                          <p className="text-lg text-[#6B7280]">
                            Georgia 30024, US
                          </p>
                        </div>
                      </a>
                      <a href="" className="w-[50%] ">
                        <div className="flex flex-col space-y-2 items-center">
                          <p className="text-start text-xl font-semibold text-black">
                            <span className="text-mainColor">Branch</span>{" "}
                            Offices:
                          </p>
                          <p className="text-lg text-[#6B7280]">
                            7778 McGinnis Ferry Rd
                          </p>
                          <p className="text-lg text-[#6B7280]">
                            PMB 162, Suwanee,
                          </p>
                          <p className="text-lg text-[#6B7280]">
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
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your Full Name"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none  focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div className="w-full flex justify-center items-center">
                    <div className="mb-5 md:w-10/12 w-full">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="example@domain.com"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none  focus:shadow-md"
                      />
                    </div>
                  </div>

                  <div className="w-full flex justify-center items-center">
                    <div className="mb-5 md:w-10/12 w-full">
                      <label
                        htmlFor="subject"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Enter your subject"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md"
                      />
                    </div>
                  </div>

                  <div className="w-full flex justify-center items-center">
                    <div className="mb-5 md:w-10/12 w-full">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        name="message"
                        id="message"
                        placeholder="Type your message"
                        className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none  focus:shadow-md"
                      ></textarea>
                    </div>
                  </div>

                  <div className="flex items-center justify-center pt-2 md:mx-0 mx-8">
                    <div className="mb-5 md:w-10/12 w-full">
                      <button className="hover:shadow-form rounded bg-mainColor transition duration-1000 md:py-2 py-2.5 ease-in-out w-full text-base font-medium text-white outline-none">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 pt-8 md:px-2 lg:px-1 px-4">
              <a
                href="mailto:info@laoemaom.com"
                class="flex md:justify-start justify-center"
              >
                <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                  <div class="space-y-4">
                    <div className="flex justify-center items-center">
                      <div className="flex justify-center items-center w-12 h-12 border-2 border-green-100 bg-green-100 rounded-lg">
                        <FaRocketchat size={24} className="text-mainColor" />
                      </div>
                    </div>
                    <div class="flex justify-center items-center">
                      <h1 class="text-2xl text-colorTwo font-bold text-center">
                        Chat to Support
                      </h1>
                    </div>

                    <div class="flex justify-center items-center text-gray-600 text-center font-medium">
                      <p>Speak to our friendly team.</p>
                    </div>

                    <div className="flex justify-center">
                      <a
                        href="/contact-us"
                        class="border-[1px] border-mainColor text-mainColor transition duration-1000 font-semibold text-colorFour py-2 px-4 rounded"
                      >
                        Continue Chat
                      </a>
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
                      <div className="flex justify-center items-center w-12 h-12 border-2 border-green-100 bg-green-100 rounded-lg">
                        <FaMicrophoneAlt size={24} className="text-mainColor" />
                      </div>
                    </div>
                    <div class="flex justify-center items-center">
                      <h1 class="text-2xl text-colorTwo font-bold text-center">
                        Call us Now
                      </h1>
                    </div>

                    <div class="flex justify-center items-center text-gray-600 text-center font-medium">
                      <p>Phone: (+1) 678-200-4524</p>
                    </div>

                    <div className="flex justify-center">
                      <a
                        href="/contact-us"
                        class="border-[1px] border-mainColor text-mainColor transition duration-1000 font-semibold text-colorFour py-2 px-4 rounded"
                      >
                        Make a Call Now
                      </a>
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
                      <div className="flex justify-center items-center w-12 h-12 border-2 border-green-100 bg-green-100 rounded-lg">
                        <FaLocationDot size={24} className="text-mainColor" />
                      </div>
                    </div>
                    <div class="flex justify-center items-center">
                      <h1 class="text-2xl text-colorTwo font-bold text-center">
                        Visit us Directly
                      </h1>
                    </div>

                    <div class="flex justify-center items-center text-gray-600 text-center font-medium">
                      <p>Visit our office HQ</p>
                    </div>

                    <div className="flex justify-center">
                      <a
                        href="https://www.bing.com/maps?where=7778%20McGinnis%20Ferry%20Rd%2C%20PMB%20162%2C%20Suwanee%2C%20Georgia%2030024%2C%20US"
                        class="border-[1px] border-mainColor text-mainColor transition duration-1000 font-semibold text-colorFour py-2 px-4 rounded"
                      >
                        Get Directions
                      </a>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
