import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Logo from "../assets/LM_Logo.jpeg";
import ScrollToTop from "../components/ScrollToTop";

const LogoMeaning = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop />

      <div className="mt-28">
        <div className="relative">
          <div className="w-full">
            <div className="w-full px-4 mx-auto max-w-[1400px] pb-12">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-20">
                <div className="flex justify-center items-center">
                  <div className="w-full flex md:justify-start justify-center">
                    <img
                      src={Logo}
                      alt=""
                      height="400"
                      className="rounded md:w-[70%] w-[60%]"
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-6 w-full md:justify-center">
                  <div className="flex items-center md:justify-start justify-center ">
                    <div className="h-4 w-1 bg-mainColor"></div>
                    <h1 className="ml-2 text-lg font-bold text-mainColor uppercase">
                      About the Logo
                    </h1>
                  </div>

                  <div className="md:text-5xl text-4xl md:text-start text-center md:font-semibold font-bold">
                    <h1>
                      Laoe Maom (LAOE MAOM): Least Amount of Effort, Most Amount
                      of Money
                    </h1>
                  </div>

                  <div className="text-lg text-[#2b2a35] md:text-start text-center">
                    <p>
                      Laoe Maom embodies progress and adaptability, responding
                      dynamically to the evolving relationships and interests in
                      our global landscape. We are a collective of individuals
                      and businesses worldwide, committed to mutual support and
                      shared success. By joining forces, we breathe life into
                      businesses and nurture them to thrive. Let’s achieve
                      greatness together.
                    </p>
                  </div>

                  <div className="pt-6 flex md:justify-start justify-center">
                    <a
                      href="/learn-about-us"
                      className="bg-mainColor font-semibold outline-none
                      rounded hover:shadow-form transition duration-1000 ease-in-out md:text-base text-sm text-white px-8 md:py-3 py-3 text-center"
                    >
                      Learn More
                    </a>
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

export default LogoMeaning;
