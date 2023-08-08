
 import { useState } from 'react';
import Logo from '../../../assets/pngegg.png'
 import { FaBehance, FaGithub, FaHamburger, FaLinkedin } from "react-icons/fa";
 import { PiHamburgerBold } from "react-icons/pi";
import { BrowserRouter, Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate =useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className="navbar-container w-full  flex justify-between items-center">
      <div className="nav-brand-logo" onClick={()=>{navigate("/")}}>
        <img src={Logo} alt="brand-logo" width={100} height={100}  />
      </div>
        {isMenuOpen && (
          <div className="nav-menu-expansion w-[50%] bottom-0 h-16 rounded-lg backdrop-blur-2xl flex  justify-between items-center p-4 bg-black/40">
              <div className="social-icon">
                <FaLinkedin color={"#FFEAEE"} size={48} />
              </div>
            <div className="social-icon">
              <FaGithub color={"#FFEAEE"} size={48} />
            </div>
            <div className="social-icon">
              <FaBehance color={"#FFEAEE"} size={48} />
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