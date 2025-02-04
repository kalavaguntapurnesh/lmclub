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

const Login = () => {
  // useEffect(() => {
  //   ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  // }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  // const [icon, setIcon] = useState(eyeOff);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(showLoading());
    axios
      .post(
        // "http://localhost:8080/api/v1/login",
        "https://backend-syndeo.onrender.com/api/v1/login",
        {
          email,
          password,
        }
      )
      .then((response) => {
        window.location.reload();
        // dispatch(hideLoading());
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          console.log(response.data.token);
          console.log("Login Success & now moving to dashboard");
          // Swal.fire({
          //   title: "Login Success",
          //   icon: "success",
          // });
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        // dispatch(hideLoading());
        // Swal.fire({
        //   icon: "error",
        //   title: "Oops...",
        //   text: "Check your username and password!!!",
        // });
      });
  };

  return (
    <div>
      <Navbar />
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
                            className="w-full text-white bg-mainColor text-base hover:bg-colorFour transition ease-in-out duration-1000 focus:outline-none font-semibold rounded px-5 py-2.5 text-center cursor-pointer"
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

export default Login;
