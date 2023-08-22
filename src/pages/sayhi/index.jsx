import { useState } from "react";
import Hi from "../../assets/sayhi.png";
import {
  PopupModal,
  useCalendlyEventListener,
} from "react-calendly";
import { FaBehance, FaGithub, FaLinkedin } from "react-icons/fa";
import { useNavigate, redirect, Link } from "react-router-dom";

const SayHi = () => {

  const navigate = useNavigate();
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => console.log(e.data.payload),
  });

  const pageSettings = {
    backgroundColor: "ffffff",
    hideEventTypeDetails: false,
    hideLandingPageDetails: false,
    primaryColor: "00a2ff",
    textColor: "4d5055",
  };

  const prefill = {
    email: "test@test.com",
    firstName: "Jon",
    lastName: "Snow",
    name: "Jon Snow",
    guests: ["janedoe@example.com", "johndoe@example.com"],
    customAnswers: {
      a1: "a1",
      a2: "a2",
      a3: "a3",
      a4: "a4",
      a5: "a5",
      a6: "a6",
      a7: "a7",
      a8: "a8",
      a9: "a9",
      a10: "a10",
    },
    date: new Date(Date.now() + 86400000),
  };
  const utm = {
    utmCampaign: "Spring Sale 2019",
    utmContent: "Shoe and Shirts",
    utmMedium: "Ad",
    utmSource: "Facebook",
    utmTerm: "Spring",
  };

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="say-hi-contianer flex flex-col justify-center items-center  w-full min-h-screen px-4 gap-y-4 pt-20 pb-32">
      <div className="user-avatar h-44">
        <img
          src={Hi}
          width={200}
          height={200}
          alt="user-avatar"
          className="user-avatar-img z-30 scale-[250%] md:scale-155 "
        />
      </div>
      <div className="greeting-content-container w-ull md:w-3/4 nowrap text-justify md:text-left text-xl text-slate-700 font-beta px-2 md:px-12">
        {" "}
        I warmly welcome new connections, both for professional collaborations
        and personal interactions. If you have inquiries, feedback on my
        projects, or are keen to explore potential opportunities, please don't
        hesitate to reach out. I'm always open to engaging in meaningful
        conversations and building valuable connections
      </div>

      <div className="calendly-container h-14 mt-4" id="calendly">
        <button
          className="bg-white/50 backdrop-blur-xl shadow-md  w-64  p-2 box-boder rounded-full justify-center items-center text-black uppercase text-md font-beta font-semibold hover:border-2 hover:border-black hover:scale-110 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white duration-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          Book a calendly !
        </button>

        <PopupModal
          url="https://calendly.com/iamabhinavrastogi/beans-banter-casual-coffee-meet"
          pageSettings={pageSettings}
          utm={utm}
          prefill={prefill}
          onModalClose={() => setIsOpen(!isOpen)}
          open={isOpen}
          rootElement={document.getElementById("calendly")}
        />
      </div>
      <div className="text-2xl font-bold text-gray-600">OR</div>
      <div className="mail-contianer ">
        <div className="mail content text-sm font-bold text-slate-800 uppercase my-2">
          mail me{" "}
        </div>
        <div className="mail-input bg-gradient-to-r rounded-xl p-[4px] from-cyan-500 via-blue-500 to-fuchsia-500 via-orange-500">
          {" "}
          <a href="mailto: rastogi.abhinav8@gmail.com">
            <input
              type="email"
              className="bg-white p-2 px-4  w-64 rounded-lg font-semibold text-slate-500 text-beta"
              value="rastogi.abhinav8@gmail.com"
            />
          </a>
        </div>

        <div className="social">
          <div className="mail content text-sm font-bold text-slate-800 uppercase my-2">
            Follow me on{" "}
          </div>
          <div className="social-link-icon-wrapper flex justify-center w-full gap-x-8">
            <div
              className="social-icon "
              onClick={() => window.open("https://github.com/Devgrammer", "_blank")}
            >
              <FaGithub
                size={36}
                className="text-gray-400 hover:text-cyan-500 hover:cursor-pointer hover:shadow-lg duration-700"
              />
            </div>

            <div className="social-icon" onClick={()=>window.open("https://www.linkedin.com/in/iamcrazyabhi/", "_blank")}>
              <FaLinkedin
                size={36}
                className="text-gray-400 hover:text-cyan-500 hover:cursor-pointer duration-700"
              />
            </div>
            <div className="social-icon" onClick={()=>window.open("https://www.behance.net/iamcrazyabhi", "_blank")}>
              <FaBehance
                size={36}
                className="text-gray-400 hover:text-cyan-500 hover:cursor-pointer duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SayHi;
