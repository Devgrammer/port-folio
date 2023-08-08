
 import { useState } from 'react';
import Logo from '../../../assets/pngegg.png'
 import { FaBehance, FaGithub, FaHamburger, FaLinkedin } from "react-icons/fa";
 import { PiHamburgerBold } from "react-icons/pi";
import { BrowserRouter, Link, useNavigate } from 'react-router-dom';
import RealTimeClock from '../../clock/Clock';
import { animated } from "@react-spring/web";

const NavBar = () => {
  const navigate =useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className="navbar-container w-full h-32 z-40 flex justify-between items-center box-border px-6 py-2 md:px-12 md:py-4 ">
      <div
        className="nav-brand-logo flex items-center"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={Logo} alt="brand-logo" width={100} height={100} />
      </div>
      {isMenuOpen && (
        <animated.div className="nav-menu-expansion transform  rotate-90 w-[250px] translate-x-[36vw] translate-y-40 md:rotate-0 md:translate-x-0 md:translate-y-0   md:w-[30%] bottom-0  h-10  rounded-full backdrop-blur-2xl flex  justify-between items-center p-2 px-4 bg-black  hover:md:w-[35%] hover:cursor-pointer  duration-500 ease-in-out ">
          <RealTimeClock />
          <div className="separator text-gray-500 font-semibold">|</div>
          <div className="social-link-icon-wrapper flex justify-between w-1/2">
            <div className="social-icon ">
              <FaGithub color={"#00e05e"} size={20} />
            </div>
            <div className="social-icon">
              <FaLinkedin color={"#00e05e"} size={20} />
            </div>
            <div className="social-icon">
              <FaBehance color={"#00e05e"} size={20} />
            </div>
          </div>
        </animated.div>
      )}
      <div
        className="nav-ham-burger w-fit"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <button className="ham-burger">
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