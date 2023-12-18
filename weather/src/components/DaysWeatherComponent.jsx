import React from "react";
import { celsiusToFahrenheit } from "../functions/celsiusToFahrenheit";
import { useToggleDegreeStore } from "../store/useToggleStore";
import { getDayOfWeekFromDate } from "../functions/getDayFromDate";
import DayCardAnimation from "../aniamtions/DayCardAnimation";

export default function DaysWeatherComponent({ items, index }) {
    const fahrenheit = celsiusToFahrenheit(items?.temp)

    const { isToggledDegree } = useToggleDegreeStore();


    return (
        <DayCardAnimation index={index}>
            <div className='flex flex-col items-center justify-center py-2'>
                <h2 className='text-xl font-light text-gray-900 text-center'>{items?.valid_date}</h2>
                <h2 className='text-xl font-light text-gray-900 text-center'>{getDayOfWeekFromDate(items?.valid_date)}</h2>

                <div className='flex justify-center space-x-5 items-center'>
                    <img
                        className='w-24 h-auto'
                        src={`https://www.weatherbit.io/static/img/icons/${items?.weather?.icon}.png`}
                        alt={items?.weather?.description}
                    />
                    <p className='text-3xl text-gray-900'>{isToggledDegree ? `${fahrenheit}°F` : `${items.temp}°C`}</p>
                </div>
            </div>
            <p className='text-xl text-center py-1 font-light text-gray-900/70'>{items?.weather?.description}</p>
        </DayCardAnimation>

    )
}
