import React from "react";
import { motion } from 'framer-motion';
import { celsiusToFahrenheit } from "../functions/celsiusToFahrenheit";
import { useToggleDegreeStore } from "../store/useToggleStore";
import { getDayOfWeekFromDate } from "../functions/getDayFromDate";

export default function SevenDaysWeather({ items, index }) {
    const fahrenheit = celsiusToFahrenheit(items?.temp)

    const { isToggledDegree } = useToggleDegreeStore();


    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                type: "spring",
                delay: index / 4,
            }}
            exit={{ opacity: 0 }}
            key={index}
            className="backdrop-blur-sm shadow-xl bg-black/50 w-80 h-52 min-w-[280px] lg:min-w-fit rounded-lg transition-all hover:shadow-md">

            <div className='flex flex-col items-center justify-center py-2'>
                <h2 className='text-xl font-light text-white text-center'>{items?.valid_date}</h2>
                <h2 className='text-xl font-light text-white text-center'>{getDayOfWeekFromDate(items?.valid_date)}</h2>

                <div className='flex justify-center space-x-5 items-center'>
                    <img
                        className='w-24 h-auto'
                        src={`https://www.weatherbit.io/static/img/icons/${items?.weather?.icon}.png`}
                        alt={items?.weather?.description}
                    />
                    <p className='text-3xl text-white'>{isToggledDegree ? `${fahrenheit}°F` : `${items.temp}°C`}</p>
                </div>
            </div>
            <p className='text-xl text-center py-1 font-light text-white/70'>{items?.weather?.description}</p>
        </motion.div>)
}
