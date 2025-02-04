import React from "react";
import { useNavigate } from "react-router-dom";
import globalThree from "../assets/globeThree.jpg";
import gPay from "../assets/GPlay.webp";
import appStore from "../assets/AppStore.webp";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-8">
      <div className="relative lg:block hidden">
        <div className="w-full">
          <div className="w-full mx-auto max-w-[1400px] ">
            <div className="p-4">
              <div className="flex bg-white rounded-lg my-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-[100%] ">
                <div className="flex-1 px-10 py-24 space-y-4 ">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black ">
                    <p className="">
                      Unlock the power with <br />
                      our Game-Changing Widgets!{" "}
                    </p>
                  </div>

                  <div className="flex flex-row gap-2 pt-2">
                    <a href="https://play.google.com/store/apps/details?id=com.lm.lmclub&hl=en_US">
                      <img
                        src={gPay}
                        alt="gPay"
                        className="md:w-auto md:h-[56px] h-auto w-auto"
                      />
                    </a>
                    <a href="https://apps.apple.com/us/app/lm-club/id6469708246">
                      <img
                        src={appStore}
                        alt="appStore"
                        className="md:w-auto md:h-[56px] h-auto w-auto"
                      />
                    </a>
                  </div>
                </div>
                <div className="w-[57%] overflow-hidden relative ">
                  <img
                    className="w-[100%] shadow absolute object-cover bottom-0 right-0"
                    src={globalThree}
                    alt="app"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
