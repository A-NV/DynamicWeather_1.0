'use client'

import React, { useState, useEffect, ChangeEvent } from 'react';
import {CiLocationOn} from "react-icons/Ci"
import {FiWind} from "react-icons/Fi"
import {BsDroplet} from 'react-icons/Bs'
import {FaWind} from "react-icons/Fa"



const WeatherCard: React.FC = () => {
  const [time, setTime] = useState<string>('Loading...');

  const updateTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    const ampm = hours >= 12 ? 'PM' : 'AM';
    const twelveHour = hours % 12 || 12;

    const timeString = `${hours}:${minutes}  ${ampm}`;
    setTime(timeString);
  }

  useEffect(() => {
    const interval = setInterval(updateTime, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return ( 
    <div className="flex flex-col">
      <div
        className="
          w-full
          relative
          overflow-hidden
          rounded-xl
        bg-blue-300
          
        "
      > 
      {/* location box */}
      <div className="p-9">
        <div className="flex items-center justify-between">

        <div className="flex items-center gap-2 font-semibold"> 
          <CiLocationOn
            size={28}
          /> 
            Sydeny, NSW 
          </div>
          <div className="flex items-center justify-end"> 
            Today {time}
          </div>
        </div>

        <div className="flex flex-col items-center pb-8">
        <div className="text-[90px]">24</div>
        <div className="text-xl">Mostly Clear</div>
        </div>

        {/* wind rain wind-speed */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FiWind size={28}/>
            720hpa
          </div>

          <div className="flex items-center gap-3">
            <BsDroplet size={28}/>
            32%
          </div>

          <div className="flex items-center gap-3">
            <FaWind size={28}/>
            12km/h
          </div>
        </div>
      </div>

      {/* Temperature graph */}
      <div 
        className="
          mx-4
          mb-4
          rounded-xl
          backdrop-blur-lg
          bg-white/30
          relative
          p-2
          h-[200px]
        "
        >
          <div>
            Temperature
          </div>
        </div>
      </div>

      {/* Next 7 days */}
      <div>
        <div className="flex justify-between mt-3 mx-3">
          <div>
            Today
          </div>
          <div 
            onClick={() => {}}
            className="underline text-blue-600">
              Next 5 Days
          </div>
        </div>

      </div>

    </div>
   );
}
 
export default WeatherCard;