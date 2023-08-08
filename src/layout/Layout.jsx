import Footer from '../components/footer/Footer'
import GradientBlur from '../components/gradientBlur/GradientBlur'
import NavBar from '../components/header/navbar/NavBar'

const Layout = ({children}) => {

  
  return (
    <div className="w-full h-screen overflow-y-scroll box-border flex flex-col items-center justify-items-between ">
      <GradientBlur position={"top"} />
      <NavBar />
      <marquee
        direction="right"
        className=" absolute  top-44 z-10 text-6xl font-extrabold text-gray-300"
      >
        DISCOVER
      </marquee>
      <marquee
        direction="left"
        className=" absolute  top-[32%] z-10 text-6xl font-extrabold text-gray-300"
      >
        DECODE
      </marquee>
      <marquee
        direction="right"
        className=" absolute  top-[40%] z-10 text-6xl font-extrabold text-gray-300"
      >
        DEVELOP
      </marquee>
      {children}
      <Footer />
      <GradientBlur position={"bottom"} />
    </div>
  );
}

export default Layout