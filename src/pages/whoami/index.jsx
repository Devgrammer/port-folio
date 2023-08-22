import React from "react";
import { SiAdobephotoshop, SiAdobeillustrator, SiNotion } from "react-icons/si";
import { LiaFileDownloadSolid } from "react-icons/lia";
import { FaGithubSquare, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FiPenTool} from "react-icons/fi";
import { CgFigma } from "react-icons/cg";
import { TbBrandVscode } from "react-icons/tb";
import Timeline from "../../components/timeline/Timeline";
import { Page, Text, View, Document, StyleSheet,PDFViewer,PDFDownloadLink  } from "@react-pdf/renderer";
import Resume from '/pdf/resume.pdf'

const WhoAmI = () => {
  const dates= new Date().toString();
  const fileName= `Resume_Abhinav_Deep_Rastogi_${dates?.substring(0,15).replace(/ /g, "_")}`
  console.log('date', dates?.substring(0,15).replace(/ /g,"_"));



  const devSkills = [
    "react",
    "next",
    "tailwindcss",
    "javascript",
    "typescript",
    "bootstrap",
    "node",
    "mongodb",
    "redux",
    "webpack",
    "chartjs",
  ];
  const designSkills = [
    "adobe xd",
    "figma",
    "principle",
    "photoshop",
    "illustrator",
    "adobe CC",
  ];
  let textGradient =
    "text-transparent font-semibold text-justify bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-fuchsia-600 via-orange-600";
  return (
    <div className="who-am-i-container flex flex-col px-4 w-full gap-y-8 pb-72">
      <div
        className="who-am-i-container-hero flex w-full h-64 rounded-lg box-sizing bg-red-400 bg-cover bg-center bg-no-repeat saturate-0 backdrop-blur-lg drop-shadow-lg"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)`,
        }}
      ></div>

      <div className="who-am-i-content-sub-container">
        <div className="user-intro-desc text-xl font-beta break-normal text-justify">
          <span className="text-2xl font-normal text-slate-600">N</span>amaste,
          I'm <span className={`${textGradient}`}>Abhinav Deep Rastogi</span>. A
          Frontend Engineer with two year of experience, I am proficient
          in&nbsp;
          <strong>React</strong> and <strong>Next JS</strong>. I have a proven
          ability to work effectively with cross-functional teams to develop
          solutions that meet the needs and goals of the company. I am a strong
          problem-solver and I have a passion for writing clean, maintainable
          code. I am dedicated to contributing to the success of the team and
          bringing my enthusiasm for technology to life.
        </div>
      </div>
      <div className="skill-container-bar-wrapper flex flex-col gap-y-16">
        <div className="skills-container-bar ">
          <div className="skills-container-strip w-full h-64 md:h-32 rounded-lg flex flex-col md:flex-row justify-between items-center p-4 bg-white/50 backdrop-blur-xl trasform-none md:rotate-0">
            <div className="skill-type text-4xl font-bold">DEV</div>
            <div className="skill-classification grid  grid-rows-4 md:grid-rows-2 grid-flow-col gap-2">
              {devSkills.map((val, index) => {
                return (
                  <SkillPill
                    key={`skill-pill-dev-${index}`}
                    index={index}
                    skill={val}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="skills-container ">
          <div className="skills-container-strip w-full h-40 md:h-32 rounded-lg flex flex-col md:flex-row-reverse justify-between items-center p-4 bg-white/50 backdrop-blur-xl trasform-none md:rotate-0">
            <div className="skill-type text-4xl font-bold">DESIGN</div>
            <div className="skill-classification grid grid-rows-2 grid-flow-col gap-2">
              {designSkills.map((val, index) => {
                return (
                  <SkillPill key={`skill-pill-des-${index}`} skill={val} />
                );
              })}
            </div>
          </div>
        </div>
        <div className="skills-container flex justify-evenly">
          <div className="skills-container-strip w-full h-16 md:h-32 rounded-lg flex flex-row-reverse justify-between items-center p-4 bg-white/50 backdrop-blur-xl ">
            <div className="skill-classification w-full flex gap-2 justify-between items-center">
              <SiAdobeillustrator className=" text-xl md:text-6xl" />
              <SiAdobephotoshop className=" text-xl md:text-6xl" />
              <FaGithubSquare className=" text-xl md:text-6xl" />
              <div className="skill-type text-4xl font-bold">TOOLS</div>
              <CgFigma className=" text-xl md:text-6xl" />
              <SiNotion className=" text-xl md:text-6xl" />
              <TbBrandVscode className=" text-xl md:text-6xl" />
            </div>
          </div>
        </div>
        <div className="skill-type text-6xl font-bold font-zitta ">
          Timeline
        </div>

        <Timeline />

        <div className="pdf-drawer mt-8 w-full flex justify-center">
          <a href={Resume} download={fileName} target="_blank" rel="noreferrer">
            <button title="Click to download the resume." className=" flex gap-x-2  items-center w-fit p-2 px-4 shadow-lg rounded-md border border-gray-800 hover:bg-gradient-to-r font-semibold from-cyan-500 via-blue-500 via-fuchsia-500 to-orange-500 hover:text-white  hover:shadow-2xl hover:scale-110 duration-700 "><LiaFileDownloadSolid size={24}/> Download Resume</button>
          </a>
        </div>
<div className="quote-section flex flex-col w-full justify-center items-center gap-y-2">
        <div className=" font-semibold text-xl text-slate-600 w-fit flex items-start justify-center"><span className="font-mono hidden md:block"><FaQuoteLeft size={16}/></span> &nbsp;Talk to yourself once in a day, otherwise you may miss meeting an intelligent person in this world.&nbsp;<span className="font-mono hidden md:block"><FaQuoteRight size={16}/></span></div>
        <div className="text-slate-600 font-sigma italic flex gap-x-1 items-end items-center text-xs md:text-sm"><FiPenTool size={12} className="rotate-[-90deg]"/>Narendranath Datta aka Swami Vivekanand </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAmI;

const SkillPill = ({ skill }) => {
  return (
    <div className="pills flex justify-center items-center w-fit h-8 rounded-full border-2 border-gray-400 px-2 hover:border-cyan-500 transform hover:text-black  hover:scale-105 duration-700 ease-in-out hover:cursor-pointer">
      {skill}
    </div>
  );
};
