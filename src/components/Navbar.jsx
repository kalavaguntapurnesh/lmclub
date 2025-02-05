import React, { useState, useEffect } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/LM_Logo.jpeg";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdComputer, MdOutlinePrivacyTip } from "react-icons/md";
import {
  FaBuildingColumns,
  FaComputerMouse,
  FaUsers,
  FaXTwitter,
} from "react-icons/fa6";
import { FaGlobeAmericas, FaInstagram, FaMicrophoneAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import {
  FiArrowRight,
  FiBarChart2,
  FiChevronDown,
  FiHome,
  FiPieChart,
} from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import free from "../assets/free.png";
import premium from "../assets/money.png";
import { SiAdguard, SiSecurityscorecard } from "react-icons/si";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdownMobile, setOpenDropdownMobile] = useState(null);
  const navigate = useNavigate();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle dropdown and close others
  const toggleDropdown = (dropdown) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null); // close if the same dropdown is clicked
    } else {
      setOpenDropdown(dropdown); // open the clicked dropdown
    }
  };

  const toggleMobileDropdown = (dropdown) => {
    setOpenDropdownMobile((prev) => (prev === dropdown ? null : dropdown)); // Toggle the dropdown
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex justify-between items-center px-4">
        {/* <div className="flex items-center">
          <div
            className={`h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold transition-all duration-300 ease-in-out ${
              isScrolled ? "w-10 h-10 rounded-full" : "w-10 h-10 rounded-full"
            }`}
          >
            LM
          </div>

          <span
            className={`text-2xl font-bold ml-1 transition-all duration-300 ease-in-out ${
              isScrolled ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
            }`}
          >
            Club.
          </span>
        </div> */}

        <a href="/" className="flex items-center">
          <img src={Logo} alt="" className="w-12 h-12" />
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex flex-grow justify-center space-x-8 items-center">
          <Tabs />
        </ul>

        {/* Login Button */}
        <div className="hidden lg:flex space-x-4">
          <a
            href="/login"
            className={`border-[1px] border-green-500 font-semibold text-green-500 relative lg:px-[28px] md:px-4 py-2 bg-trumpOne  text-sm overflow-hidden transition-all rounded-full ${
              isScrolled
                ? "border-green-500 font-semibold text-green-500"
                : "font-semibold text-green-500"
            }`}
          >
            <span className="relative z-10">Join Now</span>
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <AiOutlineClose className="w-6 h-6 text-black" />
            ) : (
              <RiMenu3Fill className="w-6 h-6 text-black" />
            )}
          </button>
        </div>

        <div
          className={
            !isMobileMenuOpen
              ? "md:hidden fixed left-[-100%] h-[75%] ease-in-out duration-1000 "
              : "md:hidden fixed left-0 top-0 w-[70%] border-r h-[100%] bg-white ease-in-out duration-1000 rounded-b-lg z-10 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
          }
        >
          <a href="/">
            <h1 className="w-full text-2xl text-mainColor font-bold m-4 cursor-pointer">
              LM <span className="text-black">Club.</span>
            </h1>
          </a>
          <ul className="p-4">
            <li className="p-4 border-b border-gray-600">
              <div
                onClick={() => toggleMobileDropdown("home")}
                className="flex items-center justify-between cursor-pointer"
              >
                Company
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
                    <li className="text-gray-700 ">
                      <a href="/learn-about-us" className="text-sm">
                        About Us
                      </a>
                    </li>
                    <li className="text-gray-700">
                      <a
                        href="/learn-about-us#logo_meaning"
                        className="text-sm"
                      >
                        Logo Meaning
                      </a>
                    </li>
                    <li className="text-gray-700">
                      <a
                        href="/learn-about-us#about_founder"
                        className="text-sm"
                      >
                        Leadership
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
            <li className="p-4 border-b border-gray-600">
              <div
                onClick={() => toggleMobileDropdown("products")}
                className="flex items-center justify-between cursor-pointer"
              >
                Products
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
                    <li className="text-gray-700">
                      <a href="/" className="text-sm">
                        LM Beehive
                      </a>
                    </li>
                    <li className="text-gray-700">
                      <a href="/" className="text-sm">
                        LM Broadcast
                      </a>
                    </li>
                    <li className="text-gray-700">
                      <a href="/enroll-rewards" className="text-sm">
                        Enroll Rewards
                      </a>
                    </li>
                    <li className="text-gray-700">
                      <a href="/" className="text-sm">
                        Ecommerce Platform
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
            <li className="p-4 border-b border-gray-600">
              <div
                onClick={() => toggleMobileDropdown("subscription")}
                className="flex items-center justify-between cursor-pointer"
              >
                Subscription
                <FaAngleDown
                  className={`transition-transform ${
                    openDropdownMobile === "subscription"
                      ? "rotate-180 text-mainColor"
                      : ""
                  }`}
                />
              </div>
              <AnimatePresence>
                {openDropdownMobile === "subscription" && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pl-4 mt-6 space-y-2"
                  >
                    <li className="text-gray-700">
                      <a href="/pricing#pricing_platinum" className="text-sm">
                        Platinum
                      </a>
                    </li>
                    <li className="text-gray-700">
                      <a href="/pricing#pricing_gold" className="text-sm">
                        Gold
                      </a>
                    </li>
                    <li className="text-gray-700">
                      <a href="/pricing#pricing_silver" className="text-sm">
                        Silver
                      </a>
                    </li>
                    <li className="text-gray-700">
                      <a href="/pricing#pricing_bronze" className="text-sm">
                        Bronze
                      </a>
                    </li>
                    <li className="text-gray-700">
                      <a href="/pricing" className="text-sm">
                        Free Tier
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            <li className="p-4 border-b border-gray-600">
              <div
                onClick={() => toggleMobileDropdown("privacy")}
                className="flex items-center justify-between cursor-pointer"
              >
                Privacy
                <FaAngleDown
                  className={`transition-transform ${
                    openDropdownMobile === "privacy"
                      ? "rotate-180 text-mainColor"
                      : ""
                  }`}
                />
              </div>
              <AnimatePresence>
                {openDropdownMobile === "privacy" && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pl-4 mt-6 space-y-2"
                  >
                    <li className="text-gray-700">
                      <a href="/privacy-policy" className="text-sm">
                        Privacy Policy
                      </a>
                    </li>
                    <li className="text-gray-700">
                      <a href="/consumer-privacy" className="text-sm">
                        Consumer Policy
                      </a>
                    </li>
                    <li className="text-gray-700">
                      <a href="/privacy-report" className="text-sm">
                        Privacy Report
                      </a>
                    </li>
                    <li className="text-gray-700">
                      <a href="/privacy-statement" className="text-sm">
                        Privacy Statement
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
            <li className="p-4 border-b border-gray-600">
              <div
                onClick={() => toggleMobileDropdown("contact")}
                className="flex items-center justify-between cursor-pointer"
              >
                Contact Us
                <FaAngleDown
                  className={`transition-transform ${
                    openDropdownMobile === "contact"
                      ? "rotate-180 text-mainColor"
                      : ""
                  }`}
                />
              </div>
              <AnimatePresence>
                {openDropdownMobile === "contact" && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pl-4 mt-6 space-y-2"
                  >
                    <li className="text-gray-700">
                      <a href="/contact-us" className="text-sm">
                        Head Quarters
                      </a>
                    </li>
                    <li className="text-gray-700">
                      <a href="/contact-us" className="text-sm">
                        Branch Offices
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
            <li className="p-4 border-b border-gray-600">
              <a
                href="/login"
                className="flex items-center justify-between cursor-pointer"
              >
                Login
              </a>
            </li>
          </ul>

          <div className="px-4">
            <h1 className="p-4 text-xl font-semibold">Follow us on</h1>
            <div className="p-4">
              <div className="grid grid-cols-4">
                <a href="https://www.linkedin.com/company/laoe-maom/">
                  <FaLinkedinIn className="w-6 h-6 text-black duration-1000 hover:text-mainColor ease-in-out" />
                </a>
                <a href="">
                  <FaXTwitter className="w-6 h-6 text-black duration-1000 hover:text-mainColor ease-in-out" />
                </a>
                <a href="">
                  {" "}
                  <FaInstagram className="w-6 h-6 text-black duration-1000 hover:text-mainColor ease-in-out" />
                </a>
                <a href="">
                  {" "}
                  <FaFacebookF className="w-6 h-6 text-black duration-1000 hover:text-mainColor ease-in-out" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

const Tabs = () => {
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
      className="relative flex h-fit gap-2"
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
  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={`flex items-center gap-1 rounded-full md:text-sm lg:text-base px-3 py-1.5 transition-colors ${
        selected === tab ? " bg-mainColor text-neutral-100" : "text-gray-700"
      }`}
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
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl bg-mainColor"
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
        href="/terms-and-conditions"
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
        href="/about-us"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-[#1a1a1a] font-medium">Bronze</h1>
        <p className="text-gray-800 font-light">
          Get to know more about our mision, vision and value.
        </p>
      </a>

      <a
        href="/about-us"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-[#1a1a1a] font-medium">Silver</h1>
        <p className="text-gray-800 font-light">
          Get to know more about our mision, vision and value.
        </p>
      </a>

      <a
        href="/about-us"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <h1 className="text-[#1a1a1a] font-medium">Gold</h1>
        <p className="text-gray-800 font-light">
          Get to know more about our mision, vision and value.
        </p>
      </a>

      <a
        href="/about-us"
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
