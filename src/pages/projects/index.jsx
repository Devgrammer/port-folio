import { random } from "maath";
import PR1 from "../../assets/pr1.png";
import  {ProjectData}  from "../../data/projectData/ProjectData.jsx";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="project-main-contianer font-zitta flex flex-col justify-center items-center w-screen h-screen pt-10 pb-32">
      <div className="project-section-header relative text-6xl md:text-[8rem] text-slate-700 font-semibold mb-4 md:mb-0">
        THE PROJECTS{" "}
        <span className=" text-3xl md:text-6xl absolute bottom-2/5 font-bold">{`{${ProjectData.length-1}}`}</span>
      </div>
      <div className="project-card-container box-border flex flex-col gap-y-8 md:flex-row  w-[90%] md:w-[100%]  justify-start items-center md:items-start md:justify-start overflow-x-scroll h-[64rem]">
        {ProjectData.map(( val, index ) => {
          return (
            <ProjectCard
              key={`project-card-${index}`}
              id={val?.id}
              index={index}
              name={val?.project_name}
              url={val?.url}
              desc={val?.desc}
              repo={val?.repo}
              path={val?.img_path}
            />
          );
        })}

      </div>
        <div className="dot-section flex">
          { 
            ProjectData.map((val, index)=>{
              return (
                <div key={`project-dot-${index}`} className="dot w-2 h-2 rounded-full bg-gray-600 flex"></div>
              );
            })
          }
        </div>
    </div>
  );
};


export default Projects;

const ProjectCard = ({ id, index, name, url, desc,repo, path }) => {

  const [isDesc, setIsDesc] = useState(false);
  const generateRandomHeight = () => {
    const minHeight = 20; // in rem
    const maxHeight = 28; // in rem

    // Generate a random height between minHeight and maxHeight
    const randomHeight =
      Math.floor(Math.random() * (maxHeight - minHeight + 0.2)) + minHeight;

    // Return the random height with "rem" unit
    return `${randomHeight}rem`;
  };

function generateRandomColor() {
  // Example array of hex color codes
  const colorList = ["#FF5733", "#3498DB", "#E74C3C", "#2ECC71", "#9B59B6"];

  // Generate a random index to select a color from the list
  const randomIndex = Math.floor(Math.random() * colorList.length);

  // Get the color code at the random index
  const randomColor = colorList[randomIndex];

  return randomColor;
}

  let colors= generateRandomColor();
  let randomHeight= generateRandomHeight();
  return (
    <div
      className={`project-card-container bg-white border border-slate-400 rounded-xl min-w-100 md:min-w-[300px]  p-4  flex flex-col gap-y-2`}
      // onMouseEnter={() => setIsDesc(true)}
      // onMouseLeave={() => setIsDesc(false)}

      style={{ height: `${randomHeight}` }}
    >
      <div
        className="art-container  rounded-lg w-full h-3/4 duration-600 hover:h-[250px] duration-700 "
        style={{ backgroundColor: `${colors}` }}
        onClick={() => {
          window.open(`${url}`);
        }}
      >
        <div className="artwork-container    w-full ">
          {" "}
          <img
            src={window.location.origin + `${path?.length>0?path:"/project/pr1.png"}`}
            className="w-[75%] rotate-[340deg] translate-x-8 translate-y-12 hover:rotate-0 hover:scale-110 hover:cursor-pointer  duration-[1600ms]"
            width={`100%`}
            height={`100%`}
          />
        </div>
      </div>

      <div className="project-card-content-section  flex flex-col w-full ">
        <div className="project-name uppercase font-zitta text-2xl text-left font-semibold  ">
          {name}
        </div>
        <div className="pills-section relative  ">
          <div className="pills-category flex text-sm text-slate-600 font-semibold font-alpha uppercase max-w-fit  px-2 box-border max-h-fit justify-center items-center font-regular rounded-full border border-slate-400">
            Web
          </div>

          <div
            className="pills-category  absolute top-0 right-0 flex text-sm text-slate-600 font-semibold font-alpha uppercase max-w-4  px-2 box-border max-h-4 justify-center items-center font-regular"
            onClick={() => {
              window.open(`${repo}`);
            }}
          >
            <FaGithub
              size={24}
              className="hover:text-green-700 hover:cursor-pointer"
            />
          </div>
        </div>
        {isDesc && (
          <div className="desc font-alpha text-[11px] font-semibold  text-slate-700 py-1">
            {desc?.length > 0 && desc?.substring(0, 10)}
          </div>
        )}
      </div>
    </div>
  );
};
