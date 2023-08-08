import Footer from '../components/footer/Footer'
import NavBar from '../components/header/navbar/NavBar'

const Layout = ({children}) => {

  
  return (

    <div className='w-full max-h-screen box-border flex flex-col items-center justify-items-between '>
    <NavBar/>
    {children}
    <Footer/>
    </div>
  )
}

export default Layout