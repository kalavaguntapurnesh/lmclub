// import { Icon } from "react-icons-kit";
// import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { useState } from "react";
// import { eye } from "react-icons-kit/feather/eye";
import axios from "axios";
// import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { showLoading, hideLoading } from "../redux/features/alertSlice";
// import { FaHome } from "react-icons/fa";
// import { FaIndustry } from "react-icons/fa";
// import { FaMicrophone } from "react-icons/fa6";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import apple from "../assets/Apple.svg";
import google from "../assets/Google.svg";
import React, { useEffect } from "react";
import star from "../assets/star.svg";
// import ReactGA from "react-ga4";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";
import success from "../assets/success.png";
import Logo from "../assets/LMDark.webp";
import Error from "../assets/error.png";
import WhatsApp from "../components/WhatsApp";

const OrganisationLogin = () => {
  
    const [bussinessEmail, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [type, setType] = useState("password");
    // const [icon, setIcon] = useState(eyeOff);
    const [verified, setVerified] = useState(false);
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    // const handleToggle = () => {
    //   if (type === "password") {
    //     setIcon(eye);
    //     setType("text");
    //   } else {
    //     setIcon(eyeOff);
    //     setType("password");
    //   }
    // };
    const [userType, setUserType] = useState("organization");
    const handleUserTypeChange = (type) => {
      setUserType(type);
      navigate(type === "consumer" ? "/login" : "/organization-login");
    };
    console.log(userType);
    const [currentImage, setCurrentImage] = useState(0);
  
    const images = [
      {
        src: "https://images.pexels.com/photos/19746092/pexels-photo-19746092/free-photo-of-man-in-black-shirt-sitting-by-laptop-on-desk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        label: "Image One",
        name: "Jonathan Kite",
        role: "Business Manager",
        review:
          "LM Club simplifies the process of networking and using this application really made me win rewards.",
      },
      {
        src: "https://images.pexels.com/photos/8101727/pexels-photo-8101727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        label: "Image Three",
        name: "Hugh Jackman",
        role: "Restaurant Chef",
        review:
          "Thanks to LM Club, connecting with professionals is seamless, and I got rewarded too with Amazon gift cards.",
      },
      {
        src: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?cs=srgb&dl=pexels-hannah-nelson-390257-1065084.jpg&fm=jpg",
        label: "Image Two",
        name: "Kate Dennings",
        role: "Software Architect",
        review:
          "LM Club streamlined my networking experience, and I even got rewarded along the way!",
      },
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }, []);
  
  
    const handleSubmit = async (event) => {
      event.preventDefault();
       const style = document.createElement('style');
        style.innerHTML = `
          .swal-custom-ok-button {
            background-color:rgb(27, 202, 103); /* Custom color */
            color:white;
            border: none;
            padding: 10px 20px;
            font-size: 16px;
            border-radius: 5px;
          }
  
          .swal-custom-ok-button:hover {
            background-color:rgb(18, 91, 25); /* Hover color */
          }
        `;
        document.head.appendChild(style);
  
      try {
        if (verified) {
        // const response = await axios.post("http://localhost:9090/api/bussiness-login", {
          const response = await axios.post("https://lmclub-backend.onrender.com/api/bussiness-login", {
            bussinessEmail,
          password
        });
    
        if (response.status === 200) {
          // Swal.fire({
          //   title: "Login Success",
          //   icon: "success",
          // });
          Swal.fire({
                      html: `
                          <div style="display: flex; flex-direction: column; align-items: center;">
                              
                              <!-- Logo + Title -->
                              <div style="width: 100%; display: flex; align-items: center; justify-content: center; position: relative; margin-bottom: 20px;">
                                  <img src="${Logo}" alt="Logo" 
                                      style="position: absolute; top: 0; left: 0; width: 50px; height: 50px; margin: 10px;" />
                                  
                                  <h4 style="margin: 0; font-size: 30px; font-weight: bold;">
                                      <span style="color: black;">LM</span>
                                      <span style="color: rgb(37, 218, 73);">Club</span>
                                  </h4>
                              </div>
                  
                              <!-- Success Image -->
                              <div style="margin-bottom: 20px;">
                                  <img src="${success}" alt="Success" style="width: 50px; height: 50px; margin: 0 10px;" />
                              </div>
                  
                              <!-- Registration Success Message -->
                              <div style="width: 100%; text-align: center; ;">
                                  <h1 style="margin: 0; font-size: 25px;">Login Successful</h1>
                              </div>
                          </div>
                      `,
                      customClass: {
                          confirmButton: 'swal-custom-ok-button'
                      }
                  });
          navigate("/");
        }
      } else {
        alert("Please complete the CAPTCHA!");
      }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          // Swal.fire({
          //   title: 'Invalid credentials',
          //   icon: 'error',
          //   text: 'Please Try again! or else go with forgot password'
          // });
          Swal.fire({
                    html: `
                        <div style="display: flex; flex-direction: column; align-items: center;">
                            
                            <!-- Logo + Title -->
                            <div style="width: 100%; display: flex; align-items: center; justify-content: center; position: relative; margin-bottom: 20px;">
                                <img src="${Logo}" alt="Logo" 
                                    style="position: absolute; top: 0; left: 0; width: 50px; height: 50px; margin: 10px;" />
                                
                                <h4 style="margin: 0; font-size: 30px; font-weight: bold;">
                                    <span style="color: black;">LM</span>
                                    <span style="color: rgb(37, 218, 73);">Club</span>
                                </h4>
                            </div>
                
                            <!-- Success Image -->
                            <div style="margin-bottom: 20px;">
                                <img src="${Error}" alt="Error" style="width: 50px; height: 50px; margin: 0 10px;" />
                            </div>
                
                            <!-- Registration Success Message -->
                            <div style="width: 100%; text-align: center;;">
                                <h1 style="margin: 0; font-size: 25px;"> Invalid credentials </h1>
                                <p style="margin: 10px 0; font-size: 16px; color: #555;">
                                    Please Try again! or else go with forgot password
                                </p>
                            </div>
                        </div>
                    `,
                    customClass: {
                        confirmButton: 'swal-custom-ok-button'
                    }
                });
        } else {
          // Swal.fire({
          //   icon: "error",
          //   title: "Oops...",
          //   text: "Something went wrong!",
          // });
  
          Swal.fire({
                    html: `
                        <div style="display: flex; flex-direction: column; align-items: center;">
                            
                            <!-- Logo + Title -->
                            <div style="width: 100%; display: flex; align-items: center; justify-content: center; position: relative; margin-bottom: 20px;">
                                <img src="${Logo}" alt="Logo" 
                                    style="position: absolute; top: 0; left: 0; width: 50px; height: 50px; margin: 10px;" />
                                
                                <h4 style="margin: 0; font-size: 30px; font-weight: bold;">
                                    <span style="color: black;">LM</span>
                                    <span style="color: rgb(37, 218, 73);">Club</span>
                                </h4>
                            </div>
                
                            <!-- Success Image -->
                            <div style="margin-bottom: 20px;">
                                <img src="${Error}" alt="Error" style="width: 50px; height: 50px; margin: 0 10px;" />
                            </div>
                
                            <!-- Registration Success Message -->
                            <div style="width: 100%; text-align: center;;">
                                <h1 style="margin: 0; font-size: 25px;"> Error! While Login</h1>
                                <p style="margin: 10px 0; font-size: 16px; color: #555;">
                                    Something went wrong!
                                </p>
                            </div>
                        </div>
                    `,
                    customClass: {
                        confirmButton: 'swal-custom-ok-button'
                    }
                });
  
        }
      }
    };
  
    const handleCaptcha = (value) => {
      console.log("Captcha value:", value);
      setVerified(true); // This will be true once reCAPTCHA is successfully completed
    };
    
  
    return (
      <div>
        <Navbar />
        <WhatsApp/>
        <div className="pt-16">
          <div className="relative ">
            <div className="w-full">
              <div className="w-full mx-auto max-w-[1400px] ">
                <div className="p-4">
                  <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-4 mt-8">
                    <div className="flex justify-center items-start">
                      <div className="w-[100%] bg-white rounded shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] max-w-md">
                        <div className="p-6 space-y-4 md:space-y-4">
                          
                          <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-footerLinks md:text-2xl ">
                            Log in to LM Club
                          </h1>
                           {/* User Type Selection Buttons */}
                           <div className="flex justify-between gap-4 m-2">
                            <button
                              className={`px-4 py-2 rounded-md ${
                                userType === "consumer" ? "bg-green-500 text-white" : "bg-gray-300"
                              }`}
                              onClick={() => handleUserTypeChange("consumer")}
                            >
                              Consumer User
                            </button>
                            <button
                              className={`px-4 py-2 rounded-md ${
                                userType === "organization" ? "bg-green-500 text-white" : "bg-gray-300"
                              }`}
                              onClick={() => handleUserTypeChange("organization")}
                            >
                              Organization User
                            </button>
                          </div>
                          <form
                            className="space-y-4 md:space-y-6"
                            onSubmit={handleSubmit}
                          >
                            <div>
                              <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-bold text-colorThree "
                              >
                                Email
                              </label>
                              <input
                                type="email"
                                name="email"
                                id="email"
                                className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                placeholder="name@domain.com"
                                required="true"
                                onChange={(e) => setEmail(e.target.value)}
                              ></input>
                            </div>
                            <div>
                              <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-bold text-colorThree "
                              >
                                Password
                              </label>
                              <div className="flex flex-row">
                                <input
                                  type={type}
                                  name="password"
                                  value={password}
                                  id="password"
                                  placeholder="••••••••"
                                  className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                  required="true"
                                  onChange={(e) => setPassword(e.target.value)}
                                ></input>
                              </div>
                            </div>
  
                            <div className="w-[100%] flex justify-center items-center">
                              <ReCAPTCHA
                                sitekey="6LchMmUqAAAAANKg1dNzYDXJnCMf-L6TjRsUVAfG"
                                onChange={handleCaptcha}
                              />
                            </div>
  
                            <div className="flex items-center justify-between">
                              <div className="flex items-start">
                                <div className="flex items-center h-5">
                                  <input
                                    id="remember"
                                    aria-describedby="remember"
                                    type="checkbox"
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                    required=""
                                  ></input>
                                </div>
                                <div className="ml-3 text-sm">
                                  <label
                                    htmlFor="remember"
                                    className="text-black  "
                                  >
                                    Keep me signed in
                                  </label>
                                </div>
                              </div>
                              <a
                                href="/forgotPassword"
                                className="text-sm hover:underline"
                              >
                                Forgot password?
                              </a>
                            </div>
                            <button
                              type="submit"
                              className="w-full text-white bg-green-500 text-base transition ease-in-out duration-1000 focus:outline-none font-semibold rounded px-5 py-2.5 text-center cursor-pointer"
                            >
                              Log in
                            </button>
                            <div className="relative flex py-1 items-center">
                              <div className="flex-grow border-t border-gray-400"></div>
                              <span className="flex-shrink mx-4 text-black text-sm">
                                or
                              </span>
                              <div className="flex-grow border-t border-gray-400"></div>
                            </div>
  
                            <button className="w-full flex text-black font-medium items-center justify-center gap-x-3 py-2.5 border rounded hover:bg-gray-50 duration-150 active:bg-gray-100">
                              <img src={google} alt="image" className="w-5 h-5" />
                              Log in with Google
                            </button>
  
                            <button className="w-full flex text-black font-medium items-center justify-center gap-x-3 py-2.5 border rounded hover:bg-gray-50 duration-150 active:bg-gray-100">
                              <img src={apple} alt="image" className="w-5 h-5" />
                              Log in with Apple
                            </button>
  
                            <p className="text-sm text-center font-light text-gray-500  ">
                              Not Registered?{" "}
                              <a
                                href="/register"
                                className="font-medium text-primary-600 hover:underline "
                              >
                                Create Account
                              </a>
                            </p>
                          </form>
  
                        </div>
                      </div>
                    </div>
  
                    <div className="relative h-full w-full">
                      <motion.div
                        key={currentImage}
                        // initial={{ opacity: 0, x: 50 }}
                        // animate={{ opacity: 1, x: 0 }}
                        // exit={{ opacity: 0, x: -50 }}
                        // transition={{ duration: 1 }}
                        className="relative h-full w-full rounded-lg overflow-hidden"
                      >
                        <img
                          src={images[currentImage].src}
                          alt="login"
                          className="w-full md:h-[100%] h-auto object-cover"
                        />
                        <div className="absolute bottom-4 px-4 text-white rounded w-[100%]">
                          <div className="border-navColor backdrop-blur-md p-4 rounded text-gray-50  bg-white/20 w-[100%] ">
                            <h1 className="md:text-xl text-sm font-semibold">
                              “{images[currentImage].review}”
                            </h1>
  
                            <p className="font-semibold md:text-lg text-xs mt-3">
                              {images[currentImage].name}
                            </p>
                            <p className="md:text-sm text-xs">
                              {images[currentImage].role}
                            </p>
                            <div className="mt-2 flex flex-row gap-1">
                              <img
                                src={star}
                                alt="start"
                                className="md:w-4 md:h-4 w-3 h-3"
                              />
                              <img
                                src={star}
                                alt="start"
                                className="md:w-4 md:h-4 w-3 h-3"
                              />
                              <img
                                src={star}
                                alt="start"
                                className="md:w-4 md:h-4 w-3 h-3"
                              />
                              <img
                                src={star}
                                alt="start"
                                className="md:w-4 md:h-4 w-3 h-3"
                              />
                              <img
                                src={star}
                                alt="start"
                                className="md:w-4 md:h-4 w-3 h-3"
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
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

export default OrganisationLogin