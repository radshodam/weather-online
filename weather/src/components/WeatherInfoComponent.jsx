import React from "react";
import { celsiusToFahrenheit } from "../functions/celsiusToFahrenheit";
import { useToggleDegreeStore } from "../store/useToggleStore";
import DayCardAnimation from "../aniamtions/DayCardAnimation";

const WeatherInfoComponent = ({ weatherData, index }) => {
  const fahrenheit = celsiusToFahrenheit(weatherData?.temp);
  const { isToggledDegree } = useToggleDegreeStore();

  return (
    <DayCardAnimation index={index}>
      <div className="flex flex-col items-center justify-center py-2">
        <h2 className="text-xl font-light text-gray-900 text-center">{weatherData?.datetime}</h2>

        <div className="flex justify-center space-x-5 items-center">
          {weatherData?.temp && (
            <p className="text-3xl text-gray-900">{isToggledDegree ? `${fahrenheit}°F` : `${weatherData.temp}°C`}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-2">
        {weatherData?.precip !== null && (
          <p className="text-xl text-center py-1 font-light text-gray-900/70">Precipitation: {weatherData?.precip}</p>
        )}
        {weatherData?.revision_status && (
          <p className="text-xl text-center py-1 font-light text-gray-900/70">Revision Status: {weatherData?.revision_status}</p>
        )}
      </div>
    </DayCardAnimation>
  );
};

export default WeatherInfoComponent;
