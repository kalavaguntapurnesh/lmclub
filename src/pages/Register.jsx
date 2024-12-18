import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verified, setVerified] = useState(false);

  const handleCaptcha = (value) => {
    console.log("Captcha value:", value);
    setVerified(true); // This will be true once reCAPTCHA is successfully completed
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (verified) {
      // Proceed with form submission
      console.log("Form submitted!");
    } else {
      alert("Please complete the CAPTCHA!");
    }
  };

  return (
    <div>
      <Navbar />
      <div>
        <section className="text-black md:py-0 py-8">
          <div className="max-w-[1400px] mx-auto">
            <div className="mt-28">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4 py-8">
                <div className="flex flex-col justify-center px-6 ">
                  <div className="flex justify-center items-center">
                    <div className="w-full bg-white rounded-lg shadow md:mt-0 xl:p-0 max-w-md">
                      <div className="p-6 space-y-4 sm:p-8">
                        <h1 className="text-2xl text-center font-bold tracking-tight text-colorThree md:text-3xl ">
                          Create your account. No credit card needed.
                        </h1>
                        <div className="text-center text-gray-600">
                          <p>
                            Send your first emails in a few minutes. Already
                            have an account?{" "}
                            <a
                              href="/login"
                              className="text-gray-800 underline"
                            >
                              Login
                            </a>
                          </p>
                        </div>
                        <form
                          className="space-y-4 md:space-y-6"
                          // onSubmit={handleSubmit}
                        >
                          <div>
                            <label
                              htmlFor="email"
                              className="block mb-2 text-sm font-bold text-colorThree "
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              id="email"
                              className=" border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                              placeholder="name@domain.com"
                              required="true"
                              onChange={(e) => setEmail(e.target.value)}
                            ></input>
                          </div>
                          <div>
                            <label
                              htmlFor="password"
                              className="block mb-2 text-sm font-bold text-colorThree "
                            >
                              Password
                            </label>
                            <div className="flex flex-row">
                              <input
                                // type={type}
                                name="password"
                                value={password}
                                id="password"
                                placeholder="••••••••"
                                className=" border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                required="true"
                                onChange={(e) => setPassword(e.target.value)}
                              ></input>
                              {/* <span
                              onClick={handleToggle}
                              className="cursor-pointer flex justify-center items-center"
                            >
                              <Icon
                                className="absolute mr-10 text-black"
                                icon={icon}
                                size={20}
                              ></Icon>
                            </span> */}
                            </div>
                          </div>
                          <div className="w-[100%] flex justify-center items-center">
                            <ReCAPTCHA
                              sitekey="6LchMmUqAAAAANKg1dNzYDXJnCMf-L6TjRsUVAfG"
                              onChange={handleCaptcha}
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-start">
                              <div className="flex items-center h-5">
                                <input
                                  id="remember"
                                  aria-describedby="remember"
                                  type="checkbox"
                                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                                  required=""
                                ></input>
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="remember"
                                  className="text-black  "
                                >
                                  Keep me signed in
                                </label>
                              </div>
                            </div>
                            <a
                              href="/forgotPassword"
                              className="text-sm hover:underline"
                            >
                              Forgot password?
                            </a>
                          </div>
                          <button
                            type="submit"
                            className="w-full text-white bg-mainColor text-base transition ease-in-out duration-1000 focus:outline-none font-medium rounded px-5 py-2.5 text-center cursor-pointer"
                          >
                            Create an account
                          </button>
                          <div className="relative flex items-center">
                            <div className="flex-grow border-t border-gray-400"></div>
                            <span className="flex-shrink mx-4 text-black text-sm">
                              or
                            </span>
                            <div className="flex-grow border-t border-gray-400"></div>
                          </div>

                          <button className="w-full flex text-black font-medium items-center justify-center gap-x-3 py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                            <img
                              src="https://secure.meetupstatic.com/next/images/login/google.svg?w=48"
                              alt=""
                              className="w-5 h-5"
                            />
                            Sign in with Google
                          </button>

                          <button className="w-full flex text-black font-medium items-center justify-center gap-x-3 py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                            <img
                              src="https://secure.meetupstatic.com/next/images/login/apple.svg?w=48"
                              alt=""
                              className="w-5 h-5"
                            />
                            Sign in with Apple
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Register;
