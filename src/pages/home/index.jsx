import Particles from "../../components/particle/Particle";
import TypewriterEffect from "./../../components/typewritter/TypeWritter";
import Avatar from "../../assets/avatar.png";
import Typewriter from 'typewriter-effect'

const HomePage = () => {
  const textsToType = [
    " to develope Web And Native Apps.",
    " bringing back pixel perfect UIs into life.",
    "to captures reality in form of pixels.",
    "The loop continues with this string.",
    // Add more strings as needed
  ];
  const typingSpeed = 150; // Adjust the speed as per your preference
  const repeatInterval = 2000; // Repeat the effect every 5 seconds (adjust as needed)
  return (
    <div className="home-container-wrapper w-full max-h-[100vh] flex justify-center items-center ">
      <div className="home-container  flex  justify-center items-center ">
        <div className="main-hero-wrapper min-h-fit flex flex-col items-center content-center">
          <div className="user-avatar animate-bounce delay-800 ">
            <img src={Avatar} width={200} height={200} alt="user-avatar" />
          </div>
          <div className="shadow animate-pulse w-36 h-6 rounded-[50%] bg-gray-400 flex blur-lg mb-4"></div>
          <div className="home-content-wrapper flex flex-col place-items-center gap-y-2">
            <div className="home-content-container text-blue-600 font-bold text-4xl font-beta text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-700 via-fuchsia-600 to-orange-500 ">
              Hello, I'm<span className="font-beta">&nbsp;Abhinav</span>
            </div>
            <div className="belief-quote text-md  font-semibold font-alpha text-sm text-gray-600 uppercase">
              ।। नमस्कुरोति यं नित्यं महेशं भक्त सदः ।।
            </div>
            <div className="role-and-tech text-md capitalize">
              Frontend Engineer |{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-700 via-fuchsia-600 to-orange-500 ">
                Next JS
              </span>
            </div>
            <div className="desc text-sm capitalize">
              Code Artsian | ShutterBug
            </div>
            <div className="type-writter flex gap-x-2 text-center font-normal text-xl">
              I love to{" "}
              <Typewriter
               options={{
                strings:textsToType,
                loop:true,
                autoStart:true,
                deleteSpeed:100,
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