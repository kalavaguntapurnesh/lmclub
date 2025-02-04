import { Tabs, Tab } from "../components/Tabs";
import success from "../assets/success.svg";
import { TiArrowRight } from "react-icons/ti";

const AppDesc = () => {
  return (
    // <div>
    //   <div className="relative pt-20 pb-12">
    //     <div className="w-full">
    //       <div className="w-full px-4 mx-auto max-w-[1400px]">
    //         <div className="flex items-center text-center justify-center ">
    //           <div className="h-4 w-1 bg-mainColor"></div>
    //           <h1 className="ml-2 text-lg font-bold text-mainColor uppercase">
    //             Our products
    //           </h1>
    //         </div>
    //         <div className="mx-auto max-w-[1200px] text-center mt-4">
    //           <h1 className="text-4xl font-bold text-headingColor">
    //             Best Products available at LM Club
    //           </h1>
    //         </div>

    //         <div className="mx-auto max-w-[1200px] text-sideHeading text-center mt-4">
    //           <p>
    //             At Laoe Maom, we are dedicated to fostering a vibrant culture
    //             that propels our members and businesses to connect, collaborate,
    //             and create opportunities. Anchored in the principle of TEAM
    //             (Together Everyone Achieves More), we harness the power of human
    //             cooperation to accomplish significant goals incrementally.
    //           </p>
    //         </div>

    //         <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 pt-8 md:px-2 lg:px-1 px-4">
    //           <a
    //             href="/products"
    //             class="flex md:justify-start justify-center hover:shadow-xl duration-1000 ease-in-out transition-all"
    //           >
    //             <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
    //               <div class="space-y-4">
    //                 <div className="flex justify-center items-center w-full">
    //                   <img
    //                     src="
    //                         https://lmclub.club/wp-content/uploads/2024/09/Picture1-300x300.png"
    //                     alt=""
    //                     className="md:h-52 w-[60%]"
    //                   />
    //                 </div>
    //                 <div class="flex justify-center items-center">
    //                   <h1 class="text-3xl font-bold text-center">
    //                     LM Broadcast
    //                   </h1>
    //                 </div>

    //                 <div class="flex justify-center items-center text-gray-600 text-center">
    //                   <p>
    //                     Activate BROADCAST to advertise local businesses on your
    //                     social media and we will pay you a percentage of the
    //                     revenue earned by giving you points to redeem gift
    //                     certificates.
    //                   </p>
    //                 </div>
    //                 {/*
    //                   <div className="flex justify-center">
    //                     <a
    //                       href="/contact-us"
    //                       class="border-[1px] border-mainColor text-mainColor transition duration-1000 font-semibold text-colorFour py-2 px-4 rounded"
    //                     >
    //                       Learn More
    //                     </a>
    //                   </div> */}
    //               </div>
    //             </div>
    //           </a>

    //           <a
    //             href="/products"
    //             class="flex md:justify-start justify-center hover:shadow-xl duration-1000 ease-in-out transition-all"
    //           >
    //             <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
    //               <div class="space-y-4">
    //                 <div className="flex justify-center items-center w-full">
    //                   <img
    //                     src="
    //                         https://lmclub.club/wp-content/uploads/2024/09/Picture2-300x300.png"
    //                     alt=""
    //                     //   className="md:h-52 md:w-[70%] w-[80%]"
    //                     className="md:h-52 w-[60%]"
    //                   />
    //                 </div>
    //                 <div class="flex justify-center items-center">
    //                   <h1 class="text-3xl font-bold text-center">LM Beehive</h1>
    //                 </div>

    //                 <div class="flex justify-center items-center text-gray-600 text-center">
    //                   <p>
    //                     Unlock the BEEHIVE. It will allow us to text / email
    //                     great deals, coupons, information and opportunities from
    //                     local restaurants hotel, retailers, give you points for
    //                     posting and more!.
    //                   </p>
    //                 </div>

    //                 {/* <div className="flex justify-center">
    //                     <a
    //                       href="/contact-us"
    //                       class="border-[1px] border-mainColor text-mainColor transition duration-1000 font-semibold text-colorFour py-2 px-4 rounded"
    //                     >
    //                       Learn More
    //                     </a>
    //                   </div> */}
    //               </div>
    //             </div>
    //           </a>
    //           <a
    //             href="/products"
    //             class="flex md:justify-start justify-center hover:shadow-xl duration-1000 ease-in-out transition-all"
    //           >
    //             <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
    //               <div class="space-y-4">
    //                 <div className="flex justify-center items-center w-full">
    //                   <img
    //                     src="
    //                         https://lmclub.club/wp-content/uploads/2024/09/Picture3-300x300.png"
    //                     alt=""
    //                     className="md:h-52 w-[60%]"
    //                   />
    //                 </div>
    //                 <div class="flex justify-center items-center">
    //                   <h1 class="text-3xl font-bold text-center">
    //                     Enroll Rewards
    //                   </h1>
    //                 </div>

    //                 <div class="flex justify-center items-center text-gray-600 text-center">
    //                   <p>
    //                     Enroll earn rewards for helping our community to expand.
    //                     T & C apply. And you’re instantly connected to a
    //                     powerful network group and the rewards are AMAZING!
    //                   </p>
    //                 </div>

    //                 {/* <div className="flex justify-center">
    //                     <a
    //                       href="/contact-us"
    //                       class="border-[1px] border-mainColor text-mainColor transition duration-1000 font-semibold text-colorFour py-2 px-4 rounded"
    //                     >
    //                       Learn More
    //                     </a>
    //                   </div> */}
    //               </div>
    //             </div>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="bg-white">
    //     <div className="relative pt-12">
    //       <div className="w-full">
    //         <div className="w-full px-4 mx-auto max-w-[1400px]">
    //           <div className="flex items-center text-center justify-center ">
    //             <div className="h-4 w-1 bg-mainColor"></div>
    //             <h1 className="ml-2 text-lg font-bold text-mainColor uppercase">
    //               We respect users credibility
    //             </h1>
    //           </div>
    //           <div className="mx-auto max-w-[1200px] text-center mt-4">
    //             <h1 className="text-4xl font-bold text-headingColor">
    //               The organic platform for better rewards
    //             </h1>
    //           </div>

    //           <div className="lg:block hidden">
    //             <Tabs>
    //               <Tab
    //                 label="Creating Exciting Rewards"
    //                 className="text-sm text-sideHeading"
    //               >
    //                 <div className="py-4">
    //                   <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
    //                     <div className="space-y-6 flex flex-col pl-8">
    //                       <div className=" md:text-start text-center">
    //                         <h1 className="lg:text-4xl text-3xl font-semibold text-black">
    //                           Ready to turn your development{" "}
    //                           <span className="text-mainColor">
    //                             innovation?
    //                           </span>
    //                         </h1>
    //                       </div>
    //                       <div className="mt-4 md:text-start text-center text-gray-700">
    //                         <p>
    //                           Empower your rewards to deliver smarter care with
    //                           a seamless, intuitive app build for efficiency.
    //                         </p>
    //                       </div>

    //                       <div className="flex flex-col space-y-3 text-sideHeading text-lg">
    //                         <div className="flex flex-row items-center">
    //                           <img src={success} alt="" className="w-4 h-4" />
    //                           <p className="ml-4">
    //                             Membership Club Where Businesses and Members
    //                             Connect.
    //                           </p>
    //                         </div>
    //                         <div className="flex flex-row items-center">
    //                           <img src={success} alt="" className="w-4 h-4" />
    //                           <p className="ml-4">
    //                             Establish a global presence that encourages
    //                             networking and mutual benefits.
    //                           </p>
    //                         </div>
    //                         <div className="flex flex-row items-center">
    //                           <img src={success} alt="" className="w-4 h-4" />
    //                           <p className="ml-4">
    //                             Develop a nurturing environment that fosters
    //                             enduring friendships and a robust social
    //                             network.
    //                           </p>
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="w-[100%] flex justify-center items-center">
    //                       <img
    //                         src="https://images.ctfassets.net/p24lh3qexxeo/2iOltnu3emEY83ey9618YO/a7e53877ad5929b2a669666429011335/image.png?w=1080&h=952&q=80&fm=webp"
    //                         alt=""
    //                         className="h-80 rounded w-[80%]"
    //                       />
    //                     </div>
    //                   </div>
    //                 </div>
    //               </Tab>
    //               <Tab
    //                 label="Experience Powerful Networking"
    //                 className="text-sm text-sideHeading"
    //               >
    //                 <div className="py-4">
    //                   <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
    //                     <div className="space-y-6 flex flex-col pl-8">
    //                       <div className=" md:text-start text-center">
    //                         <h1 className="lg:text-4xl text-3xl font-semibold text-black">
    //                           Empowering Connections, Cultivating
    //                           <span className="text-mainColor"> Success</span>
    //                         </h1>
    //                       </div>
    //                       <div className="mt-4 md:text-start text-center text-gray-700">
    //                         <p>
    //                           Try and see the magic of the LM Club in action.
    //                         </p>
    //                       </div>

    //                       <div className="flex flex-col space-y-3 text-sideHeading text-lg">
    //                         <div className="flex flex-row items-center">
    //                           <img src={success} alt="" className="w-4 h-4" />
    //                           <p className="ml-4">
    //                             Membership Club Where Businesses and Members
    //                             Connect.
    //                           </p>
    //                         </div>
    //                         <div className="flex flex-row items-center">
    //                           <img src={success} alt="" className="w-4 h-4" />
    //                           <p className="ml-4">
    //                             Establish a global presence that encourages
    //                             networking and mutual benefits.
    //                           </p>
    //                         </div>
    //                         <div className="flex flex-row items-center">
    //                           <img src={success} alt="" className="w-4 h-4" />
    //                           <p className="ml-4">
    //                             Develop a nurturing environment that fosters
    //                             enduring friendships and a robust social
    //                             network.
    //                           </p>
    //                         </div>
    //                       </div>
    //                     </div>

    //                     <div className="w-[100%] flex justify-center items-center">
    //                       <img
    //                         src="https://images.ctfassets.net/p24lh3qexxeo/6KNsBNnO6rRbQYpmWiAwIJ/7f71ddbf08941a0a67c7125238a3b102/Image_2.jpeg?w=540&h=476&q=80&fm=webp"
    //                         alt=""
    //                         className="h-80 rounded w-[80%]"
    //                       />
    //                     </div>
    //                   </div>
    //                 </div>
    //               </Tab>
    //               <Tab
    //                 label="Global Membership Club"
    //                 className="text-sm text-sideHeading"
    //               >
    //                 <div className="py-4">
    //                   <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
    //                     <div className="space-y-6 flex flex-col pl-8">
    //                       <div className=" md:text-start text-center">
    //                         <h1 className="lg:text-4xl text-3xl font-semibold text-black">
    //                           Empowering Lives Through
    //                           <span className="text-mainColor"> Rewards</span>
    //                         </h1>
    //                       </div>
    //                       <div className="mt-4 md:text-start text-center text-gray-700">
    //                         <p>
    //                           Try and see the magic of the LM Club in action.
    //                         </p>
    //                       </div>

    //                       <div className="flex flex-col space-y-3 text-sideHeading text-lg">
    //                         <div className="flex flex-row items-center">
    //                           <img src={success} alt="" className="w-4 h-4" />
    //                           <p className="ml-4">
    //                             Membership Club Where Businesses and Members
    //                             Connect.
    //                           </p>
    //                         </div>
    //                         <div className="flex flex-row items-center">
    //                           <img src={success} alt="" className="w-4 h-4" />
    //                           <p className="ml-4">
    //                             Establish a global presence that encourages
    //                             networking and mutual benefits.
    //                           </p>
    //                         </div>
    //                         <div className="flex flex-row items-center">
    //                           <img src={success} alt="" className="w-4 h-4" />
    //                           <p className="ml-4">
    //                             Develop a nurturing environment that fosters
    //                             enduring friendships and a robust social
    //                             network.
    //                           </p>
    //                         </div>
    //                       </div>
    //                     </div>

    //                     <div className="w-[100%] flex justify-center items-center">
    //                       <img
    //                         src="https://images.ctfassets.net/p24lh3qexxeo/6GB7eepDnAGDK7P1feKYcA/4dd44c41342bfccc884a3558b66d70a5/image.png?w=1081&h=952&q=80&fm=webp"
    //                         alt=""
    //                         className="h-80 rounded w-[80%]"
    //                       />
    //                     </div>
    //                   </div>
    //                 </div>
    //               </Tab>
    //             </Tabs>
    //           </div>

    //           <div className="lg:hidden block">
    //             <Tabs>
    //               <Tab
    //                 label="Creating Exciting Rewards"
    //                 className=" px-1 text-sideHeading"
    //               >
    //                 <div className="py-4 ">
    //                   <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
    //                     <div className="space-y-6 flex flex-col px-2">
    //                       <div className=" md:text-start text-center">
    //                         <h1 className="lg:text-4xl text-3xl font-semibold text-black">
    //                           Ready to turn your development{" "}
    //                           <span className="text-mainColor">
    //                             innovation?
    //                           </span>
    //                         </h1>
    //                       </div>
    //                       <div className="mt-4 md:text-start text-center text-gray-700">
    //                         <p>
    //                           Empower your rewards to deliver smarter care with
    //                           a seamless, intuitive app build for efficiency.
    //                         </p>
    //                       </div>

    //                       <div className="flex items-center lg:justify-start justify-center">
    //                         <a
    //                           href="/login"
    //                           className="bg-mainColor outline-none
    //                           rounded-full over:shadow-form transition font-medium duration-1000 ease-in-out md:text-base text-sm text-white px-8 md:py-3 py-2 text-center"
    //                         >
    //                           What we offer
    //                         </a>
    //                       </div>
    //                     </div>

    //                     <div className="w-[100%] flex justify-center items-center">
    //                       <img
    //                         src="https://images.ctfassets.net/p24lh3qexxeo/2iOltnu3emEY83ey9618YO/a7e53877ad5929b2a669666429011335/image.png?w=1080&h=952&q=80&fm=webp"
    //                         alt=""
    //                         className="h-80 rounded w-[90%]"
    //                       />
    //                     </div>
    //                   </div>
    //                 </div>
    //               </Tab>
    //               <Tab
    //                 label="Drive Business Growth"
    //                 className=" px-1 text-sideHeading"
    //               >
    //                 <div className="py-4">
    //                   <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
    //                     <div className="space-y-6 flex flex-col px-2">
    //                       <div className=" md:text-start text-center">
    //                         <h1 className="lg:text-4xl text-3xl font-semibold text-black">
    //                           Empowering Connections, Cultivating
    //                           <span className="text-mainColor"> Success</span>
    //                         </h1>
    //                       </div>
    //                       <div className="mt-4 md:text-start text-center text-gray-700">
    //                         <p>
    //                           Try and see the magic of the LM Club in action.
    //                         </p>
    //                       </div>

    //                       <div className="flex items-center lg:justify-start justify-center">
    //                         <a
    //                           href="/login"
    //                           className="bg-mainColor outline-none
    //                           rounded-full over:shadow-form transition font-medium duration-1000 ease-in-out md:text-base text-sm text-white px-8 md:py-3 py-2 text-center"
    //                         >
    //                           Learn More
    //                         </a>
    //                       </div>
    //                     </div>

    //                     <div className="w-[100%] flex justify-center items-center">
    //                       <img
    //                         src="https://images.ctfassets.net/p24lh3qexxeo/6KNsBNnO6rRbQYpmWiAwIJ/7f71ddbf08941a0a67c7125238a3b102/Image_2.jpeg?w=540&h=476&q=80&fm=webp"
    //                         alt=""
    //                         className="h-80 rounded w-[90%]"
    //                       />
    //                     </div>
    //                   </div>
    //                 </div>
    //               </Tab>
    //               {/* <Tab
    //                 label="Cultivate Thriving Culture"
    //                 className="text-xs px-1 text-sideHeading"
    //               >
    //                 <div className="py-4">
    //                   <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
    //                     <div className="space-y-6 flex flex-col px-2">
    //                       <div className=" md:text-start text-center">
    //                         <h1 className="lg:text-4xl text-3xl font-semibold text-black">
    //                           Empowering Lives Through
    //                           <span className="text-mainColor"> Rewards</span>
    //                         </h1>
    //                       </div>
    //                       <div className="mt-4 md:text-start text-center text-gray-700">
    //                         <p>
    //                           Try and see the magic of the LM Club in action.
    //                         </p>
    //                       </div>

    //                       <div className="flex items-center lg:justify-start justify-center">
    //                         <a
    //                           href="/login"
    //                           className="bg-mainColor outline-none
    //                           rounded-full over:shadow-form transition font-medium duration-1000 ease-in-out md:text-base text-sm text-white px-8 md:py-3 py-2 text-center"
    //                         >
    //                           Our Vision
    //                         </a>
    //                       </div>
    //                     </div>

    //                     <div className="w-[100%] flex justify-center items-center">
    //                       <img
    //                         src="https://images.ctfassets.net/p24lh3qexxeo/6GB7eepDnAGDK7P1feKYcA/4dd44c41342bfccc884a3558b66d70a5/image.png?w=1081&h=952&q=80&fm=webp"
    //                         alt=""
    //                         className="h-80 rounded w-[90%]"
    //                       />
    //                     </div>
    //                   </div>
    //                 </div>
    //               </Tab> */}
    //             </Tabs>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="bg-white">
    //     <div className="relative lg:pt-20 pt-8">
    //       <div className="w-full">
    //         <div className="w-full px-4 mx-auto max-w-[1400px]">
    //           <div className="flex items-center text-center justify-center ">
    //             <div className="h-4 w-1 bg-mainColor"></div>
    //             <h1 className="ml-2 text-lg font-bold text-mainColor uppercase">
    //               Features
    //             </h1>
    //           </div>
    //           <div className="mx-auto max-w-[1200px] text-center mt-4">
    //             <h1 className="text-4xl font-bold text-headingColor">
    //               Empowering Connections, Cultivating Success
    //             </h1>
    //           </div>

    //           <div className="mx-auto max-w-[1200px] text-center mt-4 text-sideHeading">
    //             <p>
    //               At Laoe Maom, we are dedicated to fostering a vibrant culture
    //               that propels our members and businesses to connect,
    //               collaborate, and create opportunities. Anchored in the
    //               principle of TEAM (Together Everyone Achieves More), we
    //               harness the power of human cooperation to accomplish
    //               significant goals incrementally.
    //             </p>
    //           </div>

    //           <div className="mx-auto max-w-[1200px] ">
    //             <div class="grid md:grid-cols-2 grid-cols-1 gap-6 pt-8">
    //               <div class="w-full bg-[#f8f9fa] border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
    //                 <div className="flex flex-col">
    //                   <div className="grid grid-cols-4 w-[100%] border-b-[1px] border-stone-200">
    //                     <div className="lg:col-span-2 col-span-4 p-4">
    //                       <div className="flex flex-col">
    //                         <div className="flex items-center md:justify-start justify-center">
    //                           <div className="h-[12px] w-1 bg-mainColor"></div>
    //                           <h1 className="ml-2 text-sm font-bold text-mainColor uppercase">
    //                             Our Mission
    //                           </h1>
    //                         </div>

    //                         <div className="flex md:justify-start justify-center md:mt-8 mt-4">
    //                           <h1 className="md:text-3xl text-2xl md:font-semibold font-bold md:text-start text-center">
    //                             Activate Grow & Enroll
    //                           </h1>
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="lg:col-span-2 col-span-4 flex justify-center">
    //                       <img
    //                         src="https://images.ctfassets.net/p24lh3qexxeo/4ANrrtIW5N4zIr5DjabOQX/9f0be9be4a3eb2c6152441f8f82b0758/image.png?w=1081&h=952&q=80&fm=webp"
    //                         alt=""
    //                         className="rounded-lg md:w-[100%] w-[90%]"
    //                       />
    //                     </div>
    //                   </div>
    //                   <div className="p-4 text-gray-600 md:text-start text-center">
    //                     <p className="pt-4 pb-4">
    //                       We forge premier networking club that supports our
    //                       members and businesses efficiently and effectively. We
    //                       strive to streamline success, minimizing time
    //                       expenditure and maximizing achievements.
    //                     </p>
    //                   </div>
    //                 </div>
    //               </div>

    //               <div class="w-full bg-[#f8f9fa] border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
    //                 <div className="flex flex-col">
    //                   <div className="grid grid-cols-4 w-[100%] border-b-[1px] border-green-200">
    //                     <div className="lg:col-span-2 col-span-4 p-4">
    //                       <div className="flex flex-col">
    //                         <div className="flex items-center md:justify-start justify-center">
    //                           <div className="h-[12px] w-1 bg-mainColor"></div>
    //                           <h1 className="ml-2 text-sm font-bold text-mainColor uppercase">
    //                             Our Vision
    //                           </h1>
    //                         </div>
    //                         <div className="flex md:justify-start justify-center md:mt-8 mt-4">
    //                           <h1 className="md:text-3xl text-2xl md:font-semibold font-bold md:text-start text-center">
    //                             Streamline Success Rate
    //                           </h1>
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="lg:col-span-2 col-span-4 flex justify-center">
    //                       <img
    //                         src="https://images.ctfassets.net/p24lh3qexxeo/1wlcJWIgXuaYyBEhxBDVYu/1eb22fb3858708f335f2b5284d32973e/image.png?w=1081&h=952&q=80&fm=webp"
    //                         alt=""
    //                         className="rounded-lg md:w-[100%] w-[90%]"
    //                       />
    //                     </div>
    //                   </div>
    //                   <div className="p-4 text-gray-600 md:text-start text-center">
    //                     <p className="pt-4 pb-4">
    //                       We foster enhanced collaboration and mutual benefit
    //                       among our members and business affiliates. Recognize
    //                       member initiatives with businesses both locally and
    //                       globally with incentives.
    //                     </p>
    //                   </div>
    //                 </div>
    //               </div>

    //               <div class="w-full bg-slate-50 border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
    //                 <div className="flex flex-col">
    //                   <div className="grid grid-cols-4 w-[100%] border-b-[1px] border-slate-200">
    //                     <div className="lg:col-span-2 col-span-4 p-4">
    //                       <div className="flex flex-col">
    //                         <div className="flex items-center md:justify-start justify-center">
    //                           <div className="h-[12px] w-1 bg-mainColor"></div>
    //                           <h1 className="ml-2 text-sm font-bold text-mainColor uppercase">
    //                             Our Strength
    //                           </h1>
    //                         </div>

    //                         <div className="flex md:justify-start justify-center md:mt-8 mt-4">
    //                           <h1 className="md:text-3xl text-2xl md:font-semibold font-bold md:text-start text-center">
    //                             Enhanced Mutual Collaboration
    //                           </h1>
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="lg:col-span-2 col-span-4 flex justify-center">
    //                       <img
    //                         src="https://images.ctfassets.net/p24lh3qexxeo/Kn30UgsRK5RXRHbHVOeXc/ce4bbf7bf746ff6ebf7f7c465fadca9a/image.png?w=1081&h=952&q=80&fm=webp"
    //                         alt=""
    //                         className="rounded-lg md:w-[100%] w-[90%]"
    //                       />
    //                     </div>
    //                   </div>
    //                   <div className="p-4 text-gray-600 md:text-start text-center">
    //                     <p className="pt-4 pb-4">
    //                       Establish a global presence that encourages networking
    //                       and mutual benefits. Develop a nurturing environment
    //                       that fosters enduring friendships and a robust social
    //                       network.
    //                     </p>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div class="w-full bg-slate-50 border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
    //                 <div className="flex flex-col">
    //                   <div className="grid grid-cols-4 w-[100%] border-b-[1px] border-slate-200">
    //                     <div className="lg:col-span-2 col-span-4 p-4">
    //                       <div className="flex flex-col">
    //                         <div className="flex items-center md:justify-start justify-center">
    //                           <div className="h-[12px] w-1 bg-mainColor"></div>
    //                           <h1 className="ml-2 text-sm font-bold text-mainColor uppercase">
    //                             Our strategy
    //                           </h1>
    //                         </div>

    //                         <div className="flex md:justify-start justify-center md:mt-8 mt-4">
    //                           <h1 className="md:text-3xl text-2xl md:font-semibold font-bold md:text-start text-center">
    //                             Promote Entrepreneurship
    //                           </h1>
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="lg:col-span-2 col-span-4 flex justify-center">
    //                       <img
    //                         src="https://images.ctfassets.net/p24lh3qexxeo/6UtH8WBSjZFiVZvEfEvpyZ/22a91c5db979f03a964f862195b7bef1/image.png?w=1081&h=952&q=80&fm=webp"
    //                         alt=""
    //                         className="rounded-lg md:w-[100%] w-[90%]"
    //                       />
    //                     </div>
    //                   </div>
    //                   <div className="p-4 text-gray-600 md:text-start text-center">
    //                     <p className="pt-4 pb-4">
    //                       To expand our vibrant community to 2.5 billion members
    //                       worldwide, creating a network of opportunities and
    //                       shared success.
    //                     </p>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="pt-12">
      <div className="relative">
        <div className="w-full">
          <div className="w-full mx-auto max-w-[1400px] ">
            <div className="p-4">
              <div>
                <div className="flex flex-wrap flex-col lg:items-start items-start pb-3">
                  <div className="text-start leading-relaxed  font-bold text-black">
                    <p className="lg:text-4xl text-2xl">Empowering Connections & Cultivating Success</p>
                  </div>
                  <div className="md:w-36 w-28 h-1 border-b-2 border-green-500 mt-[1px]"></div>
                </div>
                <p className="text-gray-600 pt-3">
                  Welcome to LM Club – where networking meets opportunity! Our
                  innovative widgets are designed to empower you, reward you,
                  and make your life easier. Whether you&apos;re looking to grow
                  your network, share valuable insights, or promote your
                  business, LM Club has the tools to make it happen.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 pt-12">
                <div className="grid grid-cols-2 grid-rows-2 gap-4">
                  <div className="col-span-2 row-span-1">
                    <img
                      src="https://lmclub.club/wp-content/uploads/2024/10/GettyImages-1360197604.webp"
                      alt="one"
                      className="rounded"
                    />
                  </div>

                  <div className="col-span-1 row-span-1">
                    <img
                      src="https://lmclub.club/wp-content/uploads/2024/10/GettyImages-2164278820.webp"
                      alt="two"
                      className="rounded"
                    />
                  </div>

                  <div className="col-span-1 row-span-1">
                    <img
                      src="https://lmclub.club/wp-content/uploads/2024/10/GettyImages-2000672702.webp"
                      alt="two"
                      className="rounded"
                    />
                  </div>
                </div>

                <div className="lg:p-4">
                  <div>
                    <div className="lg:text-3xl text-2xl font-bold">
                      <h2>About LM Club</h2>
                    </div>
                    <div className="pt-4">
                      <p className="text-gray-600">
                        Laoe Maom is more than a membership club; it’s a
                        community built on the principles of collaboration,
                        positivity, and shared success. Founded by Richard
                        Anderson and Sandy Pittman, Laoe Maom focuses on
                        fostering a positive culture that energizes and
                        motivates its members and businesses to network and
                        create opportunities together.
                      </p>
                    </div>

                    <div className="pt-4">
                      <p className="text-gray-600">
                        At the heart of Laoe Maom lies the belief that "Together
                        Everyone Achieves More" – the power of teamwork and
                        human cooperation. Richard, alongside his family, is
                        deeply committed to creating an organization that values
                        connections and helps members achieve great goals, step
                        by step. The inclusion of family symbolizes the core
                        values of unity, trust, and mutual support that Laoe
                        Maom embodies.
                      </p>
                    </div>

                    <div className="pt-4">
                      <p className="text-gray-600">
                        Built on the principle of "Least Amount of Effort, Most
                        Amount of Money" (LAOE MAOM), the organization remains
                        progressive and adaptable, evolving with the changing
                        needs of its members. It’s a global collaboration where
                        individuals and businesses come together, recognizing
                        that mutual support drives collective success.
                      </p>
                    </div>

                    <div className="pt-12">
                      <a
                        href="/contact-cdn"
                        className="group border-[1px] relative px-6 py-2 text-green-500 text-sm rounded-full border-green-500 font-semibold overflow-hidden flex items-center gap-2 w-[200px] hover:bg-green-500 hover:text-white duration-1000 ease-in-out transition hover:font-medium"
                      >
                        <span className="relative z-10 flex-[8] text-center">
                          Learn More
                        </span>
                        <span className="w-7 h-7 flex items-center justify-center rounded-full bg-green-500 flex-[2] transition duration-1000 ease-in-out text-black group-hover:bg-white group-hover:text-green-500">
                          <TiArrowRight className=" text-lg" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDesc;
