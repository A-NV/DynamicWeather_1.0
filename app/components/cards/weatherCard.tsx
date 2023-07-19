'use client'

import React, { useState, useEffect, ChangeEvent } from 'react';
import {CiLocationOn} from "react-icons/Ci"
import {FiWind} from "react-icons/Fi"
import {BsDroplet} from 'react-icons/Bs'
import {FaWind} from "react-icons/Fa"
import { getWeatherData } from "@/app/api/weatherService"

interface WeatherCardProps {
  weatherData: {
    sys: {
      name:string;
      country: string;
    }
    main: {
      temp: number;
      feels_like: number;
      pressure: number;
      humidity: number;
    };
    wind: {
      speed: number;
    };
    weather: {
      description: string;
    }[];
  };
}

const WeatherCard: React.FC<WeatherCardProps> = ({}) => {
  const [weatherDataState, setWeatherDataState] = useState<any | null>(null);
  const city = "Sydney";

  useEffect(() => {
    // Fetch weather data when the component mounts
    getWeatherData(city)
      .then((data: any) => {
        setWeatherDataState(data);
      })
      .catch((error: any) => {
        console.error("Error fetching weather data:", error);
      });
  }, [city]);
  
  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
 
  return ( 
    <div className="flex flex-col">
      <div
        className="
          flex
          max-md:flex-col
          w-full
          relative
          overflow-hidden
          rounded-xl
        bg-blue-300
          
        "
      > 
      {/* location box */}
      <div className="p-9 md:space-x-10">
        <div className="flex items-center justify-between">

        <div className="flex items-center gap-2 font-semibold"> 
          <CiLocationOn
            size={28}
          /> 
            {weatherDataState?.name}, {weatherDataState?.sys.country}
          </div>
          <div className="flex items-center justify-end"> 
            Today {currentTime}
          </div>
        </div>

        <div className="flex flex-col items-center pb-8">
        <div className="text-[80px]">{weatherDataState?.main.temp} °C</div>
        <div className="text-xl uppercase">{weatherDataState?.weather[0]?.description}</div>
        </div>

        {/* wind rain wind-speed */}
        <div className="flex items-center justify-between md:gap-8">
          <div className="flex items-center gap-3">
            <FiWind size={28}/>
            {weatherDataState?.main.pressure} hpa
          </div>

          <div className="flex items-center gap-3">
            <BsDroplet size={28}/>
            {weatherDataState?.main.humidity} %
          </div>

          <div className="flex items-center gap-3">
            <FaWind size={28}/>
            {weatherDataState?.wind.speed} km/h
          </div>
        </div>
      </div>

      {/* Temperature graph */}
      <div 
        className="
          mx-6
          mb-4
          rounded-xl
          bg-white/60
          h-[200px]
          md:w-full
          md:h-auto
          md:my-5
        "
        >
          <div className="flex flex-col mt-6 mx-5">
          <div className="text-blue-800 font-semibold">
            Temperature
          </div>
          <div className="flex items-center justify-between mx-4">
            <div>Morning </div>
            <div>Afternoon </div>
            <div>Evening </div>
            <div>Night </div>

          </div>
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