import Footer from '../components/footer/Footer'
import GradientBlur from '../components/gradientBlur/GradientBlur'
import NavBar from '../components/header/navbar/NavBar'
import { motion, useScroll } from "framer-motion"


const Layout = ({children}) => {
    const { scrollYProgress } = useScroll();


  
  return (
    <motion.div initial={{y:-400}} animate={{y:0}} transition={{duration:1}} className="w-full h-screen overflow-y-scroll box-border flex flex-col items-center justify-between ">
      
        <GradientBlur position={"top"} />
        <NavBar />
        <motion.path d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
      style={{ pathLength: scrollYProgress }} className="main-content-area-container px-0 md:px-4">
          {children}
        </motion.path>
        <Footer />
        <GradientBlur position={"bottom"} />
      
    </motion.div>
  );
}

export default Layout