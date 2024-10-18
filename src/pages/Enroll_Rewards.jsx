import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";

const Enroll_Rewards = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <div className="mt-28">
        <div className="relative">
          <div className="w-full">
            <div className="w-full px-4 mx-auto max-w-[1400px] pb-12">
              <div className="max-w-[1400px] m-auto grid lg:grid-cols-2 lg:mx-4 gap-6">
                <div className="flex flex-col gap-4 w-full space-y-2">
                  <div className="flex items-center lg:justify-start justify-center ">
                    <div className="h-4 w-1 bg-mainColor"></div>
                    <h1 className="ml-2 text-lg font-bold text-mainColor uppercase">
                      Enroll Widget
                    </h1>
                  </div>
                  <div className=" flex items-center lg:justify-start justify-center ">
                    <h1 className="xl:text-5xl text-4xl font-bold text-[#3d454d] ">
                      Activate Grow & Enroll
                    </h1>
                  </div>

                  <div className="flex items-center lg:justify-start justify-center ">
                    <p className="lg:text-lg text-[16px] text-gray-600  lg:text-start text-center">
                      Enroll earn rewards for helping our community to expand. T
                      & C apply. And you’re instantly connected to a powerful
                      network group and the rewards are AMAZING!
                    </p>
                  </div>

                  <div className="flex items-center lg:justify-start justify-center">
                    <a
                      href="/rewards"
                      className="bg-mainColor font-semibold outline-none
                      rounded hover:shadow-form transition duration-1000 ease-in-out md:text-base text-sm text-white px-8 md:py-3 py-2 text-center"
                    >
                      View Rewards
                    </a>
                  </div>
                </div>

                <div className="flex justify-center lg:justify-center items-start ">
                  <img
                    src="https://lmclub.club/wp-content/uploads/elementor/thumbs/Picture3-e1725876734355-qtulrs9nmbuowyoblvsof0hhew4tb67qo0bx2rt3gw.png"
                    alt=""
                    height="400"
                    className="rounded md:w-[50%] w-[60%]"
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

export default Enroll_Rewards;
