import React, { useState, useEffect } from "react";

function RealTimeClock() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // Update every second

    return () => {
      clearInterval(intervalId); // Clean up the interval on unmount
    };
  }, []);

    const formatAMPM = (date) => {
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      const ampm = hours >= 12 ? "PM" : "AM";
      hours %= 12;
      hours = hours || 12; // Convert 0 to 12
      minutes = minutes < 10 ? `0${minutes}` : minutes;
      seconds = seconds < 10 ? `0${seconds}` : seconds;
      return `${hours}:${minutes}:${seconds} ${ampm}`;
    };

  const formatDate = (date) => {
    const day = date.getDate();
    const monthNames = [
      "Jany",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  };

  return (
    <div className="date-time-section text-green-500  w-[80px] md:w-2/4 text-xs  flex flex-col md:flex-row justify-center items-center  gap-0 md:gap-2">
            <div className='text-[8px] md:text-[11px] w-20 font-semibold'>{formatAMPM(dateTime)}</div>
             <span className="text-[10px] md:text-[12px]  font-bold">{formatDate(dateTime)}</span>
    </div>
    
  );
}

export default RealTimeClock;
