import { useState } from "react";
import { LuPlus } from "react-icons/lu";
import { LuMinus } from "react-icons/lu";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-6 border-b-[1px] pt-2 text-lg">
      <button
        onClick={() => {
          setAccordionOpen(!accordionOpen);
        }}
        className="flex justify-between w-full"
      >
        <div className=" flex justify-start w-full items-center">
          <span className="font-normal text-gray-700 tracking-normal">{title}</span>
        </div>
        <div className="px-4 py-1">
          {accordionOpen ? (
            <LuMinus color="red" />
          ) : (
            <LuPlus color="[#00684A]" />
          )}
        </div>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100 pt-4"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden md:mx-0 mx-1 text-start">
          <span className=" text-lg text-gray-700">{answer}</span>
        </div> 
      </div>
    </div>
  );
};

export default Accordion;
