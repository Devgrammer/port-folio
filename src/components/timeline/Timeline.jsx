import React from "react";
import { SiHomeassistant, SiHomeassistantcommunitystore } from "react-icons/si";
import { TimelineData } from "../../data/timelineData/TimelineData";
import { stringify } from "postcss";
import { Tooltip } from "react-tooltip";

const Timeline = () => {
  return (
    <div className="timeline-container flex w-full justify-start md:justify-center">
      <div className="timeline-line flex flex-col gap-y-32">
        {TimelineData.map((val, index) => {
          return (
            <div
              key={`timeline-step-${index}`}
              className={`timeline-icon-wrapper relative w-12 h-12 bg-gradient-to-r from-cyan-500 via-blue-500 via-fuchsia-500 to-orange-500 rounded-full flex justify-center items-center`}
            >
              <div className="timeline-icon z-30  w-10 h-10 bg-black rounded-full flex justify-center items-center hover:scale-105 hover:cursor-pointer">
                {val?.icon}
              </div>
              <div
                className={`icon-redirection-line  absolute top-28 rotate-90 border border-black ${
                  index === TimelineData.length - 1 ? "w-0" : "w-40"
                }`}
              ></div>
              <div
                className={`icon-redirection-line absolute ${
                  index % 2 === 0 ? " right-4 md:right-12" : " right-4 md:left-12"
                } border border-black w-0 md:w-52`}
              >
                <div
                  className={`arrow-head animate-pulse border-x-8 h-0 w-0 border-x-transparent border-b-8 border-b-black absolute bottom-[-4px] ${
                    index % 2 === 0 ? " rotate-90 md:rotate-[270deg]" : "rotate-90"
                  } ${
                    index % 2 === 0
                      ? "  md:right-[202px]"
                      : "  md:left-[202px]"
                  }`}
                ></div>
                <TimelineBox
                  index={index}
                  id={val?.id}
                  start={val?.startAt}
                  end={val?.endAt}
                  role={val?.role}
                  location={val?.location}
                  desc={val?.desc}
                  org={val?.organization}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;

const TimelineBox = ({ index, role, start, end, location, id, desc, org }) => {
  const MonthFomatter = (val) => {
    let months = [
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct",
      "nov",
      "dec",
    ];
    if (val > 0 && val <= 12) {
      return months[val - 1];
    } else {
      return "Not valid";
    }
  };

  const StringFormatter = (str, limit) => {
    if (str.length > 0 && str.length > limit) {
      return str.substring(0, limit) + "....";
    } else {
      return str;
    }
  };

 

  let startDate = start.split("-");
  let endDate = end.split("-");
  return (
    <div
      className={`timeline-box-container shadow-lg p-2 py-4 absolute ${
        index % 2 === 0 ? "md:right-64" : " md:left-64"
      } bottom-[-64px] md:bottom-[-56px] border-0 border-gray-700 flex items-center box-border w-72 md:w-80 h-32 md:h-28 rounded-md bg-white/50 flex items-center backdrop-blur-xl  transform hover:border-2 hover:border-cyan-600 hover:scale-110 duration-700 hover:cursor-pointer`}
    >
      <div className="date-part w-1/4 pl-2 pr-4  border-r-2 h-[100%] border-gray-400  flex flex-col justify-center text-sm font-semibold text-gray-600 font-alpha">
        <span className="uppercase">{MonthFomatter(startDate[1])}</span>
        <span className="text-xl font-bold">{startDate[0]}</span>
        <span className="">{startDate[2]}</span>
      </div>

      <div className="description-part text-left p-4">
        <div className="role text-slate-600 font-semibold font-alpha capitalize leading-4">
          {role}
        </div>
        <div className="role text-slate-800 font-semibold  text-xs font-alpha capitalize leading-tighter">
          {org}, {location}
        </div>
        <div className="date text-[9px] uppercase text-slate-600">
          {MonthFomatter(startDate[1]) +
            "," +
            startDate[2] +
            "-" +
            MonthFomatter(endDate[1]) +
            "," +
            endDate[2]}
        </div>
        <div
          className="summary text-[10px] text-left whitespace-pre-line text-clip overflow-hidden mt-1"
          data-tooltip-id={`timeline-step-${id}`}
          data-tooltip-content={desc}
        >
          {StringFormatter(desc, 70)}
        </div>
        <Tooltip
          id={`timeline-step-${id}`}
             effect='solid'
                        delayHide={500}
                        delayShow={500}
                        delayUpdate={500}
                        place={'bottom'}
                        className="tooltip z-40"
                        border={true}
                        isCapture ={true}
                        type={'light'}
                        ref= { el => this.tooltip = el}
                        
        />
      </div>
    </div>
  );
};
