import {  createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import Projects from "../pages/projects";
import SayHi from "../pages/sayhi";
import WhoAmI from "../pages/whoami";

 const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/whoami",
    Component:WhoAmI,
  },
  {
    path: "/sayhi",
    Component: SayHi,
  },
  {
    path: "/projects",
    Component: Projects,
  },
]);

export default router;


