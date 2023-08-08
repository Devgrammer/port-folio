
 import { useState } from 'react';
import Logo from '../../../assets/pngegg.png'
 import { FaBehance, FaGithub, FaHamburger, FaLinkedin } from "react-icons/fa";
 import { PiHamburgerBold } from "react-icons/pi";
import { BrowserRouter, Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate =useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className="navbar-container w-full h-32 flex justify-between items-center px-6 py-2 md:px-12 md:py-4">
      <div className="nav-brand-logo flex items-center" onClick={()=>{navigate("/")}}>
        <img src={Logo} alt="brand-logo" width={100} height={100}  />
      </div>
        {isMenuOpen && (
          <div className="nav-menu-expansion transform rotate-90 translate-x-[36vw] translate-y-40 md:rotate-0 md:translate-x-0 md:translate-y-0 w-[220px] md:w-[30%] bottom-0  h-12 rounded-lg backdrop-blur-2xl flex  justify-between items-center p-2 px-4 bg-black/40">
              <div className="social-icon">
                <FaLinkedin color={"#FFEAEE"} size={36} />
              </div>
            <div className="social-icon">
              <FaGithub color={"#FFEAEE"} size={36} />
            </div>
            <div className="social-icon">
              <FaBehance color={"#FFEAEE"} size={36} />
            </div>
          </div>
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