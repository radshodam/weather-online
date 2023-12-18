
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const RangeDate = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleStartDateChange = (date) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
    };

    const fetchDataForDateRange = () => {
        // Calculate range date
        const dayDifference = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));

        if (dayDifference > 20) {
            alert('Maximum 20 days');
        } else {
            console.log('Start Date:', startDate);
            console.log('End Date:', endDate);
        }
    };

    return (
        <div>
            <DatePicker
                selected={startDate}
                onChange={handleStartDateChange}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                placeholderText="Start Date"
            />
            <DatePicker
                selected={endDate}
                onChange={handleEndDateChange}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                placeholderText="End Date"
            />
            <button onClick={fetchDataForDateRange}>Fetch Data</button>
        </div>
    );
};

export default RangeDate;
