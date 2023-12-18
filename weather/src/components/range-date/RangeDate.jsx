import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { motion } from 'framer-motion';
import useWeatherDates from '../../store/useWeatherDate';
import formatDate from '../../functions/formatDate';


const RangeDate = () => {

    const [startDateRange, setStartDateRange] = useState(null);
    const [endDateRange, setEndDateRange] = useState(null);

    //global state
    const { setStartDate, setEndDate } = useWeatherDates();


    const handleStartDateRangeChange = (date) => {
        setStartDateRange(date);
    };

    const handleEndDateRangeChange = (date) => {
        setEndDateRange(date);
    };

    const fetchDataForDateRange = () => {
        // Calculate range date
        const dayDifference = Math.ceil((endDateRange - startDateRange) / (1000 * 60 * 60 * 24));

        if (dayDifference > 20) {
            alert('Maximum 20 days');
        } else {

            const startDayFormat = formatDate(startDateRange)
            const EndDayFormat = formatDate(endDateRange)

            setStartDate(startDayFormat);
            setEndDate(EndDayFormat);

        }
    };


    return (

        <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                type: "spring",
                delay: 2,
            }}
            className="flex flex-col items-center my-2">
            <DatePicker
                selected={startDateRange}
                onChange={handleStartDateRangeChange}
                selectsStart
                startDate={startDateRange}
                endDate={endDateRange}
                placeholderText="Start Date"
                className="p-2 border border-gray-300 rounded-md"
            />
            <DatePicker
                selected={endDateRange}
                onChange={handleEndDateRangeChange}
                selectsEnd
                startDate={startDateRange}
                endDate={endDateRange}
                placeholderText="End Date"
                className="p-2 mt-2 border border-gray-300 rounded-md"
            />
            <button
                onClick={fetchDataForDateRange}
                className="bg-green-500 font-extralight backdrop:blur-sm shadow-sm hover:shadow-lg ease-linear transition-all text-white p-2 mt-3 rounded-md cursor-pointer"
            >
                Find Out
            </button>
        </motion.div>
    );
};

export default RangeDate;
