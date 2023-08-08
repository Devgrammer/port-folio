import WhoAmI from '../../assets/WhoAm.png'
import Project from '../../assets/project.png'
import Greet from '../../assets/greet.png'
import {useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
    let text_gradient =
      "text-transparent bg-clip-text bg-gradient-to-tl from-[#e20b8c]  to-[#f84b00]";
  return (
    <div className="nav-menu-expansion w-[90%] absolute bottom-6 h-28 box-border rounded-lg backdrop-blur-2xl flex  justify-between items-center px-6 bg-black/30">
      
          <div className="footer-menu-icon" onClick={()=>navigate("/whoami")}>
            <div
              className="menu-item-icon h-16 transition-transform  duration-400 transform  hover:scale-110 cursor-pointer filter:drop-shadow-2xl"
              title={"Who am I ?"}
            >
              <img src={WhoAmI} width={80} height={80} alt="user-avatar" />
            </div>
            <div className={`menu-item-title font-semibold ${text_gradient}`}>
              Whoami.
            </div>
          </div>
        
        
          <div className="footer-menu-icon" onClick={()=>navigate("/sayhi")}>
            <div className="menu-item-icon h-16 transition-transform  duration-400 transform  hover:scale-110 cursor-pointer filter:drop-shadow-2xl">
              <img src={Greet} width={80} height={80} alt="user-avatar" />
            </div>
            <div className={`menu-item-title  font-semibold ${text_gradient}`}>
              Say hi.
            </div>
          </div>
        
          <div className="footer-menu-icon" onClick={()=>navigate("/projects")}>
            <div className="menu-item-icon h-16 transition-transform  duration-400 transform  hover:scale-110 cursor-pointer filter:drop-shadow-2xl">
              <img src={Project} width={80} height={80} alt="user-avatar" />
            </div>
            <div className={`menu-item-title  font-semibold ${text_gradient}`}>
              Projects.
            </div>
          </div>
    </div>
  );
}

export default Footer