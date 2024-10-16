import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";

const Rewards = () => {
  const services = [
    {
      id: 1,
      image: "https://lmclub.club/wp-content/uploads/2024/07/gift-card.png",
      heading: "Claim $500 Amazon Giftcard",
      enroll: "Enroll 25 Members",
      link: "/contact-us",
    },
    {
      id: 2,
      image: "https://lmclub.club/wp-content/uploads/2024/08/samsung-vr.png",
      heading: "Claim Samsung VR",
      enroll: "Enroll 50 Members",
      link: "/contact-us",
    },
    {
      id: 3,
      image: "https://lmclub.club/wp-content/uploads/2024/08/sony-tv.png",
      heading: "Claim Sony TV",
      enroll: "Enroll 290 Members",
      link: "/contact-us",
    },
    {
      id: 4,
      image: "https://lmclub.club/wp-content/uploads/2024/08/vacation.png",
      heading: "Claim Vacation",
      enroll: "Enroll 375 Members",
      link: "/contact-us",
    },
    {
      id: 5,
      image: "https://lmclub.club/wp-content/uploads/2024/08/iphone.png",
      heading: "Claim Android/iPhone",
      enroll: "Enroll 250 Members",
      link: "/contact-us",
    },
    {
      id: 6,
      image: "https://lmclub.club/wp-content/uploads/2024/08/playstation.png",
      heading: "Claim Playstation",
      enroll: "Enroll 100 Members",
      link: "/contact-us",
    },
    {
      id: 7,
      image: "https://lmclub.club/wp-content/uploads/2024/08/xbox.png",
      heading: "Claim x-Box",
      enroll: "Enroll 100 Members",
      link: "/contact-us",
    },
    {
      id: 8,
      image: "https://lmclub.club/wp-content/uploads/2024/08/tundra.png",
      heading: "Claim Tundra",
      enroll: "Enroll 1500 Members",
      link: "/contact-us",
    },
    {
      id: 9,
      image: "https://lmclub.club/wp-content/uploads/2024/08/tesla.png",
      heading: "Claim Tesla",
      enroll: "Enroll 2000 Members",
      link: "/contact-us",
    },
  ];

  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <div className="mt-28">
        <div className="relative">
          <div className="w-full">
            <div className="w-full px-4 mx-auto max-w-[1400px] pb-12">
              <div className=" mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4">
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href=""
                      class="flex md:justify-start justify-center"
                    >
                      <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                        <div class="space-y-4">
                          <div class="flex justify-center items-center">
                            <p className="text-xl text-gray-600 font-medium">
                              {service.enroll}
                            </p>
                          </div>
                          <div class="flex justify-center items-center w-[100%]">
                            <img
                              src={service.image}
                              alt=""
                              class="w-full rounded"
                            />
                          </div>
                          <div class="flex justify-center items-center">
                            <h1 class="text-2xl text-black font-semibold">
                              {service.heading}
                            </h1>
                          </div>

                          <div className="flex justify-center">
                            <a
                              href="/contact-us"
                              class="border-[1px] border-mainColor text-white bg-mainColor transition duration-1000 font-medium text-colorFour py-2 px-8 rounded"
                            >
                              Redeem Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
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

export default Rewards;