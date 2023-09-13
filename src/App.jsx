import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from './components/loader/Loader'
import "react-tooltip/dist/react-tooltip.css";
import Projects from "./pages/projects";
import Layout from "./layout/Layout";
import HomePage from "./pages/home";
import WhoAmI from "./pages/whoami";
import SayHi from "./pages/sayhi";
import "./App.css";
import PotionLoader from "./components/loader/PotionLoader";


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
setIsLoading(false);
    }, 3000)
  },[]); 

  return (
   <>{
   isLoading ? <PotionLoader/> : (<Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/whoami" element={<WhoAmI />} />
        <Route path="/sayhi" element={<SayHi />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Layout>)}
  </>
  );
}

export default App;
