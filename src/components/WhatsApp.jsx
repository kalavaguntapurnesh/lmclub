import { useEffect } from "react";
import { useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { classNames } from "../components/classNames";

const WhatsApp = () => {
  const phoneNumber = "16782004524";
  const message =
    "Hello LM Club, I need your guidance on professional technicians..."; // Pre-filled message
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  const [isVisible, setIsVisible] = useState(true);
  const toggleVisibility = () => {
    if (window.pageYOffset > 120) {
      setIsVisible(true);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 lg:left-6 left-5 z-20">
      <a
        href={whatsappUrl}
        className={classNames(
          isVisible ? "opacity-100" : "opacity-0",
          "bg-mainColor inline-flex items-center rounded-full p-3 text-white "
        )}
      >
        <SiWhatsapp className="h-[22px] w-[22px] text-white" aria-hidden="true" />
      </a>
    </div>
  );
};

export default WhatsApp;
