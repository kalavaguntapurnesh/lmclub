import React from "react";
import Accordion from "../components/Accordion";
import { IoShareOutline } from "react-icons/io5";

const FAQ = () => {
  return (
    <div className="bg-[#f8f9fa]">
      <div className="relative pt-20 pb-12">
        <div className="w-full ">
          <div className="w-full px-4 mx-auto max-w-[1400px] ">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <div>
                <div className="flex items-center md:justify-start justify-center ">
                  <div className="h-4 w-1 bg-mainColor"></div>
                  <h1 className="ml-2 text-lg font-bold text-mainColor uppercase">
                    FAQ
                  </h1>
                </div>

                <div className="mt-4 md:text-start text-center">
                  <h1 className="md:text-5xl text-3xl font-semibold text-[#3d454d]">
                    Frequently Asked Questions
                  </h1>
                </div>

                <div className="lg:mt-20 mt-8 flex md:justify-start justify-center">
                  <button class="bg-white flex items-center space-x-1 text-mainColor border-[1px] border-mainColor py-2 px-4 rounded">
                    <span>Learn More</span>
                    <IoShareOutline size={20} />
                  </button>
                </div>
              </div>

              <div className="w-full">
                <Accordion
                  title="As a new member, what are my membership options?"
                  answer="When you're logged into your LM Club account and book a pre-priced project, your 20% discount is automatically applied at checkout. If you're not logged in and are booking a fixed price project, you will be prompted to log in with your email at checkout."
                />
                <Accordion
                  title="How do I cancel my Silver or Gold or Platinum membership?"
                  answer="You can cancel your paid Silver or Gold membership anytime. Simply log in to your LM Club account, go to the Manage My Account page, and click Cancel Auto-Renew."
                />
                <Accordion
                  title="How do I know I can trust the reviews I read on LM Club?"
                  answer="We take several precautions to ensure that reviews come from real customers — including a combination of proprietary behind-the-scenes technology and good old-fashioned human investigations."
                />
                <Accordion
                  title="How can a customer contact us for immediate guidance?"
                  answer="You can contact us through mail on support@lmclub.com or go to the Contact page for further information. And we are always ready to help."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
