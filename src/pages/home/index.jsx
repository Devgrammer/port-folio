import Particles from "../../components/particle/Particle";
import TypewriterEffect from "./../../components/typewritter/TypeWritter";
import Avatar from "../../assets/avatar.png";
import Typewriter from 'typewriter-effect'

const HomePage = () => {
  const textsToType = [
    "develop Web & Native Apps",
    "bring back UIs into life",
    "captures story in pixels",
    // Add more strings as needed
  ];
  
  return (
    <div className="home-container-wrapper z-20 w-full h-[calc(100vh-8rem)] flex justify-center items-center ">
      <div className="home-container  flex  justify-center items-center pb-32 box-border ">
        <div className="main-hero-wrapper min-h-fit flex flex-col items-center content-center">
          <marquee
            direction="right"
            className=" absolute  top-44 z-0 text-6xl font-extrabold text-gray-300"
          >
            DISCOVER
          </marquee>
          <marquee
            direction="left"
            className=" absolute  top-[30%] z-0 text-6xl font-extrabold text-gray-300"
          >
            DECODE
          </marquee>
          <marquee
            direction="right"
            className=" absolute  top-[40%] z-0 text-6xl font-extrabold text-gray-300"
          >
            DEVELOP
          </marquee>

          <div className="user-avatar h-44">
            <img
              src={Avatar}
              width={200}
              height={200}
              alt="user-avatar"
              className="user-avatar-img z-30 scale-[250%] md:scale-155 "
            />
          </div>
          <div className="shadow animate-pulse w-36 h-6 rounded-[50%] bg-gray-400 flex blur-lg "></div>
          <div className="home-content-wrapper flex flex-col place-items-center gap-y-2 mt-6">
            <div className="home-content-container text-blue-600 font-bold text-4xl font-beta text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-700 via-fuchsia-600 to-orange-500 ">
              Namaste, I'm<span className="font-beta">&nbsp;Abhinav</span>
            </div>
            <div className="belief-quote text-md  font-semibold font-alpha text-sm text-gray-700 uppercase">
              ।। नमस्कुरोति यं नित्यं महेशं भक्त सदः ।।
            </div>
            <div className="role-and-tech text-lg font-semibold text-gray-600 capitalize">
              Frontend Engineer |{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-700 to-fuchsia-600 via-orange-500 ">
                Next JS
              </span>
            </div>
            <div className="desc text-md capitalize font-alpha  font-semibold text-gray-500">
              Code Artsian | ShutterBug
            </div>
            <div className="type-writter my-2 flex gap-x-2 text-center text-gray-800 font-sigma font-semibold text-sm leading-xl tracking-tighter md:text-lg">
              I love to{" "}
              <Typewriter
                options={{
                  strings: textsToType,
                  loop: true,
                  autoStart: true,
                  deleteSpeed: 100,
                }}
              />
            </div>
          </div>
        </div>

        <div className="color-bar">
          <span className="color-1 w-32 h-32 rounded-full bg-blue-800"></span>
        </div>

        <Particles />
      </div>
    </div>
  );
};

export default HomePage