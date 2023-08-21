import Footer from '../components/footer/Footer'
import GradientBlur from '../components/gradientBlur/GradientBlur'
import NavBar from '../components/header/navbar/NavBar'

const Layout = ({children}) => {

  
  return (
    <div className="w-full h-screen overflow-y-scroll box-border flex flex-col items-center justify-between ">
      <GradientBlur position={"top"} />
      <NavBar />
      <div className="main-content-area-container px-0 md:px-4">{children}</div>
      <Footer />
      <GradientBlur position={"bottom"} />
    </div>
  );
}

export default Layout