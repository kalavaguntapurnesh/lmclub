import Footer from "../components/Footer";
import us from "../assets/us.svg";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import { useState } from "react";
import { SiMinutemailer } from "react-icons/si";
import { FaMicrophone } from "react-icons/fa6";
import { FaMicrophoneAlt } from "react-icons/fa";
import { IoChatboxEllipses } from "react-icons/io5";

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
              <div className="md:text-4xl text-3xl font-semibold text-black text-center">
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
                    <div className="flex justify-center items-center">
                      <img src={us} alt="" className=" w-[100%]" />
                    </div>

                    <div className="flex flex-row mt-6">
                      <a href="" className="w-[50%] ">
                        <div className="flex flex-col space-y-2 md:items-start items-center">
                          <div className="text-xl font-bold text-mainColor">
                            <h1>Head Quarters:</h1>
                          </div>
                          <div>
                            <p>7778 McGinnis Ferry Rd</p>
                            <p>PMB 162, Suwanee,</p>
                            <p>Georgia 30024, US</p>
                          </div>
                        </div>
                      </a>
                      <a href="" className="w-[50%]">
                        <div className="flex flex-col space-y-2 md:items-start items-center">
                          <div className="text-xl font-bold text-mainColor">
                            <h1>Branch Offices:</h1>
                          </div>
                          <div>
                            <p>7778 McGinnis Ferry Rd</p>
                            <p>PMB 162, Suwanee,</p>
                            <p>Georgia 30024, US</p>
                          </div>
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

                  <div className="flex items-center justify-center pt-2">
                    <div className="mb-5 md:w-10/12 w-full">
                      <button className="hover:shadow-form rounded bg-mainColor transition duration-1000 py-2 ease-in-out w-full text-base font-semibold text-white outline-none">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="grid md:grid-cols-3 grid-cols-1 gap-4 pt-8">
              <a
                href="mailto:info@laoemaom.com"
                className="flex flex-col justify-center items-center border-[1px] shadow py-2 rounded md:mx-0 mx-4"
              >
                <div>
                  <SiMinutemailer className="md:w-12 md:h-12 w-8 h-8 text-mainColor" />
                </div>
                <div className="pt-2 md:text-xl font-semibold text-black">
                  <h1>info@laoemaom.com</h1>
                </div>
              </a>
              <a
                href="mailto:info@laoemaom.com"
                className="flex flex-col justify-center items-center border-[1px] shadow py-2 rounded md:mx-0 mx-4"
              >
                <div>
                  <FaMicrophoneAlt className="md:w-12 md:h-12 w-8 h-8 text-mainColor" />
                </div>
                <div className="pt-2 md:text-xl font-semibold text-black">
                  <h1>(+1) 678-200-4524</h1>
                </div>
              </a>
              <a
                href="mailto:info@laoemaom.com"
                className="flex flex-col justify-center items-center border-[1px] shadow py-2 rounded md:mx-0 mx-4"
              >
                <div>
                  <IoChatboxEllipses className="md:w-12 md:h-12 w-8 h-8 text-mainColor" />
                </div>
                <div className="pt-2 md:text-xl font-semibold text-black">
                  <h1>LM Club Chat</h1>
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
