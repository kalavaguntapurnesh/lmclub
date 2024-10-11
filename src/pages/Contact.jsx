import Footer from "../components/Footer";
import us from "../assets/us.svg";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import { useState } from "react";

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
                  </div>
                </div>

                <div className="pt-6">
                  <h1 className="md:text-start text-center uppercase text-lg font-bold text-colorFour tracking-wide">
                    point of contact
                  </h1>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
                  <div className="flex flex-col md:items-start items-center space-y-1">
                    <h1 className="text-lg font-semibold">Head Quarters:</h1>
                    <h1>7778 McGinnis Ferry Rd, PMB 162,</h1>
                    <h1>Suwanee, Georgia 30024, US</h1>
                  </div>

                  <div className="flex flex-col md:items-start items-center space-y-1">
                    <h1 className="text-lg font-semibold">Sub Locations:</h1>
                    <h1>7778 McGinnis Ferry Rd, PMB 162,</h1>
                    <h1>Suwanee, Georgia 30024, US</h1>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
                  <div className="flex flex-col md:items-start items-center">
                    <h1 className="text-lg font-semibold">
                      Technical Support:
                    </h1>
                    <h1 className="text-lg font-semibold text-blue-600">
                      support@lmclub.com
                    </h1>
                  </div>

                  <div className="flex flex-col md:items-start items-center">
                    <h1 className="text-lg font-semibold">Billing Querries:</h1>
                    <h1 className="text-lg font-semibold text-blue-600">
                      (+1) 678-200-4524
                    </h1>
                  </div>
                </div>

                <div className="flex flex-col md:items-start items-center">
                  <h1 className="text-lg font-semibold">
                    Verification of Employment
                  </h1>
                  <h1>11350 McCormick Rd, EP III, Suite 200,</h1>
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

                  <div className="flex items-center justify-center">
                    <div className="mb-5 md:w-10/12 w-full">
                      <input
                        type="checkbox"
                        id="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                      />
                      <label htmlFor="checkbox" className="text-gray-700 ml-2">
                        I'd like to receive more information about LM Club; I
                        <span className="hidden md:block">understand and</span>{" "}
                        agree to the{" "}
                        <a href="/" className="text-blue-600 font-semibold">
                          privacy policy.
                        </a>
                      </label>
                    </div>
                  </div>

                  <div className="flex items-center justify-center pt-2">
                    <div className="mb-5 md:w-10/12 w-full">
                      <button className="hover:shadow-form rounded bg-blue-600 hover:bg-colorFour transition duration-1000 py-2 ease-in-out w-full text-base font-semibold text-white outline-none">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 md:pt-24 pt-8 mx-1">
              <div className="space-y-2">
                <div className="text-2xl font-semibold text-center">
                  <h1>Book a Demo</h1>
                </div>
                <div className="text-gray-700 text-center">
                  <p>
                    Get your tailored introduction to Sleeknote or tons of popup
                    inspiration for your site. Book a free personal demo.
                  </p>
                </div>

                <div className="pt-2 flex justify-center items-center">
                  <a
                    href="/login"
                    className="bg-blue-500 hover:bg-blue-800 font-semibold outline-none
                      rounded hover:shadow-form transition duration-1000 ease-in-out md:text-base text-sm text-white px-8 md:py-3 py-2 text-center"
                  >
                    Click Here
                  </a>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-2xl font-semibold text-center">
                  <h1>Become a Partner</h1>
                </div>
                <div className="text-gray-700 text-center">
                  <p>
                    Join our Partner Program and earn a 25% recurring
                    commission. Help your clients achieve their on-site goals .
                  </p>
                </div>

                <div className="pt-2 flex justify-center items-center">
                  <a
                    href="/login"
                    className="bg-blue-500 hover:bg-blue-800 font-semibold outline-none
                      rounded hover:shadow-form transition duration-1000 ease-in-out md:text-base text-sm text-white px-8 md:py-3 py-2 text-center"
                  >
                    Click Here
                  </a>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-2xl font-semibold text-center">
                  <h1>Help Center</h1>
                </div>
                <div className="text-gray-700 text-center">
                  <p>
                    Get instant answers to common questions and check our
                    step-by-step product tutorials and help them grow better.
                  </p>
                </div>

                <div className="pt-2 flex justify-center items-center">
                  <a
                    href="/login"
                    className="bg-blue-500 hover:bg-blue-800 font-semibold outline-none
                      rounded hover:shadow-form transition duration-1000 ease-in-out md:text-base text-sm text-white px-8 md:py-3 py-2 text-center"
                  >
                    Click Here
                  </a>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-2xl font-semibold text-center">
                  <h1>Book a Demo</h1>
                </div>
                <div className="text-gray-700 text-center">
                  <p>
                    Get your tailored introduction to Sleeknote or tons of popup
                    inspiration for your site. Book a free personal demo.
                  </p>
                </div>

                <div className="pt-2 flex justify-center items-center">
                  <a
                    href="/login"
                    className="bg-blue-500 hover:bg-blue-800 font-semibold outline-none
                      rounded hover:shadow-form transition duration-1000 ease-in-out md:text-base text-sm text-white px-8 md:py-3 py-2 text-center"
                  >
                    Click Here
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
