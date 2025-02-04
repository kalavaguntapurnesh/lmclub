import { useState, useEffect } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../assets/LM_Logo.webp";
import { FiChevronDown } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa";

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
              : "lg:hidden fixed left-0 top-0 w-[85%] h-[100%] bg-white ease-in-out duration-1000 rounded-b-lg z-10 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
          }
        >
          <a
            href="/"
            className="flex flex-row mt-6 justify-center items-center"
          >
            <img src={logo} className="w-20 h-auto " alt="logo" />
            <h3 className="font-bold ml-2 sm:text-lg  text-trumpTwo">
              Cloud Data Networks
            </h3>
          </a>

          <ul className="p-4 mt-4">
            <li className="px-4 py-3">
              <div
                onClick={() => toggleMobileDropdown("home")}
                className="flex items-center justify-between cursor-pointer text-[#1a1a1a]"
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
                className="flex items-center justify-between cursor-pointer text-[#1a1a1a]"
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
                className="flex items-center justify-between cursor-pointer text-navGray"
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
                className="flex items-center justify-between cursor-pointer text-[#1a1a1a]"
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

            <li className="px-4 py-3">
              <div
                onClick={() => toggleMobileDropdown("Resources")}
                className="flex items-center justify-between cursor-pointer text-[#1a1a1a]"
              >
                Useful Resources
                <FaAngleDown
                  className={`transition-transform ${
                    openDropdownMobile === "Resources"
                      ? "rotate-180 text-mainColor"
                      : ""
                  }`}
                />
              </div>
              <AnimatePresence>
                {openDropdownMobile === "Resources" && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pl-4 mt-6 space-y-2"
                  >
                    <li className="text-navGray">
                      <a
                        href="/careers"
                        className="block text-base text-gray-700"
                      >
                        CDN Careers
                      </a>
                    </li>
                    <li className="text-navGray">
                      <a
                        href="/privacy-policy"
                        className="block text-base text-gray-700"
                      >
                        Terms & Conditions
                      </a>
                    </li>
                    <li className="text-navGray">
                      <a
                        href="https://www.linkedin.com/company/cloud-data-networks"
                        className="block text-base text-gray-700"
                      >
                        LinkedIn Page
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            <li className="px-4 mt-10 flex flex-row gap-4 justify-center items-center">
              <a
                href="/contact-cdn"
                className="border-[1px] relative md:px-20 px-12 py-3 bg-trumpOne text-white  border-trumpOne flex justify-center items-center font-semibold overflow-hidden text-center text-xs"
              >
                <span className="relative z-10">Contact</span>
              </a>
              <a
                href="/about-us"
                className="border-[1px] relative md:px-20 px-12 py-3 bg-trumpTwo text-white  border-trumpTwo flex justify-center items-center font-semibold overflow-hidden transition-all text-center duration-1000 hover:border-trumpTwo hover:bg-trumpTwo text-xs"
              >
                <span className="relative z-10">About</span>
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
      className={`relative flex h-fit gap-2 backdrop-blur-md py-[6px] px-[20px] rounded-full text-gray-50  bg-white/20 ${
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

const Blog = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 ">
      <a
        href="/application-management"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-trumpTwo font-medium">Application Management</h1>
        <p className="text-gray-800 font-light">
          Get to know more about our mision, vision and value.
        </p>
      </a>

      <a
        href="/ecommerce&web"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-trumpTwo font-medium">
          E-Commerce & Web Development
        </h1>
        <p className="text-gray-800 font-light">
          Get to know more about our mision, vision and value.
        </p>
      </a>

      <a
        href="/custom-software"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-trumpTwo font-medium">
          Custom Software Development
        </h1>
        <p className="text-gray-800 font-light">
          Get to know more about our mision, vision and value.
        </p>
      </a>

      <a
        href="/about-us"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-trumpTwo font-medium">Talent Solutions</h1>
        <p className="text-gray-800 font-light">
          Get to know more about our mision, vision and value.
        </p>
      </a>

      <a
        href="/about-us"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-trumpTwo font-medium">Cloud Services</h1>
        <p className="text-gray-800 font-light">
          Get to know more about our mision, vision and value.
        </p>
      </a>
    </div>
  );
};

const FinalOne = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 ">
      <a
        href="/application-management"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-trumpTwo font-medium">Application Management</h1>
        <p className="text-gray-800 font-light">
          Get to know more about our mision, vision and value.
        </p>
      </a>

      <a
        href="/ecommerce&web"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-trumpTwo font-medium">
          E-Commerce & Web Development
        </h1>
        <p className="text-gray-800 font-light">
          Get to know more about our mision, vision and value.
        </p>
      </a>

      <a
        href="/custom-software"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-trumpTwo font-medium">
          Custom Software Development
        </h1>
        <p className="text-gray-800 font-light">
          Get to know more about our mision, vision and value.
        </p>
      </a>

      <a
        href="/about-us"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-trumpTwo font-medium">Talent Solutions</h1>
        <p className="text-gray-800 font-light">
          Get to know more about our mision, vision and value.
        </p>
      </a>

      <a
        href="/about-us"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-trumpTwo font-medium">Cloud Services</h1>
        <p className="text-gray-800 font-light">
          Get to know more about our mision, vision and value.
        </p>
      </a>
    </div>
  );
};

const Homebar = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 ">
      <a
        href="/about-us"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-trumpTwo font-medium">About CDN</h1>
        <p className="text-gray-800 font-light">
          Get to know more about our mision, vision and value.
        </p>
      </a>

      <a
        href="/contact-cdn#global_presence"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-trumpTwo font-medium">Global Presence</h1>
        <p className="text-gray-800 font-light">
          Get to know more about our mision, vision and value.
        </p>
      </a>

      <a
        href="/our-vision"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-trumpTwo font-medium">Our Vision 2028</h1>
        <p className="text-gray-800 font-light">
          Get to know more about our mision, vision and value.
        </p>
      </a>

      <a
        href="/about-us"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-trumpTwo font-medium">COE Ecosystem</h1>
        <p className="text-gray-800 font-light">
          Get to know more about our mision, vision and value.
        </p>
      </a>

      <a
        href="/privacy-policy"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-trumpTwo font-medium">Privacy Policy</h1>
        <p className="text-gray-800 font-light">
          Get to know more about our mision, vision and value.
        </p>
      </a>

      <a
        href="/about-us"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-trumpTwo font-medium">Our Clients</h1>
        <p className="text-gray-800 font-light">
          Explore more about our clients and our achievements.
        </p>
      </a>
    </div>
  );
};

const ContactBar = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 ">
      <a
        href="/about-us"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-trumpTwo font-medium">API Management</h1>
        <p className="text-gray-800 font-light">
          Get to know more about our mision, vision and value.
        </p>
      </a>

      <a
        href="/about-us"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-trumpTwo font-medium">E-Commerce</h1>
        <p className="text-gray-800 font-light">
          Get to know more about our mision, vision and value.
        </p>
      </a>

      <a
        href="/about-us"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-trumpTwo font-medium">Internet of Things</h1>
        <p className="text-gray-800 font-light">
          Get to know more about our mision, vision and value.
        </p>
      </a>

      <a
        href="/about-us"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-trumpTwo font-medium">Business Management</h1>
        <p className="text-gray-800 font-light">
          Get to know more about our mision, vision and value.
        </p>
      </a>

      <a
        href="/about-us"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-trumpTwo font-medium">Oracle Middleware</h1>
        <p className="text-gray-800 font-light">
          Get to know more about our mision, vision and value.
        </p>
      </a>

      <a
        href="/about-us"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-trumpTwo font-medium">SAP Services</h1>
        <p className="text-gray-800 font-light">
          Get to know more about our mision, vision and value.
        </p>
      </a>

      <a
        href="/about-us"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-trumpTwo font-medium">Big Data & BI</h1>
        <p className="text-gray-800 font-light">
          Get to know more about our mision, vision and value.
        </p>
      </a>

      <a
        href="/about-us"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-trumpTwo font-medium">Microsoft Services</h1>
        <p className="text-gray-800 font-light">
          Get to know more about our mision, vision and value.
        </p>
      </a>
    </div>
  );
};

const ProductsBar = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 ">
      <a
        href="/edukare"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-trumpTwo font-medium">EduKare</h1>
        <p className="text-gray-800 font-light">
          Get to know more about our mision, vision and value.
        </p>
      </a>

      <a
        href="/dentalkare"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-trumpTwo font-medium">DentalKare</h1>
        <p className="text-gray-800 font-light">
          Get to know more about our mision, vision and value.
        </p>
      </a>

      <a
        href="/logbucks"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-trumpTwo font-medium">LogBucks</h1>
        <p className="text-gray-800 font-light">
          Get to know more about our mision, vision and value.
        </p>
      </a>

      <a
        href="https://www.rmahousing.com/"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-trumpTwo font-medium">RMA Housing</h1>
        <p className="text-gray-800 font-light">
          Streamling rentals between landlords and tenants.
        </p>
      </a>

      <a
        href="https://www.xn--syndo-7ra.com/"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-trumpTwo font-medium">Syndeo</h1>
        <p className="text-gray-800 font-light">
          Seamless scheduling software for individuals & organization.
        </p>
      </a>
    </div>
  );
};

const TABS = [
  { title: "Company", Component: Homebar },
  {
    title: "Services",
    Component: Blog,
  },
  {
    title: "Technologies",
    Component: ContactBar,
  },
  {
    title: "Products",
    Component: ProductsBar,
  },
  {
    title: "Final",
    Component: FinalOne,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
