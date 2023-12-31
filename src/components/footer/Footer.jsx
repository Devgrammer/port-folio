import WhoAmI from '../../assets/WhoAm.png'
import Project from '../../assets/project.png'
import Greet from '../../assets/greet.png'
import {useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion'

const Footer = () => {
  const navigate = useNavigate();
    let text_gradient ="text-gray-900";
  return (
    <motion.div
      initial={{ y: -600, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 15.1,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="footer-menu w-[90%] fixed bottom-6 h-24 box-border rounded-lg backdrop-blur-2xl shadow-md  flex z-30 justify-between items-center p-2 pb-4 bg-black/10  hover:cursor-pointer"
    >
      <div
        className="footer-menu-icon flex max-h-14 flex-col items-center  justify-center box-border gap-y-6"
        onClick={() => navigate("/whoami")}
      >
        <div
          className="menu-item-icon relative h-10 transition-transform  duration-400 transform  hover:scale-110 cursor-pointer filter:drop-shadow-2xl"
          title={"Who am I ?"}
        >
          <div className=" absolute top-32 img-wrapper w-32 flex justify-center bg-cyan-400 blur-lg ">
     
          </div>
          <img
            src={WhoAmI}
            width={70}
            height={70}
            alt="user-avatar"
            className="z-30"
          />
        </div>
        <div
          className={`menu-item-title  h-4 text-sm font-semibold ${text_gradient}`}
        >
          Whoami.
        </div>
      </div>

      <div
        className="footer-menu-icon flex max-h-14 flex-col items-center  justify-center box-border gap-y-6"
        onClick={() => navigate("/sayhi")}
      >
        <div className="menu-item-icon h-10 transition-transform  duration-400 transform  hover:scale-110 cursor-pointer filter:drop-shadow-2xl">
          <img src={Greet} width={70} height={70} alt="user-avatar" />
        </div>
        <div
          className={`menu-item-title h-4  text-sm font-semibold ${text_gradient}`}
        >
          Say hi.
        </div>
      </div>

      <div
        className="footer-menu-icon flex max-h-14 flex-col items-center  justify-center box-border gap-y-6"
        onClick={() => navigate("/projects")}
      >
        <div className="menu-item-icon h-10 transition-transform  duration-400 transform  hover:scale-110 cursor-pointer filter:drop-shadow-2xl">
          <img src={Project} width={70} height={70} alt="user-avatar" />
        </div>
        <div
          className={`menu-item-title h-4 text-sm font-semibold ${text_gradient}`}
        >
          Projects.
        </div>
      </div>
    </motion.div>
  );
}

export default Footer