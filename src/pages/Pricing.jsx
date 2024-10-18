import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <div className="mt-28">
        <div className="relative">
          <div className="w-full">
            <div className="w-full px-4 mx-auto max-w-[1400px] pb-8">
              <div className="space-y-2">
                <div className="md:text-4xl text-3xl font-bold text-black text-center">
                  <h1>Find your perfect plan</h1>
                </div>

                <div className="text-center">
                  <p className="text-gray-800">
                    No matter which level you choose, you’re instantly connected
                    to a powerful network group and the rewards are AMAZING!
                  </p>
                </div>
              </div>

              <section className="bg-white ">
                <div className="py-8 px-4 lg:py-16 lg:px-6">
                  <div className=" grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
                    <div className="flex flex-col text-center p-4 text-gray-900 bg-white rounded border border-gray-100 shadow">
                      <h3 className="mb-4 text-2xl font-bold text-[#CD7F32]">
                        Bronze
                      </h3>
                      <p className="font-light text-gray-500 sm:text-lg">
                        Best option for personal use & for your next project.
                      </p>
                      <div className="flex justify-center items-baseline my-8">
                        <span className="mr-2 text-5xl font-extrabold">
                          $10
                        </span>
                        <span className="text-gray-500 ">/month</span>
                      </div>

                      <ul role="list" className="mb-8 space-y-4 text-left">
                        <li class="flex items-center space-x-3">
                          <svg
                            class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span>Individual configuration</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <svg
                            class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span>No setup, or hidden fees</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <svg
                            class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span>
                            Team size:{" "}
                            <span className="font-semibold">1 developer</span>
                          </span>
                        </li>
                        <li class="flex items-center space-x-3">
                          <svg
                            class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span>
                            Premium support:{" "}
                            <span class="font-semibold">6 months</span>
                          </span>
                        </li>
                        <li class="flex items-center space-x-3">
                          <svg
                            class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span>
                            Free updates:{" "}
                            <span class="font-semibold">6 months</span>
                          </span>
                        </li>
                      </ul>
                      <a
                        href="/login"
                        class="text-white bg-mainColor font-medium rounded text-sm px-5 py-2.5 text-center "
                      >
                        Get started
                      </a>
                    </div>

                    <div className="flex flex-col text-center p-4 text-gray-900 bg-white rounded border border-gray-100 shadow">
                      <h3 className="mb-4 text-2xl font-bold text-[#C0C0C0]">
                        Silver
                      </h3>
                      <p className="font-light text-gray-500 sm:text-lg">
                        Relevant for multiple users, extended & premium support.
                      </p>
                      <div className="flex justify-center items-baseline my-8">
                        <span className="mr-2 text-5xl font-extrabold">
                          $20
                        </span>
                        <span className="text-gray-500">/month</span>
                      </div>

                      <ul role="list" className="mb-8 space-y-4 text-left">
                        <li className="flex items-center space-x-3">
                          <svg
                            class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span>Individual configuration</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <svg
                            class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span>No setup, or hidden fees</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <svg
                            class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span>
                            Team size:{" "}
                            <span className="font-semibold">10 developers</span>
                          </span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <svg
                            class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span>
                            Premium support:{" "}
                            <span className="font-semibold">24 months</span>
                          </span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <svg
                            class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span>
                            Free updates:{" "}
                            <span className="font-semibold">24 months</span>
                          </span>
                        </li>
                      </ul>
                      <a
                        href="/login"
                        className="text-white bg-mainColor font-medium rounded text-sm px-5 py-2.5 text-center "
                      >
                        Get started
                      </a>
                    </div>

                    <div className="flex flex-col text-center p-4 text-gray-900 bg-white rounded border border-gray-100 shadow">
                      <h3 className="mb-4 text-2xl font-bold text-[#FFD700]">
                        Gold
                      </h3>
                      <p className="font-light text-gray-500 sm:text-lg">
                        Best for large scale uses and extended redistribution
                        rights.
                      </p>
                      <div className="flex justify-center items-baseline my-8">
                        <span className="mr-2 text-5xl font-extrabold">
                          $35
                        </span>
                        <span className="text-gray-500 ">/month</span>
                      </div>

                      <ul role="list" className="mb-8 space-y-4 text-left">
                        <li className="flex items-center space-x-3">
                          <svg
                            class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span>Individual configuration</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <svg
                            class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span>No setup, or hidden fees</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <svg
                            class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span>
                            Team size:{" "}
                            <span className="font-semibold">
                              100+ developers
                            </span>
                          </span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <svg
                            class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span>
                            Premium support:{" "}
                            <span className="font-semibold">36 months</span>
                          </span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <svg
                            class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span>
                            Free updates:{" "}
                            <span className="font-semibold">36 months</span>
                          </span>
                        </li>
                      </ul>
                      <a
                        href="/login"
                        className="text-white bg-mainColor font-medium rounded text-sm px-5 py-2.5 text-center"
                      >
                        Get started
                      </a>
                    </div>

                    <div className="flex flex-col text-center p-4 text-gray-900 bg-white rounded border border-gray-100 shadow">
                      <h3 className="mb-4 text-2xl font-bold text-[#E5E4E2]">
                        Platinum
                      </h3>
                      <p className="font-light text-gray-500 sm:text-lg ">
                        Best for large scale uses and extended redistribution
                        rights.
                      </p>
                      <div className="flex justify-center items-baseline my-8">
                        <span className="mr-2 text-5xl font-extrabold">
                          $40
                        </span>
                        <span className="text-gray-500">/month</span>
                      </div>

                      <ul role="list" className="mb-8 space-y-4 text-left">
                        <li className="flex items-center space-x-3">
                          <svg
                            class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span>Individual configuration</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <svg
                            class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span>No setup, or hidden fees</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <svg
                            class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span>
                            Team size:{" "}
                            <span className="font-semibold">
                              100+ developers
                            </span>
                          </span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <svg
                            class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span>
                            Premium support:{" "}
                            <span className="font-semibold">36 months</span>
                          </span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <svg
                            class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span>
                            Free updates:{" "}
                            <span className="font-semibold">36 months</span>
                          </span>
                        </li>
                      </ul>
                      <a
                        href="/login"
                        className="text-white bg-mainColor font-medium rounded text-sm px-5 py-2.5 text-center"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;
