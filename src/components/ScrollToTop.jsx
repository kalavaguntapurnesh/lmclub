// import { useEffect } from "react";
// import { useState } from "react";
// import { SiWhatsapp } from "react-icons/si";
// import { classNames } from "../components/classNames";

// const ScrollToTop = () => {
//   const phoneNumber = "14042773220";
//   const message =
//     "Hello LM Club, I need your guidance on professional technicians..."; // Pre-filled message
//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
//     message
//   )}`;

//   const [isVisible, setIsVisible] = useState(true);
//   const toggleVisibility = () => {
//     if (window.pageYOffset > 120) {
//       setIsVisible(true);
//     } else {
//       setIsVisible(true);
//     }
//   };

//   // const scrollToTop = () => {
//   //   window.scrollTo({
//   //     top: 0,
//   //     behavior: "smooth",
//   //   });
//   // };

//   useEffect(() => {
//     window.addEventListener("scroll", toggleVisibility);

//     return () => {
//       window.removeEventListener("scroll", toggleVisibility);
//     };
//   }, []);

//   return (
//     <a
//       href={whatsappUrl}
//       className={classNames(
//         isVisible ? "opacity-100" : "opacity-0",
//         // "bg-[#25d366] fixed flex flex-row lg:bottom-6 bottom-6 lg:right-2 right-2 z-20 py-2 px-4 rounded-full transition duration-1000 ease-in-out"
//         "bg-mainColor fixed flex flex-row lg:bottom-6 bottom-6 lg:right-2 right-2 z-20 py-2 px-4 rounded-full transition duration-1000 ease-in-out"
//       )}
//     >
//       <a>
//         <SiWhatsapp className="h-6 w-6 text-white mr-2" aria-hidden="true" />
//       </a>
//       <div className="flex justify-center items-center text-sm">
//         <h1 className=" text-white font-semibold">Whatsapp Us!</h1>
//       </div>
//     </a>
//   );
// };

// export default ScrollToTop;



import { useEffect } from "react";
import { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { classNames } from "../components/classNames";

const ContactUsButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-5 z-20">
      <button
        type="button"
        onClick={scrollToTop}
        className={classNames(
          isVisible ? "opacity-100" : "opacity-0",
          "bg-colorFour hover:bg-colorOne transition duration-1000 ease-in-out inline-flex items-center rounded-full p-3 text-white shadow-sm "
        )}
      >
        <FaAngleUp className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
};

export default ContactUsButton;
