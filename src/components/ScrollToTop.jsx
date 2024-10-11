import { useEffect } from "react";
import { useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { classNames } from "../components/classNames";

const ScrollToTop = () => {
  const phoneNumber = "7075495493"; // Replace with your phone number
  const message =
    "Hello MAC Global Services, I need your guidance on abroad education..."; // Pre-filled message
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 120) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <a
      href={whatsappUrl}
      className={classNames(
        isVisible ? "opacity-100" : "opacity-0",
        "bg-[#25d366] fixed flex flex-row lg:bottom-6 bottom-6 lg:right-2 right-2 z-20 py-2 px-4 rounded-full transition duration-1000 ease-in-out"
      )}
    >
      <a>
        <SiWhatsapp className="h-6 w-6 text-white mr-2" aria-hidden="true" />
      </a>
      <div className="flex justify-center items-center text-sm">
        <h1 className=" text-white font-semibold">Whatsapp us!</h1>
      </div>
    </a>
  );
};

export default ScrollToTop;
