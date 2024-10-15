import { useEffect, useState } from "react";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import Logo from "../assets/LM_Logo.jpeg";

const Footer = () => {
  return (
    <div className="bg-[#f8f9fa]">
      <div className="relative pt-8">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="flex md:flex-row flex-col">
              <div className="w-full lg:pb-0 pb-8">
                <div className="flex md:justify-start justify-center">
                  <img src={Logo} alt="" className="w-12 h-12" />
                </div>
              </div>
              <div className="w-full">
                <div className="grid lg:grid-cols-10 grid-cols-5 gap-4">
                  <a
                    href="https://www.linkedin.com/company/laoe-maom/"
                    className="flex justify-center items-center"
                  >
                    <FaLinkedin
                      size={25}
                      className="cursor-pointer"
                      color="black"
                    />
                  </a>
                  <a href="/about" className="flex justify-center items-center">
                    <FaXTwitter
                      size={25}
                      className="cursor-pointer"
                      color="black"
                    />
                  </a>
                  <a href="/about" className="flex justify-center items-center">
                    <FaInstagram
                      size={25}
                      className="cursor-pointer"
                      color="black"
                    />
                  </a>
                  <a href="/about" className="flex justify-center items-center">
                    <FaGoogle
                      size={25}
                      className="cursor-pointer"
                      color="black"
                    />
                  </a>
                  <a href="/about" className="flex justify-center items-center">
                    <FaFacebook
                      size={25}
                      className="cursor-pointer"
                      color="black"
                    />
                  </a>{" "}
                  <a href="/about" className="flex justify-center items-center">
                    <FaRedditAlien
                      size={25}
                      className="cursor-pointer"
                      color="black"
                    />
                  </a>
                  <a href="/about" className="flex justify-center items-center">
                    <FaTiktok
                      size={25}
                      className="cursor-pointer"
                      color="black"
                    />
                  </a>
                  <a href="/about" className="flex justify-center items-center">
                    <FaYoutube
                      size={25}
                      className="cursor-pointer"
                      color="black"
                    />
                  </a>
                  <a href="/about" className="flex justify-center items-center">
                    <FaSnapchatGhost
                      size={25}
                      className="cursor-pointer"
                      color="black"
                    />
                  </a>
                  <a href="/about" className="flex justify-center items-center">
                    <FaPinterestP
                      size={25}
                      className="cursor-pointer"
                      color="black"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="pb-8 mb-8 border-b border-gray-600">
              <div className="w-full ">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:grid-cols-6 mt-12">
                  <div className="mb-12 md:mb-0 ">
                    <div className="flex items-center md:justify-start justify-center">
                      <div className="h-4 w-1 bg-mainColor"></div>
                      <h4 className="ml-2 text-sm leading-5 font-bold tracking-wider uppercase flex md:justify-start justify-center items-start mt-1 text-footerLinks">
                        Services
                      </h4>
                    </div>
                    <ul className="pl-0 mt-4 space-y-3 list-none">
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          Customer Success
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          Popular Blogs
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/login"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          Log In to LMClub
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          Appointment Booking
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/privacy"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          Developer Policy
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-12 md:mb-0 ">
                    <div className="flex items-center md:justify-start justify-center">
                      <div className="h-4 w-1 bg-mainColor"></div>
                      <h4 className="ml-2 text-sm leading-5 font-bold tracking-wider uppercase flex md:justify-start justify-center items-start mt-1 text-footerLinks">
                        Connect
                      </h4>
                    </div>
                    <ul className="pl-0 mt-4 space-y-3 list-none">
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/contact"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          Help Center
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          LM Club Careers
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          Become Partner
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/register"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          Sign Up Here
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/about"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          Team & Company
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-12 md:mb-0">
                    <div className="flex items-center md:justify-start justify-center">
                      <div className="h-4 w-1 bg-mainColor"></div>
                      <h4 className="ml-2 text-sm leading-5 font-bold tracking-wider uppercase flex md:justify-start justify-center items-start mt-1 text-footerLinks">
                        Company
                      </h4>
                    </div>
                    <ul className="pl-0 mt-4 space-y-3 list-none">
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/privacy"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          Terms & Conditions
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/privacy"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/about"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          About LM Club
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/contact"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          Contact Us
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/about"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          Why LM Club?
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-12 md:mb-0">
                    <div className="flex items-center md:justify-start justify-center">
                      <div className="h-4 w-1 bg-mainColor"></div>
                      <h4 className="ml-2 text-sm leading-5 font-bold tracking-wider uppercase flex md:justify-start justify-center items-start mt-1 text-footerLinks">
                        product
                      </h4>
                    </div>
                    <ul className="pl-0 mt-4 space-y-3 list-none">
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/contact"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          LM Beehive
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        {" "}
                        <a
                          href="/"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          LM Broadcast
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          Enroll Rewards
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/register"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          Grow Widget
                        </a>
                      </li>

                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/about"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          LM Account
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-12 md:mb-0">
                    <div className="flex items-center md:justify-start justify-center">
                      <div className="h-4 w-1 bg-mainColor"></div>
                      <h4 className="ml-2 text-sm leading-5 font-bold tracking-wider uppercase flex md:justify-start justify-center items-start mt-1 text-footerLinks">
                        subscriptions
                      </h4>
                    </div>
                    <ul className="pl-0 mt-4 space-y-3 list-none">
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/contact"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          Gold Plan
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          Platinum Plan
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          Bronze Plan
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/register"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          Silver Plan
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/about"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          Free Plan
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-12 md:mb-0">
                    <div className="flex items-center md:justify-start justify-center">
                      <div className="h-4 w-1 bg-mainColor"></div>
                      <h4 className="ml-2 text-sm leading-5 font-bold tracking-wider uppercase flex md:justify-start justify-center items-start mt-1 text-footerLinks">
                        Privacy
                      </h4>
                    </div>
                    <ul className="pl-0 mt-4 space-y-3 list-none">
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/contact"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          Consumer Privacy
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          Sign-up Sheet
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/register"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          Education
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/about"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          Recruiting
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 grid-cols-2 lg:grid-cols-6 gap-4 pb-8">
              <div className="text-[14px] leading-6 flex md:justify-start justify-center">
                <h1>Cookie Settings</h1>
              </div>

              <div className="text-[14px] leading-6 flex md:justify-start justify-center">
                <h1>Anti Spam</h1>
              </div>

              <div className="text-[14px] leading-6 flex md:justify-start justify-center">
                <h1>Privacy</h1>
              </div>

              <div className="text-[14px] leading-6 flex md:justify-start justify-center">
                <h1>User Agreement</h1>
              </div>

              <div className="text-[14px] leading-6 flex md:justify-start justify-center">
                <h1>Legal Notice</h1>
              </div>

              <div className="text-[14px] leading-6 flex md:justify-start justify-center">
                <h1>Responsible Disclosure</h1>
              </div>
            </div>

            <div className="text-center text-sm pb-6">
              <p>
                © Cloud Data Networks Private Limited 2024. All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
