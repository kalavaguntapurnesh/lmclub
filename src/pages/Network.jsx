import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import { TiArrowRight } from "react-icons/ti";
import PhoneEStore from "../assets/PhoneEStore.png";
import LaptopNetwork from "../assets/LaptopNetwork.png";

const Network = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop />

      <div className="lg:pt-36 pt-24">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] ">
              <div className="p-4">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                  <div className="flex flex-col space-y-3 w-full">
                    <div className="flex items-center md:justify-start justify-center ">
                      <div className="h-4 w-1 bg-green-500"></div>
                      <h1 className="ml-2 font-bold text-green-500 lg:uppercase">
                        LM CLUB Network
                      </h1>
                    </div>

                    <div className="lg:text-4xl text-2xl md:text-start text-center font-bold text-headingColor">
                      <h1>Welcome to the LM Club Network Widget!</h1>
                    </div>

                    <div className="text-gray-600 space-y-2 md:text-start text-center">
                      <p>
                        This widget guides your journey and connects you to
                        fellow club members, events, and exclusive resources
                        right from your dashboard. Provides interest-based
                        groups where members can collaborate and discuss
                        specific topics. Join groups that match your interests
                        to share resources, insights, and event updates.
                      </p>
                    </div>

                    <div className="pt-4 flex lg:justify-start justify-center flex-row gap-4">
                      <a
                        href="/contact-us"
                        className="group border-[1px] relative px-6 py-2 text-green-500 text-sm rounded-full border-green-500 font-semibold overflow-hidden flex items-center gap-2 w-[200px] hover:bg-green-500 hover:text-white duration-1000 ease-in-out transition hover:font-medium"
                      >
                        <span className="relative flex-[8] text-center">
                          Learn More
                        </span>
                        <span className="w-7 h-7 flex items-center justify-center rounded-full bg-green-500 flex-[2] transition duration-1000 ease-in-out text-black group-hover:bg-white group-hover:text-green-500">
                          <TiArrowRight className=" text-lg" />
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="lg:hidden flex justify-center items-center lg:pt-0 pt-4">
                    <div>
                      <img
                        src={PhoneEStore}
                        className="rounded w-auto h-[320px]"
                      />
                    </div>
                  </div>
                  <div className="lg:flex hidden justify-center items-center lg:pt-0 pt-4">
                    <div>
                      <img
                        src={LaptopNetwork}
                        className="rounded w-[auto] h-[340px]"
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

export default Network;
