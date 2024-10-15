const Hero = () => {
  return (
    <div>
      <section className="text-black">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="md:mt-40 mt-32">
            <div className="max-w-[1400px] m-auto grid lg:grid-cols-2 lg:mx-4">
              <div className="flex flex-col gap-4 w-full space-y-2">
                <div className="flex items-center lg:justify-start justify-center ">
                  <div className="h-4 w-1 bg-mainColor"></div>
                  <h1 className="ml-2 text-lg font-bold text-mainColor uppercase">
                    Come join with us
                  </h1>
                </div>
                <div className=" flex items-center lg:justify-start justify-center ">
                  <h1 className="xl:text-6xl text-[48px] font-bold  xl:leading-[72px] lg:leading-[60px] lg:text-start text-center text-[#3d454d]">
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
                  <p className="lg:text-lg text-[16px] text-gray-600  lg:text-start text-center">
                    LM Club connects you with home service providers to help
                    simplify the process of moving, improving, repairing and
                    everything in between around your home.
                  </p>
                </div>

                <div className="flex items-center lg:justify-start justify-center">
                  <a
                    href="/login"
                    className="bg-mainColor font-semibold outline-none
                      rounded-3xl hover:shadow-form transition duration-1000 ease-in-out md:text-base text-sm text-white px-8 md:py-3 py-2 text-center"
                  >
                    What we offer
                  </a>
                  {/* <a
                    href="/login"
                    className="bg-colorFour hover:bg-[#14a800] font-semibold outline-none
                      rounded-3xl hover:shadow-form transition duration-1000 ease-in-out md:text-base text-sm text-white px-8 md:py-3 py-2 text-center ml-2"
                  >
                    Contact With us
                  </a> */}
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
      </section>
    </div>
  );
};

export default Hero;
