const Hero = () => {
  return (
    <div>
      <section className="text-black">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="md:mt-40 mt-28">
            <div className="max-w-[1400px] m-auto grid lg:grid-cols-2 lg:mx-4">
              <div className="flex flex-col gap-4 w-full space-y-2">
                <div className="flex items-center lg:justify-start justify-center ">
                  <div className="h-4 w-1 bg-mainColor"></div>
                  <h1 className="ml-2 text-lg font-bold text-mainColor uppercase">
                    Come join with us
                  </h1>
                </div>
                <div className=" flex items-center lg:justify-start justify-center ">
                  <h1 className="xl:text-6xl text-[48px] font-bold  xl:leading-[72px] lg:leading-[60px] lg:text-start text-center text-headingColor">
                    Moving, improving, and everything
                    <span className="text-colorFour"> in between.</span>
                  </h1>
                </div>

                <div className="flex items-center lg:justify-start justify-center">
                  <h1 className="lg:text-[24px] text-[24px] font-semibold  lg:text-start text-center text-colorFive">
                    Want to know how this happens ?
                  </h1>
                </div>

                <div className="flex items-center lg:justify-start justify-center ">
                  <p className="lg:text-lg text-[16px] text-sideHeading  lg:text-start text-center">
                    LM Club connects you with home service providers to help
                    simplify the process of moving, improving, repairing and
                    everything in between around your home.
                  </p>
                </div>

                <div className="md:flex items-center lg:justify-start justify-center hidden">
                  <a
                    href="/products"
                    className="bg-mainColor font-medium outline-none
                      rounded-full hover:shadow-form transition duration-1000 ease-in-out md:text-base text-sm text-white px-8 md:py-3 py-2 text-center"
                  >
                    Let's get started
                  </a>
                </div>

                <div className="mx-8">
                  <a
                    href="/products"
                    className="bg-mainColor hover:bg-white hover:text-mainColor hover:border-[1px] hover:border-mainColor font-medium outline-none md:hidden block
                      rounded-full hover:shadow-form transition duration-1000 ease-in-out text-base text-white px-8 py-2.5 text-center"
                  >
                    Let's get started
                  </a>
                </div>
              </div>

              <div className="flex justify-center lg:justify-center items-start ">
                <img
                  src="https://cdn.porch.com/bootstrap/0web/home-page/hero-cluster@2x.png"
                  alt=""
                  className="lg:w-10/12 w-11/12 lg:h-120 h-92 lg:mt-[-40px] mt-8"
                />
              </div>
            </div>
          </div>
        </div>
        {/* 
        <div className="bg-[#f8f9fa] mt-8">
          <div className="max-w-[1400px] mx-auto pt-8 pb-8">
            <div className="flex items-center text-center justify-center ">
              <div className="h-4 w-1 bg-gray-600"></div>
              <h1 className="ml-2 text-lg font-bold text-gray-600 uppercase">
                Trusted by hundreds of people
              </h1>
            </div>

            <div className="grid md:grid-cols-4 grid-cols-2 pt-4">
              <div className=" flex flex-col justify-center items-center">
                <div className="my-2">
                  <PiEarThin className="w-8 h-8 text-mainColor" />
                </div>
                <div className="my-2 w-full">
                  <h1 className="text-gray-600 font-semibold w-full text-center">
                    Worldwide Access Availablity
                  </h1>
                </div>
              </div>
              <div className=" flex flex-col justify-center items-center">
                <div className="my-2">
                  <CiClock1 className="w-8 h-8 text-mainColor" />
                </div>
                <div className="my-2 w-full">
                  <h1 className="text-gray-600  font-semibold w-full text-center">
                    Enriching supportive culture
                  </h1>
                </div>
              </div>
              <div className=" flex flex-col justify-center items-center">
                <div className="my-2">
                  <BiCalendarCheck className="w-8 h-8 text-mainColor" />
                </div>
                <div className="my-2 w-full">
                  <h1 className="text-gray-600  font-semibold w-full text-center">
                    Simple Navigation Procedure
                  </h1>
                </div>
              </div>
              <div className=" flex flex-col justify-center items-center">
                <div className="my-2">
                  <BiLaptop className="w-8 h-8 text-mainColor" />
                </div>
                <div className="my-2 w-full">
                  <h1 className="text-gray-600 font-semibold w-full text-center">
                    Complete Online Approach
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default Hero;
