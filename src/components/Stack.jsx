import discord from "../assets/discord.svg";
import hooks from "../assets/hooks.svg";
import phone from "../assets/phone.svg";
import slack from "../assets/slack.svg";
import sms from "../assets/sms.svg";
import teams from "../assets/teams.svg";
import zapier from "../assets/zapier.svg";
import whatsapp from "../assets/whatsapp.svg";
import telegram from "../assets/telegram.svg";
import evernote from "../assets/evernote.svg";

const Stack = () => {
  return (
    <div className="bg-white">
      <div className="relative pt-20 pb-12">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="flex items-center text-center justify-center ">
              <div className="h-4 w-1 bg-mainColor"></div>
              <h1 className="ml-2 text-lg font-bold text-mainColor uppercase">
                Integrate with tech stack
              </h1>
            </div>

            <div className="mx-auto max-w-[1000px] text-center mt-4">
              <h1 className="text-4xl font-semibold text-[#3d454d]">
                Connect everything through notifications.
              </h1>
            </div>

            <div className="mx-auto max-w-[1000px] text-center mt-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                sed quaerat culpa nihil! Molestias reiciendis culpa,
                reprehenderit iure laboriosam eius? Sed fuga quo iste.
              </p>
            </div>

            <div className="mx-auto max-w-[900px] text-center mt-8">
              <div className="grid md:grid-cols-5 grid-cols-3 gap-4">
                <div className="flex justify-center items-center">
                  <a
                    href="/learn-about-us"
                    className="w-20 h-20 rounded bg-[#f8f9fa] flex justify-center items-center"
                  >
                    <img src={whatsapp} alt="" className="w-8 h-8" />
                  </a>
                </div>
                <div className="flex justify-center items-center">
                  <a
                    href="/learn-about-us"
                    className="w-20 h-20 rounded bg-[#f8f9fa] flex justify-center items-center"
                  >
                    <img src={slack} alt="" className="w-8 h-8" />
                  </a>
                </div>
                <div className="flex justify-center items-center">
                  <a
                    href="/learn-about-us"
                    className="w-20 h-20 rounded bg-[#f8f9fa] flex justify-center items-center"
                  >
                    <img src={telegram} alt="" className="w-8 h-8" />
                  </a>
                </div>
                <div className="flex justify-center items-center">
                  <a
                    href="/learn-about-us"
                    className="w-20 h-20 rounded bg-[#f8f9fa] flex justify-center items-center"
                  >
                    <img src={zapier} alt="" className="w-8 h-8" />
                  </a>
                </div>
                <div className="flex justify-center items-center">
                  <a
                    href="/learn-about-us"
                    className="w-20 h-20 rounded bg-[#f8f9fa] flex justify-center items-center"
                  >
                    <img src={sms} alt="" className="w-8 h-8" />
                  </a>
                </div>
                <div className="flex justify-center items-center">
                  <a
                    href="/learn-about-us"
                    className="w-20 h-20 rounded bg-[#f8f9fa] flex justify-center items-center"
                  >
                    <img src={phone} alt="" className="w-8 h-8" />
                  </a>
                </div>
                <div className="flex justify-center items-center">
                  <a
                    href="/learn-about-us"
                    className="w-20 h-20 rounded bg-[#f8f9fa] flex justify-center items-center"
                  >
                    <img src={teams} alt="" className="w-8 h-8" />
                  </a>
                </div>
                <div className="flex justify-center items-center">
                  <a
                    href="/learn-about-us"
                    className="w-20 h-20 rounded bg-[#f8f9fa] flex justify-center items-center"
                  >
                    <img src={evernote} alt="" className="w-8 h-8" />
                  </a>
                </div>
                <div className="flex justify-center items-center">
                  <a
                    href="/learn-about-us"
                    className="w-20 h-20 rounded bg-[#f8f9fa] flex justify-center items-center"
                  >
                    <img src={discord} alt="" className="w-8 h-8" />
                  </a>
                </div>
                <div className="md:flex justify-center items-center hidden">
                  <a
                    href="/learn-about-us"
                    className="w-20 h-20 rounded bg-[#f8f9fa] flex justify-center items-center"
                  >
                    <img src={hooks} alt="" className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
