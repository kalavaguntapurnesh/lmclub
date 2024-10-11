import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // track which dropdown is open
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
        isScrolled ? "bg-white shadow-lg py-4" : "bg-[#061421] py-4"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a
            href="/"
            className={` ${isScrolled ? "text-black" : "text-white"}`}
          >
            LM Club.
          </a>
        </div>

        {/* Nav Links */}
        <ul className="flex space-x-8 items-center">
          <li>
            <a
              href="/"
              className={` ${isScrolled ? "text-black" : "text-white"}`}
            >
              Home
            </a>
          </li>

          {/* About with Dropdown */}
          <li className="relative">
            <button
              onClick={() => toggleDropdown("about")}
              className={`flex items-center ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              Products
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
                    Products One
                  </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#about-two" className="block text-gray-800">
                    Products Two
                  </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#about-three" className="block text-gray-800">
                    Products Three
                  </a>
                </li>
              </ul>
            )}
          </li>

          {/* Services with Dropdown */}
          <li className="relative">
            <button
              onClick={() => toggleDropdown("services")}
              className={`flex items-center ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              Subscription
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
                    Subsc One
                  </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#service-two" className="block text-gray-800">
                    Subsc Two
                  </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#service-three" className="block text-gray-800">
                    Subsc Three
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li>
            <a
              href="#contact"
              className={` ${isScrolled ? "text-black" : "text-white"}`}
            >
              Privacy
            </a>
          </li>

          <li>
            <a
              href="/contact-us"
              className={` ${isScrolled ? "text-black" : "text-white"}`}
            >
              Contact
            </a>
          </li>

          {/* Login Button */}
          <li>
            <button
              onClick={() => {
                navigate("/login");
              }}
              className={`px-4 py-2 rounded text-sm ${
                isScrolled
                  ? "bg-[#061421] text-white"
                  : "bg-white text-[#061421]"
              }`}
            >
              Login
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
