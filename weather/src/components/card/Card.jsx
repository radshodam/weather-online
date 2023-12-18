import React from "react";
import LocalTime from "../../hooks/UseLocaltime";
import { useToggleDegreeStore } from "../../store/useToggleStore";

export default function Card({ city_name, ts, timezone, weather, temp, fahrenheit }) {

    const { isToggledDegree } = useToggleDegreeStore();


    return <>
        <div className='flex flex-col items-center justify-center'>
            <h2 className='text-2xl font-bold text-left'>{city_name}</h2>
            <LocalTime timestamp={ts} timezone={timezone} />
        </div>
        <p className='text-4xl text-center py-1 font-light'>{weather.description}</p>
        <div className='flex justify-center space-x-5 items-center'>

            <p className='text-6xl'>{isToggledDegree ? `${fahrenheit}°F` : `${temp}°C`}</p>
            <img
                className='w-28 h-auto'
                src={`https://www.weatherbit.io/static/img/icons/${weather.icon}.png`}
                alt={weather.description}
            />
        </div>
    </>

}
