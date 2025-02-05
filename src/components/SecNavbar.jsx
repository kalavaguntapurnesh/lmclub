import { useState, useEffect } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../assets/LM_Logo.webp";
import { FiChevronDown } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa";
import phone from "../assets/NavPhone.png";

const SecNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [openDropdownMobile, setOpenDropdownMobile] = useState(null);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight / 4) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (dropdown) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdown);
    }
  };

  const toggleMobileDropdown = (dropdown) => {
    setOpenDropdownMobile((prev) => (prev === dropdown ? null : dropdown));
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ease-in-out select-none  ${
        isScrolled ? "bg-white shadow-md lg:py-5 py-6" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex justify-between items-center px-4">
        <a href="/" className="flex flex-row items-center md:ml-0 ml-1  ">
          <img
            src={logo}
            className={` ${isScrolled ? "w-12 h-12" : "w-12 h-12"}`}
            alt="logo"
          />
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex flex-grow justify-center space-x-8 items-center">
          <Tabs />
        </ul>

        {/* Login Button */}
        <div className="hidden lg:flex space-x-4">
          <a
            href="/login"
            className={`border-[1px] relative lg:px-[28px] md:px-4 py-2 bg-trumpOne  text-sm overflow-hidden transition-all rounded-full ${
              isScrolled
                ? "border-green-500 font-semibold text-green-500"
                : "font-semibold text-white"
            }`}
          >
            <span className="relative z-10">Join Now</span>
          </a>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <AiOutlineClose
                className={`w-5 h-5 ${
                  isScrolled ? "text-trumpTwo" : "text-white"
                }`}
              />
            ) : (
              <RiMenu3Fill
                className={`w-5 h-5 ${
                  isScrolled ? "text-trumpTwo" : "text-white"
                }`}
              />
            )}
          </button>
        </div>

        <div
          className={
            !isMobileMenuOpen
              ? "lg:hidden fixed left-[-100%] h-[100%] ease-in-out duration-1000 "
              : "lg:hidden fixed left-0 top-0 w-[100%] h-[100%] bg-white ease-in-out duration-1000 rounded-b-lg z-10 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
          }
        >
          <a
            href="/"
            className="flex flex-row mt-6 justify-center items-center"
          >
            <img src={logo} className="w-20 h-auto " alt="logo" />
          </a>

          <ul className="p-4 mt-4">
            <li className="px-4 py-3">
              <div
                onClick={() => toggleMobileDropdown("home")}
                className="flex items-center justify-between cursor-pointer text-[#1a1a1a] font-medium"
              >
                About Company
                <FaAngleDown
                  className={`transition-transform ${
                    openDropdownMobile === "home"
                      ? "rotate-180 text-mainColor"
                      : ""
                  }`}
                />
              </div>
              <AnimatePresence>
                {openDropdownMobile === "home" && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pl-4 mt-6 space-y-2"
                  >
                    <li className="text-navGray">
                      <a
                        href="/about-us"
                        className="block text-base text-gray-700"
                      >
                        About CDN
                      </a>
                    </li>
                    <li className="text-navGray">
                      <a
                        href="/our-vision"
                        className="block text-base text-gray-700"
                      >
                        Vision 2028
                      </a>
                    </li>
                    <li className="text-navGray">
                      <a
                        href="/privacy-policy"
                        className="block text-base text-gray-700"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li className="text-navGray">
                      <a
                        href="/contact-cdn#global_presence"
                        className="block text-base text-gray-700"
                      >
                        Global Presence
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            <li className="px-4 py-3">
              <div
                onClick={() => toggleMobileDropdown("services")}
                className="flex items-center justify-between cursor-pointer text-[#1a1a1a] font-medium"
              >
                Our Products
                <FaAngleDown
                  className={`transition-transform ${
                    openDropdownMobile === "services"
                      ? "rotate-180 text-mainColor"
                      : ""
                  }`}
                />
              </div>
              <AnimatePresence>
                {openDropdownMobile === "services" && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pl-4 mt-6 space-y-2"
                  >
                    <li className="text-navGray">
                      <a
                        href="/edukare"
                        className="block text-base text-gray-700"
                      >
                        EduKare
                      </a>
                    </li>
                    <li className="text-navGray">
                      <a
                        href="/dentalkare"
                        className="block text-base text-gray-700"
                      >
                        DentalKare
                      </a>
                    </li>
                    <li className="text-navGray">
                      <a
                        href="/logbucks"
                        className="block text-base text-gray-700"
                      >
                        LogBucks
                      </a>
                    </li>

                    <li className="text-navGray">
                      <a
                        href="https://www.xn--syndo-7ra.com/"
                        className="block text-base text-gray-700"
                      >
                        Syndeo
                      </a>
                    </li>

                    <li className="text-navGray">
                      <a
                        href="https://www.rmahousing.com/"
                        className="block text-base text-gray-700"
                      >
                        RMA Housing
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            <li className="px-4 py-3">
              <div
                onClick={() => toggleMobileDropdown("products")}
                className="flex items-center justify-between cursor-pointer text-[#1a1a1a] font-medium"
              >
                Services
                <FaAngleDown
                  className={`transition-transform ${
                    openDropdownMobile === "products"
                      ? "rotate-180 text-mainColor"
                      : ""
                  }`}
                />
              </div>
              <AnimatePresence>
                {openDropdownMobile === "products" && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pl-4 mt-6 space-y-2"
                  >
                    <li className="text-navGray">
                      <a
                        href="/application-management"
                        className="block text-base text-gray-700"
                      >
                        Application Management
                      </a>
                    </li>
                    <li className="text-navGray">
                      <a
                        href="/custom-software"
                        className="block text-base text-gray-700"
                      >
                        Software Development
                      </a>
                    </li>
                    <li className="text-navGray">
                      <a
                        href="/custom-software"
                        className="block text-base text-gray-700"
                      >
                        Cloud Services
                      </a>
                    </li>
                    <li className="text-navGray">
                      <a
                        href="/ecommerce&web"
                        className="block text-base text-gray-700"
                      >
                        E-com & Web Development
                      </a>
                    </li>
                    <li className="text-navGray">
                      <a
                        href="/custom-software"
                        className="block text-base text-gray-700"
                      >
                        Talent Solutions
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            <li className="px-4 py-3">
              <div
                onClick={() => toggleMobileDropdown("technologies")}
                className="flex items-center justify-between cursor-pointer text-[#1a1a1a] font-medium"
              >
                Technologies
                <FaAngleDown
                  className={`transition-transform ${
                    openDropdownMobile === "technologies"
                      ? "rotate-180 text-mainColor"
                      : ""
                  }`}
                />
              </div>
              <AnimatePresence>
                {openDropdownMobile === "technologies" && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pl-4 mt-6 space-y-2"
                  >
                    <li className="text-navGray">
                      <a
                        href="/custom-software"
                        className="block text-base text-gray-700"
                      >
                        API Management
                      </a>
                    </li>
                    <li className="text-navGray">
                      <a
                        href="/custom-software"
                        className="block text-base text-gray-700"
                      >
                        Internet of Things
                      </a>
                    </li>
                    <li className="text-navGray">
                      <a
                        href="/custom-software"
                        className="block text-base text-gray-700"
                      >
                        Oracle Middleware
                      </a>
                    </li>
                    <li className="text-navGray">
                      <a
                        href="/custom-software"
                        className="block text-base text-gray-700"
                      >
                        Oracle Middleware
                      </a>
                    </li>
                    <li className="text-navGray">
                      <a
                        href="/custom-software"
                        className="block text-base text-gray-700"
                      >
                        Big Data & BI
                      </a>
                    </li>
                    <li className="text-navGray">
                      <a
                        href="/custom-software"
                        className="block text-base text-gray-700"
                      >
                        Business Management
                      </a>
                    </li>
                    <li className="text-navGray">
                      <a
                        href="/custom-software"
                        className="block text-base text-gray-700"
                      >
                        SAP Services
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            <div className="h-[200px] flex justify-center">
              <img src={phone} alt="phone" className="h-full" />
            </div>

            <li className="px-4 mt-10 w-[100%] flex justify-center items-center">
              <a
                href="/login"
                className="border-[1px] relative py-[10px] bg-trumpOne text-white rounded-full border-green-500 text-sm bg-green-500 flex justify-center items-center font-semibold overflow-hidden text-center w-[90%]"
              >
                <span className="relative z-10">Login</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SecNavbar;

const Tabs = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight / 4) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [selected, setSelected] = useState(null);
  const [dir, setDir] = useState(null);

  const handleSetSelected = (val) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }

    setSelected(val);
  };

  return (
    <div
      onMouseLeave={() => handleSetSelected(null)}
      className={`relative flex h-fit gap-2 backdrop-blur-md py-[6px] px-[20px] rounded-full  bg-white/20 ${
        isScrolled ? "text-[#1A1A1A]" : "text-gray-50"
      }`}
    >
      {TABS.map((t) => {
        return (
          <Tab
            key={t.id}
            selected={selected}
            handleSetSelected={handleSetSelected}
            tab={t.id}
          >
            {t.title}
          </Tab>
        );
      })}

      <AnimatePresence>
        {selected && <Content dir={dir} selected={selected} />}
      </AnimatePresence>
    </div>
  );
};

const Tab = ({ children, tab, handleSetSelected, selected }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight / 4) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={`flex items-center gap-1 rounded-full md:text-sm lg:text-base px-3 py-1.5 transition-colors  ${
        isScrolled ? "text-trumpTwo font-medium" : ""
      } ${selected === tab ? "  text-trumpOne" : "text-trumpTwo"}`}
    >
      <span>{children}</span>
      <FiChevronDown
        className={`transition-transform ${
          selected === tab ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};

const Content = ({ selected, dir }) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      className="absolute left-0 top-[calc(100%_+_24px)] w-[100%] bg-white rounded-lg shadow p-4"
    >
      <Bridge />
      <Nub selected={selected} />

      {TABS.map((t) => {
        return (
          <div className="overflow-hidden " key={t.id}>
            {selected === t.id && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <t.Component />
              </motion.div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
};

const Bridge = () => (
  <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

const Nub = ({ selected }) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    moveNub();
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl bg-white"
    />
  );
};

const WidgetsBar = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 ">
      <a
        href="/widgets"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-[#1a1a1a] font-medium">Network</h1>
        <p className="text-gray-800 font-light">
          Activate Network today to connect with like-minded individuals
        </p>
      </a>

      <a
        href="/widgets"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-[#1a1a1a] font-medium">Beehive</h1>
        <p className="text-gray-800 font-light">
          Unlock the BEEHIVE. It will allow us to text / email great deals,
          coupons,
        </p>
      </a>

      <a
        href="/widgets"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-[#1a1a1a] font-medium">Broadcast</h1>
        <p className="text-gray-800 font-light">
          Activate BROADCAST to advertise local businesses on your social media
        </p>
      </a>

      <a
        href="/widgets"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-[#1a1a1a] font-medium">Estore</h1>
        <p className="text-gray-800 font-light">
          Activate E-Store and we will share a percentage of our profits with
          you.
        </p>
      </a>

      <a
        href="/widgets"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-[#1a1a1a] font-medium">Grow</h1>
        <p className="text-gray-800 font-light">
          Enroll earn rewards for helping our community to expand. T & C apply.
        </p>
      </a>
    </div>
  );
};

const ContactBar = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 ">
      <a
        href="/contact-us"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-[#1a1a1a] font-medium">Contact Us</h1>
        <p className="text-gray-800 font-light">
          Reach out to us for assistance
        </p>
      </a>

      <a
        href="/ecommerce&web"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-[#1a1a1a] font-medium">Upcoming Events</h1>
        <p className="text-gray-800 font-light">
          Get to know more about upcoming events.
        </p>
      </a>

      <a
        href="/about-us"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-[#1a1a1a] font-medium">Cart & Checkout</h1>
        <p className="text-gray-800 font-light">
          Learn more about your list of favourite items.
        </p>
      </a>
    </div>
  );
};

const Homebar = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 ">
      <a
        href="/learn-about-us"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-[#1a1a1a] font-medium">About LM Club</h1>
        <p className="text-gray-800 font-light">
          Get to know more about our mision, vision and value.
        </p>
      </a>

      <a
        href="/learn-about-us#about_founder"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-[#1a1a1a] font-medium">Our Leadership</h1>
        <p className="text-gray-800 font-light">
          Know about our founders and their vision of networking.
        </p>
      </a>

      <a
        href="/privacy-policy#terms_and_conditions"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-[#1a1a1a] font-medium">Terms & Conditions</h1>
        <p className="text-gray-800 font-light">
          Reach out to us about terms & conditions.
        </p>
      </a>

      <a
        href="/privacy-policy"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-[#1a1a1a] font-medium">Privacy Policy</h1>
        <p className="text-gray-800 font-light">
          Get to know more about privacy policy.
        </p>
      </a>
    </div>
  );
};

const Membership = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 ">
      <a
        href="/pricing"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-[#1a1a1a] font-medium">Bronze</h1>
        <p className="text-gray-800 font-light">
          Get to know more about our mision, vision and value.
        </p>
      </a>

      <a
        href="/pricing"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-[#1a1a1a] font-medium">Silver</h1>
        <p className="text-gray-800 font-light">
          Get to know more about our mision, vision and value.
        </p>
      </a>

      <a
        href="/pricing"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-[#1a1a1a] font-medium">Gold</h1>
        <p className="text-gray-800 font-light">
          Get to know more about our mision, vision and value.
        </p>
      </a>

      <a
        href="/pricing"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-[#1a1a1a] font-medium">Platinum</h1>
        <p className="text-gray-800 font-light">
          Get to know more about our mision, vision and value.
        </p>
      </a>
    </div>
  );
};

const TABS = [
  { title: "Home", Component: Homebar },
  {
    title: "Our Widgets",
    Component: WidgetsBar,
  },
  {
    title: "Membership Plans",
    Component: Membership,
  },
  {
    title: "Contact Us",
    Component: ContactBar,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
