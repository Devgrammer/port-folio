
 import { useState } from 'react';
import Logo from '../../../assets/pngegg.png'
 import { FaBehance, FaGithub, FaHamburger, FaLinkedin } from "react-icons/fa";
 import { PiHamburgerBold } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import RealTimeClock from '../../clock/Clock';
import { animated } from "@react-spring/web";
import useSound from "use-sound";
import ClickSound from '../../../assets/hambuger.wav'
import ClockSound from '../../../assets/clock.mp3'

const NavBar = () => {
  const navigate =useNavigate();
  const[song, setSong] = useState(ClickSound)
  const [play, {stop}] = useSound(song);
 
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className="navbar-container  sticky  top-0 backdrop-blur-sm bg-white/30 w-full h-20 md:h-30 z-40 flex justify-between items-center box-border px-4 py-0 md:px-8 md:py-4 ">
      <div
        className="nav-brand-logo flex items-center"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={Logo} alt="brand-logo" width={100} height={100} />
      </div>
      {isMenuOpen && (
        <animated.div
          className="nav-menu-expansion transform shadow-lg shadow-green-600/20 rotate-90 w-[280px] translate-x-[36vw] translate-y-40 md:rotate-0 md:translate-x-0 md:translate-y-0   md:w-[30%] bottom-0  h-10  rounded-full backdrop-blur-2xl flex  justify-between items-center p-2 px-4 bg-black  hover:md:w-[35%] hover:cursor-pointer  duration-500 ease-in-out "
          onMouseEnter={() => {
            setSong(ClockSound);
            play();
          }}
          onMouseLeave={() => stop()}
        >
          <RealTimeClock />
          <div className="separator text-gray-500 font-semibold mx-0 mr-0 md:mx-1 md:mr-4">|</div>
          <div className="social-link-icon-wrapper flex justify-between w-1/2">
            <div
              className="social-icon "
              onClick={() => window.open("https://github.com/Devgrammer","_blank")}
            >
              <FaGithub color={"#00e05e"} size={20} />
            </div>
            <div
              className="social-icon"
              onClick={() =>
                window.open("https://www.linkedin.com/in/iamcrazyabhi/", "_blank")
              }
            >
              <FaLinkedin color={"#00e05e"} size={20} />
            </div>
            <div
              className="social-icon"
              onClick={() =>
                window.open("https://www.behance.net/iamcrazyabhi", "_blank")
              }
            >
              <FaBehance color={"#00e05e"} size={20} />
            </div>
          </div>
        </animated.div>
      )}
      <div
        className="nav-ham-burger w-fit"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <button
          className="ham-burger h-24 "
          onClick={() => {
            setSong(ClickSound);
            play();
          }}
        >
          {isMenuOpen ? (
            <PiHamburgerBold size={32} />
          ) : (
            <FaHamburger size={32} />
          )}
        </button>
      </div>
    </div>
  );
}

export default NavBar