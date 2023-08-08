import { useState } from "react";
import {  createBrowserRouter, Route, Router, RouterProvider, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import WhoAmI from "./pages/whoami";
import Projects from "./pages/projects";
import SayHi from "./pages/sayhi";
import "./App.css";
import Layout from "./layout/Layout";


const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/whoami",
    Component: WhoAmI,
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

function App(props) {
  console.log(props)

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/whoami" element={<WhoAmI />} />
        <Route path="/sayhi" element={<SayHi />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Layout>
  );
}

export default App;
