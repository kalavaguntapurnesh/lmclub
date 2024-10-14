import React, { useState, useEffect } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/LM_Logo.jpeg";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Dropdown state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu state
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
              isScrolled ? 'w-10 h-10 rounded-full' : 'w-10 h-10 rounded-full'
            }`}
          >
            LM {/* Replace with your actual logo or an image */}
          </div>

          {/* Company Name */}
          <span
            className={`text-2xl font-bold ml-1 transition-all duration-300 ease-in-out ${
              isScrolled ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'
            }`}
          >
            Club.
          </span>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex flex-grow justify-center space-x-8 items-center">
          <li>
            <a href="/" className="text-gray-800 hover:text-blue-600">
              Home
            </a>
          </li>

          {/* About with Dropdown */}
          <li className="relative">
            <button
              onClick={() => toggleDropdown("about")}
              className="text-gray-800 hover:text-blue-600 flex items-center"
            >
              About Us
              <svg
                className="w-5 h-5 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            {openDropdown === "about" && (
              <ul className="absolute mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#about-one" className="block text-gray-800">
                    About One
                  </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#about-two" className="block text-gray-800">
                    About Two
                  </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#about-three" className="block text-gray-800">
                    About Three
                  </a>
                </li>
              </ul>
            )}
          </li>

          {/* Services with Dropdown */}
          <li className="relative">
            <button
              onClick={() => toggleDropdown("services")}
              className="text-gray-800 hover:text-blue-600 flex items-center"
            >
              Services
              <svg
                className="w-5 h-5 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            {openDropdown === "services" && (
              <ul className="absolute mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#service-one" className="block text-gray-800">
                    Service One
                  </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#service-two" className="block text-gray-800">
                    Service Two
                  </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#service-three" className="block text-gray-800">
                    Service Three
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li className="relative">
            <button
              onClick={() => toggleDropdown("privacy")}
              className={`flex items-center ${
                isScrolled ? "text-black" : "text-black"
              }`}
            >
              Privacy
              <svg
                className="w-5 h-5 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            {openDropdown === "privacy" && (
              <ul className="absolute mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="/privacy-policy" className="block text-gray-800">
                    Privacy Policy
                  </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="/consumer-privacy" className="block text-gray-800">
                    Consumer Privacy
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li>
            <a href="/contact-us" className="text-gray-800 hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>

        {/* Login Button */}
        <div className="hidden md:flex space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
            Log In
          </button>
          <button className="bg-gray-100 text-blue-600 px-4 py-2 rounded hover:bg-gray-200 transition duration-300">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <AiOutlineClose className="w-8 h-8 text-gray-800" />
            ) : (
              <RiMenu3Fill className="w-8 h-8 text-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-0 left-0 w-full bg-white h-screen flex flex-col items-center justify-center transition-transform transform ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <ul className="flex flex-col space-y-6 items-center text-lg">
            <li>
              <a href="#home" className="text-gray-800 hover:text-blue-600">
                Home
              </a>
            </li>

            {/* About with Dropdown in Mobile */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown("about")}
                className="text-gray-800 hover:text-blue-600 flex items-center"
              >
                About
                <svg
                  className="w-5 h-5 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              {openDropdown === "about" && (
                <ul className="mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#about-one" className="block text-gray-800">
                      About One
                    </a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#about-two" className="block text-gray-800">
                      About Two
                    </a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#about-three" className="block text-gray-800">
                      About Three
                    </a>
                  </li>
                </ul>
              )}
            </li>

            {/* Services with Dropdown in Mobile */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown("services")}
                className="text-gray-800 hover:text-blue-600 flex items-center"
              >
                Services
                <svg
                  className="w-5 h-5 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              {openDropdown === "services" && (
                <ul className="mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#service-one" className="block text-gray-800">
                      Service One
                    </a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#service-two" className="block text-gray-800">
                      Service Two
                    </a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#service-three" className="block text-gray-800">
                      Service Three
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li className="relative">
              <button
                onClick={() => toggleDropdown("privacy")}
                className={`flex items-center ${
                  isScrolled ? "text-black" : "text-black"
                }`}
              >
                Privacy
                <svg
                  className="w-5 h-5 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              {openDropdown === "privacy" && (
                <ul className="absolute mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="/privacy-policy" className="block text-gray-800">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="/consumer-privacy" className="block text-gray-800">
                      Consumer Privacy
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <a href="#contact" className="text-gray-800 hover:text-blue-600">
                Contact
              </a>
            </li>

            <li>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
