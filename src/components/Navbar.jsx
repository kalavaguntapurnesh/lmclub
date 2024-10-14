import React, { useState, useEffect } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/LM_Logo.jpeg";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { IoIosMailOpen } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import {
  FiArrowRight,
  FiBarChart2,
  FiChevronDown,
  FiHome,
  FiPieChart,
} from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Dropdown state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu state
  const [openDropdownMobile, setOpenDropdownMobile] = useState(null); // Dropdown state for mobile menu
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
        {/* Logo */}
        <div className="flex items-center">
          {/* Logo */}
          <div
            className={`h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold transition-all duration-300 ease-in-out ${
              isScrolled ? "w-10 h-10 rounded-full" : "w-10 h-10 rounded-full"
            }`}
          >
            LM {/* Replace with your actual logo or an image */}
          </div>

          {/* Company Name */}
          <span
            className={`text-2xl font-bold ml-1 transition-all duration-300 ease-in-out ${
              isScrolled ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
            }`}
          >
            Club.
          </span>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex flex-grow justify-center space-x-8 items-center">
          <Tabs />
        </ul>

        {/* Login Button */}
        <div className="hidden md:flex space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded font-semibold text-sm hover:bg-blue-700 transition duration-300">
            Log In
          </button>
          <button className="bg-gray-100 text-blue-600 px-4 py-2 rounded text-sm font-semibold hover:bg-gray-200 transition duration-300">
            Sign Up
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <AiOutlineClose className="w-6 h-6 text-gray-800" />
            ) : (
              <RiMenu3Fill className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>

        <div
          className={
            !isMobileMenuOpen
              ? "md:hidden fixed left-[-100%] h-[75%] ease-in-out duration-1000 "
              : "md:hidden fixed left-0 top-0 w-[70%] border-r h-[100%] bg-white dark:bg-[#000300] ease-in-out duration-1000 rounded-b-lg z-10 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
          }
        >
          <h1 className="w-full text-2xl text-colorFour font-bold m-4 cursor-pointer">
            LM Club.
          </h1>
          <ul className="p-4">
            <li className="p-4 border-b border-gray-600">
              <div
                onClick={() => toggleMobileDropdown("home")}
                className="flex items-center justify-between cursor-pointer"
              >
                Home
                <FaAngleDown
                  className={`transition-transform ${
                    openDropdownMobile === "home" ? "rotate-180" : ""
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
                      <a href="/" className="text-sm">
                        Logo Meaning
                      </a>
                    </li>
                    <li className="text-gray-700">
                      <a href="/" className="text-sm">
                        Enterprise
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
                    openDropdownMobile === "products" ? "rotate-180" : ""
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
                      <a href="/" className="text-sm">
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
                    openDropdownMobile === "subscription" ? "rotate-180" : ""
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
                      <a href="/" className="text-sm">
                        Platinum
                      </a>
                    </li>
                    <li className="text-gray-700">
                      <a href="/" className="text-sm">
                        Gold
                      </a>
                    </li>
                    <li className="text-gray-700">
                      <a href="/" className="text-sm">
                        Silver
                      </a>
                    </li>
                    <li className="text-gray-700">
                      <a href="/" className="text-sm">
                        Bronze
                      </a>
                    </li>
                    <li className="text-gray-700">
                      <a href="/" className="text-sm">
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
                    openDropdownMobile === "privacy" ? "rotate-180" : ""
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
                    openDropdownMobile === "contact" ? "rotate-180" : ""
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
                      <a href="/privacy-policy" className="text-sm">
                        Head Quarters
                      </a>
                    </li>
                    <li className="text-gray-700">
                      <a href="/consumer-privacy" className="text-sm">
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
                  <FaLinkedinIn className="w-6 h-6" />
                </a>
                <FaXTwitter className="w-6 h-6" />
                <FaInstagram className="w-6 h-6" />
                <FaFacebookF className="w-6 h-6" />
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
      className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${
        selected === tab ? " bg-neutral-800 text-neutral-100" : "text-black"
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
      className="absolute left-0 top-[calc(100%_+_24px)] w-96 rounded-lg border border-neutral-600 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 p-4"
    >
      <Bridge />
      <Nub selected={selected} />

      {TABS.map((t) => {
        return (
          <div className="overflow-hidden" key={t.id}>
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
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900"
    />
  );
};

const Products = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 divide-x divide-neutral-700">
        <div className="w-1/2">
          <h3 className="mb-2 text-sm font-medium text-white">Premium</h3>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            Platinum
          </a>
          <a href="#" className="block text-sm text-neutral-400">
            Gold
          </a>
          <a href="#" className="block text-sm text-neutral-400 mt-1">
            Silver
          </a>
          <a href="#" className="block text-sm text-neutral-400 mt-1">
            Bronze
          </a>
        </div>
        <div className="w-1/2">
          <h3 className="mb-2 text-sm font-medium text-white">Free</h3>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            Free Tier
          </a>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            Rewards
          </a>
        </div>
      </div>

      <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
        <span>View more</span>
        <FiArrowRight />
      </button>
    </div>
  );
};

const Privacy = () => {
  return (
    <div className="grid grid-cols-2 gap-4 divide-x divide-neutral-700">
      <a
        href="/privacy-policy"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <MdOutlinePrivacyTip className="mb-2 text-xl text-indigo-300" />
        <span className="text-xs">Privacy Policy</span>
      </a>
      <a
        href="/consumer-privacy"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <RiCustomerService2Fill className="mb-2 text-xl text-indigo-300" />
        <span className="text-xs">Consumer Policy</span>
      </a>
    </div>
  );
};

const Homebar = () => {
  return (
    <div className="grid grid-cols-3 gap-4 divide-x divide-neutral-700">
      <a
        href="/learn-about-us"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FiHome className="mb-2 text-xl text-indigo-300" />
        <span className="text-xs">About Us</span>
      </a>
      <a
        href="#"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FiBarChart2 className="mb-2 text-xl text-indigo-300" />
        <span className="text-xs">Logo Meaning</span>
      </a>
      <a
        href="/"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FiPieChart className="mb-2 text-xl text-indigo-300" />
        <span className="text-xs">Enterprise</span>
      </a>
    </div>
  );
};

const Subscription = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-2">
        <a href="#">
          <img
            className="mb-2 h-14 w-full rounded object-cover"
            src="https://lmclub.club/wp-content/uploads/2024/09/Picture2-300x300.png"
            alt="Placeholder image"
          />
          <h4 className="mb-0.5 text-sm font-medium text-white">LM Beehive</h4>
          <p className="text-xs text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
            quidem eos.
          </p>
        </a>
        <a href="#">
          <img
            className="mb-2 h-14 w-full rounded object-cover"
            src="https://lmclub.club/wp-content/uploads/2024/09/Picture1-300x300.png"
            alt="Placeholder image"
          />
          <h4 className="mb-0.5 text-sm font-medium text-white">
            LM Broadcast
          </h4>
          <p className="text-xs text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
            quidem eos.
          </p>
        </a>
        <a href="#">
          <img
            className="mb-2 h-14 w-full rounded object-cover"
            src="https://lmclub.club/wp-content/uploads/2024/09/Picture3-300x300.png"
            alt="Placeholder image"
          />
          <h4 className="mb-0.5 text-sm font-medium text-white">
            Enroll Rewards
          </h4>
          <p className="text-xs text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
            quidem eos.
          </p>
        </a>
        <a href="https://ecommerce-green-theta.vercel.app/">
          <img
            className="mb-2 h-14 w-full rounded object-cover"
            src="https://cdn-icons-png.flaticon.com/512/3445/3445817.png"
            alt="Placeholder image"
          />
          <h4 className="mb-0.5 text-sm font-medium text-white">
            Ecommerce Platform
          </h4>
          <p className="text-xs text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
            quidem eos.
          </p>
        </a>
      </div>
      <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
        <span>View more</span>
        <FiArrowRight />
      </button>
    </div>
  );
};

const ContactBar = () => {
  return (
    <div className="grid grid-cols-1 gap-4 divide-x divide-neutral-700">
      <a
        href="/contact-us"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <IoIosMailOpen className="mb-2 text-xl text-indigo-300" />
        <span className="text-xs">Contact Us</span>
      </a>
    </div>
  );
};

const TABS = [
  { title: "Home", Component: Homebar },
  {
    title: "Products",
    Component: Subscription,
  },
  {
    title: "Subscription",
    Component: Products,
  },

  {
    title: "Privacy",
    Component: Privacy,
  },
  {
    title: "Contact",
    Component: ContactBar,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
